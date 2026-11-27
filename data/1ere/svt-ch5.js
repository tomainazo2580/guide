enregistrerChapitres("1ere", "svt", [
  {
    id: 5,
    titre: "Chapitre 5 : La digestion des aliments",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le trajet des aliments dans l’appareil digestif",
        blocs: [
          {
            type: "introduction",
            titre: "Des aliments aux nutriments",
            texte: "Les aliments que nous mangeons contiennent notamment des glucides, des lipides et des protéines. Une partie de ces constituants est formée de grosses molécules qui ne peuvent pas être directement absorbées en l’état. La digestion les transforme en molécules plus petites, appelées nutriments, qui peuvent traverser la paroi intestinale."
          },
          {
            type: "definition",
            titre: "Tube digestif",
            texte: "Le tube digestif est le trajet parcouru par les aliments depuis la bouche jusqu’à l’anus. Il comprend notamment la bouche, l’œsophage, l’estomac, l’intestin grêle et le gros intestin."
          },
          {
            type: "definition",
            titre: "Glandes digestives",
            texte: "Les glandes digestives produisent des sécrétions déversées dans le tube digestif. Les glandes salivaires produisent la salive ; le pancréas produit le suc pancréatique ; le foie produit la bile. L’estomac et l’intestin produisent également des sécrétions digestives."
          },
          {
            type: "schema",
            titre: "Organisation simplifiée de l’appareil digestif",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 510" role="img" aria-labelledby="svt5s1t svt5s1d">
  <title id="svt5s1t">Appareil digestif humain simplifié</title>
  <desc id="svt5s1d">Le trajet des aliments va de la bouche à l'œsophage, puis à l'estomac, à l'intestin grêle, au gros intestin et à l'anus. Le foie et le pancréas déversent leurs sécrétions dans l'intestin grêle.</desc>
  <defs>
    <marker id="svt5a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="680" height="510" fill="#fff"/>
  <ellipse cx="310" cy="45" rx="50" ry="20" fill="#f4d5c4" stroke="#765"/>
  <text x="310" y="51" text-anchor="middle" font-size="16">Bouche</text>
  <path d="M310 65 L310 115" stroke="#765" stroke-width="12"/>
  <text x="355" y="95" font-size="16">Œsophage</text>
  <path d="M310 115 Q365 105 370 155 Q365 205 310 195 Q275 185 285 145 Z" fill="#f4d5c4" stroke="#765" stroke-width="3"/>
  <text x="325" y="160" text-anchor="middle" font-size="15">Estomac</text>
  <path d="M160 125 Q205 95 260 125 L250 170 L170 170 Z" fill="#c99b72" stroke="#765" stroke-width="2"/>
  <text x="205" y="150" text-anchor="middle" font-size="16">Foie</text>
  <path d="M215 170 L215 205 L285 220" fill="none" stroke="#8c9a48" stroke-width="3" marker-end="url(#svt5a1)"/>
  <text x="125" y="205" font-size="15">Bile</text>
  <ellipse cx="420" cy="220" rx="65" ry="18" fill="#f2d99f" stroke="#987"/>
  <text x="420" y="225" text-anchor="middle" font-size="15">Pancréas</text>
  <path d="M365 220 L330 235" fill="none" stroke="#444" stroke-width="2" marker-end="url(#svt5a1)"/>
  <path d="M240 250 L240 410 L390 410 L390 250" fill="none" stroke="#b77e69" stroke-width="28" stroke-linecap="round"/>
  <path d="M285 240 Q350 250 300 275 Q255 295 330 305 Q370 315 290 335 Q260 350 340 365 Q360 375 300 390" fill="none" stroke="#e7bca4" stroke-width="13"/>
  <path d="M315 420 L315 465" stroke="#b77e69" stroke-width="14"/>
  <text x="420" y="320" font-size="16">Gros intestin</text>
  <text x="65" y="315" font-size="16">Intestin grêle</text>
  <path d="M185 310 L270 310" stroke="#444" stroke-width="2" marker-end="url(#svt5a1)"/>
  <text x="340" y="465" font-size="16">Anus</text>
</svg>`,
            legende: "Schéma simplifié, non à l’échelle. Les aliments passent dans le tube digestif, mais ne traversent pas le foie ni le pancréas."
          },
          {
            type: "remarque",
            titre: "Le rôle de la bile",
            texte: "La bile est produite par le foie et déversée dans l’intestin grêle. Elle facilite la dispersion des graisses en fines gouttelettes : c’est l’émulsion. La bile n’est pas une enzyme et ne découpe pas elle-même les lipides en nutriments."
          }
        ]
      },

      {
        id: 2,
        titre: "Transformations mécaniques et chimiques",
        blocs: [
          {
            type: "definition",
            titre: "Transformations mécaniques",
            texte: "Les transformations mécaniques fragmentent et mélangent les aliments sans changer directement la nature de leurs molécules. La mastication réduit les aliments en morceaux et les mélange à la salive. Les mouvements de l’estomac et de l’intestin brassent et font progresser leur contenu."
          },
          {
            type: "definition",
            titre: "Transformations chimiques",
            texte: "Les transformations chimiques modifient les molécules des aliments. Dans le tube digestif, des enzymes découpent de grosses molécules en molécules plus petites. Par exemple, l’amidon est progressivement transformé en sucres simples."
          },
          {
            type: "definition",
            titre: "Enzyme digestive",
            texte: "Une enzyme digestive est une protéine qui accélère une réaction chimique de digestion. Elle agit sur une ou plusieurs substances déterminées, appelées substrats. L’enzyme facilite la transformation sans être consommée comme un réactif au cours de la réaction."
          },
          {
            type: "exemple",
            titre: "Une action spécifique",
            texte: "L’amylase agit sur l’amidon. Elle ne remplace pas les enzymes qui digèrent les protéines ou les lipides. La digestion d’un aliment composé nécessite donc plusieurs enzymes."
          },
          {
            type: "remarque",
            titre: "Conditions d’action",
            texte: "L’activité d’une enzyme dépend notamment de la température et du pH du milieu. Chaque enzyme possède des conditions favorables à son activité. Une température très élevée peut modifier sa structure et lui faire perdre son activité : on parle de dénaturation."
          },
          {
            type: "tableau",
            titre: "Quelques lieux de la digestion",
            entetes: ["Lieu", "Transformations principales"],
            lignes: [
              ["Bouche", "Mastication et mélange à la salive ; début de la digestion de l’amidon par l’amylase salivaire."],
              ["Estomac", "Brassage ; début important de la digestion des protéines par des enzymes comme la pepsine, en milieu acide."],
              ["Intestin grêle", "Poursuite et achèvement d’une grande partie de la digestion ; absorption de nombreux nutriments."],
              ["Gros intestin", "Absorption d’une partie de l’eau et de certains ions ; activité de micro-organismes sur des résidus alimentaires."]
            ]
          }
        ]
      },

      {
        id: 3,
        titre: "Expérience : l’action de la salive sur l’amidon du pain",
        blocs: [
          {
            type: "introduction",
            titre: "La question",
            texte: "Lorsqu’on mâche longtemps du pain, une saveur légèrement sucrée peut apparaître. On cherche à savoir si la salive transforme une partie de l’amidon du pain en sucres plus simples."
          },
          {
            type: "methode",
            titre: "Protocole expérimental",
            texte: "Préparer deux tubes contenant la même quantité de suspension d’amidon de pain. Ajouter de la salive fraîche dans le tube A et le même volume d’eau dans le tube B, qui sert de témoin. Maintenir les deux tubes à une température proche de 37 °C pendant une durée identique. Prélever ensuite une petite quantité de chaque tube et ajouter de l’eau iodée pour rechercher l’amidon."
          },
          {
            type: "tableau",
            titre: "Résultats possibles",
            entetes: ["Tube", "Contenu", "Résultat à l’eau iodée après incubation"],
            lignes: [
              ["A", "Amidon de pain + salive fraîche.", "Coloration bleu-noir absente ou moins intense si une partie suffisante de l’amidon a été transformée."],
              ["B", "Amidon de pain + eau.", "Coloration bleu-noir : l’amidon reste détectable."]
            ]
          },
          {
            type: "methode",
            titre: "Interprétation",
            texte: "Si le tube A ne présente plus de coloration bleu-noir alors que le tube B se colore, la salive a favorisé la disparition de l’amidon détectable. L’amylase salivaire transforme l’amidon en molécules plus courtes, dont le maltose. Un test complémentaire adapté est nécessaire pour rechercher les sucres formés."
          },
          {
            type: "remarque",
            titre: "Ce que le test prouve et ne prouve pas",
            texte: "L’eau iodée révèle la présence d’amidon ; elle ne permet pas d’identifier à elle seule le glucose ou le maltose. Si la coloration disparaît, cela indique que l’amidon n’est plus détectable dans les conditions du test, mais pas nécessairement qu’il a totalement disparu."
          },
          {
            type: "schema",
            titre: "Comparaison des deux tubes",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 275" role="img" aria-labelledby="svt5s2t svt5s2d">
  <title id="svt5s2t">Expérience de la salive sur l'amidon</title>
  <desc id="svt5s2d">Après incubation puis ajout d'eau iodée, le tube contenant de la salive présente une coloration faible ou absente, tandis que le tube témoin contenant de l'eau devient bleu-noir.</desc>
  <rect width="680" height="275" fill="#fff"/>
  <text x="180" y="35" text-anchor="middle" font-size="18">Tube A : salive</text>
  <text x="500" y="35" text-anchor="middle" font-size="18">Tube B : eau</text>
  <path d="M125 65 L125 180 Q125 220 180 220 Q235 220 235 180 L235 65" fill="#fff8dc" stroke="#555" stroke-width="3"/>
  <path d="M445 65 L445 180 Q445 220 500 220 Q555 220 555 180 L555 65" fill="#77729a" stroke="#555" stroke-width="3"/>
  <text x="180" y="125" text-anchor="middle" font-size="15">Pas de bleu-noir</text>
  <text x="180" y="148" text-anchor="middle" font-size="15">ou coloration faible</text>
  <text x="500" y="135" text-anchor="middle" font-size="16" fill="#fff">Bleu-noir</text>
  <text x="180" y="255" text-anchor="middle" font-size="15">Amidon transformé</text>
  <text x="500" y="255" text-anchor="middle" font-size="15">Témoin : amidon détecté</text>
</svg>`,
            legende: "Résultats possibles après incubation et ajout d’eau iodée sur des prélèvements des deux tubes."
          },
          {
            type: "remarque",
            titre: "Hygiène et sécurité",
            texte: "La salive est un liquide biologique : ne pas partager les échantillons, ne pas les porter à la bouche et respecter les consignes de l’enseignant. Des préparations d’amylase disponibles au laboratoire peuvent remplacer la salive. Les réactifs et le matériel sont manipulés sous supervision."
          }
        ]
      },

      {
        id: 4,
        titre: "Bilan biochimique de la digestion",
        blocs: [
          {
            type: "definition",
            titre: "Hydrolyse",
            texte: "Une grande partie de la digestion chimique repose sur des réactions d’hydrolyse : une liaison d’une grosse molécule est rompue avec intervention d’une molécule d’eau. Les enzymes digestives accélèrent ces réactions."
          },
          {
            type: "tableau",
            titre: "Des constituants alimentaires aux produits absorbables",
            entetes: ["Constituant alimentaire", "Enzymes ou étapes", "Produits principaux"],
            lignes: [
              ["Amidon", "Amylases, puis enzymes intestinales agissant sur les petits glucides.", "Glucose."],
              ["Saccharose", "Sucrase intestinale.", "Glucose et fructose."],
              ["Lactose", "Lactase intestinale.", "Glucose et galactose."],
              ["Protéines", "Protéases et peptidases, notamment dans l’estomac et l’intestin grêle.", "Principalement des acides aminés, ainsi que de petits peptides absorbables."],
              ["Triglycérides alimentaires", "Action des lipases, facilitée par la dispersion des graisses grâce à la bile.", "Acides gras et monoglycérides, principalement."]
            ]
          },
          {
            type: "schema",
            titre: "La digestion découpe les grosses molécules",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 230" role="img" aria-labelledby="svt5s3t svt5s3d">
  <title id="svt5s3t">Transformation des aliments par les enzymes</title>
  <desc id="svt5s3d">L'amidon est progressivement transformé en glucose, les protéines en acides aminés et les triglycérides en acides gras et monoglycérides.</desc>
  <defs>
    <marker id="svt5a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="680" height="230" fill="#fff"/>
  <text x="25" y="55" font-size="17">Amidon</text>
  <path d="M180 50 L390 50" stroke="#444" stroke-width="2" marker-end="url(#svt5a3)"/>
  <text x="280" y="40" text-anchor="middle" font-size="14">Plusieurs enzymes</text>
  <text x="410" y="55" font-size="17">Glucose</text>
  <text x="25" y="120" font-size="17">Protéines</text>
  <path d="M180 115 L390 115" stroke="#444" stroke-width="2" marker-end="url(#svt5a3)"/>
  <text x="280" y="105" text-anchor="middle" font-size="14">Protéases, peptidases</text>
  <text x="410" y="120" font-size="17">Acides aminés</text>
  <text x="25" y="185" font-size="17">Triglycérides</text>
  <path d="M180 180 L390 180" stroke="#444" stroke-width="2" marker-end="url(#svt5a3)"/>
  <text x="280" y="170" text-anchor="middle" font-size="14">Lipases</text>
  <text x="410" y="180" font-size="16">Acides gras et</text>
  <text x="410" y="200" font-size="16">monoglycérides</text>
</svg>`,
            legende: "Chaque flèche résume une ou plusieurs réactions. L’eau intervient dans les hydrolyses."
          },
          {
            type: "remarque",
            titre: "Toutes les substances ne sont pas digérées",
            texte: "L’eau, les ions minéraux et certaines vitamines peuvent être absorbés sans digestion préalable. La cellulose des végétaux n’est pas digérée par les enzymes humaines ; elle constitue une partie des fibres alimentaires et peut être partiellement transformée par des micro-organismes du gros intestin."
          }
        ]
      },

      {
        id: 5,
        titre: "L’absorption intestinale et le devenir des nutriments",
        blocs: [
          {
            type: "definition",
            titre: "Absorption intestinale",
            texte: "L’absorption intestinale est le passage de substances présentes dans l’intestin à travers sa paroi vers le milieu intérieur. Elle se produit principalement dans l’intestin grêle pour les produits de la digestion."
          },
          {
            type: "definition",
            titre: "Villosités intestinales",
            texte: "La paroi interne de l’intestin grêle présente de nombreux replis et villosités. Les cellules de ces villosités portent elles-mêmes de petites expansions appelées microvillosités. Cet ensemble augmente fortement la surface disponible pour les échanges."
          },
          {
            type: "schema",
            titre: "Une villosité intestinale simplifiée",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 310" role="img" aria-labelledby="svt5s4t svt5s4d">
  <title id="svt5s4t">Absorption au niveau d'une villosité intestinale</title>
  <desc id="svt5s4d">Des nutriments présents dans l'intestin traversent la paroi d'une villosité. Le glucose et les acides aminés rejoignent les capillaires sanguins. Les produits lipidiques rejoignent en grande partie la lymphe après transformation dans les cellules.</desc>
  <defs>
    <marker id="svt5a4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="680" height="310" fill="#fff"/>
  <text x="40" y="38" font-size="17">Intérieur de l'intestin grêle</text>
  <path d="M260 275 L260 125 Q260 55 330 55 Q400 55 400 125 L400 275 Z" fill="#fae4d4" stroke="#9a6557" stroke-width="3"/>
  <path d="M285 265 L285 135 Q285 85 315 85 M375 265 L375 135 Q375 85 345 85" fill="none" stroke="#c34f4f" stroke-width="5"/>
  <path d="M330 265 L330 120" stroke="#79a864" stroke-width="8"/>
  <text x="20" y="100" font-size="15">Glucose et</text>
  <text x="20" y="120" font-size="15">acides aminés</text>
  <path d="M145 110 L275 135" stroke="#444" stroke-width="2" marker-end="url(#svt5a4)"/>
  <text x="435" y="95" font-size="15">Produits de</text>
  <text x="435" y="115" font-size="15">digestion des lipides</text>
  <path d="M430 120 L390 145" stroke="#444" stroke-width="2" marker-end="url(#svt5a4)"/>
  <text x="25" y="250" font-size="15">Capillaires sanguins</text>
  <path d="M190 245 L280 230" stroke="#c34f4f" stroke-width="2" marker-end="url(#svt5a4)"/>
  <text x="430" y="250" font-size="15">Vaisseau lymphatique</text>
  <path d="M425 242 L340 230" stroke="#79a864" stroke-width="2" marker-end="url(#svt5a4)"/>
</svg>`,
            legende: "Schéma simplifié d’une villosité. Les produits lipidiques sont transformés dans les cellules intestinales avant de rejoindre en grande partie la lymphe."
          },
          {
            type: "exemple",
            titre: "Deux voies de transport",
            texte: "Le glucose et les acides aminés absorbés rejoignent les capillaires sanguins et passent notamment par le foie avant d’être distribués dans l’organisme. Une grande partie des lipides alimentaires, après absorption et transformation dans les cellules intestinales, rejoint d’abord la lymphe puis le sang."
          },
          {
            type: "remarque",
            titre: "Les résidus non absorbés",
            texte: "Les substances non digérées ou non absorbées poursuivent leur trajet vers le gros intestin. Une partie de l’eau et certains ions y sont absorbés. Les résidus restants contribuent à la formation des selles, éliminées par l’anus."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "La digestion associe des transformations mécaniques et chimiques. Les enzymes digestives découpent notamment l’amidon, les protéines et les lipides en produits absorbables. L’intestin grêle absorbe une grande partie de ces produits grâce à sa vaste surface d’échange. Les nutriments sont ensuite transportés vers les organes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Remettre dans l’ordre les organes traversés par les aliments : estomac, bouche, gros intestin, œsophage, intestin grêle, anus. Les aliments passent-ils dans le foie ?",
        correction: "Le trajet est : bouche → œsophage → estomac → intestin grêle → gros intestin → anus. Les aliments ne passent pas dans le foie. Le foie produit la bile, qui est déversée dans l’intestin grêle."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Classer les phénomènes suivants en transformation mécanique ou chimique : mastication du pain ; découpage de l’amidon par l’amylase ; brassage dans l’estomac ; transformation des protéines par des enzymes.",
        correction: "La mastication et le brassage sont des transformations mécaniques : ils fragmentent ou mélangent les aliments. Le découpage de l’amidon par l’amylase et la transformation des protéines par des enzymes sont des transformations chimiques : les molécules sont modifiées."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Deux tubes contiennent la même quantité d’amidon. On ajoute de la salive fraîche au tube A et de l’eau au tube B. Après incubation dans les mêmes conditions, le tube A ne devient pas bleu-noir à l’eau iodée, tandis que le tube B devient bleu-noir. Interpréter et préciser le rôle du tube B.",
        correction: "Dans le tube B, la coloration bleu-noir montre que l’amidon reste détectable. Dans le tube A, son absence indique que l’amidon n’est plus détectable après l’action de la salive. L’amylase salivaire a donc favorisé sa transformation. Le tube B est un témoin : il permet de comparer avec un mélange sans salive. Le test à l’eau iodée ne permet pas, à lui seul, d’identifier les sucres produits."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève ajoute de l’eau iodée à une suspension d’amidon immédiatement après avoir ajouté de la salive. Le mélange devient bleu-noir. Peut-il conclure que la salive n’agit pas sur l’amidon ?",
        correction: "Non. La réaction enzymatique demande du temps : immédiatement après le mélange, une quantité d’amidon peut encore être détectable. Il faut prévoir une durée d’incubation adaptée, puis comparer avec un témoin contenant de l’amidon et de l’eau, dans les mêmes conditions."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Donner les principaux produits absorbables issus de la digestion : a) de l’amidon ; b) des protéines ; c) des triglycérides.",
        correction: "a) L’amidon est progressivement transformé en glucose. b) Les protéines sont découpées principalement en acides aminés ; de petits peptides peuvent aussi être absorbés. c) Les triglycérides donnent principalement des acides gras et des monoglycérides sous l’action des lipases."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une personne affirme : « La bile digère les graisses parce que c’est une enzyme. » Corriger cette affirmation.",
        correction: "La bile n’est pas une enzyme. Elle facilite la dispersion des graisses en fines gouttelettes : c’est l’émulsion. Cette dispersion facilite l’action des lipases, qui sont les enzymes responsables d’une partie de la digestion chimique des lipides."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Expliquer pourquoi les villosités de l’intestin grêle favorisent l’absorption des nutriments. Indiquer où vont principalement le glucose et les acides aminés après leur passage dans la paroi.",
        correction: "Les nombreuses villosités, associées aux replis et aux microvillosités, augmentent fortement la surface d’échange entre le contenu intestinal et les cellules de la paroi. Le glucose et les acides aminés absorbés rejoignent principalement les capillaires sanguins des villosités, puis sont transportés notamment vers le foie et les autres organes."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une expérience mesure l’activité d’une enzyme digestive à trois températures : 10 °C, 37 °C et 80 °C. Les vitesses observées sont respectivement 2, 10 et 0 unités. Proposer une interprétation sans généraliser à toutes les enzymes.",
        correction: "Dans cette expérience, l’enzyme est plus active à 37 °C qu’à 10 °C : le froid ralentit son activité. À 80 °C, l’activité mesurée est nulle ; une température élevée a pu dénaturer l’enzyme. Ces trois mesures ne suffisent pas à déterminer précisément sa température optimale et ne permettent pas de conclure que toutes les enzymes se comportent exactement de la même façon."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Le riz et l’eau traversent tous deux le tube digestif. Pourquoi dit-on que l’amidon du riz doit être digéré alors que l’eau peut être absorbée directement ?",
        correction: "L’amidon est une grosse molécule : il doit être découpé par des enzymes en molécules plus petites, notamment du glucose, avant leur absorption. L’eau est déjà une petite molécule et peut traverser la paroi intestinale sans avoir été digérée."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Dans une expérience fictive, la quantité d’amidon détectable passe de 10 g à 4 g après incubation avec une préparation d’amylase. Calculer la masse d’amidon qui n’est plus détectée et le pourcentage correspondant à la quantité initiale.",
        correction: "La masse d’amidon qui n’est plus détectée est 10 − 4 = 6 g. Le pourcentage correspondant est (6 ÷ 10) × 100 = 60 %. Dans les conditions de cette mesure, 60 % de la quantité initiale n’est donc plus détectée. Cette valeur ne donne pas directement la masse de glucose produite."
      }
    ]
  }
]);
