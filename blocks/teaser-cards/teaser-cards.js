/**
 * teaser-cards — oneAZ "Teaser / Card" in the kit's "3 Teasers" composition (Figma 12542:1442):
 * a section title, then sage cards (image 220px, title link, body, arrow). Reskin module M9.
 *
 * Authoring: the section title is default content above the block (reabsorbed here, EW8);
 * one row per card — an image cell and a text cell (title link paragraph, body paragraph).
 * Variant `posts`: the link text is post copy, set as body text.
 */
function el(className, tag = 'div') {
  const d = document.createElement(tag);
  d.className = className;
  return d;
}

// The source marks "(opens in new window)" as screen-reader text; DA strips that span. Split the
// authored text node (no words added, the element keeps its identity) and hide the hint again.
function srHint(link) {
  const t = [...link.childNodes].reverse().find((n) => n.nodeType === 3 && n.textContent.trim());
  const m = t && t.textContent.match(/\s*\(opens in new window\)\s*$/);
  if (!m) return;
  const tail = t.splitText(m.index);
  const span = document.createElement('span');
  span.className = 'sr-only';
  tail.replaceWith(span);
  span.append(tail);
}

export default function decorate(block) {
  const container = el('container');
  const flow = el('flow');
  const head = block.parentElement.previousElementSibling;
  if (head && head.classList.contains('default-content-wrapper')) {
    flow.append(...head.childNodes);
    head.remove();
  }
  const cards = el('cards');
  [...block.children].forEach((row) => {
    const card = el('card');
    const picture = row.querySelector('picture') || row.querySelector('img');
    if (picture) {
      const media = el('media');
      media.append(picture.closest('p') || picture);
      card.append(media);
    }
    const texts = [...row.querySelectorAll(':scope > div > *')]
      .filter((n) => !n.matches('picture, img') && !n.querySelector('picture, img'));
    texts.forEach((n, i) => {
      const isTitle = i === 0 && n.querySelector('a') && n.textContent.trim() === n.querySelector('a').textContent.trim();
      if (isTitle) srHint(n.querySelector('a'));
      const w = el(isTitle ? 'card-title' : 'card-body');
      w.append(n);
      card.append(w);
    });
    const glyph = el('glyph glyph-right', 'span');
    glyph.setAttribute('aria-hidden', 'true');
    card.append(glyph);
    cards.append(card);
  });
  flow.append(cards);
  container.append(flow);
  block.replaceChildren(container);
}
