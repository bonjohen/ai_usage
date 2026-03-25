# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A data-driven static website presenting research on AI coding tool adoption (2016–2026). Built with vanilla HTML/CSS/JS and Chart.js — no build tools, no frameworks.

## Architecture

- **Multi-page static site**: `index.html` (home), `adoption.html`, `tools.html`, `agentic-split.html`, `segments.html`, `trust.html`, `timeline.html`, `sources.html`, `embed.html`
- **Shared assets**: `css/style.css`, `js/shared.js` (nav/footer injection, scroll reveal, counters), `js/charts.js` (Chart.js palette + defaults)
- **Data layer**: `data/surveys.json`, `data/tools.json`, `data/timeline.json` — structured JSON for all survey data, tool metrics, and timeline events
- **Embeddable charts**: `embed.html?chart=<id>` renders standalone charts (adoption, trust, tools, frequency, agentic)
- **Source research**: `docs/deep-research-report.md` — the original analysis with `citeturnXsearchY` citation format

## Key Patterns

- Nav/footer HTML is injected by `js/shared.js`; active page detected via `<body data-page="...">` attribute
- Color palette object `C` in `js/charts.js` provides consistent amber/cyan/violet/red/green theming
- Chart.js 4.x used for all visualizations — no other chart library
- Design duality: amber = usage/reality, cyan = perception/trust
- Fonts: Bricolage Grotesque (display), Albert Sans (body), JetBrains Mono (data)

## Deployment

GitHub Pages from `main` branch root. No build step — push and it's live.

## Content Conventions

- The report distinguishes **hard metrics** (vendor earnings, audited counts) from **survey-driven estimates**
- The assistive vs. agentic distinction is a central organizing theme
- Citations in the research report use `citeturn37search0` format (not standard academic)
