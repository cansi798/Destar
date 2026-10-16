# Destar Lackdoktor – Website

Neue Website der **Destar Lackdoktor UG (haftungsbeschränkt)**, Autolackiererei und Meisterbetrieb
in Norderstedt (Lackreparatur, Smart-Repair, Karosserie, Unfallservice, Autoglas).

- Vorschau: https://cansi798.github.io/Destar/
- Inhalte: von der bisherigen Website www.destar-lackdoktor.de übernommen und sprachlich modernisiert –
  ohne erfundene Preise, Bewertungen, Zahlen oder Garantien. Offene Punkte: `OFFENE-INFOS.md`,
  Bildherkunft: `BILDER.md`.

## Technik

[Astro](https://astro.build), rein statisch. Kein Tracking, keine Cookies, keine externen Schriften
(Barlow / Barlow Condensed lokal in `src/styles/fonts/`, Lizenz SIL OFL), keine eingebetteten Karten.
JavaScript nur für Menü, Scroll-Animationen, Kontaktformular (mailto), das Formular „Schaden melden“
(3 Schritte, Versand per WhatsApp/E-Mail, ohne JS ein normales mailto-Formular) und den einmaligen
Sprühnebel im Hero.

**Lack-Optik:** Überschriften-Akzente werden „aufgesprüht“ (CSS-Maske + Farbnebel), Lackstreifen
(SVG mit rauem Sprührand), Glanzlicht über Buttons/Karten, Ablauf als Lackschichten
(Grundierung → Füller → Basislack → Klarlack), Leistungskarten als Farbmusterkarten.
Alle Animationen starten erst bei Sichtbarkeit; bei „Bewegung reduzieren“ wird das Endbild gezeigt.

```
src/
  consts.ts              Firmendaten, Navigation, Kontakt-Links (zentral pflegen!)
  content/leistungen/    eine Markdown-Datei je Leistung (Slug = alte URL)
  data/home.ts           Sorgen, Ablauf, FAQ der Startseite (jede Aussage nur einmal)
  components/            Header, Hero, PageHero, SprayStrich, Ablauf, Faq, LeistungKarte, …
  pages/                 Startseite, Leistungen, Kontakt & Anfahrt, Impressum, Datenschutz,
                         sitemap.xml, robots.txt, llms.txt, 404
  assets/img/            aufbereitete Fotos (Astro erzeugt WebP in passenden Breiten)
quellbilder/             Originalbilder der alten Website
scripts/bilder.mjs       Bildzuschnitt, Logo, Favicons, OG-Bild
scripts/pruefen.sh       Build + Linkprüfung + Bildschirmfotos (Playwright)
scripts/deploy.sh        baut und veröffentlicht dist/ im Branch main
```

## Branches

- `quelle` – Quellcode (hier arbeiten)
- `main` – nur die gebaute Seite (GitHub Pages: „Deploy from branch main, /“)

## Bauen & veröffentlichen (ohne lokales Node, per Docker)

```bash
bash scripts/pruefen.sh   # bauen, Links prüfen, Bildschirmfotos nach screens/
bash scripts/deploy.sh    # bauen und dist/ als Branch main pushen
```

Bei Umzug auf die eigene Domain: in `astro.config.mjs` `site` anpassen und `base` auf `'/'` setzen,
Hosting-Abschnitt in der Datenschutzerklärung aktualisieren.
