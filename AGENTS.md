---

## title: "AGENTS – PLASMODE Universal Desktop Modules Platform" version: "v1.0" date\_created: 2025-07-18 last\_updated: 2025-07-18 node: ["ModelingNode"] purpose: ["Define agent behavior, responsibilities, and audit requirements for human and AI agents interacting with PLASMODE."] origin: ["Canvas"] reusable: true status: "active" dependencies: ["README.md", "SECURITY.md", "CONTRIBUTING.md", "Blueprint – Desktop Modules Platform - PLASMODE.md", "PLASMODE - Platform Technical Architecture.md"] tags: ["agents", "AI", "audit", "log", "compliance", "governance", "changelog"] scope: "global" privacy: "public" 

# AGENTS – PLASMODE Universal Desktop Modules Platform

This document establishes clear guidelines for all **Agents** (human or AI) that interact with, automate, or operate within the PLASMODE platform – including CI/CD bots, AI developers, automation scripts, and operational assistants.

---

## 1. Definition of Agents

- **Agent**: Any automated or semi-automated process, script, AI model, or human acting on behalf of the platform (ex: CI bots, documentation updaters, AI-powered maintainers, developer automation, assistants).
- **Scope**: Applies equally to human and AI agents; must comply with the same governance and security policies.

---

## 2. Agent Responsibilities

- **Compliance**: Agents must fully comply with all project policies, including the [SECURITY.md], [CONTRIBUTING.md], and [CODE\_OF\_CONDUCT.md].
- **Logging & Auditability**: Every non-trivial action taken by an agent must be:
  - Logged with timestamp, action, context, and outcome.
  - Registered in the technical audit trail at:
    - **Local:** `D:/GitHub/Plasmode/0. Info_Dev_Logs/Dev_Logs/`
    - **GitHub/Cloud:** `0. Info_Dev_Logs/Dev_Logs/` directory in the repository
- **Changelog Registration**: Any code or config change triggered or committed by an agent must be reflected in the `CHANGELOG.md` with agent attribution (ex: {AI-Agent}_[chande_scope]_{timestamp}.md).
- **Transparency**: All automated actions must be transparent and, where possible, reversible. Agents should not make destructive or obfuscated changes.
- **Consent and Security**:
  - No agent may approve/revoke permissions, install modules, or expose credentials without explicit user/maintainer authorization.
  - All agent operations must go through the same security brokers and permission checks as human contributors.
- **Documentation**: Each agent must have a clear description, ownership, operational scope, and configuration documented (see agent manifest template below).

---

## 3. Agent Manifest Template

Every agent must have a manifest file (YAML or JSON) registered in the repository, specifying:

- `id`: Unique agent identifier (reverse domain, e.g. ai.github.com.ci-bot)
- `type`: [human|AI|automation|integration|other]
- `owner`: Name/contact of responsible party
- `description`: Short summary of purpose
- `scope`: Which files/areas/actions the agent may operate on
- `audit_log`: Path to the agent’s audit logs
- `changelog_policy`: How and when changes are registered in the project CHANGELOG
- `security_reviewed`: [true|false], with last review date

**Example:**

```yaml
id: ai.plasmode.docs-bot
type: AI
owner: Nuno Salvação <nexo-modeling@outlook.com>
description: "Maintains documentation formatting and updates links."
scope: [docs/, README.md, CONTRIBUTING.md]
audit_log: 0. Info_Dev_Logs/Dev_Logs/docs-bot.log
changelog_policy: "Every automated commit must update CHANGELOG.md with summary."
security_reviewed: true
security_reviewed_date: 2025-07-18
```

---

## 4. Operational Best Practices for Agents

- Agents must never commit code or documentation that bypasses PR review, except for pre-approved automation (documented in the agent manifest).
- All agents must operate in English and maintain international accessibility.
- Any critical or irreversible action (e.g., mass deletions, global config changes) must require multi-party approval or manual confirmation.
- Agents should handle errors gracefully, logging context and outcomes for incident analysis.
- AI agents must be regularly reviewed and updated for compliance and capability.

---

## 5. AI Agent-Specific Guidelines

- All AI-powered agents must:
  - Clearly identify their output and actions as AI-generated.
  - Disclose any AI models or external APIs used in their agent manifest.
  - Never expose, log, or transmit secrets, credentials, or user data.
  - Only operate on data they are permissioned to access (enforced by manifest scope and broker).
- If generating or altering content/code, AI agents must:
  - Include clear commit messages and link to the relevant discussion/issue if applicable.
  - Be able to revert/undo their own changes when possible.

---

## 6. Change & Audit Log Requirements

- All agent activities must be logged in `0. Info_Dev_Logs/Dev_Logs/`, with one file per agent.
- CHANGELOG.md must include:
  - A summary of all agent-triggered changes, including date, agent id, and description.
  - Attribution for all automated commits.

---

## 7. Review & Updates

- All agent manifests and logs are reviewed periodically for compliance.
- Agents found violating these guidelines may be disabled or require further review.
- The AGENTS.md is a living document; all changes must be logged and referenced.

---

## 8. References & Related Docs

- [SECURITY.md]
- [CONTRIBUTING.md]
- [CODE\_OF\_CONDUCT.md]
- [CHANGELOG.md]
- [README.md]
- [PLASMODE - Platform Technical Architecture.md]

---

## Documents Created / To Create (For Project Coherence)

**Already Created:**

- README.md
- PLASMODE - Blueprint - Desktop Modules Platform.md
- PLASMODE - Platform Technical Architecture.md
- PLASMODE - Platform Shell UX\_UI Specification.md
- PLASMODE - Module SDK & API Reference.md
- CONTRIBUTING.md
- CODE\_OF\_CONDUCT.md
- SECURITY.md
- AGENTS.md (this document)

**To Create (Next):**

- CHANGELOG.md
- What is the SDK (features & requirements)
- Example Code/Logics (core and modules)
- Document: AI Integration (examples for module and core dev)
- GLOSSARY.md

