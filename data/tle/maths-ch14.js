enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch14",
    titre: "Chapitre 14 : Suites arithmétiques, géométriques et récurrence",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch14-l1",
        titre: "Leçon 1 : Suites arithmétiques",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "Une suite (uₙ) est arithmétique s’il existe une constante réelle r telle que, pour tout rang considéré :\n\nuₙ₊₁ = uₙ + r.\n\nLe nombre r est appelé la raison. On passe d’un terme au suivant en ajoutant toujours le même nombre."
          },
          {
            type: "methode",
            titre: "Calculer un terme",
            texte: "Si le premier terme est u₀, alors uₙ = u₀ + nr.\n\nPlus généralement, si n ≥ p : uₙ = uₚ + (n − p)r."
          },
          {
            type: "exemple",
            titre: "Termes d’une suite arithmétique",
            texte: "Soit u₀ = 4 et r = 3. Alors uₙ = 4 + 3n.\n\nAinsi u₁ = 7, u₂ = 10 et u₁₀ = 4 + 30 = 34."
          },
          {
            type: "texte",
            titre: "Variations",
            texte: "Comme uₙ₊₁ − uₙ = r :\n• si r > 0, la suite est strictement croissante ;\n• si r < 0, elle est strictement décroissante ;\n• si r = 0, elle est constante."
          },
          {
            type: "definition",
            titre: "Somme de termes consécutifs",
            texte: "La somme de termes consécutifs d’une suite arithmétique est :\n\nnombre de termes × (premier terme + dernier terme)/2.\n\nDe uₚ à uₙ inclus, avec n ≥ p, il y a n − p + 1 termes."
          },
          {
            type: "exemple",
            titre: "Calcul d’une somme",
            texte: "Avec u₀ = 4 et r = 3, on a u₁₀ = 34. La somme S = u₀ + u₁ + ... + u₁₀ contient 11 termes.\n\nS = 11 × (4 + 34)/2 = 209."
          }
        ]
      },

      {
        id: "tle-maths-ch14-l2",
        titre: "Leçon 2 : Suites géométriques",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "Une suite (uₙ) est géométrique s’il existe une constante réelle q telle que :\n\nuₙ₊₁ = quₙ.\n\nLe nombre q est appelé la raison. On passe d’un terme au suivant en multipliant toujours par q."
          },
          {
            type: "methode",
            titre: "Calculer un terme",
            texte: "Si le premier terme est u₀, alors uₙ = u₀qⁿ.\n\nPlus généralement, si n ≥ p : uₙ = uₚqⁿ⁻ᵖ. Pour n = p, le facteur vaut 1, même si q = 0."
          },
          {
            type: "exemple",
            titre: "Termes d’une suite géométrique",
            texte: "Soit u₀ = 5 et q = 2. Alors uₙ = 5 × 2ⁿ.\n\nOn obtient u₁ = 10, u₂ = 20 et u₄ = 80."
          },
          {
            type: "definition",
            titre: "Somme des puissances",
            texte: "Pour q ≠ 1 et un entier n ≥ 0 :\n\n1 + q + q² + ... + qⁿ = (1 − qⁿ⁺¹)/(1 − q).\n\nSi q = 1, la somme vaut n + 1."
          },
          {
            type: "methode",
            titre: "Somme des termes d’une suite géométrique",
            texte: "Pour q ≠ 1 :\n\nu₀ + u₁ + ... + uₙ = u₀(1 − qⁿ⁺¹)/(1 − q).\n\nOn compte n + 1 termes, de u₀ à uₙ inclus."
          },
          {
            type: "exemple",
            titre: "Calcul d’une somme",
            texte: "Pour u₀ = 5 et q = 2 :\nu₀ + u₁ + u₂ + u₃ = 5 + 10 + 20 + 40 = 75.\n\nAvec la formule : 5(1 − 2⁴)/(1 − 2) = 75."
          },
          {
            type: "remarque",
            titre: "Raison négative",
            texte: "Lorsque q < 0 et que u₀ ≠ 0, les signes des termes alternent. La suite n’est alors généralement ni croissante ni décroissante."
          }
        ]
      },

      {
        id: "tle-maths-ch14-l3",
        titre: "Leçon 3 : Démonstration par récurrence",
        blocs: [
          {
            type: "introduction",
            titre: "Prouver une propriété pour tous les rangs",
            texte: "Une démonstration par récurrence permet d’établir qu’une propriété P(n) est vraie pour tous les entiers à partir d’un rang donné."
          },
          {
            type: "methode",
            titre: "Les trois étapes",
            texte: "1. Initialisation : vérifier la propriété au premier rang.\n2. Hérédité : supposer la propriété vraie à un rang n quelconque, puis montrer qu’elle est vraie au rang n + 1.\n3. Conclusion : affirmer que la propriété est vraie pour tous les rangs à partir du rang initial."
          },
          {
            type: "exemple",
            titre: "Somme des premiers entiers",
            texte: "Montrons que 1 + 2 + ... + n = n(n + 1)/2 pour tout entier n ≥ 1.\n\nInitialisation : pour n = 1, les deux membres valent 1.\n\nHérédité : supposons la formule vraie au rang n. Alors :\n1 + ... + n + (n + 1) = n(n + 1)/2 + (n + 1)\n= (n + 1)(n + 2)/2.\nC’est la formule au rang n + 1.\n\nConclusion : la formule est vraie pour tout n ≥ 1."
          },
          {
            type: "exemple",
            titre: "Une propriété de suite",
            texte: "Soit u₀ = 2 et uₙ₊₁ = uₙ + 3. Montrons que uₙ = 2 + 3n pour tout n ≥ 0.\n\nInitialisation : u₀ = 2 = 2 + 3 × 0.\n\nHérédité : si uₙ = 2 + 3n, alors uₙ₊₁ = uₙ + 3 = 2 + 3n + 3 = 2 + 3(n + 1).\n\nLa formule est donc vraie pour tout n ≥ 0."
          },
          {
            type: "remarque",
            titre: "Ne pas oublier la transmission",
            texte: "Vérifier plusieurs premiers rangs ne suffit pas à prouver une propriété pour tous les entiers. Il faut démontrer l’hérédité."
          }
        ]
      },

      {
        id: "tle-maths-ch14-l4",
        titre: "Leçon 4 : Suites de la forme uₙ₊₁ = auₙ + b",
        blocs: [
          {
            type: "methode",
            titre: "Se ramener à une suite géométrique",
            texte: "Supposons uₙ₊₁ = auₙ + b, avec a ≠ 1.\n\n1. Chercher le point fixe ℓ vérifiant ℓ = aℓ + b, soit ℓ = b/(1 − a).\n2. Poser vₙ = uₙ − ℓ.\n3. Alors vₙ₊₁ = avₙ : (vₙ) est géométrique de raison a.\n4. En déduire uₙ = ℓ + (u₀ − ℓ)aⁿ."
          },
          {
            type: "exemple",
            titre: "Une suite récurrente affine",
            texte: "Soit u₀ = 2 et uₙ₊₁ = 0,5uₙ + 3.\n\nLe point fixe vaut ℓ = 3/(1 − 0,5) = 6. Posons vₙ = uₙ − 6.\n\nAlors vₙ₊₁ = 0,5vₙ et v₀ = −4. Donc vₙ = −4 × 0,5ⁿ, puis :\nuₙ = 6 − 4 × 0,5ⁿ.\n\nComme 0,5ⁿ tend vers 0, uₙ tend vers 6."
          },
          {
            type: "remarque",
            titre: "Si a = 1",
            texte: "La relation devient uₙ₊₁ = uₙ + b. La suite est alors arithmétique de raison b : uₙ = u₀ + nb."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une suite arithmétique vérifie u₀ = 5 et r = 2. Calculer u₃.",
        correction: "u₃ = u₀ + 3r = 5 + 6 = 11."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une suite géométrique vérifie u₀ = 3 et q = 2. Calculer u₄.",
        correction: "u₄ = u₀q⁴ = 3 × 2⁴ = 48."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La suite arithmétique uₙ = 10 − 4n est-elle croissante ou décroissante ?",
        correction: "Sa raison est −4, qui est négative. La suite est strictement décroissante."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une suite arithmétique vérifie u₂ = 7 et r = 3. Calculer u₇.",
        correction: "De 2 à 7, il y a 5 passages. Donc u₇ = u₂ + 5r = 7 + 15 = 22."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une suite géométrique vérifie u₁ = 4 et q = 3. Calculer u₄.",
        correction: "u₄ = u₁q³ = 4 × 27 = 108."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer 1 + 2 + ... + 20.",
        correction: "Il y a 20 termes. La somme vaut 20 × (1 + 20)/2 = 210."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer 1 + 2 + 4 + 8 + 16.",
        correction: "La somme vaut directement 31. Avec la formule géométrique : (1 − 2⁵)/(1 − 2) = 31."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une suite arithmétique vérifie u₀ = 3 et u₅ = 18. Déterminer sa raison.",
        correction: "u₅ = u₀ + 5r, donc 18 = 3 + 5r. Ainsi 5r = 15 et r = 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Montrer par récurrence que 2ⁿ ≥ n + 1 pour tout entier n ≥ 0.",
        correction: "Initialisation : pour n = 0, 2⁰ = 1 ≥ 1.\n\nHérédité : supposons 2ⁿ ≥ n + 1. Alors 2ⁿ⁺¹ = 2 × 2ⁿ ≥ 2n + 2. Or 2n + 2 ≥ n + 2 car n ≥ 0. Donc 2ⁿ⁺¹ ≥ (n + 1) + 1.\n\nLa propriété est vraie pour tout n ≥ 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit u₀ = 1 et uₙ₊₁ = 2uₙ. Montrer par récurrence que uₙ = 2ⁿ.",
        correction: "Initialisation : u₀ = 1 = 2⁰.\n\nHérédité : si uₙ = 2ⁿ, alors uₙ₊₁ = 2uₙ = 2 × 2ⁿ = 2ⁿ⁺¹.\n\nDonc uₙ = 2ⁿ pour tout n ≥ 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit u₀ = 1 et uₙ₊₁ = 2uₙ + 1. Déterminer uₙ en fonction de n.",
        correction: "Le point fixe vérifie ℓ = 2ℓ + 1, donc ℓ = −1. Posons vₙ = uₙ + 1.\n\nAlors vₙ₊₁ = uₙ₊₁ + 1 = 2uₙ + 2 = 2vₙ. Comme v₀ = 2, on a vₙ = 2 × 2ⁿ = 2ⁿ⁺¹.\n\nDonc uₙ = 2ⁿ⁺¹ − 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit u₀ = 0 et uₙ₊₁ = 0,5uₙ + 4. Déterminer uₙ et sa limite.",
        correction: "Le point fixe vaut ℓ = 4/(1 − 0,5) = 8. Posons vₙ = uₙ − 8.\n\nAlors vₙ₊₁ = 0,5vₙ et v₀ = −8. Donc vₙ = −8 × 0,5ⁿ et uₙ = 8 − 8 × 0,5ⁿ.\n\nComme 0,5ⁿ tend vers 0, la limite de uₙ est 8."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne économise 1 000 Ar la première semaine, puis augmente son épargne hebdomadaire de 200 Ar chaque semaine. Combien économise-t-elle pendant la dixième semaine et au total pendant les dix premières semaines ?",
        correction: "Les montants hebdomadaires forment une suite arithmétique de premier terme u₁ = 1 000 et de raison 200.\n\nu₁₀ = 1 000 + 9 × 200 = 2 800 Ar.\nLa somme des dix semaines vaut 10 × (1 000 + 2 800)/2 = 19 000 Ar."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un capital de 100 000 Ar augmente de 5 % par an. Quel est son montant après trois ans, si les intérêts sont ajoutés chaque année au capital ?",
        correction: "Chaque année, on multiplie le capital par 1,05. Les capitaux forment donc une suite géométrique de raison 1,05.\n\nAprès trois ans : 100 000 × 1,05³ = 115 762,50 Ar."
      }
    ]
  }
]);
