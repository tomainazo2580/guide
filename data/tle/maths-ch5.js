
enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch5",
    titre: "Chapitre 5 : Étude complète d’une fonction",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch5-l1",
        titre: "Leçon 1 : Organiser l’étude d’une fonction",
        blocs: [
          {
            type: "introduction",
            titre: "Rassembler les outils",
            texte: "Étudier une fonction consiste à décrire son comportement et à construire une représentation de sa courbe. On utilise notamment l’ensemble de définition, les limites, la dérivée et les variations."
          },
          {
            type: "methode",
            titre: "Les étapes principales",
            texte: "1. Déterminer l’ensemble de définition.\n2. Rechercher, si cela est utile, une symétrie de la courbe.\n3. Calculer les limites aux bornes de l’ensemble de définition et chercher les asymptotes éventuelles.\n4. Calculer la dérivée, étudier son signe et dresser le tableau de variations.\n5. Chercher des points utiles : intersections avec les axes, tangentes ou autres points demandés.\n6. Tracer la courbe en tenant compte de tous les résultats.\n\nL’ordre peut être adapté à la fonction ou aux questions de l’exercice."
          },
          {
            type: "definition",
            titre: "Fonctions paires et impaires",
            texte: "Supposons que l’ensemble de définition soit symétrique par rapport à 0 : si x y appartient, alors −x aussi.\n\n• f est paire si f(−x) = f(x) pour tout x de son domaine. Sa courbe est symétrique par rapport à l’axe des ordonnées.\n• f est impaire si f(−x) = −f(x) pour tout x de son domaine. Sa courbe est symétrique par rapport à l’origine du repère."
          },
          {
            type: "exemple",
            titre: "Utiliser une symétrie",
            texte: "Pour f(x) = x², définie sur ℝ, on a f(−x) = (−x)² = x² = f(x). La fonction est paire : sa courbe est symétrique par rapport à l’axe des ordonnées.\n\nOn peut étudier f sur [0 ; +∞[, puis utiliser cette symétrie pour compléter le tracé."
          },
          {
            type: "remarque",
            titre: "Attention au domaine",
            texte: "Avant de chercher si une fonction est paire ou impaire, il faut vérifier que son domaine est symétrique par rapport à 0. Par exemple, [0 ; +∞[ ne l’est pas."
          }
        ]
      },

      {
        id: "tle-maths-ch5-l2",
        titre: "Leçon 2 : Limites, asymptotes et points utiles",
        blocs: [
          {
            type: "methode",
            titre: "Étudier les limites aux bornes",
            texte: "Pour chaque intervalle du domaine, on examine le comportement de f à ses bornes : à l’infini et au voisinage des valeurs finies exclues si elles existent.\n\nSi f(x) tend vers une limite infinie lorsque x tend vers a au moins d’un côté, x = a est une asymptote verticale. Si f(x) tend vers un réel L en +∞ ou en −∞, y = L est une asymptote horizontale à l’infini considéré."
          },
          {
            type: "methode",
            titre: "Rechercher une asymptote oblique",
            texte: "Pour vérifier si y = ax + b, avec a ≠ 0, est une asymptote en +∞ ou en −∞, on calcule la limite de f(x) − (ax + b). Si cette limite vaut 0, la droite est une asymptote à l’infini considéré.\n\nLe signe de cette différence permet ensuite de placer la courbe au-dessus ou au-dessous de la droite."
          },
          {
            type: "methode",
            titre: "Trouver les intersections avec les axes",
            texte: "• Avec l’axe des ordonnées : si 0 appartient au domaine, le point est (0 ; f(0)).\n• Avec l’axe des abscisses : on résout f(x) = 0 dans le domaine. Chaque solution a donne un point (a ; 0)."
          },
          {
            type: "exemple",
            titre: "Un quotient simple",
            texte: "Soit f(x) = (x + 1)/(x − 1), définie sur ℝ privé de 1.\n\nOn écrit f(x) = 1 + 2/(x − 1). Aux deux infinis, f(x) tend vers 1 : y = 1 est une asymptote horizontale.\n\nEn 1, les limites à gauche et à droite sont respectivement −∞ et +∞ : x = 1 est une asymptote verticale.\n\nEnfin, f(0) = −1 et f(x) = 0 équivaut à x + 1 = 0, donc x = −1. La courbe passe par (0 ; −1) et (−1 ; 0)."
          }
        ]
      },

      {
        id: "tle-maths-ch5-l3",
        titre: "Leçon 3 : Exemple complet avec un polynôme",
        blocs: [
          {
            type: "exemple",
            titre: "Étudier f(x) = x² − 4x + 3",
            texte: "1. Domaine : f est un polynôme, donc Df = ℝ.\n\n2. Limites : le terme dominant est x². Ainsi f(x) → +∞ lorsque x → −∞ et lorsque x → +∞.\n\n3. Dérivée : f'(x) = 2x − 4 = 2(x − 2). Elle est négative pour x < 2, nulle en 2 et positive pour x > 2.\n\n4. Variations : f décroît sur ]−∞ ; 2], puis croît sur [2 ; +∞[. Son minimum est f(2) = −1.\n\n5. Intersections : f(0) = 3. De plus, f(x) = (x − 1)(x − 3), donc les zéros sont 1 et 3. La courbe passe par (0 ; 3), (1 ; 0) et (3 ; 0).\n\n6. Forme utile : f(x) = (x − 2)² − 1. La courbe est une parabole de sommet (2 ; −1), symétrique par rapport à la droite x = 2."
          },
          {
            type: "tableau",
            titre: "Bilan des variations",
            entetes: ["x", "De −∞ à 2", "2", "De 2 à +∞"],
            lignes: [
              ["Signe de f'(x)", "−", "0", "+"],
              ["Comportement de f", "Décroît depuis +∞", "Minimum : −1", "Croît vers +∞"]
            ]
          },
          {
            type: "schema",
            titre: "Parabole de sommet (2 ; −1)",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='20' y1='155' x2='300' y2='155' stroke='black' stroke-width='2'/><line x1='60' y1='200' x2='60' y2='20' stroke='black' stroke-width='2'/><line x1='160' y1='30' x2='160' y2='200' stroke='#888' stroke-dasharray='5 4'/><path d='M60 35 Q160 275 260 35' fill='none' stroke='#1769aa' stroke-width='3'/><circle cx='110' cy='155' r='4' fill='#c62828'/><circle cx='210' cy='155' r='4' fill='#c62828'/><circle cx='160' cy='185' r='4' fill='#c62828'/><circle cx='60' cy='35' r='4' fill='#c62828'/><text x='45' y='171' font-size='13'>0</text><text x='106' y='172' font-size='13'>1</text><text x='156' y='172' font-size='13'>2</text><text x='206' y='172' font-size='13'>3</text><text x='168' y='201' font-size='13'>S(2 ; −1)</text><text x='65' y='30' font-size='13'>(0 ; 3)</text><text x='295' y='150' font-size='13'>x</text><text x='67' y='18' font-size='13'>y</text></svg>",
            legende: "La courbe coupe l’axe des abscisses en 1 et 3. La droite en pointillés x = 2 est son axe de symétrie."
          },
          {
            type: "remarque",
            titre: "Signe de la fonction et signe de la dérivée",
            texte: "Le signe de f indique si la courbe est au-dessus ou au-dessous de l’axe des abscisses. Le signe de f' indique si la fonction croît ou décroît. Ce sont deux informations différentes."
          }
        ]
      },

      {
        id: "tle-maths-ch5-l4",
        titre: "Leçon 4 : Exemple complet avec une fonction rationnelle",
        blocs: [
          {
            type: "exemple",
            titre: "Étudier f(x) = x + 1 + 1/x",
            texte: "1. Domaine : Df = ]−∞ ; 0[ ∪ ]0 ; +∞[.\n\n2. Limites en 0 : lorsque x → 0⁻, 1/x → −∞, donc f(x) → −∞. Lorsque x → 0⁺, f(x) → +∞. La droite x = 0 est une asymptote verticale.\n\n3. Limites à l’infini : lorsque x → +∞, f(x) → +∞ ; lorsque x → −∞, f(x) → −∞. De plus, f(x) − (x + 1) = 1/x → 0 aux deux infinis. La droite y = x + 1 est donc une asymptote oblique aux deux infinis.\n\n4. Position : 1/x < 0 si x < 0 et 1/x > 0 si x > 0. La courbe est sous l’asymptote oblique pour x < 0 et au-dessus pour x > 0."
          },
          {
            type: "exemple",
            titre: "Dérivée et variations",
            texte: "Pour x ≠ 0 :\n\nf'(x) = 1 − 1/x² = (x² − 1)/x² = (x − 1)(x + 1)/x².\n\nComme x² > 0, le signe de f' est celui de (x − 1)(x + 1).\n\n• Sur ]−∞ ; −1[, f' > 0 : f croît.\n• Sur ]−1 ; 0[, f' < 0 : f décroît.\n• Sur ]0 ; 1[, f' < 0 : f décroît.\n• Sur ]1 ; +∞[, f' > 0 : f croît.\n\nOn calcule f(−1) = −1 et f(1) = 3. Sur la branche de gauche, −1 est un maximum ; sur la branche de droite, 3 est un minimum."
          },
          {
            type: "tableau",
            titre: "Bilan de l’étude",
            entetes: ["Intervalle ou point", "]−∞ ; −1[", "−1", "]−1 ; 0[", "]0 ; 1[", "1", "]1 ; +∞["],
            lignes: [
              ["Signe de f'", "+", "0", "−", "−", "0", "+"],
              ["Variation de f", "Croît", "f(−1) = −1", "Décroît", "Décroît", "f(1) = 3", "Croît"]
            ]
          },
          {
            type: "remarque",
            titre: "Séparer les branches",
            texte: "Le tableau comporte une coupure en 0, valeur interdite. On ne doit pas relier les deux branches de la courbe à travers cette valeur."
          },
          {
            type: "methode",
            titre: "Vérifier avant de tracer",
            texte: "Pour construire le graphique : tracer les axes et les asymptotes, placer les extremums et quelques points, puis dessiner chaque branche en respectant les limites, les variations et la position par rapport aux asymptotes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’ensemble de définition de f(x) = (x + 2)/(x − 3).",
        correction: "Le dénominateur doit être non nul : x − 3 ≠ 0, donc x ≠ 3.\nAinsi Df = ℝ privé de 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La fonction f(x) = x² + 4 est-elle paire ?",
        correction: "Son domaine ℝ est symétrique par rapport à 0. Pour tout x réel, f(−x) = (−x)² + 4 = x² + 4 = f(x).\nLa fonction est donc paire."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer les intersections de la courbe de f(x) = 2x − 4 avec les axes.",
        correction: "Sur l’axe des ordonnées, x = 0 et f(0) = −4 : le point est (0 ; −4).\nSur l’axe des abscisses, f(x) = 0 donne 2x − 4 = 0, donc x = 2 : le point est (2 ; 0)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudier les variations de f(x) = x² − 2x sur ℝ.",
        correction: "f'(x) = 2x − 2 = 2(x − 1). La dérivée est négative pour x < 1 et positive pour x > 1.\nDonc f décroît sur ]−∞ ; 1] puis croît sur [1 ; +∞[. Son minimum est f(1) = −1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les asymptotes verticale et horizontale de f(x) = 3 + 2/(x − 1).",
        correction: "Lorsque x tend vers 1 par la gauche, f(x) tend vers −∞ ; par la droite, elle tend vers +∞. Donc x = 1 est une asymptote verticale.\n\nAux deux infinis, 2/(x − 1) tend vers 0, donc f(x) tend vers 3. La droite y = 3 est une asymptote horizontale aux deux infinis."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour f(x) = x − 2 + 1/x, déterminer une asymptote oblique et la position de la courbe par rapport à celle-ci.",
        correction: "Pour x ≠ 0, f(x) − (x − 2) = 1/x. Cette différence tend vers 0 aux deux infinis : y = x − 2 est une asymptote oblique en +∞ et en −∞.\n\nSi x > 0, 1/x > 0 : la courbe est au-dessus de la droite. Si x < 0, elle est au-dessous."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudier le signe de f(x) = (x − 2)(x + 1). En déduire les positions de la courbe par rapport à l’axe des abscisses.",
        correction: "Les zéros sont −1 et 2. Le produit est positif sur ]−∞ ; −1[ et sur ]2 ; +∞[, négatif sur ]−1 ; 2[, et nul aux deux bornes.\nLa courbe est au-dessus de l’axe là où f est positive, au-dessous là où f est négative, et coupe l’axe en (−1 ; 0) et (2 ; 0)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = x² − 4x + 3. Déterminer l’équation de sa tangente au point d’abscisse 0.",
        correction: "f'(x) = 2x − 4, donc f'(0) = −4. De plus, f(0) = 3.\nL’équation de la tangente est y = −4(x − 0) + 3, soit y = −4x + 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Étudier les variations de f(x) = (x + 2)/(x − 1), puis déterminer ses limites aux bornes de son domaine.",
        correction: "Le domaine est ℝ privé de 1.\n\nf'(x) = [(x − 1) − (x + 2)]/(x − 1)² = −3/(x − 1)² < 0. La fonction est strictement décroissante sur ]−∞ ; 1[ et sur ]1 ; +∞[.\n\nComme f(x) = 1 + 3/(x − 1), sa limite vaut 1 aux deux infinis. En 1, la limite à gauche est −∞ et celle à droite est +∞."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Étudier la fonction f(x) = −x² + 4x : domaine, limites, variations et intersections avec les axes.",
        correction: "Le domaine est ℝ. Le terme dominant est −x², donc f(x) tend vers −∞ aux deux infinis.\n\nf'(x) = −2x + 4 = −2(x − 2). Elle est positive avant 2 et négative après 2. Ainsi f croît sur ]−∞ ; 2], puis décroît sur [2 ; +∞[. Son maximum est f(2) = 4.\n\nf(x) = x(4 − x), donc les zéros sont 0 et 4. La courbe coupe l’axe des abscisses en (0 ; 0) et (4 ; 0), et l’axe des ordonnées en (0 ; 0)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x + 4/x sur ]0 ; +∞[. Calculer sa dérivée et déterminer son minimum sur cet intervalle.",
        correction: "f'(x) = 1 − 4/x² = (x − 2)(x + 2)/x².\n\nSur ]0 ; +∞[, x² et x + 2 sont positifs. Le signe de f' est donc celui de x − 2 : négatif avant 2, positif après 2.\n\nf décroît sur ]0 ; 2], puis croît sur [2 ; +∞[. Son minimum sur ]0 ; +∞[ est f(2) = 2 + 4/2 = 4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x + 1 + 1/x, définie pour x ≠ 0. Montrer que sa courbe ne coupe pas l’axe des abscisses.",
        correction: "Pour x ≠ 0, f(x) = (x² + x + 1)/x. Un quotient est nul si son numérateur est nul et son dénominateur non nul.\n\nLe discriminant de x² + x + 1 est Δ = 1 − 4 = −3. Il est négatif : ce trinôme n’a aucune racine réelle.\n\nL’équation f(x) = 0 n’a donc pas de solution et la courbe ne coupe pas l’axe des abscisses."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x³ − 3x. Montrer que f est impaire, puis déterminer les points où sa courbe coupe l’axe des abscisses.",
        correction: "Le domaine ℝ est symétrique par rapport à 0. Pour tout x, f(−x) = (−x)³ − 3(−x) = −x³ + 3x = −f(x). Donc f est impaire.\n\nPour les intersections avec l’axe des abscisses, on résout f(x) = 0 :\nx³ − 3x = x(x² − 3) = 0.\nLes solutions sont x = 0, x = −√3 et x = √3.\nLes points sont (−√3 ; 0), (0 ; 0) et (√3 ; 0)."
      }
    ]
  }
]);
