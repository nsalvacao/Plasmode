# **PLASMODE \- Platform Technical Architecture**

Version: 1.0  
Audience: Platform Core Developers  
Purpose: This document details the internal architecture of the PLASMODE Platform Engine. It describes how core components interact, communicate, and enforce security.

## **1\. Core Components Overview**

The Platform is composed of three primary process types:

1. **The Platform Engine (Rust/Tauri):** The main process. It is responsible for:  
   * Rendering the main UI ("Platform Shell") for managing modules.  
   * Rendering the webview-based UI for each individual Module.  
   * Managing the entire lifecycle of modules (load, unload, reload).  
   * Spawning and managing Runtime Worker processes.  
   * Acting as the central broker for all API calls and enforcing permissions.  
   * Interfacing with the native OS Integration Backend.  
2. \**OS Integration Backend (.NET on Windows, Rust/C++ on nix):* A native process or library that provides deep OS integration.  
   * **Responsibilities:** Creating and managing the true desktop overlay, handling global hotkeys, dispatching native notifications, and accessing low-level system information.  
   * **Communication:** Communicates with the Platform Engine via a private, high-speed IPC channel (e.g., named pipes on Windows, Unix domain sockets on Linux).  
3. **Runtime Workers (Node.js, Python):** Long-lived background processes that execute module logic.  
   * **Lifecycle:** A worker for a specific runtime (e.g., Node.js) is spawned only when the first module requiring it is loaded. It remains active as long as at least one module of its type is running, and is terminated otherwise to save resources.  
   * **Execution Model:** Each worker can execute code for multiple modules in an isolated fashion. This is the "Shared Runtime Worker" model.

## **2\. Inter-Process Communication (IPC): Engine ↔ Worker**

The communication between the Platform Engine (Rust) and the Runtime Workers (Node.js/Python) is critical for performance and security.

**Protocol:** **JSON-RPC 2.0 over stdio**.

* **Why stdio?** It is extremely lightweight, language-agnostic, and avoids network port allocation and conflicts. It is a classic, battle-tested pattern for parent-child process communication.  
* **Why JSON-RPC?** It provides a simple, standardized request/response and notification structure, making the API clean and easy to debug.

### **Workflow: Module Logic to Engine API Call**

1. A module's logic script (e.g., index.js) calls a plasmode API function: await plasmode.os.getSystemInfo();  
2. The plasmode API object (pre-injected into the module's context by the worker) translates this call into a JSON-RPC request payload.  
   {  
     "jsonrpc": "2.0",  
     "method": "os.getSystemInfo",  
     "params": {},  
     "id": "request-123"  
   }

3. The Runtime Worker writes this JSON string to its stdout stream.  
4. The Platform Engine (parent process) is constantly listening to the worker's stdout. It reads the line, parses the JSON, and identifies the request.  
5. **The Engine's Security Broker intercepts the call.** It checks the module's manifest (module.json) to verify that the permission os.getSystemInfo has been granted by the user.  
6. If permission is denied, the Engine immediately returns an error response.  
7. If permission is granted, the Engine executes the corresponding native Rust function.  
8. The Engine sends the result back to the worker via its stdin as a JSON-RPC response.  
   {  
     "jsonrpc": "2.0",  
     "result": { "cpu": 45, "memory": { "used": 8192, "total": 16384 } },  
     "id": "request-123"  
   }

9. The worker receives the response on its stdin, parses it, and resolves the original Promise in the module's code with the result.

## **3\. Security Architecture: The Permission Broker**

Security is non-negotiable and enforced at the Engine level. A module's logic *never* has direct access to the OS.

1. **Manifest as Contract:** The module.json file is the single source of truth for a module's required permissions.  
2. **User Consent:** On installation, the Platform Shell presents the requested permissions in a human-readable format. The user must consent before the module can be activated.  
3. **Engine as Enforcer:** The Security Broker within the Rust Engine is the only component that can perform privileged operations. Every single API call from a worker is validated against the granted permissions for the originating module before execution.  
4. **Parameter-level Validation:** For file system or network access, validation is granular. A permission like "network": {"allowedHosts": \["api.github.com"\]} means the Engine will reject any network request from that module to a different host.

## **4\. Overlay & UI Rendering**

* **Module UI:** Each module's UI is a separate Tauri webview. This provides strong isolation between modules at the rendering layer. The Engine manages the position, size, and properties (transparency, click-through) of these webviews.  
* **Desktop Overlay:** To achieve a true desktop-level overlay (that sits on the wallpaper), the OS Integration Backend is used.  
  * **On Windows:** The .NET backend will use native Win32 APIs (like SetParent) to attach the transparent host window to Progman or WorkerW, placing it directly on the desktop hierarchy.  
  * **On macOS/Linux:** Similar techniques involving native windowing system APIs will be used to create non-interactive, desktop-level windows.  
* The module webviews are then rendered *within* this master overlay window, ensuring seamless integration.