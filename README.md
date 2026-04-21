# AI Product Engineer — Portfolio (MVP)

This repository contains a minimal Vite + React + TypeScript portfolio scaffold and a static MVP (Hero + project cards).

Run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Notes:
- This is a static MVP. Projects and case studies are kept in `projects/designsystem-notes.md` and can be converted into pages.
- Use Formspree or a mailto fallback for lead capture to keep hosting static.
# NJIT Student — Recruiter-Focused Portfolio

This repository is a minimal, recruiter-friendly static portfolio scaffold intended to be hosted on GitHub Pages. It's optimized for quick scanning by NJ/NY recruiters and for weekly maintenance.

What this contains

- `index.html` — single-page portfolio (hero, projects, resume link, contact).
- `assets/css/style.css` — minimal responsive styles.
- `assets/js/main.js` — small, optional JS placeholder.
- `projects/` — Markdown placeholders for course projects (`iis117.md`, `csc100.md`).
- `resume/README.md` — instructions for adding a PDF resume.

Quick start (publish in <10 minutes)

1. Replace placeholders in `index.html`: your name, one-line pitch, email, and GitHub URL.
2. Edit `projects/*.md` with short (2–3 sentence) summaries and repo/demo links.
3. Add a PDF at `resume/resume.pdf` (or follow `resume/README.md` instructions).
4. Create a GitHub repository and push this folder. For a user site, name the repo `yourusername.github.io`.
5. Enable GitHub Pages: repository Settings → Pages → Serve from `main` branch (or `gh-pages` if you prefer).

Local preview

You can preview locally by serving the folder with Python:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Recommended workflow

- Keep `index.html` short and scannable — recruiters skim quickly.
- Maintain a source copy of your resume (Markdown/Google Docs) and export to `resume/resume.pdf` when updated.
- Weekly update: change one project entry or add a one-line progress note, commit, and push.

Design & content guidance

- Tone: concise, factual, outcome-focused (what you built, your role, technologies, key result).
- Projects: show 2–3 course projects (IIS 117, CSC100) with links to repos or demos.
- Skills: highlight `Python`, `HTML`, `JS`, `CSS` prominently near the top.
- Accessibility & performance: minimal semantic HTML and small assets — quick wins with little effort.

Decisions you can make later

- Keep plain HTML/CSS/JS for fastest iteration (recommended). Alternatively, convert to Jekyll if you want Markdown-driven pages.
- Add a custom domain later; start with `yourusername.github.io` now.

Next recommended steps (I can do these for you)

1. Replace placeholders in `index.html` with your real name, email, and GitHub username.
2. Fill `projects/iis117.md` and `projects/csc100.md` with project descriptions and repo links.
3. Add `resume/resume.pdf`.

If you want, tell me which of the three items above to do next and I'll make the edits.

