// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-masse",
    titre: "Chapitre 2 : La masse d'un objet",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-masse-def",
        titre: "Qu'est-ce que la masse ?",
        blocs: [
          {
            type: "exemple",
            titre: "Le riz au marché",
            texte: "Au marché d'Anosibe, le vendeur verse le riz sur le plateau de sa balance. Il mesure la masse du riz."
          },
          {
            type: "definition",
            titre: "La masse",
            texte: "La masse d'un objet est la quantité de matière que cet objet contient. On la note m."
          },
          {
            type: "regle",
            titre: "L'instrument de mesure",
            texte: "La masse se mesure avec une balance. Il existe plusieurs types de balances."
          },
          {
            type: "tableau",
            titre: "Quelques balances",
            entetes: ["Balance", "Où on la voit"],
            lignes: [
              ["Balance de Roberval", "Au laboratoire du collège"],
              ["Balance alimentaire", "Au marché, chez l'épicier"],
              ["Balance mécanique", "À la maison ou au dispensaire (CSB)"],
              ["Balance à plateforme", "Pour les gros sacs de riz ou de charbon"],
              ["Balance romaine", "Suspendue au marché, avec un crochet"]
            ]
          },
          {
            type: "schema",
            titre: "La balance de Roberval",
            svg: "<svg viewBox='0 0 320 140' xmlns='http://www.w3.org/2000/svg'><rect x='120' y='122' width='80' height='8' fill='#475569'/><rect x='155' y='48' width='10' height='76' fill='#64748b'/><rect x='60' y='42' width='200' height='6' fill='#475569'/><circle cx='160' cy='45' r='5' fill='#1e3a5f'/><line x1='80' y1='48' x2='68' y2='78' stroke='#475569' stroke-width='2'/><line x1='80' y1='48' x2='92' y2='78' stroke='#475569' stroke-width='2'/><ellipse cx='80' cy='80' rx='32' ry='6' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><rect x='60' y='52' width='40' height='26' rx='7' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><line x1='240' y1='48' x2='228' y2='78' stroke='#475569' stroke-width='2'/><line x1='240' y1='48' x2='252' y2='78' stroke='#475569' stroke-width='2'/><ellipse cx='240' cy='80' rx='32' ry='6' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><path d='M230 80 L234 62 L246 62 L250 80 Z' fill='#475569'/><rect x='236' y='56' width='8' height='6' fill='#475569'/><text x='80' y='102' text-anchor='middle' font-size='11' fill='#1e3a5f'>Le riz</text><text x='240' y='102' text-anchor='middle' font-size='11' fill='#1e3a5f'>Les poids</text></svg>",
            legende: "La balance compare la masse de l'objet à des masses connues : les poids."
          },
          {
            type: "remarque",
            titre: "Le mot de la vie courante",
            texte: "Au marché, on dit « peser le riz ». En sciences physiques, on dit « mesurer la masse du riz »."
          }
        ]
      },
      {
        id: "sp6-masse-unites",
        titre: "Les unités de masse",
        blocs: [
          {
            type: "definition",
            titre: "L'unité légale",
            texte: "L'unité légale de la masse est le kilogramme, de symbole kg."
          },
          {
            type: "exemple",
            titre: "Des masses autour de toi",
            texte: "Un paquet de sucre : 1 kg.\nUn sac de riz : 50 kg.\nUn comprimé de médicament : quelques centaines de milligrammes.\nUn camion chargé d'arachides : plusieurs tonnes."
          },
          {
            type: "regle",
            titre: "À retenir par cœur",
            texte: "1 t = 1 000 kg\n1 q = 100 kg\n1 kg = 1 000 g\n1 g = 1 000 mg"
          },
          {
            type: "tableau",
            titre: "Les unités et leur nom",
            entetes: ["Symbole", "Nom"],
            lignes: [
              ["t", "Tonne"],
              ["q", "Quintal"],
              ["kg", "Kilogramme"],
              ["hg", "Hectogramme"],
              ["dag", "Décagramme"],
              ["g", "Gramme"],
              ["dg", "Décigramme"],
              ["cg", "Centigramme"],
              ["mg", "Milligramme"]
            ]
          },
          {
            type: "remarque",
            titre: "L'unité du quotidien",
            texte: "À Madagascar, le riz s'achète souvent au kapoaka ou au kilo : le kilogramme est bien l'unité que tu croises tous les jours."
          }
        ]
      },
