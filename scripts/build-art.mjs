/**
 * Rebuild all 3D render assets from the original Figma raw exports using
 * connected flood-fill background keying: only pixels reachable from the
 * border that match the background color become transparent (soft ramp at
 * the edge), so the object body stays fully opaque regardless of how dark
 * or light it is.
 *
 * Run: node scripts/build-art.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const raw = path.join(root, "tmp_assets", "hero");
const out = path.join(root, "public", "assets");

const dist = (r, g, b, bg) =>
  Math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2);

async function key({ srcFile, outFile, size }) {
  const { data, info } = await sharp(path.join(raw, srcFile))
    .resize({ width: size, height: size, fit: "cover" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;

  // Background estimate = average of the four corners (black or white).
  const corner = (x, y) => {
    const i = (y * w + x) * ch;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const corners = [
    corner(2, 2),
    corner(w - 3, 2),
    corner(2, h - 3),
    corner(w - 3, h - 3),
  ];
  const bg = [0, 1, 2].map((c) =>
    Math.round(corners.reduce((s, p) => s + p[c], 0) / corners.length),
  );

  // Flood fill from the borders through background-colored pixels.
  const visited = new Uint8Array(w * h);
  const queue = [];
  const tol = 34;
  const push = (x, y) => {
    const p = y * w + x;
    if (visited[p]) return;
    const i = p * ch;
    if (dist(data[i], data[i + 1], data[i + 2], bg) > tol) return;
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

  // Soft edge: visited pixels ramp by distance to bg; unvisited stay opaque.
  let solid = 0;
  const feather = 46;
  for (let p = 0; p < w * h; p++) {
    if (!visited[p]) {
      solid++;
      continue;
    }
    const i = p * ch;
    const d = dist(data[i], data[i + 1], data[i + 2], bg);
    let a = 0;
    if (d > 8) a = Math.round(255 * Math.min(1, (d - 8) / feather));
    data[i + 3] = Math.min(data[i + 3], a);
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, outFile));
  console.log(
    `${outFile}: bg rgb(${bg}) ${w}x${h} solid ${(100 * solid / (w * h)).toFixed(1)}%`,
  );
}

// Course card art (light renders so they read on the dark cover).
await key({ srcFile: "raw_2.png", outFile: "courses/course-art-1.png", size: 700 }); // silver tetrahedron
await key({ srcFile: "raw_9.png", outFile: "courses/course-art-2.png", size: 700 }); // light coil
await key({ srcFile: "raw_11.png", outFile: "courses/course-art-3.png", size: 700 }); // light coil
await key({ srcFile: "raw_17.png", outFile: "courses/course-art-4.png", size: 700 }); // marshmallow
await key({ srcFile: "raw_18.png", outFile: "courses/course-art-5.png", size: 700 }); // white torus
await key({ srcFile: "raw_16.png", outFile: "courses/course-art-6.png", size: 400 }); // white cylinder

// Hero / CTA ornaments (square sources → circle-ish 3D accents).
await key({ srcFile: "raw_7.png", outFile: "ornament-left.png", size: 700 }); // dark torus
await key({ srcFile: "raw_5.png", outFile: "ornament-right.png", size: 600 }); // dark coil
await key({ srcFile: "raw_15.png", outFile: "ornament-mid.png", size: 350 }); // witch hat cone
await key({ srcFile: "raw_19.png", outFile: "cone-large.png", size: 350 }); // light spring
await key({ srcFile: "raw_11.png", outFile: "cone-topright.png", size: 700 }); // light coil
await key({ srcFile: "raw_14.png", outFile: "cone-small.png", size: 350 }); // black torus
await key({ srcFile: "raw_17.png", outFile: "cone-plain.png", size: 350 }); // marshmallow

// Feature section accents.
await key({ srcFile: "raw_2.png", outFile: "feature-matcap-1.png", size: 430 });
await key({ srcFile: "raw_18.png", outFile: "feature-matcap-2.png", size: 430 });

// Clean the raw hero export (white bg) with the same flood keying.
async function keyWhite({ srcFile, outFile, maxWidth }) {
  const src = path.join(out, srcFile);
  let img = sharp(src).ensureAlpha();
  const meta = await img.metadata();
  if (meta.width > maxWidth) img = sharp(src).ensureAlpha().resize({ width: maxWidth });
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;
  const corner = (x, y) => {
    const i = (y * w + x) * ch;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const bg = [0, 1, 2].map((c) =>
    Math.round(
      [corner(2, 2), corner(w - 3, 2), corner(2, h - 3), corner(w - 3, h - 3)].reduce(
        (s, p) => s + p[c],
        0,
      ) / 4,
    ),
  );
  const visited = new Uint8Array(w * h);
  const queue = [];
  const tol = 26;
  const push = (x, y) => {
    const p = y * w + x;
    if (visited[p]) return;
    const i = p * ch;
    if (dist(data[i], data[i + 1], data[i + 2], bg) > tol) return;
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
  let solid = 0;
  for (let p = 0; p < w * h; p++) {
    if (!visited[p]) {
      solid++;
      continue;
    }
    const i = p * ch;
    const d = dist(data[i], data[i + 1], data[i + 2], bg);
    let a = 0;
    if (d > 6) a = Math.round(255 * Math.min(1, (d - 6) / 40));
    data[i + 3] = Math.min(data[i + 3], a);
  }
  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, outFile));
  console.log(
    `${outFile}: bg rgb(${bg}) ${w}x${h} solid ${(100 * solid / (w * h)).toFixed(1)}%`,
  );
}

await keyWhite({ srcFile: "hero-main.png", outFile: "hero-main.png", maxWidth: 1100 });
await keyWhite({ srcFile: "feature-image-1.png", outFile: "feature-image-1.png", maxWidth: 900 });
await keyWhite({ srcFile: "feature-image-2.png", outFile: "feature-image-2.png", maxWidth: 900 });
