# CLAUDE.md

## Project Overview

Czech language practice app for 2nd graders (7-year-olds). Static site deployed via GitHub Pages.

## Architecture

- **No build tools** — plain HTML/CSS/JS served as-is
- **Hash-based routing** — `#/`, `#/practice/:id`, `#/print/:id`, `#/results/:id`
- **Global test registry** — data files push to `window.TESTS` array (avoids ES module CORS issues on `file://`)
- **Single-page app** — four view containers toggled by router

## File Structure

```
index.html          — SPA shell, script tags for test data
style.css           — All styles including @media print
app.js              — Router, renderers (per section type), scoring
data/
  test-YYYY-MM-DD.js — One file per test, self-registering
```

## Adding a New Test

1. Create `data/test-YYYY-MM-DD.js` following the format in existing test files
2. Add a `<script src="data/test-YYYY-MM-DD.js"></script>` tag in `index.html` before `app.js`
3. The home screen auto-lists all tests in `window.TESTS`

## Section Types

Each section in a test has a `type` that determines rendering:

| Type | Practice Mode | Print Mode |
|------|--------------|------------|
| `fill-choice` | Tap correct letter | Blank with choices shown |
| `syllable-split` | Tap correct split | Blank to write split |
| `match-pair` | Tap matching word | Two-column matching |
| `word-order` | Tap words to build sentence | Scrambled words + answer line |
| `reading-comprehension` | Passage + multiple choice | Passage + answer lines |

## Content Guidelines

- Target audience: 2nd grade, 7-year-olds
- Use simple, common vocabulary
- Keep sentences short (max ~8 words)
- Reading passages: 4-6 simple sentences
- All content in Czech
