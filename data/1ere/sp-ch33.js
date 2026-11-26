enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch33",
    titre: "Chapitre 33 : Révision générale",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch33-mecanique",
        titre: "1. Mécanique : forces, mouvements et énergie",
        blocs: [
          {
            type: "methode",
            titre: "Étudier un mouvement",
            texte: "Choisir le système et le référentiel, puis représenter les forces extérieures. Dans un référentiel galiléen, la deuxième loi de Newton s’écrit ΣF = ma. Projeter ensuite les vecteurs sur un axe choisi, en conservant leurs signes."
          },
          {
            type: "regle",
            titre: "Poids et chute libre",
            texte: "Le poids est P = mg, dirigé verticalement vers le bas. En chute libre, si le poids est la seule force et si g est constant, l’accélération est g vers le bas. La vitesse et la position dépendent aussi des conditions initiales."
          },
          {
            type: "regle",
            titre: "Travail et énergie",
            texte: "Pour une force constante et un déplacement rectiligne : W = Fd cos(α). La variation d’énergie cinétique est égale à la somme des travaux des forces. Près de la surface terrestre, Epp = mgh et Ec = ½mv². Si seules des forces conservatives travaillent, l’énergie mécanique Em = Ec + Epp se conserve."
          },
          {
            type: "regle",
            titre: "Rotation autour d’un axe fixe",
            texte: "La vitesse angulaire est ω = Δθ/Δt pour une rotation uniforme. Le moment d’une force par rapport à un axe mesure son effet de rotation. Dans le modèle à moment d’inertie constant : ΣM = Jα et Ec,rotation = ½Jω²."
          },
          {
            type: "remarque",
            titre: "Vérifier les hypothèses",
            texte: "Une énergie mécanique ne se conserve pas automatiquement : les frottements peuvent effectuer un travail. En rotation, il faut préciser l’axe et le sens positif des moments."
          }
        ]
      },

      {
        id: "sp1-ch33-thermique",
        titre: "2. Gaz parfaits et calorimétrie",
        blocs: [
          {
            type: "regle",
            titre: "Gaz parfait",
            texte: "L’équation d’état est pV = nRT, avec p en Pa, V en m³, n en mol, T en K et R = 8,31 J·mol⁻¹·K⁻¹. Convertir la température par T = θ + 273,15 lorsque θ est en °C."
          },
          {
            type: "regle",
            titre: "Énergie thermique échangée",
            texte: "Sans changement d’état, Q = mc(θf − θi), si c est constante. Q est positif pour un corps qui reçoit de l’énergie et négatif pour un corps qui en cède. Pour un changement d’état complet, |Q| = mL ; le signe dépend du sens du transfert."
          },
          {
            type: "methode",
            titre: "Bilan dans un calorimètre",
            texte: "À l’équilibre thermique, les corps en contact ont une température commune. Si les échanges avec l’extérieur sont négligeables et qu’aucun autre transfert d’énergie n’intervient, écrire ΣQ = 0. Inclure le calorimètre si sa capacité thermique n’est pas négligeable."
          }
        ]
      },

      {
        id: "sp1-ch33-electricite",
        titre: "3. Électricité",
        blocs: [
          {
            type: "regle",
            titre: "Champ, force et tension",
            texte: "La force sur une charge q est F = qE : son sens est celui du champ si q est positive et le sens opposé si q est négative. UAB = VA − VB. Dans un champ électrostatique, le travail de la force électrique de A vers B vaut W = qUAB."
          },
          {
            type: "regle",
            titre: "Circuits et puissance",
            texte: "En série, l’intensité est la même dans tous les dipôles. En dérivation, les branches reliées aux mêmes points ont la même tension. Pour un conducteur ohmique : U = RI et P = UI = RI². Pour une puissance constante, l’énergie transférée est W = PΔt."
          },
          {
            type: "regle",
            titre: "Générateur et condensateur",
            texte: "Pour un générateur réel qui débite : U = E − rI. Avec une résistance extérieure R seule en série : I = E/(R + r). Pour un condensateur idéal : qA = CUAB et l’énergie stockée vaut ½CU²."
          },
          {
            type: "remarque",
            titre: "Conventions et sécurité",
            texte: "Préciser les sens de référence des tensions et du courant avant d’interpréter une puissance. Ne court-circuite pas une pile et ne manipule pas un condensateur inconnu : il peut rester chargé."
          }
        ]
      },

      {
        id: "sp1-ch33-ondes",
        titre: "4. Ondes et lumière",
        blocs: [
          {
            type: "regle",
            titre: "Propagation",
            texte: "Pour une célérité constante : v = d/Δt. Pour une onde progressive périodique : f = 1/T et λ = v/f. Dans un problème d’écho, l’onde effectue un aller-retour : la distance à l’obstacle est d = vΔt/2."
          },
          {
            type: "regle",
            titre: "Réflexion et réfraction",
            texte: "Les angles sont mesurés par rapport à la normale. En réflexion, r = i. En réfraction, n1 sin(i) = n2 sin(t). Lors d’un passage vers un milieu d’indice plus faible, une réflexion totale est possible au-delà de l’angle limite."
          },
          {
            type: "schema",
            titre: "Angles au passage d’une surface",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 250' role='img' aria-label='Un rayon incident arrive sur une surface séparant deux milieux. Les angles d’incidence et de réfraction sont mesurés par rapport à la normale.'><rect x='20' y='125' width='560' height='110' fill='#e7f4ff'/><line x1='20' y1='125' x2='580' y2='125' stroke='#555' stroke-width='3'/><line x1='300' y1='15' x2='300' y2='235' stroke='#888' stroke-width='2' stroke-dasharray='6,5'/><line x1='210' y1='35' x2='300' y2='125' stroke='#267' stroke-width='3'/><polygon points='300,125 286,119 294,111' fill='#267'/><line x1='300' y1='125' x2='340' y2='225' stroke='#a33' stroke-width='3'/><polygon points='340,225 329,216 339,212' fill='#a33'/><text x='260' y='80' font-size='18'>i</text><text x='315' y='180' font-size='18'>t</text><text x='35' y='45' font-size='16'>milieu 1 : n1</text><text x='35' y='155' font-size='16'>milieu 2 : n2</text><text x='310' y='30' font-size='16'>normale</text></svg>",
            legende: "Dans cet exemple, le rayon se rapproche de la normale en entrant dans le milieu 2, d’indice supérieur."
          },
          {
            type: "regle",
            titre: "Diffraction et interférences",
            texte: "Pour une fente unique, aux petits angles, la largeur de la tache centrale est L ≈ 2Dλ/a, où a est la largeur de la fente. Pour deux fentes de Young séparées de a, l’interfrange est i = λD/a. Pour deux sources cohérentes en phase, δ = kλ donne un renforcement et δ = (k + ½)λ une atténuation."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ne regarde jamais directement le Soleil ni un faisceau laser."
          }
        ]
      },

      {
        id: "sp1-ch33-organique",
        titre: "5. Chimie organique",
        blocs: [
          {
            type: "tableau",
            titre: "Reconnaître quelques familles",
            entetes: ["Famille", "Caractéristique", "Exemple"],
            lignes: [
              ["Alcane à chaîne ouverte", "Liaisons simples ; CnH₂n₊₂", "Propane : C₃H₈"],
              ["Alcène à chaîne ouverte, une double liaison", "C=C ; CnH₂n", "Éthène : C₂H₄"],
              ["Alcyne à chaîne ouverte, une triple liaison", "C≡C ; CnH₂n₋₂", "Éthyne : C₂H₂"],
              ["Alcool", "Groupe –OH lié à un carbone saturé", "CH₃–CH₂–OH"],
              ["Aldéhyde", "Groupe –CHO", "CH₃–CHO"],
              ["Cétone", "Carbonyle entre deux carbones", "CH₃–CO–CH₃"],
              ["Acide carboxylique", "Groupe –COOH", "CH₃–COOH"],
              ["Ester", "Groupe –COO–", "CH₃–COO–CH₃"]
            ]
          },
          {
            type: "regle",
            titre: "Isomérie et transformations",
            texte: "Des isomères de constitution ont la même formule brute mais des enchaînements différents. Une isomérie Z/E est possible si chacun des carbones de C=C porte deux groupes différents. Le benzène C₆H₆ possède un cycle à électrons délocalisés. Une estérification s’écrit : acide carboxylique + alcool ⇌ ester + eau."
          },
          {
            type: "methode",
            titre: "Calculer une quantité de matière",
            texte: "Établir la formule brute, puis la masse molaire M en additionnant les masses molaires atomiques. Utiliser n = m/M avec des unités cohérentes. Dans une équation équilibrée, les coefficients donnent les rapports entre quantités de matière."
          }
        ]
      },

      {
        id: "sp1-ch33-redox",
        titre: "6. Oxydoréduction et engrais",
        blocs: [
          {
            type: "regle",
            titre: "Oxydation et réduction",
            texte: "Une oxydation est une perte d’électrons ; une réduction est un gain d’électrons. L’oxydant capte les électrons et se réduit. Le réducteur les cède et s’oxyde. Pour établir une équation globale, équilibrer les électrons entre les deux demi-équations."
          },
          {
            type: "regle",
            titre: "Potentiels et piles",
            texte: "Dans les conditions standards, l’oxydant du couple au potentiel standard le plus élevé peut réagir avec le réducteur du couple au potentiel le plus faible. Pour une pile : E°pile = E°cathode − E°anode. L’oxydation se produit à l’anode et la réduction à la cathode."
          },
          {
            type: "regle",
            titre: "Dosage et électrolyse",
            texte: "À l’équivalence d’un titrage, les quantités introduites respectent les coefficients de l’équation. Pour un courant constant : Q = IΔt et ne = Q/F, avec F ≈ 96 500 C·mol⁻¹. Utiliser ensuite la demi-équation pour relier les électrons à la quantité de matière formée."
          },
          {
            type: "regle",
            titre: "Lecture NPK",
            texte: "Les trois nombres d’une indication NPK représentent des pourcentages massiques déclarés en N, en équivalent P₂O₅ et en équivalent K₂O. Les deux derniers sont des conventions d’expression, pas nécessairement des masses d’oxydes purs présents."
          },
          {
            type: "remarque",
            titre: "Méthode générale",
            texte: "Lire les données, écrire la relation ou l’équation adaptée, convertir les unités, calculer puis vérifier la cohérence du résultat. Les exercices suivants sont des entraînements Guide, pas des épreuves officielles."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet de masse 2,0 kg est soumis à son poids. On prend g = 10 N·kg⁻¹. Calcule la valeur de son poids et indique sa direction et son sens.",
        correction: "P = mg = 2,0 × 10 = 20 N. Le poids est vertical, dirigé vers le bas."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Pour la réaction Zn → Zn²⁺ + 2 e⁻, indique si le zinc subit une oxydation ou une réduction. Justifie.",
        correction: "Le zinc cède deux électrons : il subit une oxydation et joue le rôle de réducteur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une masse de 0,20 kg d’eau se réchauffe de 20 °C à 30 °C sans changement d’état. On donne c = 4 180 J·kg⁻¹·K⁻¹. Calcule l’énergie Q reçue.",
        correction: "Q = mc(θf − θi) = 0,20 × 4 180 × 10 = +8 360 J. Le signe positif indique que l’eau reçoit de l’énergie."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une onde périodique se propage à 340 m·s⁻¹ avec une fréquence de 200 Hz. Calcule sa période et sa longueur d’onde.",
        correction: "T = 1/f = 1/200 = 0,0050 s. λ = v/f = 340/200 = 1,7 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un générateur de force électromotrice E = 12 V et de résistance interne r = 1,0 Ω alimente une résistance R = 5,0 Ω dans une boucle série. Calcule l’intensité, la tension du générateur et la puissance reçue par la résistance.",
        correction: "I = E/(R + r) = 12/6,0 = 2,0 A. U = E − rI = 12 − 1,0 × 2,0 = 10 V. La résistance reçoit P = UI = 10 × 2,0 = 20 W."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L’acide éthanoïque CH₃–COOH réagit avec l’éthanol CH₃–CH₂–OH pour former un ester et de l’eau. Écris l’équation, nomme l’ester et indique la formule brute de cet ester.",
        correction: "CH₃–COOH + CH₃–CH₂–OH ⇌ CH₃–COO–CH₂–CH₃ + H₂O. L’ester est l’éthanoate d’éthyle. Il contient quatre C, huit H et deux O : sa formule brute est C₄H₈O₂."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet de masse 0,50 kg est lâché sans vitesse initiale d’une hauteur de 5,0 m. On néglige les frottements et on prend g = 10 m·s⁻². Calcule son énergie potentielle initiale par rapport au sol, puis sa vitesse juste avant d’atteindre le sol.",
        correction: "Au départ, Epp = mgh = 0,50 × 10 × 5,0 = 25 J et Ec = 0. L’énergie mécanique se conserve. Juste avant le sol, Epp = 0 et ½mv² = 25 J. Donc v = √(2 × 25/0,50) = √100 = 10 m·s⁻¹."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "En milieu acide, la réaction de dosage est MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺. Un prélèvement de 20,0 mL d’une solution de Fe²⁺ est titré par une solution de MnO₄⁻ à 0,0200 mol·L⁻¹. Le volume à l’équivalence est 8,00 mL. Calcule la concentration en Fe²⁺.",
        correction: "À l’équivalence, n(MnO₄⁻) = 0,0200 × 0,00800 = 1,60 × 10⁻⁴ mol. D’après l’équation, n(Fe²⁺) = 5 × 1,60 × 10⁻⁴ = 8,00 × 10⁻⁴ mol. Donc C(Fe²⁺) = 8,00 × 10⁻⁴/0,0200 = 0,0400 mol·L⁻¹."
      }
    ]
  }
]);
