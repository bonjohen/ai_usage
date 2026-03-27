/* ======== Lightweight Client-Side Search ======== */
const SEARCH_INDEX = [
    { title: 'Adoption Trends', url: 'adoption.html', keywords: 'adoption surge usage daily weekly frequency stack overflow 78.5 43.8' },
    { title: 'Tool Landscape', url: 'tools.html', keywords: 'copilot chatgpt cursor claude code gemini windsurf replit tabnine tools market' },
    { title: 'Assistive vs Agentic', url: 'agentic-split.html', keywords: 'agentic assistive agent autonomous verification debt METR time horizon' },
    { title: 'Who Adopts', url: 'segments.html', keywords: 'segments career experience enterprise policy company size role task' },
    { title: 'The Trust Paradox', url: 'trust.html', keywords: 'trust distrust paradox productivity frustration debugging verification stability DORA' },
    { title: 'Timeline', url: 'timeline.html', keywords: 'timeline history milestones intellicode copilot launch funding policy 2018 2019 2020 2021 2022 2023 2024 2025 2026' },
    { title: 'Predictions', url: 'predictions.html', keywords: 'predictions AGI HLMI forecast metaculus researcher survey timeline collapse skeptics' },
    { title: 'Sources & Methodology', url: 'sources.html', keywords: 'sources methodology survey framing sample size hackerrank jetbrains gartner' }
];

(function initSearch() {
    const btn = document.createElement('button');
    btn.className = 'search-btn';
    btn.innerHTML = '&#x1F50D;';
    btn.title = 'Search (Ctrl+K)';
    btn.setAttribute('aria-label', 'Search');

    const overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.innerHTML = '<div class="search-box"><input type="text" class="search-input" placeholder="Search pages..." aria-label="Search"><div class="search-results"></div></div>';

    document.body.appendChild(btn);
    document.body.appendChild(overlay);

    const input = overlay.querySelector('.search-input');
    const results = overlay.querySelector('.search-results');

    function open() { overlay.classList.add('open'); input.focus(); }
    function close() { overlay.classList.remove('open'); input.value = ''; results.innerHTML = ''; }

    btn.addEventListener('click', open);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); open(); }
        if (e.key === 'Escape') close();
    });

    input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        if (!q) { results.innerHTML = ''; return; }
        const matches = SEARCH_INDEX.filter(p => p.title.toLowerCase().includes(q) || p.keywords.includes(q));
        results.innerHTML = matches.length
            ? matches.map(m => '<a href="' + m.url + '" class="search-result">' + m.title + '</a>').join('')
            : '<div class="search-empty">No results</div>';
    });
})();
