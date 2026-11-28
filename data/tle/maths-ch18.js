enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch18",
    titre: "Chapitre 18 : Divisibilité, nombres premiers et congruences",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch18-l1",
        titre: "Leçon 1 : Divisibilité et division euclidienne",
        blocs: [
          {
            type: "definition",
            titre: "Divisibilité",
            texte: "Pour deux entiers a et b, on dit que a divise b s’il existe un entier k tel que b = ak. On note a | b.\n\nPar exemple, 3 | 12 car 12 = 3 × 4. En revanche, 5 ne divise pas 12."
          },
          {
            type: "definition",
            titre: "Division euclidienne",
            texte: "Pour tout entier a et tout entier naturel non nul b, il existe un unique couple d’entiers (q ; r) tel que :\n\na = bq + r, avec 0 ≤ r < b.\n\nq est le quotient et r le reste de la division euclidienne de a par b."
          },
          {
            type: "exemple",
            titre: "Effectuer une division euclidienne",
            texte: "La division euclidienne de 47 par 6 donne :\n47 = 6 × 7 + 5, avec 0 ≤ 5 < 6.\n\nLe quotient est 7 et le reste est 5."
          },
          {
            type: "exemple",
            titre: "Dividende négatif",
            texte: "Pour diviser −17 par 5, on cherche un reste compris entre 0 et 4.\n\n−17 = 5 × (−4) + 3.\nLe quotient est −4 et le reste est 3."
          },
          {
            type: "methode",
            titre: "Utiliser une combinaison",
            texte: "Si d divise a et b, alors d divise toute combinaison entière de a et b : pour tous entiers m et n, d divise ma + nb."
          },
          {
            type: "exemple",
            titre: "Une conséquence utile",
            texte: "Si d divise 35 et 21, alors d divise 35 − 21 = 14. Cette propriété permet de simplifier la recherche des diviseurs communs."
          }
        ]
      },

      {
        id: "tle-maths-ch18-l2",
        titre: "Leçon 2 : Nombres premiers et décomposition",
        blocs: [
          {
            type: "definition",
            titre: "Nombre premier",
            texte: "Un entier naturel p est premier s’il possède exactement deux diviseurs naturels : 1 et p.\n\nLes premiers nombres premiers sont 2, 3, 5, 7, 11 et 13. Le nombre 1 n’est pas premier."
          },
          {
            type: "methode",
            titre: "Tester si un nombre est premier",
            texte: "Pour un entier n ≥ 2, il suffit de rechercher s’il possède un diviseur premier inférieur ou égal à √n.\n\nSi aucun de ces nombres premiers ne le divise, alors n est premier."
          },
          {
            type: "exemple",
            titre: "Tester 29",
            texte: "Comme √29 est compris entre 5 et 6, il suffit de tester les nombres premiers 2, 3 et 5.\n\n29 n’est divisible par aucun d’eux. Donc 29 est premier."
          },
          {
            type: "definition",
            titre: "Décomposition en facteurs premiers",
            texte: "Tout entier naturel supérieur ou égal à 2 se décompose en produit de nombres premiers. Cette décomposition est unique à l’ordre des facteurs près."
          },
          {
            type: "exemple",
            titre: "Décomposer 360",
            texte: "360 = 36 × 10 = (2² × 3²) × (2 × 5).\n\nDonc 360 = 2³ × 3² × 5."
          },
          {
            type: "methode",
            titre: "PGCD et PPCM par décomposition",
            texte: "Le PGCD de deux entiers naturels non nuls est leur plus grand diviseur commun. Le PPCM est leur plus petit multiple commun strictement positif.\n\nAvec les décompositions en facteurs premiers :\n• pour le PGCD, on retient les facteurs communs avec les plus petits exposants ;\n• pour le PPCM, on retient tous les facteurs présents avec les plus grands exposants."
          },
          {
            type: "exemple",
            titre: "PGCD et PPCM",
            texte: "60 = 2² × 3 × 5 et 84 = 2² × 3 × 7.\n\nPGCD(60 ; 84) = 2² × 3 = 12.\nPPCM(60 ; 84) = 2² × 3 × 5 × 7 = 420."
          }
        ]
      },

      {
        id: "tle-maths-ch18-l3",
        titre: "Leçon 3 : Algorithme d’Euclide et théorèmes utiles",
        blocs: [
          {
            type: "methode",
            titre: "Algorithme d’Euclide",
            texte: "Pour calculer le PGCD de deux entiers naturels non nuls :\n1. Effectuer la division euclidienne du plus grand par le plus petit.\n2. Remplacer le couple par le diviseur et le reste.\n3. Recommencer jusqu’à obtenir un reste nul.\n\nLe dernier reste non nul est le PGCD."
          },
          {
            type: "exemple",
            titre: "Calculer PGCD(84 ; 30)",
            texte: "84 = 30 × 2 + 24\n30 = 24 × 1 + 6\n24 = 6 × 4 + 0.\n\nLe dernier reste non nul est 6. Donc PGCD(84 ; 30) = 6."
          },
          {
            type: "definition",
            titre: "Entiers premiers entre eux",
            texte: "Deux entiers sont premiers entre eux si leur PGCD vaut 1. Ils ne sont pas nécessairement premiers eux-mêmes : 8 et 15 sont premiers entre eux, bien que ni 8 ni 15 ne soit premier."
          },
          {
            type: "definition",
            titre: "Théorème de Bézout",
            texte: "Deux entiers a et b sont premiers entre eux si et seulement s’il existe des entiers u et v tels que au + bv = 1."
          },
          {
            type: "exemple",
            titre: "Une identité de Bézout",
            texte: "Pour 8 et 15, on remarque que 2 × 8 − 1 × 15 = 1.\n\nCette égalité fournit u = 2 et v = −1, et confirme que 8 et 15 sont premiers entre eux."
          },
          {
            type: "definition",
            titre: "Théorème de Gauss",
            texte: "Si a divise le produit bc et si a et b sont premiers entre eux, alors a divise c."
          },
          {
            type: "exemple",
            titre: "Utiliser Gauss",
            texte: "Si 7 divise 3n, alors 7 divise n : en effet, 7 et 3 sont premiers entre eux."
          }
        ]
      },

      {
        id: "tle-maths-ch18-l4",
        titre: "Leçon 4 : Congruences",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "Soit n un entier naturel non nul. Deux entiers a et b sont congrus modulo n si n divise a − b.\n\nOn note a ≡ b (mod n). Cela signifie aussi que a et b ont le même reste dans la division euclidienne par n."
          },
          {
            type: "exemple",
            titre: "Deux nombres congrus",
            texte: "17 ≡ 2 (mod 5), car 17 − 2 = 15 est divisible par 5. On peut aussi constater que 17 et 2 ont tous deux pour reste 2 dans la division par 5."
          },
          {
            type: "methode",
            titre: "Calculer avec les congruences",
            texte: "Si a ≡ b (mod n) et c ≡ d (mod n), alors :\n• a + c ≡ b + d (mod n) ;\n• ac ≡ bd (mod n).\n\nOn peut donc aussi élever les deux membres à une même puissance entière naturelle."
          },
          {
            type: "exemple",
            titre: "Reste d’une puissance",
            texte: "Cherchons le reste de 2¹⁰ dans la division par 5.\n\nComme 2⁴ = 16 ≡ 1 (mod 5), on écrit 2¹⁰ = (2⁴)² × 2².\nAinsi 2¹⁰ ≡ 1² × 4 ≡ 4 (mod 5). Le reste est 4."
          },
          {
            type: "remarque",
            titre: "Attention à la simplification",
            texte: "On ne peut pas toujours simplifier une congruence par un facteur. Par exemple, 2 × 1 ≡ 2 × 4 (mod 6), mais 1 n’est pas congru à 4 modulo 6.\n\nLa simplification par un entier est valable lorsqu’il est premier avec le module."
          },
          {
            type: "exemple",
            titre: "Résoudre une congruence simple",
            texte: "Résolvons 3x ≡ 1 (mod 5).\n\nComme 3 × 2 = 6 ≡ 1 (mod 5), on multiplie la congruence par 2 : x ≡ 2 (mod 5).\n\nLes solutions entières sont x = 2 + 5k, avec k ∈ ℤ."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Effectuer la division euclidienne de 53 par 7.",
        correction: "53 = 7 × 7 + 4, avec 0 ≤ 4 < 7. Le quotient est 7 et le reste est 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le nombre 21 est-il premier ?",
        correction: "Non : 21 = 3 × 7. Il possède des diviseurs autres que 1 et lui-même."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Décomposer 90 en facteurs premiers.",
        correction: "90 = 9 × 10 = 3² × 2 × 5. Donc 90 = 2 × 3² × 5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Effectuer la division euclidienne de −11 par 4.",
        correction: "On cherche un reste entre 0 et 3 : −11 = 4 × (−3) + 1. Le quotient est −3 et le reste est 1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le PGCD de 48 et 18 par l’algorithme d’Euclide.",
        correction: "48 = 18 × 2 + 12 ; 18 = 12 × 1 + 6 ; 12 = 6 × 2 + 0.\nLe dernier reste non nul est 6. Donc PGCD(48 ; 18) = 6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le PPCM de 12 et 18.",
        correction: "12 = 2² × 3 et 18 = 2 × 3². On retient les plus grands exposants : PPCM(12 ; 18) = 2² × 3² = 36."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Montrer que 11 et 18 sont premiers entre eux à l’aide d’une identité de Bézout.",
        correction: "On a 5 × 11 − 3 × 18 = 55 − 54 = 1. Il existe donc une combinaison entière égale à 1 : 11 et 18 sont premiers entre eux."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le reste de 38 dans la division par 6.",
        correction: "38 = 6 × 6 + 2. Le reste est 2, donc 38 ≡ 2 (mod 6)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Montrer que 49 ≡ 1 (mod 8).",
        correction: "49 − 1 = 48 = 8 × 6. Comme 8 divise 48, on a 49 ≡ 1 (mod 8)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer le reste de 3⁸ dans la division par 5.",
        correction: "3² = 9 ≡ 4 ≡ −1 (mod 5). Donc 3⁴ ≡ 1 (mod 5), puis 3⁸ ≡ 1 (mod 5).\nLe reste est 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre dans ℤ la congruence 2x ≡ 3 (mod 5).",
        correction: "Comme 2 × 3 = 6 ≡ 1 (mod 5), on multiplie par 3 : x ≡ 9 ≡ 4 (mod 5).\nLes solutions sont x = 4 + 5k, avec k ∈ ℤ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Montrer que, pour tout entier n, n(n + 1) est pair.",
        correction: "Deux entiers consécutifs sont de parités différentes : l’un des deux est pair. Leur produit n(n + 1) est donc divisible par 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer si 97 est premier.",
        correction: "√97 est inférieur à 10. Il suffit de tester les nombres premiers 2, 3, 5 et 7.\n97 n’est divisible ni par 2, ni par 3, ni par 5, ni par 7. Donc 97 est premier."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Trouver tous les entiers x tels que x ≡ 2 (mod 3) et 0 ≤ x ≤ 14.",
        correction: "Les solutions de x ≡ 2 (mod 3) sont les entiers de la forme 2 + 3k. Dans l’intervalle demandé, on obtient 2, 5, 8, 11 et 14."
      }
    ]
  }
]);
