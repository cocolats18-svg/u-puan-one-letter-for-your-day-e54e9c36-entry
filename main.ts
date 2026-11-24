// One Letter for Your Day — make.fun bounty entry
//
// The entry is a single letter: "U".
// The word behind the letter is "ugh" — the groan that greets a day
// that went sideways before it began. Vivid, funny, and true to a
// real day, and the letter suits its word: U is the sound of the
// groan itself, a sharper pick than the obvious A-for-amazing.
//
// Writes exactly one character, "U", and nothing else, to
// /output/entry.txt, per the competition gate (UTF-8 text of
// 1 to 1 characters, not only white space).

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "U";

// Guard the gate: the entry must be exactly one non-whitespace
// character, so refuse to write anything else.
if ([...LETTER].length !== 1 || LETTER.trim() === "") {
  throw new Error("entry must be exactly one letter");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
