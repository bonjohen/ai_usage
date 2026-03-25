# Phased Release Plan — AI Coding Adoption Site

## Current State (v1.0 — shipped)
Single-page site with 7 sections: hero, adoption trends, tool landscape, agentic split, segmentation, trust paradox, timeline. Covers core data from the research report with Chart.js visualizations.

---

## Phase 2 — Enriched Timeline & 2025-2026 Events
**Goal:** Make the timeline the standout section. 2025 was the year AI coding went from "interesting" to "infrastructure" — the timeline should reflect that density.

### 2.1 — Expanded Timeline Content
- Add **product wave framing**: visually distinguish the two eras — "ML-enhanced completion (2018–2020)" vs "Generative LLM coding (2021–2026)" — with labeled era bands or background shading
- Add missing 2025 events that shaped the market:
  - **GitHub Copilot Workspace** preview and evolution
  - **Amazon Q Developer** (rebranded from CodeWhisperer) GA and enterprise push
  - **Google Gemini Code Assist** integration into Cloud and IDEs
  - **Devin** (Cognition) — first "AI software engineer" demo and its industry impact
  - **OpenAI Codex agent** detailed capabilities (sandboxed environments, writing features, proposing PRs)
  - **SWE-bench** and agentic coding benchmarks gaining traction
  - **Copilot agent mode** (VS Code) enabling multi-step autonomous workflows
  - Regulatory/policy moves: EU AI Act enforcement timelines, enterprise compliance shifts
- Add 2026 events beyond January:
  - **Codex Security** research preview (March 2026)
  - Any additional verified milestones
- Add the **Gartner 2028 forecast** (75% enterprise engineers) as a forward-looking endpoint

### 2.2 — Interactive Timeline
- Replace static CSS timeline with a scrollable, interactive timeline component
- Click/hover on events to expand detail cards with context
- Filter by category: product launches, survey milestones, policy/regulation, enterprise adoption
- Visual density indicator showing how many events per quarter (illustrating the 2025 acceleration)

---

## Phase 3 — Deeper Segmentation & Missing Data
**Goal:** Surface the report's segmentation data that isn't yet visualized.

### 3.1 — Role-Based Adoption
- New chart: AI code generation % by role (security, cloud, data engineers lead per HackerRank)
- New chart: Task-based tool selection — which tools developers choose for refactoring vs testing vs integration vs deployment (HackerRank data)

### 3.2 — Geographic & Industry View
- Visualize cross-country adoption differences (GitHub 2024: US, Brazil, Germany, India)
- Regulated vs unregulated industry adoption rates
- Enterprise policy enforcement mapped against adoption speed

### 3.3 — Open Source Impact
- Copilot's free-access strategy for OSS maintainers
- Proxy metrics for AI influence on open-source (commit trailers, code provenance)
- The measurement challenge: why we can't easily quantify AI's footprint in OSS

### 3.4 — Company Size Deep-Dive
- Expand the current stat cards into a full visualization
- Tool preference by company size band (Pragmatic Engineer data)
- Procurement dynamics: why large orgs default to Copilot (vendor relationship, compliance, SSO)

---

## Phase 4 — Perception vs Reality (Expanded)
**Goal:** Make the "what people think vs what's measured" theme more granular and evidence-based.

### 4.1 — Controlled Evidence Section
- Dedicated visualization of the GitHub controlled experiment: task completion time distribution (1h11m vs 2h41m), completion rates (78% vs 70%), study design notes (n=95)
- Reference to Microsoft Research publication
- Contrast with self-reported survey claims (90% save time, 85% faster, etc.)
- Clear visual language: "measured" (cyan) vs "self-reported" (amber)

### 4.2 — Survey Framing Effects
- Interactive comparison showing how the same population yields wildly different numbers depending on question wording:
  - "Ever used" → 97% (GitHub)
  - "Regularly use" → 85% (JetBrains)
  - "Currently using" → 78.5% (Stack Overflow)
  - "Use daily" → 47.1% (Stack Overflow)
