enregistrerChapitres("1ere", "svt", [
  {
    id: 7,
    titre: "Chapitre 7 : L’alimentation rationnelle",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les besoins alimentaires de l’organisme",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi faut-il manger ?",
            texte: "L’organisme a besoin d’eau, de matière et d’énergie. Les aliments apportent des constituants qui, après absorption et transformations, contribuent au fonctionnement des cellules, à la croissance, au renouvellement des tissus et à la constitution de réserves."
          },
          {
            type: "definition",
            titre: "Besoins énergétiques",
            texte: "Les besoins énergétiques correspondent à l’énergie nécessaire au fonctionnement de l’organisme et à ses activités. Ils varient notamment selon l’âge, la masse corporelle, l’activité physique, l’état de santé et les conditions de vie."
          },
          {
            type: "definition",
            titre: "Besoins qualitatifs",
            texte: "Les besoins qualitatifs concernent la diversité des substances nécessaires : eau, protéines et acides aminés indispensables, glucides, lipides dont certains acides gras indispensables, vitamines et éléments minéraux. Une quantité suffisante d’énergie ne garantit pas à elle seule que tous ces besoins sont couverts."
          },
          {
            type: "remarque",
            titre: "Des besoins qui changent",
            texte: "Pendant la croissance, la grossesse ou l’allaitement, les besoins en certains nutriments évoluent. Une activité physique importante peut augmenter les besoins énergétiques et hydriques. Les besoins précis sont individuels : les exemples chiffrés du chapitre ne sont pas des prescriptions personnelles."
          },
          {
            type: "schema",
            titre: "Une alimentation répond à plusieurs besoins",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-labelledby="svt7s1t svt7s1d">
  <title id="svt7s1t">Besoins de l'organisme</title>
  <desc id="svt7s1d">Les aliments et l'eau contribuent à fournir de l'énergie, à construire et renouveler les tissus et à assurer le fonctionnement de l'organisme.</desc>
  <defs>
    <marker id="svt7a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="680" height="280" fill="#fff"/>
  <rect x="230" y="20" width="220" height="55" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="340" y="53" text-anchor="middle" font-size="18">Aliments et eau</text>
  <path d="M275 75 L120 135 M340 75 L340 135 M405 75 L560 135" stroke="#444" stroke-width="2" marker-end="url(#svt7a1)"/>
  <rect x="20" y="140" width="200" height="90" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="120" y="173" text-anchor="middle" font-size="16">Fournir de l'énergie</text>
  <text x="120" y="199" text-anchor="middle" font-size="14">fonctionnement, activité</text>
  <rect x="240" y="140" width="200" height="90" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="340" y="173" text-anchor="middle" font-size="16">Construire</text>
  <text x="340" y="199" text-anchor="middle" font-size="14">croissance, renouvellement</text>
  <rect x="460" y="140" width="200" height="90" rx="8" fill="#eee3f5" stroke="#806193"/>
  <text x="560" y="173" text-anchor="middle" font-size="16">Assurer les fonctions</text>
  <text x="560" y="199" text-anchor="middle" font-size="14">eau, vitamines, minéraux</text>
</svg>`,
            legende: "Ces rôles se complètent : un même aliment peut contribuer à plusieurs fonctions."
          }
        ]
      },

      {
        id: 2,
        titre: "La ration alimentaire et l’équilibre énergétique",
        blocs: [
          {
            type: "definition",
            titre: "Ration alimentaire",
            texte: "La ration alimentaire est l’ensemble des aliments et des boissons consommés par une personne pendant une durée donnée, généralement une journée. Elle peut être décrite par les quantités consommées, leur composition et leur apport énergétique."
          },
          {
            type: "definition",
            titre: "Alimentation rationnelle",
            texte: "Une alimentation rationnelle est une alimentation adaptée aux besoins de la personne. Elle apporte suffisamment d’énergie, d’eau et de nutriments variés, sans excès durable. Elle tient compte notamment de l’âge, de l’activité, de l’état de santé, des ressources disponibles et des habitudes alimentaires."
          },
          {
            type: "definition",
            titre: "Bilan énergétique",
            texte: "Le bilan énergétique compare l’énergie apportée par les aliments et les boissons à l’énergie dépensée par l’organisme sur une période donnée. Si les apports dépassent durablement les dépenses, une partie de l’énergie peut être stockée. Si les apports sont durablement inférieurs aux dépenses, l’organisme peut utiliser ses réserves."
          },
          {
            type: "remarque",
            titre: "Ne pas juger un seul repas",
            texte: "L’équilibre alimentaire s’apprécie sur plusieurs repas et dans la durée. Un repas moins varié ne permet pas, à lui seul, de conclure qu’une alimentation entière est déséquilibrée."
          },
          {
            type: "exemple",
            titre: "Comparer des valeurs",
            texte: "Pour une journée fictive, un apport de 9 000 kJ et une dépense de 8 000 kJ donnent une différence de 1 000 kJ. L’apport est supérieur à la dépense pour cette journée. On ne peut toutefois pas prédire une évolution précise de la masse corporelle à partir d’une seule journée."
          }
        ]
      },

      {
        id: 3,
        titre: "Évaluer l’apport énergétique des aliments",
        blocs: [
          {
            type: "definition",
            titre: "Unités d’énergie",
            texte: "L’énergie alimentaire peut être exprimée en kilojoules, notés kJ, ou en kilocalories, notées kcal. Une kilocalorie correspond approximativement à 4,18 kJ. Sur les étiquettes alimentaires, les deux unités sont souvent indiquées."
          },
          {
            type: "tableau",
            titre: "Valeurs énergétiques approximatives",
            entetes: ["Constituant", "Énergie approximative par gramme"],
            lignes: [
              ["Glucides disponibles", "17 kJ/g, soit environ 4 kcal/g."],
              ["Protéines", "17 kJ/g, soit environ 4 kcal/g."],
              ["Lipides", "37 kJ/g, soit environ 9 kcal/g."],
              ["Eau", "0 kJ/g."],
              ["Vitamines et sels minéraux", "Ils ne fournissent pas d’énergie, mais sont nécessaires au fonctionnement de l’organisme."]
            ]
          },
          {
            type: "methode",
            titre: "Calculer un apport énergétique approximatif",
            texte: "Multiplier la masse de glucides disponibles par 17 kJ/g, la masse de protéines par 17 kJ/g et la masse de lipides par 37 kJ/g. Additionner les trois résultats. Cette estimation simplifiée ne tient pas compte de tous les constituants ni des différences de digestibilité."
          },
          {
            type: "exemple",
            titre: "Exemple de calcul",
            texte: "Un aliment fictif apporte 20 g de glucides disponibles, 5 g de protéines et 4 g de lipides. Son apport estimé est : (20 × 17) + (5 × 17) + (4 × 37) = 340 + 85 + 148 = 573 kJ."
          },
          {
            type: "remarque",
            titre: "Énergie et qualité nutritionnelle",
            texte: "Deux aliments ayant un apport énergétique proche peuvent apporter des quantités très différentes de protéines, vitamines, minéraux ou fibres. Il faut donc examiner à la fois la quantité d’énergie et la diversité des nutriments."
          }
        ]
      },

      {
        id: 4,
        titre: "Composer une alimentation variée",
        blocs: [
          {
            type: "introduction",
            titre: "Associer des aliments complémentaires",
            texte: "Aucun aliment habituel ne fournit à lui seul, dans les bonnes proportions, tous les éléments nécessaires à long terme. Une alimentation variée associe plusieurs groupes d’aliments et de l’eau potable, en quantités adaptées aux besoins."
          },
          {
            type: "tableau",
            titre: "Exemples de contributions alimentaires",
            entetes: ["Groupe d’aliments", "Exemples", "Contributions possibles"],
            lignes: [
              ["Féculents", "Riz, manioc, maïs, patate douce.", "Glucides fournissant de l’énergie ; les quantités de fibres et de minéraux varient."],
              ["Légumineuses", "Haricots, lentilles, pois, voanjobory.", "Protéines, glucides, fibres et certains minéraux."],
              ["Légumes et fruits", "Brèdes, tomates, carottes, mangues, agrumes.", "Eau, fibres, vitamines et minéraux en proportions variables."],
              ["Aliments riches en protéines", "Poisson, œufs, viande, lait ; légumineuses et arachides.", "Protéines ; certains apportent aussi du fer, du calcium ou des lipides."],
              ["Matières grasses", "Huiles et autres matières grasses.", "Énergie et acides gras, dont certains sont indispensables."],
              ["Boissons", "Eau potable.", "Hydratation."]
            ]
          },
          {
            type: "exemple",
            titre: "Un repas possible",
            texte: "Un repas peut associer du riz, des haricots, des brèdes et de l’eau potable ; un fruit peut compléter l’ensemble. Selon les possibilités et les habitudes, le repas peut aussi comprendre du poisson, un œuf ou un autre aliment riche en protéines. Les quantités doivent être adaptées à la personne."
          },
          {
            type: "remarque",
            titre: "Céréales et légumineuses",
            texte: "Associer au fil des repas des céréales, comme le riz ou le maïs, et des légumineuses, comme les haricots ou les lentilles, permet de diversifier les sources de protéines végétales et leurs acides aminés. Il faut aussi veiller à couvrir les autres besoins, notamment en fer, en vitamines et en calcium."
          },
          {
            type: "remarque",
            titre: "Hygiène alimentaire",
            texte: "Une alimentation favorable à la santé suppose aussi une eau potable, le lavage des mains et des aliments lorsque cela est approprié, ainsi qu’une cuisson et une conservation adaptées. Limiter les excès de sel, de boissons très sucrées et de matières grasses contribue à réduire certains risques pour la santé."
          }
        ]
      },

      {
        id: 5,
        titre: "Carences, excès et prévention",
        blocs: [
          {
            type: "definition",
            titre: "Carence",
            texte: "Une carence est un apport ou une disponibilité insuffisante d’un nutriment par rapport aux besoins de l’organisme. Elle peut résulter d’une alimentation insuffisante ou peu variée, mais aussi d’une mauvaise absorption ou d’une augmentation des besoins."
          },
          {
            type: "tableau",
            titre: "Exemples de conséquences possibles",
            entetes: ["Situation", "Conséquences possibles", "Prévention générale"],
            lignes: [
              ["Apports insuffisants en fer", "Risque d’anémie, avec fatigue possible.", "Diversifier les sources de fer et rechercher un avis de santé si nécessaire."],
              ["Apports insuffisants en iode", "Perturbation du fonctionnement de la thyroïde ; goitre possible.", "Utiliser du sel iodé en quantité modérée et suivre les recommandations locales."],
              ["Apports insuffisants en vitamine A", "Troubles de la vision et augmentation de certains risques pour la santé.", "Diversifier l’alimentation avec des sources adaptées de vitamine A ou de ses précurseurs."],
              ["Apports insuffisants en énergie et en protéines", "Amaigrissement, ralentissement de la croissance et autres troubles, selon la situation.", "Assurer des apports suffisants et variés ; consulter en cas de signes de malnutrition."],
              ["Excès durable d’énergie", "Peut contribuer à une prise de masse grasse et à des risques pour la santé.", "Adapter les apports aux besoins et pratiquer une activité physique adaptée."]
            ]
          },
          {
            type: "remarque",
            titre: "Un symptôme ne suffit pas",
            texte: "La fatigue, l’amaigrissement ou un autre signe peuvent avoir plusieurs causes. Un diagnostic ne peut pas être posé à partir d’un seul symptôme ou d’un tableau scolaire : une personne inquiète doit demander conseil à un professionnel de santé."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Une alimentation rationnelle apporte une quantité d’énergie adaptée ainsi que de l’eau et une diversité de nutriments. Les besoins varient d’une personne à l’autre. L’équilibre se construit dans la durée, en associant des aliments variés et en tenant compte de l’hygiène alimentaire."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Définir une ration alimentaire. Pourquoi deux personnes ne doivent-elles pas nécessairement consommer exactement les mêmes quantités ?",
        correction: "La ration alimentaire est l’ensemble des aliments et boissons consommés pendant une durée donnée, généralement une journée. Les quantités nécessaires varient notamment selon l’âge, la masse corporelle, l’activité physique et l’état de santé."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Une ration fictive apporte 9 200 kJ dans une journée. La dépense de la personne est estimée à 8 400 kJ. Calculer la différence et l’interpréter.",
        correction: "Différence : 9 200 − 8 400 = 800 kJ. L’apport estimé est supérieur à la dépense estimée de 800 kJ pour cette journée. Ce résultat isolé ne permet pas de prédire précisément une évolution de la masse corporelle."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Un aliment fictif contient 30 g de glucides disponibles, 6 g de protéines et 5 g de lipides. Estimer son apport énergétique en utilisant 17 kJ/g pour les glucides et les protéines, et 37 kJ/g pour les lipides.",
        correction: "Glucides : 30 × 17 = 510 kJ. Protéines : 6 × 17 = 102 kJ. Lipides : 5 × 37 = 185 kJ. Total estimé : 510 + 102 + 185 = 797 kJ. Cette valeur est approximative."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Convertir approximativement 500 kcal en kJ, en utilisant 1 kcal = 4,18 kJ.",
        correction: "500 × 4,18 = 2 090 kJ. Un apport de 500 kcal correspond donc approximativement à 2 090 kJ."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une personne couvre ses besoins énergétiques avec une alimentation très peu variée. Peut-on conclure que tous ses besoins nutritionnels sont satisfaits ?",
        correction: "Non. Une quantité suffisante d’énergie ne garantit pas un apport suffisant en protéines, vitamines, minéraux ou autres substances indispensables. Il faut examiner la diversité et la composition de l’alimentation, ainsi que les besoins de la personne."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Proposer une amélioration possible d’un repas composé uniquement de riz blanc et d’eau, sans imposer de quantité précise. Justifier.",
        correction: "On peut ajouter, par exemple, des haricots et des brèdes, puis éventuellement un fruit selon les possibilités. Les haricots diversifient notamment les sources de protéines et de fibres ; les brèdes et le fruit apportent différents micronutriments. L’équilibre doit être apprécié sur l’ensemble des repas et les quantités adaptées à la personne."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une personne se sent fatiguée. Un élève conclut immédiatement qu’elle manque de fer. Pourquoi cette conclusion est-elle insuffisante ?",
        correction: "La fatigue peut avoir de nombreuses causes. Une carence en fer peut être envisagée dans certains cas, mais on ne peut pas la diagnostiquer à partir de la fatigue seule. Un professionnel de santé peut évaluer la situation et décider si des examens sont nécessaires."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Deux aliments fictifs apportent chacun 500 kJ. Le premier contient surtout des lipides ; le second apporte notamment des protéines et des glucides. Peut-on dire qu’ils ont exactement le même intérêt nutritionnel ?",
        correction: "Non. Leur apport énergétique est identique dans cet exemple, mais leur composition est différente. Ils ne fournissent donc pas les mêmes nutriments dans les mêmes proportions. Pour apprécier leur intérêt, il faut aussi considérer les vitamines, les minéraux, les fibres, les quantités consommées et le reste de l’alimentation."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Citer deux facteurs qui peuvent augmenter les besoins alimentaires d’une personne et expliquer pourquoi l’eau doit également être prise en compte.",
        correction: "La croissance et une activité physique importante peuvent modifier ou augmenter certains besoins. L’eau doit être prise en compte car elle est indispensable au fonctionnement de l’organisme et compense les pertes, notamment par les urines et la transpiration. Les besoins en eau varient selon les conditions et l’activité."
      }
    ]
  }
]);
