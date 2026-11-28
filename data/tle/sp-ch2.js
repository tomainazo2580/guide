enregistrerChapitres("tle", "sp", [
  {
    id: "tle-sp-ch2",
    titre: "Chapitre 2 : Cinématique du point",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-sp-ch2-l1",
        titre: "Leçon 1 : Position, vitesse et accélération",
        blocs: [
          {
            type: "introduction",
            titre: "Décrire un mouvement",
            texte: "La cinématique décrit le mouvement d’un objet sans chercher d’abord les causes de ce mouvement. On assimile ici l’objet à un point matériel M et on étudie sa position au cours du temps dans un référentiel choisi.\n\nPour repérer le point, on choisit une origine O, des axes et une origine des dates."
          },
          {
            type: "definition",
            titre: "Vecteur position",
            texte: "Dans un repère du plan (O ; i, j), la position de M à l’instant t est décrite par :\n\nOM(t) = x(t)i + y(t)j.\n\nLes fonctions x(t) et y(t) sont les équations horaires du mouvement. Dans l’espace, on ajoute la coordonnée z(t)."
          },
          {
            type: "definition",
            titre: "Vitesse et accélération vectorielles",
            texte: "La vitesse vectorielle est la dérivée du vecteur position par rapport au temps :\n\nv(t) = x'(t)i + y'(t)j.\n\nL’accélération est la dérivée de la vitesse :\n\na(t) = x''(t)i + y''(t)j.\n\nDans un repère orthonormé, la norme de la vitesse vaut v = √(vₓ² + vᵧ²). Elle est exprimée en m/s."
          },
          {
            type: "schema",
            titre: "Vitesse tangente à la trajectoire",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 210'><defs><marker id='sp2-vitesse' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#dc2626'/></marker></defs><path d='M35 170 C100 165 145 140 190 110 C235 80 285 50 355 45' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='190' cy='110' r='5' fill='#1e40af'/><line x1='190' y1='110' x2='272' y2='55' stroke='#dc2626' stroke-width='3' marker-end='url(#sp2-vitesse)'/><text x='177' y='132' font-size='14'>M</text><text x='275' y='53' font-size='14'>v</text><text x='45' y='195' font-size='13'>Trajectoire</text></svg>",
            legende: "Lorsque la vitesse est non nulle, le vecteur vitesse est tangent à la trajectoire et orienté dans le sens du mouvement."
          },
          {
            type: "exemple",
            titre: "Calcul en deux dimensions",
            texte: "Soit x(t) = 2t et y(t) = t², avec les distances en mètres et t en secondes.\n\nvₓ = 2 et vᵧ = 2t, donc v = 2i + 2tj.\n\naₓ = 0 et aᵧ = 2, donc a = 2j.\n\nÀ t = 1 s, la norme de la vitesse vaut √(2² + 2²) = 2√2 m/s."
          }
        ]
      },

      {
        id: "tle-sp-ch2-l2",
        titre: "Leçon 2 : Mouvement rectiligne",
        blocs: [
          {
            type: "definition",
            titre: "Mouvement rectiligne uniforme",
            texte: "Un mouvement rectiligne uniforme possède une trajectoire droite et une vitesse vectorielle constante.\n\nSur un axe orienté :\n\nx(t) = x₀ + vt,\n\nsi l’origine des dates est choisie à t = 0. Ici x₀ est la position initiale et v la composante constante de la vitesse. L’accélération est nulle."
          },
          {
            type: "definition",
            titre: "Mouvement rectiligne à accélération constante",
            texte: "Si l’accélération aₓ = a est constante sur un axe, alors :\n\nvₓ(t) = v₀ + at ;\nx(t) = x₀ + v₀t + ½at².\n\nLes valeurs x₀ et v₀ correspondent à l’instant t = 0. Les signes dépendent du sens choisi pour l’axe."
          },
          {
            type: "exemple",
            titre: "Départ et accélération",
            texte: "Un mobile part de x₀ = 2 m avec v₀ = 3 m/s et une accélération constante a = 2 m/s².\n\nvₓ(t) = 3 + 2t et x(t) = 2 + 3t + t².\n\nÀ t = 4 s, vₓ = 11 m/s et x = 2 + 12 + 16 = 30 m."
          },
          {
            type: "texte",
            titre: "Une relation sans le temps",
            texte: "Pour un mouvement rectiligne à accélération constante :\n\nvₓ² − v₀² = 2a(x − x₀).\n\nCette relation peut être utile lorsque la durée n’est pas demandée. Les vitesses qui y figurent sont les composantes sur l’axe choisi ; leurs carrés ne donnent pas leur signe."
          },
          {
            type: "methode",
            titre: "Choisir les signes",
            texte: "1. Choisir et dessiner un axe orienté.\n2. Donner un signe à chaque composante selon son sens sur cet axe.\n3. Écrire les conditions initiales x₀ et v₀.\n4. Utiliser les formules adaptées et vérifier les unités.\n\nUne accélération négative peut correspondre à un ralentissement ou à une augmentation de la vitesse en norme selon le signe de vₓ."
          }
        ]
      },

      {
        id: "tle-sp-ch2-l3",
        titre: "Leçon 3 : Lire les graphiques du mouvement",
        blocs: [
          {
            type: "texte",
            titre: "Graphique position-temps",
            texte: "Sur un graphique représentant x en fonction de t, la pente de la tangente à la courbe à un instant donné représente vₓ à cet instant.\n\nUne droite de pente constante correspond à une vitesse constante. Une courbe horizontale correspond à une position constante."
          },
          {
            type: "texte",
            titre: "Graphique vitesse-temps",
            texte: "Sur un graphique représentant vₓ en fonction de t, la pente de la tangente représente l’accélération aₓ.\n\nEntre deux dates, l’aire algébrique comprise entre la courbe de vₓ et l’axe des temps donne le déplacement x(t₂) − x(t₁). Une partie sous l’axe des temps compte négativement."
          },
          {
            type: "schema",
            titre: "Vitesse constante",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 220'><defs><marker id='sp2-axes' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#334155'/></marker></defs><line x1='55' y1='175' x2='360' y2='175' stroke='#334155' stroke-width='2' marker-end='url(#sp2-axes)'/><line x1='55' y1='175' x2='55' y2='20' stroke='#334155' stroke-width='2' marker-end='url(#sp2-axes)'/><path d='M55 110 L300 110 L300 175 L55 175 Z' fill='#dbeafe'/><line x1='55' y1='110' x2='330' y2='110' stroke='#2563eb' stroke-width='3'/><line x1='300' y1='110' x2='300' y2='175' stroke='#64748b' stroke-dasharray='4 4'/><text x='365' y='180' font-size='14'>t</text><text x='25' y='24' font-size='14'>vₓ</text><text x='25' y='114' font-size='13'>v</text><text x='292' y='195' font-size='13'>T</text><text x='100' y='150' font-size='13'>Aire = v × T</text></svg>",
            legende: "Si vₓ est constante et positive, le déplacement entre 0 et T est l’aire du rectangle : vₓ × T."
          },
          {
            type: "exemple",
            titre: "Calculer un déplacement",
            texte: "La vitesse sur un axe passe de 2 m/s à 6 m/s de façon linéaire pendant 4 s.\n\nLe déplacement est l’aire du trapèze sous le graphique :\nΔx = (2 + 6)/2 × 4 = 16 m.\n\nL’accélération, égale à la pente, vaut (6 − 2)/4 = 1 m/s²."
          },
          {
            type: "remarque",
            titre: "Déplacement ou distance parcourue ?",
            texte: "Si le mobile change de sens, le déplacement peut être inférieur à la distance parcourue. Pour obtenir cette distance à partir du graphique de vₓ, on additionne les aires en valeur positive, de part et d’autre de l’axe des temps."
          }
        ]
      },

      {
        id: "tle-sp-ch2-l4",
        titre: "Leçon 4 : Mouvement circulaire uniforme",
        blocs: [
          {
            type: "definition",
            titre: "Période, fréquence et vitesse angulaire",
            texte: "Dans un mouvement circulaire uniforme, le point décrit un cercle à vitesse de norme constante.\n\nLa période T est la durée d’un tour, en secondes. La fréquence f est le nombre de tours par seconde, en hertz : f = 1/T.\n\nLa vitesse angulaire en valeur positive est ω = 2π/T = 2πf, en rad/s."
          },
          {
            type: "definition",
            titre: "Vitesse et accélération",
            texte: "Pour un cercle de rayon R :\n\nv = Rω = 2πR/T.\n\nLe vecteur vitesse change de direction tout au long du mouvement, même si sa norme est constante. L’accélération est dirigée vers le centre : elle est dite centripète. Sa norme vaut :\n\na = v²/R = Rω²."
          },
          {
            type: "schema",
            titre: "Vitesse tangente et accélération centripète",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 240'><defs><marker id='sp2-v' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#dc2626'/></marker><marker id='sp2-a' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#16a34a'/></marker></defs><circle cx='160' cy='125' r='70' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='160' cy='125' r='4' fill='#334155'/><circle cx='230' cy='125' r='5' fill='#2563eb'/><line x1='230' y1='125' x2='230' y2='45' stroke='#dc2626' stroke-width='3' marker-end='url(#sp2-v)'/><line x1='230' y1='125' x2='165' y2='125' stroke='#16a34a' stroke-width='3' marker-end='url(#sp2-a)'/><text x='145' y='145' font-size='14'>O</text><text x='238' y='140' font-size='14'>M</text><text x='238' y='52' font-size='14'>v</text><text x='190' y='115' font-size='14'>a</text><text x='55' y='220' font-size='13'>Sens de parcours choisi : antihoraire</text></svg>",
            legende: "Au point M, la vitesse est tangente au cercle et l’accélération est dirigée vers le centre O."
          },
          {
            type: "exemple",
            titre: "Calculer les grandeurs",
            texte: "Un point décrit un cercle de rayon 2 m en 4 s par tour.\n\nω = 2π/4 = π/2 rad/s.\nv = Rω = 2 × π/2 = π m/s.\na = Rω² = 2 × (π/2)² = π²/2 m/s²."
          },
          {
            type: "remarque",
            titre: "Pourquoi l’accélération n’est-elle pas nulle ?",
            texte: "La norme de la vitesse reste constante, mais sa direction change. La vitesse vectorielle varie donc, ce qui explique l’existence d’une accélération."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un mobile vérifie x(t) = 3t + 2, avec x en mètres et t en secondes. Donner sa position initiale et sa vitesse.",
        correction: "En comparant à x(t) = x₀ + vt, on trouve x₀ = 2 m et vₓ = 3 m/s."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un mobile a une vitesse constante vₓ = 5 m/s pendant 4 s. Calculer son déplacement sur l’axe.",
        correction: "Δx = vₓ × Δt = 5 × 4 = 20 m."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La période d’un mouvement circulaire uniforme est T = 2 s. Calculer sa fréquence.",
        correction: "f = 1/T = 1/2 = 0,5 Hz."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Sur une trajectoire circulaire, quelle est la direction du vecteur vitesse lorsque la vitesse est non nulle ?",
        correction: "Le vecteur vitesse est tangent au cercle au point considéré et orienté dans le sens du mouvement."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un mobile a pour vitesse vₓ(t) = 4 + 3t en m/s. Donner son accélération.",
        correction: "aₓ(t) = dvₓ/dt = 3 m/s². L’accélération est constante."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un mobile part de x₀ = 0 avec v₀ = 2 m/s et a = 4 m/s². Donner x(t) et vₓ(t).",
        correction: "Pour une accélération constante : vₓ(t) = v₀ + at = 2 + 4t. Puis x(t) = x₀ + v₀t + ½at² = 2t + 2t²."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur un axe, un véhicule passe de 10 m/s à 16 m/s en 3 s avec une accélération constante. Calculer cette accélération.",
        correction: "a = (v − v₀)/Δt = (16 − 10)/3 = 2 m/s²."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "La vitesse d’un mobile augmente linéairement de 0 à 8 m/s en 4 s, sans changement de sens. Calculer le déplacement.",
        correction: "L’aire sous le graphique vitesse-temps est un triangle de base 4 s et de hauteur 8 m/s. Le déplacement vaut ½ × 4 × 8 = 16 m."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un point décrit un cercle de rayon 1 m en 2 s par tour. Calculer ω et v.",
        correction: "ω = 2π/T = π rad/s. Puis v = Rω = 1 × π = π m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un point suit x(t) = 3t et y(t) = 4t, en mètres. Calculer les composantes et la norme de sa vitesse.",
        correction: "vₓ = x'(t) = 3 m/s et vᵧ = y'(t) = 4 m/s. La norme de la vitesse est √(3² + 4²) = 5 m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un mobile a vₓ = −2 m/s pendant 5 s. Calculer son déplacement et la distance parcourue pendant cette durée.",
        correction: "Le déplacement vaut Δx = −2 × 5 = −10 m. La vitesse ne change pas de signe ; la distance parcourue est donc |−10| = 10 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un mobile possède une accélération constante a = −2 m/s² et une vitesse initiale v₀ = 12 m/s. À quel instant sa vitesse s’annule-t-elle ? Quel déplacement a-t-il effectué jusque-là ?",
        correction: "vₓ(t) = 12 − 2t. Elle s’annule pour t = 6 s.\nLe déplacement est Δx = v₀t + ½at² = 12 × 6 + ½ × (−2) × 6² = 72 − 36 = 36 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un point décrit un cercle de rayon 0,5 m avec une vitesse de norme 4 m/s. Calculer son accélération centripète et sa période.",
        correction: "a = v²/R = 4²/0,5 = 32 m/s², dirigée vers le centre. La période est T = 2πR/v = 2π × 0,5/4 = π/4 s, soit environ 0,785 s."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Dans un repère orthonormé, un point suit x(t) = 2t et y(t) = t², en mètres, pour t ≥ 0 en secondes. 1. Déterminer les composantes de la vitesse et de l’accélération. 2. Calculer la norme de la vitesse à t = 2 s. 3. Éliminer t pour obtenir l’équation de la trajectoire.",
        correction: "1. vₓ = 2 et vᵧ = 2t, en m/s. Les composantes de l’accélération sont aₓ = 0 et aᵧ = 2 m/s².\n2. À t = 2 s, vₓ = 2 et vᵧ = 4. La norme vaut √(2² + 4²) = √20 = 2√5 m/s.\n3. Puisque x = 2t, on a t = x/2. Donc y = (x/2)² = x²/4. Comme t ≥ 0, la trajectoire étudiée correspond à la partie où x ≥ 0."
      }
    ]
  }
]);
