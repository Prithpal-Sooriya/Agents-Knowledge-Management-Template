# Knowledge Router

This file is used by the **Planning Agent** to determine which skill files are necessary for the current user request.

## Available Skills

| Skill Name | File Path | Description |
| :--- | :--- | :--- |
| **Create New Skill** | `knowledge/create_skill.md` | Use this when the user wants to add a new knowledge/skill file to the repository. This includes creating the file and preparing a PR. |
| **Update Existing Skill** | `knowledge/update_skill.md` | Use this when the user wants to modify an existing knowledge/skill file. This includes reading the file, making changes, and preparing a PR. |

## Instructions for Planner

1. Analyze the user's request.
2. Check if the request involves:
    - Creating a new skill/knowledge file.
    - Updating an existing skill/knowledge file.
3. If a match is found, include the corresponding **File Path** in the `AGENTS.md` execution list.
4. If the request is generic or does not map to a specific skill, rely on the base context and general coding capabilities.
