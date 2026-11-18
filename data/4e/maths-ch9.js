// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 9 : Se repérer dans un plan

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch9",
    titre: "Chapitre 9 : Se repérer dans un plan",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch9-repere",
        titre: "Découvrir le repère du plan",
        blocs: [
          {
            type: "definition",
            titre: "Deux axes gradués",
            texte: "Un repère du plan est formé de deux axes gradués qui se coupent à leur origine commune O.\nDans les exemples de ce chapitre, l'axe des abscisses est horizontal et l'axe des ordonnées est vertical. Ils sont perpendiculaires."
          },
          {
            type: "definition",
            titre: "Abscisse et ordonnée",
            texte: "Les coordonnées d'un point s'écrivent dans l'ordre (abscisse ; ordonnée).\nL'abscisse indique sa position horizontale et l'ordonnée sa position verticale.\nL'origine O a pour coordonnées (0 ; 0)."
          },
          {
            type: "schema",
            titre: "Un repère avec quatre points",
            svg: "<svg viewBox='0 0 340 300' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Repère avec A en 2 et 2, B en moins 2 et 2, C en moins 2 et moins 2 et D en 2 et moins 2'><g stroke='#e2e8f0' stroke-width='1'><line x1='50' y1='25' x2='50' y2='265'/><line x1='90' y1='25' x2='90' y2='265'/><line x1='130' y1='25' x2='130' y2='265'/><line x1='170' y1='25' x2='170' y2='265'/><line x1='210' y1='25' x2='210' y2='265'/><line x1='250' y1='25' x2='250' y2='265'/><line x1='290' y1='25' x2='290' y2='265'/><line x1='50' y1='25' x2='290' y2='25'/><line x1='50' y1='65' x2='290' y2='65'/><line x1='50' y1='105' x2='290' y2='105'/><line x1='50' y1='145' x2='290' y2='145'/><line x1='50' y1='185' x2='290' y2='185'/><line x1='50' y1='225' x2='290' y2='225'/><line x1='50' y1='265' x2='290' y2='265'/></g><line x1='35' y1='145' x2='310' y2='145' stroke='#1e3a5f' stroke-width='2'/><path d='M310 145 L302 140 M310 145 L302 150' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='170' y1='280' x2='170' y2='10' stroke='#1e3a5f' stroke-width='2'/><path d='M170 10 L165 18 M170 10 L175 18' fill='none' stroke='#1e3a5f' stroke-width='2'/><g fill='#1e3a5f' font-size='12' text-anchor='middle'><text x='50' y='162'>−3</text><text x='90' y='162'>−2</text><text x='130' y='162'>−1</text><text x='183' y='162'>0</text><text x='210' y='162'>1</text><text x='250' y='162'>2</text><text x='290' y='162'>3</text></g><g fill='#1e3a5f' font-size='12' text-anchor='end'><text x='162' y='29'>3</text><text x='162' y='69'>2</text><text x='162' y='109'>1</text><text x='162' y='189'>−1</text><text x='162' y='229'>−2</text><text x='162' y='269'>−3</text></g><g fill='#dc2626'><circle cx='250' cy='65' r='5'/><circle cx='90' cy='65' r='5'/><circle cx='90' cy='225' r='5'/><circle cx='250' cy='225' r='5'/></g><g fill='#dc2626' font-size='13'><text x='258' y='59'>A</text><text x='98' y='59'>B</text><text x='98' y='219'>C</text><text x='258' y='219'>D</text></g><text x='313' y='140' font-size='12' fill='#1e3a5f'>x</text><text x='177' y='16' font-size='12' fill='#1e3a5f'>y</text></svg>",
            legende: "A (2 ; 2), B (−2 ; 2), C (−2 ; −2) et D (2 ; −2)."
          },
          {
            type: "remarque",
            titre: "Des échelles adaptées",
            texte: "Sur chaque axe, les graduations doivent être régulières. Selon le problème, on peut choisir des unités graphiques différentes sur les deux axes."
          }
        ]
      },

      {
        id: "m4-ch9-placer",
        titre: "Placer et lire les coordonnées d'un point",
        blocs: [
          {
            type: "methode",
            titre: "Placer un point",
            texte: "Pour placer le point A (−2 ; 3) :\n1. Pars de l'origine O.\n2. L'abscisse est −2 : déplace-toi de 2 unités vers la gauche.\n3. L'ordonnée est +3 : monte de 3 unités.\n4. Marque le point et écris son nom."
          },
          {
            type: "methode",
            titre: "Lire les coordonnées",
            texte: "Pour lire les coordonnées d'un point :\n1. Repère sa position par rapport à l'axe horizontal : lis son abscisse.\n2. Repère sa position par rapport à l'axe vertical : lis son ordonnée.\n3. Écris les coordonnées dans l'ordre (abscisse ; ordonnée)."
          },
          {
            type: "exemple",
            titre: "Des coordonnées négatives",
            texte: "Le point B (3 ; −2) est situé 3 unités à droite de l'origine et 2 unités au-dessous de l'axe horizontal.\nLe point C (−3 ; −2) est situé 3 unités à gauche de l'origine et 2 unités au-dessous de l'axe horizontal."
          },
          {
            type: "remarque",
            titre: "Ne pas inverser",
            texte: "Les points (−2 ; 3) et (3 ; −2) sont différents. L'abscisse se lit toujours en premier."
          }
        ]
      },

      {
        id: "m4-ch9-axes",
        titre: "Les points sur les axes",
        blocs: [
          {
            type: "regle",
            titre: "Sur l'axe des abscisses",
            texte: "Tout point situé sur l'axe des abscisses a une ordonnée égale à 0.\nExemple : A (−3 ; 0) est sur l'axe des abscisses."
          },
          {
            type: "regle",
            titre: "Sur l'axe des ordonnées",
            texte: "Tout point situé sur l'axe des ordonnées a une abscisse égale à 0.\nExemple : B (0 ; 4) est sur l'axe des ordonnées."
          },
          {
            type: "exemple",
            titre: "L'origine",
            texte: "O (0 ; 0) appartient aux deux axes : son abscisse et son ordonnée sont toutes deux nulles."
          },
          {
            type: "remarque",
            titre: "Bien distinguer les deux axes",
            texte: "Pour un point sur l'axe horizontal, c'est l'ordonnée qui vaut 0.\nPour un point sur l'axe vertical, c'est l'abscisse qui vaut 0."
          }
        ]
      },

      {
        id: "m4-ch9-signes",
        titre: "Utiliser les signes des coordonnées",
        blocs: [
          {
            type: "regle",
            titre: "Position du point",
            texte: "Dans le repère utilisé ici :\n• une abscisse positive non nulle indique un point à droite de l'axe vertical ; une abscisse négative non nulle indique un point à gauche ;\n• une ordonnée positive non nulle indique un point au-dessus de l'axe horizontal ; une ordonnée négative non nulle indique un point au-dessous."
          },
          {
            type: "exemple",
            titre: "Quatre positions",
            texte: "A (+2 ; +3) est à droite et en haut.\nB (−2 ; +3) est à gauche et en haut.\nC (−2 ; −3) est à gauche et en bas.\nD (+2 ; −3) est à droite et en bas."
          },
          {
            type: "remarque",
            titre: "Si une coordonnée est nulle",
            texte: "Un point dont l'une des coordonnées est nulle se trouve sur un axe. S'il a deux coordonnées nulles, c'est l'origine."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque point, donne son abscisse et son ordonnée :\nA (−3 ; 2) ; B (4 ; −1) ; C (0 ; 5).",
        correction: "A : abscisse −3 et ordonnée 2.\nB : abscisse 4 et ordonnée −1.\nC : abscisse 0 et ordonnée 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le point A est situé 2 unités à droite de l'origine et 3 unités au-dessus de l'axe horizontal. Donne ses coordonnées.",
        correction: "Son abscisse est +2 et son ordonnée est +3. Ses coordonnées sont A (2 ; 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trace un repère et place les points A (2 ; 3), B (−2 ; 3), C (−2 ; −1) et D (2 ; −1).",
        correction: "A : 2 unités à droite et 3 vers le haut.\nB : 2 unités à gauche et 3 vers le haut.\nC : 2 unités à gauche et 1 vers le bas.\nD : 2 unités à droite et 1 vers le bas.\nDans cet ordre, les points forment les sommets d'un rectangle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Parmi les points A (0 ; 4), B (−3 ; 0), C (0 ; 0) et D (2 ; −1), lesquels appartiennent à un axe ?",
        correction: "A a une abscisse nulle : il est sur l'axe des ordonnées.\nB a une ordonnée nulle : il est sur l'axe des abscisses.\nC est l'origine : il appartient aux deux axes.\nD n'a aucune coordonnée nulle : il n'appartient à aucun des deux axes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sans tracer de repère, indique pour chaque point s'il est à droite ou à gauche de l'axe vertical, puis au-dessus ou au-dessous de l'axe horizontal :\nA (−4 ; 2) ; B (3 ; −5) ; C (−1 ; −2).",
        correction: "A : abscisse négative, donc à gauche ; ordonnée positive, donc au-dessus.\nB : abscisse positive, donc à droite ; ordonnée négative, donc au-dessous.\nC : abscisse négative, donc à gauche ; ordonnée négative, donc au-dessous."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Place A (−3 ; 2) et B (4 ; 2) dans un repère.\n1. Que remarques-tu à propos de leurs ordonnées ?\n2. Le segment [AB] est-il horizontal ou vertical ?\n3. Quelle est sa longueur en unités du repère ?",
        correction: "1. A et B ont la même ordonnée : 2.\n2. Ils sont donc sur une même droite horizontale : le segment [AB] est horizontal.\n3. La distance horizontale de −3 à 4 est 7 unités : 3 unités de −3 à 0, puis 4 de 0 à 4. Donc AB = 7 unités."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Place les points A (−2 ; −1), B (3 ; −1), C (3 ; 2) et D (−2 ; 2) dans un repère aux axes perpendiculaires et de même unité.\n1. Quelle figure obtient-on en reliant A, B, C et D dans cet ordre ?\n2. Calcule les longueurs AB et BC.\n3. Calcule le périmètre de la figure.",
        correction: "1. [AB] et [CD] sont horizontaux ; [BC] et [DA] sont verticaux. Les axes sont perpendiculaires : ABCD est un rectangle.\n2. AB = 3 − (−2) = 5 unités. BC = 2 − (−1) = 3 unités.\n3. Périmètre = 2 × (5 + 3) = 16 unités."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère, un point M a une abscisse négative et une ordonnée positive.\n1. Où se trouve-t-il par rapport aux axes si ses deux coordonnées sont non nulles ?\n2. Donne un exemple possible de coordonnées pour M.\n3. Le point N (0 ; 3) répond-il aux mêmes conditions non nulles ?",
        correction: "1. Son abscisse étant négative et non nulle, M est à gauche de l'axe vertical. Son ordonnée étant positive et non nulle, il est au-dessus de l'axe horizontal.\n2. Par exemple : M (−2 ; 3).\n3. Non. L'abscisse de N est 0 : N est sur l'axe vertical, et ses deux coordonnées ne sont donc pas non nulles."
      }
    ]
  }
]);
