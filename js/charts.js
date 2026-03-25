/* ======== Chart Color Palette ======== */
const C = {
    amber: '#e8a838', amberA: 'rgba(232,168,56,0.7)', amberBg: 'rgba(232,168,56,0.12)',
    cyan: '#38bdf8', cyanA: 'rgba(56,189,248,0.7)', cyanBg: 'rgba(56,189,248,0.12)',
    violet: '#a78bfa', violetA: 'rgba(167,139,250,0.7)', violetBg: 'rgba(167,139,250,0.12)',
    red: '#f87171', redA: 'rgba(248,113,113,0.7)', redBg: 'rgba(248,113,113,0.12)',
    green: '#4ade80', greenA: 'rgba(74,222,128,0.7)', greenBg: 'rgba(74,222,128,0.12)',
    text: '#eae8e3', textSec: '#9b9da6', dim: '#5a5d6a',
    grid: 'rgba(255,255,255,0.05)', surface: '#151b30'
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
