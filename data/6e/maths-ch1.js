// ===== GUIDE - Mathematiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "maths", [
  {
    id: "m6-fractions",
    titre: "Chapitre 1 : Les fractions",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "m6-fractions-notion",
        titre: "Découvrir la fraction",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce qu'une fraction ?",
            texte: "Quand on partage une unité en parts égales, chaque part est une fraction de l'unité.\nExemple : si tu plies une bande de papier en 2 parts égales, chaque part représente 1/2 de la bande. Si tu la plies en 4, chaque part représente 1/4."
          },
          {
            type: "schema",
            titre: "Le partage d'une bande",
            svg: "<svg viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='15' width='300' height='30' fill='#dbeafe' stroke='#1e3a5f'/><line x1='160' y1='15' x2='160' y2='45' stroke='#1e3a5f'/><text x='85' y='35' font-size='13' text-anchor='middle' fill='#1e3a5f'>1/2</text><text x='235' y='35' font-size='13' text-anchor='middle' fill='#1e3a5f'>1/2</text><rect x='10' y='70' width='300' height='30' fill='#dcfce7' stroke='#166534'/><line x1='85' y1='70' x2='85' y2='100' stroke='#166534'/><line x1='160' y1='70' x2='160' y2='100' stroke='#166534'/><line x1='235' y1='70' x2='235' y2='100' stroke='#166534'/><text x='47' y='90' font-size='13' text-anchor='middle' fill='#166534'>1/4</text><text x='122' y='90' font-size='13' text-anchor='middle' fill='#166534'>1/4</text><text x='197' y='90' font-size='13' text-anchor='middle' fill='#166534'>1/4</text><text x='272' y='90' font-size='13' text-anchor='middle' fill='#166534'>1/4</text></svg>",
            legende: "La même bande partagée en 2, puis en 4 parts égales."
          },
          {
            type: "regle",
            titre: "Numérateur et dénominateur",
            texte: "Dans la fraction a/b :\nLe nombre du bas (b) est le dénominateur : il dit en combien de parts égales on a partagé.\nLe nombre du haut (a) est le numérateur : il dit combien de parts on prend.\nAstuce : le Dénominateur est en Dessous (les deux commencent par D)."
          },
          {
            type: "exemple",
            titre: "Le gâteau de Mbola",
            texte: "Mbola coupe un gâteau en 8 parts égales et en mange 3. Il mange 3/8 du gâteau.\n8 = dénominateur (le total des parts), 3 = numérateur (les parts mangées)."
          },
          {
            type: "tableau",
            titre: "Les mots difficiles",
            entetes: ["Mot", "Ce que ça veut dire"],
            lignes: [
              ["Unité", "L'objet entier que l'on partage (la bande, le gâteau...)"],
              ["Parts égales", "Chaque morceau a exactement la même taille"],
              ["Numérateur", "Le nombre de parts prises (en haut)"],
              ["Dénominateur", "Le nombre de parts au total (en bas)"]
            ]
          }
        ]
      },
      {
        id: "m6-fractions-equivalentes",
        titre: "Les fractions équivalentes",
        blocs: [
          {
            type: "definition",
            titre: "Des fractions qui valent la même chose",
            texte: "Deux fractions sont équivalentes quand elles représentent la même quantité.\nExemple : 1/2 = 2/4 = 4/8. Couper un gâteau en 2 et prendre 1 part, c'est pareil que le couper en 4 et prendre 2 parts."
          },
          {
            type: "regle",
            titre: "La règle d'or",
            texte: "On obtient une fraction équivalente en multipliant (ou en divisant) le numérateur ET le dénominateur par le même nombre (différent de zéro).\nExemple : 1/2 = (1×3)/(2×3) = 3/6."
          },
          {
            type: "methode",
            titre: "Simplifier une fraction",
            texte: "Simplifier, c'est trouver une fraction équivalente plus simple, en divisant le haut et le bas par le même nombre.\nExemple : 12/18 = (12÷6)/(18÷6) = 2/3.\nQuand on ne peut plus simplifier, la fraction est dite irréductible."
          },
          {
            type: "exemple",
            titre: "Fraction impropre et nombre fractionnaire",
            texte: "Une fraction dont le numérateur est plus grand que le dénominateur est dite impropre : elle vaut plus que 1.\n15/4 = 3 + 3/4, que l'on écrit 3 3/4 (on lit « 3 et 3 quarts »).\nPour la transformer : 15 ÷ 4 = 3, reste 3."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "1. Trouve deux fractions équivalentes à 1/3.\n2. Simplifie 8/12.\nRéponses : 1. 2/6 et 3/9 (par exemple). 2. 8/12 = 2/3."
          }
        ]
      },
      {
        id: "m6-fractions-comparer",
        titre: "Comparer et ranger",
        blocs: [
          {
            type: "regle",
            titre: "Même dénominateur",
            texte: "Si deux fractions ont le même dénominateur, la plus grande est celle qui a le plus grand numérateur.\nExemple : 5/12 > 3/12."
          },
          {
            type: "methode",
            titre: "Dénominateurs différents",
            texte: "On transforme les fractions pour avoir le même dénominateur, puis on compare.\nExemple : comparer 1/2 et 2/3.\n1/2 = 3/6 et 2/3 = 4/6. Or 3/6 < 4/6, donc 1/2 < 2/3."
          },
          {
            type: "schema",
            titre: "La droite numérique",
            svg: "<svg viewBox='0 0 320 90' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='40' x2='300' y2='40' stroke='#1e3a5f' stroke-width='2'/><line x1='20' y1='33' x2='20' y2='47' stroke='#1e3a5f' stroke-width='2'/><text x='20' y='65' font-size='13' text-anchor='middle' fill='#1e3a5f'>0</text><line x1='160' y1='33' x2='160' y2='47' stroke='#dc2626' stroke-width='2'/><text x='160' y='65' font-size='13' text-anchor='middle' fill='#dc2626'>1/2</text><line x1='300' y1='33' x2='300' y2='47' stroke='#1e3a5f' stroke-width='2'/><text x='300' y='65' font-size='13' text-anchor='middle' fill='#1e3a5f'>1</text></svg>",
            legende: "Chaque fraction a sa place sur la droite numérique."
          },
          {
            type: "remarque",
            titre: "Attention au piège",
            texte: "On ne compare jamais les numérateurs quand les dénominateurs sont différents. 2/3 est plus grand que 1/2, même si 1 < 2 : passe toujours par le même dénominateur pour être sûr."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Range du plus petit au plus grand : 1/2, 5/12, 2/3, 7/12.\nRéponse : dénominateur commun 12 : 1/2 = 6/12 et 2/3 = 8/12. Donc 5/12 < 1/2 < 7/12 < 2/3."
          }
        ]
      }
    ],
        exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un gâteau est coupé en 8 parts égales. Sarah en mange 3.\n1. Quelle fraction du gâteau Sarah a-t-elle mangée ?\n2. Quelle fraction reste-t-il ?",
        correction: "1. 3/8 (3 parts prises sur 8 parts au total).\n2. Il reste 5 parts, donc 5/8 du gâteau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans la fraction 5/6, comment s'appelle le nombre 5 ? Et le nombre 6 ?",
        correction: "5 est le numérateur (en haut) : le nombre de parts prises.\n6 est le dénominateur (en bas) : le nombre de parts égales au total."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "1. Trouve deux fractions équivalentes à 2/5.\n2. Simplifie 14/21.\n3. Écris 9/4 sous forme d'un nombre fractionnaire.",
        correction: "1. 2/5 = 4/10 = 6/15 (on multiplie haut et bas par 2, puis par 3).\n2. 14/21 = (14÷7)/(21÷7) = 2/3.\n3. 9 ÷ 4 = 2 reste 1, donc 9/4 = 2 1/4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Range du plus petit au plus grand :\n1/2, 5/12, 2/3, 7/12.",
        correction: "Dénominateur commun 12 : 1/2 = 6/12 et 2/3 = 8/12.\nDonc 5/12 < 6/12 < 7/12 < 8/12, c'est-à-dire :\n5/12 < 1/2 < 7/12 < 2/3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une bouteille contient 3/4 de litre de jus. On remplit des verres de 1/8 de litre.\nCombien de verres peut-on remplir ?",
        correction: "On cherche combien de fois 1/8 entre dans 3/4.\n3/4 = 6/8, et 6/8 ÷ 1/8 = 6.\nOn peut remplir 6 verres."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans une classe de 36 élèves, les 2/3 sont des filles.\n1. Combien y a-t-il de filles ?\n2. Combien de garçons ?",
        correction: "1. 36 × 2/3 = (36 ÷ 3) × 2 = 12 × 2 = 24 filles.\n2. 36 - 24 = 12 garçons."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Trois amis se partagent une somme d'argent. Le premier reçoit 1/3 de la somme, le deuxième reçoit 1/4 de la somme.\n1. Quelle fraction de la somme les deux premiers ont-ils reçue ensemble ?\n2. Quelle fraction reste-t-il pour le troisième ?\n3. La somme totale est de 60 000 Ar. Calcule la part de chacun.",
        correction: "1. Dénominateur commun 12 : 1/3 = 4/12 et 1/4 = 3/12. Ensemble : 4/12 + 3/12 = 7/12.\n2. Il reste 12/12 - 7/12 = 5/12 pour le troisième.\n3. Premier : 60 000 × 1/3 = 20 000 Ar. Deuxième : 60 000 × 1/4 = 15 000 Ar. Troisième : 60 000 × 5/12 = 25 000 Ar. Vérification : 20 000 + 15 000 + 25 000 = 60 000 ✓"
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un réservoir est rempli aux 5/6. On utilise 1/3 du réservoir entier pour arroser le jardin.\n1. Quelle fraction du réservoir reste-t-il ?\n2. Le réservoir contient 240 L quand il est plein. Combien de litres restent ?\n3. Peut-on encore remplir un bidon de 100 L ?",
        correction: "1. Dénominateur commun 6 : 5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2. Il reste la moitié du réservoir.\n2. 240 × 1/2 = 120 L.\n3. Oui : 120 L > 100 L, il reste assez d'eau (il restera même 20 L)."
      }
    ]
  }
]);
