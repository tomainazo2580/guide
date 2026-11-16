enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch3",
    titre: "Chapitre 3 : Nombres relatifs et repérage",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch3-lecon1",
        titre: "1. Découvrir les nombres relatifs",
        blocs: [
          {
            type: "texte",
            titre: "Pourquoi de nouveaux nombres ?",
            texte: "Les nombres positifs ne suffisent pas toujours pour décrire une situation. Par exemple, une température peut être au-dessus ou au-dessous de zéro."
          },
          {
            type: "exemple",
            titre: "Les températures",
            texte: "Une température de 4 °C est au-dessus de zéro. Une température de −3 °C est au-dessous de zéro. On lit −3 « moins trois »."
          },
          {
            type: "definition",
            titre: "Nombres relatifs",
            texte: "Les nombres relatifs comprennent les nombres positifs, les nombres négatifs et zéro. Par exemple : +5, −3, +2,4 et −0,7 sont des nombres relatifs."
          },
          {
            type: "texte",
            titre: "Positif ou négatif ?",
            texte: "Un nombre précédé du signe − est négatif : −6, −1,5. Un nombre précédé du signe + est positif : +6, +1,5. On peut supprimer le signe + : +6 s’écrit aussi 6."
          },
          {
            type: "remarque",
            titre: "Le cas de zéro",
            texte: "Zéro n’est ni strictement positif ni strictement négatif. Il sépare les nombres négatifs des nombres positifs sur une droite graduée."
          },
          {
            type: "exemple",
            titre: "Dans la vie courante",
            texte: "Si le rez-de-chaussée est noté 0, un étage au-dessus peut être noté +1 et un étage au-dessous −1. Le signe indique la position par rapport au niveau choisi."
          }
        ]
      },

      {
        id: "maths5-ch3-lecon2",
        titre: "2. Se repérer sur une droite graduée",
        blocs: [
          {
            type: "definition",
            titre: "Droite graduée",
            texte: "Une droite graduée possède une origine, généralement notée 0, une unité de longueur et un sens. Ici, les nombres augmentent de gauche à droite."
          },
          {
            type: "schema",
            titre: "Une droite graduée",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 105' role='img' aria-label='Droite graduée de moins quatre à quatre'><line x1='15' y1='40' x2='425' y2='40' stroke='#333' stroke-width='2'/><path d='M415 34l10 6-10 6' fill='none' stroke='#333' stroke-width='2'/><path d='M20 32v16 M70 32v16 M120 32v16 M170 32v16 M220 28v24 M270 32v16 M320 32v16 M370 32v16 M420 32v16' stroke='#333' stroke-width='2'/><g text-anchor='middle' font-size='17' fill='#222'><text x='20' y='78'>−4</text><text x='70' y='78'>−3</text><text x='120' y='78'>−2</text><text x='170' y='78'>−1</text><text x='220' y='78'>0</text><text x='270' y='78'>1</text><text x='320' y='78'>2</text><text x='370' y='78'>3</text><text x='420' y='78'>4</text></g></svg>",
            legende: "Les nombres négatifs sont à gauche de 0 et les nombres positifs sont à droite."
          },
          {
            type: "definition",
            titre: "Abscisse d’un point",
            texte: "Le nombre qui permet de repérer un point sur une droite graduée s’appelle son abscisse. Un point A placé sur la graduation −2 a pour abscisse −2. On peut noter A(−2)."
          },
          {
            type: "methode",
            titre: "Lire une abscisse",
            texte: "1. Repère l’origine 0. 2. Observe la valeur de chaque intervalle. 3. Regarde si le point est à gauche ou à droite de 0. 4. Lis sa graduation en conservant son signe."
          },
          {
            type: "exemple",
            titre: "Attention à l’unité",
            texte: "Si l’intervalle entre 0 et 1 est partagé en deux parts égales, chaque part vaut 0,5. Le point placé une part à gauche de 0 a pour abscisse −0,5."
          }
        ]
      },

      {
        id: "maths5-ch3-lecon3",
        titre: "3. Distance à zéro et nombres opposés",
        blocs: [
          {
            type: "definition",
            titre: "Distance à zéro",
            texte: "La distance à zéro d’un nombre est la distance entre le point qui représente ce nombre et l’origine. Une distance est toujours positive ou nulle."
          },
          {
            type: "exemple",
            titre: "Exemples",
            texte: "La distance à zéro de +3 est 3. La distance à zéro de −3 est également 3. La distance à zéro de 0 est 0."
          },
          {
            type: "definition",
            titre: "Nombres opposés",
            texte: "Deux nombres sont opposés lorsqu’ils sont à la même distance de zéro, mais de part et d’autre de zéro. Par exemple, −4 et +4 sont opposés."
          },
          {
            type: "exemple",
            titre: "Trouver un opposé",
            texte: "L’opposé de +7 est −7. L’opposé de −2,5 est +2,5. L’opposé de 0 est 0."
          },
          {
            type: "remarque",
            titre: "Signe et distance",
            texte: "Pour un nombre non nul, son opposé a la même distance à zéro et le signe contraire. Attention : l’opposé de −6 est +6, pas −6."
          }
        ]
      },

      {
        id: "maths5-ch3-lecon4",
        titre: "4. Comparer des nombres relatifs",
        blocs: [
          {
            type: "regle",
            titre: "Sur la droite graduée",
            texte: "Sur une droite graduée où les nombres augmentent de gauche à droite, un nombre est inférieur à celui qui se trouve à sa droite."
          },
          {
            type: "exemple",
            titre: "Lire la comparaison",
            texte: "Sur la droite, −4 est à gauche de −2. Donc −4 < −2. De même, −1 < 2."
          },
          {
            type: "regle",
            titre: "Nombres de signes différents",
            texte: "Tout nombre négatif strict est inférieur à 0. Tout nombre positif strict est supérieur à 0. Un nombre négatif strict est donc toujours inférieur à un nombre positif strict."
          },
          {
            type: "exemple",
            titre: "Comparer −8 et +2",
            texte: "−8 < +2. Il n’est pas nécessaire de comparer 8 et 2 : le premier nombre est négatif et le second est positif."
          },
          {
            type: "regle",
            titre: "Deux nombres négatifs",
            texte: "Entre deux nombres négatifs, celui qui est le plus éloigné de zéro est le plus petit."
          },
          {
            type: "exemple",
            titre: "Comparer −7 et −3",
            texte: "−7 est plus éloigné de zéro que −3. Il est donc plus à gauche sur la droite graduée : −7 < −3. Pour les températures, −7 °C est plus froid que −3 °C."
          },
          {
            type: "remarque",
            titre: "Piège fréquent",
            texte: "Même si 7 > 3, on a −7 < −3. Le signe moins change la position des nombres par rapport à zéro."
          }
        ]
      },

      {
        id: "maths5-ch3-lecon5",
        titre: "5. Ranger et encadrer",
        blocs: [
          {
            type: "definition",
            titre: "Ordre croissant et ordre décroissant",
            texte: "Ranger dans l’ordre croissant, c’est aller du plus petit au plus grand. Ranger dans l’ordre décroissant, c’est aller du plus grand au plus petit."
          },
          {
            type: "methode",
            titre: "Ranger des nombres relatifs",
            texte: "Pour l’ordre croissant : 1. Place mentalement les nombres sur une droite graduée. 2. Commence par le plus à gauche. 3. Termine par le plus à droite. Les négatifs viennent avant zéro et les positifs après."
          },
          {
            type: "exemple",
            titre: "Un rangement",
            texte: "Dans l’ordre croissant : −5 < −2 < 0 < +1 < +4. Dans l’ordre décroissant, on inverse l’ordre : +4 > +1 > 0 > −2 > −5."
          },
          {
            type: "definition",
            titre: "Encadrer",
            texte: "Encadrer un nombre consiste à trouver un nombre plus petit et un nombre plus grand. Par exemple : −3 < −2,4 < −2."
          },
          {
            type: "exemple",
            titre: "Un encadrement négatif",
            texte: "Le nombre −1,5 se trouve entre −2 et −1 : −2 < −1,5 < −1. Sur la droite graduée, il est au milieu de ces deux nombres."
          }
        ]
      },

      {
        id: "maths5-ch3-lecon6",
        titre: "6. Utiliser les nombres relatifs",
        blocs: [
          {
            type: "exemple",
            titre: "Températures",
            texte: "Le matin, il fait −2 °C. L’après-midi, il fait +3 °C. La température de l’après-midi est plus élevée : −2 < +3."
          },
          {
            type: "exemple",
            titre: "Étages",
            texte: "Dans un bâtiment, le niveau 0 est le rez-de-chaussée. Le niveau −2 est deux étages sous le rez-de-chaussée ; le niveau +3 est trois étages au-dessus."
          },
          {
            type: "exemple",
            titre: "Altitude",
            texte: "Si le niveau de la mer est choisi comme niveau 0, une altitude de +120 m se situe 120 m au-dessus de ce niveau. Une altitude de −10 m se situe 10 m au-dessous."
          },
          {
            type: "methode",
            titre: "Comprendre une situation",
            texte: "1. Repère ce que représente zéro. 2. Identifie le sens positif choisi. 3. Utilise le signe moins pour les positions situées de l’autre côté de zéro."
          },
          {
            type: "remarque",
            titre: "Le niveau de référence",
            texte: "Le signe dépend du niveau choisi comme zéro. Il faut donc toujours lire l’énoncé pour savoir ce que représente l’origine."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Parmi −5 ; +3 ; 0 ; −1,2 ; 7, donne les nombres négatifs stricts et les nombres positifs stricts.",
        correction: "Nombres négatifs stricts : −5 et −1,2. Nombres positifs stricts : +3 et 7. Zéro n’est ni strictement positif ni strictement négatif."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris avec un signe : a) une température de 4 °C au-dessous de zéro ; b) un étage situé 2 niveaux au-dessus du rez-de-chaussée.",
        correction: "a) −4 °C. b) +2."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donne l’opposé de chacun des nombres : +8 ; −3 ; 0 ; −1,5.",
        correction: "Les opposés sont respectivement −8 ; +3 ; 0 ; +1,5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est la distance à zéro de −6 ? Et celle de +6 ?",
        correction: "Les deux nombres sont à une distance de 6 unités de zéro."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur une droite graduée en unités, un point A se trouve 3 unités à gauche de 0 et un point B se trouve 2 unités à droite de 0. Donne leurs abscisses.",
        correction: "A a pour abscisse −3 et B a pour abscisse +2. On peut noter A(−3) et B(+2)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète avec < ou > : a) −4 … +1 ; b) 0 … −6 ; c) +3 … 0.",
        correction: "a) −4 < +1 ; b) 0 > −6 ; c) +3 > 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Compare : a) −2 et −5 ; b) −9 et −1.",
        correction: "a) −2 > −5, car −2 est plus proche de zéro. b) −9 < −1, car −9 est plus éloigné de zéro."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur une droite, l’intervalle entre 0 et 1 est partagé en 10 parts égales. Quelle est l’abscisse du point placé 4 parts à gauche de 0 ?",
        correction: "Chaque part vaut 0,1. Quatre parts à gauche de 0 correspondent à −0,4."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Range dans l’ordre croissant : +3 ; −4 ; 0 ; −1 ; +2.",
        correction: "−4 < −1 < 0 < +2 < +3."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Range dans l’ordre décroissant : −2,5 ; +1 ; −3 ; 0.",
        correction: "+1 > 0 > −2,5 > −3."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Encadre −3,4 entre deux entiers consécutifs.",
        correction: "−4 < −3,4 < −3. Le nombre −3,4 est à droite de −4 et à gauche de −3."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Le matin, il fait −5 °C dans une ville et −2 °C dans une autre. Dans quelle ville fait-il le plus froid ?",
        correction: "Il fait plus froid dans la première ville : −5 < −2."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un parking a deux niveaux sous le rez-de-chaussée, noté 0. Donne leurs numéros et indique lequel est le plus bas.",
        correction: "Les deux niveaux sont −1 et −2. Le niveau −2 est le plus bas."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un nombre est négatif et sa distance à zéro est 4,5. Quel est ce nombre ? Quel est son opposé ?",
        correction: "Le nombre est −4,5. Son opposé est +4,5."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Trouve tous les entiers relatifs strictement compris entre −3 et +2.",
        correction: "Les entiers cherchés sont −2, −1, 0 et +1. Les nombres −3 et +2 ne sont pas compris, car l’énoncé dit « strictement »."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève affirme : « −8 est plus grand que −3 parce que 8 est plus grand que 3. » Explique son erreur.",
        correction: "Sur une droite graduée, −8 est à gauche de −3. Il est donc plus petit : −8 < −3. Entre deux nombres négatifs, celui qui est le plus éloigné de zéro est le plus petit."
      }
    ]
  }
]);
