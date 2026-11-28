enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch2",
    titre: "Chapitre 2 : Limites et asymptotes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch2-l1",
        titre: "Leçon 1 : Comprendre une limite",
        blocs: [
          {
            type: "introduction",
            titre: "L’idée de limite",
            texte: "Étudier la limite d’une fonction, c’est observer le comportement de ses valeurs lorsque x se rapproche d’un nombre ou devient très grand en valeur absolue. On ne demande pas nécessairement à x d’atteindre la valeur étudiée."
          },
          {
            type: "definition",
            titre: "Limite finie en un nombre",
            texte: "Dire que f(x) tend vers le nombre L lorsque x tend vers a signifie que f(x) peut être rendu aussi proche de L que l’on veut en prenant x suffisamment proche de a, avec x dans l’ensemble de définition de f et x différent de a.\n\nOn écrit : lim lorsque x → a de f(x) = L.\n\nLa fonction peut ne pas être définie en a : la limite concerne les valeurs proches de a."
          },
          {
            type: "exemple",
            titre: "Une limite malgré une valeur interdite",
            texte: "Pour x ≠ 1, on pose f(x) = (x² − 1)/(x − 1).\n\nComme x² − 1 = (x − 1)(x + 1), on a f(x) = x + 1 pour x ≠ 1. Quand x se rapproche de 1, x + 1 se rapproche de 2.\n\nDonc lim lorsque x → 1 de f(x) = 2, même si f n’est pas définie en 1."
          },
          {
            type: "definition",
            titre: "Limite à gauche et limite à droite",
            texte: "Une limite à gauche étudie les valeurs de x inférieures à a qui se rapprochent de a : on note x → a⁻.\n\nUne limite à droite étudie les valeurs de x supérieures à a qui se rapprochent de a : on note x → a⁺.\n\nLorsque les deux côtés sont accessibles, une limite en a existe si les limites à gauche et à droite existent et sont égales."
          },
          {
            type: "exemple",
            titre: "Deux comportements différents",
            texte: "Pour f(x) = 1/x, lorsque x → 0⁺, les valeurs de f(x) deviennent positives et arbitrairement grandes : la limite est +∞.\n\nLorsque x → 0⁻, elles deviennent négatives et leur valeur absolue devient arbitrairement grande : la limite est −∞.\n\nLes deux comportements étant différents, f n’a pas de limite unique en 0."
          },
          {
            type: "definition",
            titre: "Limites à l’infini",
            texte: "Quand x → +∞, x prend des valeurs positives de plus en plus grandes. Quand x → −∞, x prend des valeurs négatives de plus en plus éloignées de zéro.\n\nPar exemple, 1/x tend vers 0 lorsque x → +∞ et aussi lorsque x → −∞."
          },
          {
            type: "remarque",
            titre: "Que signifie le symbole ∞ ?",
            texte: "+∞ et −∞ ne sont pas des nombres réels. Une limite égale à +∞ signifie que la fonction finit par dépasser tout nombre fixé ; une limite égale à −∞ signifie qu’elle finit par être inférieure à tout nombre fixé."
          }
        ]
      },

      {
        id: "tle-maths-ch2-l2",
        titre: "Leçon 2 : Calculer des limites simples",
        blocs: [
          {
            type: "tableau",
            titre: "Limites de référence",
            entetes: ["Fonction", "Quand x → +∞", "Quand x → −∞"],
            lignes: [
              ["x", "+∞", "−∞"],
              ["x²", "+∞", "+∞"],
              ["x³", "+∞", "−∞"],
              ["1/x", "0", "0"],
              ["1/x²", "0", "0"],
              ["√x", "+∞", "Non définie pour x < 0"]
            ]
          },
          {
            type: "methode",
            titre: "Utiliser les opérations",
            texte: "Si f(x) → L et g(x) → M, avec L et M réels, alors f(x) + g(x) → L + M et f(x)g(x) → LM. Si M ≠ 0, alors f(x)/g(x) → L/M.\n\nPour un polynôme en un nombre réel a, on peut remplacer x par a. Pour un quotient de polynômes, on peut aussi remplacer x par a si le dénominateur obtenu n’est pas nul."
          },
          {
            type: "exemple",
            titre: "Calcul direct",
            texte: "Pour f(x) = (x² + 1)/(x + 2), lorsque x → 1, le numérateur tend vers 2 et le dénominateur vers 3, qui est non nul.\n\nDonc lim lorsque x → 1 de f(x) = 2/3."
          },
          {
            type: "methode",
            titre: "Polynômes à l’infini",
            texte: "À l’infini, un polynôme non nul a la même limite que son terme de plus haut degré.\n\nPour le comprendre, on peut factoriser par la plus grande puissance de x, puis utiliser le fait que 1/x et ses puissances tendent vers 0."
          },
          {
            type: "exemple",
            titre: "Terme de plus haut degré",
            texte: "Soit P(x) = −2x³ + 5x − 1.\n\nOn écrit P(x) = x³(−2 + 5/x² − 1/x³). La parenthèse tend vers −2 aux deux infinis.\n\nAinsi P(x) → −∞ quand x → +∞ et P(x) → +∞ quand x → −∞."
          },
          {
            type: "methode",
            titre: "Quotients de polynômes à l’infini",
            texte: "On factorise le numérateur et le dénominateur par leurs termes de plus haut degré, ou on divise chacun par la plus grande puissance de x utile.\n\nLorsque les degrés sont égaux, la limite est le quotient des coefficients dominants. Lorsque le degré du numérateur est inférieur, la limite est 0. Si le degré du numérateur est supérieur, il faut étudier le signe du rapport des termes dominants."
          },
          {
            type: "exemple",
            titre: "Même degré",
            texte: "Pour f(x) = (3x² − 1)/(2x² + x), on divise par x² :\nf(x) = (3 − 1/x²)/(2 + 1/x).\n\nQuand x → +∞ ou x → −∞, les termes 1/x et 1/x² tendent vers 0. La limite est donc 3/2 aux deux infinis."
          }
        ]
      },

      {
        id: "tle-maths-ch2-l3",
        titre: "Leçon 3 : Formes indéterminées et méthodes",
        blocs: [
          {
            type: "definition",
            titre: "Une forme indéterminée",
            texte: "Une forme indéterminée apparaît lorsque les limites des différentes parties ne suffisent pas à conclure. Parmi les formes rencontrées : 0/0, ∞/∞, ∞ − ∞ et 0 × ∞.\n\nCe ne sont pas des résultats : il faut transformer l’expression ou utiliser un raisonnement adapté."
          },
          {
            type: "methode",
            titre: "Factoriser",
            texte: "Pour une forme 0/0, on peut chercher un facteur commun au numérateur et au dénominateur, puis simplifier pour les valeurs de x où ce facteur est non nul. On calcule ensuite la limite de l’expression simplifiée."
          },
          {
            type: "exemple",
            titre: "Simplification d’une forme 0/0",
            texte: "Calculons lim lorsque x → 2 de (x² − 4)/(x − 2).\n\nLe remplacement direct donne la forme 0/0. Pour x ≠ 2 :\n(x² − 4)/(x − 2) = (x − 2)(x + 2)/(x − 2) = x + 2.\n\nLa limite vaut donc 4. On n’a pas attribué de valeur à l’expression initiale en 2."
          },
          {
            type: "methode",
            titre: "Utiliser l’expression conjuguée",
            texte: "Lorsque l’expression contient une différence avec une racine carrée, on peut multiplier le numérateur et le dénominateur par l’expression conjuguée. On utilise l’identité (a − b)(a + b) = a² − b²."
          },
          {
            type: "exemple",
            titre: "Une racine carrée",
            texte: "Calculons lim lorsque x → 0 de (√(1 + x) − 1)/x.\n\nPour x ≠ 0 et x ≥ −1, on multiplie par le conjugué :\n(√(1 + x) − 1)/x = x/[x(√(1 + x) + 1)] = 1/(√(1 + x) + 1).\n\nLorsque x → 0, le dénominateur tend vers 2. La limite vaut donc 1/2."
          },
          {
            type: "methode",
            titre: "Encadrer une fonction",
            texte: "Si, près de la valeur étudiée, on a u(x) ≤ f(x) ≤ v(x), et si u(x) et v(x) tendent vers la même limite L, alors f(x) tend aussi vers L. Ce résultat est appelé théorème des gendarmes."
          },
          {
            type: "exemple",
            titre: "Un encadrement",
            texte: "Pour tout réel x, −1 ≤ sin(x) ≤ 1. Comme x² ≥ 0 :\n−x² ≤ x² sin(x) ≤ x².\n\nLorsque x → 0, les deux bornes tendent vers 0. Donc x² sin(x) tend vers 0."
          },
          {
            type: "remarque",
            titre: "Un dénominateur qui tend vers zéro",
            texte: "Si le numérateur tend vers un réel non nul et le dénominateur tend vers zéro, on étudie le signe du quotient de chaque côté. Le résultat peut être +∞ d’un côté et −∞ de l’autre."
          }
        ]
      },

      {
        id: "tle-maths-ch2-l4",
        titre: "Leçon 4 : Asymptotes",
        blocs: [
          {
            type: "definition",
            titre: "Asymptote verticale",
            texte: "La droite d’équation x = a est une asymptote verticale à la courbe de f si f(x) tend vers +∞ ou −∞ lorsque x tend vers a, au moins d’un côté."
          },
          {
            type: "exemple",
            titre: "Asymptote verticale",
            texte: "Pour f(x) = 1/(x − 2), lorsque x → 2⁺, le dénominateur est positif et tend vers 0 : f(x) → +∞.\n\nLorsque x → 2⁻, le dénominateur est négatif et tend vers 0 : f(x) → −∞.\n\nLa droite x = 2 est une asymptote verticale."
          },
          {
            type: "definition",
            titre: "Asymptote horizontale",
            texte: "Si f(x) tend vers un réel L lorsque x → +∞, la droite y = L est une asymptote horizontale à la courbe en +∞. La même définition s’applique en −∞.\n\nLes limites aux deux infinis peuvent être différentes."
          },
          {
            type: "exemple",
            titre: "Asymptote horizontale",
            texte: "Pour f(x) = 2 + 1/x, le terme 1/x tend vers 0 aux deux infinis. Donc f(x) tend vers 2 lorsque x → +∞ et lorsque x → −∞.\n\nLa droite y = 2 est une asymptote horizontale aux deux infinis."
          },
          {
            type: "definition",
            titre: "Asymptote oblique",
            texte: "La droite y = ax + b, avec a ≠ 0, est une asymptote oblique en +∞ si f(x) − (ax + b) tend vers 0 lorsque x → +∞. On utilise la même condition en −∞."
          },
          {
            type: "methode",
            titre: "Étudier la position par rapport à une asymptote",
            texte: "On étudie le signe de f(x) − (ax + b).\n• Si cette différence est positive, la courbe est au-dessus de la droite.\n• Si elle est négative, la courbe est au-dessous.\n• Si elle est nulle, la courbe rencontre la droite.\n\nUne courbe peut donc couper une asymptote."
          },
          {
            type: "exemple",
            titre: "Asymptote oblique et position",
            texte: "Soit f(x) = x + 1 + 1/x, pour x ≠ 0.\n\nOn a f(x) − (x + 1) = 1/x, qui tend vers 0 aux deux infinis. La droite y = x + 1 est donc une asymptote oblique en +∞ et en −∞.\n\nSi x > 0, 1/x > 0 : la courbe est au-dessus de la droite. Si x < 0, elle est au-dessous."
          },
          {
            type: "schema",
            titre: "Asymptotes de la courbe y = 1/x",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='20' y1='110' x2='300' y2='110' stroke='#444' stroke-width='1.5' stroke-dasharray='5 4'/><line x1='160' y1='15' x2='160' y2='205' stroke='#444' stroke-width='1.5' stroke-dasharray='5 4'/><path d='M172 20 C176 49 184 80 205 94 C230 103 260 106 295 108' fill='none' stroke='#1769aa' stroke-width='3'/><path d='M148 200 C144 171 136 140 115 126 C90 117 60 114 25 112' fill='none' stroke='#1769aa' stroke-width='3'/><text x='285' y='103' font-size='13'>x</text><text x='168' y='25' font-size='13'>y</text><text x='165' y='125' font-size='12'>0</text><text x='205' y='65' font-size='13' fill='#1769aa'>y = 1/x</text></svg>",
            legende: "Schéma qualitatif : l’axe vertical x = 0 est une asymptote verticale ; l’axe horizontal y = 0 est une asymptote horizontale aux deux infinis."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la limite de 3x² − 2x + 1 lorsque x tend vers 2.",
        correction: "Il s’agit d’un polynôme : on remplace x par 2.\n3 × 2² − 2 × 2 + 1 = 12 − 4 + 1 = 9.\nLa limite vaut 9."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la limite de (x + 1)/(x + 3) lorsque x tend vers 1.",
        correction: "Le dénominateur tend vers 4, qui est non nul. On remplace donc x par 1 : la limite vaut (1 + 1)/(1 + 3) = 1/2."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer les limites de 1/x lorsque x tend vers +∞ et vers −∞.",
        correction: "Lorsque |x| devient très grand, 1/|x| se rapproche de 0. Ainsi 1/x tend vers 0 en +∞ et vers 0 en −∞."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les limites de 4x² − 3x + 2 en +∞ et en −∞.",
        correction: "Le terme de plus haut degré est 4x². Il tend vers +∞ aux deux infinis.\nLe polynôme a donc pour limite +∞ en +∞ et en −∞."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer la limite de (2x² + 3)/(x² − 4x) lorsque x tend vers +∞.",
        correction: "Pour x suffisamment grand, on divise par x² :\n(2x² + 3)/(x² − 4x) = (2 + 3/x²)/(1 − 4/x).\nLe numérateur tend vers 2 et le dénominateur vers 1. La limite vaut 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer la limite de (x² − 9)/(x − 3) lorsque x tend vers 3.",
        correction: "Le remplacement direct donne 0/0. Pour x ≠ 3 :\n(x² − 9)/(x − 3) = (x − 3)(x + 3)/(x − 3) = x + 3.\nLa limite vaut donc 6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les limites de 1/(x + 2) lorsque x tend vers −2 par la gauche, puis par la droite.",
        correction: "Quand x → −2⁻, x + 2 est négatif et tend vers 0 : le quotient tend vers −∞.\nQuand x → −2⁺, x + 2 est positif et tend vers 0 : le quotient tend vers +∞."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les asymptotes verticale et horizontale de f(x) = 1/(x − 4).",
        correction: "Lorsque x → 4⁻, f(x) → −∞ ; lorsque x → 4⁺, f(x) → +∞. Donc x = 4 est une asymptote verticale.\nAux deux infinis, 1/(x − 4) tend vers 0. Donc y = 0 est une asymptote horizontale en +∞ et en −∞."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer la limite de (√(x + 4) − 2)/x lorsque x tend vers 0.",
        correction: "Le remplacement direct donne 0/0. Pour x ≠ 0 et x ≥ −4, on multiplie par le conjugué :\n(√(x + 4) − 2)/x = [(x + 4) − 4]/[x(√(x + 4) + 2)] = 1/(√(x + 4) + 2).\nLa limite vaut 1/(2 + 2) = 1/4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = (2x² + 1)/x pour x ≠ 0. Montrer que la courbe admet une asymptote oblique aux deux infinis et préciser sa position.",
        correction: "On écrit f(x) = 2x + 1/x. Ainsi f(x) − 2x = 1/x, qui tend vers 0 en +∞ et en −∞.\nLa droite y = 2x est donc une asymptote oblique aux deux infinis.\nPour x > 0, 1/x > 0 : la courbe est au-dessus de la droite. Pour x < 0, 1/x < 0 : elle est au-dessous."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer la limite de x² cos(x) lorsque x tend vers 0.",
        correction: "Pour tout réel x, −1 ≤ cos(x) ≤ 1. Comme x² ≥ 0 :\n−x² ≤ x² cos(x) ≤ x².\nLes deux bornes tendent vers 0 lorsque x → 0. Par le théorème des gendarmes, x² cos(x) tend vers 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = (x² + 1)/(x − 1). Montrer que f(x) = x + 1 + 2/(x − 1), puis déterminer les asymptotes verticale et oblique de sa courbe.",
        correction: "On vérifie : (x − 1)(x + 1) + 2 = x² − 1 + 2 = x² + 1. Donc, pour x ≠ 1, f(x) = x + 1 + 2/(x − 1).\n\nQuand x → 1⁻, le terme 2/(x − 1) tend vers −∞ ; quand x → 1⁺, il tend vers +∞. La droite x = 1 est une asymptote verticale.\n\nAux deux infinis, f(x) − (x + 1) = 2/(x − 1) tend vers 0. La droite y = x + 1 est une asymptote oblique en +∞ et en −∞."
      }
    ]
  }
]);
