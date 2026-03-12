# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project does

Landing page for **Remoji** — a Slack app that recommends diverse custom emojis using AI. The page's primary goal is to drive installs via the "Add to Slack" OAuth button.

See the main app at `/mnt/c/git/remoji` for the full backend architecture.

## Commands

```bash
npm run dev      # Dev server with hot reload at localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview the production build locally
```

## Architecture

**Astro + Tailwind CSS 4**, deployed to GitHub Pages via `.github/workflows/deploy.yml`.

- `src/layouts/Layout.astro` — base HTML shell (fonts, meta, dark background)
- `src/components/` — one file per page section: `Nav`, `Hero`, `Features`, `CTA`, `Footer`
- `src/pages/index.astro` — composes the components into the page
- `src/styles/global.css` — Tailwind import + theme overrides

## GitHub Pages setup

Before the deploy workflow will work, two things need to be configured in the GitHub repo settings:
1. **Settings → Pages → Source**: set to "GitHub Actions"
2. Update `site` and `base` in `astro.config.mjs` to match the actual repo owner/name

## What Remoji does (for copy/content purposes)

- On install, ingests a workspace's custom emojis using GPT-4 Vision to generate rich metadata (descriptions, tags, categories, colors, embeddings)
- Users run `/remoji :emoji:` to get similar emoji recommendations
- Uses vector search + multi-signal composite scoring + MMR re-ranking for diversity
- Results are cached per workspace so repeat queries are instant
