import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * footer — oneAZ Footer (Figma 12406:12186): brand column, two link columns, social row.
 * Template-slotted from the authored footer document:
 *   section 1 — brand: logo picture, name paragraph, acknowledgement paragraph
 *   section 2 — column with a title paragraph and a list
 *   section 3 — column list
 *   section 4 — social: label paragraph and a list of links
 * Authored nodes are MOVED into their slots, never rebuilt.
 */
function el(tag, className) {
  const d = document.createElement(tag);
  if (className) d.className = className;
  return d;
}

export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);
  const sections = fragment ? [...fragment.querySelectorAll(':scope > .section')] : [];
  const content = (i) => (sections[i] ? sections[i].querySelector('.default-content-wrapper') : null);

  const root = el('div', 'site-footer tone-light');
  const zoned = el('div', 'container chrome-footer footer-zoned');
  const main = el('div', 'footer-main');

  const brand = el('div', 'footer-brand');
  const brandSrc = content(0);
  if (brandSrc) {
    const picture = brandSrc.querySelector('picture') || brandSrc.querySelector('img');
    if (picture) {
      const img = picture.tagName === 'IMG' ? picture : picture.querySelector('img');
      if (img) {
        img.classList.add('logo');
        img.loading = 'eager';
      }
      brand.append(picture.closest('p') || picture);
    }
    const [name, ...prose] = [...brandSrc.children];
    if (name) {
      name.classList.add('footer-name');
      brand.append(name);
    }
    prose.forEach((p) => {
      p.classList.add('footer-prose');
      brand.append(p);
    });
  }
  main.append(brand);

  [1, 2].forEach((i) => {
    const src = content(i);
    if (!src) return;
    const col = el('div', 'footer-col');
    [...src.children].forEach((n) => {
      if (n.tagName === 'P') n.classList.add('footer-col-title');
      col.append(n);
    });
    main.append(col);
  });

  zoned.append(main);
  const socialSrc = content(3);
  if (socialSrc) {
    const social = el('div', 'footer-social');
    [...socialSrc.children].forEach((n) => {
      if (n.tagName === 'P') n.classList.add('footer-social-label');
      if (n.tagName === 'UL') n.classList.add('icon-links');
      social.append(n);
    });
    zoned.append(social);
  }
  root.append(zoned);
  block.replaceChildren(root);
}
