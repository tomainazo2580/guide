enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-forces-lois-newton",
    titre: "Chapitre 2 : Forces et lois de Newton",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch2-forces",
        titre: "1. Identifier et représenter les forces",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi un mouvement change-t-il ?",
            texte: "Une force modélise une action mécanique exercée sur un système. Elle peut modifier son mouvement ou le déformer. Pour étudier un mouvement, on commence par choisir le système puis par identifier les forces exercées sur lui."
          },
          {
            type: "definition",
            titre: "Force",
            texte: "Une force est représentée par un vecteur caractérisé par un point d'application, une direction, un sens et une intensité. Son intensité s'exprime en newtons, de symbole N."
          },
          {
            type: "definition",
            titre: "Actions de contact et à distance",
            texte: "Une action de contact nécessite un contact entre les objets, comme la réaction d'un support ou la tension d'un fil. Une action à distance peut s'exercer sans contact, comme l'attraction gravitationnelle."
          },
          {
            type: "regle",
            titre: "Poids",
            texte: "Près de la surface terrestre, le poids d'un objet de masse m est P⃗ = m g⃗. Sa direction est verticale, son sens est vers le bas et son intensité est P = mg. En unités SI, m est en kg, g en N/kg et P en N."
          },
          {
            type: "remarque",
            titre: "Masse et poids",
            texte: "La masse, exprimée en kilogrammes, caractérise la quantité de matière et l'inertie du système. Le poids est une force, exprimée en newtons. Sa valeur dépend de l'intensité de la pesanteur au lieu considéré."
          },
          {
            type: "regle",
            titre: "Réaction d'un support",
            texte: "Un support exerce une force de contact sur l'objet. On peut la décomposer en une composante normale au support et, s'il y a frottement, une composante tangentielle. Le frottement s'oppose au glissement relatif ou à sa tendance, mais son intensité n'est pas toujours connue d'avance."
          },
          {
            type: "schema",
            titre: "Bilan des forces sur un objet tiré horizontalement",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 280' role='img' aria-label='Bloc posé sur un support horizontal : poids vers le bas, réaction normale vers le haut, force de traction vers la droite et frottement vers la gauche.'><rect width='460' height='280' fill='white'/><defs><marker id='sp1ch2bleu' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#1769aa'/></marker><marker id='sp1ch2rouge' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><line x1='35' y1='180' x2='425' y2='180' stroke='#333' stroke-width='3'/><rect x='175' y='120' width='100' height='60' fill='#eef5fb' stroke='#333' stroke-width='2'/><line x1='225' y1='150' x2='225' y2='225' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch2rouge)'/><line x1='225' y1='180' x2='225' y2='65' stroke='#1769aa' stroke-width='3' marker-end='url(#sp1ch2bleu)'/><line x1='275' y1='150' x2='365' y2='150' stroke='#1769aa' stroke-width='3' marker-end='url(#sp1ch2bleu)'/><line x1='175' y1='180' x2='90' y2='180' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch2rouge)'/><text x='232' y='230' font-size='14' fill='#c43b35'>P⃗</text><text x='232' y='65' font-size='14' fill='#1769aa'>N⃗</text><text x='368' y='155' font-size='14' fill='#1769aa'>F⃗</text><text x='70' y='175' font-size='14' fill='#c43b35'>f⃗</text><text x='180' y='255' font-size='13'>support</text></svg>",
            legende: "Le bloc est tiré vers la droite et le frottement représenté s'oppose à son glissement ou à sa tendance à glisser vers la droite. P⃗ est le poids, N⃗ la composante normale, F⃗ la traction et f⃗ le frottement. Les longueurs des flèches sont illustratives."
          },
          {
            type: "methode",
            titre: "Faire un bilan des forces",
            texte: "1. Isoler mentalement le système. 2. Repérer les objets qui agissent sur lui. 3. Nommer et représenter chaque force exercée sur le système. 4. Choisir des axes utiles. Ne pas ajouter les forces que le système exerce sur d'autres objets."
          },
          {
            type: "exemple",
            titre: "Un objet suspendu",
            texte: "Une lampe immobile est suspendue à un fil vertical. Sur la lampe agissent son poids vers le bas et la force exercée par le fil vers le haut. Ce sont les forces à inclure dans le bilan de la lampe."
          }
        ]
      },
      {
        id: "sp1-ch2-premiere-loi",
        titre: "2. Première loi de Newton : principe d'inertie",
        blocs: [
          {
            type: "definition",
            titre: "Référentiel galiléen",
            texte: "Un référentiel galiléen est un référentiel dans lequel le principe d'inertie est vérifié. Pour de nombreux mouvements de courte durée près du sol, on assimile le référentiel terrestre à un référentiel galiléen."
          },
          {
            type: "regle",
            titre: "Principe d'inertie",
            texte: "Dans un référentiel galiléen, si la somme vectorielle des forces extérieures exercées sur un système est nulle, son centre de masse reste au repos ou poursuit un mouvement rectiligne uniforme. Réciproquement, si ce centre est au repos ou en mouvement rectiligne uniforme, la somme des forces extérieures est nulle."
          },
          {
            type: "exemple",
            titre: "Forces qui se compensent",
            texte: "Une caisse immobile sur un sol horizontal est soumise à son poids P⃗ et à la réaction normale N⃗, si aucun frottement n'est nécessaire. Ces forces se compensent : P⃗ + N⃗ = 0⃗."
          },
          {
            type: "remarque",
            titre: "Une force n'est pas nécessaire pour entretenir un mouvement uniforme",
            texte: "Dans un référentiel galiléen, un mouvement rectiligne uniforme est compatible avec une somme des forces nulle. Il faut une résultante non nulle pour modifier le vecteur vitesse, pas simplement pour maintenir le mouvement."
          }
        ]
      },
      {
        id: "sp1-ch2-deuxieme-loi",
        titre: "3. Deuxième loi de Newton",
        blocs: [
          {
            type: "regle",
            titre: "Relation fondamentale de la dynamique",
            texte: "Dans un référentiel galiléen, pour un système de masse constante m, la somme des forces extérieures vérifie ΣF⃗ₑₓₜ = m a⃗G, où a⃗G est l'accélération du centre de masse G. L'accélération a la même direction et le même sens que la résultante des forces."
          },
          {
            type: "remarque",
            titre: "Relation vectorielle",
            texte: "Les forces doivent être additionnées comme des vecteurs. Deux forces de sens opposés ne s'ajoutent pas simplement par leurs intensités : il faut tenir compte de leurs directions et de leurs sens."
          },
          {
            type: "exemple",
            titre: "Forces sur un axe",
            texte: "Un objet de masse 2 kg subit une force horizontale de 10 N vers la droite et un frottement de 4 N vers la gauche. Sur l'axe orienté vers la droite, la résultante horizontale vaut 10 − 4 = 6 N. Son accélération horizontale vaut a = 6/2 = 3 m/s²."
          },
          {
            type: "methode",
            titre: "Appliquer la deuxième loi",
            texte: "1. Choisir le système et un référentiel supposé galiléen. 2. Faire le bilan des forces extérieures. 3. Écrire ΣF⃗ₑₓₜ = m a⃗G. 4. Projeter sur les axes choisis en respectant les signes. 5. Résoudre et vérifier les unités."
          },
          {
            type: "exemple",
            titre: "Objet sur un plan horizontal",
            texte: "Un bloc de masse 2 kg est tiré horizontalement par une force de 10 N. Le frottement vaut 4 N, en sens opposé. Avec g = 10 N/kg et une accélération verticale nulle, la projection verticale donne N − mg = 0, donc N = 20 N. La projection horizontale donne 10 − 4 = 2a, donc a = 3 m/s²."
          }
        ]
      },
      {
        id: "sp1-ch2-troisieme-loi",
        titre: "4. Troisième loi de Newton : actions réciproques",
        blocs: [
          {
            type: "regle",
            titre: "Action et réaction",
            texte: "Si un objet A exerce sur un objet B une force F⃗A→B, alors B exerce sur A une force F⃗B→A = −F⃗A→B. Ces forces ont la même direction et la même intensité, mais des sens opposés."
          },
          {
            type: "remarque",
            titre: "Deux objets différents",
            texte: "Les deux forces d'une paire action-réaction s'exercent sur deux objets différents. Elles ne se compensent donc pas dans le bilan des forces appliquées à un seul de ces objets."
          },
          {
            type: "exemple",
            titre: "Livre et table",
            texte: "La table exerce une force sur le livre. En retour, le livre exerce une force opposée sur la table. Ces deux forces forment une paire action-réaction. Le poids du livre et la force de la table sur le livre ne forment pas cette paire, car ils s'exercent tous deux sur le livre."
          },
          {
            type: "schema",
            titre: "Deux actions réciproques",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 180' role='img' aria-label='Deux objets A et B en contact exercent des forces opposées : A pousse B vers la droite et B pousse A vers la gauche.'><rect width='460' height='180' fill='white'/><defs><marker id='sp1ch2action' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#1769aa'/></marker><marker id='sp1ch2reaction' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><rect x='150' y='55' width='80' height='70' fill='#eef5fb' stroke='#333' stroke-width='2'/><rect x='230' y='55' width='80' height='70' fill='#fff0ee' stroke='#333' stroke-width='2'/><line x1='230' y1='90' x2='345' y2='90' stroke='#1769aa' stroke-width='3' marker-end='url(#sp1ch2action)'/><line x1='230' y1='110' x2='115' y2='110' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch2reaction)'/><text x='180' y='75' font-size='15'>A</text><text x='260' y='75' font-size='15'>B</text><text x='320' y='78' font-size='13' fill='#1769aa'>A sur B</text><text x='62' y='132' font-size='13' fill='#c43b35'>B sur A</text></svg>",
            legende: "Les forces ont des sens opposés et la même intensité, mais elles s'exercent sur deux objets différents."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet de masse 3 kg est placé dans un lieu où g = 10 N/kg. Calculer l'intensité de son poids.",
        correction: "P = mg = 3 × 10 = 30 N. Le poids est dirigé verticalement vers le bas."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une lampe immobile est suspendue à un fil vertical. Citer les deux forces principales exercées sur la lampe.",
        correction: "La lampe subit son poids, dirigé vers le bas, et la force exercée par le fil, dirigée vers le haut."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un référentiel galiléen, un objet de masse 2 kg subit une force résultante horizontale de 8 N vers la droite. Calculer son accélération.",
        correction: "D'après ΣF⃗ = m a⃗, l'accélération a le même sens que la résultante et vaut a = 8/2 = 4 m/s² vers la droite."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un livre est immobile sur une table horizontale. Son poids vaut 12 N. On suppose qu'il ne subit aucune force horizontale. Déterminer la force normale de la table sur le livre.",
        correction: "Le livre est immobile dans le référentiel terrestre supposé galiléen. Les forces se compensent : N⃗ + P⃗ = 0⃗. La force normale vaut donc 12 N, verticalement vers le haut."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un référentiel terrestre supposé galiléen, un bloc de masse 4 kg est tiré horizontalement vers la droite par une force de 18 N. Le frottement vaut 6 N vers la gauche. Le bloc reste en contact avec le sol horizontal et son accélération verticale est nulle. Prendre g = 10 N/kg. Calculer la réaction normale et l'accélération horizontale.",
        correction: "Verticalement, N − mg = 0, donc N = 4 × 10 = 40 N. Horizontalement, la résultante vaut 18 − 6 = 12 N vers la droite. D'après la deuxième loi de Newton, a = 12/4 = 3 m/s² vers la droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne pousse un mur avec une force de 50 N. Quelle force le mur exerce-t-il sur la personne ? Ces deux forces se compensent-elles dans le bilan du mur ?",
        correction: "Le mur exerce sur la personne une force de même direction et de même intensité, soit 50 N, mais de sens opposé. Les deux forces agissent sur deux objets différents : elles ne se compensent pas dans le bilan du mur seul."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un référentiel galiléen, un objet de masse 5 kg se déplace sur un axe horizontal orienté vers la droite. Il subit une force de 20 N vers la droite et une force de frottement de 5 N vers la gauche. Sa vitesse initiale est de −3 m/s. Calculer son accélération et sa vitesse après 2 s, en supposant ces forces constantes pendant cette durée.",
        correction: "Sur l'axe, la résultante vaut 20 − 5 = 15 N. Donc a = 15/5 = 3 m/s². Les forces étant constantes, v(t) = v₀ + at. Après 2 s, v = −3 + 3 × 2 = 3 m/s. La vitesse s'est annulée après 1 s : l'objet a ensuite changé de sens. La valeur et le sens du frottement sont ici imposés par l'énoncé pendant toute la durée."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un référentiel terrestre supposé galiléen, un ascenseur de masse 500 kg monte avec une accélération verticale constante de 1 m/s². Le câble exerce une force verticale vers le haut. Prendre g = 10 N/kg et négliger les autres forces. Calculer la tension du câble.",
        correction: "Sur l'ascenseur agissent la tension T⃗ vers le haut et le poids P⃗ vers le bas. En orientant l'axe vers le haut, la deuxième loi donne T − mg = ma. Donc T = m(g + a) = 500 × (10 + 1) = 5 500 N."
      }
    ]
  }
]);
