// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 3 : Multiplication et division des nombres relatifs

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch3",
    titre: "Chapitre 3 : Multiplication et division des nombres relatifs",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch3-produit",
        titre: "Multiplier deux nombres relatifs",
        blocs: [
          {
            type: "definition",
            titre: "Produit et facteurs",
            texte: "Le résultat d'une multiplication s'appelle un produit. Les nombres que l'on multiplie s'appellent les facteurs.\nExemple : dans (−3) × (+4) = −12, les facteurs sont −3 et +4 ; leur produit est −12."
          },
          {
            type: "regle",
            titre: "Règle des signes",
            texte: "Pour multiplier deux nombres relatifs non nuls :\n• s'ils ont le même signe, leur produit est positif ;\n• s'ils ont des signes différents, leur produit est négatif.\n\nPour trouver la distance à zéro du résultat, on multiplie les distances à zéro des deux facteurs."
          },
          {
            type: "tableau",
            titre: "Signe d'un produit de deux nombres non nuls",
            entetes: ["Signe du premier facteur", "Signe du second facteur", "Signe du produit"],
            lignes: [
              ["+", "+", "+"],
              ["−", "−", "+"],
              ["+", "−", "−"],
              ["−", "+", "−"]
            ]
          },
          {
            type: "exemple",
            titre: "Même signe",
            texte: "(+3) × (+4) = +12.\n(−3) × (−4) = +12.\nDans les deux cas, les facteurs ont le même signe : le produit est positif. On calcule ensuite 3 × 4 = 12."
          },
          {
            type: "exemple",
            titre: "Signes différents",
            texte: "(−3) × (+4) = −12.\n(+3) × (−4) = −12.\nLes facteurs ont des signes différents : le produit est négatif. Sa distance à zéro est 3 × 4 = 12."
          },
          {
            type: "remarque",
            titre: "Multiplier par zéro",
            texte: "Le produit d'un nombre par 0 est toujours 0.\nExemples : (−8) × 0 = 0 et 0 × (+5) = 0."
          }
        ]
      },

      {
        id: "m4-ch3-produit-plusieurs",
        titre: "Multiplier plusieurs nombres relatifs",
        blocs: [
          {
            type: "methode",
            titre: "Déterminer le signe",
            texte: "Pour déterminer le signe d'un produit dont tous les facteurs sont non nuls :\n1. Compte les facteurs négatifs.\n2. Si leur nombre est pair, le produit est positif.\n3. Si leur nombre est impair, le produit est négatif.\n\nEnsuite, multiplie les distances à zéro pour trouver la valeur du résultat."
          },
          {
            type: "exemple",
            titre: "Deux facteurs négatifs",
            texte: "(−2) × (+3) × (−4).\nIl y a deux facteurs négatifs : le produit est positif.\nOn calcule 2 × 3 × 4 = 24.\nDonc (−2) × (+3) × (−4) = +24."
          },
          {
            type: "exemple",
            titre: "Trois facteurs négatifs",
            texte: "(−2) × (−3) × (−4).\nIl y a trois facteurs négatifs : le produit est négatif.\nOn calcule 2 × 3 × 4 = 24.\nDonc (−2) × (−3) × (−4) = −24."
          },
          {
            type: "remarque",
            titre: "S'il y a un facteur nul",
            texte: "Si au moins un facteur est égal à 0, tout le produit est égal à 0.\nExemple : (−2) × 0 × (−5) = 0."
          },
          {
            type: "regle",
            titre: "Ordre et regroupement",
            texte: "Dans un produit, on peut changer l'ordre des facteurs ou les regrouper sans changer le résultat.\nExemple : (−2) × (+5) × (−3) = [(−2) × (−3)] × (+5) = (+6) × (+5) = +30."
          }
        ]
      },

      {
        id: "m4-ch3-quotient",
        titre: "Diviser deux nombres relatifs",
        blocs: [
          {
            type: "definition",
            titre: "Quotient et diviseur",
            texte: "Le résultat d'une division s'appelle un quotient.\nDans (−12) ÷ (+3) = −4, le nombre −12 est le dividende et +3 est le diviseur.\nOn peut vérifier le résultat en multipliant : (−4) × (+3) = −12."
          },
          {
            type: "regle",
            titre: "Règle des signes d'un quotient",
            texte: "Pour diviser deux nombres relatifs non nuls :\n• s'ils ont le même signe, le quotient est positif ;\n• s'ils ont des signes différents, le quotient est négatif.\n\nOn divise ensuite la distance à zéro du dividende par celle du diviseur."
          },
          {
            type: "tableau",
            titre: "Signe d'un quotient de deux nombres non nuls",
            entetes: ["Signe du dividende", "Signe du diviseur", "Signe du quotient"],
            lignes: [
              ["+", "+", "+"],
              ["−", "−", "+"],
              ["+", "−", "−"],
              ["−", "+", "−"]
            ]
          },
          {
            type: "exemple",
            titre: "Quatre cas",
            texte: "(+12) ÷ (+3) = +4.\n(−12) ÷ (−3) = +4.\n(−12) ÷ (+3) = −4.\n(+12) ÷ (−3) = −4.\n\nDans chaque cas, on calcule 12 ÷ 3 = 4, puis on applique la règle des signes."
          },
          {
            type: "regle",
            titre: "Attention à zéro",
            texte: "On ne peut jamais diviser par zéro : un quotient dont le diviseur est 0 n'est pas défini.\nEn revanche, 0 divisé par un nombre non nul donne 0. Par exemple : 0 ÷ (−5) = 0."
          },
          {
            type: "exemple",
            titre: "Avec des décimaux",
            texte: "(−7,5) ÷ (+2,5).\nLes signes sont différents : le résultat est négatif.\nComme 7,5 ÷ 2,5 = 3, on obtient (−7,5) ÷ (+2,5) = −3.\nVérification : (−3) × (+2,5) = −7,5."
          }
        ]
      },

      {
        id: "m4-ch3-methodes",
        titre: "Méthodes et pièges à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Calculer un produit ou un quotient",
            texte: "1. Vérifie d'abord que le diviseur n'est pas nul s'il s'agit d'une division.\n2. Détermine le signe du résultat.\n3. Calcule avec les distances à zéro.\n4. Écris le résultat avec son signe.\n5. Pour une division, vérifie si possible en multipliant le quotient par le diviseur."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre addition et multiplication",
            texte: "Les règles de signes ne sont pas les mêmes pour une somme et pour un produit.\n(−3) + (−4) = −7 : on additionne deux nombres négatifs.\n(−3) × (−4) = +12 : on multiplie deux nombres négatifs."
          },
          {
            type: "remarque",
            titre: "L'ordre dans une division",
            texte: "Contrairement à la multiplication, on ne peut pas en général échanger le dividende et le diviseur.\nPar exemple : (−12) ÷ (+3) = −4, mais (+3) ÷ (−12) = −0,25."
          },
          {
            type: "exemple",
            titre: "Trouver un nombre manquant",
            texte: "Quel nombre faut-il multiplier par −4 pour obtenir +20 ?\nOn cherche le quotient (+20) ÷ (−4) = −5.\nVérification : (−5) × (−4) = +20. Le nombre cherché est donc −5."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. (+3) × (+5)\n2. (−3) × (−5)\n3. (−3) × (+5)\n4. (+3) × (−5)",
        correction: "Dans chaque cas, 3 × 5 = 15.\n1. Même signe : (+3) × (+5) = +15.\n2. Même signe : (−3) × (−5) = +15.\n3. Signes différents : (−3) × (+5) = −15.\n4. Signes différents : (+3) × (−5) = −15."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. (−7) × 0\n2. 0 ÷ (+4)\n3. (+6) × (−1)",
        correction: "1. Tout produit ayant un facteur nul est nul : (−7) × 0 = 0.\n2. Zéro divisé par un nombre non nul vaut zéro : 0 ÷ (+4) = 0.\n3. Les signes sont différents et 6 × 1 = 6 : (+6) × (−1) = −6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule et vérifie chaque résultat par une multiplication :\n1. (−24) ÷ (+6)\n2. (−35) ÷ (−5)\n3. (+18) ÷ (−3)",
        correction: "1. Signes différents et 24 ÷ 6 = 4 : le quotient est −4. Vérification : (−4) × (+6) = −24.\n2. Même signe et 35 ÷ 5 = 7 : le quotient est +7. Vérification : (+7) × (−5) = −35.\n3. Signes différents et 18 ÷ 3 = 6 : le quotient est −6. Vérification : (−6) × (−3) = +18."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Indique si chaque quotient est défini. Lorsqu'il est défini, calcule-le :\n1. 0 ÷ (−8)\n2. (+8) ÷ 0\n3. 0 ÷ 0",
        correction: "1. Le diviseur −8 est non nul : 0 ÷ (−8) = 0.\n2. Le diviseur est 0 : (+8) ÷ 0 n'est pas défini.\n3. Le diviseur est aussi 0 : 0 ÷ 0 n'est pas défini."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule :\n1. (−2) × (+5) × (−3)\n2. (−2) × (−5) × (−3)\n3. (+4) × (−2) × 0 × (−6)",
        correction: "1. Il y a deux facteurs négatifs : le produit est positif. 2 × 5 × 3 = 30, donc le résultat est +30.\n2. Il y a trois facteurs négatifs : le produit est négatif. 2 × 5 × 3 = 30, donc le résultat est −30.\n3. Il y a un facteur nul : le produit est 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule :\n1. (−1,5) × (+4)\n2. (−8,4) ÷ (−2)\n3. (+3,6) ÷ (−1,2)",
        correction: "1. Les signes sont différents et 1,5 × 4 = 6 : le résultat est −6.\n2. Les signes sont identiques et 8,4 ÷ 2 = 4,2 : le résultat est +4,2.\n3. Les signes sont différents et 3,6 ÷ 1,2 = 3 : le résultat est −3. Vérification : (−3) × (−1,2) = +3,6."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Trouve le nombre manquant dans chaque égalité, puis vérifie :\n1. … × (−6) = +42\n2. … × (+4) = −28\n3. … ÷ (−3) = +5",
        correction: "1. Le nombre cherché est (+42) ÷ (−6) = −7. Vérification : (−7) × (−6) = +42.\n2. Le nombre cherché est (−28) ÷ (+4) = −7. Vérification : (−7) × (+4) = −28.\n3. Pour retrouver le dividende, on multiplie le quotient par le diviseur : (+5) × (−3) = −15. Vérification : (−15) ÷ (−3) = +5."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une association note une dépense de 2 500 Ar par jour comme une variation de −2 500 Ar.\n1. Quelle est la variation totale après 4 jours identiques ?\n2. Une autre dépense totale de −15 000 Ar est répartie également sur 5 jours. Quelle est la variation quotidienne ?\n3. Au départ, l'association dispose de 20 000 Ar. Combien lui reste-t-il après les 4 jours de la première question ?",
        correction: "1. La variation se répète 4 fois : (+4) × (−2 500) = −10 000 Ar. Il s'agit d'une dépense totale de 10 000 Ar.\n2. On partage la variation totale en 5 parts égales : (−15 000) ÷ (+5) = −3 000 Ar par jour.\n3. On ajoute la variation à la somme de départ : (+20 000) + (−10 000) = +10 000. Il reste 10 000 Ar."
      }
    ]
  }
]);
