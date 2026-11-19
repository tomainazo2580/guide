// ===== GUIDE - Anglais 4e (T8) =====
// Chapitre inspiré du fascicule de ressources pédagogiques.
// Explications et exercices rédigés pour Guide.
// Les prix indiqués sont des exemples fictifs.

enregistrerChapitres("4e", "eng", [
  {
    id: "eng4-marche-prix",
    titre: "Chapitre 8 : Au marché — demander et donner un prix",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "eng4-marche-vocabulaire",
        titre: "Le vocabulaire du marché",
        blocs: [
          {
            type: "texte",
            titre: "At the market",
            texte: "At the market signifie « au marché ». On peut y acheter des fruits, des légumes et d'autres produits."
          },
          {
            type: "tableau",
            titre: "Mots utiles",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["a market", "un marché"],
              ["a customer", "un client / une cliente"],
              ["a seller", "un vendeur / une vendeuse"],
              ["to buy", "acheter"],
              ["to sell", "vendre"],
              ["a price", "un prix"],
              ["money", "de l'argent"],
              ["a bag", "un sac"],
              ["a kilo", "un kilo"]
            ]
          },
          {
            type: "exemple",
            titre: "Acheter au marché",
            texte: "I buy tomatoes at the market. — J'achète des tomates au marché.\nThe seller sells fruit. — Le vendeur ou la vendeuse vend des fruits."
          }
        ]
      },
      {
        id: "eng4-nombres-prix",
        titre: "Lire des prix en ariary",
        blocs: [
          {
            type: "texte",
            titre: "La monnaie",
            texte: "À Madagascar, la monnaie est l'ariary. Dans ce chapitre, les prix sont inventés pour s'entraîner : ils ne représentent pas nécessairement les prix du marché."
          },
          {
            type: "tableau",
            titre: "Quelques nombres",
            entetes: ["Nombre", "Anglais"],
            lignes: [
              ["100", "one hundred"],
              ["500", "five hundred"],
              ["1 000", "one thousand"],
              ["2 000", "two thousand"],
              ["3 500", "three thousand five hundred"],
              ["10 000", "ten thousand"]
            ]
          },
          {
            type: "regle",
            titre: "Hundred et thousand",
            texte: "Après un nombre précis, hundred et thousand ne prennent pas de -s :\n\ntwo hundred — deux cents\nthree thousand — trois mille\n\nOn peut dire « three thousand five hundred » ou « three thousand and five hundred » pour 3 500."
          },
          {
            type: "exemple",
            titre: "Un prix fictif",
            texte: "2 000 ariary : two thousand ariary.\n\nThe price is two thousand ariary. — Le prix est de deux mille ariary."
          }
        ]
      },
      {
        id: "eng4-demander-prix",
        titre: "Demander un prix",
        blocs: [
          {
            type: "regle",
            titre: "How much is it?",
            texte: "Pour demander le prix d'une chose, on peut dire :\n\nHow much is it? — Combien ça coûte ?\n\nOn peut répondre :\nIt's two thousand ariary. — Ça coûte deux mille ariary."
          },
          {
            type: "regle",
            titre: "Préciser le produit",
            texte: "Pour une chose au singulier :\nHow much is this pineapple? — Combien coûte cet ananas ?\n\nPour plusieurs choses :\nHow much are these bananas? — Combien coûtent ces bananes ?"
          },
          {
            type: "tableau",
            titre: "Questions et réponses",
            entetes: ["Question", "Réponse possible"],
            lignes: [
              ["How much is this mango?", "It's one thousand ariary."],
              ["How much are these eggs?", "They're three thousand ariary."],
              ["How much is a kilo of rice?", "It's four thousand ariary."]
            ]
          },
          {
            type: "remarque",
            titre: "It et they",
            texte: "It peut remplacer une chose au singulier. They peut remplacer plusieurs choses.\n\nIt's = it is.\nThey're = they are."
          }
        ]
      },
      {
        id: "eng4-demander-produit",
        titre: "Demander un produit poliment",
        blocs: [
          {
            type: "regle",
            titre: "I'd like…",
            texte: "Pour dire ce que l'on voudrait acheter, on peut utiliser I'd like, la forme courte de I would like :\n\nI'd like some tomatoes, please. — Je voudrais des tomates, s'il vous plaît.\nI'd like a kilo of rice, please. — Je voudrais un kilo de riz, s'il vous plaît."
          },
          {
            type: "regle",
            titre: "Can I have…?",
            texte: "On peut aussi demander :\n\nCan I have two bananas, please? — Puis-je avoir deux bananes, s'il vous plaît ?\n\nCan I have some water, please? — Puis-je avoir de l'eau, s'il vous plaît ?"
          },
          {
            type: "tableau",
            titre: "Quantités utiles",
            entetes: ["Anglais", "Français"],
            lignes: [
              ["one kilo of rice", "un kilo de riz"],
              ["half a kilo of tomatoes", "un demi-kilo de tomates"],
              ["two eggs", "deux œufs"],
              ["three bananas", "trois bananes"],
              ["a bag of rice", "un sac de riz"],
              ["a bottle of water", "une bouteille d'eau"]
            ]
          }
        ]
      },
      {
        id: "eng4-comprendre-prix",
        titre: "Comprendre le prix et la quantité",
        blocs: [
          {
            type: "exemple",
            titre: "Un prix par kilo",
            texte: "Customer: How much is a kilo of tomatoes?\nSeller: It's three thousand ariary per kilo.\n\nClient : Combien coûte un kilo de tomates ?\nVendeur : C'est trois mille ariary le kilo."
          },
          {
            type: "regle",
            titre: "Per kilo",
            texte: "Per kilo signifie « par kilo ». Le prix total dépend de la quantité achetée.\n\nExemple fictif : si un kilo coûte 3 000 ariary, deux kilos coûtent 6 000 ariary."
          },
          {
            type: "remarque",
            titre: "How much et how many",
            texte: "How much peut demander un prix : How much is it?\n\nHow many demande le nombre d'éléments que l'on compte : How many bananas do you want? — Combien de bananes veux-tu ?"
          }
        ]
      },
      {
        id: "eng4-dialogue-marche",
        titre: "Lire un dialogue au marché",
        blocs: [
          {
            type: "texte",
            titre: "Acheter des mangues",
            texte: "Customer: Good morning. I'd like three mangoes, please.\nSeller: Good morning. Here you are.\nCustomer: How much are they?\nSeller: They're three thousand ariary.\nCustomer: Thank you.\nSeller: You're welcome.\n\nTraduction :\nClient : Bonjour. Je voudrais trois mangues, s'il vous plaît.\nVendeur : Bonjour. Les voici.\nClient : Combien coûtent-elles ?\nVendeur : Elles coûtent trois mille ariary.\nClient : Merci.\nVendeur : De rien."
          },
          {
            type: "methode",
            titre: "Comprendre le dialogue",
            texte: "1. Repère le produit : mangoes.\n2. Cherche la quantité : three.\n3. Repère la question sur le prix : How much are they?\n4. Cherche la réponse : three thousand ariary.\n5. Note les mots de politesse : please et thank you."
          },
          {
            type: "remarque",
            titre: "Prix fictif",
            texte: "Dans ce dialogue inventé, les trois mangues coûtent 3 000 ariary au total. Ce n'est pas une indication de prix réel."
          }
        ]
      },
      {
        id: "eng4-bilan-marche",
        titre: "Bilan : faire un achat",
        blocs: [
          {
            type: "methode",
            titre: "Au marché",
            texte: "1. Salue : Good morning.\n2. Demande le produit : I'd like two bananas, please.\n3. Demande le prix : How much are they?\n4. Écoute le prix : They're ... ariary.\n5. Remercie : Thank you."
          },
          {
            type: "exemple",
            titre: "Un achat fictif",
            texte: "I'd like a pineapple, please. How much is it?\nIt's two thousand ariary.\nThank you.\n\nJe voudrais un ananas, s'il vous plaît. Combien coûte-t-il ?\nIl coûte deux mille ariary.\nMerci."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Traduis en français :\n1. a market\n2. a customer\n3. a seller\n4. a price",
        correction: "1. un marché\n2. un client / une cliente\n3. un vendeur / une vendeuse\n4. un prix"
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris ces nombres en anglais :\n1. 100\n2. 500\n3. 1 000\n4. 2 000",
        correction: "1. one hundred\n2. five hundred\n3. one thousand\n4. two thousand"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète avec is ou are :\n1. How much ... this mango?\n2. How much ... these bananas?\n3. How much ... a kilo of rice?\n4. How much ... the eggs?",
        correction: "1. How much is this mango?\n2. How much are these bananas?\n3. How much is a kilo of rice?\n4. How much are the eggs?\n\nOn utilise is pour une chose au singulier et are pour plusieurs choses."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Traduis en anglais :\n1. Je voudrais un kilo de riz, s'il vous plaît.\n2. Combien coûte cet ananas ?\n3. Merci.",
        correction: "1. I'd like a kilo of rice, please. / I would like a kilo of rice, please.\n2. How much is this pineapple?\n3. Thank you. / Thanks."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Complète le dialogue avec : like, much, thousand.\n\nCustomer: I'd ... two mangoes, please.\nSeller: Here you are.\nCustomer: How ... are they?\nSeller: They're two ... ariary.",
        correction: "Customer: I'd like two mangoes, please.\nSeller: Here you are.\nCustomer: How much are they?\nSeller: They're two thousand ariary.\n\nI'd like sert à demander poliment. How much are they? demande ici le prix des deux mangues."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Prix fictif : un kilo de tomates coûte 3 000 ariary. Réponds :\n1. Combien coûtent deux kilos ?\n2. Écris ce prix total en anglais.",
        correction: "1. Deux kilos coûtent 3 000 × 2 = 6 000 ariary.\n2. Six thousand ariary.\n\nOn peut aussi écrire : They cost six thousand ariary. — Ils coûtent six mille ariary."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Lis le dialogue puis réponds en anglais :\n\nCustomer: I'd like three bananas, please.\nSeller: Here you are.\nCustomer: How much are they?\nSeller: They're two thousand ariary.\n\n1. What does the customer want?\n2. How much are the bananas?",
        correction: "1. The customer wants three bananas.\n2. They're two thousand ariary.\n\nLe prix indiqué est celui des trois bananes dans ce dialogue fictif."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Écris un court dialogue au marché. Le client demande poliment deux oranges, demande leur prix et remercie le vendeur. Invente un prix en ariary.",
        correction: "Exemple :\nCustomer: Good morning. I'd like two oranges, please.\nSeller: Here you are.\nCustomer: How much are they?\nSeller: They're two thousand ariary.\nCustomer: Thank you.\nSeller: You're welcome.\n\nD'autres réponses sont possibles. Le prix est fictif. Comme il s'agit de deux oranges, on utilise are dans la question et they're dans la réponse."
      }
    ]
  }
]);

// ===== FIN DU FICHIER eng-ch8.js =====
