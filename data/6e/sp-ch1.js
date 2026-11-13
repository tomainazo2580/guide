// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-etats",
    titre: "Chapitre 1 : Les trois états de la matière",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-etats-decouverte",
        titre: "Découvrir les trois états",
        blocs: [
          {
            type: "exemple",
            titre: "La matière autour de toi",
            texte: "Regarde autour de toi : le riz dans le sac, l'eau de la rizière, l'air que tu respires. Tout cela est de la matière."
          },
          {
            type: "definition",
            titre: "Les trois états",
            texte: "La matière existe sous trois états : l'état solide, l'état liquide et l'état gazeux (le gaz)."
          },
          {
            type: "exemple",
            titre: "Quelques exemples",
            texte: "Solide : le fer, le bois, le sable.\nLiquide : l'eau, l'huile, le lait, le vinaigre.\nGaz : l'air, la vapeur d'eau, l'oxygène, le dioxyde de carbone."
          },
          {
            type: "schema",
            titre: "Les trois états",
            svg: "<svg viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='15' width='90' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><rect x='40' y='55' width='30' height='30' fill='#94a3b8' stroke='#475569' stroke-width='2'/><text x='55' y='110' text-anchor='middle' font-size='14' fill='#1e3a5f'>Solide</text><rect x='115' y='15' width='90' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><rect x='117' y='60' width='86' height='33' fill='#93c5fd'/><line x1='117' y1='60' x2='203' y2='60' stroke='#1d4ed8' stroke-width='2'/><text x='160' y='110' text-anchor='middle' font-size='14' fill='#1e3a5f'>Liquide</text><rect x='220' y='15' width='90' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><circle cx='235' cy='30' r='3' fill='#f59e0b'/><circle cx='265' cy='25' r='3' fill='#f59e0b'/><circle cx='295' cy='40' r='3' fill='#f59e0b'/><circle cx='245' cy='55' r='3' fill='#f59e0b'/><circle cx='280' cy='60' r='3' fill='#f59e0b'/><circle cx='230' cy='80' r='3' fill='#f59e0b'/><circle cx='262' cy='85' r='3' fill='#f59e0b'/><circle cx='298' cy='78' r='3' fill='#f59e0b'/><text x='265' y='110' text-anchor='middle' font-size='14' fill='#1e3a5f'>Gaz</text></svg>",
            legende: "Un solide garde sa forme, un liquide coule, un gaz remplit tout l'espace."
          },
          {
            type: "remarque",
            titre: "Le cas de l'eau",
            texte: "Un même corps peut exister dans les trois états. La glace est de l'eau solide, l'eau du robinet est liquide, la vapeur d'eau est un gaz."
          },
          {
            type: "remarque",
            titre: "Attention à la vapeur",
            texte: "La vapeur d'eau est un gaz invisible. Le nuage blanc au-dessus de la marmite de riz est déjà fait de petites gouttes d'eau liquide."
          }
        ]
      },
      {
        id: "sp6-etats-solides",
        titre: "Les solides",
        blocs: [
          {
            type: "definition",
            titre: "La forme propre",
            texte: "Un solide a une forme propre : il garde sa forme tout seul, sans récipient. On peut le saisir entre les doigts."
          },
          {
            type: "regle",
            titre: "Deux sortes de solides",
            texte: "Un solide compact garde sa forme propre : un clou, une brique, un morceau de bois.\nUn solide divisé est formé de petits grains : le sable, le riz, la farine."
          },
          {
            type: "schema",
            titre: "Compact ou divisé ?",
            svg: "<svg viewBox='0 0 320 115' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='12' width='130' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><rect x='55' y='40' width='34' height='34' fill='#94a3b8' stroke='#475569' stroke-width='2'/><text x='80' y='108' text-anchor='middle' font-size='12' fill='#1e3a5f'>Solide compact</text><rect x='175' y='12' width='130' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><polygon points='240,45 200,86 280,86' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='240' y='108' text-anchor='middle' font-size='12' fill='#1e3a5f'>Solide divisé</text></svg>",
            legende: "Le solide divisé prend la forme du récipient et forme un tas."
          },
          {
            type: "exemple",
            titre: "Le riz de Mamy",
            texte: "Le riz versé dans un seau prend la forme du seau. Mais chaque grain de riz garde sa propre forme : le riz est bien un solide."
          },
          {
            type: "remarque",
            titre: "Le piège du sable",
            texte: "Le sable coule comme un liquide, mais ce n'est pas un liquide : sa surface libre n'est pas plane, il forme un tas."
          }
        ]
      },
