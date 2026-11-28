enregistrerChapitres("tle", "sp", [
  {
    id: "tle-sp-ch1",
    titre: "Chapitre 1 : Rappels — grandeurs, vecteurs et mouvement",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-sp-ch1-l1",
        titre: "Leçon 1 : Grandeurs physiques et unités",
        blocs: [
          {
            type: "introduction",
            titre: "Décrire le monde avec des mesures",
            texte: "En physique, on décrit une situation à l’aide de grandeurs mesurables : longueur, durée, masse, vitesse, force ou énergie.\n\nUne mesure s’écrit avec une valeur et une unité. Par exemple : une durée de 5 s, une masse de 2 kg ou une distance de 100 m."
          },
          {
            type: "definition",
            titre: "Quelques unités du Système international",
            texte: "Les unités suivantes seront souvent utilisées :\n\n• longueur : mètre, noté m ;\n• durée : seconde, notée s ;\n• masse : kilogramme, noté kg ;\n• vitesse : mètre par seconde, noté m/s ;\n• accélération : mètre par seconde carrée, noté m/s² ;\n• force : newton, noté N ;\n• énergie : joule, noté J."
          },
          {
            type: "tableau",
            titre: "Conversions fréquentes",
            entetes: ["Unité", "Équivalence"],
            lignes: [
              ["1 km", "1 000 m"],
              ["1 cm", "0,01 m"],
              ["1 h", "3 600 s"],
              ["1 min", "60 s"],
              ["1 km/h", "1/3,6 m/s"],
              ["1 m/s", "3,6 km/h"]
            ]
          },
          {
            type: "methode",
            titre: "Convertir une vitesse",
            texte: "Pour convertir des km/h en m/s, on divise par 3,6.\nPour convertir des m/s en km/h, on multiplie par 3,6.\n\nCes conversions viennent de 1 km = 1 000 m et 1 h = 3 600 s."
          },
          {
            type: "exemple",
            titre: "Conversion",
            texte: "Une voiture roule à 72 km/h. En m/s :\n\n72 ÷ 3,6 = 20 m/s.\n\nElle parcourt donc 20 mètres en une seconde si sa vitesse reste constante."
          }
        ]
      },

      {
        id: "tle-sp-ch1-l2",
        titre: "Leçon 2 : Vecteurs et forces",
        blocs: [
          {
            type: "definition",
            titre: "Grandeur scalaire ou vectorielle",
            texte: "Une grandeur scalaire est décrite par une valeur et une unité, comme une masse ou une durée.\n\nUne grandeur vectorielle possède une direction, un sens et une norme. La vitesse vectorielle, l’accélération et la force sont des grandeurs vectorielles."
          },
          {
            type: "texte",
            titre: "Représenter une force",
            texte: "Une force exercée sur un objet est représentée par un vecteur. On précise :\n\n• son point d’application ;\n• sa direction ;\n• son sens ;\n• sa norme, exprimée en newtons.\n\nLa longueur de la flèche peut être choisie proportionnelle à la norme selon une échelle indiquée."
          },
          {
            type: "schema",
            titre: "Deux forces sur un objet",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 190'><defs><marker id='fleche-sp1' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#2563eb'/></marker></defs><rect x='145' y='65' width='90' height='60' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><line x1='190' y1='95' x2='190' y2='165' stroke='#2563eb' stroke-width='3' marker-end='url(#fleche-sp1)'/><line x1='190' y1='95' x2='190' y2='25' stroke='#2563eb' stroke-width='3' marker-end='url(#fleche-sp1)'/><text x='200' y='160' font-size='14'>Poids P</text><text x='200' y='30' font-size='14'>Réaction R</text><text x='150' y='105' font-size='14'>Objet</text></svg>",
            legende: "Exemple simplifié : les forces sont représentées dans des sens opposés. Le dessin seul ne permet pas de conclure qu’elles ont la même norme."
          },
          {
            type: "definition",
            titre: "Somme de vecteurs",
            texte: "La résultante de plusieurs forces est leur somme vectorielle. Si deux forces ont la même direction et le même sens, leurs normes s’additionnent.\n\nSi elles ont la même direction et des sens opposés, la résultante a pour norme la différence de leurs normes et le sens de la force la plus grande. Si les normes sont égales, leur somme est le vecteur nul."
          },
          {
            type: "exemple",
            titre: "Forces opposées",
            texte: "Deux forces horizontales agissent sur un objet : 10 N vers la droite et 6 N vers la gauche.\n\nLeur résultante est une force de norme 10 − 6 = 4 N, dirigée vers la droite."
          }
        ]
      },

      {
        id: "tle-sp-ch1-l3",
        titre: "Leçon 3 : Référentiel, position et trajectoire",
        blocs: [
          {
            type: "definition",
            titre: "Référentiel",
            texte: "Pour décrire un mouvement, on choisit un référentiel : un objet ou solide de référence, auquel on associe un repère d’espace et une mesure du temps.\n\nUn même objet peut être immobile dans un référentiel et en mouvement dans un autre."
          },
          {
            type: "exemple",
            titre: "Un passager dans un bus",
            texte: "Un passager assis est immobile par rapport au bus. Si le bus roule, ce passager est en mouvement par rapport à la route.\n\nLa description du mouvement dépend donc du référentiel choisi."
          },
          {
            type: "definition",
            titre: "Position et trajectoire",
            texte: "Dans un repère, la position d’un point M est donnée par ses coordonnées. Dans un plan, on peut écrire M(x ; y). Dans l’espace, on peut écrire M(x ; y ; z).\n\nLa trajectoire est l’ensemble des positions successives occupées par le point au cours du mouvement."
          },
          {
            type: "tableau",
            titre: "Formes de trajectoires",
            entetes: ["Trajectoire", "Description"],
            lignes: [
              ["Rectiligne", "Les positions sont sur une droite."],
              ["Circulaire", "Les positions sont sur un cercle."],
              ["Curviligne", "Les positions suivent une courbe."]
            ]
          },
          {
            type: "schema",
            titre: "Positions successives",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 150'><line x1='25' y1='95' x2='365' y2='95' stroke='#94a3b8' stroke-width='2'/><circle cx='70' cy='95' r='5' fill='#2563eb'/><circle cx='140' cy='95' r='5' fill='#2563eb'/><circle cx='210' cy='95' r='5' fill='#2563eb'/><circle cx='280' cy='95' r='5' fill='#2563eb'/><text x='57' y='125' font-size='13'>M0</text><text x='127' y='125' font-size='13'>M1</text><text x='197' y='125' font-size='13'>M2</text><text x='267' y='125' font-size='13'>M3</text><text x='55' y='55' font-size='14'>Positions à intervalles de temps égaux</text></svg>",
            legende: "Dans cet exemple, les positions sont alignées et régulièrement espacées : elles sont compatibles avec un mouvement rectiligne uniforme."
          }
        ]
      },

      {
        id: "tle-sp-ch1-l4",
        titre: "Leçon 4 : Vitesse et accélération",
        blocs: [
          {
            type: "definition",
            titre: "Vitesse moyenne",
            texte: "La vitesse moyenne sur un trajet est la distance parcourue divisée par la durée :\n\nv moyenne = distance parcourue / durée.\n\nDans le Système international, elle s’exprime en m/s. La distance parcourue n’est pas nécessairement égale à la distance entre le point de départ et le point d’arrivée."
          },
          {
            type: "exemple",
            titre: "Calculer une vitesse moyenne",
            texte: "Un coureur parcourt 400 m en 80 s.\n\nSa vitesse moyenne est v = 400/80 = 5 m/s, soit 5 × 3,6 = 18 km/h."
          },
          {
            type: "definition",
            titre: "Vitesse instantanée",
            texte: "La vitesse vectorielle instantanée indique la direction et le sens du mouvement à un instant donné. Lorsque la vitesse n’est pas nulle, elle est tangente à la trajectoire.\n\nSur un axe orienté, si la position est x(t), la composante de la vitesse est vₓ(t) = dx/dt. Sa valeur absolue |vₓ| est la vitesse au sens de la norme."
          },
          {
            type: "definition",
            titre: "Accélération",
            texte: "L’accélération vectorielle décrit la variation de la vitesse vectorielle au cours du temps. Sur un axe orienté :\n\naₓ(t) = dvₓ/dt = d²x/dt².\n\nElle s’exprime en m/s². Une accélération peut correspondre à un changement de valeur de la vitesse, de direction, ou des deux."
          },
          {
            type: "exemple",
            titre: "Mouvement rectiligne uniformément accéléré",
            texte: "Sur un axe orienté, si x(t) = 2t² + 3t, avec x en mètres et t en secondes :\n\nvₓ(t) = x'(t) = 4t + 3 m/s ;\naₓ(t) = vₓ'(t) = 4 m/s².\n\nL’accélération est constante. À t = 2 s, la vitesse vaut 11 m/s."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre signe et ralentissement",
            texte: "Sur un axe orienté, une accélération négative ne signifie pas toujours que l’objet ralentit. Par exemple, si la vitesse et l’accélération sont toutes deux négatives, la norme de la vitesse augmente."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir 36 km/h en m/s.",
        correction: "On divise par 3,6 : 36 ÷ 3,6 = 10 m/s."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir 15 m/s en km/h.",
        correction: "On multiplie par 3,6 : 15 × 3,6 = 54 km/h."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir 2,5 km en mètres et 3 minutes en secondes.",
        correction: "2,5 km = 2,5 × 1 000 = 2 500 m. Trois minutes valent 3 × 60 = 180 s."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un cycliste parcourt 600 m en 120 s. Calculer sa vitesse moyenne en m/s.",
        correction: "v moyenne = distance/durée = 600/120 = 5 m/s."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un passager est assis dans un train en mouvement. Est-il immobile par rapport au train ? Est-il immobile par rapport au sol ?",
        correction: "Le passager est immobile par rapport au train. Il est en mouvement par rapport au sol puisque le train se déplace."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux forces horizontales de 8 N et 5 N agissent sur un objet dans le même sens. Donner la norme de leur résultante.",
        correction: "Les forces ont la même direction et le même sens. La norme de leur somme est 8 + 5 = 13 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux forces horizontales agissent sur un objet : 12 N vers la gauche et 7 N vers la droite. Déterminer leur résultante.",
        correction: "Les forces sont opposées. La résultante a pour norme 12 − 7 = 5 N et pour sens celui de la force la plus grande : vers la gauche."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur un axe orienté, la position est x(t) = 5t + 2, en mètres, avec t en secondes. Calculer la vitesse et l’accélération.",
        correction: "vₓ(t) = x'(t) = 5 m/s. L’accélération est aₓ(t) = vₓ'(t) = 0 m/s². Le mouvement est rectiligne uniforme."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un mobile parcourt 150 m en 10 s, puis 50 m en 10 s. Calculer sa vitesse moyenne sur l’ensemble du trajet.",
        correction: "La distance totale est 150 + 50 = 200 m et la durée totale est 10 + 10 = 20 s. La vitesse moyenne est 200/20 = 10 m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur un axe orienté, x(t) = t² + 2t, avec x en mètres et t en secondes. Calculer vₓ(t) et aₓ(t).",
        correction: "vₓ(t) = x'(t) = 2t + 2 m/s. Puis aₓ(t) = vₓ'(t) = 2 m/s²."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un mobile se déplace vers les abscisses négatives avec vₓ = −4 m/s et aₓ = −2 m/s². Sa vitesse en valeur absolue augmente-t-elle ou diminue-t-elle à cet instant ?",
        correction: "La vitesse et l’accélération ont le même signe : l’accélération rend la vitesse encore plus négative. Sa valeur absolue augmente ; le mobile accélère."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un mobile suit x(t) = 3t² − 6t + 1, avec x en mètres et t en secondes. Déterminer vₓ(t), aₓ(t) et l’instant où sa vitesse est nulle.",
        correction: "vₓ(t) = x'(t) = 6t − 6 m/s et aₓ(t) = 6 m/s². La vitesse est nulle lorsque 6t − 6 = 0, soit à t = 1 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un véhicule parcourt 60 km à 60 km/h, puis 60 km à 30 km/h. Calculer sa vitesse moyenne sur le trajet total.",
        correction: "Le premier trajet dure 60/60 = 1 h. Le second dure 60/30 = 2 h. La distance totale est 120 km et la durée totale est 3 h. La vitesse moyenne est donc 120/3 = 40 km/h. Elle n’est pas égale à la moyenne arithmétique des deux vitesses."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Sur un axe orienté, un mobile a pour position x(t) = 2t² + 4t, en mètres, pour t ≥ 0 en secondes. 1. Calculer sa vitesse et son accélération. 2. Déterminer sa position et sa vitesse à t = 3 s. 3. Calculer la distance parcourue entre t = 0 et t = 3 s.",
        correction: "1. vₓ(t) = 4t + 4 m/s et aₓ(t) = 4 m/s².\n2. x(3) = 2 × 9 + 4 × 3 = 30 m et vₓ(3) = 4 × 3 + 4 = 16 m/s.\n3. Pour t ≥ 0, vₓ(t) = 4t + 4 > 0 : le mobile avance toujours dans le sens positif. La distance parcourue entre 0 et 3 s est donc x(3) − x(0) = 30 − 0 = 30 m."
      }
    ]
  }
]);
