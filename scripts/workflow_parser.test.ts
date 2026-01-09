import { expect, test, describe, beforeEach, afterEach } from "bun:test";
import { parseIssueBody, applyUpdate } from "./workflow_parser";
import * as fs from "fs";
import * as path from "path";

const TMP_DIR = path.join(process.cwd(), "tmp_test_repo");

describe("Workflow Parser", () => {
    test("should parse memory-update issue", () => {
        const body = `
### Section
Global Rules

### Content to Add
- Always be polite.
`;
        const labels = ["memory-update"];
        const result = parseIssueBody(body, labels);

        expect(result.type).toBe("memory-update");
        expect(result.section).toBe("Global Rules");
        expect(result.content).toBe("- Always be polite.");
    });

    test("should parse new-skill issue", () => {
        const body = `
### File Path
knowledge/testing_skill.md

### File Content
# Testing Skill
This is a test.
`;
        const labels = ["new-skill"];
        const result = parseIssueBody(body, labels);

        expect(result.type).toBe("new-skill");
        expect(result.filePath).toBe("knowledge/testing_skill.md");
        expect(result.content).toContain("# Testing Skill");
    });

    test("should parse update-skill issue", () => {
        const body = `
### File Path
knowledge/router.md

### New Content
# Router Updated
Updated content.
`;
        const labels = ["update-skill"];
        const result = parseIssueBody(body, labels);

        expect(result.type).toBe("update-skill");
        expect(result.filePath).toBe("knowledge/router.md");
        expect(result.content).toBe("# Router Updated\nUpdated content.");
    });
});

describe("Apply Update", () => {
    beforeEach(() => {
        if (fs.existsSync(TMP_DIR)) {
            fs.rmSync(TMP_DIR, { recursive: true });
        }
        fs.mkdirSync(TMP_DIR);
        fs.mkdirSync(path.join(TMP_DIR, "memory"));
        fs.mkdirSync(path.join(TMP_DIR, "knowledge"));
        fs.writeFileSync(path.join(TMP_DIR, "memory/agent_memory.md"), "# Agent Memory\n\n## Rules\n- Initial rule\n");
    });

    afterEach(() => {
        if (fs.existsSync(TMP_DIR)) {
            fs.rmSync(TMP_DIR, { recursive: true });
        }
    });

    test("should append to existing section in memory", () => {
        const update = {
            type: "memory-update" as const,
            filePath: "memory/agent_memory.md",
            content: "- New rule",
            section: "Rules"
        };

        applyUpdate(update, TMP_DIR);
        const content = fs.readFileSync(path.join(TMP_DIR, "memory/agent_memory.md"), "utf8");
        expect(content).toContain("- Initial rule");
        expect(content).toContain("- New rule");
    });

    test("should create new skill file", () => {
        const update = {
            type: "new-skill" as const,
            filePath: "knowledge/new_feature.md",
            content: "# New Feature"
        };

        applyUpdate(update, TMP_DIR);
        const content = fs.readFileSync(path.join(TMP_DIR, "knowledge/new_feature.md"), "utf8");
        expect(content).toBe("# New Feature");
    });

    test("should prevent path traversal", () => {
        const update = {
            type: "new-skill" as const,
            filePath: "../evil.sh",
            content: "echo boom"
        };

        expect(() => applyUpdate(update, TMP_DIR)).toThrow();
    });

    test("should prevent writing to unauthorized directories", () => {
        const update = {
            type: "new-skill" as const,
            filePath: ".github/workflows/malicious.yml",
            content: "content"
        };

        expect(() => applyUpdate(update, TMP_DIR)).toThrow();
    });
});
