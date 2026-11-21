// ===== GUIDE - SVT 3e (T9) =====
// Chapitre 2 : Les besoins énergétiques et l'équilibre alimentaire

enregistrerChapitres("3e", "svt", [
  {
    id: "svt3-besoins-equilibre",
    titre: "Chapitre 2 : Les besoins énergétiques et l'équilibre alimentaire",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt3-energie-besoins",
        titre: "Les besoins énergétiques de l'organisme",
        blocs: [
          {
            type: "introduction",
            titre: "Même au repos",
            texte: "Une personne immobile a encore besoin d'énergie : son cœur bat, elle respire et ses organes fonctionnent. Lorsqu'elle marche, travaille ou fait du sport, une dépense liée à l'activité s'ajoute."
          },
          {
            type: "definition",
            titre: "Besoin énergétique",
            texte: "Le besoin énergétique correspond à l'énergie nécessaire à l'organisme pour fonctionner et réaliser ses activités. Les aliments apportent de l'énergie grâce notamment aux glucides, aux lipides et aux protéines qu'ils contiennent."
          },
          {
            type: "texte",
            titre: "Des besoins variables",
            texte: "Les besoins varient d'une personne à l'autre selon notamment l'âge, la croissance, la corpulence, l'activité physique et l'état de santé. Les conditions de vie peuvent aussi jouer un rôle. Pendant l'adolescence, la croissance contribue aux besoins : une valeur unique ne convient donc pas à tous."
          },
          {
            type: "remarque",
            titre: "Dépense et activité",
            texte: "Une activité physique plus intense ou plus longue augmente généralement la dépense énergétique. Il faut néanmoins considérer l'ensemble de la journée et les caractéristiques de la personne avant de comparer ses besoins à ceux d'une autre."
          }
        ]
      },
      {
        id: "svt3-energie-calcul",
        titre: "Calculer un apport énergétique",
        blocs: [
          {
            type: "definition",
            titre: "Les unités",
            texte: "L'énergie alimentaire peut être exprimée en kilojoules, notés kJ, ou en kilocalories, notées kcal. Une kilocalorie correspond à 4,184 kJ."
          },
          {
            type: "tableau",
            titre: "Valeurs énergétiques approximatives",
            entetes: ["Constituant", "Énergie pour 1 g"],
            lignes: [
              ["Glucides", "Environ 17 kJ ou 4 kcal"],
              ["Protéines", "Environ 17 kJ ou 4 kcal"],
              ["Lipides", "Environ 38 kJ ou 9 kcal"]
            ]
          },
          {
            type: "remarque",
            titre: "Attention aux arrondis",
            texte: "Les valeurs en kJ et en kcal du tableau sont arrondies séparément. Par exemple, 4 kcal correspondent exactement à 16,736 kJ, soit environ 17 kJ. Selon la méthode utilisée, les résultats peuvent donc différer légèrement."
          },
          {
            type: "methode",
            titre: "Calculer en kilojoules",
            texte: "1. Repère les masses de glucides, de protéines et de lipides, en grammes.\n2. Multiplie chaque masse par la valeur énergétique correspondante en kJ par gramme.\n3. Additionne les résultats.\n4. Indique l'unité et précise qu'il s'agit d'une estimation."
          },
          {
            type: "exemple",
            titre: "Exemple détaillé",
            texte: "Un repas contient 50 g de glucides, 20 g de protéines et 10 g de lipides.\nGlucides : 50 × 17 = 850 kJ.\nProtéines : 20 × 17 = 340 kJ.\nLipides : 10 × 38 = 380 kJ.\nTotal : 850 + 340 + 380 = 1 570 kJ environ."
          },
          {
            type: "rappel",
            titre: "Eau, vitamines et sels minéraux",
            texte: "L'eau, les vitamines et les sels minéraux ne fournissent pas d'énergie, mais ils sont indispensables au bon fonctionnement de l'organisme. Une valeur énergétique ne suffit donc pas à juger la qualité d'un repas."
          }
        ]
      },
      {
        id: "svt3-energie-bilan",
        titre: "Apports et dépenses énergétiques",
        blocs: [
          {
            type: "definition",
            titre: "Deux notions à distinguer",
            texte: "L'apport énergétique est l'énergie fournie par les aliments consommés. La dépense énergétique correspond à l'énergie utilisée par l'organisme pour fonctionner et mener ses activités."
          },
          {
            type: "schema",
            titre: "Apports, organisme et dépenses",
            svg: "<svg viewBox='0 0 360 235' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='10' width='250' height='48' rx='8' fill='#fef3c7' stroke='#92400e'/><text x='180' y='30' text-anchor='middle' font-size='14' fill='#1f2937'>Aliments consommés</text><text x='180' y='48' text-anchor='middle' font-size='12' fill='#1f2937'>Apport énergétique</text><path d='M180 58 L180 80 M175 74 L180 81 L185 74' fill='none' stroke='#374151' stroke-width='2'/><rect x='55' y='83' width='250' height='48' rx='8' fill='#dbeafe' stroke='#2563eb'/><text x='180' y='103' text-anchor='middle' font-size='14' fill='#1f2937'>Organisme</text><text x='180' y='121' text-anchor='middle' font-size='12' fill='#1f2937'>Utilisation et stockage possibles</text><path d='M180 131 L180 153 M175 147 L180 154 L185 147' fill='none' stroke='#374151' stroke-width='2'/><rect x='30' y='157' width='300' height='58' rx='8' fill='#dcfce7' stroke='#15803d'/><text x='180' y='178' text-anchor='middle' font-size='14' fill='#1f2937'>Dépenses énergétiques</text><text x='180' y='198' text-anchor='middle' font-size='12' fill='#1f2937'>Fonctionnement du corps et activités</text></svg>",
            legende: "Les aliments fournissent de l'énergie. L'organisme l'utilise et peut en stocker une partie. L'équilibre s'apprécie dans la durée, pas sur un seul repas."
          },
          {
            type: "texte",
            titre: "Un équilibre dans la durée",
            texte: "Lorsque les apports dépassent régulièrement les dépenses, une partie de l'énergie excédentaire peut être stockée, notamment sous forme de graisse. Lorsque les apports sont durablement insuffisants, l'organisme peut utiliser ses réserves. La croissance et l'état de santé doivent aussi être pris en compte."
          },
          {
            type: "remarque",
            titre: "Ne pas conclure trop vite",
            texte: "Un repas plus copieux ou une journée moins active ne permet pas, à lui seul, de juger la situation d'une personne. Le poids et la santé dépendent de nombreux facteurs ; on ne pose pas de diagnostic à partir d'un seul calcul."
          }
        ]
      },
      {
        id: "svt3-equilibre-alimentaire",
        titre: "Composer une alimentation équilibrée",
        blocs: [
          {
            type: "definition",
            titre: "L'équilibre alimentaire",
            texte: "Une alimentation équilibrée apporte, dans la durée, de l'énergie et les différents constituants nécessaires à l'organisme en quantités adaptées aux besoins. Elle repose sur la variété des aliments et ne se réduit pas à compter les calories."
          },
          {
            type: "texte",
            titre: "Associer des aliments variés",
            texte: "On peut associer, selon les disponibilités : un aliment riche en glucides comme le riz, le manioc ou le maïs ; une source de protéines comme les haricots, le poisson ou les œufs ; des légumes et des fruits ; ainsi qu'une quantité adaptée de matières grasses. L'eau est une boisson essentielle."
          },
          {
            type: "exemple",
            titre: "Un repas possible",
            texte: "Du riz, des haricots, des légumes et de l'eau constituent un exemple de repas associant plusieurs apports. Un fruit peut compléter le repas lorsqu'il est disponible. D'autres associations sont possibles selon les aliments locaux, les habitudes et les besoins."
          },
          {
            type: "remarque",
            titre: "L'équilibre ne se joue pas sur un seul repas",
            texte: "Tous les aliments utiles ne doivent pas nécessairement être présents à chaque repas. C'est la variété de l'alimentation sur plusieurs repas et plusieurs jours qui compte. Il n'existe pas de portion unique adaptée à tous les adolescents."
          },
          {
            type: "regle",
            titre: "Quelques habitudes utiles",
            texte: "Varier autant que possible les aliments ; boire régulièrement de l'eau ; limiter les excès répétés d'aliments très sucrés, très salés ou très gras ; et pratiquer une activité physique adaptée. L'hygiène des aliments et de l'eau aide aussi à prévenir les maladies."
          }
        ]
      },
      {
        id: "svt3-malnutrition",
        titre: "Déséquilibres et malnutrition",
        blocs: [
          {
            type: "definition",
            titre: "La malnutrition",
            texte: "La malnutrition désigne différentes situations liées à une alimentation insuffisante, excessive ou déséquilibrée. Elle comprend notamment la dénutrition, certaines carences et le surpoids."
          },
          {
            type: "texte",
            titre: "Dénutrition et carences",
            texte: "Des apports insuffisants en énergie ou en nutriments peuvent nuire à la croissance et à la santé. Une carence est un manque d'un ou de plusieurs nutriments nécessaires. Par exemple, un apport insuffisant en fer peut contribuer à une anémie ; une anémie peut aussi avoir d'autres causes."
          },
          {
            type: "definition",
            titre: "Malnutrition aiguë et chronique",
            texte: "La malnutrition aiguë est associée notamment à un amaigrissement important ou à d'autres signes évalués par un professionnel de santé. La malnutrition chronique s'installe dans la durée et peut entraîner un retard de croissance chez l'enfant."
          },
          {
            type: "texte",
            titre: "Surpoids et santé",
            texte: "Un excès durable d'apports énergétiques par rapport aux dépenses peut contribuer à une prise de masse grasse. Le surpoids a des causes multiples : alimentation, activité, sommeil, environnement et autres facteurs peuvent intervenir."
          },
          {
            type: "remarque",
            titre: "Une approche respectueuse",
            texte: "L'apparence ne suffit pas à déterminer l'état de santé d'une personne. En cas d'inquiétude concernant la croissance, l'alimentation ou la santé, il faut demander conseil à un professionnel de santé. Un adolescent ne devrait pas entreprendre seul un régime restrictif."
          }
        ]
      },
      {
        id: "svt3-equilibre-methode",
        titre: "Analyser une situation alimentaire",
        blocs: [
          {
            type: "methode",
            titre: "Procéder étape par étape",
            texte: "1. Lis les informations et repère la période étudiée : repas, journée ou période plus longue.\n2. Identifie les aliments et les constituants indiqués.\n3. Si des masses sont données, calcule l'énergie avec les valeurs demandées.\n4. Compare les apports et les dépenses uniquement si les données concernent la même personne et la même période.\n5. Pour juger la variété, cherche aussi les sources de protéines, les fruits et légumes et l'eau.\n6. Formule une conclusion prudente : des données limitées ne permettent pas un diagnostic."
          },
          {
            type: "exemple",
            titre: "Exploiter des données",
            texte: "Sur une journée donnée, un document fictif estime l'apport d'une personne à 9 000 kJ et sa dépense à 8 500 kJ. L'apport estimé dépasse la dépense estimée de 9 000 − 8 500 = 500 kJ pour cette journée. On ne peut pas en déduire à lui seul une prise de poids ni l'état de santé de cette personne."
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Comparer un apport pour un repas à une dépense pour une journée entière.\n• Oublier de multiplier les masses par les valeurs énergétiques.\n• Affirmer qu'un repas est équilibré à partir de son énergie seulement.\n• Considérer qu'une journée suffit à établir un diagnostic."
          }
        ]
      },
      {
        id: "svt3-equilibre-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan du chapitre",
            texte: "• L'organisme dépense de l'énergie au repos et pendant les activités.\n• Les besoins varient selon les personnes et leurs conditions de vie.\n• Les glucides et les protéines apportent environ 17 kJ par gramme ; les lipides environ 38 kJ par gramme.\n• L'équilibre alimentaire associe des aliments variés et des quantités adaptées aux besoins, dans la durée.\n• La malnutrition comprend plusieurs situations, dont la dénutrition, les carences et le surpoids.\n• Un seul repas ou un seul chiffre ne suffit pas pour juger la santé d'une personne."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux facteurs qui peuvent faire varier les besoins énergétiques.",
        correction: "Les besoins énergétiques varient notamment selon l'âge, la croissance, l'activité physique, la corpulence et l'état de santé. Deux facteurs suffisaient."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Parmi les glucides, les lipides et l'eau, lesquels apportent de l'énergie ?",
        correction: "Les glucides et les lipides apportent de l'énergie. L'eau n'en apporte pas, mais elle est indispensable à l'organisme."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule l'énergie apportée par 10 g de lipides en utilisant 38 kJ par gramme.",
        correction: "Énergie = 10 × 38 = 380 kJ environ."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pourquoi l'équilibre alimentaire ne se résume-t-il pas à obtenir une certaine quantité d'énergie ?",
        correction: "Le corps a aussi besoin de différents constituants, notamment de protéines, d'eau, de vitamines et de sels minéraux. Un repas peut apporter de l'énergie sans fournir à lui seul tous les constituants nécessaires. La variété et les quantités adaptées comptent donc aussi."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un repas contient 60 g de glucides, 15 g de protéines et 10 g de lipides. Calcule son apport énergétique approximatif en kJ avec les valeurs du cours.",
        correction: "Glucides : 60 × 17 = 1 020 kJ.\nProtéines : 15 × 17 = 255 kJ.\nLipides : 10 × 38 = 380 kJ.\nTotal : 1 020 + 255 + 380 = 1 655 kJ environ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux élèves du même âge prennent des repas identiques. L'un pratique une activité physique prolongée tandis que l'autre reste au repos. Leurs dépenses énergétiques sont-elles forcément identiques ? Explique.",
        correction: "Non. L'activité physique prolongée augmente généralement la dépense énergétique par rapport au repos. D'autres caractéristiques personnelles influencent également les besoins. Le seul âge ne suffit donc pas à affirmer que leurs dépenses sont identiques."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève mange du riz à presque tous ses repas mais consomme rarement d'autres aliments. Explique pourquoi la quantité d'énergie apportée par le riz ne suffit pas à prouver que son alimentation est équilibrée. Propose deux compléments possibles.",
        correction: "Le riz apporte notamment des glucides, mais une alimentation équilibrée doit aussi fournir des protéines, des vitamines, des sels minéraux et de l'eau en quantités adaptées. On peut, selon les disponibilités, ajouter par exemple des haricots comme source de protéines et des légumes ou des fruits pour varier les apports. L'équilibre s'apprécie sur plusieurs repas."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sur une journée, l'apport énergétique estimé d'une personne est de 8 800 kJ et sa dépense estimée de 8 300 kJ. Compare ces valeurs. Peut-on affirmer à partir de ces seules données que la personne est en mauvaise santé ?",
        correction: "Pour cette journée, l'apport estimé dépasse la dépense estimée de 8 800 − 8 300 = 500 kJ. On ne peut pas conclure que la personne est en mauvaise santé : il s'agit d'estimations pour une seule journée, sans information suffisante sur la durée, la croissance ou l'état de santé."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux portions fictives ont les compositions suivantes : A contient 40 g de glucides, 10 g de protéines et 5 g de lipides ; B contient 25 g de glucides, 10 g de protéines et 10 g de lipides. Calcule leur énergie en kJ, compare-les, puis explique pourquoi ce résultat ne permet pas de dire à lui seul quelle portion est la plus équilibrée.",
        correction: "Pour A : 40 × 17 + 10 × 17 + 5 × 38 = 680 + 170 + 190 = 1 040 kJ environ.\nPour B : 25 × 17 + 10 × 17 + 10 × 38 = 425 + 170 + 380 = 975 kJ environ.\nA apporte environ 65 kJ de plus que B avec ces valeurs arrondies. Mais l'énergie seule ne renseigne pas sur tous les apports, notamment en vitamines et en sels minéraux, ni sur le reste de l'alimentation et les besoins de la personne."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Analyse la situation : depuis plusieurs mois, un enfant reçoit une alimentation peu variée et insuffisante, et sa croissance semble ralentir. Un camarade affirme : « Il suffit de lui donner un repas très copieux et le problème sera réglé. » Explique pourquoi cette conclusion est insuffisante et propose une conduite adaptée.",
        correction: "Un seul repas ne corrige pas nécessairement des apports insuffisants installés depuis plusieurs mois. Une alimentation variée et suffisante dans la durée est importante pour couvrir les besoins de croissance. Le ralentissement de croissance peut avoir plusieurs causes : on ne peut pas poser un diagnostic avec ces seules informations. Il faut demander une évaluation et des conseils à un professionnel de santé, sans culpabiliser l'enfant ni sa famille."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un aliment apporte 20 g de glucides et 10 g de lipides. Calcule son énergie d'abord en kcal avec 4 kcal/g pour les glucides et 9 kcal/g pour les lipides. Convertis ensuite en kJ avec 1 kcal = 4,184 kJ. Enfin, recalcule directement en kJ avec 17 kJ/g et 38 kJ/g. Explique la différence.",
        correction: "En kcal : 20 × 4 + 10 × 9 = 80 + 90 = 170 kcal.\nConversion : 170 × 4,184 = 711,28 kJ.\nCalcul direct en kJ : 20 × 17 + 10 × 38 = 340 + 380 = 720 kJ.\nLes résultats diffèrent de 720 − 711,28 = 8,72 kJ. Cette différence vient des valeurs énergétiques arrondies séparément en kcal/g et en kJ/g. Les deux calculs donnent des estimations proches."
      }
    ]
  }
]);
