// Bildaufbereitung: Originale aus quellbilder/ (von der alten Website) → zugeschnittene,
// optimierte Arbeitsdateien in src/assets/img/ (Astro erzeugt daraus beim Build WebP in
// passenden Breiten) sowie Logo/Favicons/OG-Bild in public/assets/.
// Aufruf (im Docker-Container, sharp kommt mit Astro): node scripts/bilder.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const Q = "quellbilder/";
const A = "src/assets/img/";
const P = "public/assets/";
mkdirSync(A, { recursive: true });
mkdirSync(P, { recursive: true });

const webp = { quality: 86, effort: 6 };

// 1) Kacheln der alten Startseite: Foto ohne eingebrannte Beschriftung + Rahmen
//    (Kachel 468×466, rote Beschriftung ab ca. y = 350, schwarzer Rand mit runden Ecken).
const kachel = (src, out) =>
  sharp(Q + src).extract({ left: 12, top: 12, width: 444, height: 333 }).webp(webp).toFile(A + out);

await kachel("csm_destar-lackdoktor-leistungen-lackreparatur_0c96c276ec.png", "schaden-kratzer.webp");
await kachel("csm_destar-lackdoktor-leistungen-instandsetzung_8bc02b645d.png", "schaden-delle.webp");

// 2) Titel-/Bannerbilder der alten Website (Stimmungsbilder), unverändert im Format
const banner = [
  ["lackierung-auto-pistole.jpg", "lackierpistole.webp"],
  ["lackierung-autoteil.jpg", "lackierkabine.webp"],
  ["unfall-auto-aufgefahren.jpg", "unfall.webp"],
  ["steinschlag-und-autoglasreparatur.jpg", "autoglas.webp"],
  ["Smart_Repair_2.jpg", "smart-repair.webp"],
];
for (const [src, out] of banner) await sharp(Q + src).webp(webp).toFile(A + out);

// Ausschnitte im 4:3-Format für Karten (Motiv mittig/rechts gewählt)
await sharp(Q + "lackierung-auto-pistole.jpg").extract({ left: 420, top: 0, width: 634, height: 475 }).webp(webp).toFile(A + "lackierpistole-4x3.webp");
await sharp(Q + "lackierung-autoteil.jpg").extract({ left: 330, top: 0, width: 634, height: 475 }).webp(webp).toFile(A + "lackierkabine-4x3.webp");
await sharp(Q + "unfall-auto-aufgefahren.jpg").extract({ left: 300, top: 0, width: 634, height: 475 }).webp(webp).toFile(A + "unfall-4x3.webp");
await sharp(Q + "steinschlag-und-autoglasreparatur.jpg").extract({ left: 230, top: 0, width: 333, height: 250 }).webp(webp).toFile(A + "autoglas-4x3.webp");
await sharp(Q + "Smart_Repair_2.jpg").extract({ left: 160, top: 0, width: 333, height: 250 }).webp(webp).toFile(A + "smart-repair-4x3.webp");

// 3) Logo (Original 300×100 JPG, weißer Grund)
await sharp(Q + "destar-lackdoktor-logo-neu.jpg").webp({ quality: 92 }).toFile(P + "logo.webp");
await sharp(Q + "destar-lackdoktor-logo-neu.jpg").png().toFile(P + "logo.png");

// 4) Favicons aus eigenem SVG (rotes Quadrat, weißes „D“ als Pfad – keine Schrift nötig)
const favSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#C8200E"/>
  <path d="M18 14h14c11 0 18 7 18 18s-7 18-18 18H18Zm9 8v20h5c6 0 9-4 9-10s-3-10-9-10Z" fill="#fff"/>
</svg>`);
await sharp(favSvg).resize(32, 32).png().toFile(P + "favicon-32.png");
await sharp(favSvg).resize(180, 180).png().toFile(P + "favicon-180.png");
await sharp(favSvg).resize(512, 512).png().toFile(P + "favicon-512.png");

// 5) OG-Bild 1200×630: links dunkle Fläche mit Logo-Karte, rechts das Lackierpistolen-Foto
const ogFoto = await sharp(Q + "lackierung-auto-pistole.jpg")
  .extract({ left: 520, top: 0, width: 528, height: 475 })
  .resize(640, 630, { fit: "cover" })
  .toBuffer();
const ogGrund = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#141416"/>
  <rect x="60" y="215" width="480" height="200" rx="20" fill="#fff"/>
  <rect x="0" y="606" width="1200" height="24" fill="#C8200E"/>
</svg>`);
const logoGross = await sharp(Q + "destar-lackdoktor-logo-neu.jpg").resize(420, 140).toBuffer();
await sharp(ogGrund)
  .composite([{ input: ogFoto, left: 560, top: 0 }, { input: logoGross, left: 90, top: 245 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(P + "og-image.jpg");

console.log("Bilder fertig.");
