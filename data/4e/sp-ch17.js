// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch17",
    titre: "Chapitre 17 : La propagation de la lumière",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch17-lecon1",
        titre: "La lumière se propage",
        blocs: [
          {
            type: "texte",
            titre: "De la source à l'œil",
            texte: "Pour voir une source lumineuse ou un objet éclairé, de la lumière doit parvenir jusqu'à l'œil. Elle se propage de la source vers l'objet, puis éventuellement de l'objet vers l'œil."
          },
          {
            type: "regle",
            titre: "Propagation rectiligne",
            texte: "Dans un milieu transparent et homogène, la lumière se propage en ligne droite. Un milieu homogène présente les mêmes propriétés en tous ses points."
          },
          {
            type: "definition",
            titre: "Rayon lumineux",
            texte: "Un rayon lumineux est une représentation de la direction et du sens de propagation de la lumière. On le dessine par une ligne munie d'une flèche."
          },
          {
            type: "definition",
            titre: "Faisceau lumineux",
            texte: "Un faisceau lumineux est un ensemble de rayons lumineux. Selon leur disposition, on peut représenter un faisceau divergent, parallèle ou convergent."
          },
          {
            type: "remarque",
            titre: "Un modèle",
            texte: "Les rayons lumineux sont des lignes utilisées pour représenter la propagation. Ils ne sont pas des fils matériels."
          }
        ]
      },
      {
        id: "sp4-ch17-lecon2",
        titre: "Les faisceaux lumineux",
        blocs: [
          {
            type: "tableau",
            titre: "Trois formes de faisceaux",
            entetes: ["Faisceau", "Disposition des rayons"],
            lignes: [
              ["Divergent", "Les rayons s'écartent dans le sens de propagation."],
              ["Parallèle", "Les rayons restent parallèles entre eux."],
              ["Convergent", "Les rayons se rapprochent dans le sens de propagation."]
            ]
          },
          {
            type: "schema",
            titre: "Représentation des faisceaux",
            svg: "<svg viewBox='0 0 360 220' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='220' fill='#f8fafc'/><g stroke='#2563eb' stroke-width='2.5'><line x1='45' y1='40' x2='150' y2='20'/><line x1='45' y1='40' x2='150' y2='40'/><line x1='45' y1='40' x2='150' y2='60'/><line x1='45' y1='100' x2='150' y2='100'/><line x1='45' y1='115' x2='150' y2='115'/><line x1='45' y1='130' x2='150' y2='130'/><line x1='45' y1='160' x2='150' y2='180'/><line x1='45' y1='180' x2='150' y2='180'/><line x1='45' y1='200' x2='150' y2='180'/></g><g fill='#2563eb'><polygon points='150,20 140,17 142,26'/><polygon points='150,40 140,35 140,45'/><polygon points='150,60 142,54 140,63'/><polygon points='150,100 140,95 140,105'/><polygon points='150,115 140,110 140,120'/><polygon points='150,130 140,125 140,135'/><polygon points='150,180 140,173 142,182'/><polygon points='150,180 140,175 140,185'/><polygon points='150,180 142,178 140,187'/></g><text x='180' y='45' font-size='14' fill='#0f172a'>Divergent</text><text x='180' y='120' font-size='14' fill='#0f172a'>Parallèle</text><text x='180' y='185' font-size='14' fill='#0f172a'>Convergent</text></svg>",
            legende: "Les flèches indiquent le sens de propagation de gauche à droite."
          },
          {
            type: "remarque",
            titre: "Observer le sens",
            texte: "Pour distinguer un faisceau convergent d'un faisceau divergent, il faut regarder dans quel sens la lumière se propage."
          }
        ]
      },
      {
        id: "sp4-ch17-lecon3",
        titre: "La vitesse de la lumière",
        blocs: [
          {
            type: "definition",
            titre: "Célérité",
            texte: "La célérité est la vitesse de propagation d'une lumière ou d'une onde dans un milieu donné. Dans le vide, celle de la lumière est notée c."
          },
          {
            type: "regle",
            titre: "Valeur dans le vide",
            texte: "La vitesse de la lumière dans le vide vaut exactement 299 792 458 m/s. Pour les calculs simples, on utilise souvent c ≈ 300 000 000 m/s, soit 3,0 × 10⁸ m/s."
          },
          {
            type: "regle",
            titre: "Distance, vitesse et durée",
            texte: "Pour une vitesse constante :\ndistance = vitesse × durée.\nAvec d en mètres, c en mètres par seconde et t en secondes : d = c × t."
          },
          {
            type: "exemple",
            titre: "En une seconde",
            texte: "Dans le vide, en une seconde, la lumière parcourt environ 3,0 × 10⁸ m, soit 300 000 km."
          },
          {
            type: "remarque",
            titre: "Dans d'autres milieux",
            texte: "La lumière se propage aussi dans certains milieux transparents, comme l'air ou le verre. Sa vitesse dépend du milieu et elle est inférieure à sa vitesse dans le vide."
          }
        ]
      },
      {
        id: "sp4-ch17-lecon4",
        titre: "L'année-lumière",
        blocs: [
          {
            type: "definition",
            titre: "Une unité de distance",
            texte: "Une année-lumière est la distance parcourue par la lumière dans le vide pendant une année. Malgré son nom, c'est une unité de distance et non de durée."
          },
          {
            type: "exemple",
            titre: "Ordre de grandeur",
            texte: "Une année-lumière vaut environ 9 460 milliards de kilomètres, soit 9,46 × 10¹² km."
          },
          {
            type: "remarque",
            titre: "Regarder loin, c'est voir le passé",
            texte: "Si la lumière d'une étoile met plusieurs années à nous parvenir, nous voyons l'étoile telle qu'elle était lorsque cette lumière est partie."
          }
        ]
      },
      {
        id: "sp4-ch17-lecon5",
        titre: "Les ombres",
        blocs: [
          {
            type: "texte",
            titre: "Un obstacle opaque",
            texte: "Dans un milieu transparent et homogène, un objet opaque placé devant une source de lumière empêche une partie de la lumière de passer. Cela peut créer des zones d'ombre."
          },
          {
            type: "definition",
            titre: "Ombre propre",
            texte: "L'ombre propre est la partie non éclairée d'un objet opaque."
          },
          {
            type: "definition",
            titre: "Ombre portée",
            texte: "L'ombre portée est la zone sombre formée sur un écran ou une surface lorsque l'objet opaque empêche la lumière de l'atteindre."
          },
          {
            type: "definition",
            titre: "Cône d'ombre",
            texte: "Le cône d'ombre est la région de l'espace située derrière l'objet opaque où la lumière de la source n'arrive pas directement."
          },
          {
            type: "remarque",
            titre: "Avec une source étendue",
            texte: "Une source lumineuse étendue peut aussi produire une zone de pénombre : seule une partie de la source est alors visible depuis cette zone."
          }
        ]
      },
      {
        id: "sp4-ch17-lecon6",
        titre: "Les éclipses",
        blocs: [
          {
            type: "definition",
            titre: "Éclipse de Soleil",
            texte: "Une éclipse de Soleil peut se produire lorsque la Lune se place entre le Soleil et la Terre. Pour certains observateurs sur Terre, la Lune masque alors une partie ou la totalité du Soleil."
          },
          {
            type: "definition",
            titre: "Éclipse de Lune",
            texte: "Une éclipse de Lune peut se produire lorsque la Terre se trouve entre le Soleil et la Lune. La Lune traverse alors tout ou partie de l'ombre ou de la pénombre de la Terre."
          },
          {
            type: "remarque",
            titre: "Éclipse lunaire partielle",
            texte: "Lors d'une éclipse lunaire partielle, seule une partie de la Lune entre dans l'ombre terrestre. Une éclipse pénombrale correspond à un passage dans la pénombre et constitue un cas distinct."
          },
          {
            type: "schema",
            titre: "Positions simplifiées lors des éclipses",
            svg: "<svg viewBox='0 0 360 175' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='175' fill='#f8fafc'/><text x='15' y='20' font-size='13' fill='#0f172a'>Éclipse de Soleil</text><circle cx='55' cy='55' r='22' fill='#fbbf24'/><circle cx='180' cy='55' r='9' fill='#94a3b8'/><circle cx='300' cy='55' r='17' fill='#60a5fa'/><text x='55' y='92' text-anchor='middle' font-size='12' fill='#0f172a'>Soleil</text><text x='180' y='92' text-anchor='middle' font-size='12' fill='#0f172a'>Lune</text><text x='300' y='92' text-anchor='middle' font-size='12' fill='#0f172a'>Terre</text><text x='15' y='120' font-size='13' fill='#0f172a'>Éclipse de Lune</text><circle cx='55' cy='150' r='22' fill='#fbbf24'/><circle cx='180' cy='150' r='17' fill='#60a5fa'/><circle cx='300' cy='150' r='9' fill='#94a3b8'/><text x='55' y='174' text-anchor='middle' font-size='12' fill='#0f172a'>Soleil</text><text x='180' y='174' text-anchor='middle' font-size='12' fill='#0f172a'>Terre</text><text x='300' y='174' text-anchor='middle' font-size='12' fill='#0f172a'>Lune</text></svg>",
            legende: "Les tailles et les distances ne sont pas à l'échelle. Les astres sont représentés dans l'ordre nécessaire à chaque éclipse."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ne regarde jamais directement le Soleil, y compris pendant une éclipse. L'observation exige une protection spécialement conçue et certifiée pour cet usage, en bon état et utilisée correctement."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans quel type de milieu la lumière se propage-t-elle en ligne droite ?",
        correction: "Dans un milieu transparent et homogène."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une année-lumière est-elle une durée ou une distance ?",
        correction: "C'est une distance : celle parcourue par la lumière dans le vide pendant une année."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un faisceau est représenté par des rayons qui s'écartent dans le sens de propagation. Comment appelle-t-on ce faisceau ?",
        correction: "C'est un faisceau divergent : ses rayons s'écartent dans le sens de propagation."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle différence y a-t-il entre l'ombre propre et l'ombre portée ?",
        correction: "L'ombre propre est la partie non éclairée de l'objet opaque. L'ombre portée est la zone sombre formée sur une surface lorsque l'objet empêche la lumière de l'atteindre."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "À l'aide de c ≈ 3,0 × 10⁸ m/s, calcule la distance parcourue par la lumière dans le vide en 2 secondes.",
        correction: "d = c × t = 3,0 × 10⁸ × 2 = 6,0 × 10⁸ m.\nCela représente 600 000 000 m, soit 600 000 km."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quel astre se trouve entre les deux autres lors d'une éclipse de Soleil ? Et lors d'une éclipse de Lune ?",
        correction: "Lors d'une éclipse de Soleil, la Lune se trouve entre le Soleil et la Terre. Lors d'une éclipse de Lune, la Terre se trouve entre le Soleil et la Lune."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une lumière parcourt dans le vide une distance de 900 000 km. Estime la durée du trajet en utilisant c ≈ 300 000 km/s.",
        correction: "On utilise t = d ÷ c.\nt = 900 000 ÷ 300 000 = 3 s.\nLa lumière met environ 3 secondes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève dit : « Pendant une éclipse de Lune, la Lune se place entre la Terre et le Soleil. » Corrige son affirmation.",
        correction: "Pendant une éclipse de Lune, c'est la Terre qui se trouve entre le Soleil et la Lune. La Lune traverse tout ou partie de l'ombre ou de la pénombre terrestre. La Lune entre le Soleil et la Terre correspond à la disposition possible pour une éclipse de Soleil."
      }
    ]
  }
]);
