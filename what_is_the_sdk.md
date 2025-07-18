---
title: "SDK – What is the SDK? (Features & Requirements) – PLASMODE Universal Desktop Modules Platform"
version: "v1.0"
date_created: 2025-07-18
last_updated: 2025-07-18
node: ["ModelingNode"]
purpose: ["Define the essential features, requirements, best practices, and lifecycle of the PLASMODE SDK for module and platform development."]
origin: ["Canvas"]
reusable: true
status: "active"
dependencies: ["README.md", "CONTRIBUTING.md", "PLASMODE - Module SDK & API Reference.md", "SECURITY.md", "CHANGELOG.md"]
tags: ["sdk", "devops", "tooling", "templates", "validation", "testing", "automation", "best practices"]
scope: "global"
privacy: "public"
---

# SDK – What is the SDK? (Features & Requirements)

The **PLASMODE SDK** (Software Development Kit) is the comprehensive toolkit for building, testing, validating, and publishing Modules (and their integrations) for the PLASMODE Universal Desktop Modules Platform.

---

## 1. Purpose & Philosophy
- **Accelerate development:** Scaffold and validate new Modules quickly, consistently, and securely.
- **Ensure best practices:** Enforce platform conventions, security, and quality via tooling.
- **Streamline onboarding:** Lower the barrier to entry for new developers with templates, docs, and automation.
- **Enable DevOps workflows:** Integrate with CI/CD pipelines for validation, testing, and release.

---

## 2. Core Features
- **CLI Tooling**
  - `plasmode-sdk new <module-name>`: Scaffold a fully compliant Module directory (manifest, UI, logic, assets, tests)
  - `plasmode-sdk validate <path>`: Validate manifest, permissions, dependencies, and config
  - `plasmode-sdk build <module-dir>`: Build/package a Module for release
  - `plasmode-sdk test <module-dir>`: Run tests or sample workflows for a Module
  - `plasmode-sdk lint <module-dir>`: Lint code and config for platform style, security, and API usage
  - `plasmode-sdk publish <module-dir>`: Prepare and optionally upload a Module to the Marketplace
- **Project Templates**
  - Ready-to-use templates for Node.js, Python, hybrid, and AI-enabled Modules
  - Example manifest files, config schemas, and localization patterns
- **API Definitions & TypeScript Declarations**
  - Up-to-date TypeScript types and docs for the global `plasmode` object and APIs
- **Validator & Linter**
  - Automated checks for manifest, permissions, dependencies, and anti-patterns (no hardcoded secrets, no wildcards, valid paths, etc)
  - Warnings for deprecated APIs, excessive permissions, and resource usage
- **Test Harness**
  - Mock platform environment to run modules headless or in test mode
  - CI-ready scripts and config
- **Live Reload & Debugging Support**
  - Hot reload for UI and logic code (integrated with Developer Hub)
- **Docs & Onboarding**
  - Step-by-step guides, example modules, FAQ, troubleshooting
  - Integration with main platform docs for seamless developer experience
- **Automation & DevOps**
  - All SDK commands are CI/CD compatible
  - GitHub Actions (or equivalent) sample workflows for linting, testing, validating modules and codebase
- **Security & Compliance**
  - Built-in checks against SECURITY.md guidelines (no secrets, no direct OS access, permission minimization, etc)
  - Warnings on missing/incorrect agent manifests, incomplete audit logs

---

## 3. Minimum Requirements
- **Supported Platforms:** Windows, macOS, Linux (Node.js 18+, Python 3.10+ as required)
- **Dependencies:** Rust toolchain (for some templates), .NET (for Windows), npm/yarn
- **Documentation:** All commands, workflows, and templates must be documented and kept up to date
- **Versioning:** SDK releases follow Semantic Versioning and are reflected in the main CHANGELOG.md
- **Internationalization:** All template content, messages, and docs are English-first

---

## 4. Best Practices & DevOps Alignment
- **Automate early and often:** Use SDK commands in pre-commit hooks, CI, and PR validation
- **Single Source of Truth:** Only update APIs, templates, and conventions in the SDK with corresponding docs/CHANGELOG entries
- **Fail fast:** All validations and linting should fail the pipeline early on error
- **Security by default:** Ensure templates and generators follow SECURITY.md and CONTRIBUTING.md by design
- **Consistent style:** Enforce coding standards and style guides in all generated projects
- **Test everything:** Example modules and templates must be CI-tested with each SDK release
- **Transparency:** All generated/updated files must include changelog and agent attribution as needed

---

## 5. Example SDK Workflow
1. **Scaffold:** `plasmode-sdk new weather-widget`
2. **Develop:** Edit UI (HTML/JS), logic (Node/Python), update manifest and config
3. **Validate:** `plasmode-sdk validate weather-widget/`
4. **Test:** `plasmode-sdk test weather-widget/`
5. **Lint:** `plasmode-sdk lint weather-widget/`
6. **Build:** `plasmode-sdk build weather-widget/`
7. **Publish:** `plasmode-sdk publish weather-widget/`

---

## 6. References & Integration Points
- [Module SDK & API Reference]
- [SECURITY.md]
- [CONTRIBUTING.md]
- [CHANGELOG.md]
- [README.md]
- [AGENTS.md] (for automation and audit requirements)

---


