// Mirrors the flashcard submodule's pronunciation clips into this project's
// `public/`, so they are served here too.
//
// The submodule's pages are imported as React components
// (app/projects/japanese-flashcards/page.tsx), but importing a component brings
// none of its `public/` directory with it — Next only ever serves the `public/`
// of the project being built. The app asks for its clips at the absolute path
// `/audio/ja/<stem>.mp3` (see the submodule's app/lib/speech.ts), which under
// this site resolves to rn-portfolio/public/audio/ja/, so without this copy
// every clip 404s. That failure is silent by design: speech.ts treats a clip it
// cannot fetch as "no clip" and falls back to the Web Speech API, so the bug
// shows up as the wrong voice in Chrome and Edge — which bundle voices — and as
// silence in Firefox, which has no Japanese voice to fall back to.
//
// Copying rather than symlinking: Windows needs elevation for directory
// symlinks, and Next's static file serving does not follow them reliably.
//
// Run automatically before `dev`, `dev:lan`, and `build` via npm pre-scripts.
// The copy is generated output and is gitignored — the clips are committed in
// the submodule, which stays their only source of truth.

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "projects", "japanese-flashcard-app", "public", "audio");
const DEST = join(ROOT, "public", "audio");

/** Every file under `dir`, as paths relative to it. */
function walk(dir, base = dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full, base) : [relative(base, full)];
  });
}

if (!existsSync(SRC)) {
  // The submodule is not checked out. The build will fail on its own imports
  // long before audio matters, so say what is wrong and let it get there.
  console.warn(
    "sync-flashcard-audio: projects/japanese-flashcard-app/public/audio is missing.\n" +
      "  Run `git submodule update --init --recursive` to check the submodule out.",
  );
  process.exit(0);
}

mkdirSync(DEST, { recursive: true });

// `force` overwrites, so a regenerated clip replaces the stale copy. Clips are
// content-addressed by the text they speak, so editing a card yields a new
// filename rather than new bytes under the old one — but --force re-renders in
// the submodule's generator do rewrite a stem in place, and this handles that.
cpSync(SRC, DEST, { recursive: true, force: true });

// Copying alone never removes anything, so a clip deleted upstream would linger
// here forever and ship in the build. Prune whatever the source no longer has.
const wanted = new Set(walk(SRC));
let pruned = 0;
for (const name of walk(DEST)) {
  if (wanted.has(name)) continue;
  rmSync(join(DEST, name));
  pruned += 1;
}

const bytes = walk(DEST).reduce((sum, name) => sum + statSync(join(DEST, name)).size, 0);
console.log(
  `sync-flashcard-audio: ${wanted.size} clip(s), ${(bytes / 1_048_576).toFixed(1)} MiB` +
    (pruned > 0 ? `, ${pruned} stale file(s) removed` : ""),
);
