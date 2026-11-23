// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 10 : fonctions valeur absolue, carré et cube.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-fonctions-valeur-absolue-carre-cube",
    titre: "Chapitre 10 : Fonctions valeur absolue, carré et cube",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch10-valeur-absolue",
        titre: "La fonction valeur absolue",
        blocs: [
          {
            type: "definition",
            titre: "Définition et domaine",
            texte: "La fonction valeur absolue associe à chaque réel x le nombre |x|. Elle est définie sur ℝ.\n\nOn rappelle que |x| est la distance de x à 0 sur la droite réelle :\n\n• si x ≥ 0, |x| = x ;\n• si x < 0, |x| = -x.\n\nExemples : |3| = 3, |-3| = 3 et |0| = 0."
          },
          {
            type: "tableau",
            titre: "Quelques valeurs",
            entetes: ["x", "-3", "-2", "-1", "0", "1", "2", "3"],
            lignes: [
              ["|x|", "3", "2", "1", "0", "1", "2", "3"]
            ]
          },
          {
            type: "regle",
            titre: "Signe et zéro",
            texte: "Pour tout réel x, |x| ≥ 0.\n\nLa fonction valeur absolue ne prend jamais de valeur négative.\n\nSon unique zéro est 0 : |x| = 0 si et seulement si x = 0."
          },
          {
            type: "regle",
            titre: "Variations",
            texte: "La fonction x ↦ |x| est :\n\n• strictement décroissante sur ]-∞ ; 0] ;\n• strictement croissante sur [0 ; +∞[.\n\nElle admet un minimum égal à 0, atteint pour x = 0. Elle n'a pas de maximum sur ℝ."
          },
          {
            type: "methode",
            titre: "Comprendre les variations",
            texte: "Sur les nombres négatifs, |x| = -x. Quand x augmente de -4 à -2, par exemple, son image diminue de 4 à 2.\n\nSur les nombres positifs, |x| = x : quand x augmente, son image augmente aussi."
          },
          {
            type: "schema",
            titre: "La courbe de la valeur absolue",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Courbe en V de la fonction valeur absolue'><rect x='5' y='5' width='330' height='210' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='20' y1='175' x2='320' y2='175' stroke='#334155' stroke-width='2'/><line x1='170' y1='200' x2='170' y2='20' stroke='#334155' stroke-width='2'/><path d='M320 175 l-8 -4 M320 175 l-8 4 M170 20 l-4 8 M170 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><path d='M50 55 L170 175 L290 55' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='170' cy='175' r='4' fill='#dc2626'/><text x='177' y='193' font-size='14' fill='#334155'>0</text><text x='265' y='48' font-size='14' fill='#1d4ed8'>y = |x|</text><text x='310' y='195' font-size='14' fill='#334155'>x</text><text x='180' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "La courbe a la forme d'un V. Elle descend jusqu'à l'origine puis monte. Ses deux branches sont symétriques par rapport à l'axe des ordonnées."
          },
          {
            type: "remarque",
            titre: "Antécédents",
            texte: "Un nombre strictement positif k possède deux antécédents par la fonction valeur absolue : -k et k.\n\nLe nombre 0 possède un seul antécédent : 0.\n\nUn nombre négatif n'a aucun antécédent."
          }
        ]
      },

      {
        id: "m2-ch10-carre",
        titre: "La fonction carré",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "La fonction carré associe à chaque réel x son carré x². Elle est définie sur ℝ.\n\nExemples :\n\n2² = 4 ; (-2)² = 4 ; 0² = 0."
          },
          {
            type: "tableau",
            titre: "Quelques valeurs",
            entetes: ["x", "-3", "-2", "-1", "0", "1", "2", "3"],
            lignes: [
              ["x²", "9", "4", "1", "0", "1", "4", "9"]
            ]
          },
          {
            type: "regle",
            titre: "Signe et variations",
            texte: "Pour tout réel x, x² ≥ 0. L'unique zéro de la fonction carré est 0.\n\nLa fonction carré est :\n\n• strictement décroissante sur ]-∞ ; 0] ;\n• strictement croissante sur [0 ; +∞[.\n\nSon minimum sur ℝ est 0, atteint en x = 0. Elle n'a pas de maximum sur ℝ."
          },
          {
            type: "schema",
            titre: "La courbe de la fonction carré",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Parabole de la fonction carré, symétrique par rapport à l’axe des ordonnées'><rect x='5' y='5' width='330' height='210' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='20' y1='175' x2='320' y2='175' stroke='#334155' stroke-width='2'/><line x1='170' y1='200' x2='170' y2='20' stroke='#334155' stroke-width='2'/><path d='M320 175 l-8 -4 M320 175 l-8 4 M170 20 l-4 8 M170 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><path d='M60 30 Q170 320 280 30' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='170' cy='175' r='4' fill='#dc2626'/><text x='177' y='193' font-size='14' fill='#334155'>0</text><text x='274' y='50' font-size='14' fill='#1d4ed8'>y = x²</text><text x='310' y='195' font-size='14' fill='#334155'>x</text><text x='180' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "La courbe est une parabole de sommet O. Elle descend jusqu'à 0 puis monte. Elle est symétrique par rapport à l'axe des ordonnées."
          },
          {
            type: "methode",
            titre: "Comparer des carrés",
            texte: "La méthode dépend du signe des nombres.\n\n• Sur [0 ; +∞[, l'ordre est conservé : 2 < 3 donc 2² < 3².\n• Sur ]-∞ ; 0], l'ordre est inversé : -3 < -2 mais (-3)² > (-2)².\n• Si les nombres sont de signes différents, compare leurs valeurs absolues.\n\nPar exemple, |-4| > |3|, donc (-4)² > 3²."
          },
          {
            type: "remarque",
            titre: "Un encadrement qui traverse zéro",
            texte: "Si -2 ≤ x ≤ 3, on ne peut pas conclure que 4 ≤ x² ≤ 9 : x peut être égal à 0.\n\nComme |x| ≤ 3 et x² ≥ 0, on obtient :\n\n0 ≤ x² ≤ 9.\n\nLes deux bornes sont atteintes : 0 pour x = 0 et 9 pour x = 3."
          },
          {
            type: "methode",
            titre: "Résoudre x² = k",
            texte: "• Si k > 0, les solutions sont -√k et √k.\n• Si k = 0, l'unique solution est 0.\n• Si k < 0, il n'y a aucune solution réelle.\n\nPar exemple, les antécédents de 5 par la fonction carré sont -√5 et √5."
          }
        ]
      },

      {
        id: "m2-ch10-cube",
        titre: "La fonction cube",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "La fonction cube associe à chaque réel x son cube x³ = x × x × x. Elle est définie sur ℝ.\n\nExemples :\n\n2³ = 8 ; (-2)³ = -8 ; 0³ = 0.\n\nContrairement au carré d'un nombre négatif, son cube est négatif."
          },
          {
            type: "tableau",
            titre: "Quelques valeurs",
            entetes: ["x", "-3", "-2", "-1", "0", "1", "2", "3"],
            lignes: [
              ["x³", "-27", "-8", "-1", "0", "1", "8", "27"]
            ]
          },
          {
            type: "regle",
            titre: "Signe et zéro",
            texte: "Le cube a le même signe que le nombre de départ :\n\n• si x < 0, alors x³ < 0 ;\n• si x = 0, alors x³ = 0 ;\n• si x > 0, alors x³ > 0.\n\nL'unique zéro de la fonction cube est 0."
          },
          {
            type: "regle",
            titre: "Variations",
            texte: "La fonction cube est strictement croissante sur ℝ.\n\nAinsi, pour deux réels u et v : si u < v, alors u³ < v³.\n\nElle n'a ni minimum ni maximum sur ℝ : ses valeurs peuvent devenir aussi petites ou aussi grandes que l'on veut."
          },
          {
            type: "methode",
            titre: "Justifier la croissance",
            texte: "Soient u et v deux réels tels que u < v.\n\nOn utilise l'identité :\n\nv³ - u³ = (v - u)(v² + uv + u²).\n\nLe premier facteur est positif car v > u.\n\nPour le second :\n\nv² + uv + u² = (v + u/2)² + 3u²/4.\n\nIl est positif ou nul et ne peut être nul que si u = v = 0, ce qui est impossible puisque u < v. Il est donc strictement positif.\n\nAinsi v³ - u³ > 0, d'où u³ < v³."
          },
          {
            type: "remarque",
            titre: "Un encadrement",
            texte: "La fonction cube étant croissante sur ℝ, un encadrement garde son sens lorsqu'on élève ses membres au cube.\n\nPar exemple, si -2 ≤ x ≤ 3, alors :\n\n-8 ≤ x³ ≤ 27."
          }
        ]
      },

      {
        id: "m2-ch10-symetries",
        titre: "Parité et symétrie des courbes",
        blocs: [
          {
            type: "definition",
            titre: "Fonction paire",
            texte: "Une fonction définie sur un ensemble symétrique par rapport à 0 est paire si, pour tout x de son domaine :\n\nf(-x) = f(x).\n\nSa courbe est alors symétrique par rapport à l'axe des ordonnées."
          },
          {
            type: "exemple",
            titre: "Deux fonctions paires",
            texte: "Pour la fonction carré : (-x)² = x². Elle est donc paire sur ℝ.\n\nPour la fonction valeur absolue : |-x| = |x|. Elle est aussi paire sur ℝ.\n\nLeurs courbes sont symétriques par rapport à l'axe des ordonnées."
          },
          {
            type: "definition",
            titre: "Fonction impaire",
            texte: "Une fonction définie sur un ensemble symétrique par rapport à 0 est impaire si, pour tout x de son domaine :\n\nf(-x) = -f(x).\n\nSa courbe est alors symétrique par rapport à l'origine du repère."
          },
          {
            type: "exemple",
            titre: "La fonction cube",
            texte: "Pour f(x) = x³ :\n\nf(-x) = (-x)³ = -x³ = -f(x).\n\nLa fonction cube est impaire.\n\nPar exemple, si le point (2 ; 8) est sur sa courbe, le point (-2 ; -8) y est aussi. Ces points sont symétriques par rapport à l'origine."
          },
          {
            type: "remarque",
            titre: "Vérifier le domaine",
            texte: "Avant de parler de parité, vérifie que si x appartient au domaine, alors -x y appartient aussi.\n\nPar exemple, [0 ; +∞[ n'est pas symétrique par rapport à 0 : la fonction carré restreinte à ce domaine ne peut pas être qualifiée de paire avec la définition donnée ici."
          }
        ]
      },

      {
        id: "m2-ch10-applications",
        titre: "Utiliser ces fonctions pour résoudre",
        blocs: [
          {
            type: "methode",
            titre: "Une inéquation avec |x|",
            texte: "Résolvons |x| ≤ 3.\n\nCela signifie que la distance de x à 0 ne dépasse pas 3.\n\nDonc -3 ≤ x ≤ 3 et l'ensemble des solutions est [-3 ; 3]."
          },
          {
            type: "methode",
            titre: "Une inéquation avec x²",
            texte: "Résolvons x² < 9.\n\nComme 9 = 3², cette inégalité équivaut à |x| < 3.\n\nDonc -3 < x < 3. L'ensemble des solutions est ]-3 ; 3[."
          },
          {
            type: "methode",
            titre: "Une inéquation avec x³",
            texte: "Résolvons x³ ≥ 8.\n\nOr 8 = 2³. La fonction cube étant strictement croissante sur ℝ :\n\nx³ ≥ 2³ équivaut à x ≥ 2.\n\nL'ensemble des solutions est [2 ; +∞[."
          },
          {
            type: "remarque",
            titre: "Comparer les trois fonctions",
            texte: "• |x| et x² sont toujours positifs ou nuls ; x³ peut être négatif.\n• |x| et x² diminuent puis augmentent ; x³ augmente sur tout ℝ.\n• |x| et x² sont paires ; x³ est impaire.\n\nToutes trois sont définies sur ℝ."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n\n1. |-4|\n2. (-3)²\n3. (-2)³\n4. |0|\n5. 3³",
        correction: "1. |-4| = 4.\n2. (-3)² = 9.\n3. (-2)³ = (-2) × (-2) × (-2) = -8.\n4. |0| = 0.\n5. 3³ = 27."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On considère f(x) = x² et g(x) = x³ sur ℝ.\n\n1. Calcule f(-2) et g(-2).\n2. Donne le signe de f(-5) et celui de g(-5).\n3. Quel est le zéro de chacune de ces fonctions ?",
        correction: "1. f(-2) = 4 et g(-2) = -8.\n\n2. f(-5) = 25 est positif ; g(-5) = -125 est négatif.\n\n3. Le seul zéro de chaque fonction est 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. |x| = 4\n2. x² = 25\n3. x² = -1\n4. x³ = -8",
        correction: "1. Les nombres à une distance 4 de 0 sont -4 et 4. S = {-4 ; 4}.\n\n2. Les solutions sont -5 et 5 : S = {-5 ; 5}.\n\n3. Un carré réel ne peut pas être négatif : S = ∅.\n\n4. Comme (-2)³ = -8 et que la fonction cube est strictement croissante, l'unique solution est -2 : S = {-2}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Compare sans calculatrice :\n\n1. (-4)² et (-2)².\n2. (-4)³ et (-2)³.\n3. |3| et |-5|.",
        correction: "1. Sur les négatifs, la fonction carré est décroissante. Comme -4 < -2, on a (-4)² > (-2)². En effet, 16 > 4.\n\n2. La fonction cube est croissante sur ℝ. Comme -4 < -2, on a (-4)³ < (-2)³. En effet, -64 < -8.\n\n3. |3| = 3 et |-5| = 5, donc |3| < |-5|."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On sait que -2 ≤ x ≤ 3.\n\n1. Encadre x².\n2. Encadre x³.\n3. Donne le minimum et le maximum de |x| sur [-2 ; 3].",
        correction: "1. L'intervalle contient 0 et |x| ≤ 3. Donc 0 ≤ x² ≤ 9. Les bornes sont atteintes pour x = 0 et x = 3.\n\n2. La fonction cube est croissante sur ℝ. Donc (-2)³ ≤ x³ ≤ 3³, soit -8 ≤ x³ ≤ 27.\n\n3. Le minimum de |x| est 0, atteint en 0. Son maximum est 3, atteint en 3 : les distances à zéro sur cet intervalle ne dépassent pas 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ :\n\n1. |x| < 2\n2. x² ≥ 16\n3. x³ ≤ -27",
        correction: "1. |x| < 2 équivaut à -2 < x < 2. Donc S = ]-2 ; 2[.\n\n2. x² ≥ 16 équivaut à |x| ≥ 4. Donc x ≤ -4 ou x ≥ 4. S = ]-∞ ; -4] ∪ [4 ; +∞[.\n\n3. -27 = (-3)³. La fonction cube est strictement croissante, donc x³ ≤ (-3)³ équivaut à x ≤ -3. S = ]-∞ ; -3]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x² et g(x) = x³, définies sur ℝ.\n\n1. Calcule f(-x) et g(-x).\n2. Indique si chaque fonction est paire ou impaire.\n3. Le point A(2 ; 4) appartient à la courbe de f. Quel point obtient-on par symétrie par rapport à l'axe des ordonnées ?",
        correction: "1. f(-x) = (-x)² = x² = f(x). De même, g(-x) = (-x)³ = -x³ = -g(x).\n\n2. f est paire et g est impaire. Le domaine ℝ est symétrique par rapport à 0.\n\n3. Le point symétrique de A par rapport à l'axe des ordonnées est A'(-2 ; 4). Il appartient à la courbe de f car (-2)² = 4."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère f(x) = x² sur l'intervalle [-4 ; 2].\n\n1. Donne les variations de f sur cet intervalle.\n2. Détermine son minimum et son maximum sur [-4 ; 2].\n3. Cherche les antécédents de 9 dans cet intervalle.\n4. Résous x² ≤ 9 en tenant compte de l'intervalle [-4 ; 2].",
        correction: "1. f est décroissante sur [-4 ; 0], puis croissante sur [0 ; 2].\n\n2. Le minimum est f(0) = 0. Aux extrémités, f(-4) = 16 et f(2) = 4. Le maximum est donc 16, atteint en -4.\n\n3. Sur ℝ, x² = 9 donne x = -3 ou x = 3. Seul -3 appartient à [-4 ; 2]. L'unique antécédent demandé est -3.\n\n4. Sur ℝ, x² ≤ 9 équivaut à -3 ≤ x ≤ 3. On prend l'intersection avec [-4 ; 2] : S = [-3 ; 2]."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On compare les fonctions f(x) = x² et g(x) = x³ sur ℝ.\n\n1. Résous f(x) = g(x).\n2. Factorise f(x) - g(x).\n3. Détermine pour quels réels f(x) ≥ g(x).\n4. Vérifie ton résultat pour x = -1, x = 1/2 et x = 2.",
        correction: "1. x² = x³ équivaut à x² - x³ = 0, soit x²(1 - x) = 0. Les solutions sont 0 et 1.\n\n2. f(x) - g(x) = x²(1 - x).\n\n3. x² est positif ou nul pour tout x. Si x < 1, le facteur 1 - x est positif : le produit est positif ou nul. Pour x = 1, le produit est nul. Si x > 1, x² est positif et 1 - x est négatif : le produit est négatif.\n\nDonc f(x) ≥ g(x) pour x ∈ ]-∞ ; 1].\n\n4. Pour x = -1 : f(-1) = 1 et g(-1) = -1, donc f ≥ g.\n\nPour x = 1/2 : f(1/2) = 1/4 et g(1/2) = 1/8, donc f ≥ g.\n\nPour x = 2 : f(2) = 4 et g(2) = 8, donc f < g. Les résultats sont cohérents avec l'ensemble trouvé."
      }
    ]
  }
]);
