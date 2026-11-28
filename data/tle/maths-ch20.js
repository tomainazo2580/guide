enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch20",
    titre: "Chapitre 20 : Nombres complexes — forme algébrique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch20-l1",
        titre: "Leçon 1 : Découvrir les nombres complexes",
        blocs: [
          {
            type: "introduction",
            titre: "Une nouvelle famille de nombres",
            texte: "Dans ℝ, l’équation x² + 1 = 0 n’a pas de solution, car le carré d’un réel est toujours positif ou nul. Les nombres complexes permettent notamment de résoudre cette équation."
          },
          {
            type: "definition",
            titre: "Le nombre i",
            texte: "On introduit un nombre noté i tel que i² = −1.\n\nUn nombre complexe s’écrit de manière unique z = a + bi, où a et b sont des réels. Cette écriture est appelée forme algébrique."
          },
          {
            type: "definition",
            titre: "Parties réelle et imaginaire",
            texte: "Pour z = a + bi :\n• a est la partie réelle, notée Re(z) ;\n• b est la partie imaginaire, notée Im(z).\n\nAttention : la partie imaginaire est le réel b, et non bi."
          },
          {
            type: "exemple",
            titre: "Lire un nombre complexe",
            texte: "Pour z = 3 − 2i, on a Re(z) = 3 et Im(z) = −2.\n\nUn nombre réel a s’écrit a + 0i. Un nombre de la forme bi, avec b réel, est appelé imaginaire pur."
          },
          {
            type: "definition",
            titre: "Égalité",
            texte: "Deux complexes a + bi et c + di sont égaux si et seulement si a = c et b = d."
          },
          {
            type: "exemple",
            titre: "Identifier les parties",
            texte: "Si x + 2i = 4 + yi, avec x et y réels, l’égalité des parties réelle et imaginaire donne x = 4 et y = 2."
          },
          {
            type: "remarque",
            titre: "Puissances de i",
            texte: "Les premières puissances sont : i⁰ = 1, i¹ = i, i² = −1, i³ = −i et i⁴ = 1. Elles se répètent ensuite par cycle de quatre."
          }
        ]
      },

      {
        id: "tle-maths-ch20-l2",
        titre: "Leçon 2 : Calculer avec les complexes",
        blocs: [
          {
            type: "methode",
            titre: "Addition et soustraction",
            texte: "On regroupe les parties réelles et les parties imaginaires :\n(a + bi) + (c + di) = (a + c) + (b + d)i."
          },
          {
            type: "exemple",
            titre: "Une somme",
            texte: "(3 + 2i) + (−1 + 5i) = 2 + 7i.\n\n(3 + 2i) − (−1 + 5i) = 4 − 3i."
          },
          {
            type: "methode",
            titre: "Multiplication",
            texte: "On développe comme avec des expressions algébriques, puis on remplace i² par −1 :\n\n(a + bi)(c + di) = (ac − bd) + (ad + bc)i."
          },
          {
            type: "exemple",
            titre: "Un produit",
            texte: "(2 + 3i)(1 − 2i) = 2 − 4i + 3i − 6i².\n\nComme i² = −1, on obtient 2 − i + 6 = 8 − i."
          },
          {
            type: "definition",
            titre: "Conjugué",
            texte: "Le conjugué de z = a + bi est le complexe z̄ = a − bi.\n\nLe produit d’un complexe par son conjugué est réel :\nz z̄ = (a + bi)(a − bi) = a² + b²."
          },
          {
            type: "methode",
            titre: "Division",
            texte: "Pour écrire un quotient sous forme algébrique, on multiplie le numérateur et le dénominateur par le conjugué du dénominateur. Le dénominateur doit être non nul."
          },
          {
            type: "exemple",
            titre: "Un quotient",
            texte: "Calculons (1 + i)/(2 − i).\n\nOn multiplie par le conjugué 2 + i :\n(1 + i)/(2 − i) = [(1 + i)(2 + i)]/[(2 − i)(2 + i)].\n\nLe numérateur vaut 2 + 3i + i² = 1 + 3i ; le dénominateur vaut 4 + 1 = 5.\nDonc le quotient est 1/5 + (3/5)i."
          }
        ]
      },

      {
        id: "tle-maths-ch20-l3",
        titre: "Leçon 3 : Équations dans ℂ",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre z² = un réel négatif",
            texte: "Si a est un réel strictement positif, les solutions de z² = −a sont z = i√a et z = −i√a."
          },
          {
            type: "exemple",
            titre: "Une équation simple",
            texte: "Résolvons z² + 9 = 0.\n\nOn obtient z² = −9. Les solutions sont z = 3i et z = −3i."
          },
          {
            type: "definition",
            titre: "Équation du second degré à coefficients réels",
            texte: "Pour az² + bz + c = 0, avec a, b et c réels et a ≠ 0, on calcule Δ = b² − 4ac.\n\n• Si Δ > 0, il y a deux solutions réelles.\n• Si Δ = 0, il y a une solution réelle double.\n• Si Δ < 0, il y a deux solutions complexes conjuguées :\n\nz = [−b ± i√(−Δ)]/(2a)."
          },
          {
            type: "exemple",
            titre: "Discriminant négatif",
            texte: "Résolvons z² − 2z + 5 = 0.\n\nΔ = (−2)² − 4 × 1 × 5 = −16.\n\nLes solutions sont z = [2 ± 4i]/2, soit z = 1 + 2i et z = 1 − 2i."
          },
          {
            type: "remarque",
            titre: "Vérifier",
            texte: "On peut contrôler les solutions en les remplaçant dans l’équation. Pour un polynôme à coefficients réels, si un complexe est racine, son conjugué est aussi racine."
          }
        ]
      },

      {
        id: "tle-maths-ch20-l4",
        titre: "Leçon 4 : Représentation dans le plan",
        blocs: [
          {
            type: "definition",
            titre: "Affixe d’un point",
            texte: "Dans un repère orthonormé du plan, au complexe z = a + bi on associe le point M(a ; b). On dit que z est l’affixe de M.\n\nL’axe horizontal est l’axe réel ; l’axe vertical est l’axe imaginaire."
          },
          {
            type: "schema",
            titre: "Le point d’affixe 2 + i",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='25' y1='170' x2='300' y2='170' stroke='black' stroke-width='2'/><line x1='80' y1='200' x2='80' y2='20' stroke='black' stroke-width='2'/><circle cx='180' cy='120' r='5' fill='#1769aa'/><line x1='180' y1='120' x2='180' y2='170' stroke='#888' stroke-dasharray='4 4'/><line x1='80' y1='120' x2='180' y2='120' stroke='#888' stroke-dasharray='4 4'/><text x='185' y='115' font-size='14'>M(2 ; 1)</text><text x='175' y='188' font-size='13'>2</text><text x='65' y='125' font-size='13'>1</text><text x='67' y='188' font-size='13'>0</text><text x='250' y='162' font-size='13'>axe réel</text><text x='88' y='30' font-size='13'>axe imaginaire</text></svg>",
            legende: "Le point M de coordonnées (2 ; 1) a pour affixe 2 + i."
          },
          {
            type: "exemple",
            titre: "Conjugué et symétrie",
            texte: "Si M a pour affixe z = 2 + i, le point M' d’affixe z̄ = 2 − i a pour coordonnées (2 ; −1).\n\nLes points M et M' sont symétriques par rapport à l’axe réel."
          },
          {
            type: "definition",
            titre: "Affixe d’un vecteur",
            texte: "Si A et B ont pour affixes respectives zA et zB, l’affixe du vecteur AB est zB − zA."
          },
          {
            type: "exemple",
            titre: "Calculer une affixe",
            texte: "Si zA = 1 + 2i et zB = 4 − i, l’affixe du vecteur AB est :\nzB − zA = (4 − i) − (1 + 2i) = 3 − 3i."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Donner la partie réelle et la partie imaginaire de z = −2 + 5i.",
        correction: "Re(z) = −2 et Im(z) = 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer i⁶.",
        correction: "i⁶ = i⁴ × i² = 1 × (−1) = −1."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer (2 + 3i) + (4 − i).",
        correction: "On regroupe les parties réelles et imaginaires : (2 + 4) + (3 − 1)i = 6 + 2i."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer (1 + 2i)(3 + i).",
        correction: "On développe : 3 + i + 6i + 2i² = 3 + 7i − 2 = 1 + 7i."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Donner le conjugué de z = −3 − 4i et calculer z z̄.",
        correction: "Le conjugué est z̄ = −3 + 4i. Le produit vaut (−3)² + (−4)² = 9 + 16 = 25."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écrire (3 + i)/(1 − i) sous forme algébrique.",
        correction: "On multiplie par le conjugué 1 + i :\n(3 + i)/(1 − i) = [(3 + i)(1 + i)]/2 = (3 + 4i + i²)/2 = (2 + 4i)/2 = 1 + 2i."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre dans ℂ : z² = −16.",
        correction: "Les solutions sont z = 4i et z = −4i."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre dans ℂ : z² + 2z + 2 = 0.",
        correction: "Δ = 2² − 4 × 1 × 2 = −4.\nLes solutions sont z = (−2 ± 2i)/2, soit −1 + i et −1 − i."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Donner les coordonnées du point d’affixe z = −2 + 3i.",
        correction: "La partie réelle donne l’abscisse et la partie imaginaire l’ordonnée. Le point a pour coordonnées (−2 ; 3)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer i²⁰²⁵.",
        correction: "2025 = 4 × 506 + 1. Donc i²⁰²⁵ = (i⁴)⁵⁰⁶ × i = i."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre dans ℂ : z² − 4z + 13 = 0.",
        correction: "Δ = (−4)² − 4 × 13 = 16 − 52 = −36.\nLes solutions sont z = (4 ± 6i)/2, soit 2 + 3i et 2 − 3i."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Écrire (2 − i)/(1 + 2i) sous forme algébrique.",
        correction: "On multiplie par 1 − 2i :\n(2 − i)/(1 + 2i) = [(2 − i)(1 − 2i)]/5.\nLe numérateur vaut 2 − 4i − i + 2i² = −5i. Le quotient est donc −i."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer les réels x et y tels que (x + 2) + (2y − 1)i = 5 + 3i.",
        correction: "On identifie les parties : x + 2 = 5 et 2y − 1 = 3. Donc x = 3 et y = 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les points A et B ont pour affixes zA = −1 + i et zB = 2 − 3i. Déterminer l’affixe du vecteur AB.",
        correction: "L’affixe de AB est zB − zA = (2 − 3i) − (−1 + i) = 3 − 4i."
      }
    ]
  }
]);
