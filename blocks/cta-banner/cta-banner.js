/**
 * cta-banner — oneAZ "CTA Banner" (Figma 13370:1909): a white panel with a 4px Grey-40 border,
 * 120px image left, heading, copy and a primary action. Reskin module M6.
 *
 * Authoring: one row — an image cell and a text cell (heading, paragraph, CTA paragraph).
 */
function el(className) {
  const d = document.createElement('div');
  d.className = className;
  return d;
}

export default function decorate(block) {
  const picture = block.querySelector('picture') || block.querySelector('img');
  const nodes = [...block.querySelectorAll(':scope > div > div > *')]
    .filter((n) => !n.matches('picture, img') && !n.querySelector('picture, img'));
  const container = el('container');
  const panel = el('panel');
  if (picture) {
    const media = el('cta-media');
    media.append(picture.closest('p') || picture);
    panel.append(media);
  }
  const flow = el('flow');
  nodes.forEach((n) => flow.append(n));
  panel.append(flow);
  container.append(panel);
  block.replaceChildren(container);
}
