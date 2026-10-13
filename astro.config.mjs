// @ts-check
import { defineConfig } from 'astro/config';

// Vorschau auf GitHub Pages: https://cansi798.github.io/Destar/
// Bei Umzug auf die eigene Domain (destar-lackdoktor.de): site anpassen und base auf '/'.
// Sitemap wird über src/pages/sitemap.xml.ts selbst erzeugt (ohne Zusatzpaket).
export default defineConfig({
  site: 'https://cansi798.github.io',
  base: '/Destar',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  compressHTML: true,
});
