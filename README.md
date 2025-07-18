<details>
<summary><strong>Metadata</strong></summary>

| Field         | Value                                                      |
|---------------|------------------------------------------------------------|
| **Title**     | README – PLASMODE Universal Desktop Modules Platform       |
| **Version**   | v1.0                                                       |
| **Created**   | 2025-07-18                                                 |
| **Updated**   | 2025-07-18                                                 |
| **Node**      | ModelingNode                                               |
| **Scope**     | Global                                                     |
| **Status**    | Active                                                     |

</details>


# PLASMODE – Universal Desktop Modules Platform

> **Dynamic, secure, and extensible Modules for your desktop.**
>
> Build your environment. Extend your OS. Shape your workflow.

---
[![Build](https://github.com/nsalvacao/plasmode/actions/workflows/ci.yml/badge.svg)](https://github.com/nsalvacao/plasmode/actions/workflows/ci.yml) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Coverage Status](https://img.shields.io/coveralls/github/nsalvacao/plasmode.svg)](#) [![Code Style](https://img.shields.io/badge/code%20style-eslint-brightgreen.svg)](#) [![Contributors](https://img.shields.io/github/contributors/nsalvacao/plasmode.svg)](https://github.com/nsalvacao/plasmode/graphs/contributors)


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [AI Integration](#ai-integration)
- [Quick Start (End Users)](#quick-start-end-users)
- [Modules Marketplace](#modules-marketplace)
- [Contributing](#contributing)
- [Developer Guide (Core & Modules)](#developer-guide-core--modules)
- [Architecture](#architecture)
- [Security](#security)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [References](#references)

---

## Overview

**PLASMODE** is a next-generation, open-source platform for creating, running, and managing cross-platform **Modules** — interactive desktop mini-apps that transform your desktop into a dynamic, personalized, and automated environment.

- **For end users:** Modular, beautiful, and secure desktop enhancements with a simple marketplace.
- **For module developers:** Powerful APIs (Node.js, Python), hot-reload, live debugging, permission system, automation, and AI integration.
- **For core contributors:** Modern, performant architecture (Rust/Tauri + .NET/Rust backend), robust IPC, shared runtime model, resource control, and seamless overlay integration for Windows, macOS, and Linux.

PLASMODE is not just a skinning engine. Each Module is a sandboxed mini-app, capable of system access (with user consent), running on a robust and audited core. It is inspired by Rainmeter, but is architected for the modern, multi-OS, AI-augmented desktop.

---

## Features

- **True Desktop Overlays:** Transparent, colorized, or interactive Modules, docked to your desktop or wallpaper — not just floating windows.
- **Granular Security:** All sensitive actions gated by manifest-based permissions and real-time user approval.
- **Marketplace:** In-app and web-based Module discovery, review, install, update, and trust management.
- **Automation & AI:** Scriptable via Node.js or Python, with built-in event bus, triggers, and access to local and cloud AI.
- **Performance-First:** Shared runtime workers reduce resource usage; real-time performance dashboard for Modules.
- **Cross-Platform SDK:** CLI tools, templates, docs, and validator for rapid Module development.
- **Community-Driven:** Open governance, contributions, and documentation. Everything in English for global reach.

---

## AI Integration

PLASMODE is designed for seamless AI augmentation, automation, and agent integration:

- **Local AI:** Any Module may access local LLMs (e.g., Llama.cpp, Mistral) via Python or Node.js logic, with user-approved permissions.
- **Cloud AI:** Easy integration with OpenAI, Hugging Face, and other cloud-based APIs — store your API keys securely in the Platform Shell, with per-Module key access policy.
- **Event-Driven Automation:** Trigger automation chains based on desktop, system, or user events, with AI decision-making at any step.
- **Security:** AI integrations are always sandboxed, permissions must be explicit, and API key management is handled by the core Engine (Modules never see the raw key, only the capability).
- **Use Cases:**
  - Automated summaries and insights
  - Intelligent notifications or recommendations
  - Desktop agents (“copilots”) interacting with other Modules
  - Data enrichment and ML-powered widgets
- **Developer Support:** Example Modules, SDK helpers, and documentation for both local and remote AI agents.

---

## Quick Start (End Users)

1. **Download & Install**
   - [See releases page / installer instructions]
2. **Discover Modules**
   - Browse the built-in Marketplace or import Modules from the community.
3. **Personalize Your Desktop**
   - Activate, configure, resize, and arrange Modules using the “My Desktop” dashboard.
4. **Manage Permissions**
   - Review and revoke Module permissions in real time.
5. **Resource & Security Dashboard**
   - Monitor resource usage and security status at a glance.
6. **Support**
   - In-app help, full docs, and community forum available.

---

## Modules Marketplace

- **Browse & Search:** By category, author, popularity, or tags.
- **One-Click Install & Update:** Integrated workflow for safe and verified Modules.
- **User Reviews & Ratings:** Trust the community and reputation system.
- **Module Packs:** Install themed collections for instant productivity.
- **Developer Portal:** Publish, update, and document your own Modules. SDK CLI and templates make it fast.

---

## Contributing

**PLASMODE is open to all contributors – from users to core engineers.**

### How to Get Involved
- **Report bugs or request features:** Use [GitHub Issues].
- **Suggest translations or docs improvements:** All content is English-first, but internationalization is welcomed.
- **Develop new Modules:** Use the SDK ([see docs]).
- **Core Development:** Work on the Engine, Shell, Backends, or SDK ([see architecture docs]).

### Guidelines
- Fork, branch from `dev`, open Pull Requests.
- All changes must be documented and tested.
- Respect the permissions/security model.
- Review the [CONTRIBUTING.md] and [CODE_OF_CONDUCT.md].
- New contributors should follow the [Onboarding Checklist](docs/onboarding_checklist.md).
- Use [Discussions] for design or community proposals.

---

## Developer Guide (Core & Modules)

### 1. Build & Run the Platform (Core)
- **Requirements:** Node.js (v18+), Python (3.10+), Rust, .NET 7+ (Windows), npm/yarn.
- `git clone https://github.com/nsalvacao/plasmode.git`
- `cd plasmode`
- `npm install` (installs Node and Python dependencies for SDK)
- `cargo tauri dev` (builds and runs the Tauri engine)

### 2. Create Your First Module
- See [Module SDK & API Reference] for:
  - Directory structure and manifest schema
  - Example UI (HTML/CSS/JS), logic (Node.js/Python)
  - Using the `plasmode` API (TypeScript definitions)
- Use the CLI: `plasmode-sdk new mymodule`
- Live reload and debug in the Developer Hub

### 3. Contribute to Core/Platform
- See [Platform Technical Architecture], [Shell UX/UI Spec], [Blueprint].
- Focus areas: Engine (Rust/Tauri), OS Integration (C++/.NET), Runtime Workers (Node/Python), SDK CLI/tools, security.
- All IPC, permission, and API surface changes must be documented and reviewed.

---

## Architecture

- **Engine (Rust/Tauri):** Main orchestrator – UI, IPC, permission enforcement, Module lifecycle, event bus.
- **OS Integration Backend (.NET, Rust/C++):** Native overlays, system hooks, notifications, windowing.
- **Runtime Workers (Node.js/Python):** Isolated logic execution for Modules; efficient shared process model.
- **Module System:** Self-contained directories (`module.json`, UI, logic, assets, permissions, versioning).
- **Marketplace:** Secure discovery, install, update, and user-driven trust for Modules.
- **SDK:** CLI, templates, docs, live test suite for Module development.

See:
- [Blueprint – Desktop Modules Platform - PLASMODE.md]
- [PLASMODE - Platform Technical Architecture.md]
- [PLASMODE - Platform Shell UX_UI Specification.md]
- [PLASMODE - Module SDK & API Reference.md]

---

## Security

- **Manifest-Based Permissions:** Every Module declares all sensitive needs in advance. User grants/revokes in real time.
- **Sandboxed Execution:** Modules never access the OS directly – all privileged calls brokered by the Engine.
- **API/Key Management:** Secure vault for all credentials; Modules never see raw keys.
- **Resource Monitoring:** Track CPU/memory per Module; global panic mode disables everything instantly.
- **Audited Code & Reviews:** Community and automated checks on Modules in Marketplace.

---

## Roadmap
See [Blueprint] and [Platform Technical Architecture].

1. **MVP Engine & Shell:** Core UI, overlay, Windows backend, Node.js Worker.
2. **Module API & SDK v1:** Permissions, events, documentation, CLI, example Modules.
3. **Marketplace Beta:** Module store, review system, ratings.
4. **Cross-Platform:** macOS/Linux overlays, Python Worker.
5. **Automation & AI:** Native support for local/cloud AI and agent modules.
6. **Community:** Contribution flows, docs, and governance.

---

## License
Apache 2.0 (see [LICENSE])

---

## Contact
- Maintainer: [Nuno Salvação](mailto:nexo-modeling@outlook.com)
- Project Home: [https://github.com/nsalvacao/plasmode](https://github.com/nsalvacao/plasmode)
- Join the discussion: [GitHub Discussions]

---

## References
- [Blueprint – Desktop Modules Platform - PLASMODE.md]
- [PLASMODE - Platform Technical Architecture.md]
- [PLASMODE - Platform Shell UX_UI Specification.md]
- [PLASMODE - Module SDK & API Reference.md]
- [Rainmeter](https://www.rainmeter.net/) (inspiration)
- [Tauri](https://tauri.app/)
- [.NET](https://dotnet.microsoft.com/)
- [Node.js](https://nodejs.org/)
- [Python](https://python.org/)

---

> _PLASMODE is an open, living project.  
> All docs, issues, and contributions are English-first for a global community._

