enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch32",
    titre: "Chapitre 32 : Probabilités et probabilités conditionnelles",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch32-l1",
        titre: "Leçon 1 : Expériences aléatoires et événements",
        blocs: [
          {
            type: "introduction",
            titre: "Décrire le hasard",
            texte: "Une expérience aléatoire a plusieurs résultats possibles, sans que l’on puisse prévoir avec certitude lequel se produira. L’ensemble de ces résultats est appelé univers et noté Ω.\n\nUn événement est un ensemble de résultats. Il se réalise lorsque le résultat obtenu appartient à cet ensemble."
          },
          {
            type: "exemple",
            titre: "Lancer un dé",
            texte: "Pour un dé à six faces numérotées de 1 à 6, on prend Ω = {1, 2, 3, 4, 5, 6}.\n\nL’événement A « obtenir un nombre pair » est {2, 4, 6}. L’événement impossible est l’ensemble vide ; l’événement certain est Ω."
          },
          {
            type: "definition",
            titre: "Opérations sur les événements",
            texte: "• A ∩ B signifie « A et B » : les deux événements se réalisent.\n• A ∪ B signifie « A ou B » : au moins l’un des deux se réalise.\n• Le complémentaire de A, noté Ā, signifie « A ne se réalise pas ».\n\nDeux événements sont incompatibles si A ∩ B est vide : ils ne peuvent pas se réaliser ensemble."
          },
          {
            type: "texte",
            titre: "Règles de calcul",
            texte: "Pour tout événement A : 0 ≤ P(A) ≤ 1, P(Ω) = 1 et P(Ā) = 1 − P(A).\n\nPour deux événements A et B :\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n\nS’ils sont incompatibles, P(A ∩ B) = 0 et P(A ∪ B) = P(A) + P(B)."
          },
          {
            type: "definition",
            titre: "Cas d’équiprobabilité",
            texte: "Lorsque tous les résultats élémentaires de l’univers fini sont équiprobables :\n\nP(A) = nombre de résultats favorables à A / nombre total de résultats.\n\nIl faut justifier l’équiprobabilité avant d’utiliser cette formule."
          },
          {
            type: "exemple",
            titre: "Un dé équilibré",
            texte: "Pour un dé équilibré, les six faces sont équiprobables. L’événement « obtenir un nombre pair » a trois résultats favorables :\n\nP(A) = 3/6 = 1/2."
          }
        ]
      },

      {
        id: "tle-maths-ch32-l2",
        titre: "Leçon 2 : Probabilité conditionnelle",
        blocs: [
          {
            type: "definition",
            titre: "Tenir compte d’une information",
            texte: "Si P(A) > 0, la probabilité de B sachant A est :\n\nP(B | A) = P(A ∩ B)/P(A).\n\nElle mesure la probabilité de B lorsque l’on sait que A est réalisé. Attention : P(B | A) et P(A | B) ne sont pas forcément égales."
          },
          {
            type: "methode",
            titre: "Calculer une intersection",
            texte: "Si P(A) > 0, la formule précédente donne :\n\nP(A ∩ B) = P(A) × P(B | A).\n\nOn peut aussi écrire P(A ∩ B) = P(B) × P(A | B) si P(B) > 0."
          },
          {
            type: "exemple",
            titre: "Lecture d’un groupe",
            texte: "Dans un groupe de 20 élèves, 12 étudient l’anglais et 5 étudient à la fois l’anglais et l’allemand. On choisit un élève au hasard, chaque élève ayant la même probabilité d’être choisi.\n\nSachant que l’élève étudie l’anglais, la probabilité qu’il étudie aussi l’allemand est 5/12. Elle diffère de la probabilité de choisir un élève étudiant les deux langues, qui vaut 5/20."
          },
          {
            type: "remarque",
            titre: "Bien lire le mot « sachant »",
            texte: "Dans P(B | A), l’information connue est A : elle apparaît au dénominateur dans la formule. La probabilité conditionnelle n’est définie ici que si P(A) > 0."
          }
        ]
      },

      {
        id: "tle-maths-ch32-l3",
        titre: "Leçon 3 : Arbres et probabilités totales",
        blocs: [
          {
            type: "definition",
            titre: "Arbre pondéré",
            texte: "Un arbre pondéré représente les étapes d’une expérience. Les probabilités des branches issues d’un même nœud ont pour somme 1.\n\nLa probabilité d’un chemin est le produit des probabilités portées par ses branches. Pour obtenir un événement composé de plusieurs chemins incompatibles, on additionne leurs probabilités."
          },
          {
            type: "schema",
            titre: "Deux étapes",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 430 230'><circle cx='30' cy='115' r='4' fill='#334155'/><line x1='34' y1='115' x2='170' y2='55' stroke='#64748b' stroke-width='2'/><line x1='34' y1='115' x2='170' y2='175' stroke='#64748b' stroke-width='2'/><line x1='185' y1='55' x2='345' y2='25' stroke='#64748b' stroke-width='2'/><line x1='185' y1='55' x2='345' y2='85' stroke='#64748b' stroke-width='2'/><line x1='185' y1='175' x2='345' y2='145' stroke='#64748b' stroke-width='2'/><line x1='185' y1='175' x2='345' y2='205' stroke='#64748b' stroke-width='2'/><text x='175' y='59' font-size='14'>A</text><text x='175' y='179' font-size='14'>Ā</text><text x='350' y='29' font-size='14'>B</text><text x='350' y='89' font-size='14'>B̄</text><text x='350' y='149' font-size='14'>B</text><text x='350' y='209' font-size='14'>B̄</text><text x='76' y='68' font-size='12'>P(A)</text><text x='76' y='165' font-size='12'>P(Ā)</text><text x='225' y='31' font-size='12'>P(B | A)</text><text x='225' y='91' font-size='12'>P(B̄ | A)</text><text x='225' y='149' font-size='12'>P(B | Ā)</text><text x='225' y='209' font-size='12'>P(B̄ | Ā)</text></svg>",
            legende: "Le chemin passant par A puis B a pour probabilité P(A) × P(B | A), lorsque P(A) > 0."
          },
          {
            type: "definition",
            titre: "Formule des probabilités totales",
            texte: "Si A et Ā forment une partition de l’univers et ont des probabilités non nulles, alors :\n\nP(B) = P(A)P(B | A) + P(Ā)P(B | Ā).\n\nPlus généralement, on additionne les probabilités des intersections de B avec les événements d’une partition."
          },
          {
            type: "exemple",
            titre: "Choisir une boîte",
            texte: "On choisit la boîte A avec probabilité 0,4 et la boîte B avec probabilité 0,6. Dans A, la probabilité de tirer une boule rouge est 0,5 ; dans B, elle est 0,2.\n\nLa probabilité de tirer une boule rouge est :\n0,4 × 0,5 + 0,6 × 0,2 = 0,32."
          },
          {
            type: "methode",
            titre: "Remonter un arbre",
            texte: "Pour calculer P(A | B), avec P(B) > 0 :\n1. Calculer P(A ∩ B) en suivant le chemin A puis B.\n2. Calculer P(B) en additionnant tous les chemins qui aboutissent à B.\n3. Diviser : P(A | B) = P(A ∩ B)/P(B)."
          },
          {
            type: "exemple",
            titre: "Quelle boîte sachant que la boule est rouge ?",
            texte: "Dans l’exemple précédent, P(A ∩ rouge) = 0,4 × 0,5 = 0,2 et P(rouge) = 0,32.\n\nDonc P(A | rouge) = 0,2/0,32 = 0,625."
          }
        ]
      },

      {
        id: "tle-maths-ch32-l4",
        titre: "Leçon 4 : Indépendance et tirages",
        blocs: [
          {
            type: "definition",
            titre: "Événements indépendants",
            texte: "Deux événements A et B sont indépendants si :\n\nP(A ∩ B) = P(A)P(B).\n\nSi P(A) > 0, cela équivaut à P(B | A) = P(B) : savoir que A est réalisé ne modifie pas la probabilité de B."
          },
          {
            type: "remarque",
            titre: "Indépendants ou incompatibles ?",
            texte: "Ces notions sont différentes. Si A et B sont incompatibles et ont tous deux une probabilité strictement positive, alors P(A ∩ B) = 0 tandis que P(A)P(B) > 0 : ils ne sont donc pas indépendants."
          },
          {
            type: "texte",
            titre: "Tirages avec ou sans remise",
            texte: "Dans des tirages avec remise et réalisés dans les mêmes conditions, la composition de l’urne est rétablie après chaque tirage ; on modélise alors les tirages comme indépendants.\n\nSans remise, la composition change généralement : les probabilités conditionnelles dépendent des résultats précédents."
          },
          {
            type: "exemple",
            titre: "Deux boules sans remise",
            texte: "Une urne contient 3 boules rouges et 2 bleues. On tire successivement deux boules au hasard, sans remise.\n\nP(rouge puis rouge) = 3/5 × 2/4 = 3/10.\n\nAprès une première boule rouge, il reste 2 boules rouges parmi 4 boules."
          },
          {
            type: "methode",
            titre: "Choisir une stratégie",
            texte: "1. Définir les événements avec précision.\n2. Repérer si l’expérience est équiprobable, si les tirages sont avec remise ou sans remise, et si l’ordre compte.\n3. Utiliser un arbre, un tableau ou un dénombrement adapté.\n4. Calculer les intersections, puis additionner les cas incompatibles si nécessaire.\n5. Vérifier que le résultat est compris entre 0 et 1."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On lance un dé équilibré à six faces. Quelle est la probabilité d’obtenir un nombre supérieur ou égal à 5 ?",
        correction: "Les résultats favorables sont 5 et 6, soit 2 résultats sur 6 équiprobables. La probabilité est 2/6 = 1/3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Si P(A) = 0,35, calculer P(Ā).",
        correction: "P(Ā) = 1 − P(A) = 1 − 0,35 = 0,65."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On lance une pièce équilibrée deux fois. Quelle est la probabilité d’obtenir deux faces ?",
        correction: "Les quatre couples ordonnés sont équiprobables : pile-pile, pile-face, face-pile et face-face. Un seul donne deux faces, donc la probabilité est 1/4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On sait que P(A) = 0,4, P(B) = 0,5 et P(A ∩ B) = 0,2. Calculer P(A ∪ B).",
        correction: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,4 + 0,5 − 0,2 = 0,7."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un groupe de 30 personnes, 18 pratiquent un sport. On choisit une personne au hasard, de façon équiprobable. Quelle est la probabilité qu’elle pratique un sport ?",
        correction: "Il y a 18 personnes favorables sur 30 : la probabilité est 18/30 = 3/5 = 0,6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne P(A) = 0,6 et P(A ∩ B) = 0,3. Calculer P(B | A).",
        correction: "Comme P(A) > 0, P(B | A) = P(A ∩ B)/P(A) = 0,3/0,6 = 0,5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne P(A) = 0,4 et P(B | A) = 0,7. Calculer P(A ∩ B).",
        correction: "P(A ∩ B) = P(A)P(B | A) = 0,4 × 0,7 = 0,28."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une urne contient 4 boules rouges et 6 bleues. On tire deux boules successivement sans remise. Calculer la probabilité d’obtenir deux boules rouges.",
        correction: "La probabilité d’une première rouge est 4/10. Sachant ce résultat, il reste 3 rouges parmi 9 boules : P(rouge puis rouge) = 4/10 × 3/9 = 2/15."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne P(A) = 0,5, P(B) = 0,4 et P(A ∩ B) = 0,2. Les événements A et B sont-ils indépendants ?",
        correction: "P(A)P(B) = 0,5 × 0,4 = 0,2 = P(A ∩ B). Ils sont donc indépendants."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On choisit au hasard une carte parmi 10 cartes numérotées de 1 à 10. Calculer la probabilité d’obtenir un nombre pair ou supérieur à 8.",
        correction: "Les nombres pairs sont 2, 4, 6, 8 et 10 : 5 résultats. Les nombres supérieurs à 8 sont 9 et 10 : 2 résultats. Le nombre 10 a été compté deux fois. Il y a donc 5 + 2 − 1 = 6 résultats favorables sur 10, soit une probabilité de 3/5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une pièce équilibrée est lancée 3 fois. Calculer la probabilité d’obtenir au moins une fois face.",
        correction: "L’événement contraire est « aucun face », soit trois piles. Sa probabilité vaut (1/2)³ = 1/8. La probabilité cherchée est 1 − 1/8 = 7/8."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une boîte A est choisie avec probabilité 0,3 et une boîte B avec probabilité 0,7. La probabilité de tirer une boule rouge est 0,8 dans A et 0,2 dans B. Calculer la probabilité de tirer une boule rouge, puis la probabilité que la boîte choisie soit A sachant que la boule est rouge.",
        correction: "P(rouge) = 0,3 × 0,8 + 0,7 × 0,2 = 0,24 + 0,14 = 0,38.\nP(A ∩ rouge) = 0,24. Donc P(A | rouge) = 0,24/0,38 = 12/19, soit environ 0,632."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une urne contient 3 boules rouges et 2 bleues. On tire deux boules successivement sans remise. Calculer la probabilité d’obtenir une boule de chaque couleur, dans n’importe quel ordre.",
        correction: "Les cas rouge puis bleue et bleue puis rouge sont incompatibles.\nP(R puis B) = 3/5 × 2/4 = 3/10.\nP(B puis R) = 2/5 × 3/4 = 3/10.\nLa probabilité cherchée est 3/10 + 3/10 = 3/5."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Une urne contient 5 boules rouges et 3 bleues. On tire successivement deux boules au hasard sans remise. 1. Calculer la probabilité d’obtenir deux rouges. 2. Calculer la probabilité d’obtenir au moins une bleue. 3. Sachant que la première boule est bleue, calculer la probabilité que la seconde soit rouge.",
        correction: "1. P(R puis R) = 5/8 × 4/7 = 5/14.\n2. L’événement contraire de « au moins une bleue » est « deux rouges ». La probabilité cherchée est 1 − 5/14 = 9/14.\n3. Si la première boule est bleue, il reste 5 rouges parmi 7 boules. La probabilité demandée est donc 5/7."
      }
    ]
  }
]);
