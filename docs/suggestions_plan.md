# Suggestions — Phased Project Plan

> Generated from `docs/suggestions.md` on 2026-03-27.
> Status key: `[ ]` Available | `[>]` Started | `[X]` Completed | `[!]` Blocked

## How to use this document.

Use this document as a work queue. Beginning with the earliest phase that has Available tasks, select a task, update its Status to [>] and Started to the current datetime PST. When Completing an item, update the status to [X] and Created to the current datetime PST. When all items are Completed, stage and commit, but do not push. Plan to keep the server running so I can easily review the work. Please state the server path as the last part of your response. Do not pause between phase. Continue work on the next phase until all phases have been completed.
---

## Phase 1 — Foundation & Code Quality

Reduce duplication and standardize markup so subsequent phases build on clean ground.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 1.1 | [X] | 2026-03-27 20:36 PST | 2026-03-27 20:38 PST | Extract `createChart(id, type, data, overrides)` helper into `js/charts.js` to DRY chart initialization across all pages |
| 1.2 | [X] | 2026-03-27 20:38 PST | 2026-03-27 20:40 PST | Standardize page headers on `<header class="page-header">` instead of mixed `<header>` / `<div>` usage |
| 1.3 | [X] | 2026-03-27 20:40 PST | 2026-03-27 20:43 PST | Standardize page-nav markup: consistent placement, class naming (`page-nav reveal`), and nesting across all pages |
| 1.4 | [X] | 2026-03-27 20:43 PST | 2026-03-27 20:45 PST | Unify CSS custom properties and the `C` palette object in `charts.js` — read colors from `getComputedStyle` or generate both from a single source |
| 1.5 | [X] | 2026-03-27 20:45 PST | 2026-03-27 20:48 PST | Audit and fix heading hierarchy (`h1` > `h2` > `h3`) across all pages |
| 1.6 | [X] | 2026-03-27 20:48 PST | 2026-03-27 20:49 PST | Add basic linting configs: ESLint, Stylelint, HTMLHint |

---

## Phase 2 — Data Layer Integration

Wire the existing JSON data files into every page so charts are data-driven and updates are single-file changes.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 2.1 | [X] | 2026-03-27 20:49 PST | 2026-03-27 20:51 PST | Build a shared data loader (`js/data-loader.js` or extend `charts.js`) that fetches `data/*.json` and returns parsed objects |
| 2.2 | [X] | 2026-03-27 20:51 PST | 2026-03-27 20:56 PST | Refactor each page's inline chart configs to consume JSON via the data loader and the `createChart` helper from 1.1 |
| 2.3 | [X] | 2026-03-27 20:56 PST | 2026-03-27 20:58 PST | Refactor `embed.html` to share the same data loader / chart builder, eliminating duplicated chart configs |
| 2.4 | [X] | 2026-03-27 20:58 PST | 2026-03-27 21:00 PST | Add `lastUpdated` field to each JSON file and render a "Data as of {date}" note in the footer or chart captions |

---

## Phase 3 — Accessibility

Make charts, navigation, and interactive elements usable for keyboard and screen-reader users.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 3.1 | [X] | 2026-03-27 21:00 PST | 2026-03-27 21:03 PST | Add a visually-hidden skip-to-content link (`#main`) at the top of every page |
| 3.2 | [X] | 2026-03-27 21:03 PST | 2026-03-27 21:06 PST | Add `aria-label` to every `<canvas>` and provide a visually-hidden `<table>` fallback with the underlying data for each chart |
| 3.3 | [X] | 2026-03-27 21:06 PST | 2026-03-27 21:06 PST | Address color-only meaning: add patterns, inline labels, or direct annotations to charts that rely solely on color (e.g., trust chart red/grey/green) |
| 3.4 | [X] | 2026-03-27 21:06 PST | 2026-03-27 21:07 PST | Integrate `chartjs-plugin-a11y-legend` for keyboard-accessible chart legends |
| 3.5 | [X] | 2026-03-27 21:07 PST | 2026-03-27 21:07 PST | Define custom `:focus-visible` styles that are visible against the dark background |

