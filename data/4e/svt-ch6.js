// ===== GUIDE - SVT 4e (T8) =====
// Chapitre 6 : Les groupes sanguins et la transfusion

enregistrerChapitres("4e", "svt", [
  {
    id: "svt4-groupes-transfusion",
    titre: "Chapitre 6 : Les groupes sanguins et la transfusion",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt4-groupes-definition",
        titre: "Qu'est-ce qu'un groupe sanguin ?",
        blocs: [
          {
            type: "texte",
            titre: "Des caractéristiques du sang",
            texte: "Tous les êtres humains ont du sang, mais leurs globules rouges ne portent pas tous les mêmes caractéristiques à leur surface. Ces caractéristiques permettent de distinguer des groupes sanguins."
          },
          {
            type: "definition",
            titre: "Les systèmes ABO et Rhésus",
            texte: "Dans le système ABO, on distingue quatre groupes : A, B, AB et O.\nOn indique aussi souvent le facteur Rhésus D : positif (+) ou négatif (−).\nEn combinant ces indications, on obtient par exemple les groupes A+, O− ou AB+."
          },
          {
            type: "remarque",
            titre: "Un groupe parmi d'autres",
            texte: "Les systèmes ABO et Rhésus D sont importants, mais il existe aussi d'autres caractéristiques sanguines. Les professionnels de santé en tiennent compte lorsque c'est nécessaire."
          }
        ]
      },
      {
        id: "svt4-groupes-abo",
        titre: "Les groupes du système ABO",
        blocs: [
          {
            type: "texte",
            titre: "Des marqueurs à la surface des globules rouges",
            texte: "Dans le système ABO, les globules rouges peuvent porter des marqueurs appelés antigènes A ou B :\n• groupe A : antigène A ;\n• groupe B : antigène B ;\n• groupe AB : antigènes A et B ;\n• groupe O : ni antigène A ni antigène B."
          },
          {
            type: "tableau",
            titre: "Les groupes ABO",
            entetes: ["Groupe", "Antigènes sur les globules rouges"],
            lignes: [
              ["A", "A"],
              ["B", "B"],
              ["AB", "A et B"],
              ["O", "Ni A ni B"]
            ]
          },
          {
            type: "texte",
            titre: "Les anticorps du plasma",
            texte: "Le plasma peut contenir des anticorps capables de réagir contre des antigènes A ou B absents des globules rouges de la personne.\nUne transfusion incompatible peut provoquer une réaction dangereuse : c'est pourquoi la compatibilité doit être vérifiée."
          }
        ]
      },
      {
        id: "svt4-transfusion-definition",
        titre: "La transfusion sanguine",
        blocs: [
          {
            type: "definition",
            titre: "Transfuser",
            texte: "Une transfusion consiste à administrer à une personne un produit sanguin provenant d'un don. Selon ses besoins, elle peut recevoir des globules rouges, du plasma ou des plaquettes."
          },
          {
            type: "exemple",
            titre: "Une situation possible",
            texte: "Après une perte de sang importante ou dans certaines maladies, une personne peut avoir besoin d'une transfusion. L'équipe soignante choisit le produit adapté à sa situation."
          },
          {
            type: "regle",
            titre: "Une décision médicale",
            texte: "Avant une transfusion, les professionnels de santé vérifient la compatibilité par des analyses et des contrôles adaptés. Il ne faut jamais décider d'une transfusion en se fondant uniquement sur un tableau de cours."
          }
        ]
      },
      {
        id: "svt4-transfusion-compatibilite",
        titre: "Comprendre la compatibilité ABO des globules rouges",
        blocs: [
          {
            type: "texte",
            titre: "Attention au produit transfusé",
            texte: "Le tableau suivant concerne uniquement la transfusion de globules rouges et le système ABO. Il ne s'applique pas de la même façon au plasma. En pratique, d'autres vérifications sont indispensables."
          },
          {
            type: "tableau",
            titre: "Globules rouges : compatibilité ABO simplifiée",
            entetes: ["Groupe du receveur", "Groupes ABO des globules rouges qu'il peut recevoir"],
            lignes: [
              ["O", "O"],
              ["A", "A ou O"],
              ["B", "B ou O"],
              ["AB", "A, B, AB ou O"]
            ]
          },
          {
            type: "methode",
            titre: "Lire le tableau",
            texte: "Repère d'abord le groupe ABO du receveur, puis lis les groupes de globules rouges indiqués sur la même ligne.\nExemple : dans ce tableau simplifié, un receveur de groupe A peut recevoir des globules rouges de groupe A ou O. Le facteur Rhésus et les autres contrôles restent à prendre en compte."
          },
          {
            type: "remarque",
            titre: "Raccourcis à comprendre",
            texte: "On appelle parfois O− « donneur universel » et AB+ « receveur universel ». Ce sont des raccourcis concernant les globules rouges et les systèmes ABO et Rhésus D. D'autres antigènes et des contrôles de compatibilité comptent aussi : ces expressions ne remplacent jamais une décision médicale."
          }
        ]
      },
      {
        id: "svt4-transfusion-don",
        titre: "Le don de sang",
        blocs: [
          {
            type: "texte",
            titre: "Un geste de solidarité",
            texte: "Le don de sang permet de préparer des produits sanguins utiles aux personnes qui en ont besoin. Les conditions pour donner et les contrôles sont fixés par les services de santé."
          },
          {
            type: "remarque",
            titre: "La sécurité",
            texte: "Le prélèvement, les analyses, la conservation et la transfusion sont réalisés dans un cadre médical. Si tu souhaites en savoir plus sur le don, renseigne-toi auprès d'un service de santé."
          }
        ]
      },
      {
        id: "svt4-transfusion-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan",
            texte: "• Les groupes ABO sont A, B, AB et O ; le facteur Rhésus D est indiqué par + ou −.\n• Une transfusion peut apporter des globules rouges, du plasma ou des plaquettes.\n• La compatibilité dépend du produit transfusé et de plusieurs caractéristiques sanguines.\n• Les professionnels de santé effectuent les contrôles nécessaires avant une transfusion."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quels sont les quatre groupes du système ABO ?",
        correction: "Les quatre groupes sont A, B, AB et O."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que signifie le signe + ou − après un groupe ABO ?",
        correction: "Il indique le facteur Rhésus D : positif (+) ou négatif (−)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quels antigènes du système ABO sont présents sur les globules rouges d'une personne du groupe AB ?",
        correction: "Ses globules rouges portent les antigènes A et B."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Nomme deux produits sanguins qui peuvent être transfusés selon les besoins d'un malade.",
        correction: "On peut par exemple transfuser des globules rouges ou du plasma. Les plaquettes peuvent également être transfusées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Selon le tableau ABO simplifié du cours, de quels groupes un receveur A peut-il recevoir des globules rouges ?",
        correction: "Selon ce tableau, il peut recevoir des globules rouges des groupes A ou O. Il faut aussi tenir compte du Rhésus et effectuer les autres contrôles médicaux nécessaires."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pourquoi ne faut-il pas utiliser le tableau de compatibilité des globules rouges pour décider d'une transfusion de plasma ?",
        correction: "Parce que la compatibilité dépend du produit transfusé. Les règles du tableau des globules rouges ne s'appliquent pas de la même façon au plasma. Dans tous les cas, les professionnels réalisent les vérifications adaptées."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève dit : « Une personne O− peut donner n'importe quel produit sanguin à tout le monde, sans contrôle. » Explique ses deux erreurs.",
        correction: "Le raccourci « donneur universel » concerne les globules rouges, pas tous les produits sanguins : la compatibilité du plasma est différente. De plus, ce raccourci porte sur les systèmes ABO et Rhésus D ; d'autres antigènes peuvent compter. Les contrôles médicaux restent indispensables."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Selon le tableau ABO simplifié, un receveur de groupe B peut-il recevoir des globules rouges de groupe A ? Pourquoi cette réponse ne suffit-elle pas à décider d'une transfusion ?",
        correction: "Non : dans le tableau ABO des globules rouges, un receveur B peut recevoir des globules rouges B ou O, pas A. Cette lecture ne suffit pas à décider d'une transfusion : le Rhésus, d'autres caractéristiques et les contrôles réalisés par les professionnels doivent aussi être pris en compte."
      }
    ]
  }
]);
