enregistrerChapitres("1ere", "svt", [
  {
    id: 3,
    titre: "Chapitre 3 : L’alimentation des animaux et de l’être humain",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les régimes alimentaires",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi se nourrir ?",
            texte: "Les animaux et les êtres humains prélèvent des aliments dans leur milieu. Après digestion et absorption, une partie des substances obtenues peut être utilisée pour fournir de l’énergie, construire ou renouveler les cellules et assurer le fonctionnement de l’organisme."
          },
          {
            type: "definition",
            titre: "Régime alimentaire",
            texte: "Le régime alimentaire d’un animal correspond aux catégories d’aliments qu’il consomme habituellement. On le détermine à partir d’observations répétées et non d’un seul repas."
          },
          {
            type: "tableau",
            titre: "Trois grands types de régimes",
            entetes: ["Régime", "Aliments consommés", "Exemples"],
            lignes: [
              ["Phytophage", "Principalement des végétaux ou des parties de végétaux.", "Le zébu consomme surtout de l’herbe ; certains insectes consomment des feuilles."],
              ["Zoophage", "Principalement d’autres animaux ou des parties d’animaux.", "Le chat consomme des proies animales ; une araignée capture des insectes."],
              ["Omnivore", "Des aliments d’origine végétale et animale.", "L’être humain peut consommer du riz, des légumes, des œufs et du poisson."]
            ]
          },
          {
            type: "remarque",
            titre: "Des catégories à nuancer",
            texte: "Les aliments consommés peuvent varier selon l’âge, la saison et la disponibilité des ressources. Un être humain est une espèce omnivore, mais une personne peut choisir une alimentation sans viande ou sans produits animaux : son alimentation individuelle ne change pas la classification générale de l’espèce."
          },
          {
            type: "schema",
            titre: "Origine des aliments selon le régime",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 250" role="img" aria-labelledby="svt3s1t svt3s1d">
  <title id="svt3s1t">Les régimes alimentaires</title>
  <desc id="svt3s1d">Le phytophage consomme principalement des végétaux, le zoophage principalement des animaux et l'omnivore des aliments des deux origines.</desc>
  <rect width="660" height="250" fill="#fff"/>
  <rect x="20" y="25" width="180" height="75" rx="10" fill="#dcefd4" stroke="#39733a"/>
  <text x="110" y="58" text-anchor="middle" font-size="18">Végétaux</text>
  <text x="110" y="80" text-anchor="middle" font-size="14">herbe, feuilles, graines</text>
  <rect x="460" y="25" width="180" height="75" rx="10" fill="#f5e0d0" stroke="#985d38"/>
  <text x="550" y="58" text-anchor="middle" font-size="18">Animaux</text>
  <text x="550" y="80" text-anchor="middle" font-size="14">proies, parties animales</text>
  <path d="M110 105 L110 145 M110 105 L310 145 M550 105 L350 145 M550 105 L550 145" fill="none" stroke="#555" stroke-width="2"/>
  <rect x="20" y="150" width="180" height="60" rx="10" fill="#fff" stroke="#39733a"/>
  <text x="110" y="185" text-anchor="middle" font-size="17">Phytophage</text>
  <rect x="240" y="150" width="180" height="60" rx="10" fill="#fff" stroke="#555"/>
  <text x="330" y="185" text-anchor="middle" font-size="17">Omnivore</text>
  <rect x="460" y="150" width="180" height="60" rx="10" fill="#fff" stroke="#985d38"/>
  <text x="550" y="185" text-anchor="middle" font-size="17">Zoophage</text>
</svg>`,
            legende: "Ce classement décrit les aliments consommés habituellement ; il ne représente pas tous les régimes spécialisés."
          }
        ]
      },

      {
        id: 2,
        titre: "Les aliments et leurs constituants",
        blocs: [
          {
            type: "definition",
            titre: "Aliment et constituant alimentaire",
            texte: "Un aliment est une substance consommée pour se nourrir : pain, riz, lait ou fruit, par exemple. Un même aliment contient généralement plusieurs constituants, notamment de l’eau, des sels minéraux et des substances organiques."
          },
          {
            type: "tableau",
            titre: "Principales familles de constituants",
            entetes: ["Famille", "Exemples", "Rôles ou propriétés"],
            lignes: [
              ["Eau", "Eau présente dans le lait, les fruits ou le riz cuit.", "Milieu des réactions et des transports dans l’organisme."],
              ["Sels minéraux", "Composés apportant notamment calcium, fer ou sodium.", "Ils participent à de nombreuses fonctions et à certaines structures."],
              ["Glucides", "Glucose, saccharose, amidon.", "Ils constituent une source d’énergie ; certains peuvent être mis en réserve."],
              ["Lipides", "Huiles, graisses.", "Ils fournissent de l’énergie et participent notamment aux membranes cellulaires."],
              ["Protides", "Protéines, peptides et acides aminés.", "Les protéines contribuent à la structure et au fonctionnement des cellules."],
              ["Vitamines", "Vitamines A, C ou D.", "Nécessaires en petites quantités au bon fonctionnement de l’organisme."]
            ]
          },
          {
            type: "definition",
            titre: "Aliment composé",
            texte: "Un aliment composé contient plusieurs constituants. Par exemple, le lait contient de l’eau, des protéines, des glucides, des lipides et des sels minéraux ; leurs proportions varient selon le type de lait."
          },
          {
            type: "remarque",
            titre: "Aliment et nutriment",
            texte: "L’aliment est ce que l’on mange ou boit. Un nutriment est une substance utilisable par l’organisme après absorption : par exemple, le glucose et les acides aminés issus de la digestion. L’eau et certains ions peuvent être absorbés sans digestion préalable."
          }
        ]
      },

      {
        id: 3,
        titre: "Glucides, lipides et protides",
        blocs: [
          {
            type: "definition",
            titre: "Les glucides",
            texte: "Les glucides comprennent notamment des sucres simples comme le glucose et des molécules plus grandes comme l’amidon. L’amidon est abondant dans de nombreuses graines et racines consommées, notamment le riz et le manioc. Après digestion, une partie des glucides fournit du glucose à l’organisme."
          },
          {
            type: "definition",
            titre: "Les lipides",
            texte: "Les lipides comprennent les matières grasses présentes dans l’huile, les graines, certains poissons ou les produits laitiers. Ils constituent une réserve énergétique et entrent dans la composition des membranes cellulaires. Ils sont généralement peu solubles dans l’eau."
          },
          {
            type: "definition",
            titre: "Les protides",
            texte: "Les protides comprennent les acides aminés, les peptides et les protéines. Une protéine est formée d’une ou plusieurs chaînes d’acides aminés. Les protéines alimentaires sont notamment présentes dans les légumineuses, les œufs, le poisson, la viande et le lait."
          },
          {
            type: "exemple",
            titre: "Un même aliment peut apporter plusieurs familles",
            texte: "Une graine de haricot apporte notamment des glucides et des protéines. Les arachides apportent des lipides et des protéines. Il est donc incorrect de dire qu’un aliment appartient toujours à une seule famille chimique."
          },
          {
            type: "remarque",
            titre: "Fibres alimentaires",
            texte: "Certains constituants végétaux, comme la cellulose, sont des glucides que l’être humain ne digère pas avec ses propres enzymes. Ils participent aux fibres alimentaires, utiles notamment au transit intestinal."
          }
        ]
      },

      {
        id: 4,
        titre: "Étudier la composition du pain, du riz et du lait",
        blocs: [
          {
            type: "introduction",
            titre: "Des aliments composés",
            texte: "Le pain, le riz et le lait ne contiennent pas les mêmes constituants dans les mêmes proportions. Leur composition varie selon leur préparation : on ne doit donc pas attribuer une valeur unique à tous les pains, riz ou laits."
          },
          {
            type: "tableau",
            titre: "Comparaison qualitative",
            entetes: ["Aliment", "Constituants importants", "Précision"],
            lignes: [
              ["Pain", "Amidon, eau, protéines et sels minéraux.", "Sa composition dépend notamment de la farine et de la recette."],
              ["Riz", "Amidon, protéines et sels minéraux.", "Le riz cuit contient davantage d’eau que le riz sec."],
              ["Lait", "Beaucoup d’eau, lactose, protéines, lipides et sels minéraux.", "La quantité de lipides dépend notamment du type de lait."]
            ]
          },
          {
            type: "definition",
            titre: "Lactose",
            texte: "Le lactose est un glucide présent dans le lait. Il ne faut pas le confondre avec l’amidon, principal glucide de réserve du riz et de la farine de céréales."
          },
          {
            type: "methode",
            titre: "Mettre en évidence l’amidon",
            texte: "Déposer une goutte d’eau iodée sur un petit morceau de pain ou de riz cuit. Une coloration bleu-noir indique la présence d’amidon. Comparer avec un témoin sans amidon, par exemple de l’eau, et un témoin contenant de l’amidon connu. Ne pas consommer les échantillons après ajout de réactif."
          },
          {
            type: "methode",
            titre: "Rechercher des lipides",
            texte: "Déposer une petite quantité d’aliment sur du papier non glacé et laisser sécher. Une tache translucide persistante peut indiquer la présence de lipides. Comparer avec une goutte d’huile comme témoin positif et une goutte d’eau comme témoin négatif. Ce test est indicatif et peut nécessiter des vérifications complémentaires."
          },
          {
            type: "methode",
            titre: "Rechercher des protéines",
            texte: "Le test du Biuret donne une coloration violette en présence de liaisons peptidiques, notamment dans les protéines. Comparer l’échantillon avec un témoin positif contenant une protéine connue et un témoin négatif sans protéine. Le réactif étant corrosif, la manipulation est réalisée sous la supervision d’un enseignant, avec protections adaptées."
          },
          {
            type: "remarque",
            titre: "Interpréter un test",
            texte: "Un résultat positif révèle le constituant recherché dans les conditions du test ; un résultat négatif ne prouve pas toujours son absence totale, car la quantité peut être trop faible pour être détectée. Les témoins permettent de vérifier que le test fonctionne."
          },
          {
            type: "schema",
            titre: "Comparer un échantillon à des témoins",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 240" role="img" aria-labelledby="svt3s2t svt3s2d">
  <title id="svt3s2t">Test de l'amidon à l'eau iodée</title>
  <desc id="svt3s2d">Le riz et le témoin positif contenant de l'amidon deviennent bleu-noir avec l'eau iodée. Le témoin négatif constitué d'eau ne devient pas bleu-noir.</desc>
  <rect width="660" height="240" fill="#fff"/>
  <text x="330" y="28" text-anchor="middle" font-size="19">Ajouter de l'eau iodée</text>
  <rect x="35" y="65" width="175" height="95" rx="8" fill="#e2e5fa" stroke="#555"/>
  <rect x="242" y="65" width="175" height="95" rx="8" fill="#e2e5fa" stroke="#555"/>
  <rect x="450" y="65" width="175" height="95" rx="8" fill="#fff3d4" stroke="#555"/>
  <text x="122" y="95" text-anchor="middle" font-size="16">Riz cuit</text>
  <text x="122" y="128" text-anchor="middle" font-size="16">Bleu-noir</text>
  <text x="329" y="95" text-anchor="middle" font-size="16">Amidon connu</text>
  <text x="329" y="128" text-anchor="middle" font-size="16">Bleu-noir</text>
  <text x="537" y="95" text-anchor="middle" font-size="16">Eau seule</text>
  <text x="537" y="128" text-anchor="middle" font-size="16">Pas de bleu-noir</text>
  <text x="122" y="195" text-anchor="middle" font-size="15">Échantillon</text>
  <text x="329" y="195" text-anchor="middle" font-size="15">Témoin positif</text>
  <text x="537" y="195" text-anchor="middle" font-size="15">Témoin négatif</text>
</svg>`,
            legende: "Les couleurs sont représentées de manière simplifiée. Le témoin positif vérifie que le test peut révéler l’amidon ; le témoin négatif sert de comparaison."
          }
        ]
      },

      {
        id: 5,
        titre: "De l’aliment à l’utilisation par l’organisme",
        blocs: [
          {
            type: "definition",
            titre: "Digestion",
            texte: "La digestion est l’ensemble des transformations qui réduisent une partie des aliments en molécules suffisamment petites pour être absorbées. Elle associe des actions mécaniques, comme la mastication, et des transformations chimiques réalisées notamment par des enzymes."
          },
          {
            type: "definition",
            titre: "Absorption intestinale",
            texte: "L’absorption intestinale est le passage de substances issues de la digestion à travers la paroi de l’intestin vers le milieu intérieur. Elles sont ensuite transportées vers les organes. Les lipides absorbés empruntent en grande partie la lymphe avant de rejoindre le sang."
          },
          {
            type: "exemple",
            titre: "Du riz aux cellules",
            texte: "Le riz apporte notamment de l’amidon. La digestion transforme progressivement l’amidon en sucres plus simples, dont le glucose. Après absorption intestinale, le glucose est transporté par le sang vers les organes. Les cellules peuvent l’utiliser notamment pour libérer de l’énergie."
          },
          {
            type: "schema",
            titre: "Le devenir simplifié d’un aliment",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 180" role="img" aria-labelledby="svt3s3t svt3s3d">
  <title id="svt3s3t">De l'aliment aux cellules</title>
  <desc id="svt3s3d">L'aliment est digéré en nutriments, qui sont absorbés puis transportés vers les cellules.</desc>
  <defs><marker id="svt3fleche" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="700" height="180" fill="#fff"/>
  <rect x="10" y="60" width="130" height="60" rx="8" fill="#e1efd8" stroke="#39733a"/>
  <rect x="185" y="60" width="130" height="60" rx="8" fill="#f7ecd2" stroke="#98783a"/>
  <rect x="360" y="60" width="130" height="60" rx="8" fill="#e0eff8" stroke="#527b95"/>
  <rect x="545" y="60" width="140" height="60" rx="8" fill="#f3dfdc" stroke="#965c53"/>
  <text x="75" y="95" text-anchor="middle" font-size="16">Aliment</text>
  <text x="250" y="95" text-anchor="middle" font-size="16">Nutriments</text>
  <text x="425" y="88" text-anchor="middle" font-size="15">Sang et</text>
  <text x="425" y="108" text-anchor="middle" font-size="15">lymphe</text>
  <text x="615" y="95" text-anchor="middle" font-size="16">Cellules</text>
  <path d="M140 90 L180 90 M315 90 L355 90 M490 90 L540 90" stroke="#444" stroke-width="2" marker-end="url(#svt3fleche)"/>
  <text x="160" y="48" text-anchor="middle" font-size="13">Digestion</text>
  <text x="337" y="145" text-anchor="middle" font-size="13">Absorption</text>
  <text x="515" y="48" text-anchor="middle" font-size="13">Transport</text>
</svg>`,
            legende: "Schéma simplifié : tous les constituants alimentaires ne suivent pas exactement le même trajet."
          },
          {
            type: "rappel",
            titre: "À retenir",
            texte: "Les phytophages consomment surtout des végétaux, les zoophages surtout des animaux et les omnivores des aliments des deux origines. Les aliments sont souvent composés de plusieurs constituants. Pain et riz apportent notamment de l’amidon ; le lait apporte notamment de l’eau, du lactose et des protéines. La digestion et l’absorption rendent certaines substances alimentaires disponibles pour l’organisme."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Un zébu mange surtout de l’herbe, une araignée capture des insectes et une personne consomme des légumes, du riz et du poisson. Identifier le régime alimentaire de chacun.",
        correction: "Le zébu est phytophage : il consomme surtout des végétaux. L’araignée est zoophage : elle consomme des animaux. La personne a ici une alimentation omnivore : elle consomme des aliments d’origine végétale et animale."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Associer chaque constituant à sa famille : amidon, huile, protéine du lait, glucose. Un aliment peut-il contenir plusieurs de ces familles ?",
        correction: "L’amidon et le glucose sont des glucides. L’huile est constituée principalement de lipides. Une protéine du lait appartient aux protides. Oui, un même aliment peut contenir plusieurs familles : le lait contient notamment des glucides, des protéines et des lipides."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Une goutte d’eau iodée devient bleu-noir sur du riz cuit. Que peut-on conclure ? Ce résultat prouve-t-il que le riz ne contient aucun autre constituant ?",
        correction: "La coloration bleu-noir indique la présence d’amidon dans le riz testé. Elle ne prouve pas que le riz ne contient que de l’amidon : le riz contient aussi notamment de l’eau après cuisson, des protéines et des sels minéraux."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "On souhaite rechercher des protéines dans un échantillon de lait avec le test du Biuret. Proposer un témoin positif et un témoin négatif. Quelle coloration est attendue si le test est positif ?",
        correction: "On peut utiliser comme témoin positif une solution contenant une protéine connue, et comme témoin négatif de l’eau sans protéine. Le même réactif est ajouté aux trois échantillons dans des conditions comparables. Une coloration violette indique un résultat positif. Le témoin positif doit devenir violet ; le témoin négatif ne doit pas devenir violet. La manipulation du réactif corrosif doit être encadrée."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Expliquer la différence entre aliment et nutriment en utilisant le riz et le glucose.",
        correction: "Le riz est un aliment : c’est ce que l’on consomme. Il contient notamment de l’amidon. La digestion transforme progressivement cet amidon en molécules plus simples, dont le glucose. Le glucose absorbé est un nutriment utilisable par l’organisme."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève affirme : « Le lait est un aliment simple parce qu’il est liquide. » Expliquer pourquoi son raisonnement est incorrect.",
        correction: "L’état liquide ou solide ne détermine pas si un aliment contient un seul constituant. Le lait est un aliment composé : il contient notamment de l’eau, du lactose, des protéines, des lipides et des sels minéraux. Plusieurs constituants sont donc présents dans un même liquide."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Une portion fictive de pain de 100 g contient 50 g de glucides et 8 g de protéines. Calculer la masse totale de ces deux constituants, puis la proportion qu’ils représentent dans la portion. Cela signifie-t-il que les 42 g restants sont uniquement des lipides ?",
        correction: "La masse totale de glucides et de protéines est 50 + 8 = 58 g. Dans une portion de 100 g, cela représente 58 %. Les 42 g restants ne sont pas nécessairement des lipides : ils peuvent comprendre de l’eau, des sels minéraux, des lipides et d’autres constituants. Ces valeurs sont fictives et ne représentent pas tous les pains."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un morceau de papier reçoit une goutte d’huile et un autre une goutte d’eau. Après séchage, seule la tache d’huile reste translucide. Quel est l’intérêt de cette comparaison ? Une tache translucide suffit-elle toujours à identifier avec certitude un lipide ?",
        correction: "L’huile sert de témoin positif : elle montre l’aspect attendu avec une substance riche en lipides. L’eau sert de témoin négatif : sa trace disparaît après séchage. Une tache persistante sur un aliment constitue un indice de présence de lipides, mais le test reste indicatif ; une autre méthode peut être nécessaire pour confirmer le résultat."
      }
    ]
  }
]);
