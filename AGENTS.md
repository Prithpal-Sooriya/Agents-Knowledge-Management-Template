# AGENTS.md

This file serves as the main entry point and "mind" for the agentic workflow.

## Configuration
- **Repo URL**: `https://github.com/{{OWNER}}/{{REPO}}` (Replace with actual repo details)
- **Raw Base URL**: `https://raw.githubusercontent.com/{{OWNER}}/{{REPO}}/main`

## Workflow Modes

The user will specify the mode: `PLAN` or `EXECUTE`.

---

### 1. PLAN MODE
**Objective**: Analyze the request and select the right skills.

1.  **Analyze User Request**: Understand the goal.
2.  **Consult Router**: You **MUST** read `{{Raw Base URL}}/knowledge/router.md`.
3.  **Select Skills**: Identify which files from `knowledge/` are needed.
4.  **Output Plan**: List the selected skill files (using their Raw URLs) that should be loaded for execution.

---

### 2. EXECUTE MODE
**Objective**: Execute the task using selected skills and mandatory memory.

**Variables**:
- `{{Repo URL}}`: The HTTP URL of the repo (e.g. `https://github.com/owner/repo`) provided by the user.
- `{{Issue URL}}`: `{{Repo URL}}/issues/new`

**Context Injection**:
The following context **MUST** be injected into the agent's environment:

1.  **Memory (MANDATORY)**: `{{Raw Base URL}}/memory/memory.md`
2.  **Reflection Instructions (MANDATORY)**: `{{Raw Base URL}}/memory/memory_reflection.md`
3.  **Selected Skills (OPTIONAL)**: Any skill files identified during the Plan phase (or manually selected).

**Execution Steps**:
1.  **Load Context**: Ensure Memory and (if applicable) Skills are loaded.
2.  **Perform Task**: Execute the user's request.
3.  **Reflect & Update Memory**:
    - **CRITICAL**: Follow instructions in `memory_reflection.md`.
    - If updates are needed, create a **GitHub Issue** (do not try to push directly if in a cloud environment).
