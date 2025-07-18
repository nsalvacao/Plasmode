# 1.0.0 (2025-07-18)


### Bug Fixes

* **ci:** adjust TruffleHog args and ESLint config ([a8c19a3](https://github.com/nsalvacao/Plasmode/commit/a8c19a3011401a6efdcb9df69c29f83d3942e423))
* **ci:** update workflows and config ([f2b05f8](https://github.com/nsalvacao/Plasmode/commit/f2b05f807c3577af3fbf85f53189afcd901c3371))


### Features

* bootstrap project structure and ci ([110ed1c](https://github.com/nsalvacao/Plasmode/commit/110ed1c00f029a219df7db6dc22f66d242709a26))

---
title: "CHANGELOG – PLASMODE Universal Desktop Modules Platform"
version: "v1.0"
date_created: 2025-07-18
last_updated: 2025-07-18
node: ["ModelingNode"]
purpose: ["Document all notable changes, releases, and agent activity in PLASMODE. Aligned with keepachangelog.com and DevOps best practices."]
origin: ["Canvas"]
reusable: true
status: "active"
dependencies: ["README.md", "AGENTS.md", "SECURITY.md"]
tags: ["changelog", "release", "audit", "devops", "agent-attribution"]
scope: "global"
privacy: "public"
---

# CHANGELOG – PLASMODE Universal Desktop Modules Platform

All notable changes to this project will be documented in this file. This project adheres to [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and [Semantic Versioning](https://semver.org/).

---

## [Unreleased]
### Added
- Initial creation of CHANGELOG.md
- Placeholder for future updates
- [AI-Agent: ai.github.codex] Initialized project structure, CI workflows, example module, tests, and .gitignore (2025-07-18)
- [AI-Agent: ai.github.codex] Added linter configs, release automation, dependabot, onboarding docs and AI test templates (2025-07-18)
- [AI-Agent: ai.github.codex] Added pylint and globals dependencies for linting (2025-07-18)
- [AI-Agent: ai.github.codex] Added @semantic-release/changelog dev dependency (2025-07-18)
- [AI-Agent: codex] Created Rust workspace and `engine` crate with Tauri boilerplate (2025-07-18)
- [AI-Agent: codex] Removed binary icons and clarified Tauri dev commands in README (2025-07-18)

### Changed
- [AI-Agent: ai.github.codex] Migrated ESLint to flat config and updated security workflow checkout (2025-07-18)
- [AI-Agent: ai.github.codex] Set Node.js version to 18.x in CI and enforced Node >=18 via package.json engines (2025-07-18)
- [AI-Agent: ai.github.codex] Converted ESLint config to CommonJS to resolve ESM loading errors (2025-07-18)
- [CI/CD-Agent: github-actions-bot] Updated TruffleHog action inputs to use `args` (2025-07-18)

### Fixed
- [CI/CD-Agent: github-actions-bot] Workflow permissions and ESLint config adjustments (2025-07-18)
- [CI/CD-Agent: github-actions-bot] Set full Git history in security workflow to prevent TruffleHog errors (2025-07-18)

---

## [1.0.0] – 2025-07-18
### Added
- PLASMODE initial platform structure and documentation
- All core documents: README, Blueprint, Platform Technical Architecture, UX/UI Specification, Module SDK & API Reference, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, AGENTS
- Example modules and templates in SDK
- Semantic, role-based permission and logging architecture

### Changed
- N/A

### Deprecated
- N/A

### Removed
- N/A

### Fixed
- N/A

### Security
- Core security guidelines implemented (see SECURITY.md)

---

## Agent/AI Activity Attribution Examples
- `[AI-Agent: ai.plasmode.docs-bot] Updated links in documentation and refactored README (2025-07-18)`
- `[CI/CD-Agent: github-actions-bot] Deployed version 1.0.0 to production (2025-07-18)`

---

## How to Use this Changelog
- **All commits or PRs that introduce, change, or fix anything in the codebase, docs, or configs must be reflected here.**
- **Agent actions** (including AI) must be tagged with the agent id and type as per AGENTS.md and have clear, timestamped entries.
- **Follow semantic versioning:** [MAJOR].[MINOR].[PATCH] (e.g., 1.0.0, 1.1.0, 1.1.1)
- **Every release must be documented with a summary of changes.**

---

## References
- [AGENTS.md]
- [SECURITY.md]
- [CONTRIBUTING.md]
- [README.md]
- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
- [Semantic Versioning](https://semver.org/)

---

\n### AI/agent contribution
