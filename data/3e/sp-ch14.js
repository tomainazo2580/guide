enregistrerChapitres("3e", "sp", [
  {
    id: 14,
    titre: "Chapitre 14 : Puissance et énergie électriques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "La puissance électrique",
        blocs: [
          {
            type: "introduction",
            titre: "Comparer des appareils",
            texte: "Une lampe, un ventilateur et un fer à repasser ne consomment pas l'énergie électrique au même rythme. La puissance électrique permet de caractériser ce rythme."
          },
          {
            type: "definition",
            titre: "Puissance",
            texte: "La puissance électrique se note P. Son unité est le watt, de symbole W. Plus la puissance consommée par un appareil est grande, plus l'énergie qu'il consomme pendant une même durée est grande."
          },
          {
            type: "regle",
            titre: "Unités de puissance",
            texte: "On utilise aussi le kilowatt, de symbole kW. 1 kW = 1 000 W. Pour convertir des kilowatts en watts, on multiplie par 1 000. Pour convertir des watts en kilowatts, on divise par 1 000."
          },
          {
            type: "exemple",
            titre: "Conversions",
            texte: "1,5 kW = 1,5 × 1 000 = 1 500 W. De même, 75 W = 75 ÷ 1 000 = 0,075 kW."
          },
          {
            type: "definition",
            titre: "Puissance nominale",
            texte: "La puissance nominale est la puissance indiquée par le fabricant pour le fonctionnement prévu de l'appareil, notamment à sa tension nominale. La puissance réellement consommée peut varier selon les conditions d'utilisation."
          }
        ]
      },

      {
        id: 2,
        titre: "Calcul de la puissance électrique",
        blocs: [
          {
            type: "regle",
            titre: "Relation en courant continu",
            texte: "Pour un dipôle en courant continu, la puissance électrique P est donnée par : P = U × I, où U est la tension à ses bornes en volts et I l'intensité qui le traverse en ampères. La puissance est alors exprimée en watts."
          },
          {
            type: "tableau",
            titre: "Grandeurs et unités",
            entetes: ["Grandeur", "Symbole", "Unité"],
            lignes: [
              ["Puissance électrique", "P", "watt (W)"],
              ["Tension électrique", "U", "volt (V)"],
              ["Intensité du courant", "I", "ampère (A)"]
            ]
          },
          {
            type: "regle",
            titre: "Formules à connaître",
            texte: "P = U × I. Si l'on cherche l'intensité : I = P ÷ U. Si l'on cherche la tension : U = P ÷ I. On utilise les deux dernières écritures lorsque le diviseur est différent de zéro."
          },
          {
            type: "exemple",
            titre: "Calcul d'une puissance",
            texte: "Une lampe est soumise à une tension de 6 V et traversée par une intensité de 0,5 A. Sa puissance électrique est : P = U × I = 6 × 0,5 = 3 W."
          },
          {
            type: "remarque",
            titre: "Cas du courant alternatif",
            texte: "En courant alternatif, notamment pour les appareils alimentés par le secteur, la puissance active n'est pas toujours égale au simple produit U × I. Dans ce chapitre, les calculs avec P = U × I concernent les situations en courant continu indiquées dans les énoncés."
          }
        ]
      },

      {
        id: 3,
        titre: "L'énergie électrique",
        blocs: [
          {
            type: "definition",
            titre: "Énergie consommée",
            texte: "Un appareil qui fonctionne pendant une durée donnée consomme de l'énergie électrique. Si sa puissance reste constante, l'énergie consommée est égale au produit de sa puissance par la durée de fonctionnement : E = P × t."
          },
          {
            type: "schema",
            titre: "De la puissance à l'énergie",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220' role='img' aria-label='Énergie égale à la puissance multipliée par la durée'><rect width='320' height='220' fill='white'/><rect x='15' y='20' width='132' height='55' rx='8' fill='#dbeafe'/><text x='81' y='43' text-anchor='middle' font-size='15' fill='#0f172a'>Puissance P</text><text x='81' y='64' text-anchor='middle' font-size='13' fill='#1d4ed8'>en W ou en kW</text><text x='160' y='53' text-anchor='middle' font-size='22' fill='#334155'>×</text><rect x='173' y='20' width='132' height='55' rx='8' fill='#fef3c7'/><text x='239' y='43' text-anchor='middle' font-size='15' fill='#0f172a'>Durée t</text><text x='239' y='64' text-anchor='middle' font-size='13' fill='#92400e'>en s ou en h</text><path d='M160 82 L160 103 M154 97 L160 103 L166 97' fill='none' stroke='#475569' stroke-width='2'/><rect x='45' y='108' width='230' height='53' rx='8' fill='#dcfce7'/><text x='160' y='131' text-anchor='middle' font-size='16' fill='#0f172a'>Énergie : E = P × t</text><text x='160' y='151' text-anchor='middle' font-size='13' fill='#047857'>si la puissance est constante</text><text x='160' y='187' text-anchor='middle' font-size='14' fill='#334155'>W × s → J</text><text x='160' y='207' text-anchor='middle' font-size='14' fill='#334155'>kW × h → kWh</text></svg>",
            legende: "Pour une puissance constante, l'énergie dépend de la puissance et de la durée. On obtient des joules avec des watts et des secondes, ou des kilowattheures avec des kilowatts et des heures."
          },
          {
            type: "regle",
            titre: "En joules",
            texte: "Si P est exprimée en watts et t en secondes, l'énergie E est exprimée en joules, de symbole J. Ainsi : 1 J = 1 W × 1 s."
          },
          {
            type: "exemple",
            titre: "Calcul en joules",
            texte: "Une lampe de puissance constante 10 W fonctionne pendant 2 minutes. On convertit d'abord : 2 min = 120 s. Donc E = P × t = 10 × 120 = 1 200 J."
          },
          {
            type: "regle",
            titre: "En kilowattheures",
            texte: "Si P est exprimée en kilowatts et t en heures, l'énergie E est exprimée en kilowattheures, de symbole kWh. Le kilowattheure est une unité d'énergie, et non de puissance."
          },
          {
            type: "exemple",
            titre: "Calcul en kilowattheures",
            texte: "Un appareil de 1,5 kW fonctionne pendant 2 h à puissance constante. Son énergie consommée est E = 1,5 × 2 = 3 kWh."
          },
          {
            type: "regle",
            titre: "Conversion entre kWh et J",
            texte: "1 kW = 1 000 W et 1 h = 3 600 s. Donc 1 kWh = 1 000 W × 3 600 s = 3 600 000 J, soit 3,6 × 10⁶ J."
          }
        ]
      },

      {
        id: 4,
        titre: "Calculer une consommation",
        blocs: [
          {
            type: "methode",
            titre: "Méthode",
            texte: "1. Relever la puissance et la durée de fonctionnement. 2. Choisir l'unité d'énergie demandée. 3. Pour obtenir des joules, utiliser les watts et les secondes. Pour obtenir des kWh, utiliser les kilowatts et les heures. 4. Calculer E = P × t. 5. Indiquer l'unité du résultat."
          },
          {
            type: "exemple",
            titre: "Consommation d'une lampe",
            texte: "Une lampe de 20 W fonctionne 5 h à puissance constante. On convertit : 20 W = 0,020 kW. Donc E = 0,020 × 5 = 0,10 kWh."
          },
          {
            type: "exemple",
            titre: "Plusieurs appareils",
            texte: "Deux lampes de 20 W fonctionnent chacune pendant 5 h à leur puissance nominale. Une lampe consomme 0,020 × 5 = 0,10 kWh. Les deux lampes consomment ensemble 2 × 0,10 = 0,20 kWh."
          },
          {
            type: "remarque",
            titre: "Durée et puissance",
            texte: "La puissance seule ne suffit pas pour connaître l'énergie consommée : il faut aussi connaître la durée de fonctionnement. Un appareil moins puissant peut consommer plus d'énergie s'il fonctionne beaucoup plus longtemps."
          }
        ]
      },

      {
        id: 5,
        titre: "Coût et économie d'énergie",
        blocs: [
          {
            type: "definition",
            titre: "Coût de l'énergie",
            texte: "Si le prix d'un kilowattheure est connu et constant, on peut estimer le coût de l'énergie par : coût = énergie consommée en kWh × prix d'un kWh. Cette estimation ne comprend pas nécessairement les taxes ou les autres frais."
          },
          {
            type: "exemple",
            titre: "Exemple de coût",
            texte: "Un appareil consomme 3 kWh. Si l'on suppose un prix de 800 Ar par kWh, le coût de l'énergie est 3 × 800 = 2 400 Ar. Le prix utilisé ici est une donnée fictive pour l'exercice."
          },
          {
            type: "regle",
            titre: "Réduire la consommation",
            texte: "Pour réduire l'énergie consommée, on peut limiter la durée d'utilisation, éteindre les appareils inutilisés et choisir des appareils adaptés à ses besoins. Il faut aussi comparer leur consommation dans des conditions d'utilisation équivalentes."
          }
        ]
      },

      {
        id: 6,
        titre: "Puissance dissipée par une résistance",
        blocs: [
          {
            type: "definition",
            titre: "Effet Joule",
            texte: "Lorsqu'un courant traverse un conducteur, une partie de l'énergie électrique peut être transformée en énergie thermique : c'est l'effet Joule. Cet effet est recherché dans certains appareils chauffants, mais un échauffement excessif peut être dangereux."
          },
          {
            type: "regle",
            titre: "Conducteur ohmique",
            texte: "Pour un conducteur ohmique en courant continu, on combine P = U × I et U = R × I. On obtient P = R × I². Si R est différent de zéro, on peut aussi écrire P = U² ÷ R."
          },
          {
            type: "exemple",
            titre: "Puissance dissipée",
            texte: "Une résistance de 10 Ω est traversée par un courant de 0,5 A. P = R × I² = 10 × 0,5² = 10 × 0,25 = 2,5 W."
          },
          {
            type: "regle",
            titre: "Sécurité",
            texte: "Ne réalise pas d'expérience sur une prise ou avec le courant du secteur. Utilise seulement du matériel basse tension adapté sous surveillance. Une résistance peut chauffer : ne la touche pas immédiatement après son fonctionnement."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Donne le symbole et l'unité de la puissance électrique. Le kWh est-il une unité de puissance ou d'énergie ?",
        correction: "La puissance se note P et s'exprime en watts, de symbole W. Le kilowattheure, noté kWh, est une unité d'énergie."
      },
      {
        niveau: 1,
        points: 3,
        enonce: "Convertis : a) 2 kW en W ; b) 350 W en kW ; c) 3 min en secondes.",
        correction: "a) 2 kW = 2 × 1 000 = 2 000 W. b) 350 W = 350 ÷ 1 000 = 0,35 kW. c) 3 min = 3 × 60 = 180 s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "En courant continu, une lampe est soumise à 12 V et traversée par un courant de 0,25 A. Calcule sa puissance.",
        correction: "On utilise P = U × I. Donc P = 12 × 0,25 = 3 W."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un appareil fonctionne en courant continu sous 6 V et consomme une puissance de 9 W. Calcule l'intensité du courant.",
        correction: "Avec P = U × I, on obtient I = P ÷ U. Donc I = 9 ÷ 6 = 1,5 A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une lampe de puissance constante 15 W fonctionne pendant 4 min. Calcule l'énergie consommée en joules.",
        correction: "On convertit la durée : 4 min = 4 × 60 = 240 s. Puis E = P × t = 15 × 240 = 3 600 J."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un appareil de 800 W fonctionne à puissance constante pendant 3 h. Calcule son énergie consommée en kWh.",
        correction: "On convertit la puissance : 800 W = 0,8 kW. Donc E = P × t = 0,8 × 3 = 2,4 kWh."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Convertis une énergie de 2 kWh en joules.",
        correction: "Comme 1 kWh = 3 600 000 J, alors 2 kWh = 2 × 3 600 000 = 7 200 000 J, soit 7,2 × 10⁶ J."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Deux lampes de 25 W fonctionnent chacune pendant 4 h à puissance constante. Calcule l'énergie totale consommée en kWh.",
        correction: "Chaque lampe a une puissance de 25 W = 0,025 kW. Une lampe consomme E = 0,025 × 4 = 0,10 kWh. Les deux lampes consomment donc 2 × 0,10 = 0,20 kWh."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une résistance de 20 Ω est traversée par un courant continu de 0,5 A. Calcule la puissance dissipée par effet Joule.",
        correction: "Pour un conducteur ohmique, P = R × I². Donc P = 20 × 0,5² = 20 × 0,25 = 5 W."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice type BEPC. Trois lampes de 20 W fonctionnent chacune 5 h par jour pendant 30 jours, à puissance constante. 1. Calcule leur énergie totale consommée en kWh. 2. Estime son coût si le prix fictif est de 800 Ar par kWh. 3. Si chaque lampe fonctionne seulement 3 h par jour pendant les mêmes 30 jours, quelle énergie est économisée ?",
        correction: "1. Puissance totale : 3 × 20 = 60 W = 0,060 kW. Durée totale : 5 × 30 = 150 h. Énergie : E = 0,060 × 150 = 9 kWh. 2. Coût estimé : 9 × 800 = 7 200 Ar, hors autres frais éventuels. 3. Nouvelle durée : 3 × 30 = 90 h. Nouvelle énergie : 0,060 × 90 = 5,4 kWh. Énergie économisée : 9 − 5,4 = 3,6 kWh."
      }
    ]
  }
]);
