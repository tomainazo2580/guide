enregistrerChapitres("3e", "sp", [
  {
    id: 22,
    titre: "Chapitre 22 : Production et propagation du son",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "La production d’un son",
        blocs: [
          {
            type: "introduction",
            titre: "D’où vient le son ?",
            texte: "Lorsque l’on frappe une cloche, que l’on pince une corde de guitare ou que l’on parle, on peut entendre un son.\n\nDans ces situations, une partie de la source sonore vibre : elle effectue des mouvements rapides autour d’une position."
          },
          {
            type: "definition",
            titre: "Source sonore",
            texte: "Une source sonore est un objet ou un dispositif qui produit un son grâce à une vibration.\n\nLa corde d’une guitare, la membrane d’un haut-parleur et les cordes vocales sont des exemples de sources sonores."
          },
          {
            type: "exemple",
            titre: "Une règle qui vibre",
            texte: "Une règle maintenue sur une table, avec une extrémité dépassant du bord, peut vibrer lorsqu’on l’écarte puis qu’on la relâche.\n\nSi ses vibrations sont suffisamment rapides et d’intensité suffisante, elles peuvent produire un son audible."
          },
          {
            type: "remarque",
            titre: "Vibration et son audible",
            texte: "Une vibration ne produit pas nécessairement un son audible par l’être humain. Cela dépend notamment de sa fréquence et de l’intensité du son reçu."
          }
        ]
      },

      {
        id: 2,
        titre: "La propagation du son",
        blocs: [
          {
            type: "definition",
            titre: "Une perturbation qui se propage",
            texte: "La vibration d’une source produit une perturbation qui se transmet dans le milieu environnant. Cette propagation constitue une onde sonore.\n\nDans l’air, la vibration se transmet de proche en proche jusqu’à l’oreille."
          },
          {
            type: "regle",
            titre: "Un milieu matériel est nécessaire",
            texte: "Le son a besoin d’un milieu matériel pour se propager. Il peut se propager dans un gaz, comme l’air, dans un liquide, comme l’eau, ou dans un solide.\n\nIl ne se propage pas dans le vide."
          },
          {
            type: "schema",
            titre: "De la source à l’oreille",
            svg: "<svg viewBox='0 0 400 170' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Une source vibrante transmet une perturbation dans l’air jusqu’à l’oreille'><rect x='20' y='50' width='55' height='65' rx='5' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><circle cx='48' cy='82' r='18' fill='none' stroke='#2563eb' stroke-width='2'/><path d='M95 55 Q115 82 95 110 M120 45 Q150 82 120 120 M150 35 Q190 82 150 130' fill='none' stroke='#ea580c' stroke-width='3'/><line x1='195' y1='82' x2='280' y2='82' stroke='#475569' stroke-width='2'/><path d='M280 82 L268 75 L268 89 Z' fill='#475569'/><path d='M330 110 C305 105 305 60 330 55 C355 50 365 70 355 88 C350 98 340 100 340 112' fill='none' stroke='#7c3aed' stroke-width='4'/><text x='48' y='145' text-anchor='middle' font-size='13'>Source</text><text x='180' y='27' text-anchor='middle' font-size='13'>Propagation dans l’air</text><text x='337' y='145' text-anchor='middle' font-size='13'>Oreille</text></svg>",
            legende: "La source vibre. La perturbation se propage dans l’air et peut atteindre l’oreille. Le schéma est simplifié."
          },
          {
            type: "remarque",
            titre: "Le milieu n’est pas transporté jusqu’à l’oreille",
            texte: "Lors de la propagation du son dans l’air, ce sont les perturbations qui se transmettent. Les particules d’air vibrent localement : elles ne voyagent pas toutes de la source jusqu’à l’oreille."
          },
          {
            type: "exemple",
            titre: "Son et vide",
            texte: "Si l’on retire progressivement l’air autour d’une sonnerie placée dans une enceinte adaptée, le son entendu à l’extérieur diminue fortement. Dans le vide, le son ne peut pas se propager directement."
          }
        ]
      },

      {
        id: 3,
        titre: "La vitesse du son",
        blocs: [
          {
            type: "definition",
            titre: "Vitesse de propagation",
            texte: "La vitesse du son est la distance parcourue par la perturbation sonore pendant une unité de temps.\n\nElle dépend du milieu et de ses conditions, notamment de sa température."
          },
          {
            type: "regle",
            titre: "Valeur dans l’air",
            texte: "Dans l’air à environ 20 °C, on utilise souvent la valeur approchée :\n\nv = 340 m/s.\n\nCette valeur peut varier avec les conditions. Pour les calculs, on utilise la valeur donnée par l’énoncé."
          },
          {
            type: "regle",
            titre: "Distance, durée et vitesse",
            texte: "Si la vitesse est constante sur le trajet étudié :\n\nv = d / t\n\nd = v × t\n\nt = d / v.\n\nAvec d en mètres et t en secondes, v est en mètres par seconde."
          },
          {
            type: "exemple",
            titre: "Distance parcourue par le son",
            texte: "Dans l’air, on prend v = 340 m/s. En 2 s, le son parcourt :\n\nd = v × t = 340 × 2 = 680 m."
          },
          {
            type: "remarque",
            titre: "Éclair et tonnerre",
            texte: "La lumière se propage beaucoup plus vite que le son. Lors d’un orage, on voit donc généralement l’éclair avant d’entendre le tonnerre.\n\nPour estimer une distance, on peut souvent négliger la durée de trajet de la lumière devant celle du son."
          },
          {
            type: "regle",
            titre: "Sécurité pendant un orage",
            texte: "Si tu entends le tonnerre, cherche rapidement un abri sûr, comme un bâtiment fermé. Ne reste pas sous un arbre isolé et éloigne-toi des points élevés et des étendues d’eau."
          }
        ]
      },

      {
        id: 4,
        titre: "Hauteur et intensité d’un son",
        blocs: [
          {
            type: "definition",
            titre: "Fréquence et hauteur",
            texte: "La fréquence d’une vibration est le nombre de vibrations effectuées en une seconde. Elle se note souvent f et s’exprime en hertz, de symbole Hz.\n\nLa hauteur permet de distinguer un son grave d’un son aigu. Plus la fréquence est élevée, plus le son est aigu ; plus elle est faible, plus le son est grave."
          },
          {
            type: "exemple",
            titre: "Comparer deux sons",
            texte: "Un son de fréquence 200 Hz est plus grave qu’un son de fréquence 800 Hz.\n\nUne fréquence de 200 Hz correspond à 200 vibrations par seconde."
          },
          {
            type: "definition",
            titre: "Intensité et niveau sonore",
            texte: "Un son peut être faible ou fort. Le niveau sonore permet notamment de comparer les sons reçus ; il s’exprime en décibels, de symbole dB.\n\nUn son aigu n’est pas nécessairement fort : la hauteur et le niveau sonore sont deux caractéristiques différentes."
          },
          {
            type: "schema",
            titre: "Ne pas confondre aigu et fort",
            svg: "<svg viewBox='0 0 400 190' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Comparaison de la hauteur et du niveau sonore'><rect x='20' y='15' width='360' height='70' rx='8' fill='#dbeafe' stroke='#2563eb'/><text x='200' y='40' text-anchor='middle' font-size='16' font-weight='bold'>Hauteur du son</text><text x='200' y='65' text-anchor='middle' font-size='14'>Fréquence plus élevée → son plus aigu</text><rect x='20' y='100' width='360' height='70' rx='8' fill='#ffedd5' stroke='#ea580c'/><text x='200' y='125' text-anchor='middle' font-size='16' font-weight='bold'>Niveau sonore</text><text x='200' y='150' text-anchor='middle' font-size='14'>Niveau plus élevé → son généralement plus fort</text></svg>",
            legende: "La fréquence s’exprime en hertz (Hz) et le niveau sonore en décibels (dB). Ce sont deux grandeurs différentes."
          }
        ]
      },

      {
        id: 5,
        titre: "L’audition et sa protection",
        blocs: [
          {
            type: "definition",
            titre: "Domaine audible",
            texte: "Une personne jeune ayant une audition normale peut généralement entendre des sons dont les fréquences sont comprises approximativement entre 20 Hz et 20 000 Hz.\n\nCes limites varient selon les personnes et peuvent évoluer avec l’âge ou les atteintes de l’audition."
          },
          {
            type: "definition",
            titre: "Infrasons et ultrasons",
            texte: "Les infrasons ont une fréquence inférieure à 20 Hz. Les ultrasons ont une fréquence supérieure à 20 000 Hz.\n\nIls ne sont généralement pas audibles par l’être humain, mais certains animaux peuvent percevoir des fréquences que nous n’entendons pas."
          },
          {
            type: "regle",
            titre: "Protéger ses oreilles",
            texte: "Un son trop fort, surtout lorsqu’il dure longtemps ou se répète, peut abîmer l’audition.\n\nPour se protéger, on peut baisser le volume, limiter la durée d’écoute, s’éloigner des haut-parleurs et utiliser des protections auditives adaptées lorsque c’est nécessaire."
          },
          {
            type: "remarque",
            titre: "Signes d’alerte",
            texte: "Des sifflements, des bourdonnements ou une baisse de l’audition après une exposition au bruit sont des signes à prendre au sérieux. Éloigne-toi du bruit et demande l’avis d’un professionnel de santé, notamment si les symptômes persistent."
          }
        ]
      },

      {
        id: 6,
        titre: "L’écho",
        blocs: [
          {
            type: "definition",
            titre: "Réflexion du son",
            texte: "Une onde sonore peut être réfléchie par un obstacle, comme une paroi ou une falaise. Si le son réfléchi revient suffisamment tard pour être distingué du son initial, on entend un écho."
          },
          {
            type: "schema",
            titre: "Le trajet aller-retour",
            svg: "<svg viewBox='0 0 400 175' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Le son part d’une personne, atteint un obstacle et revient vers elle'><circle cx='50' cy='75' r='15' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><line x1='50' y1='90' x2='50' y2='125' stroke='#2563eb' stroke-width='3'/><line x1='35' y1='105' x2='65' y2='105' stroke='#2563eb' stroke-width='3'/><line x1='330' y1='30' x2='330' y2='135' stroke='#475569' stroke-width='6'/><line x1='80' y1='55' x2='310' y2='55' stroke='#ea580c' stroke-width='3'/><path d='M310 55 L298 48 L298 62 Z' fill='#ea580c'/><line x1='310' y1='100' x2='80' y2='100' stroke='#7c3aed' stroke-width='3'/><path d='M80 100 L92 93 L92 107 Z' fill='#7c3aed'/><text x='195' y='43' text-anchor='middle' font-size='13'>Aller : distance d</text><text x='195' y='122' text-anchor='middle' font-size='13'>Retour : distance d</text><text x='330' y='155' text-anchor='middle' font-size='13'>Obstacle</text><text x='50' y='155' text-anchor='middle' font-size='13'>Personne</text></svg>",
            legende: "La durée mesurée entre l’émission et la réception de l’écho correspond au trajet aller-retour : la distance totale parcourue est 2d."
          },
          {
            type: "methode",
            titre: "Calculer la distance d’un obstacle",
            texte: "Si la source et le récepteur sont au même endroit et si le son revient après réflexion sur l’obstacle :\n\n1. Relever la vitesse v du son et la durée t de l’aller-retour.\n2. Calculer la distance totale parcourue : D = v × t.\n3. Diviser par 2 pour obtenir la distance jusqu’à l’obstacle :\n\nd = v × t / 2."
          },
          {
            type: "exemple",
            titre: "Un écho après une seconde",
            texte: "On entend un écho 1 s après avoir émis un son. On prend v = 340 m/s.\n\nDistance aller-retour : D = 340 × 1 = 340 m.\n\nDistance jusqu’à l’obstacle : d = 340 / 2 = 170 m."
          }
        ]
      },

      {
        id: 7,
        titre: "Bilan et méthode",
        blocs: [
          {
            type: "tableau",
            titre: "À retenir",
            entetes: ["Notion", "Essentiel"],
            lignes: [
              ["Production", "Une source sonore produit un son en vibrant."],
              ["Propagation", "Le son se propage dans un milieu matériel, mais pas dans le vide."],
              ["Fréquence", "Elle s’exprime en Hz et permet de distinguer grave et aigu."],
              ["Niveau sonore", "Il s’exprime en dB et permet notamment de comparer les sons reçus."],
              ["Écho", "Le son est réfléchi ; la durée mesurée correspond à un aller-retour."]
            ]
          },
          {
            type: "methode",
            titre: "Résoudre un problème de propagation",
            texte: "1. Relever la vitesse du son et la durée.\n2. Convertir les unités si nécessaire.\n3. Identifier le trajet : aller simple ou aller-retour.\n4. Calculer la distance totale avec d = v × t.\n5. Pour un écho revenant au point de départ, diviser cette distance par 2 pour trouver la distance de l’obstacle.\n6. Donner le résultat avec son unité."
          },
          {
            type: "remarque",
            titre: "Erreurs à éviter",
            texte: "• Dire que le son se propage dans le vide.\n• Confondre son aigu et son fort.\n• Confondre les hertz et les décibels.\n• Oublier que le son de l’écho effectue un aller-retour.\n• Utiliser une vitesse sans vérifier son unité ou la valeur donnée par l’énoncé."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Que fait une corde de guitare lorsqu’elle produit un son ?",
        correction: "La corde vibre. Cette vibration met en mouvement le milieu environnant et produit une perturbation sonore."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le son peut-il se propager dans l’air ? Dans le vide ?",
        correction: "Le son peut se propager dans l’air, qui est un milieu matériel. Il ne peut pas se propager dans le vide."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle grandeur, exprimée en hertz, permet de comparer la hauteur de deux sons ?",
        correction: "C’est la fréquence. Plus elle est élevée, plus le son est aigu."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un son a une fréquence de 250 Hz et un autre de 1 000 Hz. Lequel est le plus aigu ?",
        correction: "Le son de 1 000 Hz possède la fréquence la plus élevée. Il est donc le plus aigu. Le son de 250 Hz est plus grave."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un son de fréquence 25 000 Hz est-il normalement audible par l’être humain ? Comment l’appelle-t-on ?",
        correction: "25 000 Hz est supérieur à 20 000 Hz. Ce son n’est généralement pas audible par l’être humain : c’est un ultrason."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On prend la vitesse du son dans l’air égale à 340 m/s. Quelle distance le son parcourt-il en 3 s ?",
        correction: "d = v × t = 340 × 3 = 1 020 m.\n\nLe son parcourt 1 020 m en 3 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un son parcourt 680 m dans l’air. On prend v = 340 m/s. Calcule la durée de propagation.",
        correction: "t = d / v = 680 / 340 = 2 s.\n\nLa durée de propagation est 2 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne entend son écho 2 s après avoir crié. Le son revient à l’endroit où elle se trouve. On prend v = 340 m/s. À quelle distance se trouve l’obstacle ?",
        correction: "Le son parcourt un aller-retour en 2 s.\n\nDistance totale : D = v × t = 340 × 2 = 680 m.\n\nDistance jusqu’à l’obstacle : d = D / 2 = 680 / 2 = 340 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une élève affirme : « Un son aigu est toujours plus fort qu’un son grave. » Explique pourquoi cette affirmation est fausse et cite deux moyens de protéger son audition.",
        correction: "La hauteur dépend de la fréquence : un son aigu a une fréquence plus élevée. Le caractère fort ou faible dépend notamment du niveau sonore. Un son aigu peut donc être faible et un son grave peut être fort.\n\nPour protéger son audition, on peut par exemple baisser le volume et limiter la durée d’écoute."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice type BEPC. Une personne émet un son face à une falaise et entend son écho 1,5 s plus tard. On prend la vitesse du son dans l’air égale à 340 m/s.\n\n1. Pourquoi entend-elle un écho ?\n2. Quelle distance totale le son a-t-il parcourue ?\n3. À quelle distance la personne se trouve-t-elle de la falaise ?\n4. Si le son émis a une fréquence de 500 Hz, appartient-il au domaine généralement audible par l’être humain ?",
        correction: "1. Le son se propage jusqu’à la falaise, y est réfléchi puis revient vers la personne. Le son réfléchi est entendu comme un écho.\n\n2. La durée de 1,5 s correspond à l’aller-retour.\n\nD = v × t = 340 × 1,5 = 510 m.\n\n3. La distance jusqu’à la falaise vaut la moitié de la distance totale :\n\nd = 510 / 2 = 255 m.\n\n4. Oui. La fréquence de 500 Hz est comprise entre environ 20 Hz et 20 000 Hz : elle appartient au domaine généralement audible."
      }
    ]
  }
]);
