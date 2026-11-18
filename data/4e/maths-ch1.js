// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 1 : Les nombres relatifs, repérage et comparaison

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch1",
    titre: "Chapitre 1 : Les nombres relatifs, repérage et comparaison",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch1-decouvrir",
        titre: "Découvrir les nombres relatifs",
        blocs: [
          {
            type: "definition",
            titre: "Des nombres avec un signe",
            texte: "Les nombres relatifs permettent de représenter des situations de part et d'autre d'une valeur de référence, souvent 0.\n\nUn nombre positif est supérieur ou égal à 0. On peut écrire son signe +, mais on l'omet souvent : +5 = 5.\nUn nombre négatif est inférieur ou égal à 0. On écrit son signe − : −5.\nLe nombre 0 est à la fois positif et négatif."
          },
          {
            type: "exemple",
            titre: "Températures",
            texte: "Une température de +8 °C est 8 degrés au-dessus de 0 °C.\nUne température de −3 °C est 3 degrés au-dessous de 0 °C.\nLe signe permet donc de distinguer deux situations différentes."
          },
          {
            type: "exemple",
            titre: "Altitude et niveau de la mer",
            texte: "On choisit le niveau de la mer comme référence : 0 m.\nUne altitude de +120 m indique un point situé 120 m au-dessus de ce niveau.\nUne altitude de −4 m indique un point situé 4 m au-dessous de ce niveau."
          },
          {
            type: "remarque",
            titre: "Le signe a un sens",
            texte: "Dans une situation concrète, il faut d'abord préciser la référence et ce que représentent les signes. Par exemple, on peut choisir + pour un gain et − pour une dépense."
          }
        ]
      },

      {
        id: "m4-ch1-droite",
        titre: "Placer un nombre sur une droite graduée",
        blocs: [
          {
            type: "definition",
            titre: "La droite graduée",
            texte: "Une droite graduée possède une origine, notée 0, et une unité de longueur.\nLes nombres positifs se placent à droite de 0 et les nombres négatifs à gauche de 0. Deux graduations consécutives sont séparées par la même longueur."
          },
          {
            type: "schema",
            titre: "Une droite graduée",
            svg: "<svg viewBox='0 0 340 125' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Droite graduée de moins 4 à plus 4, avec A en moins 3 et B en plus 2'><line x1='15' y1='58' x2='325' y2='58' stroke='#1e3a5f' stroke-width='2'/><path d='M325 58 L317 53 M325 58 L317 63' fill='none' stroke='#1e3a5f' stroke-width='2'/><g stroke='#1e3a5f' stroke-width='2'><line x1='30' y1='52' x2='30' y2='64'/><line x1='65' y1='52' x2='65' y2='64'/><line x1='100' y1='52' x2='100' y2='64'/><line x1='135' y1='52' x2='135' y2='64'/><line x1='170' y1='49' x2='170' y2='67'/><line x1='205' y1='52' x2='205' y2='64'/><line x1='240' y1='52' x2='240' y2='64'/><line x1='275' y1='52' x2='275' y2='64'/><line x1='310' y1='52' x2='310' y2='64'/></g><g font-size='12' text-anchor='middle' fill='#1e3a5f'><text x='30' y='84'>−4</text><text x='65' y='84'>−3</text><text x='100' y='84'>−2</text><text x='135' y='84'>−1</text><text x='170' y='84'>0</text><text x='205' y='84'>1</text><text x='240' y='84'>2</text><text x='275' y='84'>3</text><text x='310' y='84'>4</text></g><circle cx='65' cy='58' r='4' fill='#dc2626'/><text x='65' y='38' font-size='14' text-anchor='middle' fill='#dc2626'>A</text><circle cx='240' cy='58' r='4' fill='#166534'/><text x='240' y='38' font-size='14' text-anchor='middle' fill='#166534'>B</text></svg>",
            legende: "Le point A a pour abscisse −3 et le point B a pour abscisse +2."
          },
          {
            type: "definition",
            titre: "Abscisse d'un point",
            texte: "Le nombre qui permet de repérer un point sur une droite graduée s'appelle son abscisse.\nSur le schéma, l'abscisse de A est −3 et celle de B est +2."
          },
          {
            type: "methode",
            titre: "Placer un point",
            texte: "Pour placer le point C d'abscisse −2 :\n1. Repère l'origine 0.\n2. Comme le nombre est négatif, déplace-toi vers la gauche.\n3. Compte 2 unités à partir de 0 et marque le point C."
          },
          {
            type: "exemple",
            titre: "Avec un nombre décimal",
            texte: "Pour placer +1,5, repère 1 et 2. Le nombre 1,5 se trouve à mi-chemin entre les deux.\nDe même, −1,5 se trouve à mi-chemin entre −2 et −1."
          }
        ]
      },

      {
        id: "m4-ch1-opposes",
        titre: "Distance à zéro et nombres opposés",
        blocs: [
          {
            type: "definition",
            titre: "Distance à zéro",
            texte: "La distance à zéro d'un nombre est la distance entre le point qui représente ce nombre et l'origine de la droite graduée. Elle est toujours positive ou nulle.\nLa distance à zéro de −3 est 3 ; celle de +3 est aussi 3 ; celle de 0 est 0."
          },
          {
            type: "definition",
            titre: "Nombres opposés",
            texte: "Deux nombres opposés ont la même distance à zéro et sont situés de part et d'autre de 0 sur la droite graduée.\nPar exemple, −3 et +3 sont opposés. L'opposé de 0 est 0."
          },
          {
            type: "methode",
            titre: "Trouver l'opposé",
            texte: "Pour trouver l'opposé d'un nombre non nul, on change son signe.\nL'opposé de +7 est −7.\nL'opposé de −2,5 est +2,5.\nL'opposé de 0 reste 0."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "La distance à zéro de −7 est 7. Son opposé est +7 : ici les résultats s'écrivent de la même façon.\nMais la distance à zéro de +7 est 7, alors que son opposé est −7."
          }
        ]
      },

      {
        id: "m4-ch1-comparer",
        titre: "Comparer et ranger les nombres relatifs",
        blocs: [
          {
            type: "regle",
            titre: "Sur la droite graduée",
            texte: "Sur une droite graduée orientée de gauche à droite, le nombre situé le plus à gauche est le plus petit.\nExemple : −3 est à gauche de +2, donc −3 < +2."
          },
          {
            type: "regle",
            titre: "Nombres de signes différents",
            texte: "Tout nombre négatif non nul est inférieur à 0, et tout nombre positif non nul est supérieur à 0.\nAinsi : −4 < 0 < +3."
          },
          {
            type: "regle",
            titre: "Comparer deux nombres négatifs",
            texte: "Entre deux nombres négatifs, celui qui a la plus grande distance à zéro est le plus petit.\nExemple : −8 < −3, car −8 est plus loin de 0 et se trouve plus à gauche sur la droite graduée."
          },
          {
            type: "methode",
            titre: "Ranger dans l'ordre croissant",
            texte: "L'ordre croissant va du plus petit au plus grand.\nPour ranger +2, −5, 0, −1 et +4 :\n1. Place mentalement les nombres sur une droite graduée.\n2. Lis-les de gauche à droite.\nOn obtient : −5 < −1 < 0 < +2 < +4."
          },
          {
            type: "exemple",
            titre: "Comparer des températures",
            texte: "Entre −2 °C et −7 °C, la température la plus basse est −7 °C car −7 < −2.\nAttention : 7 est plus grand que 2, mais les deux nombres négatifs sont rangés dans l'ordre inverse : −7 < −2."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On choisit 0 m comme niveau de la mer. Écris avec un signe :\n1. Une altitude de 35 m au-dessus du niveau de la mer.\n2. Une position de 6 m au-dessous du niveau de la mer.",
        correction: "1. Au-dessus du niveau de référence : +35 m.\n2. Au-dessous du niveau de référence : −6 m."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donne la distance à zéro de chaque nombre : −8 ; +3 ; 0 ; −1,5.",
        correction: "La distance à zéro de −8 est 8.\nCelle de +3 est 3.\nCelle de 0 est 0.\nCelle de −1,5 est 1,5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Donne l'opposé de chacun des nombres suivants : +9 ; −4 ; 0 ; −2,5.",
        correction: "L'opposé de +9 est −9.\nL'opposé de −4 est +4.\nL'opposé de 0 est 0.\nL'opposé de −2,5 est +2,5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trace une droite graduée d'unité 1 cm, puis place les points A d'abscisse −3, B d'abscisse +2 et C d'abscisse −1,5.",
        correction: "Place 0 sur la droite et gradue-la tous les centimètres.\nA est à 3 unités à gauche de 0.\nB est à 2 unités à droite de 0.\nC est à mi-chemin entre −2 et −1, donc à 1,5 unité à gauche de 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Recopie et complète avec < ou > :\n1. −5 ... +2\n2. −7 ... −3\n3. +1,5 ... 0\n4. −2,4 ... −2,1",
        correction: "1. −5 < +2 : un nombre négatif non nul est inférieur à un nombre positif.\n2. −7 < −3 : −7 est plus à gauche sur la droite graduée.\n3. +1,5 > 0 : +1,5 est positif et non nul.\n4. −2,4 < −2,1 : parmi ces deux nombres négatifs, −2,4 a la plus grande distance à zéro."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Range dans l'ordre croissant : +4 ; −2 ; 0 ; −6 ; +1 ; −1.",
        correction: "Les nombres négatifs viennent avant 0, puis les nombres positifs.\nParmi les négatifs : −6 < −2 < −1.\nParmi les positifs : +1 < +4.\nDonc : −6 < −2 < −1 < 0 < +1 < +4."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Lors d'une observation en montagne, on relève les températures suivantes :\nÀ 6 h : −3 °C ; à 9 h : +2 °C ; à 12 h : +7 °C ; à 18 h : −1 °C.\n1. Range ces températures de la plus basse à la plus haute.\n2. À quelle heure fait-il le plus froid ?\n3. Quelles températures sont au-dessus de 0 °C ?",
        correction: "1. En comparant les nombres : −3 < −1 < +2 < +7. L'ordre est donc −3 °C, −1 °C, +2 °C, +7 °C.\n2. La température la plus basse est −3 °C : il fait le plus froid à 6 h.\n3. Les températures positives sont +2 °C à 9 h et +7 °C à 12 h."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Sur une droite graduée, A a pour abscisse −4. Le point B a pour abscisse l'opposé de celle de A. Le point C a pour abscisse −1.\n1. Donne l'abscisse de B.\n2. Place A, B et C sur une droite graduée.\n3. Range leurs abscisses dans l'ordre croissant.\n4. Quels points sont à la même distance de 0 ?",
        correction: "1. L'opposé de −4 est +4 : B a pour abscisse +4.\n2. A se place 4 unités à gauche de 0 ; B, 4 unités à droite ; C, 1 unité à gauche.\n3. De gauche à droite : −4 < −1 < +4.\n4. A et B sont tous les deux à 4 unités de 0 : leurs abscisses sont opposées."
      }
    ]
  }
]);
