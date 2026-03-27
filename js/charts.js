/* ======== Chart Color Palette (derived from CSS custom properties) ======== */
const _s = getComputedStyle(document.documentElement);
const _v = (n) => _s.getPropertyValue(n).trim();
const C = {
    amber: _v('--amber'), amberA: _v('--amber-a'), amberBg: _v('--amber-glow'),
    cyan: _v('--cyan'), cyanA: _v('--cyan-a'), cyanBg: _v('--cyan-glow'),
    violet: _v('--violet'), violetA: _v('--violet-a'), violetBg: _v('--violet-glow'),
    red: _v('--red'), redA: _v('--red-a'), redBg: _v('--red-glow'),
    green: _v('--green'), greenA: _v('--green-a'), greenBg: _v('--green-glow'),
    text: _v('--text-primary'), textSec: _v('--text-secondary'), dim: _v('--text-dim'),
    grid: _v('--grid'), surface: _v('--surface')
};

/* ======== Chart.js Defaults ======== */
Chart.defaults.color = C.textSec;
Chart.defaults.font.family = "'Albert Sans', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyle = 'circle';
Chart.defaults.plugins.legend.labels.padding = 16;
Chart.defaults.plugins.tooltip.backgroundColor = C.surface;
Chart.defaults.plugins.tooltip.titleColor = C.text;
Chart.defaults.plugins.tooltip.bodyColor = C.textSec;
Chart.defaults.plugins.tooltip.borderColor = 'rgba(255,255,255,0.08)';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.displayColors = true;
Chart.defaults.plugins.tooltip.boxPadding = 4;

/* ======== Chart Helper ======== */
function createChart(id, type, data, overrides) {
    const canvas = document.getElementById(id);
    // Auto-set aria-label from nearest chart-header heading
    const wrap = canvas && canvas.closest('.chart-wrap, .embed-canvas');
    if (canvas && !canvas.getAttribute('aria-label')) {
        const heading = wrap && wrap.querySelector('.chart-header h2, .chart-header h3');
        if (heading) canvas.setAttribute('aria-label', 'Chart: ' + heading.textContent);
        canvas.setAttribute('role', 'img');
    }
    // Add download button
    const body = canvas && canvas.closest('.chart-body');
    if (body && !body.querySelector('.chart-download')) {
        const btn = document.createElement('button');
        btn.className = 'chart-download';
        btn.textContent = 'PNG';
        btn.title = 'Download chart as PNG';
        btn.type = 'button';
        btn.addEventListener('click', () => {
            const tmp = document.createElement('a');
            tmp.href = canvas.toDataURL('image/png');
            tmp.download = (id || 'chart') + '.png';
            tmp.click();
        });
        body.style.position = 'relative';
        body.appendChild(btn);
    }
    const defaults = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1000, easing: 'easeOutQuart' }
    };
    const options = Object.assign({}, defaults, overrides);
    if (overrides && overrides.scales) options.scales = overrides.scales;
    if (overrides && overrides.plugins) options.plugins = overrides.plugins;
    if (overrides && overrides.animation) options.animation = overrides.animation;
    return new Chart(canvas, { type, data, options });
}

/* ======== Lazy Chart Rendering ======== */
function lazyChart(id, type, data, overrides) {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                createChart(id, type, data, overrides);
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(canvas);
}
