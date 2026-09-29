/**
 * Remove the white/near-white backdrop from the exported Figma assets by
 * flood-filling from the image borders (so interior whites — laptop, teeth,
 * highlights — are preserved). Anti-aliased edges get a soft alpha ramp.
 *
 * Run: node scripts/unwhite.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const assets = path.join(root, "public", "assets");

const dist = (r, g, b, bg) =>
  Math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2);

async function unwhite(file, { maxWidth = 900, tol = 30, feather = 40 } = {}) {
  const src = path.join(assets, file);
  let img = sharp(src).ensureAlpha();
  const meta = await img.metadata();
  if (meta.width > maxWidth) {
    img = sharp(src).ensureAlpha().resize({ width: maxWidth });
  }
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;

  // Background estimate = median of the four corners.
  const corner = (x, y) => {
    const i = (y * w + x) * ch;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const corners = [
    corner(1, 1),
    corner(w - 2, 1),
    corner(1, h - 2),
    corner(w - 2, h - 2),
  ];
  const bg = [0, 1, 2].map((c) => {
    const vals = corners.map((p) => p[c]).sort((a, b) => a - b);
    return Math.round((vals[1] + vals[2]) / 2);
  });

  // Flood fill from border pixels that look like the background.
  const visited = new Uint8Array(w * h);
  const queue = [];
  const push = (x, y) => {
    const p = y * w + x;
    if (visited[p]) return;
    const i = p * ch;
    if (dist(data[i], data[i + 1], data[i + 2], bg) > tol + feather) return;
    visited[p] = 1;
    queue.push(p);
  };
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }
  while (queue.length) {
    const p = queue.pop();
    const x = p % w;
    const y = (p / w) | 0;
    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }

  // Apply alpha: members fully transparent, border-adjacent pixels ramped.
  let cleared = 0;
  for (let p = 0; p < w * h; p++) {
    if (!visited[p]) continue;
    const i = p * ch;
    const d = dist(data[i], data[i + 1], data[i + 2], bg);
    let a = 0;
    if (d > tol) a = Math.round(255 * Math.min(1, (d - tol) / feather));
    data[i + 3] = Math.min(data[i + 3], a);
    if (a < 16) cleared++;
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(assets, file.replace(/\.png$/, "") + ".tmp.png"));

  const fs = await import("node:fs/promises");
  await fs.rename(
    path.join(assets, file.replace(/\.png$/, "") + ".tmp.png"),
    src,
  );
  console.log(
    `${file}: bg rgb(${bg}) ${w}x${h} cleared ${(100 * cleared / (w * h)).toFixed(1)}%`,
  );
}

await unwhite("hero-main.png", { maxWidth: 1100 });
await unwhite("feature-image-1.png", { maxWidth: 900 });
await unwhite("feature-image-2.png", { maxWidth: 900 });
await unwhite("feature-matcap-1.png", { maxWidth: 500 });
await unwhite("feature-matcap-2.png", { maxWidth: 500 });
await unwhite("ornament-left.png", { maxWidth: 800 });
await unwhite("ornament-right.png", { maxWidth: 700 });
await unwhite("ornament-mid.png", { maxWidth: 400 });
await unwhite("cone-large.png", { maxWidth: 720 });
await unwhite("cone-topright.png", { maxWidth: 760 });
await unwhite("cone-small.png", { maxWidth: 400 });
await unwhite("cone-plain.png", { maxWidth: 400 });
