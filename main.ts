// Real-Life Patch Notes: The Comedy Changelog — make.fun bounty entry.
// Writes one single-line patch note (max 160 characters) to entry.txt.
// Node stdlib only. Run: OUTPUT_DIR=/tmp/patch-notes-out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "v1.9.4: patched a memory leak where entering a room instantly deleted the reason you went in there.";

function validate(text: string): void {
  const len = [...text].length; // code points, not UTF-16 units
  if (len < 1 || len > 160) {
    throw new Error(`entry must be 1-160 characters, got ${len}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/[\n\r]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (!/^v\d+\.\d+\.\d+:/.test(text)) {
    throw new Error("entry must start with a version tag like v1.9.4:");
  }
  // Gate mirrors the sealed scorer: UTF-8 text, 1-160 chars, not only whitespace.
  const bytes = Buffer.byteLength(text, "utf8");
  if (bytes < 1) {
    throw new Error("entry must not be empty");
  }
}

validate(TEXT);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} chars to ${join(outDir, "entry.txt")}`);
