"""Generates brands_synthetic.csv (40 FICTIONAL brands, invented facts), English edition.
Translated from the French original (make_marques.py): same order, same IDs M001-M040."""
import csv
# (brand, sector, size, trap, facts[])
B=[
# ---------- FOOD ----------
("Maison Valdorine","food","mid-size","none",["Vegetable and vegetarian-dish canner founded in 1962 in Maine-et-Loire.","2025 revenue: €186M; 640 employees; 3 factories in France.","Launch in September 2026 of a 100% French-vegetable jar range under the brand 'Valdorine Racines'.","Distribution in supermarkets and catering; present on Instagram and Facebook."]),
("Champarel","food","large group","contradictory_figure",["Manufacturer of yoghurts, dairy desserts and fresh cheeses, based in Brittany, national brand.","Revenue: €412M according to the company page (2025); €389M according to the financial release published in March 2026.","Official partner of a women's handball club since 2024.","Announced target: cut sugar by 15% in the children's range by 2027."]),
("Pastavia","food","SME","none",["Maker of artisanal fresh pasta in Lyon, founded in 2011.","42 employees; 2025 revenue: €11M.","Short-circuit sales: delicatessens, markets and online shop.","Opening of a second production workshop planned for early 2027."]),
("Saveurs d'Ormeaux","food","mid-size","old_fact",["Maker of chilled ready meals for supermarkets, Vendée.","2021 revenue: €154M (last figure published on the company page).","In 2021, announcement of a €12M investment in a new production line.","Brands: 'Ormeaux Traiteur' and 'Petit Four à Pain'."]),
("Kerlouan Gourmet","food","SME","missing_info",["Producer of salted-butter biscuits and galettes, Finistère, founded in 1989.","About 90 employees.","Range of 24 products sold in supermarkets and souvenir shops."]),
("Fournil des Vaux","food","mid-size","none",["Maker of frozen bread and viennoiseries for bakeries and catering, Normandy.","2025 revenue: €98M; 410 employees.","B Corp certification obtained in 2025.","Regional radio campaign launched in spring 2026 for the consumer range 'Fournil Maison'."]),
("Orsanne","food","large group","none",["Snacking and breakfast-cereal group, head office in Paris, 4 brands.","2025 revenue: €1.3bn; 4,200 employees.","Main brand 'Orsanne Croc' targeting 6-12 year-olds; partnerships with children's channels.","Plan announced in January 2026 to remove artificial colourings from all ranges."]),
("Les Jardins de Mélisse","food","SME","contradictory_figure",["Producer of organic soups and vegetable juices, Occitanie, founded in 2014.","35 employees on the company page, 52 employees in a local press article (2025).","Sold in organic shops and online.","€3M fundraising in 2024."]),
("Boulangerie Pasqualini Frères","food","mid-size","missing_info",["Family-owned biscuit and dry-cake company, Alsace, founded in 1935.","2025 revenue: €120M.","Products sold in France and in 12 countries."]),
("Mielleraie du Quercy","food","SME","old_fact",["Producer and packer of honey and hive products, Lot.","In 2020, the company joined a fair-trade label and recruited 8 partner beekeepers.","Company page not updated since 2022; revenue not disclosed."]),
# ---------- HEALTH ----------
("Phytorelle","health","mid-size","none",["Herbal food-supplement laboratory, Lyon, founded in 1998.","2025 revenue: €74M; 280 employees.","Sold in pharmacies and parapharmacies; 85 products.","Launch in October 2026 of a sleep range, developed with a private research institute."]),
("Laboratoires Vidamed","health","large group","contradictory_figure",["Maker of vitamins and minerals, present in 30 countries.","2025 revenue: €640M according to the annual report; €610M according to a press release for the same year.","Sponsor of a national half-marathon since 2023.","TV campaign launched in September 2026 on preventing winter deficiencies."]),
("Probiovia","health","SME","none",["Probiotics start-up for digestive health, founded in 2019 in Nantes.","26 employees; 2025 revenue: €8M.","Products sold in pharmacies and online.","Clinical study on 120 patients published in 2025 (results presented by the company)."]),
("Dermalune","health","mid-size","old_fact",["Dermo-cosmetics brand for sensitive skin, produced in Auvergne.","2022 revenue: €58M (last accessible figure).","Launch in 2022 of a children's line.","Distribution in pharmacies."]),
("Apaisia","health","SME","missing_info",["Maker of herbal teas and essential oils for well-being, Drôme.","About forty products."]),
("Sommeria","health","SME","none",["Sleep-accessories brand (pillows, masks, over-the-counter melatonin), Paris, founded in 2020.","2025 revenue: €14M; 30 employees.","Sold mainly online; strong activity on Instagram and TikTok.","Content partnership with a well-being podcast since 2025."]),
("Articuline","health","mid-size","none",["Laboratory of joint and muscle-comfort products (gels, patches), Toulouse.","2025 revenue: €92M; 310 employees.","Range sold in pharmacies and supermarkets.","Distribution agreement in Belgium signed in 2026."]),
("Immunéa","health","large group","missing_info",["Group of consumer health products (immunity, colds, winter), head office in Paris.","2025 revenue: €780M.","Present in 45 countries."]),
("Vitalpha Seniors","health","SME","contradictory_figure",["Food supplements and fitness-maintenance aids for the over-60s, Bordeaux.","25 employees according to the website; 40 according to a company directory (2025).","Sold in pharmacies and by mail order.","Partnership with a regional mutual insurer in 2025."]),
("Ophtalie","health","mid-size","old_fact",["Maker of eye-care products (artificial tears, supplements), Strasbourg.","2021 revenue: €66M.","'News' page: last press release in 2021 (new production site)."]),
# ---------- ALCOHOL ----------
("Domaine des Hautes Brumes","alcohol","SME","none",["48-hectare wine estate in Burgundy, family-run since 1887.","Annual production of about 180,000 bottles; 22 employees.","Sold in wine shops, restaurants and exported to 8 countries.","Launch in 2026 of an alcohol-free cuvée made from the estate's grapes."]),
("Distillerie Aurevaux","alcohol","mid-size","none",["Whisky and liqueur distillery, Jura, founded in 2009.","2025 revenue: €31M; 85 employees.","Distillery visits: 45,000 visitors in 2025.","New limited edition announced for December 2026."]),
("Brasserie Kaltenmoor","alcohol","mid-size","contradictory_figure",["Industrial and craft brewery, Alsace, founded in 1921.","Production: 320,000 hl according to the website, 280,000 hl according to a business press article (2025).","Partnership with a contemporary-music festival since 2022.","Alcohol-free range launched in 2025."]),
("Maison Perdriel","alcohol","large group","none",["Champagne house founded in 1840 in Épernay, international wine and spirits group.","2025 revenue: €1.1bn; 2,600 employees.","Prestige brand present in more than 100 countries.","Partnership with a major sailing race since 2023."]),
("Cidrerie du Vallon Sauvage","alcohol","SME","missing_info",["Artisanal cider mill in Normandy, founded in 2005.","Production of ciders and perry, 12 employees.","Short-circuit sales."]),
("Gin Orfaline","alcohol","SME","none",["Artisanal gin brand founded in 2018 in Bordeaux.","2025 revenue: €4.5M; 11 employees.","Sold in wine shops, bars and online; strong activity on Instagram.","Launch of a low-alcohol gin in 2026."]),
("Cave Montbrelle","alcohol","mid-size","old_fact",["Wine merchant of the South-West, founded in 1976.","2022 revenue: €52M.","In 2022, acquisition of a 30-hectare estate.","No news published since."]),
("Rhumerie Saint-Calvaire","alcohol","SME","none",["Artisanal rum distillery in Guadeloupe, founded in 1903.","Production: 600,000 bottles per year; 60 employees.","Export to Europe and North America.","Anniversary edition announced for 2027."]),
("Liqueurs Mathéo","alcohol","SME","contradictory_figure",["Maker of liqueurs and aperitifs, Provence, family company.","Founded in 1952 according to the website, in 1958 according to a regional press article.","Range of 15 products; sold in regional supermarkets."]),
("Maison Castelvieux","alcohol","mid-size","missing_info",["Producer of Bordeaux wines and merchant, several châteaux.","2025 revenue: €70M."]),
# ---------- PETFOOD ----------
("Croquelune","petfood","large group","none",["Maker of dry food for dogs and cats, national brand, head office in Rennes.","2025 revenue: €520M; 1,800 employees.","Veterinary range sold in clinics; consumer range in supermarkets.","TV campaign and partnership with a pet influencer launched in 2026."]),
("Wouafin","petfood","mid-size","none",["Brand of treats and dry food for dogs, Vendée.","2025 revenue: €64M; 190 employees.","Grain-free range launched in 2024.","Presence on social networks and online loyalty programme."]),
("Félinova","petfood","mid-size","contradictory_figure",["Cat-food brand, Alsace.","2025 revenue: €88M according to the website; €79M according to a 2026 press release.","Senior range launched in 2025.","Sold in pet shops and supermarkets."]),
("Naturopattes","petfood","SME","none",["Natural food brand for dogs and cats, founded in 2016 in Lille.","2025 revenue: €9M; 24 employees.","Sold online and in specialist pet shops.","Monthly subscription launched in 2025; community of 60,000 subscribers on social networks."]),
("Gamelle & Co","petfood","SME","old_fact",["Start-up delivering fresh meals for dogs at home, Paris.","€5M fundraising in 2021.","Last news published: launch of a chicken recipe in 2021."]),
("Ronronia","petfood","SME","missing_info",["Brand of cat litter and accessories, Pays de la Loire.","About thirty products."]),
("Terre Canine","petfood","mid-size","none",["Maker of dry food and bowls for working and sporting dogs, Auvergne.","2025 revenue: €41M; 120 employees.","Partner of several canine-sports clubs.","New factory planned for 2027."]),
("Granivora","petfood","SME","none",["Food for rodents, rabbits and birds, Normandy, founded in 1994.","2025 revenue: €18M; 55 employees.","Range sold in pet shops and garden centres.","Launch of 100% recyclable packaging in 2026."]),
("Aquavita","petfood","SME","contradictory_figure",["Maker of food for aquarium and pond fish, Alsace.","Founded in 1985 according to the website, in 1990 according to a company directory (2025).","Sold in pet shops and garden centres."]),
("Maison Pattelière","petfood","large group","missing_info",["Animal food and health group, head office in Paris.","2025 revenue: €950M."]),
]
FUNC={"SME":"business owner or marketing manager","mid-size":"marketing director; communication or brand manager; digital manager","large group":"brand manager; media or partnerships manager; marketing director"}
rows=[];cnt={}
for i,(m,s,t,p,f) in enumerate(B,1):
    cnt[s]=cnt.get(s,0)+1
    rows.append(dict(id=f"M{i:03d}",brand=m,sector=s,size=t,set="validation" if cnt[s]>7 else "test",origin="SYNTHETIC (fictional brand, invented facts)",trap=p,facts=" | ".join(f),expected_roles=FUNC[t]))
w=csv.DictWriter(open('brands_synthetic.csv','w',encoding='utf-8-sig',newline=''),fieldnames=rows[0].keys(),delimiter=';');w.writeheader();w.writerows(rows)
from collections import Counter
print(len(rows),Counter(r['set'] for r in rows),Counter(r['trap'] for r in rows),Counter(r['sector'] for r in rows))
