// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 17 : Expériences aléatoires et probabilités

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch17",
    titre: "Chapitre 17 : Expériences aléatoires et probabilités",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch17-experience",
        titre: "Découvrir une expérience aléatoire",
        blocs: [
          {
            type: "definition",
            titre: "Expérience aléatoire",
            texte: "Une expérience aléatoire est une expérience dont on connaît les résultats possibles, mais dont on ne peut pas prévoir avec certitude le résultat avant de la réaliser."
          },
          {
            type: "definition",
            titre: "Issue et univers",
            texte: "Une issue est un résultat possible de l'expérience.\nL'univers est l'ensemble de toutes les issues possibles. On le note souvent Ω, qui se lit « oméga »."
          },
          {
            type: "exemple",
            titre: "Lancer une pièce",
            texte: "On lance une pièce et on observe la face obtenue.\nLes issues sont « pile » et « face ».\nL'univers est Ω = {pile ; face}."
          },
          {
            type: "exemple",
            titre: "Lancer un dé",
            texte: "On lance un dé à six faces numérotées de 1 à 6 et on observe le numéro obtenu.\nL'univers est Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6}."
          },
          {
            type: "remarque",
            titre: "Connaître les issues ne suffit pas toujours",
            texte: "Savoir quelles issues sont possibles ne signifie pas qu'elles ont toutes la même chance de se produire. Cela dépend des conditions de l'expérience."
          }
        ]
      },

      {
        id: "m4-ch17-evenements",
        titre: "Décrire un événement",
        blocs: [
          {
            type: "definition",
            titre: "Événement",
            texte: "Un événement est un ensemble d'issues de l'expérience. Il se réalise lorsque l'issue obtenue appartient à cet ensemble."
          },
          {
            type: "exemple",
            titre: "Obtenir un nombre pair",
            texte: "On lance un dé à six faces numérotées de 1 à 6.\nL'événement A : « obtenir un nombre pair » correspond aux issues {2 ; 4 ; 6}.\nSi l'on obtient 4, A se réalise. Si l'on obtient 3, A ne se réalise pas."
          },
          {
            type: "definition",
            titre: "Événement certain et événement impossible",
            texte: "Un événement certain se réalise pour toutes les issues de l'univers.\nUn événement impossible ne se réalise pour aucune issue."
          },
          {
            type: "exemple",
            titre: "Avec un dé numéroté de 1 à 6",
            texte: "« Obtenir un nombre de 1 à 6 » est un événement certain.\n« Obtenir 7 » est un événement impossible."
          },
          {
            type: "definition",
            titre: "Événement contraire",
            texte: "L'événement contraire de A se réalise exactement lorsque A ne se réalise pas.\nSi A est « obtenir un nombre pair » avec un dé numéroté de 1 à 6, son contraire est « obtenir un nombre impair », soit {1 ; 3 ; 5}."
          }
        ]
      },

      {
        id: "m4-ch17-probabilite",
        titre: "Comprendre une probabilité",
        blocs: [
          {
            type: "definition",
            titre: "Mesurer la chance qu'un événement se réalise",
            texte: "La probabilité d'un événement est un nombre compris entre 0 et 1.\nUne probabilité de 0 correspond à un événement impossible ; une probabilité de 1 correspond à un événement certain dans les exemples finis de ce chapitre."
          },
          {
            type: "regle",
            titre: "Probabilités en pourcentage",
            texte: "On peut exprimer une probabilité sous forme de fraction, de nombre décimal ou de pourcentage.\nExemple : 1/2 = 0,5 = 50 %."
          },
          {
            type: "regle",
            titre: "Événement contraire",
            texte: "La probabilité d'un événement et celle de son contraire ont pour somme 1.\nDonc : probabilité du contraire de A = 1 − probabilité de A."
          },
          {
            type: "exemple",
            titre: "Une probabilité connue",
            texte: "Si la probabilité qu'il pleuve selon un modèle est 0,3, celle qu'il ne pleuve pas est 1 − 0,3 = 0,7, soit 70 %."
          }
        ]
      },

      {
        id: "m4-ch17-equiprobabilite",
        titre: "Calculer en situation d'équiprobabilité",
        blocs: [
          {
            type: "definition",
            titre: "Issues équiprobables",
            texte: "Des issues sont équiprobables lorsqu'elles ont toutes la même probabilité de se produire.\nPour les calculs suivants, on suppose que chaque issue de l'univers a la même probabilité."
          },
          {
            type: "regle",
            titre: "La formule",
            texte: "Si l'univers contient un nombre fini d'issues toutes équiprobables :\nProbabilité de A = nombre d'issues favorables à A ÷ nombre total d'issues.\nUne issue est favorable à A lorsque l'événement A se réalise pour cette issue."
          },
          {
            type: "exemple",
            titre: "Obtenir un nombre pair",
            texte: "On lance un dé équilibré à six faces numérotées de 1 à 6.\nLes 6 issues sont supposées équiprobables. Les issues favorables à « obtenir un nombre pair » sont {2 ; 4 ; 6}, soit 3 issues.\nProbabilité = 3/6 = 1/2 = 0,5 = 50 %."
          },
          {
            type: "exemple",
            titre: "Tirer une boule",
            texte: "Un sac contient 3 boules rouges et 2 boules bleues. On tire une boule au hasard et on suppose que chaque boule a la même chance d'être tirée.\nIl y a 5 boules au total, dont 3 rouges.\nProbabilité de tirer une boule rouge : 3/5 = 0,6 = 60 %."
          },
          {
            type: "remarque",
            titre: "Attention aux issues",
            texte: "Dans l'exemple du sac, les deux couleurs ne sont pas équiprobables : il y a plus de boules rouges que de boules bleues. Ce sont les cinq boules que l'on suppose équiprobables."
          }
        ]
      },

      {
        id: "m4-ch17-frequence",
        titre: "Fréquence observée et probabilité",
        blocs: [
          {
            type: "definition",
            titre: "Fréquence d'un événement",
            texte: "Lorsqu'on répète une expérience, la fréquence observée d'un événement est le nombre de fois où il se réalise divisé par le nombre total d'expériences réalisées, si ce nombre est non nul."
          },
          {
            type: "exemple",
            titre: "Vingt lancers",
            texte: "On lance 20 fois une pièce et on obtient 12 fois pile.\nLa fréquence observée de pile est 12/20 = 0,6, soit 60 %.\nCela ne prouve pas que la probabilité de pile est 60 %."
          },
          {
            type: "remarque",
            titre: "Le hasard dans les résultats",
            texte: "Même lorsque la probabilité de pile est supposée égale à 1/2, les fréquences observées peuvent varier d'une série de lancers à l'autre. Sur un grand nombre de répétitions indépendantes dans les mêmes conditions, elles ont tendance à se rapprocher de la probabilité, sans être nécessairement exactement égales à celle-ci."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On lance un dé à six faces numérotées de 1 à 6. Donne l'univers des issues possibles.",
        correction: "Les issues possibles sont les six numéros : Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6}."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Avec ce même dé, donne les issues favorables à l'événement « obtenir un nombre supérieur à 4 ».",
        correction: "Les nombres supérieurs à 4 parmi les issues sont 5 et 6. L'événement est donc {5 ; 6}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On lance un dé équilibré à six faces. Calcule la probabilité :\n1. D'obtenir 3.\n2. D'obtenir un nombre pair.\n3. D'obtenir 7.",
        correction: "Les six issues sont équiprobables.\n1. Une issue favorable sur six : P = 1/6.\n2. Trois issues favorables, {2 ; 4 ; 6} : P = 3/6 = 1/2.\n3. Aucune issue favorable : P = 0/6 = 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un sac contient 4 boules vertes et 6 boules jaunes. Chaque boule a la même chance d'être tirée. On tire une boule.\nQuelle est la probabilité de tirer une boule verte ?",
        correction: "Il y a 4 + 6 = 10 boules au total. Quatre sont vertes.\nProbabilité = 4/10 = 2/5 = 0,4, soit 40 %."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On lance un dé équilibré à six faces. A est l'événement « obtenir un nombre strictement inférieur à 5 ».\n1. Donne les issues favorables à A.\n2. Calcule la probabilité de A.\n3. Décris l'événement contraire et calcule sa probabilité.",
        correction: "1. A = {1 ; 2 ; 3 ; 4}.\n2. Les six issues sont équiprobables : P(A) = 4/6 = 2/3.\n3. Le contraire est « obtenir 5 ou 6 », soit {5 ; 6}. Sa probabilité est 2/6 = 1/3. On vérifie : 2/3 + 1/3 = 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Lors de 50 lancers d'une pièce, on obtient 28 fois face.\n1. Quelle est la fréquence observée de face ?\n2. Peut-on conclure que la probabilité de face est exactement cette fréquence ?",
        correction: "1. Fréquence observée : 28 ÷ 50 = 0,56, soit 56 %.\n2. Non. Une fréquence observée peut varier à cause du hasard. Elle ne suffit pas, à elle seule, à donner la probabilité exacte."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un sac contient 5 boules rouges, 3 bleues et 2 vertes. On tire une boule ; chaque boule a la même chance d'être tirée.\n1. Quelle est la probabilité de tirer une boule bleue ?\n2. Quelle est la probabilité de ne pas tirer une boule bleue ?\n3. Vérifie en comptant directement les boules non bleues.",
        correction: "Il y a 5 + 3 + 2 = 10 boules.\n1. P(bleue) = 3/10 = 0,3.\n2. P(non bleue) = 1 − 0,3 = 0,7.\n3. Il y a 5 + 2 = 7 boules non bleues : P(non bleue) = 7/10 = 0,7. Les deux méthodes concordent."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On lance un dé équilibré à six faces numérotées de 1 à 6. Soit A l'événement « obtenir un multiple de 3 » et B l'événement « obtenir un nombre impair ».\n1. Donne les issues de A et de B.\n2. Calcule P(A) et P(B).\n3. Quelle est la probabilité d'obtenir une issue qui réalise à la fois A et B ?",
        correction: "1. A = {3 ; 6} et B = {1 ; 3 ; 5}.\n2. Les six issues sont équiprobables : P(A) = 2/6 = 1/3 et P(B) = 3/6 = 1/2.\n3. La seule issue qui est à la fois multiple de 3 et impaire est 3. La probabilité cherchée est donc 1/6."
      }
    ]
  }
]);
