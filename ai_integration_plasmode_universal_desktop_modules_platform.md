---
title: "AI Integration – Examples, Security & Workflow – PLASMODE Universal Desktop Modules Platform"
version: "v1.0"
date_created: 2025-07-18
last_updated: 2025-07-18
node: ["ModelingNode"]
purpose: ["Provide reference examples, workflows, security guidelines, and fallback mechanisms for AI integration in PLASMODE – for both module and core developers."]
origin: ["Canvas"]
reusable: true
status: "active"
dependencies: ["README.md", "SECURITY.md", "CONTRIBUTING.md", "Examples – Code and Logic (core & modules)"]
tags: ["AI integration", "agents", "cloud", "local", "workflow", "security", "fallback", "examples"]
scope: "global"
privacy: "public"
---

# AI Integration – Examples, Security & Workflow – PLASMODE Universal Desktop Modules Platform

This document clarifies best practices, provides working examples, and details security/fallback patterns for integrating AI (cloud, local, and agent-based) in PLASMODE – both at the module and platform (core) levels.

---

## 1. Core Principles for AI Integration
- **Security & Privacy First:** No module or core component may handle or expose raw API keys; all AI requests are brokered by the Engine.
- **Explicit Permissions:** All AI usage (provider/model/scope) must be declared in `module.json` and subject to user approval.
- **Auditability:** All AI calls should be logged with context, agent attribution, and outcome for audit purposes.
- **Fallback Handling:** Always check for AI service errors, quota limits, and provide meaningful fallback or error messages to users.
- **Agent Transparency:** All agent-driven/AI-generated output must be clearly identified and revertible where feasible.

---

## 2. AI Integration in Modules
### Example: Cloud AI (OpenAI Summarization)
**module.json**
```json
{
  "id": "com.example.openai-summarizer",
  "version": "1.0.0",
  "name": "OpenAI Summarizer",
  "logic": { "entry": "logic.js", "runtime": "node" },
  "permissions": {
    "ai": { "provider": "openai", "scope": ["summarize"] }
  }
}
```
**logic.js**
```js
async function summarize(text) {
  try {
    const summary = await plasmode.ai.call({ provider: 'openai', model: 'gpt-3.5-turbo', action: 'summarize', data: text });
    await plasmode.ui.setState('summary', summary);
  } catch (err) {
    await plasmode.ui.setState('summary', 'AI Error: ' + err.message);
    plasmode.log('error', { action: 'ai.summarize', error: err });
  }
}
plasmode.events.on('summarize', summarize);
```
### Example: Local AI (Llama.cpp)
**module.json**
```json
{
  "id": "com.example.localai-demo",
  "version": "1.0.0",
  "name": "Local AI Demo",
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
    try:
        response = await plasmode.ai.call({
            "provider": "local",
            "model": "llama.cpp",
            "action": "complete",
            "data": prompt
        })
        await plasmode.ui.set_state('response', response)
    except Exception as e:
        await plasmode.ui.set_state('response', f"AI Error: {str(e)}")
        await plasmode.log('error', { 'action': 'ai.complete', 'error': str(e) })
plasmode.events.on('ask', ask_local_ai)
```

---

## 3. AI Workflow in Platform Core (Engine/Broker/Agent)
### Example: Adding a New AI Provider (Platform Extension)
- Define the AI provider in the Engine config, implement an async handler, and expose it in the `plasmode.ai.call` API (with security review and logging):
```rust
// Pseudo-code for Rust (Engine)
fn handle_ai_call(request: AiRequest, context: ModuleContext) -> Result<AiResponse, AiError> {
  check_permissions(context, request.provider, request.model, request.action)?;
  let result = match request.provider.as_str() {
    "openai" => call_openai_api(request),
    "local" => call_local_llm(request),
    // ... add new providers here
    _ => Err(AiError::UnsupportedProvider),
  };
  log_ai_event(&context, &request, &result);
  result
}
```
### Example: Security/Agent Enforcement
- All requests are logged with timestamp, module/agent id, input/output (unless privacy setting is enabled).
- No direct access to keys or sensitive info; only the broker can call external APIs.
- If an agent triggers an action (e.g., AI bot updating docs), the `AGENTS.md` manifest is checked for allowed scope, and all actions are attributed in audit logs and the CHANGELOG.md.

---

## 4. Fallback and Error Handling Patterns
- Always use try/catch (or error-handling idioms) around AI calls.
- On API failure or quota exceeded, display clear error in the UI and offer alternative/manual workflow if possible.
- Modules should define a fallback message/handler in their logic to keep the UI usable even if AI fails.
- If the platform loses connection to a local AI service, prompt the user to restart/reconfigure or switch to cloud AI if available (subject to user approval and privacy).

---

## 5. Security Checklist for AI Integration
- [ ] Permissions for all AI models/providers are declared in `module.json`
- [ ] No API keys, secrets, or tokens in module code or logs
- [ ] All calls routed via secure broker/engine API
- [ ] AI calls and results are logged with action/context (unless privacy settings dictate otherwise)
- [ ] All outputs from AI are validated/sanitized before use in UI/automation
- [ ] Agents’ AI actions are attributed and revertible if feasible
- [ ] Fallback UI/message is implemented for AI errors

---

## 6. References & Related Docs
- [SECURITY.md]
- [AGENTS.md]
- [CONTRIBUTING.md]
- [Examples – Code and Logic (core & modules)]

---



