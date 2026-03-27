/* ======== Navigation HTML ======== */
const NAV_HTML = `
    <div class="nav-inner">
        <a href="index.html" class="nav-brand">AI / CODE</a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
        <div class="nav-links" id="navLinks">
            <a href="summary.html" class="nav-link" data-page="summary">Summary</a>
            <a href="adoption.html" class="nav-link" data-page="adoption">Adoption</a>
            <a href="tools.html" class="nav-link" data-page="tools">Tools</a>
            <a href="agentic-split.html" class="nav-link" data-page="agentic-split">Agentic Split</a>
            <a href="segments.html" class="nav-link" data-page="segments">Segments</a>
            <a href="trust.html" class="nav-link" data-page="trust">Trust</a>
            <a href="timeline.html" class="nav-link" data-page="timeline">Timeline</a>
            <a href="predictions.html" class="nav-link" data-page="predictions">Predictions</a>
            <a href="glossary.html" class="nav-link" data-page="glossary">Glossary</a>
            <a href="sources.html" class="nav-link" data-page="sources">Sources</a>
        </div>
    </div>
`;

const FOOTER_HTML = `
    <p>Data sourced from public surveys, vendor disclosures, and earnings filings. Full analysis in <a href="docs/deep-research-report.md">deep-research-report.md</a>.</p>
    <p id="dataFreshness" style="margin-top:8px;font-size:0.7rem"></p>
`;

/* ======== Skip Link ======== */
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to content';
document.body.insertBefore(skipLink, document.body.firstChild);

/* ======== Inject Nav & Footer ======== */
document.getElementById('nav').innerHTML = NAV_HTML;
const footerEl = document.getElementById('footer');
if (footerEl) footerEl.innerHTML = FOOTER_HTML;

/* ======== Data Freshness ======== */
fetch('data/surveys.json').then(r => r.json()).then(d => {
    const el = document.getElementById('dataFreshness');
    if (el && d.lastUpdated) el.textContent = 'Data as of ' + d.lastUpdated;
}).catch(() => {});

/* ======== Active Nav Link + Page Indicator ======== */
const currentPage = document.body.dataset.page || '';
const navLinksAll = document.querySelectorAll('.nav-link');
let pageIdx = -1;
navLinksAll.forEach((link, i) => {
    if (link.dataset.page === currentPage) {
        link.classList.add('active');
        pageIdx = i;
    }
});
if (pageIdx >= 0) {
    const indicator = document.createElement('span');
    indicator.className = 'nav-page-indicator';
    indicator.textContent = (pageIdx + 1) + ' / ' + navLinksAll.length;
    document.querySelector('.nav-inner').appendChild(indicator);
}

/* ======== Mobile Nav Toggle ======== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    // Close nav when a link is clicked (mobile)
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

/* ======== Scroll Progress Bar ======== */
const progressBar = document.getElementById('scrollProgress');
const nav = document.getElementById('nav');

function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Nav background
    if (nav) nav.classList.toggle('scrolled', scrollY > 60);

    // Progress bar
    if (progressBar && docHeight > 0) {
        progressBar.style.width = (scrollY / docHeight * 100) + '%';
    }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ======== Scroll Reveal ======== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ======== Mini-TOC for Long Pages ======== */
if (['trust', 'predictions'].includes(currentPage)) {
    const headings = document.querySelectorAll('.chart-header h2, .insight-callout__title, .section h2[style]');
    if (headings.length > 2) {
        const toc = document.createElement('div');
        toc.className = 'mini-toc';
        headings.forEach((h, i) => {
            if (!h.id) h.id = 'section-' + i;
            const dot = document.createElement('a');
            dot.href = '#' + h.id;
            dot.className = 'mini-toc__dot';
            dot.title = h.textContent;
            toc.appendChild(dot);
        });
        document.body.appendChild(toc);
    }
}

/* ======== Load Search ======== */
const searchScript = document.createElement('script');
searchScript.src = 'js/search.js';
searchScript.defer = true;
document.head.appendChild(searchScript);

/* ======== Animated Counter ======== */
function animateValue(el, target, duration = 1600) {
    const start = performance.now();
    const update = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target * eased;
        el.textContent = val < 10 ? val.toFixed(1) : Math.round(val);
        if (t < 1) requestAnimationFrame(update);
        else el.textContent = target % 1 === 0 ? target : target.toFixed(1);
    };
    requestAnimationFrame(update);
}
