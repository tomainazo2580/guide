// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch10",
    titre: "Chapitre 10 : Lire un oscillogramme",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch10-lecon1",
        titre: "L'oscilloscope et son tracé",
        blocs: [
          {
            type: "definition",
            titre: "L'oscilloscope",
            texte: "Un oscilloscope est un appareil qui permet notamment de visualiser l'évolution d'une tension électrique au cours du temps."
          },
          {
            type: "definition",
            titre: "Oscillogramme",
            texte: "Un oscillogramme est le tracé observé ou enregistré à l'aide d'un oscilloscope. Dans ce chapitre, il représente une tension en fonction du temps."
          },
          {
            type: "texte",
            titre: "Les deux directions",
            texte: "Sur les oscillogrammes étudiés ici, la direction horizontale correspond au temps et la direction verticale correspond à la tension. L'écran est quadrillé en divisions."
          },
          {
            type: "remarque",
            titre: "Un outil de lecture",
            texte: "Le tracé permet de reconnaître une tension constante ou variable et, si le motif se répète, d'estimer sa période. Il faut connaître les réglages de l'appareil pour obtenir des valeurs."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Un oscilloscope doit être utilisé avec des accessoires et des réglages adaptés, par une personne formée. Ne le branche jamais sur une prise électrique à la maison."
          }
        ]
      },
      {
        id: "sp4-ch10-lecon2",
        titre: "Les échelles de l'écran",
        blocs: [
          {
            type: "definition",
            titre: "Sensibilité verticale",
            texte: "La sensibilité verticale indique la tension correspondant à une division verticale. Elle peut être donnée en volts par division, noté V/div."
          },
          {
            type: "definition",
            titre: "Base de temps",
            texte: "La base de temps indique la durée correspondant à une division horizontale. Elle peut être donnée en millisecondes par division, noté ms/div."
          },
          {
            type: "exemple",
            titre: "Lire les réglages",
            texte: "Si la sensibilité verticale est 2 V/div, une division verticale représente 2 V. Si la base de temps est 5 ms/div, une division horizontale représente 5 ms."
          },
          {
            type: "remarque",
            titre: "Tenir compte des réglages",
            texte: "Les valeurs se calculent à partir du nombre de divisions et des réglages effectifs. Si une sonde avec atténuation est utilisée, son facteur doit aussi être correctement pris en compte."
          }
        ]
      },
      {
        id: "sp4-ch10-lecon3",
        titre: "Lire la tension maximale",
        blocs: [
          {
            type: "regle",
            titre: "De l'axe zéro au sommet",
            texte: "Pour une tension dont le niveau zéro est connu, la valeur maximale se lit en comptant les divisions verticales entre le niveau zéro et le sommet positif du tracé."
          },
          {
            type: "regle",
            titre: "Calcul",
            texte: "Umax = nombre de divisions verticales × sensibilité verticale."
          },
          {
            type: "exemple",
            titre: "Exemple",
            texte: "Le sommet positif est à 3 divisions au-dessus du niveau zéro. La sensibilité verticale est 2 V/div.\nUmax = 3 × 2 = 6 V."
          },
          {
            type: "remarque",
            titre: "Repérer le zéro",
            texte: "Le niveau zéro n'est pas nécessairement la ligne centrale de l'écran. Il doit être indiqué ou déterminé à partir des réglages de l'appareil."
          },
          {
            type: "remarque",
            titre: "Du sommet au creux",
            texte: "La distance entre le sommet positif et le creux négatif donne la tension crête à crête. Pour une sinusoïde centrée sur zéro seulement, cette valeur est égale à 2 × Umax."
          }
        ]
      },
      {
        id: "sp4-ch10-lecon4",
        titre: "Lire la période et calculer la fréquence",
        blocs: [
          {
            type: "regle",
            titre: "Calculer la période",
            texte: "T = nombre de divisions horizontales correspondant à un motif complet × base de temps."
          },
          {
            type: "exemple",
            titre: "Une période de quatre divisions",
            texte: "Un motif complet occupe 4 divisions horizontales. La base de temps est 5 ms/div.\nT = 4 × 5 = 20 ms = 0,020 s.\nLa fréquence vaut f = 1 ÷ T = 1 ÷ 0,020 = 50 Hz."
          },
          {
            type: "methode",
            titre: "De l'oscillogramme à la fréquence",
            texte: "1. Repère deux points consécutifs qui occupent la même place dans le motif, par exemple deux sommets successifs.\n2. Compte les divisions horizontales qui les séparent.\n3. Multiplie par la base de temps pour obtenir T.\n4. Convertis T en secondes.\n5. Calcule f = 1 ÷ T."
          },
          {
            type: "remarque",
            titre: "Éviter une erreur",
            texte: "Deux passages consécutifs par zéro peuvent ne représenter qu'une partie du motif. Choisis deux points correspondant au même état de variation."
          }
        ]
      },
      {
        id: "sp4-ch10-lecon5",
        titre: "Exemple complet",
        blocs: [
          {
            type: "schema",
            titre: "Oscillogramme simplifié",
            svg: "<svg viewBox='0 0 360 230' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='20' width='300' height='160' fill='#f8fafc' stroke='#475569' stroke-width='2'/><g stroke='#cbd5e1' stroke-width='1'><line x1='67.5' y1='20' x2='67.5' y2='180'/><line x1='105' y1='20' x2='105' y2='180'/><line x1='142.5' y1='20' x2='142.5' y2='180'/><line x1='180' y1='20' x2='180' y2='180'/><line x1='217.5' y1='20' x2='217.5' y2='180'/><line x1='255' y1='20' x2='255' y2='180'/><line x1='292.5' y1='20' x2='292.5' y2='180'/><line x1='30' y1='60' x2='330' y2='60'/><line x1='30' y1='100' x2='330' y2='100'/><line x1='30' y1='140' x2='330' y2='140'/></g><line x1='30' y1='100' x2='330' y2='100' stroke='#475569' stroke-width='2'/><path d='M 30 100 C 48.75 20, 86.25 20, 105 100 S 161.25 180, 180 100 S 236.25 20, 255 100 S 311.25 180, 330 100' fill='none' stroke='#2563eb' stroke-width='3'/><text x='9' y='104' font-size='12' fill='#0f172a'>0</text><text x='30' y='205' font-size='13' fill='#0f172a'>Horizontal : 5 ms/div</text><text x='30' y='222' font-size='13' fill='#0f172a'>Vertical : 2 V/div</text></svg>",
            legende: "Le niveau zéro est indiqué. Le tracé représenté est périodique et centré sur zéro."
          },
          {
            type: "exemple",
            titre: "Exploiter les données",
            texte: "Sur ce tracé, le sommet est à 1,5 division au-dessus du zéro : Umax = 1,5 × 2 = 3 V.\nUn motif complet occupe 4 divisions horizontales : T = 4 × 5 = 20 ms = 0,020 s.\nLa fréquence est f = 1 ÷ 0,020 = 50 Hz."
          },
          {
            type: "remarque",
            titre: "Une lecture approchée",
            texte: "Sur un tracé réel, le comptage des divisions peut être approximatif. Il faut alors présenter les résultats comme des estimations."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Que représente un oscillogramme dans ce chapitre ?",
        correction: "Il représente l'évolution d'une tension électrique au cours du temps, sous forme d'un tracé obtenu ou enregistré avec un oscilloscope."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une base de temps est réglée sur 10 ms/div. Quelle durée correspond à une division horizontale ?",
        correction: "Une division horizontale correspond à 10 ms."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le sommet positif d'un tracé est à 3 divisions au-dessus du niveau zéro. La sensibilité verticale est 2 V/div. Calcule Umax.",
        correction: "Umax = 3 divisions × 2 V/div = 6 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un motif complet occupe 5 divisions horizontales. La base de temps est 4 ms/div. Calcule la période en millisecondes puis en secondes.",
        correction: "T = 5 × 4 = 20 ms. Comme 1 ms = 0,001 s, T = 0,020 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un motif complet occupe 4 divisions horizontales. La base de temps est 10 ms/div.\n1. Calcule la période en secondes.\n2. Calcule la fréquence.",
        correction: "1. T = 4 × 10 = 40 ms = 0,040 s.\n2. f = 1 ÷ T = 1 ÷ 0,040 = 25 Hz."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un tracé sinusoïdal centré sur zéro a son sommet à 2 divisions au-dessus du zéro. La sensibilité est 5 V/div. Calcule Umax, puis estime Ueff avec √2 ≈ 1,41.",
        correction: "Umax = 2 × 5 = 10 V.\nComme la tension est sinusoïdale et centrée sur zéro : Ueff = Umax ÷ √2 ≈ 10 ÷ 1,41 ≈ 7,1 V."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un oscillogramme sinusoïdal centré sur zéro présente les caractéristiques suivantes : sommet à 3 divisions au-dessus du zéro, période de 5 divisions, sensibilité de 2 V/div et base de temps de 2 ms/div.\nCalcule Umax, T et f.",
        correction: "Umax = 3 × 2 = 6 V.\nT = 5 × 2 = 10 ms = 0,010 s.\nf = 1 ÷ T = 1 ÷ 0,010 = 100 Hz."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève lit la distance entre le sommet et le creux d'un tracé sinusoïdal centré sur zéro : 6 divisions. La sensibilité est 2 V/div. Il conclut que Umax = 12 V. A-t-il raison ?",
        correction: "Non. La distance sommet-creux donne la tension crête à crête : 6 × 2 = 12 V.\nPour une sinusoïde centrée sur zéro, la tension crête à crête vaut 2 × Umax. Donc Umax = 12 ÷ 2 = 6 V."
      }
    ]
  }
]);