---

## Phase 4 — SEO & Social Sharing

Improve discoverability and link previews with meta tags, structured data, and a favicon.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 4.1 | [X] | 2026-03-27 21:08 PST | 2026-03-27 21:12 PST | Add unique `<meta name="description">` (~150 chars) to every page |
| 4.2 | [X] | 2026-03-27 21:08 PST | 2026-03-27 21:12 PST | Add Open Graph (`og:title`, `og:description`, `og:image`) and Twitter Card meta tags to every page |
| 4.3 | [X] | 2026-03-27 21:08 PST | 2026-03-27 21:12 PST | Add `<link rel="canonical">` to every page |
| 4.4 | [X] | 2026-03-27 21:08 PST | 2026-03-27 21:12 PST | Add `Dataset` or `Article` schema.org JSON-LD structured data |
| 4.5 | [X] | 2026-03-27 21:08 PST | 2026-03-27 21:10 PST | Create and configure a favicon (SVG + PNG) and `apple-touch-icon` |

---

## Phase 5 — Performance

Reduce payload, eliminate unnecessary loads, and improve time-to-interactive.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 5.1 | [X] | 2026-03-27 21:10 PST | 2026-03-27 21:10 PST | Remove Chart.js `<script>` from `sources.html` (and any other pages with no charts) |
| 5.2 | [X] | 2026-03-27 21:10 PST | 2026-03-27 21:10 PST | Self-host Google Fonts as subsetted WOFF2 files to eliminate render-blocking external requests |
| 5.3 | [X] | 2026-03-27 21:10 PST | 2026-03-27 21:12 PST | Lazy-render below-the-fold charts using `IntersectionObserver` (extend existing pattern in `shared.js`) |
| 5.4 | [X] | 2026-03-27 21:12 PST | 2026-03-27 21:12 PST | Add `<link rel="preload">` for critical CSS and the display font |

---

## Phase 6 — User Experience

Quality-of-life features that help visitors navigate, share, and use the content.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 6.1 | [X] | 2026-03-27 21:12 PST | 2026-03-27 21:12 PST | Add a visible "Last updated" date stamp to each page, driven from the JSON data layer (depends on 2.4) |
| 6.2 | [X] | 2026-03-27 21:12 PST | 2026-03-27 21:15 PST | Add a download/export button on each chart (PNG via `toBase64Image()`) |
| 6.3 | [X] | 2026-03-27 21:12 PST | 2026-03-27 21:15 PST | Add `id` attributes to major sections for deep-linking (e.g., `trust.html#verification-debt`) |
| 6.4 | [X] | 2026-03-27 21:12 PST | 2026-03-27 21:16 PST | Make data tables responsive: card layout on mobile or horizontal-scroll wrapper with visual hint |
| 6.5 | [X] | 2026-03-27 21:12 PST | 2026-03-27 21:17 PST | Add a `@media print` stylesheet: hide nav, grain overlay, scroll progress; render charts as static images |
| 6.6 | [X] | 2026-03-27 21:12 PST | 2026-03-27 21:18 PST | Create a custom `404.html` matching site design with a link back to the home page |

---

## Phase 7 — Navigation & Information Architecture

Help users orient themselves as the page count grows.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 7.1 | [X] | 2026-03-27 21:18 PST | 2026-03-27 21:20 PST | Add a breadcrumb or "page N of M" progress indicator to the nav |
| 7.2 | [X] | 2026-03-27 21:18 PST | 2026-03-27 21:22 PST | Add a sticky mini-TOC or section dots to long pages (`trust.html`, `predictions.html`) |
| 7.3 | [X] | 2026-03-27 21:18 PST | 2026-03-27 21:24 PST | Evaluate and integrate lightweight client-side search (Pagefind or Lunr) |

