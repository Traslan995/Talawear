import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const dir = 'src/assets';
const files = await readdir(dir);
const jpgs = files.filter(f => /\.(jpe?g|png)$/i.test(f) && !f.endsWith('.svg'));

let before = 0, after = 0;
const MAX_W = 1600;

for (const f of jpgs) {
  const p = path.join(dir, f);
  const s1 = (await stat(p)).size;
  if (s1 < 200_000) { before += s1; after += s1; continue; }
  try {
    const img = sharp(p, { failOn: 'none' });
    const meta = await img.metadata();
    const w = meta.width && meta.width > MAX_W ? MAX_W : meta.width;
    const buf = await sharp(p, { failOn: 'none' })
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toBuffer();
    // Always write as jpg
    const outPath = p.replace(/\.png$/i, '.jpg');
    await sharp(buf).toFile(outPath + '.tmp');
    const { writeFile, rename, unlink } = await import('fs/promises');
    await rename(outPath + '.tmp', outPath);
    if (outPath !== p) await unlink(p);
    const s2 = (await stat(outPath)).size;
    before += s1; after += s2;
    console.log(`${f}: ${(s1/1024).toFixed(0)}KB -> ${(s2/1024).toFixed(0)}KB`);
  } catch (e) {
    console.log(`SKIP ${f}: ${e.message}`);
    before += s1; after += s1;
  }
}
console.log(`\nTotal: ${(before/1024/1024).toFixed(1)}MB -> ${(after/1024/1024).toFixed(1)}MB`);
