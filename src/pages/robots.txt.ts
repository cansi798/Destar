import type { APIRoute } from "astro";
import { BASE } from "../consts";
// robots.txt mit absoluter Sitemap-URL (passt sich bei Domain-Umzug automatisch an).
// Hinweis: Auf GitHub-Project-Pages liest ein Crawler robots.txt nur im Domain-Stamm –
// wirksam wird die Datei erst auf der eigenen Domain.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${site?.origin}${BASE}sitemap.xml\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
