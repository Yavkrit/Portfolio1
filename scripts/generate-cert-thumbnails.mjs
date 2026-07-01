// One-off build-time script: renders the first page of each real certificate
// PDF to a static thumbnail image. Run with: node scripts/generate-cert-thumbnails.mjs
import { readFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from '@napi-rs/canvas';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const certsDir = path.join(root, 'public', 'certificates');
const outDir = path.join(root, 'public', 'certificates', 'thumbs');

// Some source PDFs author their content rotated relative to the page box;
// this corrects those specific files so the rendered thumbnail reads upright.
const rotationOverrides = {
  'android_dev.pdf': 90,
};

const files = [
  'ds_ai_cert.pdf',
  'intellipaat_cert.pdf',
  'cpp_unit_testing.pdf',
  'cpp_adv_pointers.pdf',
  'cpp_adv_course.pdf',
  'ai_managers.pdf',
  'android_dev.pdf',
];

await mkdir(outDir, { recursive: true });

for (const file of files) {
  const pdfPath = path.join(certsDir, file);
  const data = new Uint8Array(await readFile(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  const page = await doc.getPage(1);

  const extraRotation = rotationOverrides[file] || 0;
  const targetWidth = 500;
  const baseViewport = page.getViewport({ scale: 1, rotation: extraRotation });
  const scale = targetWidth / baseViewport.width;
  const viewport = page.getViewport({ scale, rotation: extraRotation });

  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext('2d');

  await page.render({ canvasContext: ctx, viewport }).promise;

  const outName = file.replace('.pdf', '.webp');
  const buffer = canvas.toBuffer('image/webp', 82);
  const outPath = path.join(outDir, outName);
  await import('fs/promises').then((fs) => fs.writeFile(outPath, buffer));
  console.log(`Rendered ${file} -> certificates/thumbs/${outName} (${(buffer.length / 1024).toFixed(1)}KB)`);
}

console.log('Done.');
