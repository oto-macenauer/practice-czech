# Procvičování češtiny

A static web app for practicing Czech language skills, designed for 2nd graders (7-year-olds). Deployable as GitHub Pages.

## Features

### Interactive Practice
- Tablet-first design with large, tap-friendly buttons
- No typing required — all exercises use multiple choice or tap-to-order
- Instant visual feedback (correct/incorrect) after each answer
- Progress tracking with per-section score breakdown

### Printable Tests
- Clean, print-optimized layout with name/date/class header
- Written input blanks, matching columns, and answer lines
- Works well on A4 paper

## Test Topics

**Quarterly test — 31 March 2026:**
1. Tvrdé a měkké souhlásky (i/y)
2. Psaní u, ů, ú
3. Dělení slov na slabiky
4. Synonyma
5. Antonyma
6. Řazení slov ve větách
7. Čtení s porozuměním

## Usage

### Run Locally

Open `index.html` directly in a browser — no server needed. Alternatively, use any local server:

```bash
# Python
python -m http.server 8000

# Node.js (npx, no install)
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Deploy to GitHub Pages

1. Push to `main` branch
2. Go to Settings > Pages
3. Set source to root of `main` branch

## Adding New Tests

Create a new file in `data/` (e.g., `data/test-2026-06-30.js`) following the existing format, then add a `<script>` tag in `index.html`. The home screen auto-lists all registered tests.

## Tech Stack

Plain HTML, CSS, and JavaScript — no build tools, no dependencies.

## License

[MIT](LICENSE)
