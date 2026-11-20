// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 4 : proportionnalité et pourcentages.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-proportionnalite",
    titre: "Chapitre 4 : Proportionnalité et pourcentages",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-reconnaitre-proportionnalite",
        titre: "Reconnaître une situation de proportionnalité",
        blocs: [
          {
            type: "introduction",
            titre: "Deux quantités qui évoluent ensemble",
            texte: "Au marché, si le prix du riz reste le même par kilogramme, le prix payé dépend de la masse achetée.\n\nPar exemple, si 1 kg coûte 3 000 Ar, alors 2 kg coûtent 6 000 Ar et 3 kg coûtent 9 000 Ar.\n\nQuand on double la masse, on double le prix. Quand on triple la masse, on triple le prix. C'est une situation de proportionnalité."
          },
          {
            type: "definition",
            titre: "Qu'est-ce que la proportionnalité ?",
            texte: "Deux grandeurs sont proportionnelles si l'on obtient toujours les valeurs de l'une en multipliant celles de l'autre par un même nombre.\n\nCe nombre s'appelle le coefficient de proportionnalité.\n\nDans l'exemple du riz :\nprix en Ar = masse en kg × 3 000.\n\nLe coefficient qui permet de passer de la masse au prix est 3 000."
          },
          {
            type: "tableau",
            titre: "Le prix du riz à 3 000 Ar par kilogramme",
            entetes: ["Masse en kg", "1", "2", "3", "5"],
            lignes: [
              ["Prix en Ar", "3 000", "6 000", "9 000", "15 000"]
            ]
          },
          {
            type: "methode",
            titre: "Vérifier un tableau",
            texte: "Pour savoir si le tableau précédent est un tableau de proportionnalité, on peut diviser chaque prix par la masse correspondante :\n\n3 000 ÷ 1 = 3 000 ;\n6 000 ÷ 2 = 3 000 ;\n9 000 ÷ 3 = 3 000 ;\n15 000 ÷ 5 = 3 000.\n\nOn trouve toujours le même quotient. Le prix est donc proportionnel à la masse pour ces valeurs."
          },
          {
            type: "remarque",
            titre: "Attention : ce n'est pas toujours proportionnel",
            texte: "Un taxi demande 2 000 Ar au départ, puis 1 000 Ar par kilomètre.\n\nPour 1 km, le prix est 3 000 Ar.\nPour 2 km, le prix est 4 000 Ar.\n\nSi la distance double, le prix ne double pas : 4 000 n'est pas le double de 3 000. Le prix n'est donc pas proportionnel à la distance, à cause du montant fixe au départ."
          },
          {
            type: "exemple",
            titre: "À toi de réfléchir",
            texte: "Une vendeuse propose des mangues au même prix à l'unité. Trois mangues coûtent 1 500 Ar. Six mangues coûtent-elles 3 000 Ar ?\n\nOui : six mangues, c'est deux fois trois mangues. Le prix est donc lui aussi multiplié par 2 : 1 500 × 2 = 3 000 Ar."
          }
        ]
      },
      {
        id: "m3-quatrieme-proportionnelle",
        titre: "Trouver une quatrième proportionnelle",
        blocs: [
          {
            type: "introduction",
            titre: "Une valeur manque",
            texte: "Pour préparer une boisson, on utilise 2 citrons pour 5 verres. Combien faut-il de citrons pour 15 verres si l'on garde les mêmes proportions ?\n\nOn connaît trois valeurs : 2 citrons, 5 verres et 15 verres. Il faut trouver la quatrième."
          },
          {
            type: "tableau",
            titre: "La recette",
            entetes: ["Nombre de verres", "5", "15"],
            lignes: [
              ["Nombre de citrons", "2", "?"]
            ]
          },
          {
            type: "methode",
            titre: "Méthode 1 : utiliser un multiplicateur",
            texte: "On passe de 5 verres à 15 verres en multipliant par 3 :\n\n15 ÷ 5 = 3.\n\nOn multiplie donc aussi le nombre de citrons par 3 :\n2 × 3 = 6.\n\nIl faut 6 citrons."
          },
          {
            type: "methode",
            titre: "Méthode 2 : passer par l'unité",
            texte: "Pour 5 verres, il faut 2 citrons.\n\nPour 1 verre, il faut 2 ÷ 5 = 0,4 citron en moyenne.\nPour 15 verres, il faut 0,4 × 15 = 6 citrons.\n\nOn trouve le même résultat. Le passage par l'unité est utile lorsque le multiplicateur entre les colonnes n'est pas évident."
          },
          {
            type: "methode",
            titre: "Méthode 3 : le produit en croix",
            texte: "Dans un tableau de proportionnalité :\n\n5 verres correspondent à 2 citrons ;\n15 verres correspondent à x citrons.\n\nOn écrit 5 × x = 15 × 2.\nDonc x = (15 × 2) ÷ 5 = 6.\n\nLe produit en croix est une méthode rapide, mais il ne s'applique que si la situation est proportionnelle."
          },
          {
            type: "remarque",
            titre: "Toujours vérifier le sens",
            texte: "On prépare davantage de verres : il est normal qu'il faille davantage de citrons.\n\nLe résultat 6 est cohérent : il est plus grand que 2.\n\nUne vérification de ce genre ne prouve pas toujours que le calcul est exact, mais elle peut aider à repérer une erreur."
          }
        ]
      },
      {
        id: "m3-taux-unitaires",
        titre: "Utiliser un taux unitaire",
        blocs: [
          {
            type: "definition",
            titre: "Une quantité pour une unité",
            texte: "Un taux unitaire indique une quantité correspondant à une unité d'une autre grandeur.\n\nExemples :\n• un prix en ariary par kilogramme : Ar/kg ;\n• une vitesse en kilomètres par heure : km/h ;\n• une consommation en litres par jour : L/jour.\n\nLe mot « par » signifie ici « pour une unité de »."
          },
          {
            type: "exemple",
            titre: "Prix par kilogramme",
            texte: "Si 4 kg de haricots coûtent 12 000 Ar, leur prix par kilogramme est :\n\n12 000 ÷ 4 = 3 000 Ar/kg.\n\nSi le prix au kilogramme reste le même, 7 kg coûtent :\n7 × 3 000 = 21 000 Ar."
          },
          {
            type: "exemple",
            titre: "Vitesse moyenne",
            texte: "Un véhicule parcourt 120 km en 3 heures.\n\nSa vitesse moyenne est :\n120 ÷ 3 = 40 km/h.\n\nCela ne signifie pas qu'il roulait toujours exactement à 40 km/h. C'est le quotient de la distance totale par la durée totale."
          },
          {
            type: "methode",
            titre: "Choisir la bonne unité",
            texte: "Pour calculer une vitesse moyenne en km/h :\n\n1. Exprime la distance en kilomètres.\n2. Exprime la durée en heures.\n3. Divise la distance par la durée.\n\nExemple : 30 minutes = 0,5 heure. Si l'on parcourt 20 km en 30 minutes, la vitesse moyenne est 20 ÷ 0,5 = 40 km/h."
          },
          {
            type: "remarque",
            titre: "Comparer équitablement",
            texte: "Deux paquets n'ont pas forcément la même masse. Pour comparer leurs prix, on peut calculer le prix par kilogramme de chaque paquet.\n\nLe paquet qui coûte le moins cher au total n'est pas toujours le moins cher au kilogramme."
          }
        ]
      },
      {
        id: "m3-pourcentages",
        titre: "Comprendre et calculer un pourcentage",
        blocs: [
          {
            type: "definition",
            titre: "Pour cent signifie pour 100",
            texte: "Le symbole % se lit « pour cent ».\n\n25 % signifie 25 pour 100, donc :\n25 % = 25/100 = 0,25.\n\nDe même :\n50 % = 50/100 = 0,5 ;\n10 % = 10/100 = 0,1."
          },
          {
            type: "schema",
            titre: "25 % d'une quantité",
            svg: "<svg viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Une bande divisée en quatre parts égales, dont une est colorée : un quart représente 25 pour cent'><text x='10' y='25' font-size='15' fill='#334155'>Une part colorée sur quatre</text><rect x='10' y='40' width='75' height='35' fill='#60a5fa' stroke='#334155'/><rect x='85' y='40' width='75' height='35' fill='#f1f5f9' stroke='#334155'/><rect x='160' y='40' width='75' height='35' fill='#f1f5f9' stroke='#334155'/><rect x='235' y='40' width='75' height='35' fill='#f1f5f9' stroke='#334155'/><text x='160' y='105' text-anchor='middle' font-size='16' fill='#1e3a8a'>1/4 = 25/100 = 25 %</text></svg>",
            legende: "La bande entière représente 100 %. Une de ses quatre parts égales représente 25 %."
          },
          {
            type: "methode",
            titre: "Calculer un pourcentage d'une quantité",
            texte: "Pour calculer 15 % de 20 000 Ar :\n\n1. On écrit 15 % = 15/100.\n2. On multiplie : 20 000 × 15/100 = 3 000.\n\nDonc 15 % de 20 000 Ar représentent 3 000 Ar.\n\nEn général, t % d'une quantité se calcule en multipliant cette quantité par t/100."
          },
          {
            type: "methode",
            titre: "Calculer un pourcentage à partir d'une partie",
            texte: "Dans une classe de 40 élèves, 18 participent à un club. Quel pourcentage de la classe cela représente-t-il ?\n\n1. La proportion est 18/40.\n2. On multiplie par 100 : 18/40 × 100 = 45.\n\nLes élèves du club représentent 45 % de la classe.\n\nOn divise la partie par le total, puis on multiplie par 100."
          },
          {
            type: "remarque",
            titre: "Bien identifier le total",
            texte: "Un pourcentage dépend de la quantité prise comme référence.\n\nSi 10 élèves sur 20 portent des lunettes, cela représente 50 % de ce groupe. Mais si ces mêmes 10 élèves sont dans une école de 200 élèves, ils représentent 5 % de l'école.\n\nLa partie est la même, mais le total n'est pas le même."
          }
        ]
      },
      {
        id: "m3-augmentations-reductions",
        titre: "Appliquer une augmentation ou une réduction",
        blocs: [
          {
            type: "introduction",
            titre: "Le pourcentage ne donne pas toujours le prix final",
            texte: "Une réduction de 20 % sur un article ne signifie pas que le client paie 20 % du prix. Cela signifie que l'on retire 20 % du prix de départ.\n\nLe client paie donc les 80 % restants."
          },
          {
            type: "methode",
            titre: "Calculer une réduction",
            texte: "Un sac coûte 30 000 Ar. On accorde une réduction de 20 %.\n\n1. Montant de la réduction : 30 000 × 20/100 = 6 000 Ar.\n2. Prix après réduction : 30 000 - 6 000 = 24 000 Ar.\n\nAutre méthode : il reste 100 % - 20 % = 80 % à payer.\n30 000 × 80/100 = 24 000 Ar."
          },
          {
            type: "methode",
            titre: "Calculer une augmentation",
            texte: "Un article coûte 10 000 Ar. Son prix augmente de 15 %.\n\n1. Montant de l'augmentation : 10 000 × 15/100 = 1 500 Ar.\n2. Nouveau prix : 10 000 + 1 500 = 11 500 Ar.\n\nOn peut aussi multiplier directement par 1,15 :\n10 000 × 1,15 = 11 500 Ar."
          },
          {
            type: "regle",
            titre: "Les coefficients multiplicateurs",
            texte: "Pour une réduction de t % :\nprix final = prix initial × (1 - t/100).\n\nPour une augmentation de t % :\nprix final = prix initial × (1 + t/100).\n\nExemples :\n• réduction de 20 % : coefficient 0,80 ;\n• augmentation de 15 % : coefficient 1,15."
          },
          {
            type: "remarque",
            titre: "Une hausse et une baisse ne s'annulent pas forcément",
            texte: "Un prix de 10 000 Ar augmente de 10 % : il devient 11 000 Ar.\n\nIl baisse ensuite de 10 % : la baisse est calculée sur 11 000 Ar, soit 1 100 Ar. Le prix final est 9 900 Ar.\n\nOn ne revient pas à 10 000 Ar, car les deux pourcentages ne portent pas sur le même prix."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une vendeuse vend des oranges au même prix à l'unité. Quatre oranges coûtent 2 000 Ar.\n\n1. Combien coûte une orange ?\n2. Combien coûtent huit oranges ?",
        correction: "1. Le prix d'une orange est 2 000 ÷ 4 = 500 Ar.\n\n2. Huit oranges coûtent 8 × 500 = 4 000 Ar.\n\nOn peut aussi remarquer que 8 est le double de 4 : le prix est donc le double de 2 000 Ar."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n\n1. 10 % de 5 000 Ar.\n2. 50 % de 8 kg.\n3. 25 % de 20 élèves.",
        correction: "1. 5 000 × 10/100 = 500 Ar.\n\n2. 50 % représente la moitié : 8 ÷ 2 = 4 kg.\n\n3. 25 % représente un quart : 20 ÷ 4 = 5 élèves."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour 6 personnes, une recette utilise 450 g de farine. Combien faut-il de farine pour 10 personnes si l'on garde les mêmes proportions ?",
        correction: "La quantité de farine est proportionnelle au nombre de personnes.\n\nPour une personne : 450 ÷ 6 = 75 g.\nPour 10 personnes : 75 × 10 = 750 g.\n\nIl faut donc 750 g de farine.\n\nVérification : 10 personnes représentent plus que 6 personnes ; il faut bien plus de 450 g."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans une classe de 40 élèves, 14 viennent à pied.\n\n1. Quelle fraction de la classe vient à pied ?\n2. Quel pourcentage cela représente-t-il ?",
        correction: "1. La partie est 14 et le total est 40. La fraction est donc 14/40, que l'on peut simplifier en 7/20.\n\n2. On multiplie la proportion par 100 :\n14/40 × 100 = 35.\n\nLes élèves qui viennent à pied représentent 35 % de la classe."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un commerçant propose :\n\n• paquet A : 2 kg de sucre pour 7 000 Ar ;\n• paquet B : 3 kg de sucre pour 9 900 Ar.\n\n1. Calcule le prix par kilogramme de chaque paquet.\n2. Quel paquet est le moins cher au kilogramme ?",
        correction: "1. Pour A : 7 000 ÷ 2 = 3 500 Ar/kg.\nPour B : 9 900 ÷ 3 = 3 300 Ar/kg.\n\n2. Comme 3 300 < 3 500, le paquet B est moins cher au kilogramme.\n\nMême si B coûte plus cher au total, il contient aussi une plus grande quantité."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un article coûte 24 000 Ar. Il bénéficie d'une réduction de 15 %.\n\n1. Calcule le montant de la réduction.\n2. Calcule le prix après réduction.\n3. Vérifie avec un coefficient multiplicateur.",
        correction: "1. Réduction : 24 000 × 15/100 = 3 600 Ar.\n\n2. Prix final : 24 000 - 3 600 = 20 400 Ar.\n\n3. Après une réduction de 15 %, il reste 85 % du prix. Le coefficient est 0,85.\n24 000 × 0,85 = 20 400 Ar.\n\nLes deux méthodes donnent le même prix."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un réservoir se remplit à débit constant. En 6 minutes, il reçoit 42 litres d'eau.\n\n1. Quel volume reçoit-il en une minute ?\n2. Quel volume reçoit-il en 15 minutes ?\n3. Combien de temps faut-il pour recevoir 84 litres ?",
        correction: "1. À débit constant, le volume reçu est proportionnel à la durée.\nEn une minute : 42 ÷ 6 = 7 L.\nLe débit est donc de 7 L/min.\n\n2. En 15 minutes : 7 × 15 = 105 L.\n\n3. Pour recevoir 84 L : 84 ÷ 7 = 12 minutes.\n\nVérification : 84 L est le double de 42 L ; la durée est donc le double de 6 minutes, soit 12 minutes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une association achète 80 cahiers à 2 500 Ar chacun. Le fournisseur accorde une réduction de 10 % sur le prix total.\n\n1. Calcule le prix total avant réduction.\n2. Calcule le montant de la réduction.\n3. Calcule le montant à payer.\n4. L'association partage ensuite ce montant également entre 20 familles. Combien paie chaque famille ?",
        correction: "1. Prix avant réduction : 80 × 2 500 = 200 000 Ar.\n\n2. Réduction : 200 000 × 10/100 = 20 000 Ar.\n\n3. Montant à payer : 200 000 - 20 000 = 180 000 Ar.\n\nOn peut vérifier avec le coefficient 0,90 : 200 000 × 0,90 = 180 000 Ar.\n\n4. Part de chaque famille : 180 000 ÷ 20 = 9 000 Ar.\n\nChaque famille paie 9 000 Ar."
      }
    ]
  }
]);
