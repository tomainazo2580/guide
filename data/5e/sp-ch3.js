enregistrerChapitres("5e", "sp", [
  {
    id: 3,
    titre: "Chapitre 3 : La masse volumique, la densité et la flottaison",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Comparer la masse et le volume",
        blocs: [
          {
            type: "texte",
            texte: "Dans les chapitres précédents, nous avons appris à mesurer la masse et le volume. Ces deux grandeurs sont différentes, mais on peut les relier pour étudier une substance."
          },
          {
            type: "exemple",
            texte: "Un morceau de bois et un morceau de fer de même volume n’ont généralement pas la même masse. Le morceau de fer a une masse plus grande."
          },
          {
            type: "texte",
            texte: "La masse volumique permet de savoir quelle masse correspond à un volume donné d’une substance."
          }
        ]
      },
      {
        id: 2,
        titre: "La masse volumique",
        blocs: [
          {
            type: "definition",
            texte: "La masse volumique d’une substance est le quotient de sa masse par son volume."
          },
          {
            type: "regle",
            texte: "Masse volumique = masse ÷ volume. On écrit : ρ = m / V. La lettre grecque ρ se lit « rhô »."
          },
          {
            type: "tableau",
            entetes: ["Grandeur", "Symbole", "Exemples d’unités"],
            lignes: [
              ["Masse", "m", "kg ou g"],
              ["Volume", "V", "m³ ou cm³"],
              ["Masse volumique", "ρ", "kg/m³ ou g/cm³"]
            ]
          },
          {
            type: "exemple",
            texte: "Un échantillon a une masse de 60 g et un volume de 20 cm³. Sa masse volumique est : ρ = 60 ÷ 20 = 3 g/cm³."
          },
          {
            type: "remarque",
            texte: "Une masse volumique de 3 g/cm³ signifie qu’un volume de 1 cm³ de cette substance a une masse de 3 g."
          },
          {
            type: "remarque",
            texte: "Pour une même substance homogène, la masse volumique est la même pour des échantillons de tailles différentes, dans les mêmes conditions, notamment de température."
          }
        ]
      },
      {
        id: 3,
        titre: "Calculer une masse volumique",
        blocs: [
          {
            type: "methode",
            texte: "1. Relever la masse m et le volume V.\n2. Vérifier les unités.\n3. Diviser la masse par le volume : ρ = m / V.\n4. Écrire le résultat avec son unité."
          },
          {
            type: "exemple",
            texte: "Un liquide a une masse de 160 g et un volume de 200 mL. Sa masse volumique est : ρ = 160 ÷ 200 = 0,8 g/mL."
          },
          {
            type: "regle",
            texte: "Comme 1 mL = 1 cm³, une masse volumique de 0,8 g/mL peut aussi s’écrire 0,8 g/cm³."
          },
          {
            type: "exemple",
            texte: "Un solide a une masse de 2 kg et un volume de 0,001 m³. Sa masse volumique est : ρ = 2 ÷ 0,001 = 2 000 kg/m³."
          },
          {
            type: "regle",
            texte: "1 g/cm³ = 1 000 kg/m³."
          },
          {
            type: "remarque",
            texte: "Il faut conserver des unités compatibles : avec une masse en g et un volume en cm³, le résultat est en g/cm³ ; avec une masse en kg et un volume en m³, il est en kg/m³."
          }
        ]
      },
      {
        id: 4,
        titre: "Calculer une masse ou un volume",
        blocs: [
          {
            type: "texte",
            texte: "La relation de la masse volumique peut aussi servir à calculer une masse ou un volume lorsque les deux autres grandeurs sont connues."
          },
          {
            type: "regle",
            texte: "Pour calculer la masse : m = ρ × V."
          },
          {
            type: "exemple",
            texte: "Une substance a une masse volumique de 2 g/cm³. Pour un volume de 15 cm³, sa masse est : m = 2 × 15 = 30 g."
          },
          {
            type: "regle",
            texte: "Pour calculer le volume : V = m / ρ."
          },
          {
            type: "exemple",
            texte: "Un échantillon a une masse de 45 g et une masse volumique de 3 g/cm³. Son volume est : V = 45 ÷ 3 = 15 cm³."
          },
          {
            type: "methode",
            texte: "Avant de calculer, repérer la grandeur demandée, choisir la relation adaptée et vérifier que les unités de la masse volumique correspondent à celles de la masse ou du volume."
          }
        ]
      },
      {
        id: 5,
        titre: "La densité par rapport à l’eau",
        blocs: [
          {
            type: "definition",
            texte: "La densité d’un solide ou d’un liquide par rapport à l’eau est le quotient de sa masse volumique par celle de l’eau : d = ρ de la substance / ρ de l’eau."
          },
          {
            type: "regle",
            texte: "Pour calculer la densité, les deux masses volumiques doivent être exprimées dans la même unité. La densité n’a pas d’unité."
          },
          {
            type: "texte",
            texte: "Dans les calculs simples, on prend généralement pour masse volumique de l’eau environ 1 g/cm³, soit 1 000 kg/m³."
          },
          {
            type: "exemple",
            texte: "Une huile a une masse volumique de 0,8 g/cm³. Avec ρ de l’eau = 1 g/cm³, sa densité est : d = 0,8 ÷ 1 = 0,8."
          },
          {
            type: "exemple",
            texte: "Une substance a une masse volumique de 2 700 kg/m³. Avec ρ de l’eau = 1 000 kg/m³, sa densité est : d = 2 700 ÷ 1 000 = 2,7."
          },
          {
            type: "remarque",
            texte: "La densité compare deux masses volumiques : ce n’est pas la même grandeur que la masse volumique."
          }
        ]
      },
      {
        id: 6,
        titre: "Flottaison et masses volumiques",
        blocs: [
          {
            type: "texte",
            texte: "Lorsqu’on place un objet dans un liquide, il peut flotter ou couler. Pour prévoir son comportement, on compare sa masse volumique moyenne à celle du liquide."
          },
          {
            type: "regle",
            texte: "Dans un liquide, un objet flotte si sa masse volumique moyenne est inférieure à celle du liquide. Si elle est supérieure, l’objet coule. Si les deux masses volumiques sont égales, l’objet peut rester en équilibre entièrement immergé."
          },
          {
            type: "exemple",
            texte: "Un objet a une masse volumique moyenne de 0,7 g/cm³. Dans l’eau, de masse volumique environ égale à 1 g/cm³, il flotte car 0,7 < 1."
          },
          {
            type: "exemple",
            texte: "Un objet a une masse volumique moyenne de 2,5 g/cm³. Dans l’eau, il coule car 2,5 > 1."
          },
          {
            type: "remarque",
            texte: "Pour un objet creux, il faut considérer la masse et le volume de l’objet entier, y compris ses parties creuses. Un bateau en métal peut flotter car sa masse volumique moyenne est inférieure à celle de l’eau."
          },
          {
            type: "remarque",
            texte: "On compare toujours l’objet au liquide dans lequel il est placé. Un même objet peut flotter dans un liquide et couler dans un autre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Quelle relation permet de calculer la masse volumique ?",
        correction: "La masse volumique est égale à la masse divisée par le volume : ρ = m / V."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "La densité a-t-elle une unité ?",
        correction: "Non. La densité est le quotient de deux masses volumiques exprimées dans la même unité : elle n’a donc pas d’unité."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète : la masse volumique de l’eau est approximativement égale à … g/cm³, soit … kg/m³.",
        correction: "La masse volumique de l’eau est approximativement égale à 1 g/cm³, soit 1 000 kg/m³."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Un solide a une masse de 80 g et un volume de 20 cm³. Calcule sa masse volumique.",
        correction: "ρ = m / V = 80 ÷ 20 = 4 g/cm³."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Un liquide a une masse de 180 g pour un volume de 200 mL. Calcule sa masse volumique en g/mL.",
        correction: "ρ = m / V = 180 ÷ 200 = 0,9 g/mL."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Une substance a une masse volumique de 0,6 g/cm³. Calcule sa densité par rapport à l’eau, en prenant ρ de l’eau = 1 g/cm³.",
        correction: "d = ρ de la substance / ρ de l’eau = 0,6 ÷ 1 = 0,6. La densité n’a pas d’unité."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Un objet a une masse volumique moyenne de 1,2 g/cm³. Flotte-t-il ou coule-t-il dans l’eau ? On prend ρ de l’eau = 1 g/cm³.",
        correction: "Il coule, car sa masse volumique moyenne de 1,2 g/cm³ est supérieure à celle de l’eau, 1 g/cm³."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Un solide a une masse volumique de 3 g/cm³ et un volume de 10 cm³. Calcule sa masse.",
        correction: "m = ρ × V = 3 × 10 = 30 g."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Un liquide a une masse de 120 g et une masse volumique de 0,8 g/mL. Calcule son volume.",
        correction: "V = m / ρ = 120 ÷ 0,8 = 150 mL."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une éprouvette contient 30 mL d’eau. Après immersion complète d’un caillou, elle indique 50 mL. La masse du caillou est de 50 g. Calcule sa masse volumique.",
        correction: "Volume du caillou : 50 − 30 = 20 mL = 20 cm³.\nMasse volumique : ρ = 50 ÷ 20 = 2,5 g/cm³."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Un objet a une masse de 90 g et un volume de 120 cm³. Calcule sa masse volumique, puis indique s’il flotte dans l’eau. Prends ρ de l’eau = 1 g/cm³.",
        correction: "ρ = 90 ÷ 120 = 0,75 g/cm³.\nComme 0,75 < 1, la masse volumique moyenne de l’objet est inférieure à celle de l’eau : il flotte."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Un objet a une masse volumique moyenne de 0,9 g/cm³. On le place dans un liquide de masse volumique 0,8 g/cm³, puis dans un liquide de masse volumique 1,1 g/cm³. Que se passe-t-il dans chaque cas ?",
        correction: "Dans le premier liquide, 0,9 > 0,8 : l’objet coule.\nDans le second, 0,9 < 1,1 : il flotte.\nIl faut comparer la masse volumique de l’objet à celle de chaque liquide."
      }
    ]
  }
]);
