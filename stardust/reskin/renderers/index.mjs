// stardust/reskin/renderers/index.mjs — archetype renderer for the home page (template "index").
//
// Content: delegated verbatim to the generic stream-render.mjs (every string, href and image comes
// from content-model.json; this file adds no text). Surface: one module stylesheet transcribed from
// the oneAZ v3.2 Figma frames (figma-gate boxes --module M1..M7), styled only through the donor-token
// custom properties stream-render emits from donor-tokens.json. Geometry literals cite their node.
//
//   node stardust/reskin/renderers/index.mjs [--register]
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';

const OUT = 'stardust/reskin/pages/index.html';
const args = ['stardust/scripts/reskin/stream-render.mjs', 'index', '--localize-images', '--out', OUT];
if (process.argv.includes('--register')) args.push('--register');
execFileSync('node', args, { stdio: 'inherit' });

const FONTS = `
@font-face { font-family: "Inter"; font-style: normal; font-weight: 100 900; font-display: swap;
  src: url("assets/fonts/inter-latin-var.woff2") format("woff2"); }
@font-face { font-family: "Roboto Slab"; font-style: normal; font-weight: 100 900; font-display: swap;
  src: url("assets/fonts/roboto-slab-latin-var.woff2") format("woff2"); }
`;

// Lexia role shorthands (family token falls back to Roboto Slab; Lexia is licensed, never bundled).
const MODULES = `
/* ---- oneAZ base ---------------------------------------------------------------------------- */
body { font-family: var(--type-family); color: var(--palette-body-fg); background: var(--palette-page-bg); }
.site-main section { padding: var(--layout-section-padding-y) 0; }
.site-main section > .container { max-width: var(--layout-container-max-width); padding: 0; }
.site-main section.band[data-module] .panel { background: none; padding: 0; border-radius: 0; max-width: none; color: inherit; box-shadow: none; }
.site-main .heading:empty { display: none; }
.site-main p.lead, .site-main .card p { font: var(--type-body-large-font-weight) var(--type-body-large-font-size)/var(--type-body-large-line-height) var(--type-body-large-font-family); color: var(--palette-body-fg); margin: 0; }
.site-main .flow { display: flex; flex-direction: column; gap: 16px; }                 /* Text + Button gap 16 (12950:24810) */
.site-main .btn, .site-main section:is([data-module="M2"], [data-module="M4"], [data-module="M6"]) .flow > p.aux > .link:only-child {
  display: inline-flex; align-items: center; justify-content: center; align-self: flex-start;
  box-sizing: border-box; height: var(--buttons-primary-height); padding: var(--buttons-primary-padding);
  background: var(--buttons-primary-background); color: var(--buttons-primary-color); border: var(--buttons-primary-border);
  border-radius: var(--buttons-primary-border-radius); text-decoration: none;
  font: var(--buttons-primary-font-weight) var(--buttons-primary-font-size)/var(--buttons-primary-line-height) var(--buttons-primary-font-family); }
.site-main section:is([data-module="M2"], [data-module="M4"], [data-module="M6"]) .flow > p.aux:has(> .link:only-child) { display: flex; margin: 0; }

/* ---- M2 Home Hero Branded (12950:24813: 1440×428 sage, content 1180, cols 574 | 574, gap 32) --- */
.site-main section[data-module="M2"] { background: var(--palette-light-band-bg); padding: 0; }
.site-main section[data-module="M2"] .panel { display: grid; grid-template-columns: 574px 574px; column-gap: 32px; align-items: center; min-height: 428px; }
.site-main section[data-module="M2"] .flow { padding: 32px 0; }                            /* logo frame pad 32 (12950:24819) */
.site-main section[data-module="M2"] .heading { font: var(--type-display-font-weight) var(--type-display-font-size)/var(--type-display-line-height) var(--type-display-font-family); color: var(--palette-heading-fg); margin: 0; }
.site-main section[data-module="M2"] .split-img { width: 574px; height: 428px; max-height: none; object-fit: cover; object-view-box: inset(0 0 21.5% 0); border-radius: 0; align-self: stretch; }   /* source photo carries a white lower 21.3% (rows 1049-1333) left for its overlay card: cropped, not edited */

/* ---- M5 Teaser / Card grid (12542:1442 "3 Teasers": 3 × 366.67, gap 40; card 12436:14706) ---- */
.site-main section:is([data-module="M5"], [data-module="M9"]) .flow { gap: 40px; }
.site-main section:is([data-module="M5"], [data-module="M9"]) .flow > .heading { font: var(--type-h2-font-weight) var(--type-h2-font-size)/var(--type-h2-line-height) var(--type-h2-font-family); color: var(--palette-heading-fg); margin: 0; }  /* .Title Introduction 46/50 (12529:1207) */
.site-main section:is([data-module="M5"], [data-module="M9"]) .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px; }
.site-main section:is([data-module="M5"], [data-module="M9"]) .card { background: var(--cards-primary-background); border-radius: var(--cards-primary-border-radius); overflow: hidden; padding: 0; display: flex; flex-direction: column; gap: 16px; box-shadow: none; border: 0; }
.site-main section:is([data-module="M5"], [data-module="M9"]) .card > .media:first-child { margin: 0 0 8px; aspect-ratio: auto; height: 220px; }   /* Image Placeholder 220 tall (12436:14660); +8 = pad 24 − gap 16 */
.site-main section:is([data-module="M5"], [data-module="M9"]) .card > .media:first-child img { width: 100%; height: 220px; object-fit: cover; border-radius: 0; }
.site-main section:is([data-module="M5"], [data-module="M9"]) .card > :not(.media:first-child) { margin: 0 var(--cards-primary-padding); }
.site-main section:is([data-module="M5"], [data-module="M9"]) .card:has(> .media:first-child) { padding: 0 0 var(--cards-primary-padding); }   /* Frame 2 pad 24 (12436:14661) */
.site-main section:is([data-module="M5"], [data-module="M9"]) .card > :last-child { margin-bottom: 0; }
.site-main section:is([data-module="M5"], [data-module="M9"]) .card > p.aux:has(> .link) .link,
.site-main section:is([data-module="M5"], [data-module="M9"]) .card :is(h2, h3, h4) { font: var(--type-card-title-font-weight) var(--type-card-title-font-size)/var(--type-card-title-line-height) var(--type-card-title-font-family); color: var(--cards-primary-title-color); text-decoration: none; }
.site-main section:is([data-module="M5"], [data-module="M9"]) .card > .glyph:last-child { color: var(--palette-accent); margin-top: auto; }

/* s09 Facebook posts: the link text is the post copy (body), not a card title */
.site-main section[data-slot="s09"] .card > p.aux:has(> .link) .link { font: var(--type-card-body-font-weight) var(--type-card-body-font-size)/var(--type-card-body-line-height) var(--type-card-body-font-family); color: var(--palette-body-fg); }

/* ---- M4 Teaser / Text + Image (12431:14270: 1180×324, image 574×324 | text 574, gap 32) ------- */
.site-main section[data-module="M4"] .panel { display: grid; grid-template-columns: 574px 574px; column-gap: 32px; align-items: start; }
.site-main section[data-module="M4"].media-first .split-img { order: -1; }
.site-main section[data-module="M4"] .split-img { width: 574px; height: 324px; object-fit: cover; object-position: center top; border-radius: 0; }
.site-main section[data-module="M4"] .flow { min-height: 324px; }
.site-main section[data-module="M4"] .flow > p.aux:last-child { margin-top: auto; }       /* button pinned to the column foot (12431:14252 y 807 of 525..849) */
.site-main section[data-module="M4"] .heading { font: var(--type-h4-font-weight) var(--type-h4-font-size)/var(--type-h4-line-height) var(--type-h4-font-family); color: var(--palette-heading-fg); margin: 0; }

/* ---- M6 CTA Banner (13370:1909: white, 4px Grey-40 border, radius 8, pad 40, gap 20) --------- */
.site-main section[data-module="M6"] > .container { max-width: none; }   /* Desktop banner is drawn 1440 wide (13370:1909) */
.site-main section.band[data-module="M6"] .panel { box-sizing: border-box; width: 100%; background: var(--palette-page-bg); border: 4px solid var(--palette-border-muted); border-radius: var(--radii-card); padding: 40px; }
.site-main section[data-module="M6"] .flow { display: grid; grid-template-columns: 120px 1fr; column-gap: 20px; row-gap: 16px; align-content: start; }
.site-main section[data-module="M6"] .flow > * { grid-column: 2; }
.site-main section[data-module="M6"] .flow > .heading-media { grid-column: 1; grid-row: 1 / span 4; margin: 0; }
.site-main section[data-module="M6"] .heading-media img { width: 120px; height: 120px; object-fit: cover; display: block; }   /* Image Placeholder 120×120 (13370:1453) */
.site-main section[data-module="M6"] .heading { font: var(--type-h4-font-weight) var(--type-h4-font-size)/var(--type-h4-line-height) var(--type-h4-font-family); color: var(--palette-heading-fg); margin: 0; }
.site-main section[data-module="M6"] p.lead { font: var(--type-body-font-weight) var(--type-body-font-size)/var(--type-body-line-height) var(--type-body-font-family); }   /* .Text 16/24 (12534:1254) */

/* ---- M3 Teaser / Home Hero, Size Large (12421:13803: 1440×480 image + Graphite overlay) ------- */
.site-main section[data-module="M3"] { position: relative; min-height: 480px; padding: 0; display: flex; align-items: center; background: var(--palette-body-fg); overflow: hidden; }
.site-main section[data-module="M3"] .band-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
.site-main section[data-module="M3"]::after { content: ""; position: absolute; inset: 0; background: color-mix(in srgb, var(--palette-body-fg) 70%, transparent); }   /* Black Overlay fill rgb(60,66,66) (12421:13802) */
.site-main section[data-module="M3"] > .container { position: relative; z-index: 1; width: 100%; }
.site-main section[data-module="M3"] .panel { background: none; box-shadow: none; }
.site-main section[data-module="M3"] :is(.heading, p.lead) { color: var(--buttons-primary-color); }
.site-main section[data-module="M3"] .heading { font: var(--type-display-font-weight) var(--type-display-font-size)/var(--type-display-line-height) var(--type-display-font-family); margin: 0; }

/* ---- M1 Header (12379:10829: utility row 32 / main row 60, content 1180) ---------------------- */
.site-header .chrome-row .container { display: grid; grid-template-columns: auto 1fr auto; column-gap: 32px; align-items: center; }
.site-header nav { justify-content: center; }
.site-header { background: var(--palette-page-bg); border-bottom: 1px solid var(--palette-light-band-bg); }
.site-header .utility-bar { background: none; border-bottom: 1px solid var(--palette-light-band-bg); }
.site-header .utility-bar .container { max-width: var(--layout-container-max-width); height: 32px; padding: 0; display: flex; justify-content: flex-end; align-items: center; }
.site-header .utility-bar a { font: 500 12px/16px var(--type-display-font-family); color: var(--palette-body-fg); text-decoration: underline; }   /* Contact Selector label Lexia 500 12/16 */
.site-header .chrome-row .container { max-width: var(--layout-container-max-width); min-height: 60px; padding: 12px 0; box-sizing: border-box; }
.site-header nav a { font: 400 14px/16px var(--type-display-font-family); color: var(--palette-body-fg); padding: 8px 16px; text-decoration: none; }   /* Navigation Item Lexia 14/16, pad 8/16 */
.site-header .brand-text .nav-text:first-child { font-family: var(--type-display-font-family); color: var(--palette-heading-fg); }
.site-header .icon-btn { color: var(--palette-body-fg); }

/* ---- M7 Footer (12406:12186: white, pad 40, content 1180, columns gap 45, rows gap 16/48) ------ */
.site-footer, .site-footer.tone-light { background: var(--palette-page-bg); color: var(--palette-body-fg); border-top: 1px solid var(--palette-light-band-bg); }
.site-footer .chrome-footer { max-width: var(--layout-container-max-width); padding: 40px 0; display: flex; flex-direction: column; gap: 48px; }
.site-footer { padding: 0; }   /* the module's own pad 40 (12406:12186) replaces the generic 48 */
.site-footer .footer-main { gap: 45px; justify-content: space-between; }
.site-footer .footer-main > * { flex: 0 0 300px; }   /* 1st/2nd/3rd Column 300 wide at x 194 / 634 / 1074 (12406:12144…12155) */
.site-footer .footer-zoned :is(p, li, a) { font: var(--type-body-font-weight) var(--type-body-font-size)/var(--type-body-line-height) var(--type-body-font-family); color: var(--palette-body-fg); }
.site-footer .footer-zoned ul { display: flex; flex-direction: column; gap: 16px; }
.site-footer .footer-name, .site-footer .footer-col-title { font-family: var(--type-display-font-family) !important; color: var(--palette-heading-fg) !important; }
.site-footer .footer-social { display: flex; align-items: center; gap: 16px; margin-top: 0; }   /* Container gap 48 alone separates Main Content and Social (12406:12184) */
.site-footer .footer-social ul.icon-links { flex-direction: row; gap: 16px; }   /* Social Icons row gap 16 (12406:12170) */
.site-footer .footer-social :is(p, a) { font: 500 12px/20px var(--type-family); }

/* ---- mobile (375 frames: gutter 16, stacked) ---------------------------------------------------- */
@media (max-width: 900px) {
  .site-main section > .container { padding: 0 var(--layout-mobile-gutter); }
  .site-main section { padding: var(--layout-mobile-section-padding-y) 0; }
  .site-main section[data-module="M2"] .panel, .site-main section[data-module="M4"] .panel { grid-template-columns: 1fr; row-gap: 16px; }
  .site-main section[data-module="M2"] > .container { padding: 0; }
  .site-main section[data-module="M2"] .split-img { order: -1; width: 100%; height: 280px; }   /* mobile image 375×280 (12950:24862) */
  .site-main section[data-module="M2"] .flow { padding: 0 var(--layout-mobile-gutter) 24px; }   /* pad 0,16,24,16 (12950:24855) */
  .site-main section[data-module="M2"] .heading, .site-main section[data-module="M3"] .heading { font-size: var(--type-h3-font-size); line-height: var(--type-h3-line-height); }   /* 36/40 (12950:24859) */
  .site-main section[data-module="M4"] .split-img { order: -1; width: calc(100% + 2 * var(--layout-mobile-gutter)); max-width: none; margin: 0 calc(-1 * var(--layout-mobile-gutter)); height: 220px; }   /* 375×220 edge to edge (12431:14294) */
  .site-main section[data-module="M4"] .flow { min-height: 0; }
  .site-main section:is([data-module="M5"], [data-module="M9"]) .cards { grid-template-columns: 1fr; gap: 16px; margin: 0 calc(-1 * var(--layout-mobile-gutter)); }   /* 3 Teasers mobile: cards 375 wide, gap 16 (12552:4525) */
  .site-main section:is([data-module="M5"], [data-module="M9"]) .card > .media:first-child, .site-main section:is([data-module="M5"], [data-module="M9"]) .card > .media:first-child img { height: 188px; }   /* 375×188 (12436:14801) */
  .site-main section:is([data-module="M5"], [data-module="M9"]) .card:has(> .media:first-child) { padding: 0 0 16px; }   /* mobile Frame 2 pad 16 (12436:14802) */
  .site-main section:is([data-module="M5"], [data-module="M9"]) .card:has(> .media:first-child) > :not(.media:first-child) { margin: 0 16px; }
  .site-main section:is([data-module="M5"], [data-module="M9"]) .flow > .heading { font-size: var(--type-h3-font-size); line-height: var(--type-h3-line-height); }
  .site-main section[data-module="M6"] > .container { padding: 0; }
  .site-main section.band[data-module="M6"] .panel { padding: 20px; }   /* mobile pad 20 (13370:2088) */
  .site-main section[data-module="M6"] .flow { grid-template-columns: 1fr; row-gap: 20px; }
  .site-main section[data-module="M6"] .flow > * { grid-column: 1; }
  .site-main section[data-module="M6"] .flow > .heading-media { grid-column: 1; grid-row: auto; }
  .site-footer .chrome-footer { padding: 32px var(--layout-mobile-gutter); }
  .site-footer .footer-main > * { flex: 1 1 auto; }
}
`;