// ===== FIN MORCEAU 1/3 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-etats-liquides",
        titre: "Les liquides",
        blocs: [
          {
            type: "definition",
            titre: "Pas de forme propre",
            texte: "Un liquide n'a pas de forme propre : il prend la forme du récipient qui le contient. On ne peut pas le saisir entre les doigts : il coule."
          },
          {
            type: "regle",
            titre: "La surface libre",
            texte: "Au repos, la surface libre d'un liquide est toujours plane et horizontale, même si le récipient est penché."
          },
          {
            type: "schema",
            titre: "Bouteille droite, bouteille penchée",
            svg: "<svg viewBox='0 0 320 125' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='60' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><rect x='22' y='55' width='56' height='43' fill='#93c5fd'/><line x1='22' y1='55' x2='78' y2='55' stroke='#1d4ed8' stroke-width='2'/><text x='50' y='118' text-anchor='middle' font-size='12' fill='#1e3a5f'>Debout</text><g transform='rotate(-25 200 62)'><rect x='170' y='25' width='60' height='80' fill='none' stroke='#1e88e5' stroke-width='2'/></g><line x1='160' y1='68' x2='240' y2='68' stroke='#1d4ed8' stroke-width='3'/><text x='200' y='118' text-anchor='middle' font-size='12' fill='#1e3a5f'>Penchée</text></svg>",
            legende: "Dans les deux cas, la surface de l'eau reste horizontale."
          },
          {
            type: "exemple",
            titre: "L'eau de la rizière",
            texte: "Penche une bouteille d'eau : l'eau prend la forme de la bouteille, mais sa surface reste horizontale, comme la surface d'une rizière pleine d'eau."
          },
          {
            type: "remarque",
            titre: "Au repos seulement",
            texte: "La surface libre est plane et horizontale seulement quand le liquide est au repos, sans remuer."
          }
        ]
      },
      {
        id: "sp6-etats-gaz",
        titre: "Les gaz",
        blocs: [
          {
            type: "definition",
            titre: "Le gaz occupe tout l'espace",
            texte: "Un gaz n'a pas de forme propre. On ne peut pas le saisir entre les doigts. Il occupe tout l'espace qui lui est offert."
          },
          {
            type: "exemple",
            titre: "Le ballon et la bouteille de gaz",
            texte: "Un peu d'air suffit pour gonfler tout un ballon.\nEt dans une bouteille de gaz, le gaz occupe toujours toute la bouteille, même quand elle est presque vide."
          },
          {
            type: "methode",
            titre: "Expérience : la seringue bouchée",
            texte: "Bouche une seringue avec le doigt.\nPousse le piston : l'air prisonnier prend moins de place, c'est la compression.\nTire le piston : l'air prend plus de place, c'est l'expansion."
          },
          {
            type: "schema",
            titre: "Compression et expansion",
            svg: "<svg viewBox='0 0 320 135' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='10' width='120' height='34' fill='#f8fafc' stroke='#475569' stroke-width='2'/><rect x='92' y='10' width='18' height='34' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><line x1='110' y1='27' x2='150' y2='27' stroke='#475569' stroke-width='4'/><line x1='155' y1='27' x2='132' y2='27' stroke='#dc2626' stroke-width='3'/><polygon points='132,27 144,21 144,33' fill='#dc2626'/><circle cx='40' cy='20' r='3' fill='#f59e0b'/><circle cx='52' cy='33' r='3' fill='#f59e0b'/><circle cx='64' cy='20' r='3' fill='#f59e0b'/><circle cx='76' cy='33' r='3' fill='#f59e0b'/><circle cx='58' cy='26' r='3' fill='#f59e0b'/><text x='120' y='62' text-anchor='middle' font-size='12' fill='#1e3a5f'>On pousse : l'air se tasse (compression)</text><rect x='30' y='75' width='120' height='34' fill='#f8fafc' stroke='#475569' stroke-width='2'/><rect x='132' y='75' width='18' height='34' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><line x1='150' y1='92' x2='168' y2='92' stroke='#475569' stroke-width='4'/><line x1='168' y1='92' x2='195' y2='92' stroke='#dc2626' stroke-width='3'/><polygon points='195,92 183,86 183,98' fill='#dc2626'/><circle cx='42' cy='84' r='3' fill='#f59e0b'/><circle cx='72' cy='101' r='3' fill='#f59e0b'/><circle cx='100' cy='84' r='3' fill='#f59e0b'/><circle cx='124' cy='101' r='3' fill='#f59e0b'/><circle cx='88' cy='93' r='3' fill='#f59e0b'/><text x='140' y='127' text-anchor='middle' font-size='12' fill='#1e3a5f'>On tire : l'air prend plus de place (expansion)</text></svg>",
            legende: "La seringue est bouchée : l'air ne peut pas sortir."
          },
          {
            type: "remarque",
            titre: "Seuls les gaz",
            texte: "Seul un gaz peut être comprimé ou détendu. Un solide ou un liquide garde toujours le même volume."
          }
        ]
      },
      {
        id: "sp6-etats-particules",
        titre: "Le modèle particulaire",
        blocs: [
          {
            type: "definition",
            titre: "Des particules invisibles",
            texte: "Pour comprendre la matière, on imagine qu'elle est formée de toutes petites particules, trop petites pour être vues."
          },
          {
            type: "tableau",
            titre: "Les particules dans chaque état",
            entetes: ["État", "Arrangement des particules", "Leur mouvement"],
            lignes: [
              ["Solide", "Compactes et bien ordonnées", "Presque immobiles"],
              ["Liquide", "Proches mais désordonnées", "En mouvement permanent"],
              ["Gaz", "Très éloignées et désordonnées", "Rapides, dans tous les sens"]
            ]
          },
          {
            type: "schema",
            titre: "Trois arrangements",
            svg: "<svg viewBox='0 0 330 120' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='15' width='90' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><circle cx='30' cy='35' r='4' fill='#475569'/><circle cx='50' cy='35' r='4' fill='#475569'/><circle cx='70' cy='35' r='4' fill='#475569'/><circle cx='30' cy='55' r='4' fill='#475569'/><circle cx='50' cy='55' r='4' fill='#475569'/><circle cx='70' cy='55' r='4' fill='#475569'/><circle cx='30' cy='75' r='4' fill='#475569'/><circle cx='50' cy='75' r='4' fill='#475569'/><circle cx='70' cy='75' r='4' fill='#475569'/><text x='55' y='110' text-anchor='middle' font-size='14' fill='#1e3a5f'>Solide</text><rect x='115' y='15' width='90' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><circle cx='135' cy='40' r='4' fill='#1d4ed8'/><circle cx='152' cy='33' r='4' fill='#1d4ed8'/><circle cx='170' cy='42' r='4' fill='#1d4ed8'/><circle cx='140' cy='58' r='4' fill='#1d4ed8'/><circle cx='160' cy='55' r='4' fill='#1d4ed8'/><circle cx='178' cy='62' r='4' fill='#1d4ed8'/><circle cx='138' cy='76' r='4' fill='#1d4ed8'/><circle cx='158' cy='74' r='4' fill='#1d4ed8'/><circle cx='175' cy='78' r='4' fill='#1d4ed8'/><text x='160' y='110' text-anchor='middle' font-size='14' fill='#1e3a5f'>Liquide</text><rect x='220' y='15' width='90' height='80' fill='#f8fafc' stroke='#1e88e5' stroke-width='2'/><circle cx='232' cy='28' r='3' fill='#f59e0b'/><circle cx='262' cy='23' r='3' fill='#f59e0b'/><circle cx='295' cy='38' r='3' fill='#f59e0b'/><circle cx='242' cy='52' r='3' fill='#f59e0b'/><circle cx='282' cy='58' r='3' fill='#f59e0b'/><circle cx='232' cy='80' r='3' fill='#f59e0b'/><circle cx='266' cy='84' r='3' fill='#f59e0b'/><circle cx='298' cy='72' r='3' fill='#f59e0b'/><text x='265' y='110' text-anchor='middle' font-size='14' fill='#1e3a5f'>Gaz</text></svg>",
            legende: "Solide : rangées. Liquide : proches mais en désordre. Gaz : très espacées."
          },
          {
            type: "regle",
            titre: "Ce que le modèle explique",
            texte: "C'est l'arrangement des particules qui explique les propriétés de chaque état : un solide garde sa forme, un liquide coule, un gaz remplit tout l'espace."
          },
          {
            type: "exemple",
            titre: "Pourquoi le gaz se comprime",
            texte: "Dans un gaz, les particules sont très éloignées : on peut les rapprocher.\nDans un solide, les particules se touchent déjà : impossible de les rapprocher."
          }
        ]
      }
