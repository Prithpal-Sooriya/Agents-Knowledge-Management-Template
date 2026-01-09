import * as fs from 'fs';
import * as path from 'path';

export interface IssueUpdate {
    type: 'memory-update' | 'new-skill' | 'update-skill';
    filePath: string;
    content: string;
    section?: string;
}

export function parseIssueBody(body: string, labels: string[]): IssueUpdate {
    const lines = body.split('\n');
    const sections: Record<string, string> = {};
    let currentKey = '';

    for (const line of lines) {
        if (line.startsWith('### ')) {
            currentKey = line.replace('### ', '').trim().toLowerCase();
            sections[currentKey] = '';
        } else if (currentKey) {
            sections[currentKey] += line + '\n';
        }
    }

    // Clean up whitespace
    for (const key in sections) {
        sections[key] = sections[key].trim();
    }

    if (labels.includes('memory-update')) {
        return {
            type: 'memory-update',
            filePath: 'memory/agent_memory.md',
            content: sections['content to add'] || sections['content'] || '',
            section: sections['section'] || 'Rules'
        };
    }

    if (labels.includes('new-skill')) {
        return {
            type: 'new-skill',
            filePath: sections['file path'] || sections['filepath'] || '',
            content: sections['file content'] || sections['content'] || ''
        };
    }

    if (labels.includes('update-skill')) {
        return {
            type: 'update-skill',
            filePath: sections['file path'] || sections['filepath'] || '',
            content: sections['new content'] || sections['content'] || ''
        };
    }

    throw new Error('Unsupported issue type or missing labels');
}

export function applyUpdate(update: IssueUpdate, repoRoot: string) {
    const fullPath = path.join(repoRoot, update.filePath);

    // Security check: ensure the path is within the repo and in allowed directories
    if (!fullPath.startsWith(repoRoot)) {
        throw new Error('Invalid file path: path must be within the repository root');
    }

    const allowedDirs = ['memory', 'knowledge'];
    const isAllowed = allowedDirs.some(dir => update.filePath.startsWith(dir));
    if (!isAllowed) {
        throw new Error(`Invalid file path: path must be in one of the following directories: ${allowedDirs.join(', ')}`);
    }

    if (update.type === 'memory-update') {
        let content = fs.readFileSync(fullPath, 'utf8');
        const marker = `## ${update.section}`;
        if (content.includes(marker)) {
            // Append to the section. For simplicity, we'll just append it to the end of the file 
            // if the section is the last one, or insert it before the next section.
            const lines = content.split('\n');
            const sectionIndex = lines.findIndex((l: string) => l.startsWith(marker));
            let insertIndex = lines.findIndex((l: string, i: number) => i > sectionIndex && l.startsWith('## '));

            if (insertIndex === -1) insertIndex = lines.length;

            lines.splice(insertIndex, 0, '', update.content, '');
            fs.writeFileSync(fullPath, lines.join('\n'));
        } else {
            // If section not found, just append to the end
            fs.appendFileSync(fullPath, `\n\n## ${update.section}\n${update.content}\n`);
        }
    } else {
        // new-skill or update-skill: overwrite/create
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(fullPath, update.content);
    }
}

// If run directly, parse arguments
if (import.meta.main) {
    try {
        const body = process.env.ISSUE_BODY || '';
        const labels = (process.env.ISSUE_LABELS || '').split(',').map((s: string) => s.trim());
        const repoRoot = process.cwd();

        const update = parseIssueBody(body, labels);
        console.log(`Parsed update: ${JSON.stringify(update, null, 2)}`);
        applyUpdate(update, repoRoot);
        console.log('Update applied successfully');
    } catch (error) {
        console.error('Error processing update:', error);
        process.exit(1);
    }
}
