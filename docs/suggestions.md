# Suggested Improvements & Enhancements

## Data Layer Integration

The `data/` directory contains structured JSON files (`surveys.json`, `tools.json`, `timeline.json`, `predictions.json`) but no page currently consumes them. Every chart is hardcoded in inline `<script>` blocks, meaning data updates require editing HTML in multiple places.

- **Fetch charts from JSON**: Load `data/*.json` at runtime and drive Chart.js configs from the data layer. This makes updates a single-file change and eliminates drift between pages and the embed system.
- **Single source of truth for embed.html**: The embed page duplicates every chart config. If pages read from JSON, embeds can share the same loader.
- **Data freshness indicator**: Add a `lastUpdated` field to each JSON file and render "Data as of {date}" in the footer or chart notes.

## Accessibility

- **Skip-to-content link**: No skip navigation exists. Add a visually-hidden link at the top of each page targeting `#main` or equivalent.
- **Chart fallbacks**: Charts are invisible to screen readers. Add `aria-label` on each `<canvas>` and a visually-hidden `<table>` with the underlying data as a fallback. Chart.js supports `aria-label` on the canvas element natively.
- **Color alone conveys meaning**: Several charts rely solely on color to distinguish datasets (e.g., the trust chart uses red/grey/green). Add patterns, labels, or direct annotations as a secondary channel.
- **Keyboard navigation**: Interactive elements within charts (tooltips) are mouse-only. Consider the `chartjs-plugin-a11y-legend` plugin for keyboard-accessible legends.
- **Heading hierarchy**: Some pages jump from `<h1>` to `<h3>` without an `<h2>`. Audit and fix the heading structure across all pages.
- **Focus styles**: No custom `:focus-visible` styles are defined. The default browser outline may be invisible against the dark background.

## SEO & Social Sharing

- **Meta descriptions**: No page has a `<meta name="description">` tag. Each page should have a unique 150-character summary.
- **Open Graph / Twitter Card tags**: No OG tags exist. Adding `og:title`, `og:description`, `og:image`, and `twitter:card` would make shared links render a preview card instead of a bare URL.
- **Canonical URLs**: Add `<link rel="canonical">` to each page to prevent duplicate content issues if the site is accessed via multiple paths.
- **Structured data**: Consider adding `Dataset` or `Article` schema.org JSON-LD to help search engines understand the content type.
- **Favicon**: No favicon is configured. Add a small SVG or PNG favicon plus an `apple-touch-icon`.

## Performance

- **Conditional Chart.js loading**: `sources.html` loads Chart.js but has no charts. Only include the script on pages that use it.
- **Font subsetting**: Three Google Fonts families are loaded on every page with multiple weights. Consider self-hosting with subsetted WOFF2 files to reduce payload and eliminate the render-blocking request chain.
- **Lazy chart rendering**: Charts below the fold could defer initialization until they scroll into view, using the existing `IntersectionObserver` pattern from `shared.js`.
- **Image/asset optimization**: If images are added in the future, use `<picture>` with WebP/AVIF and `loading="lazy"`.
- **Preload critical assets**: Add `<link rel="preload">` for the CSS and the display font to reduce first contentful paint.

## User Experience

- **"Last updated" date**: Visitors can't tell how current the data is. Add a visible date stamp, ideally driven from the JSON data layer.
- **Chart download/export**: Add a small download button on each chart to export as PNG or SVG. Chart.js exposes `toBase64Image()` for this.
- **Deep-link to sections**: Add `id` attributes to major sections so users can share links to specific charts (e.g., `trust.html#verification-debt`).
- **Responsive table improvements**: The data tables on tools.html and sources.html overflow on narrow screens. Consider a card layout on mobile or a horizontally-scrollable wrapper with a visual hint.
- **Print stylesheet**: No print styles exist. Add a `@media print` block that hides the nav, grain overlay, and scroll progress, and renders charts as static images.
- **404 page**: No custom 404 exists. GitHub Pages will show its default. Add a `404.html` that matches the site's design and links back to the home page.

## Navigation & Information Architecture

- **Breadcrumbs or progress indicator**: With 10 pages, users can lose context. A subtle breadcrumb or "3 of 8" indicator would help orientation.
- **Page-nav consistency**: Some pages put the page-nav inside a `<section>`, others outside. The markup style varies between `<div class="page-nav">` (standalone) and `<div class="page-nav reveal">` (animated). Standardize.
- **Table of contents on longer pages**: trust.html and predictions.html are long. A sticky mini-TOC or section dots in the margin would help navigation.
- **Search**: As the site grows, a lightweight client-side search (e.g., Pagefind or Lunr) could help users find specific stats quickly.

## Content Enhancements

- **Executive summary page**: A single page that distills the key findings across all sections for time-constrained readers. Could live at the top of index.html or as a standalone page.
- **Interactive comparison matrix**: A page or component that lets users compare survey results side by side, highlighting methodological differences.
- **Trend annotations on charts**: Chart.js supports annotation plugins. Mark key events (e.g., "ChatGPT launch", "Copilot GA") directly on timeline charts.
- **Confidence intervals / error bars**: Where data supports it, visualize uncertainty rather than point estimates. This reinforces the site's theme of methodological rigor.
- **Glossary**: Terms like HLMI, FAOL, agentic, assistive, and verification debt are used throughout. A short glossary page or tooltip definitions would help non-specialist readers.

## Code Quality & Maintainability

- **DRY chart initialization**: Every page repeats similar Chart.js boilerplate (options, animation, scale configs). Extract a `createChart(id, type, data, overrides)` helper into `charts.js` to reduce per-page code.
- **HTML element consistency**: Page headers alternate between `<header class="page-header">` and `<div class="page-header">`. Standardize on `<header>` for semantics.
- **Linting**: No ESLint, Stylelint, or HTMLHint config exists. Adding basic linting would catch issues like the inconsistent heading hierarchy.
- **CSS custom properties for chart theming**: The `C` object in `charts.js` duplicates the CSS custom properties in `style.css`. Read from CSS `getComputedStyle` or generate both from a single source.
- **Template partials**: The `<head>` block is copy-pasted across all 10 HTML files. If the project grows, consider a minimal build step (e.g., Eleventy or even a shell script) to assemble pages from partials.

## Testing & Validation

- **HTML validation**: Run the W3C validator across all pages. Inline styles are heavy on trust.html and predictions.html; some may produce warnings.
- **Lighthouse audit**: Run Lighthouse CI on each page to catch accessibility, performance, and SEO issues systematically.
- **Link checking**: Add a link checker (e.g., `lychee` or `htmltest`) to CI to catch broken links as pages are added or renamed.
- **Visual regression testing**: Snapshot key pages with a tool like Percy or Playwright screenshots to catch unintended style changes.

## Infrastructure

- **CI/CD**: No GitHub Actions workflow exists. A minimal workflow could run HTML validation, link checking, and Lighthouse on each push.
- **Cache headers**: GitHub Pages defaults are fine, but if moving to a CDN, set long cache lifetimes on fonts/CSS/JS with content-hash filenames.
- **Content Security Policy**: Add a CSP meta tag or header to restrict script sources to `self` and the Chart.js CDN. This hardens against XSS if the site ever accepts user input.
- **Subresource Integrity**: The Chart.js CDN script tag has no `integrity` attribute. Add SRI hashes to protect against CDN compromise.
