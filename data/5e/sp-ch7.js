enregistrerChapitres("5e", "sp", [
  {
    id: 7,
    titre: "Le circuit électrique et ses schémas",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce qu’un circuit électrique ?",
        blocs: [
          {
            type: "definition",
            contenu: "Un circuit électrique est un ensemble de composants électriques reliés entre eux par des conducteurs."
          },
          {
            type: "texte",
            contenu: "Un circuit simple peut comprendre une pile, une lampe, un interrupteur et des fils de connexion."
          },
          {
            type: "definition",
            contenu: "Un dipôle électrique est un composant qui possède deux bornes, comme une pile, une lampe ou un interrupteur."
          },
          {
            type: "remarque",
            contenu: "Pour les expériences de ce chapitre, on utilise uniquement une pile adaptée et du matériel en bon état, jamais une prise électrique."
          }
        ]
      },
      {
        id: 2,
        titre: "Le rôle des composants",
        blocs: [
          {
            type: "tableau",
            entetes: ["Composant", "Rôle dans un circuit simple"],
            lignes: [
              ["Pile", "Générateur : elle fournit de l’énergie électrique au circuit."],
              ["Lampe", "Récepteur : elle transforme une partie de l’énergie électrique en lumière et en chaleur."],
              ["Interrupteur", "Il permet d’ouvrir ou de fermer le circuit."],
              ["Fils de connexion", "Ils relient les composants et permettent le passage du courant."]
            ]
          },
          {
            type: "remarque",
            contenu: "Une lampe doit être adaptée à la pile utilisée. Une pile n’émet pas nécessairement de lumière : c’est ici la lampe qui s’allume."
          }
        ]
      },
      {
        id: 3,
        titre: "Circuit ouvert et circuit fermé",
        blocs: [
          {
            type: "definition",
            contenu: "Un circuit est fermé lorsque le courant dispose d’un chemin continu à travers ses composants. Il est ouvert lorsque ce chemin est interrompu."
          },
          {
            type: "texte",
            contenu: "Dans un circuit simple avec une pile et une lampe en bon état, la lampe peut s’allumer lorsque le circuit est fermé. Si le circuit est ouvert, le courant ne circule pas dans cette boucle et la lampe est éteinte."
          },
          {
            type: "exemple",
            contenu: "Si l’interrupteur est ouvert, le chemin est interrompu et la lampe est éteinte. Si on ferme l’interrupteur, le chemin devient continu et la lampe peut s’allumer."
          },
          {
            type: "remarque",
            contenu: "Un circuit fermé ne garantit pas à lui seul que la lampe s’allume : la pile, la lampe et les connexions doivent aussi être en bon état et adaptés les uns aux autres."
          }
        ]
      },
      {
        id: 4,
        titre: "Le sens conventionnel du courant",
        blocs: [
          {
            type: "texte",
            contenu: "Pour représenter le courant dans un circuit alimenté par une pile, on utilise un sens choisi par convention."
          },
          {
            type: "regle",
            contenu: "À l’extérieur de la pile, le sens conventionnel du courant va de la borne positive (+) vers la borne négative (−)."
          },
          {
            type: "remarque",
            contenu: "Les flèches qui indiquent le sens du courant sur un schéma représentent ce sens conventionnel."
          }
        ]
      },
      {
        id: 5,
        titre: "Schématiser un circuit",
        blocs: [
          {
            type: "texte",
            contenu: "Pour représenter un circuit électrique, on réalise un schéma avec des symboles normalisés. Les fils sont représentés par des traits."
          },
          {
            type: "tableau",
            entetes: ["Élément", "Comment le reconnaître sur le schéma"],
            lignes: [
              ["Pile", "Deux traits parallèles de longueurs différentes : le trait le plus long correspond à la borne positive."],
              ["Lampe", "Un cercle contenant une croix."],
              ["Interrupteur ouvert", "Une coupure entre deux contacts, avec un trait incliné."],
              ["Fil de connexion", "Un trait reliant les composants."]
            ]
          },
          {
            type: "schema",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 240" role="img" aria-label="Schéma d'un circuit avec une pile, une lampe et un interrupteur ouvert">
              <path d="M80 65 H165 M195 65 H330 V175 H240 M210 175 H80 V65" fill="none" stroke="#334155" stroke-width="3"/>
              <circle cx="180" cy="65" r="15" fill="#fff" stroke="#334155" stroke-width="3"/>
              <line x1="170" y1="55" x2="190" y2="75" stroke="#334155" stroke-width="2"/>
              <line x1="190" y1="55" x2="170" y2="75" stroke="#334155" stroke-width="2"/>
              <circle cx="210" cy="175" r="3" fill="#334155"/>
              <circle cx="240" cy="175" r="3" fill="#334155"/>
              <line x1="210" y1="175" x2="235" y2="160" stroke="#334155" stroke-width="3"/>
              <rect x="70" y="110" width="20" height="40" fill="#fff"/>
              <line x1="66" y1="120" x2="94" y2="120" stroke="#334155" stroke-width="3"/>
              <line x1="72" y1="140" x2="88" y2="140" stroke="#334155" stroke-width="3"/>
              <text x="50" y="124" font-size="17" fill="#334155">+</text>
              <text x="50" y="146" font-size="17" fill="#334155">−</text>
              <text x="155" y="35" font-size="15" fill="#334155">Lampe</text>
              <text x="181" y="210" font-size="15" fill="#334155">Interrupteur ouvert</text>
              <text x="28" y="180" font-size="15" fill="#334155">Pile</text>
            </svg>`,
            legende: "L’interrupteur est ouvert : le circuit est interrompu et la lampe est éteinte."
          },
          {
            type: "methode",
            contenu: "Pour dessiner un schéma : 1. Repérer les composants et la façon dont ils sont reliés. 2. Remplacer chaque composant par son symbole. 3. Représenter les fils par des traits, de préférence à la règle. 4. Vérifier que les connexions et l’état de l’interrupteur sont corrects."
          }
        ]
      },
      {
        id: 6,
        titre: "Conducteurs et isolants",
        blocs: [
          {
            type: "definition",
            contenu: "Un matériau conducteur permet le passage du courant électrique. Un matériau isolant s’oppose fortement au passage du courant."
          },
          {
            type: "exemple",
            contenu: "Le cuivre et l’aluminium sont des conducteurs électriques. Le plastique et le caoutchouc sont généralement des isolants."
          },
          {
            type: "remarque",
            contenu: "Les fils électriques sont souvent constitués d’un conducteur métallique entouré d’une gaine isolante."
          },
          {
            type: "remarque",
            contenu: "Le comportement d’un matériau dépend aussi des conditions. Par exemple, l’eau du robinet peut conduire le courant à cause des substances qu’elle contient."
          }
        ]
      },
      {
        id: 7,
        titre: "Sécurité électrique",
        blocs: [
          {
            type: "regle",
            contenu: "Ne jamais relier directement les deux bornes d’une pile par un fil : cela provoque un court-circuit et peut entraîner un échauffement."
          },
          {
            type: "regle",
            contenu: "Ne jamais réaliser de montage sur une prise électrique. Ne pas toucher un appareil électrique avec les mains mouillées ni utiliser un appareil ou un fil endommagé."
          },
          {
            type: "remarque",
            contenu: "Avant de modifier un montage à pile, ouvrir le circuit ou débrancher la pile. Demander l’aide d’un adulte en cas de doute."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Cite un générateur utilisé dans un circuit électrique simple.",
        correction: "Une pile est un générateur électrique."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le rôle d’un interrupteur ?",
        correction: "L’interrupteur permet d’ouvrir ou de fermer le circuit."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "Combien de bornes possède un dipôle ?",
        correction: "Un dipôle possède deux bornes."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Dans un circuit simple avec une pile et une lampe, que se passe-t-il lorsque l’interrupteur est ouvert ?",
        correction: "Le chemin du courant est interrompu : le courant ne circule pas dans la boucle et la lampe est éteinte."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "À l’extérieur d’une pile, quel est le sens conventionnel du courant ?",
        correction: "Il va de la borne positive (+) vers la borne négative (−)."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Comment représente-t-on une lampe sur un schéma électrique ?",
        correction: "On représente une lampe par un cercle contenant une croix."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Classe ces matériaux en conducteurs ou isolants : cuivre, plastique, aluminium, caoutchouc.",
        correction: "Le cuivre et l’aluminium sont des conducteurs. Le plastique et le caoutchouc sont généralement des isolants."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Pourquoi entoure-t-on souvent le métal d’un fil électrique avec une gaine en plastique ?",
        correction: "Le métal conduit le courant. La gaine en plastique, généralement isolante, aide à éviter le contact avec le conducteur."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Un circuit est fermé, mais la lampe ne s’allume pas. Donne deux causes possibles.",
        correction: "Par exemple, la pile peut être déchargée ou la lampe peut être grillée. Une mauvaise connexion ou une incompatibilité entre la pile et la lampe peuvent aussi être en cause."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Pourquoi ne faut-il jamais relier directement les deux bornes d’une pile par un fil ?",
        correction: "Cela provoque un court-circuit. Un courant important peut circuler et entraîner un échauffement dangereux."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Un élève construit avec une pile un circuit comprenant une lampe et un interrupteur. La lampe est éteinte lorsque l’interrupteur est ouvert et s’allume lorsqu’il est fermé. Explique.",
        correction: "Lorsque l’interrupteur est ouvert, il interrompt le chemin du courant. Lorsqu’il est fermé, le chemin devient continu ; si la pile et la lampe sont adaptées et en bon état, le courant circule et la lampe s’allume."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Sur un schéma de circuit à pile, un élève indique une flèche allant de la borne négative vers la borne positive à l’extérieur de la pile. Est-ce le sens conventionnel ?",
        correction: "Non. Par convention, à l’extérieur de la pile, le courant est représenté de la borne positive vers la borne négative."
      }
    ]
  }
]);
