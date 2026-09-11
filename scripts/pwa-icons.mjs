import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const SRC = "public/logo/DarkLogo.png";
const OUT = "public/icons";

await mkdir(OUT, { recursive: true });

const white = { r: 255, g: 255, b: 255, alpha: 1 };

await sharp(SRC).resize(192, 192).png().toFile(`${OUT}/icon-192.png`);
await sharp(SRC).resize(512, 512).png().toFile(`${OUT}/icon-512.png`);

const mask = await sharp(SRC).resize(384, 384).png().toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: white } })
  .composite([{ input: mask, left: 64, top: 64 }])
  .png()
  .toFile(`${OUT}/maskable-512.png`);

const apple = await sharp(SRC).resize(180, 180).png().toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: white } })
  .composite([{ input: apple, left: 0, top: 0 }])
  .png()
  .toFile(`${OUT}/apple-touch-icon.png`);

// favicon.ico — multi-size ICO (16/32/48) using PNG-compressed entries,
// composited on a white rounded tile so it stays visible in any browser UI.
const icoSizes = [16, 32, 48];
const icoPngs = [];
for (const size of icoSizes) {
  const pad = Math.round(size * 0.08);
  const logo = await sharp(SRC).resize(size - pad * 2, size - pad * 2).png().toBuffer();
  const tile = await sharp({ create: { width: size, height: size, channels: 4, background: white } })
    .composite([{ input: logo, left: pad, top: pad }])
    .png()
    .toBuffer();
  icoPngs.push({ size, buf: tile });
}
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type: icon
icoHeader.writeUInt16LE(icoPngs.length, 4); // image count
const icoEntries = [];
let icoOffset = 6 + icoPngs.length * 16;
for (const { size, buf } of icoPngs) {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size, 0); // width
  entry.writeUInt8(size, 1); // height
  entry.writeUInt8(0, 2); // color count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bit count
  entry.writeUInt32LE(buf.length, 8); // bytes in resource
  entry.writeUInt32LE(icoOffset, 12); // image offset
  icoOffset += buf.length;
  icoEntries.push(entry);
}
const favicon = Buffer.concat([icoHeader, ...icoEntries, ...icoPngs.map((p) => p.buf)]);
await writeFile("public/favicon.ico", favicon);

console.log("PWA icons + favicon.ico generated in public/");