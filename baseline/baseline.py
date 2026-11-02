# Baseline sans IA : un gabarit unique en 3 mails (J0, J+4, J+9), seuls marque / secteur / site changent.
# Structure et ton inspirés de la pratique de l'auteur ; contenu entièrement fictif (Hexamédia).
import csv
SITE={"agroalimentaire":"Saveurs&Co","santé":"Vitalité Mag","alcool":"Cépages Magazine","petfood":"Pattes & Compagnie"}
def baseline(r):
    m,s=r['marque'],r['secteur'];site=SITE[s]
    fonctions="responsable marketing"
    e1=f"""Objet : {m} x {site} : un projet ensemble ?

Bonjour,

Je suis en charge des partenariats chez Hexamédia, qui édite {site}.

Nous accompagnons des marques du secteur {s} sur leurs enjeux de visibilité et de considération, à travers :
• Display et vidéo : des formats pour toucher votre cible sur nos sites,
• Contenu de marque : des contenus créés avec nos équipes éditoriales,
• Influence : des partenariats avec des créateurs de contenu,
• Opérations spéciales : des dispositifs sur mesure.

Seriez-vous disponible pour un échange de 15 minutes ?

Bonne journée,
Prénom"""
    e2=f"""Objet : Re : {m} x {site} : un projet ensemble ?

Bonjour,

Je me permets de revenir vers vous avec des exemples de ce que nous réalisons pour des marques du secteur {s} :
• [exemple fictif 1]
• [exemple fictif 2]

Un dispositif de ce type pourrait-il faire sens pour {m} ?

Bonne journée,
Prénom"""
    e3=f"""Objet : {m} x {site} : on en discute ?

Bonjour,

Peut-être que notre proposition ne répond pas à vos enjeux actuels.

Je reviens vers vous malgré tout, car nous accompagnons aussi les marques sur des sujets plus larges : influence, média digital, production de contenus, événementiel.

Je serais ravi d'échanger pour comprendre vos priorités du moment.

Quels sont vos prochains créneaux ?

Au plaisir d'échanger,
Prénom"""
    return dict(id=r['id'],marque=m,jeu=r['jeu'],fonctions_proposees=fonctions,angle="visibilité et considération (modèle unique)",email_1=e1,relance_1=e2,relance_2=e3)
rows=[baseline(r) for r in csv.DictReader(open('marques_synthetiques.csv',encoding='utf-8-sig'),delimiter=';')]
w=csv.DictWriter(open('resultats_baseline.csv','w',encoding='utf-8-sig',newline=''),fieldnames=rows[0].keys(),delimiter=';');w.writeheader();w.writerows(rows)
print(len(rows));print(rows[0]['email_1'])
