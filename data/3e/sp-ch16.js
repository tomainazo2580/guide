enregistrerChapitres("3e", "sp", [
  {
    id: 16,
    titre: "Chapitre 16 : Mouvement et vitesse",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Décrire un mouvement",
        blocs: [
          {
            type: "introduction",
            titre: "Un objet est-il en mouvement ?",
            texte: "Une personne assise dans un taxi-brousse peut sembler immobile pour son voisin, mais elle se déplace par rapport à la route.\n\nPour décrire correctement un mouvement, il faut donc préciser par rapport à quoi on l’observe."
          },
          {
            type: "definition",
            titre: "Mobile et référentiel",
            texte: "Le mobile est l’objet dont on étudie le mouvement.\n\nLe référentiel est l’objet ou l’ensemble d’objets par rapport auquel on décrit ce mouvement. Pour étudier un déplacement sur une route, on utilise souvent le référentiel terrestre : on se repère par rapport au sol."
          },
          {
            type: "regle",
            titre: "Mouvement et repos",
            texte: "Un objet est en mouvement dans un référentiel si sa position y change au cours du temps. Il est au repos dans ce référentiel si sa position ne change pas."
          },
          {
            type: "exemple",
            titre: "Le passager du taxi-brousse",
            texte: "Un passager reste assis pendant le trajet.\n\n• Par rapport au véhicule, sa position ne change pas : il est au repos.\n• Par rapport à la route, sa position change : il est en mouvement.\n\nLe mouvement et le repos dépendent donc du référentiel choisi."
          }
        ]
      },

      {
        id: 2,
        titre: "La trajectoire",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "La trajectoire est l’ensemble des positions successives occupées par un point du mobile au cours de son mouvement, dans un référentiel donné."
          },
          {
            type: "tableau",
            titre: "Quelques formes de trajectoires",
            entetes: ["Trajectoire", "Forme", "Exemple"],
            lignes: [
              ["Rectiligne", "Une ligne droite", "Un véhicule sur une portion de route droite."],
              ["Circulaire", "Un cercle ou une partie de cercle", "Un point de la pale d’un ventilateur en rotation."],
              ["Curviligne", "Une courbe", "Un véhicule sur une route courbe."]
            ]
          },
          {
            type: "remarque",
            titre: "La trajectoire dépend du référentiel",
            texte: "Un même mouvement peut avoir des trajectoires différentes selon le référentiel choisi. Il faut donc toujours garder à l’esprit le point observé et le référentiel."
          },
          {
            type: "exemple",
            titre: "Point d’une roue",
            texte: "Par rapport à l’axe d’une roue, un point situé sur son bord décrit un cercle lorsque la roue tourne. Par rapport à la route, la trajectoire de ce même point est différente lorsque la roue avance."
          }
        ]
      },

      {
        id: 3,
        titre: "La vitesse moyenne",
        blocs: [
          {
            type: "definition",
            titre: "Distance et durée",
            texte: "La distance parcourue est la longueur totale du trajet effectué. La durée est le temps écoulé entre le début et la fin du trajet.\n\nLa distance parcourue n’est pas nécessairement égale à la distance en ligne droite entre le point de départ et le point d’arrivée."
          },
          {
            type: "definition",
            titre: "Vitesse moyenne",
            texte: "La vitesse moyenne est le quotient de la distance totale parcourue par la durée totale du trajet :\n\nv = d / t.\n\nLa durée totale comprend les éventuels arrêts si l’on étudie tout le trajet."
          },
          {
            type: "tableau",
            titre: "Grandeurs et unités",
            entetes: ["Grandeur", "Symbole", "Unités courantes"],
            lignes: [
              ["Distance parcourue", "d", "mètre (m), kilomètre (km)"],
              ["Durée", "t", "seconde (s), heure (h)"],
              ["Vitesse moyenne", "v", "mètre par seconde (m/s), kilomètre par heure (km/h)"]
            ]
          },
          {
            type: "regle",
            titre: "Trois formules",
            texte: "Pour calculer la vitesse : v = d / t.\n\nPour calculer la distance : d = v × t.\n\nPour calculer la durée : t = d / v.\n\nCes relations s’utilisent avec des unités compatibles. La durée et la vitesse utilisées comme diviseurs doivent être non nulles."
          },
          {
            type: "exemple",
            titre: "Exemple en km/h",
            texte: "Un véhicule parcourt 120 km en 3 h.\n\nv = d / t = 120 / 3 = 40 km/h.\n\nSa vitesse moyenne sur le trajet est 40 km/h. Cela ne signifie pas qu’il a roulé constamment à 40 km/h."
          }
        ]
      },

      {
        id: 4,
        titre: "Convertir les unités",
        blocs: [
          {
            type: "regle",
            titre: "Durées et distances",
            texte: "1 h = 60 min = 3 600 s.\n1 min = 60 s.\n1 km = 1 000 m."
          },
          {
            type: "regle",
            titre: "Entre m/s et km/h",
            texte: "1 m/s = 3,6 km/h.\n\nPour passer de m/s à km/h, on multiplie par 3,6.\nPour passer de km/h à m/s, on divise par 3,6."
          },
          {
            type: "exemple",
            titre: "Conversions de vitesse",
            texte: "5 m/s = 5 × 3,6 = 18 km/h.\n\n72 km/h = 72 / 3,6 = 20 m/s."
          },
          {
            type: "methode",
            titre: "Convertir une durée en heures",
            texte: "Pour convertir des minutes en heures, on divise par 60.\n\nExemple : 30 min = 30 / 60 = 0,5 h.\n\nAinsi, 1 h 30 min = 1 + 0,5 = 1,5 h. Attention : 1 h 30 min ne s’écrit pas 1,30 h."
          },
          {
            type: "exemple",
            titre: "Calcul après conversion",
            texte: "Un cycliste parcourt 15 km en 45 min.\n\n45 min = 45 / 60 = 0,75 h.\n\nv = 15 / 0,75 = 20 km/h."
          }
        ]
      },

      {
        id: 5,
        titre: "Différents types de mouvement",
        blocs: [
          {
            type: "definition",
            titre: "Mouvement uniforme",
            texte: "Un mouvement est uniforme lorsque la valeur de la vitesse reste constante au cours du temps. Pendant des durées égales, le mobile parcourt alors des distances égales."
          },
          {
            type: "definition",
            titre: "Mouvement accéléré ou ralenti",
            texte: "Un mouvement est accéléré lorsque la valeur de la vitesse augmente. Il est ralenti lorsque la valeur de la vitesse diminue."
          },
          {
            type: "regle",
            titre: "Mouvement rectiligne uniforme",
            texte: "Un mouvement rectiligne uniforme possède deux caractéristiques : sa trajectoire est une droite et sa vitesse est constante.\n\nDans ce cas, pendant une durée t, la distance parcourue vérifie d = v × t."
          },
          {
            type: "remarque",
            titre: "Vitesse moyenne et vitesse instantanée",
            texte: "La vitesse moyenne concerne un trajet ou une partie du trajet. La vitesse instantanée est la vitesse à un instant donné.\n\nLe compteur d’un véhicule indique approximativement sa vitesse à l’instant de la lecture, et non nécessairement sa vitesse moyenne depuis le départ."
          },
          {
            type: "exemple",
            titre: "Positions à intervalles réguliers",
            texte: "On relève les positions d’un mobile toutes les secondes. S’il parcourt successivement 2 m, 2 m puis 2 m pendant ces trois intervalles, sa vitesse moyenne est la même sur chacun de ces intervalles.\n\nCes seules mesures ne prouvent pas que sa vitesse est restée constante à chaque instant entre les relevés."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthode et sécurité",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre un problème de vitesse",
            texte: "1. Relever la distance, la durée et la grandeur recherchée.\n2. Convertir les unités pour qu’elles soient compatibles.\n3. Choisir la formule : v = d / t, d = v × t ou t = d / v.\n4. Remplacer les lettres par les valeurs et calculer.\n5. Donner le résultat avec son unité et vérifier qu’il est raisonnable."
          },
          {
            type: "remarque",
            titre: "Pièges fréquents",
            texte: "• Utiliser des minutes comme si elles étaient des heures.\n• Oublier de convertir les kilomètres en mètres pour obtenir une vitesse en m/s.\n• Confondre distance parcourue et distance en ligne droite.\n• Supposer que la vitesse moyenne est la vitesse à chaque instant."
          },
          {
            type: "regle",
            titre: "Sécurité routière",
            texte: "Une vitesse élevée laisse moins de temps pour réagir et augmente généralement la distance nécessaire pour s’arrêter. Il faut respecter les règles de circulation et adapter sa vitesse aux conditions de la route."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une personne est assise dans un bus qui roule. Est-elle au repos par rapport au bus ? Est-elle en mouvement par rapport à la route ?",
        correction: "Sa position ne change pas par rapport au bus : elle est au repos dans le référentiel du bus.\n\nSa position change par rapport à la route : elle est en mouvement dans le référentiel terrestre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donne le nom d’une trajectoire en ligne droite et celui d’une trajectoire en forme de cercle.",
        correction: "Une trajectoire en ligne droite est rectiligne. Une trajectoire en forme de cercle est circulaire."
      },
      {
        niveau: 1,
        points: 3,
        enonce: "Convertis : a) 2 h en minutes ; b) 5 min en secondes ; c) 3 km en mètres.",
        correction: "a) 2 h = 2 × 60 = 120 min.\n\nb) 5 min = 5 × 60 = 300 s.\n\nc) 3 km = 3 × 1 000 = 3 000 m."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un véhicule parcourt 150 km en 3 h. Calcule sa vitesse moyenne.",
        correction: "v = d / t = 150 / 3 = 50 km/h.\n\nSa vitesse moyenne est 50 km/h."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un cycliste roule à une vitesse constante de 18 km/h pendant 2 h. Quelle distance parcourt-il ?",
        correction: "d = v × t = 18 × 2 = 36 km.\n\nLe cycliste parcourt 36 km."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertis : a) 10 m/s en km/h ; b) 54 km/h en m/s.",
        correction: "a) 10 m/s = 10 × 3,6 = 36 km/h.\n\nb) 54 km/h = 54 / 3,6 = 15 m/s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un coureur parcourt 1 200 m en 4 min. Calcule sa vitesse moyenne en m/s puis en km/h.",
        correction: "On convertit la durée : 4 min = 4 × 60 = 240 s.\n\nv = d / t = 1 200 / 240 = 5 m/s.\n\nConversion : 5 × 3,6 = 18 km/h.\n\nSa vitesse moyenne est 5 m/s, soit 18 km/h."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un véhicule parcourt 80 km à la vitesse moyenne de 40 km/h. Calcule la durée du trajet.",
        correction: "t = d / v = 80 / 40 = 2 h.\n\nLa durée du trajet est 2 h."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un véhicule parcourt 60 km en 1 h, s’arrête pendant 30 min, puis parcourt 40 km en 1 h. Calcule sa vitesse moyenne sur l’ensemble du trajet, arrêt compris.",
        correction: "Distance totale : 60 + 40 = 100 km.\n\nDurée totale : 1 h + 0,5 h + 1 h = 2,5 h.\n\nv = d / t = 100 / 2,5 = 40 km/h.\n\nLa vitesse moyenne sur l’ensemble du trajet, arrêt compris, est 40 km/h."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice type BEPC. Un taxi-brousse effectue un trajet de 180 km. Il roule pendant 2 h, s’arrête 30 min, puis roule encore pendant 1 h. Il arrive à destination après avoir parcouru toute la distance.\n\n1. Calcule la durée totale en heures.\n2. Calcule la vitesse moyenne sur l’ensemble du trajet, arrêt compris.\n3. Calcule la vitesse moyenne pendant les périodes où il roule, sans compter l’arrêt.\n4. Peut-on affirmer qu’il a roulé à vitesse constante ?",
        correction: "1. 30 min = 0,5 h. Durée totale : 2 + 0,5 + 1 = 3,5 h.\n\n2. Vitesse moyenne, arrêt compris : v = 180 / 3,5 ≈ 51,4 km/h.\n\n3. Durée de déplacement sans l’arrêt : 2 + 1 = 3 h. Vitesse moyenne pendant les périodes de déplacement : 180 / 3 = 60 km/h.\n\n4. Non. Les données permettent de calculer des vitesses moyennes, mais elles ne donnent pas la vitesse à chaque instant."
      }
    ]
  }
]);
