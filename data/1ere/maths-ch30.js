enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-statistiques-classes-representations",
    titre: "Chapitre 30 : Statistiques en classes : effectifs, fréquences et représentations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch30-classes",
        titre: "1. Organiser une série en classes",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi regrouper les données ?",
            texte: "Lorsqu'une série comporte beaucoup de valeurs numériques, on peut les regrouper dans des intervalles appelés classes. Ce regroupement facilite la lecture, mais il fait perdre le détail des valeurs individuelles."
          },
          {
            type: "definition",
            titre: "Classe et amplitude",
            texte: "Une classe est un intervalle de valeurs. Son amplitude est la différence entre sa borne supérieure et sa borne inférieure. Par exemple, la classe [10 ; 15[ contient 10 mais pas 15, et son amplitude est 5."
          },
          {
            type: "definition",
            titre: "Effectif et fréquence",
            texte: "L'effectif nᵢ d'une classe est le nombre de données qui lui appartiennent. L'effectif total N est la somme des effectifs. La fréquence de la classe est fᵢ = nᵢ/N ; en pourcentage, elle vaut 100fᵢ %."
          },
          {
            type: "tableau",
            titre: "Exemple : durées de trajet de 20 élèves",
            entetes: ["Durée en minutes", "[0 ; 10[", "[10 ; 20[", "[20 ; 30[", "[30 ; 40[", "Total"],
            lignes: [
              ["Effectif", "2", "6", "8", "4", "20"],
              ["Fréquence", "0,10", "0,30", "0,40", "0,20", "1"],
              ["Fréquence en %", "10 %", "30 %", "40 %", "20 %", "100 %"]
            ]
          },
          {
            type: "exemple",
            titre: "Calculer une fréquence",
            texte: "Dans l'exemple, 8 élèves sur 20 ont un trajet appartenant à [20 ; 30[ minutes. La fréquence est 8/20 = 0,4, soit 40 %."
          },
          {
            type: "remarque",
            titre: "Attention aux bornes",
            texte: "Les classes doivent couvrir les données sans compter deux fois une valeur située sur une frontière. Avec les classes [0 ; 10[ et [10 ; 20[, la valeur 10 appartient à la seconde."
          },
          {
            type: "definition",
            titre: "Centre et classe modale",
            texte: "Le centre d'une classe est la moyenne de ses bornes. La classe [20 ; 30[ a pour centre 25. Si toutes les classes ont la même amplitude, une classe d'effectif maximal est appelée classe modale. Pour des amplitudes différentes, l'histogramme conduit à repérer la classe de densité maximale."
          }
        ]
      },
      {
        id: "m1-ch30-cumules",
        titre: "2. Effectifs et fréquences cumulés",
        blocs: [
          {
            type: "definition",
            titre: "Cumul croissant",
            texte: "L'effectif cumulé croissant d'une classe est la somme des effectifs depuis la première classe jusqu'à cette classe incluse. La fréquence cumulée croissante se calcule de la même manière avec les fréquences."
          },
          {
            type: "tableau",
            titre: "Cumuls des durées de trajet",
            entetes: ["Classe en minutes", "[0 ; 10[", "[10 ; 20[", "[20 ; 30[", "[30 ; 40["],
            lignes: [
              ["Effectif", "2", "6", "8", "4"],
              ["Effectif cumulé croissant", "2", "8", "16", "20"],
              ["Fréquence cumulée croissante", "0,10", "0,40", "0,80", "1"]
            ]
          },
          {
            type: "exemple",
            titre: "Lire un cumul",
            texte: "L'effectif cumulé à la fin de [10 ; 20[ vaut 8 : 8 élèves ont une durée strictement inférieure à 20 minutes. La fréquence correspondante est 8/20 = 0,40, soit 40 %."
          },
          {
            type: "definition",
            titre: "Cumul décroissant",
            texte: "L'effectif cumulé décroissant à partir d'une classe est la somme de l'effectif de cette classe et de ceux des classes suivantes. Dans l'exemple, à partir de [20 ; 30[, il vaut 8 + 4 = 12 : 12 trajets durent au moins 20 minutes."
          },
          {
            type: "remarque",
            titre: "Vérification",
            texte: "Le dernier effectif cumulé croissant est toujours l'effectif total N. La dernière fréquence cumulée croissante vaut 1, soit 100 %."
          }
        ]
      },
      {
        id: "m1-ch30-histogrammes",
        titre: "3. Histogrammes",
        blocs: [
          {
            type: "definition",
            titre: "Des aires proportionnelles aux effectifs",
            texte: "Un histogramme représente une série en classes par des rectangles contigus. La base de chaque rectangle correspond à la classe. Son aire, et non nécessairement sa hauteur, est proportionnelle à l'effectif ou à la fréquence."
          },
          {
            type: "regle",
            titre: "Hauteur d'un rectangle",
            texte: "Si l'on choisit une aire numériquement égale à l'effectif, la hauteur est la densité d'effectif : effectif ÷ amplitude de la classe. Lorsque toutes les classes ont la même amplitude, les hauteurs sont proportionnelles aux effectifs."
          },
          {
            type: "schema",
            titre: "Histogramme des durées de trajet",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 280' role='img' aria-label='Histogramme des durées de trajet : classes de 0 à 10, 10 à 20, 20 à 30 et 30 à 40 minutes, avec des effectifs respectifs de 2, 6, 8 et 4.'><rect width='500' height='280' fill='white'/><line x1='60' y1='220' x2='460' y2='220' stroke='#333' stroke-width='2'/><line x1='60' y1='220' x2='60' y2='25' stroke='#333' stroke-width='2'/><rect x='60' y='180' width='90' height='40' fill='#b8d8ef' stroke='#1769aa'/><rect x='150' y='100' width='90' height='120' fill='#b8d8ef' stroke='#1769aa'/><rect x='240' y='60' width='90' height='160' fill='#b8d8ef' stroke='#1769aa'/><rect x='330' y='140' width='90' height='80' fill='#b8d8ef' stroke='#1769aa'/><text x='49' y='224' font-size='12'>0</text><text x='43' y='184' font-size='12'>2</text><text x='43' y='144' font-size='12'>4</text><text x='43' y='104' font-size='12'>6</text><text x='43' y='64' font-size='12'>8</text><text x='56' y='240' font-size='12'>0</text><text x='143' y='240' font-size='12'>10</text><text x='233' y='240' font-size='12'>20</text><text x='323' y='240' font-size='12'>30</text><text x='413' y='240' font-size='12'>40</text><text x='165' y='265' font-size='13'>Durée en minutes</text><text x='65' y='20' font-size='13'>Effectif : échelle des hauteurs</text></svg>",
            legende: "Les classes ont toutes une amplitude de 10 minutes : les hauteurs sont donc proportionnelles aux effectifs. Le rectangle le plus haut correspond à la classe [20 ; 30[."
          },
          {
            type: "exemple",
            titre: "Classes d'amplitudes différentes",
            texte: "Une classe [0 ; 10[ a pour effectif 6 et amplitude 10 : sa densité est 6/10 = 0,6. Une classe [10 ; 30[ a pour effectif 8 et amplitude 20 : sa densité est 8/20 = 0,4. La seconde a un effectif plus grand, mais son rectangle est moins haut ; les aires restent proportionnelles aux effectifs."
          },
          {
            type: "remarque",
            titre: "Histogramme et diagramme en bâtons",
            texte: "Dans un histogramme de classes contiguës, les rectangles se touchent et leurs largeurs représentent les amplitudes. Un diagramme en bâtons sert plutôt à représenter des valeurs ou des catégories distinctes ; ses bâtons sont séparés."
          }
        ]
      },
      {
        id: "m1-ch30-courbes-polygones",
        titre: "4. Polygones et courbes cumulatives",
        blocs: [
          {
            type: "definition",
            titre: "Polygone des effectifs",
            texte: "On peut représenter chaque classe par son centre et placer à cette abscisse une ordonnée proportionnelle à son effectif. En reliant les points successifs, on obtient un polygone des effectifs. Pour des classes d'amplitudes différentes, on peut plutôt utiliser les densités, en précisant l'échelle choisie."
          },
          {
            type: "definition",
            titre: "Courbe cumulative croissante",
            texte: "On place les effectifs cumulés aux bornes supérieures des classes, en partant de l'effectif 0 à la borne inférieure de la première classe. On relie ensuite les points. Les valeurs lues entre les bornes sont des estimations si l'on suppose une répartition uniforme à l'intérieur de chaque classe."
          },
          {
            type: "schema",
            titre: "Courbe des effectifs cumulés croissants",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 280' role='img' aria-label='Courbe cumulative reliant les points de coordonnées zéro zéro, dix deux, vingt huit, trente seize et quarante vingt.'><rect width='500' height='280' fill='white'/><line x1='60' y1='220' x2='460' y2='220' stroke='#333' stroke-width='2'/><line x1='60' y1='220' x2='60' y2='25' stroke='#333' stroke-width='2'/><polyline points='60,220 150,202 240,148 330,76 420,40' fill='none' stroke='#1769aa' stroke-width='3'/><circle cx='60' cy='220' r='4' fill='#1769aa'/><circle cx='150' cy='202' r='4' fill='#1769aa'/><circle cx='240' cy='148' r='4' fill='#1769aa'/><circle cx='330' cy='76' r='4' fill='#1769aa'/><circle cx='420' cy='40' r='4' fill='#1769aa'/><text x='41' y='224' font-size='12'>0</text><text x='37' y='175' font-size='12'>5</text><text x='30' y='134' font-size='12'>10</text><text x='30' y='89' font-size='12'>15</text><text x='30' y='44' font-size='12'>20</text><text x='56' y='240' font-size='12'>0</text><text x='143' y='240' font-size='12'>10</text><text x='233' y='240' font-size='12'>20</text><text x='323' y='240' font-size='12'>30</text><text x='413' y='240' font-size='12'>40</text><text x='150' y='265' font-size='13'>Durée en minutes</text><text x='65' y='20' font-size='13'>Effectif cumulé</text></svg>",
            legende: "Les points correspondent aux cumuls 0, 2, 8, 16 et 20 aux bornes 0, 10, 20, 30 et 40 minutes."
          },
          {
            type: "exemple",
            titre: "Lire une estimation",
            texte: "Entre 20 et 30 minutes, la courbe relie le cumul 8 au cumul 16. À 25 minutes, une lecture linéaire donne environ 12 élèves. Ce n'est pas nécessairement le nombre exact : les données individuelles ne sont pas connues."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une classe [10 ; 20[ contient-elle les valeurs 10, 15 et 20 ? Quelle est son amplitude ?",
        correction: "La classe contient 10 et 15, mais pas 20. Son amplitude est 20 − 10 = 10."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Sur 25 élèves, 5 appartiennent à une classe statistique. Calculer la fréquence de cette classe et l'exprimer en pourcentage.",
        correction: "La fréquence est 5/25 = 0,20, soit 20 %."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les effectifs des classes [0 ; 5[, [5 ; 10[ et [10 ; 15[ sont respectivement 3, 7 et 10. Calculer l'effectif total et les effectifs cumulés croissants.",
        correction: "L'effectif total vaut 3 + 7 + 10 = 20. Les effectifs cumulés croissants sont 3, puis 3 + 7 = 10, puis 3 + 7 + 10 = 20."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les classes [0 ; 10[, [10 ; 20[ et [20 ; 30[ ont pour effectifs 4, 9 et 7. Donner leurs fréquences et la classe modale.",
        correction: "L'effectif total est 20. Les fréquences sont 4/20 = 0,20 ; 9/20 = 0,45 ; 7/20 = 0,35, soit 20 %, 45 % et 35 %. Les amplitudes sont égales et l'effectif maximal est 9 : la classe modale est [10 ; 20[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une série est regroupée en trois classes : [0 ; 5[ d'effectif 10, [5 ; 15[ d'effectif 15 et [15 ; 20[ d'effectif 5. Calculer les hauteurs d'un histogramme dont les aires sont égales aux effectifs. Quelle classe a la plus grande densité ?",
        correction: "Les amplitudes sont 5, 10 et 5. Les hauteurs sont respectivement 10/5 = 2, 15/10 = 1,5 et 5/5 = 1. La classe [0 ; 5[ a la plus grande densité. Bien que son effectif soit inférieur à celui de [5 ; 15[, son rectangle est plus haut."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les classes [0 ; 10[, [10 ; 20[, [20 ; 30[ et [30 ; 40[ ont pour effectifs 2, 6, 8 et 4. Donner les points à placer pour tracer la courbe des effectifs cumulés croissants, puis estimer le cumul à 25 par interpolation linéaire.",
        correction: "Les effectifs cumulés sont 2, 8, 16 et 20. On place les points (0 ; 0), (10 ; 2), (20 ; 8), (30 ; 16) et (40 ; 20). À 25, au milieu de [20 ; 30[, l'interpolation linéaire donne (8 + 16)/2 = 12. C'est une estimation, non nécessairement le nombre exact."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une enquête sur 40 durées en minutes donne : [0 ; 10[ : 4 ; [10 ; 20[ : 12 ; [20 ; 30[ : 16 ; [30 ; 40[ : 8. Calculer les fréquences, les effectifs cumulés croissants et l'effectif cumulé décroissant à partir de 20 minutes. Quelle est la classe modale ?",
        correction: "Les fréquences sont 4/40 = 0,10 ; 12/40 = 0,30 ; 16/40 = 0,40 ; 8/40 = 0,20. Les effectifs cumulés croissants sont 4, 16, 32 et 40. À partir de 20 minutes, l'effectif cumulé décroissant est 16 + 8 = 24. Les classes ont la même amplitude et l'effectif maximal est 16 : la classe modale est [20 ; 30[."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une série comporte deux classes : [0 ; 4[ d'effectif 8 et [4 ; 12[ d'effectif 12. Déterminer les hauteurs de l'histogramme si les aires sont égales aux effectifs, puis les points de la courbe cumulative. Estimer l'effectif cumulé à 8 par interpolation linéaire.",
        correction: "Les amplitudes sont 4 et 8. Les hauteurs sont 8/4 = 2 et 12/8 = 1,5. Les points de la courbe cumulative sont (0 ; 0), (4 ; 8) et (12 ; 20). Comme 8 est au milieu de [4 ; 12[, l'interpolation donne 8 + 12/2 = 14. Cette valeur est une estimation fondée sur une répartition uniforme dans la classe."
      }
    ]
  }
]);