// ===== FIN MORCEAU 1/3 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-masse-conversions",
        titre: "Convertir les masses",
        blocs: [
          {
            type: "methode",
            titre: "La méthode du tableau",
            texte: "Pour convertir une masse, on la place dans le tableau des unités : un seul chiffre par colonne. Le chiffre des unités va dans la colonne de l'unité donnée.\nEnsuite, pour lire dans une autre unité : on complète avec des zéros, ou on place la virgule dans la nouvelle colonne."
          },
          {
            type: "tableau",
            titre: "Le tableau de conversion",
            entetes: ["t", "q", "", "kg", "hg", "dag", "g", "dg", "cg", "mg"],
            lignes: [
              ["", "", "", "3", "0", "0", "0", "", "", ""],
              ["", "", "", "", "4", "5", "0", "", "", ""]
            ]
          },
          {
            type: "exemple",
            titre: "Premier exemple",
            texte: "Convertir 3 kg en grammes.\nOn place le 3 dans la colonne kg. On complète avec des zéros jusqu'à la colonne g : 3 kg = 3 000 g."
          },
          {
            type: "exemple",
            titre: "Deuxième exemple",
            texte: "Convertir 450 g en kilogrammes.\nOn place 450 g : le 0 dans g, le 5 dans dag, le 4 dans hg. Pour lire en kg, on met la virgule dans la colonne kg : 450 g = 0,450 kg = 0,45 kg."
          },
          {
            type: "regle",
            titre: "Le sens des conversions",
            texte: "Vers la droite (unités plus petites) : le nombre devient plus grand, on ajoute des zéros.\nVers la gauche (unités plus grandes) : le nombre devient plus petit, la virgule se déplace à gauche."
          },
          {
            type: "remarque",
            titre: "Attention à la colonne vide",
            texte: "Entre q et kg, il y a une colonne sans nom : c'est la colonne des dizaines de kilogrammes. Exemple : 1 q = 100 kg. Le 1 est dans la colonne q, le premier zéro dans la colonne vide, le deuxième dans la colonne kg."
          }
        ]
      },
      {
        id: "sp6-masse-invariante",
        titre: "La masse est invariante",
        blocs: [
          {
            type: "definition",
            titre: "Une masse qui ne change pas",
            texte: "La masse d'un objet ne dépend pas du lieu où il se trouve. On dit que la masse est invariante."
          },
          {
            type: "exemple",
            titre: "Le sac de riz voyageur",
            texte: "Un sac de riz de 50 kg à Antananarivo a toujours une masse de 50 kg à Toamasina, dans l'avion, et même sur la Lune."
          },
          {
            type: "schema",
            titre: "La même masse partout",
            svg: "<svg viewBox='0 0 320 130' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='15' width='135' height='90' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><rect x='52' y='48' width='60' height='40' rx='10' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='82' y='72' text-anchor='middle' font-size='13' font-weight='bold' fill='#78350f'>50 kg</text><text x='82' y='100' text-anchor='middle' font-size='11' fill='#1e3a5f'>À Antananarivo</text><rect x='170' y='15' width='135' height='90' fill='#0f172a' stroke='#1e88e5' stroke-width='2'/><circle cx='282' cy='35' r='10' fill='#e2e8f0'/><rect x='207' y='48' width='60' height='40' rx='10' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='237' y='72' text-anchor='middle' font-size='13' font-weight='bold' fill='#78350f'>50 kg</text><text x='237' y='100' text-anchor='middle' font-size='11' fill='#ffffff'>Sur la Lune</text></svg>",
            legende: "La même quantité de matière, donc la même masse, partout."
          },
          {
            type: "remarque",
            titre: "Pourquoi ?",
            texte: "La masse est la quantité de matière. Le sac contient toujours les mêmes grains de riz, où qu'il soit : sa masse ne change pas."
          }
        ]
      }
// ===== FIN MORCEAU 2/3 — colle le morceau 3 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la masse d'un objet ? Avec quel instrument la mesure-t-on ?",
        correction: "La masse d'un objet est la quantité de matière que cet objet contient.\nOn la mesure avec une balance."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite trois types de balances et dis où on peut voir chacune d'elles.",
        correction: "Par exemple :\nLa balance de Roberval, au laboratoire du collège.\nLa balance alimentaire, au marché.\nLa balance à plateforme, pour les gros sacs.\n(Aussi acceptées : balance mécanique, balance romaine.)"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Recopie et complète :\n1 kg = ........ g\n1 g = ........ mg\n1 t = ........ kg",
        correction: "1 kg = 1 000 g\n1 g = 1 000 mg\n1 t = 1 000 kg"
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertis en utilisant le tableau des unités :\n1. 2,5 kg en g\n2. 750 g en kg\n3. 3,2 t en kg",
        correction: "1. 2,5 kg = 2 500 g (on complète avec des zéros jusqu'à la colonne g).\n2. 750 g = 0,75 kg (on place la virgule dans la colonne kg).\n3. 3,2 t = 3 200 kg."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Au marché, Mamy achète 500 g de tomates, 1,5 kg de riz et 250 g d'oignons.\nQuelle est la masse totale de ses achats, en kilogrammes ?",
        correction: "On convertit tout en kg : 500 g = 0,5 kg et 250 g = 0,25 kg.\nTotal : 0,5 + 1,5 + 0,25 = 2,25 kg.\nLes achats de Mamy ont une masse de 2,25 kg."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Range de la plus légère à la plus lourde :\n850 g ; 0,8 kg ; 1,2 kg ; 950 g.",
        correction: "On convertit tout en grammes : 0,8 kg = 800 g et 1,2 kg = 1 200 g.\nDonc : 800 g < 850 g < 950 g < 1 200 g,\nc'est-à-dire : 0,8 kg < 850 g < 950 g < 1,2 kg."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une vendeuse a 12 kg d'arachides le matin. Elle en vend 2 500 g le matin, puis 4,75 kg l'après-midi.\n1. Quelle masse totale a-t-elle vendue, en kg ?\n2. Quelle masse lui reste-t-il ?\n3. Un client veut acheter 6 kg. En aura-t-elle assez ?",
        correction: "1. 2 500 g = 2,5 kg. Total vendu : 2,5 + 4,75 = 7,25 kg.\n2. Reste : 12 - 7,25 = 4,75 kg.\n3. Non : 4,75 kg < 6 kg. Il lui manque 6 - 4,75 = 1,25 kg, soit 1 250 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Rakoto mesure la masse d'un sac de riz à Antananarivo : la balance indique 50 kg. Le sac voyage ensuite jusqu'à Toamasina, puis dans un avion.\n1. Quelle est la masse du sac à Toamasina ? Justifie ta réponse.\n2. Et si le sac était transporté sur la Lune ?\n3. Quelle propriété de la masse cet exemple illustre-t-il ?",
        correction: "1. 50 kg. Le sac contient toujours la même quantité de matière, donc sa masse ne change pas.\n2. Toujours 50 kg, même sur la Lune.\n3. La masse est invariante : elle ne dépend pas du lieu où se trouve l'objet."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch2.js =====
