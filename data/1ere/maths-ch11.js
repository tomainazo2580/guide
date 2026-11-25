// ===== GUIDE - Mathématiques Première =====
// Chapitre 11 : limites et continuité.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-limites-continuite",
    titre: "Chapitre 11 : Limites et continuité",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-limite-point",
        titre: "Comprendre une limite en un point",
        blocs: [
          {
            type: "introduction",
            titre: "S'approcher sans nécessairement atteindre",
            texte: "Considérons f(x) = (x² - 1)/(x - 1), définie pour x ≠ 1.\n\nPour x ≠ 1, on peut simplifier : f(x) = x + 1.\n\nLorsque x se rapproche de 1, f(x) se rapproche de 2, même si f n'est pas définie en 1. On dit que la limite de f en 1 est 2."
          },
          {
            type: "definition",
            titre: "Limite finie",
            texte: "Dire que f(x) tend vers L lorsque x tend vers a signifie que l'on peut rendre f(x) aussi proche que l'on veut de L en prenant x suffisamment proche de a, dans le domaine de f.\n\nOn écrit : lim(x → a) f(x) = L.\n\nLa limite concerne le comportement près de a. Elle ne dépend pas uniquement de la valeur de f en a : cette valeur peut même ne pas exister."
          },
          {
            type: "tableau",
            titre: "Approcher 1 par la gauche et par la droite",
            entetes: ["x", "0,9", "0,99", "1,01", "1,1"],
            lignes: [
              ["(x² - 1)/(x - 1)", "1,9", "1,99", "2,01", "2,1"]
            ]
          },
          {
            type: "schema",
            titre: "Une limite malgré un point manquant",
            svg: "<svg viewBox='0 0 340 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Droite y égale x plus 1 avec un point non inclus en un deux. La courbe s’approche du point manquant des deux côtés'><rect width='340' height='250' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 70 20 V 210 M 110 20 V 210 M 150 20 V 210 M 190 20 V 210 M 230 20 V 210 M 270 20 V 210'/><path d='M 30 50 H 310 M 30 90 H 310 M 30 130 H 310 M 30 170 H 310'/></g><g stroke='#475569' stroke-width='2'><line x1='30' y1='170' x2='315' y2='170'/><line x1='110' y1='220' x2='110' y2='15'/></g><line x1='30' y1='210' x2='260' y2='-20' stroke='#2563eb' stroke-width='3'/><circle cx='150' cy='90' r='6' fill='white' stroke='#2563eb' stroke-width='3'/><path d='M 150 96 V 170 M 110 90 H 144' stroke='#94a3b8' stroke-dasharray='4 4'/><text x='147' y='188' font-size='13'>1</text><text x='94' y='95' font-size='13'>2</text><text x='115' y='188' font-size='13'>0</text><text x='162' y='82' font-size='14' fill='#1d4ed8'>point exclu</text><text x='302' y='164' font-size='13'>x</text><text x='117' y='25' font-size='13'>y</text></svg>",
            legende: "La courbe est celle de f(x) = (x² - 1)/(x - 1), pour x ≠ 1. Le point (1 ; 2) est exclu, mais la limite en 1 vaut 2."
          },
          {
            type: "remarque",
            titre: "Valeur et limite",
            texte: "Une fonction peut être définie en a sans que sa valeur f(a) soit égale à sa limite en a.\n\nPar exemple, si f(x) = x + 1 pour x ≠ 1 et f(1) = 5, alors lim(x → 1) f(x) = 2, mais f(1) = 5."
          }
        ]
      },

      {
        id: "m1-limites-laterales",
        titre: "Limites à gauche et à droite",
        blocs: [
          {
            type: "definition",
            titre: "Deux façons d'approcher",
            texte: "La limite à gauche de a étudie les valeurs de f(x) lorsque x s'approche de a avec x < a. On la note lim(x → a⁻) f(x).\n\nLa limite à droite étudie les valeurs lorsque x > a. On la note lim(x → a⁺) f(x)."
          },
          {
            type: "regle",
            titre: "Comparer les deux côtés",
            texte: "Lorsque l'on peut approcher a des deux côtés dans le domaine, une limite finie L existe en a si et seulement si les limites à gauche et à droite existent et sont toutes les deux égales à L.\n\nSi elles sont différentes, la fonction n'a pas de limite en a."
          },
          {
            type: "exemple",
            titre: "Un saut",
            texte: "Soit f définie sur ℝ par :\n\nf(x) = 1 si x < 0 ;\nf(x) = 3 si x ≥ 0.\n\nQuand x approche 0 par la gauche, f(x) vaut toujours 1 : la limite à gauche est 1.\n\nQuand x approche 0 par la droite, f(x) vaut toujours 3 : la limite à droite est 3.\n\nElles sont différentes : f n'a pas de limite en 0."
          },
          {
            type: "remarque",
            titre: "Au bord d'un domaine",
            texte: "Pour f(x) = √x, définie sur [0 ; +∞[, on ne peut approcher 0 dans le domaine que par la droite. On étudie alors lim(x → 0⁺) √x = 0."
          }
        ]
      },

      {
        id: "m1-limites-infinies",
        titre: "Limites infinies et limites à l'infini",
        blocs: [
          {
            type: "definition",
            titre: "Deux situations différentes",
            texte: "Dans lim(x → a) f(x) = +∞, x s'approche d'un nombre a et f(x) devient aussi grand que l'on veut.\n\nDans lim(x → +∞) f(x) = L, x devient aussi grand que l'on veut et f(x) s'approche de L.\n\nLes symboles +∞ et -∞ ne sont pas des nombres réels."
          },
          {
            type: "exemple",
            titre: "La fonction inverse",
            texte: "Pour f(x) = 1/x :\n\n• quand x → 0⁺, 1/x → +∞ ;\n• quand x → 0⁻, 1/x → -∞ ;\n• quand x → +∞, 1/x → 0 ;\n• quand x → -∞, 1/x → 0.\n\nLes limites à gauche et à droite de 0 sont différentes."
          },
          {
            type: "schema",
            titre: "Comportement de la fonction inverse",
            svg: "<svg viewBox='0 0 360 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux branches de la courbe y égale un sur x : l’une dans le premier quadrant, l’autre dans le troisième. Elles s’approchent des axes sans les atteindre'><rect width='360' height='260' fill='white'/><g stroke='#475569' stroke-width='2'><line x1='20' y1='130' x2='340' y2='130'/><line x1='180' y1='245' x2='180' y2='15'/></g><path d='M 188 20 C 194 70 206 104 230 114 C 260 123 300 126 340 127' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M 20 133 C 60 134 100 137 130 146 C 154 156 166 190 172 240' fill='none' stroke='#2563eb' stroke-width='3'/><text x='186' y='147' font-size='13'>0</text><text x='322' y='123' font-size='13'>x</text><text x='187' y='25' font-size='13'>y</text><text x='240' y='70' font-size='14' fill='#1d4ed8'>y = 1/x</text></svg>",
            legende: "Schéma qualitatif : près de 0, les deux branches partent en sens opposés. Loin de l'origine horizontalement, elles se rapprochent de l'axe des abscisses."
          },
          {
            type: "definition",
            titre: "Première approche des asymptotes",
            texte: "Si f(x) tend vers +∞ ou -∞ lorsque x tend vers a par au moins un côté, la droite x = a est une asymptote verticale à la courbe.\n\nSi f(x) tend vers L lorsque x tend vers +∞ ou -∞, la droite y = L est une asymptote horizontale dans la direction correspondante.\n\nPour f(x) = 1/x, les axes x = 0 et y = 0 sont des asymptotes."
          }
        ]
      },

      {
        id: "m1-calcul-limites",
        titre: "Calculer des limites simples",
        blocs: [
          {
            type: "regle",
            titre: "Opérations sur les limites finies",
            texte: "Si f(x) → L et g(x) → M lorsque x → a, alors :\n\n• f(x) + g(x) → L + M ;\n• f(x)g(x) → LM ;\n• f(x)/g(x) → L/M si M ≠ 0 et si le quotient est défini près de a.\n\nPour un polynôme, on peut calculer la limite en a en remplaçant x par a. Pour un quotient de polynômes, cela fonctionne si le dénominateur ne s'annule pas en a."
          },
          {
            type: "exemple",
            titre: "Substitution directe",
            texte: "Calculons lim(x → 2) (x² + 1)/(x + 3).\n\nLe numérateur tend vers 2² + 1 = 5 et le dénominateur vers 2 + 3 = 5, qui n'est pas nul.\n\nLa limite vaut donc 5/5 = 1."
          },
          {
            type: "methode",
            titre: "Quand une substitution donne 0/0",
            texte: "L'écriture 0/0 ne donne pas la limite : c'est une forme indéterminée.\n\nOn peut parfois factoriser et simplifier sur le domaine, puis calculer la limite de l'expression simplifiée.\n\nExemple :\n\n(x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2 pour x ≠ 2.\n\nDonc lim(x → 2) (x² - 4)/(x - 2) = 4."
          },
          {
            type: "exemple",
            titre: "À l'infini",
            texte: "Pour x ≠ 0 :\n\n(2x + 1)/x = 2 + 1/x.\n\nComme 1/x tend vers 0 lorsque x tend vers +∞ ou -∞, le quotient tend vers 2 dans les deux directions."
          },
          {
            type: "remarque",
            titre: "Formes indéterminées",
            texte: "Des écritures comme 0/0 ou ∞/∞ ne sont pas des résultats. Elles indiquent qu'il faut transformer ou étudier davantage l'expression.\n\nPar exemple, x/x tend vers 1 quand x tend vers +∞, tandis que x²/x tend vers +∞. Les deux quotients présentent pourtant la forme ∞/∞ avant simplification."
          }
        ]
      },

      {
        id: "m1-continuite",
        titre: "Comprendre la continuité",
        blocs: [
          {
            type: "definition",
            titre: "Continuité en un point",
            texte: "Une fonction f est continue en a si :\n\n• f est définie en a ;\n• f(x) admet une limite lorsque x tend vers a dans son domaine ;\n• cette limite est égale à f(a).\n\nEn bref : lim(x → a) f(x) = f(a). Aux extrémités d'un intervalle, on considère la limite du côté accessible dans le domaine."
          },
          {
            type: "exemple",
            titre: "Une fonction continue",
            texte: "Soit f(x) = x² + 1. En a = 2 :\n\nf(2) = 5 et lim(x → 2) (x² + 1) = 5.\n\nLa limite est égale à la valeur de la fonction : f est continue en 2."
          },
          {
            type: "exemple",
            titre: "Une fonction discontinue",
            texte: "Soit g définie par g(x) = x + 1 si x ≠ 1 et g(1) = 5.\n\nSa limite en 1 vaut 2, mais g(1) = 5. La limite et la valeur sont différentes : g n'est pas continue en 1."
          },
          {
            type: "regle",
            titre: "Fonctions usuelles",
            texte: "Les fonctions polynômes sont continues sur ℝ.\n\nUn quotient de polynômes est continu en chaque point où son dénominateur est non nul.\n\nLa fonction racine carrée est continue sur [0 ; +∞[."
          },
          {
            type: "exemple",
            titre: "Prolonger par continuité",
            texte: "Soit f(x) = (x² - 1)/(x - 1), définie pour x ≠ 1. Sa limite en 1 vaut 2.\n\nOn définit g sur ℝ par g(x) = f(x) pour x ≠ 1 et g(1) = 2.\n\nAlors g est un prolongement de f et elle est continue en 1. Ici, g(x) = x + 1 pour tout réel x."
          },
          {
            type: "remarque",
            titre: "Un dessin ne suffit pas toujours",
            texte: "L'idée d'une courbe que l'on peut tracer « sans lever le crayon » peut aider à imaginer la continuité. Mais pour conclure en un point, il faut comparer la limite à la valeur de la fonction."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule les limites suivantes :\n\n1. lim(x → 2) (x + 3)\n2. lim(x → -1) (x² + 2)",
        correction: "1. La fonction x ↦ x + 3 est un polynôme. Sa limite en 2 vaut 2 + 3 = 5.\n\n2. La limite vaut (-1)² + 2 = 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f définie sur ℝ par f(x) = 2 si x < 0 et f(x) = 4 si x ≥ 0.\n\nDonne les limites à gauche et à droite de 0. La fonction possède-t-elle une limite en 0 ?",
        correction: "À gauche de 0, f(x) vaut 2 : la limite à gauche est 2.\n\nÀ droite de 0, f(x) vaut 4 : la limite à droite est 4.\n\nCes limites sont différentes, donc f n'a pas de limite en 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule :\n\n1. lim(x → 1) (2x + 3)/(x + 1)\n2. lim(x → 3) (x² - 9)/(x - 3).",
        correction: "1. Le dénominateur tend vers 2, qui est non nul. La limite vaut (2 + 3)/2 = 5/2.\n\n2. Pour x ≠ 3 :\n\n(x² - 9)/(x - 3) = (x - 3)(x + 3)/(x - 3) = x + 3.\n\nLa limite en 3 vaut donc 6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = 1/(x - 2).\n\n1. Donne son domaine.\n2. Détermine ses limites lorsque x tend vers 2 par la gauche et par la droite.",
        correction: "1. Le dénominateur doit être non nul : Df = ℝ privé de {2}.\n\n2. À gauche de 2, x - 2 est négatif et tend vers 0 : 1/(x - 2) tend vers -∞.\n\nÀ droite de 2, x - 2 est positif et tend vers 0 : 1/(x - 2) tend vers +∞."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f définie sur ℝ par f(x) = x² si x ≠ 2 et f(2) = 5.\n\n1. Calcule la limite de f en 2.\n2. f est-elle continue en 2 ?\n3. Quelle valeur faudrait-il donner à f(2) pour obtenir une fonction continue en 2 ?",
        correction: "1. Près de 2, pour x ≠ 2, f(x) = x². Sa limite est donc 2² = 4.\n\n2. Non : f(2) = 5, tandis que la limite vaut 4.\n\n3. Il faudrait définir la valeur en 2 égale à 4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Détermine les limites en +∞ et en -∞ de f(x) = (3x - 2)/x. Indique une asymptote horizontale.",
        correction: "Pour x ≠ 0 :\n\nf(x) = 3 - 2/x.\n\nLorsque x tend vers +∞ ou vers -∞, 2/x tend vers 0. Dans les deux directions, f(x) tend donc vers 3.\n\nLa droite y = 3 est une asymptote horizontale."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On définit f pour x ≠ 2 par f(x) = (x² - 4)/(x - 2).\n\n1. Simplifie f(x) sur son domaine.\n2. Calcule sa limite en 2.\n3. Définis un prolongement g de f à ℝ qui soit continu en 2.\n4. Explique pourquoi la valeur choisie en 2 est nécessaire pour la continuité.",
        correction: "1. Pour x ≠ 2 :\n\nf(x) = (x - 2)(x + 2)/(x - 2) = x + 2.\n\n2. lim(x → 2) f(x) = 2 + 2 = 4.\n\n3. On définit g(x) = f(x) si x ≠ 2 et g(2) = 4. Ainsi g(x) = x + 2 pour tout réel x : g est continue en 2.\n\n4. Pour être continue en 2, g doit vérifier g(2) = lim(x → 2) g(x) = 4. Toute autre valeur rendrait le prolongement discontinu en 2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f définie sur ℝ par :\n\nf(x) = x + 2 si x < 1 ;\nf(x) = ax + 1 si x ≥ 1,\n\noù a est un réel.\n\n1. Détermine la limite à gauche de 1.\n2. Détermine la limite à droite de 1 et f(1).\n3. Pour quelle valeur de a la fonction est-elle continue en 1 ?",
        correction: "1. À gauche, f(x) = x + 2, donc la limite vaut 1 + 2 = 3.\n\n2. À droite, f(x) = ax + 1, donc la limite vaut a + 1. Comme la seconde formule s'applique en 1, f(1) = a + 1.\n\n3. Pour la continuité, les limites latérales et f(1) doivent être égales. Il faut donc a + 1 = 3, soit a = 2.\n\nPour a = 2, les deux limites valent 3 et f(1) = 3 : la fonction est continue en 1."
      }
    ]
  }
]);
