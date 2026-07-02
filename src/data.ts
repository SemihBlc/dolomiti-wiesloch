// Echte Eckdaten Eiscafé Dolomiti, Wiesloch (recherchiert, Stand 07/2026).
// KEINE erfundenen Preise/Zeiten/Zitate — offene Punkte (genaue Zeiten, Preise,
// finale Bildrechte) werden mit dem Wirt final abgestimmt.
export const d = {
  name: "Eiscafé Dolomiti",
  inhaber: "Manuel Morgado Morais",
  adresse: "Hauptstraße 72, 69168 Wiesloch",
  tel: "06222 1362",
  telHref: "tel:+4962221362",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Eiscaf%C3%A9+Dolomiti+Hauptstra%C3%9Fe+72+69168+Wiesloch",
  rating: "4,6",
  reviews: "289",
  oeffnungszeiten: [
    ["Mo–Sa", "09:00–22:00"],
    ["So", "10:00–22:00"],
  ] as [string, string][],
  // Bilder für den Swipe-Bereich. Lokale Bilder liegen in public/fotos/.
  // hero.jpg/nasenschild.jpg sind lokal vorhandene Fotos; *-original.jpg sind Demo-Crops aus öffentlichen Dolomiti-Galerien.
  // Für den finalen Livegang Bildrechte/Originaldateien kurz mit dem Betreiber bestätigen.
  bilder: [
    {
      src: "fotos/hero.jpg",
      alt: "Spaghettieis mit Cappuccino auf der Terrasse vom Eiscafé Dolomiti",
      label: "Spaghettieis · draußen in der Sonne",
    },
    {
      src: "fotos/terrasse-original.jpg",
      alt: "Außenbereich vom Eiscafé Dolomiti in der Wieslocher Hauptstraße",
      label: "Draußen sitzen · Hauptstraße Wiesloch",
    },
    {
      src: "fotos/eistheke-original.jpg",
      alt: "Eistheke mit verschiedenen Sorten im Eiscafé Dolomiti",
      label: "Eistheke · viele Sorten",
    },
    {
      src: "fotos/eisbecher-sonne-original.jpg",
      alt: "Eisbecher auf der Terrasse vom Eiscafé Dolomiti",
      label: "Eisbecher · kurz in der Sonne",
    },
    {
      src: "fotos/waffel-original.jpg",
      alt: "Warme Waffel mit Schokolade im Eiscafé Dolomiti",
      label: "Waffel · warm & knusprig",
    },
    {
      src: "fotos/cappuccino-original.jpg",
      alt: "Cappuccino im Eiscafé Dolomiti",
      label: "Cappuccino · kurze Pause",
    },
    {
      src: "fotos/nasenschild.jpg",
      alt: "Nasenschild vom Eiscafé Dolomiti Wiesloch",
      label: "Dolomiti · mitten in der Hauptstraße",
    },
  ],
  schnell: [
    ["Adresse", "Hauptstraße 72"],
    ["Telefon", "06222 1362"],
    ["Sommer", "Mo–Sa 9–22 · So ab 10"],
  ] as [string, string][],
  // Eiscafé + Bistro — echte Angebots-Kategorien (aus der Speisekarte), keine erfundenen Preise.
  karte: [
    ["Hausgemachtes Gelato", "Cremige Sorten und fruchtige Sorbets, täglich frisch gemacht."],
    ["Eisbecher", "Vom Klassiker bis zum großen Becher mit Sahne, Früchten und Krokant."],
    ["Spaghettieis", "Der Liebling der Gäste — Vanilleeis, Erdbeersauce, weiße Schokoraspeln."],
    ["Warme Waffeln", "Frisch gebacken, knusprig, mit Eis und Sahne."],
    ["Pizza & Pasta", "Aus der Bistro-Küche: italienisch, herzhaft, frisch zubereitet."],
    ["Panini & Caffè", "Für den kleinen Hunger — und echter Espresso aus Bella Italia."],
  ] as [string, string][],
  // Highlights für die familiäre Sektion
  spezial: [
    ["Mit Kindern entspannt", "Ein Eis nach der Schule, ein Cappuccino für die Großen — unkompliziert draußen sitzen."],
    ["Manuel & Team", "Bekannte Gesichter, kurze Wege und ein Tresen, an dem man gern kurz stehen bleibt."],
    ["Eis & Bistro unter einem Dach", "Erst Pasta oder Pizza, danach ein Eisbecher — alles an einem Ort."],
    ["Mitten in Wiesloch", "An der Hauptstraße, mit Plätzen draußen — perfekt für eine Sommerpause."],
  ] as [string, string][],
  faq: [
    [
      "Gibt es draußen Sitzplätze?",
      "Ja. Dolomiti hat Plätze draußen an der Hauptstraße — gut für einen Eisbecher, Cappuccino oder eine kurze Sommerpause.",
    ],
    [
      "Gibt es Waffeln?",
      "Ja. Neben hausgemachtem Gelato, Eisbechern und Spaghettieis gibt es auch warme Waffeln, je nach Angebot mit Eis und Sahne.",
    ],
    [
      "Wann hat Dolomiti geöffnet?",
      "Im Sommer aktuell Montag bis Samstag von 09:00 bis 22:00 Uhr und sonntags von 10:00 bis 22:00 Uhr. Zeiten können je nach Wetter und Saison wechseln — kurz anrufen ist am sichersten.",
    ],
    [
      "Kann man telefonisch reservieren oder kurz nachfragen?",
      "Ja. Für aktuelle Öffnungszeiten, größere Gruppen oder kurze Rückfragen erreichst du Dolomiti telefonisch unter 06222 1362.",
    ],
  ] as [string, string][],
  // typische Gelato-Sorten (Auswahl variiert saisonal) — für die Lauf-Leiste
  sorten: [
    ["Stracciatella", "#d8cdb6"],
    ["Pistazie", "#7c9a4e"],
    ["Haselnuss", "#9c6b3f"],
    ["Zitrone", "#e6c34a"],
    ["Amarena", "#a8324f"],
    ["Vanille", "#ecd9a6"],
    ["Schokolade", "#4a3322"],
    ["Erdbeere", "#df5e6e"],
  ] as [string, string][],
};
