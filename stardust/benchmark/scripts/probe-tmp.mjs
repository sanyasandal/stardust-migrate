import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(pathToFileURL(process.cwd() + '/stardust/reskin/pages/index.html').href, { waitUntil: 'load' });
const r = await p.evaluate(() => {
  const q = (s) => document.querySelector(s); const cs = (e, props) => { const c = getComputedStyle(e); const r = e.getBoundingClientRect(); return Object.fromEntries([...props.map((k) => [k, c[k]]), ['box', [r.x, r.y, r.width, r.height].map(Math.round).join(',')]]); };
  return {
    section: cs(q('[data-slot=s01]'), ['padding', 'background-color']),
    container: cs(q('[data-slot=s01] > .container'), ['padding', 'max-width']),
    panel: cs(q('[data-slot=s01] .panel'), ['display', 'padding', 'grid-template-columns', 'min-height', 'align-items']),
    img: cs(q('[data-slot=s01] .split-img'), ['width', 'height', 'object-fit', 'padding', 'background-color', 'aspect-ratio', 'align-self', 'max-height']),
    hdr: cs(q('.site-header .chrome-row .container'), ['display', 'grid-template-columns', 'justify-content']),
    brand: cs(q('.site-header .brand'), ['position', 'grid-column']),
    nav: cs(q('.site-header nav'), ['position', 'left', 'transform', 'grid-column']),
  };
});
console.log(JSON.stringify(r, null, 1)); await b.close();