---

## Phase 8 — Content Enhancements

New pages and richer chart features that deepen the site's analytical value.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 8.1 | [X] | 2026-03-27 21:25 PST | 2026-03-27 21:35 PST | Create an executive summary page distilling key findings for time-constrained readers |
| 8.2 | [X] | 2026-03-27 21:25 PST | 2026-03-27 21:30 PST | Build an interactive comparison matrix for side-by-side survey results with methodology notes |
| 8.3 | [X] | 2026-03-27 21:25 PST | 2026-03-27 21:32 PST | Add trend annotations on timeline charts via `chartjs-plugin-annotation` (e.g., "ChatGPT launch", "Copilot GA") |
| 8.4 | [X] | 2026-03-27 21:25 PST | 2026-03-27 21:34 PST | Visualize confidence intervals / error bars where data supports it |
| 8.5 | [X] | 2026-03-27 21:25 PST | 2026-03-27 21:36 PST | Create a glossary page or tooltip definitions for terms like HLMI, FAOL, agentic, assistive, verification debt |

---

## Phase 9 — Testing & Validation

Automated checks to catch regressions and maintain quality.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 9.1 | [X] | 2026-03-27 21:37 PST | 2026-03-27 21:42 PST | Run W3C HTML validator across all pages and fix reported issues |
| 9.2 | [X] | 2026-03-27 21:37 PST | 2026-03-27 21:49 PST | Run Lighthouse CI on each page; triage and address accessibility, performance, and SEO findings |
| 9.3 | [X] | 2026-03-27 21:37 PST | 2026-03-27 21:42 PST | Add a link checker (`lychee` or `htmltest`) and fix any broken links |
| 9.4 | [X] | 2026-03-27 21:37 PST | 2026-03-27 21:44 PST | Set up visual regression snapshots (Playwright screenshots or Percy) for key pages |

---

## Phase 10 — Infrastructure & Security

CI/CD pipeline and hardening for production deployment.

| TaskId | Status | Started | Completed | Description |
|--------|--------|---------|-----------|-------------|
| 10.1 | [X] | 2026-03-27 21:45 PST | 2026-03-27 21:47 PST | Create a GitHub Actions workflow: HTML validation, link checking, Lighthouse on each push |
| 10.2 | [X] | 2026-03-27 21:45 PST | 2026-03-27 21:48 PST | Add a Content Security Policy meta tag restricting scripts to `self` + Chart.js CDN |
| 10.3 | [X] | 2026-03-27 21:48 PST | 2026-03-27 21:49 PST | Add Subresource Integrity (`integrity`) hashes to all CDN `<script>` tags |
| 10.4 | [X] | 2026-03-27 21:49 PST | 2026-03-27 21:50 PST | Evaluate CDN migration: set long cache lifetimes on fonts/CSS/JS with content-hash filenames |

---

## 10.4 CDN Migration Evaluation

**Recommendation: Defer.** Content-hash filenames (e.g., `style.a1b2c3.css`) require a build step to rename files and rewrite references. This conflicts with the project's no-build-tools architecture (vanilla HTML/CSS/JS, push-to-deploy on GitHub Pages).

**Current state:**
- Chart.js is already served from jsdelivr CDN with a pinned version (`@4.4.7`) and SRI hash — effectively immutable.
- Google Fonts are served with long cache headers by Google's CDN.
- Local CSS/JS files (`style.css`, `shared.js`, `charts.js`) change infrequently and are small (~25KB total).

**If caching becomes an issue**, viable alternatives that preserve the no-build architecture:
1. **Query-string cache busting** — append `?v=2` to local asset URLs on each deploy (manual but zero tooling).
2. **GitHub Pages default caching** — already sets `Cache-Control: max-age=600` (10 min), which is reasonable for this site's traffic level.
3. **Cloudflare proxy** — if added later, can set aggressive caching + purge-on-deploy via GitHub Actions webhook.
