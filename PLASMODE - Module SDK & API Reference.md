# **PLASMODE \- Module SDK & API Reference**

Version: 1.0  
Audience: Module Developers  
Purpose: This document provides everything you need to know to build, package, and publish modules for the PLASMODE platform.

## **1\. Module Structure**

A module is a self-contained directory. The Platform Engine recognizes it by the presence of a module.json file at its root.

/MyFirstModule  
  ├── module.json         \# The manifest (REQUIRED)  
  ├── index.html          \# The UI entry point (REQUIRED)  
  ├── logic.js            \# The logic entry point (or e.g., logic.py)  
  └── /assets  
      ├── style.css  
      └── logo.svg

## **2\. The module.json Manifest**

This file defines your module's metadata, entry points, and security requirements.

### **Full Schema**

{  
  "id": "com.yourname.myfirstmodule", // Unique identifier, reverse domain notation recommended. REQUIRED.  
  "version": "1.0.0",                 // Semantic versioning. REQUIRED.  
  "name": "My First Module",          // Human-readable name. REQUIRED.  
  "author": "Your Name",              // Your name or organization.  
  "description": "A simple module that demonstrates the PLASMODE API.",  
  "ui": {  
    "entry": "index.html",            // Path to the UI entry file. REQUIRED.  
    "defaultSize": {                  // Initial size of the module window.  
      "width": 300,  
      "height": 150  
    }  
  },  
  "logic": {  
    "entry": "logic.js",              // Path to the logic entry file.  
    "runtime": "node"                 // "node" or "python". REQUIRED if logic entry is present.  
  },  
  "permissions": {                    // Security permissions requested by the module.  
    "os": {  
      "getSystemInfo": true,  
      "readFile": \["/path/to/specific/file.txt"\]  
    },  
    "network": {  
      "allowedHosts": \["api.example.com"\]  
    },  
    "events": {  
      "listenTo": \["spotify.songChanged"\],  
      "emit": \["myModule.dataUpdated"\]  
    }  
  }  
}

## **3\. The plasmode Global API**

A global plasmode object is automatically injected into the JavaScript context of your UI (index.html) and the scope of your logic script (logic.js). It is your sole interface to the Platform Engine. All functions are asynchronous and return a Promise.

### **API Definition (TypeScript)**

This definition file describes the available API surface.

// This object is available globally in both UI and Logic scripts.  
declare const plasmode: {

  /\*\*  
   \* Interact with the module's UI state and properties.  
   \* Available in both UI and Logic scripts.  
   \*/  
  ui: {  
    /\*\*  
     \* Set a value in the UI's reactive state store.  
     \* Can be called from logic to update the UI.  
     \* @param key The state key.  
     \* @param value The value to set.  
     \*/  
    setState(key: string, value: any): Promise\<void\>;

    /\*\*  
     \* Get a value from the UI's reactive state store.  
     \* @param key The state key.  
     \*/  
    getState(key: string): Promise\<any\>;

    /\*\*  
     \* Close the module.  
     \*/  
    close(): Promise\<void\>;  
  };

  /\*\*  
   \* Access OS-level information and functions.  
   \* All calls are mediated by the security broker based on manifest permissions.  
   \* Available only in Logic scripts.  
   \*/  
  os: {  
    /\*\*  
     \* Retrieves system performance information.  
     \* Requires "os.getSystemInfo" permission.  
     \*/  
    getSystemInfo(): Promise\<{  
      cpu: { usage: number };  
      memory: { used: number; total: number };  
    }\>;

    /\*\*  
     \* Reads the content of a file as a string.  
     \* Path must be explicitly allowed in "os.readFile" permission.  
     \*/  
    readFile(path: string): Promise\<string\>;  
  };

  /\*\*  
   \* Communicate with other modules via the event bus.  
   \* Available only in Logic scripts.  
   \*/  
  events: {  
    /\*\*  
     \* Listen for an event emitted by another module.  
     \* Requires "events.listenTo" permission for the specific event name.  
     \*/  
    on(eventName: string, callback: (data: any) \=\> void): Promise\<void\>;

    /\*\*  
     \* Emit an event for other modules to listen to.  
     \* Requires "events.emit" permission for the specific event name.  
     \*/  
    emit(eventName: string, data: any): Promise\<void\>;  
  };

  /\*\*  
   \* Access the module's private, persistent storage.  
   \* Data is stored securely by the Platform Engine.  
   \* Available only in Logic scripts.  
   \*/  
  storage: {  
    /\*\*  
     \* Persistently store a key-value pair for this module.  
     \*/  
    set(key: string, value: any): Promise\<void\>;

    /\*\*  
     \* Retrieve a value from this module's storage.  
     \*/  
    get(key: string): Promise\<any\>;  
  };  
};

## **4\. Example: A Simple System Info Module**

This example shows how the UI and Logic components work together.

**module.json**

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

**logic.js (Node.js Logic)**

// This function will be called by the UI to get data.  
async function fetchSystemInfo() {  
  console.log("Logic: Fetching system info...");  
  const info \= await plasmode.os.getSystemInfo();  
  // Update the UI's state with the new information.  
  await plasmode.ui.setState('sysInfo', info);  
  console.log("Logic: UI state updated.");  
}

// Fetch data every 2 seconds.  
setInterval(fetchSystemInfo, 2000);

// Also, run it once on startup.  
fetchSystemInfo();

**index.html (UI)**

\<\!DOCTYPE html\>  
\<html\>  
\<head\>  
  \<style\>  
    body { font-family: sans-serif; padding: 10px; }  
    \#cpu, \#mem { font-family: monospace; }  
  \</style\>  
\</head\>  
\<body\>  
  \<h3\>System Info\</h3\>  
  \<div\>CPU Usage: \<span id="cpu"\>Loading...\</span\>%\</div\>  
  \<div\>Memory: \<span id="mem"\>Loading...\</span\> MB\</div\>

  \<script\>  
    const cpuSpan \= document.getElementById('cpu');  
    const memSpan \= document.getElementById('mem');

    // This is the magic: listen for state changes initiated by the logic script.  
    // The 'plasmode.ui.onStateChange' is a special, implicit event listener.  
    // A simpler approach for the API could be just polling getState.  
    // Let's assume a simple polling mechanism for this example.

    async function updateUi() {  
        const state \= await plasmode.ui.getState('sysInfo');  
        if (state) {  
            cpuSpan.textContent \= state.cpu.usage.toFixed(2);  
            const memUsed \= (state.memory.used / 1024 / 1024).toFixed(0);  
            const memTotal \= (state.memory.total / 1024 / 1024).toFixed(0);  
            memSpan.textContent \= \`${memUsed} / ${memTotal}\`;  
        }  
    }

    // Update the UI every second by polling the shared state.  
    setInterval(updateUi, 1000);  
  \</script\>  
\</body\>  
\</html\>  
