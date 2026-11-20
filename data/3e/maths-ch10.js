// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 10 : unités, aires et volumes.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-aires-volumes",
    titre: "Chapitre 10 : Aires et volumes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-grandeurs-unites",
        titre: "Longueur, aire et volume : quelle différence ?",
        blocs: [
          {
            type: "introduction",
            titre: "Trois questions différentes",
            texte: "Imagine une boîte posée sur une table.\n\n• Quelle est la longueur d'une de ses arêtes ? On mesure une longueur.\n• Quelle surface occupe sa face posée sur la table ? On mesure une aire.\n• Quelle quantité d'espace occupe la boîte ? On mesure un volume.\n\nCes trois grandeurs ne se mesurent pas avec les mêmes unités."
          },
          {
            type: "tableau",
            titre: "Choisir une unité adaptée",
            entetes: ["Grandeur", "Exemples d'unités", "Exemple"],
            lignes: [
              ["Longueur", "mm, cm, m, km", "La longueur d'une route"],
              ["Aire", "cm², m², km²", "La surface d'un terrain"],
              ["Volume", "cm³, m³", "L'espace occupé par une boîte"],
              ["Capacité", "mL, cL, L", "La quantité d'eau contenue dans une bouteille"]
            ]
          },
          {
            type: "definition",
            titre: "Aire et unité carrée",
            texte: "Un centimètre carré, noté 1 cm², est l'aire d'un carré de 1 cm de côté.\n\nUn mètre carré, noté 1 m², est l'aire d'un carré de 1 m de côté.\n\nLe petit ² rappelle que l'on travaille avec deux dimensions : par exemple, longueur × largeur."
          },
          {
            type: "definition",
            titre: "Volume et unité cubique",
            texte: "Un centimètre cube, noté 1 cm³, est le volume d'un cube de 1 cm d'arête.\n\nUn mètre cube, noté 1 m³, est le volume d'un cube de 1 m d'arête.\n\nLe petit ³ rappelle que l'on travaille avec trois dimensions : par exemple, longueur × largeur × hauteur."
          },
          {
            type: "remarque",
            titre: "Périmètre et aire ne sont pas la même chose",
            texte: "Le périmètre mesure la longueur du contour d'une figure. L'aire mesure la surface de son intérieur.\n\nUn rectangle de longueur 5 cm et de largeur 2 cm a pour périmètre :\n2 × (5 + 2) = 14 cm.\n\nSon aire est :\n5 × 2 = 10 cm².\n\nLes résultats ne mesurent pas la même chose et leurs unités sont différentes."
          }
        ]
      },
      {
        id: "m3-conversions-aires-volumes",
        titre: "Convertir les unités",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi les facteurs changent-ils ?",
            texte: "On sait que 1 m = 100 cm. Mais cela ne signifie pas que 1 m² = 100 cm².\n\nPour une aire, il faut tenir compte de deux dimensions. Pour un volume, il faut en prendre trois en compte."
          },
          {
            type: "schema",
            titre: "Un mètre carré contient combien de centimètres carrés ?",
            svg: "<svg viewBox='0 0 320 190' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Carré de côté 1 mètre, soit 100 centimètres, dont l’aire vaut 10 000 centimètres carrés'><rect x='80' y='25' width='145' height='115' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><text x='152' y='75' text-anchor='middle' font-size='15' fill='#1e3a8a'>1 m²</text><text x='152' y='100' text-anchor='middle' font-size='15' fill='#1e3a8a'>10 000 cm²</text><text x='152' y='165' text-anchor='middle' font-size='14' fill='#334155'>1 m = 100 cm</text><text x='16' y='75' font-size='13' fill='#334155'>1 m</text><text x='10' y='95' font-size='13' fill='#334155'>100 cm</text></svg>",
            legende: "Le carré mesure 100 cm dans chaque direction : son aire est 100 × 100 = 10 000 cm². Schéma non dessiné à l'échelle."
          },
          {
            type: "methode",
            titre: "Convertir une aire",
            texte: "Comme 1 m = 100 cm, un carré de 1 m de côté a pour aire :\n\n1 m² = 100 cm × 100 cm = 10 000 cm².\n\nDonc :\n• 2 m² = 2 × 10 000 = 20 000 cm² ;\n• 30 000 cm² = 30 000 ÷ 10 000 = 3 m².\n\nEntre deux unités d'aire voisines, comme m² et dm², le facteur est 100."
          },
          {
            type: "methode",
            titre: "Convertir un volume",
            texte: "Comme 1 m = 10 dm, un cube de 1 m d'arête mesure 10 dm dans chacune de ses trois dimensions.\n\nDonc : 1 m³ = 10 × 10 × 10 = 1 000 dm³.\n\nEntre deux unités de volume voisines, comme m³ et dm³, le facteur est 1 000.\n\nAutre exemple : 1 dm³ = 1 000 cm³."
          },
          {
            type: "regle",
            titre: "Volume et capacité",
            texte: "Les égalités suivantes sont utiles :\n\n1 L = 1 dm³ ;\n1 mL = 1 cm³ ;\n1 m³ = 1 000 L.\n\nPar exemple, 3,5 L = 3,5 dm³ = 3 500 cm³."
          },
          {
            type: "remarque",
            titre: "Convertir avant de calculer",
            texte: "Dans une formule, les longueurs doivent être exprimées dans la même unité.\n\nPour un rectangle de 2 m sur 50 cm, on peut écrire 50 cm = 0,5 m. Son aire est alors :\n2 × 0,5 = 1 m².\n\nMultiplier directement 2 par 50 sans tenir compte des unités donnerait un résultat difficile à interpréter."
          }
        ]
      },
      {
        id: "m3-aires-figures",
        titre: "Calculer des aires usuelles",
        blocs: [
          {
            type: "regle",
            titre: "Rectangle et carré",
            texte: "Aire d'un rectangle = longueur × largeur.\n\nAire d'un carré = côté × côté = côté².\n\nExemples :\n• Rectangle de 6 m sur 4 m : 6 × 4 = 24 m².\n• Carré de 5 cm de côté : 5² = 25 cm²."
          },
          {
            type: "regle",
            titre: "Triangle",
            texte: "Aire d'un triangle = (base × hauteur correspondante) ÷ 2.\n\nLa hauteur correspondante est la distance perpendiculaire entre le sommet opposé et la droite qui porte la base.\n\nExemple : pour une base de 8 cm et une hauteur correspondante de 3 cm :\nA = (8 × 3) ÷ 2 = 12 cm²."
          },
          {
            type: "schema",
            titre: "La hauteur est perpendiculaire à la base",
            svg: "<svg viewBox='0 0 320 190' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Triangle avec une base de 8 centimètres et une hauteur perpendiculaire de 3 centimètres'><polygon points='35,145 275,145 145,30' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><line x1='145' y1='30' x2='145' y2='145' stroke='#dc2626' stroke-width='2' stroke-dasharray='5,4'/><path d='M145 130 L160 130 L160 145' fill='none' stroke='#dc2626' stroke-width='2'/><text x='155' y='95' font-size='14' fill='#b91c1c'>3 cm</text><text x='155' y='170' text-anchor='middle' font-size='14' fill='#334155'>base : 8 cm</text></svg>",
            legende: "La hauteur en rouge est perpendiculaire à la base. Aire : (8 × 3) ÷ 2 = 12 cm². Figure non dessinée à l'échelle."
          },
          {
            type: "regle",
            titre: "Disque",
            texte: "L'aire d'un disque de rayon r est :\n\nA = π × r².\n\nSi le rayon est 3 cm :\nA = π × 3² = 9π cm².\n\nC'est la valeur exacte. Avec π ≈ 3,14, on obtient 9 × 3,14 ≈ 28,26 cm²."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre aire et périmètre du cercle",
            texte: "Pour un cercle de rayon r :\n\n• longueur du cercle : 2πr ;\n• aire du disque : πr².\n\nSi r = 3 cm, la longueur du cercle est 6π cm, tandis que l'aire du disque est 9π cm²."
          }
        ]
      },
      {
        id: "m3-volumes-solides",
        titre: "Calculer des volumes usuels",
        blocs: [
          {
            type: "regle",
            titre: "Pavé droit et cube",
            texte: "Volume d'un pavé droit = longueur × largeur × hauteur.\n\nPour un cube, les trois dimensions sont égales :\nvolume = côté × côté × côté = côté³.\n\nExemples :\n• Pavé de 5 cm sur 4 cm sur 3 cm : V = 5 × 4 × 3 = 60 cm³.\n• Cube de 2 cm d'arête : V = 2³ = 8 cm³."
          },
          {
            type: "definition",
            titre: "Base et hauteur",
            texte: "Pour certains solides, il est pratique de choisir une face appelée base.\n\nLa hauteur est la distance perpendiculaire entre les deux bases. Elle ne correspond pas nécessairement à une arête inclinée."
          },
          {
            type: "regle",
            titre: "Prisme droit",
            texte: "Le volume d'un prisme droit est :\n\nV = aire de la base × hauteur.\n\nSi sa base triangulaire a une aire de 12 cm² et que sa hauteur est 5 cm :\nV = 12 × 5 = 60 cm³.\n\nOn multiplie une aire en cm² par une longueur en cm : on obtient un volume en cm³."
          },
          {
            type: "regle",
            titre: "Cylindre",
            texte: "Un cylindre possède deux bases qui sont des disques de même rayon r.\n\nAire d'une base = πr².\nDonc volume du cylindre : V = πr²h, où h est sa hauteur.\n\nExemple : si r = 2 cm et h = 5 cm :\nV = π × 2² × 5 = 20π cm³."
          },
          {
            type: "methode",
            titre: "Méthode pour résoudre un exercice",
            texte: "1. Identifie le solide et les grandeurs données.\n2. Convertis les longueurs dans une même unité.\n3. Écris la formule adaptée.\n4. Remplace les lettres par les valeurs.\n5. Calcule et indique l'unité de volume.\n6. Si l'on demande une capacité, convertis ensuite en litres ou en millilitres."
          },
          {
            type: "remarque",
            titre: "Capacité d'un récipient",
            texte: "Pour calculer la capacité d'un récipient à partir de ses dimensions, il faut utiliser ses dimensions intérieures.\n\nDans les exercices, on précise ou on suppose généralement que les dimensions données sont intérieures et que le récipient peut être rempli jusqu'en haut."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Choisis une unité adaptée parmi cm, cm² et cm³ :\n\n1. L'aire d'une feuille.\n2. La longueur d'un crayon.\n3. Le volume d'une petite boîte.",
        correction: "1. L'aire d'une feuille peut être exprimée en cm² : elle mesure une surface.\n\n2. La longueur d'un crayon peut être exprimée en cm.\n\n3. Le volume d'une petite boîte peut être exprimé en cm³ : il mesure l'espace occupé."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n\n1. L'aire d'un rectangle de 7 cm sur 3 cm.\n2. Le volume d'un cube de 4 cm d'arête.",
        correction: "1. Aire du rectangle = longueur × largeur.\nA = 7 × 3 = 21 cm².\n\n2. Volume du cube = côté³.\nV = 4 × 4 × 4 = 64 cm³."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertis :\n\n1. 3 m² en cm².\n2. 2 dm³ en cm³.\n3. 750 mL en cm³.\n4. 4 m³ en litres.",
        correction: "1. 1 m² = 10 000 cm², donc 3 m² = 30 000 cm².\n\n2. 1 dm³ = 1 000 cm³, donc 2 dm³ = 2 000 cm³.\n\n3. 1 mL = 1 cm³, donc 750 mL = 750 cm³.\n\n4. 1 m³ = 1 000 L, donc 4 m³ = 4 000 L."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un triangle a une base de 10 cm et une hauteur correspondante de 6 cm.\n\n1. Écris la formule de son aire.\n2. Calcule cette aire.",
        correction: "1. Aire du triangle = (base × hauteur correspondante) ÷ 2.\n\n2. A = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².\n\nLa hauteur utilisée est bien celle qui correspond à la base de 10 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un disque a un rayon de 4 cm.\n\n1. Calcule son aire en fonction de π.\n2. Donne une valeur approchée en utilisant π ≈ 3,14.\n3. Calcule la longueur du cercle qui le délimite en fonction de π.",
        correction: "1. Aire du disque : A = πr².\nA = π × 4² = 16π cm². C'est la valeur exacte.\n\n2. Avec π ≈ 3,14 :\nA ≈ 16 × 3,14 = 50,24 cm².\n\n3. Longueur du cercle : 2πr = 2 × π × 4 = 8π cm.\n\nAttention aux unités : l'aire est en cm², la longueur est en cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un récipient a la forme d'un pavé droit. Ses dimensions intérieures sont 30 cm de long, 20 cm de large et 15 cm de haut.\n\n1. Calcule son volume intérieur en cm³.\n2. Exprime sa capacité en litres.",
        correction: "1. Volume du pavé droit :\nV = longueur × largeur × hauteur.\nV = 30 × 20 × 15 = 9 000 cm³.\n\n2. Comme 1 L = 1 000 cm³ :\n9 000 cm³ = 9 000 ÷ 1 000 = 9 L.\n\nSa capacité est de 9 litres s'il est rempli jusqu'en haut."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un terrain rectangulaire mesure 12 m de long et 8 m de large. On réserve à l'intérieur une partie carrée de 3 m de côté pour un potager.\n\n1. Calcule l'aire du terrain entier.\n2. Calcule l'aire du potager.\n3. Calcule l'aire restante.\n4. Exprime cette aire restante en cm².",
        correction: "1. Aire du terrain : 12 × 8 = 96 m².\n\n2. Aire du potager carré : 3 × 3 = 9 m².\n\n3. Le potager est à l'intérieur du terrain. L'aire restante est :\n96 - 9 = 87 m².\n\n4. Comme 1 m² = 10 000 cm² :\n87 m² = 87 × 10 000 = 870 000 cm².\n\nOn vérifie que l'aire restante est bien inférieure à celle du terrain entier."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un réservoir cylindrique a un rayon intérieur de 0,5 m et une hauteur intérieure de 2 m.\n\n1. Calcule son volume exact en m³.\n2. Donne une valeur approchée en m³ avec π ≈ 3,14.\n3. Exprime cette valeur approchée en litres.",
        correction: "1. Volume d'un cylindre : V = πr²h.\nAvec r = 0,5 m et h = 2 m :\nV = π × 0,5² × 2\nV = π × 0,25 × 2\nV = 0,5π m³. C'est le volume exact.\n\n2. Avec π ≈ 3,14 :\nV ≈ 0,5 × 3,14 = 1,57 m³.\n\n3. Comme 1 m³ = 1 000 L :\n1,57 m³ = 1 570 L.\n\nLa capacité du réservoir est donc approximativement 1 570 L."
      }
    ]
  }
]);