let html = readFileSync(OUT, 'utf8');
// Model images the generic pass did not emit (the source nests s05's picture inside an empty <h3>, which
// the ordered stream records as an empty heading). Carry each one from content-model.json images[] into
// the slot's empty heading, exactly where the source has it; fail loudly when there is no such heading.
const model = JSON.parse(readFileSync('stardust/reskin/content-model/index/content-model.json', 'utf8'));
const hostPath = (u) => { const x = new URL(u); return x.host + x.pathname; };
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
async function localize(url) {
  const { host, pathname } = new URL(url);
  const rel = `assets/img/${host}${pathname}`;
  for (const root of ['stardust/prototypes/', 'stardust/reskin/pages/']) {
    const f = root + rel;
    if (existsSync(f)) continue;
    mkdirSync(dirname(f), { recursive: true });
    if (root.startsWith('stardust/prototypes')) {
      const res = await fetch(url); if (!res.ok) throw new Error(`renderers/index: ${url} → HTTP ${res.status}`);
      writeFileSync(f, Buffer.from(await res.arrayBuffer()));
    } else copyFileSync('stardust/prototypes/' + rel, f);
  }
  return rel;
}
for (const sec of model.sections) {
  const re = new RegExp(`(<section[^>]*data-slot="${sec.slot}"[\\s\\S]*?</section>)`);
  const m = html.match(re); if (!m) continue;
  let block = m[1];
  const have = new Set([...block.matchAll(/data-source-src="([^"]+)"/g)].map((x) => hostPath(x[1].replace(/&amp;/g, '&'))));
  for (const img of sec.images || []) {
    if (have.has(hostPath(img.currentSrc))) continue;
    const slotRe = /<(h[1-6]) class="heading"><\/\1>/;
    if (!slotRe.test(block)) throw new Error(`renderers/index: ${sec.slot} image ${img.currentSrc} has no rendered position`);
    const rel = await localize(img.currentSrc);
    block = block.replace(slotRe, `<$1 class="heading heading-media"><img src="${esc(rel)}" data-source-src="${esc(img.currentSrc)}" alt="${esc(img.alt || '')}" width="${img.w}" height="${img.h}" loading="lazy"></$1>`);
    console.log(`renderers/index: ${sec.slot} carried model image ${hostPath(img.currentSrc)} into its empty heading`);
  }
  html = html.replace(m[1], block);
}

html = html.replace('</head>', `<style data-oneaz-modules>${FONTS}${MODULES}</style>\n</head>`);
writeFileSync(OUT, html);
console.log(`renderers/index.mjs: oneAZ module stylesheet injected → ${OUT}`);
