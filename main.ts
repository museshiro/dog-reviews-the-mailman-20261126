// Entry for "The Dog Reviews the Mailman" (make.fun, program/v1).
// Writes exactly one funny one-line dog review to /output/entry.txt.
// No relative writes: the sandbox working directory may be read-only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Five stars. He knocks, I bark, he runs \u2014 best game of tag ever, and he doesn't even know he's playing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
