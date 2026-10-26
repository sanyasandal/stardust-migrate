// usage: node shot.mjs <url|file> <out.png> [width=1440] [height=900] [full=1]
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const [, , target, out, w = '1440', h = '900', full = '1'] = process.argv;
const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(resolve(target)).href;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
for (let y = 0; y < 12; y++) { await page.mouse.wheel(0, 900); await page.waitForTimeout(150); }
await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(1200);
await page.screenshot({ path: out, fullPage: full === '1' });
const dims = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]);
console.log(out, dims.join('x'));
await browser.close();
