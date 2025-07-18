---

## title: "Examples – Code and Logic (Core & Modules) – PLASMODE Universal Desktop Modules Platform" version: "v1.0" date\_created: 2025-07-18 last\_updated: 2025-07-18 node: ["ModelingNode"] purpose: ["Provide practical, working code examples and reference logic for module developers and platform contributors. Cover UI, logic, permissions, AI integration, events, and DevOps workflows."] origin: ["Canvas"] reusable: true status: "active" dependencies: ["README.md", "PLASMODE - Module SDK & API Reference.md", "SECURITY.md", "SDK – What is the SDK? (features & requirements)"] tags: ["examples", "reference", "boilerplate", "permissions", "AI integration", "events", "DevOps", "onboarding"] scope: "global" privacy: "public"

# Examples – Code and Logic (Core & Modules) – PLASMODE Universal Desktop Modules Platform

A collection of working examples and reference logic for building and extending PLASMODE Modules, including:

- Basic UI and logic structure
- Permission model in action
- AI integration (local and cloud)
- Inter-module eventing
- Persistent storage
- Security best practices
- DevOps/CI integration patterns

All examples assume use of the SDK and compliance with [SECURITY.md] and [CONTRIBUTING.md].

---

## 1. Minimal "Hello World" Module

**module.json**

```json
{
  "id": "com.example.hello",
  "version": "1.0.0",
  "name": "Hello World",
  "ui": { "entry": "index.html" },
  "logic": { "entry": "logic.js", "runtime": "node" },
  "permissions": {}
}
```

**logic.js**

```js
// No permissions needed for simple UI updates
async function start() {
  await plasmode.ui.setState('msg', 'Hello, world!');
}
start();
```

**index.html**

```html
<!DOCTYPE html>
<html><body>
  <h3 id="msg">...</h3>
  <script>
    async function update() {
      const msg = await plasmode.ui.getState('msg');
      if(msg) document.getElementById('msg').textContent = msg;
    }
    setInterval(update, 500);
  </script>
</body></html>
```

---

## 2. Module Requesting OS Permissions

**module.json**

```json
{
  "id": "com.example.sysinfo",
  "version": "1.0.0",
  "name": "System Info",
  "ui": { "entry": "index.html" },
  "logic": { "entry": "logic.js", "runtime": "node" },
  "permissions": {
    "os": { "getSystemInfo": true }
  }
}
```

**logic.js**

```js
async function fetchSysInfo() {
  const info = await plasmode.os.getSystemInfo();
  await plasmode.ui.setState('info', info);
}
setInterval(fetchSysInfo, 2000);
fetchSysInfo();
```

**index.html**

```html
<!DOCTYPE html>
<html><body>
  <div id="cpu"></div><div id="mem"></div>
  <script>
    async function update() {
      const info = await plasmode.ui.getState('info');
      if(info) {
        document.getElementById('cpu').textContent = 'CPU: ' + info.cpu.usage + '%';
        document.getElementById('mem').textContent = 'Memory: ' + info.memory.used + '/' + info.memory.total;
      }
    }
    setInterval(update, 1000);
  </script>
</body></html>
```

---

## 3. Module With AI Integration (Cloud)

**module.json**

```json
{
  "id": "com.example.openai-summarizer",
  "version": "1.0.0",
  "name": "OpenAI Summarizer",
  "ui": { "entry": "index.html" },
  "logic": { "entry": "logic.js", "runtime": "node" },
  "permissions": {
    "ai": { "provider": "openai", "scope": ["summarize"] }
  }
}
```

**logic.js**

```js
// Use the secure AI broker; never embed API keys\async function summarize(text) {
  const summary = await plasmode.ai.call({ provider: 'openai', model: 'gpt-3.5-turbo', action: 'summarize', data: text });
  await plasmode.ui.setState('summary', summary);
}
plasmode.events.on('summarize', async (text) => summarize(text));
```

**index.html**

```html
<!DOCTYPE html>
<html><body>
  <textarea id="input"></textarea>
  <button onclick="summarize()">Summarize</button>
  <pre id="out"></pre>
  <script>
    function summarize() {
      const val = document.getElementById('input').value;
      plasmode.events.emit('summarize', val);
    }
    async function update() {
      const s = await plasmode.ui.getState('summary');
      if(s) document.getElementById('out').textContent = s;
    }
    setInterval(update, 500);
  </script>
</body></html>
```

---

## 4. Module With Local AI Integration (Llama.cpp, Python)

**module.json**

```json
{
  "id": "com.example.localai-demo",
  "version": "1.0.0",
  "name": "Local AI Demo",
  "ui": { "entry": "index.html" },
  "logic": { "entry": "logic.py", "runtime": "python" },
  "permissions": {
    "ai": { "provider": "local", "models": ["llama.cpp"] }
  }
}
```

**logic.py**

```python
import plasmode
async def ask_local_ai(prompt):
    response = await plasmode.ai.call({
        "provider": "local",
        "model": "llama.cpp",
        "action": "complete",
        "data": prompt
    })
    await plasmode.ui.set_state('response', response)
plasmode.events.on('ask', ask_local_ai)
```

**index.html**

```html
<!DOCTYPE html>
<html><body>
  <input id="prompt"><button onclick="ask()">Ask</button>
  <pre id="resp"></pre>
  <script>
    function ask() {
      const val = document.getElementById('prompt').value;
      plasmode.events.emit('ask', val);
    }
    async function update() {
      const r = await plasmode.ui.getState('response');
      if(r) document.getElementById('resp').textContent = r;
    }
    setInterval(update, 500);
  </script>
</body></html>
```

---

## 5. Inter-Module Eventing Example

**Module 1 (emitter):**

```js
// logic.js
plasmode.events.emit('update.dashboard', { widget: 'clock', value: Date.now() });
```

**Module 2 (listener):**

```js
// logic.js
plasmode.events.on('update.dashboard', data => {
  console.log('Dashboard update:', data);
  // process as needed
});
```

---

## 6. Persistent Storage Example

```js
// logic.js
await plasmode.storage.set('userTheme', 'dark');
const theme = await plasmode.storage.get('userTheme');
```

---

## 7. DevOps/CI Integration Example

**GitHub Actions:**

```yaml
name: CI Test Plasmode Module
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
    - name: Install SDK
      run: npm install -g plasmode-sdk
    - name: Validate Module
      run: plasmode-sdk validate ./module/
    - name: Run Tests
      run: plasmode-sdk test ./module/
```

---

## 8. Security & Best Practice Patterns

- Never use absolute file paths or embed credentials in logic
- Always validate and sanitize user or AI-generated content before using
- Use minimal permissions in manifest and explain why in module docs
- Test permission denial scenarios and error handling in logic
- Log security-relevant events for audit trail

---

## 9. More Examples & References

- [PLASMODE - Module SDK & API Reference.md]
- [SECURITY.md]
- [SDK – What is the SDK? (features & requirements)]
- [CONTRIBUTING.md]
- [AI Integration Examples (see next document)]

---


