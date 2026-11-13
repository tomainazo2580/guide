// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.
// Chapitre 12 : Revision generale

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-revision",
    titre: "Chapitre 12 : Révision générale",
    premium: false,
    guide: true,
    lecons: [
      {
        id: "sp6-rev-vue",
        titre: "Vue d'ensemble de l'année",
        blocs: [
          { type: "remarque", titre: "Chapitre complété par Guide", texte: "Ce chapitre n'est pas un nouveau cours.\nIl reprend l'essentiel de tout ce que tu as appris cette année en Sciences Physiques, pour bien préparer les contrôles et les examens." },
          { type: "texte", titre: "Les trois parties de l'année", texte: "Cette année, tu as étudié trois grandes parties :\n1. La matière : les trois états, la masse, le volume.\n2. L'électricité et le magnétisme : les circuits, l'intensité, la tension, les aimants.\n3. La chaleur : la température et la conductivité thermique." },
          { type: "schema", titre: "Toute l'année en un coup d'œil", svg: "<svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='300' height='50' rx='10' fill='#dbeafe' stroke='#1e88e5' stroke-width='2'/><text x='170' y='42' font-size='14' fill='#1e3a8a' font-weight='bold' text-anchor='middle'>LA MATIERE</text><text x='170' y='60' font-size='11' fill='#1e3a8a' text-anchor='middle'>3 etats, masse, volume</text><rect x='20' y='85' width='300' height='50' rx='10' fill='#fef3c7' stroke='#f59e0b' stroke-width='2'/><text x='170' y='107' font-size='14' fill='#92400e' font-weight='bold' text-anchor='middle'>ELECTRICITE ET MAGNETISME</text><text x='170' y='125' font-size='11' fill='#92400e' text-anchor='middle'>circuits, intensite, tension, aimants</text><rect x='20' y='150' width='300' height='50' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><text x='170' y='172' font-size='14' fill='#7f1d1d' font-weight='bold' text-anchor='middle'>CHALEUR ET TEMPERATURE</text><text x='170' y='190' font-size='11' fill='#7f1d1d' text-anchor='middle'>thermometre, conductivite</text></svg>", legende: "Les trois grandes parties du programme de 6e." },
          { type: "methode", titre: "Comment utiliser ce chapitre", texte: "Lis chaque résumé, un par un.\nSi un point n'est pas clair, retourne relire la leçon du chapitre correspondant.\nTermine par les exercices de synthèse, qui mélangent toutes les notions." }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-rev-matiere",
        titre: "Résumé : la matière",
        blocs: [
          { type: "tableau", titre: "Les trois états", entetes: ["État", "Forme propre ?", "Volume propre ?", "Exemple"], lignes: [["Solide", "Oui", "Oui", "Un caillou"], ["Liquide", "Non", "Oui", "L'eau"], ["Gaz", "Non", "Non", "L'air"]] },
          { type: "regle", titre: "La masse", texte: "La masse d'un objet est invariante : elle ne change pas.\nElle se mesure avec une balance.\nUnité : le kilogramme (kg). 1 kg = 1000 g." },
          { type: "regle", titre: "Le volume et la capacité", texte: "Le volume mesure l'espace occupé.\nPour les gros volumes : le mètre cube (m³).\nPour les capacités : le litre (L).\nÀ retenir : 1 m³ = 1000 L ; 1 dm³ = 1 L ; 1 cm³ = 1 mL." },
          { type: "methode", titre: "Mesurer le volume d'un solide", texte: "On lit le volume d'eau V1 dans l'éprouvette.\nOn plonge le solide, on lit le nouveau volume V2.\nVolume du solide : V = V2 - V1." }
        ]
      },
      {
        id: "sp6-rev-circuits",
        titre: "Résumé : les circuits électriques",
        blocs: [
          { type: "texte", titre: "Le circuit simple", texte: "Un circuit simple comprend une pile, des fils et une lampe.\nCircuit fermé : le courant passe, la lampe brille.\nCircuit ouvert : le courant ne passe pas, la lampe est éteinte." },
          { type: "regle", titre: "Le sens du courant", texte: "À l'extérieur de la pile, le courant va du pôle + vers le pôle − : c'est le sens conventionnel.\nLa diode et la DEL sont polarisées : elles ne laissent passer le courant que dans un sens." },
          { type: "tableau", titre: "Série ou dérivation ?", entetes: ["", "En série", "En dérivation"], lignes: [["Nombre de boucles", "Une seule", "Plusieurs"], ["Si une lampe grille", "Tout s'éteint", "Les autres restent allumées"], ["Exemple", "Une guirlande", "Les lampes de la maison"]] }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-rev-grandeurs",
        titre: "Résumé : intensité, tension et aimants",
        blocs: [
          { type: "tableau", titre: "Les deux grandeurs électriques", entetes: ["Grandeur", "Appareil", "Branchement", "Unité"], lignes: [["Intensité", "Ampèremètre", "En série", "Ampère (A)"], ["Tension", "Voltmètre", "En parallèle", "Volt (V)"]] },
          { type: "remarque", titre: "Conversions utiles", texte: "1 A = 1000 mA et 1 V = 1000 mV.\nPour le voltmètre : la borne COM se branche du côté du pôle − de la pile." },
          { type: "regle", titre: "Les aimants", texte: "Un aimant attire les objets en fer ou en acier.\nIl a deux pôles : le pôle Nord (N) et le pôle Sud (S).\nDeux pôles de même nom se repoussent ; deux pôles de noms différents s'attirent.\nLa boussole est une petite aiguille aimantée qui indique le nord." }
        ]
      },
      {
        id: "sp6-rev-chaleur",
        titre: "Résumé : chaleur et température",
        blocs: [
          { type: "definition", titre: "Température et chaleur", texte: "La température dit si un corps est chaud ou froid.\nElle se mesure en degrés Celsius (°C) avec un thermomètre.\nLa chaleur se déplace toujours du corps chaud vers le corps froid." },
          { type: "remarque", titre: "Températures à connaître", texte: "Le corps humain : environ 37 °C.\nL'eau qui gèle : 0 °C.\nL'eau qui bout : environ 100 °C." },
          { type: "regle", titre: "La conductivité thermique", texte: "Les métaux sont de bons conducteurs thermiques.\nLe bois, l'air, le liège et la laine sont des isolants thermiques.\nClassement des quatre métaux : fer < laiton < zinc < cuivre." },
          { type: "exemple", titre: "Les applications", texte: "Manche de poêle en bois : on ne se brûle pas.\nDouble vitrage : l'air entre les vitres garde la chaleur.\nMarmite en métal : le riz cuit plus vite." }
        ]
      }
    ],
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
        exercices: [
      { niveau: 1, points: 2, enonce: "Cite les trois états de la matière et donne un exemple pour chacun.", correction: "Les trois états sont : solide (par exemple un caillou), liquide (par exemple l'eau) et gaz (par exemple l'air)." },
      { niveau: 1, points: 2, enonce: "Quels sont les deux états possibles d'un circuit électrique ? Que fait la lampe dans chaque cas ?", correction: "Le circuit peut être fermé ou ouvert. Circuit fermé : le courant passe, la lampe brille. Circuit ouvert : le courant ne passe pas, la lampe est éteinte." },
      { niveau: 2, points: 3, enonce: "Convertis : a) 2,5 kg en grammes ; b) 750 mL en litres ; c) 3 dm³ en litres.", correction: "a) 2,5 kg = 2500 g (on multiplie par 1000). b) 750 mL = 0,75 L. c) 3 dm³ = 3 L, car 1 dm³ = 1 L." },
      { niveau: 2, points: 3, enonce: "Dans la maison de Hery, quand la lampe du salon grille, la lampe de la chambre reste allumée. Quel est le type de montage ? Justifie ta réponse.", correction: "C'est un montage en dérivation. Chaque lampe a sa propre boucle : si l'une grille, le courant passe encore dans l'autre boucle et l'autre lampe reste allumée." },
      { niveau: 3, points: 4, enonce: "Rado veut mesurer l'intensité qui traverse sa lampe et la tension de sa pile. Explique comment il doit brancher chaque appareil de mesure.", correction: "Pour l'intensité : il branche l'ampèremètre en série dans le circuit (le courant doit le traverser). Pour la tension : il branche le voltmètre en parallèle aux bornes de la pile, avec la borne COM du côté du pôle −." },
      { niveau: 3, points: 4, enonce: "On chauffe ensemble au centre quatre lames : fer, zinc, laiton et cuivre. Dans quel ordre les bouchons tombent-ils ? Quelle propriété des métaux cette expérience montre-t-elle ?", correction: "Ordre de chute : cuivre (1er), zinc (2e), laiton (3e), fer (4e). Cette expérience montre que les métaux n'ont pas la même conductivité thermique : le cuivre conduit le mieux la chaleur, le fer le moins bien." },
      { niveau: 4, points: 5, enonce: "Mamy prépare le dîner : il pèse 2 kg de riz, il verse 5 L d'eau dans la marmite en métal, il allume la lampe de la cuisine branchée en dérivation avec celle du salon, et il remue la sauce avec une cuillère en bois. Retrouve dans ce texte : a) une masse et son unité ; b) une capacité ; c) un montage électrique et son avantage ; d) un choix lié à la conductivité thermique.", correction: "a) La masse : 2 kg de riz (le kilogramme). b) La capacité : 5 L d'eau. c) Le montage en dérivation : si la lampe de la cuisine grille, celle du salon reste allumée. d) La cuillère en bois : le bois est un isolant thermique, Mamy ne se brûle pas la main (la marmite en métal, elle, conduit bien la chaleur du feu)." },
      { niveau: 4, points: 5, enonce: "Pour chaque situation, cite l'objet ou l'appareil adapté et explique ton choix : a) vérifier qu'une pile fonctionne encore ; b) savoir si l'eau du bain est assez chaude ; c) retrouver le nord en randonnée ; d) récupérer des clous en fer tombés dans du sable.", correction: "a) Un voltmètre : il mesure la tension de la pile ; si la tension est proche de 0 V, la pile est usée. b) Un thermomètre : il mesure la température de l'eau en °C. c) Une boussole : son aiguille aimantée indique le nord. d) Un aimant : il attire les objets en fer, pas le sable." }
    ]
  }
]);

// ===== FIN DU FICHIER sp-ch12.js =====
