// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch13",
    titre: "Chapitre 13 : La masse et le poids",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch13-lecon1",
        titre: "La masse d'un objet",
        blocs: [
          {
            type: "definition",
            titre: "La masse",
            texte: "La masse est une grandeur qui caractérise un objet. Elle se note généralement m. Son unité dans le Système international est le kilogramme, de symbole kg."
          },
          {
            type: "texte",
            titre: "Mesurer une masse",
            texte: "On mesure une masse avec une balance. Selon la situation, on peut l'exprimer en kilogrammes, en grammes ou dans une autre unité de masse."
          },
          {
            type: "regle",
            titre: "Conversions",
            texte: "1 kg = 1 000 g.\n1 g = 1 000 mg.\nPour convertir des grammes en kilogrammes, on divise par 1 000."
          },
          {
            type: "exemple",
            titre: "Un sac de riz",
            texte: "Un sac contenant 5 kg de riz a une masse de 5 kg. Si l'on transporte le même sac de la Terre à la Lune sans ajouter ni retirer de matière, sa masse reste la même."
          }
        ]
      },
      {
        id: "sp4-ch13-lecon2",
        titre: "Le poids : une force",
        blocs: [
          {
            type: "definition",
            titre: "Le poids",
            texte: "Le poids d'un objet est la force d'attraction gravitationnelle exercée par un astre sur cet objet. Près de la surface de la Terre, on parle de la force exercée par la Terre sur l'objet."
          },
          {
            type: "definition",
            titre: "Unité et mesure",
            texte: "La valeur du poids se note généralement P. Son unité est le newton, de symbole N. On peut mesurer une force avec un dynamomètre."
          },
          {
            type: "texte",
            titre: "Direction et sens",
            texte: "Près de la surface de la Terre, le poids est dirigé suivant la verticale, vers le centre de la Terre."
          },
          {
            type: "schema",
            titre: "Représenter le poids",
            svg: "<svg viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg'><rect width='320' height='180' fill='#f8fafc'/><rect x='125' y='25' width='70' height='60' rx='4' fill='#fbbf24' stroke='#92400e' stroke-width='2'/><circle cx='160' cy='55' r='3' fill='#0f172a'/><line x1='160' y1='55' x2='160' y2='135' stroke='#dc2626' stroke-width='3'/><polygon points='160,145 153,132 167,132' fill='#dc2626'/><text x='175' y='120' font-size='15' fill='#dc2626'>P</text><text x='160' y='166' text-anchor='middle' font-size='12' fill='#475569'>Vers le centre de la Terre</text></svg>",
            legende: "Le poids est représenté par une flèche verticale dirigée vers le bas. Le point choisi est le centre de gravité de l'objet."
          },
          {
            type: "remarque",
            titre: "Une flèche représente une force",
            texte: "Pour représenter une force, on utilise une flèche : sa direction, son sens et sa longueur donnent des informations sur cette force. La longueur dépend de l'échelle choisie."
          }
        ]
      },
      {
        id: "sp4-ch13-lecon3",
        titre: "Ne pas confondre masse et poids",
        blocs: [
          {
            type: "tableau",
            titre: "Masse et poids",
            entetes: ["Grandeur", "Symbole", "Unité", "Appareil"],
            lignes: [
              ["Masse", "m", "kilogramme : kg", "balance"],
              ["Poids", "P", "newton : N", "dynamomètre"]
            ]
          },
          {
            type: "exemple",
            titre: "Sur la Terre et sur la Lune",
            texte: "Un objet de masse 2 kg garde cette masse sur la Terre et sur la Lune. En revanche, son poids est plus faible sur la Lune, car l'intensité de la pesanteur y est plus faible."
          },
          {
            type: "remarque",
            titre: "Dans la vie courante",
            texte: "On dit souvent « mon poids est de 40 kg ». En sciences physiques, le kilogramme est une unité de masse. Le poids est une force et s'exprime en newtons."
          }
        ]
      },
      {
        id: "sp4-ch13-lecon4",
        titre: "La relation entre poids et masse",
        blocs: [
          {
            type: "definition",
            titre: "Intensité de la pesanteur",
            texte: "L'intensité de la pesanteur, notée g, caractérise la pesanteur en un lieu. Elle s'exprime en newtons par kilogramme, de symbole N/kg."
          },
          {
            type: "regle",
            titre: "Relation",
            texte: "P = m × g\navec P en newtons (N), m en kilogrammes (kg) et g en newtons par kilogramme (N/kg)."
          },
          {
            type: "exemple",
            titre: "Calculer un poids sur Terre",
            texte: "Un objet a une masse de 3 kg. On prend g = 10 N/kg.\nP = m × g = 3 × 10 = 30 N.\nSon poids vaut 30 N."
          },
          {
            type: "remarque",
            titre: "Une valeur approchée",
            texte: "Près de la surface de la Terre, on utilise souvent g ≈ 9,8 N/kg, ou g ≈ 10 N/kg pour simplifier les calculs. Dans un exercice, utilise la valeur donnée dans l'énoncé."
          },
          {
            type: "methode",
            titre: "Calculer un poids",
            texte: "1. Repère la masse m et la valeur de g.\n2. Convertis la masse en kilogrammes si nécessaire.\n3. Calcule P = m × g.\n4. Écris le résultat en newtons."
          }
        ]
      },
      {
        id: "sp4-ch13-lecon5",
        titre: "Retrouver la masse ou l'intensité de pesanteur",
        blocs: [
          {
            type: "regle",
            titre: "Les relations",
            texte: "À partir de P = m × g, on obtient :\nm = P ÷ g\net g = P ÷ m.\nUtilise P en N, m en kg et g en N/kg."
          },
          {
            type: "exemple",
            titre: "Calculer une masse",
            texte: "Un objet a un poids de 25 N dans un lieu où g = 10 N/kg.\nm = P ÷ g = 25 ÷ 10 = 2,5 kg."
          },
          {
            type: "exemple",
            titre: "Comparer deux lieux",
            texte: "Un objet de masse 2 kg est étudié dans deux lieux.\nSur Terre, avec g = 10 N/kg : P = 2 × 10 = 20 N.\nSur la Lune, avec g = 1,6 N/kg : P = 2 × 1,6 = 3,2 N.\nLa masse reste 2 kg, mais le poids change."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est l'unité de la masse ? Quelle est l'unité du poids ?",
        correction: "La masse s'exprime notamment en kilogrammes (kg). Le poids est une force qui s'exprime en newtons (N)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel appareil mesure une masse ? Quel appareil peut mesurer une force ?",
        correction: "Une balance mesure une masse. Un dynamomètre peut mesurer une force, notamment le poids."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet a une masse de 4 kg. Calcule son poids en prenant g = 10 N/kg.",
        correction: "P = m × g = 4 × 10 = 40 N.\nSon poids est 40 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet a un poids de 60 N dans un lieu où g = 10 N/kg. Calcule sa masse.",
        correction: "m = P ÷ g = 60 ÷ 10 = 6 kg.\nSa masse est 6 kg."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet a une masse de 750 g. Calcule son poids avec g = 10 N/kg.",
        correction: "On convertit la masse : 750 g = 0,750 kg.\nP = m × g = 0,750 × 10 = 7,5 N."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de masse 5 kg est étudié sur Terre puis sur la Lune. Calcule son poids dans chaque lieu.\nDonnées : g sur Terre = 10 N/kg ; g sur la Lune = 1,6 N/kg.",
        correction: "Sur Terre : P = 5 × 10 = 50 N.\nSur la Lune : P = 5 × 1,6 = 8 N.\nSa masse reste 5 kg, mais son poids change."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un lieu donné, un objet de masse 2 kg a un poids de 18 N.\n1. Calcule l'intensité de la pesanteur g dans ce lieu.\n2. Quel serait le poids d'un objet de 5 kg au même endroit ?",
        correction: "1. g = P ÷ m = 18 ÷ 2 = 9 N/kg.\n2. P = m × g = 5 × 9 = 45 N.\nLe poids du second objet serait 45 N."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève dit : « Sur la Lune, un objet de 3 kg a une masse plus faible parce que son poids est plus faible. » Explique son erreur.",
        correction: "La masse et le poids sont deux grandeurs différentes. Si l'objet ne perd ni ne gagne de matière, sa masse reste 3 kg. Son poids est plus faible sur la Lune parce que l'intensité de la pesanteur y est plus faible."
      }
    ]
  }
]);
