enregistrerChapitres("2nde", "sp", [
  {
    id: 10,
    titre: "Chapitre 10 : Le mouvement",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Décrire le mouvement d’un objet",
        blocs: [
          {
            type: "introduction",
            titre: "Un objet est-il immobile ou en mouvement ?",
            texte: "Un élève assis dans un taxi-brousse qui roule est immobile par rapport à son siège, mais il se déplace par rapport à la route. Pour décrire un mouvement, il faut donc préciser par rapport à quoi on l’observe."
          },
          {
            type: "definition",
            titre: "Système étudié",
            texte: "Le système est l’objet ou l’ensemble d’objets que l’on choisit d’étudier. Dans certains exercices, on représente un objet par un point pour simplifier l’étude de son mouvement."
          },
          {
            type: "definition",
            titre: "Référentiel",
            texte: "Un référentiel est un objet de référence, accompagné d’un repère d’espace et d’une mesure du temps, par rapport auquel on décrit les positions et le mouvement d’un système."
          },
          {
            type: "exemple",
            titre: "Référentiel terrestre",
            texte: "Pour étudier le déplacement d’un cycliste sur une route, on utilise souvent le référentiel terrestre, lié au sol. Dans ce référentiel, on repère les positions du cycliste au cours du temps."
          },
          {
            type: "regle",
            titre: "Relativité du mouvement",
            texte: "Le repos et le mouvement dépendent du référentiel choisi. Un même objet peut être immobile dans un référentiel et en mouvement dans un autre."
          },
          {
            type: "remarque",
            titre: "Objet ou point de l’objet ?",
            texte: "Les différents points d’un objet ne suivent pas forcément le même mouvement. Par exemple, les points d’une roue qui tourne n’ont pas tous la même trajectoire par rapport au vélo. Il faut préciser le point étudié lorsque cela est nécessaire."
          }
        ]
      },

      {
        id: 2,
        titre: "Position et trajectoire",
        blocs: [
          {
            type: "definition",
            titre: "Position",
            texte: "La position d’un point indique où il se trouve dans le référentiel choisi à un instant donné. Sur une droite graduée, on peut la repérer par une coordonnée x, appelée abscisse."
          },
          {
            type: "definition",
            titre: "Trajectoire",
            texte: "La trajectoire d’un point est l’ensemble des positions successives occupées par ce point au cours du mouvement, dans un référentiel donné."
          },
          {
            type: "tableau",
            titre: "Quelques formes de trajectoires",
            texte: "Trajectoire rectiligne : les positions sont sur une droite.\n\nTrajectoire circulaire : les positions sont sur un cercle ou un arc de cercle.\n\nTrajectoire curviligne : les positions suivent une courbe. Une trajectoire circulaire est un cas particulier de trajectoire curviligne."
          },
          {
            type: "schema",
            titre: "Exemples de trajectoires",
            texte: "Rectiligne :   A •────•────•────• B\n\nCirculaire :          •\n                    /   \\\n                   •     •\n                    \\   /\n                      •\n\nLa forme dépend du point étudié et du référentiel."
          },
          {
            type: "exemple",
            titre: "Sur une route droite",
            texte: "Dans le référentiel terrestre, le point représentant une voiture qui suit une route parfaitement droite a une trajectoire rectiligne."
          },
          {
            type: "remarque",
            titre: "Distance et déplacement",
            texte: "La distance parcourue est la longueur du trajet effectivement suivi. Le déplacement entre deux positions est le vecteur allant de la position initiale à la position finale. Sa longueur n’est pas toujours égale à la distance parcourue."
          },
          {
            type: "exemple",
            titre: "Aller-retour",
            texte: "Un élève parcourt 100 m en ligne droite puis revient à son point de départ. La distance totale parcourue est 200 m. Son déplacement entre le départ et l’arrivée est nul."
          }
        ]
      },

      {
        id: 3,
        titre: "Vitesse moyenne",
        blocs: [
          {
            type: "definition",
            titre: "Vitesse moyenne",
            texte: "La valeur de la vitesse moyenne sur un trajet est le rapport de la distance parcourue à la durée du trajet."
          },
          {
            type: "regle",
            titre: "Relations",
            texte: "vₘ = d / Δt\n\nd = vₘ × Δt\nΔt = d / vₘ, si vₘ est non nulle.\n\nvₘ : vitesse moyenne ; d : distance parcourue ; Δt : durée du trajet."
          },
          {
            type: "rappel",
            titre: "Unités",
            texte: "Dans le Système international, la distance s’exprime en mètres (m), la durée en secondes (s) et la vitesse en mètres par seconde (m·s⁻¹ ou m/s). On utilise aussi le kilomètre par heure (km/h)."
          },
          {
            type: "regle",
            titre: "Conversion des vitesses",
            texte: "Pour passer de m/s à km/h, on multiplie par 3,6.\nPour passer de km/h à m/s, on divise par 3,6.\n\nAinsi, 1 m/s = 3,6 km/h."
          },
          {
            type: "exemple",
            titre: "Calcul d’une vitesse moyenne",
            texte: "Un cycliste parcourt 1 200 m en 4 min.\n\nDurée : 4 × 60 = 240 s.\nvₘ = 1 200 / 240 = 5,0 m/s.\n\nEn km/h : 5,0 × 3,6 = 18 km/h."
          },
          {
            type: "remarque",
            titre: "Sur un trajet complet",
            texte: "La vitesse moyenne ne signifie pas que la vitesse est restée constante. Elle tient compte de toute la distance et de toute la durée considérées, y compris les arrêts s’ils font partie de l’intervalle étudié."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre avec la vitesse vectorielle moyenne",
            texte: "La distance divisée par la durée donne la valeur de la vitesse moyenne sur le trajet. Le vecteur vitesse moyenne est le déplacement divisé par la durée. Lors d’un aller-retour au point de départ, ce vecteur est nul, mais la vitesse moyenne sur le trajet ne l’est pas."
          }
        ]
      },

      {
        id: 4,
        titre: "Vitesse instantanée et vecteur vitesse",
        blocs: [
          {
            type: "definition",
            titre: "Vitesse instantanée",
            texte: "La vitesse instantanée est la vitesse à un instant donné. Le compteur d’un véhicule en donne une indication. Elle peut être différente de la vitesse moyenne calculée sur l’ensemble du trajet."
          },
          {
            type: "definition",
            titre: "Vecteur vitesse",
            texte: "Le vecteur vitesse d’un point en mouvement indique sa vitesse à un instant donné. Il est tangent à la trajectoire, orienté dans le sens du mouvement, et sa longueur sur un schéma représente la valeur de la vitesse selon une échelle choisie."
          },
          {
            type: "schema",
            titre: "Sur une trajectoire droite",
            texte: "Sens du mouvement : vers la droite\n\nTrajectoire : ─────•────────────\n                   M ─────→ v\n\nLe vecteur vitesse en M est dirigé suivant la trajectoire et orienté vers la droite."
          },
          {
            type: "methode",
            titre: "Estimer une vitesse à partir de positions",
            texte: "Si les positions successives M₀, M₁ et M₂ sont relevées à intervalles de temps égaux Δt, on peut estimer la valeur de la vitesse à l’instant où le point est en M₁ par : v₁ ≈ M₀M₂ / (2 × Δt). La distance M₀M₂ est mesurée en ligne droite. L’estimation est d’autant plus pertinente que les positions sont proches."
          },
          {
            type: "exemple",
            titre: "Estimation",
            texte: "Les positions M₀, M₁ et M₂ sont relevées toutes les 0,20 s. La distance droite M₀M₂ vaut 1,6 m.\n\nv₁ ≈ 1,6 / (2 × 0,20) = 4,0 m/s."
          },
          {
            type: "remarque",
            titre: "Une direction qui change",
            texte: "Même si la valeur de la vitesse reste constante, le vecteur vitesse change lorsque sa direction change. C’est notamment le cas dans un mouvement circulaire uniforme."
          }
        ]
      },

      {
        id: 5,
        titre: "Nature du mouvement",
        blocs: [
          {
            type: "definition",
            titre: "Mouvement uniforme",
            texte: "Un mouvement est uniforme lorsque la valeur de la vitesse reste constante au cours du temps."
          },
          {
            type: "definition",
            titre: "Mouvement accéléré ou ralenti",
            texte: "Un mouvement est accéléré lorsque la valeur de la vitesse augmente. Il est ralenti, ou décéléré, lorsque la valeur de la vitesse diminue."
          },
          {
            type: "regle",
            titre: "Décrire complètement un mouvement",
            texte: "On peut associer la forme de la trajectoire à l’évolution de la vitesse : mouvement rectiligne uniforme, rectiligne accéléré, circulaire uniforme, etc. La description est toujours faite dans un référentiel précisé."
          },
          {
            type: "exemple",
            titre: "Mouvement rectiligne uniforme",
            texte: "Dans le référentiel terrestre, une voiture suit une route droite avec une vitesse de valeur constante : son mouvement est rectiligne uniforme."
          },
          {
            type: "exemple",
            titre: "Mouvement circulaire uniforme",
            texte: "Dans le référentiel terrestre, un point d’une roue fixe qui tourne régulièrement décrit un cercle à vitesse de valeur constante. Son mouvement est circulaire uniforme, mais la direction de son vecteur vitesse change."
          },
          {
            type: "methode",
            titre: "Lire des positions relevées à intervalles égaux",
            texte: "Lorsque les positions sont relevées à intervalles de temps égaux :\n• des écarts successifs égaux indiquent une vitesse de valeur constante dans les cas simples étudiés ;\n• des écarts qui augmentent indiquent une vitesse qui augmente ;\n• des écarts qui diminuent indiquent une vitesse qui diminue.\n\nIl faut aussi regarder la forme de la trajectoire."
          },
          {
            type: "schema",
            titre: "Positions à intervalles de temps égaux",
            texte: "Uniforme :  •──•──•──•──•\n\nAccéléré :  •─•──•───•────•\n\nRalenti :   •────•───•──•─•\n\nCes schémas représentent un mouvement rectiligne vers la droite."
          }
        ]
      },

      {
        id: 6,
        titre: "Repérage sur une droite",
        blocs: [
          {
            type: "introduction",
            titre: "Choisir un axe",
            texte: "Pour étudier un mouvement rectiligne, on peut choisir un axe orienté, une origine O et une unité de longueur. La coordonnée x d’un point peut être positive, négative ou nulle."
          },
          {
            type: "schema",
            titre: "Axe orienté",
            texte: "Sens positif →\n\n────•────────•────────•────→ x\n   −2 m      O       +3 m"
          },
          {
            type: "regle",
            titre: "Déplacement algébrique",
            texte: "Sur un axe, le déplacement algébrique entre deux instants est Δx = x_f − x_i, où x_i est la position initiale et x_f la position finale. Son signe indique le sens du déplacement par rapport à l’orientation choisie."
          },
          {
            type: "exemple",
            titre: "Déplacement positif",
            texte: "Un point passe de x_i = −2 m à x_f = 3 m.\n\nΔx = 3 − (−2) = +5 m.\n\nLe déplacement est orienté dans le sens positif de l’axe."
          },
          {
            type: "exemple",
            titre: "Déplacement négatif",
            texte: "Un point passe de x_i = 4 m à x_f = 1 m.\n\nΔx = 1 − 4 = −3 m.\n\nLe déplacement est orienté dans le sens négatif de l’axe. Si le point ne fait pas demi-tour, la distance parcourue est 3 m."
          },
          {
            type: "regle",
            titre: "Vitesse algébrique moyenne",
            texte: "Sur un axe, la vitesse algébrique moyenne est v̄ₓ = Δx / Δt. Elle peut être positive, négative ou nulle. Sa valeur absolue n’est égale à la distance totale divisée par la durée que si le point ne change pas de sens pendant le trajet."
          }
        ]
      },

      {
        id: 7,
        titre: "Le mouvement rectiligne uniforme",
        blocs: [
          {
            type: "definition",
            titre: "Mouvement rectiligne uniforme",
            texte: "Dans un référentiel donné, un mouvement rectiligne uniforme a une trajectoire droite et un vecteur vitesse constant : sa direction, son sens et sa valeur ne changent pas."
          },
          {
            type: "regle",
            titre: "Position en fonction du temps",
            texte: "Sur un axe orienté, pour un mouvement rectiligne uniforme :\n\nx(t) = x₀ + vₓ × (t − t₀).\n\nx₀ est la position à l’instant t₀ ; vₓ est la vitesse algébrique constante. Si t₀ = 0, on écrit x(t) = x₀ + vₓ × t."
          },
          {
            type: "exemple",
            titre: "Calculer une position",
            texte: "À t = 0 s, un point est à x₀ = 2 m. Il se déplace à vitesse constante vₓ = 3 m/s.\n\nÀ t = 4 s : x = 2 + 3 × 4 = 14 m."
          },
          {
            type: "exemple",
            titre: "Mouvement dans le sens négatif",
            texte: "À t = 0 s, un point est à x₀ = 10 m. Sa vitesse algébrique constante vaut vₓ = −2 m/s.\n\nÀ t = 3 s : x = 10 + (−2) × 3 = 4 m."
          },
          {
            type: "remarque",
            titre: "Graphique position-temps",
            texte: "Sur un graphique donnant x en fonction du temps, un mouvement rectiligne uniforme est représenté par une droite. Sa pente est la vitesse algébrique : pente positive si x augmente, négative si x diminue."
          }
        ]
      },

      {
        id: 8,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Étudier un mouvement",
            texte: "1. Identifier le système ou le point étudié.\n2. Préciser le référentiel.\n3. Observer la forme de la trajectoire.\n4. Étudier l’évolution de la valeur de la vitesse.\n5. Si un calcul est demandé, convertir les unités avant d’utiliser la formule.\n6. Donner le résultat avec son unité et vérifier sa cohérence."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : décrire un mouvement sans préciser le référentiel.\nÀ faire : indiquer par rapport à quoi le mouvement est étudié.\n\nErreur : diviser la distance en mètres par une durée en minutes et annoncer un résultat en m/s.\nÀ faire : convertir la durée en secondes.\n\nErreur : confondre distance parcourue et déplacement.\nÀ faire : tenir compte du trajet et des éventuels demi-tours.\n\nErreur : dire qu’une vitesse de valeur constante implique un vecteur vitesse constant sur un cercle.\nÀ faire : vérifier aussi la direction du vecteur.\n\nErreur : oublier le signe de la vitesse algébrique.\nÀ faire : comparer le sens du mouvement à celui de l’axe."
          },
          {
            type: "schema",
            titre: "À retenir",
            texte: "Référentiel + positions successives → trajectoire\n\nVitesse moyenne sur un trajet : vₘ = d / Δt\n\nSur un axe : Δx = x_f − x_i\nVitesse algébrique moyenne : v̄ₓ = Δx / Δt\n\nMouvement rectiligne uniforme :\nx(t) = x₀ + vₓ × (t − t₀)"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un passager est assis sans bouger dans un taxi-brousse qui roule sur une route. Est-il immobile ou en mouvement par rapport au siège ? Et par rapport à la route ?",
        correction: "Par rapport au siège, le passager est immobile. Par rapport à la route, il est en mouvement. La réponse dépend du référentiel."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans le référentiel terrestre, un point se déplace en suivant une ligne droite. Comment qualifie-t-on sa trajectoire ?",
        correction: "Sa trajectoire est rectiligne."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis 10 m/s en km/h, puis 72 km/h en m/s. On rappelle que 1 m/s = 3,6 km/h.",
        correction: "10 m/s = 10 × 3,6 = 36 km/h.\n\n72 km/h = 72 / 3,6 = 20 m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un cycliste parcourt 900 m en 3 min. Calcule sa vitesse moyenne en m/s puis en km/h. On donne 1 m/s = 3,6 km/h.",
        correction: "La durée vaut 3 × 60 = 180 s.\n\nvₘ = d / Δt = 900 / 180 = 5,0 m/s.\n\nEn km/h : 5,0 × 3,6 = 18 km/h."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un élève marche 80 m en ligne droite, puis revient par le même chemin à son point de départ. Quelle est la distance totale parcourue ? Que vaut son déplacement entre le départ et l’arrivée ?",
        correction: "La distance totale est 80 + 80 = 160 m. L’arrivée et le départ sont au même endroit : le déplacement est nul."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur une droite orientée, un point passe de la position x_i = 5 m à la position x_f = −2 m. Calcule son déplacement algébrique et indique son sens.",
        correction: "Δx = x_f − x_i = −2 − 5 = −7 m. Le déplacement est orienté dans le sens négatif de l’axe."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans le référentiel terrestre, les positions successives d’un point sur une route droite sont relevées toutes les 2 s. Les distances parcourues entre deux relevés successifs sont : 4 m, 4 m, 4 m et 4 m. On suppose que le point avance toujours dans le même sens et que sa vitesse est constante entre les relevés. Qualifie son mouvement et calcule sa vitesse en m/s puis en km/h. On donne 1 m/s = 3,6 km/h.",
        correction: "La trajectoire est droite et la vitesse est constante : le mouvement est rectiligne uniforme.\n\nPour un intervalle : v = 4 / 2 = 2 m/s.\n\nEn km/h : 2 × 3,6 = 7,2 km/h."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une voiture parcourt 12 km en 20 min, puis 18 km en 40 min. Calcule sa vitesse moyenne sur l’ensemble du trajet en km/h, puis en m/s. On donne 1 m/s = 3,6 km/h.",
        correction: "Distance totale : 12 + 18 = 30 km.\n\nDurée totale : 20 + 40 = 60 min = 1 h.\n\nVitesse moyenne : vₘ = 30 / 1 = 30 km/h.\n\nEn m/s : 30 / 3,6 ≈ 8,3 m/s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans le référentiel terrestre, un point effectue un mouvement rectiligne uniforme sur un axe orienté. À t = 0 s, il se trouve à x₀ = 4 m et sa vitesse algébrique est vₓ = −3 m/s. Calcule sa position à t = 5 s et indique dans quel sens il se déplace.",
        correction: "Pour un mouvement rectiligne uniforme : x(t) = x₀ + vₓ × t.\n\nÀ t = 5 s : x = 4 + (−3) × 5 = −11 m.\n\nLa vitesse algébrique est négative : le point se déplace dans le sens négatif de l’axe."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les positions M₀, M₁ et M₂ d’un point en mouvement sont relevées à intervalles de temps égaux de 0,10 s. La distance en ligne droite M₀M₂ vaut 0,80 m. Estime la valeur de la vitesse au point M₁ avec la relation v₁ ≈ M₀M₂ / (2 × Δt).",
        correction: "v₁ ≈ 0,80 / (2 × 0,10) = 0,80 / 0,20 = 4,0 m/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un marcheur part d’un point A, parcourt 600 m en ligne droite jusqu’à B en 8 min, puis revient de B à A en 12 min par le même chemin. 1. Calcule la distance totale et la durée totale. 2. Calcule la vitesse moyenne sur l’ensemble du trajet en m/s et en km/h. 3. Détermine le déplacement total et le vecteur vitesse moyenne sur l’aller-retour. On donne 1 m/s = 3,6 km/h.",
        correction: "1. Distance totale : 600 + 600 = 1 200 m. Durée totale : 8 + 12 = 20 min = 1 200 s.\n\n2. Vitesse moyenne sur le trajet : vₘ = 1 200 / 1 200 = 1,0 m/s, soit 1,0 × 3,6 = 3,6 km/h.\n\n3. L’arrivée est au point de départ : le déplacement total est nul. Le vecteur vitesse moyenne, égal au déplacement divisé par la durée, est donc nul."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux cyclistes A et B se déplacent sur une route droite, dans le même sens, à vitesses constantes. On choisit un axe orienté dans leur sens de déplacement. À t = 0 s, A est à x_A = 0 m et roule à 6 m/s ; B est à x_B = 100 m et roule à 4 m/s. 1. Écris leurs positions en fonction du temps. 2. À quel instant A rejoint-il B ? 3. À quelle position se rencontrent-ils ?",
        correction: "1. Pour un mouvement rectiligne uniforme :\nx_A(t) = 0 + 6t = 6t.\nx_B(t) = 100 + 4t.\nLes positions sont en mètres et t en secondes.\n\n2. À la rencontre, x_A = x_B :\n6t = 100 + 4t.\nDonc 2t = 100 et t = 50 s.\n\n3. x_A(50) = 6 × 50 = 300 m. Vérification : x_B(50) = 100 + 4 × 50 = 300 m. Ils se rencontrent à 300 m de l’origine."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans le référentiel terrestre, un mobile se déplace sur un axe orienté. Entre t = 0 s et t = 5 s, il passe de x = 2 m à x = 17 m à vitesse constante. Entre t = 5 s et t = 9 s, il revient de x = 17 m à x = 9 m à vitesse constante. 1. Calcule la vitesse algébrique sur chaque phase. 2. Calcule la distance totale parcourue. 3. Calcule le déplacement algébrique total et la vitesse algébrique moyenne sur les 9 s. 4. Calcule la vitesse moyenne sur le trajet.",
        correction: "1. Première phase : vₓ₁ = (17 − 2) / 5 = +3 m/s.\nDeuxième phase : vₓ₂ = (9 − 17) / (9 − 5) = −8 / 4 = −2 m/s.\n\n2. Distance totale : 15 + 8 = 23 m.\n\n3. Déplacement algébrique total : Δx = 9 − 2 = +7 m. Vitesse algébrique moyenne : v̄ₓ = 7 / 9 ≈ +0,78 m/s.\n\n4. Vitesse moyenne sur le trajet : vₘ = 23 / 9 ≈ 2,56 m/s. Elle est différente de la valeur absolue de la vitesse algébrique moyenne car le mobile a changé de sens."
      }
    ]
  }
]);
