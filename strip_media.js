/*
 * strip_media.js
 *
 * Removes every @media block from styles.css and writes the
 * cleaned file back.  Also:
 *   1. Fixes `overflow: hidden` on the html/body rule →
 *      `overflow-x: hidden; overflow-y: auto;` so the whole
 *      page is scrollable on mobile.
 *   2. Removes orphaned comments that sit immediately above
 *      an @media block.
 *   3. Collapses runs of 3+ blank lines into a single blank.
 *
 * The media-query content itself is preserved verbatim in
 * mobile.css (created separately).
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "styles.css");
let content = fs.readFileSync(filePath, "utf8");

// ── 1. Fix overflow: hidden on html, body ───────────────────
content = content.replace(
  /(html,\s*body\s*\{[^}]*?)overflow:\s*hidden;([^}]*\})/,
  "$1overflow-x: hidden;\n  overflow-y: auto;$2"
);

// ── 2. Strip every @media block ──────────────────────────────
let lines = content.split("\n");
let output = [];
let inMedia = false;
let depth = 0;
let removedCount = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let trimmed = line.trim();

  if (inMedia) {
    // Count braces on this line
    let opens = (line.match(/{/g) || []).length;
    let closes = (line.match(/}/g) || []).length;
    depth += opens - closes;
    removedCount++;

    if (depth <= 0) {
      inMedia = false;
      depth = 0;
    }
    continue; // skip — inside a @media block
  }

  // Check for a new @media rule at the top level
  if (trimmed.startsWith("@media")) {
    // Remove preceding comment(s) + blank lines directly above
    let prevIdx = output.length - 1;
    while (prevIdx >= 0 && output[prevIdx].trim() === "") prevIdx--;
    if (
      prevIdx >= 0 &&
      output[prevIdx].trim().startsWith("/*") &&
      output[prevIdx].trim().endsWith("*/")
    ) {
      output.splice(prevIdx); // remove comment + trailing blanks
      removedCount++;
    }

    inMedia = true;
    let opens = (line.match(/{/g) || []).length;
    let closes = (line.match(/}/g) || []).length;
    depth += opens - closes;
    removedCount++;

    if (depth <= 0) {
      inMedia = false;
      depth = 0;
    }
    continue;
  }

  output.push(line);
}

// ── 3. Collapse 3+ consecutive blank lines ──────────────────
let result = output.join("\n");
result = result.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync(filePath, result, "utf8");
console.log("✓ Stripped " + removedCount + " lines of @media blocks from styles.css");
console.log("✓ Fixed overflow: hidden → overflow-x: hidden; overflow-y: auto;");
console.log("✓ Removed orphaned comments above @media blocks");
console.log("✓ Collapsed excessive blank lines");
console.log("Done. styles.css is now media-query-free.");
