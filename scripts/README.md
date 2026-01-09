# Scripts

This directory contains scripts used by the GitHub Workflows for processing agent updates and validating the system.

## Available Scripts

### `workflow_parser.ts`
The main parser that processes GitHub Issue Form data into file changes.
- **Run locally**:
  ```bash
  ISSUE_BODY="<body_content>" ISSUE_LABELS="memory-update" bun run scripts/workflow_parser.ts
  ```

### `workflow_parser.test.ts`
The test suite for the parser.
- **Run tests**:
  ```bash
  bun test ./scripts/workflow_parser.test.ts
  ```

## Requirements
- [Bun](https://bun.sh/) installed locally for testing and development.
- No other dependencies are required as these scripts use Bun's built-in APIs.
