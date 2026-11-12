enregistrerChapitres("6e", "maths", [
  {
    id: "ch12",
    titre: "Chapitre 12 : Les grandeurs",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "ch12-lecon1",
        titre: "Leçon 1 : Convertir les longueurs",
        blocs: [
          { type: "texte", texte: "La distance de Tana à Antsirabe se dit en kilomètres. La longueur de ta table se dit en mètres. L'épaisseur de ton crayon se dit en millimètres.\n\nToutes ces mesures sont des longueurs, et on peut passer de l'une à l'autre : c'est convertir." },
          { type: "definition", texte: "L'unité principale des longueurs est le mètre (m).\n• Ses multiples : le décamètre (dam), l'hectomètre (hm), le kilomètre (km).\n• Ses sous-multiples : le décimètre (dm), le centimètre (cm), le millimètre (mm)." },
          { type: "regle", texte: "Chaque unité de longueur vaut 10 fois la suivante :\n1 km = 10 hm = 100 dam = 1 000 m\n1 m = 10 dm = 100 cm = 1 000 mm" },
          { type: "methode", texte: "Le tableau de conversion :\n1. Écris le nombre dans le tableau, UN SEUL chiffre par colonne.\n2. Le chiffre des unités se place dans la colonne de l'unité de départ.\n3. Pour convertir, déplace la virgule jusqu'à la colonne de l'unité demandée, en complétant avec des zéros si besoin." },
          { type: "tableau", entetes: ["km", "hm", "dam", "m", "dm", "cm", "mm"], lignes: [["2", "5", "0", "0", "", "", ""], ["", "", "", "3", "4", "8", ""]] },
          { type: "texte", texte: "Première ligne : 2,5 km = 2 500 m (le 2 dans la colonne km, on complète jusqu'à la colonne m).\nDeuxième ligne : 348 cm = 3,48 m (le 8 dans la colonne cm, la virgule se met après le 3 dans la colonne m)." },
          { type: "remarque", texte: "Retiens les conversions les plus utiles :\n• 1 km = 1 000 m\n• 1 m = 100 cm\n• 1 cm = 10 mm" }
        ]
      },
      {
        id: "ch12-lecon2",
        titre: "Leçon 2 : Convertir les masses et les capacités",
        blocs: [
          { type: "texte", texte: "Au marché, on pèse le riz en kilogrammes et on mesure l'huile en litres. Masses et capacités se convertissent comme les longueurs." },
          { type: "definition", texte: "L'unité principale des masses est le gramme (g).\n• Ses multiples : le kilogramme (kg) et la tonne (t).\n• Ses sous-multiples : le décigramme (dg), le centigramme (cg), le milligramme (mg)." },
          { type: "regle", texte: "1 kg = 1 000 g\n1 t = 1 000 kg\nLa méthode du tableau est la même que pour les longueurs : kg, hg, dag, g, dg, cg, mg." },
          { type: "exemple", texte: "Exemple 1 : 2,4 kg = 2 400 g (on complète avec des zéros jusqu'à la colonne g).\n\nExemple 2 : un sac de riz de 50 kg, c'est 50 000 g.\nUne kapoaka de riz pèse environ 250 g." },
          { type: "definition", texte: "L'unité principale des capacités (pour mesurer les liquides) est le litre (L).\n• Ses sous-multiples : le décilitre (dL), le centilitre (cL), le millilitre (mL)." },
          { type: "regle", texte: "1 L = 10 dL = 100 cL = 1 000 mL" },
          { type: "exemple", texte: "Exemple : une bouteille d'eau de 1,5 L contient 1 500 mL.\nUne kapoaka contient environ 300 mL, soit 0,3 L." },
          { type: "remarque", texte: "Longueurs, masses, capacités : même méthode ! Un tableau avec une colonne par unité, un chiffre par colonne, et on déplace la virgule." }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch12-lecon3",
        titre: "Leçon 3 : Convertir les aires",
        blocs: [
          { type: "texte", texte: "L'aire mesure une surface : un champ, une cour, le sol d'une maison. Ici, attention : les conversions changent !" },
          { type: "definition", texte: "L'unité principale des aires est le mètre carré (m²). C'est l'aire d'un carré de 1 m de côté." },
          { type: "regle", texte: "Chaque unité d'aire vaut 100 fois la suivante (pas 10 !) :\n1 km² = 100 hm² = 10 000 dam² = 1 000 000 m²\n1 m² = 100 dm² = 10 000 cm²\nDans le tableau de conversion, chaque unité occupe DEUX colonnes de chiffres." },
          { type: "definition", texte: "Pour mesurer les terrains, on utilise l'hectare (ha) :\n1 ha = 1 hm² = 10 000 m²\nUn hectare, c'est l'aire d'un carré de 100 m de côté : un grand champ de riz." },
          { type: "tableau", entetes: ["km²", "hm² = ha", "dam²", "m²"], lignes: [["2", "80", "00", "00"]] },
          { type: "exemple", texte: "Exemple : le champ de la famille mesure 2,8 km². Convertis en hectares puis en m².\n• 2,8 km² = 280 hm² = 280 ha (on décale de 2 colonnes, donc × 100)\n• 2,8 km² = 2 800 000 m²\nVérifie : 280 × 10 000 = 2 800 000 ✓" },
          { type: "remarque", texte: "Piège classique : pour les longueurs on décale la virgule de 1 rang, pour les aires de 2 rangs, car une aire a DEUX dimensions." }
        ]
      },
      {
        id: "ch12-lecon4",
        titre: "Leçon 4 : Convertir les volumes",
        blocs: [
          { type: "texte", texte: "Le volume mesure l'espace occupé par un objet ou un liquide : l'eau dans une citerne, le bois d'une poutre, l'air dans une pièce." },
          { type: "definition", texte: "L'unité principale des volumes est le mètre cube (m³). C'est le volume d'un cube de 1 m de côté." },
          { type: "regle", texte: "Chaque unité de volume vaut 1 000 fois la suivante :\n1 m³ = 1 000 dm³\n1 dm³ = 1 000 cm³\nDans le tableau de conversion, chaque unité occupe TROIS colonnes de chiffres." },
          { type: "definition", texte: "Lien très utile entre volumes et litres :\n1 L = 1 dm³\nDonc 1 m³ = 1 000 L : une citerne de 1 m³ contient 1 000 litres d'eau." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='195' viewBox='0 0 320 195'><polygon points='95,160 185,160 185,70 95,70' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polygon points='185,160 212,138 212,48 185,70' fill='#BBDEFB' stroke='#1E88E5' stroke-width='2'/><polygon points='95,70 122,48 212,48 185,70' fill='#90CAF9' stroke='#1E88E5' stroke-width='2'/><text x='140' y='180' font-size='12' text-anchor='middle' fill='#333333'>1 dm</text><text x='78' y='118' font-size='12' fill='#333333'>1 dm</text><text x='152' y='52' font-size='12' fill='#333333'>1 dm</text><text x='250' y='110' font-size='14' font-weight='bold' fill='#E53935'>= 1 L</text></svg>", legende: "Un cube de 1 dm de côté contient exactement 1 litre. On écrit : 1 dm³ = 1 L." },
          { type: "regle", texte: "Le volume d'un pavé droit se calcule par la formule :\nV = Longueur × largeur × hauteur\nATTENTION : les trois dimensions doivent être dans la MÊME unité avant de calculer !" },
          { type: "exemple", texte: "Exemple : une poutre en bois mesure 5 m de long, 8 cm de large et 23 cm de haut. Quel est son volume en cm³ ?\n1. Convertis : 5 m = 500 cm\n2. Calcule : V = 500 × 8 × 23 = 92 000 cm³\n3. Tu peux convertir : 92 000 cm³ = 92 dm³" },
          { type: "remarque", texte: "Résumé des décalages de virgule :\n• longueurs : 1 rang (×10)\n• aires : 2 rangs (×100)\n• volumes : 3 rangs (×1 000)" }
        ]
      },
      {
        id: "ch12-lecon5",
        titre: "Leçon 5 : Les durées (complété par Guide)",
        blocs: [
          { type: "texte", texte: "Quelle heure est-il ? Combien de temps dure le voyage Tana-Antsirabe ? Pour répondre, on mesure des durées. Ici, tout change : les durées ne comptent pas par 10, mais par 60 !" },
          { type: "definition", texte: "Les unités de durée :\n• 1 minute (min) = 60 secondes (s)\n• 1 heure (h) = 60 minutes\n• 1 jour = 24 heures" },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='190' viewBox='0 0 320 190'><circle cx='160' cy='90' r='58' fill='#FFFFFF' stroke='#333333' stroke-width='2.5'/><circle cx='160' cy='90' r='4' fill='#E53935'/><text x='160' y='46' font-size='13' text-anchor='middle' fill='#333333'>12</text><text x='207' y='94' font-size='13' text-anchor='middle' fill='#333333'>3</text><text x='160' y='141' font-size='13' text-anchor='middle' fill='#333333'>6</text><text x='113' y='94' font-size='13' text-anchor='middle' fill='#333333'>9</text><line x1='160' y1='90' x2='136' y2='108' stroke='#1E88E5' stroke-width='3.5'/><line x1='160' y1='90' x2='112' y2='90' stroke='#43A047' stroke-width='2.5'/><text x='160' y='172' font-size='13' text-anchor='middle' fill='#333333'>7 h 45</text></svg>", legende: "La petite aiguille bleue indique les heures (entre 7 et 8), la grande aiguille verte indique les minutes (45 min, sur le 9)." },
          { type: "methode", texte: "Calculer une durée entre deux horaires, par étapes :\n1. Va d'abord jusqu'à l'heure pile suivante.\n2. Compte ensuite les heures entières.\n3. Ajoute enfin les minutes restantes.\n4. Additionne le tout." },
          { type: "exemple", texte: "Exemple : le taxi-brousse part de Tana à 7 h 45 et arrive à Antsirabe à 10 h 20. Quelle est la durée du voyage ?\n1. De 7 h 45 à 8 h 00 : 15 min\n2. De 8 h 00 à 10 h 00 : 2 h\n3. De 10 h 00 à 10 h 20 : 20 min\n4. Total : 2 h + 15 min + 20 min = 2 h 35 min\nLe voyage dure 2 h 35 min." },
          { type: "remarque", texte: "Piège classique : 1 h 30 ne s'écrit PAS 1,30 h !\n30 minutes = la moitié d'une heure = 0,5 h.\nDonc 1 h 30 = 1,5 h. Les minutes comptent par 60, pas par 100." }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nConvertis :\na) 3 km = ... m\nb) 5 L = ... mL", correction: "a) 3 km = 3 000 m (1 km = 1 000 m)\nb) 5 L = 5 000 mL (1 L = 1 000 mL)" },
      { niveau: 1, points: 2, enonce: "Exercice 2\nComplète :\na) 1 h = ... min\nb) 1 min = ... s\nc) 2 h = ... min", correction: "a) 1 h = 60 min\nb) 1 min = 60 s\nc) 2 h = 2 × 60 = 120 min" },
      { niveau: 2, points: 3, enonce: "Exercice 3\nConvertis en utilisant le tableau de conversion :\na) 2,5 m = ... cm\nb) 470 cm = ... m", correction: "a) 2,5 m = 250 cm (le 2 dans la colonne m, on complète jusqu'aux cm)\nb) 470 cm = 4,7 m (le 0 dans la colonne cm, la virgule après le 4 dans la colonne m)" },
      { niveau: 2, points: 3, enonce: "Exercice 4\nConvertis :\na) 2,4 kg = ... g\nb) 750 g = ... kg", correction: "a) 2,4 kg = 2 400 g (on complète avec des zéros jusqu'à la colonne g)\nb) 750 g = 0,75 kg (le 0 des unités dans la colonne g, la virgule se place dans la colonne kg, complétée d'un zéro)" },
      { niveau: 3, points: 4, enonce: "Exercice 5\nUn champ de riz a une aire de 2,8 km².\na) Convertis cette aire en hectares (ha).\nb) Convertis-la en m².", correction: "a) 1 km² = 100 ha, donc 2,8 km² = 2,8 × 100 = 280 ha\nb) 1 ha = 10 000 m², donc 280 ha = 280 × 10 000 = 2 800 000 m²\nLe champ mesure 280 ha, soit 2 800 000 m²." },
      { niveau: 3, points: 4, enonce: "Exercice 6\nUn taxi-brousse part de la gare à 7 h 45 et arrive à 10 h 20.\nCalcule la durée du voyage en détaillant les étapes.", correction: "1. De 7 h 45 à 8 h 00 : 15 min\n2. De 8 h 00 à 10 h 00 : 2 h\n3. De 10 h 00 à 10 h 20 : 20 min\n4. Total : 2 h + 15 min + 20 min = 2 h 35 min\nLe voyage dure 2 h 35 min." },
      { niveau: 4, points: 5, enonce: "Exercice 7\nUn terrain rectangulaire mesure 1,2 km de long et 456 m de large.\na) Calcule son aire en m² (attention aux unités !).\nb) Convertis cette aire en hectares.", correction: "a) D'abord, convertir dans la même unité : 1,2 km = 1 200 m.\nAire = Longueur × largeur = 1 200 × 456 = 547 200 m²\nb) 1 ha = 10 000 m², donc 547 200 ÷ 10 000 = 54,72 ha\nLe terrain a une aire de 547 200 m², soit 54,72 ha." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nUne poutre en bois mesure 5 m de long, 8 cm de large et 23 cm de haut.\na) Calcule son volume en cm³.\nb) Convertis ce volume en dm³.\nc) À combien de litres correspond ce volume ?", correction: "a) D'abord, convertir dans la même unité : 5 m = 500 cm.\nV = 500 × 8 × 23 = 92 000 cm³\nb) 1 dm³ = 1 000 cm³, donc 92 000 cm³ = 92 000 ÷ 1 000 = 92 dm³\nc) 1 dm³ = 1 L, donc 92 dm³ = 92 L\nLe volume de la poutre correspond à 92 litres de bois." }
    ]
  }
]);
