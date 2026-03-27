# Suggestions — Phased Project Plan

> Generated from `docs/suggestions.md` on 2026-03-27.
> Status key: `[ ]` Available | `[>]` Started | `[X]` Completed | `[!]` Blocked

## How to use this document.

Use this document as a work queue. Beginning with the earliest phase that has Available tasks, select a task, update its Status to [>] and Started to the current datetime PST. When Completing an item, update the status to [X] and Created to the current datetime PST. When all items are Completed, stage and commit, but do not push. Plan to keep the server running so I can easily review the work. Please state the server path as the last part of your responsse.
---

## Phase 1 — Foundation & Code Quality

Reduce duplication and standardize markup so subsequent phases build on clean ground.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 1.1 | [ ] | — | — | Extract `createChart(id, type, data, overrides)` helper into `js/charts.js` to DRY chart initialization across all pages |
| 1.2 | [ ] | — | — | Standardize page headers on `<header class="page-header">` instead of mixed `<header>` / `<div>` usage |
| 1.3 | [ ] | — | — | Standardize page-nav markup: consistent placement, class naming (`page-nav reveal`), and nesting across all pages |
| 1.4 | [ ] | — | — | Unify CSS custom properties and the `C` palette object in `charts.js` — read colors from `getComputedStyle` or generate both from a single source |
| 1.5 | [ ] | — | — | Audit and fix heading hierarchy (`h1` > `h2` > `h3`) across all pages |
| 1.6 | [ ] | — | — | Add basic linting configs: ESLint, Stylelint, HTMLHint |

---

## Phase 2 — Data Layer Integration

Wire the existing JSON data files into every page so charts are data-driven and updates are single-file changes.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 2.1 | [ ] | — | — | Build a shared data loader (`js/data-loader.js` or extend `charts.js`) that fetches `data/*.json` and returns parsed objects |
| 2.2 | [ ] | — | — | Refactor each page's inline chart configs to consume JSON via the data loader and the `createChart` helper from 1.1 |
| 2.3 | [ ] | — | — | Refactor `embed.html` to share the same data loader / chart builder, eliminating duplicated chart configs |
| 2.4 | [ ] | — | — | Add `lastUpdated` field to each JSON file and render a "Data as of {date}" note in the footer or chart captions |

---

## Phase 3 — Accessibility

Make charts, navigation, and interactive elements usable for keyboard and screen-reader users.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 3.1 | [ ] | — | — | Add a visually-hidden skip-to-content link (`#main`) at the top of every page |
| 3.2 | [ ] | — | — | Add `aria-label` to every `<canvas>` and provide a visually-hidden `<table>` fallback with the underlying data for each chart |
| 3.3 | [ ] | — | — | Address color-only meaning: add patterns, inline labels, or direct annotations to charts that rely solely on color (e.g., trust chart red/grey/green) |
| 3.4 | [ ] | — | — | Integrate `chartjs-plugin-a11y-legend` for keyboard-accessible chart legends |
| 3.5 | [ ] | — | — | Define custom `:focus-visible` styles that are visible against the dark background |

---

## Phase 4 — SEO & Social Sharing

Improve discoverability and link previews with meta tags, structured data, and a favicon.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 4.1 | [ ] | — | — | Add unique `<meta name="description">` (~150 chars) to every page |
| 4.2 | [ ] | — | — | Add Open Graph (`og:title`, `og:description`, `og:image`) and Twitter Card meta tags to every page |
| 4.3 | [ ] | — | — | Add `<link rel="canonical">` to every page |
| 4.4 | [ ] | — | — | Add `Dataset` or `Article` schema.org JSON-LD structured data |
| 4.5 | [ ] | — | — | Create and configure a favicon (SVG + PNG) and `apple-touch-icon` |

---

## Phase 5 — Performance

Reduce payload, eliminate unnecessary loads, and improve time-to-interactive.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 5.1 | [ ] | — | — | Remove Chart.js `<script>` from `sources.html` (and any other pages with no charts) |
| 5.2 | [ ] | — | — | Self-host Google Fonts as subsetted WOFF2 files to eliminate render-blocking external requests |
| 5.3 | [ ] | — | — | Lazy-render below-the-fold charts using `IntersectionObserver` (extend existing pattern in `shared.js`) |
| 5.4 | [ ] | — | — | Add `<link rel="preload">` for critical CSS and the display font |

---

## Phase 6 — User Experience

Quality-of-life features that help visitors navigate, share, and use the content.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 6.1 | [ ] | — | — | Add a visible "Last updated" date stamp to each page, driven from the JSON data layer (depends on 2.4) |
| 6.2 | [ ] | — | — | Add a download/export button on each chart (PNG via `toBase64Image()`) |
| 6.3 | [ ] | — | — | Add `id` attributes to major sections for deep-linking (e.g., `trust.html#verification-debt`) |
| 6.4 | [ ] | — | — | Make data tables responsive: card layout on mobile or horizontal-scroll wrapper with visual hint |
| 6.5 | [ ] | — | — | Add a `@media print` stylesheet: hide nav, grain overlay, scroll progress; render charts as static images |
| 6.6 | [ ] | — | — | Create a custom `404.html` matching site design with a link back to the home page |

---

## Phase 7 — Navigation & Information Architecture

Help users orient themselves as the page count grows.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 7.1 | [ ] | — | — | Add a breadcrumb or "page N of M" progress indicator to the nav |
| 7.2 | [ ] | — | — | Add a sticky mini-TOC or section dots to long pages (`trust.html`, `predictions.html`) |
| 7.3 | [ ] | — | — | Evaluate and integrate lightweight client-side search (Pagefind or Lunr) |

---

## Phase 8 — Content Enhancements

New pages and richer chart features that deepen the site's analytical value.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 8.1 | [ ] | — | — | Create an executive summary page distilling key findings for time-constrained readers |
| 8.2 | [ ] | — | — | Build an interactive comparison matrix for side-by-side survey results with methodology notes |
| 8.3 | [ ] | — | — | Add trend annotations on timeline charts via `chartjs-plugin-annotation` (e.g., "ChatGPT launch", "Copilot GA") |
| 8.4 | [ ] | — | — | Visualize confidence intervals / error bars where data supports it |
| 8.5 | [ ] | — | — | Create a glossary page or tooltip definitions for terms like HLMI, FAOL, agentic, assistive, verification debt |

---

## Phase 9 — Testing & Validation

Automated checks to catch regressions and maintain quality.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 9.1 | [ ] | — | — | Run W3C HTML validator across all pages and fix reported issues |
| 9.2 | [ ] | — | — | Run Lighthouse CI on each page; triage and address accessibility, performance, and SEO findings |
| 9.3 | [ ] | — | — | Add a link checker (`lychee` or `htmltest`) and fix any broken links |
| 9.4 | [ ] | — | — | Set up visual regression snapshots (Playwright screenshots or Percy) for key pages |

---

## Phase 10 — Infrastructure & Security

CI/CD pipeline and hardening for production deployment.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 10.1 | [ ] | — | — | Create a GitHub Actions workflow: HTML validation, link checking, Lighthouse on each push |
| 10.2 | [ ] | — | — | Add a Content Security Policy meta tag restricting scripts to `self` + Chart.js CDN |
| 10.3 | [ ] | — | — | Add Subresource Integrity (`integrity`) hashes to all CDN `<script>` tags |
| 10.4 | [ ] | — | — | Evaluate CDN migration: set long cache lifetimes on fonts/CSS/JS with content-hash filenames |
