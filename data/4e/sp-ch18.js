// ===== GUIDE - Sciences physiques 4e (T8) =====
// Complément de Guide : le fascicule mentionne le son dans le titre
// d'une thématique, mais ne présente pas de cours identifiable sur ce sujet.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch18",
    titre: "Chapitre 18 : Le son",
    premium: false,
    guide: true,

    lecons: [
      {
        id: "sp4-ch18-lecon1",
        titre: "Comment un son est-il produit ?",
        blocs: [
          {
            type: "texte",
            titre: "Des sons autour de nous",
            texte: "Une voix, une cloche, un tambour ou une corde de valiha peuvent produire des sons. Dans chaque cas, une partie de la source vibre."
          },
          {
            type: "definition",
            titre: "Vibration",
            texte: "Une vibration est un mouvement de va-et-vient autour d'une position d'équilibre."
          },
          {
            type: "regle",
            titre: "Produire un son",
            texte: "Un son est produit par une source qui vibre. Cette vibration met en mouvement le milieu autour de la source et une perturbation sonore peut s'y propager."
          },
          {
            type: "exemple",
            titre: "Une corde de valiha",
            texte: "Lorsqu'on pince une corde de valiha, elle vibre. Sa vibration contribue à mettre l'air en mouvement : un son peut alors parvenir jusqu'à l'oreille."
          },
          {
            type: "exemple",
            titre: "La voix",
            texte: "Quand nous parlons, les cordes vocales vibrent. Les mouvements de l'air participent à la production et à la propagation des sons de la voix."
          }
        ]
      },
      {
        id: "sp4-ch18-lecon2",
        titre: "La propagation du son",
        blocs: [
          {
            type: "definition",
            titre: "Propagation",
            texte: "La propagation d'un son est la transmission d'une perturbation de proche en proche dans un milieu matériel."
          },
          {
            type: "regle",
            titre: "Un milieu est nécessaire",
            texte: "Le son peut se propager dans des gaz, des liquides et des solides. Il ne se propage pas dans le vide, car il n'y a pas de milieu matériel pour transmettre la perturbation."
          },
          {
            type: "exemple",
            titre: "Dans l'air et dans l'eau",
            texte: "Nous entendons habituellement les sons transmis par l'air. Des sons peuvent aussi se propager dans l'eau : certains animaux aquatiques les utilisent pour communiquer."
          },
          {
            type: "remarque",
            titre: "Le son ne transporte pas la matière avec lui",
            texte: "Lors de la propagation, les particules du milieu oscillent autour de leur position, mais elles ne voyagent pas toutes de la source jusqu'à l'oreille. C'est la perturbation qui se propage."
          },
          {
            type: "schema",
            titre: "De la source à l'oreille",
            svg: "<svg viewBox='0 0 360 145' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='145' fill='#f8fafc'/><rect x='25' y='42' width='65' height='50' rx='5' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='57' y='72' text-anchor='middle' font-size='12' fill='#78350f'>Source</text><path d='M 105 45 Q 125 65 105 85 M 125 35 Q 155 65 125 95 M 150 25 Q 190 65 150 105' fill='none' stroke='#2563eb' stroke-width='2'/><line x1='185' y1='65' x2='265' y2='65' stroke='#2563eb' stroke-width='2'/><polygon points='265,65 255,60 255,70' fill='#2563eb'/><ellipse cx='305' cy='65' rx='23' ry='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><path d='M 301 48 Q 320 45 315 65 Q 313 77 300 82' fill='none' stroke='#92400e' stroke-width='2'/><text x='180' y='130' text-anchor='middle' font-size='13' fill='#0f172a'>Propagation dans l'air vers l'oreille</text></svg>",
            legende: "La source vibre ; le son se propage dans l'air et peut atteindre l'oreille."
          }
        ]
      },
      {
        id: "sp4-ch18-lecon3",
        titre: "La vitesse du son",
        blocs: [
          {
            type: "texte",
            titre: "Une vitesse qui dépend du milieu",
            texte: "La vitesse du son dépend du milieu dans lequel il se propage et des conditions, notamment de la température. Dans l'air à environ 20 °C, elle est proche de 340 m/s."
          },
          {
            type: "regle",
            titre: "Distance, vitesse et durée",
            texte: "Pour une vitesse constante :\nd = v × t\navec d en mètres, v en mètres par seconde et t en secondes. On peut aussi écrire t = d ÷ v."
          },
          {
            type: "exemple",
            titre: "Une distance parcourue",
            texte: "Dans l'air, avec une vitesse approximative de 340 m/s, un son parcourt en 2 s environ :\nd = 340 × 2 = 680 m."
          },
          {
            type: "remarque",
            titre: "Son et lumière",
            texte: "Dans l'air, la lumière se propage beaucoup plus vite que le son. Lors d'un orage, on voit donc généralement l'éclair avant d'entendre le tonnerre."
          }
        ]
      },
      {
        id: "sp4-ch18-lecon4",
        titre: "Sons graves et sons aigus",
        blocs: [
          {
            type: "definition",
            titre: "Fréquence d'un son",
            texte: "Pour un son périodique, la fréquence indique le nombre de répétitions de la vibration par seconde. Elle s'exprime en hertz, de symbole Hz."
          },
          {
            type: "regle",
            titre: "Hauteur du son",
            texte: "Un son grave a une fréquence plus faible qu'un son aigu. La hauteur d'un son est liée à sa fréquence."
          },
          {
            type: "exemple",
            titre: "Comparer deux sons",
            texte: "Un son périodique de 200 Hz est plus grave qu'un son périodique de 400 Hz. Le son de 400 Hz est plus aigu."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre hauteur et niveau sonore",
            texte: "Grave ou aigu décrit la hauteur du son. Faible ou fort décrit son niveau sonore. Un son aigu peut être faible ou fort ; un son grave aussi."
          }
        ]
      },
      {
        id: "sp4-ch18-lecon5",
        titre: "Protéger son audition",
        blocs: [
          {
            type: "texte",
            titre: "Le niveau sonore",
            texte: "Le niveau sonore peut être exprimé en décibels, de symbole dB. Un son très intense ou une exposition prolongée à un niveau sonore élevé peut endommager l'audition."
          },
          {
            type: "methode",
            titre: "Quelques précautions",
            texte: "Évite de rester près d'une source sonore très forte. Réduis le volume lorsque c'est possible, éloigne-toi des haut-parleurs et fais des pauses. Des protections auditives adaptées peuvent être utiles dans les environnements bruyants."
          },
          {
            type: "remarque",
            titre: "Signes à prendre au sérieux",
            texte: "Après une exposition sonore, des bourdonnements ou une difficulté à entendre peuvent être des signes d'alerte. Éloigne-toi du bruit et demande rapidement conseil à un professionnel de santé, surtout si les symptômes persistent."
          },
          {
            type: "remarque",
            titre: "Observer sans se mettre en danger",
            texte: "Il n'est pas nécessaire d'écouter des sons forts pour étudier le son. Les exemples et les exercices de ce chapitre peuvent être travaillés sans matériel sonore."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Que fait une source sonore lorsqu'elle produit un son ?",
        correction: "Une source sonore vibre. Sa vibration crée une perturbation qui peut se propager dans un milieu matériel."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le son peut-il se propager dans le vide ? Pourquoi ?",
        correction: "Non. Le son a besoin d'un milieu matériel pour transmettre la perturbation ; dans le vide, ce milieu est absent."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Compare un son de 150 Hz et un son de 600 Hz. Lequel est le plus aigu ?",
        correction: "Le son de 600 Hz a la fréquence la plus élevée : il est le plus aigu. Celui de 150 Hz est plus grave."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite deux moyens de protéger son audition dans un environnement bruyant.",
        correction: "On peut par exemple s'éloigner des haut-parleurs, réduire le volume, faire des pauses ou utiliser des protections auditives adaptées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans l'air, on prend la vitesse du son égale à 340 m/s. Quelle distance le son parcourt-il en 3 s ?",
        correction: "d = v × t = 340 × 3 = 1 020 m.\nLe son parcourt environ 1 020 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Lors d'un orage, pourquoi voit-on généralement l'éclair avant d'entendre le tonnerre ?",
        correction: "La lumière se propage beaucoup plus vite que le son dans l'air. La lumière de l'éclair arrive donc généralement à l'observateur avant le son du tonnerre."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un son met 2 s pour parcourir une distance dans l'air. On prend v = 340 m/s.\n1. Calcule la distance parcourue.\n2. Cette réponse serait-elle automatiquement valable dans l'eau ? Explique.",
        correction: "1. d = v × t = 340 × 2 = 680 m.\n2. Non. La vitesse du son dépend du milieu. Pour calculer une distance dans l'eau, il faut utiliser une valeur adaptée à l'eau et aux conditions considérées."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève dit : « Un son aigu est toujours plus fort qu'un son grave. » Explique son erreur.",
        correction: "Aigu et grave concernent la hauteur, liée à la fréquence. Fort et faible concernent le niveau sonore. Un son aigu peut être faible ou fort, tout comme un son grave."
      }
    ]
  }
]);
