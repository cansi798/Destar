// Leistungen als Content-Collection: je Leistung eine Markdown-Datei in src/content/leistungen/.
// Dateiname = URL-Slug (entspricht den alten URLs, z. B. /leistungen/smart-repair).
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const leistungen = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leistungen" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),            // H1-Hauptteil
      akzent: z.string(),           // aufgesprühtes Akzentwort in der H1
      kurz: z.string(),             // Name in Karten/Menü
      order: z.number(),
      icon: z.string(),
      teaser: z.string(),           // Kurztext für Karten
      lead: z.string(),             // Einleitung im Seitenkopf
      beschreibung: z.string(),     // Meta-Description (≤ 160 Zeichen)
      bild: image(),
      bildAlt: z.string(),
      bildEcht: z.boolean().default(false), // true = Foto aus dem Betrieb, false = Stimmungsbild
      punkteTitel: z.string(),
      punkte: z.array(z.string()),
      vorteile: z.array(z.object({ icon: z.string(), title: z.string(), text: z.string() })).default([]),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    }),
});

export const collections = { leistungen };
