---
title: "CONTRIBUTING – PLASMODE Universal Desktop Modules Platform"
version: "v1.0"
date_created: 2025-07-18
last_updated: 2025-07-18
node: ["ModelingNode"]
purpose: ["Comprehensive guide for contributors, module developers, and core engineers in the PLASMODE project."]
origin: ["Canvas"]
reusable: true
status: "active"
dependencies: ["README.md", "Blueprint – Desktop Modules Platform - PLASMODE.md", "PLASMODE - Platform Technical Architecture.md", "PLASMODE - Platform Shell UX_UI Specification.md", "PLASMODE - Module SDK & API Reference.md"]
tags: ["contributing", "governance", "development", "modules", "AI integration", "SDK", "international"]
scope: "global"
privacy: "public"
---

# CONTRIBUTING – PLASMODE Universal Desktop Modules Platform

Welcome! PLASMODE is a fully open, community-driven project. We invite contributions from users, module developers, and core engineers worldwide. All collaboration is conducted in English.

---

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Contributing as a User](#contributing-as-a-user)
- [Contributing as a Module Developer](#contributing-as-a-module-developer)
- [Contributing to the Platform Core (Engine, Shell, SDK)](#contributing-to-the-platform-core-engine-shell-sdk)
- [Issue Reporting & Feature Requests](#issue-reporting--feature-requests)
- [Pull Requests](#pull-requests)
- [Coding Standards & Review](#coding-standards--review)
- [Documentation Contributions](#documentation-contributions)
- [Translations](#translations)
- [AI, Security & Permissions](#ai-security--permissions)
- [Community & Governance](#community--governance)
- [Resources & References](#resources--references)

---

## Code of Conduct
All contributors, maintainers, and community members must adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We strive for a welcoming, respectful, and inclusive environment.

## How to Contribute
- **Fork** this repository and branch from `dev`.
- **Make your changes** (features, fixes, docs, modules, etc).
- **Open a Pull Request** (PR) to the `dev` branch.
- **Describe** clearly what your PR does and reference any related issues.
- **All PRs must be reviewed and pass CI checks.**

## Contributing as a User
- **Report bugs, usability issues, or UX/UI feedback** using [GitHub Issues].
- **Request new features** with a detailed use case.
- **Suggest improvements** for accessibility or internationalization.
- **Engage** in [Discussions] to shape the platform's future.

## Contributing as a Module Developer
- **Read the [Module SDK & API Reference](docs/PLASMODE%20-%20Module%20SDK%20&%20API%20Reference.md) carefully.**
- **Use the SDK CLI** to scaffold new modules: `plasmode-sdk new mymodule`.
- **Module structure:** Each module must contain a `module.json`, UI entry (HTML/JS), and logic (Node.js/Python) as per SDK guidelines.
- **Declare permissions** clearly in your manifest. Only request what your module genuinely needs.
- **Test your module** using the Developer Hub and live reload tools.
- **Ensure** no sensitive user data is collected without explicit consent.
- **Publish** via PR to the `modules` directory or submit to the Marketplace via the Developer Portal.
- **Document** usage, config, permissions, and AI integration (if applicable).

## Contributing to the Platform Core (Engine, Shell, SDK)
- **Read the [Platform Technical Architecture](docs/PLASMODE%20-%20Platform%20Technical%20Architecture.md), [Blueprint], and [Shell UX/UI Specification] before contributing to core components.**
- **Focus areas:**
  - Engine (Rust/Tauri)
  - OS Integration Backend (.NET for Windows, Rust/C++ for Linux/macOS)
  - Runtime Workers (Node.js/Python)
  - Shared IPC/Event Bus
  - SDK CLI and tools
  - Security and permissions broker
- **All new features and bugfixes must include relevant tests and documentation updates.**
- **Discuss significant architecture changes in [Discussions] before submitting PRs.**
- **Follow the same review and branching strategy as modules.**

## Issue Reporting & Feature Requests
- **Use [GitHub Issues]** to report bugs, regressions, security issues, or to request features.
- When reporting a bug, **include OS/platform, steps to reproduce, logs, and expected vs. actual behavior**.
- Security issues may be disclosed privately (see [Security](SECURITY.md)).

## Pull Requests
- All code must be merged via Pull Request (PR) against the `dev` branch.
- **Include a descriptive title and summary**.
- **Link related issues**.
- **Pass all CI/build checks**.
- **One feature/fix per PR** where possible.
- Major architectural or breaking changes require prior discussion.

## Coding Standards & Review
- Use consistent code style (see `.editorconfig`, and language-specific style guides for Rust, Python, JS).
- All code must be **well-documented** (docstrings, JSDoc, or Rustdoc as appropriate).
- Write and run tests where applicable.
- **Every PR must be reviewed by at least one maintainer.**
- Core maintainers may request changes or clarification.

## Documentation Contributions
- **All docs are in English**.
- Improve clarity, coverage, or accuracy in [README], [SDK & API Reference], or architecture docs.
- Submit doc fixes or new guides via PRs.
- **Code examples** should match the actual API and latest platform version.

## Translations
- Platform UI and docs are English-first. Internationalization (i18n) is welcome.
- Submit translation PRs with clear language tags and fallback to English when in doubt.

## AI, Security & Permissions
- **Modules integrating AI (local or cloud) must disclose all models, endpoints, and API key requirements in the manifest and documentation.**
- All AI calls are sandboxed and permissioned via the Engine; never expose raw API keys or tokens in module code.
- Use the secure Platform Vault for all credentials and secret management.
- Be mindful of data privacy and only process user data with clear consent.
- Security-related contributions must reference the [Platform Technical Architecture] and, if urgent, notify maintainers directly.

## Community & Governance
- Join [Discussions] to propose ideas, design new features, or find collaborators.
- Follow the decision-making and roadmap updates published by the maintainers.
- All major changes, proposals, and accepted features will be documented in [Blueprint] and related technical docs.
- Regular community calls and feedback cycles are announced in the forum.

## Resources & References
- [README.md](README.md)
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

> _Thank you for helping shape PLASMODE!_
>
> For questions, join [Discussions] or reach out to the maintainers via [GitHub]._

