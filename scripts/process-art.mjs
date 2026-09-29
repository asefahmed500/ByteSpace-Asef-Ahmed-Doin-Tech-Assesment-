/**
 * Chroma-key the black backgrounds of the exported 3D renders to full
 * transparency (alpha from channel max, softly ramped) and downscale the
 * 2500px sources to a web-friendly size. Also reports alpha coverage of the
 * ornament exports so we know which ones already have transparency.
 *
 * Run: node scripts/process-art.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const assets = path.join(root, "public", "assets");

async function unblack(file, out, maxWidth = 800) {
  const src = path.join(assets, file);
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const ch = info.channels;
  let transparent = 0;
  let opaque = 0;
  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * ch];
    const g = data[i * ch + 1];
    const b = data[i * ch + 2];
    const max = Math.max(r, g, b);
    // Black (max=0) -> fully transparent; bright pixels stay opaque.
    const a = Math.min(255, Math.round(max * 1.7));
    const existing = data[i * ch + 3];
    const final = Math.min(existing, a);
    data[i * ch + 3] = final;
    if (final < 16) transparent++;
    else if (final > 240) opaque++;
  }

  let img = sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
  if (info.width > maxWidth) img = img.resize({ width: maxWidth });
  await img.png({ compressionLevel: 9 }).toFile(path.join(assets, out));

  const total = info.width * info.height;
  console.log(
    `${out}: ${info.width}x${info.height} -> transparent ${(100 * transparent / total).toFixed(1)}% opaque ${(100 * opaque / total).toFixed(1)}%`,
  );
}

async function alphaStats(file) {
  const src = path.join(assets, file);
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  let transparent = 0;
  for (let i = 0; i < info.width * info.height; i++) {
    if (data[i * ch + 3] < 16) transparent++;
  }
  const pct = (100 * transparent) / (info.width * info.height);
  console.log(`${file}: transparent ${pct.toFixed(1)}%`);
}

for (let i = 1; i <= 6; i++) {
  await unblack(`courses/course-art-${i}.png`, `courses/course-art-${i}.png`);
}

for (const f of [
  "ornament-left.png",
  "ornament-right.png",
  "ornament-mid.png",
  "cone-large.png",
  "cone-topright.png",
  "cone-small.png",
  "cone-plain.png",
  "hero-main.png",
  "feature-image-1.png",
  "feature-image-2.png",
  "feature-matcap-1.png",
  "feature-matcap-2.png",
]) {
  await alphaStats(f);
}
