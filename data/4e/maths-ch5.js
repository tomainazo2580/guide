// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 5 : Les puissances et leurs propriétés

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch5",
    titre: "Chapitre 5 : Les puissances et leurs propriétés",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch5-exposants-positifs",
        titre: "Comprendre les puissances",
        blocs: [
          {
            type: "definition",
            titre: "Puissance d'exposant entier positif",
            texte: "Une puissance permet d'écrire plus simplement un produit de facteurs identiques.\nPour un entier positif n, aⁿ désigne le produit de n facteurs égaux à a.\nExemple : 2⁴ = 2 × 2 × 2 × 2 = 16.\nDans 2⁴, 2 est la base et 4 est l'exposant."
          },
          {
            type: "exemple",
            titre: "Carré et cube",
            texte: "On lit 5² « cinq au carré » : 5² = 5 × 5 = 25.\nOn lit 3³ « trois au cube » : 3³ = 3 × 3 × 3 = 27."
          },
          {
            type: "regle",
            titre: "Exposants 1 et 0",
            texte: "Pour tout nombre a, a¹ = a.\nPour tout nombre a non nul, a⁰ = 1.\nExemples : 7¹ = 7 ; (−3)⁰ = 1.\nDans ce cours, on ne définit pas 0⁰."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Dans 3⁴, on multiplie quatre facteurs égaux à 3 : 3⁴ = 81.\nOn ne calcule pas 3 × 4, qui vaut 12."
          },
          {
            type: "regle",
            titre: "Puissance d'une base négative",
            texte: "Si la base est négative et l'exposant entier positif :\n• l'exposant pair donne un résultat positif ;\n• l'exposant impair donne un résultat négatif.\nExemples : (−2)⁴ = +16 et (−2)³ = −8."
          },
          {
            type: "remarque",
            titre: "Les parenthèses comptent",
            texte: "Dans (−2)², la base est −2 : (−2) × (−2) = 4.\nDans −2², la puissance porte seulement sur 2 : −2² = −(2²) = −4.\nIl faut donc bien regarder ce qui constitue la base."
          }
        ]
      },

      {
        id: "m4-ch5-exposants-negatifs",
        titre: "Utiliser les exposants négatifs",
        blocs: [
          {
            type: "definition",
            titre: "Exposant entier négatif",
            texte: "Pour un nombre a non nul et un entier positif n :\na⁻ⁿ = 1/aⁿ.\nAutrement dit, a⁻ⁿ est l'inverse de aⁿ."
          },
          {
            type: "exemple",
            titre: "Exemples",
            texte: "2⁻³ = 1/2³ = 1/8.\n10⁻² = 1/10² = 1/100 = 0,01.\n(−2)⁻² = 1/(−2)² = 1/4."
          },
          {
            type: "remarque",
            titre: "Une condition importante",
            texte: "La base doit être non nulle pour utiliser un exposant négatif : 0⁻² n'est pas défini, car cela conduirait à diviser par 0."
          },
          {
            type: "remarque",
            titre: "L'exposant négatif ne donne pas toujours un résultat négatif",
            texte: "Un exposant négatif indique que l'on prend un inverse. Il ne suffit pas à déterminer le signe du résultat.\nPar exemple : 2⁻² = 1/4, qui est positif, tandis que (−2)⁻³ = −1/8, qui est négatif."
          }
        ]
      },

      {
        id: "m4-ch5-proprietes",
        titre: "Calculer avec les puissances",
        blocs: [
          {
            type: "regle",
            titre: "Produit de puissances de même base",
            texte: "On additionne les exposants : aᵐ × aⁿ = aᵐ⁺ⁿ.\nExemple : 2³ × 2⁴ = 2⁷.\nSi un exposant est nul ou négatif, on suppose la base a non nulle."
          },
          {
            type: "regle",
            titre: "Quotient de puissances de même base",
            texte: "Pour a non nul, on soustrait les exposants : aᵐ ÷ aⁿ = aᵐ⁻ⁿ.\nExemples : 5⁶ ÷ 5² = 5⁴ ; 2² ÷ 2⁵ = 2⁻³."
          },
          {
            type: "regle",
            titre: "Puissance d'une puissance",
            texte: "On multiplie les exposants : (aᵐ)ⁿ = aᵐⁿ.\nExemple : (3²)⁴ = 3⁸.\nLorsque des exposants nuls ou négatifs interviennent, on suppose la base a non nulle."
          },
          {
            type: "regle",
            titre: "Puissance d'un produit",
            texte: "Pour un exposant entier n : (a × b)ⁿ = aⁿ × bⁿ.\nSi n est nul ou négatif, les bases a et b doivent être non nulles.\nExemple : (2 × 3)² = 2² × 3² = 4 × 9 = 36."
          },
          {
            type: "remarque",
            titre: "Attention aux sommes",
            texte: "On ne peut pas distribuer une puissance sur une somme de la même façon.\nPar exemple : (2 + 3)² = 5² = 25, tandis que 2² + 3² = 4 + 9 = 13."
          }
        ]
      },

      {
        id: "m4-ch5-puissances-dix",
        titre: "Les puissances de 10",
        blocs: [
          {
            type: "regle",
            titre: "Exposants positifs",
            texte: "Pour un entier positif n, 10ⁿ s'écrit avec 1 suivi de n zéros.\n10¹ = 10 ; 10² = 100 ; 10³ = 1 000 ; 10⁴ = 10 000."
          },
          {
            type: "regle",
            titre: "Exposants négatifs",
            texte: "Pour un entier positif n, 10⁻ⁿ = 1/10ⁿ.\n10⁻¹ = 0,1 ; 10⁻² = 0,01 ; 10⁻³ = 0,001."
          },
          {
            type: "methode",
            titre: "Multiplier ou diviser par une puissance de 10",
            texte: "Multiplier par 10, 100 ou 1 000 décale la virgule respectivement de 1, 2 ou 3 rangs vers la droite.\nDiviser par 10, 100 ou 1 000 la décale respectivement de 1, 2 ou 3 rangs vers la gauche.\nOn ajoute des zéros si nécessaire."
          },
          {
            type: "exemple",
            titre: "Exemples",
            texte: "3,45 × 10² = 3,45 × 100 = 345.\n3,45 × 10⁻² = 3,45 ÷ 100 = 0,0345."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Écris chaque puissance sous forme d'un produit, puis calcule :\n1. 3²\n2. 2⁴\n3. (−2)³",
        correction: "1. 3² = 3 × 3 = 9.\n2. 2⁴ = 2 × 2 × 2 × 2 = 16.\n3. (−2)³ = (−2) × (−2) × (−2) = 4 × (−2) = −8."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. 7¹\n2. 5⁰\n3. (−4)²\n4. (−4)³",
        correction: "1. 7¹ = 7.\n2. 5 est non nul, donc 5⁰ = 1.\n3. (−4)² = (−4) × (−4) = +16.\n4. (−4)³ = (+16) × (−4) = −64."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule :\n1. 10⁻¹\n2. 10⁻³\n3. 2⁻²\n4. (−2)⁻³",
        correction: "1. 10⁻¹ = 1/10 = 0,1.\n2. 10⁻³ = 1/1 000 = 0,001.\n3. 2⁻² = 1/2² = 1/4.\n4. (−2)⁻³ = 1/(−2)³ = 1/(−8) = −1/8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris chaque résultat sous la forme d'une seule puissance :\n1. 3² × 3⁴\n2. 5⁷ ÷ 5³\n3. (2³)²\n4. 10² ÷ 10⁵",
        correction: "1. 3² × 3⁴ = 3²⁺⁴ = 3⁶.\n2. 5⁷ ÷ 5³ = 5⁷⁻³ = 5⁴.\n3. (2³)² = 2³×² = 2⁶.\n4. 10² ÷ 10⁵ = 10²⁻⁵ = 10⁻³."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule :\n1. (−3)² et −3²\n2. (−2)⁴ et (−2)³\n3. 4⁰ et 0⁴",
        correction: "1. (−3)² = (−3) × (−3) = +9. Mais −3² = −(3²) = −9.\n2. (−2)⁴ = +16 car l'exposant est pair. (−2)³ = −8 car l'exposant est impair.\n3. 4⁰ = 1 car 4 est non nul. 0⁴ = 0 × 0 × 0 × 0 = 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule :\n1. 2,5 × 10³\n2. 48 × 10⁻²\n3. 0,36 × 10²",
        correction: "1. 2,5 × 10³ = 2,5 × 1 000 = 2 500.\n2. 48 × 10⁻² = 48 ÷ 100 = 0,48.\n3. 0,36 × 10² = 0,36 × 100 = 36."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Calcule en détaillant :\nA = 2³ + 3 × (−2)²\nB = (−2)³ × 2²\nC = 5² ÷ 5⁴",
        correction: "A : les puissances d'abord, puis la multiplication et l'addition.\nA = 8 + 3 × 4 = 8 + 12 = 20.\n\nB = (−8) × 4 = −32.\n\nC = 5²⁻⁴ = 5⁻² = 1/5² = 1/25."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une bactérie se divise en deux toutes les heures. On part d'une seule bactérie et on suppose que toutes les bactéries se divisent à chaque heure, sans disparition.\n1. Combien y en a-t-il après 1 heure ? Après 2 heures ?\n2. Écris sous forme de puissance le nombre de bactéries après 5 heures.\n3. Calcule ce nombre.",
        correction: "1. Après 1 heure : 1 × 2 = 2 bactéries. Après 2 heures : 2 × 2 = 4 bactéries.\n2. Le nombre est multiplié par 2 cinq fois : 2 × 2 × 2 × 2 × 2 = 2⁵.\n3. 2⁵ = 32. Il y a 32 bactéries après 5 heures, dans les conditions indiquées."
      }
    ]
  }
]);
