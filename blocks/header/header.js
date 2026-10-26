import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * header — oneAZ Header (Figma 12379:10829): utility row (32px) above the main row with brand,
 * centred navigation and actions. Template-slotted from the authored nav document:
 *   section 1 — brand: logo picture, school name paragraph, motto paragraph
 *   section 2 — navigation list
 *   section 3 — utility links (first paragraph) and skip links (the rest)
 * Authored nodes are MOVED into their slots, never rebuilt.
 */
function el(tag, className) {
  const d = document.createElement(tag);
  if (className) d.className = className;
  return d;
}

function iconButton(className, glyph, label) {
  const b = el('button', className);
  b.type = 'button';
  if (label) b.setAttribute('aria-label', label);
  const g = el('span', `glyph ${glyph}`);
  g.setAttribute('aria-hidden', 'true');
  b.append(g);
  return b;
}

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);
  const sections = fragment ? [...fragment.querySelectorAll(':scope > .section')] : [];
  const content = (i) => (sections[i] ? sections[i].querySelector('.default-content-wrapper') : null);

  const root = el('div', 'site-header');
  const utility = el('div', 'utility-bar');
  const utilityInner = el('div', 'container');
  utility.append(utilityInner);
  const row = el('div', 'chrome-row nav-align-center');
  const rowInner = el('div', 'container');
  row.append(rowInner);

  const brand = el('div', 'brand');
  const brandText = el('div', 'brand-text');
  const brandSrc = content(0);
  if (brandSrc) {
    const picture = brandSrc.querySelector('picture') || brandSrc.querySelector('img');
    if (picture) {
      const img = picture.tagName === 'IMG' ? picture : picture.querySelector('img');
      if (img) img.classList.add('logo');
      brand.append(picture.closest('p') || picture);
    }
    [...brandSrc.children].forEach((p) => brandText.append(p));
  }
  brand.append(brandText);

  const nav = el('nav');
  nav.id = 'site-nav';
  const navSrc = content(1);
  if (navSrc) [...navSrc.children].forEach((n) => nav.append(n));

  const actions = el('div', 'nav-actions');
  const toolSrc = content(2);
  if (toolSrc) {
    const [first, ...rest] = [...toolSrc.children];
    if (first) utilityInner.append(first);
    rest.forEach((p) => {
      p.classList.add('sr-only');
      actions.append(p);
    });
  }
  actions.append(iconButton('icon-btn', 'glyph-search', 'Search'));
  const toggle = iconButton('icon-btn nav-toggle', 'glyph-menu', 'Menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'site-nav');
  toggle.addEventListener('click', () => {
    const open = root.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  actions.append(toggle);

  rowInner.append(brand, nav, actions);
  root.append(utility, row);
  block.replaceChildren(root);
}
