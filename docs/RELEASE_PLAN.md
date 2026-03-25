# Phased Release Plan — AI Coding Adoption Site

## Completed Phases

### Phase 1 — Initial Site (v1.0) ✅
Single-page site with 7 sections: hero, adoption trends, tool landscape, agentic split, segmentation, trust paradox, timeline. Core data from the research report with Chart.js visualizations.

### Phase 2 — Enriched Timeline & 2025-2026 Events ✅
- Added 35+ timeline events across 3 eras (ML Completion, LLM Coding, Agentic Systems)
- Interactive timeline with category filters (product/survey/funding/policy)
- Click-to-expand detail cards
- Era bands with visual differentiation

### Phase 3 — Deeper Segmentation ✅
- 6 charts: career stage, role-based AI code gen, task-based tool selection, enterprise policy, code generation depth, company size tool choice
- HackerRank, JetBrains, DORA, and Pragmatic Engineer data surfaced

### Phase 4 — Perception vs Reality ✅
- Dual-panel "What Developers Do" vs "What Developers Think" layout
- Survey framing funnel (97% → 85% → 78.5% → 47.1%)
- Controlled experiment detail (GitHub: 1h11m vs 2h41m, n=95)
- Pain points, DORA stability finding, verification debt callout

### Phase 5 — Multi-Page Architecture ✅
- 8 pages: home, adoption, tools, agentic-split, segments, trust, timeline, sources
- Shared nav/footer via `js/shared.js`
- Mobile hamburger nav with full-screen overlay
- Scroll progress bar, reveal animations, animated hero counters
- Prev/next page navigation on each section page

### Phase 6 — Live Data & Community Features ✅
- Structured JSON data layer (`data/surveys.json`, `data/tools.json`, `data/timeline.json`)
- Embeddable charts via `embed.html?chart=<id>` (5 chart types)
- Data separated from presentation for easy updates

---

## Future Work

### Phase 7 — 2026 Step Change Coverage
**Goal:** Capture the perceived qualitative shift in AI agent capabilities in early 2026 — long-horizon autonomous tasks (hours, not minutes).

- New timeline entries for 2026 capability milestones
- Potential new section or callout on the long-horizon agent paradigm
- Evidence from product launches, benchmarks, and industry commentary

### Phase 8 — Comparative Analysis Tool
- Let visitors select two surveys and see them side-by-side with methodology notes
- Highlight where numbers diverge and explain *why* (question wording, sample, timing)

### Phase 9 — Real-Time Data Updates
- Automated pipeline for incorporating new survey results
- Clear "last updated" indicators per data point with source links
- Changelog showing when data was added or revised
