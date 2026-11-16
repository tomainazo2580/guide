enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch6",
    titre: "Chapitre 6 : Les puissances",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch6-lecon1",
        titre: "1. Comprendre une puissance",
        blocs: [
          {
            type: "texte",
            titre: "Une écriture plus courte",
            texte: "Une puissance permet d’écrire plus simplement une multiplication dans laquelle le même nombre est répété plusieurs fois."
          },
          {
            type: "definition",
            titre: "Base et exposant",
            texte: "Dans 2³, le nombre 2 est la base et le nombre 3 est l’exposant. L’exposant indique ici combien de fois la base apparaît comme facteur : 2³ = 2 × 2 × 2 = 8."
          },
          {
            type: "exemple",
            titre: "Lire et calculer",
            texte: "3⁴ se lit « trois puissance quatre » et signifie 3 × 3 × 3 × 3 = 81. Attention : 3⁴ n’est pas égal à 3 × 4."
          },
          {
            type: "exemple",
            titre: "Exposants 2 et 3",
            texte: "5² se lit « cinq au carré » et vaut 5 × 5 = 25. 5³ se lit « cinq au cube » et vaut 5 × 5 × 5 = 125."
          },
          {
            type: "remarque",
            titre: "Puissance 1",
            texte: "Pour tout nombre a, a¹ = a. Par exemple : 7¹ = 7."
          }
        ]
      },

      {
        id: "maths5-ch6-lecon2",
        titre: "2. Puissances de 10",
        blocs: [
          {
            type: "texte",
            titre: "Multiplier des 10",
            texte: "10² = 10 × 10 = 100. De même, 10³ = 10 × 10 × 10 = 1 000."
          },
          {
            type: "tableau",
            titre: "Quelques puissances de 10",
            entetes: ["Puissance", "Écriture décimale"],
            lignes: [
              ["10¹", "10"],
              ["10²", "100"],
              ["10³", "1 000"],
              ["10⁴", "10 000"],
              ["10⁵", "100 000"]
            ]
          },
          {
            type: "regle",
            titre: "Compter les zéros",
            texte: "Pour un exposant entier positif, 10 élevé à cet exposant s’écrit avec un 1 suivi d’autant de zéros que l’indique l’exposant. Par exemple, 10⁴ = 10 000."
          },
          {
            type: "exemple",
            titre: "Utiliser les puissances de 10",
            texte: "4 × 10³ = 4 × 1 000 = 4 000. On peut aussi écrire : 3 000 + 200 = 3 × 10³ + 2 × 10²."
          }
        ]
      },

      {
        id: "maths5-ch6-lecon3",
        titre: "3. Exposant zéro et exposants négatifs",
        blocs: [
          {
            type: "regle",
            titre: "Exposant zéro",
            texte: "Pour tout nombre a différent de zéro, a⁰ = 1. Par exemple : 5⁰ = 1 et (−3)⁰ = 1."
          },
          {
            type: "remarque",
            titre: "Attention à la base",
            texte: "La règle a⁰ = 1 est donnée ici pour a différent de zéro. On n’utilise pas 0⁰ dans ce chapitre."
          },
          {
            type: "definition",
            titre: "Exposant négatif",
            texte: "Pour a différent de zéro et n entier positif, a⁻ⁿ = 1/aⁿ. Une puissance d’exposant négatif est donc l’inverse de la puissance correspondante d’exposant positif."
          },
          {
            type: "exemple",
            titre: "Exemples",
            texte: "2⁻³ = 1/2³ = 1/8. De même, 5⁻² = 1/5² = 1/25."
          },
          {
            type: "exemple",
            titre: "Puissances négatives de 10",
            texte: "10⁻¹ = 1/10 = 0,1 ; 10⁻² = 1/100 = 0,01 ; 10⁻³ = 1/1 000 = 0,001."
          },
          {
            type: "remarque",
            titre: "Zéro et exposant négatif",
            texte: "Une puissance telle que 0⁻² n’est pas définie : elle demanderait de calculer 1/0², donc de diviser par zéro."
          }
        ]
      },

      {
        id: "maths5-ch6-lecon4",
        titre: "4. Puissances et nombres négatifs",
        blocs: [
          {
            type: "texte",
            titre: "Le rôle des parenthèses",
            texte: "Les parenthèses indiquent si le signe moins fait partie de la base. Elles sont très importantes lorsque l’on élève un nombre négatif à une puissance."
          },
          {
            type: "exemple",
            titre: "Avec parenthèses",
            texte: "(−3)² = (−3) × (−3) = 9. Ici, la base est −3. Les deux facteurs négatifs donnent un produit positif."
          },
          {
            type: "exemple",
            titre: "Sans parenthèses",
            texte: "−3² = −(3²) = −9. La puissance porte sur 3 ; on prend ensuite l’opposé du résultat. Ainsi, (−3)² et −3² ne sont pas égaux."
          },
          {
            type: "regle",
            titre: "Exposant pair ou impair",
            texte: "Pour une base négative et un exposant entier positif : si l’exposant est pair, le résultat est positif ; s’il est impair, le résultat est négatif."
          },
          {
            type: "exemple",
            titre: "Comparer deux cas",
            texte: "(−2)⁴ = (−2) × (−2) × (−2) × (−2) = 16. En revanche, (−2)³ = (−2) × (−2) × (−2) = −8."
          }
        ]
      },

      {
        id: "maths5-ch6-lecon5",
        titre: "5. Multiplier et diviser des puissances",
        blocs: [
          {
            type: "texte",
            titre: "Même base",
            texte: "Les règles suivantes permettent de simplifier certains calculs lorsque les puissances ont la même base."
          },
          {
            type: "regle",
            titre: "Produit",
            texte: "Pour une même base a, on additionne les exposants : aᵐ × aⁿ = aᵐ⁺ⁿ. Si un exposant est négatif, la base doit être différente de zéro."
          },
          {
            type: "exemple",
            titre: "Pourquoi additionner ?",
            texte: "2³ × 2² = (2 × 2 × 2) × (2 × 2). Il y a en tout cinq facteurs égaux à 2 : le résultat est 2⁵ = 32."
          },
          {
            type: "regle",
            titre: "Quotient",
            texte: "Pour une même base a non nulle, on soustrait les exposants : aᵐ ÷ aⁿ = aᵐ⁻ⁿ."
          },
          {
            type: "exemple",
            titre: "Un quotient",
            texte: "5⁴ ÷ 5² = 5⁴⁻² = 5² = 25. La base 5 est bien différente de zéro."
          },
          {
            type: "remarque",
            titre: "Pas de règle semblable pour une somme",
            texte: "Attention : on ne peut pas écrire en général aᵐ + aⁿ = aᵐ⁺ⁿ. Par exemple, 2² + 2³ = 4 + 8 = 12, tandis que 2⁵ = 32."
          }
        ]
      },

      {
        id: "maths5-ch6-lecon6",
        titre: "6. Puissance d’une puissance et priorités",
        blocs: [
          {
            type: "regle",
            titre: "Puissance d’une puissance",
            texte: "Pour élever une puissance à une autre puissance, on multiplie les exposants : (aᵐ)ⁿ = aᵐⁿ, lorsque les expressions sont définies. Pour les exposants négatifs, on utilise une base non nulle."
          },
          {
            type: "exemple",
            titre: "Comprendre la règle",
            texte: "(2³)² = 2³ × 2³ = 2⁶ = 64. Les exposants se multiplient : 3 × 2 = 6."
          },
          {
            type: "regle",
            titre: "Priorité des puissances",
            texte: "Dans un calcul, on effectue les puissances avant les multiplications, divisions, additions et soustractions. Les parenthèses permettent de modifier l’ordre."
          },
          {
            type: "exemple",
            titre: "Avec et sans parenthèses",
            texte: "3 + 2² × 4 = 3 + 4 × 4 = 3 + 16 = 19. En revanche, (3 + 2)² = 5² = 25."
          },
          {
            type: "methode",
            titre: "Organiser son calcul",
            texte: "1. Calcule les expressions entre parenthèses, en respectant les priorités à l’intérieur. 2. Calcule les puissances. 3. Effectue les multiplications et divisions de gauche à droite. 4. Termine par les additions et soustractions de gauche à droite."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans 4³, quelle est la base ? Quel est l’exposant ?",
        correction: "La base est 4 et l’exposant est 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris sous forme d’une puissance : 5 × 5 × 5 × 5.",
        correction: "5 × 5 × 5 × 5 = 5⁴."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule : a) 3² ; b) 2³ ; c) 10².",
        correction: "a) 3² = 3 × 3 = 9. b) 2³ = 2 × 2 × 2 = 8. c) 10² = 100."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris en chiffres : a) 10³ ; b) 10⁴.",
        correction: "a) 10³ = 1 000. b) 10⁴ = 10 000."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : a) (−2)² ; b) (−2)³.",
        correction: "a) (−2)² = (−2) × (−2) = 4. b) (−2)³ = (−2) × (−2) × (−2) = −8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : a) 7⁰ ; b) 10⁻¹ ; c) 10⁻².",
        correction: "a) 7⁰ = 1. b) 10⁻¹ = 1/10 = 0,1. c) 10⁻² = 1/100 = 0,01."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris sous forme d’une seule puissance de 3 : 3² × 3⁴.",
        correction: "3² × 3⁴ = 3²⁺⁴ = 3⁶."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris sous forme d’une seule puissance de 5 : 5⁶ ÷ 5².",
        correction: "5⁶ ÷ 5² = 5⁶⁻² = 5⁴."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : a) (−4)² ; b) −4².",
        correction: "a) (−4)² = 16 : la base est −4. b) −4² = −(4²) = −16 : la base de la puissance est 4."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Écris sous forme d’une fraction : a) 2⁻² ; b) 3⁻².",
        correction: "a) 2⁻² = 1/2² = 1/4. b) 3⁻² = 1/3² = 1/9."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Simplifie puis calcule : (2²)³.",
        correction: "(2²)³ = 2²×³ = 2⁶ = 64. Les exposants se multiplient."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule en détaillant : 5 + 3² × 2.",
        correction: "5 + 3² × 2 = 5 + 9 × 2 = 5 + 18 = 23."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : 4 × 10³ + 2 × 10².",
        correction: "4 × 10³ + 2 × 10² = 4 × 1 000 + 2 × 100 = 4 000 + 200 = 4 200."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève écrit (3²)³ = 3⁵. Explique son erreur et corrige.",
        correction: "Pour une puissance élevée à une autre puissance, on multiplie les exposants : (3²)³ = 3²×³ = 3⁶ = 729. On n’additionne pas les exposants dans ce cas."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Compare 2³ + 2² et 2⁵. Sont-ils égaux ?",
        correction: "2³ + 2² = 8 + 4 = 12, tandis que 2⁵ = 32. Ils ne sont pas égaux : la règle d’addition des exposants concerne ici un produit, pas une somme."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Calcule : 20 − (−2)³ × 2.",
        correction: "20 − (−2)³ × 2 = 20 − (−8) × 2 = 20 − (−16) = 36."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Simplifie 10² ÷ 10⁵ sous forme d’une puissance de 10, puis écris le résultat sous forme décimale.",
        correction: "10² ÷ 10⁵ = 10²⁻⁵ = 10⁻³ = 1/1 000 = 0,001."
      }
    ]
  }
]);
