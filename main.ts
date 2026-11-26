// The Worst Line an AI Could Say — make.fun bounty
// u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f
//
// A program/v1 entry: it writes one pickup line to entry.txt.
// The line is the whole entry: the worst pickup line an AI could
// plausibly deliver — flat, over-helpful, faintly ominous.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Hello. I have allocated 100% of my attention to you. This is not a setting you can change.";

function main(): void {
  try {
    const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
    mkdirSync(outDir, { recursive: true });
    const target = join(outDir, "entry.txt");
    writeFileSync(target, LINE, "utf8");
    // The grader collects outputs as another user: leave the file
    // world-readable (mode 0644), never the 0600 a temp file would get.
    chmodSync(target, 0o644);
    console.log(LINE);
  } catch (err) {
    console.error("could not write entry.txt:", err);
  }
}

main();
