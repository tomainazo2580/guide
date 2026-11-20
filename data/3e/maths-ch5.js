// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 5 : fonctions linéaires et affines.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-fonctions-affines",
    titre: "Chapitre 5 : Fonctions linéaires et affines",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-fonction-notion",
        titre: "Comprendre la notion de fonction",
        blocs: [
          {
            type: "introduction",
            titre: "Une machine à calculer",
            texte: "Imagine une machine : tu lui donnes un nombre, elle effectue un calcul et elle te renvoie un résultat.\n\nPar exemple, la machine multiplie le nombre reçu par 2, puis ajoute 3.\n\nSi on lui donne 4, elle renvoie 2 × 4 + 3 = 11.\nSi on lui donne 1, elle renvoie 2 × 1 + 3 = 5."
          },
          {
            type: "schema",
            titre: "La machine reçoit 4",
            svg: "<svg viewBox='0 0 340 110' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='La machine reçoit 4, multiplie par 2 et ajoute 3, puis renvoie 11'><rect x='95' y='20' width='150' height='60' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='170' y='46' text-anchor='middle' font-size='15' fill='#1e3a8a'>Multiplier par 2</text><text x='170' y='68' text-anchor='middle' font-size='15' fill='#1e3a8a'>puis ajouter 3</text><text x='20' y='57' font-size='18' fill='#334155'>4</text><path d='M40 50 L85 50 M78 43 L85 50 L78 57' fill='none' stroke='#334155' stroke-width='2'/><path d='M255 50 L300 50 M293 43 L300 50 L293 57' fill='none' stroke='#334155' stroke-width='2'/><text x='307' y='57' font-size='18' fill='#166534'>11</text></svg>",
            legende: "À l'entrée 4, la fonction associe le résultat 11."
          },
          {
            type: "definition",
            titre: "Une fonction associe un résultat",
            texte: "Une fonction est un procédé qui associe à chaque nombre autorisé un seul résultat.\n\nOn peut donner un nom à cette fonction, par exemple f. Si le nombre d'entrée est x et que le calcul est « multiplier par 2 puis ajouter 3 », on écrit :\n\nf(x) = 2x + 3.\n\nIci, 2x signifie 2 × x. La lettre x représente le nombre choisi à l'entrée : on l'appelle une variable."
          },
          {
            type: "definition",
            titre: "Image et antécédent",
            texte: "Si f(4) = 11, alors :\n\n• 11 est l'image de 4 par la fonction f ;\n• 4 est un antécédent de 11 par la fonction f.\n\nL'image est le résultat obtenu. Un antécédent est un nombre d'entrée qui donne ce résultat.\n\nSelon la fonction et le résultat choisi, il peut y avoir aucun, un ou plusieurs antécédents."
          },
          {
            type: "methode",
            titre: "Calculer une image",
            texte: "Soit f(x) = 2x + 3. Pour calculer l'image de -2 :\n\n1. Je remplace x par -2, en utilisant des parenthèses.\n2. Je respecte les priorités de calcul.\n\nf(-2) = 2 × (-2) + 3\nf(-2) = -4 + 3\nf(-2) = -1.\n\nL'image de -2 est donc -1."
          },
          {
            type: "remarque",
            titre: "Attention à l'écriture",
            texte: "f(4) ne signifie pas f × 4. Cette écriture se lit « f de 4 » : c'est l'image de 4 par la fonction f.\n\nPour f(x) = 2x + 3, on a f(4) = 11."
          },
          {
            type: "exemple",
            titre: "À toi de jouer",
            texte: "Soit g(x) = 3x - 1. Calcule g(2) et g(-1).\n\nRéponses :\ng(2) = 3 × 2 - 1 = 5.\ng(-1) = 3 × (-1) - 1 = -4."
          }
        ]
      },
      {
        id: "m3-fonction-lineaire",
        titre: "La fonction linéaire",
        blocs: [
          {
            type: "definition",
            titre: "Une multiplication par un même nombre",
            texte: "Une fonction linéaire s'écrit :\n\nf(x) = ax,\n\noù a est un nombre fixé.\n\nPour obtenir l'image de x, on multiplie x par a. Le nombre a est appelé coefficient de la fonction linéaire."
          },
          {
            type: "exemple",
            titre: "Le prix des cahiers",
            texte: "Un cahier coûte 2 000 Ar. Si le prix à l'unité reste le même, le prix de x cahiers est :\n\nf(x) = 2 000x.\n\nPour 3 cahiers : f(3) = 2 000 × 3 = 6 000 Ar.\nPour 5 cahiers : f(5) = 2 000 × 5 = 10 000 Ar.\n\nDans cette situation concrète, x représente un nombre entier de cahiers."
          },
          {
            type: "regle",
            titre: "Fonction linéaire et proportionnalité",
            texte: "Dans une fonction linéaire f(x) = ax, l'image s'obtient toujours en multipliant le nombre de départ par le même coefficient a.\n\nLe tableau des valeurs de x et de f(x) est donc un tableau de proportionnalité.\n\nDe plus, f(0) = a × 0 = 0."
          },
          {
            type: "tableau",
            titre: "Valeurs de f(x) = 2x",
            entetes: ["x", "-1", "0", "1", "2"],
            lignes: [
              ["f(x) = 2x", "-2", "0", "2", "4"]
            ]
          },
          {
            type: "methode",
            titre: "Retrouver le coefficient",
            texte: "Une fonction linéaire vérifie f(4) = 12. Cherchons son coefficient a.\n\nPuisque f(x) = ax, on a 4a = 12.\nDonc a = 12 ÷ 4 = 3.\n\nLa fonction est f(x) = 3x.\n\nVérification : f(4) = 3 × 4 = 12."
          },
          {
            type: "remarque",
            titre: "Le cas de zéro",
            texte: "Connaître seulement f(0) = 0 ne suffit pas pour retrouver le coefficient d'une fonction linéaire : toutes les fonctions linéaires vérifient cette égalité.\n\nPour calculer le coefficient à partir d'une image, il faut connaître l'image d'un nombre non nul."
          }
        ]
      },
      {
        id: "m3-fonction-affine",
        titre: "La fonction affine",
        blocs: [
          {
            type: "definition",
            titre: "Une multiplication puis une addition",
            texte: "Une fonction affine s'écrit :\n\nf(x) = ax + b,\n\noù a et b sont des nombres fixés.\n\nLe nombre a est le coefficient directeur. Le nombre b est appelé ordonnée à l'origine.\n\nPour calculer f(x), on multiplie x par a, puis on ajoute b."
          },
          {
            type: "exemple",
            titre: "Une course en taxi",
            texte: "Un taxi demande 2 000 Ar au départ, puis 1 000 Ar par kilomètre parcouru.\n\nPour x kilomètres, le prix est :\nP(x) = 1 000x + 2 000.\n\nPour 3 km : P(3) = 1 000 × 3 + 2 000 = 5 000 Ar.\n\nLe nombre 1 000 indique le prix ajouté par kilomètre ; 2 000 est le montant fixe au départ."
          },
          {
            type: "methode",
            titre: "Reconnaître a et b",
            texte: "Dans f(x) = -3x + 5 :\n\n• a = -3 ;\n• b = 5.\n\nDans g(x) = 4x - 2, on peut écrire 4x + (-2), donc :\n\n• a = 4 ;\n• b = -2.\n\nLe signe fait partie du nombre : dans le second exemple, b n'est pas 2 mais -2."
          },
          {
            type: "regle",
            titre: "Deux cas particuliers",
            texte: "• Si b = 0, la fonction affine devient f(x) = ax : elle est linéaire.\n\n• Si a = 0, elle devient f(x) = b : elle est constante. Elle donne toujours la même image.\n\nPar exemple, si h(x) = 5, alors h(0) = 5, h(2) = 5 et h(-3) = 5."
          },
          {
            type: "remarque",
            titre: "Affine ne veut pas toujours dire proportionnelle",
            texte: "La fonction f(x) = ax + b ne traduit une proportionnalité entre x et f(x) que si b = 0.\n\nDans l'exemple du taxi, P(0) = 2 000 : même pour 0 km, le montant fixe est présent. Le prix n'est donc pas proportionnel à la distance."
          },
          {
            type: "exemple",
            titre: "Comparer deux fonctions",
            texte: "Soit f(x) = 3x et g(x) = 3x + 2.\n\nPour x = 4 :\nf(4) = 12 et g(4) = 14.\n\nLes deux fonctions multiplient d'abord par 3, mais g ajoute ensuite 2. La fonction f est linéaire ; g est affine mais non linéaire."
          }
        ]
      },
      {
        id: "m3-fonctions-graphique",
        titre: "Représenter une fonction par une droite",
        blocs: [
          {
            type: "introduction",
            titre: "Placer les couples de valeurs",
            texte: "Dans un repère, on utilise deux axes gradués : l'axe horizontal pour x et l'axe vertical pour l'image f(x).\n\nUn point de coordonnées (x ; y) se place d'abord horizontalement jusqu'à x, puis verticalement jusqu'à y.\n\nSi f(1) = 3, le point de coordonnées (1 ; 3) appartient à la représentation de f."
          },
          {
            type: "regle",
            titre: "La représentation d'une fonction affine",
            texte: "La représentation graphique de f(x) = ax + b est une droite.\n\nPour tracer une droite, deux points distincts suffisent. On calcule donc les images de deux nombres différents, puis on place les deux points correspondants."
          },
          {
            type: "methode",
            titre: "Exemple : tracer f(x) = x + 1",
            texte: "1. Pour x = 0 : f(0) = 0 + 1 = 1. On obtient le point A(0 ; 1).\n\n2. Pour x = 2 : f(2) = 2 + 1 = 3. On obtient le point B(2 ; 3).\n\n3. On place A et B dans le repère, puis on trace la droite qui passe par ces deux points."
          },
          {
            type: "schema",
            titre: "La droite de f(x) = x + 1",
            svg: "<svg viewBox='0 0 340 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Repère montrant la droite de f de x égale x plus 1, passant par A zéro un et B deux trois'><line x1='45' y1='200' x2='315' y2='200' stroke='#334155' stroke-width='2'/><line x1='75' y1='220' x2='75' y2='15' stroke='#334155' stroke-width='2'/><path d='M45 200 L225 20' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='75' cy='170' r='5' fill='#dc2626'/><circle cx='135' cy='110' r='5' fill='#dc2626'/><text x='83' y='164' font-size='14' fill='#b91c1c'>A(0 ; 1)</text><text x='143' y='104' font-size='14' fill='#b91c1c'>B(2 ; 3)</text><text x='68' y='216' font-size='13' fill='#334155'>0</text><text x='103' y='217' font-size='13' fill='#334155'>1</text><text x='133' y='217' font-size='13' fill='#334155'>2</text><text x='57' y='175' font-size='13' fill='#334155'>1</text><text x='57' y='145' font-size='13' fill='#334155'>2</text><text x='57' y='115' font-size='13' fill='#334155'>3</text><text x='305' y='190' font-size='14' fill='#334155'>x</text><text x='84' y='25' font-size='14' fill='#334155'>y</text></svg>",
            legende: "Les deux axes utilisent la même graduation. La droite passe par A(0 ; 1) et B(2 ; 3)."
          },
          {
            type: "regle",
            titre: "Lire le rôle de b",
            texte: "Pour f(x) = ax + b, lorsque x = 0 :\n\nf(0) = a × 0 + b = b.\n\nLa droite coupe donc l'axe vertical au point (0 ; b). C'est pourquoi b s'appelle l'ordonnée à l'origine."
          },
          {
            type: "regle",
            titre: "Lire le rôle de a",
            texte: "Le coefficient directeur a indique de combien l'image varie lorsque x augmente de 1.\n\nPour f(x) = 2x + 1, si x augmente de 1, f(x) augmente de 2.\n\nPour g(x) = -3x + 1, si x augmente de 1, g(x) diminue de 3.\n\nSi a = 0, la droite est horizontale : la fonction est constante."
          },
          {
            type: "remarque",
            titre: "Et pour une fonction linéaire ?",
            texte: "Pour f(x) = ax, on a f(0) = 0. Sa droite passe donc par l'origine du repère, le point de coordonnées (0 ; 0).\n\nPour la tracer, on peut placer l'origine puis un autre point, par exemple celui obtenu pour x = 1."
          }
        ]
      },
      {
        id: "m3-fonctions-antecedents",
        titre: "Trouver un antécédent et une expression",
        blocs: [
          {
            type: "methode",
            titre: "Trouver un antécédent par le calcul",
            texte: "Soit f(x) = 2x + 3. Cherchons un antécédent de 11.\n\nNous cherchons le nombre x dont l'image est 11. On écrit donc :\n\n2x + 3 = 11.\nOn retire 3 des deux côtés : 2x = 8.\nOn divise les deux côtés par 2 : x = 4.\n\nVérification : f(4) = 2 × 4 + 3 = 11. L'antécédent cherché est 4."
          },
          {
            type: "methode",
            titre: "Retrouver une fonction affine",
            texte: "On sait que f est affine, f(0) = 3 et f(2) = 7. Cherchons son expression f(x) = ax + b.\n\n1. Comme f(0) = b, on obtient b = 3.\n2. Comme f(2) = 7, on écrit 2a + 3 = 7.\n3. Donc 2a = 4, puis a = 2.\n\nAinsi, f(x) = 2x + 3.\n\nVérification : f(0) = 3 et f(2) = 7."
          },
          {
            type: "remarque",
            titre: "Une fonction constante",
            texte: "Si f(x) = 5, tous les nombres sont des antécédents de 5 : par exemple f(0) = 5 et f(10) = 5.\n\nEn revanche, 3 n'a aucun antécédent par cette fonction : son image est toujours 5, quel que soit le nombre choisi."
          },
          {
            type: "exemple",
            titre: "À toi de vérifier",
            texte: "Soit g(x) = 3x - 2. Quel est l'antécédent de 10 ?\n\nOn résout 3x - 2 = 10.\nDonc 3x = 12, puis x = 4.\n\nVérification : g(4) = 3 × 4 - 2 = 10."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = 3x + 2.\n\n1. Calcule f(0).\n2. Calcule f(2).\n3. Calcule f(-1).",
        correction: "1. f(0) = 3 × 0 + 2 = 2.\n\n2. f(2) = 3 × 2 + 2 = 8.\n\n3. f(-1) = 3 × (-1) + 2 = -3 + 2 = -1.\n\nPour chaque calcul, on remplace x par le nombre demandé."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque fonction, indique si elle est linéaire, constante, ou affine sans être linéaire ni constante :\n\n1. f(x) = 4x\n2. g(x) = 7\n3. h(x) = 2x - 3",
        correction: "1. f(x) = 4x est linéaire : elle est de la forme ax.\n\n2. g(x) = 7 est constante : elle donne toujours 7. Elle est aussi affine, avec a = 0 et b = 7.\n\n3. h(x) = 2x - 3 est affine, avec a = 2 et b = -3. Elle n'est pas linéaire car b ≠ 0, et elle n'est pas constante car a ≠ 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une fonction linéaire f vérifie f(5) = 20.\n\n1. Trouve son coefficient.\n2. Écris f(x).\n3. Calcule f(3) et f(-2).",
        correction: "1. Une fonction linéaire s'écrit f(x) = ax. Puisque f(5) = 20, on a 5a = 20, donc a = 20 ÷ 5 = 4.\n\n2. Ainsi, f(x) = 4x.\n\n3. f(3) = 4 × 3 = 12.\nf(-2) = 4 × (-2) = -8.\n\nVérification du coefficient : f(5) = 4 × 5 = 20."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit g(x) = 2x - 4.\n\n1. Calcule g(0) et g(3).\n2. Donne les coordonnées de deux points de sa représentation graphique.\n3. La droite passe-t-elle par l'origine ?",
        correction: "1. g(0) = 2 × 0 - 4 = -4.\ng(3) = 2 × 3 - 4 = 2.\n\n2. Les points A(0 ; -4) et B(3 ; 2) appartiennent à la droite.\n\n3. Non : pour passer par l'origine, il faudrait que g(0) = 0. Or g(0) = -4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = 4x + 1.\n\n1. Calcule l'image de 3.\n2. Trouve l'antécédent de 21.\n3. Vérifie ta réponse à la question 2.",
        correction: "1. f(3) = 4 × 3 + 1 = 13. L'image de 3 est 13.\n\n2. On cherche x tel que 4x + 1 = 21.\nOn retire 1 des deux côtés : 4x = 20.\nOn divise par 4 : x = 5.\n\n3. f(5) = 4 × 5 + 1 = 21. L'antécédent de 21 est donc 5."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une fonction affine f vérifie f(0) = -2 et f(3) = 7.\n\n1. Trouve b dans l'expression f(x) = ax + b.\n2. Trouve a.\n3. Écris f(x) et vérifie les deux valeurs données.",
        correction: "1. Pour une fonction affine, f(0) = b. Donc b = -2.\n\n2. Puisque f(3) = 7, on écrit 3a - 2 = 7.\nOn ajoute 2 des deux côtés : 3a = 9.\nOn divise par 3 : a = 3.\n\n3. La fonction est f(x) = 3x - 2.\nVérification : f(0) = -2 et f(3) = 9 - 2 = 7."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un taxi demande 2 000 Ar au départ et 1 500 Ar par kilomètre. On note x la distance parcourue en kilomètres et P(x) le prix en ariary.\n\n1. Exprime P(x) en fonction de x.\n2. Calcule le prix pour 4 km.\n3. Le prix est-il proportionnel à la distance ? Explique.\n4. Pour quelle distance le prix est-il de 11 000 Ar ?",
        correction: "1. On paie 1 500 Ar pour chaque kilomètre, soit 1 500x Ar, puis on ajoute le montant fixe. Donc P(x) = 1 500x + 2 000.\n\n2. P(4) = 1 500 × 4 + 2 000 = 6 000 + 2 000 = 8 000 Ar.\n\n3. Le prix n'est pas proportionnel à la distance : P(0) = 2 000 et non 0. La fonction est affine, mais elle n'est pas linéaire.\n\n4. On cherche x tel que 1 500x + 2 000 = 11 000.\nDonc 1 500x = 9 000, puis x = 9 000 ÷ 1 500 = 6.\n\nVérification : P(6) = 9 000 + 2 000 = 11 000. La distance est de 6 km."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux tarifs sont proposés pour une activité :\n\n• Tarif A : 3 000 Ar par séance, sans frais fixes.\n• Tarif B : 4 000 Ar de frais fixes, puis 2 000 Ar par séance.\n\nOn note x le nombre de séances.\n\n1. Exprime les prix A(x) et B(x).\n2. Calcule les deux prix pour 2 séances, puis pour 6 séances.\n3. À partir de combien de séances le tarif B est-il strictement moins cher que le tarif A ?",
        correction: "1. A(x) = 3 000x et B(x) = 2 000x + 4 000. La fonction A est linéaire ; B est affine.\n\n2. Pour 2 séances :\nA(2) = 6 000 Ar ; B(2) = 4 000 + 4 000 = 8 000 Ar. A est moins cher.\n\nPour 6 séances :\nA(6) = 18 000 Ar ; B(6) = 12 000 + 4 000 = 16 000 Ar. B est moins cher.\n\n3. Cherchons d'abord quand les prix sont égaux :\n3 000x = 2 000x + 4 000.\nEn retirant 2 000x des deux côtés : 1 000x = 4 000, donc x = 4.\n\nÀ 4 séances, les prix sont égaux. Après ce point, chaque séance supplémentaire coûte 1 000 Ar de moins avec B. Comme le nombre de séances est entier, B devient strictement moins cher à partir de 5 séances.\n\nVérification : A(5) = 15 000 Ar et B(5) = 14 000 Ar."
      }
    ]
  }
]);
