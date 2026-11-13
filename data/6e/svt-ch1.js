// ===== GUIDE - SVT 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.
// Chapitre 1 : La conservation des aliments

enregistrerChapitres("6e", "svt", [
  {
    id: "svt6-conservation",
    titre: "Chapitre 1 : La conservation des aliments",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "svt6-conso-pourquoi",
        titre: "Pourquoi les aliments se gâtent-ils ?",
        blocs: [
          { type: "texte", titre: "Une observation de tous les jours", texte: "Un reste de rô cof laissé dehors pendant la nuit tourne.\nUn fruit oublié dans un panier devient mou et moisi.\nLa viande laissée à l'air prend une mauvaise odeur.\nPourquoi ?" },
          { type: "definition", titre: "Les micro-organismes", texte: "Les micro-organismes (ou microbes) sont des êtres vivants très petits, invisibles à l'œil nu.\nIls se développent sur les aliments et les font pourrir." },
          { type: "regle", titre: "Ce que les microbes aiment", texte: "Les microbes se développent quand il y a :\n- de l'eau ;\n- une chaleur douce ;\n- du temps.\nConserver un aliment, c'est empêcher les microbes de se développer." },
          { type: "schema", titre: "Un aliment frais devient un aliment pourri", svg: "<svg viewBox='0 0 340 160' xmlns='http://www.w3.org/2000/svg'><circle cx='55' cy='65' r='28' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='118' font-size='12' fill='#374151' text-anchor='middle'>Aliment frais</text><line x1='90' y1='65' x2='118' y2='65' stroke='#6b7280' stroke-width='2'/><polygon points='118,59 130,65 118,71' fill='#6b7280'/><circle cx='170' cy='65' r='28' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><circle cx='160' cy='58' r='3' fill='#78350f'/><circle cx='180' cy='66' r='3' fill='#78350f'/><circle cx='168' cy='76' r='3' fill='#78350f'/><text x='170' y='118' font-size='12' fill='#374151' text-anchor='middle'>Les microbes arrivent</text><line x1='205' y1='65' x2='233' y2='65' stroke='#6b7280' stroke-width='2'/><polygon points='233,59 245,65 233,71' fill='#6b7280'/><circle cx='283' cy='65' r='28' fill='#a16207' stroke='#713f12' stroke-width='2'/><circle cx='273' cy='58' r='4' fill='#3f6212'/><circle cx='292' cy='66' r='4' fill='#3f6212'/><circle cx='281' cy='78' r='4' fill='#3f6212'/><text x='283' y='118' font-size='12' fill='#374151' text-anchor='middle'>Aliment pourri</text><text x='170' y='148' font-size='11' fill='#6b7280' text-anchor='middle'>Les microbes font pourrir les aliments</text></svg>", legende: "Avec le temps, les microbes se développent sur l'aliment et le font pourrir." }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "svt6-conso-temperature",
        titre: "Conserver avec la température : la chaleur et le froid",
        blocs: [
          { type: "regle", titre: "La chaleur", texte: "La chaleur (cuisson, ébullition) détruit les micro-organismes.\nExemples : bouillir le lait, cuire la viande." },
          { type: "regle", titre: "Le froid", texte: "Le froid (réfrigérateur, congélateur) ne tue pas les microbes.\nIl ralentit ou stoppe leur développement." },
          { type: "schema", titre: "Chaleur et froid n'agissent pas de la même façon", svg: "<svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='20' width='34' height='130' rx='16' fill='#e5e7eb' stroke='#374151' stroke-width='2'/><rect x='68' y='32' width='18' height='58' fill='#fca5a5'/><rect x='68' y='92' width='18' height='50' fill='#93c5fd'/><circle cx='77' cy='166' r='22' fill='#dc2626' stroke='#374151' stroke-width='2'/><rect x='70' y='138' width='14' height='18' fill='#dc2626'/><text x='110' y='62' font-size='13' fill='#b91c1c' font-weight='bold'>CHALEUR</text><text x='110' y='78' font-size='11' fill='#b91c1c'>detruit les microbes</text><text x='110' y='118' font-size='13' fill='#1d4ed8' font-weight='bold'>FROID</text><text x='110' y='134' font-size='11' fill='#1d4ed8'>ralentit les microbes</text><text x='42' y='40' font-size='10' fill='#6b7280'>chaud</text><text x='46' y='146' font-size='10' fill='#6b7280'>froid</text></svg>", legende: "La chaleur détruit les microbes ; le froid ne fait que ralentir leur développement." },
          { type: "remarque", titre: "Attention !", texte: "Le froid ne détruit pas les microbes.\nUn aliment sorti du réfrigérateur doit être consommé rapidement, car les microbes se remettent à se développer." },
          { type: "exemple", titre: "Chez Mamy", texte: "Mamy fait bouillir le lait le matin : la chaleur détruit les microbes, le lait se garde plus longtemps.\nElle met le reste du ravitoto au réfrigérateur : le froid ralentit les microbes, mais elle le réchauffe bien le lendemain." }
        ]
      },
      {
        id: "svt6-conso-sechage-salage",
        titre: "Conserver en enlevant l'eau : le séchage et le salage",
        blocs: [
          { type: "definition", titre: "Le séchage et la déshydratation", texte: "Le séchage et la déshydratation éliminent l'eau de l'aliment, par exposition au soleil, à l'air ou au four.\nSans eau, les microbes ne peuvent plus vivre." },
          { type: "exemple", titre: "Des exemples malgaches", texte: "Le kitoza : la viande de zébu séchée, qui se conserve longtemps.\nLe poisson séché au soleil sur la côte.\nLa vanille séchée, les fruits secs." },
          { type: "definition", titre: "Le salage", texte: "Le salage : le sel absorbe l'eau de l'aliment et empêche les bactéries de se développer.\nDeux façons de faire :\n- le salage à sec : on répand le sel directement à la surface de l'aliment ;\n- le saumurage : on plonge l'aliment dans une solution d'eau salée." },
          { type: "schema", titre: "Le séchage au soleil", svg: "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='40' r='20' fill='#fde047' stroke='#eab308' stroke-width='2'/><line x1='50' y1='12' x2='50' y2='4' stroke='#eab308' stroke-width='3'/><line x1='50' y1='68' x2='50' y2='76' stroke='#eab308' stroke-width='3'/><line x1='22' y1='40' x2='14' y2='40' stroke='#eab308' stroke-width='3'/><line x1='78' y1='40' x2='86' y2='40' stroke='#eab308' stroke-width='3'/><line x1='30' y1='20' x2='24' y2='14' stroke='#eab308' stroke-width='3'/><line x1='70' y1='20' x2='76' y2='14' stroke='#eab308' stroke-width='3'/><line x1='30' y1='60' x2='24' y2='66' stroke='#eab308' stroke-width='3'/><line x1='70' y1='60' x2='76' y2='66' stroke='#eab308' stroke-width='3'/><text x='96' y='44' font-size='13' fill='#b45309' font-weight='bold'>Soleil</text><line x1='118' y1='116' x2='118' y2='98' stroke='#3b82f6' stroke-width='2'/><polygon points='114,98 118,90 122,98' fill='#3b82f6'/><circle cx='118' cy='120' r='3' fill='#3b82f6'/><line x1='190' y1='116' x2='190' y2='98' stroke='#3b82f6' stroke-width='2'/><polygon points='186,98 190,90 194,98' fill='#3b82f6'/><circle cx='190' cy='120' r='3' fill='#3b82f6'/><line x1='262' y1='116' x2='262' y2='98' stroke='#3b82f6' stroke-width='2'/><polygon points='258,98 262,90 266,98' fill='#3b82f6'/><circle cx='262' cy='120' r='3' fill='#3b82f6'/><text x='140' y='80' font-size='11' fill='#2563eb'>L eau s en va</text><line x1='55' y1='140' x2='325' y2='140' stroke='#92400e' stroke-width='4'/><line x1='55' y1='154' x2='325' y2='154' stroke='#92400e' stroke-width='4'/><line x1='66' y1='140' x2='66' y2='182' stroke='#92400e' stroke-width='4'/><line x1='314' y1='140' x2='314' y2='182' stroke='#92400e' stroke-width='4'/><ellipse cx='118' cy='133' rx='22' ry='9' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><polygon points='138,133 154,124 154,142' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><ellipse cx='190' cy='133' rx='22' ry='9' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><polygon points='210,133 226,124 226,142' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><ellipse cx='262' cy='133' rx='22' ry='9' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><polygon points='282,133 298,124 298,142' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='106' y='196' font-size='12' fill='#374151'>Le soleil seche les poissons</text></svg>", legende: "Au soleil, l'eau des poissons s'évapore : sans eau, les microbes ne peuvent plus vivre." }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "svt6-conso-fumage",
        titre: "Le fumage",
        blocs: [
          { type: "definition", titre: "Le fumage", texte: "Le fumage consiste à exposer l'aliment à la fumée d'un feu de bois.\nLa fumée assèche et protège la surface de l'aliment." },
          { type: "texte", titre: "Comment la fumée agit-elle ?", texte: "La fumée contient des substances antiseptiques : elles empêchent les microbes de se développer.\nElle donne aussi du goût et de la couleur à l'aliment : c'est l'aromatisation et la coloration.\nLe fumage s'utilise surtout pour les viandes et les poissons." },
          { type: "schema", titre: "Le fumage des poissons", svg: "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='30' x2='320' y2='30' stroke='#78350f' stroke-width='5'/><line x1='110' y1='30' x2='110' y2='48' stroke='#6b7280' stroke-width='2'/><ellipse cx='110' cy='66' rx='12' ry='20' fill='#d4a017' stroke='#8a6d1a' stroke-width='2'/><line x1='190' y1='30' x2='190' y2='48' stroke='#6b7280' stroke-width='2'/><ellipse cx='190' cy='66' rx='12' ry='20' fill='#d4a017' stroke='#8a6d1a' stroke-width='2'/><line x1='270' y1='30' x2='270' y2='48' stroke='#6b7280' stroke-width='2'/><ellipse cx='270' cy='66' rx='12' ry='20' fill='#d4a017' stroke='#8a6d1a' stroke-width='2'/><path d='M140 120 C 146 108, 138 100, 144 90' stroke='#9ca3af' stroke-width='3' fill='none'/><path d='M230 122 C 236 110, 228 102, 234 92' stroke='#9ca3af' stroke-width='3' fill='none'/><path d='M185 128 C 191 114, 181 106, 187 94' stroke='#9ca3af' stroke-width='3' fill='none'/><path d='M175 168 C 172 154, 180 146, 186 138 C 184 150, 194 150, 194 140 C 202 150, 204 160, 196 168 Z' fill='#f97316' stroke='#ea580c' stroke-width='2'/><rect x='160' y='168' width='52' height='8' rx='3' fill='#78350f'/><text x='38' y='50' font-size='11' fill='#374151'>Poissons</text><text x='244' y='112' font-size='11' fill='#6b7280'>Fumee</text><text x='148' y='196' font-size='11' fill='#374151'>Feu de bois</text></svg>", legende: "La fumée du feu de bois assèche et protège les poissons suspendus." },
          { type: "exemple", titre: "À Mahajanga", texte: "Près de Mahajanga, on suspend le poisson au-dessus d'un feu de bois.\nLe poisson fumé se conserve longtemps et a bon goût.\nOn le retrouve ensuite sur les marchés." }
        ]
      },
      {
        id: "svt6-conso-choisir",
        titre: "Bien choisir la méthode de conservation",
        blocs: [
          { type: "tableau", titre: "Les cinq méthodes de conservation", entetes: ["Méthode", "Principe", "Exemples"], lignes: [["Chaleur", "Détruit les microbes", "Lait bouilli, viande cuite"], ["Froid", "Ralentit les microbes", "Réfrigérateur, congélateur"], ["Séchage", "Enlève l'eau", "Kitoza, poisson séché, fruits secs"], ["Salage", "Le sel absorbe l'eau", "Poisson salé"], ["Fumage", "Assèche et protège", "Poisson fumé"]] },
          { type: "methode", titre: "Comment choisir ?", texte: "Le choix dépend :\n- de l'aliment à conserver ;\n- du temps de conservation voulu ;\n- des moyens disponibles (avec ou sans réfrigérateur, soleil, sel, feu de bois...)." },
          { type: "remarque", titre: "À retenir", texte: "Toutes ces méthodes ont le même but :\nempêcher les micro-organismes de se développer pour que l'aliment reste bon à manger." }
        ]
      }
    ],
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
        exercices: [
      { niveau: 1, points: 2, enonce: "Pourquoi les aliments se gâtent-ils quand on les laisse à l'air libre ?", correction: "À cause des micro-organismes (ou microbes) : des êtres vivants très petits, invisibles à l'œil nu, qui se développent sur les aliments et les font pourrir." },
      { niveau: 1, points: 2, enonce: "Cite trois méthodes de conservation des aliments.", correction: "Par exemple : la chaleur, le froid et le séchage. (On peut aussi citer le salage et le fumage.)" },
      { niveau: 2, points: 3, enonce: "Mamy fait bouillir le lait avant de le conserver. Pourquoi ?", correction: "La chaleur détruit les micro-organismes présents dans le lait. Le lait bouilli se conserve donc plus longtemps." },
      { niveau: 2, points: 3, enonce: "Le kitoza est de la viande de zébu séchée. Pourquoi le séchage permet-il de la conserver longtemps ?", correction: "Le séchage élimine l'eau de la viande. Or les microbes ont besoin d'eau pour vivre : sans eau, ils ne peuvent plus se développer." },
      { niveau: 3, points: 4, enonce: "Quelle est la différence entre le salage à sec et le saumurage ?", correction: "Dans le salage à sec, on répand le sel directement à la surface de l'aliment. Dans le saumurage, on plonge l'aliment dans une solution d'eau salée. Dans les deux cas, le sel absorbe l'eau de l'aliment et empêche les bactéries de se développer." },
      { niveau: 3, points: 4, enonce: "Un reste de rô cof sorti du réfrigérateur et laissé deux jours dehors finit par tourner. Pourtant, il était au froid ! Explique.", correction: "Le froid ne détruit pas les microbes : il ralentit seulement leur développement. Quand le plat est sorti du réfrigérateur, les microbes toujours présents se remettent à se développer, et le plat tourne." },
      { niveau: 4, points: 5, enonce: "Rado habite près de Mahajanga. Il a pêché beaucoup de poissons mais n'a pas de réfrigérateur. Il veut les garder plusieurs semaines. Propose-lui deux méthodes de conservation et explique comment elles agissent.", correction: "Deux méthodes au choix parmi trois : le séchage au soleil (l'eau part, les microbes ne peuvent plus se développer) ; le salage (le sel absorbe l'eau et empêche les bactéries de se développer) ; le fumage (la fumée assèche le poisson et le protège grâce à ses substances antiseptiques)." },
      { niveau: 4, points: 5, enonce: "Recopie et complète ce tableau : pour chaque méthode (chaleur, froid, séchage, salage, fumage), écris son action et donne un exemple d'aliment.", correction: "Chaleur : détruit les microbes (lait bouilli). Froid : ralentit les microbes (aliment au réfrigérateur). Séchage : enlève l'eau (kitoza). Salage : le sel absorbe l'eau (poisson salé). Fumage : la fumée assèche et protège (poisson fumé)." }
    ]
  }
]);

// ===== FIN DU FICHIER svt-ch1.js =====
