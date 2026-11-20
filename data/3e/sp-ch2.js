enregistrerChapitres("3e", "sp", [
  {
    id: 2,
    titre: "Solutions acides, basiques et pH",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Reconnaître une solution acide ou basique",
        blocs: [
          {
            type: "introduction",
            titre: "Des solutions autour de nous",
            texte: "Le jus de citron, le vinaigre, l’eau savonneuse et de nombreux produits d’entretien sont des solutions. Certaines sont acides, d’autres sont basiques.\n\nEn chimie, on ne doit pas les reconnaître en les goûtant ou en les touchant. On utilise des instruments ou des indicateurs adaptés."
          },
          {
            type: "definition",
            titre: "Trois catégories de solutions",
            texte: "Une solution aqueuse peut être acide, neutre ou basique.\n\n• Une solution acide a un pH inférieur à 7.\n• Une solution neutre a un pH égal à 7.\n• Une solution basique a un pH supérieur à 7.\n\nCes repères sont donnés pour une température de 25 °C."
          },
          {
            type: "exemple",
            titre: "Quelques exemples",
            texte: "Le jus de citron et le vinaigre sont acides. Une solution de savon est généralement basique. L’eau pure est neutre à 25 °C.\n\nLe sang est légèrement basique : il n’est pas neutre."
          },
          {
            type: "remarque",
            titre: "Sécurité avant tout",
            texte: "Ne goûte jamais une solution de laboratoire. Ne la touche pas et ne cherche pas à l’identifier en la sentant directement.\n\nCertains acides et certaines bases peuvent provoquer de graves brûlures. Les manipulations se font sous la surveillance de l’enseignant, avec les protections adaptées."
          }
        ]
      },

      {
        id: 2,
        titre: "Le pH d’une solution",
        blocs: [
          {
            type: "definition",
            titre: "Qu’est-ce que le pH ?",
            texte: "Le pH est un nombre qui permet de caractériser le caractère acide, neutre ou basique d’une solution aqueuse.\n\nPour les solutions courantes étudiées au collège, on utilise souvent une échelle allant de 0 à 14. Certaines solutions très concentrées peuvent toutefois avoir un pH en dehors de cet intervalle."
          },
          {
            type: "tableau",
            titre: "Lire le pH à 25 °C",
            entetes: ["Valeur du pH", "Nature de la solution"],
            lignes: [
              ["pH < 7", "Solution acide"],
              ["pH = 7", "Solution neutre"],
              ["pH > 7", "Solution basique"]
            ]
          },
          {
            type: "regle",
            titre: "Comparer des solutions",
            texte: "Plus le pH est faible, plus le caractère acide est marqué.\n\nPlus le pH est élevé, plus le caractère basique est marqué.\n\nPar exemple, une solution de pH 2 est plus acide qu’une solution de pH 5. Une solution de pH 12 est plus basique qu’une solution de pH 9."
          },
          {
            type: "exemple",
            titre: "Classer des solutions",
            texte: "On mesure les pH suivants :\n\n• Solution A : pH = 3.\n• Solution B : pH = 7.\n• Solution C : pH = 10.\n\nA est acide car 3 < 7. B est neutre car son pH vaut 7. C est basique car 10 > 7."
          },
          {
            type: "remarque",
            titre: "Le pH n’est pas une grandeur proportionnelle",
            texte: "Une solution de pH 2 n’est pas « deux fois plus acide » qu’une solution de pH 4. L’échelle de pH n’est pas une échelle proportionnelle simple."
          },
          {
            type: "remarque",
            titre: "Précision sur la température",
            texte: "Au collège, on utilise généralement la valeur 7 pour reconnaître une solution neutre à 25 °C. La valeur du pH d’une solution neutre peut varier avec la température."
          }
        ]
      },

      {
        id: 3,
        titre: "Mesurer le pH",
        blocs: [
          {
            type: "definition",
            titre: "Le papier pH",
            texte: "Le papier pH est un papier imprégné de substances qui changent de couleur au contact d’une solution. On compare sa couleur à une échelle fournie pour estimer le pH."
          },
          {
            type: "methode",
            titre: "Utiliser du papier pH",
            texte: "1. Placer un petit morceau de papier pH sur une surface propre.\n2. À l’aide d’une baguette propre ou d’une pipette adaptée, déposer une goutte de solution sur le papier.\n3. Comparer immédiatement la couleur obtenue à l’échelle de référence du fabricant.\n4. Lire une valeur approximative du pH et conclure : solution acide, neutre ou basique.\n\nNe pas tremper directement le rouleau de papier dans la solution : cela peut la contaminer."
          },
          {
            type: "definition",
            titre: "Le pH-mètre",
            texte: "Le pH-mètre est un appareil qui mesure le pH à l’aide d’une sonde. Il donne généralement une mesure plus précise que le papier pH, s’il est correctement étalonné et utilisé."
          },
          {
            type: "methode",
            titre: "Utiliser un pH-mètre",
            texte: "Sous la direction de l’enseignant :\n\n1. Étalonner l’appareil selon sa notice.\n2. Rincer la sonde à l’eau distillée et l’égoutter délicatement.\n3. Plonger la partie sensible de la sonde dans la solution.\n4. Attendre que la valeur affichée se stabilise, puis la lire.\n5. Rincer la sonde après la mesure et la conserver selon les consignes du fabricant."
          },
          {
            type: "remarque",
            titre: "Estimation ou mesure précise ?",
            texte: "Le papier pH donne généralement une valeur approximative, car la lecture dépend de la comparaison des couleurs. Le pH-mètre permet de lire une valeur plus précise, par exemple pH = 4,2."
          }
        ]
      },

      {
        id: 4,
        titre: "Les ions responsables du caractère acide ou basique",
        blocs: [
          {
            type: "introduction",
            titre: "Rappel : qu’est-ce qu’un ion ?",
            texte: "Un ion est une particule qui porte une charge électrique.\n\nUn ion positif est appelé cation. Un ion négatif est appelé anion.\n\nExemples : Na⁺ est un ion positif ; Cl⁻ est un ion négatif."
          },
          {
            type: "definition",
            titre: "Les ions H₃O⁺ et OH⁻",
            texte: "Dans une solution aqueuse, on trouve notamment :\n\n• les ions oxonium H₃O⁺ ;\n• les ions hydroxyde OH⁻.\n\nOn utilise aussi souvent l’écriture simplifiée H⁺ pour représenter l’acidité en solution aqueuse. Dans l’eau, les ions H⁺ sont associés aux molécules d’eau : on les représente plus précisément par H₃O⁺."
          },
          {
            type: "regle",
            titre: "Comparer les concentrations des ions",
            texte: "À 25 °C :\n\n• Solution acide : la concentration en ions H₃O⁺ est supérieure à celle des ions OH⁻.\n• Solution neutre : ces deux concentrations sont égales.\n• Solution basique : la concentration en ions OH⁻ est supérieure à celle des ions H₃O⁺.\n\nLes deux types d’ions sont présents dans une solution aqueuse, mais pas nécessairement en mêmes concentrations."
          },
          {
            type: "exemple",
            titre: "Exemples de solutions",
            texte: "Une solution aqueuse d’acide chlorhydrique contient notamment des ions H₃O⁺ et Cl⁻.\n\nUne solution aqueuse d’hydroxyde de sodium, appelée aussi solution de soude, contient notamment des ions Na⁺ et OH⁻.\n\nCes solutions peuvent être dangereuses : leur manipulation nécessite des précautions."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les symboles",
            texte: "H₃O⁺ est un ion positif. OH⁻ est un ion négatif. Le signe « + » ou « − » indique la charge électrique de l’ion ; ce n’est pas une opération à effectuer."
          }
        ]
      },

      {
        id: 5,
        titre: "Dilution et mélange acide-base",
        blocs: [
          {
            type: "definition",
            titre: "Rappel : diluer une solution",
            texte: "Diluer une solution consiste à ajouter du solvant, généralement de l’eau pour une solution aqueuse. La solution obtenue est moins concentrée que la solution initiale."
          },
          {
            type: "regle",
            titre: "Effet de la dilution sur le pH",
            texte: "À 25 °C, lorsqu’on dilue une solution acide avec de l’eau pure, son pH augmente et se rapproche de 7.\n\nLorsqu’on dilue une solution basique avec de l’eau pure, son pH diminue et se rapproche de 7.\n\nUne simple dilution par de l’eau pure ne transforme pas une solution acide en solution basique, ni une solution basique en solution acide."
          },
          {
            type: "exemple",
            titre: "Prévoir l’évolution du pH",
            texte: "Une solution acide a un pH de 3. Après dilution avec de l’eau pure, son pH peut par exemple devenir 4 : il a augmenté et s’est rapproché de 7.\n\nUne solution basique de pH 11 peut, après dilution, avoir un pH de 10 : il a diminué et s’est rapproché de 7.\n\nCes valeurs sont des exemples : on ne peut pas déterminer le pH final exact sans informations supplémentaires."
          },
          {
            type: "definition",
            titre: "Réaction entre un acide et une base",
            texte: "Lorsqu’une solution acide et une solution basique réagissent, les ions H₃O⁺ et OH⁻ peuvent réagir pour former de l’eau :\n\nH₃O⁺ + OH⁻ → 2 H₂O\n\nOn peut aussi rencontrer l’écriture simplifiée :\n\nH⁺ + OH⁻ → H₂O."
          },
          {
            type: "remarque",
            titre: "Un mélange n’est pas forcément neutre",
            texte: "Mélanger une solution acide et une solution basique ne donne pas toujours une solution neutre. Le résultat dépend notamment des quantités et des concentrations des substances mélangées.\n\nSi une espèce acide ou basique reste en excès, la solution finale peut rester acide ou basique."
          },
          {
            type: "remarque",
            titre: "Sécurité pendant la dilution",
            texte: "La dilution de certains produits, notamment des acides concentrés, peut dégager beaucoup de chaleur. Elle doit être réalisée uniquement avec le matériel et les protections adaptés, sous la direction de l’enseignant.\n\nLorsqu’il faut diluer un acide concentré, on verse lentement l’acide dans l’eau, jamais l’eau dans l’acide. Ne réalise pas cette opération seul."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthode et bilan pour l’examen",
        blocs: [
          {
            type: "methode",
            titre: "Répondre à une question sur le pH",
            texte: "1. Relever la valeur du pH.\n2. La comparer à 7, en utilisant les repères à 25 °C.\n3. Donner la nature de la solution : acide, neutre ou basique.\n4. Justifier avec une phrase complète.\n\nExemple : « Le pH vaut 4. Comme 4 < 7, la solution est acide. »"
          },
          {
            type: "methode",
            titre: "Prévoir l’effet d’une dilution",
            texte: "1. Identifier si la solution de départ est acide ou basique.\n2. Si elle est acide, son pH augmente vers 7.\n3. Si elle est basique, son pH diminue vers 7.\n4. Ne pas inventer une valeur finale exacte si les données sont insuffisantes."
          },
          {
            type: "tableau",
            titre: "À retenir",
            entetes: ["Situation à 25 °C", "Conclusion"],
            lignes: [
              ["pH inférieur à 7", "Solution acide"],
              ["pH égal à 7", "Solution neutre"],
              ["pH supérieur à 7", "Solution basique"],
              ["Dilution d’une solution acide", "Le pH augmente vers 7"],
              ["Dilution d’une solution basique", "Le pH diminue vers 7"]
            ]
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes à éviter",
            texte: "• Dire qu’un pH élevé correspond à une solution acide : c’est l’inverse.\n• Dire qu’une solution neutre ne contient aucun ion H₃O⁺ ou OH⁻ : leurs concentrations sont égales, mais elles ne sont pas nulles.\n• Affirmer qu’un mélange acide-base est toujours neutre.\n• Donner un pH final précis après dilution sans données suffisantes.\n• Identifier une solution en la goûtant."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "À 25 °C, classer les solutions suivantes en solutions acides, neutres ou basiques : A de pH 2 ; B de pH 7 ; C de pH 11.",
        correction: "A : pH = 2 < 7, donc A est acide.\n\nB : pH = 7, donc B est neutre.\n\nC : pH = 11 > 7, donc C est basique."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Deux solutions acides ont pour pH 3 et 5. Laquelle est la plus acide ? Justifier.",
        correction: "La solution de pH 3 est la plus acide. Sur l’échelle de pH, plus la valeur est faible, plus le caractère acide est marqué. Or 3 < 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Citer deux moyens de déterminer le pH d’une solution. Lequel donne généralement la mesure la plus précise ?",
        correction: "On peut utiliser du papier pH ou un pH-mètre.\n\nLe pH-mètre donne généralement une mesure plus précise, à condition d’être correctement étalonné et utilisé. Le papier pH donne une valeur approximative grâce à une comparaison de couleurs."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution a un pH de 9 à 25 °C. Indiquer sa nature et comparer les concentrations des ions H₃O⁺ et OH⁻.",
        correction: "Comme 9 > 7, la solution est basique.\n\nDans une solution basique, la concentration en ions OH⁻ est supérieure à celle des ions H₃O⁺."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On dilue avec de l’eau pure une solution de pH 4, à 25 °C. Son pH augmente-t-il ou diminue-t-il ? La solution devient-elle basique par simple dilution ?",
        correction: "La solution initiale est acide car 4 < 7.\n\nLorsqu’on la dilue avec de l’eau pure, son pH augmente et se rapproche de 7.\n\nNon, une simple dilution par de l’eau pure ne la rend pas basique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution basique a un pH de 12. Après dilution avec de l’eau pure, on propose les valeurs suivantes pour son pH : 3 ; 9 ; 13. Quelle valeur est cohérente ? Justifier.",
        correction: "La valeur cohérente est 9.\n\nLorsqu’on dilue une solution basique, son pH diminue et se rapproche de 7. Il reste supérieur à 7 dans le cadre d’une simple dilution par de l’eau pure.\n\nLa valeur 13 est plus élevée que le pH initial ; la valeur 3 correspond à une solution acide. Elles ne conviennent donc pas."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Recopier et compléter :\n\na) Dans une solution acide, la concentration en ions … est supérieure à celle des ions … .\n\nb) Dans une solution neutre, ces concentrations sont … .\n\nc) L’ion OH⁻ est chargé … .",
        correction: "a) Dans une solution acide, la concentration en ions H₃O⁺ est supérieure à celle des ions OH⁻.\n\nb) Dans une solution neutre, ces concentrations sont égales.\n\nc) L’ion OH⁻ est chargé négativement."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « Si je mélange une solution acide avec une solution basique, le mélange sera toujours neutre. » A-t-il raison ? Expliquer.",
        correction: "Non, il n’a pas toujours raison.\n\nDes ions H₃O⁺ et OH⁻ peuvent réagir pour former de l’eau, mais le résultat dépend notamment des quantités et des concentrations des substances mélangées.\n\nSi une espèce acide ou basique reste en excès, le mélange peut rester respectivement acide ou basique. Il faut des conditions adaptées pour obtenir une solution neutre."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On utilise du papier pH pour étudier une solution inconnue. Décrire les étapes de la mesure et citer deux précautions de sécurité.",
        correction: "On place un morceau de papier pH sur une surface propre. Avec une baguette propre ou une pipette adaptée, on dépose une goutte de solution sur le papier. On compare la couleur à l’échelle fournie, puis on estime le pH.\n\nPrécautions possibles : ne pas goûter ni toucher la solution ; porter les protections demandées et suivre les consignes de l’enseignant.\n\nOn évite aussi de tremper directement le rouleau de papier dans la solution afin de ne pas la contaminer."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice de type examen. À 25 °C, on étudie trois solutions A, B et C. Leurs pH respectifs sont 2,5 ; 7,0 et 10,5.\n\n1. Donner la nature de chaque solution en justifiant.\n2. Dans la solution C, quels ions ont la concentration la plus élevée : H₃O⁺ ou OH⁻ ?\n3. On dilue A avec de l’eau pure. Comment évolue son pH ?\n4. Écrire l’équation de la réaction entre les ions H₃O⁺ et OH⁻.",
        correction: "1. A : 2,5 < 7, donc A est acide.\nB : pH = 7,0, donc B est neutre.\nC : 10,5 > 7, donc C est basique.\n\n2. C est basique : la concentration en ions OH⁻ est supérieure à celle des ions H₃O⁺.\n\n3. A est acide. Lorsqu’on la dilue avec de l’eau pure, son pH augmente et se rapproche de 7.\n\n4. H₃O⁺ + OH⁻ → 2 H₂O."
      }
    ]
  }
]);
