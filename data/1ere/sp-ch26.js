enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch26",
    titre: "Chapitre 26 : Estérification et hydrolyse",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch26-esterification",
        titre: "1. Réaction d’estérification",
        blocs: [
          {
            type: "introduction",
            titre: "Former un ester",
            texte: "Un acide carboxylique et un alcool peuvent réagir pour former un ester et de l’eau. Cette transformation est appelée estérification."
          },
          {
            type: "regle",
            titre: "Équation générale",
            texte: "Acide carboxylique + alcool ⇌ ester + eau. Pour un acide R–COOH et un alcool R′–OH : R–COOH + R′–OH ⇌ R–COO–R′ + H₂O. Les coefficients de cette équation sont tous égaux à 1."
          },
          {
            type: "exemple",
            titre: "Acide éthanoïque et éthanol",
            texte: "CH₃–COOH + CH₃–CH₂–OH ⇌ CH₃–COO–CH₂–CH₃ + H₂O. L’ester formé est l’éthanoate d’éthyle."
          },
          {
            type: "methode",
            titre: "Prévoir le nom de l’ester",
            texte: "1. Repérer la partie provenant de l’acide : son nom donne la partie en -oate. 2. Repérer le groupe carboné de l’alcool : il donne le nom de l’alkyle. 3. Assembler les deux parties. Acide propanoïque + méthanol donnent ainsi du propanoate de méthyle."
          },
          {
            type: "remarque",
            titre: "Une écriture à comprendre",
            texte: "La double flèche indique que, dans les conditions considérées, la réaction directe et la réaction inverse peuvent se produire. Elle ne signifie pas que les deux sens avancent obligatoirement à la même vitesse dès le début."
          }
        ]
      },

      {
        id: "sp1-ch26-hydrolyse",
        titre: "2. Hydrolyse d’un ester",
        blocs: [
          {
            type: "definition",
            titre: "Hydrolyse",
            texte: "L’hydrolyse d’un ester par l’eau est la réaction inverse de l’estérification : ester + eau ⇌ acide carboxylique + alcool."
          },
          {
            type: "exemple",
            titre: "Hydrolyse de l’éthanoate d’éthyle",
            texte: "CH₃–COO–CH₂–CH₃ + H₂O ⇌ CH₃–COOH + CH₃–CH₂–OH. Les produits sont l’acide éthanoïque et l’éthanol."
          },
          {
            type: "methode",
            titre: "Retrouver les produits",
            texte: "Pour un ester R–COO–R′, la partie R–COO conduit à l’acide R–COOH et le groupe R′ lié à l’oxygène conduit à l’alcool R′–OH."
          },
          {
            type: "remarque",
            titre: "Deux sens d’une même transformation",
            texte: "L’estérification et l’hydrolyse par l’eau sont deux réactions inverses. À l’équilibre, elles continuent à se produire, mais leurs vitesses sont égales : les quantités macroscopiques ne varient plus."
          }
        ]
      },

      {
        id: "sp1-ch26-equilibre",
        titre: "3. Équilibre et influence des conditions",
        blocs: [
          {
            type: "definition",
            titre: "Transformation limitée",
            texte: "Une estérification n’est généralement pas totale : à l’équilibre, des réactifs et des produits peuvent être présents simultanément. La composition à l’équilibre dépend notamment des quantités initiales et des conditions."
          },
          {
            type: "schema",
            titre: "Évolution qualitative vers l’équilibre",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 290' role='img' aria-label='Graphique qualitatif des quantités au cours du temps : la quantité d’un réactif diminue puis se stabilise, tandis que celle d’un produit augmente puis se stabilise. Les courbes atteignent un plateau à l’équilibre.'><line x1='70' y1='230' x2='570' y2='230' stroke='#222' stroke-width='2'/><line x1='70' y1='230' x2='70' y2='40' stroke='#222' stroke-width='2'/><polygon points='570,230 558,224 558,236' fill='#222'/><polygon points='70,40 64,52 76,52' fill='#222'/><path d='M70 65 C150 65 180 155 300 160 C390 165 470 165 550 165' fill='none' stroke='#267' stroke-width='3'/><path d='M70 220 C150 220 180 105 300 100 C390 95 470 95 550 95' fill='none' stroke='#a33' stroke-width='3'/><text x='545' y='83' text-anchor='end' font-size='16'>produit</text><text x='545' y='153' text-anchor='end' font-size='16'>réactif</text><text x='575' y='252' font-size='16'>temps</text><text x='75' y='28' font-size='16'>quantité de matière</text><text x='310' y='280' text-anchor='middle' font-size='15'>Les hauteurs des plateaux ne sont pas nécessairement égales.</text></svg>",
            legende: "Dans cet exemple qualitatif, le réactif diminue et le produit augmente jusqu’à stabilisation. Les valeurs dépendent de la situation."
          },
          {
            type: "definition",
            titre: "Catalyseur",
            texte: "Un catalyseur accélère une transformation sans être consommé globalement au cours du bilan. Il accélère l’atteinte de l’équilibre mais ne modifie pas sa composition à température donnée."
          },
          {
            type: "regle",
            titre: "Modifier les proportions",
            texte: "À température donnée, utiliser un réactif en excès ou retirer progressivement un produit peut favoriser la formation d’ester à l’équilibre. Inversement, un excès d’eau favorise l’hydrolyse."
          },
          {
            type: "remarque",
            titre: "Rôle de la température",
            texte: "Chauffer peut accélérer l’atteinte de l’équilibre. L’effet d’une variation de température sur la composition à l’équilibre dépend de la réaction : on ne doit pas supposer que chauffer augmente toujours le rendement."
          }
        ]
      },

      {
        id: "sp1-ch26-bilan",
        titre: "4. Bilan de matière et rendement",
        blocs: [
          {
            type: "definition",
            titre: "Avancement",
            texte: "Pour une réaction dont tous les coefficients sont égaux à 1, l’avancement x correspond à la quantité de chaque réactif consommée et à la quantité de chaque produit formée, à partir des quantités initiales."
          },
          {
            type: "tableau",
            titre: "Bilan pour acide + alcool ⇌ ester + eau",
            entetes: ["État", "Acide", "Alcool", "Ester", "Eau"],
            lignes: [
              ["Initial", "nA,0", "nB,0", "0", "0"],
              ["Pour un avancement x", "nA,0 − x", "nB,0 − x", "x", "x"]
            ]
          },
          {
            type: "regle",
            titre: "Avancement maximal et rendement",
            texte: "Si l’on part sans ester ni eau, l’avancement maximal théorique est xmax = min(nA,0 ; nB,0). Si l’ester initial est nul, le rendement de formation de l’ester est η = nester obtenu/xmax. On multiplie par 100 pour l’exprimer en pourcentage."
          },
          {
            type: "exemple",
            titre: "Calcul d’un rendement",
            texte: "On introduit 0,30 mol d’acide et 0,20 mol d’alcool, sans ester ni eau au départ. L’avancement maximal est 0,20 mol. Si l’on obtient 0,12 mol d’ester, le rendement est η = 0,12/0,20 = 0,60, soit 60 %."
          },
          {
            type: "methode",
            titre: "Résoudre un bilan",
            texte: "1. Écrire l’équation et les quantités initiales. 2. Utiliser les coefficients pour établir les variations. 3. Déterminer xmax à partir du réactif limitant théorique. 4. Utiliser la quantité obtenue ou l’avancement donné. 5. Calculer le rendement et vérifier qu’il ne dépasse pas 100 % pour le bilan considéré."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les alcools, acides et catalyseurs utilisés en laboratoire peuvent être inflammables ou corrosifs. Les réactions et bilans sont étudiés sur le papier : ne chauffe et ne mélange pas ces produits chez toi."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quels sont les deux produits de l’estérification d’un acide carboxylique par un alcool ?",
        correction: "L’estérification produit un ester et de l’eau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "L’hydrolyse par l’eau d’un ester donne deux familles de produits. Lesquelles ?",
        correction: "Elle donne un acide carboxylique et un alcool."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris l’équation de l’estérification de l’acide éthanoïque CH₃–COOH par le méthanol CH₃–OH. Nomme l’ester formé.",
        correction: "CH₃–COOH + CH₃–OH ⇌ CH₃–COO–CH₃ + H₂O. L’ester formé est l’éthanoate de méthyle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un mélange d’estérification est à l’équilibre. Un catalyseur est ajouté, la température restant constante. Modifie-t-il la composition de l’équilibre ?",
        correction: "Non. Un catalyseur accélère les réactions directe et inverse, mais ne modifie pas la composition de l’équilibre à température donnée."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L’hydrolyse par l’eau du propanoate de méthyle CH₃–CH₂–COO–CH₃ produit un acide et un alcool. Écris l’équation et nomme ces produits.",
        correction: "CH₃–CH₂–COO–CH₃ + H₂O ⇌ CH₃–CH₂–COOH + CH₃–OH. Les produits sont l’acide propanoïque et le méthanol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On introduit 0,50 mol d’acide et 0,30 mol d’alcool sans ester ni eau. L’équation est acide + alcool ⇌ ester + eau. À l’équilibre, 0,18 mol d’ester est formée. Calcule les quantités restantes d’acide et d’alcool, puis le rendement en ester.",
        correction: "Les coefficients sont 1:1:1:1 ; la formation de 0,18 mol d’ester correspond à un avancement de 0,18 mol. Il reste 0,50 − 0,18 = 0,32 mol d’acide et 0,30 − 0,18 = 0,12 mol d’alcool. xmax = 0,30 mol. Le rendement est 0,18/0,30 = 0,60, soit 60 %."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On mélange 6,0 g d’acide éthanoïque et 4,6 g d’éthanol, sans ester ni eau. L’équation est CH₃–COOH + CH₃–CH₂–OH ⇌ CH₃–COO–CH₂–CH₃ + H₂O. Données : M(acide éthanoïque) = 60 g·mol⁻¹ ; M(éthanol) = 46 g·mol⁻¹ ; M(éthanoate d’éthyle) = 88 g·mol⁻¹. À l’équilibre, le rendement en ester est de 60 %. Calcule la masse d’ester obtenue.",
        correction: "n(acide) = 6,0/60 = 0,10 mol et n(éthanol) = 4,6/46 = 0,10 mol. L’avancement maximal est donc 0,10 mol. Avec un rendement de 60 %, n(ester) = 0,60 × 0,10 = 0,060 mol. Sa masse vaut m = nM = 0,060 × 88 = 5,28 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On introduit 0,40 mol d’acide carboxylique et 0,25 mol d’alcool, sans ester ni eau. La réaction est acide + alcool ⇌ ester + eau, avec tous les coefficients égaux à 1. À l’équilibre, il reste 0,10 mol d’alcool. Détermine l’avancement, les quantités des autres espèces à l’équilibre et le rendement en ester.",
        correction: "L’alcool consommé vaut 0,25 − 0,10 = 0,15 mol : x = 0,15 mol. Il reste 0,40 − 0,15 = 0,25 mol d’acide. Il se forme 0,15 mol d’ester et 0,15 mol d’eau. L’avancement maximal est xmax = 0,25 mol ; le rendement est 0,15/0,25 = 0,60, soit 60 %."
      }
    ]
  }
]);
