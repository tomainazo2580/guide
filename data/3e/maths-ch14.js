// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 14 : probabilités.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-probabilites",
    titre: "Chapitre 14 : Probabilités",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-proba-experience",
        titre: "Découvrir le hasard",
        blocs: [
          {
            type: "introduction",
            titre: "Peut-on prévoir le résultat ?",
            texte: "Avant de lancer un dé, on ne sait pas quelle face apparaîtra. Pourtant, on connaît les résultats possibles : 1, 2, 3, 4, 5 ou 6.\n\nLes probabilités permettent d'étudier de telles situations. Elles ne prédisent pas avec certitude le résultat d'un seul lancer : elles indiquent à quel point un événement est probable dans un modèle donné."
          },
          {
            type: "definition",
            titre: "Expérience aléatoire et issue",
            texte: "Une expérience aléatoire est une expérience dont on connaît les résultats possibles, mais dont on ne peut pas prévoir avec certitude le résultat avant de la réaliser.\n\nChaque résultat possible s'appelle une issue.\n\nPour un lancer de dé à six faces, « obtenir 4 » est une issue."
          },
          {
            type: "definition",
            titre: "L'ensemble des issues",
            texte: "L'ensemble de toutes les issues possibles est parfois noté Ω, lettre grecque qui se lit « oméga ».\n\nPour un dé à six faces numérotées de 1 à 6 :\nΩ = {1 ; 2 ; 3 ; 4 ; 5 ; 6}.\n\nAvant de calculer une probabilité, il est important de bien identifier toutes les issues."
          },
          {
            type: "exemple",
            titre: "Tirer une boule",
            texte: "Un sac contient une boule rouge, une bleue et une verte. On tire une boule et on note sa couleur.\n\nLes issues sont : rouge, bleue et verte.\n\nSi l'on choisissait de noter un autre renseignement, comme le numéro inscrit sur chaque boule, les issues dépendraient de ce renseignement."
          }
        ]
      },
      {
        id: "m3-proba-evenements",
        titre: "Comprendre les événements",
        blocs: [
          {
            type: "definition",
            titre: "Un événement regroupe des issues",
            texte: "Un événement est constitué d'une ou plusieurs issues possibles, ou d'aucune issue.\n\nPour un dé à six faces, l'événement « obtenir un nombre pair » correspond aux issues {2 ; 4 ; 6}.\n\nSi le résultat est 4, l'événement est réalisé. Si le résultat est 5, il ne l'est pas."
          },
          {
            type: "definition",
            titre: "Événement certain et événement impossible",
            texte: "Un événement certain se réalise à tous les coups dans l'expérience étudiée.\n\nAvec un dé numéroté de 1 à 6, « obtenir un nombre inférieur à 7 » est certain.\n\nUn événement impossible ne peut pas se réaliser. Avec ce même dé, « obtenir 9 » est impossible. Il ne contient aucune issue : on le note ∅, l'ensemble vide."
          },
          {
            type: "definition",
            titre: "Événement contraire",
            texte: "L'événement contraire de A se réalise exactement lorsque A ne se réalise pas.\n\nSi A est « obtenir un nombre pair », son contraire est « obtenir un nombre impair » : {1 ; 3 ; 5}.\n\nOn peut noter cet événement non A."
          },
          {
            type: "remarque",
            titre: "Attention aux mots",
            texte: "Le contraire de « obtenir un nombre supérieur à 3 » est « obtenir un nombre inférieur ou égal à 3 ».\n\nAvec le dé :\n• supérieur à 3 : {4 ; 5 ; 6} ;\n• contraire : {1 ; 2 ; 3}.\n\nLe nombre 3 appartient bien à l'événement contraire."
          }
        ]
      },
      {
        id: "m3-proba-calcul",
        titre: "Calculer une probabilité",
        blocs: [
          {
            type: "definition",
            titre: "Des issues équiprobables",
            texte: "Des issues sont équiprobables lorsqu'elles ont toutes la même probabilité.\n\nPour un dé équilibré, on suppose que chacune des six faces a la même chance d'apparaître. Les six issues sont alors équiprobables."
          },
          {
            type: "regle",
            titre: "La formule",
            texte: "Lorsque toutes les issues sont équiprobables :\n\nprobabilité d'un événement = nombre d'issues favorables ÷ nombre total d'issues.\n\nUne issue est favorable lorsqu'elle réalise l'événement étudié."
          },
          {
            type: "exemple",
            titre: "Obtenir un nombre pair",
            texte: "On lance un dé équilibré à six faces.\n\nIssues possibles : {1 ; 2 ; 3 ; 4 ; 5 ; 6}, soit 6 issues.\nIssues favorables à « obtenir un nombre pair » : {2 ; 4 ; 6}, soit 3 issues.\n\nP(nombre pair) = 3/6 = 1/2 = 0,5 = 50 %."
          },
          {
            type: "schema",
            titre: "Les issues favorables",
            svg: "<svg viewBox='0 0 330 115' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Les six issues du dé : 2, 4 et 6 sont colorées car elles sont paires'><text x='165' y='20' text-anchor='middle' font-size='14' fill='#334155'>Résultats possibles du dé</text><g font-size='18' text-anchor='middle' fill='#1e293b'><rect x='15' y='38' width='42' height='42' rx='5' fill='#f1f5f9' stroke='#64748b'/><text x='36' y='65'>1</text><rect x='67' y='38' width='42' height='42' rx='5' fill='#86efac' stroke='#166534'/><text x='88' y='65'>2</text><rect x='119' y='38' width='42' height='42' rx='5' fill='#f1f5f9' stroke='#64748b'/><text x='140' y='65'>3</text><rect x='171' y='38' width='42' height='42' rx='5' fill='#86efac' stroke='#166534'/><text x='192' y='65'>4</text><rect x='223' y='38' width='42' height='42' rx='5' fill='#f1f5f9' stroke='#64748b'/><text x='244' y='65'>5</text><rect x='275' y='38' width='42' height='42' rx='5' fill='#86efac' stroke='#166534'/><text x='296' y='65'>6</text></g><text x='165' y='105' text-anchor='middle' font-size='14' fill='#166534'>3 issues favorables sur 6</text></svg>",
            legende: "Les nombres pairs sont colorés. Si le dé est équilibré, la probabilité d'obtenir un nombre pair est 3/6."
          },
          {
            type: "methode",
            titre: "Les étapes du calcul",
            texte: "1. Décris l'expérience et vérifie que les issues sont équiprobables.\n2. Liste ou compte toutes les issues.\n3. Liste ou compte celles qui réalisent l'événement.\n4. Divise le nombre d'issues favorables par le nombre total d'issues.\n5. Simplifie la fraction si possible."
          },
          {
            type: "remarque",
            titre: "La formule ne s'applique pas toujours directement",
            texte: "Si les issues n'ont pas toutes la même probabilité, on ne peut pas simplement diviser le nombre d'issues favorables par le nombre total d'issues.\n\nPar exemple, si une roue est partagée en secteurs de tailles différentes, les couleurs ne sont pas forcément équiprobables. Il faut tenir compte des probabilités de chaque issue."
          }
        ]
      },
      {
        id: "m3-proba-proprietes",
        titre: "Utiliser les propriétés des probabilités",
        blocs: [
          {
            type: "regle",
            titre: "Entre 0 et 1",
            texte: "Une probabilité est toujours comprise entre 0 et 1.\n\n• P(événement impossible) = 0.\n• P(événement certain) = 1.\n\nEn pourcentage, cela correspond à des valeurs comprises entre 0 % et 100 %."
          },
          {
            type: "regle",
            titre: "Probabilité de l'événement contraire",
            texte: "La somme des probabilités d'un événement et de son contraire est égale à 1 :\n\nP(A) + P(non A) = 1.\n\nDonc P(non A) = 1 - P(A)."
          },
          {
            type: "exemple",
            titre: "Ne pas obtenir 6",
            texte: "Avec un dé équilibré :\nP(obtenir 6) = 1/6.\n\nL'événement contraire est « ne pas obtenir 6 ».\n\nP(ne pas obtenir 6) = 1 - 1/6 = 5/6.\n\nOn retrouve ce résultat en comptant les issues favorables : {1 ; 2 ; 3 ; 4 ; 5}."
          },
          {
            type: "remarque",
            titre: "Probabilité et résultat observé",
            texte: "Une probabilité de 1/2 ne garantit pas que l'événement se produira exactement une fois sur deux lors d'un petit nombre d'essais.\n\nPar exemple, après deux lancers d'une pièce équilibrée, on peut obtenir deux fois pile. Chaque résultat reste possible."
          }
        ]
      },
      {
        id: "m3-proba-tirages",
        titre: "Étudier un tirage et comparer des événements",
        blocs: [
          {
            type: "introduction",
            titre: "Compter les objets",
            texte: "Un sac contient 3 boules rouges et 2 boules bleues. Les boules sont indiscernables au toucher et on en tire une au hasard.\n\nOn suppose que chaque boule a la même chance d'être tirée."
          },
          {
            type: "methode",
            titre: "Calculer la probabilité d'une couleur",
            texte: "Il y a 3 + 2 = 5 boules au total.\n\nPour obtenir rouge, 3 boules sont favorables :\nP(rouge) = 3/5.\n\nPour obtenir bleu, 2 boules sont favorables :\nP(bleu) = 2/5.\n\nOn vérifie : 3/5 + 2/5 = 1. Ici, rouge et bleu sont les deux seules couleurs possibles."
          },
          {
            type: "remarque",
            titre: "Couleurs et boules",
            texte: "Dans cet exemple, les deux couleurs ne sont pas équiprobables : il y a plus de boules rouges que de boules bleues.\n\nPour appliquer la formule de comptage, on considère les cinq boules comme les cinq issues équiprobables, même si certaines ont la même couleur."
          },
          {
            type: "exemple",
            titre: "Comparer deux probabilités",
            texte: "Dans le sac précédent :\nP(rouge) = 3/5 et P(bleu) = 2/5.\n\nComme 3/5 > 2/5, obtenir une boule rouge est plus probable.\n\nCela ne veut pas dire qu'une boule rouge sortira forcément au prochain tirage."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On lance un dé à six faces numérotées de 1 à 6.\n\n1. Liste toutes les issues possibles.\n2. Liste les issues de l'événement « obtenir un nombre supérieur à 4 ».",
        correction: "1. Les issues possibles sont {1 ; 2 ; 3 ; 4 ; 5 ; 6}.\n\n2. Les nombres strictement supérieurs à 4 sont 5 et 6. L'événement est donc {5 ; 6}."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On lance un dé équilibré à six faces.\n\n1. Quelle est la probabilité d'obtenir 3 ?\n2. Quelle est la probabilité d'obtenir 8 ?",
        correction: "1. Le dé est équilibré : ses 6 issues sont équiprobables. Une seule issue est favorable, donc P(obtenir 3) = 1/6.\n\n2. Le nombre 8 ne figure pas sur le dé. L'événement est impossible : sa probabilité est 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une pièce équilibrée possède une face pile et une face face. On la lance une fois.\n\n1. Quelles sont les issues possibles ?\n2. Calcule la probabilité d'obtenir pile.\n3. Quel est l'événement contraire ?",
        correction: "1. Les issues sont {pile ; face}.\n\n2. Les deux issues sont équiprobables et une seule est favorable : P(pile) = 1/2.\n\n3. Le contraire de « obtenir pile » est « obtenir face ». Sa probabilité est également 1/2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un sac contient 4 boules jaunes et 6 boules vertes. Elles sont indiscernables au toucher et chaque boule a la même chance d'être tirée.\n\nOn tire une boule. Calcule la probabilité d'obtenir :\n\n1. une boule jaune ;\n2. une boule verte.",
        correction: "Il y a 4 + 6 = 10 boules au total.\n\n1. Quatre boules sont jaunes : P(jaune) = 4/10 = 2/5.\n\n2. Six boules sont vertes : P(verte) = 6/10 = 3/5.\n\nVérification : 2/5 + 3/5 = 1. Ces deux couleurs couvrent tous les résultats possibles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On lance un dé équilibré à six faces. Soit A l'événement « obtenir un nombre inférieur ou égal à 4 ».\n\n1. Liste les issues de A et calcule P(A).\n2. Décris l'événement contraire de A.\n3. Calcule sa probabilité de deux façons.",
        correction: "1. A = {1 ; 2 ; 3 ; 4}. Il y a 4 issues favorables sur 6 :\nP(A) = 4/6 = 2/3.\n\n2. Le contraire est « obtenir un nombre strictement supérieur à 4 » : {5 ; 6}.\n\n3. Par comptage : P(non A) = 2/6 = 1/3.\nPar la règle du contraire : P(non A) = 1 - 2/3 = 1/3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une boîte contient 5 jetons rouges, 3 bleus et 2 blancs. Tous les jetons ont la même chance d'être tirés. On en tire un.\n\n1. Calcule P(bleu).\n2. Calcule P(ne pas obtenir bleu).\n3. Quel événement est le plus probable : obtenir rouge ou obtenir blanc ?",
        correction: "Il y a 5 + 3 + 2 = 10 jetons.\n\n1. P(bleu) = 3/10.\n\n2. P(non bleu) = 1 - 3/10 = 7/10. On peut aussi compter les 5 jetons rouges et les 2 blancs : 7 jetons sur 10.\n\n3. P(rouge) = 5/10 et P(blanc) = 2/10. Comme 5/10 > 2/10, obtenir rouge est plus probable."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On choisit au hasard un nombre entier parmi 1, 2, 3, 4, 5, 6, 7, 8, 9 et 10. Tous ont la même chance d'être choisis.\n\n1. Calcule la probabilité d'obtenir un multiple de 3.\n2. Calcule la probabilité d'obtenir un nombre pair supérieur à 4.\n3. Calcule la probabilité de ne pas obtenir un multiple de 3.",
        correction: "Il y a 10 issues équiprobables.\n\n1. Les multiples de 3 dans la liste sont {3 ; 6 ; 9}. Il y a 3 issues favorables : P = 3/10.\n\n2. Les nombres pairs strictement supérieurs à 4 sont {6 ; 8 ; 10}. Donc P = 3/10.\n\n3. Le contraire de « obtenir un multiple de 3 » est « ne pas obtenir un multiple de 3 » :\nP = 1 - 3/10 = 7/10.\n\nVérification : 10 - 3 = 7 nombres de la liste ne sont pas des multiples de 3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une tombola propose 50 billets indiscernables. Parmi eux, 5 gagnent un livre, 10 gagnent un cahier et les autres ne gagnent rien. Chaque billet a la même chance d'être choisi. Une personne prend un billet.\n\n1. Combien de billets ne gagnent rien ?\n2. Quelle est la probabilité de gagner un livre ?\n3. Quelle est la probabilité de gagner un lot, livre ou cahier ?\n4. Quelle est la probabilité de ne rien gagner ?",
        correction: "1. Il y a 5 + 10 = 15 billets gagnants. Il reste 50 - 15 = 35 billets qui ne gagnent rien.\n\n2. P(livre) = 5/50 = 1/10 = 10 %.\n\n3. Les billets gagnant un livre et ceux gagnant un cahier sont distincts. Il y a 15 billets gagnants :\nP(gagner un lot) = 15/50 = 3/10 = 30 %.\n\n4. P(ne rien gagner) = 35/50 = 7/10 = 70 %.\n\nVérification avec l'événement contraire : 1 - 3/10 = 7/10."
      }
    ]
  }
]);
