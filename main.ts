import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A Friday deploy is a fortune that always comes true — just not the one you wanted.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`fortune must be 1-120 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