- Visual slider or funnel showing how each stricter definition shrinks the number
- This is a key insight for anyone interpreting industry claims

### 4.3 — Pain Points & Verification Debt
- Dedicated visualization: "almost right but not quite" (66%), longer debugging (45%)
- Concept of "verification debt" — effort shifts from writing code to reviewing/debugging AI output
- DORA finding: AI increases throughput but has a *negative* relationship with delivery stability
- Security implications: increased change volume without proportional test coverage

---

## Phase 5 — Multi-Page Architecture & Navigation
**Goal:** Evolve from a single long scroll into a structured, navigable site.

### 5.1 — Page Structure
- **Home/Overview**: Hero + executive summary with key stat callouts and navigation cards to each section
- **Adoption**: Full adoption trends page with all survey data, cross-survey comparison, and the framing-effects visualization
- **Tools**: Tool landscape with rankings, hard metrics, task-based selection, and company-size dynamics
- **The Split**: Assistive vs agentic dedicated page with deeper analysis of why autonomy adoption lags
- **Trust & Productivity**: The paradox page — controlled evidence, self-reported claims, pain points, verification debt
- **Timeline**: Full interactive timeline as a standalone explorable page
- **Methodology**: Survey comparison table, measurement caveats, data gap analysis, and proposed measurement methods from the report

### 5.2 — Navigation Redesign
- Persistent sidebar or top nav with section icons
- Breadcrumb trail within multi-section pages
- Cross-linking between related data points (e.g., trust data linked from both Paradox and Segmentation pages)

### 5.3 — Mobile Experience
- Responsive redesign for charts that don't work well on small screens
- Swipeable timeline on mobile
- Collapsible sections and card-based layout for phone viewing

---

## Phase 6 — Live Data & Community Features
**Goal:** Make the site a living resource, not a static snapshot.

### 6.1 — Data Update Pipeline
- Structured JSON data files (separate from presentation) so new survey results can be added without rewriting HTML
- Clear "last updated" indicators per data point with source links
- Changelog showing when data was added or revised

### 6.2 — Embeddable Charts
- Each chart available as a standalone embed (iframe-friendly) for blog posts, presentations, and reports
- Share buttons with pre-formatted social cards per section

### 6.3 — Comparative Analysis Tool
- Let visitors select two surveys and see them side-by-side with methodology notes
- Highlight where numbers diverge and explain *why* (question wording, sample, timing)

---

## Priority Order

| Phase | Effort | Impact | Ship Target |
|-------|--------|--------|-------------|
| **Phase 2** — Enriched Timeline | Medium | High — the timeline is the narrative backbone and 2025 was pivotal | Next |
| **Phase 3** — Deeper Segmentation | Medium | High — answers "who" and "why" behind the top-line numbers | After Phase 2 |
| **Phase 4** — Perception vs Reality | Medium | Very High — the most original angle; differentiates this from other dashboards | After Phase 3 |
| **Phase 5** — Multi-Page Architecture | Large | High — necessary for scalability as content grows | After Phase 4 |
| **Phase 6** — Live Data & Community | Large | Medium — transforms from report to resource | Future |

---

## Research Needed for Phase 2 (Timeline)

The current research report covers through early 2026 but is missing several significant 2025 events that belong in a comprehensive timeline. New research is needed for:

1. **Amazon Q Developer** — GA timing, enterprise adoption claims, CodeWhisperer→Q rebrand timeline
2. **Google Gemini Code Assist** — launch dates, IDE integrations, Duet AI→Gemini rebrand
3. **Devin (Cognition)** — demo date (Mar 2024), public reaction, actual availability timeline
4. **GitHub Copilot agent mode** — preview/GA dates, VS Code integration milestones
5. **SWE-bench and agentic benchmarks** — when they became industry-standard evaluation metrics
6. **Regulatory developments** — EU AI Act enforcement milestones relevant to coding tools
7. **Acquisition activity** — OpenAI acquiring Windsurf, any other M&A that reshaped the market
8. **IDE market shifts** — VS Code market share changes as AI-native editors gain traction
