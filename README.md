# ILK Study Lab

**Understand deeply. Solve intelligently. Revise efficiently.**

A premium Class 10 (CBSE 2025-26) board + NEET-foundation learning system — a single-file vanilla web app (no build step, no dependencies) that works fully offline.

## Use it

Open the GitHub Pages site on any device: add it to your home screen and it installs as a full offline-capable app.

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

- `index.html` — a tiny loader that fetches the app bundle and renders it
- `app.html` (release asset) — the full single-file app, hosted as a [release asset](https://github.com/irfan1385/ilk-study-lab/releases/latest/) so it can be updated without touching the site shell
- `sw.js` — service worker caching the shell (cache-first) and app bundle (stale-while-revalidate)
- `manifest.webmanifest` + `icon.svg` — installable PWA metadata

## Tech

One hand-rolled HTML/CSS/JS file (~250 KB): CSS-variable design system, hash-based router, localStorage persistence.

---
Built for Ilk's 2026 board prep.
