# **PLASMODE \- Platform Shell UX/UI Specification**

Version: 1.0  
Audience: Frontend Developers, UI/UX Designers, Product Managers  
Purpose: This document defines the user experience (UX) and user interface (UI) for the PLASMODE Platform Shell. The "Shell" is the main dashboard application that users and developers interact with to manage, create, and debug modules.  
**Reference Documents:** This specification is built upon the principles and architectures defined in the Blueprint, Platform Technical Architecture, and Module SDK & API Reference.

## **1\. Core UX Principles**

The Platform Shell's design must adhere to the following principles:

1. **Clarity and Control:** The user must always understand what is happening and feel in complete control. This is paramount for permissions, performance, and module management. No "magic" actions.  
2. **Role-Based Design:** The interface must cater seamlessly to two primary roles: the **User** (managing their desktop) and the **Developer** (building modules). The transition between these roles should be fluid.  
3. **Information Transparency:** Key metrics like performance and security status should be readily accessible, not hidden in sub-menus.  
4. **Productive Workflow:** The Developer Hub should be a productive, integrated development environment (IDE-like), reducing the need for external tools for common tasks.  
5. **Modern & Clean Aesthetics:** The UI should be uncluttered, responsive, and visually appealing, reflecting the modern architecture of the platform.

## **2\. Main Layout: The Dashboard**

The Platform Shell will use a persistent sidebar for primary navigation and a main content area that displays the selected section.

### **Wireframe: Main Layout**

\+--------------------------------------------------------------------------+  
| PLASMODE v1.0                                                            |  
\+--------------------------------------------------------------------------+  
| Sidebar Nav  |                                                           |  
|--------------|                                                           |  
|              |                                                           |  
| \[ICON\] My    |                                                           |  
|   Desktop    |         \<--- Main Content Area \---\>                       |  
|              |                                                           |  
| \[ICON\] Dev   |                                                           |  
|   Hub        |                                                           |  
|              |                                                           |  
| \[ICON\] Market|                                                           |  
|   \-place     |                                                           |  
|              |                                                           |  
|--------------|                                                           |  
|              |                                                           |  
| \[ICON\]       |                                                           |  
|  Settings    |                                                           |  
|              |                                                           |  
\+--------------------------------------------------------------------------+

## **3\. Section: "My Desktop" (User Area)**

This is the default view for most users. It's focused on managing and configuring installed modules.

### **3.1. Module Management View**

A grid or list of all installed modules.

**Functionality:**

* **View:** Shows Module Name, Author, Version, and Status (e.g., Active, Inactive, Error).  
* **Actions:**  
  * A prominent toggle switch to activate/deactivate each module.  
  * Clicking a module opens its Detail View.

**Wireframe: Module Management**

\+--------------------------------------------------------------------------+  
| My Desktop \> All Modules                                  \[Search Box\]   |  
\+--------------------------------------------------------------------------+  
|                                                                          |  
| \+-----------------+  \+-----------------+  \+-----------------+            |  
| | Spotify Player  |  | System Monitor  |  | Weather Widget  |            |  
| | v1.2 by nsalv.. |  | v2.0 by core..  |  | v1.0 by user..  |            |  
| | Status: Active O|  | Status: Active O|  | Status: Inactive|            |  
| \+-----------------+  \+-----------------+  \+-----------------+            |  
|                                                                          |  
| \+-----------------+                                                      |  
| | Calendar        |                                                      |  
| | v1.0.1 by co..  |                                                      |  
| | Status: Error \! |                                                      |  
| \+-----------------+                                                      |  
|                                                                          |  
\+--------------------------------------------------------------------------+

### **3.2. Module Detail View**

Opened when a user clicks on a module from the management view. It uses a tabbed interface for clarity.

**Tabs:**

1. **Permissions:**  
   * A human-readable list of every permission the module has requested and been granted (e.g., "Access Network Host: api.spotify.com", "Read System Info").  
   * Each permission has a toggle to revoke it individually.  
   * A clear "Revoke All Permissions" button.  
