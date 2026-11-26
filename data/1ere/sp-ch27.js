enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch27",
    titre: "Chapitre 27 : Oxydoréduction : couples et équations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch27-transfert",
        titre: "1. Oxydation et réduction",
        blocs: [
          {
            type: "introduction",
            titre: "Un transfert d’électrons",
            texte: "Certaines transformations chimiques mettent en jeu un transfert d’électrons entre des espèces. Ce sont des réactions d’oxydoréduction."
          },
          {
            type: "definition",
            titre: "Oxydation",
            texte: "Une oxydation est une perte d’un ou plusieurs électrons par une espèce chimique."
          },
          {
            type: "definition",
            titre: "Réduction",
            texte: "Une réduction est un gain d’un ou plusieurs électrons par une espèce chimique."
          },
          {
            type: "definition",
            titre: "Oxydant et réducteur",
            texte: "Un oxydant est une espèce capable de capter des électrons : elle se réduit. Un réducteur est une espèce capable de céder des électrons : elle s’oxyde."
          },
          {
            type: "schema",
            titre: "Échange d’électrons",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 200' role='img' aria-label='Un réducteur cède des électrons et s’oxyde. Un oxydant capte ces électrons et se réduit.'><rect x='30' y='45' width='185' height='85' rx='8' fill='#ffe1cb' stroke='#a33'/><text x='122' y='78' text-anchor='middle' font-size='18'>Réducteur</text><text x='122' y='105' text-anchor='middle' font-size='16'>cède des électrons</text><line x1='230' y1='85' x2='415' y2='85' stroke='#222' stroke-width='3'/><polygon points='415,85 402,78 402,92' fill='#222'/><text x='322' y='68' text-anchor='middle' font-size='17'>électrons e⁻</text><rect x='430' y='45' width='185' height='85' rx='8' fill='#d9edff' stroke='#267'/><text x='522' y='78' text-anchor='middle' font-size='18'>Oxydant</text><text x='522' y='105' text-anchor='middle' font-size='16'>capte des électrons</text><text x='122' y='160' text-anchor='middle' font-size='16'>il s’oxyde</text><text x='522' y='160' text-anchor='middle' font-size='16'>il se réduit</text></svg>",
            legende: "Les électrons cédés par le réducteur sont captés par l’oxydant. Les deux transformations sont liées."
          },
          {
            type: "remarque",
            titre: "Un moyen de mémoriser",
            texte: "Oxydation : perte d’électrons. Réduction : gain d’électrons. Attention : l’oxydant, lui, subit une réduction ; le réducteur subit une oxydation."
          }
        ]
      },

      {
        id: "sp1-ch27-couples",
        titre: "2. Couples oxydant/réducteur",
        blocs: [
          {
            type: "definition",
            titre: "Couple redox",
            texte: "Un couple oxydant/réducteur, noté Ox/Red, réunit deux formes d’un même élément ou ensemble d’éléments qui peuvent être reliées par un échange d’électrons."
          },
          {
            type: "regle",
            titre: "Demi-équation électronique",
            texte: "Une demi-équation écrite dans le sens de la réduction prend la forme Ox + ne⁻ → Red, éventuellement avec d’autres espèces comme H⁺ ou H₂O pour équilibrer les atomes et les charges. Dans le sens inverse, Red s’oxyde."
          },
          {
            type: "tableau",
            titre: "Exemples de couples",
            entetes: ["Couple Ox/Red", "Demi-équation de réduction", "Interprétation"],
            lignes: [
              ["Cu²⁺/Cu", "Cu²⁺ + 2 e⁻ → Cu", "Cu²⁺ capte deux électrons."],
              ["Zn²⁺/Zn", "Zn²⁺ + 2 e⁻ → Zn", "Zn²⁺ capte deux électrons."],
              ["Fe³⁺/Fe²⁺", "Fe³⁺ + e⁻ → Fe²⁺", "Fe³⁺ capte un électron."]
            ]
          },
          {
            type: "exemple",
            titre: "Sens de l’oxydation",
            texte: "Pour le couple Zn²⁺/Zn, la réduction est Zn²⁺ + 2 e⁻ → Zn. Dans le sens inverse, l’oxydation est Zn → Zn²⁺ + 2 e⁻."
          },
          {
            type: "remarque",
            titre: "La position dans le couple compte",
            texte: "Dans l’écriture Ox/Red, l’oxydant est placé en premier et le réducteur en second. Une espèce peut être oxydante dans un couple et réductrice dans un autre."
          }
        ]
      },

      {
        id: "sp1-ch27-equations",
        titre: "3. Écrire une équation d’oxydoréduction",
        blocs: [
          {
            type: "methode",
            titre: "Associer deux demi-équations",
            texte: "1. Identifier l’oxydant et le réducteur qui réagissent. 2. Écrire la réduction de l’oxydant et l’oxydation du réducteur. 3. Multiplier les demi-équations si nécessaire pour que le nombre d’électrons cédés égale le nombre d’électrons captés. 4. Additionner et simplifier les électrons. 5. Vérifier la conservation des atomes et de la charge électrique."
          },
          {
            type: "exemple",
            titre: "Ions cuivre et zinc",
            texte: "Réduction : Cu²⁺ + 2 e⁻ → Cu. Oxydation : Zn → Zn²⁺ + 2 e⁻. En additionnant : Cu²⁺ + Zn → Cu + Zn²⁺. Les électrons ne figurent plus dans l’équation globale."
          },
          {
            type: "exemple",
            titre: "Nombres d’électrons différents",
            texte: "Réduction : Fe³⁺ + e⁻ → Fe²⁺. Oxydation : Cu → Cu²⁺ + 2 e⁻. On multiplie la première demi-équation par 2, puis on additionne : 2 Fe³⁺ + Cu → 2 Fe²⁺ + Cu²⁺. La charge totale est +6 des deux côtés."
          },
          {
            type: "remarque",
            titre: "Électrons dans le bilan global",
            texte: "Les électrons sont des intermédiaires d’écriture des demi-équations. Ils se simplifient dans l’équation globale d’une réaction entre l’oxydant et le réducteur."
          }
        ]
      },

      {
        id: "sp1-ch27-milieu-acide",
        titre: "4. Demi-équations en milieu acide",
        blocs: [
          {
            type: "methode",
            titre: "Équilibrer avec H₂O, H⁺ et e⁻",
            texte: "En milieu acide : 1. Équilibrer les éléments autres que H et O. 2. Équilibrer O en ajoutant H₂O. 3. Équilibrer H en ajoutant H⁺. 4. Équilibrer la charge en ajoutant des électrons. 5. Vérifier tous les atomes et la charge."
          },
          {
            type: "exemple",
            titre: "Couple MnO₄⁻/Mn²⁺",
            texte: "En milieu acide, la demi-équation de réduction est : MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O. À gauche comme à droite : un Mn, quatre O et huit H. La charge vaut +2 de chaque côté."
          },
          {
            type: "exemple",
            titre: "Réaction avec les ions fer(II)",
            texte: "Le permanganate MnO₄⁻ est réduit en Mn²⁺ : MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O. Le fer(II) est oxydé : Fe²⁺ → Fe³⁺ + e⁻. En multipliant la seconde équation par 5 : MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺."
          },
          {
            type: "remarque",
            titre: "Vérification",
            texte: "Dans l’équation globale précédente, la charge à gauche vaut −1 + 8 + 5 × 2 = +17 ; à droite, elle vaut +2 + 5 × 3 = +17."
          }
        ]
      },

      {
        id: "sp1-ch27-bilan",
        titre: "5. Quantités de matière",
        blocs: [
          {
            type: "regle",
            titre: "Utiliser les coefficients",
            texte: "Les coefficients de l’équation équilibrée indiquent les proportions de consommation et de formation des espèces. Pour une transformation supposée complète, ils permettent de déterminer le réactif limitant et les quantités finales."
          },
          {
            type: "exemple",
            titre: "Bilan simple",
            texte: "Pour Cu²⁺ + Zn → Cu + Zn²⁺, on introduit 0,10 mol de Cu²⁺ et 0,15 mol de Zn. Le rapport est 1:1 : Cu²⁺ est limitant si la réaction est complète. Il se forme 0,10 mol de Cu et il reste 0,05 mol de Zn."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les solutions oxydantes, les acides et certains sels métalliques peuvent être dangereux. Les réactions de ce chapitre sont étudiées sur le papier ; ne mélange pas de produits chimiques chez toi."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une espèce chimique capte des électrons. Subit-elle une oxydation ou une réduction ? Est-elle l’oxydant ou le réducteur ?",
        correction: "Elle gagne des électrons : elle subit une réduction. L’espèce qui capte les électrons est l’oxydant."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans le couple Fe³⁺/Fe²⁺, identifie l’oxydant et le réducteur. Écris la demi-équation dans le sens de la réduction.",
        correction: "Fe³⁺ est l’oxydant et Fe²⁺ le réducteur. La réduction est Fe³⁺ + e⁻ → Fe²⁺."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour le couple Zn²⁺/Zn, écris la demi-équation dans le sens de l’oxydation. Quelle espèce cède des électrons ?",
        correction: "Zn → Zn²⁺ + 2 e⁻. Le zinc Zn cède deux électrons par atome : il est le réducteur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne les demi-équations Cu²⁺ + 2 e⁻ → Cu et Zn → Zn²⁺ + 2 e⁻. Écris l’équation globale et identifie l’oxydant et le réducteur qui réagissent.",
        correction: "En additionnant : Cu²⁺ + Zn → Cu + Zn²⁺. Cu²⁺ capte les électrons : c’est l’oxydant. Zn les cède : c’est le réducteur."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On donne les demi-équations Fe³⁺ + e⁻ → Fe²⁺ et Cu → Cu²⁺ + 2 e⁻. Écris l’équation globale et vérifie la conservation des charges.",
        correction: "On multiplie la première demi-équation par 2 : 2 Fe³⁺ + 2 e⁻ → 2 Fe²⁺. Après addition : 2 Fe³⁺ + Cu → 2 Fe²⁺ + Cu²⁺. La charge est +6 à gauche et 2 × 2 + 2 = +6 à droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "En milieu acide, on donne la demi-équation MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O. Écris la demi-équation d’oxydation de Fe²⁺ en Fe³⁺, puis l’équation globale de réaction entre MnO₄⁻ et Fe²⁺.",
        correction: "Oxydation : Fe²⁺ → Fe³⁺ + e⁻. On la multiplie par 5 et on l’ajoute à la réduction : MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "La réaction supposée complète est Cu²⁺ + Zn → Cu + Zn²⁺. On introduit 0,12 mol d’ions Cu²⁺ et 0,20 mol de zinc. Détermine le réactif limitant, la quantité de cuivre formée et la quantité de zinc restante.",
        correction: "Les réactifs sont consommés dans le rapport 1:1. Cu²⁺ est limitant, car 0,12 < 0,20 mol. Il se forme 0,12 mol de Cu et il reste 0,20 − 0,12 = 0,08 mol de Zn."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "En milieu acide, les demi-équations sont Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O et Fe²⁺ → Fe³⁺ + e⁻. Écris l’équation globale. Si 0,020 mol de Cr₂O₇²⁻ réagit complètement avec un excès de Fe²⁺ et de H⁺, quelle quantité de Fe²⁺ est consommée ?",
        correction: "On multiplie l’oxydation du fer(II) par 6 : Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 7 H₂O + 6 Fe³⁺. Une mole de dichromate consomme 6 moles de Fe²⁺ ; 0,020 mol en consomme donc 0,120 mol."
      }
    ]
  }
]);
