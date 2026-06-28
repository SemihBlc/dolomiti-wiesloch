// Echte Eckdaten Eiscafé Dolomiti, Wiesloch (recherchiert, Stand 06/2026).
// KEINE erfundenen Preise/Zeiten/Zitate — offene Punkte (genaue Zeiten, Preise,
// echte Fotos) werden mit dem Wirt final abgestimmt.
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
  // Eiscafé + Bistro — echte Angebots-Kategorien (aus der Speisekarte), keine erfundenen Preise.
  karte: [
    ["Hausgemachtes Gelato", "Cremige Sorten und fruchtige Sorbets, täglich frisch gemacht."],
    ["Eisbecher", "Vom Klassiker bis zum großen Becher mit Sahne, Früchten und Krokant."],
    ["Spaghettieis", "Der Liebling der Gäste — Vanilleeis, Erdbeersauce, weiße Schokoraspeln."],
    ["Warme Waffeln", "Frisch gebacken, knusprig, mit Eis und Sahne."],
    ["Pizza & Pasta", "Aus der Bistro-Küche: italienisch, herzhaft, frisch zubereitet."],
    ["Panini & Caffè", "Für den kleinen Hunger — und echter Espresso aus Bella Italia."],
  ] as [string, string][],
  // Highlights für die Spezialitäten-Sektion
  spezial: [
    ["Spaghettieis", "Unser meistbestelltes Eis — der Klassiker, den die Gäste lieben."],
    ["Eis & Bistro unter einem Dach", "Erst ein Teller Pasta oder Pizza, dann der Eisbecher — alles an einem Ort."],
    ["Italienischer Caffè", "Espresso, Cappuccino & Co. — wie in Bella Italia."],
    ["Mitten in Wiesloch", "An der Hauptstraße, mit Plätzen draußen — der Treffpunkt im Ort."],
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
