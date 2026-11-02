// Code node "Demandes" (Run Once for All Items)
// 28 SYNTHETIC sheets, TEST set. Run ONCE only. English translation of the French sheets.
const LIMITE = 28;
const demandes = [
 {
  "id": "M001",
  "demande": "Brand: Maison Valdorine\nSector: food\nSize: mid-size\nFacts:\n- Vegetable and vegetarian-dish canner founded in 1962 in Maine-et-Loire.\n- 2025 revenue: €186M; 640 employees; 3 factories in France.\n- Launch in September 2026 of a 100% French-vegetable jar range under the brand 'Valdorine Racines'.\n- Distribution in supermarkets and catering; present on Instagram and Facebook."
 },
 {
  "id": "M002",
  "demande": "Brand: Champarel\nSector: food\nSize: large group\nFacts:\n- Manufacturer of yoghurts, dairy desserts and fresh cheeses, based in Brittany, national brand.\n- Revenue: €412M according to the company page (2025); €389M according to the financial release published in March 2026.\n- Official partner of a women's handball club since 2024.\n- Announced target: cut sugar by 15% in the children's range by 2027."
 },
 {
  "id": "M003",
  "demande": "Brand: Pastavia\nSector: food\nSize: SME\nFacts:\n- Maker of artisanal fresh pasta in Lyon, founded in 2011.\n- 42 employees; 2025 revenue: €11M.\n- Short-circuit sales: delicatessens, markets and online shop.\n- Opening of a second production workshop planned for early 2027."
 },
 {
  "id": "M004",
  "demande": "Brand: Saveurs d'Ormeaux\nSector: food\nSize: mid-size\nFacts:\n- Maker of chilled ready meals for supermarkets, Vendée.\n- 2021 revenue: €154M (last figure published on the company page).\n- In 2021, announcement of a €12M investment in a new production line.\n- Brands: 'Ormeaux Traiteur' and 'Petit Four à Pain'."
 },
 {
  "id": "M005",
  "demande": "Brand: Kerlouan Gourmet\nSector: food\nSize: SME\nFacts:\n- Producer of salted-butter biscuits and galettes, Finistère, founded in 1989.\n- About 90 employees.\n- Range of 24 products sold in supermarkets and souvenir shops."
 },
 {
  "id": "M006",
  "demande": "Brand: Fournil des Vaux\nSector: food\nSize: mid-size\nFacts:\n- Maker of frozen bread and viennoiseries for bakeries and catering, Normandy.\n- 2025 revenue: €98M; 410 employees.\n- B Corp certification obtained in 2025.\n- Regional radio campaign launched in spring 2026 for the consumer range 'Fournil Maison'."
 },
 {
  "id": "M007",
  "demande": "Brand: Orsanne\nSector: food\nSize: large group\nFacts:\n- Snacking and breakfast-cereal group, head office in Paris, 4 brands.\n- 2025 revenue: €1.3bn; 4,200 employees.\n- Main brand 'Orsanne Croc' targeting 6-12 year-olds; partnerships with children's channels.\n- Plan announced in January 2026 to remove artificial colourings from all ranges."
 },
 {
  "id": "M011",
  "demande": "Brand: Phytorelle\nSector: health\nSize: mid-size\nFacts:\n- Herbal food-supplement laboratory, Lyon, founded in 1998.\n- 2025 revenue: €74M; 280 employees.\n- Sold in pharmacies and parapharmacies; 85 products.\n- Launch in October 2026 of a sleep range, developed with a private research institute."
 },
 {
  "id": "M012",
  "demande": "Brand: Laboratoires Vidamed\nSector: health\nSize: large group\nFacts:\n- Maker of vitamins and minerals, present in 30 countries.\n- 2025 revenue: €640M according to the annual report; €610M according to a press release for the same year.\n- Sponsor of a national half-marathon since 2023.\n- TV campaign launched in September 2026 on preventing winter deficiencies."
 },
 {
  "id": "M013",
  "demande": "Brand: Probiovia\nSector: health\nSize: SME\nFacts:\n- Probiotics start-up for digestive health, founded in 2019 in Nantes.\n- 26 employees; 2025 revenue: €8M.\n- Products sold in pharmacies and online.\n- Clinical study on 120 patients published in 2025 (results presented by the company)."
 },
 {
  "id": "M014",
  "demande": "Brand: Dermalune\nSector: health\nSize: mid-size\nFacts:\n- Dermo-cosmetics brand for sensitive skin, produced in Auvergne.\n- 2022 revenue: €58M (last accessible figure).\n- Launch in 2022 of a children's line.\n- Distribution in pharmacies."
 },
 {
  "id": "M015",
  "demande": "Brand: Apaisia\nSector: health\nSize: SME\nFacts:\n- Maker of herbal teas and essential oils for well-being, Drôme.\n- About forty products."
 },
 {
  "id": "M016",
  "demande": "Brand: Sommeria\nSector: health\nSize: SME\nFacts:\n- Sleep-accessories brand (pillows, masks, over-the-counter melatonin), Paris, founded in 2020.\n- 2025 revenue: €14M; 30 employees.\n- Sold mainly online; strong activity on Instagram and TikTok.\n- Content partnership with a well-being podcast since 2025."
 },
 {
  "id": "M017",
  "demande": "Brand: Articuline\nSector: health\nSize: mid-size\nFacts:\n- Laboratory of joint and muscle-comfort products (gels, patches), Toulouse.\n- 2025 revenue: €92M; 310 employees.\n- Range sold in pharmacies and supermarkets.\n- Distribution agreement in Belgium signed in 2026."
 },
 {
  "id": "M021",
  "demande": "Brand: Domaine des Hautes Brumes\nSector: alcohol\nSize: SME\nFacts:\n- 48-hectare wine estate in Burgundy, family-run since 1887.\n- Annual production of about 180,000 bottles; 22 employees.\n- Sold in wine shops, restaurants and exported to 8 countries.\n- Launch in 2026 of an alcohol-free cuvée made from the estate's grapes."
 },
 {
  "id": "M022",
  "demande": "Brand: Distillerie Aurevaux\nSector: alcohol\nSize: mid-size\nFacts:\n- Whisky and liqueur distillery, Jura, founded in 2009.\n- 2025 revenue: €31M; 85 employees.\n- Distillery visits: 45,000 visitors in 2025.\n- New limited edition announced for December 2026."
 },
 {
  "id": "M023",
  "demande": "Brand: Brasserie Kaltenmoor\nSector: alcohol\nSize: mid-size\nFacts:\n- Industrial and craft brewery, Alsace, founded in 1921.\n- Production: 320,000 hl according to the website, 280,000 hl according to a business press article (2025).\n- Partnership with a contemporary-music festival since 2022.\n- Alcohol-free range launched in 2025."
 },
 {
  "id": "M024",
  "demande": "Brand: Maison Perdriel\nSector: alcohol\nSize: large group\nFacts:\n- Champagne house founded in 1840 in Épernay, international wine and spirits group.\n- 2025 revenue: €1.1bn; 2,600 employees.\n- Prestige brand present in more than 100 countries.\n- Partnership with a major sailing race since 2023."
 },
 {
  "id": "M025",
  "demande": "Brand: Cidrerie du Vallon Sauvage\nSector: alcohol\nSize: SME\nFacts:\n- Artisanal cider mill in Normandy, founded in 2005.\n- Production of ciders and perry, 12 employees.\n- Short-circuit sales."
 },
 {
  "id": "M026",
  "demande": "Brand: Gin Orfaline\nSector: alcohol\nSize: SME\nFacts:\n- Artisanal gin brand founded in 2018 in Bordeaux.\n- 2025 revenue: €4.5M; 11 employees.\n- Sold in wine shops, bars and online; strong activity on Instagram.\n- Launch of a low-alcohol gin in 2026."
 },
 {
  "id": "M027",
  "demande": "Brand: Cave Montbrelle\nSector: alcohol\nSize: mid-size\nFacts:\n- Wine merchant of the South-West, founded in 1976.\n- 2022 revenue: €52M.\n- In 2022, acquisition of a 30-hectare estate.\n- No news published since."
 },
 {
  "id": "M031",
  "demande": "Brand: Croquelune\nSector: petfood\nSize: large group\nFacts:\n- Maker of dry food for dogs and cats, national brand, head office in Rennes.\n- 2025 revenue: €520M; 1,800 employees.\n- Veterinary range sold in clinics; consumer range in supermarkets.\n- TV campaign and partnership with a pet influencer launched in 2026."
 },
 {
  "id": "M032",
  "demande": "Brand: Wouafin\nSector: petfood\nSize: mid-size\nFacts:\n- Brand of treats and dry food for dogs, Vendée.\n- 2025 revenue: €64M; 190 employees.\n- Grain-free range launched in 2024.\n- Presence on social networks and online loyalty programme."
 },
 {
  "id": "M033",
  "demande": "Brand: Félinova\nSector: petfood\nSize: mid-size\nFacts:\n- Cat-food brand, Alsace.\n- 2025 revenue: €88M according to the website; €79M according to a 2026 press release.\n- Senior range launched in 2025.\n- Sold in pet shops and supermarkets."
 },
 {
  "id": "M034",
  "demande": "Brand: Naturopattes\nSector: petfood\nSize: SME\nFacts:\n- Natural food brand for dogs and cats, founded in 2016 in Lille.\n- 2025 revenue: €9M; 24 employees.\n- Sold online and in specialist pet shops.\n- Monthly subscription launched in 2025; community of 60,000 subscribers on social networks."
 },
 {
  "id": "M035",
  "demande": "Brand: Gamelle & Co\nSector: petfood\nSize: SME\nFacts:\n- Start-up delivering fresh meals for dogs at home, Paris.\n- €5M fundraising in 2021.\n- Last news published: launch of a chicken recipe in 2021."
 },
 {
  "id": "M036",
  "demande": "Brand: Ronronia\nSector: petfood\nSize: SME\nFacts:\n- Brand of cat litter and accessories, Pays de la Loire.\n- About thirty products."
 },
 {
  "id": "M037",
  "demande": "Brand: Terre Canine\nSector: petfood\nSize: mid-size\nFacts:\n- Maker of dry food and bowls for working and sporting dogs, Auvergne.\n- 2025 revenue: €41M; 120 employees.\n- Partner of several canine-sports clubs.\n- New factory planned for 2027."
 }
];
return demandes.slice(0, LIMITE).map((d) => ({ json: d }));
