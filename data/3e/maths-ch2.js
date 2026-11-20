// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 2 : calculs avec les nombres rationnels.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-calculs-rationnels",
    titre: "Chapitre 2 : Calculs avec les nombres rationnels",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-calculs-signes",
        titre: "Calculer avec les nombres relatifs",
        blocs: [
          {
            type: "introduction",
            titre: "Des nombres positifs et négatifs",
            texte: "Un nombre relatif peut être positif, négatif ou nul. Les signes permettent par exemple de distinguer un gain d'une perte, ou une température au-dessus de zéro d'une température en dessous de zéro.\n\nAvant de calculer avec des fractions négatives, revoyons les règles sur des nombres plus simples."
          },
          {
            type: "regle",
            titre: "Additionner deux nombres de même signe",
            texte: "On additionne leurs distances à zéro et on garde leur signe.\n\nExemples :\n(+4) + (+3) = +7.\n(-4) + (-3) = -7.\n\nPour -4 + (-3), on part de -4 puis on se déplace de 3 unités vers la gauche : on arrive à -7."
          },
          {
            type: "regle",
            titre: "Additionner deux nombres de signes différents",
            texte: "On soustrait la plus petite distance à zéro de la plus grande. Le résultat prend le signe du nombre qui a la plus grande distance à zéro.\n\nExemples :\n(-8) + (+3) = -5, car 8 - 3 = 5 et -8 est plus éloigné de zéro.\n(+9) + (-4) = +5, car 9 - 4 = 5 et +9 est plus éloigné de zéro."
          },
          {
            type: "schema",
            titre: "Comprendre -4 + 7",
            svg: "<svg viewBox='0 0 340 115' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Sur une droite graduée, on part de moins 4 et on avance de 7 unités vers la droite pour arriver à 3'><line x1='18' y1='62' x2='322' y2='62' stroke='#334155' stroke-width='2'/><line x1='40' y1='55' x2='40' y2='69' stroke='#334155'/><line x1='160' y1='55' x2='160' y2='69' stroke='#334155'/><line x1='250' y1='55' x2='250' y2='69' stroke='#334155'/><text x='40' y='91' text-anchor='middle' font-size='14' fill='#334155'>-4</text><text x='160' y='91' text-anchor='middle' font-size='14' fill='#334155'>0</text><text x='250' y='91' text-anchor='middle' font-size='14' fill='#334155'>3</text><path d='M40 48 Q145 4 250 48' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M242 39 L250 48 L238 49' fill='none' stroke='#2563eb' stroke-width='3'/><text x='145' y='25' text-anchor='middle' font-size='14' fill='#1d4ed8'>+7</text></svg>",
            legende: "Ajouter 7 à -4 revient à avancer de 7 unités vers la droite : -4 + 7 = 3."
          },
          {
            type: "methode",
            titre: "Soustraire un nombre",
            texte: "Soustraire un nombre revient à ajouter son opposé.\n\nL'opposé de +5 est -5. L'opposé de -5 est +5.\n\nExemples :\n4 - 7 = 4 + (-7) = -3.\n4 - (-7) = 4 + 7 = 11.\n\nNe supprime pas les signes au hasard : transforme d'abord la soustraction en addition de l'opposé."
          },
          {
            type: "regle",
            titre: "Multiplier ou diviser : la règle des signes",
            texte: "Pour un produit ou un quotient de deux nombres non nuls :\n\n• même signe : résultat positif ;\n• signes différents : résultat négatif.\n\nExemples :\n(-3) × (-4) = +12.\n(-3) × (+4) = -12.\n(+15) ÷ (-3) = -5.\n\nUn quotient par zéro n'est pas défini."
          },
          {
            type: "exemple",
            titre: "À toi de vérifier",
            texte: "Calcule :\n1. -6 + 10\n2. -6 - 10\n3. -6 - (-10)\n4. (-6) × (-2)\n\nRéponses :\n1. 4\n2. -16\n3. 4\n4. 12"
          }
        ]
      },
      {
        id: "m3-calculs-fractions-addition",
        titre: "Additionner et soustraire des fractions",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi faut-il le même dénominateur ?",
            texte: "On peut additionner directement des parts de même taille. Par exemple, 2 quarts et 1 quart font 3 quarts : 2/4 + 1/4 = 3/4.\n\nMais un demi et un quart ne sont pas des parts de même taille. Avant de les additionner, on peut transformer le demi en deux quarts."
          },
          {
            type: "schema",
            titre: "Un demi plus un quart",
            svg: "<svg viewBox='0 0 320 145' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Une bande partagée en quatre parts égales : deux quarts bleus et un quart vert représentent trois quarts'><text x='10' y='25' font-size='15' fill='#334155'>1/2 + 1/4 = 2/4 + 1/4</text><rect x='10' y='45' width='75' height='40' fill='#60a5fa' stroke='#334155'/><rect x='85' y='45' width='75' height='40' fill='#60a5fa' stroke='#334155'/><rect x='160' y='45' width='75' height='40' fill='#4ade80' stroke='#334155'/><rect x='235' y='45' width='75' height='40' fill='#f1f5f9' stroke='#334155'/><text x='47' y='70' text-anchor='middle' font-size='13' fill='#1e293b'>1/4</text><text x='122' y='70' text-anchor='middle' font-size='13' fill='#1e293b'>1/4</text><text x='197' y='70' text-anchor='middle' font-size='13' fill='#1e293b'>1/4</text><text x='150' y='120' text-anchor='middle' font-size='15' fill='#334155'>3 parts colorées sur 4 : 3/4</text></svg>",
            legende: "Les deux quarts bleus représentent 1/2 ; le quart vert est ajouté. Ensemble, ils représentent 3/4."
          },
          {
            type: "regle",
            titre: "Même dénominateur",
            texte: "Lorsque les dénominateurs sont égaux, on additionne ou on soustrait les numérateurs et on garde le dénominateur.\n\nExemples :\n2/7 + 3/7 = 5/7.\n6/7 - 2/7 = 4/7.\n\nAttention : 2/7 + 3/7 ne donne pas 5/14."
          },
          {
            type: "methode",
            titre: "Dénominateurs différents",
            texte: "Pour calculer 2/3 + 1/4 :\n\n1. Cherchons un dénominateur commun : 12 est un multiple de 3 et de 4.\n2. Transformons les fractions : 2/3 = 8/12 et 1/4 = 3/12.\n3. Additionnons : 8/12 + 3/12 = 11/12.\n\nDonc 2/3 + 1/4 = 11/12."
          },
          {
            type: "exemple",
            titre: "Une soustraction avec un résultat négatif",
            texte: "Calculons 1/6 - 3/4.\n\nUn dénominateur commun est 12 :\n1/6 = 2/12 et 3/4 = 9/12.\n\nDonc 1/6 - 3/4 = 2/12 - 9/12 = -7/12."
          },
          {
            type: "methode",
            titre: "Ne pas oublier de simplifier",
            texte: "Après le calcul, regarde si le numérateur et le dénominateur peuvent être divisés par un même entier non nul.\n\nExemple : 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2."
          },
          {
            type: "remarque",
            titre: "Un entier peut s'écrire en fraction",
            texte: "Pour calculer 2 - 3/5, on peut écrire 2 avec le dénominateur 5 :\n\n2 = 10/5.\nDonc 2 - 3/5 = 10/5 - 3/5 = 7/5."
          }
        ]
      },
      {
        id: "m3-calculs-fractions-produit",
        titre: "Multiplier et diviser des fractions",
        blocs: [
          {
            type: "regle",
            titre: "Multiplier deux fractions",
            texte: "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux.\n\nExemple :\n2/3 × 5/4 = (2 × 5)/(3 × 4) = 10/12 = 5/6.\n\nPour une multiplication, il n'est pas nécessaire de mettre les fractions au même dénominateur."
          },
          {
            type: "methode",
            titre: "Simplifier avant de multiplier",
            texte: "On peut simplifier les facteurs communs avant d'effectuer les produits.\n\nExemple : 3/5 × 10/9.\n\n10 et 5 sont divisibles par 5 : 10/5 = 2/1.\n3 et 9 sont divisibles par 3 : 3/9 = 1/3.\n\nIl reste (1 × 2)/(1 × 3) = 2/3.\n\nCette méthode évite de calculer de grands nombres."
          },
          {
            type: "definition",
            titre: "L'inverse d'un nombre non nul",
            texte: "Deux nombres non nuls sont inverses lorsque leur produit vaut 1.\n\nL'inverse de 3/4 est 4/3, car 3/4 × 4/3 = 1.\n\nL'inverse de -2 est -1/2, car (-2) × (-1/2) = 1.\n\nZéro n'a pas d'inverse."
          },
          {
            type: "regle",
            titre: "Diviser par une fraction",
            texte: "Diviser par une fraction non nulle revient à multiplier par son inverse.\n\nExemple :\n2/3 ÷ 5/4 = 2/3 × 4/5 = 8/15.\n\nOn inverse la fraction par laquelle on divise : ici, 5/4 devient 4/5."
          },
          {
            type: "exemple",
            titre: "Pourquoi cela fonctionne ?",
            texte: "Combien de fois 1/4 entre-t-il dans 3/4 ?\n\nOn voit que 3/4 contient trois quarts, donc 3/4 ÷ 1/4 = 3.\n\nAvec la règle : 3/4 ÷ 1/4 = 3/4 × 4/1 = 12/4 = 3. On retrouve bien le même résultat."
          },
          {
            type: "exemple",
            titre: "Fractions et signes",
            texte: "Calculons : (-2/3) × (9/4).\n\nLes signes sont différents, donc le résultat est négatif.\nPour les nombres sans leur signe : 2/3 × 9/4 = 18/12 = 3/2.\n\nDonc (-2/3) × (9/4) = -3/2."
          },
          {
            type: "remarque",
            titre: "Opposé et inverse : deux choses différentes",
            texte: "L'opposé de 2/3 est -2/3 : leur somme est 0.\n\nL'inverse de 2/3 est 3/2 : leur produit est 1.\n\nNe les confonds pas : l'opposé sert notamment pour soustraire ; l'inverse sert pour diviser."
          }
        ]
      },
      {
        id: "m3-priorites-calcul",
        titre: "Respecter les priorités opératoires",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi un ordre de calcul ?",
            texte: "Dans une expression comme 2 + 3 × 4, on doit savoir quelle opération effectuer en premier. Sans règle commune, deux personnes pourraient trouver des résultats différents.\n\nLes priorités opératoires donnent un ordre à respecter."
          },
          {
            type: "regle",
            titre: "L'ordre à retenir",
            texte: "1. On commence par les calculs entre parenthèses. S'il y a plusieurs parenthèses emboîtées, on commence par les plus intérieures.\n2. On effectue ensuite les puissances et les racines lorsqu'il y en a.\n3. Puis les multiplications et les divisions, de gauche à droite lorsqu'elles se suivent.\n4. Enfin les additions et les soustractions, de gauche à droite lorsqu'elles se suivent."
          },
          {
            type: "exemple",
            titre: "Avec et sans parenthèses",
            texte: "Sans parenthèses :\n2 + 3 × 4 = 2 + 12 = 14.\n\nAvec parenthèses :\n(2 + 3) × 4 = 5 × 4 = 20.\n\nLes parenthèses changent l'ordre des calculs et peuvent donc changer le résultat."
          },
          {
            type: "exemple",
            titre: "Multiplication et division se suivent",
            texte: "Calculons 24 ÷ 3 × 2.\n\nLa multiplication et la division ont la même priorité. On calcule de gauche à droite :\n24 ÷ 3 × 2 = 8 × 2 = 16.\n\nOn ne calcule pas 3 × 2 en premier, sauf si des parenthèses l'indiquent : 24 ÷ (3 × 2) = 4."
          },
          {
            type: "exemple",
            titre: "Une expression avec des fractions",
            texte: "Calculons 1/2 + 2/3 × 3/4.\n\n1. La multiplication est prioritaire :\n2/3 × 3/4 = 6/12 = 1/2.\n\n2. On additionne ensuite :\n1/2 + 1/2 = 1.\n\nDonc 1/2 + 2/3 × 3/4 = 1."
          },
          {
            type: "methode",
            titre: "Présenter son calcul",
            texte: "Recopie l'expression puis effectue une étape par ligne. Cela permet de suivre ton raisonnement et de repérer une erreur.\n\nExemple :\nA = 5 - (2 + 1/2)\nA = 5 - 5/2\nA = 10/2 - 5/2\nA = 5/2."
          },
          {
            type: "remarque",
            titre: "La barre de fraction regroupe",
            texte: "Dans une fraction, la barre regroupe tout le numérateur et tout le dénominateur.\n\nPar exemple, (2 + 3)/5 = 5/5 = 1.\nCe n'est pas la même expression que 2 + 3/5.\n\nQuand tu écris sur une seule ligne, utilise des parenthèses pour rendre les groupements clairs."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n\n1. -7 + 12\n2. -7 - 12\n3. -7 - (-12)\n4. (-4) × (-3)",
        correction: "1. -7 + 12 = 5. Les signes sont différents ; 12 est le plus éloigné de zéro, donc le résultat est positif.\n\n2. -7 - 12 = -7 + (-12) = -19.\n\n3. -7 - (-12) = -7 + 12 = 5. Soustraire -12 revient à ajouter 12.\n\n4. (-4) × (-3) = 12. Les deux facteurs ont le même signe."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule et simplifie si possible :\n\n1. 2/9 + 5/9\n2. 7/10 - 3/10\n3. 3/4 × 2/5",
        correction: "1. 2/9 + 5/9 = 7/9. On garde le dénominateur 9.\n\n2. 7/10 - 3/10 = 4/10 = 2/5.\n\n3. 3/4 × 2/5 = 6/20 = 3/10. On multiplie les numérateurs entre eux et les dénominateurs entre eux."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule et donne le résultat sous forme de fraction simplifiée :\n\n1. 1/2 + 1/3\n2. 5/6 - 1/4\n3. 2 - 3/5",
        correction: "1. Un dénominateur commun est 6 :\n1/2 + 1/3 = 3/6 + 2/6 = 5/6.\n\n2. Un dénominateur commun est 12 :\n5/6 - 1/4 = 10/12 - 3/12 = 7/12.\n\n3. On écrit 2 = 10/5 :\n2 - 3/5 = 10/5 - 3/5 = 7/5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule et simplifie :\n\n1. 4/9 × 3/8\n2. 5/6 ÷ 10/3\n3. (-2/5) × 15/4",
        correction: "1. 4/9 × 3/8 = 12/72 = 1/6.\n\n2. On multiplie par l'inverse de 10/3 :\n5/6 ÷ 10/3 = 5/6 × 3/10 = 15/60 = 1/4.\n\n3. Les signes sont différents, donc le résultat est négatif :\n(-2/5) × 15/4 = -30/20 = -3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule en détaillant les étapes :\n\n1. 3 + 2 × 5\n2. (3 + 2) × 5\n3. 18 ÷ 3 × 2\n4. 7 - 1/2 × 4",
        correction: "1. La multiplication est prioritaire :\n3 + 2 × 5 = 3 + 10 = 13.\n\n2. Les parenthèses sont prioritaires :\n(3 + 2) × 5 = 5 × 5 = 25.\n\n3. Division et multiplication ont la même priorité : on calcule de gauche à droite.\n18 ÷ 3 × 2 = 6 × 2 = 12.\n\n4. On commence par la multiplication :\n7 - 1/2 × 4 = 7 - 2 = 5."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule et simplifie :\n\nA = 1/2 + 3/4 × 2/3\nB = (1/2 + 3/4) × 2/3",
        correction: "Pour A, la multiplication est prioritaire :\nA = 1/2 + 6/12\nA = 1/2 + 1/2\nA = 1.\n\nPour B, on commence par la parenthèse :\nB = (2/4 + 3/4) × 2/3\nB = 5/4 × 2/3\nB = 10/12\nB = 5/6.\n\nLes parenthèses changent l'ordre des calculs : A et B ne sont pas égaux."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un sac contient 12 kg de riz. Une famille utilise 1/3 du sac le premier jour, puis 1/4 du sac entier le deuxième jour.\n\n1. Quelle fraction du sac a-t-elle utilisée en deux jours ?\n2. Quelle fraction du sac reste-t-il ?\n3. Combien de kilogrammes reste-t-il ?",
        correction: "1. Les deux fractions portent sur le sac entier. On les additionne :\n1/3 + 1/4 = 4/12 + 3/12 = 7/12.\nLa famille a utilisé 7/12 du sac.\n\n2. Le sac entier représente 12/12. Il reste :\n12/12 - 7/12 = 5/12.\n\n3. Une part de 1/12 du sac pèse 12 ÷ 12 = 1 kg. Donc 5/12 pèsent 5 × 1 = 5 kg.\n\nVérification : le premier jour, la famille utilise 4 kg ; le deuxième jour, 3 kg. Il reste 12 - 4 - 3 = 5 kg."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une bouteille contient 3/4 de litre de jus. On veut servir des verres contenant chacun 1/8 de litre.\n\n1. Combien de verres pleins peut-on servir ?\n2. Après avoir servi 4 verres, quelle quantité de jus reste-t-il ?\n3. Cette quantité suffit-elle pour remplir 3 autres verres ? Explique.",
        correction: "1. On cherche combien de fois 1/8 de litre est contenu dans 3/4 de litre.\n3/4 = 6/8, donc il y a six portions de 1/8 de litre. On peut servir 6 verres pleins.\n\nOn retrouve le résultat par une division :\n3/4 ÷ 1/8 = 3/4 × 8 = 6.\n\n2. Quatre verres représentent 4 × 1/8 = 4/8 de litre.\nIl reste 6/8 - 4/8 = 2/8 = 1/4 de litre.\n\n3. Non. Trois verres demandent 3/8 de litre, mais il ne reste que 2/8 de litre : cela suffit pour 2 verres, pas pour 3."
      }
    ]
  }
]);
