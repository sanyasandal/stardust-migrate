/**
 * teaser-hero — oneAZ "Teaser / Home Hero", Size Large (Figma 12421:13803): a 480px image band
 * under a Graphite overlay, white display headline, lede and primary button. Reskin module M3.
 *
 * Authoring: one row — an image cell and a text cell (heading, paragraphs, CTA paragraph).
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
  const frag = [];
  if (picture) {
    const media = el('band-media');
    media.append(picture.closest('p') || picture);
    frag.push(media);
  }
  const container = el('container');
  const panel = el('panel');
  const flow = el('flow');
  nodes.forEach((n) => flow.append(n));
  panel.append(flow);
  container.append(panel);
  frag.push(container);
  block.replaceChildren(...frag);
}
