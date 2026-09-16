# ILK Study Lab

**Understand deeply. Solve intelligently. Revise efficiently.**

A premium Class 10 (CBSE 2025-26) board + NEET-foundation learning system — a single-file vanilla web app (no build step, no dependencies) that works fully offline.

## Use it

Open the GitHub Pages site on any device. Add it to your home screen and it installs as a full offline-capable app.

## What's inside

- **7 subjects, 42 chapters** — Maths, Physics, Chemistry, Biology, English, Hindi, Social Science
- **Short Notes** (revision mode) & **Long Notes** (deep-understanding mode, 9-part structure)
- **Guided Question Solving** — 3-level hint ladder, never reveals answers early
- **Interpretation Trainer** — "what is the question asking?" practice
- **Adaptive Practice** — difficulty rises and falls with your performance
- **Timed Mock Tests** with strong/weak-area and mistake-pattern analysis
- **Mistake Notebook** with 9 mistake categories
- **Smart Revision** — spaced repetition (1 → 3 → 7 → 14 → 30 days)
- **Multi-component mastery tracking**, streaks, bookmarks, global search
- **Dark/light mode**, full offline PWA

All progress is stored locally in your browser (localStorage) — nothing leaves your device.

## Architecture

- `index.html` — tiny loader that fetches `app.html` and renders it
- `app.html` — the full single-file app, committed to the repo by the [sync workflow](.github/workflows/sync-app.yml) from the [latest release asset](https://github.com/irfan1385/ilk-study-lab/releases/latest/), so the app always loads same-origin
- `sw.js` — service worker: cache-first for the shell, stale-while-revalidate for the app bundle
- `manifest.webmanifest` + `icon.svg` — installable PWA metadata

To ship a new version: upload `app.html` to a new GitHub release → the workflow syncs it into the repo → Pages redeploys.

## Tech

One hand-rolled HTML/CSS/JS file (~250 KB): CSS-variable design system, hash-based router, localStorage persistence.

---
Built for Ilk's 2026 board prep.
