enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch31",
    titre: "Chapitre 31 : Dénombrement",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch31-l1",
        titre: "Leçon 1 : Compter avec méthode",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi dénombrer ?",
            texte: "Dénombrer signifie compter le nombre de possibilités sans nécessairement les écrire toutes. Cette démarche est utile, notamment pour calculer des probabilités.\n\nAvant de choisir une formule, il faut préciser ce que l’on compte, si l’ordre intervient et si une même option peut être utilisée plusieurs fois."
          },
          {
            type: "definition",
            titre: "Principe additif",
            texte: "Si une possibilité est obtenue de l’une ou de l’autre de deux façons incompatibles, on additionne les nombres de possibilités.\n\nSi A et B sont deux ensembles sans élément commun, alors |A ∪ B| = |A| + |B|."
          },
          {
            type: "definition",
            titre: "Principe multiplicatif",
            texte: "Si une action se déroule en plusieurs étapes et que chaque choix de la première étape peut être suivi de n₂ choix à la deuxième, puis de n₃ choix à la troisième, le nombre total de possibilités est le produit des nombres de choix.\n\nPour deux étapes : n₁ × n₂."
          },
          {
            type: "exemple",
            titre: "Choisir une tenue",
            texte: "Avec 3 chemises et 2 pantalons, on peut former 3 × 2 = 6 tenues, à condition que chaque chemise puisse être associée à chaque pantalon."
          },
          {
            type: "schema",
            titre: "Arbre de choix",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 220'><circle cx='40' cy='110' r='4' fill='#334155'/><line x1='44' y1='110' x2='145' y2='50' stroke='#64748b'/><line x1='44' y1='110' x2='145' y2='110' stroke='#64748b'/><line x1='44' y1='110' x2='145' y2='170' stroke='#64748b'/><text x='150' y='54' font-size='13'>C1</text><text x='150' y='114' font-size='13'>C2</text><text x='150' y='174' font-size='13'>C3</text><line x1='175' y1='50' x2='270' y2='25' stroke='#64748b'/><line x1='175' y1='50' x2='270' y2='75' stroke='#64748b'/><line x1='175' y1='110' x2='270' y2='85' stroke='#64748b'/><line x1='175' y1='110' x2='270' y2='135' stroke='#64748b'/><line x1='175' y1='170' x2='270' y2='145' stroke='#64748b'/><line x1='175' y1='170' x2='270' y2='195' stroke='#64748b'/><text x='278' y='29' font-size='12'>P1</text><text x='278' y='79' font-size='12'>P2</text><text x='278' y='89' font-size='12'>P1</text><text x='278' y='139' font-size='12'>P2</text><text x='278' y='149' font-size='12'>P1</text><text x='278' y='199' font-size='12'>P2</text></svg>",
            legende: "Chaque branche complète correspond à une tenue : 3 choix de chemise et 2 choix de pantalon, soit 6 tenues."
          },
          {
            type: "remarque",
            titre: "Attention aux doubles comptes",
            texte: "Pour additionner directement deux nombres de possibilités, les catégories doivent être disjointes. Sinon, les éléments communs sont comptés deux fois et doivent être retirés une fois."
          }
        ]
      },

      {
        id: "tle-maths-ch31-l2",
        titre: "Leçon 2 : Listes ordonnées et permutations",
        blocs: [
          {
            type: "definition",
            titre: "Factorielle",
            texte: "Pour un entier n ≥ 1, on définit n! = n × (n − 1) × … × 2 × 1. Par convention, 0! = 1.\n\nPar exemple, 4! = 4 × 3 × 2 × 1 = 24."
          },
          {
            type: "definition",
            titre: "Listes avec répétition",
            texte: "Pour former une liste ordonnée de p éléments à partir de n éléments, avec répétition autorisée, chaque place offre n choix. Le nombre de listes est nᵖ.\n\nPar exemple, un code de 3 chiffres, zéro initial autorisé et répétition autorisée, peut être formé de 10³ = 1 000 façons."
          },
          {
            type: "definition",
            titre: "Arrangements sans répétition",
            texte: "Pour former une liste ordonnée de p éléments distincts choisis parmi n éléments, avec 0 ≤ p ≤ n, le nombre de listes est :\n\nA(n, p) = n × (n − 1) × … × (n − p + 1) = n!/(n − p)!.\n\nL’ordre compte et chaque élément est utilisé au plus une fois. Pour p = 0, il existe une liste vide."
          },
          {
            type: "exemple",
            titre: "Attribuer des places",
            texte: "Parmi 8 candidats, on attribue une première, une deuxième et une troisième place à trois personnes distinctes.\n\nIl y a 8 choix pour la première place, 7 pour la deuxième et 6 pour la troisième : A(8, 3) = 8 × 7 × 6 = 336."
          },
          {
            type: "definition",
            titre: "Permutations",
            texte: "Une permutation de n éléments distincts est un classement de tous ces éléments. Il y en a n!.\n\nPour ranger 4 livres distincts sur une étagère, on dispose de 4! = 24 ordres possibles."
          }
        ]
      },

      {
        id: "tle-maths-ch31-l3",
        titre: "Leçon 3 : Combinaisons",
        blocs: [
          {
            type: "definition",
            titre: "Choix sans ordre",
            texte: "Une combinaison de p éléments parmi n est un sous-ensemble de p éléments distincts choisis parmi n, sans tenir compte de leur ordre.\n\nLe nombre de ces choix est noté C(n, p) ou « n parmi p » :\n\nC(n, p) = n!/[p!(n − p)!], pour 0 ≤ p ≤ n."
          },
          {
            type: "methode",
            titre: "Pourquoi diviser par p! ?",
            texte: "Chaque groupe de p éléments distincts peut être rangé dans p! ordres différents. Les arrangements comptent tous ces ordres, alors qu’une combinaison compte le groupe une seule fois.\n\nAinsi C(n, p) = A(n, p)/p!."
          },
          {
            type: "exemple",
            titre: "Former un groupe",
            texte: "On choisit 3 élèves parmi 8, sans attribuer de rôle.\n\nLe nombre de groupes est C(8, 3) = (8 × 7 × 6)/(3 × 2 × 1) = 56.\n\nLe groupe {A, B, C} est le même que {C, A, B} : l’ordre ne compte pas."
          },
          {
            type: "texte",
            titre: "Propriétés utiles",
            texte: "Pour 0 ≤ p ≤ n : C(n, p) = C(n, n − p). Choisir p éléments revient à choisir les n − p éléments laissés de côté.\n\nOn a aussi C(n, 0) = C(n, n) = 1. Pour 1 ≤ p ≤ n − 1 :\nC(n, p) = C(n − 1, p − 1) + C(n − 1, p)."
          },
          {
            type: "remarque",
            titre: "Choix avec rôles",
            texte: "Choisir trois élèves puis leur attribuer les rôles distincts de président, secrétaire et trésorier n’est pas un simple choix sans ordre. Il y a C(n, 3) × 3! = A(n, 3) possibilités."
          }
        ]
      },

      {
        id: "tle-maths-ch31-l4",
        titre: "Leçon 4 : Restrictions et formule du binôme",
        blocs: [
          {
            type: "methode",
            titre: "Compter avec une restriction",
            texte: "Selon l’énoncé, on peut :\n• séparer en cas incompatibles et additionner ;\n• effectuer des choix successifs et multiplier ;\n• compter tous les cas, puis soustraire ceux qui ne conviennent pas.\n\nIl faut vérifier que chaque cas favorable est compté une seule fois."
          },
          {
            type: "exemple",
            titre: "Au moins un",
            texte: "On forme un code de 3 chiffres, zéro initial et répétition autorisés. Combien contiennent au moins un zéro ?\n\nIl y a 10³ = 1 000 codes au total. Ceux qui ne contiennent aucun zéro sont formés avec les 9 chiffres de 1 à 9 : il y en a 9³ = 729.\n\nLe nombre cherché est 1 000 − 729 = 271."
          },
          {
            type: "definition",
            titre: "Formule du binôme de Newton",
            texte: "Pour tout entier n ≥ 0 :\n\n(a + b)ⁿ = Σ C(n, p)aⁿ⁻ᵖbᵖ, la somme portant sur p de 0 à n.\n\nLes coefficients C(n, p) comptent les façons de choisir les p facteurs qui fournissent b parmi les n facteurs du produit."
          },
          {
            type: "exemple",
            titre: "Développer",
            texte: "Pour n = 3, les coefficients sont 1, 3, 3, 1. Donc :\n\n(a + b)³ = a³ + 3a²b + 3ab² + b³.\n\nEn particulier, (x + 2)³ = x³ + 6x² + 12x + 8."
          },
          {
            type: "methode",
            titre: "Choisir une formule",
            texte: "• Choix successifs indépendants avec répétition : produit, souvent nᵖ.\n• Choix ordonné sans répétition : arrangement A(n, p).\n• Classement de tous les éléments distincts : permutation, n!.\n• Groupe sans ordre et sans répétition : combinaison C(n, p).\n\nAvant de calculer, vérifier les contraintes particulières de l’énoncé."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un repas comprend une entrée choisie parmi 3 et un plat choisi parmi 4. Combien de repas différents peut-on former si toutes les associations sont possibles ?",
        correction: "Il y a 3 choix pour l’entrée et 4 pour le plat, soit 3 × 4 = 12 repas."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer 5! et 0!.",
        correction: "5! = 5 × 4 × 3 × 2 × 1 = 120. Par convention, 0! = 1."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Combien de codes de 2 chiffres peut-on former si le zéro initial et les répétitions sont autorisés ?",
        correction: "Chaque position offre 10 choix. Il y a donc 10 × 10 = 100 codes."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Combien d’ordres différents peut-on obtenir en rangeant 4 livres distincts ?",
        correction: "On classe tous les livres : il y a 4! = 24 ordres."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer C(5, 2).",
        correction: "C(5, 2) = (5 × 4)/(2 × 1) = 10."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Parmi 7 élèves, on choisit un président puis un secrétaire différent. Combien de choix sont possibles ?",
        correction: "Il y a 7 choix pour le président puis 6 pour le secrétaire. Les rôles étant distincts, l’ordre compte : 7 × 6 = 42 possibilités."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Combien de groupes de 2 personnes peut-on former parmi 7 personnes ?",
        correction: "L’ordre ne compte pas. Le nombre de groupes est C(7, 2) = 7 × 6/2 = 21."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Combien de nombres de 3 chiffres distincts peut-on former avec 1, 2, 3, 4 et 5 ?",
        correction: "Il y a 5 choix pour le premier chiffre, 4 pour le deuxième et 3 pour le troisième. On obtient 5 × 4 × 3 = 60 nombres."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Combien de codes de 3 chiffres, zéro initial et répétition autorisés, ne contiennent aucun chiffre 0 ?",
        correction: "Chacune des 3 positions peut recevoir l’un des 9 chiffres de 1 à 9. Il y a 9³ = 729 codes."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Développer (x + 1)⁴.",
        correction: "Les coefficients sont 1, 4, 6, 4, 1. Donc (x + 1)⁴ = x⁴ + 4x³ + 6x² + 4x + 1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un groupe de 6 filles et 4 garçons, combien de groupes de 2 filles et 1 garçon peut-on former ?",
        correction: "On choisit 2 filles de C(6, 2) = 15 façons et 1 garçon de C(4, 1) = 4 façons. On multiplie : 15 × 4 = 60 groupes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Combien de nombres pairs de 3 chiffres distincts peut-on former avec les chiffres 1, 2, 3, 4 et 5 ?",
        correction: "Le dernier chiffre doit être 2 ou 4 : 2 choix. Le premier chiffre est choisi parmi les 4 chiffres restants, puis le deuxième parmi les 3 restants. Il y a 2 × 4 × 3 = 24 nombres."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Combien de groupes de 3 personnes parmi 5 femmes et 4 hommes contiennent au moins une femme ?",
        correction: "On compte tous les groupes de 3 parmi 9, puis on retire ceux constitués uniquement d’hommes : C(9, 3) − C(4, 3) = 84 − 4 = 80 groupes."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Une classe compte 6 filles et 5 garçons. 1. Combien de groupes de 3 élèves peut-on former ? 2. Combien contiennent exactement 2 filles ? 3. Combien contiennent au moins une fille ?",
        correction: "1. Il y a 11 élèves : le nombre de groupes est C(11, 3) = 11 × 10 × 9/(3 × 2 × 1) = 165.\n2. On choisit 2 filles et 1 garçon : C(6, 2) × C(5, 1) = 15 × 5 = 75.\n3. On retire des 165 groupes ceux composés uniquement de garçons : C(11, 3) − C(5, 3) = 165 − 10 = 155."
      }
    ]
  }
]);
