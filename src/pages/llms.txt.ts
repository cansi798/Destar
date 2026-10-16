import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { BASE, HOURS_SHORT, SITE } from "../consts";
// llms.txt – kompakte Zusammenfassung für KI-Assistenten (nur belegte Fakten).
export const GET: APIRoute = async ({ site }) => {
  const o = `${site?.origin}${BASE}`;
  const l = (await getCollection("leistungen")).sort((a, b) => a.data.order - b.data.order);
  const txt = `# ${SITE.legal}

> Autolackiererei und Meisterbetrieb in Norderstedt (Schleswig-Holstein, an der Hamburger
> Stadtgrenze): Unfallservice mit kompletter Schadensabwicklung (inkl. Versicherung), Lackreparatur,
> Smart-Repair, Karosseriearbeiten, Autoglas- und Steinschlagreparatur; Schwerpunkt Wohnwagen und
> Wohnmobile. Kostenlose Begutachtung. Schaden online melden: ${o}schaden-melden/

## Leistungen

${l.map((x) => `- [${x.data.kurz}](${o}leistungen/${x.id}/): ${x.data.teaser}`).join("\n")}
- Aufbereitung vor Leasing-Rückgabe oder Verkauf: ${o}#aufbereitung

## Fakten

- Kostenlose Begutachtung (Pkw und Wohnmobil)
- Spezialisiert auf Lackierung und Lackreparatur von Wohnwagen und Wohnmobilen
- Komplette Schadensabwicklung: Kommunikation mit der Versicherung, Gutachten, Kalkulation
- Freie Werkstattwahl im Haftpflichtfall; Ersatzfahrzeug während der Unfallreparatur
- Computergestützte Farbtonmessung, moderne Lackierkabinen

## Kontakt

- Adresse: ${SITE.street}, ${SITE.zip} ${SITE.city}
- Telefon/WhatsApp: ${SITE.phoneTel}
- E-Mail: ${SITE.email}
- Öffnungszeiten: ${HOURS_SHORT}, Sa/So geschlossen
- Schaden melden (Formular, Versand per WhatsApp oder E-Mail): ${o}schaden-melden/
- Kontaktseite: ${o}kontakt-anfahrt/
- Instagram: ${SITE.instagram}
`;
  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
