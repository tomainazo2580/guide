// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 15 : révision générale.
// Synthèse et exercices préparés par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-revision-generale",
    titre: "Chapitre 15 : Révision générale",
    premium: false,
    guide: true,

    lecons: [
      {
        id: "m3-revision-nombres",
        titre: "Nombres et calculs",
        blocs: [
          {
            type: "regle",
            titre: "Classer les nombres",
            texte: "Les ensembles étudiés sont emboîtés :\n\nℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ.\n\n• ℕ : entiers naturels, comme 0 et 5.\n• ℤ : entiers relatifs, comme -3.\n• D : nombres décimaux, comme 1,25.\n• ℚ : nombres rationnels, qui s'écrivent comme quotient de deux entiers avec un dénominateur non nul, comme 2/3.\n• ℝ comprend les rationnels et les irrationnels, comme √2.\n\nAttention : √9 = 3 est rationnel, mais √2 est irrationnel."
          },
          {
            type: "methode",
            titre: "Fractions et priorités",
            texte: "Pour additionner des fractions, on les met au même dénominateur :\n1/2 + 1/3 = 3/6 + 2/6 = 5/6.\n\nPour multiplier, on multiplie les numérateurs et les dénominateurs :\n2/3 × 3/4 = 6/12 = 1/2.\n\nPour diviser par une fraction non nulle, on multiplie par son inverse :\n2/3 ÷ 4/5 = 2/3 × 5/4 = 5/6.\n\nDans une expression, on traite les parenthèses, puis les puissances et racines, puis les multiplications et divisions, enfin les additions et soustractions."
          },
          {
            type: "regle",
            titre: "Puissances de 10",
            texte: "Pour des exposants entiers :\n10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ.\n10ᵃ ÷ 10ᵇ = 10ᵃ⁻ᵇ.\n\nExemples : 10³ × 10⁻¹ = 10² et 10² ÷ 10⁵ = 10⁻³.\n\nEn notation scientifique, un nombre positif non nul s'écrit a × 10ⁿ avec 1 ≤ a < 10.\nExemple : 0,00045 = 4,5 × 10⁻⁴."
          }
        ]
      },
      {
        id: "m3-revision-algebre",
        titre: "Proportionnalité, fonctions et équations",
        blocs: [
          {
            type: "methode",
            titre: "Pourcentages",
            texte: "Pour calculer t % d'une quantité, on la multiplie par t/100.\n\nUne réduction de 20 % sur 10 000 Ar vaut 2 000 Ar. Le prix final est 8 000 Ar : on peut aussi le calculer directement par 10 000 × 0,80."
          },
          {
            type: "regle",
            titre: "Fonctions",
            texte: "Une fonction linéaire s'écrit f(x) = ax : elle traduit une proportionnalité et sa droite passe par l'origine.\n\nUne fonction affine s'écrit f(x) = ax + b. Sa droite coupe l'axe vertical au point (0 ; b).\n\nElle est linéaire lorsque b = 0. Si b ≠ 0, elle ne traduit pas une proportionnalité entre x et f(x)."
          },
          {
            type: "regle",
            titre: "Développer et factoriser",
            texte: "Distributivité : a(b + c) = ab + ac.\n\nIdentités remarquables :\n(a + b)² = a² + 2ab + b².\n(a - b)² = a² - 2ab + b².\n(a + b)(a - b) = a² - b².\n\nOn peut lire ces égalités de gauche à droite pour développer, ou de droite à gauche pour factoriser."
          },
          {
            type: "methode",
            titre: "Résoudre une équation",
            texte: "Pour résoudre 3x + 2 = 11 :\n\nOn soustrait 2 aux deux membres : 3x = 9.\nOn divise les deux membres par 3 : x = 3.\n\nVérification : 3 × 3 + 2 = 11.\n\nDans un problème, précise ce que représente x et vérifie que la solution convient à la situation."
          }
        ]
      },
      {
        id: "m3-revision-geometrie",
        titre: "Géométrie et grandeurs",
        blocs: [
          {
            type: "regle",
            titre: "Thalès",
            texte: "Si A, M, B sont alignés, A, N, C sont alignés et (MN) est parallèle à (BC), alors :\n\nAM/AB = AN/AC = MN/BC, lorsque les dénominateurs sont non nuls.\n\nPour la réciproque, vérifie les alignements, la position des points et l'égalité des rapports avant de conclure au parallélisme."
          },
          {
            type: "regle",
            titre: "Cercle et polygone régulier",
            texte: "Un tour complet mesure 360°.\n\nDans un polygone régulier à n côtés inscrit dans un cercle, l'angle au centre entre deux sommets voisins mesure 360° ÷ n.\n\nPour un hexagone régulier inscrit, cet angle mesure 60° et chaque côté a la longueur du rayon."
          },
          {
            type: "tableau",
            titre: "Quelques formules",
            entetes: ["Figure ou solide", "Formule"],
            lignes: [
              ["Aire d'un triangle", "base × hauteur correspondante ÷ 2"],
              ["Aire d'un disque", "πr²"],
              ["Volume d'un cylindre", "πr²h"],
              ["Volume d'une pyramide", "aire de la base × hauteur ÷ 3"],
              ["Volume d'un cône", "πr²h ÷ 3"],
              ["Volume d'une boule", "4πr³ ÷ 3"]
            ]
          },
          {
            type: "remarque",
            titre: "Unités et coefficient",
            texte: "Convertis les longueurs dans une même unité avant d'utiliser une formule. Une aire s'exprime en unités carrées et un volume en unités cubiques.\n\nDans un agrandissement ou une réduction de coefficient k :\n• les longueurs sont multipliées par k ;\n• les aires par k² ;\n• les volumes par k³ ;\n• les angles gardent leur mesure."
          }
        ]
      },
      {
        id: "m3-revision-donnees",
        titre: "Statistiques et probabilités",
        blocs: [
          {
            type: "regle",
            titre: "Résumer une série",
            texte: "• Fréquence = effectif concerné ÷ effectif total.\n• Moyenne = somme des valeurs ÷ nombre de valeurs.\n• Médiane : valeur centrale de la série rangée, ou moyenne des deux valeurs centrales selon la convention utilisée ici.\n• Mode : valeur d'effectif maximal.\n• Étendue = valeur maximale - valeur minimale."
          },
          {
            type: "regle",
            titre: "Calculer une probabilité",
            texte: "Si les issues sont équiprobables :\n\nP(A) = nombre d'issues favorables ÷ nombre total d'issues.\n\nUne probabilité est comprise entre 0 et 1. La probabilité de l'événement impossible est 0 ; celle de l'événement certain est 1.\n\nPour l'événement contraire : P(non A) = 1 - P(A)."
          },
          {
            type: "methode",
            titre: "Avant de rendre ta copie",
            texte: "Relis chaque question et vérifie :\n\n• Ai-je justifié la propriété utilisée ?\n• Mes calculs et mes signes sont-ils corrects ?\n• Ai-je écrit les unités ?\n• Ai-je distingué valeur exacte et valeur approchée ?\n• Mon résultat est-il cohérent avec l'énoncé ?"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "1. Donne le plus petit ensemble parmi ℕ, ℤ, D et ℚ auquel appartient -2,5.\n2. Calcule √36.\n3. Écris 0,0007 en notation scientifique.",
        correction: "1. -2,5 est décimal et n'est pas entier. Le plus petit ensemble proposé est D.\n\n2. √36 = 6, car 6² = 36.\n\n3. 0,0007 = 7 × 10⁻⁴. Le coefficient 7 est compris entre 1 inclus et 10 exclu."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule et simplifie :\n\n1. 1/2 + 1/4\n2. 2/3 × 3/5\n3. 10³ ÷ 10",
        correction: "1. 1/2 + 1/4 = 2/4 + 1/4 = 3/4.\n\n2. 2/3 × 3/5 = 6/15 = 2/5.\n\n3. 10³ ÷ 10 = 10³ ÷ 10¹ = 10² = 100."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un article coûte 40 000 Ar. Son prix est réduit de 15 %.\n\n1. Calcule le montant de la réduction.\n2. Calcule le prix final.",
        correction: "1. Réduction : 40 000 × 15/100 = 6 000 Ar.\n\n2. Prix final : 40 000 - 6 000 = 34 000 Ar.\n\nVérification : après une réduction de 15 %, on paie 85 % du prix ; 40 000 × 0,85 = 34 000 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = 2x + 3.\n\n1. Calcule f(4).\n2. Trouve l'antécédent de 13.\n3. Cette fonction est-elle linéaire ?",
        correction: "1. f(4) = 2 × 4 + 3 = 11.\n\n2. On résout 2x + 3 = 13. Donc 2x = 10, puis x = 5.\nVérification : f(5) = 13.\n\n3. Non. Elle est affine, mais le terme constant vaut 3 et non 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "1. Développe (x + 3)².\n2. Factorise x² - 16.\n3. Résous 3x - 4 = 11 et vérifie.",
        correction: "1. (x + 3)² = x² + 2 × x × 3 + 3² = x² + 6x + 9.\n\n2. x² - 16 = x² - 4² = (x + 4)(x - 4).\n\n3. On ajoute 4 aux deux membres : 3x = 15. Puis on divise par 3 : x = 5.\nVérification : 3 × 5 - 4 = 11."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un triangle ABC, M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC). On donne AM = 3 cm, AB = 9 cm et AC = 12 cm.\n\n1. Écris l'égalité de rapports utile.\n2. Calcule AN.",
        correction: "1. Les points sont alignés et les droites (MN) et (BC) sont parallèles. D'après le théorème de Thalès :\nAM/AB = AN/AC.\n\n2. En remplaçant : 3/9 = AN/12.\nDonc AN = 12 × 3/9 = 4 cm.\n\nVérification : le rapport est 1/3, et 4 est bien le tiers de 12."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un réservoir cylindrique a un rayon intérieur de 1 m et une hauteur intérieure de 3 m.\n\n1. Calcule son volume exact en m³.\n2. Donne une valeur approchée en litres avec π ≈ 3,14.\n3. Une maquette du réservoir est réalisée avec un coefficient de réduction de 1/10. Par combien son volume est-il multiplié ?",
        correction: "1. Volume d'un cylindre : V = πr²h.\nV = π × 1² × 3 = 3π m³. C'est la valeur exacte.\n\n2. Avec π ≈ 3,14 : V ≈ 9,42 m³. Or 1 m³ = 1 000 L, donc la capacité est d'environ 9 420 L.\n\n3. Le facteur pour les volumes est k³ :\n(1/10)³ = 1/1 000.\nLe volume de la maquette est donc multiplié par 1/1 000, ou divisé par 1 000."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On relève le nombre de livres lus par 10 élèves :\n\n• 0 livre : 2 élèves ;\n• 1 livre : 3 élèves ;\n• 2 livres : 4 élèves ;\n• 3 livres : 1 élève.\n\nOn choisit ensuite un de ces élèves au hasard ; tous ont la même chance d'être choisis.\n\n1. Calcule le nombre moyen de livres lus.\n2. Détermine la médiane en prenant la moyenne des deux valeurs centrales.\n3. Calcule la probabilité que l'élève choisi ait lu au moins 2 livres.",
        correction: "1. Nombre total de livres :\n0 × 2 + 1 × 3 + 2 × 4 + 3 × 1 = 14.\nIl y a 10 élèves, donc la moyenne est 14 ÷ 10 = 1,4 livre par élève.\n\n2. Les valeurs rangées occupent les rangs suivants : 0 aux rangs 1 et 2 ; 1 aux rangs 3 à 5 ; 2 aux rangs 6 à 9 ; 3 au rang 10.\n\nLes deux valeurs centrales sont celles des rangs 5 et 6 : 1 et 2. La médiane retenue est (1 + 2) ÷ 2 = 1,5.\n\n3. « Au moins 2 livres » comprend 2 et 3 livres : 4 + 1 = 5 élèves.\nChaque élève ayant la même chance d'être choisi, la probabilité est 5/10 = 1/2."
      }
    ]
  }
]);
