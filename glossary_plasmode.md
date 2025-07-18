---
title: "GLOSSARY – PLASMODE Universal Desktop Modules Platform"
version: "v1.0"
date_created: 2025-07-18
last_updated: 2025-07-18
node: ["ModelingNode"]
purpose: ["Provide authoritative definitions and clarification of all core concepts, terms, roles, and objects in PLASMODE. Reference for all documentation, onboarding, and dev workflow."]
origin: ["Canvas"]
reusable: true
status: "active"
dependencies: ["README.md", "Blueprint – Desktop Modules Platform - PLASMODE.md", "PLASMODE - Platform Technical Architecture.md", "PLASMODE - Module SDK & API Reference.md"]
tags: ["glossary", "definitions", "onboarding", "reference", "terminology", "compliance"]
scope: "global"
privacy: "public"
---

# GLOSSARY – PLASMODE Universal Desktop Modules Platform

A–Z alphabetical reference of all key terms, concepts, roles, and interfaces in the PLASMODE project.

---

**Agent** – Any automated (AI, script, bot) or human acting with operational privileges (CI/CD, AI assistants, maintainers) within PLASMODE. Agents must comply with AGENTS.md and log all actions.

**AI Broker** – The secure component in the Engine responsible for mediating all AI calls, handling credentials, and logging all requests and outputs.

**API** – The set of functions exposed to modules via the global `plasmode` object. Includes UI, OS, events, storage, and AI endpoints.

**Audit Log** – A persistent log (local/cloud) tracking all significant actions and changes, especially those by agents or automation. See AGENTS.md.

**Backend** – OS-specific integration process (.NET for Windows, Rust/C++ for Linux/macOS) providing overlays, notifications, and native system access to the Platform Engine.

**Blueprint** – Master architectural document detailing the platform’s scope, purpose, and core principles.

**CHANGELOG.md** – The file where all notable changes, releases, and agent activity are recorded, following Keep a Changelog standard.

**CI/CD** – Continuous Integration/Continuous Deployment: automated workflows (e.g., GitHub Actions) for building, validating, testing, and releasing code and modules.

**CONTRIBUTING.md** – Central guide for contributing to PLASMODE, including coding, reporting, review, and governance.

**Core (Platform Core)** – The Engine, Backends, and central components orchestrating modules, permissions, security, and APIs.

**Engine (Platform Engine)** – The main orchestrator (Rust/Tauri) process; manages UI, modules, lifecycle, IPC, permissions, overlays.

**Event Bus** – Asynchronous messaging system allowing modules and core to communicate via events.

**Frontend** – The UI/UX layer (Tauri webview) of the platform and modules, visible to the user.

**Manifest (module.json)** – The required metadata/config file for every module, declaring ID, version, permissions, logic, and UI entry points.

**Marketplace** – In-app or web-based portal for discovering, rating, and updating modules (and module packs).

**Module** – Self-contained package (UI + logic + manifest + assets) extending the platform; not a “skin” but a sandboxed mini-app.

**Module Pack** – A bundle of multiple modules, often themed or functionally grouped.

**Permissions** – Explicit rights declared in module.json, governing what actions a module may perform (OS, network, AI, events).

**Persistent Storage** – Secure, private data store per module, accessed via the `plasmode.storage` API.

**Platform Shell** – The main desktop app/dashboard for managing modules, permissions, and user/dev workflow.

**Plasmode SDK** – Toolset (CLI, templates, docs, validator) for developing, testing, and publishing modules.

**Runtime Worker** – Background process (Node.js, Python) executing logic for all modules of a given runtime, isolated and managed by the Engine.

**Sandbox** – Secure, isolated runtime for modules, enforcing separation from the OS and other modules.

**SDK** – See Plasmode SDK.

**Security Broker** – Core Engine component enforcing all permission checks and security policies at runtime.

**Shared Runtime Worker** – A single Node.js or Python process handling logic for multiple modules, improving efficiency and isolation.

**UI** – User Interface, either of the Platform Shell or of a module (delivered as a Tauri webview/HTML entry point).

---

## Documents Created / To Create (Project Coherence)
**Already Created:**
- README.md
- PLASMODE - Blueprint - Desktop Modules Platform.md
- PLASMODE - Platform Technical Architecture.md
- PLASMODE - Platform Shell UX_UI Specification.md
- PLASMODE - Module SDK & API Reference.md
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- SECURITY.md
- AGENTS.md
- CHANGELOG.md
- SDK – What is the SDK? (features & requirements)
- Examples – Code and Logic (core & modules)
- AI Integration
- GLOSSARY.md (this document)

