// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch9",
    titre: "Chapitre 9 : Les tensions alternatives périodiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch9-lecon1",
        titre: "Une tension qui se répète",
        blocs: [
          {
            type: "texte",
            titre: "Rappel",
            texte: "Une tension alternative prend successivement des valeurs positives et négatives. Certaines tensions alternatives présentent un motif qui se répète régulièrement : elles sont périodiques."
          },
          {
            type: "definition",
            titre: "Tension périodique",
            texte: "Une tension est périodique lorsque son évolution se répète identiquement à intervalles de temps réguliers."
          },
          {
            type: "definition",
            titre: "Période",
            texte: "La période, notée T, est la plus petite durée au bout de laquelle le motif d'une tension périodique se répète. Elle s'exprime en secondes, de symbole s."
          },
          {
            type: "schema",
            titre: "Repérer une période",
            svg: "<svg viewBox='0 0 360 200' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='200' fill='#f8fafc'/><line x1='35' y1='100' x2='340' y2='100' stroke='#334155' stroke-width='2'/><polygon points='340,100 331,95 331,105' fill='#334155'/><line x1='35' y1='165' x2='35' y2='15' stroke='#334155' stroke-width='2'/><polygon points='35,15 30,24 40,24' fill='#334155'/><path d='M 35 100 C 55 40, 80 40, 100 100 S 145 160, 165 100 S 210 40, 230 100 S 275 160, 295 100' fill='none' stroke='#2563eb' stroke-width='3'/><line x1='35' y1='175' x2='165' y2='175' stroke='#dc2626' stroke-width='2'/><line x1='35' y1='169' x2='35' y2='181' stroke='#dc2626' stroke-width='2'/><line x1='165' y1='169' x2='165' y2='181' stroke='#dc2626' stroke-width='2'/><text x='100' y='192' text-anchor='middle' font-size='14' fill='#dc2626'>une période T</text><text x='7' y='23' font-size='13' fill='#0f172a'>U</text><text x='330' y='118' font-size='13' fill='#0f172a'>t</text><text x='19' y='104' font-size='12' fill='#0f172a'>0</text></svg>",
            legende: "Le motif entre les deux traits rouges se répète. Les deux points choisis sont dans le même état de variation : la courbe y passe par zéro en montant."
          },
          {
            type: "methode",
            titre: "Repérer une période",
            texte: "Sur un graphique, choisis deux points consécutifs qui occupent la même place dans le motif, par exemple deux sommets successifs. La durée qui les sépare est une période."
          },
          {
            type: "remarque",
            titre: "Attention aux passages par zéro",
            texte: "Deux passages consécutifs par zéro ne correspondent pas toujours à une période complète. Il faut retrouver le même point du motif et le même sens de variation."
          }
        ]
      },
      {
        id: "sp4-ch9-lecon2",
        titre: "La fréquence",
        blocs: [
          {
            type: "definition",
            titre: "Fréquence",
            texte: "La fréquence, notée f, est le nombre de périodes effectuées en une seconde. Son unité est le hertz, de symbole Hz."
          },
          {
            type: "regle",
            titre: "Relation entre période et fréquence",
            texte: "Si T est en secondes et f en hertz :\nf = 1 ÷ T\nT = 1 ÷ f."
          },
          {
            type: "exemple",
            titre: "Calculer une fréquence",
            texte: "Une tension a une période T = 0,02 s.\nf = 1 ÷ T = 1 ÷ 0,02 = 50 Hz.\nElle effectue 50 périodes par seconde."
          },
          {
            type: "exemple",
            titre: "Calculer une période",
            texte: "Une tension a une fréquence f = 25 Hz.\nT = 1 ÷ f = 1 ÷ 25 = 0,04 s."
          },
          {
            type: "remarque",
            titre: "Fréquence et vitesse",
            texte: "La fréquence indique combien de fois un motif se répète par seconde. Ce n'est pas la vitesse du courant électrique."
          },
          {
            type: "methode",
            titre: "Attention aux millisecondes",
            texte: "Avant d'utiliser f = 1 ÷ T, exprime T en secondes.\n1 ms = 0,001 s.\nPar exemple, 20 ms = 20 × 0,001 s = 0,020 s."
          }
        ]
      },
      {
        id: "sp4-ch9-lecon3",
        titre: "La tension maximale",
        blocs: [
          {
            type: "definition",
            titre: "Valeur maximale",
            texte: "La tension maximale, notée ici Umax, est la plus grande valeur positive atteinte par la tension étudiée. Elle s'exprime en volts."
          },
          {
            type: "exemple",
            titre: "Lire les valeurs extrêmes",
            texte: "Une tension sinusoïdale varie entre −6 V et +6 V. Sa tension maximale est Umax = 6 V. Sa valeur minimale est −6 V."
          },
          {
            type: "remarque",
            titre: "La valeur maximale dépend du graphique",
            texte: "Pour déterminer Umax, il faut lire l'échelle verticale et repérer la plus grande valeur atteinte par la courbe. La tension n'a pas toujours des valeurs extrêmes égales en valeur absolue."
          }
        ]
      },
      {
        id: "sp4-ch9-lecon4",
        titre: "La tension efficace",
        blocs: [
          {
            type: "definition",
            titre: "Valeur efficace",
            texte: "La tension efficace, notée Ueff, permet notamment de comparer l'effet thermique d'une tension variable à celui d'une tension continue. Elle s'exprime en volts."
          },
          {
            type: "exemple",
            titre: "Comparer les effets",
            texte: "Dans une même résistance, une tension alternative de 6 V efficaces produit le même effet thermique moyen qu'une tension continue constante de 6 V, dans les mêmes conditions de fonctionnement."
          },
          {
            type: "regle",
            titre: "Cas d'une tension sinusoïdale",
            texte: "Pour une tension sinusoïdale centrée sur zéro :\nUmax = √2 × Ueff\nUeff = Umax ÷ √2.\nPour les calculs, on peut utiliser √2 ≈ 1,41."
          },
          {
            type: "exemple",
            titre: "De Ueff à Umax",
            texte: "Une tension sinusoïdale a une valeur efficace Ueff = 10 V.\nUmax = √2 × Ueff ≈ 1,41 × 10 = 14,1 V."
          },
          {
            type: "remarque",
            titre: "Une relation à ne pas généraliser",
            texte: "La relation Umax = √2 × Ueff s'applique à une tension sinusoïdale centrée sur zéro. Elle n'est pas valable pour toutes les formes de tensions alternatives."
          }
        ]
      },
      {
        id: "sp4-ch9-lecon5",
        titre: "Méthode de résolution",
        blocs: [
          {
            type: "methode",
            titre: "Étudier une tension périodique",
            texte: "1. Vérifie que le motif se répète.\n2. Lis la période T entre deux points identiques consécutifs du motif.\n3. Convertis T en secondes si nécessaire.\n4. Calcule la fréquence avec f = 1 ÷ T.\n5. Lis Umax sur l'échelle verticale.\n6. Pour calculer Ueff à partir de Umax, vérifie d'abord que la tension est sinusoïdale et centrée sur zéro."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les exercices de ce chapitre portent sur des valeurs et des graphiques. Ne réalise aucun branchement sur le réseau électrique : sa tension est dangereuse."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la période d'une tension périodique ? Quelle est son unité ?",
        correction: "La période est la plus petite durée au bout de laquelle le motif se répète identiquement. Elle se note T et s'exprime en secondes, de symbole s."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une tension varie entre −8 V et +8 V. Quelle est sa tension maximale ?",
        correction: "La plus grande valeur positive atteinte est +8 V. La tension maximale est donc Umax = 8 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une tension périodique a une période T = 0,02 s. Calcule sa fréquence.",
        correction: "f = 1 ÷ T = 1 ÷ 0,02 = 50 Hz.\nLa fréquence est de 50 Hz."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une tension périodique a une fréquence f = 20 Hz. Calcule sa période.",
        correction: "T = 1 ÷ f = 1 ÷ 20 = 0,05 s.\nLa période est de 0,05 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sur un graphique, deux sommets successifs d'une tension périodique sont séparés de 40 ms.\n1. Quelle est la période en secondes ?\n2. Calcule la fréquence.",
        correction: "1. Les deux sommets successifs délimitent une période : T = 40 ms = 0,040 s.\n2. f = 1 ÷ T = 1 ÷ 0,040 = 25 Hz."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une tension sinusoïdale centrée sur zéro a une valeur maximale Umax = 14,1 V. Estime sa valeur efficace. Utilise √2 ≈ 1,41.",
        correction: "Pour une tension sinusoïdale centrée sur zéro : Ueff = Umax ÷ √2.\nUeff ≈ 14,1 ÷ 1,41 = 10 V.\nLa valeur efficace est environ 10 V."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une tension sinusoïdale centrée sur zéro possède une fréquence de 50 Hz et une valeur efficace de 6 V.\n1. Calcule sa période en secondes puis en millisecondes.\n2. Estime sa tension maximale. Utilise √2 ≈ 1,41.",
        correction: "1. T = 1 ÷ f = 1 ÷ 50 = 0,02 s. Comme 1 s = 1 000 ms, T = 20 ms.\n2. Umax = √2 × Ueff ≈ 1,41 × 6 = 8,46 V.\nLa tension maximale est environ 8,46 V."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève observe une tension alternative périodique qui n'est pas sinusoïdale. Il affirme : « Sa tension maximale vaut forcément √2 fois sa tension efficace. » A-t-il raison ? Explique.",
        correction: "Non. La relation Umax = √2 × Ueff est valable pour une tension sinusoïdale centrée sur zéro. Pour une autre forme de tension, on ne peut pas appliquer cette relation automatiquement."
      }
    ]
  }
]);
