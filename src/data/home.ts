// Inhalte der Startseite – nur Fakten, die schon auf der alten Website standen, nichts erfunden.
// Neu geordnet am 16.10.2026 (Kundenwunsch: serviceorientiert, wenig Text, keine Doppelungen).
// Jede Aussage steht nur EINMAL auf der Startseite:
//   Hero-Haken: Meisterbetrieb, kostenlose Begutachtung, Wohnwagen & Wohnmobile
//   SORGEN: Versicherung, Gutachten/Kalkulation, Ersatzfahrzeug/Abschleppen, Kosten
//   ABLAUF: die drei Schritte für den Kunden
//   FAQ: Schadenmeldung, „wer zahlt?“, freie Werkstattwahl
// Details je Leistung stehen auf den Leistungsseiten (src/content/leistungen/).

/** „Kennen Sie das?“ – typische Sorgen nach einem Schaden und was wir übernehmen. */
export const SORGEN = [
  {
    icon: "doc",
    sorge: "Papierkram und Telefonate mit der Versicherung?",
    loesung: "Wir übernehmen die komplette Schadensabwicklung – inklusive Kommunikation mit Ihrer Versicherung.",
  },
  {
    icon: "eye",
    sorge: "Wer kümmert sich um Gutachten und Kalkulation?",
    loesung: "Wir: Schadenanalyse, Gutachten und Kalkulation – nachvollziehbar dokumentiert für die Abrechnung.",
  },
  {
    icon: "key",
    sorge: "Wochenlang ohne Auto?",
    loesung: "Sie bekommen ein Ersatzfahrzeug für die Dauer der Reparatur. Nicht mehr fahrbereit? Wir schleppen ab.",
  },
  {
    icon: "euro",
    sorge: "Was kostet das – und wie lange dauert es?",
    loesung: "Wir besprechen vorab mit Ihnen, was gemacht wird, was es kostet und wie lange es dauert.",
  },
];

/** „So einfach geht's“ – drei Schritte aus Kundensicht. */
export const ABLAUF = [
  { icon: "doc", title: "Schaden melden", text: "Online in drei kurzen Schritten, per WhatsApp oder Telefon. Fotos einfach mitschicken." },
  { icon: "key", title: "Auto abgeben", text: "Sie bringen nur Ihr Auto. Begutachtung, Gutachten und Versicherung erledigen wir." },
  { icon: "car", title: "Repariert abholen", text: "Instand gesetzt und lackiert im exakt gemessenen Farbton – fertig." },
];

export const FAQ = [
  {
    q: "Was brauche ich, um einen Schaden zu melden?",
    a: "Nur Ihren Namen und Ihre Telefonnummer. Kennzeichen, Versicherung und Schadennummer helfen uns, sind aber freiwillig. Fotos schicken Sie am einfachsten per WhatsApp.",
  },
  {
    q: "Ich weiß noch nicht, wer den Schaden bezahlt – kann ich trotzdem melden?",
    a: "Ja. Wählen Sie im Formular einfach „Weiß ich noch nicht“. Den Rest besprechen wir gemeinsam mit Ihnen.",
  },
  {
    q: "Darf ich die Werkstatt nach einem Unfall selbst wählen?",
    a: "Im Haftpflichtfall gilt die freie Werkstattwahl. Wir setzen uns für Ihre Rechte und Leistungen ein – fair, engagiert und in Ihrem Sinne.",
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
