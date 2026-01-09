// Minimal type definitions to suppress editor squiggles in a lean environment.

interface ImportMeta {
    main: boolean;
}

declare var process: {
    env: Record<string, string | undefined>;
    exit(code?: number): never;
    cwd(): string;
};

declare var describe: (name: string, fn: () => void) => void;
declare var test: (name: string, fn: () => void | Promise<void>) => void;
declare var beforeEach: (fn: () => void | Promise<void>) => void;
declare var afterEach: (fn: () => void | Promise<void>) => void;
declare var expect: (value: any) => any;

declare module "fs" {
    export function readFileSync(path: string, options?: any): string;
    export function writeFileSync(path: string, content: string): void;
    export function appendFileSync(path: string, content: string): void;
    export function existsSync(path: string): boolean;
    export function mkdirSync(path: string, options?: any): void;
    export function rmSync(path: string, options?: any): void;
}

declare module "path" {
    export function join(...paths: string[]): string;
    export function dirname(path: string): string;
}

declare module "bun:test" {
    export var expect: any;
    export var test: any;
    export var describe: any;
    export var beforeEach: any;
    export var afterEach: any;
}
