// ===== GUIDE - SVT 3e (T9) =====
// Chapitre 11 : Révision générale

enregistrerChapitres("3e", "svt", [
  {
    id: "svt3-revision-generale",
    titre: "Chapitre 11 : Révision générale",
    premium: true,
    guide: true,

    lecons: [
      {
        id: "svt3-revision-alimentation",
        titre: "Alimentation humaine",
        blocs: [
          {
            type: "regle",
            titre: "Aliments et nutriments",
            texte: "Les aliments peuvent apporter des glucides, des lipides, des protéines, de l'eau, des vitamines et des sels minéraux. La digestion transforme une partie des aliments en substances absorbables. Le glucose et les acides aminés traversent notamment la paroi de l'intestin grêle pour rejoindre le sang. Une grande partie des produits de la digestion des lipides passe d'abord par la lymphe."
          },
          {
            type: "regle",
            titre: "Besoins et équilibre alimentaire",
            texte: "L'organisme dépense de l'énergie au repos et pendant les activités. Ses besoins varient notamment avec l'âge, la croissance et l'activité physique. Une alimentation équilibrée apporte, dans la durée, de l'énergie et des constituants variés en quantités adaptées."
          },
          {
            type: "tableau",
            titre: "Valeurs énergétiques approximatives",
            entetes: ["Constituant", "Pour 1 g"],
            lignes: [
              ["Glucides", "17 kJ ou 4 kcal"],
              ["Protéines", "17 kJ ou 4 kcal"],
              ["Lipides", "38 kJ ou 9 kcal"]
            ]
          },
          {
            type: "rappel",
            titre: "Calcul et arrondis",
            texte: "Pour estimer l'énergie d'un repas, multiplie la masse de chaque constituant par sa valeur énergétique, puis additionne. Une kilocalorie vaut 4,184 kJ. Les valeurs en kJ/g et en kcal/g du tableau sont arrondies séparément : les résultats peuvent donc différer légèrement."
          },
          {
            type: "remarque",
            titre: "Malnutrition",
            texte: "La malnutrition comprend notamment la dénutrition, les carences et le surpoids. Un seul repas, une apparence ou un seul chiffre ne permet pas de poser un diagnostic."
          }
        ]
      },
      {
        id: "svt3-revision-plantes",
        titre: "Nutrition et protection des plantes",
        blocs: [
          {
            type: "regle",
            titre: "Absorption et circulation",
            texte: "Les racines absorbent l'eau et les sels minéraux, notamment grâce aux poils absorbants. La sève brute circule principalement vers les parties aériennes dans le xylème. La sève élaborée transporte notamment des sucres vers d'autres organes."
          },
          {
            type: "regle",
            titre: "Photosynthèse",
            texte: "Les organes verts utilisent notamment de l'eau et du dioxyde de carbone, grâce à l'énergie lumineuse, pour produire de la matière organique et libérer du dioxygène. Les cellules de la plante respirent de jour comme de nuit."
          },
          {
            type: "regle",
            titre: "Soins et protection",
            texte: "Les soins sont adaptés à l'espèce, au sol et aux conditions du milieu. Un manque ou un excès d'eau peut nuire à la plante. Avant de traiter une culture, on observe les signes et on recherche leurs causes possibles."
          },
          {
            type: "remarque",
            titre: "Bioagresseurs et pesticides",
            texte: "Un bioagresseur peut endommager une culture. Certaines méthodes de prévention, manuelles ou biologiques peuvent limiter les problèmes. Les pesticides présentent des risques et demandent des précautions ; « naturel » ne signifie pas forcément sans danger."
          }
        ]
      },
      {
        id: "svt3-revision-nerveux",
        titre: "Système nerveux et santé",
        blocs: [
          {
            type: "regle",
            titre: "Organisation",
            texte: "L'encéphale et la moelle épinière sont des centres nerveux. Les nerfs les relient aux autres parties du corps. Un message sensitif va d'un récepteur vers un centre nerveux ; un message moteur va d'un centre nerveux vers un effecteur, comme un muscle."
          },
          {
            type: "schema",
            titre: "Trajet simplifié d'un réflexe spinal",
            svg: "<svg viewBox='0 0 360 250' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='8' width='270' height='35' rx='6' fill='#fef3c7' stroke='#92400e'/><text x='180' y='30' text-anchor='middle' font-size='13'>Stimulus et récepteur de la peau</text><path d='M180 43 L180 60 M175 54 L180 61 L185 54' fill='none' stroke='#2563eb' stroke-width='2'/><rect x='45' y='64' width='270' height='36' rx='6' fill='#dbeafe' stroke='#2563eb'/><text x='180' y='87' text-anchor='middle' font-size='13'>Voie sensitive</text><path d='M180 100 L180 117 M175 111 L180 118 L185 111' fill='none' stroke='#374151' stroke-width='2'/><rect x='45' y='121' width='270' height='36' rx='6' fill='#fbcfe8' stroke='#9d174d'/><text x='180' y='144' text-anchor='middle' font-size='13'>Moelle épinière</text><path d='M180 157 L180 174 M175 168 L180 175 L185 168' fill='none' stroke='#be185d' stroke-width='2'/><rect x='45' y='178' width='270' height='40' rx='6' fill='#dcfce7' stroke='#15803d'/><text x='180' y='202' text-anchor='middle' font-size='13'>Voie motrice → muscle → retrait</text><text x='180' y='241' text-anchor='middle' font-size='11'>Des informations remontent aussi vers l'encéphale.</text></svg>",
            legende: "Dans ce réflexe, la moelle épinière participe directement à la réponse. Le schéma ne représente pas tous les circuits nerveux."
          },
          {
            type: "regle",
            titre: "Volontaire ou réflexe",
            texte: "Le cerveau participe à la commande d'un mouvement volontaire. Un réflexe spinal est une réponse rapide et involontaire à laquelle la moelle épinière participe directement. Tous les réflexes ne sont pas spinaux ; un geste appris automatisé n'est pas nécessairement un réflexe."
          },
          {
            type: "rappel",
            titre: "Protéger le système nerveux",
            texte: "Un sommeil suffisant contribue notamment à l'attention et à la mémoire. La fatigue et certaines substances psychoactives peuvent perturber la vigilance et les réactions. Une personne en difficulté mérite soutien et accès aux soins."
          }
        ]
      },
      {
        id: "svt3-revision-sante-reproduction",
        titre: "Santé reproductive",
        blocs: [
          {
            type: "regle",
            titre: "Fistule obstétricale",
            texte: "Une fistule obstétricale est une communication anormale entre des organes liée à une complication de l'accouchement. Un travail très prolongé et difficile non pris en charge à temps peut endommager des tissus. Selon sa localisation, la fistule peut entraîner des fuites d'urine ou de selles par le vagin."
          },
          {
            type: "rappel",
            titre: "Prévention et soins",
            texte: "Le suivi de grossesse, l'accès à un personnel qualifié et la prise en charge rapide des complications contribuent à la prévention. Une fistule peut souvent être traitée. Une fuite ne suffit pas à poser le diagnostic : une consultation est nécessaire."
          },
          {
            type: "regle",
            titre: "Cancer du col de l'utérus",
            texte: "Le cancer du col est lié principalement à la persistance d'une infection par certains papillomavirus humains, ou HPV, à haut risque. La plupart des infections disparaissent spontanément. Certaines anomalies précancéreuses peuvent évoluer en cancer après plusieurs années."
          },
          {
            type: "rappel",
            titre: "Vaccination et dépistage",
            texte: "La vaccination réduit les risques liés aux types de HPV visés. Le dépistage recherche des infections à risque ou des anomalies selon la méthode utilisée. Ils sont complémentaires. Un résultat anormal ne prouve pas à lui seul l'existence d'un cancer."
          },
          {
            type: "remarque",
            titre: "Respect et confidentialité",
            texte: "Les personnes concernées par un problème de santé ont droit au respect, au soutien et à la confidentialité. Un symptôme ou un facteur de risque ne permet pas à lui seul de poser un diagnostic."
          }
        ]
      },
      {
        id: "svt3-revision-geologie",
        titre: "Gemmes et exploitation",
        blocs: [
          {
            type: "regle",
            titre: "Identifier une gemme",
            texte: "Le rubis et le saphir sont des variétés de corindon ; l'émeraude est une variété de béryl. La couleur seule ne suffit généralement pas à identifier une pierre. La dureté concerne la résistance à la rayure : elle ne garantit pas la résistance aux chocs."
          },
          {
            type: "regle",
            titre: "Les gisements",
            texte: "Dans un gisement primaire, les gemmes sont associées à leur roche de formation. Dans un dépôt alluvial, des matériaux ont été transportés puis déposés, notamment par l'eau. « Alluvial » décrit le dépôt ; « à ciel ouvert » décrit un mode d'accès."
          },
          {
            type: "regle",
            titre: "Exploitation et conséquences",
            texte: "L'exploitation peut fournir du travail et des revenus, mais aussi présenter des risques pour les personnes, les sols et l'eau. Les effets dépendent du site et des pratiques. La sécurité, la limitation des rejets et une remise en état adaptée peuvent réduire certains dommages."
          },
          {
            type: "remarque",
            titre: "Pierres et santé",
            texte: "L'efficacité médicale de la lithothérapie n'est pas démontrée. Les pierres ne remplacent pas les soins médicaux et ne doivent pas être avalées ni utilisées pour préparer des boissons thérapeutiques."
          }
        ]
      },
      {
        id: "svt3-revision-methode",
        titre: "Méthode pour les exercices",
        blocs: [
          {
            type: "methode",
            titre: "Analyser un document",
            texte: "1. Lis la question et repère le thème.\n2. Identifie les données utiles, leurs unités et leur période.\n3. Décris les observations avant de les expliquer.\n4. Compare les valeurs et montre tes calculs si nécessaire.\n5. Relie les résultats aux connaissances du cours.\n6. Conclus avec prudence : distingue une hypothèse, un facteur de risque et une preuve."
          },
          {
            type: "methode",
            titre: "Interpréter une expérience",
            texte: "Repère le témoin et le facteur étudié. Vérifie que les autres conditions sont comparables. Décris les résultats, puis propose une conclusion limitée aux conditions de l'expérience. Si plusieurs facteurs changent, il est difficile d'attribuer le résultat à un seul."
          },
          {
            type: "methode",
            titre: "Rédiger une réponse",
            texte: "Utilise les mots scientifiques du cours, présente les étapes dans l'ordre et justifie tes affirmations avec les données. Pour un calcul, écris l'opération, le résultat et l'unité. Dans une situation de santé, ne pose pas de diagnostic à partir d'un seul signe."
          },
          {
            type: "remarque",
            titre: "Préparation à l'examen",
            texte: "Les exercices suivants permettent de s'entraîner à mobiliser plusieurs connaissances et à analyser des situations. Ils sont de type examen, sans prétendre reproduire un sujet officiel du BEPC."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Cite trois constituants des aliments qui peuvent fournir de l'énergie.",
        correction: "Les glucides, les protéines et les lipides peuvent fournir de l'énergie."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel organe absorbe l'eau et les sels minéraux chez une plante terrestre ?",
        correction: "Ce sont les racines, notamment leurs jeunes zones portant des poils absorbants."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Distingue un message nerveux sensitif d'un message nerveux moteur.",
        correction: "Un message sensitif va d'un récepteur vers un centre nerveux. Un message moteur va d'un centre nerveux vers un effecteur, par exemple un muscle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pourquoi la couleur verte d'une pierre ne suffit-elle pas à prouver qu'il s'agit d'une émeraude ?",
        correction: "Plusieurs matières différentes peuvent être vertes. Il faut comparer d'autres propriétés et, si nécessaire, effectuer des examens spécialisés."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un repas contient 45 g de glucides, 15 g de protéines et 10 g de lipides. Calcule son apport énergétique approximatif en kJ avec les valeurs du cours. Pourquoi ce résultat ne suffit-il pas à juger l'équilibre de l'alimentation ?",
        correction: "Glucides : 45 × 17 = 765 kJ.\nProtéines : 15 × 17 = 255 kJ.\nLipides : 10 × 38 = 380 kJ.\nTotal : 765 + 255 + 380 = 1 400 kJ environ.\nCe chiffre ne renseigne pas sur tous les apports, comme les vitamines, les sels minéraux et l'eau, ni sur les autres repas et les besoins de la personne."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux plants comparables reçoivent la même quantité d'eau et sont placés à température comparable. Le plant A reçoit de la lumière ; le plant B reste dans l'obscurité. Après plusieurs jours, A pousse mieux. Identifie le facteur étudié et explique le lien possible avec la photosynthèse.",
        correction: "Le facteur étudié est la lumière. Le plant A sert de témoin pour comparer avec B. La lumière fournit l'énergie nécessaire à la photosynthèse, qui permet aux organes verts de produire de la matière organique. Le résultat suggère que la lumière favorise la croissance dans ces conditions. Répéter l'expérience avec plusieurs plants renforcerait la conclusion."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne touche un objet brûlant et retire rapidement sa main. Décris le trajet simplifié du réflexe spinal. Le cerveau reçoit-il nécessairement aucune information ?",
        correction: "Stimulus douloureux → récepteurs de la peau → voie sensitive → moelle épinière → voie motrice → muscles → retrait de la main. La moelle participe directement à la réponse, sans attendre une décision consciente. Des informations remontent aussi vers l'encéphale, permettant notamment la perception de la douleur."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne vaccinée contre les HPV reçoit plus tard un résultat de dépistage anormal. Un voisin affirme qu'elle a forcément un cancer. Explique deux erreurs possibles dans ce raisonnement.",
        correction: "La vaccination ne protège pas contre tous les types de HPV : elle ne remplace pas le dépistage recommandé. De plus, un résultat anormal ne prouve pas forcément la présence d'un cancer. Un professionnel de santé indiquera si un contrôle ou des examens complémentaires sont nécessaires."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une rivière est trouble en aval d'un site où l'on lave des graviers. Pourquoi le lavage est-il une cause possible ? Pourquoi ne peut-on pas encore affirmer qu'il est la seule cause ?",
        correction: "Le lavage peut mettre des particules en suspension qui rendent l'eau trouble. Mais les pluies ou d'autres activités peuvent aussi apporter des particules. Il faut comparer des mesures en amont et en aval, à plusieurs moments, et tenir compte des autres facteurs."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Pour 100 g, un aliment A contient 10 g de protéines et un aliment B en contient 20 g. Une personne consomme 150 g de A et 50 g de B. Calcule la masse de protéines apportée par chaque portion. Quel aliment en apporte le plus dans ce repas ? Explique pourquoi cela ne suffit pas à juger tout le repas.",
        correction: "Pour A : 150 g représentent 1,5 fois 100 g, donc 1,5 × 10 = 15 g de protéines.\nPour B : 50 g représentent la moitié de 100 g, donc 20 ÷ 2 = 10 g de protéines.\nLa portion de A apporte 5 g de protéines de plus que celle de B, bien que B soit plus riche pour 100 g. Ces seules données ne renseignent pas sur tous les autres constituants du repas, les autres repas ni les besoins de la personne."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une feuille est partiellement couverte par un cache opaque. Après exposition à la lumière et préparation sous encadrement, l'eau iodée colore en bleu-noir la partie éclairée mais pas la partie cachée. Décris le résultat, explique ce qu'il suggère et indique une condition importante pour l'interpréter.",
        correction: "La coloration bleu-noir met en évidence de l'amidon dans la partie éclairée ; le test n'en met pas en évidence dans la partie cachée. Cela suggère que la lumière a permis la production de matière organique, dont une partie a été stockée sous forme d'amidon.\nPour interpréter le résultat, la plante doit notamment avoir été placée auparavant assez longtemps dans l'obscurité pour réduire les réserves d'amidon de la feuille. Les autres conditions et la préparation doivent être adaptées."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une expérience fictive, un groupe dort normalement et passe un test d'attention dans une salle calme. Un autre groupe dort peu et passe le même test dans une salle bruyante. Le premier obtient un meilleur résultat moyen. Peut-on attribuer la différence au seul sommeil ? Propose une amélioration et explique pourquoi le sommeil reste important.",
        correction: "Non. Deux facteurs changent : le sommeil et le bruit. La différence peut être liée à l'un, à l'autre ou à d'autres différences entre les groupes.\nPour mieux étudier le sommeil, on peut utiliser des salles et des conditions de test comparables, avec plusieurs participants, puis répéter l'étude. Le sommeil reste important car il contribue notamment à l'attention et à la mémorisation ; son manque peut entraîner de la somnolence et ralentir les réactions."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Après un accouchement difficile, une personne présente des fuites urinaires. Un proche affirme qu'elle a forcément une fistule et qu'elle ne peut pas être soignée. Analyse ces affirmations et indique une conduite adaptée.",
        correction: "Les fuites peuvent avoir plusieurs causes : elles ne prouvent pas à elles seules une fistule. Une fistule obstétricale est une complication possible après un travail prolongé et difficile, mais un professionnel doit évaluer la situation.\nL'affirmation selon laquelle elle ne peut pas être soignée est fausse : une fistule peut souvent être traitée dans un service spécialisé. La personne devrait consulter et recevoir un soutien respectueux, sans culpabilisation."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On trouve des pierres violettes parmi des graviers en aval d'une montagne. Un élève affirme : « Ce sont forcément des améthystes venues de cette montagne ; leur dureté les rend incassables. » Repère trois conclusions non justifiées et indique comment améliorer l'étude.",
        correction: "1. La couleur violette seule ne prouve pas qu'il s'agit d'améthystes : il faut comparer d'autres propriétés.\n2. La présence de graviers en aval suggère un transport possible par l'eau, mais ne prouve pas que les pierres viennent précisément de cette montagne. Il faut étudier les roches, les trajets possibles et les propriétés des échantillons.\n3. La dureté est une résistance à la rayure, pas une garantie contre les chocs : une pierre peut se casser. Des examens réalisés par des personnes compétentes permettraient de préciser l'identification et l'origine."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un site fictif emploie des habitants pour extraire des gemmes dans des graviers. Des fosses restent ouvertes et l'eau en aval devient parfois trouble. Présente un bénéfice, deux risques ou conséquences, puis propose deux mesures adaptées. Pourquoi faut-il poursuivre les observations ?",
        correction: "Bénéfice possible : l'activité fournit du travail et des revenus.\nConséquences possibles : les fosses ouvertes présentent un risque de chute ou d'éboulement ; des particules mises en suspension peuvent troubler l'eau et affecter ses usages ou les milieux aquatiques.\nMesures possibles : sécuriser puis remettre en état les excavations de façon adaptée ; limiter l'arrivée des sédiments dans la rivière et surveiller l'eau en amont et en aval.\nIl faut poursuivre les observations pour vérifier l'effet des mesures et examiner d'autres causes possibles, comme les pluies. Les décisions doivent associer les personnes compétentes et les communautés concernées."
      }
    ]
  }
]);
