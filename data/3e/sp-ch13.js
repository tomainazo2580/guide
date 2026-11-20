enregistrerChapitres("3e", "sp", [
  {
    id: 13,
    titre: "Chapitre 13 : Résistance électrique et loi d'Ohm",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu'est-ce qu'une résistance électrique ?",
        blocs: [
          {
            type: "introduction",
            titre: "Limiter le courant",
            texte:
              "Dans un circuit électrique, certains composants s'opposent plus que d'autres au passage du courant. Une résistance électrique permet notamment de limiter l'intensité du courant dans une branche."
          },
          {
            type: "definition",
            titre: "Conducteur ohmique",
            texte:
              "Un conducteur ohmique, souvent appelé simplement résistance, est un dipôle qui vérifie la loi d'Ohm lorsque ses conditions de fonctionnement restent adaptées. Sa résistance électrique se note R et s'exprime en ohms, de symbole Ω."
          },
          {
            type: "remarque",
            titre: "Composant et grandeur",
            texte:
              "Le mot « résistance » peut désigner le composant du circuit ou la grandeur R qui caractérise ce composant. Il faut distinguer le contexte."
          },
          {
            type: "regle",
            titre: "Effet sur l'intensité",
            texte:
              "Pour une tension donnée aux bornes d'un conducteur ohmique, plus sa résistance est grande, plus l'intensité qui le traverse est faible."
          }
        ]
      },

      {
        id: 2,
        titre: "Unités et mesure de la résistance",
        blocs: [
          {
            type: "regle",
            titre: "Unités",
            texte:
              "L'unité de résistance est l'ohm, noté Ω. On utilise aussi le kiloohm, noté kΩ, et le mégaohm, noté MΩ. 1 kΩ = 1 000 Ω et 1 MΩ = 1 000 000 Ω."
          },
          {
            type: "exemple",
            titre: "Conversions",
            texte:
              "2,2 kΩ = 2,2 × 1 000 = 2 200 Ω. Inversement, 470 Ω = 470 ÷ 1 000 = 0,47 kΩ."
          },
          {
            type: "definition",
            titre: "Ohmmètre",
            texte:
              "L'ohmmètre mesure la résistance électrique. Un multimètre réglé sur la fonction Ω peut servir d'ohmmètre."
          },
          {
            type: "methode",
            titre: "Mesurer une résistance",
            texte:
              "1. Couper l'alimentation et vérifier que le circuit est hors tension. 2. Isoler le composant du circuit, par exemple en débranchant au moins une de ses bornes. 3. Régler le multimètre sur Ω et choisir un calibre adapté si nécessaire. 4. Placer les pointes de touche aux bornes du composant. 5. Lire la valeur et son unité."
          },
          {
            type: "regle",
            titre: "Précaution",
            texte:
              "Ne jamais utiliser la fonction ohmmètre sur un circuit alimenté. Les mesures scolaires se font sur du matériel adapté, hors tension et sous la surveillance de l'enseignant."
          }
        ]
      },

      {
        id: 3,
        titre: "La loi d'Ohm",
        blocs: [
          {
            type: "definition",
            titre: "Relation entre U, R et I",
            texte:
              "Pour un conducteur ohmique, la tension U à ses bornes est proportionnelle à l'intensité I qui le traverse. La loi d'Ohm s'écrit : U = R × I."
          },
          {
            type: "tableau",
            titre: "Grandeurs et unités",
            entetes: ["Grandeur", "Symbole", "Unité"],
            lignes: [
              ["Tension aux bornes du conducteur", "U", "volt (V)"],
              ["Résistance du conducteur", "R", "ohm (Ω)"],
              ["Intensité qui traverse le conducteur", "I", "ampère (A)"]
            ]
          },
          {
            type: "regle",
            titre: "Trois écritures utiles",
            texte:
              "Pour calculer la tension : U = R × I. Pour calculer l'intensité : I = U ÷ R. Pour calculer la résistance : R = U ÷ I. Avant le calcul, utiliser U en volts, R en ohms et I en ampères."
          },
          {
            type: "exemple",
            titre: "Calculer une tension",
            texte:
              "Un conducteur de résistance R = 20 Ω est traversé par un courant d'intensité I = 0,30 A. D'après la loi d'Ohm : U = R × I = 20 × 0,30 = 6 V."
          },
          {
            type: "remarque",
            titre: "Champ d'application",
            texte:
              "La relation U = R × I avec une résistance R constante s'applique à un conducteur ohmique dans des conditions adaptées. On ne l'utilise pas automatiquement avec une lampe à filament dont la résistance varie fortement lorsqu'elle chauffe."
          }
        ]
      },

      {
        id: 4,
        titre: "Calculs avec la loi d'Ohm",
        blocs: [
          {
            type: "methode",
            titre: "Méthode en cinq étapes",
            texte:
              "1. Relever les données et la grandeur recherchée. 2. Convertir en volts, ampères et ohms. 3. Choisir la bonne formule. 4. Remplacer les lettres par les valeurs et calculer. 5. Donner le résultat avec son unité."
          },
          {
            type: "exemple",
            titre: "Calculer une intensité",
            texte:
              "Pour R = 100 Ω et U = 6 V : I = U ÷ R = 6 ÷ 100 = 0,06 A. Comme 1 A = 1 000 mA, on obtient I = 60 mA."
          },
          {
            type: "exemple",
            titre: "Calculer une résistance",
            texte:
              "Un conducteur est traversé par I = 200 mA sous une tension U = 8 V. On convertit : 200 mA = 0,200 A. Donc R = U ÷ I = 8 ÷ 0,200 = 40 Ω."
          },
          {
            type: "remarque",
            titre: "Erreur fréquente",
            texte:
              "Il ne faut pas remplacer directement I par une valeur en milliampères dans U = R × I lorsque R est en ohms. Il faut d'abord convertir les milliampères en ampères."
          }
        ]
      },

      {
        id: 5,
        titre: "Caractéristique d'un conducteur ohmique",
        blocs: [
          {
            type: "definition",
            titre: "Caractéristique",
            texte:
              "La caractéristique tension-intensité d'un dipôle représente la tension U en fonction de l'intensité I. Pour la tracer, on place généralement I en abscisse et U en ordonnée."
          },
          {
            type: "regle",
            titre: "Forme du graphique",
            texte:
              "Pour un conducteur ohmique de résistance constante, U = R × I. La caractéristique est donc une droite passant par l'origine. Le rapport U ÷ I est constant pour les points où I est différent de zéro."
          },
          {
            type: "exemple",
            titre: "Exploiter des mesures",
            texte:
              "On mesure U = 2 V pour I = 0,10 A, puis U = 4 V pour I = 0,20 A. Dans les deux cas : U ÷ I = 20 Ω. Ces mesures sont compatibles avec une résistance constante de 20 Ω."
          },
          {
            type: "remarque",
            titre: "Pente de la droite",
            texte:
              "Si U est en volts sur l'axe vertical et I en ampères sur l'axe horizontal, la pente de la droite vaut R en ohms. Attention aux conversions si l'axe des intensités est gradué en milliampères."
          }
        ]
      },

      {
        id: 6,
        titre: "Associations de résistances",
        blocs: [
          {
            type: "definition",
            titre: "Résistance équivalente",
            texte:
              "La résistance équivalente d'une association est la résistance d'un conducteur ohmique unique qui aurait le même effet électrique que l'association vue de ses deux bornes."
          },
          {
            type: "regle",
            titre: "Résistances en série",
            texte:
              "Pour deux résistances en série, la résistance équivalente est la somme : R équivalente = R₁ + R₂."
          },
          {
            type: "exemple",
            titre: "Exemple en série",
            texte:
              "Si R₁ = 30 Ω et R₂ = 20 Ω, alors R équivalente = 30 + 20 = 50 Ω. Sous une tension de 10 V aux bornes de l'ensemble, l'intensité vaut I = 10 ÷ 50 = 0,20 A."
          },
          {
            type: "remarque",
            titre: "En dérivation",
            texte:
              "Pour deux résistances en dérivation, la résistance équivalente n'est pas la somme des deux résistances. Elle est plus petite que chacune d'elles. Pour deux résistances identiques R en dérivation, elle vaut R ÷ 2."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce:
          "Quel est le symbole de la résistance électrique ? Quelle est son unité ? Quel appareil permet de la mesurer ?",
        correction:
          "La résistance électrique se note R. Son unité est l'ohm, de symbole Ω. On la mesure avec un ohmmètre, circuit hors tension."
      },
      {
        niveau: 1,
        points: 3,
        enonce:
          "Convertis : a) 3 kΩ en Ω ; b) 750 Ω en kΩ ; c) 0,5 MΩ en Ω.",
        correction:
          "a) 3 kΩ = 3 × 1 000 = 3 000 Ω. b) 750 Ω = 750 ÷ 1 000 = 0,75 kΩ. c) 0,5 MΩ = 0,5 × 1 000 000 = 500 000 Ω."
      },
      {
        niveau: 1,
        points: 2,
        enonce:
          "Énonce la loi d'Ohm et précise les unités utilisées.",
        correction:
          "Pour un conducteur ohmique, U = R × I, avec U en volts, R en ohms et I en ampères."
      },
      {
        niveau: 2,
        points: 3,
        enonce:
          "Un conducteur ohmique de résistance 50 Ω est traversé par un courant de 0,12 A. Calcule la tension à ses bornes.",
        correction:
          "Données : R = 50 Ω et I = 0,12 A. Loi d'Ohm : U = R × I. Donc U = 50 × 0,12 = 6 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce:
          "Un conducteur de résistance 200 Ω est soumis à une tension de 9 V. Calcule l'intensité en ampères puis en milliampères.",
        correction:
          "I = U ÷ R = 9 ÷ 200 = 0,045 A. Or 0,045 × 1 000 = 45. L'intensité vaut donc 0,045 A, soit 45 mA."
      },
      {
        niveau: 2,
        points: 3,
        enonce:
          "Un conducteur ohmique est soumis à 12 V et traversé par 300 mA. Calcule sa résistance.",
        correction:
          "On convertit d'abord l'intensité : 300 mA = 0,300 A. Puis R = U ÷ I = 12 ÷ 0,300 = 40 Ω."
      },
      {
        niveau: 3,
        points: 3,
        enonce:
          "On mesure les couples suivants pour un dipôle : I = 0,10 A et U = 3 V ; puis I = 0,20 A et U = 6 V. Ces mesures sont-elles compatibles avec un conducteur ohmique ? Donne sa résistance.",
        correction:
          "Premier rapport : U ÷ I = 3 ÷ 0,10 = 30 Ω. Second rapport : U ÷ I = 6 ÷ 0,20 = 30 Ω. Les rapports sont égaux : ces deux mesures sont compatibles avec un conducteur ohmique de résistance 30 Ω. Deux mesures seules ne suffisent toutefois pas à établir son comportement dans toutes les conditions."
      },
      {
        niveau: 3,
        points: 3,
        enonce:
          "Deux résistances de 120 Ω et 80 Ω sont montées en série. Calcule leur résistance équivalente, puis l'intensité du courant si la tension aux bornes de l'ensemble est 10 V.",
        correction:
          "En série : R équivalente = 120 + 80 = 200 Ω. Avec la loi d'Ohm appliquée à l'ensemble : I = U ÷ R équivalente = 10 ÷ 200 = 0,05 A, soit 50 mA."
      },
      {
        niveau: 3,
        points: 3,
        enonce:
          "Deux résistances identiques de 100 Ω sont branchées en dérivation. Quelle est leur résistance équivalente ? Quelle intensité totale circule si l'ensemble est soumis à 10 V ?",
        correction:
          "Pour deux résistances identiques en dérivation : R équivalente = 100 ÷ 2 = 50 Ω. L'intensité totale vaut I = U ÷ R équivalente = 10 ÷ 50 = 0,20 A. On retrouve ce résultat en calculant 10 ÷ 100 = 0,10 A dans chaque branche, puis en additionnant les deux intensités."
      },
      {
        niveau: 4,
        points: 5,
        enonce:
          "Exercice type BEPC. Deux conducteurs ohmiques R₁ = 40 Ω et R₂ = 60 Ω sont montés en série aux bornes d'un générateur de 12 V. 1. Calcule la résistance équivalente. 2. Calcule l'intensité du courant en A puis en mA. 3. Calcule la tension aux bornes de chaque conducteur. 4. Vérifie la loi des tensions.",
        correction:
          "1. En série : R équivalente = R₁ + R₂ = 40 + 60 = 100 Ω. 2. I = U ÷ R équivalente = 12 ÷ 100 = 0,12 A = 120 mA. Cette intensité est la même dans les deux conducteurs. 3. U₁ = R₁ × I = 40 × 0,12 = 4,8 V. U₂ = R₂ × I = 60 × 0,12 = 7,2 V. 4. U₁ + U₂ = 4,8 + 7,2 = 12 V : on retrouve la tension du générateur."
      }
    ]
  }
]);
