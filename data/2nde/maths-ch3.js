// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 3 : majorants, minorants, maximum et minimum.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-bornes-maximum-minimum",
    titre: "Chapitre 3 : Bornes, maximum et minimum",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch3-majorants",
        titre: "Majorants et ensembles majorés",
        blocs: [
          {
            type: "introduction",
            titre: "Chercher une limite supérieure",
            texte: "Considérons les nombres de l'intervalle A = [1 ; 4[.\n\nTous ces nombres sont strictement inférieurs à 4. Ils sont donc aussi inférieurs à 5, à 10 ou à tout autre nombre supérieur à 4.\n\nLes nombres 4, 5 et 10 sont des majorants de A."
          },
          {
            type: "definition",
            titre: "Majorant",
            texte: "Un réel M est un majorant d'un ensemble A si chaque élément x de A vérifie x ≤ M.\n\nAutrement dit, aucun élément de A ne dépasse M.\n\nUn ensemble qui possède au moins un majorant est dit majoré."
          },
          {
            type: "exemple",
            titre: "Un ensemble peut avoir plusieurs majorants",
            texte: "Soit A = [1 ; 4[.\n\nPour tout x ∈ A, on a x < 4, donc x ≤ 4. Ainsi, 4 est un majorant de A.\n\nTout nombre supérieur à 4 est également un majorant de A.\n\nLe nombre 3 n'est pas un majorant : par exemple, 3,5 appartient à A et 3,5 > 3."
          },
          {
            type: "schema",
            titre: "Un majorant peut être hors de l'ensemble",
            svg: "<svg viewBox='0 0 350 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Intervalle de un inclus à quatre exclu ; quatre est un majorant'><line x1='20' y1='60' x2='330' y2='60' stroke='#94a3b8' stroke-width='2'/><path d='M330 60 l-8 -4 M330 60 l-8 4' fill='none' stroke='#94a3b8' stroke-width='2'/><line x1='75' y1='60' x2='245' y2='60' stroke='#2563eb' stroke-width='5'/><circle cx='75' cy='60' r='6' fill='#2563eb'/><circle cx='245' cy='60' r='6' fill='white' stroke='#2563eb' stroke-width='3'/><text x='75' y='88' text-anchor='middle' font-size='15' fill='#334155'>1</text><text x='245' y='88' text-anchor='middle' font-size='15' fill='#334155'>4</text><text x='160' y='30' text-anchor='middle' font-size='14' fill='#1d4ed8'>A = [1 ; 4[</text><text x='245' y='108' text-anchor='middle' font-size='13' fill='#334155'>majorant</text></svg>",
            legende: "Tous les éléments de A sont inférieurs à 4. Pourtant, 4 n'appartient pas à A : un majorant n'est pas nécessairement un élément de l'ensemble."
          },
          {
            type: "methode",
            titre: "Montrer qu'un nombre n'est pas un majorant",
            texte: "Il suffit de trouver un seul élément de l'ensemble qui dépasse ce nombre.\n\nExemple : A = [-2 ; 5]. Le nombre 4 n'est pas un majorant de A, car 5 ∈ A et 5 > 4.\n\nCet élément est appelé un contre-exemple."
          },
          {
            type: "exemple",
            titre: "Un ensemble non majoré",
            texte: "L'ensemble [2 ; +∞[ n'est pas majoré.\n\nEn effet, quel que soit le réel M proposé, on peut choisir un élément de [2 ; +∞[ supérieur à M. Par exemple, le nombre M + 2 convient si M ≥ 2 ; si M < 2, le nombre 2 convient.\n\nIl n'existe donc aucun majorant de cet ensemble."
          }
        ]
      },

      {
        id: "m2-ch3-minorants",
        titre: "Minorants et ensembles minorés",
        blocs: [
          {
            type: "definition",
            titre: "Minorant",
            texte: "Un réel m est un minorant d'un ensemble A si chaque élément x de A vérifie m ≤ x.\n\nAutrement dit, aucun élément de A n'est inférieur à m.\n\nUn ensemble qui possède au moins un minorant est dit minoré."
          },
          {
            type: "exemple",
            titre: "Exemple avec un intervalle",
            texte: "Soit B = ]-2 ; 5].\n\nTout élément x de B vérifie x > -2. Donc -2 est un minorant de B, bien qu'il ne soit pas dans B.\n\n-3 et -10 sont également des minorants.\n\nEn revanche, 0 n'est pas un minorant, car -1 ∈ B et -1 < 0."
          },
          {
            type: "methode",
            titre: "Tester une borne",
            texte: "Pour montrer que m est un minorant, il faut justifier que m ≤ x pour tous les éléments x de l'ensemble.\n\nPour montrer que m n'est pas un minorant, un seul contre-exemple suffit : trouve un élément de l'ensemble strictement inférieur à m.\n\nAttention : vérifier quelques éléments ne suffit pas à prouver qu'un nombre est un minorant de tout l'ensemble."
          },
          {
            type: "definition",
            titre: "Ensemble borné",
            texte: "Un ensemble est borné s'il est à la fois majoré et minoré.\n\nPar exemple, pour tout x ∈ ]-2 ; 5], on a -2 < x ≤ 5. L'ensemble est donc minoré par -2 et majoré par 5 : il est borné.\n\nL'ensemble [0 ; +∞[ est minoré par 0, mais il n'est pas majoré. Il n'est donc pas borné."
          },
          {
            type: "schema",
            titre: "Ensemble borné entre deux nombres",
            svg: "<svg viewBox='0 0 350 125' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Intervalle de moins deux exclu à cinq inclus, borné par moins deux et cinq'><line x1='20' y1='60' x2='330' y2='60' stroke='#94a3b8' stroke-width='2'/><line x1='75' y1='60' x2='275' y2='60' stroke='#2563eb' stroke-width='5'/><circle cx='75' cy='60' r='6' fill='white' stroke='#2563eb' stroke-width='3'/><circle cx='275' cy='60' r='6' fill='#2563eb'/><text x='75' y='88' text-anchor='middle' font-size='15' fill='#334155'>-2</text><text x='275' y='88' text-anchor='middle' font-size='15' fill='#334155'>5</text><text x='75' y='108' text-anchor='middle' font-size='13' fill='#334155'>minorant</text><text x='275' y='108' text-anchor='middle' font-size='13' fill='#334155'>majorant</text><text x='175' y='30' text-anchor='middle' font-size='14' fill='#1d4ed8'>B = ]-2 ; 5]</text></svg>",
            legende: "Tous les éléments de B sont compris entre -2 et 5. Le minorant -2 est exclu, tandis que le majorant 5 est inclus."
          }
        ]
      },

      {
        id: "m2-ch3-extremums",
        titre: "Maximum et minimum",
        blocs: [
          {
            type: "definition",
            titre: "Maximum",
            texte: "Le maximum d'un ensemble A est un élément de A qui est supérieur ou égal à tous les autres éléments de A.\n\nPour que M soit le maximum de A, il faut donc deux conditions :\n\n• M ∈ A ;\n• pour tout x ∈ A, x ≤ M.\n\nUn maximum est donc un majorant qui appartient à l'ensemble."
          },
          {
            type: "definition",
            titre: "Minimum",
            texte: "Le minimum d'un ensemble A est un élément de A qui est inférieur ou égal à tous les autres éléments de A.\n\nPour que m soit le minimum de A, il faut deux conditions :\n\n• m ∈ A ;\n• pour tout x ∈ A, m ≤ x.\n\nUn minimum est donc un minorant qui appartient à l'ensemble."
          },
          {
            type: "tableau",
            titre: "Comparer des intervalles",
            entetes: ["Ensemble", "Minimum", "Maximum"],
            lignes: [
              ["[1 ; 4]", "1", "4"],
              ["[1 ; 4[", "1", "Aucun"],
              ["]1 ; 4]", "Aucun", "4"],
              ["]1 ; 4[", "Aucun", "Aucun"]
            ]
          },
          {
            type: "exemple",
            titre: "Un majorant qui n'est pas un maximum",
            texte: "Pour A = [1 ; 4[, le nombre 4 est un majorant, mais 4 ∉ A. Il n'est donc pas le maximum.\n\nA n'a pas de maximum : si x ∈ A, alors le nombre (x + 4)/2 appartient aussi à A et vérifie x < (x + 4)/2 < 4. On peut toujours trouver un élément de A plus grand que x."
          },
          {
            type: "exemple",
            titre: "Un ensemble discret",
            texte: "Soit E = {-3 ; 0 ; 2 ; 7}.\n\nLe minimum est -3 : il appartient à E et tous les éléments de E sont supérieurs ou égaux à -3.\n\nLe maximum est 7 : il appartient à E et tous les éléments de E sont inférieurs ou égaux à 7.\n\nPar exemple, 10 est un majorant de E, mais ce n'est pas son maximum car 10 ∉ E."
          },
          {
            type: "remarque",
            titre: "Unicité",
            texte: "Quand un ensemble possède un maximum, celui-ci est unique. De même, s'il possède un minimum, celui-ci est unique.\n\nEn revanche, un ensemble majoré possède une infinité de majorants : si M est un majorant, tout réel supérieur à M en est aussi un."
          },
          {
            type: "remarque",
            titre: "Borné ne signifie pas toujours avoir un maximum",
            texte: "L'intervalle ]0 ; 1[ est borné : 0 est un minorant et 1 est un majorant.\n\nIl n'a pourtant ni minimum ni maximum, car 0 et 1 ne lui appartiennent pas et on peut toujours trouver un élément plus proche de chacune de ces bornes."
          }
        ]
      },

      {
        id: "m2-ch3-methodes",
        titre: "Étudier les bornes d'un ensemble",
        blocs: [
          {
            type: "methode",
            titre: "Pour un intervalle",
            texte: "1. Lis les bornes et les crochets.\n2. Vérifie si l'intervalle est majoré et minoré.\n3. Une borne finie incluse est un maximum ou un minimum selon sa position.\n4. Une borne finie exclue peut être un majorant ou un minorant, mais elle n'est pas un élément de l'ensemble.\n5. Les symboles -∞ et +∞ ne sont pas des réels : ils ne peuvent être ni maximum ni minimum."
          },
          {
            type: "exemple",
            titre: "Étudier ]-∞ ; 3]",
            texte: "Soit A = ]-∞ ; 3].\n\nTout élément de A est inférieur ou égal à 3 : A est majoré par 3.\n\nComme 3 ∈ A, 3 est son maximum.\n\nA n'est pas minoré : ses éléments peuvent être aussi petits que l'on veut. Il n'a donc pas de minimum et n'est pas borné."
          },
          {
            type: "methode",
            titre: "Étudier une expression définissant un ensemble",
            texte: "Soit E l'ensemble des nombres x² lorsque -2 ≤ x ≤ 3.\n\nUn carré est toujours positif ou nul, donc x² ≥ 0. Pour x = 0, qui appartient à [-2 ; 3], on obtient x² = 0 : le minimum de E est 0.\n\nDe plus, -2 ≤ x ≤ 3 implique |x| ≤ 3, donc x² ≤ 9. Pour x = 3, on obtient x² = 9 : le maximum de E est 9.\n\nLes bornes sont donc atteintes. Dans cet exemple, E = [0 ; 9]."
          },
          {
            type: "remarque",
            titre: "Une borne doit être atteinte",
            texte: "Pour démontrer qu'un nombre est un maximum ou un minimum, établir une inégalité ne suffit pas.\n\nIl faut aussi trouver un élément de l'ensemble égal à ce nombre.\n\nPar exemple, tous les nombres de ]0 ; 1[ sont inférieurs à 1, mais 1 n'est pas leur maximum : il n'appartient pas à cet intervalle."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On considère A = {-2 ; 0 ; 3 ; 5}.\n\n1. Quel est le minimum de A ?\n2. Quel est son maximum ?\n3. Le nombre 7 est-il un majorant de A ?\n4. Le nombre -3 est-il un minorant de A ?",
        correction: "1. Le minimum est -2 : il appartient à A et aucun élément de A ne lui est inférieur.\n\n2. Le maximum est 5 : il appartient à A et aucun élément de A ne lui est supérieur.\n\n3. Oui. Tous les éléments de A sont inférieurs ou égaux à 7.\n\n4. Oui. Tous les éléments de A sont supérieurs ou égaux à -3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Pour l'intervalle B = [1 ; 6[, réponds par oui ou non :\n\n1. 6 est-il un majorant ?\n2. 6 est-il le maximum ?\n3. 1 est-il le minimum ?\n4. B est-il borné ?",
        correction: "1. Oui : tout x ∈ B vérifie x < 6, donc x ≤ 6.\n\n2. Non : 6 n'appartient pas à B. L'ensemble n'a pas de maximum.\n\n3. Oui : 1 appartient à B et tout élément de B est supérieur ou égal à 1.\n\n4. Oui : 1 est un minorant et 6 est un majorant."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit C = ]-4 ; 2].\n\n1. Donne un minorant et un majorant de C.\n2. C possède-t-il un minimum ?\n3. C possède-t-il un maximum ?\n4. Le nombre -3 est-il un minorant ? Justifie.",
        correction: "1. -4 est un minorant et 2 est un majorant.\n\n2. C n'a pas de minimum. La borne -4 est exclue et, pour tout x ∈ C, le nombre (x - 4)/2 appartient à C et est strictement inférieur à x.\n\n3. Oui : 2 est le maximum, car 2 ∈ C et tout x ∈ C vérifie x ≤ 2.\n\n4. Non : -3,5 appartient à C et -3,5 < -3. C'est un contre-exemple."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudie si chacun des ensembles suivants est majoré, minoré et borné :\n\n1. [0 ; +∞[\n2. ]-∞ ; 5[\n3. ]-2 ; 7[",
        correction: "1. [0 ; +∞[ est minoré par 0, mais non majoré. Il n'est donc pas borné.\n\n2. ]-∞ ; 5[ est majoré par 5, mais non minoré. Il n'est donc pas borné.\n\n3. ]-2 ; 7[ est minoré par -2 et majoré par 7. Il est borné, même si ses deux bornes sont exclues."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit A = ]2 ; 8[.\n\n1. Les nombres 2 et 8 sont-ils respectivement un minorant et un majorant de A ?\n2. A possède-t-il un minimum ? Un maximum ? Justifie.\n3. Montre que 7 n'est pas un majorant de A.",
        correction: "1. Oui : pour tout x ∈ A, 2 < x < 8. Donc 2 est un minorant et 8 un majorant.\n\n2. A n'a ni minimum ni maximum. Pour tout x ∈ A, le nombre (2 + x)/2 est dans A et est inférieur à x ; le nombre (x + 8)/2 est dans A et est supérieur à x.\n\n3. Le nombre 7,5 appartient à A et 7,5 > 7. Donc 7 n'est pas un majorant."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit E l'ensemble des nombres x² lorsque x appartient à [-3 ; 2].\n\n1. Montre que 0 est un minorant de E.\n2. Montre que 9 est un majorant de E.\n3. Détermine le minimum et le maximum de E, en précisant pour quelles valeurs de x ils sont atteints.",
        correction: "1. Pour tout réel x, x² ≥ 0. Donc 0 est un minorant de E.\n\n2. Si -3 ≤ x ≤ 2, alors |x| ≤ 3, donc x² ≤ 9. Ainsi 9 est un majorant de E.\n\n3. Pour x = 0, qui appartient à [-3 ; 2], on obtient x² = 0 : 0 est le minimum.\n\nPour x = -3, qui appartient à [-3 ; 2], on obtient x² = 9 : 9 est le maximum."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère A = [-2 ; 4[ et B = [1 ; 6].\n\n1. Détermine A ∩ B et A ∪ B.\n2. Pour chacun des deux ensembles obtenus, indique son minimum et précise s'il possède un maximum.",
        correction: "1. La partie commune est A ∩ B = [1 ; 4[. La réunion est A ∪ B = [-2 ; 6].\n\n2. L'intersection [1 ; 4[ a pour minimum 1. Elle n'a pas de maximum : 4 est exclu et tout élément peut être remplacé par un élément plus proche de 4.\n\nLa réunion [-2 ; 6] a pour minimum -2 et pour maximum 6 : ses deux bornes sont incluses."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère E = {2x + 1 ; x ∈ ]-1 ; 3]}.\n\n1. Encadre 2x + 1 à partir de -1 < x ≤ 3.\n2. Montre que E = ]-1 ; 7].\n3. Détermine si E est borné, puis indique son minimum et son maximum s'ils existent.",
        correction: "1. Comme 2 est positif, -1 < x ≤ 3 donne -2 < 2x ≤ 6. En ajoutant 1 : -1 < 2x + 1 ≤ 7. Donc E ⊂ ]-1 ; 7].\n\n2. Réciproquement, soit y ∈ ]-1 ; 7]. Posons x = (y - 1)/2. De -1 < y ≤ 7, on déduit -2 < y - 1 ≤ 6, puis -1 < x ≤ 3. Ainsi x ∈ ]-1 ; 3] et y = 2x + 1 appartient à E. Donc E = ]-1 ; 7].\n\n3. E est borné : -1 est un minorant et 7 un majorant. Il n'a pas de minimum car -1 est exclu. Son maximum est 7, atteint pour x = 3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère l'ensemble F des nombres 4 - x² lorsque x appartient à [-2 ; 3].\n\n1. Encadre x² et précise les valeurs de x pour lesquelles ses bornes sont atteintes.\n2. Déduis-en un encadrement de 4 - x².\n3. Détermine le minimum et le maximum de F en justifiant que chacun est atteint.",
        correction: "1. Pour -2 ≤ x ≤ 3, on a 0 ≤ x² ≤ 9. La borne 0 est atteinte pour x = 0 ; la borne 9 est atteinte pour x = 3. Ces deux nombres appartiennent à [-2 ; 3].\n\n2. En multipliant par -1, on inverse les inégalités : -9 ≤ -x² ≤ 0. En ajoutant 4 : -5 ≤ 4 - x² ≤ 4.\n\n3. Pour x = 3, on obtient 4 - 3² = -5 : le minimum est -5.\n\nPour x = 0, on obtient 4 - 0² = 4 : le maximum est 4. Les deux bornes sont bien atteintes."
      }
    ]
  }
]);
