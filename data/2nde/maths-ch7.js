// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 7 : généralités sur les fonctions.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-generalites-fonctions",
    titre: "Chapitre 7 : Généralités sur les fonctions",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch7-notion",
        titre: "Comprendre la notion de fonction",
        blocs: [
          {
            type: "introduction",
            titre: "Une quantité dépend d'une autre",
            texte: "L'aire d'un carré dépend de la longueur de son côté. Si le côté mesure x centimètres, son aire vaut x² centimètres carrés.\n\nÀ chaque longueur possible x, on associe une aire unique x². Cette association est un exemple de fonction."
          },
          {
            type: "definition",
            titre: "Définition d'une fonction",
            texte: "Une fonction f associe à chaque nombre x de son ensemble de définition un unique nombre réel, noté f(x).\n\nOn peut écrire :\n\nf : x ↦ f(x).\n\nLe symbole ↦ se lit « est associé à ».\n\nPar exemple, si f(x) = x² + 1, alors f associe à 2 le nombre f(2) = 2² + 1 = 5."
          },
          {
            type: "remarque",
            titre: "Une seule image pour chaque nombre",
            texte: "Un même nombre x ne peut pas avoir deux images différentes par une même fonction.\n\nEn revanche, deux nombres différents peuvent avoir la même image. Pour f(x) = x², on a par exemple f(2) = 4 et f(-2) = 4."
          },
          {
            type: "definition",
            titre: "Image et antécédent",
            texte: "Si f(a) = b :\n\n• b est l'image de a par f ;\n• a est un antécédent de b par f.\n\nExemple : si f(x) = x² et f(3) = 9, alors 9 est l'image de 3 et 3 est un antécédent de 9.\n\nLe nombre -3 est aussi un antécédent de 9, car (-3)² = 9."
          },
          {
            type: "schema",
            titre: "De l'antécédent vers l'image",
            svg: "<svg viewBox='0 0 340 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='La fonction carré associe quatre à deux et à moins deux'><rect x='10' y='10' width='320' height='100' rx='10' fill='#f8fafc' stroke='#cbd5e1'/><text x='65' y='40' text-anchor='middle' font-size='17' fill='#1d4ed8'>2</text><text x='65' y='85' text-anchor='middle' font-size='17' fill='#1d4ed8'>-2</text><text x='270' y='63' text-anchor='middle' font-size='19' fill='#b91c1c'>4</text><path d='M85 36 L235 56 M85 81 L235 61' fill='none' stroke='#475569' stroke-width='2'/><path d='M235 56 l-8 -5 M235 56 l-8 3 M235 61 l-8 -3 M235 61 l-8 5' fill='none' stroke='#475569' stroke-width='2'/><text x='160' y='30' text-anchor='middle' font-size='13' fill='#334155'>f(x) = x²</text></svg>",
            legende: "Pour la fonction carré, 2 et -2 ont la même image 4. Ainsi, 4 possède au moins deux antécédents."
          }
        ]
      },

      {
        id: "m2-ch7-domaine",
        titre: "Ensemble de définition",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "L'ensemble de définition d'une fonction f est l'ensemble des nombres x pour lesquels f est définie. On le note souvent Df.\n\nIl peut être indiqué dans l'énoncé ou dépendre des opérations présentes dans la formule.\n\nUne valeur qui n'appartient pas à Df ne peut pas avoir d'image par cette fonction."
          },
          {
            type: "exemple",
            titre: "Une formule définie sur ℝ",
            texte: "Pour f(x) = 3x² - 2x + 1, les additions et les multiplications peuvent être effectuées pour tout réel x.\n\nSi aucune restriction supplémentaire n'est imposée, Df = ℝ."
          },
          {
            type: "regle",
            titre: "Attention au dénominateur",
            texte: "Une division par zéro n'est pas définie. Il faut donc exclure les valeurs qui annulent un dénominateur.\n\nExemple : f(x) = 1/(x - 2).\n\nLe dénominateur s'annule pour x = 2. Donc, si aucune autre restriction n'est imposée :\n\nDf = ℝ privé de 2 = ]-∞ ; 2[ ∪ ]2 ; +∞[."
          },
          {
            type: "regle",
            titre: "Attention à la racine carrée",
            texte: "Dans ℝ, la racine carrée √A est définie lorsque A ≥ 0.\n\nExemple : g(x) = √(x + 3).\n\nIl faut x + 3 ≥ 0, donc x ≥ -3.\n\nSi aucune autre restriction n'est imposée, Dg = [-3 ; +∞[."
          },
          {
            type: "methode",
            titre: "Plusieurs conditions à la fois",
            texte: "Pour h(x) = 1/√(x - 1), la racine doit être définie et le dénominateur doit être non nul.\n\nIl faut donc x - 1 > 0, soit x > 1.\n\nAinsi Dh = ]1 ; +∞[.\n\nLe nombre 1 est exclu : il donnerait un dénominateur égal à zéro."
          },
          {
            type: "remarque",
            titre: "La formule et le contexte",
            texte: "Une formule peut être définie sur un ensemble plus grand que celui autorisé par le problème.\n\nPour l'aire d'un carré de côté x, la formule x² existe pour tout réel, mais une longueur ne peut pas être négative. Si le côté nul est admis, le domaine du modèle est [0 ; +∞[."
          }
        ]
      },

      {
        id: "m2-ch7-images",
        titre: "Calculer une image ou chercher des antécédents",
        blocs: [
          {
            type: "methode",
            titre: "Calculer une image",
            texte: "Pour calculer l'image de a :\n\n1. Vérifie que a appartient à l'ensemble de définition.\n2. Remplace chaque x par a, en utilisant des parenthèses si nécessaire.\n3. Effectue le calcul.\n\nExemple : f(x) = 2x² - 3x + 1.\n\nf(-2) = 2(-2)² - 3(-2) + 1\n= 2 × 4 + 6 + 1 = 15."
          },
          {
            type: "remarque",
            titre: "Le carré d'un nombre négatif",
            texte: "Il est important de conserver les parenthèses : (-2)² = 4.\n\nDans l'expression -2², la puissance est calculée avant le signe moins : -2² = -(2²) = -4."
          },
          {
            type: "methode",
            titre: "Chercher les antécédents",
            texte: "Pour chercher les antécédents de b par f :\n\n1. Résous l'équation f(x) = b.\n2. Ne conserve que les solutions appartenant à Df.\n\nExemple : f(x) = x² sur ℝ. Cherchons les antécédents de 9.\n\nx² = 9 équivaut à x = -3 ou x = 3.\n\nLes antécédents de 9 sont donc -3 et 3."
          },
          {
            type: "exemple",
            titre: "Zéro, un ou plusieurs antécédents",
            texte: "Pour f(x) = x² définie sur ℝ :\n\n• -1 n'a aucun antécédent, car un carré ne peut pas être négatif ;\n• 0 a un seul antécédent : 0 ;\n• 4 a deux antécédents : -2 et 2.\n\nSi on restreint la même formule à [0 ; +∞[, 4 n'a plus qu'un antécédent : 2."
          },
          {
            type: "methode",
            titre: "Exemple avec une fraction",
            texte: "Soit g(x) = 1/(x - 2), définie pour x ≠ 2. Cherchons les antécédents de 1/3.\n\n1/(x - 2) = 1/3 équivaut, pour x ≠ 2, à x - 2 = 3.\n\nDonc x = 5. Comme 5 appartient au domaine, l'unique antécédent est 5.\n\nVérification : g(5) = 1/(5 - 2) = 1/3."
          }
        ]
      },

      {
        id: "m2-ch7-representation",
        titre: "Représenter et lire une fonction",
        blocs: [
          {
            type: "definition",
            titre: "Courbe représentative",
            texte: "Dans un repère, la courbe représentative de f est l'ensemble des points M(x ; f(x)) lorsque x parcourt Df.\n\nUn point M(a ; b) appartient à cette courbe si et seulement si a ∈ Df et b = f(a)."
          },
          {
            type: "schema",
            titre: "Lire une image et un antécédent",
            svg: "<svg viewBox='0 0 350 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Droite représentant f de x égal à x plus un ; le point deux trois est sur la droite'><rect x='5' y='5' width='340' height='220' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='35' y1='185' x2='325' y2='185' stroke='#334155' stroke-width='2'/><line x1='75' y1='210' x2='75' y2='20' stroke='#334155' stroke-width='2'/><path d='M325 185 l-8 -4 M325 185 l-8 4 M75 20 l-4 8 M75 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><line x1='55' y1='170' x2='255' y2='20' stroke='#2563eb' stroke-width='3'/><circle cx='155' cy='95' r='5' fill='#dc2626'/><line x1='155' y1='95' x2='155' y2='185' stroke='#64748b' stroke-dasharray='4 4'/><line x1='75' y1='95' x2='155' y2='95' stroke='#64748b' stroke-dasharray='4 4'/><text x='61' y='202' font-size='13' fill='#334155'>0</text><text x='151' y='202' font-size='13' fill='#334155'>2</text><text x='58' y='100' font-size='13' fill='#334155'>3</text><text x='165' y='88' font-size='14' fill='#b91c1c'>M(2 ; 3)</text><text x='205' y='45' font-size='14' fill='#1d4ed8'>y = x + 1</text><text x='310' y='205' font-size='14' fill='#334155'>x</text><text x='84' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "Le point M(2 ; 3) appartient à la courbe : f(2) = 3. On lit l'image sur l'axe vertical et l'antécédent sur l'axe horizontal."
          },
          {
            type: "methode",
            titre: "Lire une image sur une courbe",
            texte: "Pour lire f(a) :\n\n1. Repère a sur l'axe horizontal.\n2. Monte ou descends jusqu'à la courbe.\n3. Lis l'ordonnée du point obtenu sur l'axe vertical.\n\nSur le schéma précédent, l'abscisse 2 correspond à l'ordonnée 3 : f(2) = 3."
          },
          {
            type: "methode",
            titre: "Lire des antécédents sur une courbe",
            texte: "Pour chercher graphiquement les antécédents de b :\n\n1. Repère b sur l'axe vertical.\n2. Imagine ou trace la droite horizontale d'ordonnée b.\n3. Repère tous ses points d'intersection avec la courbe.\n4. Lis leurs abscisses : ce sont les antécédents recherchés.\n\nSelon le cas, il peut y avoir aucun, un ou plusieurs points d'intersection."
          },
          {
            type: "remarque",
            titre: "Lecture graphique et exactitude",
            texte: "Une lecture sur un dessin donne souvent une valeur approchée. Pour obtenir une valeur exacte, on peut utiliser la formule de la fonction et résoudre l'équation correspondante.\n\nUn tableau de quelques valeurs aide à tracer une courbe, mais ne suffit pas à connaître avec certitude toute sa forme entre les points."
          }
        ]
      },

      {
        id: "m2-ch7-tableau",
        titre: "Tableaux de valeurs et zéros",
        blocs: [
          {
            type: "definition",
            titre: "Tableau de valeurs",
            texte: "Un tableau de valeurs présente certains nombres x et leurs images f(x).\n\nPour le construire, on choisit des valeurs de x dans le domaine, puis on calcule l'image de chacune."
          },
          {
            type: "tableau",
            titre: "Exemple : f(x) = x² - 1",
            entetes: ["x", "-2", "-1", "0", "1", "2"],
            lignes: [
              ["f(x)", "3", "0", "-1", "0", "3"]
            ]
          },
          {
            type: "exemple",
            titre: "Exploiter le tableau",
            texte: "Dans le tableau précédent, l'image de -2 est 3 et l'image de 0 est -1.\n\nOn voit aussi que -1 et 1 sont des antécédents de 0.\n\nLe tableau ne donne que les valeurs choisies : à lui seul, il ne permet pas d'affirmer qu'il n'existe aucun autre antécédent."
          },
          {
            type: "definition",
            titre: "Zéro d'une fonction",
            texte: "Un zéro de f est un nombre r de Df tel que f(r) = 0.\n\nGraphiquement, les zéros sont les abscisses des points où la courbe rencontre l'axe horizontal."
          },
          {
            type: "methode",
            titre: "Calculer les zéros",
            texte: "Pour f(x) = x² - 1 sur ℝ, on résout f(x) = 0 :\n\nx² - 1 = 0,\n(x - 1)(x + 1) = 0.\n\nDonc x = 1 ou x = -1.\n\nLes zéros sont -1 et 1. Ils sont les abscisses des points (-1 ; 0) et (1 ; 0) de la courbe."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f définie sur ℝ par f(x) = 2x + 3.\n\nCalcule :\n\n1. f(0)\n2. f(2)\n3. f(-1)",
        correction: "1. f(0) = 2 × 0 + 3 = 3.\n\n2. f(2) = 2 × 2 + 3 = 7.\n\n3. f(-1) = 2 × (-1) + 3 = 1."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit g(x) = x² sur ℝ.\n\n1. Donne l'image de -3.\n2. Donne deux antécédents de 16.\n3. Le nombre -4 a-t-il un antécédent ?",
        correction: "1. g(-3) = (-3)² = 9.\n\n2. Les antécédents de 16 sont -4 et 4, car (-4)² = 4² = 16.\n\n3. Non : un carré réel est toujours positif ou nul."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Détermine l'ensemble de définition de chaque fonction, en supposant qu'aucune autre restriction n'est imposée :\n\n1. f(x) = 1/(x + 2)\n2. g(x) = √(x - 4)\n3. h(x) = 1/√x",
        correction: "1. Il faut x + 2 ≠ 0, donc x ≠ -2. Df = ]-∞ ; -2[ ∪ ]-2 ; +∞[.\n\n2. Il faut x - 4 ≥ 0, donc x ≥ 4. Dg = [4 ; +∞[.\n\n3. La racine doit exister et le dénominateur doit être non nul. Il faut donc x > 0. Dh = ]0 ; +∞[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On considère f(x) = x² - 2x sur ℝ.\n\n1. Calcule f(-1), f(0) et f(2).\n2. Les points A(-1 ; 3) et B(2 ; 1) appartiennent-ils à la courbe de f ?",
        correction: "1. f(-1) = (-1)² - 2(-1) = 1 + 2 = 3.\n\nf(0) = 0 et f(2) = 2² - 2 × 2 = 0.\n\n2. A appartient à la courbe car f(-1) = 3. B n'y appartient pas car f(2) = 0 ≠ 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f définie sur ℝ par f(x) = x² - 4.\n\n1. Calcule f(-3) et f(0).\n2. Détermine les zéros de f.\n3. Cherche les antécédents de 5.",
        correction: "1. f(-3) = (-3)² - 4 = 9 - 4 = 5. De plus, f(0) = -4.\n\n2. f(x) = 0 équivaut à x² - 4 = 0, puis à (x - 2)(x + 2) = 0. Les zéros sont -2 et 2.\n\n3. f(x) = 5 équivaut à x² - 4 = 5, soit x² = 9. Les antécédents de 5 sont -3 et 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère g(x) = 2/(x - 1), avec son domaine naturel.\n\n1. Détermine son ensemble de définition.\n2. Calcule g(3).\n3. Cherche l'antécédent de -1.\n4. Le nombre 0 a-t-il un antécédent ?",
        correction: "1. Le dénominateur doit être non nul : x - 1 ≠ 0, donc Dg = ℝ privé de 1.\n\n2. g(3) = 2/(3 - 1) = 1.\n\n3. Pour x ≠ 1, 2/(x - 1) = -1 équivaut à 2 = -(x - 1), donc x = -1. Cette valeur est admise et g(-1) = -1.\n\n4. Non. Une fraction de numérateur 2 ne peut pas être nulle lorsque son dénominateur est non nul."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x² - 2x - 3 sur ℝ.\n\n1. Calcule f(-1), f(0) et f(3).\n2. Détermine les zéros de f.\n3. Parmi les points A(-1 ; 0), B(0 ; 3) et C(3 ; 0), lesquels appartiennent à la courbe ?",
        correction: "1. f(-1) = 1 + 2 - 3 = 0 ; f(0) = -3 ; f(3) = 9 - 6 - 3 = 0.\n\n2. x² - 2x - 3 = (x + 1)(x - 3). Les zéros sont donc -1 et 3.\n\n3. A et C appartiennent à la courbe puisque f(-1) = 0 et f(3) = 0. B n'y appartient pas car f(0) = -3 ≠ 3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rectangle a un périmètre de 20 cm. On note x la longueur d'un de ses côtés, avec 0 < x < 10. Son aire est notée A(x).\n\n1. Exprime l'autre côté puis A(x).\n2. Calcule l'image de 4 par A et interprète-la.\n3. Cherche les antécédents de 21 par A.\n4. L'aire 30 cm² possède-t-elle un antécédent dans le domaine ?",
        correction: "1. Si l'autre côté vaut L, alors 2(x + L) = 20, donc L = 10 - x. Ainsi A(x) = x(10 - x) = -x² + 10x, pour x ∈ ]0 ; 10[.\n\n2. A(4) = 4 × 6 = 24. Un rectangle dont un côté mesure 4 cm a une aire de 24 cm².\n\n3. A(x) = 21 équivaut à x² - 10x + 21 = 0, soit (x - 3)(x - 7) = 0. Les antécédents sont 3 et 7 ; ils appartiennent tous deux au domaine.\n\n4. A(x) = -(x - 5)² + 25 ≤ 25. L'aire ne peut donc pas atteindre 30 cm² : 30 n'a aucun antécédent dans le domaine."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On définit f par f(x) = √(x + 1) sur son domaine naturel.\n\n1. Détermine son ensemble de définition.\n2. Calcule f(-1), f(3) et f(8).\n3. Cherche les antécédents de 2 puis de -2.\n4. Le point M(8 ; 3) appartient-il à la courbe ? Justifie.",
        correction: "1. Il faut x + 1 ≥ 0, donc x ≥ -1. Ainsi Df = [-1 ; +∞[.\n\n2. f(-1) = √0 = 0 ; f(3) = √4 = 2 ; f(8) = √9 = 3.\n\n3. √(x + 1) = 2 implique x + 1 = 4, donc x = 3. On vérifie que f(3) = 2 : l'unique antécédent de 2 est 3.\n\nLa racine carrée est toujours positive ou nulle : -2 n'a aucun antécédent.\n\n4. Oui : 8 appartient au domaine et f(8) = 3. Le point M(8 ; 3) est donc sur la courbe."
      }
    ]
  }
]);
