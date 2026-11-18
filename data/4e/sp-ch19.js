// ===== GUIDE - Sciences physiques 4e (T8) =====
// Révision générale des chapitres 1 à 18.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch19",
    titre: "Chapitre 19 : Révision générale",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch19-lecon1",
        titre: "Réviser la matière",
        blocs: [
          {
            type: "tableau",
            titre: "Atomes, molécules et ions",
            entetes: ["Notion", "À retenir"],
            lignes: [
              ["Atome", "Noyau avec protons et éventuellement neutrons ; électrons autour. Un atome est neutre."],
              ["Numéro atomique Z", "Nombre de protons. Pour un atome neutre, il est aussi égal au nombre d'électrons."],
              ["Nombre de nucléons A", "Nombre de protons + nombre de neutrons. Nombre de neutrons = A − Z."],
              ["Molécule", "Assemblage neutre d'atomes liés. Les indices indiquent le nombre d'atomes."],
              ["Ion", "Entité chargée : un cation est positif, un anion est négatif."]
            ]
          },
          {
            type: "exemple",
            titre: "Lire une formule",
            texte: "Une molécule H₂O contient 2 atomes H et 1 atome O. Dans 3 H₂O, il y a donc 6 atomes H et 3 atomes O."
          },
          {
            type: "tableau",
            titre: "Relations de chimie",
            entetes: ["Grandeurs", "Relations", "Unités utilisées"],
            lignes: [
              ["Quantité et entités", "N = n × Nₐ ; n = N ÷ Nₐ", "n en mol ; Nₐ ≈ 6,02 × 10²³ mol⁻¹"],
              ["Masse et quantité", "m = n × M ; n = m ÷ M", "m en g ; n en mol ; M en g/mol"],
              ["Volume d'un gaz", "V = n × Vₘ ; n = V ÷ Vₘ", "V en L ; Vₘ en L/mol"],
              ["Concentration massique", "Cₘ = m ÷ V", "m dissoute en g ; V de solution en L ; Cₘ en g/L"]
            ]
          },
          {
            type: "remarque",
            titre: "Vérifier les conditions",
            texte: "Le volume molaire d'un gaz dépend de la température et de la pression. Pour une solution, utilise le volume final de solution et la masse de soluté réellement dissous."
          },
          {
            type: "exemple",
            titre: "Reconnaître un ion",
            texte: "En laboratoire, des ions argent Ag⁺ peuvent former avec des ions chlorure Cl⁻ un précipité blanc de chlorure d'argent : Ag⁺ + Cl⁻ → AgCl."
          },
          {
            type: "remarque",
            titre: "Sécurité en chimie",
            texte: "Les tests chimiques et le test du dihydrogène sont réservés à un laboratoire équipé, avec un encadrement adapté. Ne les réalise pas chez toi."
          }
        ]
      },
      {
        id: "sp4-ch19-lecon2",
        titre: "Réviser l'électricité",
        blocs: [
          {
            type: "tableau",
            titre: "Tensions et période",
            entetes: ["Notion", "À retenir"],
            lignes: [
              ["Tension constante", "Sa valeur ne change pas au cours du temps."],
              ["Tension alternative", "Elle prend des valeurs positives et négatives."],
              ["Période T", "Plus petite durée au bout de laquelle un motif se répète."],
              ["Fréquence f", "Nombre de périodes par seconde : f = 1 ÷ T, avec T en secondes."],
              ["Tension sinusoïdale centrée sur zéro", "Umax = √2 × Ueff ; cette relation ne s'applique pas automatiquement aux autres formes."]
            ]
          },
          {
            type: "methode",
            titre: "Lire un oscillogramme",
            texte: "1. Repère le niveau zéro et les réglages.\n2. Pour Umax, compte les divisions verticales entre zéro et le sommet, puis multiplie par la sensibilité en V/div.\n3. Pour T, compte les divisions d'un motif complet et multiplie par la base de temps.\n4. Convertis T en secondes, puis calcule f = 1 ÷ T."
          },
          {
            type: "tableau",
            titre: "Appareils et composants",
            entetes: ["Élément", "Rôle"],
            lignes: [
              ["Alternateur", "Transforme une partie de l'énergie mécanique reçue en énergie électrique."],
              ["Transformateur", "Modifie une tension alternative entre le primaire et le secondaire."],
              ["Diode", "Laisse passer le courant principalement dans un sens."],
              ["Filtrage", "Réduit les variations d'une tension redressée."]
            ]
          },
          {
            type: "remarque",
            titre: "Sécurité électrique",
            texte: "Ne réalise aucun montage sur une prise électrique et n'ouvre pas de chargeur. Les exercices sont à étudier sur papier."
          }
        ]
      },
      {
        id: "sp4-ch19-lecon3",
        titre: "Réviser les forces et l'énergie",
        blocs: [
          {
            type: "tableau",
            titre: "Masse, poids et poussée",
            entetes: ["Grandeur", "Relation ou propriété", "Unités"],
            lignes: [
              ["Poids P", "P = m × g", "P en N ; m en kg ; g en N/kg"],
              ["Poussée d'Archimède Fₐ", "Fₐ = ρ × Vimmergé × g", "ρ en kg/m³ ; Vimmergé en m³ ; Fₐ en N"],
              ["Objet flottant au repos", "Sans autre force verticale significative : Fₐ = P", "Forces en N"]
            ]
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "La masse se mesure notamment en kilogrammes ; le poids est une force exprimée en newtons. Pour la poussée d'Archimède, utilise le volume immergé, pas forcément le volume total."
          },
          {
            type: "texte",
            titre: "Sources d'énergie",
            texte: "Le Soleil, le vent et l'eau en mouvement sont des sources renouvelables. Le pétrole, le charbon et le gaz naturel sont des sources non renouvelables. Une source renouvelable peut tout de même avoir des impacts environnementaux."
          }
        ]
      },
      {
        id: "sp4-ch19-lecon4",
        titre: "Réviser la lumière et le son",
        blocs: [
          {
            type: "tableau",
            titre: "Lumière et son",
            entetes: ["Notion", "À retenir"],
            lignes: [
              ["Vision", "Pour voir un objet, de la lumière provenant de cet objet doit entrer dans l'œil."],
              ["Lumière", "Dans un milieu transparent et homogène, elle se propage en ligne droite."],
              ["Année-lumière", "Distance parcourue par la lumière dans le vide pendant une année."],
              ["Son", "Il est produit par une vibration et a besoin d'un milieu matériel pour se propager."],
              ["Hauteur d'un son", "Un son aigu a une fréquence plus élevée qu'un son grave."]
            ]
          },
          {
            type: "remarque",
            titre: "Distances et vitesses",
            texte: "Pour une vitesse constante : d = v × t. Dans le vide, la lumière se propage à environ 3,0 × 10⁸ m/s. Dans l'air à environ 20 °C, la vitesse du son est proche de 340 m/s."
          },
          {
            type: "remarque",
            titre: "Protéger ses yeux et ses oreilles",
            texte: "Ne regarde jamais directement le Soleil, y compris pendant une éclipse. Évite également les sons très forts et les expositions prolongées au bruit."
          }
        ]
      },
      {
        id: "sp4-ch19-lecon5",
        titre: "Méthode pour les exercices",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre un calcul",
            texte: "1. Lis la question et note les données avec leurs unités.\n2. Identifie la grandeur recherchée.\n3. Choisis la relation adaptée et vérifie ses conditions d'utilisation.\n4. Convertis les unités si nécessaire.\n5. Remplace les lettres par les valeurs et calcule.\n6. Donne une réponse avec son unité et vérifie qu'elle est cohérente."
          },
          {
            type: "methode",
            titre: "Réviser seul",
            texte: "Revois d'abord les définitions et les exemples de chaque thème. Fais ensuite les exercices sans regarder la correction. Compare ta réponse au corrigé et retourne au chapitre concerné si une étape reste difficile."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un atome neutre possède 8 protons. Combien possède-t-il d'électrons ? Quelle est sa charge totale ?",
        correction: "Un atome neutre possède autant d'électrons que de protons : il a donc 8 électrons. Les charges se compensent et sa charge totale est nulle."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une solution d'eau sucrée, identifie le solvant et le soluté.",
        correction: "L'eau est le solvant et le sucre dissous est le soluté."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La lumière et le son peuvent-ils chacun se propager dans le vide ?",
        correction: "La lumière peut se propager dans le vide. Le son ne le peut pas : il a besoin d'un milieu matériel."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un atome neutre a Z = 13 et A = 27. Détermine ses nombres de protons, de neutrons et d'électrons.",
        correction: "Protons : Z = 13.\nNeutrons : A − Z = 27 − 13 = 14.\nL'atome est neutre : il possède 13 électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Combien d'atomes de chaque élément trouve-t-on dans 2 molécules de dioxyde de carbone, notées 2 CO₂ ?",
        correction: "Une molécule CO₂ contient 1 atome de carbone et 2 atomes d'oxygène. Dans 2 molécules, il y a 2 × 1 = 2 atomes de carbone et 2 × 2 = 4 atomes d'oxygène."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une tension périodique a une période T = 0,02 s. Calcule sa fréquence.",
        correction: "f = 1 ÷ T = 1 ÷ 0,02 = 50 Hz."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 4 kg est placé dans un lieu où g = 10 N/kg. Calcule son poids.",
        correction: "P = m × g = 4 × 10 = 40 N."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On dispose de 36 g d'eau H₂O. Données : M(H) = 1 g/mol et M(O) = 16 g/mol.\n1. Calcule M(H₂O).\n2. Calcule la quantité de matière d'eau.",
        correction: "1. M(H₂O) = 2 × 1 + 16 = 18 g/mol.\n2. n = m ÷ M = 36 ÷ 18 = 2 mol de molécules d'eau."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un gaz occupe 12 L dans des conditions où Vₘ = 24 L/mol. Calcule sa quantité de matière.",
        correction: "n = V ÷ Vₘ = 12 ÷ 24 = 0,5 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution contient 6 g de sucre dissous dans un volume final de 300 mL. Calcule sa concentration massique.",
        correction: "On convertit le volume : 300 mL = 0,300 L.\nCₘ = m ÷ V = 6 ÷ 0,300 = 20 g/L."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Le sommet positif d'un oscillogramme est à 3 divisions au-dessus du zéro. La sensibilité verticale vaut 2 V/div. Un motif complet occupe 4 divisions horizontales, avec une base de temps de 5 ms/div. Calcule Umax, T et f.",
        correction: "Umax = 3 × 2 = 6 V.\nT = 4 × 5 = 20 ms = 0,020 s.\nf = 1 ÷ T = 1 ÷ 0,020 = 50 Hz."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet flotte immobile sur l'eau. Son poids est 12 N et aucune autre force verticale significative n'agit sur lui. Quelle est la poussée d'Archimède ?",
        correction: "L'objet est au repos : les forces verticales se compensent. La poussée d'Archimède est donc égale au poids, soit 12 N."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un échantillon de méthane CH₄ a une masse de 8 g. Données : M(C) = 12 g/mol ; M(H) = 1 g/mol ; Nₐ ≈ 6,02 × 10²³ mol⁻¹.\n1. Calcule sa masse molaire.\n2. Calcule sa quantité de matière.\n3. Estime le nombre de molécules.",
        correction: "1. M(CH₄) = 12 + 4 × 1 = 16 g/mol.\n2. n = m ÷ M = 8 ÷ 16 = 0,5 mol.\n3. N = n × Nₐ = 0,5 × 6,02 × 10²³ = 3,01 × 10²³ molécules environ."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un transformateur idéal, alimenté en tension sinusoïdale, possède 200 spires au primaire et 50 spires au secondaire. La tension efficace primaire est 12 V.\n1. Calcule la tension efficace secondaire.\n2. Est-il élévateur ou abaisseur ?",
        correction: "1. U₂ = U₁ × N₂ ÷ N₁ = 12 × 50 ÷ 200 = 3 V.\n2. La tension passe de 12 V à 3 V : le transformateur est abaisseur."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet de masse 1,5 kg et de volume 0,002 m³ est entièrement plongé dans l'eau puis lâché. On prend ρ(eau) = 1 000 kg/m³ et g = 10 N/kg.\n1. Calcule son poids.\n2. Calcule la poussée d'Archimède.\n3. Que tend-il à faire juste après le lâcher ?",
        correction: "1. P = m × g = 1,5 × 10 = 15 N.\n2. Fₐ = ρ × Vimmergé × g = 1 000 × 0,002 × 10 = 20 N.\n3. La poussée est supérieure au poids : l'objet tend initialement à remonter."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un village compare une installation solaire et un groupe utilisant un combustible fossile. Donne un avantage possible et une limite possible pour chaque solution.",
        correction: "Pour le solaire : le rayonnement est renouvelable, mais la production dépend de l'ensoleillement et les équipements ont un coût et des impacts.\nPour le combustible fossile : un groupe adapté peut être utilisé à la demande, mais le combustible provient d'une ressource limitée et sa combustion émet notamment du dioxyde de carbone. D'autres réponses justifiées sont possibles."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un son parcourt une distance dans l'air en 2 s. On prend sa vitesse égale à 340 m/s.\n1. Calcule la distance parcourue.\n2. Explique pourquoi on ne peut pas appliquer automatiquement cette vitesse à un son dans l'eau.",
        correction: "1. d = v × t = 340 × 2 = 680 m.\n2. La vitesse du son dépend du milieu et des conditions. Il faut utiliser une vitesse adaptée à l'eau pour calculer le trajet dans l'eau."
      }
    ]
  }
]);
