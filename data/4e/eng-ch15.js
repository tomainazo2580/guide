// ===== GUIDE - Anglais 4e (T8) =====
// Chapitre inspiré du fascicule de ressources pédagogiques.
// Explications, exercices et schéma originaux rédigés pour Guide.

enregistrerChapitres("4e", "eng", [
  {
    id: "eng4-demander-chemin",
    titre: "Chapitre 15 : Demander et indiquer son chemin",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "eng4-lieux-chemin",
        titre: "Les lieux utiles",
        blocs: [
          {
            type: "tableau",
            titre: "Dans une ville ou un village",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["a school", "une école"],
              ["a market", "un marché"],
              ["a shop", "une boutique"],
              ["a bank", "une banque"],
              ["a hospital", "un hôpital"],
              ["a health centre", "un centre de santé"],
              ["a bus station", "une gare routière"],
              ["a road", "une route"],
              ["a street", "une rue"],
              ["a crossroads", "un carrefour"]
            ]
          },
          {
            type: "exemple",
            titre: "Chercher un lieu",
            texte: "I am looking for the market. — Je cherche le marché.\n\nI am looking for the health centre. — Je cherche le centre de santé."
          }
        ]
      },
      {
        id: "eng4-demander-direction",
        titre: "Demander son chemin",
        blocs: [
          {
            type: "tableau",
            titre: "Questions utiles",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["Excuse me, where is the market?", "Excusez-moi, où est le marché ?"],
              ["How can I get to the school?", "Comment puis-je aller à l'école ?"],
              ["Is there a health centre near here?", "Y a-t-il un centre de santé près d'ici ?"],
              ["Can you help me, please?", "Pouvez-vous m'aider, s'il vous plaît ?"]
            ]
          },
          {
            type: "remarque",
            titre: "Être poli",
            texte: "Excuse me permet d'attirer poliment l'attention. On peut ajouter please à une demande et thank you pour remercier."
          },
          {
            type: "exemple",
            titre: "Une question",
            texte: "Excuse me, how can I get to the market, please?\n\nExcusez-moi, comment puis-je aller au marché, s'il vous plaît ?"
          }
        ]
      },
      {
        id: "eng4-indiquer-direction",
        titre: "Indiquer une direction",
        blocs: [
          {
            type: "tableau",
            titre: "Instructions",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["Go straight ahead.", "Allez tout droit."],
              ["Turn left.", "Tournez à gauche."],
              ["Turn right.", "Tournez à droite."],
              ["Stop at the crossroads.", "Arrêtez-vous au carrefour."],
              ["Go past the school.", "Passez devant l'école."],
              ["It's on your left.", "C'est sur votre gauche."],
              ["It's on your right.", "C'est sur votre droite."]
            ]
          },
          {
            type: "regle",
            titre: "Donner une instruction",
            texte: "Pour indiquer un chemin, on utilise souvent l'impératif : la phrase commence par la base du verbe, sans sujet.\n\nGo straight ahead. — Allez tout droit.\nTurn left. — Tournez à gauche."
          },
          {
            type: "remarque",
            titre: "Gauche et droite",
            texte: "Left signifie gauche et right signifie droite. « On your left » et « on your right » dépendent du sens dans lequel la personne se déplace."
          }
        ]
      },
      {
        id: "eng4-prepositions-chemin",
        titre: "Situer un lieu",
        blocs: [
          {
            type: "tableau",
            titre: "Prépositions",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["near", "près de"],
              ["next to", "à côté de"],
              ["opposite", "en face de"],
              ["between", "entre"],
              ["behind", "derrière"],
              ["in front of", "devant"]
            ]
          },
          {
            type: "exemple",
            titre: "Repérer les lieux",
            texte: "The shop is next to the bank. — La boutique est à côté de la banque.\n\nThe market is opposite the school. — Le marché est en face de l'école.\n\nThe bank is between the shop and the school. — La banque est entre la boutique et l'école."
          }
        ]
      },
      {
        id: "eng4-plan",
        titre: "Lire un petit plan",
        blocs: [
          {
            type: "texte",
            titre: "Un plan imaginaire",
            texte: "Sur ce plan, la route verticale et la route horizontale se croisent. Le point de départ est en bas de la route verticale. Le marché se trouve à droite du carrefour."
          },
          {
            type: "schema",
            titre: "Du départ au marché",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" role="img" aria-label="Plan montrant un départ au sud d'un carrefour et un marché à l'est">
  <rect width="400" height="280" fill="#ffffff"/>
  <rect x="170" y="10" width="60" height="260" fill="#dddddd"/>
  <rect x="10" y="85" width="380" height="60" fill="#dddddd"/>
  <rect x="265" y="32" width="105" height="45" rx="5" fill="#d9f1dd" stroke="#327344"/>
  <text x="317" y="60" text-anchor="middle" font-size="15" fill="#183c20">Market</text>
  <rect x="25" y="32" width="105" height="45" rx="5" fill="#dcecff" stroke="#326899"/>
  <text x="77" y="60" text-anchor="middle" font-size="15" fill="#183d60">School</text>
  <circle cx="200" cy="238" r="7" fill="#a52525"/>
  <text x="245" y="244" font-size="15" fill="#702020">Start</text>
  <path d="M200 228 L200 115 L305 115" fill="none" stroke="#a52525" stroke-width="4"/>
  <polygon points="305,115 294,109 294,121" fill="#a52525"/>
  <text x="200" y="22" text-anchor="middle" font-size="14" fill="#333333">N</text>
</svg>`,
            legende: "Suis la ligne rouge depuis le départ. Va tout droit jusqu'au carrefour, puis tourne à droite vers le marché."
          },
          {
            type: "exemple",
            titre: "Le chemin en anglais",
            texte: "From the start, go straight ahead to the crossroads. Turn right. The market is on your left.\n\nDepuis le départ, va tout droit jusqu'au carrefour. Tourne à droite. Le marché est sur ta gauche."
          },
          {
            type: "remarque",
            titre: "Pourquoi à gauche ?",
            texte: "Après avoir tourné à droite au carrefour, tu te déplaces vers la droite du plan. Le marché est alors sur ta gauche. Regarde toujours dans le sens du déplacement pour déterminer la gauche et la droite."
          }
        ]
      },
      {
        id: "eng4-dialogue-chemin",
        titre: "Lire un dialogue",
        blocs: [
          {
            type: "texte",
            titre: "Chercher le marché",
            texte: "A: Excuse me, how can I get to the market?\nB: Go straight ahead to the crossroads. Turn right. The market is on your left.\nA: Thank you!\nB: You're welcome.\n\nTraduction :\nA : Excusez-moi, comment puis-je aller au marché ?\nB : Allez tout droit jusqu'au carrefour. Tournez à droite. Le marché est sur votre gauche.\nA : Merci !\nB : De rien."
          },
          {
            type: "methode",
            titre: "Comprendre les indications",
            texte: "1. Repère le lieu recherché : the market.\n2. Cherche la première direction : go straight ahead.\n3. Repère le carrefour : the crossroads.\n4. Cherche le changement de direction : turn right.\n5. Repère le côté où se trouve le marché : on your left."
          }
        ]
      },
      {
        id: "eng4-bilan-chemin",
        titre: "Bilan : demander et indiquer un chemin",
        blocs: [
          {
            type: "methode",
            titre: "Demander",
            texte: "1. Attire poliment l'attention : Excuse me.\n2. Demande le lieu : Where is the market? ou How can I get to the market?\n3. Écoute les indications.\n4. Remercie : Thank you."
          },
          {
            type: "methode",
            titre: "Indiquer",
            texte: "1. Donne les instructions dans l'ordre : go straight ahead, turn left ou turn right.\n2. Ajoute un repère si nécessaire : the crossroads, the school…\n3. Situe le lieu : It's on your left. / It's next to the bank.\n4. Vérifie la gauche et la droite dans le sens du déplacement."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Traduis en français :\n1. turn left\n2. turn right\n3. go straight ahead\n4. a crossroads",
        correction: "1. tourner à gauche\n2. tourner à droite\n3. aller tout droit\n4. un carrefour"
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Traduis en anglais :\n1. un marché\n2. une école\n3. une banque\n4. un centre de santé",
        correction: "1. a market\n2. a school\n3. a bank\n4. a health centre"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Traduis en français :\n1. The market is next to the school.\n2. The shop is opposite the bank.\n3. The school is near the market.",
        correction: "1. Le marché est à côté de l'école.\n2. La boutique est en face de la banque.\n3. L'école est près du marché."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète avec left ou right :\n1. Turn ... . — Tournez à gauche.\n2. It's on your ... . — C'est sur votre droite.\n3. Turn ... . — Tournez à droite.",
        correction: "1. Turn left.\n2. It's on your right.\n3. Turn right."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Traduis en anglais :\n1. Excusez-moi, où est le marché ?\n2. Allez tout droit.\n3. Tournez à gauche.\n4. C'est sur votre droite.",
        correction: "1. Excuse me, where is the market?\n2. Go straight ahead.\n3. Turn left.\n4. It's on your right.\n\nExcuse me permet d'attirer poliment l'attention. Les consignes commencent ici par la base du verbe."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "En utilisant le plan de la leçon, complète le trajet depuis Start :\n1. Go ... ahead to the crossroads.\n2. Turn ... .\n3. The market is on your ... .",
        correction: "1. Go straight ahead to the crossroads.\n2. Turn right.\n3. The market is on your left.\n\nAprès le virage, on se déplace vers la droite du plan ; le marché se trouve à gauche dans le sens de ce déplacement."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Lis les indications puis réponds en français :\n\nGo straight ahead. Turn left at the crossroads. The health centre is next to the school.\n\n1. Que faut-il faire avant le carrefour ?\n2. De quel côté faut-il tourner au carrefour ?\n3. Où est le centre de santé ?",
        correction: "1. Il faut aller tout droit.\n2. Il faut tourner à gauche.\n3. Le centre de santé est à côté de l'école."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Écris un court dialogue imaginaire : une personne demande où se trouve une école. L'autre lui indique d'aller tout droit, de tourner à droite et précise que l'école est sur sa gauche.",
        correction: "Exemple :\nA: Excuse me, how can I get to the school?\nB: Go straight ahead. Turn right. The school is on your left.\nA: Thank you.\nB: You're welcome.\n\nTraduction :\nA : Excusez-moi, comment puis-je aller à l'école ?\nB : Allez tout droit. Tournez à droite. L'école est sur votre gauche.\nA : Merci.\nB : De rien.\n\nD'autres formulations correctes sont possibles."
      }
    ]
  }
]);

// ===== FIN DU FICHIER eng-ch15.js =====
