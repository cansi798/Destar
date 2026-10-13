import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { BASE } from "../consts";

// Eigene Sitemap (ohne Zusatzpaket): alle indexierbaren Seiten.
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? "https://cansi798.github.io";
  const leistungen = await getCollection("leistungen");
  const pfade = ["", "leistungen/", ...leistungen.map((l) => `leistungen/${l.id}/`), "kontakt-anfahrt/", "impressum/", "datenschutz/"];
  const urls = pfade.map((p) => `  <url><loc>${origin}${BASE}${p}</loc></url>`).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
};
