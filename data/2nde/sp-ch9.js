enregistrerChapitres("2nde", "sp", [
  {
    id: 9,
    titre: "Chapitre 9 : Les acides, les bases et le pH",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Solutions acides, basiques et neutres",
        blocs: [
          {
            type: "introduction",
            titre: "Des solutions aux propriétés différentes",
            texte: "Certaines solutions aqueuses sont acides, d’autres sont basiques. Une grandeur appelée pH permet de les distinguer. Elle est utilisée notamment pour étudier l’eau, les sols et de nombreuses solutions chimiques."
          },
          {
            type: "definition",
            titre: "Solution aqueuse",
            texte: "Une solution aqueuse est une solution dont le solvant est l’eau. Elle peut contenir différentes espèces dissoutes : molécules et ions."
          },
          {
            type: "definition",
            titre: "Le pH",
            texte: "Le pH est une grandeur sans unité qui permet de caractériser l’acidité ou la basicité d’une solution aqueuse. Dans ce chapitre, les comparaisons sont faites à 25 °C."
          },
          {
            type: "regle",
            titre: "Classement à 25 °C",
            texte: "À 25 °C :\n• une solution de pH inférieur à 7 est acide ;\n• une solution de pH égal à 7 est neutre ;\n• une solution de pH supérieur à 7 est basique."
          },
          {
            type: "schema",
            titre: "Repères sur l’échelle de pH",
            texte: "Acide                   Neutre                  Basique\npH inférieur à 7  ←──── pH = 7 ────→  pH supérieur à 7\n\nPlus le pH est faible, plus la solution est acide."
          },
          {
            type: "remarque",
            titre: "Échelle usuelle",
            texte: "Dans les situations courantes, le pH se situe souvent entre 0 et 14. Cependant, des solutions très concentrées peuvent avoir un pH inférieur à 0 ou supérieur à 14."
          },
          {
            type: "remarque",
            titre: "La température compte",
            texte: "Le pH d’une solution neutre dépend de la température. La valeur 7 est le repère de neutralité utilisé ici à 25 °C."
          }
        ]
      },

      {
        id: 2,
        titre: "Ions et acidité d’une solution",
        blocs: [
          {
            type: "definition",
            titre: "Ion oxonium",
            texte: "L’ion oxonium, noté H₃O⁺, est présent dans les solutions aqueuses. Dans certaines écritures simplifiées, on utilise H⁺(aq) pour le représenter. Dans l’eau, le proton n’est toutefois pas isolé : l’écriture H₃O⁺ est plus précise."
          },
          {
            type: "definition",
            titre: "Ion hydroxyde",
            texte: "L’ion hydroxyde se note OH⁻. Les solutions aqueuses contiennent des ions H₃O⁺ et OH⁻, mais leurs concentrations ne sont pas nécessairement égales."
          },
          {
            type: "regle",
            titre: "Comparer les concentrations",
            texte: "À 25 °C :\n• solution acide : [H₃O⁺] > [OH⁻] ;\n• solution neutre : [H₃O⁺] = [OH⁻] ;\n• solution basique : [H₃O⁺] < [OH⁻].\n\nLes crochets indiquent les concentrations molaires des ions."
          },
          {
            type: "regle",
            titre: "Lien qualitatif entre pH et ions",
            texte: "Plus le pH est faible, plus la concentration en ions H₃O⁺ est élevée. À 25 °C, lorsque le pH augmente, la concentration en ions OH⁻ augmente aussi."
          },
          {
            type: "exemple",
            titre: "Comparer deux solutions",
            texte: "À 25 °C, une solution de pH 3 est plus acide qu’une solution de pH 5. Sa concentration en ions H₃O⁺ est plus élevée."
          },
          {
            type: "remarque",
            titre: "Acide ne veut pas dire sans danger",
            texte: "Le pH ne suffit pas à lui seul pour déterminer tous les dangers d’une solution. Une solution peut être corrosive, toxique ou présenter d’autres risques. Il ne faut jamais goûter une solution inconnue."
          }
        ]
      },

      {
        id: 3,
        titre: "Acides et bases",
        blocs: [
          {
            type: "definition",
            titre: "Acide et base de Brønsted",
            texte: "Un acide de Brønsted est une espèce chimique capable de céder un proton H⁺. Une base de Brønsted est une espèce chimique capable de capter un proton H⁺."
          },
          {
            type: "definition",
            titre: "Couple acide-base",
            texte: "Un couple acide-base est formé de deux espèces qui se transforment l’une en l’autre par perte ou gain d’un proton H⁺. On écrit le couple sous la forme acide/base."
          },
          {
            type: "exemple",
            titre: "Couple H₃O⁺/H₂O",
            texte: "H₃O⁺ peut céder un proton H⁺ et devenir H₂O. Le couple correspondant est H₃O⁺/H₂O."
          },
          {
            type: "exemple",
            titre: "Couple H₂O/OH⁻",
            texte: "H₂O peut céder un proton H⁺ et devenir OH⁻. Le couple correspondant est H₂O/OH⁻."
          },
          {
            type: "remarque",
            titre: "Le rôle particulier de l’eau",
            texte: "Selon le couple étudié, l’eau peut jouer le rôle d’une base ou celui d’un acide. On dit qu’elle est amphotère."
          },
          {
            type: "exemple",
            titre: "Un acide dans l’eau",
            texte: "Dans le modèle étudié, le chlorure d’hydrogène HCl réagit avec l’eau selon :\n\nHCl + H₂O → H₃O⁺ + Cl⁻.\n\nHCl cède un proton à l’eau. La solution obtenue contient notamment des ions H₃O⁺ et Cl⁻."
          },
          {
            type: "remarque",
            titre: "Vocabulaire",
            texte: "Une solution acide est une solution dont les propriétés sont caractérisées par son pH. Un acide de Brønsted est une espèce capable de céder un proton. Les deux expressions ne désignent pas exactement la même chose."
          }
        ]
      },

      {
        id: 4,
        titre: "Mesurer le pH",
        blocs: [
          {
            type: "definition",
            titre: "Papier pH",
            texte: "Le papier pH est un papier imprégné d’indicateurs colorés. Sa couleur au contact d’une solution est comparée à une échelle fournie par le fabricant. Il donne une valeur approchée du pH."
          },
          {
            type: "definition",
            titre: "pH-mètre",
            texte: "Un pH-mètre est un appareil qui mesure le pH à l’aide d’une électrode. Correctement étalonné et utilisé, il permet généralement une mesure plus précise que le papier pH."
          },
          {
            type: "definition",
            titre: "Indicateur coloré",
            texte: "Un indicateur coloré est une espèce chimique dont la couleur dépend du pH. Il change de couleur dans un intervalle de pH appelé zone de virage."
          },
          {
            type: "exemple",
            titre: "Interpréter une mesure",
            texte: "À 25 °C, si un pH-mètre indique pH = 4,2, la solution est acide car son pH est inférieur à 7. Si une autre solution a un pH de 9,1, elle est basique."
          },
          {
            type: "remarque",
            titre: "Précision de la mesure",
            texte: "Une mesure doit être interprétée en tenant compte de la précision de l’appareil ou du papier utilisé. Une couleur intermédiaire sur du papier pH ne permet pas toujours de lire une valeur exacte."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "La mesure du pH de solutions chimiques se fait dans un cadre adapté. Ne jamais toucher, sentir directement ou goûter une solution inconnue. Les exercices de ce chapitre sont à résoudre sur papier."
          }
        ]
      },

      {
        id: 5,
        titre: "Dilution et pH",
        blocs: [
          {
            type: "rappel",
            titre: "Dilution",
            texte: "Diluer une solution consiste à lui ajouter du solvant, ici de l’eau, afin d’obtenir une solution moins concentrée. Si aucune perte ni réaction ne transforme le soluté, sa quantité de matière dans la solution prélevée est conservée."
          },
          {
            type: "regle",
            titre: "Effet qualitatif d’une dilution",
            texte: "À 25 °C, lorsqu’on dilue avec de l’eau pure une solution aqueuse acide ou basique, son pH se rapproche généralement de 7 : le pH d’une solution acide augmente et celui d’une solution basique diminue."
          },
          {
            type: "exemple",
            titre: "Diluer une solution acide",
            texte: "Une solution de pH 3 est diluée avec de l’eau pure. Dans les conditions habituelles, le pH de la solution obtenue est supérieur à 3 et reste inférieur à 7 : elle est moins acide mais reste acide."
          },
          {
            type: "exemple",
            titre: "Diluer une solution basique",
            texte: "Une solution de pH 11 est diluée avec de l’eau pure. Dans les conditions habituelles, son pH diminue vers 7 : elle devient moins basique."
          },
          {
            type: "remarque",
            titre: "Ne pas supposer une variation fixe",
            texte: "On ne peut pas affirmer que toute dilution par 10 fait varier le pH exactement d’une unité. Cela dépend notamment de la nature de la solution et des hypothèses du modèle."
          },
          {
            type: "remarque",
            titre: "Sécurité des dilutions",
            texte: "Les solutions acides ou basiques concentrées peuvent être dangereuses et leur dilution peut dégager de la chaleur. Ne pas les manipuler chez soi. En laboratoire, les consignes et le matériel de protection adaptés sont indispensables."
          }
        ]
      },

      {
        id: 6,
        titre: "Réaction entre un acide et une base",
        blocs: [
          {
            type: "definition",
            titre: "Réaction acide-base",
            texte: "Une réaction acide-base met en jeu un transfert de proton H⁺ d’un acide vers une base. L’acide cède le proton et la base le capte."
          },
          {
            type: "exemple",
            titre: "Ions oxonium et hydroxyde",
            texte: "Les ions oxonium et hydroxyde réagissent selon :\n\nH₃O⁺(aq) + OH⁻(aq) → 2 H₂O(l).\n\nL’ion H₃O⁺ cède un proton à l’ion OH⁻, qui le capte."
          },
          {
            type: "exemple",
            titre: "Vérifier l’équation",
            texte: "Dans H₃O⁺ + OH⁻ → 2 H₂O :\n\nÀ gauche : 4 atomes H et 2 atomes O ; charge totale +1 − 1 = 0.\nÀ droite : 4 atomes H et 2 atomes O ; charge totale 0.\n\nLes atomes et la charge sont conservés."
          },
          {
            type: "regle",
            titre: "Proportions de réaction",
            texte: "Dans H₃O⁺ + OH⁻ → 2 H₂O, les coefficients de H₃O⁺ et OH⁻ sont tous deux égaux à 1. Une mole de H₃O⁺ réagit donc avec une mole de OH⁻, selon ce modèle."
          },
          {
            type: "remarque",
            titre: "Mélanger ne garantit pas la neutralité",
            texte: "Mélanger une solution acide et une solution basique ne donne pas automatiquement une solution neutre. Le résultat dépend notamment des espèces et des quantités introduites."
          },
          {
            type: "methode",
            titre: "Étudier un mélange simple",
            texte: "Si l’énoncé précise que la réaction H₃O⁺ + OH⁻ → 2 H₂O est totale et que les autres réactions sont négligées :\n1. Calculer les quantités initiales de H₃O⁺ et OH⁻ avec n = C × V.\n2. Les comparer : elles réagissent dans la proportion 1 pour 1.\n3. Soustraire la plus petite quantité de la plus grande pour trouver l’excès éventuel.\n4. Interpréter le résultat en tenant compte des hypothèses de l’énoncé."
          },
          {
            type: "remarque",
            titre: "Ne pas mélanger au hasard",
            texte: "Le mélange de solutions chimiques peut dégager de la chaleur ou provoquer d’autres réactions dangereuses. Les exemples sont théoriques : ne pas mélanger des produits ménagers ou des solutions inconnues."
          }
        ]
      },

      {
        id: 7,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "schema",
            titre: "À retenir à 25 °C",
            texte: "pH < 7 : solution acide\npH = 7 : solution neutre\npH > 7 : solution basique\n\nAcide : cède H⁺\nBase : capte H⁺\n\nH₃O⁺ + OH⁻ → 2 H₂O"
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : dire qu’une solution de pH 3 est moins acide qu’une solution de pH 5.\nÀ faire : le pH 3 est plus faible, donc la solution est plus acide.\n\nErreur : donner une unité au pH.\nÀ faire : le pH est sans unité.\n\nErreur : penser qu’une dilution transforme forcément une solution acide en solution basique.\nÀ faire : son pH se rapproche de la neutralité dans les conditions habituelles.\n\nErreur : penser qu’un mélange acide-base est toujours neutre.\nÀ faire : comparer les quantités et étudier les espèces présentes.\n\nErreur : confondre une espèce acide avec une solution acide.\nÀ faire : préciser si l’on parle de l’espèce ou de la solution."
          },
          {
            type: "remarque",
            titre: "Sécurité générale",
            texte: "Le pH ne permet pas de reconnaître tous les dangers. Certaines solutions peuvent provoquer des brûlures ou être toxiques. Ne jamais goûter une solution, ni réaliser les mélanges étudiés à la maison."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "À 25 °C, classe les solutions suivantes comme acides, neutres ou basiques : A de pH 3 ; B de pH 7 ; C de pH 10.",
        correction: "A est acide car 3 < 7. B est neutre car son pH vaut 7. C est basique car 10 > 7."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "À 25 °C, une solution A a un pH de 4 et une solution B un pH de 6. Laquelle est la plus acide ?",
        correction: "La solution A est la plus acide : son pH, égal à 4, est plus faible que celui de B."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un acide de Brønsted cède-t-il ou capte-t-il un proton H⁺ ? Et une base de Brønsted ?",
        correction: "Un acide de Brønsted peut céder un proton H⁺. Une base de Brønsted peut capter un proton H⁺."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "À 25 °C, une solution a un pH de 9. Compare les concentrations [H₃O⁺] et [OH⁻]. La solution est-elle acide, neutre ou basique ?",
        correction: "Comme 9 > 7, la solution est basique. À 25 °C, dans une solution basique, [H₃O⁺] < [OH⁻]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On dilue avec de l’eau pure une solution acide de pH 4, à 25 °C. Dans les conditions habituelles, indique si le pH augmente ou diminue et vers quelle valeur il se rapproche.",
        correction: "Le pH augmente : la solution devient moins acide. Il se rapproche de 7, valeur de neutralité à 25 °C."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans la réaction H₃O⁺ + OH⁻ → 2 H₂O, vérifie le nombre d’atomes de chaque élément et la charge totale de chaque côté.",
        correction: "À gauche : H₃O⁺ apporte 3 H et 1 O ; OH⁻ apporte 1 H et 1 O. Total : 4 H et 2 O. La charge totale vaut +1 − 1 = 0.\n\nÀ droite : 2 H₂O contiennent 4 H et 2 O ; la charge vaut 0. Les atomes et la charge sont conservés."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "À 25 °C, on étudie quatre solutions de pH respectifs : A = 2,5 ; B = 7,0 ; C = 11,0 ; D = 5,5. 1. Classe chaque solution comme acide, neutre ou basique. 2. Parmi A et D, laquelle a la concentration en ions H₃O⁺ la plus élevée ? 3. Quelle solution est la plus basique ?",
        correction: "1. A et D sont acides car leurs pH sont inférieurs à 7. B est neutre car son pH vaut 7. C est basique car son pH est supérieur à 7.\n\n2. A a le pH le plus faible : sa concentration en H₃O⁺ est plus élevée que celle de D.\n\n3. C est la plus basique : c’est la seule de pH supérieur à 7 et elle possède le pH le plus élevé."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère les couples acide-base H₃O⁺/H₂O et H₂O/OH⁻. 1. Dans chaque couple, identifie l’acide et la base. 2. Explique pourquoi l’eau est dite amphotère. 3. Écris la réaction entre H₃O⁺ et OH⁻.",
        correction: "1. Dans H₃O⁺/H₂O, H₃O⁺ est l’acide et H₂O la base. Dans H₂O/OH⁻, H₂O est l’acide et OH⁻ la base.\n\n2. L’eau peut jouer le rôle de base dans le premier couple et d’acide dans le second : elle est amphotère.\n\n3. H₃O⁺ + OH⁻ → 2 H₂O."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un modèle simplifié, on mélange une solution contenant 0,020 mol de H₃O⁺ avec une solution contenant 0,012 mol de OH⁻. On suppose que seule la réaction totale H₃O⁺ + OH⁻ → 2 H₂O a lieu. Détermine le réactif entièrement consommé et la quantité de l’autre ion restant en excès.",
        correction: "Les ions réagissent dans la proportion 1 pour 1. Il y a moins de OH⁻ que de H₃O⁺ : OH⁻ est entièrement consommé.\n\nQuantité de H₃O⁺ restante : 0,020 − 0,012 = 0,008 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "À 25 °C, une solution A de pH 11 est diluée avec de l’eau pure. Dans les conditions habituelles, son pH devient 9. 1. Compare la basicité de la solution avant et après dilution. 2. La solution diluée est-elle acide, neutre ou basique ? 3. Le soluté du prélèvement a-t-il nécessairement disparu ?",
        correction: "1. Le pH diminue de 11 à 9 : la solution devient moins basique.\n\n2. Comme 9 > 7, elle reste basique.\n\n3. Non. Une dilution ne signifie pas que le soluté disparaît. S’il n’y a ni perte ni réaction qui le transforme, sa quantité dans le prélèvement est conservée."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un modèle simplifié, on mélange 100 mL d’une solution contenant des ions H₃O⁺ à la concentration 0,20 mol·L⁻¹ et 150 mL d’une solution contenant des ions OH⁻ à la concentration 0,10 mol·L⁻¹. On suppose que seule la réaction totale H₃O⁺ + OH⁻ → 2 H₂O a lieu et que les volumes s’additionnent. 1. Calcule les quantités initiales des deux ions. 2. Identifie l’ion en excès et calcule sa quantité restante. 3. Calcule sa concentration finale dans le modèle. 4. Indique si le mélange est acide ou basique à 25 °C, dans le cadre de ce modèle.",
        correction: "1. V₁ = 0,100 L et V₂ = 0,150 L.\n\nn(H₃O⁺) = 0,20 × 0,100 = 0,020 mol.\nn(OH⁻) = 0,10 × 0,150 = 0,015 mol.\n\n2. Les ions réagissent dans la proportion 1 pour 1. OH⁻ est entièrement consommé dans ce modèle. Il reste 0,020 − 0,015 = 0,005 mol de H₃O⁺.\n\n3. Volume final : 0,100 + 0,150 = 0,250 L. Concentration de H₃O⁺ en excès : 0,005 / 0,250 = 0,020 mol·L⁻¹.\n\n4. H₃O⁺ est en excès : le mélange est acide dans ce modèle. En réalité, une très faible quantité de OH⁻ subsiste à l’équilibre ; elle est négligée ici."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On dispose de 50,0 mL d’une solution contenant H₃O⁺ à la concentration 0,10 mol·L⁻¹. On souhaite calculer le volume d’une solution contenant OH⁻ à la concentration 0,20 mol·L⁻¹ qui apporte exactement la quantité nécessaire pour réagir avec les ions H₃O⁺. On suppose la réaction totale H₃O⁺ + OH⁻ → 2 H₂O et on néglige les autres réactions. 1. Calcule la quantité initiale de H₃O⁺. 2. Déduis la quantité nécessaire de OH⁻. 3. Calcule le volume de solution contenant OH⁻. 4. Pourquoi ne faut-il pas réaliser ce mélange au hasard à la maison ?",
        correction: "1. V = 50,0 mL = 0,0500 L. Donc n(H₃O⁺) = 0,10 × 0,0500 = 0,0050 mol.\n\n2. Les coefficients sont 1 et 1 : il faut n(OH⁻) = 0,0050 mol.\n\n3. V = n / C = 0,0050 / 0,20 = 0,025 L = 25 mL.\n\n4. Les solutions peuvent être corrosives et leur mélange peut dégager de la chaleur. Une manipulation exige un cadre adapté et des protections ; cet exercice est théorique."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une solution aqueuse S est obtenue par dissolution complète de chlorure d’hydrogène HCl dans l’eau. Dans le modèle utilisé, HCl + H₂O → H₃O⁺ + Cl⁻. Une solution contient initialement 0,030 mol de HCl dissous dans un volume final de 0,500 L. 1. Calcule les quantités de H₃O⁺ et Cl⁻ formées selon ce modèle. 2. Calcule leurs concentrations. 3. On prélève 100 mL de S et on dilue ce prélèvement jusqu’à 500 mL. Calcule la concentration apportée en ions chlorure dans la solution diluée, en supposant qu’aucun ion chlorure n’est perdu ni transformé. 4. À 25 °C, le pH de S est-il inférieur ou supérieur à 7 ?",
        correction: "1. L’équation indique un rapport 1 pour 1 : n(H₃O⁺) = 0,030 mol et n(Cl⁻) = 0,030 mol, dans ce modèle.\n\n2. [H₃O⁺] = [Cl⁻] = 0,030 / 0,500 = 0,060 mol·L⁻¹.\n\n3. Le facteur de dilution est F = 500 / 100 = 5. Donc [Cl⁻]_fille = 0,060 / 5 = 0,012 mol·L⁻¹.\n\n4. La solution contient un excès d’ions H₃O⁺ par rapport aux ions OH⁻ : elle est acide. À 25 °C, son pH est inférieur à 7."
      }
    ]
  }
]);
