// usage: node section-compare.mjs <reskin file|url> <eds url> [width=1440]
// pairs reskin main>section[data-slot] with EDS non-empty main>.section in order; prints heights + tops
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const [, , a, b, w = '1440'] = process.argv;
const u = (t) => (/^https?:/.test(t) ? t : pathToFileURL(resolve(t)).href);
const br = await chromium.launch();
async function measure(url, sel) {
  const p = await br.newPage({ viewport: { width: +w, height: 900 } });
  await p.goto(url, { waitUntil: 'networkidle' }).catch(() => {});
  for (let i = 0; i < 10; i++) { await p.mouse.wheel(0, 900); await p.waitForTimeout(100); }
  await p.waitForTimeout(1500);
  const r = await p.evaluate((s) => {
    const box = (e) => { const r = e.getBoundingClientRect(); return [Math.round(r.top + scrollY), Math.round(r.height)]; };
    const secs = [...document.querySelectorAll(s)].filter((e) => e.getBoundingClientRect().height > 0).map(box);
    const h = document.querySelector('header'); const f = document.querySelector('footer');
    return { secs, header: h ? box(h) : null, footer: f ? box(f) : null, doc: document.documentElement.scrollHeight };
  }, sel);
  await p.close(); return r;
}
const A = await measure(u(a), 'main > section[data-slot]');
const B = await measure(u(b), 'main > .section');
console.log(`doc ${A.doc} vs ${B.doc} (Δ ${B.doc - A.doc}) | header ${A.header} vs ${B.header} | footer ${A.footer} vs ${B.footer}`);
A.secs.forEach((s, i) => { const t = B.secs[i] || [NaN, NaN]; console.log(`#${i + 1} top ${s[0]}→${t[0]} (Δ${t[0] - s[0]}) h ${s[1]}→${t[1]} (Δ${t[1] - s[1]})`); });
if (B.secs.length !== A.secs.length) console.log(`section count ${A.secs.length} vs ${B.secs.length}`);
await br.close();
