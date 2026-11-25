// ===== GUIDE - Mathématiques Première =====
// Chapitre 18 : bornes et approche de la convergence des suites.
// Les majorants et minorants sont explicitement mentionnés
// dans la répartition de Première C.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-suites-bornes-convergence",
    titre: "Chapitre 18 : Bornes et approche de la convergence des suites",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-suites-bornes",
        titre: "Majorants et minorants",
        blocs: [
          {
            type: "introduction",
            titre: "Une suite peut rester dans une zone",
            texte: "Considérons la suite uₙ = 1/(n + 1), pour n ≥ 0.\n\nSes premiers termes sont 1, 1/2, 1/3, 1/4… Ils sont tous strictement positifs et aucun ne dépasse 1.\n\nOn dit que la suite est minorée par 0 et majorée par 1."
          },
          {
            type: "definition",
            titre: "Suite majorée, minorée ou bornée",
            texte: "Une suite (uₙ) est majorée s'il existe un réel M tel que, pour tout rang n :\n\nuₙ ≤ M.\n\nLe nombre M est alors un majorant de la suite.\n\nElle est minorée s'il existe un réel m tel que, pour tout rang n :\n\nm ≤ uₙ.\n\nLe nombre m est alors un minorant. Une suite est bornée si elle est à la fois majorée et minorée."
          },
          {
            type: "exemple",
            titre: "Plusieurs bornes possibles",
            texte: "Pour uₙ = 1/(n + 1), avec n ≥ 0 :\n\n0 < uₙ ≤ 1.\n\nDonc 0 est un minorant et 1 est un majorant. Le nombre -2 est aussi un minorant, et 5 est aussi un majorant.\n\nUne borne n'est pas forcément un terme de la suite : ici, aucun terme ne vaut 0."
          },
          {
            type: "remarque",
            titre: "Majorant et maximum",
            texte: "Un majorant n'est pas nécessairement atteint.\n\nPour uₙ = 1/(n + 1), 5 est un majorant, mais aucun terme ne vaut 5. En revanche, 1 est le maximum de la suite, car tous les termes sont au plus égaux à 1 et u₀ = 1."
          },
          {
            type: "exemple",
            titre: "Une suite non majorée",
            texte: "Pour vₙ = n, les termes deviennent aussi grands que l'on veut. Aucun réel ne peut être un majorant de tous les termes : la suite n'est pas majorée.\n\nElle est cependant minorée par 0."
          }
        ]
      },

      {
        id: "m1-convergence-notion",
        titre: "Comprendre la convergence",
        blocs: [
          {
            type: "definition",
            titre: "Converger vers un réel",
            texte: "Une suite (uₙ) converge vers un réel L si ses termes deviennent aussi proches que l'on veut de L à partir d'un rang suffisamment grand.\n\nOn écrit : lim(n → +∞) uₙ = L, ou uₙ → L.\n\nPlus précisément, pour tout nombre ε > 0, il existe un rang N tel que, pour tout n ≥ N, |uₙ - L| < ε."
          },
          {
            type: "exemple",
            titre: "La suite 1/(n + 1)",
            texte: "Pour uₙ = 1/(n + 1), les termes se rapprochent de 0 :\n\nu₀ = 1 ; u₉ = 0,1 ; u₉₉ = 0,01.\n\nPlus généralement, pour rendre uₙ < ε avec ε > 0, il suffit de choisir n assez grand pour que n + 1 > 1/ε.\n\nAinsi uₙ → 0."
          },
          {
            type: "schema",
            titre: "Une suite qui se rapproche de 0",
            svg: "<svg viewBox='0 0 360 240' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Points isolés de la suite un sur n plus un : ils descendent et se rapprochent de l’axe horizontal sans l’atteindre'><rect width='360' height='240' fill='white'/><g stroke='#475569' stroke-width='2'><line x1='35' y1='190' x2='335' y2='190'/><line x1='55' y1='210' x2='55' y2='20'/></g><g stroke='#e2e8f0' stroke-width='1'><line x1='35' y1='70' x2='330' y2='70'/><line x1='35' y1='130' x2='330' y2='130'/></g><g fill='#2563eb'><circle cx='55' cy='70' r='5'/><circle cx='95' cy='130' r='5'/><circle cx='135' cy='150' r='5'/><circle cx='175' cy='160' r='5'/><circle cx='215' cy='166' r='5'/><circle cx='255' cy='170' r='5'/><circle cx='295' cy='173' r='5'/></g><g font-size='13' fill='#334155'><text x='48' y='208'>0</text><text x='91' y='208'>1</text><text x='131' y='208'>2</text><text x='171' y='208'>3</text><text x='211' y='208'>4</text><text x='28' y='75'>1</text><text x='20' y='135'>1/2</text><text x='321' y='184'>n</text><text x='62' y='28'>uₙ</text></g></svg>",
            legende: "Les points représentent les premiers termes de uₙ = 1/(n + 1). Leur ordonnée reste positive et se rapproche de 0 lorsque le rang grandit."
          },
          {
            type: "remarque",
            titre: "La limite n'est pas forcément atteinte",
            texte: "La suite 1/(n + 1) converge vers 0, mais aucun de ses termes n'est égal à 0.\n\nConverger vers L ne signifie donc pas nécessairement que la suite atteint L."
          },
          {
            type: "remarque",
            titre: "Les premiers termes ne suffisent pas",
            texte: "Un tableau numérique ou un graphique aide à conjecturer une limite, mais ne démontre pas à lui seul ce qui se passe pour tous les rangs suffisamment grands."
          }
        ]
      },

      {
        id: "m1-suites-divergence",
        titre: "Reconnaître quelques comportements",
        blocs: [
          {
            type: "definition",
            titre: "Divergence",
            texte: "Une suite qui ne converge pas vers un réel est dite divergente.\n\nElle peut tendre vers +∞ ou -∞, mais elle peut aussi ne pas avoir de limite en raison d'oscillations."
          },
          {
            type: "exemple",
            titre: "Tendre vers +∞",
            texte: "Pour uₙ = n, les termes deviennent aussi grands que l'on veut lorsque n augmente.\n\nOn écrit uₙ → +∞. Cette suite ne converge pas vers un réel."
          },
          {
            type: "exemple",
            titre: "Une suite bornée mais non convergente",
            texte: "Pour vₙ = (-1)ⁿ :\n\nv₀ = 1 ; v₁ = -1 ; v₂ = 1 ; v₃ = -1 ; …\n\nTous les termes sont entre -1 et 1 : la suite est bornée. Mais les termes de rang pair valent toujours 1 et ceux de rang impair valent toujours -1. Ils ne se rapprochent pas d'un même réel : la suite diverge."
          },
          {
            type: "remarque",
            titre: "Bornée ne veut pas dire convergente",
            texte: "L'exemple de (-1)ⁿ montre qu'une suite bornée peut diverger.\n\nEn revanche, toute suite qui converge vers un réel est bornée."
          }
        ]
      },

      {
        id: "m1-convergence-geometrique",
        titre: "Limites de quelques suites usuelles",
        blocs: [
          {
            type: "regle",
            titre: "Suites de référence",
            texte: "Lorsque n tend vers +∞ :\n\n• 1/n → 0, pour n ≥ 1 ;\n• n → +∞ ;\n• si |q| < 1, alors qⁿ → 0 ;\n• si q > 1, alors qⁿ → +∞ ;\n• si q = 1, alors qⁿ = 1 pour tout n ;\n• si q ≤ -1, la suite qⁿ ne converge pas vers un réel."
          },
          {
            type: "exemple",
            titre: "Une suite géométrique convergente",
            texte: "Soit uₙ = 5 × 0,8ⁿ. Comme |0,8| < 1, on a 0,8ⁿ → 0.\n\nDonc uₙ → 0. Les termes se rapprochent de 0 tout en restant positifs."
          },
          {
            type: "exemple",
            titre: "Une oscillation qui s'amortit",
            texte: "Soit vₙ = (-1/2)ⁿ. Les signes alternent, mais les valeurs absolues valent (1/2)ⁿ et tendent vers 0.\n\nLa suite converge donc vers 0, même si elle n'est pas monotone."
          },
          {
            type: "remarque",
            titre: "Attention au premier terme nul",
            texte: "Si une suite géométrique s'écrit uₙ = u₀qⁿ avec u₀ = 0, tous ses termes sont nuls, quelle que soit la raison q. Elle converge alors vers 0."
          }
        ]
      },

      {
        id: "m1-convergence-monotone",
        titre: "Utiliser les bornes et les variations",
        blocs: [
          {
            type: "regle",
            titre: "Théorème des suites monotones",
            texte: "• Toute suite croissante et majorée converge vers un réel.\n• Toute suite décroissante et minorée converge vers un réel.\n\nCe résultat garantit l'existence d'une limite, mais ne donne pas toujours directement sa valeur."
          },
          {
            type: "exemple",
            titre: "Une suite croissante et majorée",
            texte: "Soit uₙ = 1 - 1/(n + 1), pour n ≥ 0.\n\nComme 1/(n + 1) > 0, on a uₙ < 1 : la suite est majorée par 1.\n\nDe plus :\n\nuₙ₊₁ - uₙ = 1/(n + 1) - 1/(n + 2)\n= 1/[(n + 1)(n + 2)] > 0.\n\nElle est donc strictement croissante et majorée : elle converge. Ici, puisque 1/(n + 1) → 0, sa limite est 1."
          },
          {
            type: "methode",
            titre: "Une suite définie par récurrence",
            texte: "Pour certaines suites définies par uₙ₊₁ = f(uₙ), on peut :\n\n1. montrer que la suite est monotone et bornée, puis conclure qu'elle converge ;\n2. noter L sa limite ;\n3. si f est continue au point L, passer à la limite dans la relation pour obtenir L = f(L) ;\n4. utiliser les bornes connues pour choisir les solutions possibles.\n\nRésoudre L = f(L) seul ne prouve pas que la suite converge."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soit uₙ = 1/(n + 1) pour n ≥ 0.\n\n1. Calcule u₀ et u₃.\n2. Justifie que 0 est un minorant et 1 un majorant.",
        correction: "1. u₀ = 1 et u₃ = 1/4.\n\n2. Pour n ≥ 0, n + 1 ≥ 1. Donc 0 < 1/(n + 1) ≤ 1. Ainsi 0 est un minorant et 1 un majorant."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La suite uₙ = (-1)ⁿ est-elle bornée ? Donne un minorant et un majorant.",
        correction: "Chaque terme vaut soit -1, soit 1. Donc -1 ≤ uₙ ≤ 1 pour tout n.\n\nLa suite est bornée : -1 est un minorant et 1 un majorant."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Détermine la limite de chaque suite :\n\n1. uₙ = 3 + 1/(n + 1)\n2. vₙ = 7 × (1/2)ⁿ",
        correction: "1. 1/(n + 1) → 0, donc uₙ → 3.\n\n2. Comme |1/2| < 1, (1/2)ⁿ → 0. Donc vₙ → 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour chacune des suites suivantes, indique si elle converge vers un réel :\n\n1. uₙ = n + 2\n2. vₙ = (-1)ⁿ\n3. wₙ = (-1/3)ⁿ",
        correction: "1. uₙ → +∞ : elle ne converge pas vers un réel.\n\n2. vₙ alterne entre 1 et -1 : elle ne converge pas.\n\n3. |-1/3| < 1, donc wₙ → 0. Elle converge vers 0 malgré l'alternance des signes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit uₙ = 2 - 1/(n + 1), pour n ≥ 0.\n\n1. Montre que la suite est majorée par 2.\n2. Calcule uₙ₊₁ - uₙ et donne son sens de variation.\n3. Détermine sa limite.",
        correction: "1. Comme 1/(n + 1) > 0, uₙ < 2. Le nombre 2 est un majorant.\n\n2. uₙ₊₁ - uₙ = 1/(n + 1) - 1/(n + 2) = 1/[(n + 1)(n + 2)] > 0. La suite est strictement croissante.\n\n3. Comme 1/(n + 1) → 0, on obtient uₙ → 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit uₙ = 3 × (1/2)ⁿ pour n ≥ 0.\n\n1. Montre que la suite est bornée.\n2. Étudie son sens de variation.\n3. Détermine sa limite.",
        correction: "1. Pour tout n ≥ 0, 0 < (1/2)ⁿ ≤ 1. Donc 0 < uₙ ≤ 3 : la suite est bornée.\n\n2. uₙ₊₁ = (1/2)uₙ et uₙ > 0, donc uₙ₊₁ < uₙ. La suite est strictement décroissante.\n\n3. Comme |1/2| < 1, uₙ → 0."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On définit u₀ = 0 et, pour tout n ≥ 0, uₙ₊₁ = (uₙ + 4)/2.\n\n1. Calcule u₁, u₂ et u₃.\n2. Montre que uₙ < 4 pour tout n.\n3. Montre que la suite est croissante.\n4. Justifie sa convergence et détermine sa limite.",
        correction: "1. u₁ = 2 ; u₂ = 3 ; u₃ = 3,5.\n\n2. Au départ, u₀ = 0 < 4. Si uₙ < 4, alors uₙ + 4 < 8, donc uₙ₊₁ = (uₙ + 4)/2 < 4. Par récurrence, uₙ < 4 pour tout n.\n\n3. uₙ₊₁ - uₙ = (4 - uₙ)/2. Comme uₙ < 4, cette différence est positive : la suite est strictement croissante.\n\n4. La suite est croissante et majorée par 4, donc elle converge vers un réel L. La fonction x ↦ (x + 4)/2 est continue. En passant à la limite dans la relation :\n\nL = (L + 4)/2, donc 2L = L + 4 et L = 4."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On définit uₙ = n/(n + 1) pour n ≥ 0.\n\n1. Réécris uₙ sous la forme 1 - quelque chose.\n2. Montre que la suite est bornée.\n3. Étudie ses variations.\n4. Détermine sa limite et indique si elle atteint cette limite.",
        correction: "1. Comme n = (n + 1) - 1 :\n\nuₙ = 1 - 1/(n + 1).\n\n2. Pour n ≥ 0, 0 < 1/(n + 1) ≤ 1. Donc 0 ≤ uₙ < 1 : la suite est bornée.\n\n3. uₙ₊₁ - uₙ = 1/(n + 1) - 1/(n + 2) = 1/[(n + 1)(n + 2)] > 0. Elle est strictement croissante.\n\n4. Comme 1/(n + 1) → 0, uₙ → 1. Mais uₙ < 1 pour tout n : la suite n'atteint jamais sa limite."
      }
    ]
  }
]);
