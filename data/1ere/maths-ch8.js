// ===== GUIDE - Mathématiques Première =====
// Chapitre 8 : dénombrement, arrangements, permutations et combinaisons.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-denombrement",
    titre: "Chapitre 8 : Dénombrement, arrangements, permutations et combinaisons",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-denombrement-principes",
        titre: "Compter sans oublier ni répéter",
        blocs: [
          {
            type: "introduction",
            titre: "Une question de choix",
            texte: "Une cantine propose 2 plats et 3 boissons. Combien de repas différents peut-on former en choisissant un plat et une boisson ?\n\nPour chacun des 2 plats, il existe 3 choix de boisson. Il y a donc 2 × 3 = 6 repas possibles.\n\nLe dénombrement permet de compter des possibilités sans nécessairement les écrire toutes."
          },
          {
            type: "regle",
            titre: "Principe multiplicatif",
            texte: "Si un choix se fait en deux étapes, avec m possibilités pour la première étape et, pour chacune d'elles, n possibilités pour la seconde, le nombre total de choix est m × n.\n\nOn peut prolonger le raisonnement à plusieurs étapes : on multiplie les nombres de possibilités lorsque, à chaque étape, le nombre annoncé s'applique à chaque choix précédent."
          },
          {
            type: "schema",
            titre: "Deux plats et trois boissons",
            svg: "<svg viewBox='0 0 400 210' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Arbre de choix : chacun des deux plats A et B peut être associé aux boissons 1, 2 ou 3, ce qui donne six repas'><rect width='400' height='210' fill='white'/><g stroke='#64748b' stroke-width='2'><line x1='45' y1='105' x2='155' y2='50'/><line x1='45' y1='105' x2='155' y2='160'/><line x1='165' y1='50' x2='300' y2='25'/><line x1='165' y1='50' x2='300' y2='50'/><line x1='165' y1='50' x2='300' y2='75'/><line x1='165' y1='160' x2='300' y2='135'/><line x1='165' y1='160' x2='300' y2='160'/><line x1='165' y1='160' x2='300' y2='185'/></g><g font-size='15' fill='#1e293b'><text x='15' y='110'>Départ</text><text x='150' y='45'>A</text><text x='150' y='155'>B</text><text x='307' y='30'>1 : A1</text><text x='307' y='55'>2 : A2</text><text x='307' y='80'>3 : A3</text><text x='307' y='140'>1 : B1</text><text x='307' y='165'>2 : B2</text><text x='307' y='190'>3 : B3</text></g></svg>",
            legende: "Chaque chemin complet représente un repas : 2 choix de plat, puis 3 choix de boisson, soit 6 possibilités."
          },
          {
            type: "regle",
            titre: "Principe additif",
            texte: "Si des possibilités sont réparties en catégories qui ne se recouvrent pas, le nombre total est la somme des nombres de possibilités de chaque catégorie.\n\nPar exemple, si l'on choisit soit une pomme parmi 4 pommes, soit une orange parmi 3 oranges, il y a 4 + 3 = 7 choix possibles.\n\nIl faut vérifier qu'aucune possibilité n'est comptée dans deux catégories."
          },
          {
            type: "methode",
            titre: "Les bonnes questions",
            texte: "Avant de compter, demande-toi :\n\n1. Qu'est-ce qu'un résultat ? Une liste ordonnée, un groupe ou une application ?\n2. L'ordre compte-t-il ?\n3. Peut-on répéter un élément ?\n4. Combien d'éléments sont disponibles et combien sont choisis ?\n5. Les contraintes modifient-elles le nombre de choix à une étape ?"
          }
        ]
      },

      {
        id: "m1-factorielle-permutation",
        titre: "Factorielle et permutations",
        blocs: [
          {
            type: "definition",
            titre: "Factorielle",
            texte: "Pour un entier naturel n ≥ 1, la factorielle de n est le produit :\n\nn! = n × (n - 1) × … × 2 × 1.\n\nPar convention, 0! = 1.\n\nExemples : 3! = 3 × 2 × 1 = 6 et 5! = 120."
          },
          {
            type: "definition",
            titre: "Permutation",
            texte: "Une permutation de n éléments distincts est une façon de ranger tous ces éléments dans un ordre.\n\nLe nombre de permutations de n éléments distincts est n!."
          },
          {
            type: "methode",
            titre: "Pourquoi n! ?",
            texte: "Pour ranger n objets distincts :\n\n• il y a n choix pour la première place ;\n• puis n - 1 choix pour la deuxième ;\n• puis n - 2 choix pour la troisième ;\n• et ainsi de suite jusqu'à 1 choix.\n\nLe principe multiplicatif donne n × (n - 1) × … × 1 = n! possibilités."
          },
          {
            type: "exemple",
            titre: "Ranger trois livres",
            texte: "Pour ranger trois livres distincts A, B et C, il y a 3! = 6 ordres :\n\nABC, ACB, BAC, BCA, CAB et CBA.\n\nL'ordre compte : ABC et BAC sont deux rangements différents."
          },
          {
            type: "remarque",
            titre: "Objets distincts",
            texte: "La formule n! compte les rangements de n éléments distincts. Si certains objets sont indiscernables, plusieurs rangements comptés par n! peuvent être identiques : il faut adapter le calcul."
          }
        ]
      },

      {
        id: "m1-arrangements",
        titre: "Arrangements sans répétition",
        blocs: [
          {
            type: "definition",
            titre: "Choisir et ordonner",
            texte: "Un arrangement de p éléments parmi n éléments distincts est une liste ordonnée de p éléments distincts choisis parmi les n.\n\nOn suppose 0 ≤ p ≤ n. Son nombre est noté Aₙᵖ :\n\nAₙᵖ = n × (n - 1) × … × (n - p + 1) = n!/(n - p)!.\n\nPour p = 0, il y a une liste vide : Aₙ⁰ = 1."
          },
          {
            type: "exemple",
            titre: "Un président et un secrétaire",
            texte: "Dans un groupe de 5 personnes, on choisit un président et un secrétaire, deux personnes différentes.\n\nIl y a 5 choix pour le président, puis 4 pour le secrétaire :\n\nA₅² = 5 × 4 = 20.\n\nL'ordre compte car les rôles sont différents : choisir A président et B secrétaire n'est pas la même chose que choisir B président et A secrétaire."
          },
          {
            type: "remarque",
            titre: "Choisir tout le monde",
            texte: "Si p = n, un arrangement est un ordre de tous les éléments : c'est une permutation.\n\nOn retrouve Aₙⁿ = n!."
          }
        ]
      },

      {
        id: "m1-combinaisons",
        titre: "Combinaisons sans ordre",
        blocs: [
          {
            type: "definition",
            titre: "Choisir un groupe",
            texte: "Une combinaison de p éléments parmi n éléments distincts est un choix de p éléments sans tenir compte de leur ordre.\n\nPour 0 ≤ p ≤ n, le nombre de combinaisons est noté Cₙᵖ ou (n parmi p) :\n\nCₙᵖ = n!/[p!(n - p)!].\n\nOn a notamment Cₙ⁰ = 1 et Cₙⁿ = 1."
          },
          {
            type: "methode",
            titre: "Pourquoi diviser par p! ?",
            texte: "Un arrangement choisit p éléments et les classe. Pour un même groupe de p éléments distincts, il existe p! façons de les ordonner.\n\nChaque groupe est donc compté p! fois parmi les arrangements. Ainsi :\n\nCₙᵖ = Aₙᵖ/p!."
          },
          {
            type: "exemple",
            titre: "Former une équipe",
            texte: "On choisit 2 personnes parmi 5 pour former une équipe, sans rôle attribué.\n\nC₅² = 5!/(2! × 3!) = (5 × 4)/(2 × 1) = 10.\n\nL'équipe {A ; B} est la même que l'équipe {B ; A}. On ne la compte qu'une fois."
          },
          {
            type: "regle",
            titre: "Symétrie",
            texte: "Choisir p éléments à conserver revient à choisir les n - p éléments à laisser de côté. Donc :\n\nCₙᵖ = Cₙⁿ⁻ᵖ.\n\nPar exemple, choisir 2 personnes parmi 5 revient à choisir les 3 personnes non retenues : C₅² = C₅³ = 10."
          },
          {
            type: "tableau",
            titre: "Comparer les situations",
            entetes: ["Situation", "L'ordre compte ?", "Nombre"],
            lignes: [
              ["Ranger les n éléments distincts", "Oui", "n!"],
              ["Choisir p éléments distincts et les ordonner", "Oui", "Aₙᵖ = n!/(n - p)!"],
              ["Choisir p éléments distincts sans ordre", "Non", "Cₙᵖ = n!/[p!(n - p)!]"]
            ]
          }
        ]
      },

      {
        id: "m1-applications-finies",
        titre: "Compter des applications entre ensembles finis",
        blocs: [
          {
            type: "definition",
            titre: "Toutes les applications",
            texte: "Soient E et F deux ensembles finis, avec E contenant n éléments et F contenant m éléments.\n\nPour définir une application de E vers F, on choisit une image dans F pour chacun des n éléments de E. Les images peuvent être répétées.\n\nSi n ≥ 1 et m ≥ 1, il y a mⁿ applications de E vers F."
          },
          {
            type: "exemple",
            titre: "Trois éléments vers deux éléments",
            texte: "Soient E = {a ; b ; c} et F = {0 ; 1}.\n\nChacun des trois éléments de E a 2 choix d'image. Il y a donc 2 × 2 × 2 = 2³ = 8 applications de E vers F.\n\nPar exemple, l'application définie par f(a) = 0, f(b) = 0 et f(c) = 1 est autorisée : plusieurs éléments peuvent avoir la même image."
          },
          {
            type: "regle",
            titre: "Applications injectives",
            texte: "Pour qu'une application soit injective, les images des éléments de E doivent être toutes distinctes.\n\nSi E contient n éléments et F en contient m, avec 0 ≤ n ≤ m, le nombre d'applications injectives de E vers F est :\n\nAₘⁿ = m!/(m - n)!.\n\nSi n > m, il n'existe aucune injection de E vers F."
          },
          {
            type: "exemple",
            titre: "Compter des injections",
            texte: "Si E possède 2 éléments et F en possède 4, il y a 4 choix pour l'image du premier élément de E, puis 3 choix différents pour celle du second.\n\nIl y a donc 4 × 3 = 12 injections de E vers F."
          },
          {
            type: "regle",
            titre: "Applications bijectives",
            texte: "Si E et F possèdent chacun n éléments, le nombre de bijections de E vers F est n! : on attribue les n éléments de F aux n éléments de E sans répétition.\n\nSi E et F n'ont pas le même nombre d'éléments, il n'existe aucune bijection entre ces ensembles finis."
          },
          {
            type: "remarque",
            titre: "Et les surjections ?",
            texte: "Pour compter les surjections, il faut s'assurer que chaque élément de l'ensemble d'arrivée est atteint. Ce n'est pas toujours le même calcul que mⁿ.\n\nPar exemple, de E = {a ; b} vers F = {0 ; 1}, il existe 4 applications au total, mais seulement 2 surjections : celles qui envoient a et b sur des valeurs différentes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une tenue est formée d'une chemise choisie parmi 3 chemises distinctes et d'un pantalon choisi parmi 2 pantalons distincts. Combien de tenues différentes peut-on former ?",
        correction: "Pour chacune des 3 chemises, il existe 2 choix de pantalon.\n\nLe principe multiplicatif donne 3 × 2 = 6 tenues différentes."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n\n1. 4!\n2. 0!\n3. Le nombre de façons de ranger 3 livres distincts sur une étagère.",
        correction: "1. 4! = 4 × 3 × 2 × 1 = 24.\n\n2. Par convention, 0! = 1.\n\n3. Il s'agit de ranger tous les livres distincts : il y a 3! = 6 façons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un groupe de 6 personnes, on choisit un président puis un secrétaire. Une même personne ne peut pas occuper les deux rôles.\n\nCombien de choix sont possibles ?",
        correction: "Il y a 6 choix pour le président, puis 5 pour le secrétaire.\n\nLe nombre de choix est A₆² = 6 × 5 = 30.\n\nLes rôles sont différents : l'ordre compte."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un groupe de 6 personnes, on choisit 2 personnes pour former une équipe, sans attribuer de rôle. Combien d'équipes sont possibles ?",
        correction: "L'ordre ne compte pas. On calcule :\n\nC₆² = (6 × 5)/(2 × 1) = 15.\n\nIl existe donc 15 équipes possibles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un code est une suite de 3 chiffres choisis parmi 0, 1, 2, 3 et 4. Le premier chiffre peut être 0.\n\n1. Combien de codes existe-t-il si les répétitions sont autorisées ?\n2. Combien de codes existe-t-il si les trois chiffres doivent être distincts ?",
        correction: "1. Chaque position a 5 choix, indépendamment des autres : 5³ = 125 codes.\n\n2. Il y a 5 choix pour la première position, puis 4 et 3 : 5 × 4 × 3 = 60 codes.\n\nIl s'agit d'arrangements sans répétition dans la seconde question."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soient E un ensemble de 3 éléments et F un ensemble de 4 éléments.\n\n1. Combien existe-t-il d'applications de E vers F ?\n2. Combien de ces applications sont injectives ?\n3. Une application de E vers F peut-elle être bijective ?",
        correction: "1. Chacun des 3 éléments de E a 4 choix d'image : il existe 4³ = 64 applications.\n\n2. Pour une injection, les images doivent être distinctes : 4 × 3 × 2 = 24 injections.\n\n3. Non. Les deux ensembles finis n'ont pas le même nombre d'éléments ; aucune application de E vers F ne peut être bijective."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un groupe comprend 5 filles et 4 garçons, toutes ces personnes étant distinctes. On forme une équipe de 3 personnes sans attribuer de rôle.\n\n1. Combien d'équipes différentes peut-on former ?\n2. Combien d'équipes contiennent exactement 2 filles et 1 garçon ?\n3. Combien d'équipes contiennent au moins 1 garçon ?",
        correction: "1. Le groupe comprend 9 personnes. Le nombre d'équipes est :\n\nC₉³ = (9 × 8 × 7)/(3 × 2 × 1) = 84.\n\n2. On choisit 2 filles parmi 5 et 1 garçon parmi 4 :\n\nC₅² × C₄¹ = 10 × 4 = 40.\n\n3. On retire du total les équipes ne contenant aucun garçon, donc composées de 3 filles :\n\nC₅³ = 10.\n\nIl reste 84 - 10 = 74 équipes contenant au moins 1 garçon."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soient E = {a ; b ; c} et F = {1 ; 2}.\n\n1. Combien existe-t-il d'applications de E vers F ?\n2. Combien de ces applications sont surjectives ?\n3. Combien sont injectives ? Justifie.",
        correction: "1. Chacun des 3 éléments de E possède 2 choix d'image. Il existe donc 2³ = 8 applications.\n\n2. Une application n'est pas surjective si elle n'atteint pas l'un des deux éléments de F. Ici, cela signifie que les trois éléments de E ont tous la même image.\n\nIl y a deux applications de ce type : tout envoyer sur 1 ou tout envoyer sur 2.\n\nLe nombre de surjections est donc 8 - 2 = 6.\n\n3. Il n'y a aucune injection : on ne peut pas attribuer trois images distinctes à trois éléments en ne disposant que de deux éléments dans F."
      }
    ]
  }
]);
