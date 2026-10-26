// stardust/reskin/renderers/eds-content.mjs — deploy Steps 1–9 conversion of the gated reskin page
// (stardust/reskin/pages/index.html) into DA body fragments: one block per section[data-slot],
// named by mapping.json "blocks". Every string, href and image is read from the page's DOM
// (itself generated from content-model.json); nothing is retyped.
//   node stardust/reskin/renderers/eds-content.mjs
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const NS = 'fortstreet';
const mapping = JSON.parse(readFileSync('stardust/reskin/mapping.json', 'utf8'));
const model = JSON.parse(readFileSync('stardust/reskin/content-model/index/content-model.json', 'utf8'));
const page = mapping.pages.index;

const browser = await chromium.launch();
const tab = await browser.newPage();
await tab.goto(pathToFileURL(resolve('stardust/reskin/pages/index.html')).href, { waitUntil: 'load' });

const out = await tab.evaluate(({ slots, blocks }) => {
  const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const attr = (t) => esc(t).replace(/"/g, '&quot;');
  const src = (img) => img.getAttribute('data-source-src') || img.src;
  const imgTag = (img) => `<img src="${attr(src(img))}" alt="${attr(img.getAttribute('alt') || '')}">`;
  // inline HTML of an authored text node: keep strong/em/a/br, drop everything else to its text
  const inline = (node) => [...node.childNodes].map((n) => {
    if (n.nodeType === 3) return esc(n.textContent);
    if (n.nodeType !== 1) return '';
    const tag = n.tagName.toLowerCase();
    if (n.classList.contains('glyph')) return '';
    if (['strong', 'em', 'b', 'i'].includes(tag)) return `<${tag}>${inline(n)}</${tag}>`;
    if (tag === 'a') return `<a href="${attr(n.getAttribute('href'))}">${inline(n)}</a>`;
    if (tag === 'br') return '<br>';
    return inline(n);
  }).join('');
  const cta = (a) => `<p><strong><a href="${attr(a.getAttribute('href'))}">${inline(a)}</a></strong></p>`;
  const textCell = (flow, { headingTag } = {}) => {
    const parts = [];
    [...flow.children].forEach((n) => {
      if (n.matches('.heading')) {
        if (n.querySelector('img')) return; // an image-only heading is the media cell
        if (!n.textContent.trim()) return;
        const tag = headingTag || n.tagName.toLowerCase();
        parts.push(`<${tag}>${inline(n)}</${tag}>`);
      } else if (n.matches('p.aux') && n.querySelector('a') && n.textContent.trim() === n.querySelector('a').textContent.trim()) {
        parts.push(cta(n.querySelector('a')));
      } else if (n.matches('.actions')) {
        n.querySelectorAll('a').forEach((a) => parts.push(cta(a)));
      } else if (n.matches('p')) {
        parts.push(`<p>${inline(n)}</p>`);
      }
    });
    return parts.join('');
  };
  const sections = [];
  let ctaSpaced = false;
  document.querySelectorAll('main > section[data-slot]').forEach((sec) => {
    const slot = sec.dataset.slot;
    const m = slots[slot].module;
    const name = blocks[m];
    const flow = sec.querySelector('.flow');
    let html = '';
    if (m === 'M2') {
      html = `<div class="${name}"><div><div>${textCell(flow, { headingTag: 'h1' })}</div><div>${imgTag(sec.querySelector('.split-img'))}</div></div></div>`;
    } else if (m === 'M4') {
      ctaSpaced = !!flow.querySelector('.actions');
      const cls = [name, ctaSpaced ? 'cta-spaced' : ''].filter(Boolean).join(' ');
      const img = `<div>${imgTag(sec.querySelector('.split-img'))}</div>`;
      const txt = `<div>${textCell(flow)}</div>`;
      html = `<div class="${cls}"><div>${sec.classList.contains('media-first') ? img + txt : txt + img}</div></div>`;
    } else if (m === 'M6') {
      const img = flow.querySelector('.heading-media img');
      html = `<div class="${name}"><div><div>${img ? imgTag(img) : ''}</div><div>${textCell(flow)}</div></div></div>`;
    } else if (m === 'M3') {
      html = `<div class="${name}"><div><div>${imgTag(sec.querySelector('.band-img'))}</div><div>${textCell(flow)}</div></div></div>`;
    } else if (m === 'M9') {
      const head = flow.querySelector(':scope > .heading');
      const posts = slot === 's09';
      const rows = [...flow.querySelectorAll('.card')].map((card) => {
        const img = card.querySelector('.media img');
        const ps = [...card.querySelectorAll(':scope > p')].map((p) => `<p>${inline(p)}</p>`).join('');
        return `<div><div>${img ? imgTag(img) : ''}</div><div>${ps}</div></div>`;
      }).join('');
      html = `${head ? `<h2>${inline(head)}</h2>` : ''}<div class="${name}${posts ? ' posts' : ''}">${rows}</div>`;
    }
    sections.push({ slot, html });
  });
  // chrome
  const h = document.querySelector('header.site-header');
  const logo = h.querySelector('.brand img');
  const brandText = [...h.querySelectorAll('.brand-text .nav-text')].map((s) => `<p>${inline(s)}</p>`).join('');
  const navLinks = [...h.querySelectorAll('nav#site-nav > a')].map((a) => `<li><a href="${attr(a.getAttribute('href'))}">${inline(a).trim()}</a></li>`).join('');
  const util = [...h.querySelectorAll('.utility-bar a')].map((a) => `<p><a href="${attr(a.getAttribute('href'))}">${inline(a)}</a></p>`).join('');
  const skips = [...h.querySelectorAll('.nav-actions a.sr-only')].map((a) => `<p><a href="${attr(a.getAttribute('href'))}">${inline(a)}</a></p>`).join('');
  const nav = [`<p>${imgTag(logo)}</p>${brandText}`, `<ul>${navLinks}</ul>`, util + skips];
  const f = document.querySelector('footer.site-footer');
  const fb = f.querySelector('.footer-brand');
  const footer = [
    `<p>${imgTag(fb.querySelector('img'))}</p>${[...fb.querySelectorAll('p')].map((p) => `<p>${inline(p)}</p>`).join('')}`,
    ...[...f.querySelectorAll('.footer-col')].map((col) => [...col.children].map((n) => (n.tagName === 'UL'
      ? `<ul>${[...n.children].map((li) => `<li>${inline(li)}</li>`).join('')}</ul>`
      : `<p>${inline(n)}</p>`)).join('')),
    (() => { const s = f.querySelector('.footer-social'); return `<p>${inline(s.querySelector('p'))}</p><ul>${[...s.querySelectorAll('li')].map((li) => `<li>${inline(li)}</li>`).join('')}</ul>`; })(),
  ];
  return { sections, nav, footer };
}, { slots: page.slots, blocks: mapping.blocks });
await browser.close();

const md = model.metadata;
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const row = (k, v) => `<div><div>${k}</div><div>${esc(v)}</div></div>`;
const metadata = `<div class="metadata">${row('Title', md.title)}${row('Description', md.description)}${row('nav', `/${NS}/nav`)}${row('footer', `/${NS}/footer`)}</div>`;
const doc = (secs) => `<body>\n  <header></header>\n  <main>\n${secs.map((s) => `    <div>${s}</div>`).join('\n')}\n  </main>\n  <footer></footer>\n</body>\n`;

mkdirSync(`content/${NS}`, { recursive: true });
writeFileSync(`content/${NS}/index.html`, doc([...out.sections.map((s) => s.html), metadata]));
writeFileSync(`content/${NS}/nav.html`, doc(out.nav));
writeFileSync(`content/${NS}/footer.html`, doc(out.footer));
console.log(`eds-content: ${out.sections.length} sections → content/${NS}/index.html, nav.html (${out.nav.length} sections), footer.html (${out.footer.length} sections)`);
