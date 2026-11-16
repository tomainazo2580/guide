enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch16",
    titre: "Chapitre 16 : Probabilités",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch16-lecon1",
        titre: "1. Expériences aléatoires et issues",
        blocs: [
          {
            type: "definition",
            titre: "Expérience aléatoire",
            texte: "Une expérience aléatoire est une expérience dont on connaît les résultats possibles, mais dont on ne peut pas prévoir avec certitude le résultat avant de la réaliser."
          },
          {
            type: "definition",
            titre: "Issue",
            texte: "Une issue est un résultat possible d’une expérience aléatoire. L’ensemble de toutes les issues possibles s’appelle l’univers de l’expérience."
          },
          {
            type: "exemple",
            titre: "Lancer une pièce",
            texte: "On lance une pièce et on observe sa face supérieure. Les issues sont « pile » et « face ». Avant le lancer, on ne sait pas avec certitude laquelle apparaîtra."
          },
          {
            type: "exemple",
            titre: "Lancer un dé",
            texte: "On lance un dé ordinaire à six faces numérotées de 1 à 6 et on lit le nombre obtenu. Les issues sont 1, 2, 3, 4, 5 et 6."
          },
          {
            type: "remarque",
            titre: "Bien préciser l’expérience",
            texte: "Pour connaître les issues, il faut préciser ce que l’on observe. Avec un dé, on peut par exemple observer le nombre obtenu ou seulement savoir s’il est pair ou impair."
          }
        ]
      },

      {
        id: "maths5-ch16-lecon2",
        titre: "2. Événements",
        blocs: [
          {
            type: "definition",
            titre: "Événement",
            texte: "Un événement est une condition qui peut être réalisée ou non à l’issue d’une expérience aléatoire. Il correspond à un ensemble d’issues."
          },
          {
            type: "exemple",
            titre: "Obtenir un nombre pair",
            texte: "Avec un dé numéroté de 1 à 6, l’événement « obtenir un nombre pair » est réalisé si l’issue est 2, 4 ou 6. Ces trois issues sont favorables à l’événement."
          },
          {
            type: "definition",
            titre: "Événement certain et événement impossible",
            texte: "Un événement certain se réalise pour toutes les issues possibles. Un événement impossible ne se réalise pour aucune issue possible."
          },
          {
            type: "exemple",
            titre: "Avec un dé ordinaire",
            texte: "« Obtenir un nombre inférieur à 7 » est certain. « Obtenir 8 » est impossible. « Obtenir 5 » est possible, mais pas certain."
          },
          {
            type: "definition",
            titre: "Événement contraire",
            texte: "L’événement contraire de A se réalise exactement lorsque A ne se réalise pas. Pour le dé, le contraire de « obtenir un nombre pair » est « obtenir un nombre impair »."
          },
          {
            type: "remarque",
            titre: "« Et » ou « ou » ?",
            texte: "« Pair et supérieur à 3 » signifie que les deux conditions sont vraies : les issues sont 4 et 6. « Pair ou supérieur à 3 » signifie qu’au moins une des deux conditions est vraie : les issues sont 2, 4, 5 et 6."
          }
        ]
      },

      {
        id: "maths5-ch16-lecon3",
        titre: "3. Probabilité et équiprobabilité",
        blocs: [
          {
            type: "definition",
            titre: "Probabilité",
            texte: "La probabilité mesure la chance qu’un événement se réalise. Elle est comprise entre 0 et 1. Une probabilité de 0 correspond à un événement impossible et une probabilité de 1 à un événement certain."
          },
          {
            type: "definition",
            titre: "Issues équiprobables",
            texte: "Des issues sont équiprobables lorsqu’elles ont toutes la même probabilité de se produire. Par exemple, on considère généralement qu’un dé équilibré a six issues équiprobables."
          },
          {
            type: "regle",
            titre: "Calcul avec des issues équiprobables",
            texte: "Si toutes les issues sont équiprobables : probabilité d’un événement = nombre d’issues favorables ÷ nombre total d’issues possibles."
          },
          {
            type: "exemple",
            titre: "Obtenir un nombre pair",
            texte: "Pour un dé équilibré, les issues favorables sont 2, 4 et 6 : il y en a 3 sur 6 issues possibles. La probabilité est donc 3/6 = 1/2 = 0,5, soit 50 %."
          },
          {
            type: "remarque",
            titre: "La condition est importante",
            texte: "On ne peut pas utiliser la formule « issues favorables ÷ issues possibles » sans vérifier que les issues comptées sont équiprobables. Si une pièce est truquée, pile et face peuvent ne pas avoir la même probabilité."
          },
          {
            type: "regle",
            titre: "Événement contraire",
            texte: "La probabilité d’un événement et celle de son contraire ont pour somme 1. Ainsi : probabilité du contraire de A = 1 − probabilité de A."
          }
        ]
      },

      {
        id: "maths5-ch16-lecon4",
        titre: "4. Calculer des probabilités",
        blocs: [
          {
            type: "methode",
            titre: "Une démarche en quatre étapes",
            texte: "1. Décrire l’expérience et lister les issues. 2. Vérifier si elles sont équiprobables. 3. Repérer les issues favorables à l’événement. 4. Diviser leur nombre par le nombre total d’issues, puis simplifier si possible."
          },
          {
            type: "exemple",
            titre: "Tirer une boule",
            texte: "Un sac opaque contient 3 boules rouges et 2 boules bleues, indiscernables au toucher. On tire une boule au hasard. En considérant les cinq boules équiprobables, la probabilité d’obtenir une boule rouge est 3/5 et celle d’obtenir une boule bleue est 2/5."
          },
          {
            type: "exemple",
            titre: "Un événement impossible",
            texte: "Dans ce même sac, il n’y a aucune boule verte. La probabilité de tirer une boule verte est 0/5 = 0."
          },
          {
            type: "exemple",
            titre: "Un événement certain",
            texte: "Toutes les boules sont rouges ou bleues. La probabilité de tirer une boule rouge ou bleue est 5/5 = 1."
          },
          {
            type: "remarque",
            titre: "Couleurs et boules",
            texte: "Dans le sac précédent, les cinq boules sont supposées équiprobables, mais les deux couleurs ne le sont pas : il y a davantage de boules rouges que de boules bleues."
          }
        ]
      },

      {
        id: "maths5-ch16-lecon5",
        titre: "5. Fréquence expérimentale",
        blocs: [
          {
            type: "definition",
            titre: "Observer des résultats",
            texte: "La fréquence expérimentale d’un événement est le nombre de fois où il s’est réalisé, divisé par le nombre total d’expériences effectuées."
          },
          {
            type: "exemple",
            titre: "Lancers d’une pièce",
            texte: "On lance une pièce 20 fois et on obtient 12 fois pile. La fréquence expérimentale de pile est 12/20 = 0,6, soit 60 %."
          },
          {
            type: "texte",
            titre: "Fréquence et probabilité",
            texte: "Si la pièce est équilibrée, la probabilité théorique de pile est 1/2, soit 50 %. La fréquence observée sur une série de lancers peut être différente : le hasard produit des variations."
          },
          {
            type: "remarque",
            titre: "Quand on répète davantage",
            texte: "Lorsque le nombre de répétitions indépendantes augmente, la fréquence tend généralement à se rapprocher de la probabilité théorique. Ce rapprochement n’est pas garanti à chaque nouvelle répétition."
          },
          {
            type: "exemple",
            titre: "Attention aux prévisions",
            texte: "Même si une pièce équilibrée vient de donner plusieurs fois pile, la probabilité d’obtenir pile au lancer suivant reste 1/2, si les lancers sont indépendants."
          }
        ]
      },

      {
        id: "maths5-ch16-lecon6",
        titre: "6. Deux expériences successives et arbres",
        blocs: [
          {
            type: "texte",
            titre: "Deux lancers d’une pièce",
            texte: "On lance deux fois une pièce équilibrée et les lancers sont indépendants. On note P pour pile et F pour face. Les quatre résultats possibles, dans l’ordre des lancers, sont : PP, PF, FP et FF."
          },
          {
            type: "schema",
            titre: "Arbre des deux lancers",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 230' role='img' aria-label='Arbre des deux lancers : PP, PF, FP et FF'><rect width='440' height='230' fill='white'/><g stroke='#555' stroke-width='2' fill='none'><line x1='45' y1='115' x2='165' y2='55'/><line x1='45' y1='115' x2='165' y2='175'/><line x1='165' y1='55' x2='310' y2='25'/><line x1='165' y1='55' x2='310' y2='85'/><line x1='165' y1='175' x2='310' y2='145'/><line x1='165' y1='175' x2='310' y2='205'/></g><g fill='#222' font-size='16'><text x='80' y='75'>P</text><text x='80' y='165'>F</text><text x='225' y='32'>P</text><text x='225' y='85'>F</text><text x='225' y='150'>P</text><text x='225' y='205'>F</text><text x='325' y='30'>PP</text><text x='325' y='90'>PF</text><text x='325' y='150'>FP</text><text x='325' y='210'>FF</text></g></svg>",
            legende: "Chaque chemin représente un résultat possible des deux lancers."
          },
          {
            type: "exemple",
            titre: "Lire l’arbre",
            texte: "Le chemin PF signifie : pile au premier lancer, puis face au second. Les quatre chemins PP, PF, FP et FF sont équiprobables dans cette situation."
          },
          {
            type: "exemple",
            titre: "Exactement une fois pile",
            texte: "Les résultats favorables sont PF et FP : il y a 2 chemins favorables sur 4. La probabilité est 2/4 = 1/2."
          },
          {
            type: "remarque",
            titre: "Avec ou sans remise",
            texte: "Pour deux tirages de boules, il faut préciser si l’on remet la première boule dans le sac avant le second tirage. Sans remise, le contenu du sac change ; les probabilités du second tirage peuvent donc changer."
          },
          {
            type: "exemple",
            titre: "Deux boules sans remise",
            texte: "Un sac contient une boule rouge et une boule bleue. On tire les deux boules successivement sans remise. Les seuls résultats possibles sont rouge puis bleue, ou bleue puis rouge. Obtenir deux rouges est impossible."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On lance un dé ordinaire et on lit le nombre obtenu. Liste les issues possibles.",
        correction: "Les issues possibles sont 1, 2, 3, 4, 5 et 6."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Avec un dé numéroté de 1 à 6, donne les issues favorables à l’événement « obtenir un nombre impair ».",
        correction: "Les issues favorables sont 1, 3 et 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Avec ce même dé, l’événement « obtenir 9 » est-il possible, impossible ou certain ?",
        correction: "Il est impossible : aucune face du dé ne porte le nombre 9."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est l’événement contraire de « obtenir pile » lors d’un lancer de pièce ?",
        correction: "L’événement contraire est « obtenir face », en supposant que les seules issues sont pile et face."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On lance un dé équilibré. Quelle est la probabilité d’obtenir 4 ?",
        correction: "Il y a 1 issue favorable sur 6 issues équiprobables. La probabilité est 1/6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On lance un dé équilibré. Quelle est la probabilité d’obtenir un nombre supérieur à 4 ?",
        correction: "Les issues favorables sont 5 et 6. La probabilité est 2/6 = 1/3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un sac contient 4 boules rouges et 6 boules bleues, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité qu’elle soit rouge ?",
        correction: "Il y a 4 boules rouges sur 10 boules équiprobables. La probabilité est 4/10 = 2/5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "La probabilité d’un événement est 0,3. Quelle est la probabilité de son contraire ?",
        correction: "La probabilité du contraire est 1 − 0,3 = 0,7."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une pièce donne face 14 fois en 20 lancers. Quelle est la fréquence expérimentale de face ?",
        correction: "La fréquence est 14/20 = 0,7, soit 70 %."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On lance un dé équilibré. Quelle est la probabilité d’obtenir un multiple de 3 ?",
        correction: "Les issues favorables sont 3 et 6. La probabilité est 2/6 = 1/3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On lance un dé équilibré. Donne les issues qui sont à la fois multiples de 3 et multiples de 5, puis leur probabilité.",
        correction: "Aucune face de 1 à 6 n’est à la fois multiple de 3 et de 5. L’événement est impossible : sa probabilité est 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On lance un dé équilibré. Donne les issues qui sont multiples de 3 ou de 5, puis leur probabilité.",
        correction: "Les issues favorables sont 3, 5 et 6. Il y en a 3 sur 6 : la probabilité est 3/6 = 1/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un sac contient 2 boules vertes, 3 jaunes et 5 blanches, indiscernables au toucher. On tire une boule au hasard. Calcule la probabilité de ne pas obtenir une boule blanche.",
        correction: "Il y a 10 boules au total. Les boules non blanches sont les 2 vertes et les 3 jaunes, soit 5 boules. La probabilité est 5/10 = 1/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On lance deux fois une pièce équilibrée, indépendamment. Liste les résultats possibles avec P pour pile et F pour face.",
        correction: "Les résultats possibles sont PP, PF, FP et FF. L’ordre des deux lancers compte."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans les conditions de l’exercice précédent, quelle est la probabilité d’obtenir deux fois la même face ?",
        correction: "Les résultats favorables sont PP et FF. Ils représentent 2 résultats équiprobables sur 4. La probabilité est 2/4 = 1/2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On lance un dé équilibré. Quelle est la probabilité d’obtenir un nombre pair ou supérieur à 4 ?",
        correction: "Les nombres pairs sont 2, 4 et 6 ; les nombres supérieurs à 4 sont 5 et 6. Les issues favorables sont donc 2, 4, 5 et 6. On ne compte 6 qu’une seule fois. La probabilité est 4/6 = 2/3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un sac contient 1 boule rouge et 2 boules bleues, indiscernables au toucher. On tire une boule au hasard, puis on la remet avant de tirer une seconde boule au hasard. Quelle est la probabilité d’obtenir deux boules rouges ?",
        correction: "À chaque tirage, la probabilité de tirer la boule rouge est 1/3. Les tirages avec remise sont indépendants ici. La probabilité d’obtenir deux rouges est 1/3 × 1/3 = 1/9."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans le même sac contenant 1 boule rouge et 2 bleues, on tire deux boules successivement sans remise. Quelle est la probabilité d’obtenir deux boules rouges ? Explique.",
        correction: "Elle est égale à 0 : le sac ne contient qu’une seule boule rouge et on ne la remet pas après le premier tirage. Il est donc impossible de tirer deux boules rouges."
      }
    ]
  }
]);
