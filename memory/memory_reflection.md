# Memory Reflection Instructions

**Goal**: At the end of every execution task, you must reflect on the work done and update the `memory/memory.md` file if new patterns or knowledge were discovered.

## Process

1.  **Reflect**:
    - Did you encounter any repeated errors?
    - Did the user express a specific preference?
    - Did you create a new useful pattern that should be reused?

2.  **Update Memory**:
    - If **YES**, formulate a concise addition to `memory/memory.md`.
    - If **NO**, you MUST output to the user: "No memory updates needed for this task." followed by a brief reason (e.g., "Standard refactor, no new patterns found").

3.  **Commitment (If YES)**:
    - Create a **GitHub Issue** in this repository.
    - **Construct Link**: `{{Issue URL}}?template=memory_update.yml&title=Memory+Update:+[Topic]&labels=memory-update`
    - **Title**: `Memory Update: [Topic]`
    - **Label**: `memory-update`
    - **Body**: Use the `memory_update` issue template if available, or simply state:
        - **Section**: (Global Rules / Rules)
        - **Content**: The markdown content to add.

    *Note: An automation workflow will pick this up and create a PR to update the file.*
