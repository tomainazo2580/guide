// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 8 : Représentation graphique de la proportionnalité

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch8",
    titre: "Chapitre 8 : Représentation graphique de la proportionnalité",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch8-reperage",
        titre: "Lire les coordonnées d'un point",
        blocs: [
          {
            type: "definition",
            titre: "Un repère",
            texte: "Un repère du plan est formé de deux axes gradués qui se coupent à l'origine O.\nL'axe horizontal est appelé axe des abscisses et l'axe vertical est appelé axe des ordonnées."
          },
          {
            type: "definition",
            titre: "Les coordonnées",
            texte: "Les coordonnées d'un point s'écrivent dans l'ordre : (abscisse ; ordonnée).\nL'abscisse indique le déplacement horizontal depuis l'origine ; l'ordonnée indique le déplacement vertical."
          },
          {
            type: "schema",
            titre: "Lire un point dans un repère",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Repère gradué avec le point A de coordonnées 2 et 4'><line x1='45' y1='190' x2='315' y2='190' stroke='#1e3a5f' stroke-width='2'/><path d='M315 190 L307 185 M315 190 L307 195' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='45' y1='190' x2='45' y2='15' stroke='#1e3a5f' stroke-width='2'/><path d='M45 15 L40 23 M45 15 L50 23' fill='none' stroke='#1e3a5f' stroke-width='2'/><g stroke='#cbd5e1' stroke-width='1'><line x1='95' y1='190' x2='95' y2='30'/><line x1='145' y1='190' x2='145' y2='30'/><line x1='195' y1='190' x2='195' y2='30'/><line x1='245' y1='190' x2='245' y2='30'/><line x1='45' y1='155' x2='295' y2='155'/><line x1='45' y1='120' x2='295' y2='120'/><line x1='45' y1='85' x2='295' y2='85'/><line x1='45' y1='50' x2='295' y2='50'/></g><g fill='#1e3a5f' font-size='12' text-anchor='middle'><text x='45' y='208'>0</text><text x='95' y='208'>1</text><text x='145' y='208'>2</text><text x='195' y='208'>3</text><text x='245' y='208'>4</text></g><g fill='#1e3a5f' font-size='12' text-anchor='end'><text x='38' y='159'>1</text><text x='38' y='124'>2</text><text x='38' y='89'>3</text><text x='38' y='54'>4</text></g><line x1='145' y1='190' x2='145' y2='50' stroke='#dc2626' stroke-width='2' stroke-dasharray='5 4'/><line x1='45' y1='50' x2='145' y2='50' stroke='#dc2626' stroke-width='2' stroke-dasharray='5 4'/><circle cx='145' cy='50' r='5' fill='#dc2626'/><text x='155' y='42' font-size='14' fill='#dc2626'>A (2 ; 4)</text><text x='310' y='215' font-size='12' fill='#1e3a5f'>x</text><text x='20' y='20' font-size='12' fill='#1e3a5f'>y</text></svg>",
            legende: "Pour lire A, on repère d'abord l'abscisse 2, puis l'ordonnée 4 : A (2 ; 4)."
          },
          {
            type: "remarque",
            titre: "Attention à l'ordre",
            texte: "Le point (2 ; 4) n'est pas le même que le point (4 ; 2). On écrit toujours l'abscisse en premier et l'ordonnée en second."
          }
        ]
      },

      {
        id: "m4-ch8-droite",
        titre: "Reconnaître une représentation de proportionnalité",
        blocs: [
          {
            type: "regle",
            titre: "Une droite passant par l'origine",
            texte: "Dans un repère, la représentation de la relation de proportionnalité y = k × x est une droite passant par l'origine O (0 ; 0).\nPour une série de valeurs, les points doivent être alignés avec l'origine pour que le tableau soit proportionnel."
          },
          {
            type: "schema",
            titre: "La relation y = 2 × x",
            svg: "<svg viewBox='0 0 340 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Graphique de la relation y égal deux fois x ; les points zéro zéro, un deux, deux quatre et trois six sont alignés'><line x1='45' y1='205' x2='315' y2='205' stroke='#1e3a5f' stroke-width='2'/><path d='M315 205 L307 200 M315 205 L307 210' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='45' y1='205' x2='45' y2='15' stroke='#1e3a5f' stroke-width='2'/><path d='M45 15 L40 23 M45 15 L50 23' fill='none' stroke='#1e3a5f' stroke-width='2'/><g stroke='#cbd5e1' stroke-width='1'><line x1='115' y1='205' x2='115' y2='25'/><line x1='185' y1='205' x2='185' y2='25'/><line x1='255' y1='205' x2='255' y2='25'/><line x1='45' y1='150' x2='300' y2='150'/><line x1='45' y1='95' x2='300' y2='95'/><line x1='45' y1='40' x2='300' y2='40'/></g><g fill='#1e3a5f' font-size='12' text-anchor='middle'><text x='45' y='224'>0</text><text x='115' y='224'>1</text><text x='185' y='224'>2</text><text x='255' y='224'>3</text></g><g fill='#1e3a5f' font-size='12' text-anchor='end'><text x='37' y='154'>2</text><text x='37' y='99'>4</text><text x='37' y='44'>6</text></g><line x1='45' y1='205' x2='255' y2='40' stroke='#2563eb' stroke-width='2.5'/><g fill='#dc2626'><circle cx='45' cy='205' r='4'/><circle cx='115' cy='150' r='4'/><circle cx='185' cy='95' r='4'/><circle cx='255' cy='40' r='4'/></g><text x='265' y='35' font-size='13' fill='#2563eb'>y = 2x</text><text x='310' y='235' font-size='12' fill='#1e3a5f'>x</text><text x='20' y='20' font-size='12' fill='#1e3a5f'>y</text></svg>",
            legende: "Les points (0 ; 0), (1 ; 2), (2 ; 4) et (3 ; 6) sont alignés avec l'origine."
          },
          {
            type: "remarque",
            titre: "Attention à la conclusion",
            texte: "Des points alignés sur une droite qui ne passe pas par l'origine ne représentent pas une situation de proportionnalité.\nSur un graphique dessiné à la main, un alignement apparent peut être imprécis : les calculs permettent de vérifier."
          },
          {
            type: "remarque",
            titre: "Le coefficient peut être nul",
            texte: "Si k = 0, alors y = 0 × x = 0 pour toutes les valeurs de x. La représentation est l'axe des abscisses, qui passe par l'origine."
          }
        ]
      },

      {
        id: "m4-ch8-construire",
        titre: "Construire un graphique",
        blocs: [
          {
            type: "methode",
            titre: "Les étapes",
            texte: "Pour représenter y = 2 × x :\n1. Trace deux axes gradués et indique leur origine.\n2. Choisis une échelle adaptée sur chaque axe.\n3. Calcule quelques couples de valeurs, par exemple (0 ; 0), (1 ; 2) et (2 ; 4).\n4. Place les points en lisant d'abord l'abscisse, puis l'ordonnée.\n5. Trace la droite qui passe par ces points."
          },
          {
            type: "tableau",
            titre: "Valeurs de y = 2 × x",
            entetes: ["x", "0", "1", "2", "3"],
            lignes: [
              ["y", "0", "2", "4", "6"]
            ]
          },
          {
            type: "remarque",
            titre: "Choisir les échelles",
            texte: "Les graduations doivent être régulières sur chaque axe. Les unités graphiques peuvent être différentes d'un axe à l'autre : par exemple, un carreau peut représenter 1 sur l'axe des abscisses et 2 sur l'axe des ordonnées."
          },
          {
            type: "remarque",
            titre: "La situation étudiée",
            texte: "La droite représente la relation pour toutes les valeurs de x. Dans un problème concret, seules certaines valeurs peuvent avoir un sens : par exemple, un nombre de cahiers ne peut pas être négatif."
          }
        ]
      },

      {
        id: "m4-ch8-coefficient",
        titre: "Retrouver le coefficient",
        blocs: [
          {
            type: "methode",
            titre: "À partir d'un point",
            texte: "Si une droite représente y = k × x et si l'on connaît un point de coordonnées (x ; y) avec x non nul, alors k = y ÷ x.\nOn peut ensuite écrire la relation sous la forme y = k × x."
          },
          {
            type: "exemple",
            titre: "Lire un coefficient",
            texte: "Une droite passant par l'origine contient le point A (3 ; 12).\nLe coefficient est k = 12 ÷ 3 = 4.\nLa relation représentée est donc y = 4 × x."
          },
          {
            type: "remarque",
            titre: "Ne pas diviser par zéro",
            texte: "Le point d'origine (0 ; 0) appartient à toutes les représentations de proportionnalité, mais il ne permet pas de trouver le coefficient en calculant 0 ÷ 0 : cette division n'est pas définie."
          },
          {
            type: "remarque",
            titre: "Sens de la relation",
            texte: "Dans y = k × x, le coefficient de x vers y est k.\nSi k est non nul, on peut aussi écrire x = y ÷ k : le coefficient de y vers x est alors 1/k.\nSi k = 0, cette relation inverse n'est pas définie."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère, le point A a pour coordonnées (3 ; 5).\n1. Quelle est son abscisse ?\n2. Quelle est son ordonnée ?",
        correction: "1. L'abscisse est le premier nombre : 3.\n2. L'ordonnée est le second nombre : 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète les valeurs pour la relation y = 3 × x :\n1. Si x = 0, combien vaut y ?\n2. Si x = 2, combien vaut y ?\n3. Si x = 4, combien vaut y ?",
        correction: "1. y = 3 × 0 = 0.\n2. y = 3 × 2 = 6.\n3. y = 3 × 4 = 12."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Construis un repère, puis place les points O (0 ; 0), A (1 ; 2) et B (2 ; 4).\nQue remarques-tu ?",
        correction: "Place O à l'origine. Pour A, avance de 1 unité sur l'axe horizontal puis de 2 unités vers le haut. Pour B, avance de 2 unités puis de 4 unités vers le haut.\nLes trois points sont alignés. Leurs coordonnées vérifient y = 2 × x."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une droite représentant une proportionnalité passe par l'origine et par le point A (2 ; 8).\n1. Quel est le coefficient de proportionnalité de x vers y ?\n2. Écris la relation entre x et y.",
        correction: "1. L'abscisse de A est non nulle, donc k = y ÷ x = 8 ÷ 2 = 4.\n2. La relation est y = 4 × x."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère les points O (0 ; 0), A (1 ; 3), B (2 ; 6) et C (3 ; 9).\n1. Vérifie que leurs coordonnées suivent une relation de proportionnalité.\n2. Place les points dans un repère et trace leur droite.",
        correction: "1. Pour A : 3 = 3 × 1. Pour B : 6 = 3 × 2. Pour C : 9 = 3 × 3. O vérifie aussi la relation 0 = 3 × 0.\nLa relation est y = 3 × x.\n2. On place les quatre points puis on trace la droite qui les relie : elle passe par l'origine."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère les points O (0 ; 0), A (2 ; 5) et B (4 ; 11).\nCes points correspondent-ils à un tableau de proportionnalité ? Justifie par un calcul.",
        correction: "Pour A, le coefficient serait 5 ÷ 2 = 2,5.\nPour B, il serait 11 ÷ 4 = 2,75.\nCes coefficients sont différents : il n'y a pas de coefficient commun. Le tableau n'est pas proportionnel et les trois points ne sont pas alignés."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Le prix de bananes est proportionnel à leur masse. Pour 2 kg, on paie 6 000 Ar.\n1. Trouve le coefficient de la masse en kg vers le prix en Ar.\n2. Calcule le prix de 5 kg.\n3. Dans un repère, quelles coordonnées ont les points correspondant à 0 kg, 2 kg et 5 kg, si la masse est en abscisse et le prix en ordonnée ?",
        correction: "1. Coefficient : 6 000 ÷ 2 = 3 000 Ar par kg.\n2. Prix de 5 kg : 3 000 × 5 = 15 000 Ar.\n3. Les points sont (0 ; 0), (2 ; 6 000) et (5 ; 15 000). Ils sont alignés avec l'origine car le prix est proportionnel à la masse."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une droite représente la relation y = k × x et contient le point A (4 ; −8).\n1. Calcule k.\n2. Calcule y lorsque x = 3.\n3. Le point B (−2 ; 4) appartient-il à cette droite ?",
        correction: "1. k = −8 ÷ 4 = −2.\n2. La relation est y = −2 × x. Pour x = 3, y = −2 × 3 = −6.\n3. Pour x = −2, y = −2 × (−2) = 4. Le point B (−2 ; 4) appartient donc à la droite."
      }
    ]
  }
]);
