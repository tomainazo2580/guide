enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch11",
    titre: "Chapitre 11 : Chaleur, température et calorimétrie",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch11-temperature-chaleur",
        titre: "1. Température et transfert thermique",
        blocs: [
          {
            type: "introduction",
            titre: "Une situation familière",
            texte: "Une cuillère froide plongée dans de l’eau chaude se réchauffe, tandis que l’eau se refroidit légèrement. De l’énergie est transférée de l’eau vers la cuillère : ce transfert est appelé transfert thermique."
          },
          {
            type: "definition",
            titre: "Température",
            texte: "La température indique l’état thermique d’un corps. Elle se mesure avec un thermomètre, notamment en degrés Celsius (°C) ou en kelvins (K). Elle ne doit pas être confondue avec la quantité d’énergie transférée."
          },
          {
            type: "regle",
            titre: "Conversion",
            texte: "T(K) = θ(°C) + 273,15. Une variation de température de 1 °C est égale à une variation de 1 K. Par exemple, passer de 20 °C à 25 °C correspond à une variation de 5 °C, soit 5 K."
          },
          {
            type: "definition",
            titre: "Chaleur",
            texte: "La chaleur, notée Q, est une énergie transférée entre des systèmes en raison d’une différence de température. Son unité dans le Système international est le joule (J). On parle de chaleur échangée, et non de chaleur contenue dans un corps."
          },
          {
            type: "schema",
            titre: "Transfert thermique et équilibre",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 180' role='img' aria-label='Deux corps en contact : un transfert thermique se produit du corps chaud vers le corps froid jusqu’à l’équilibre thermique.'><rect x='25' y='45' width='150' height='75' rx='8' fill='#ffd0c2' stroke='#a33'/><text x='100' y='76' text-anchor='middle' font-size='18'>Corps chaud</text><text x='100' y='102' text-anchor='middle' font-size='16'>température élevée</text><line x1='190' y1='82' x2='385' y2='82' stroke='#333' stroke-width='3'/><polygon points='385,82 370,74 370,90' fill='#333'/><text x='287' y='64' text-anchor='middle' font-size='16'>transfert thermique</text><rect x='405' y='45' width='160' height='75' rx='8' fill='#cfe8ff' stroke='#267'/><text x='485' y='76' text-anchor='middle' font-size='18'>Corps froid</text><text x='485' y='102' text-anchor='middle' font-size='16'>température plus basse</text><text x='300' y='155' text-anchor='middle' font-size='16'>À l’équilibre thermique : mêmes températures</text></svg>",
            legende: "Le transfert thermique spontané va du corps le plus chaud vers le corps le plus froid. Il cesse d’être net lorsque l’équilibre thermique est atteint."
          },
          {
            type: "remarque",
            titre: "Attention à la comparaison",
            texte: "Un petit objet à 80 °C a une température supérieure à celle d’une grande quantité d’eau à 40 °C. Cela ne permet pas, à lui seul, de comparer toutes les énergies que ces deux systèmes peuvent échanger : la masse et la nature de la matière interviennent aussi."
          }
        ]
      },

      {
        id: "sp1-ch11-capacite-thermique",
        titre: "2. Énergie échangée lors d’une variation de température",
        blocs: [
          {
            type: "definition",
            titre: "Capacité thermique massique",
            texte: "La capacité thermique massique c caractérise l’énergie nécessaire pour faire varier la température d’une unité de masse d’une substance. Elle s’exprime en J·kg⁻¹·K⁻¹. Pour l’eau liquide, on utilise souvent c = 4 180 J·kg⁻¹·K⁻¹."
          },
          {
            type: "regle",
            titre: "Formule de calorimétrie",
            texte: "Pour une masse m dont la température passe de θi à θf, sans changement d’état et avec une capacité thermique massique supposée constante : Q = m × c × (θf − θi). Avec m en kg et c en J·kg⁻¹·K⁻¹, Q est en J."
          },
          {
            type: "tableau",
            titre: "Convention de signes",
            entetes: ["Évolution du corps", "Variation θf − θi", "Signe de Q", "Interprétation"],
            lignes: [
              ["Le corps se réchauffe", "Positive", "Q > 0", "Il reçoit de l’énergie par transfert thermique."],
              ["Le corps se refroidit", "Négative", "Q < 0", "Il cède de l’énergie par transfert thermique."],
              ["Sa température ne change pas", "Nulle", "Q = 0 dans le cadre de la formule", "La formule ne décrit pas un changement d’état."]
            ]
          },
          {
            type: "definition",
            titre: "Capacité thermique d’un objet",
            texte: "La capacité thermique C d’un objet est le produit de sa masse par sa capacité thermique massique : C = m × c. Elle s’exprime en J·K⁻¹. Si C est connue et constante, on peut écrire Q = C × (θf − θi)."
          },
          {
            type: "exemple",
            titre: "Chauffage d’une masse d’eau",
            texte: "On chauffe 0,50 kg d’eau de 20 °C à 30 °C. Avec c = 4 180 J·kg⁻¹·K⁻¹ : Q = 0,50 × 4 180 × (30 − 20) = 20 900 J. Q est positif : l’eau reçoit 20 900 J."
          },
          {
            type: "methode",
            titre: "Calculer Q",
            texte: "1. Identifier le corps étudié et relever sa température initiale puis finale. 2. Convertir sa masse en kilogrammes si c est exprimée en J·kg⁻¹·K⁻¹. 3. Calculer θf − θi en respectant l’ordre. 4. Appliquer Q = mc(θf − θi). 5. Interpréter le signe."
          }
        ]
      },

      {
        id: "sp1-ch11-calorimetre",
        titre: "3. Mélanges et calorimètre",
        blocs: [
          {
            type: "definition",
            titre: "Calorimètre",
            texte: "Un calorimètre est un récipient conçu pour limiter les échanges thermiques avec l’extérieur. Il permet d’étudier les transferts entre les corps placés à l’intérieur. Le récipient lui-même peut aussi recevoir ou céder de l’énergie."
          },
          {
            type: "schema",
            titre: "Bilan thermique dans un calorimètre",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 270' role='img' aria-label='Dans un calorimètre isolé, un corps chaud cède de l’énergie à de l’eau plus froide et éventuellement au calorimètre.'><path d='M100 55 L100 220 Q100 240 120 240 L480 240 Q500 240 500 220 L500 55' fill='#f3f3f3' stroke='#555' stroke-width='5'/><rect x='115' y='120' width='370' height='105' fill='#cfe8ff'/><rect x='210' y='145' width='95' height='55' rx='5' fill='#ffbda9' stroke='#a33'/><text x='257' y='168' text-anchor='middle' font-size='15'>corps</text><text x='257' y='188' text-anchor='middle' font-size='15'>chaud</text><line x1='315' y1='172' x2='385' y2='172' stroke='#333' stroke-width='3'/><polygon points='385,172 373,165 373,179' fill='#333'/><text x='424' y='178' text-anchor='middle' font-size='16'>eau</text><line x1='100' y1='48' x2='500' y2='48' stroke='#555' stroke-width='7'/><text x='300' y='28' text-anchor='middle' font-size='17'>calorimètre fermé, échanges extérieurs négligés</text><text x='300' y='260' text-anchor='middle' font-size='15'>À l’équilibre : température finale commune</text></svg>",
            legende: "Le corps chaud cède de l’énergie ; l’eau plus froide en reçoit. Si le calorimètre se réchauffe, l’énergie qu’il reçoit doit aussi figurer dans le bilan."
          },
          {
            type: "regle",
            titre: "Bilan des échanges",
            texte: "Si les échanges avec l’extérieur sont négligeables et s’il n’y a pas d’autre transfert d’énergie à prendre en compte, la somme algébrique des énergies échangées est nulle : Q1 + Q2 + … = 0. On utilise la même convention de signes pour chaque corps."
          },
          {
            type: "exemple",
            titre: "Mélange de deux masses d’eau",
            texte: "On mélange 0,20 kg d’eau à 60 °C et 0,30 kg d’eau à 20 °C. On néglige les échanges avec l’extérieur et la capacité thermique du récipient. Les deux masses ont la même capacité thermique massique c. À l’équilibre : 0,20c(θf − 60) + 0,30c(θf − 20) = 0. Après simplification par c : 0,50θf − 18 = 0, donc θf = 36 °C."
          },
          {
            type: "methode",
            titre: "Résoudre un problème de mélange",
            texte: "1. Définir les corps et leurs températures initiales. 2. Repérer la température finale commune. 3. Écrire Q pour chaque corps, y compris le calorimètre si sa capacité thermique n’est pas négligeable. 4. Poser la somme des Q égale à zéro si le système est thermiquement isolé. 5. Résoudre et vérifier que le résultat est cohérent."
          },
          {
            type: "remarque",
            titre: "Précaution",
            texte: "Les exemples décrivent des situations d’étude. Ne manipule pas d’eau très chaude ni de dispositif chauffant sans encadrement adapté."
          }
        ]
      },

      {
        id: "sp1-ch11-changement-etat",
        titre: "4. Transfert thermique et changement d’état",
        blocs: [
          {
            type: "definition",
            titre: "Énergie de changement d’état",
            texte: "Lors d’un changement d’état à température constante, une substance peut recevoir ou céder de l’énergie sans que sa température varie. La chaleur latente massique L, exprimée en J·kg⁻¹, donne l’énergie échangée par kilogramme pour la transformation considérée."
          },
          {
            type: "regle",
            titre: "Formule et signes",
            texte: "Pour une transformation complète d’une masse m, la valeur absolue de l’énergie échangée est mL, avec L positive. Ainsi Q = +mL si le corps reçoit de l’énergie, par exemple lors d’une fusion ; Q = −mL s’il en cède, par exemple lors d’une solidification. La formule Q = mcΔθ s’utilise pour les étapes où la température varie sans changement d’état."
          },
          {
            type: "exemple",
            titre: "Fusion de glace",
            texte: "Pour faire fondre complètement 0,10 kg de glace déjà à 0 °C, on donne Lfusion = 334 000 J·kg⁻¹. L’énergie reçue pendant la fusion est Q = 0,10 × 334 000 = 33 400 J. L’eau obtenue est à 0 °C à la fin de cette étape."
          },
          {
            type: "methode",
            titre: "Distinguer les étapes",
            texte: "Si un problème comporte un changement d’état et des variations de température, découper l’évolution en étapes. Utiliser mcΔθ pour chaque étape sans changement d’état et ±mL pour le changement d’état, puis additionner les énergies avec leurs signes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet à 70 °C est mis en contact avec un objet à 20 °C. Dans quel sens se produit le transfert thermique spontané ? Que peut-on dire des températures lorsque les deux objets atteignent l’équilibre thermique ?",
        correction: "Le transfert thermique spontané se fait de l’objet à 70 °C vers celui à 20 °C. À l’équilibre thermique, les deux objets ont la même température."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis 27 °C en kelvins. Une température passe ensuite de 27 °C à 32 °C : quelle est sa variation en °C et en K ?",
        correction: "T = 27 + 273,15 = 300,15 K. La variation est de 32 − 27 = 5 °C, soit 5 K."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une masse de 0,20 kg d’eau liquide passe de 15 °C à 25 °C sans changement d’état. On donne c = 4 180 J·kg⁻¹·K⁻¹. Calcule Q et interprète son signe.",
        correction: "Q = mc(θf − θi) = 0,20 × 4 180 × (25 − 15) = +8 360 J. Le signe positif indique que l’eau reçoit 8 360 J par transfert thermique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de capacité thermique C = 150 J·K⁻¹ se refroidit de 80 °C à 50 °C. Calcule l’énergie Q échangée par l’objet.",
        correction: "Q = C(θf − θi) = 150 × (50 − 80) = −4 500 J. L’objet cède donc 4 500 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un récipient dont la capacité thermique est négligeable, on mélange 0,40 kg d’eau à 50 °C et 0,10 kg d’eau à 20 °C. Les échanges avec l’extérieur sont négligeables. Les deux masses d’eau ont la même capacité thermique massique, constante. Détermine la température finale d’équilibre.",
        correction: "Le bilan donne 0,40c(θf − 50) + 0,10c(θf − 20) = 0. En divisant par c : 0,50θf − 22 = 0. Donc θf = 44 °C. Cette valeur est comprise entre les deux températures initiales."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On fait fondre complètement 0,15 kg de glace initialement à 0 °C. On donne Lfusion = 334 000 J·kg⁻¹. Calcule l’énergie reçue pendant la fusion. Quelle est la température de l’eau obtenue immédiatement à la fin de la fusion, à pression atmosphérique ?",
        correction: "Q = +mLfusion = 0,15 × 334 000 = +50 100 J. À la fin de la fusion, l’eau obtenue est à 0 °C. Le signe positif indique que la glace a reçu de l’énergie."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un bloc métallique de masse 0,20 kg à 100 °C est placé dans 0,20 kg d’eau à 20 °C. Le calorimètre, initialement à 20 °C, a une capacité thermique Ccal = 100 J·K⁻¹. La température finale commune est 27 °C. On donne ceau = 4 180 J·kg⁻¹·K⁻¹. Les échanges avec l’extérieur sont négligeables et aucun changement d’état ne se produit. Détermine la capacité thermique massique du métal.",
        correction: "Le bilan est Qmétal + Qeau + Qcal = 0. Ainsi 0,20 × cmétal × (27 − 100) + 0,20 × 4 180 × (27 − 20) + 100 × (27 − 20) = 0. L’eau reçoit 5 852 J et le calorimètre reçoit 700 J. Donc −14,6cmétal + 6 552 = 0, d’où cmétal ≈ 449 J·kg⁻¹·K⁻¹."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un récipient de capacité thermique négligeable, on place 0,10 kg de glace à 0 °C dans 0,50 kg d’eau à 30 °C. Les échanges avec l’extérieur sont négligeables. À pression atmosphérique, on donne Lfusion = 334 000 J·kg⁻¹ et ceau = 4 180 J·kg⁻¹·K⁻¹. Détermine si toute la glace fond, puis calcule la température finale.",
        correction: "Si l’eau initiale se refroidissait jusqu’à 0 °C, elle pourrait céder 0,50 × 4 180 × 30 = 62 700 J. La fusion complète demande 0,10 × 334 000 = 33 400 J : toute la glace fond. L’eau issue de la glace se réchauffe ensuite de 0 °C à θf. Le bilan est 0,50 × 4 180 × (θf − 30) + 33 400 + 0,10 × 4 180 × θf = 0. Donc 2 508θf − 29 300 = 0, soit θf ≈ 11,7 °C. Cette température positive confirme que toute la glace a fondu."
      }
    ]
  }
]);
