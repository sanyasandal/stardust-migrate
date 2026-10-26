/**
 * text-image — oneAZ "Teaser / Text + Image" (Figma 12431:14270 / 12431:14271): a 574px image
 * beside a 574px text column (heading, body, primary button at the column foot). Reskin module M4.
 *
 * Authoring: one row, two cells — the image cell first renders the image on the left
 * (Alignment=Left), the text cell first renders it on the right (Alignment=Right).
 */
function el(className) {
  const d = document.createElement('div');
  d.className = className;
  return d;
}

export default function decorate(block) {
  const cells = [...block.querySelectorAll(':scope > div > div')];
  const picture = block.querySelector('picture') || block.querySelector('img');
  if (cells[0] && picture && cells[0].contains(picture)) block.classList.add('media-first');
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
    panel.append(media);
  }
  container.append(panel);
  block.replaceChildren(container);
}
