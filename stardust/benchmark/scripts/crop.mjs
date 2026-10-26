// usage: node crop.mjs <in.png> <out.png> <y0> <h> [x0=0] [w=full]
import { PNG } from 'pngjs'; import { readFileSync, writeFileSync } from 'node:fs';
const [, , i, o, y0, h, x0 = '0', w] = process.argv;
const s = PNG.sync.read(readFileSync(i)); const W = w ? +w : s.width - +x0; const H = Math.min(+h, s.height - +y0);
const p = new PNG({ width: W, height: H }); PNG.bitblt(s, p, +x0, +y0, W, H, 0, 0); writeFileSync(o, PNG.sync.write(p));
console.log(o, W + 'x' + H);
