enregistrerChapitres("3e", "sp", [
  {
    id: 12,
    titre: "Chapitre 12 : Intensité du courant et tension électrique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le circuit électrique",
        blocs: [
          {
            type: "introduction",
            titre: "Du courant dans un circuit",
            texte: "Une lampe peut briller lorsqu'elle est reliée à une pile par des fils conducteurs. Pour comprendre son fonctionnement, il faut distinguer deux grandeurs électriques : l'intensité du courant et la tension."
          },
          {
            type: "definition",
            titre: "Circuit électrique",
            texte: "Un circuit électrique est un ensemble de composants reliés entre eux par des conducteurs. Une pile, une lampe et un interrupteur sont des exemples de composants, aussi appelés dipôles car ils possèdent deux bornes."
          },
          {
            type: "regle",
            titre: "Circuit ouvert ou fermé",
            texte: "Dans un circuit simple, le courant ne circule que si le circuit est fermé et comporte un générateur en fonctionnement. Lorsque l'interrupteur ouvre le circuit, le courant ne circule plus."
          },
          {
            type: "definition",
            titre: "Sens conventionnel du courant",
            texte: "À l'extérieur d'un générateur, on représente conventionnellement le courant comme allant de la borne positive vers la borne négative. Dans les fils métalliques, les électrons se déplacent en sens opposé."
          }
        ]
      },

      {
        id: 2,
        titre: "L'intensité du courant",
        blocs: [
          {
            type: "definition",
            titre: "Intensité",
            texte: "L'intensité du courant électrique indique l'importance du courant qui traverse un dipôle. On la note I. Son unité est l'ampère, de symbole A."
          },
          {
            type: "regle",
            titre: "Unités et conversions",
            texte: "On utilise aussi le milliampère, de symbole mA. 1 A = 1 000 mA et 1 mA = 0,001 A. Pour passer des ampères aux milliampères, on multiplie par 1 000. Pour passer des milliampères aux ampères, on divise par 1 000."
          },
          {
            type: "exemple",
            titre: "Exemples de conversion",
            texte: "0,25 A = 0,25 × 1 000 = 250 mA. Inversement, 35 mA = 35 ÷ 1 000 = 0,035 A."
          },
          {
            type: "definition",
            titre: "Mesure de l'intensité",
            texte: "On mesure l'intensité avec un ampèremètre. Il se branche en série dans la branche où l'on veut mesurer le courant : le courant de cette branche doit traverser l'appareil."
          },
          {
            type: "methode",
            titre: "Brancher un ampèremètre",
            texte: "1. Couper l'alimentation. 2. Ouvrir la branche à l'endroit choisi. 3. Insérer l'ampèremètre en série, en respectant les bornes et le type de courant. 4. Si la valeur est inconnue, commencer par le plus grand calibre adapté. 5. Fermer le circuit et lire la valeur avec son unité."
          },
          {
            type: "remarque",
            titre: "Attention au branchement",
            texte: "Ne branche jamais un ampèremètre directement aux bornes d'un générateur : cela peut provoquer un court-circuit et endommager le matériel. Pour un courant continu, on utilise les bornes adaptées de l'appareil, notamment COM et l'entrée A ou mA selon la mesure."
          }
        ]
      },

      {
        id: 3,
        titre: "La tension électrique",
        blocs: [
          {
            type: "definition",
            titre: "Tension",
            texte: "La tension électrique caractérise une différence électrique entre deux points d'un circuit. On la note U. Son unité est le volt, de symbole V."
          },
          {
            type: "definition",
            titre: "Mesure de la tension",
            texte: "On mesure la tension entre deux points avec un voltmètre. Il se branche en dérivation, c'est-à-dire directement aux bornes du dipôle étudié, sans ouvrir la branche qui contient ce dipôle."
          },
          {
            type: "schema",
            titre: "Mesurer l'intensité et la tension",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220' role='img' aria-label='Ampèremètre en série et voltmètre en dérivation aux bornes d’une lampe'><rect width='320' height='220' fill='white'/><path d='M50 65 L87 65 M123 65 L197 65 M233 65 L270 65 L270 170 L50 170 L50 65' fill='none' stroke='#334155' stroke-width='2.5'/><circle cx='105' cy='65' r='18' fill='white' stroke='#2563eb' stroke-width='2.5'/><text x='105' y='71' text-anchor='middle' font-size='18' fill='#1d4ed8'>A</text><circle cx='215' cy='65' r='18' fill='white' stroke='#334155' stroke-width='2.5'/><path d='M202 52 L228 78 M228 52 L202 78' stroke='#334155' stroke-width='2'/><path d='M180 65 L180 115 L197 115 M233 115 L250 115 L250 65' fill='none' stroke='#334155' stroke-width='2'/><circle cx='215' cy='115' r='18' fill='white' stroke='#047857' stroke-width='2.5'/><text x='215' y='121' text-anchor='middle' font-size='18' fill='#047857'>V</text><rect x='135' y='157' width='50' height='26' rx='4' fill='white' stroke='#334155' stroke-width='2'/><text x='160' y='175' text-anchor='middle' font-size='14' fill='#0f172a'>G</text><text x='105' y='28' text-anchor='middle' font-size='13' fill='#1d4ed8'>Ampèremètre</text><text x='215' y='28' text-anchor='middle' font-size='13' fill='#334155'>Lampe</text><text x='215' y='151' text-anchor='middle' font-size='13' fill='#047857'>Voltmètre</text><text x='160' y='207' text-anchor='middle' font-size='13' fill='#475569'>G : générateur basse tension</text></svg>",
            legende: "L'ampèremètre A est en série avec la lampe : le courant de la branche le traverse. Le voltmètre V est en dérivation aux bornes de la lampe. Montage scolaire sous surveillance, avec une source basse tension adaptée."
          },
          {
            type: "methode",
            titre: "Brancher un voltmètre",
            texte: "1. Choisir la fonction voltmètre et le type de courant adapté. 2. Brancher le voltmètre aux deux bornes du dipôle étudié. 3. Si la valeur est inconnue, commencer par le plus grand calibre adapté. 4. Lire la valeur et noter son unité. En courant continu, une valeur négative peut indiquer que les bornes du voltmètre sont inversées."
          },
          {
            type: "regle",
            titre: "Conversions",
            texte: "1 kV = 1 000 V et 1 V = 1 000 mV. Par exemple, 0,006 kV = 6 V et 500 mV = 0,5 V."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "L'intensité se mesure en ampères avec un ampèremètre branché en série. La tension se mesure en volts avec un voltmètre branché en dérivation."
          }
        ]
      },

      {
        id: 4,
        titre: "Circuit en série",
        blocs: [
          {
            type: "definition",
            titre: "Montage en série",
            texte: "Dans un circuit en série, les dipôles sont placés les uns à la suite des autres dans une seule boucle. Le courant traverse successivement chaque dipôle."
          },
          {
            type: "regle",
            titre: "Intensité en série",
            texte: "Dans un circuit en série, l'intensité est la même en tout point de la boucle : I = I₁ = I₂."
          },
          {
            type: "regle",
            titre: "Tensions en série",
            texte: "Dans une boucle simple comprenant un générateur et deux récepteurs en série, la tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs : U = U₁ + U₂."
          },
          {
            type: "exemple",
            titre: "Calcul d'une tension",
            texte: "Un générateur fournit une tension de 9 V. Deux lampes sont en série. La tension aux bornes de la première est 4 V. On a 9 = 4 + U₂, donc U₂ = 9 − 4 = 5 V."
          },
          {
            type: "remarque",
            titre: "Si un dipôle est débranché",
            texte: "Si l'on ouvre un circuit en série, le courant est interrompu dans toute la boucle. Les lampes de ce circuit s'éteignent."
          }
        ]
      },

      {
        id: 5,
        titre: "Circuit en dérivation",
        blocs: [
          {
            type: "definition",
            titre: "Branches et nœuds",
            texte: "Dans un circuit en dérivation, le courant peut suivre plusieurs branches. Un nœud est un point où se rejoignent au moins trois conducteurs. Les dipôles placés entre les mêmes deux nœuds sont en dérivation."
          },
          {
            type: "schema",
            titre: "Série et dérivation",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 340' role='img' aria-label='Deux lampes en série puis deux lampes en dérivation'><rect width='320' height='340' fill='white'/><text x='160' y='23' text-anchor='middle' font-size='16' fill='#0f172a'>Deux lampes en série</text><path d='M45 55 L92 55 M128 55 L192 55 M228 55 L275 55 L275 120 L45 120 Z' fill='none' stroke='#334155' stroke-width='2.5'/><circle cx='110' cy='55' r='18' fill='white' stroke='#334155' stroke-width='2'/><path d='M97 42 L123 68 M123 42 L97 68' stroke='#334155' stroke-width='2'/><circle cx='210' cy='55' r='18' fill='white' stroke='#334155' stroke-width='2'/><path d='M197 42 L223 68 M223 42 L197 68' stroke='#334155' stroke-width='2'/><rect x='137' y='108' width='46' height='24' rx='4' fill='white' stroke='#334155' stroke-width='2'/><text x='160' y='125' text-anchor='middle' font-size='14'>G</text><text x='160' y='154' text-anchor='middle' font-size='14' fill='#1d4ed8'>I = I₁ = I₂ ; U = U₁ + U₂</text><text x='160' y='185' text-anchor='middle' font-size='16' fill='#0f172a'>Deux lampes en dérivation</text><path d='M45 215 L142 215 M178 215 L275 215 L275 294 L45 294 Z M45 254 L142 254 M178 254 L275 254' fill='none' stroke='#334155' stroke-width='2.5'/><circle cx='160' cy='215' r='18' fill='white' stroke='#334155' stroke-width='2'/><path d='M147 202 L173 228 M173 202 L147 228' stroke='#334155' stroke-width='2'/><circle cx='160' cy='254' r='18' fill='white' stroke='#334155' stroke-width='2'/><path d='M147 241 L173 267 M173 241 L147 267' stroke='#334155' stroke-width='2'/><circle cx='45' cy='254' r='3' fill='#334155'/><circle cx='275' cy='254' r='3' fill='#334155'/><rect x='137' y='282' width='46' height='24' rx='4' fill='white' stroke='#334155' stroke-width='2'/><text x='160' y='299' text-anchor='middle' font-size='14'>G</text><text x='160' y='330' text-anchor='middle' font-size='14' fill='#047857'>U = U₁ = U₂ ; I = I₁ + I₂</text></svg>",
            legende: "G représente le générateur et chaque cercle barré représente une lampe. En série, les lampes sont dans une seule boucle. En dérivation, chacune est branchée entre les mêmes deux nœuds. Les relations indiquées concernent ces montages simples."
          },
          {
            type: "regle",
            titre: "Tension en dérivation",
            texte: "Deux dipôles branchés entre les mêmes deux nœuds ont la même tension à leurs bornes. Si deux lampes sont directement en dérivation aux bornes d'un générateur : U = U₁ = U₂."
          },
          {
            type: "regle",
            titre: "Loi des intensités",
            texte: "À un nœud, la somme des intensités des courants qui arrivent est égale à la somme des intensités des courants qui repartent. Si le courant principal se partage dans deux branches : I = I₁ + I₂."
          },
          {
            type: "exemple",
            titre: "Calcul d'une intensité",
            texte: "Le courant principal a une intensité I = 0,50 A. Il se partage dans deux branches. Dans la première, I₁ = 0,20 A. Alors I₂ = I − I₁ = 0,50 − 0,20 = 0,30 A."
          },
          {
            type: "remarque",
            titre: "Ouverture d'une branche",
            texte: "Si une seule branche contenant une lampe est ouverte, le courant peut encore circuler dans une autre branche restée fermée. Cette propriété explique notamment l'intérêt des branchements en dérivation."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthode et sécurité",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre un exercice",
            texte: "1. Repérer si les dipôles sont en série ou en dérivation. 2. Relever les valeurs connues et leurs unités. 3. Convertir les valeurs dans une même unité si nécessaire. 4. Choisir la loi adaptée. 5. Écrire la relation, remplacer les valeurs et calculer. 6. Donner le résultat avec son unité."
          },
          {
            type: "exemple",
            titre: "Attention aux unités",
            texte: "Dans une dérivation, I = 0,6 A et I₁ = 200 mA. On convertit d'abord : 200 mA = 0,2 A. Donc I₂ = 0,6 − 0,2 = 0,4 A, soit 400 mA."
          },
          {
            type: "regle",
            titre: "Sécurité électrique",
            texte: "Ne touche jamais une prise ni un fil dénudé. Ne réalise pas d'expérience avec le courant du secteur. Pour les montages scolaires, utilise uniquement une source basse tension adaptée, sous la surveillance de l'enseignant. Coupe l'alimentation avant de modifier un circuit."
          },
          {
            type: "remarque",
            titre: "Court-circuit",
            texte: "Un court-circuit peut se produire lorsque les bornes d'un générateur sont reliées presque directement par un conducteur. Le courant peut alors devenir très important, provoquer un échauffement et détériorer le matériel."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Donne le nom, le symbole et l'unité des deux grandeurs électriques étudiées dans ce chapitre.",
        correction: "L'intensité du courant se note I et s'exprime en ampères, de symbole A. La tension électrique se note U et s'exprime en volts, de symbole V."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel appareil mesure l'intensité ? Comment doit-il être branché ? Quel appareil mesure la tension ? Comment doit-il être branché ?",
        correction: "L'ampèremètre mesure l'intensité : il se branche en série dans la branche étudiée. Le voltmètre mesure la tension : il se branche en dérivation aux bornes du dipôle étudié."
      },
      {
        niveau: 1,
        points: 3,
        enonce: "Convertis : a) 0,45 A en mA ; b) 75 mA en A ; c) 2,5 V en mV.",
        correction: "a) 0,45 A = 0,45 × 1 000 = 450 mA. b) 75 mA = 75 ÷ 1 000 = 0,075 A. c) 2,5 V = 2,5 × 1 000 = 2 500 mV."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une pile et deux lampes sont montées en série. L'intensité traversant la première lampe est 0,18 A. Quelle est l'intensité traversant la deuxième lampe ? Justifie.",
        correction: "Dans un circuit en série, l'intensité est la même en tout point. La deuxième lampe est donc traversée par une intensité de 0,18 A, soit 180 mA."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux lampes sont montées en série aux bornes d'un générateur de 12 V. La tension aux bornes de la première est 7 V. Calcule celle aux bornes de la deuxième.",
        correction: "Dans cette boucle : U = U₁ + U₂. Donc U₂ = U − U₁ = 12 − 7 = 5 V. La tension aux bornes de la deuxième lampe est 5 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux lampes sont branchées en dérivation directement aux bornes d'un générateur de 6 V. Quelle est la tension aux bornes de chaque lampe ?",
        correction: "Les deux lampes sont branchées entre les mêmes bornes que le générateur. Elles ont donc la même tension : U₁ = U₂ = 6 V."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Dans un circuit en dérivation, l'intensité principale vaut 0,8 A. Le courant dans la première branche vaut 0,3 A. Calcule l'intensité dans la deuxième branche.",
        correction: "La loi des intensités donne I = I₁ + I₂. Donc I₂ = I − I₁ = 0,8 − 0,3 = 0,5 A."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un courant de 650 mA se partage dans deux branches. L'intensité dans la première branche est 0,25 A. Calcule l'intensité dans la seconde branche en mA.",
        correction: "On convertit d'abord 0,25 A en milliampères : 0,25 A = 250 mA. D'après la loi des intensités, I₂ = I − I₁ = 650 − 250 = 400 mA. On peut aussi écrire I₂ = 0,40 A."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un élève branche directement un ampèremètre aux bornes d'une pile. Pourquoi ce montage est-il dangereux pour le matériel ? Comment doit-il brancher l'appareil pour mesurer l'intensité dans une lampe ?",
        correction: "L'ampèremètre branché directement aux bornes de la pile peut provoquer un court-circuit : le courant peut devenir très important et endommager l'appareil ou la pile. Pour mesurer le courant dans la lampe, il faut insérer l'ampèremètre en série avec elle, dans le circuit, en utilisant les bornes et le calibre adaptés."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Exercice type BEPC. Un générateur de 12 V alimente deux branches en dérivation. La première contient une lampe L₁. La seconde contient deux lampes L₂ et L₃ en série. L'intensité principale est 0,70 A et celle de la première branche est 300 mA. La tension aux bornes de L₂ est 5 V. 1. Calcule l'intensité dans la seconde branche. 2. Donne la tension aux bornes de L₁. 3. Calcule la tension aux bornes de L₃.",
        correction: "1. On convertit : 300 mA = 0,30 A. À la séparation des branches, I = I₁ + I₂. Donc I₂ = 0,70 − 0,30 = 0,40 A. 2. L₁ est directement en dérivation aux bornes du générateur : sa tension est 12 V. 3. La seconde branche est elle aussi soumise à 12 V. Ses deux lampes étant en série, U₂ + U₃ = 12 V. Donc U₃ = 12 − 5 = 7 V."
      }
    ]
  }
]);
