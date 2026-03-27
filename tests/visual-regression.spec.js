const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'home', path: '/index.html' },
  { name: 'adoption', path: '/adoption.html' },
  { name: 'tools', path: '/tools.html' },
  { name: 'agentic-split', path: '/agentic-split.html' },
  { name: 'segments', path: '/segments.html' },
  { name: 'trust', path: '/trust.html' },
  { name: 'timeline', path: '/timeline.html' },
  { name: 'predictions', path: '/predictions.html' },
  { name: 'sources', path: '/sources.html' },
  { name: 'summary', path: '/summary.html' },
  { name: 'glossary', path: '/glossary.html' },
  { name: '404', path: '/404.html' },
];

for (const { name, path } of pages) {
  test(`${name} page visual snapshot`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    // Wait for animations/reveals to settle
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
}
