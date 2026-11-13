// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-volume",
    titre: "Chapitre 3 : Volume et capacité",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-volume-def",
        titre: "Le volume",
        blocs: [
          {
            type: "exemple",
            titre: "La place occupée",
            texte: "Une brique posée sur la table occupe une certaine place. Un ballon de foot occupe plus de place qu'une orange. Cette place occupée, c'est le volume."
          },
          {
            type: "definition",
            titre: "Le volume",
            texte: "Le volume d'un objet est la place que cet objet occupe dans l'espace."
          },
          {
            type: "definition",
            titre: "L'unité de volume",
            texte: "L'unité internationale de volume est le mètre cube, de symbole m³. Un mètre cube, c'est le volume d'un cube de 1 mètre d'arête."
          },
          {
            type: "regle",
            titre: "De 1000 en 1000",
            texte: "Les unités de volume vont de 1000 en 1000 :\n1 m³ = 1 000 dm³\n1 dm³ = 1 000 cm³\n1 cm³ = 1 000 mm³"
          },
          {
            type: "tableau",
            titre: "Les unités de volume",
            entetes: ["Symbole", "Nom"],
            lignes: [
              ["km³", "Kilomètre cube"],
              ["hm³", "Hectomètre cube"],
              ["dam³", "Décamètre cube"],
              ["m³", "Mètre cube"],
              ["dm³", "Décimètre cube"],
              ["cm³", "Centimètre cube"],
              ["mm³", "Millimètre cube"]
            ]
          },
          {
            type: "remarque",
            titre: "Attention au piège",
            texte: "Ne confonds pas avec les longueurs ! Pour les longueurs, on passe de 10 en 10 (1 m = 10 dm). Pour les volumes, on passe de 1000 en 1000 (1 m³ = 1 000 dm³)."
          }
        ]
      },
      {
        id: "sp6-volume-capacite",
        titre: "La capacité",
        blocs: [
          {
            type: "exemple",
            titre: "Au quotidien",
            texte: "Une bouteille d'Eau Vive de 1 L, un jerrican de 20 L pour aller chercher l'eau, un seau de 10 L : ces nombres indiquent la capacité des récipients."
          },
          {
            type: "definition",
            titre: "La capacité",
            texte: "La capacité d'un récipient est le volume maximal de liquide qu'il peut contenir."
          },
          {
            type: "definition",
            titre: "L'unité de capacité",
            texte: "L'unité de capacité est le litre, de symbole L.\n1 L = 10 dL = 100 cL = 1 000 mL."
          },
          {
            type: "tableau",
            titre: "Les unités de capacité",
            entetes: ["Symbole", "Nom"],
            lignes: [
              ["kL", "Kilolitre"],
              ["hL", "Hectolitre"],
              ["daL", "Décalitre"],
              ["L", "Litre"],
              ["dL", "Décilitre"],
              ["cL", "Centilitre"],
              ["mL", "Millilitre"]
            ]
          },
          {
            type: "remarque",
            titre: "Pourquoi deux familles d'unités ?",
            texte: "On mesure le volume des solides en m³, dm³, cm³. Pour les liquides et les récipients, on préfère les litres : c'est plus pratique à la cuisine et au marché."
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-volume-equivalences",
        titre: "Les équivalences à retenir",
        blocs: [
          {
            type: "definition",
            titre: "Les trois équivalences magiques",
            texte: "1 m³ = 1 000 L\n1 dm³ = 1 L\n1 cm³ = 1 mL"
          },
          {
            type: "regle",
            titre: "Le pont entre les deux familles",
            texte: "Ces équivalences relient les volumes (m³) et les capacités (L).\n1 dm³, c'est un cube de 10 cm d'arête : il contient exactement 1 litre.\n1 cm³, c'est un cube de 1 cm d'arête : il contient exactement 1 millilitre."
          },
          {
            type: "schema",
            titre: "1 dm³ = 1 L",
            svg: "<svg viewBox='0 0 340 150' xmlns='http://www.w3.org/2000/svg'><polygon points='40,120 130,120 130,55 40,55' fill='#93c5fd' stroke='#1e3a5f' stroke-width='2'/><polygon points='40,55 60,35 150,35 130,55' fill='#bfdbfe' stroke='#1e3a5f' stroke-width='2'/><polygon points='130,55 150,35 150,100 130,120' fill='#60a5fa' stroke='#1e3a5f' stroke-width='2'/><text x='85' y='92' text-anchor='middle' font-size='14' font-weight='bold' fill='#1e3a5f'>1 dm&#179;</text><text x='85' y='140' text-anchor='middle' font-size='12' fill='#1e3a5f'>Un cube de 10 cm d'arête</text><text x='185' y='92' text-anchor='middle' font-size='28' font-weight='bold' fill='#1e3a5f'>=</text><path d='M240 45 L295 45 L295 120 L240 120 Z' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><path d='M242 70 L293 70 L293 118 L242 118 Z' fill='#93c5fd'/><line x1='242' y1='70' x2='293' y2='70' stroke='#1d4ed8' stroke-width='2'/><text x='267' y='100' text-anchor='middle' font-size='16' font-weight='bold' fill='#1e3a5f'>1 L</text><text x='267' y='140' text-anchor='middle' font-size='12' fill='#1e3a5f'>Un litre d'eau</text></svg>",
            legende: "Le volume d'un litre tient exactement dans un cube de 10 cm de côté."
          },
          {
            type: "exemple",
            titre: "Convertir avec les équivalences",
            texte: "5 L = 5 dm³ = 5 000 cm³.\n2,5 dm³ = 2,5 L = 2 500 mL.\n250 mL = 250 cm³ = 0,25 L."
          },
          {
            type: "remarque",
            titre: "La méthode reste la même",
            texte: "Pour convertir, utilise toujours le tableau des unités. Avec les équivalences, tu peux passer d'une famille à l'autre : la colonne dm³ est la même que la colonne L."
          }
        ]
      },
      {
        id: "sp6-volume-liquide",
        titre: "Mesurer le volume d'un liquide",
        blocs: [
          {
            type: "regle",
            titre: "L'instrument et la règle d'or",
            texte: "Pour mesurer le volume d'un liquide, on utilise une éprouvette graduée.\nRègle d'or : l'éprouvette doit être posée sur une surface bien horizontale, et l'œil doit être en face de la surface libre du liquide."
          },
          {
            type: "schema",
            titre: "L'éprouvette graduée",
            svg: "<svg viewBox='0 0 320 160' xmlns='http://www.w3.org/2000/svg'><rect x='120' y='10' width='40' height='135' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><rect x='122' y='70' width='36' height='73' fill='#93c5fd'/><line x1='122' y1='70' x2='158' y2='70' stroke='#1d4ed8' stroke-width='2'/><line x1='120' y1='30' x2='132' y2='30' stroke='#475569' stroke-width='1.5'/><line x1='120' y1='50' x2='132' y2='50' stroke='#475569' stroke-width='1.5'/><line x1='120' y1='70' x2='132' y2='70' stroke='#475569' stroke-width='1.5'/><line x1='120' y1='90' x2='132' y2='90' stroke='#475569' stroke-width='1.5'/><line x1='120' y1='110' x2='132' y2='110' stroke='#475569' stroke-width='1.5'/><rect x='105' y='145' width='70' height='8' fill='#475569'/><circle cx='210' cy='70' r='10' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><circle cx='206' cy='67' r='1.8' fill='#1e3a5f'/><circle cx='214' cy='67' r='1.8' fill='#1e3a5f'/><line x1='196' y1='70' x2='158' y2='70' stroke='#dc2626' stroke-width='2' stroke-dasharray='4 3'/><text x='255' y='66' font-size='12' fill='#1e3a5f'>L'oeil en face</text><text x='255' y='82' font-size='12' fill='#1e3a5f'>de la surface</text></svg>",
            legende: "On lit la graduation en face de la surface libre, les yeux à la même hauteur."
          },
          {
            type: "methode",
            titre: "Méthode de lecture",
            texte: "1. Repère la valeur d'une division (l'écart entre deux graduations).\n2. Compte les divisions entre la dernière graduation connue et la surface du liquide.\n3. Additionne.\nExemple du cours : chaque division vaut 5 mL. La surface arrive 4 divisions au-dessus de 50 mL.\nV = 50 + 4 × 5 = 70 mL."
          },
          {
            type: "remarque",
            titre: "Table horizontale",
            texte: "Si l'éprouvette est penchée ou la table de travers, la lecture est fausse. D'abord la surface horizontale, ensuite la lecture."
          }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-volume-solide",
        titre: "Mesurer le volume d'un solide",
        blocs: [
          {
            type: "texte",
            titre: "Deux cas",
            texte: "Pour un solide de forme simple (cube, cylindre, brique), on calcule le volume avec une formule. Pour un solide de forme quelconque (une pierre, une noix), on utilise une éprouvette."
          },
          {
            type: "methode",
            titre: "Le déplacement de liquide",
            texte: "1. Verse de l'eau dans l'éprouvette et lis le volume V₁. Exemple : V₁ = 60 mL.\n2. Plonge doucement le solide dans l'eau et lis le nouveau volume V₂. Exemple : V₂ = 74 mL.\n3. Le volume du solide est la différence : V = V₂ − V₁ = 74 − 60 = 14 mL, soit 14 cm³."
          },
          {
            type: "schema",
            titre: "Avant et après",
            svg: "<svg viewBox='0 0 340 170' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='15' width='40' height='135' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><rect x='52' y='75' width='36' height='73' fill='#93c5fd'/><line x1='52' y1='75' x2='88' y2='75' stroke='#1d4ed8' stroke-width='2'/><rect x='35' y='150' width='70' height='8' fill='#475569'/><text x='70' y='92' text-anchor='middle' font-size='11' fill='#1e3a5f'>60 mL</text><text x='70' y='168' text-anchor='middle' font-size='12' fill='#1e3a5f'>Avant</text><rect x='240' y='15' width='40' height='135' fill='#ffffff' stroke='#1e3a5f' stroke-width='2'/><rect x='242' y='50' width='36' height='98' fill='#93c5fd'/><line x1='242' y1='50' x2='278' y2='50' stroke='#1d4ed8' stroke-width='2'/><polygon points='252,138 268,132 273,143 258,147' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><rect x='225' y='150' width='70' height='8' fill='#475569'/><text x='260' y='66' text-anchor='middle' font-size='11' fill='#1e3a5f'>74 mL</text><text x='260' y='168' text-anchor='middle' font-size='12' fill='#1e3a5f'>Après : avec la pierre</text><text x='165' y='90' text-anchor='middle' font-size='22' font-weight='bold' fill='#1e3a5f'>&#8594;</text></svg>",
            legende: "L'eau monte quand on plonge la pierre : elle occupe la place de l'eau déplacée."
          },
          {
            type: "regle",
            titre: "Les formules des solides simples",
            texte: "Cube : V = c × c × c\nParallélépipède (brique) : V = L × ℓ × h\nCylindre : V = π × r × r × h (avec π ≈ 3,14)\nSphère : V = (4/3) × π × r × r × r"
          },
          {
            type: "exemple",
            titre: "Une brique de terre",
            texte: "Une brique a pour dimensions L = 20 cm, ℓ = 10 cm, h = 5 cm.\nV = 20 × 10 × 5 = 1 000 cm³ = 1 dm³ = 1 L."
          },
          {
            type: "tableau",
            titre: "La verrerie du laboratoire",
            entetes: ["Récipient", "Son rôle"],
            lignes: [
              ["Éprouvette graduée", "Mesurer des volumes"],
              ["Burette, pipette", "Mesurer des volumes précis"],
              ["Bécher, erlenmeyer", "Préparer et mélanger"],
              ["Ballon à fond rond", "Chauffer des liquides"],
              ["Tube à essai", "Faire de petites expériences"],
              ["Flacon, verre à pied", "Verser et conserver"]
            ]
          },
          {
            type: "remarque",
            titre: "Le volume ne dépend pas de la forme",
            texte: "Deux objets de formes très différentes peuvent avoir le même volume : la place occupée ne dépend pas de la forme."
          }
        ]
      }
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Recopie et complète :\nLe volume d'un objet est la ........ que cet objet occupe.\nL'unité internationale de volume est le ........, de symbole ........",
        correction: "Le volume d'un objet est la place que cet objet occupe.\nL'unité internationale de volume est le mètre cube, de symbole m³."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Recopie et complète avec les bonnes équivalences :\n1 m³ = ........ L\n1 dm³ = ........ L\n1 cm³ = ........ mL",
        correction: "1 m³ = 1 000 L\n1 dm³ = 1 L\n1 cm³ = 1 mL"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertis :\n1. 3 L en mL\n2. 2,5 dm³ en cm³\n3. 500 mL en L",
        correction: "1. 3 L = 3 000 mL.\n2. 2,5 dm³ = 2 500 cm³ (les volumes vont de 1000 en 1000).\n3. 500 mL = 0,5 L."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans une éprouvette, la surface de l'eau arrive 4 divisions au-dessus de la graduation 50 mL. Chaque division vaut 5 mL.\nQuel est le volume d'eau ?",
        correction: "V = 50 + 4 × 5 = 50 + 20 = 70 mL.\nL'éprouvette contient 70 mL d'eau."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une éprouvette contient 60 mL d'eau. On y plonge une pierre : le niveau monte à 74 mL.\n1. Calcule le volume de la pierre.\n2. Donne ce volume en cm³.\n3. Comment s'appelle cette méthode ?",
        correction: "1. V = V₂ − V₁ = 74 − 60 = 14 mL.\n2. 14 mL = 14 cm³ (car 1 cm³ = 1 mL).\n3. C'est la méthode du déplacement de liquide."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une brique de terre mesure : longueur L = 20 cm, largeur ℓ = 10 cm, hauteur h = 5 cm.\n1. Calcule son volume en cm³.\n2. Donne ce volume en dm³, puis en litres.",
        correction: "1. V = L × ℓ × h = 20 × 10 × 5 = 1 000 cm³.\n2. 1 000 cm³ = 1 dm³ = 1 L.\nLa brique a le même volume qu'un litre d'eau."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici un récipient gradué en mL : 0 - 50 - 100 - 150 - 200 - 250. Entre deux graduations, il y a 5 divisions.\n1. Quelle est la valeur d'une division ?\n2. La surface de l'eau est 2 divisions au-dessus de 150 mL. Quel est le volume ?\n3. On verse cette eau dans un cube de 10 cm d'arête. Déborde-t-elle ? Justifie.",
        correction: "1. Entre deux graduations il y a 50 mL pour 5 divisions : une division vaut 50 ÷ 5 = 10 mL.\n2. V = 150 + 2 × 10 = 170 mL.\n3. Le cube a un volume de 10 × 10 × 10 = 1 000 cm³ = 1 L = 1 000 mL. Or 170 mL < 1 000 mL : l'eau ne déborde pas, elle remplit à peine le fond du cube."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une bassine a la forme d'un cylindre de rayon r = 20 cm et de hauteur h = 30 cm. On prend π = 3,14.\n1. Calcule son volume en cm³.\n2. Donne ce volume en litres.\n3. Pour la remplir, combien faut-il de voyages avec un seau de 10 L ? (On arrondit au voyage supérieur.)",
        correction: "1. V = π × r × r × h = 3,14 × 20 × 20 × 30 = 37 680 cm³.\n2. 37 680 cm³ = 37,68 dm³ = 37,68 L.\n3. 37,68 ÷ 10 = 3,768 : il faut 4 voyages de seau pour remplir la bassine."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch3.js =====
