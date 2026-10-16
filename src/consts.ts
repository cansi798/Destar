// Zentrale Firmendaten & Helfer – alle Angaben stammen von der bisherigen Website
// (www.destar-lackdoktor.de, Stand Oktober 2026). Änderungen nur hier pflegen.

/** base-Pfad-bewusste URL (Vorschau liegt unter /Destar/). */
const RAW_BASE: string = import.meta.env.BASE_URL;
export const BASE: string = RAW_BASE.endsWith("/") ? RAW_BASE : RAW_BASE + "/";
export const u = (p = ""): string => BASE + String(p).replace(/^\//, "");

export const SITE = {
  name: "Destar Lackdoktor",
  legal: "Destar Lackdoktor UG (haftungsbeschränkt)",
  claim: "Ihr Lack-Experte in Norderstedt",
  phoneDisplay: "0152 53983255",
  phoneTel: "+4915253983255",
  whatsapp: "4915253983255", // wa.me-Format (ohne +)
  email: "info@destar-lackdoktor.de",
  street: "Distelweg 33-35",
  zip: "22844",
  city: "Norderstedt",
  mapsUrl: "https://maps.app.goo.gl/o8bNHu5sZcxfrWUc7",
  instagram: "https://www.instagram.com/destar_lackdoktor",
  managing: "Nuhi Peci",
  registerCourt: "Amtsgericht Kiel",
  registerNo: "HRB 12294",
  vat: "DE 273 848 527",
} as const;

/** Öffnungszeiten (alte Website): Mo–Fr 8–17 Uhr, Sa + So geschlossen. */
export const HOURS = [
  { tag: "Montag – Freitag", zeit: "08:00 – 17:00 Uhr" },
  { tag: "Samstag", zeit: "geschlossen" },
  { tag: "Sonntag", zeit: "geschlossen" },
];
export const HOURS_SHORT = "Mo–Fr 8–17 Uhr";

export type NavChild = { label: string; href: string; icon: string; desc: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Leistungen in Menü-Reihenfolge (Slugs = alte URLs, damit Links erhalten bleiben).
 *  desc = Kundenproblem → unsere Lösung (Kundenwunsch 16.10.2026: Lösungen statt Handwerk beschreiben). */
export const LEISTUNGEN_NAV: NavChild[] = [
  { label: "Unfallservice", href: u("leistungen/unfallservice/"), icon: "shield", desc: "Unfall? Wir regeln alles – inkl. Versicherung" },
  { label: "Smart-Repair", href: u("leistungen/smart-repair/"), icon: "spark", desc: "Kratzer oder Delle? Punktgenau repariert" },
  { label: "Lackierarbeiten", href: u("leistungen/lackierarbeiten/"), icon: "spray", desc: "Lackschaden? Exakter Farbton aus der Kabine" },
  { label: "Karosseriearbeiten", href: u("leistungen/karosseriearbeiten/"), icon: "car", desc: "Beule im Blech? So schonend wie möglich gerichtet" },
  { label: "Autoglas & Steinschlag", href: u("leistungen/autoglas-steinschlagreparatur/"), icon: "glass", desc: "Steinschlag? Oft reicht eine Reparatur" },
  { label: "Wohnwagen & Wohnmobile", href: u("leistungen/wohnwagen-lackierung/"), icon: "caravan", desc: "Unser Schwerpunkt – mit vollem Service" },
];

/** Haupt-Handlungsaufruf überall: Schaden melden (Kundenwunsch 16.10.2026). */
export const MELDEN = { label: "Schaden melden", href: u("schaden-melden/") };

export const NAV: NavItem[] = [
  { label: "Leistungen", href: u("leistungen/"), children: LEISTUNGEN_NAV },
  { label: "So geht's", href: u("#ablauf") },
  { label: "FAQ", href: u("#faq") },
  { label: "Kontakt & Anfahrt", href: u("kontakt-anfahrt/") },
];

/** WhatsApp-Chat mit vorbefüllter Nachricht. */
export const waLink = (
  text = "Hallo Destar Lackdoktor, ich habe einen Schaden an meinem Fahrzeug und hätte gern einen Termin zur Begutachtung."
): string => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${SITE.phoneTel}`;
export const mailLink = (subject = "Anfrage über die Website"): string =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
