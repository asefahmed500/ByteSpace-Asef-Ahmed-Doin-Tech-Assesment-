/**
 * Rebuild the 3D ornaments with the Figma hard-light tints.
 *
 * Hard-light math: tint > 0.5 channel screens (brightens), tint < 0.5
 * multiplies (darkens). So LIME tints need LIGHT source renders (else the
 * result goes black), while WHITE tints brighten even dark renders into
 * clean clay renders.
 *
 * Run: node scripts/tint-art.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const raw = path.join(root, "tmp_assets", "hero");
const out = path.join(root, "public", "assets");

const dist = (r, g, b, bg) =>
  Math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2);

const hex = (h) => [
  parseInt(h.slice(1, 3), 16) / 255,
  parseInt(h.slice(3, 5), 16) / 255,
  parseInt(h.slice(5, 7), 16) / 255,
];
const LIME = hex("#D4FB20");
const WHITE = hex("#F5F5F6");

const hardLight = (c, b) => (c <= 0.5 ? 2 * b * c : 1 - 2 * (1 - b) * (1 - c));

async function keyTint({ srcFile, outFile, size, tint, flip = false }) {
  let pipeline = sharp(path.join(raw, srcFile)).resize({
    width: size,
    height: size,
    fit: "cover",
  });
  if (flip) pipeline = pipeline.flop();
  const { data, info } = await pipeline
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
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

  let solid = 0;
  for (let p = 0; p < w * h; p++) {
    const i = p * ch;
    if (!visited[p]) {
      solid++;
      for (let c = 0; c < 3; c++) {
        const base = data[i + c] / 255;
        data[i + c] = Math.round(
          255 * Math.min(1, Math.max(0, hardLight(tint[c], base))),
        );
      }
      continue;
    }
    const d = dist(data[i], data[i + 1], data[i + 2], bg);
    let a = 0;
    if (d > 8) a = Math.round(255 * Math.min(1, (d - 8) / 46));
    data[i + 3] = Math.min(data[i + 3], a);
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, outFile));
  console.log(
    `${outFile}: ${w}x${h} tinted solid ${(100 * solid / (w * h)).toFixed(1)}%`,
  );
}

/* Lime ornaments — LIGHT source renders so hard-light lime stays lime. */
await keyTint({ srcFile: "raw_9.png", outFile: "ornament-left.png", size: 700, tint: LIME }); // light coil
await keyTint({ srcFile: "raw_2.png", outFile: "cone-topright.png", size: 700, tint: LIME }); // silver tetra
await keyTint({ srcFile: "raw_11.png", outFile: "cone-large-lime.png", size: 350, tint: LIME });
await keyTint({ srcFile: "raw_17.png", outFile: "cone-small-lime.png", size: 350, tint: LIME });
await keyTint({ srcFile: "raw_18.png", outFile: "ornament-right-lime.png", size: 600, tint: LIME });
await keyTint({ srcFile: "raw_2.png", outFile: "feature-matcap-1.png", size: 430, tint: LIME });
await keyTint({ srcFile: "raw_18.png", outFile: "feature-matcap-2.png", size: 430, tint: LIME });

/* White ornaments — white hard-light brightens any render into clay. */
await keyTint({ srcFile: "raw_7.png", outFile: "ornament-right.png", size: 600, tint: WHITE }); // dark torus -> silver
await keyTint({ srcFile: "raw_15.png", outFile: "ornament-mid.png", size: 350, tint: WHITE, flip: true }); // witch hat -> pale cone
await keyTint({ srcFile: "raw_19.png", outFile: "cone-large.png", size: 350, tint: WHITE });
await keyTint({ srcFile: "raw_14.png", outFile: "cone-small.png", size: 350, tint: WHITE }); // black torus -> silver
await keyTint({ srcFile: "raw_5.png", outFile: "cone-plain.png", size: 350, tint: WHITE }); // dark coil -> pale coil
await keyTint({ srcFile: "raw_9.png", outFile: "cone-topright-white.png", size: 700, tint: WHITE });

/* Course art — white clay renders that pop on the #443131 cover. */
await keyTint({ srcFile: "raw_7.png", outFile: "courses/course-art-1.png", size: 700, tint: WHITE });
await keyTint({ srcFile: "raw_9.png", outFile: "courses/course-art-2.png", size: 700, tint: WHITE });
await keyTint({ srcFile: "raw_11.png", outFile: "courses/course-art-3.png", size: 700, tint: WHITE });
await keyTint({ srcFile: "raw_17.png", outFile: "courses/course-art-4.png", size: 700, tint: WHITE });
await keyTint({ srcFile: "raw_18.png", outFile: "courses/course-art-5.png", size: 700, tint: WHITE });
await keyTint({ srcFile: "raw_16.png", outFile: "courses/course-art-6.png", size: 400, tint: WHITE });
