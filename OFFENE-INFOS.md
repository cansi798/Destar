# Offene Infos / Fragen an Destar Lackdoktor

Alles auf der Website stammt von der bisherigen Seite. Folgende Punkte sind offen oder sollten
vom Kunden bestätigt werden:

## Rechtliches
1. **Impressum – Meisterbetrieb:** Im Logo steht „Meisterbetrieb“. Für Handwerksbetriebe gehören ins
   Impressum: zuständige **Handwerkskammer**, **Berufsbezeichnung** (z. B. Karosserie- und
   Fahrzeugbaumechaniker / Fahrzeuglackierer-Meister) und der Staat der Verleihung. Bitte Angaben liefern.
2. **Impressum – technische Erstellung:** Der Hinweis auf Johannes J. Matthies GmbH & Co. KG wurde
   entfernt. Soll Waybuild genannt werden?
3. **Datenschutz:** angepasst an die neue statische Seite (Hosting GitHub Pages, keine Cookies/Tracker).
   Beim Umzug auf die eigene Domain/einen anderen Hoster muss der Abschnitt „Hosting“ geändert werden.
   Empfehlung: abschließende Prüfung durch Datenschutz-Fachperson.
4. **Nutzungsrechte der Bilder** (siehe BILDER.md) – die Banner stammen vermutlich aus dem Bildarchiv
   des alten Website-Anbieters.

## Inhalte
5. **Fotos echt?** Sind die Fotos „Kratzer am silbernen Pkw“ und „Delle“ eigene Aufnahmen aus dem Betrieb?
6. **Mehr echte Fotos:** Werkstatt, Lackierkabine, Team, fertige Arbeiten, Vorher-Nachher-Paare
   (für eine Galerie bzw. einen Vorher/Nachher-Schieberegler). Aktuell gibt es keine Galerie, weil keine
   echten Arbeitsbeispiele vorliegen.
7. **Logo als Vektordatei** (SVG/PDF) für eine scharfe Darstellung.
8. **Über uns:** Gründungsjahr, Team, Meister (Name), Geschichte – gibt es Infos für eine „Über uns“-Seite?
9. **Einzugsgebiet:** Aus welchen Orten kommen die Kunden? (Bisher nur „Norderstedt“ genannt.)
10. **Fotos per WhatsApp:** Das neue Formular „Schaden melden“ (16.10.2026, Wunsch Jamil) lädt dazu ein,
    Schadensfotos im WhatsApp-Chat anzuhängen. Bitte bestätigen, dass das so gewünscht ist und wer die
    WhatsApp-/E-Mail-Meldungen bearbeitet. Eine Reaktionszeit oder „erste Einschätzung per Foto“ wird
    bewusst NICHT versprochen – falls gewünscht, bitte konkrete Angabe liefern.
11. **Leistungen bestätigen/ergänzen:** Folierung (Bild auf alter Seite vorhanden, aber kein Text),
    Hol- und Bringservice, Aufbereitung/Politur als eigene Leistung?
    **Wohnwagen-/Wohnmobil-Lackierung** ist seit 16.10.2026 bestätigt (Schwerpunkt, eigene Seite
    `/leistungen/wohnwagen-lackierung/`, nur allgemeine Service-Aussagen, keine Preise/Dauer/Garantien).
    **Echte Fotos von lackierten Wohnwagen/Wohnmobilen** (Werkstatt, vorher/nachher) wären sehr hilfreich –
    bis dahin zeigt die Seite eine gezeichnete Grafik. Ebenfalls klären: Gilt die kostenlose Begutachtung
    auch für Wohnwagen (bisher nur „Pkw und Wohnmobil“ belegt)?
12. **Ersatzfahrzeug & Abschleppen:** Auf der alten Seite genannt – gilt das weiterhin, kostenlos/zu welchen
    Bedingungen?
13. **Steinschlag „kostenlos“:** Alte Formulierung „Wir reparieren kleine Schäden kostenlos (wird in den
    meisten Fällen von der Kaskoversicherung übernommen)“ übernommen – bitte bestätigen.
14. **Bewertungen:** Gibt es Google-Bewertungen, die (mit Link) eingebunden werden dürfen?
15. **HU-Erinnerung / Online-Terminvereinbarung:** In der alten Datenschutzerklärung erwähnt, auf der Seite
    aber nicht vorhanden – gewünscht?

## Technik
16. **Kontakt- und Schadenformular:** Ohne Server-Backend. Das Kontaktformular öffnet das E-Mail-Programm
    (mailto); „Schaden melden“ setzt die Angaben zu einer Nachricht zusammen, die der Kunde per WhatsApp
    (wa.me) oder E-Mail (mailto) selbst absendet – Fotos hängt er dort an. **Ein echtes Upload-Formular
    (Fotos direkt auf der Website hochladen, Meldung landet ohne WhatsApp/E-Mail-Programm beim Betrieb)
    braucht einen Formular-Dienst oder eigenen Server** – sinnvoll beim Umzug auf das Hosting des Kunden
    (dann auch Datenschutzerklärung anpassen).
17. **Domain-Umzug:** www.destar-lackdoktor.de auf die neue Seite umstellen (base in astro.config.mjs auf
    `/`, `site` anpassen). Die alten URLs der Leistungsseiten bleiben gleich (`/leistungen/smart-repair` usw.),
    `/kontakt-anfahrt` ebenfalls.
18. **Öffnungszeiten:** Mo–Fr 8–17 Uhr (von alter Seite) – noch aktuell? Mittagspause?
19. **Steinschlag „kostenlos“ (siehe 13):** steht jetzt nur noch einmal auf der Autoglas-Seite
    (Startseiten-FAQ entfernt, um Doppelungen zu vermeiden).
