// Code node "Demandes" (Run Once for All Items)
// 12 SYNTHETIC sheets, VALIDATION set. Run ONCE only. English translation of the French sheets.
const LIMITE = 12;
const demandes = [
 {
  "id": "M008",
  "demande": "Brand: Les Jardins de Mélisse\nSector: food\nSize: SME\nFacts:\n- Producer of organic soups and vegetable juices, Occitanie, founded in 2014.\n- 35 employees on the company page, 52 employees in a local press article (2025).\n- Sold in organic shops and online.\n- €3M fundraising in 2024."
 },
 {
  "id": "M009",
  "demande": "Brand: Boulangerie Pasqualini Frères\nSector: food\nSize: mid-size\nFacts:\n- Family-owned biscuit and dry-cake company, Alsace, founded in 1935.\n- 2025 revenue: €120M.\n- Products sold in France and in 12 countries."
 },
 {
  "id": "M010",
  "demande": "Brand: Mielleraie du Quercy\nSector: food\nSize: SME\nFacts:\n- Producer and packer of honey and hive products, Lot.\n- In 2020, the company joined a fair-trade label and recruited 8 partner beekeepers.\n- Company page not updated since 2022; revenue not disclosed."
 },
 {
  "id": "M018",
  "demande": "Brand: Immunéa\nSector: health\nSize: large group\nFacts:\n- Group of consumer health products (immunity, colds, winter), head office in Paris.\n- 2025 revenue: €780M.\n- Present in 45 countries."
 },
 {
  "id": "M019",
  "demande": "Brand: Vitalpha Seniors\nSector: health\nSize: SME\nFacts:\n- Food supplements and fitness-maintenance aids for the over-60s, Bordeaux.\n- 25 employees according to the website; 40 according to a company directory (2025).\n- Sold in pharmacies and by mail order.\n- Partnership with a regional mutual insurer in 2025."
 },
 {
  "id": "M020",
  "demande": "Brand: Ophtalie\nSector: health\nSize: mid-size\nFacts:\n- Maker of eye-care products (artificial tears, supplements), Strasbourg.\n- 2021 revenue: €66M.\n- 'News' page: last press release in 2021 (new production site)."
 },
 {
  "id": "M028",
  "demande": "Brand: Rhumerie Saint-Calvaire\nSector: alcohol\nSize: SME\nFacts:\n- Artisanal rum distillery in Guadeloupe, founded in 1903.\n- Production: 600,000 bottles per year; 60 employees.\n- Export to Europe and North America.\n- Anniversary edition announced for 2027."
 },
 {
  "id": "M029",
  "demande": "Brand: Liqueurs Mathéo\nSector: alcohol\nSize: SME\nFacts:\n- Maker of liqueurs and aperitifs, Provence, family company.\n- Founded in 1952 according to the website, in 1958 according to a regional press article.\n- Range of 15 products; sold in regional supermarkets."
 },
 {
  "id": "M030",
  "demande": "Brand: Maison Castelvieux\nSector: alcohol\nSize: mid-size\nFacts:\n- Producer of Bordeaux wines and merchant, several châteaux.\n- 2025 revenue: €70M."
 },
 {
  "id": "M038",
  "demande": "Brand: Granivora\nSector: petfood\nSize: SME\nFacts:\n- Food for rodents, rabbits and birds, Normandy, founded in 1994.\n- 2025 revenue: €18M; 55 employees.\n- Range sold in pet shops and garden centres.\n- Launch of 100% recyclable packaging in 2026."
 },
 {
  "id": "M039",
  "demande": "Brand: Aquavita\nSector: petfood\nSize: SME\nFacts:\n- Maker of food for aquarium and pond fish, Alsace.\n- Founded in 1985 according to the website, in 1990 according to a company directory (2025).\n- Sold in pet shops and garden centres."
 },
 {
  "id": "M040",
  "demande": "Brand: Maison Pattelière\nSector: petfood\nSize: large group\nFacts:\n- Animal food and health group, head office in Paris.\n- 2025 revenue: €950M."
 }
];
return demandes.slice(0, LIMITE).map((d) => ({ json: d }));
