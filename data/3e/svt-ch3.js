// ===== GUIDE - SVT 3e (T9) =====
// Chapitre 3 : La nutrition des plantes vertes

enregistrerChapitres("3e", "svt", [
  {
    id: "svt3-nutrition-plantes",
    titre: "Chapitre 3 : La nutrition des plantes vertes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt3-plantes-besoins",
        titre: "De quoi une plante verte a-t-elle besoin ?",
        blocs: [
          {
            type: "introduction",
            titre: "Une plante qui grandit",
            texte: "Une jeune plante placée dans des conditions favorables grandit : elle forme de nouvelles feuilles, des tiges et des racines. Pour cela, elle a besoin de matière et d'énergie."
          },
          {
            type: "texte",
            titre: "Les besoins essentiels",
            texte: "Une plante verte a notamment besoin d'eau, de sels minéraux, de dioxyde de carbone et de lumière. L'eau et les sels minéraux sont généralement absorbés dans le sol par les racines. Le dioxyde de carbone provient de l'air. La lumière fournit l'énergie nécessaire à la photosynthèse."
          },
          {
            type: "remarque",
            titre: "Des besoins à adapter",
            texte: "Les besoins en eau et en lumière varient selon l'espèce et les conditions du milieu. Une plante peut souffrir aussi bien d'un manque d'eau que d'un excès d'eau."
          },
          {
            type: "definition",
            titre: "La matière organique",
            texte: "La matière organique produite par la plante comprend notamment des sucres. Elle sert à construire ses organes, à constituer des réserves et à fournir de l'énergie aux cellules."
          }
        ]
      },
      {
        id: "svt3-plantes-racines",
        titre: "L'absorption de l'eau et des sels minéraux",
        blocs: [
          {
            type: "definition",
            titre: "Les poils absorbants",
            texte: "Les poils absorbants sont de fins prolongements de cellules situées sur les jeunes parties des racines. Ils augmentent la surface de contact avec le sol et facilitent l'absorption de l'eau et des sels minéraux dissous."
          },
          {
            type: "texte",
            titre: "L'absorption racinaire",
            texte: "L'eau du sol pénètre dans la racine. Les sels minéraux, présents dans l'eau du sol sous forme d'ions, sont également absorbés. L'eau et les sels minéraux peuvent ensuite être transportés vers les parties aériennes de la plante."
          },
          {
            type: "schema",
            titre: "Une jeune racine dans le sol",
            svg: "<svg viewBox='0 0 360 270' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='30' width='360' height='220' fill='#fef3c7'/><text x='18' y='53' font-size='13' fill='#78350f'>Sol : eau et sels minéraux dissous</text><path d='M170 0 L170 178 Q180 220 190 178 L190 0' fill='#f5d0a9' stroke='#92400e' stroke-width='2'/><path d='M170 75 Q130 65 108 80 M170 95 Q125 90 102 105 M170 115 Q130 120 110 135 M190 75 Q230 65 252 80 M190 95 Q235 90 258 105 M190 115 Q230 120 250 135' fill='none' stroke='#92400e' stroke-width='2'/><text x='20' y='172' font-size='13' fill='#1f2937'>Poils absorbants</text><line x1='125' y1='166' x2='145' y2='122' stroke='#374151'/><text x='218' y='170' font-size='13' fill='#1f2937'>Jeune racine</text><line x1='238' y1='160' x2='190' y2='145' stroke='#374151'/><path d='M80 205 L145 205 M139 200 L146 205 L139 210' fill='none' stroke='#2563eb' stroke-width='2'/><text x='20' y='230' font-size='12' fill='#1d4ed8'>Absorption vers la racine</text></svg>",
            legende: "Schéma simplifié : les poils absorbants augmentent la surface de contact entre la jeune racine et le sol."
          },
          {
            type: "remarque",
            titre: "Une précision importante",
            texte: "Les poils absorbants ne sont pas les seules cellules de la racine, et leur nombre peut varier. Leur rôle est particulièrement important dans l'absorption sur les jeunes zones de la racine."
          }
        ]
      },
      {
        id: "svt3-plantes-seves",
        titre: "La circulation de la matière dans la plante",
        blocs: [
          {
            type: "definition",
            titre: "La sève brute",
            texte: "La sève brute contient principalement de l'eau et des sels minéraux absorbés par les racines. Elle circule vers les parties aériennes, notamment les feuilles, dans des vaisseaux conducteurs appelés xylème."
          },
          {
            type: "definition",
            titre: "La sève élaborée",
            texte: "La sève élaborée transporte notamment des sucres produits par les organes verts vers d'autres parties de la plante, par exemple les racines, les fruits ou les organes en croissance. Elle circule dans d'autres tissus conducteurs, appelés phloème."
          },
          {
            type: "schema",
            titre: "Des racines aux feuilles et aux autres organes",
            svg: "<svg viewBox='0 0 360 310' xmlns='http://www.w3.org/2000/svg'><path d='M174 105 L174 245 M186 105 L186 245' stroke='#78350f' stroke-width='4'/><path d='M178 245 Q145 265 125 285 M180 245 Q180 270 180 295 M182 245 Q215 265 235 285' fill='none' stroke='#92400e' stroke-width='3'/><ellipse cx='130' cy='95' rx='55' ry='24' transform='rotate(-25 130 95)' fill='#86efac' stroke='#15803d' stroke-width='2'/><ellipse cx='230' cy='95' rx='55' ry='24' transform='rotate(25 230 95)' fill='#86efac' stroke='#15803d' stroke-width='2'/><path d='M165 225 L165 135 M160 143 L165 135 L170 143' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M195 135 L195 225 M190 217 L195 225 L200 217' fill='none' stroke='#be185d' stroke-width='3'/><text x='10' y='162' font-size='12' fill='#1d4ed8'>Sève brute</text><text x='10' y='178' font-size='12' fill='#1d4ed8'>eau + minéraux</text><line x1='100' y1='158' x2='161' y2='158' stroke='#2563eb'/><text x='220' y='183' font-size='12' fill='#be185d'>Sève élaborée</text><text x='220' y='199' font-size='12' fill='#be185d'>dont sucres</text><line x1='217' y1='179' x2='198' y2='179' stroke='#be185d'/><text x='180' y='30' text-anchor='middle' font-size='14' fill='#166534'>Feuilles</text><text x='180' y='305' text-anchor='middle' font-size='13' fill='#78350f'>Racines</text></svg>",
            legende: "Schéma simplifié : la sève brute monte vers les feuilles. Les sucres produits dans les feuilles peuvent être transportés vers d'autres organes ; la flèche rose montre ici un trajet possible vers les racines."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "La sève brute apporte principalement eau et sels minéraux depuis les racines. La sève élaborée distribue notamment des sucres. Selon les besoins de la plante, les substances transportées par le phloème peuvent rejoindre différents organes."
          }
        ]
      },
      {
        id: "svt3-plantes-photosynthese",
        titre: "La photosynthèse",
        blocs: [
          {
            type: "definition",
            titre: "Fabriquer de la matière organique",
            texte: "La photosynthèse permet aux organes verts de la plante de produire de la matière organique à partir notamment d'eau et de dioxyde de carbone, grâce à l'énergie lumineuse. Elle libère aussi du dioxygène."
          },
          {
            type: "texte",
            titre: "Le rôle des feuilles",
            texte: "Les feuilles vertes contiennent des cellules capables de réaliser la photosynthèse. Le dioxyde de carbone de l'air entre notamment par de petites ouvertures des feuilles appelées stomates. L'eau arrive depuis les racines."
          },
          {
            type: "schema",
            titre: "Bilan simplifié de la photosynthèse",
            svg: "<svg viewBox='0 0 360 270' xmlns='http://www.w3.org/2000/svg'><circle cx='62' cy='43' r='22' fill='#facc15'/><text x='98' y='48' font-size='13' fill='#92400e'>Lumière</text><path d='M85 62 L145 105 M137 103 L145 105 L142 97' fill='none' stroke='#d97706' stroke-width='2'/><ellipse cx='180' cy='145' rx='82' ry='48' fill='#86efac' stroke='#15803d' stroke-width='2'/><text x='180' y='141' text-anchor='middle' font-size='14' fill='#14532d'>Feuille verte</text><text x='180' y='159' text-anchor='middle' font-size='12' fill='#14532d'>Photosynthèse</text><text x='5' y='120' font-size='12' fill='#1f2937'>CO₂ de l'air</text><path d='M12 127 L96 135 M88 130 L96 135 L88 140' fill='none' stroke='#374151' stroke-width='2'/><text x='7' y='218' font-size='12' fill='#1d4ed8'>Eau des racines</text><path d='M82 204 L130 177 M122 178 L130 177 L126 184' fill='none' stroke='#2563eb' stroke-width='2'/><text x='266' y='112' font-size='12' fill='#1f2937'>O₂ libéré</text><path d='M260 124 L332 115 M324 111 L332 115 L325 121' fill='none' stroke='#374151' stroke-width='2'/><text x='235' y='220' font-size='12' fill='#be185d'>Sucres produits</text><path d='M232 179 L275 204 M268 198 L275 204 L266 205' fill='none' stroke='#be185d' stroke-width='2'/></svg>",
            legende: "À la lumière, la feuille utilise notamment de l'eau et du dioxyde de carbone pour produire des sucres et libérer du dioxygène. Les flèches représentent les échanges et la production, pas des vaisseaux."
          },
          {
            type: "regle",
            titre: "Bilan à retenir",
            texte: "Eau + dioxyde de carbone — avec l'énergie lumineuse et les organes verts → matière organique, notamment des sucres + dioxygène.\nLes sels minéraux sont aussi nécessaires à la vie et à la croissance de la plante, même s'ils ne figurent pas dans ce bilan simplifié."
          },
          {
            type: "remarque",
            titre: "Photosynthèse et respiration",
            texte: "La photosynthèse nécessite de la lumière. Les cellules de la plante respirent aussi : elles utilisent du dioxygène et rejettent du dioxyde de carbone, de jour comme de nuit. Il ne faut pas confondre ces deux phénomènes."
          }
        ]
      },
      {
        id: "svt3-plantes-experiences",
        titre: "Mettre en évidence les besoins d'une plante",
        blocs: [
          {
            type: "definition",
            titre: "L'expérience témoin",
            texte: "Une expérience témoin sert de référence pour comparer les résultats. Pour étudier l'effet d'un facteur, on prépare deux situations aussi semblables que possible et on ne modifie que le facteur étudié."
          },
          {
            type: "exemple",
            titre: "Étudier le rôle de la lumière",
            texte: "On place deux jeunes plants comparables de la même espèce dans des conditions aussi semblables que possible : même sol, même quantité d'eau et température comparable. Le plant A reçoit de la lumière ; le plant B est placé dans l'obscurité. A sert de témoin pour comparer avec B. On observe leur évolution sur plusieurs jours."
          },
          {
            type: "methode",
            titre: "Interpréter les résultats",
            texte: "1. Repère le facteur étudié : ici, la lumière.\n2. Vérifie que les autres conditions sont aussi semblables que possible.\n3. Décris ce qui est observé dans chaque situation.\n4. Compare les résultats.\n5. Relie la différence observée au facteur étudié, en tenant compte des limites de l'expérience."
          },
          {
            type: "remarque",
            titre: "Une comparaison juste",
            texte: "Si le plant éclairé reçoit aussi plus d'eau que l'autre, on ne peut pas attribuer avec certitude une différence de croissance à la lumière seule : deux facteurs ont changé."
          },
          {
            type: "rappel",
            titre: "Amidon dans une feuille",
            texte: "Une partie des sucres produits par la plante peut être stockée sous forme d'amidon. Une coloration bleu-noir avec de l'eau iodée indique la présence d'amidon dans la zone testée. La préparation d'une feuille pour ce test doit être réalisée sous encadrement, car elle peut nécessiter du chauffage et de l'alcool inflammable."
          }
        ]
      },
      {
        id: "svt3-plantes-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan du chapitre",
            texte: "• Les racines absorbent l'eau et les sels minéraux, notamment grâce aux poils absorbants.\n• La sève brute transporte principalement l'eau et les sels minéraux vers les parties aériennes dans le xylème.\n• Les organes verts utilisent notamment l'eau, le dioxyde de carbone et l'énergie lumineuse pour produire de la matière organique : c'est la photosynthèse.\n• La sève élaborée transporte notamment des sucres vers d'autres organes.\n• Les cellules de la plante respirent de jour comme de nuit.\n• Une expérience comparative est plus solide lorsque seul le facteur étudié change."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Cite quatre éléments ou conditions nécessaires à la nutrition d'une plante verte.",
        correction: "Une plante verte a notamment besoin d'eau, de sels minéraux, de dioxyde de carbone et de lumière."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le rôle des poils absorbants ?",
        correction: "Les poils absorbants augmentent la surface de contact entre la jeune racine et le sol. Ils facilitent l'absorption de l'eau et des sels minéraux dissous."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce que la sève brute et dans quel sens circule-t-elle principalement ?",
        correction: "La sève brute contient principalement de l'eau et des sels minéraux absorbés par les racines. Elle circule principalement des racines vers les parties aériennes, notamment les feuilles, dans le xylème."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète le bilan : eau + ... — avec la lumière → matière organique + ...",
        correction: "Eau + dioxyde de carbone — avec la lumière et les organes verts → matière organique + dioxygène. Ce bilan simplifié correspond à la photosynthèse."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une plante verte est arrosée mais reste plusieurs jours dans l'obscurité. Un élève affirme : « Puisqu'elle reçoit de l'eau, elle peut continuer à faire la photosynthèse normalement. » Explique son erreur.",
        correction: "L'eau est nécessaire, mais elle ne suffit pas. La photosynthèse nécessite aussi notamment du dioxyde de carbone et de l'énergie lumineuse. Dans l'obscurité, la plante ne peut pas réaliser normalement la photosynthèse, même si elle reçoit de l'eau. Ses cellules continuent néanmoins à respirer."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique comment de l'eau présente dans le sol peut parvenir à une feuille.",
        correction: "L'eau est absorbée par les jeunes racines, notamment au niveau des poils absorbants. Elle rejoint les tissus conducteurs de la racine. Avec les sels minéraux dissous, elle constitue la sève brute, qui circule dans le xylème vers les parties aériennes, dont les feuilles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux plants comparables reçoivent la même quantité d'eau et poussent dans le même type de sol. Le premier est placé à la lumière et le second dans l'obscurité, à température comparable. Après plusieurs jours, le premier pousse mieux. Quel facteur a été étudié ? Que suggère cette observation ?",
        correction: "Le facteur étudié est la lumière. Les autres conditions mentionnées sont maintenues semblables pour faciliter la comparaison. La meilleure croissance du plant éclairé suggère que la lumière favorise sa croissance dans les conditions de l'expérience, notamment parce qu'elle permet la photosynthèse. Une répétition avec plusieurs plants rendrait la conclusion plus solide."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un camarade dit : « La plante ne respire que la nuit, car elle fait la photosynthèse le jour. » A-t-il raison ?",
        correction: "Non. Les cellules de la plante respirent de jour comme de nuit : elles utilisent du dioxygène et rejettent du dioxyde de carbone. La photosynthèse, elle, nécessite de la lumière. Le jour, les deux phénomènes peuvent donc avoir lieu en même temps."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On veut tester le rôle des sels minéraux. Un plant A pousse dans une solution contenant de l'eau et des sels minéraux. Un plant B comparable pousse dans de l'eau sans ajout de sels minéraux. Les deux plants reçoivent la même lumière et sont placés à la même température. Après plusieurs semaines, A pousse mieux que B. Identifie le témoin, le facteur étudié et propose une conclusion prudente.",
        correction: "Le plant A, cultivé avec des sels minéraux, sert de témoin pour comparer la situation privée de sels minéraux ajoutés. Le facteur étudié est la présence de sels minéraux dans la solution. Les conditions de lumière et de température sont comparables.\nLa meilleure croissance de A suggère que les sels minéraux sont nécessaires à une bonne croissance dans ces conditions. Pour renforcer la conclusion, on peut répéter l'expérience avec plusieurs plants et vérifier que les autres conditions restent identiques."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On couvre une partie d'une feuille verte avec un cache opaque, puis on expose la plante à la lumière. Après une préparation réalisée sous encadrement, on teste la feuille avec de l'eau iodée. La partie éclairée devient bleu-noir ; la partie cachée ne prend pas cette coloration. Décris le résultat et explique ce qu'il suggère sur le rôle de la lumière.",
        correction: "La coloration bleu-noir indique la présence d'amidon dans la partie éclairée. La partie cachée ne montre pas cette coloration : le test n'y met pas en évidence d'amidon.\nLa comparaison suggère que la lumière a permis la production de matière organique ensuite stockée en partie sous forme d'amidon dans la zone éclairée. Pour interpréter correctement ce résultat, il faut une préparation et des conditions adaptées, notamment une plante préalablement privée de lumière assez longtemps pour réduire ses réserves d'amidon dans la feuille."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève écrit : « Les racines fabriquent les sucres à partir des sels minéraux. Ces sucres montent ensuite dans la sève brute jusqu'aux feuilles. La plante rejette toujours du dioxygène, même dans l'obscurité. » Corrige ces trois affirmations.",
        correction: "1. Les racines absorbent surtout l'eau et les sels minéraux. Les organes verts, notamment les feuilles, produisent des sucres par photosynthèse à partir notamment d'eau et de dioxyde de carbone, grâce à la lumière.\n2. La sève brute transporte principalement l'eau et les sels minéraux vers les feuilles. Les sucres sont notamment transportés par la sève élaborée vers d'autres organes.\n3. La libération de dioxygène liée à la photosynthèse nécessite de la lumière. Dans l'obscurité, la photosynthèse ne se poursuit pas normalement ; les cellules de la plante continuent en revanche à respirer."
      }
    ]
  }
]);
