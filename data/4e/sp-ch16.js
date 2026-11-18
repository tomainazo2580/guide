// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch16",
    titre: "Chapitre 16 : La lumière et la vision",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch16-lecon1",
        titre: "Les sources de lumière",
        blocs: [
          {
            type: "texte",
            titre: "La lumière autour de nous",
            texte: "Le jour, le Soleil éclaire les paysages. La nuit, une lampe ou une bougie peut éclairer une pièce. Ces objets peuvent envoyer de la lumière vers nos yeux ou vers d'autres objets."
          },
          {
            type: "definition",
            titre: "Source primaire",
            texte: "Une source primaire de lumière est un objet qui produit et émet sa propre lumière."
          },
          {
            type: "exemple",
            titre: "Quelques sources primaires",
            texte: "Le Soleil, une étoile, une lampe allumée et la flamme d'une bougie sont des sources primaires de lumière."
          },
          {
            type: "definition",
            titre: "Objet diffusant",
            texte: "Un objet diffusant renvoie dans différentes directions une partie de la lumière qu'il reçoit. Il peut ainsi devenir visible sans produire lui-même cette lumière."
          },
          {
            type: "exemple",
            titre: "La Lune",
            texte: "La Lune ne produit pas la lumière que nous voyons : elle renvoie une partie de la lumière reçue du Soleil. C'est un objet diffusant."
          },
          {
            type: "remarque",
            titre: "Un objet peut être sombre",
            texte: "Un objet sombre renvoie peu de lumière par rapport à la lumière qu'il reçoit, mais il peut quand même être visible si une partie de cette lumière atteint l'œil."
          }
        ]
      },
      {
        id: "sp4-ch16-lecon2",
        titre: "Comment voit-on un objet ?",
        blocs: [
          {
            type: "regle",
            titre: "La lumière doit entrer dans l'œil",
            texte: "Pour voir un objet, de la lumière provenant de cet objet doit entrer dans l'œil. Cette lumière peut être produite par l'objet lui-même ou provenir d'une source qui l'éclaire."
          },
          {
            type: "exemple",
            titre: "Voir un cahier",
            texte: "Une lampe éclaire un cahier. Le cahier diffuse une partie de la lumière reçue. Une partie de cette lumière entre dans l'œil : le cahier devient visible."
          },
          {
            type: "schema",
            titre: "De la source à l'œil",
            svg: "<svg viewBox='0 0 360 145' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='145' fill='#f8fafc'/><circle cx='45' cy='65' r='22' fill='#fbbf24' stroke='#d97706' stroke-width='2'/><text x='45' y='70' text-anchor='middle' font-size='12' fill='#78350f'>Lampe</text><rect x='145' y='45' width='65' height='40' fill='#93c5fd' stroke='#2563eb' stroke-width='2'/><text x='177' y='70' text-anchor='middle' font-size='12' fill='#1e3a5f'>Cahier</text><ellipse cx='300' cy='65' rx='27' ry='15' fill='white' stroke='#475569' stroke-width='2'/><circle cx='300' cy='65' r='7' fill='#334155'/><line x1='70' y1='65' x2='137' y2='65' stroke='#d97706' stroke-width='3'/><polygon points='145,65 134,59 134,71' fill='#d97706'/><line x1='211' y1='65' x2='265' y2='65' stroke='#2563eb' stroke-width='3'/><polygon points='273,65 262,59 262,71' fill='#2563eb'/><text x='180' y='120' text-anchor='middle' font-size='13' fill='#0f172a'>La lumière va de la lampe au cahier, puis à l'œil.</text></svg>",
            legende: "La lampe éclaire le cahier ; le cahier diffuse de la lumière dont une partie atteint l'œil."
          },
          {
            type: "remarque",
            titre: "Dans l'obscurité",
            texte: "Dans une obscurité totale, un objet qui ne produit pas de lumière ne peut pas être vu : aucune lumière provenant de cet objet n'entre dans l'œil."
          },
          {
            type: "remarque",
            titre: "Protéger ses yeux",
            texte: "Ne regarde jamais directement le Soleil, même pendant une éclipse. Ne dirige pas non plus un faisceau laser vers les yeux."
          }
        ]
      },
      {
        id: "sp4-ch16-lecon3",
        titre: "Les milieux et la lumière",
        blocs: [
          {
            type: "definition",
            titre: "Milieu transparent",
            texte: "Un milieu transparent laisse passer la lumière et permet de distinguer nettement les objets placés derrière lui, dans des conditions adaptées."
          },
          {
            type: "definition",
            titre: "Milieu translucide",
            texte: "Un milieu translucide laisse passer une partie de la lumière, mais ne permet pas de distinguer nettement les objets placés derrière lui."
          },
          {
            type: "definition",
            titre: "Milieu opaque",
            texte: "Un milieu opaque ne laisse pas passer la lumière visible à travers lui."
          },
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: ["Milieu ou objet", "Comportement", "Catégorie"],
            lignes: [
              ["Vitre claire et propre", "Laisse passer la lumière et permet de voir nettement", "Transparent"],
              ["Verre dépoli", "Laisse passer une partie de la lumière sans image nette", "Translucide"],
              ["Planche de bois", "Ne laisse pas passer la lumière visible", "Opaque"]
            ]
          },
          {
            type: "remarque",
            titre: "Selon les conditions",
            texte: "La transparence peut dépendre de l'épaisseur, de l'état du matériau et du type de lumière. Un matériau transparent ne laisse pas nécessairement passer toute la lumière qu'il reçoit."
          }
        ]
      },
      {
        id: "sp4-ch16-lecon4",
        titre: "La lumière peut être absorbée, transmise ou diffusée",
        blocs: [
          {
            type: "texte",
            titre: "Quand la lumière rencontre un objet",
            texte: "Lorsqu'une lumière arrive sur un objet, une partie peut être absorbée, une autre renvoyée et, si l'objet le permet, une autre transmise à travers lui."
          },
          {
            type: "exemple",
            titre: "Une feuille de papier",
            texte: "Une feuille de papier éclairée renvoie de la lumière dans différentes directions : elle est visible. Selon son épaisseur et sa nature, elle peut aussi laisser passer une partie de la lumière."
          },
          {
            type: "remarque",
            titre: "Les couleurs",
            texte: "La couleur perçue dépend de la lumière reçue et de la façon dont l'objet renvoie ou absorbe cette lumière. Un objet ne paraît pas nécessairement de la même couleur sous tous les éclairages."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une source primaire de lumière ? Donne un exemple.",
        correction: "Une source primaire produit et émet sa propre lumière. Par exemple : le Soleil ou une lampe allumée."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La Lune est-elle une source primaire de la lumière que nous voyons ? Explique.",
        correction: "Non. La Lune renvoie une partie de la lumière qu'elle reçoit du Soleil : elle est un objet diffusant."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Explique pourquoi on peut voir un cahier éclairé par une lampe.",
        correction: "La lampe éclaire le cahier. Le cahier diffuse une partie de la lumière reçue. Une partie de cette lumière entre dans l'œil, ce qui permet de voir le cahier."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Classe ces objets selon leur comportement habituel : vitre claire, verre dépoli, planche de bois.",
        correction: "La vitre claire est transparente ; le verre dépoli est translucide ; la planche de bois est opaque."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quelle différence y a-t-il entre un milieu transparent et un milieu translucide ?",
        correction: "Les deux peuvent laisser passer de la lumière. Un milieu transparent permet de distinguer nettement les objets derrière lui, tandis qu'un milieu translucide ne permet pas de les distinguer nettement."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans une pièce totalement obscure, un livre non lumineux peut-il être vu ? Pourquoi ?",
        correction: "Non. Dans l'obscurité totale, aucune lumière n'éclaire le livre et le livre ne produit pas sa propre lumière. Aucune lumière provenant de lui n'entre donc dans l'œil."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une lampe éclaire une feuille placée derrière une vitre claire. Un élève voit la feuille à travers la vitre.\n1. Quel est le rôle de la lampe ?\n2. Quel est le rôle de la feuille ?\n3. Pourquoi la vitre permet-elle de voir nettement la feuille ?",
        correction: "1. La lampe est une source primaire : elle produit de la lumière qui éclaire la feuille.\n2. La feuille diffuse une partie de la lumière reçue.\n3. La vitre claire est transparente : elle laisse passer la lumière et permet de distinguer nettement la feuille."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève dit : « On voit les objets parce que nos yeux envoient de la lumière vers eux. » Corrige son affirmation avec l'exemple d'un objet éclairé.",
        correction: "Pour voir un objet, c'est de la lumière provenant de cet objet qui doit entrer dans l'œil. Par exemple, une lampe éclaire un livre ; le livre diffuse une partie de la lumière et une partie de celle-ci entre dans l'œil."
      }
    ]
  }
]);
