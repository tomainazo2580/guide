// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch15",
    titre: "Chapitre 15 : Les sources d'énergie",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch15-lecon1",
        titre: "Sources et formes d'énergie",
        blocs: [
          {
            type: "texte",
            titre: "L'énergie au quotidien",
            texte: "Pour cuisiner, se déplacer ou éclairer une pièce, nous utilisons de l'énergie. Cette énergie peut provenir de différentes sources : le Soleil, le vent, l'eau, le bois ou encore les combustibles fossiles."
          },
          {
            type: "definition",
            titre: "Source d'énergie",
            texte: "Une source d'énergie est une ressource ou un phénomène dont on peut tirer de l'énergie utile à certaines activités."
          },
          {
            type: "exemple",
            titre: "Source et forme",
            texte: "Le Soleil est une source d'énergie. Son rayonnement transporte de l'énergie que l'on peut utiliser, par exemple, pour chauffer de l'eau ou produire de l'électricité avec un panneau photovoltaïque."
          },
          {
            type: "remarque",
            titre: "L'énergie se transforme",
            texte: "Un appareil ne crée pas l'énergie : il la reçoit ou la prélève et la transforme. Une partie peut être dissipée dans l'environnement, notamment sous forme de chaleur."
          }
        ]
      },
      {
        id: "sp4-ch15-lecon2",
        titre: "Les sources renouvelables",
        blocs: [
          {
            type: "definition",
            titre: "Énergie renouvelable",
            texte: "Une source d'énergie est dite renouvelable lorsqu'elle se reconstitue naturellement à une échelle de temps compatible avec son utilisation humaine."
          },
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: ["Source", "Utilisation possible"],
            lignes: [
              ["Rayonnement solaire", "Panneau photovoltaïque ou chauffe-eau solaire"],
              ["Vent", "Éolienne produisant de l'électricité"],
              ["Eau en mouvement", "Centrale hydroélectrique"],
              ["Biomasse", "Bois ou résidus végétaux utilisés comme combustibles"],
              ["Chaleur interne de la Terre", "Géothermie, lorsque les conditions du lieu le permettent"]
            ]
          },
          {
            type: "remarque",
            titre: "Le cas de la biomasse",
            texte: "La biomasse peut être renouvelable si elle est prélevée et gérée de façon à permettre son renouvellement. Une coupe de bois plus rapide que la repousse peut entraîner la diminution des forêts."
          },
          {
            type: "exemple",
            titre: "À Madagascar",
            texte: "Selon les conditions locales, le rayonnement solaire, l'eau en mouvement et la biomasse peuvent être utilisés. Le choix dépend notamment des ressources disponibles, du coût et des besoins des habitants."
          }
        ]
      },
      {
        id: "sp4-ch15-lecon3",
        titre: "Les sources non renouvelables",
        blocs: [
          {
            type: "definition",
            titre: "Énergie non renouvelable",
            texte: "Une source d'énergie est dite non renouvelable lorsque ses réserves sont limitées et ne se reconstituent pas à une échelle de temps comparable à celle de leur utilisation."
          },
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: ["Source", "Précision"],
            lignes: [
              ["Charbon", "Combustible fossile"],
              ["Pétrole", "Combustible fossile utilisé notamment pour produire des carburants"],
              ["Gaz naturel", "Combustible fossile"],
              ["Uranium", "Ressource utilisée comme combustible dans certaines centrales nucléaires"]
            ]
          },
          {
            type: "remarque",
            titre: "Les combustibles fossiles",
            texte: "Le charbon, le pétrole et le gaz naturel se sont formés sur des durées très longues. Leur consommation réduit les réserves disponibles."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Le gaz naturel est un combustible fossile. Le biogaz, lui, peut être produit à partir de matières organiques : son caractère renouvelable dépend notamment de la manière dont ces matières sont produites et gérées."
          }
        ]
      },
      {
        id: "sp4-ch15-lecon4",
        titre: "Avantages et limites",
        blocs: [
          {
            type: "texte",
            titre: "Aucune solution sans impact",
            texte: "Chaque source d'énergie présente des avantages et des limites. Il faut considérer sa disponibilité, son coût, les besoins locaux et ses effets sur l'environnement et la santé."
          },
          {
            type: "tableau",
            titre: "Comparer quelques sources",
            entetes: ["Source", "Atout possible", "Limite ou impact possible"],
            lignes: [
              ["Solaire", "Ressource disponible dans de nombreux lieux", "Production variable selon l'ensoleillement ; matériel et stockage ont aussi des impacts"],
              ["Vent", "Ressource renouvelable", "Production variable selon le vent"],
              ["Hydraulique", "Peut produire de l'électricité à partir de l'eau", "Les installations peuvent modifier les milieux et les usages de l'eau"],
              ["Bois", "Ressource locale si elle est bien gérée", "Fumées de combustion et risque de déforestation en cas de surexploitation"],
              ["Combustibles fossiles", "Utilisables à la demande avec des équipements adaptés", "Réserves limitées ; combustion émettant notamment du dioxyde de carbone"]
            ]
          },
          {
            type: "remarque",
            titre: "Renouvelable ne signifie pas sans impact",
            texte: "Une source renouvelable peut avoir des effets sur l'environnement. Par exemple, il faut fabriquer et entretenir les équipements, et certaines installations modifient les milieux."
          },
          {
            type: "remarque",
            titre: "Santé et sécurité",
            texte: "Les fumées de cuisson peuvent nuire à la santé. Il faut éviter de respirer les fumées et utiliser les équipements de cuisson dans des conditions adaptées, notamment avec une ventilation suffisante."
          }
        ]
      },
      {
        id: "sp4-ch15-lecon5",
        titre: "Utiliser l'énergie de façon responsable",
        blocs: [
          {
            type: "texte",
            titre: "Réduire le gaspillage",
            texte: "Utiliser l'énergie de façon responsable consiste notamment à éviter les dépenses inutiles tout en répondant aux besoins. On peut aussi choisir des équipements adaptés et entretenir ceux que l'on possède."
          },
          {
            type: "exemple",
            titre: "Quelques gestes",
            texte: "Éteindre une lampe lorsqu'elle n'est plus utile, profiter de la lumière du jour ou entretenir un appareil peut contribuer à limiter le gaspillage d'énergie."
          },
          {
            type: "remarque",
            titre: "Un choix qui dépend du contexte",
            texte: "Un choix énergétique doit tenir compte des conditions réelles : accès aux ressources, coût, sécurité, environnement et besoins de la population. Il n'existe pas une seule solution adaptée à tous les lieux."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux sources d'énergie renouvelables.",
        correction: "Par exemple : le rayonnement solaire et le vent. L'eau en mouvement peut aussi être citée."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux sources d'énergie non renouvelables.",
        correction: "Par exemple : le pétrole et le charbon. Le gaz naturel et l'uranium sont également des ressources non renouvelables."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pourquoi dit-on que le pétrole est une source d'énergie non renouvelable ?",
        correction: "Ses réserves sont limitées et il se forme sur des durées très longues. Il ne se reconstitue pas à une échelle de temps comparable à celle de son utilisation."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Donne un avantage possible et une limite de l'énergie solaire.",
        correction: "Avantage possible : le rayonnement solaire est une ressource renouvelable disponible dans de nombreux lieux. Limite : la production dépend de l'ensoleillement ; les équipements et leur stockage ont aussi des impacts."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le bois est-il toujours une source d'énergie renouvelable ? Explique.",
        correction: "Le bois peut être renouvelable si la forêt est gérée de manière à permettre sa repousse. Si le bois est prélevé plus rapidement que les arbres ne repoussent, la ressource diminue et la forêt peut être dégradée."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans une centrale hydroélectrique, décris simplement le rôle de l'eau, de la turbine et de l'alternateur.",
        correction: "L'eau en mouvement entraîne une turbine. La turbine entraîne un alternateur. Celui-ci transforme une partie de l'énergie mécanique reçue en énergie électrique."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un village étudie l'installation de panneaux photovoltaïques.\n1. Quelle est la source d'énergie utilisée ?\n2. Donne un avantage possible.\n3. Cite deux éléments à examiner avant de choisir cette solution.",
        correction: "1. La source utilisée est le rayonnement solaire.\n2. C'est une ressource renouvelable qui peut permettre de produire de l'électricité.\n3. On peut examiner l'ensoleillement local, le coût et l'entretien des équipements, les besoins des habitants ou encore les solutions nécessaires lorsque l'ensoleillement est insuffisant. Plusieurs réponses sont possibles."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève affirme : « Une source renouvelable n'a aucun impact sur l'environnement. » Explique pourquoi cette affirmation est trop générale, avec un exemple.",
        correction: "Une source peut être renouvelable tout en ayant des impacts. Par exemple, une installation hydroélectrique peut modifier un cours d'eau et les milieux environnants. De même, la fabrication des panneaux solaires nécessite des matériaux et de l'énergie."
      }
    ]
  }
]);
