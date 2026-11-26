enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch14",
    titre: "Chapitre 14 : Générateurs, récepteurs et bilans électriques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch14-circuit",
        titre: "1. Courant et tension dans un circuit",
        blocs: [
          {
            type: "introduction",
            titre: "Une chaîne de transferts d’énergie",
            texte: "Dans un circuit fermé, un générateur peut fournir de l’énergie électrique à un récepteur. Celui-ci la transforme en d’autres formes d’énergie, par exemple en mouvement, en lumière ou en énergie thermique."
          },
          {
            type: "definition",
            titre: "Intensité du courant",
            texte: "L’intensité I mesure le débit de charge électrique : pour un courant constant, I = Δq/Δt. Elle s’exprime en ampères (A), la charge en coulombs (C) et la durée en secondes (s)."
          },
          {
            type: "definition",
            titre: "Tension",
            texte: "La tension UAB = VA − VB mesure une différence de potentiel entre deux points. Elle s’exprime en volts (V). L’intensité et la tension sont deux grandeurs différentes."
          },
          {
            type: "regle",
            titre: "Sens conventionnel du courant",
            texte: "Le sens conventionnel du courant est celui du déplacement des charges positives. Dans les fils métalliques, les électrons se déplacent globalement en sens opposé. À l’extérieur d’un générateur qui débite, le courant conventionnel va de sa borne positive vers sa borne négative."
          },
          {
            type: "schema",
            titre: "Circuit simple en fonctionnement",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 240' role='img' aria-label='Circuit fermé comprenant un générateur à gauche et un récepteur à droite. Le courant conventionnel sort de la borne positive du générateur, traverse le récepteur puis revient à la borne négative.'><path d='M150 70 H260 M360 70 H470 V190 H150 V145 M150 105 V70' fill='none' stroke='#222' stroke-width='3'/><rect x='260' y='50' width='100' height='40' fill='white' stroke='#222' stroke-width='3'/><text x='310' y='76' text-anchor='middle' font-size='16'>récepteur</text><circle cx='150' cy='125' r='20' fill='white' stroke='#222' stroke-width='3'/><text x='150' y='131' text-anchor='middle' font-size='14'>G</text><text x='123' y='108' font-size='17'>+</text><text x='123' y='151' font-size='17'>−</text><line x1='185' y1='70' x2='235' y2='70' stroke='#267' stroke-width='3'/><polygon points='235,70 223,63 223,77' fill='#267'/><text x='210' y='54' text-anchor='middle' font-size='17'>I</text><text x='310' y='220' text-anchor='middle' font-size='15'>Le courant traverse successivement les deux dipôles.</text></svg>",
            legende: "Le générateur débite : le courant sort par sa borne positive et traverse le récepteur dans le circuit extérieur."
          },
          {
            type: "remarque",
            titre: "Charge transportée",
            texte: "Pour une intensité constante I pendant une durée Δt, la charge transportée est Δq = IΔt. Ce résultat ne doit pas être confondu avec l’énergie électrique."
          }
        ]
      },

      {
        id: "sp1-ch14-puissance",
        titre: "2. Puissance et énergie électriques",
        blocs: [
          {
            type: "definition",
            titre: "Puissance électrique",
            texte: "La puissance électrique correspond à une énergie transférée par unité de temps. Pour un dipôle soumis à une tension U et traversé par un courant I constants, sa valeur est P = UI, à condition d’utiliser une convention de signes cohérente."
          },
          {
            type: "regle",
            titre: "Énergie transférée",
            texte: "Si la puissance P est constante pendant une durée Δt, l’énergie transférée vaut W = PΔt = UIΔt. Avec U en V, I en A et Δt en s, W est en joules. La puissance s’exprime en watts (W)."
          },
          {
            type: "definition",
            titre: "Conventions récepteur et générateur",
            texte: "En convention récepteur, la tension est orientée en sens opposé au courant sur le schéma : P = UI représente la puissance électrique reçue. En convention générateur, tension et courant sont orientés dans le même sens : P = UI représente la puissance électrique fournie."
          },
          {
            type: "schema",
            titre: "Conventions d’orientation",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 240' role='img' aria-label='En convention récepteur, la flèche de tension est opposée à celle du courant. En convention générateur, les deux flèches ont le même sens.'><text x='155' y='28' text-anchor='middle' font-size='18'>Convention récepteur</text><rect x='80' y='95' width='150' height='45' fill='white' stroke='#222' stroke-width='3'/><line x1='60' y1='75' x2='245' y2='75' stroke='#267' stroke-width='3'/><polygon points='245,75 233,68 233,82' fill='#267'/><text x='155' y='62' text-anchor='middle' font-size='16'>I</text><line x1='245' y1='165' x2='60' y2='165' stroke='#a33' stroke-width='3'/><polygon points='60,165 72,158 72,172' fill='#a33'/><text x='155' y='190' text-anchor='middle' font-size='16'>U</text><text x='465' y='28' text-anchor='middle' font-size='18'>Convention générateur</text><rect x='390' y='95' width='150' height='45' fill='white' stroke='#222' stroke-width='3'/><line x1='370' y1='75' x2='555' y2='75' stroke='#267' stroke-width='3'/><polygon points='555,75 543,68 543,82' fill='#267'/><text x='465' y='62' text-anchor='middle' font-size='16'>I</text><line x1='370' y1='165' x2='555' y2='165' stroke='#a33' stroke-width='3'/><polygon points='555,165 543,158 543,172' fill='#a33'/><text x='465' y='190' text-anchor='middle' font-size='16'>U</text></svg>",
            legende: "Les flèches fixent les sens de référence. Une puissance calculée négative indique un transfert réel opposé à celui que décrit la convention choisie."
          },
          {
            type: "exemple",
            titre: "Énergie reçue",
            texte: "Un récepteur reçoit une puissance constante sous une tension de 12 V et une intensité de 0,50 A. P = UI = 12 × 0,50 = 6,0 W. En 5 minutes, soit 300 s, il reçoit W = 6,0 × 300 = 1 800 J."
          },
          {
            type: "remarque",
            titre: "Kilowattheure",
            texte: "Le kilowattheure (kWh) est une unité d’énergie, non de puissance. Une puissance de 1 kW maintenue pendant 1 h correspond à 1 kWh, soit 3,6 × 10⁶ J."
          }
        ]
      },

      {
        id: "sp1-ch14-generateur",
        titre: "3. Générateur réel",
        blocs: [
          {
            type: "definition",
            titre: "Modèle linéaire",
            texte: "Un générateur réel peut être modélisé par une force électromotrice E, exprimée en volts, et une résistance interne r, exprimée en ohms (Ω). Lorsqu’il débite un courant I, sa tension aux bornes est U = E − rI."
          },
          {
            type: "regle",
            titre: "Bilan de puissance du générateur",
            texte: "Pour ce modèle en fonctionnement générateur : EI = UI + rI². La puissance EI est fournie par les transformations internes du générateur ; UI est transmise au circuit extérieur et rI² est dissipée par effet Joule dans la résistance interne."
          },
          {
            type: "exemple",
            titre: "Tension et bilan",
            texte: "Un générateur de force électromotrice E = 12 V et de résistance interne r = 1,0 Ω débite I = 2,0 A. Sa tension est U = 12 − 1,0 × 2,0 = 10 V. Il fournit au circuit extérieur UI = 20 W. Les pertes internes valent rI² = 4 W. Le bilan est EI = 24 W = 20 W + 4 W."
          },
          {
            type: "remarque",
            titre: "À vide",
            texte: "Dans ce modèle, si le courant est nul, U = E. Une mesure à vide fournit donc, idéalement, la force électromotrice du générateur."
          }
        ]
      },

      {
        id: "sp1-ch14-recepteur",
        titre: "4. Récepteur et rendement",
        blocs: [
          {
            type: "definition",
            titre: "Récepteur résistif",
            texte: "Un conducteur ohmique de résistance R vérifie U = RI en convention récepteur. Il transforme l’énergie électrique reçue en énergie thermique par effet Joule. Sa puissance reçue vaut P = UI = RI² = U²/R."
          },
          {
            type: "definition",
            titre: "Récepteur actif : modèle d’un moteur",
            texte: "Dans un modèle simple de moteur en fonctionnement, la tension à ses bornes est U = E′ + r′I, en convention récepteur. E′ est sa force contre-électromotrice et r′ sa résistance interne. Elles s’expriment respectivement en volts et en ohms."
          },
          {
            type: "regle",
            titre: "Bilan du moteur",
            texte: "En multipliant U = E′ + r′I par I, on obtient UI = E′I + r′I². Dans ce modèle simplifié, UI est la puissance électrique reçue, E′I la puissance convertie en énergie mécanique et r′I² la puissance dissipée par effet Joule. Des pertes mécaniques supplémentaires peuvent exister dans un moteur réel."
          },
          {
            type: "definition",
            titre: "Rendement",
            texte: "Le rendement η est le rapport entre la puissance utile et la puissance reçue : η = Putile/Preçue. Il est sans unité et s’exprime souvent en pourcentage. Les puissances doivent être définies pour le système étudié."
          },
          {
            type: "exemple",
            titre: "Bilan et rendement d’un moteur",
            texte: "Un moteur reçoit 10 V sous 2,0 A. Dans le modèle considéré, sa résistance interne est r′ = 1,0 Ω et la puissance mécanique convertie est assimilée à la puissance utile. Puissance reçue : UI = 20 W. Pertes Joule : r′I² = 4 W. Puissance utile : 20 − 4 = 16 W. Rendement : η = 16/20 = 0,80, soit 80 %."
          },
          {
            type: "methode",
            titre: "Établir un bilan",
            texte: "1. Identifier le système étudié et préciser s’il fournit ou reçoit de l’énergie. 2. Calculer la puissance électrique UI avec les conventions indiquées. 3. Calculer les pertes données, notamment RI². 4. Utiliser la conservation de l’énergie pour trouver la puissance recherchée. 5. Pour un rendement, diviser la puissance utile par la puissance reçue."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ne court-circuite jamais une pile ou un générateur et ne manipule pas les installations électriques du secteur. Les calculs de ce chapitre sont des modèles à étudier sans montage personnel."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un courant constant de 0,20 A traverse un dipôle pendant 30 s. Calcule la charge électrique transportée.",
        correction: "Δq = IΔt = 0,20 × 30 = 6,0 C."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un appareil reçoit une tension de 6,0 V sous une intensité de 0,50 A. Calcule la puissance électrique reçue.",
        correction: "P = UI = 6,0 × 0,50 = 3,0 W."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un récepteur reçoit une puissance constante de 8,0 W pendant 2,0 minutes. Calcule l’énergie électrique reçue en joules.",
        correction: "La durée est 2,0 × 60 = 120 s. L’énergie reçue est W = PΔt = 8,0 × 120 = 960 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un générateur de force électromotrice E = 9,0 V et de résistance interne r = 0,50 Ω débite un courant de 2,0 A. Calcule sa tension aux bornes.",
        correction: "U = E − rI = 9,0 − 0,50 × 2,0 = 8,0 V."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un conducteur ohmique de résistance R = 15 Ω est traversé par un courant constant I = 0,40 A pendant 5,0 minutes. Calcule sa tension, la puissance dissipée par effet Joule et l’énergie dissipée.",
        correction: "U = RI = 15 × 0,40 = 6,0 V. P = RI² = 15 × 0,40² = 2,4 W. La durée vaut 300 s, donc W = PΔt = 2,4 × 300 = 720 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un générateur réel a E = 12 V et r = 0,50 Ω. Il débite un courant de 2,0 A. Calcule sa tension, la puissance transmise au circuit extérieur et la puissance dissipée dans sa résistance interne. Vérifie le bilan.",
        correction: "U = 12 − 0,50 × 2,0 = 11 V. Puissance transmise : UI = 11 × 2,0 = 22 W. Pertes internes : rI² = 0,50 × 2,0² = 2,0 W. La puissance fournie par les transformations internes est EI = 12 × 2,0 = 24 W. On vérifie : 24 = 22 + 2 W."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un moteur est modélisé par U = E′ + r′I. Il reçoit une tension U = 12 V et un courant I = 2,0 A ; sa résistance interne vaut r′ = 1,0 Ω. Calcule E′, la puissance électrique reçue, les pertes Joule et la puissance mécanique convertie. En assimilant cette dernière à la puissance utile, calcule le rendement.",
        correction: "E′ = U − r′I = 12 − 1,0 × 2,0 = 10 V. La puissance reçue est UI = 24 W. Les pertes Joule valent r′I² = 1,0 × 2,0² = 4,0 W. La puissance mécanique convertie vaut E′I = 10 × 2,0 = 20 W. Le bilan donne bien 24 = 20 + 4 W. Le rendement demandé est η = 20/24 ≈ 0,83, soit environ 83 %."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un générateur de force électromotrice E = 10 V et de résistance interne r = 1,0 Ω alimente un conducteur ohmique R = 4,0 Ω. Le courant constant dans cette boucle vaut I = 2,0 A. Calcule la tension aux bornes du générateur, la puissance reçue par le conducteur et les pertes internes du générateur. Quelle fraction de la puissance EI est transmise au conducteur ?",
        correction: "La tension du générateur est U = E − rI = 10 − 1,0 × 2,0 = 8,0 V. Le conducteur reçoit P = UI = 8,0 × 2,0 = 16 W, ce qui correspond aussi à RI² = 4,0 × 2,0² = 16 W. Les pertes internes valent rI² = 1,0 × 2,0² = 4,0 W. La puissance EI vaut 10 × 2,0 = 20 W. La fraction transmise est 16/20 = 0,80, soit 80 %."
      }
    ]
  }
]);
