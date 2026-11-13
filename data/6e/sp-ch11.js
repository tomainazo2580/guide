// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.
// Chapitre 11 : La conductivite thermique

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-conductivite",
    titre: "Chapitre 11 : La conductivité thermique",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-cond-definition",
        titre: "Qu'est-ce que la conductivité thermique ?",
        blocs: [
          { type: "definition", titre: "Définition", texte: "La conductivité thermique est la capacité d'une matière à transmettre la chaleur.\nUne matière qui laisse bien passer la chaleur est un bon conducteur thermique.\nUne matière qui laisse mal passer la chaleur est un mauvais conducteur thermique." },
          { type: "exemple", titre: "La cuillère de Mamy", texte: "Mamy laisse une cuillère en métal dans la marmite de rô cof qui chauffe sur le feu.\nQuelques minutes plus tard, le bout de la cuillère est brûlant, alors qu'il ne touche pas la flamme.\nLa chaleur a voyagé dans le métal, du bout chaud vers le bout froid." },
          { type: "schema", titre: "La chaleur se déplace dans une barre de métal", svg: "<svg viewBox='0 0 340 170' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='60' width='260' height='34' rx='6' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><path d='M50 122 C 42 110, 46 100, 52 92 C 50 102, 56 104, 56 96 C 64 104, 66 114, 58 122 Z' fill='#f97316' stroke='#ea580c' stroke-width='2'/><rect x='42' y='122' width='24' height='6' rx='2' fill='#78350f'/><line x1='70' y1='77' x2='118' y2='77' stroke='#dc2626' stroke-width='3'/><polygon points='118,71 130,77 118,83' fill='#dc2626'/><line x1='140' y1='77' x2='188' y2='77' stroke='#dc2626' stroke-width='3'/><polygon points='188,71 200,77 188,83' fill='#dc2626'/><line x1='208' y1='77' x2='256' y2='77' stroke='#dc2626' stroke-width='3'/><polygon points='256,71 268,77 256,83' fill='#dc2626'/><text x='52' y='50' font-size='13' fill='#dc2626' font-weight='bold'>Chaud</text><text x='228' y='50' font-size='13' fill='#1e88e5' font-weight='bold'>Moins chaud</text><text x='62' y='150' font-size='12' fill='#374151'>La chaleur se deplace dans le metal &#8594;</text></svg>", legende: "On chauffe un bout de la barre : la chaleur se déplace vers l'autre bout." },
          { type: "remarque", titre: "À retenir", texte: "La chaleur se déplace toujours du corps chaud vers le corps froid." }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-cond-bons-mauvais",
        titre: "Bons et mauvais conducteurs thermiques",
        blocs: [
          { type: "regle", titre: "Règle", texte: "Les métaux sont de bons conducteurs thermiques.\nL'air, le plastique, le verre et le bois sont de mauvais conducteurs thermiques." },
          { type: "tableau", titre: "Quelques matières testées", entetes: ["Matière", "Conduit bien la chaleur ?"], lignes: [["Tige de fer", "Oui"], ["Métaux en général", "Oui"], ["Terre cuite", "Oui"], ["Fibres de bois", "Non"], ["Paille", "Non"], ["Plâtre", "Non"], ["Laine de mouton", "Non"], ["Liège", "Non"]] },
          { type: "remarque", titre: "Un nouveau mot", texte: "Un mauvais conducteur thermique est aussi appelé un isolant thermique.\nIl empêche la chaleur de passer." },
          { type: "exemple", titre: "À la campagne et en ville", texte: "La case traditionnelle en bois et en paille reste fraîche, car le bois et la paille sont des isolants.\nLa maison avec un toit en tôle ondulée chauffe vite au soleil, car la tôle est un métal : elle conduit bien la chaleur." }
        ]
      },
      {
        id: "sp6-cond-experience",
        titre: "L'expérience des quatre métaux",
        blocs: [
          { type: "methode", titre: "L'expérience", texte: "On prend quatre lames de métaux différents : le fer, le zinc, le laiton et le cuivre.\nElles sont réunies au centre, juste au-dessus d'une flamme.\nAu bout de chaque lame, on colle un bouchon de liège avec de la cire." },
          { type: "texte", titre: "Ce que l'on observe", texte: "La flamme chauffe le centre. La chaleur se déplace dans chaque lame.\nQuand la chaleur atteint la cire, elle fond et le bouchon tombe.\nOrdre de chute des bouchons : 1er le cuivre, 2e le zinc, 3e le laiton, 4e le fer." },
          { type: "schema", titre: "Les quatre lames chauffées au centre", svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='95' width='130' height='14' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><rect x='180' y='95' width='130' height='14' fill='#d4a017' stroke='#8a6d1a' stroke-width='2'/><rect x='163' y='20' width='14' height='80' fill='#b87333' stroke='#7c4a1e' stroke-width='2'/><rect x='163' y='115' width='14' height='70' fill='#c9a227' stroke='#8a6d1a' stroke-width='2'/><path d='M170 150 C 160 136, 165 124, 171 114 C 169 126, 177 128, 177 118 C 186 128, 188 140, 178 150 Z' fill='#f97316' stroke='#ea580c' stroke-width='2'/><circle cx='34' cy='102' r='9' fill='#d9b382' stroke='#8a6d1a' stroke-width='2'/><circle cx='306' cy='102' r='9' fill='#d9b382' stroke='#8a6d1a' stroke-width='2'/><circle cx='170' cy='24' r='9' fill='#d9b382' stroke='#8a6d1a' stroke-width='2'/><circle cx='170' cy='181' r='9' fill='#d9b382' stroke='#8a6d1a' stroke-width='2'/><text x='52' y='86' font-size='12' fill='#374151' font-weight='bold'>Fer (4e)</text><text x='250' y='86' font-size='12' fill='#374151' font-weight='bold'>Zinc (2e)</text><text x='186' y='28' font-size='12' fill='#374151' font-weight='bold'>Cuivre (1er)</text><text x='186' y='185' font-size='12' fill='#374151' font-weight='bold'>Laiton (3e)</text><text x='96' y='212' font-size='12' fill='#dc2626'>La flamme chauffe au centre</text></svg>", legende: "Les bouchons sont collés avec de la cire. Celui du cuivre tombe en premier." },
          { type: "regle", titre: "Conclusion", texte: "Classement par conductivité thermique croissante :\nfer < laiton < zinc < cuivre.\nLe cuivre est le meilleur conducteur des quatre métaux." }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-cond-applications",
        titre: "Les applications dans la vie quotidienne",
        blocs: [
          { type: "exemple", titre: "Le manche de la poêle", texte: "Le manche de la poêle est en bois.\nLe bois transmet difficilement la chaleur : on peut tenir la poêle sans se brûler.\nAvec une poêle tout en métal, le manche deviendrait vite brûlant." },
          { type: "exemple", titre: "Le double vitrage", texte: "Le double vitrage est une fenêtre faite de deux vitres séparées par une couche d'air.\nL'air est un mauvais conducteur thermique : il retient la chaleur à l'intérieur de la maison en hiver." },
          { type: "schema", titre: "Le double vitrage", svg: "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='30' width='110' height='120' fill='#fee2e2'/><text x='40' y='90' font-size='13' fill='#b91c1c' font-weight='bold'>Interieur</text><text x='42' y='107' font-size='11' fill='#b91c1c'>chaud</text><rect x='220' y='30' width='100' height='120' fill='#dbeafe'/><text x='230' y='90' font-size='13' fill='#1d4ed8' font-weight='bold'>Exterieur</text><text x='238' y='107' font-size='11' fill='#1d4ed8'>froid</text><rect x='150' y='30' width='8' height='120' fill='#bfdbfe' stroke='#1e88e5' stroke-width='2'/><rect x='186' y='30' width='8' height='120' fill='#bfdbfe' stroke='#1e88e5' stroke-width='2'/><text x='163' y='90' font-size='11' fill='#374151'>air</text><line x1='80' y1='60' x2='140' y2='60' stroke='#dc2626' stroke-width='3'/><polygon points='140,54 150,60 140,66' fill='#dc2626'/><line x1='163' y1='52' x2='179' y2='68' stroke='#dc2626' stroke-width='3'/><line x1='179' y1='52' x2='163' y2='68' stroke='#dc2626' stroke-width='3'/><text x='52' y='172' font-size='11' fill='#374151'>L air entre les deux vitres bloque la chaleur</text></svg>", legende: "L'air entre les deux vitres bloque le passage de la chaleur." },
          { type: "exemple", titre: "D'autres exemples malgaches", texte: "Les marmites sont en métal : la chaleur du feu arrive vite au riz et au ravitoto.\nÀ Antsirabe, on porte des vestes en laine en hiver : la laine retient la chaleur du corps.\nLe thermos garde le café chaud grâce à une paroi isolante." },
          { type: "methode", titre: "Bien choisir le matériau", texte: "Avant de choisir une matière, on se pose la question : faut-il laisser passer la chaleur ou l'empêcher de passer ?\nPour laisser passer : on choisit un métal (marmite, casserole).\nPour empêcher de passer : on choisit un isolant (bois, liège, laine, air)." }
        ]
      }
    ],
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
        exercices: [
      { niveau: 1, points: 2, enonce: "Qu'est-ce que la conductivité thermique ?", correction: "La conductivité thermique est la capacité d'une matière à transmettre la chaleur." },
      { niveau: 1, points: 2, enonce: "Cite deux bons conducteurs thermiques et deux mauvais conducteurs thermiques.", correction: "Bons conducteurs : par exemple le fer et le cuivre (les métaux). Mauvais conducteurs : par exemple le bois et le liège (on peut aussi citer la paille, la laine de mouton, le plâtre, l'air, le verre ou le plastique)." },
      { niveau: 2, points: 3, enonce: "Pourquoi le manche d'une poêle est-il souvent en bois ?", correction: "Parce que le bois est un mauvais conducteur thermique. La chaleur de la poêle se transmet difficilement au manche : on peut tenir la poêle sans se brûler les mains." },
      { niveau: 2, points: 3, enonce: "Dans l'expérience des quatre métaux, quel bouchon tombe en premier ? Explique pourquoi.", correction: "C'est le bouchon de la lame de cuivre. Le cuivre est le meilleur conducteur thermique des quatre métaux : la chaleur atteint la cire plus vite, la cire fond et le bouchon tombe." },
      { niveau: 3, points: 4, enonce: "Classe ces quatre métaux par conductivité thermique croissante : le zinc, le fer, le cuivre, le laiton.", correction: "fer < laiton < zinc < cuivre. Le fer conduit le moins bien la chaleur, le cuivre conduit le mieux." },
      { niveau: 3, points: 4, enonce: "Mamy veut remuer le rô cof très chaud dans la marmite. Il hésite entre une cuillère en métal et une cuillère en bois. Laquelle doit-il choisir ? Justifie ta réponse.", correction: "Il doit choisir la cuillère en bois. Le bois est un mauvais conducteur thermique : le manche reste tiède. La cuillère en métal conduirait la chaleur jusqu'à sa main et le brûlerait." },
      { niveau: 4, points: 5, enonce: "Explique ce qu'est le double vitrage et pourquoi il est utile en hiver.", correction: "Le double vitrage est une fenêtre faite de deux vitres séparées par une couche d'air. L'air est un mauvais conducteur thermique : il laisse mal passer la chaleur. En hiver, la chaleur reste donc à l'intérieur de la maison." },
      { niveau: 4, points: 5, enonce: "À Toliara, la chambre de Rado a un toit en tôle ondulée. L'après-midi, il y fait très chaud. Explique pourquoi avec la conductivité thermique, puis propose une solution.", correction: "La tôle est un métal : c'est un bon conducteur thermique. Elle transmet vite la chaleur du soleil vers l'intérieur de la chambre. Solution : isoler le toit avec un mauvais conducteur (paille, bois, liège, laine) ou laisser une couche d'air entre le toit et un faux plafond." }
    ]
  }
]);

// ===== FIN DU FICHIER sp-ch11.js =====
