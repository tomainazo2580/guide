enregistrerChapitres("3e", "sp", [
  {
    id: 11,
    titre: "Chapitre 11 : Indicateurs colorés naturels et artificiels",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "À quoi sert un indicateur coloré ?",
        blocs: [
          {
            type: "introduction",
            titre: "Observer une solution",
            texte: "Une solution aqueuse peut être acide, neutre ou basique. Pour connaître son caractère, on peut mesurer son pH avec du papier pH ou un pH-mètre. On peut aussi utiliser un indicateur coloré : sa couleur change selon le milieu."
          },
          {
            type: "definition",
            titre: "Indicateur coloré",
            texte: "Un indicateur coloré acido-basique est une substance dont la couleur dépend du pH de la solution dans laquelle elle se trouve. On en ajoute généralement quelques gouttes à la solution à étudier."
          },
          {
            type: "rappel",
            titre: "Rappel sur le pH",
            texte: "À 25 °C, une solution est acide si son pH est inférieur à 7 ; neutre si son pH est égal à 7 ; basique si son pH est supérieur à 7."
          },
          {
            type: "remarque",
            titre: "Une indication, pas une mesure exacte",
            texte: "La couleur d'un indicateur permet généralement de situer le pH dans un intervalle, mais elle ne donne pas sa valeur exacte. Pour obtenir une valeur plus précise, on utilise un pH-mètre correctement étalonné."
          }
        ]
      },

      {
        id: 2,
        titre: "Couleurs et zone de virage",
        blocs: [
          {
            type: "definition",
            titre: "Zone de virage",
            texte: "La zone de virage est l'intervalle de pH dans lequel un indicateur passe progressivement d'une couleur à une autre. Dans cette zone, on peut observer une couleur intermédiaire."
          },
          {
            type: "tableau",
            titre: "Quelques indicateurs artificiels",
            entetes: [
              "Indicateur",
              "En dessous de la zone",
              "Zone de virage",
              "Au-dessus de la zone"
            ],
            lignes: [
              [
                "Bleu de bromothymol (BBT)",
                "Jaune",
                "pH de 6,0 à 7,6 : transition, notamment vert autour de 7",
                "Bleu"
              ],
              [
                "Phénolphtaléine",
                "Incolore",
                "pH de 8,2 à 10,0 : apparition progressive du rose",
                "Rose"
              ],
              [
                "Rouge de méthyle",
                "Rouge",
                "pH de 4,2 à 6,3 : transition",
                "Jaune"
              ]
            ]
          },
          {
            type: "schema",
            titre: "Les couleurs du BBT",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 160' role='img' aria-label='Couleurs approximatives du bleu de bromothymol selon le pH'><rect width='320' height='160' fill='white'/><text x='160' y='22' text-anchor='middle' font-size='15' fill='#0f172a'>Bleu de bromothymol</text><rect x='15' y='42' width='90' height='42' fill='#fde047' stroke='#64748b'/><rect x='105' y='42' width='110' height='42' fill='#86c96b' stroke='#64748b'/><rect x='215' y='42' width='90' height='42' fill='#60a5fa' stroke='#64748b'/><text x='60' y='68' text-anchor='middle' font-size='14' fill='#0f172a'>Jaune</text><text x='160' y='60' text-anchor='middle' font-size='13' fill='#0f172a'>Transition</text><text x='160' y='76' text-anchor='middle' font-size='12' fill='#0f172a'>vert autour de 7</text><text x='260' y='68' text-anchor='middle' font-size='14' fill='#0f172a'>Bleu</text><text x='60' y='107' text-anchor='middle' font-size='13' fill='#334155'>pH &lt; 6,0</text><text x='160' y='107' text-anchor='middle' font-size='13' fill='#334155'>6,0 à 7,6</text><text x='260' y='107' text-anchor='middle' font-size='13' fill='#334155'>pH &gt; 7,6</text><text x='160' y='139' text-anchor='middle' font-size='12' fill='#475569'>Les couleurs représentées sont approximatives.</text></svg>",
            legende: "Le BBT passe progressivement du jaune au bleu entre les pH 6,0 et 7,6. Le vert est une couleur intermédiaire autour de 7 : il ne prouve pas que le pH vaut exactement 7. Les couleurs peuvent varier selon l’écran et les conditions d’observation."
          },
          {
            type: "exemple",
            titre: "Exemple avec le BBT",
            texte: "Si le BBT devient jaune, le pH est inférieur à environ 6,0 : la solution est acide. S'il devient bleu, le pH est supérieur à environ 7,6 : la solution est basique. Une teinte verte indique un pH situé dans la zone de transition, autour de 7, sans donner une valeur exacte."
          },
          {
            type: "remarque",
            titre: "Attention à la phénolphtaléine",
            texte: "La phénolphtaléine incolore ne prouve pas que la solution est acide : elle est aussi incolore dans une solution neutre et dans certaines solutions légèrement basiques, jusqu'à environ pH 8,2."
          }
        ]
      },

      {
        id: 3,
        titre: "Indicateurs naturels et papier pH",
        blocs: [
          {
            type: "definition",
            titre: "Indicateur naturel",
            texte: "Un indicateur naturel est obtenu à partir d'une substance présente dans la nature. Par exemple, le jus de chou rouge contient des pigments dont la couleur varie avec le pH."
          },
          {
            type: "exemple",
            titre: "Jus de chou rouge",
            texte: "Le jus de chou rouge prend généralement une teinte rouge ou rose en milieu acide, violette près de la neutralité et bleue ou verte en milieu basique. Ces couleurs sont approximatives : elles dépendent notamment de la concentration du jus et du milieu étudié."
          },
          {
            type: "definition",
            titre: "Papier pH",
            texte: "Le papier pH contient un mélange d'indicateurs colorés. Après contact avec la solution, on compare sa couleur à une échelle de référence pour estimer le pH."
          },
          {
            type: "methode",
            titre: "Utiliser du papier pH",
            texte: "1. Déposer un petit morceau de papier pH sur un support propre. 2. Avec une baguette propre, déposer une goutte de solution sur le papier. 3. Comparer rapidement la couleur obtenue à l'échelle fournie. 4. Lire une valeur approximative du pH et conclure si la précision de la lecture le permet."
          },
          {
            type: "remarque",
            titre: "Une lecture proche de 7",
            texte: "Le papier pH donne une estimation. Une couleur correspondant approximativement à pH 7 ne prouve pas que le pH vaut exactement 7. Pour distinguer des valeurs très proches de 7, il faut une mesure plus précise."
          },
          {
            type: "regle",
            titre: "Sécurité",
            texte: "Ne goûte jamais une solution de laboratoire. Évite le contact avec la peau et les yeux. Utilise de petites quantités sous la surveillance d'un adulte ou d'un enseignant. Ne mélange pas de produits ménagers pour fabriquer des exemples."
          }
        ]
      },

      {
        id: 4,
        titre: "Utiliser les indicateurs pour étudier une solution",
        blocs: [
          {
            type: "methode",
            titre: "Méthode de raisonnement",
            texte: "1. Identifier l'indicateur utilisé. 2. Observer la couleur obtenue. 3. Consulter les couleurs et la zone de virage de cet indicateur. 4. En déduire un intervalle de pH. 5. Conclure seulement si cet intervalle permet de savoir si la solution est acide, neutre ou basique."
          },
          {
            type: "exemple",
            titre: "Deux indicateurs pour une même solution",
            texte: "Une solution rend le BBT jaune et le rouge de méthyle jaune. Le BBT jaune indique pH < 6,0. Le rouge de méthyle jaune indique pH > 6,3. Ces deux conclusions sont incompatibles : il faut vérifier les observations, les produits et le matériel."
          },
          {
            type: "exemple",
            titre: "Encadrer le pH",
            texte: "Une solution rend le BBT jaune et le rouge de méthyle rouge. On déduit pH < 6,0 avec le BBT et pH < 4,2 avec le rouge de méthyle. L'information la plus précise est donc : pH < 4,2. La solution est acide."
          },
          {
            type: "remarque",
            titre: "Couleur initiale de la solution",
            texte: "Une solution déjà très colorée peut masquer la couleur de l'indicateur et rendre l'observation difficile. Il faut alors utiliser une autre méthode adaptée."
          }
        ]
      },

      {
        id: 5,
        titre: "Indicateur coloré et titrage acide-base",
        blocs: [
          {
            type: "definition",
            titre: "Principe du titrage",
            texte: "Un titrage permet de déterminer une quantité ou une concentration inconnue grâce à une réaction avec une solution de concentration connue. On ajoute progressivement cette dernière à la solution étudiée."
          },
          {
            type: "definition",
            titre: "Équivalence",
            texte: "À l'équivalence, les réactifs ont été introduits dans les proportions prévues par l'équation de la réaction. Pour une réaction acide-base, cela ne signifie pas toujours que le pH est exactement égal à 7."
          },
          {
            type: "methode",
            titre: "Rôle de l'indicateur",
            texte: "On choisit un indicateur dont la zone de virage se situe dans le saut de pH au voisinage de l'équivalence. Son changement de couleur permet alors de repérer approximativement l'équivalence. On ajoute la solution titrante lentement à son approche, puis goutte à goutte."
          },
          {
            type: "remarque",
            titre: "Virage et équivalence",
            texte: "Tout changement de couleur ne signifie pas automatiquement que l'équivalence est atteinte. L'indicateur doit être adapté au titrage ; même bien choisi, le virage est un repérage expérimental approximatif."
          }
        ]
      },

      {
        id: 6,
        titre: "À retenir et erreurs à éviter",
        blocs: [
          {
            type: "regle",
            titre: "L'essentiel",
            texte: "Un indicateur coloré change de couleur selon le pH. Sa zone de virage est un intervalle de pH. Le BBT est jaune en milieu suffisamment acide et bleu en milieu suffisamment basique. La phénolphtaléine est incolore sous sa zone de virage et rose au-dessus. Le chou rouge est un exemple d'indicateur naturel."
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "Ne pas affirmer qu'une couleur d'indicateur donne toujours un pH exact. Ne pas conclure qu'une solution est acide simplement parce que la phénolphtaléine est incolore. Ne pas confondre la zone de virage avec une valeur unique de pH. Ne pas supposer que l'équivalence d'un titrage correspond toujours à pH 7."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un indicateur coloré acido-basique ? Donne un exemple naturel et un exemple artificiel.",
        correction: "Un indicateur coloré acido-basique est une substance dont la couleur dépend du pH de la solution. Exemple naturel : le jus de chou rouge. Exemple artificiel : le bleu de bromothymol, ou BBT."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une solution rend le BBT jaune. Que peut-on dire de son pH et de sa nature ?",
        correction: "Le BBT est jaune en dessous de sa zone de virage. Le pH est donc inférieur à environ 6,0. Il est inférieur à 7 : la solution est acide."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une solution rend le BBT bleu. Est-elle acide ou basique ? Justifie.",
        correction: "Le BBT est bleu au-dessus de sa zone de virage, soit pour un pH supérieur à environ 7,6. Le pH est donc supérieur à 7 : la solution est basique."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "La phénolphtaléine est incolore dans une solution. Peut-on affirmer que cette solution est acide ? Explique.",
        correction: "Non. La phénolphtaléine est incolore pour un pH inférieur à environ 8,2. La solution peut donc être acide, neutre ou légèrement basique. Un autre test est nécessaire pour conclure."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On observe une teinte verte avec le BBT. Peut-on conclure que le pH vaut exactement 7 ?",
        correction: "Non. Le vert est une teinte observée dans la zone de transition du BBT, autour de pH 7. Cette observation ne donne pas une valeur exacte. Un pH-mètre permettrait une mesure plus précise."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution rend le rouge de méthyle rouge. Indique l'intervalle de pH correspondant et la nature de la solution.",
        correction: "Le rouge de méthyle est rouge en dessous de sa zone de virage, qui commence à pH 4,2. On déduit donc pH < 4,2. Comme ce pH est inférieur à 7, la solution est acide."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une solution rend le BBT bleu et la phénolphtaléine incolore. Encadre son pH à l'aide du tableau du cours.",
        correction: "Le BBT bleu indique pH > 7,6. La phénolphtaléine incolore indique pH < 8,2. En combinant les deux informations : 7,6 < pH < 8,2. La solution est donc basique."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une solution rend le BBT jaune et le rouge de méthyle jaune. Ces observations sont-elles compatibles avec les données du cours ?",
        correction: "Le BBT jaune indique pH < 6,0. Le rouge de méthyle jaune indique pH > 6,3. Aucun pH ne peut satisfaire simultanément ces deux conditions. Les observations sont incompatibles avec les données du tableau : il faut vérifier les tests."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Explique comment utiliser du papier pH pour estimer le pH d'une solution et préciser sa nature.",
        correction: "On place un morceau de papier pH sur un support propre, puis on y dépose une goutte de solution avec une baguette propre. On compare la couleur à l'échelle fournie et on lit le pH approximatif. À 25 °C, si l'estimation est suffisamment inférieure à 7, la solution est acide ; si elle est suffisamment supérieure à 7, elle est basique. Une lecture proche de 7 indique une solution approximativement neutre, sans prouver que le pH vaut exactement 7."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Exercice type BEPC. Lors d'un titrage acide-base, on choisit un indicateur dont la zone de virage est comprise dans le saut de pH au voisinage de l'équivalence. 1. Qu'est-ce que l'équivalence ? 2. Pourquoi ajoute-t-on la solution titrante goutte à goutte à son approche ? 3. Le changement de couleur donne-t-il obligatoirement l'équivalence exacte ?",
        correction: "1. À l'équivalence, les réactifs ont été introduits dans les proportions prévues par l'équation de la réaction. 2. L'ajout goutte à goutte permet de mieux repérer le changement de couleur et de limiter le dépassement de l'équivalence. 3. Non. Avec un indicateur bien choisi, le virage permet un repérage approximatif de l'équivalence ; il ne correspond pas obligatoirement à l'équivalence exacte."
      }
    ]
  }
]);