// ===== FIN MORCEAU 2/3 — colle le morceau 3 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Cite les trois états de la matière et donne un exemple pour chacun.",
        correction: "L'état solide (exemple : le bois), l'état liquide (exemple : l'eau) et l'état gazeux (exemple : l'air)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Voici six matières : un clou en fer, l'huile, l'air, le riz, le lait, la vapeur d'eau.\nRange-les en trois groupes : solides, liquides, gaz.",
        correction: "Solides : le clou en fer, le riz.\nLiquides : l'huile, le lait.\nGaz : l'air, la vapeur d'eau."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On verse l'eau d'un verre dans une bouteille.\n1. Qu'est-ce qui change ?\n2. Qu'est-ce qui ne change pas ?",
        correction: "1. Sa forme change : un liquide prend la forme du récipient.\n2. Son volume ne change pas."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Mamy penche sa bouteille d'eau pour la ranger.\nDécris la surface de l'eau dans la bouteille penchée, puis cite la propriété du liquide que tu observes.",
        correction: "La surface de l'eau reste plane et horizontale, même quand la bouteille est penchée.\nPropriété : au repos, la surface libre d'un liquide est toujours plane et horizontale."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On bouche une seringue avec le doigt.\n1. On pousse le piston : que se passe-t-il ? Comment s'appelle ce phénomène ?\n2. On tire le piston : que se passe-t-il ? Comment s'appelle ce phénomène ?\n3. Peut-on faire la même chose avec de l'eau dans la seringue ? Pourquoi ?",
        correction: "1. L'air prend moins de place : c'est la compression.\n2. L'air prend plus de place : c'est l'expansion.\n3. Non. L'eau est un liquide : elle garde toujours le même volume. Seul un gaz peut être comprimé ou détendu."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le sable coule quand on le verse, comme un liquide. Pourtant c'est un solide.\n1. Comment s'appelle ce type de solide ?\n2. Donne deux autres exemples.\n3. Cite une différence entre le sable versé dans un seau et l'eau versée dans un seau.",
        correction: "1. C'est un solide divisé : il est formé de petits grains.\n2. Le riz, la farine (ou le sucre).\n3. La surface libre du sable n'est pas plane : il forme un tas. La surface libre de l'eau est plane et horizontale."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Décris, avec le modèle des particules, l'état solide, l'état liquide et l'état gazeux.\nPour chaque état, dis comment les particules sont arrangées et comment elles bougent.",
        correction: "Solide : les particules sont compactes, bien ordonnées et presque immobiles.\nLiquide : les particules sont proches mais désordonnées, elles bougent en permanence.\nGaz : les particules sont très éloignées, désordonnées, et bougent vite dans tous les sens."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une bouteille de gaz presque vide contient encore du gaz : ce gaz occupe toute la bouteille. Une bouteille d'huile à moitié vide : l'huile reste en bas.\nExplique cette différence avec le modèle des particules.",
        correction: "Dans le gaz, les particules sont très éloignées et bougent vite dans tous les sens : elles occupent tout l'espace offert, même si elles sont peu nombreuses.\nDans l'huile, qui est un liquide, les particules restent proches les unes des autres : l'huile garde son volume, reste en bas et sa surface libre est plane et horizontale."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch1.js =====
