// Inhalte der Startseite – sinngemäß von der alten Website übernommen, nichts erfunden.

/** Ablauf im Schadensfall (aus den Texten zu Begutachtung, Schadensabwicklung und Reparatur). */
export const ABLAUF = [
  {
    title: "Kontakt aufnehmen",
    text: "Rufen Sie an, schreiben Sie uns per WhatsApp oder E-Mail – oder kommen Sie direkt in unsere Werkstatt im Distelweg.",
  },
  {
    title: "Kostenlose Begutachtung",
    text: "Wir sehen uns Ihr Fahrzeug kostenlos an – ganz gleich, ob Pkw oder Wohnmobil – und besprechen, was nötig ist.",
  },
  {
    title: "Kalkulation & Versicherung",
    text: "Im Schadensfall übernehmen wir die Abwicklung: Kommunikation mit der Versicherung, Gutachten, Kalkulation und Dokumentation.",
  },
  {
    title: "Reparatur & Lackierung",
    text: "Wir setzen Ihr Fahrzeug so schonend wie möglich instand – von Smart-Repair bis zur Lackierung im exakt gemessenen Farbton.",
  },
];

export const VORTEILE = [
  { icon: "award", title: "Meisterbetrieb", text: "Lack und Karosserie in den Händen eines Meisterbetriebs in Norderstedt." },
  { icon: "eye", title: "Kostenlose Begutachtung", text: "Wir begutachten Ihr Fahrzeug kostenlos – egal ob Pkw oder Wohnmobil." },
  { icon: "doc", title: "Alles aus einer Hand", text: "Versicherung, Gutachten, Kalkulation: Wir übernehmen die komplette Schadensabwicklung." },
  { icon: "scale", title: "Freie Werkstattwahl", text: "Im Haftpflichtfall setzen wir uns für Ihre Rechte und Leistungen ein – fair und engagiert." },
  { icon: "palette", title: "Exakter Farbton", text: "Computergestützte Farbtonmessung – die Rezeptur wird archiviert für spätere Ausbesserungen." },
  { icon: "key", title: "Ersatzfahrzeug", text: "Damit Sie mobil bleiben: Ersatzfahrzeug für die Dauer der Unfallreparatur." },
];

export const FAQ = [
  {
    q: "Was kostet die Begutachtung meines Fahrzeugs?",
    a: "Nichts. Wir begutachten Ihr Fahrzeug kostenlos – ganz gleich, ob Pkw oder Wohnmobil – und sagen Ihnen, welche Reparatur sinnvoll ist.",
  },
  {
    q: "Kümmern Sie sich nach einem Unfall um die Versicherung?",
    a: "Ja. Wir übernehmen die komplette Schadensabwicklung, inklusive Kommunikation mit der Versicherung, Gutachten, Kalkulation und aller nötigen Schritte.",
  },
  {
    q: "Darf ich die Werkstatt nach einem Unfall selbst wählen?",
    a: "Im Haftpflichtfall gilt die freie Werkstattwahl. Wir setzen uns für Ihre Rechte und Leistungen ein – fair, engagiert und in Ihrem Sinne.",
  },
  {
    q: "Ich gebe bald mein Leasingfahrzeug zurück – können Sie helfen?",
    a: "Ja. Rechtzeitig vor Ende der Vertragslaufzeit bereiten wir Ihr Fahrzeug gezielt für die Rückgabe auf, damit Sie es sorgenfrei an die Leasinggesellschaft übergeben können.",
  },
  {
    q: "Lohnt sich eine Aufbereitung vor dem Verkauf?",
    a: "Eine fachgerechte Aufbereitung kann den Fahrzeugwert deutlich steigern. Bei der kostenlosen Begutachtung sagen wir Ihnen, was sich bei Ihrem Fahrzeug lohnt.",
  },
  {
    q: "Wer bezahlt eine Steinschlagreparatur?",
    a: "Kleine Schäden an der Scheibe reparieren wir für Sie kostenlos – die Kosten werden in den meisten Fällen von der Kaskoversicherung übernommen.",
  },
  {
    q: "Wann haben Sie geöffnet?",
    a: "Montag bis Freitag von 8:00 bis 17:00 Uhr. Samstag und Sonntag ist geschlossen. Sie finden uns im Distelweg 33-35 in 22844 Norderstedt.",
  },
];

/** FAQPage-JSON-LD aus Frage/Antwort-Paaren. */
export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