2. **Configuration:**  
   * Renders a UI based on a config.json schema optionally provided by the module developer. This allows users to input API keys, select themes, set locations, etc., without editing code.  
3. **Performance:**  
   * Real-time graphs showing CPU and Memory usage for this specific module over the last 60 seconds.  
   * Helps users identify resource-hungry modules.  
4. **About:**  
   * Displays the module's description, author, version history, and a link to its Marketplace page.

## **4\. Section: "Developer Hub" (Developer Area)**

This section contains an integrated toolset for creating, debugging, and packaging modules.

### **4.1. My Projects View**

The landing page for the Dev Hub.

**Functionality:**

* Lists all local directories that are PLASMODE module projects.  
* **\[+ Create New Module\]:** A button that launches a wizard. The wizard asks for Module Name, ID, and Author, then uses the SDK to scaffold a new project from a template.  
* **\[Import Project\]:** Allows adding an existing local module directory to the workspace.

### **4.2. Module Editor View**

The core of the Developer Hub. This is an IDE-like interface for a selected project.

**Key Components:**

1. **Header Controls:**  
   * **Live Reload:** A master toggle to enable/disable hot-reloading for this module.  
   * **Run/Stop Logic:** Buttons to manually start or stop the module's logic script for debugging.  
   * **Package Module:** A one-click button to validate, lint, and package the module into a .plasmode file for distribution.  
2. **Manifest Editor (Left Panel):**  
   * A form-based UI for editing module.json. Fields for name, version, etc., with dropdowns for runtimes and a checklist/tag-input for permissions. This prevents syntax errors.  
   * A "Raw JSON" tab for developers who prefer to edit the source directly.  
3. **Logs Console (Bottom Panel):**  
   * A unified, real-time stream of logs.  
   * Captures console.log from both the module's UI (Tauri webview) and its logic script (Node.js/Python worker).  
   * Logs are tagged with their source (\[UI\], \[LOGIC\]) and can be filtered by level (info, warn, error).

**Wireframe: Module Editor View**

\+--------------------------------------------------------------------------+  
| Dev Hub \> My Projects \> System Monitor                    \[Live Reload O\]|  
\+--------------------------------------------------------------------------+  
| Manifest (\`module.json\`)   |                                             |  
|----------------------------|      \<-- Main area could show a live        |  
| Name: \[System Monitor\]     |          preview of the module or           |  
| ID:   \[com.core.sysmon\]    |          an integrated code editor.         |  
| Perms:\[x\] os.getSystemInfo |                                             |  
|      \[ \] network.all       |                                             |  
| ...                        |                                             |  
|--------------------------------------------------------------------------|  
| Logs Console                                     \[Filter: All\] \[Clear\]   |  
|--------------------------------------------------------------------------|  
| \[LOGIC\] Info: Fetching system info...                                    |  
| \[UI\]    Info: Rendering new state.                                       |  
| \[LOGIC\] Warn: API response took 250ms.                                   |  
\+--------------------------------------------------------------------------+

## **5\. Section: Global Settings**

Accessible from the sidebar, this area controls the platform itself.

**Pages:**

1. **General:**  
   * Platform settings: Launch on startup, select UI theme (light/dark), etc.  
2. **Performance:**  
   * A global dashboard showing the total CPU/Memory usage of the Platform Engine and all Runtime Workers combined.  
   * A list of the "Top 5 Most Resource-Intensive Modules" to help users manage their setup.  
3. **Security:**  
   * A global dashboard of all permissions granted across all modules.  
   * Highlights high-risk permissions (e.g., file system access, shell execution) and which modules have them.  
   * A "Panic Button" to immediately deactivate all modules and revoke all permissions.  
4. **AI & APIs:**  
   * A centralized and secure vault for users to store API keys (e.g., for OpenAI, Google Maps, weather services).  
   * Modules can then request access to *a specific key* via the permissions system, but they never get to read the key itself. The Engine handles the API call on the module's behalf, injecting the key server-side. This is a critical security feature.