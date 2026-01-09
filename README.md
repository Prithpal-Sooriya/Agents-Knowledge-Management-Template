# Agent Knowledge Management Template

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge&logo=github)](https://github.com/Prithpal-Sooriya/Agents-Knowledge-Management-Template/generate)

> **A Shared Brain for Your Agents.**

This repository is a template for building a decoupled, persistent knowledge system for AI agents. It serves as a "remote brain"—a central place to store skills, context, and memories that can be accessed by any agent, anywhere.

## Why Use This Template?

### 1. The "Remote Brain" Architecture
**Keep your agents' knowledge separate from your project code.**
Instead of cluttering every project repository with repetitive prompt files and context docs, centralize them here. Your agents can pull the exact skills they need, when they need them, without being tied to a specific codebase.

### 2. Universal Compatibility
**Works with everything.**
Whether you're running local agentic workflows (like Antigravity) or using cloud-based agents, this structure is universally accessible via raw HTTP requests or git submodules. It is platform-agnostic by design.

### 3. Escape the Walled Gardens
**Your data, your format.**
Avoid locking your agent's intelligence into proprietary ecosystems like Claude Code. This template gives you full control over your agent's "mind" using standard Markdown files that you own, version, and manage.

---

## The Workflow: Spec-Driven RPEL

I believe functionality > hype. The traditional **ReAct** (Reason + Act) loop is often expensive and inefficient.
This template promotes a **Spec-Driven RPEL** workflow:

1.  **Research**: Agents analyze the problem space using tools.
2.  **Plan**: A Router Agent selects the right skills from this repo and generates a detailed Spec.
3.  **Execute**: Worker agents execute the plan in parallel, using the `knowledge/` from here.
4.  **Learn**: Agents reflect on the outcome and update their `memory/` in your repo via PRs.

---

## Structure

-   **`knowledge/` ("Skills")**: The library of capabilities. A Router Agent picks from these files to "install" skills into a worker agent for a specific task.
-   **`memory/` ("Context")**: The persistent working memory. Agents read this to understand who they are and what they've learned, and write back to it to save lessons for the future.
-   **`AGENTS.md`**: The entry point. The "bootloader" that tells an agent how to use this repository.

## Getting Started

1.  **Use this Template**: Click "Use this template" to create your own `agent-knowledge` repo.
2.  **Configure**: Update `AGENTS.md` with your repository URL.
3.  **Deploy**: Give your agents the `AGENTS.md` raw URL. They now have a brain.

---

## Example Usage

### 1. Planning Phase

```text
READ THIS AGENTS.md: {Path/Github raw}/AGENTS.md

PLAN

<Insert plan>
```

### 2. Execution Phase

```text
READ THIS AGENTS.md: {Path/Github raw}/AGENTS.md

EXECUTE

<insert skills URLs>
<Insert execution steps>
```
