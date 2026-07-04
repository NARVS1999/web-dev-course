# AGENTS.md — opencode teaching workspace

## What this repo is
An interactive web-development teaching workspace. No build step, no package.json, no dev server — everything is static HTML files served from `file://`. The student is a complete beginner on Windows using free tools (XAMPP, VS Code, Composer). Lessons use **Taglish** (Tagalog+English).

## Two sequence trackers exist — only one is live
- `teach/sequence-tracker/` — **current** (20 lessons completed, Phases 1–4 done)
- Root `sequence-tracker/` — **stale** (shows 7/22, predates this session). Ignore it.

## Lesson data single source of truth
Edit `teach/assets/lessons-data.js` to add/remove lessons. That file defines `window.LESSONS`, consumed by `lesson-nav.js` and `sidebar.js`.

## Adding a new lesson
1. Create `teach/lessons/00XX-name.html`
2. Update `teach/assets/lessons-data.js` (add entry to `window.LESSONS`)
3. Update `teach/sequence-tracker/overview.json`
4. Update `teach/sequence-tracker/lesson-plan.md`

## Script load order (every lesson, bottom of `<body>`)
```html
<script src="../assets/lessons-data.js"></script>
<script src="../assets/lesson-nav.js"></script>
<script src="../assets/sidebar.js"></script>
```
Order matters: `lessons-data.js` first (defines `window.LESSONS`), then `lesson-nav.js` + `sidebar.js` (both read it).

## ID extraction convention
Both nav scripts derive the current lesson ID via `filename.split('-')[0]` — so filenames must start with the ID (e.g., `0011-nextjs-foundations.html`).

## Shared stylesheet
`teach/assets/style.css` — linked as `<link rel="stylesheet" href="../assets/style.css">` from every lesson.

## Quick file map
- `teach/SKILL.md` — pedagogical rules (MISSION.md, NOTES.md, reference/, learning-records/)
- `teach/MISSION.md` — student's "why" (freelancing, complete beginner, Taglish, free tools, Windows)
- `teach/NOTES.md` — user preferences and style guide
- `teach/lessons/` — all 20 lesson HTML files (0001–0020)
- `teach/reference/` — 5 cheatsheets (HTML, CSS, JS, SQL, Git)
- `teach/learning-records/` — 7 records (0001–0007 only; 0008–0014 were never recorded)
- `teach/assets/` — style.css, lessons-data.js, lesson-nav.js, sidebar.js
- `guide.md` — the high-level roadmap (stable reference, not stale)

## Constraints to honor
- Complete beginner — no programming knowledge assumed
- Tools must be free, work on Windows, and run locally
- Taglish for explanations; English for code/technical terms
- Lessons self-contained, print-friendly, with quizzes and mini-projects

## What does not exist on disk (despite being described in conversation)
- `teach-default-setup/` — was discussed but never written to disk
- Learning records for lessons 0008–0014 were never created
