/**
 * hero-branded — oneAZ "Home Hero Branded" (Figma 12950:24813): sage band, text column left,
 * full-height image right. Reskin module M2 (stardust/reskin/mapping.json).
 *
 * Authoring (one row, any cell order): a heading, lede paragraph(s), a CTA paragraph
 * (<strong><a> → primary button) and one picture.
 * Authored elements are MOVED into the layout (Experience Workspace EW1), never rebuilt.
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
  const flow = el('flow');
  nodes.forEach((n) => flow.append(n));
  panel.append(flow);
  if (picture) {
    const media = el('split-media');
    media.append(picture.closest('p') || picture);
    const img = picture.tagName === 'IMG' ? picture : picture.querySelector('img');
    if (img) {
      img.loading = 'eager';
      img.setAttribute('fetchpriority', 'high');
    }
    panel.append(media);
  }
  container.append(panel);
  block.replaceChildren(container);
}
