// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 18 : Révision générale

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch18",
    titre: "Chapitre 18 : Révision générale",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch18-nombres",
        titre: "Nombres relatifs et calculs",
        blocs: [
          {
            type: "regle",
            titre: "Comparer",
            texte: "Sur une droite graduée orientée de gauche à droite, le plus petit nombre est le plus à gauche.\nEntre deux nombres négatifs, celui qui a la plus grande distance à zéro est le plus petit : −7 < −3."
          },
          {
            type: "regle",
            titre: "Addition et soustraction",
            texte: "Pour additionner deux nombres de même signe, on additionne leurs distances à zéro et on garde leur signe.\nPour des signes différents, on soustrait les distances à zéro et, si elles sont différentes, on prend le signe du nombre qui a la plus grande distance à zéro. Deux nombres opposés ont une somme nulle.\nSoustraire un nombre revient à ajouter son opposé."
          },
          {
            type: "regle",
            titre: "Multiplication et division",
            texte: "Pour deux nombres non nuls, un produit ou un quotient est positif si les signes sont identiques, négatif s'ils sont différents.\nUn produit ayant un facteur nul vaut 0. On ne divise jamais par 0."
          },
          {
            type: "regle",
            titre: "Priorités et puissances",
            texte: "On calcule d'abord les parenthèses, puis les puissances, puis les multiplications et divisions, et enfin les additions et soustractions. Pour des opérations de même priorité, on calcule de gauche à droite.\nPour a non nul et des exposants entiers : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ."
          }
        ]
      },

      {
        id: "m4-ch18-proportionnalite",
        titre: "Proportionnalité et pourcentages",
        blocs: [
          {
            type: "regle",
            titre: "Coefficient et graphique",
            texte: "Dans une situation de proportionnalité, on passe de x à y par une relation y = k × x.\nSi x est non nul, k = y ÷ x.\nLes points représentant cette relation sont alignés avec l'origine."
          },
          {
            type: "regle",
            titre: "Pourcentages",
            texte: "Pour calculer t % d'une quantité, on la multiplie par t/100.\nPour trouver quel pourcentage une partie représente d'un total non nul, on calcule partie ÷ total × 100."
          },
          {
            type: "exemple",
            titre: "Une réduction",
            texte: "Une réduction de 10 % sur 20 000 Ar vaut 20 000 × 10/100 = 2 000 Ar.\nLe nouveau prix est 20 000 − 2 000 = 18 000 Ar."
          }
        ]
      },

      {
        id: "m4-ch18-geometrie",
        titre: "Repérage et symétries",
        blocs: [
          {
            type: "regle",
            titre: "Coordonnées",
            texte: "Les coordonnées d'un point s'écrivent (abscisse ; ordonnée). Dans un repère usuel, l'abscisse indique la position horizontale et l'ordonnée la position verticale."
          },
          {
            type: "regle",
            titre: "Symétrie centrale",
            texte: "Si A' est l'image de A par la symétrie de centre O, alors O est le milieu de [AA']. La symétrie centrale conserve notamment les longueurs et les angles."
          },
          {
            type: "regle",
            titre: "Symétrie axiale",
            texte: "Si A n'est pas sur l'axe (d), son image A' est telle que (d) est la médiatrice de [AA']. Un point situé sur l'axe est son propre image. La symétrie conserve notamment les longueurs et les angles."
          }
        ]
      },

      {
        id: "m4-ch18-grandeurs",
        titre: "Grandeurs et mesures",
        blocs: [
          {
            type: "regle",
            titre: "Agrandissement et réduction",
            texte: "Pour un rapport positif k : les longueurs et les périmètres sont multipliés par k, les aires par k² et les volumes par k³. Les angles sont conservés."
          },
          {
            type: "regle",
            titre: "Volumes",
            texte: "Pyramide : V = aire de la base × hauteur ÷ 3.\nCône de révolution : V = π × rayon² × hauteur ÷ 3.\nCorrespondances : 1 dm³ = 1 L et 1 cm³ = 1 mL."
          },
          {
            type: "regle",
            titre: "Vitesse moyenne",
            texte: "Vitesse moyenne = distance parcourue ÷ durée du trajet, pour une durée non nulle.\nPour convertir des km/h en m/s, on divise par 3,6 ; pour convertir des m/s en km/h, on multiplie par 3,6."
          }
        ]
      },

      {
        id: "m4-ch18-statistiques",
        titre: "Statistiques et probabilités",
        blocs: [
          {
            type: "regle",
            titre: "Effectif, fréquence et moyenne",
            texte: "L'effectif total est la somme des effectifs.\nFréquence = effectif ÷ effectif total, si l'effectif total est non nul.\nMoyenne d'une série numérique = somme des valeurs ÷ effectif total."
          },
          {
            type: "regle",
            titre: "Probabilités",
            texte: "Si les issues sont en nombre fini et équiprobables : probabilité d'un événement = nombre d'issues favorables ÷ nombre total d'issues.\nLa probabilité d'un événement et celle de son contraire ont pour somme 1."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "1. Range dans l'ordre croissant : +3 ; −5 ; 0 ; −1.\n2. Calcule : (−4) + (+7).",
        correction: "1. Sur la droite graduée : −5 < −1 < 0 < +3.\n2. Les signes sont différents. On calcule 7 − 4 = 3 et on garde le signe de +7 : (−4) + (+7) = +3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. (−3) × (−4)\n2. (+15) ÷ (−5)\n3. 2³",
        correction: "1. Même signe : (−3) × (−4) = +12.\n2. Signes différents : (+15) ÷ (−5) = −3.\n3. 2³ = 2 × 2 × 2 = 8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule en respectant les priorités :\nA = 5 + 3 × (−2)\nB = [8 − (−4)] ÷ 3",
        correction: "A = 5 + (−6) = −1.\nB = [8 + 4] ÷ 3 = 12 ÷ 3 = 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un article coûte 12 000 Ar. Il bénéficie d'une réduction de 25 %.\n1. Calcule le montant de la réduction.\n2. Quel est son nouveau prix ?",
        correction: "1. Réduction : 12 000 × 25/100 = 3 000 Ar.\n2. Nouveau prix : 12 000 − 3 000 = 9 000 Ar."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère les points A (−2 ; 3) et B (4 ; 3).\n1. Place-les dans un repère.\n2. Quelle est la longueur AB en unités du repère ?\n3. Soit O le milieu de [AB]. Donne les coordonnées de O.",
        correction: "1. A se place 2 unités à gauche et 3 vers le haut ; B, 4 unités à droite et 3 vers le haut.\n2. Les deux points ont la même ordonnée. De −2 à 4, la distance est 6 unités : AB = 6.\n3. Le milieu est à mi-chemin entre les abscisses −2 et 4 : son abscisse est 1. Son ordonnée reste 3. Donc O (1 ; 3)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une pyramide a une base rectangulaire de 6 cm sur 5 cm et une hauteur de 9 cm.\n1. Calcule son volume.\n2. On l'agrandit avec un rapport 2. Quel est le volume de la pyramide obtenue ?",
        correction: "1. Aire de la base : 6 × 5 = 30 cm². Volume : 30 × 9 ÷ 3 = 90 cm³.\n2. Le volume est multiplié par 2³ = 8. Volume obtenu : 90 × 8 = 720 cm³."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un véhicule parcourt 90 km en 1 h 30 min.\n1. Calcule sa vitesse moyenne en km/h.\n2. Convertis cette vitesse en m/s.",
        correction: "1. 1 h 30 min = 1,5 h. Vitesse moyenne : 90 ÷ 1,5 = 60 km/h.\n2. 60 ÷ 3,6 ≈ 16,7 m/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un groupe de 20 élèves, 8 ont choisi la lecture, 6 le sport et 6 la musique.\n1. Calcule la fréquence de chaque choix en pourcentage.\n2. Calcule l'angle du secteur représentant la lecture dans un diagramme circulaire.",
        correction: "1. Lecture : 8 ÷ 20 = 40 %. Sport : 6 ÷ 20 = 30 %. Musique : 6 ÷ 20 = 30 %.\n2. Angle de la lecture : 8 ÷ 20 × 360° = 144°."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un sac contient 4 boules rouges, 3 bleues et 1 verte. Chaque boule a la même chance d'être tirée. On tire une boule.\n1. Quelle est la probabilité de tirer une boule bleue ?\n2. Quelle est la probabilité de ne pas tirer une boule bleue ?",
        correction: "Il y a 4 + 3 + 1 = 8 boules.\n1. Trois boules sont bleues : P(bleue) = 3/8.\n2. P(non bleue) = 1 − 3/8 = 5/8. On retrouve ce résultat en comptant les 4 boules rouges et la boule verte."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Pour 3 kg de riz, on paie 9 000 Ar. Le prix est proportionnel à la masse.\n1. Quel est le prix de 7 kg ?\n2. Quelle masse peut-on acheter avec 15 000 Ar ?\n3. Écris la relation entre la masse x en kg et le prix y en Ar.",
        correction: "1. Prix d'un kilogramme : 9 000 ÷ 3 = 3 000 Ar. Prix de 7 kg : 7 × 3 000 = 21 000 Ar.\n2. Masse : 15 000 ÷ 3 000 = 5 kg.\n3. Le coefficient de la masse vers le prix est 3 000 : y = 3 000 × x."
      }
    ]
  }
]);
