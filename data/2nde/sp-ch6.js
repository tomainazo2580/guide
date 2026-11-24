enregistrerChapitres("2nde", "sp", [
  {
    id: 6,
    titre: "Chapitre 6 : La mole et la quantité de matière",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Compter les entités chimiques",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi utiliser la mole ?",
            texte: "Un échantillon de matière contient un très grand nombre d’atomes, de molécules ou d’ions. Il est impossible de les compter un par un. Le chimiste utilise donc une unité adaptée : la mole."
          },
          {
            type: "definition",
            titre: "Entité chimique",
            texte: "Une entité chimique est une particule considérée à l’échelle microscopique. Il peut s’agir notamment d’un atome, d’une molécule ou d’un ion. Pour utiliser la mole, il faut toujours préciser l’entité comptée."
          },
          {
            type: "definition",
            titre: "Quantité de matière",
            texte: "La quantité de matière indique combien de moles d’entités sont présentes dans un échantillon. Elle se note n et son unité est la mole, de symbole mol."
          },
          {
            type: "definition",
            titre: "La mole",
            texte: "Une mole contient exactement 6,02214076 × 10²³ entités. Pour les calculs de ce chapitre, nous utiliserons généralement la valeur arrondie 6,02 × 10²³."
          },
          {
            type: "rappel",
            titre: "Puissances de 10",
            texte: "L’écriture 6,02 × 10²³ signifie 6,02 multiplié par 10 puissance 23. Ce nombre est très grand. Sur une calculatrice, on utilise généralement la touche EXP, EE ou une touche équivalente pour saisir une puissance de 10."
          },
          {
            type: "exemple",
            titre: "Bien préciser les entités",
            texte: "1 mol de molécules d’eau contient environ 6,02 × 10²³ molécules H₂O. Chaque molécule H₂O contient 2 atomes H et 1 atome O. Ainsi, 1 mol de molécules H₂O contient 2 mol d’atomes H et 1 mol d’atomes O."
          },
          {
            type: "remarque",
            titre: "Une comparaison",
            texte: "Comme une douzaine représente 12 objets, une mole représente un nombre précis d’entités. Mais une mole correspond à un nombre immensément plus grand qu’une douzaine."
          }
        ]
      },

      {
        id: 2,
        titre: "Relation entre quantité de matière et nombre d’entités",
        blocs: [
          {
            type: "definition",
            titre: "Constante d’Avogadro",
            texte: "La constante d’Avogadro se note Nₐ. Elle vaut exactement 6,02214076 × 10²³ mol⁻¹. Dans ce chapitre, on utilise généralement Nₐ = 6,02 × 10²³ mol⁻¹."
          },
          {
            type: "regle",
            titre: "Formules à connaître",
            texte: "N = n × Nₐ\n\nn = N / Nₐ\n\nN : nombre d’entités, sans unité.\nn : quantité de matière, en mol.\nNₐ : constante d’Avogadro, en mol⁻¹."
          },
          {
            type: "methode",
            titre: "Choisir la bonne formule",
            texte: "Si la quantité de matière n est connue et que l’on cherche le nombre d’entités N, on multiplie : N = n × Nₐ.\n\nSi le nombre d’entités N est connu et que l’on cherche n, on divise : n = N / Nₐ."
          },
          {
            type: "exemple",
            titre: "De la mole au nombre de molécules",
            texte: "Pour 0,50 mol de molécules O₂ :\nN = 0,50 × 6,02 × 10²³ = 3,01 × 10²³ molécules O₂."
          },
          {
            type: "exemple",
            titre: "Du nombre d’ions à la mole",
            texte: "Un échantillon contient 1,204 × 10²³ ions Na⁺.\nn = N / Nₐ = (1,204 × 10²³) / (6,02 × 10²³) = 0,20 mol d’ions Na⁺."
          },
          {
            type: "remarque",
            titre: "Molécules et atomes",
            texte: "Une molécule O₂ contient 2 atomes O. Ainsi, 0,50 mol de molécules O₂ correspond à 1,0 mol d’atomes O. Il ne faut pas confondre le nombre de molécules avec le nombre d’atomes qui les constituent."
          }
        ]
      },

      {
        id: 3,
        titre: "Masse molaire",
        blocs: [
          {
            type: "definition",
            titre: "Masse molaire",
            texte: "La masse molaire d’une espèce est la masse d’une mole de ses entités. Elle se note M et s’exprime souvent en grammes par mole, de symbole g·mol⁻¹."
          },
          {
            type: "exemple",
            titre: "Masse molaire atomique",
            texte: "Si M(C) = 12,0 g·mol⁻¹, alors une mole d’atomes de carbone a une masse de 12,0 g. Les masses molaires atomiques nécessaires sont généralement données dans un exercice ou lues dans un tableau périodique."
          },
          {
            type: "methode",
            titre: "Calculer une masse molaire moléculaire",
            texte: "1. Écrire la formule de la molécule.\n2. Repérer le nombre d’atomes de chaque élément.\n3. Multiplier chaque masse molaire atomique par le nombre d’atomes correspondant.\n4. Additionner les résultats."
          },
          {
            type: "exemple",
            titre: "Masse molaire de l’eau",
            texte: "Avec M(H) = 1,0 g·mol⁻¹ et M(O) = 16,0 g·mol⁻¹ :\nM(H₂O) = 2 × M(H) + M(O)\nM(H₂O) = 2 × 1,0 + 16,0 = 18,0 g·mol⁻¹."
          },
          {
            type: "exemple",
            titre: "Masse molaire du dioxyde de carbone",
            texte: "Avec M(C) = 12,0 g·mol⁻¹ et M(O) = 16,0 g·mol⁻¹ :\nM(CO₂) = M(C) + 2 × M(O)\nM(CO₂) = 12,0 + 2 × 16,0 = 44,0 g·mol⁻¹."
          },
          {
            type: "exemple",
            titre: "Cas d’une formule avec parenthèses",
            texte: "Dans Ca(OH)₂, l’indice 2 multiplie tout le groupe OH. La formule contient donc 1 Ca, 2 O et 2 H.\n\nAvec M(Ca) = 40,0, M(O) = 16,0 et M(H) = 1,0 g·mol⁻¹ :\nM(Ca(OH)₂) = 40,0 + 2 × (16,0 + 1,0) = 74,0 g·mol⁻¹."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre m et M",
            texte: "La masse m concerne l’échantillon étudié et s’exprime par exemple en g. La masse molaire M est une caractéristique de l’espèce et s’exprime en g·mol⁻¹."
          }
        ]
      },

      {
        id: 4,
        titre: "Relation entre masse et quantité de matière",
        blocs: [
          {
            type: "regle",
            titre: "Formules",
            texte: "n = m / M\n\nm = n × M\n\nM = m / n, si n est non nulle.\n\nAvec m en g et M en g·mol⁻¹, on obtient n en mol."
          },
          {
            type: "schema",
            titre: "Passer d’une grandeur à l’autre",
            texte: "Masse m en g\n   ↓ diviser par M\nQuantité de matière n en mol\n   ↓ multiplier par Nₐ\nNombre d’entités N\n\nPour remonter : diviser par Nₐ, puis multiplier par M."
          },
          {
            type: "methode",
            titre: "Calculer une quantité de matière à partir d’une masse",
            texte: "1. Identifier l’espèce étudiée.\n2. Déterminer sa masse molaire M.\n3. Exprimer la masse m en g si M est en g·mol⁻¹.\n4. Calculer n = m / M.\n5. Indiquer l’unité et l’espèce."
          },
          {
            type: "exemple",
            titre: "Calcul avec l’eau",
            texte: "Pour 9,0 g d’eau, avec M(H₂O) = 18,0 g·mol⁻¹ :\nn(H₂O) = 9,0 / 18,0 = 0,50 mol.\n\nL’échantillon contient 0,50 mol de molécules H₂O."
          },
          {
            type: "exemple",
            titre: "Calcul d’une masse",
            texte: "Pour 0,25 mol de dioxyde de carbone, avec M(CO₂) = 44,0 g·mol⁻¹ :\nm = n × M = 0,25 × 44,0 = 11 g."
          },
          {
            type: "rappel",
            titre: "Conversions de masse",
            texte: "1 kg = 1 000 g et 1 g = 1 000 mg.\n\nExemples : 0,020 kg = 20 g ; 250 mg = 0,250 g. Les unités de m et de M doivent être compatibles."
          },
          {
            type: "remarque",
            titre: "Enchaîner les calculs",
            texte: "Si l’on connaît une masse m et que l’on cherche N, on calcule d’abord n = m / M, puis N = n × Nₐ. On peut aussi écrire N = (m / M) × Nₐ."
          }
        ]
      },

      {
        id: 5,
        titre: "Mole et équation chimique",
        blocs: [
          {
            type: "rappel",
            titre: "Équation ajustée",
            texte: "Une équation chimique ajustée respecte la conservation des atomes et de la charge. Les nombres placés devant les formules sont les coefficients stœchiométriques."
          },
          {
            type: "regle",
            titre: "Proportions de réaction",
            texte: "Les coefficients d’une équation ajustée indiquent les proportions des quantités de matière consommées et formées. Il faut distinguer ces quantités de celles qui ont été introduites ou qui restent à la fin."
          },
          {
            type: "exemple",
            titre: "Formation de l’eau",
            texte: "2 H₂ + O₂ → 2 H₂O\n\nDans cette réaction, 2 mol de H₂ consommées réagissent avec 1 mol de O₂ consommée et produisent 2 mol de H₂O. Les mêmes proportions sont valables à toute autre échelle : par exemple, 0,4 mol de H₂ consommée correspond à 0,2 mol de O₂ consommée et à 0,4 mol de H₂O formée."
          },
          {
            type: "definition",
            titre: "Réactif limitant",
            texte: "Si plusieurs réactifs sont introduits, le réactif limitant est celui qui est entièrement consommé lorsque la réaction s’arrête, dans le modèle où la réaction va jusqu’à son épuisement. Un autre réactif peut alors rester en excès."
          },
          {
            type: "methode",
            titre: "Utiliser les proportions",
            texte: "1. Ajuster l’équation.\n2. Convertir les données en quantités de matière si nécessaire.\n3. Utiliser les coefficients pour relier les quantités consommées et formées.\n4. Vérifier que les quantités initiales de réactifs permettent bien la transformation envisagée.\n5. Si un réactif est en excès, distinguer la quantité consommée de la quantité restante."
          },
          {
            type: "exemple",
            titre: "Réactif en excès",
            texte: "Pour 2 H₂ + O₂ → 2 H₂O, on introduit 0,40 mol de H₂ et 0,30 mol de O₂. On suppose que la réaction s’arrête lorsque H₂ est entièrement consommé.\n\nLa consommation de 0,40 mol de H₂ nécessite 0,20 mol de O₂ et forme 0,40 mol de H₂O. Il reste donc 0,30 − 0,20 = 0,10 mol de O₂. Le dihydrogène est limitant ; le dioxygène est en excès."
          },
          {
            type: "remarque",
            titre: "Attention aux unités",
            texte: "Dans une équation, les coefficients relient les quantités de matière en mol, pas directement les masses en g. Pour passer aux masses, il faut utiliser les masses molaires de chaque espèce."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre un exercice",
            texte: "1. Relever les données et préciser l’espèce ou l’entité étudiée.\n2. Repérer la grandeur cherchée : N, n, m ou M.\n3. Convertir les unités si nécessaire.\n4. Écrire la formule littérale avant de remplacer par les valeurs.\n5. Calculer et donner l’unité ainsi que l’espèce concernée.\n6. Vérifier que le résultat est cohérent avec les données."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : utiliser la masse en kg avec une masse molaire en g·mol⁻¹.\nÀ faire : convertir la masse en g.\n\nErreur : calculer M(H₂O) en oubliant le 2.\nÀ faire : compter tous les atomes de la formule.\n\nErreur : confondre 1 mol de O₂ avec 1 mol d’atomes O.\nÀ faire : préciser les entités ; 1 mol de O₂ contient 2 mol d’atomes O.\n\nErreur : utiliser directement les coefficients d’une équation comme des rapports de masses.\nÀ faire : travailler d’abord en mol, puis convertir avec les masses molaires.\n\nErreur : attribuer au produit toute la masse initiale alors qu’un réactif reste.\nÀ faire : tenir compte des substances restantes."
          },
          {
            type: "schema",
            titre: "Formules essentielles",
            texte: "N = n × Nₐ\nn = N / Nₐ\n\nn = m / M\nm = n × M\n\nN : nombre d’entités\nn : quantité de matière en mol\nm : masse en g\nM : masse molaire en g·mol⁻¹\nNₐ ≈ 6,02 × 10²³ mol⁻¹"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On utilise Nₐ = 6,02 × 10²³ mol⁻¹. Combien de molécules contient 1,0 mol de molécules de dioxygène O₂ ? Combien de moles d’atomes O cela représente-t-il ?",
        correction: "1,0 mol de molécules O₂ contient 6,02 × 10²³ molécules O₂. Chaque molécule contient 2 atomes O : cela représente donc 2,0 mol d’atomes O."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On donne M(H) = 1,0 g·mol⁻¹ et M(O) = 16,0 g·mol⁻¹. Calcule la masse molaire de l’eau H₂O.",
        correction: "M(H₂O) = 2 × M(H) + M(O) = 2 × 1,0 + 16,0 = 18,0 g·mol⁻¹."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La masse molaire du carbone est M(C) = 12,0 g·mol⁻¹. Quelle est la masse de 2,0 mol d’atomes de carbone ?",
        correction: "m = n × M = 2,0 × 12,0 = 24 g."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne Nₐ = 6,02 × 10²³ mol⁻¹. Calcule le nombre d’ions Na⁺ présents dans 0,20 mol d’ions Na⁺.",
        correction: "N = n × Nₐ = 0,20 × 6,02 × 10²³ = 1,204 × 10²³ ions Na⁺, soit environ 1,2 × 10²³ ions."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un échantillon contient 22,0 g de dioxyde de carbone CO₂. On donne M(C) = 12,0 g·mol⁻¹ et M(O) = 16,0 g·mol⁻¹. Calcule la masse molaire de CO₂ puis la quantité de matière de l’échantillon.",
        correction: "M(CO₂) = 12,0 + 2 × 16,0 = 44,0 g·mol⁻¹.\n\nn(CO₂) = m / M = 22,0 / 44,0 = 0,500 mol."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un échantillon contient 0,036 kg d’eau H₂O. On donne M(H₂O) = 18,0 g·mol⁻¹. Calcule sa quantité de matière.",
        correction: "Conversion : 0,036 kg = 36 g.\n\nn(H₂O) = m / M = 36 / 18,0 = 2,0 mol de molécules H₂O."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un échantillon contient 9,0 g d’eau H₂O. On donne M(H) = 1,0 g·mol⁻¹, M(O) = 16,0 g·mol⁻¹ et Nₐ = 6,02 × 10²³ mol⁻¹. Calcule : 1. la quantité de matière de molécules H₂O ; 2. le nombre de molécules H₂O ; 3. le nombre d’atomes H dans l’échantillon.",
        correction: "M(H₂O) = 2 × 1,0 + 16,0 = 18,0 g·mol⁻¹.\n\n1. n(H₂O) = 9,0 / 18,0 = 0,50 mol.\n2. N(H₂O) = 0,50 × 6,02 × 10²³ = 3,01 × 10²³ molécules.\n3. Chaque molécule contient 2 atomes H. Il y a donc 2 × 3,01 × 10²³ = 6,02 × 10²³ atomes H."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un échantillon contient 3,01 × 10²³ molécules de dioxyde de carbone CO₂. On donne Nₐ = 6,02 × 10²³ mol⁻¹, M(C) = 12,0 g·mol⁻¹ et M(O) = 16,0 g·mol⁻¹. Calcule la quantité de matière et la masse de CO₂.",
        correction: "n(CO₂) = N / Nₐ = (3,01 × 10²³) / (6,02 × 10²³) = 0,500 mol.\n\nM(CO₂) = 12,0 + 2 × 16,0 = 44,0 g·mol⁻¹.\n\nm(CO₂) = n × M = 0,500 × 44,0 = 22,0 g."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le magnésium réagit avec le dioxygène selon l’équation ajustée : 2 Mg + O₂ → 2 MgO. On suppose que 0,30 mol de Mg est entièrement consommée et que le dioxygène est en quantité suffisante. Calcule les quantités de matière de O₂ consommé et de MgO formé.",
        correction: "D’après l’équation, 2 mol de Mg consommées correspondent à 1 mol de O₂ consommée et à 2 mol de MgO formées.\n\nPour 0,30 mol de Mg :\nn(O₂ consommé) = 0,30 / 2 = 0,15 mol.\nn(MgO formé) = 0,30 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On donne M(Ca) = 40,0 g·mol⁻¹, M(O) = 16,0 g·mol⁻¹ et M(H) = 1,0 g·mol⁻¹. Calcule la masse molaire de Ca(OH)₂, puis la masse correspondant à 0,20 mol de Ca(OH)₂.",
        correction: "Dans Ca(OH)₂, il y a 1 Ca, 2 O et 2 H.\n\nM(Ca(OH)₂) = 40,0 + 2 × (16,0 + 1,0) = 74,0 g·mol⁻¹.\n\nm = n × M = 0,20 × 74,0 = 14,8 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Le carbone réagit avec le dioxygène selon C + O₂ → CO₂. Dans un récipient fermé, 6,0 g de carbone sont entièrement consommés ; le dioxygène est en quantité suffisante et le seul produit formé est CO₂. On donne M(C) = 12,0 g·mol⁻¹, M(O) = 16,0 g·mol⁻¹ et Nₐ = 6,02 × 10²³ mol⁻¹. Calcule : 1. la quantité de matière de carbone consommé ; 2. la quantité de matière puis la masse de CO₂ formé ; 3. le nombre de molécules de CO₂ formées ; 4. la masse de O₂ consommé.",
        correction: "1. n(C) = 6,0 / 12,0 = 0,50 mol.\n\n2. L’équation indique que 1 mol de C consommée forme 1 mol de CO₂. Donc n(CO₂) = 0,50 mol. M(CO₂) = 12,0 + 2 × 16,0 = 44,0 g·mol⁻¹. Ainsi, m(CO₂) = 0,50 × 44,0 = 22 g.\n\n3. N(CO₂) = 0,50 × 6,02 × 10²³ = 3,01 × 10²³ molécules.\n\n4. Il faut 1 mol de O₂ pour 1 mol de C : n(O₂ consommé) = 0,50 mol. M(O₂) = 2 × 16,0 = 32,0 g·mol⁻¹, donc m(O₂ consommé) = 0,50 × 32,0 = 16 g.\n\nVérification : 6,0 g de C + 16 g de O₂ = 22 g de CO₂."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "La formation de l’eau est modélisée par 2 H₂ + O₂ → 2 H₂O. On introduit 0,60 mol de H₂ et 0,40 mol de O₂ dans un système fermé. On suppose que la réaction s’arrête lorsqu’un des réactifs est entièrement consommé et que l’eau est le seul produit. On donne M(H) = 1,0 g·mol⁻¹ et M(O) = 16,0 g·mol⁻¹. Détermine : 1. le réactif limitant ; 2. la quantité de O₂ restante ; 3. la quantité et la masse d’eau formée ; 4. la masse totale finale, puis compare-la à la masse initiale.",
        correction: "1. Pour consommer 0,60 mol de H₂, il faut deux fois moins de O₂, soit 0,30 mol. On dispose de 0,40 mol de O₂ : le dioxygène est suffisant et H₂ est limitant.\n\n2. n(O₂ restant) = 0,40 − 0,30 = 0,10 mol.\n\n3. Les coefficients de H₂ et H₂O sont égaux : n(H₂O formée) = 0,60 mol. M(H₂O) = 18,0 g·mol⁻¹, donc m(H₂O) = 0,60 × 18,0 = 10,8 g.\n\n4. M(O₂) = 32,0 g·mol⁻¹, donc la masse de O₂ restant est 0,10 × 32,0 = 3,2 g. Masse finale = 10,8 + 3,2 = 14,0 g.\n\nAu départ, M(H₂) = 2,0 g·mol⁻¹. Masse initiale = 0,60 × 2,0 + 0,40 × 32,0 = 1,2 + 12,8 = 14,0 g. La masse totale est conservée."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un échantillon de carbonate de calcium CaCO₃ a une masse de 25,0 g. On donne M(Ca) = 40,0 g·mol⁻¹, M(C) = 12,0 g·mol⁻¹, M(O) = 16,0 g·mol⁻¹ et Nₐ = 6,02 × 10²³ mol⁻¹. Détermine : 1. la masse molaire de CaCO₃ ; 2. la quantité de matière de CaCO₃ ; 3. le nombre d’entités CaCO₃ ; 4. la quantité de matière et le nombre total d’atomes d’oxygène présents dans l’échantillon.",
        correction: "1. M(CaCO₃) = 40,0 + 12,0 + 3 × 16,0 = 100,0 g·mol⁻¹.\n\n2. n(CaCO₃) = 25,0 / 100,0 = 0,250 mol.\n\n3. N(CaCO₃) = 0,250 × 6,02 × 10²³ = 1,505 × 10²³ entités, soit environ 1,51 × 10²³.\n\n4. Chaque entité CaCO₃ contient 3 atomes O. Donc n(atomes O) = 3 × 0,250 = 0,750 mol et N(atomes O) = 0,750 × 6,02 × 10²³ = 4,515 × 10²³, soit environ 4,52 × 10²³ atomes O."
      }
    ]
  }
]);
