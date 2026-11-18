// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 14 : Grandeurs produits et quotients, calculs et conversions

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch14",
    titre: "Chapitre 14 : Grandeurs produits et quotients, calculs et conversions",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch14-produits",
        titre: "Comprendre les grandeurs produits",
        blocs: [
          {
            type: "definition",
            titre: "Une grandeur produit",
            texte: "Une grandeur produit s'obtient en multipliant deux grandeurs.\nPar exemple, l'aire d'un rectangle s'obtient en multipliant sa longueur par sa largeur."
          },
          {
            type: "exemple",
            titre: "Aire d'un rectangle",
            texte: "Un rectangle mesure 5 m de long et 3 m de large.\nAire = 5 m × 3 m = 15 m².\nL'unité m² se lit « mètre carré »."
          },
          {
            type: "exemple",
            titre: "Distance parcourue",
            texte: "Si une vitesse reste constante, la distance parcourue est égale à la vitesse multipliée par la durée.\nÀ 60 km/h pendant 2 h : distance = 60 × 2 = 120 km."
          },
          {
            type: "remarque",
            titre: "Les unités",
            texte: "Les unités aident à comprendre le calcul. Dans l'exemple, une vitesse en kilomètres par heure multipliée par une durée en heures donne une distance en kilomètres."
          }
        ]
      },

      {
        id: "m4-ch14-quotients",
        titre: "Comprendre les grandeurs quotients",
        blocs: [
          {
            type: "definition",
            titre: "Une grandeur quotient",
            texte: "Une grandeur quotient s'obtient en divisant une grandeur par une autre grandeur non nulle.\nPar exemple, la vitesse moyenne est le quotient de la distance parcourue par la durée du trajet."
          },
          {
            type: "regle",
            titre: "Vitesse moyenne",
            texte: "Vitesse moyenne = distance parcourue ÷ durée du trajet.\nLa durée doit être non nulle.\nSi la distance est en kilomètres et la durée en heures, la vitesse moyenne s'exprime en km/h."
          },
          {
            type: "exemple",
            titre: "Un trajet",
            texte: "Un véhicule parcourt 150 km en 3 h.\nVitesse moyenne = 150 ÷ 3 = 50 km/h.\nCela ne signifie pas que le véhicule a roulé à 50 km/h à chaque instant."
          },
          {
            type: "exemple",
            titre: "Prix par kilogramme",
            texte: "Un sac de 4 kg de riz coûte 12 000 Ar.\nPrix par kilogramme = 12 000 ÷ 4 = 3 000 Ar/kg."
          }
        ]
      },

      {
        id: "m4-ch14-distance-vitesse-duree",
        titre: "Relier distance, vitesse moyenne et durée",
        blocs: [
          {
            type: "regle",
            titre: "Trois relations",
            texte: "Pour un trajet de durée non nulle :\n• vitesse moyenne = distance ÷ durée ;\n• distance = vitesse moyenne × durée.\nSi la vitesse moyenne est non nulle :\n• durée = distance ÷ vitesse moyenne."
          },
          {
            type: "methode",
            titre: "Choisir la bonne relation",
            texte: "1. Repère la grandeur cherchée.\n2. Vérifie les unités : par exemple, km avec km/h et h.\n3. Choisis la relation correspondante.\n4. Calcule et écris l'unité du résultat."
          },
          {
            type: "exemple",
            titre: "Calculer une distance",
            texte: "Un trajet dure 3 h à une vitesse moyenne de 40 km/h.\nDistance = 40 × 3 = 120 km."
          },
          {
            type: "exemple",
            titre: "Calculer une durée",
            texte: "Pour parcourir 180 km à une vitesse moyenne de 60 km/h :\nDurée = 180 ÷ 60 = 3 h."
          },
          {
            type: "remarque",
            titre: "Durée totale du trajet",
            texte: "Pour calculer une vitesse moyenne sur tout un trajet, on utilise la distance totale et la durée totale correspondante, arrêts compris si ceux-ci font partie du trajet étudié."
          }
        ]
      },

      {
        id: "m4-ch14-conversions",
        titre: "Convertir des vitesses",
        blocs: [
          {
            type: "regle",
            titre: "De km/h en m/s",
            texte: "Comme 1 km = 1 000 m et 1 h = 3 600 s :\n1 km/h = 1 000/3 600 m/s = 1/3,6 m/s.\nPour convertir des km/h en m/s, on divise donc par 3,6."
          },
          {
            type: "regle",
            titre: "De m/s en km/h",
            texte: "Pour convertir des m/s en km/h, on multiplie par 3,6.\nEn effet : 1 m/s = 3,6 km/h."
          },
          {
            type: "exemple",
            titre: "Deux conversions",
            texte: "72 km/h = 72 ÷ 3,6 = 20 m/s.\n5 m/s = 5 × 3,6 = 18 km/h."
          },
          {
            type: "remarque",
            titre: "Convertir les durées",
            texte: "Pour les calculs de vitesse, il peut être utile de convertir les minutes en heures.\n30 min = 30/60 h = 0,5 h.\n15 min = 15/60 h = 0,25 h."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un rectangle mesure 7 m de long et 4 m de large. Calcule son aire.",
        correction: "Aire = longueur × largeur = 7 × 4 = 28 m²."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un cycliste parcourt 30 km en 2 h. Calcule sa vitesse moyenne en km/h.",
        correction: "Vitesse moyenne = distance ÷ durée = 30 ÷ 2 = 15 km/h."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un véhicule roule pendant 4 h à une vitesse moyenne de 50 km/h. Quelle distance parcourt-il ?",
        correction: "Distance = vitesse moyenne × durée = 50 × 4 = 200 km."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertis :\n1. 36 km/h en m/s.\n2. 10 m/s en km/h.",
        correction: "1. De km/h en m/s, on divise par 3,6 : 36 ÷ 3,6 = 10 m/s.\n2. De m/s en km/h, on multiplie par 3,6 : 10 × 3,6 = 36 km/h."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un trajet de 135 km est effectué à une vitesse moyenne de 45 km/h.\n1. Calcule sa durée en heures.\n2. Exprime cette durée en minutes.",
        correction: "1. Durée = distance ÷ vitesse moyenne = 135 ÷ 45 = 3 h.\n2. Une heure vaut 60 minutes, donc 3 h = 3 × 60 = 180 min."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne parcourt 6 km en 30 min.\n1. Convertis la durée en heures.\n2. Calcule sa vitesse moyenne en km/h.",
        correction: "1. 30 min = 30 ÷ 60 = 0,5 h.\n2. Vitesse moyenne = 6 ÷ 0,5 = 12 km/h."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un véhicule parcourt 120 km en 2 h, s'arrête pendant 30 min, puis parcourt 60 km en 1 h. On étudie le trajet entier, arrêt compris.\n1. Quelle est la distance totale ?\n2. Quelle est la durée totale en heures ?\n3. Quelle est la vitesse moyenne sur tout le trajet ?",
        correction: "1. Distance totale : 120 + 60 = 180 km.\n2. 30 min = 0,5 h. Durée totale : 2 + 0,5 + 1 = 3,5 h.\n3. Vitesse moyenne : 180 ÷ 3,5 ≈ 51,4 km/h."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un coureur parcourt 400 m en 80 s.\n1. Calcule sa vitesse moyenne en m/s.\n2. Convertis cette vitesse en km/h.\n3. À cette même vitesse moyenne, quelle distance parcourrait-il en 3 min ?",
        correction: "1. Vitesse moyenne : 400 ÷ 80 = 5 m/s.\n2. 5 × 3,6 = 18 km/h.\n3. 3 min = 180 s. Distance : 5 × 180 = 900 m."
      }
    ]
  }
]);
