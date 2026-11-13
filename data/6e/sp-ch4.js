// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-circuit",
    titre: "Chapitre 4 : Le circuit électrique",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-circuit-simple",
        titre: "Le circuit électrique simple",
        blocs: [
          {
            type: "exemple",
            titre: "La lampe de poche",
            texte: "La lampe de poche de baba éclaire quand on pousse le bouton. À l'intérieur : une pile, une ampoule et des connexions. C'est un circuit électrique simple."
          },
          {
            type: "definition",
            titre: "Le circuit électrique simple",
            texte: "Un circuit électrique simple est une boucle qui comporte : un générateur (la pile), un interrupteur, une lampe et des fils de connexion."
          },
          {
            type: "schema",
            titre: "La boucle du circuit simple",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg'><line x1='80' y1='30' x2='260' y2='30' stroke='#1e3a5f' stroke-width='2'/><line x1='80' y1='200' x2='260' y2='200' stroke='#1e3a5f' stroke-width='2'/><line x1='260' y1='30' x2='260' y2='200' stroke='#1e3a5f' stroke-width='2'/><line x1='80' y1='130' x2='80' y2='200' stroke='#1e3a5f' stroke-width='2'/><line x1='80' y1='30' x2='80' y2='100' stroke='#1e3a5f' stroke-width='2'/><line x1='66' y1='100' x2='94' y2='100' stroke='#1e3a5f' stroke-width='2'/><line x1='74' y1='130' x2='86' y2='130' stroke='#1e3a5f' stroke-width='5'/><text x='52' y='105' font-size='13' fill='#1e3a5f'>+</text><text x='52' y='134' font-size='13' fill='#1e3a5f'>-</text><text x='30' y='118' font-size='12' fill='#1e3a5f'>Pile</text><circle cx='170' cy='30' r='14' fill='#fff9c2' stroke='#1e3a5f' stroke-width='2'/><line x1='160' y1='20' x2='180' y2='40' stroke='#1e3a5f' stroke-width='2'/><line x1='160' y1='40' x2='180' y2='20' stroke='#1e3a5f' stroke-width='2'/><text x='200' y='35' font-size='12' fill='#1e3a5f'>Lampe</text><line x1='150' y1='200' x2='165' y2='200' stroke='#1e3a5f' stroke-width='2'/><circle cx='150' cy='200' r='3' fill='#1e3a5f'/><circle cx='200' cy='200' r='3' fill='#1e3a5f'/><line x1='165' y1='200' x2='198' y2='186' stroke='#1e3a5f' stroke-width='2'/><line x1='200' y1='200' x2='215' y2='200' stroke='#1e3a5f' stroke-width='2'/><text x='222' y='205' font-size='12' fill='#1e3a5f'>Interrupteur</text></svg>",
            legende: "Le courant part de la pile, traverse la lampe, et revient à la pile : une boucle."
          },
          {
            type: "definition",
            titre: "Le dipôle",
            texte: "Un dipôle est un composant électrique qui possède deux bornes (deux connexions). La pile, la lampe et l'interrupteur sont des dipôles."
          },
          {
            type: "remarque",
            titre: "Une seule boucle",
            texte: "Dans un circuit simple, tous les dipôles sont à la suite les uns des autres : il n'y a qu'une seule boucle."
          }
        ]
      },
      {
        id: "sp6-circuit-ferme-ouvert",
        titre: "Circuit fermé, circuit ouvert",
        blocs: [
          {
            type: "regle",
            titre: "La règle de la lampe",
            texte: "La lampe brille : le circuit est fermé, le courant circule.\nLa lampe est éteinte : le circuit est ouvert, le courant ne circule pas."
          },
          {
            type: "definition",
            titre: "Circuit fermé",
            texte: "Un circuit est fermé quand la boucle est complète : le courant peut partir de la pile et y revenir sans interruption."
          },
          {
            type: "definition",
            titre: "Circuit ouvert",
            texte: "Un circuit est ouvert quand la boucle est coupée quelque part : interrupteur ouvert, fil débranché, lampe grillée ou dévissée."
          },
          {
            type: "schema",
            titre: "Fermé ou ouvert ?",
            svg: "<svg viewBox='0 0 340 130' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='30' width='120' height='70' fill='none' stroke='#1e88e5' stroke-width='2'/><circle cx='50' cy='30' r='10' fill='#fff9c2' stroke='#1e3a5f' stroke-width='2'/><line x1='44' y1='24' x2='56' y2='36' stroke='#1e3a5f' stroke-width='1.5'/><line x1='44' y1='36' x2='56' y2='24' stroke='#1e3a5f' stroke-width='1.5'/><text x='80' y='120' text-anchor='middle' font-size='12' fill='#1e3a5f'>Circuit ferme : la lampe brille</text><rect x='200' y='30' width='120' height='70' fill='none' stroke='#1e88e5' stroke-width='2' stroke-dasharray='6 4'/><circle cx='230' cy='30' r='10' fill='#e2e8f0' stroke='#1e3a5f' stroke-width='2'/><line x1='224' y1='24' x2='236' y2='36' stroke='#1e3a5f' stroke-width='1.5'/><line x1='224' y1='36' x2='236' y2='24' stroke='#1e3a5f' stroke-width='1.5'/><line x1='296' y1='30' x2='320' y2='30' stroke='#dc2626' stroke-width='2'/><line x1='324' y1='30' x2='344' y2='30' stroke='#dc2626' stroke-width='2'/><text x='260' y='120' text-anchor='middle' font-size='12' fill='#1e3a5f'>Circuit ouvert : coupure, lampe eteinte</text></svg>",
            legende: "À droite, la boucle est coupée : plus de courant."
          },
          {
            type: "exemple",
            titre: "Chez toi",
            texte: "Quand la lampe de la maison ne s'allume plus, le circuit est ouvert quelque part : ampoule grillée, fil coupé ou interrupteur en panne."
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-circuit-roles",
        titre: "Le rôle de chaque élément",
        blocs: [
          {
            type: "texte",
            titre: "Une équipe de quatre",
            texte: "Dans le circuit simple, chaque élément a son métier : la pile produit, la lampe transforme, l'interrupteur commande, les fils relient."
          },
          {
            type: "tableau",
            titre: "Les rôles",
            entetes: ["Élément", "Rôle", "Ce qu'il fait"],
            lignes: [
              ["La pile", "Générateur", "Produit le courant électrique"],
              ["La lampe", "Récepteur", "Transforme le courant en lumière"],
              ["L'interrupteur", "Commande", "Ouvre ou ferme le circuit"],
              ["Les fils", "Liaison", "Relient les éléments entre eux"]
            ]
          },
          {
            type: "regle",
            titre: "Générateur et récepteur",
            texte: "Le générateur donne l'énergie au circuit : c'est la pile (ou la batterie).\nLe récepteur utilise cette énergie : la lampe la transforme en lumière, un moteur la transforme en mouvement."
          },
          {
            type: "exemple",
            titre: "Le récepteur, ce n'est pas que la lampe",
            texte: "Un moteur de ventilateur, un haut-parleur de radio, une résistance de chauffe-eau : ce sont aussi des récepteurs. Ils transforment le courant en mouvement, en son ou en chaleur."
          },
          {
            type: "remarque",
            titre: "Sans générateur, rien ne marche",
            texte: "Enlève la pile : même avec les meilleurs fils du monde, la lampe ne brillera jamais. Le générateur est le cœur du circuit."
          }
        ]
      },
      {
        id: "sp6-circuit-schema",
        titre: "Le schéma électrique",
        blocs: [
          {
            type: "definition",
            titre: "Schématiser",
            texte: "Pour représenter un circuit, on ne dessine pas les objets réels : on utilise des symboles. Chaque dipôle a son symbole normalisé, le même partout dans le monde."
          },
          {
            type: "regle",
            titre: "La règle des fils",
            texte: "Sur un schéma, les fils sont représentés par des traits horizontaux et verticaux, jamais en biais. Le schéma ressemble à un rectangle."
          },
          {
            type: "schema",
            titre: "Les symboles normalisés",
            svg: "<svg viewBox='0 0 340 250' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='30' x2='45' y2='30' stroke='#1e3a5f' stroke-width='2'/><line x1='45' y1='18' x2='45' y2='42' stroke='#1e3a5f' stroke-width='2'/><line x1='53' y1='24' x2='53' y2='36' stroke='#1e3a5f' stroke-width='4'/><line x1='53' y1='30' x2='83' y2='30' stroke='#1e3a5f' stroke-width='2'/><text x='8' y='22' font-size='11' fill='#1e3a5f'>+</text><text x='60' y='55' font-size='11' fill='#1e3a5f'>Pile</text><line x1='125' y1='30' x2='155' y2='30' stroke='#1e3a5f' stroke-width='2'/><circle cx='170' cy='30' r='14' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='160' y1='20' x2='180' y2='40' stroke='#1e3a5f' stroke-width='2'/><line x1='160' y1='40' x2='180' y2='20' stroke='#1e3a5f' stroke-width='2'/><line x1='185' y1='30' x2='215' y2='30' stroke='#1e3a5f' stroke-width='2'/><text x='160' y='58' font-size='11' fill='#1e3a5f'>Lampe</text><line x1='245' y1='30' x2='270' y2='30' stroke='#1e3a5f' stroke-width='2'/><rect x='270' y='22' width='25' height='16' fill='none' stroke='#1e3a5f' stroke-width='2'/><text x='278' y='34' font-size='10' font-weight='bold' fill='#1e3a5f'>M</text><line x1='295' y1='30' x2='325' y2='30' stroke='#1e3a5f' stroke-width='2'/><text x='272' y='55' font-size='11' fill='#1e3a5f'>Moteur</text><line x1='15' y1='100' x2='45' y2='100' stroke='#1e3a5f' stroke-width='2'/><rect x='45' y='94' width='40' height='12' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='85' y1='100' x2='115' y2='100' stroke='#1e3a5f' stroke-width='2'/><text x='52' y='126' font-size='11' fill='#1e3a5f'>Resistance</text><line x1='155' y1='100' x2='185' y2='100' stroke='#1e3a5f' stroke-width='2'/><polygon points='185,88 185,112 207,100' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='207' y1='88' x2='207' y2='112' stroke='#1e3a5f' stroke-width='2'/><line x1='207' y1='100' x2='237' y2='100' stroke='#1e3a5f' stroke-width='2'/><line x1='196' y1='86' x2='188' y2='76' stroke='#f59e0b' stroke-width='2'/><line x1='200' y1='88' x2='196' y2='74' stroke='#f59e0b' stroke-width='2'/><text x='175' y='126' font-size='11' fill='#1e3a5f'>DEL</text><line x1='255' y1='100' x2='280' y2='100' stroke='#1e3a5f' stroke-width='2'/><circle cx='280' cy='100' r='3' fill='#1e3a5f'/><circle cx='318' cy='100' r='3' fill='#1e3a5f'/><line x1='283' y1='100' x2='316' y2='88' stroke='#1e3a5f' stroke-width='2'/><line x1='318' y1='100' x2='335' y2='100' stroke='#1e3a5f' stroke-width='2'/><text x='270' y='126' font-size='11' fill='#1e3a5f'>Inter. ouvert</text><line x1='15' y1='170' x2='40' y2='170' stroke='#1e3a5f' stroke-width='2'/><circle cx='40' cy='170' r='3' fill='#1e3a5f'/><circle cx='70' cy='170' r='3' fill='#1e3a5f'/><line x1='43' y1='170' x2='70' y2='170' stroke='#1e3a5f' stroke-width='2'/><line x1='70' y1='170' x2='95' y2='170' stroke='#1e3a5f' stroke-width='2'/><text x='28' y='196' font-size='11' fill='#1e3a5f'>Inter. ferme</text><line x1='140' y1='170' x2='210' y2='170' stroke='#1e3a5f' stroke-width='2'/><text x='152' y='196' font-size='11' fill='#1e3a5f'>Fil de connexion</text></svg>",
            legende: "Apprends ces symboles : tu les retrouveras dans tous les schémas."
          },
          {
            type: "remarque",
            titre: "Le sens des symboles",
            texte: "Pour la pile, le grand trait fin est la borne + et le petit trait épais est la borne −. Pour la DEL, les deux petites flèches montrent qu'elle émet de la lumière."
          }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-circuit-lire",
        titre: "Lire et réaliser un schéma",
        blocs: [
          {
            type: "methode",
            titre: "Méthode pour dessiner un circuit",
            texte: "1. Pars de la borne + de la pile.\n2. Suis la boucle : note chaque dipôle rencontré, dans l'ordre.\n3. Dessine un rectangle : un élément par côté si possible.\n4. Remplace chaque élément par son symbole.\n5. Vérifie : les fils sont horizontaux ou verticaux, la boucle est complète."
          },
          {
            type: "schema",
            titre: "Le schéma du circuit simple",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='30' width='200' height='160' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='50' y1='90' x2='70' y2='90' stroke='#1e3a5f' stroke-width='2'/><line x1='45' y1='78' x2='45' y2='102' stroke='#1e3a5f' stroke-width='2'/><line x1='53' y1='84' x2='53' y2='96' stroke='#1e3a5f' stroke-width='4'/><line x1='53' y1='90' x2='70' y2='90' stroke='#1e3a5f' stroke-width='2'/><line x1='70' y1='30' x2='70' y2='90' stroke='#1e3a5f' stroke-width='2'/><line x1='70' y1='90' x2='70' y2='190' stroke='#1e3a5f' stroke-width='2'/><line x1='53' y1='90' x2='70' y2='90' stroke='#1e3a5f' stroke-width='2'/><circle cx='170' cy='30' r='14' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='160' y1='20' x2='180' y2='40' stroke='#1e3a5f' stroke-width='2'/><line x1='160' y1='40' x2='180' y2='20' stroke='#1e3a5f' stroke-width='2'/><circle cx='240' cy='190' r='3' fill='#1e3a5f'/><circle cx='200' cy='190' r='3' fill='#1e3a5f'/><line x1='200' y1='190' x2='155' y2='190' stroke='#1e3a5f' stroke-width='2'/><line x1='203' y1='190' x2='238' y2='178' stroke='#1e3a5f' stroke-width='2'/><text x='285' y='115' font-size='12' fill='#1e3a5f'>Une seule boucle</text></svg>",
            legende: "Pile à gauche, lampe en haut, interrupteur en bas : la boucle est claire."
          },
          {
            type: "exemple",
            titre: "Vérifier un circuit",
            texte: "Question : la lampe brille-t-elle ?\nRéponse : je pars du + de la pile, je suis les fils du doigt. Si je reviens à la pile sans coupure, le circuit est fermé : la lampe brille. Sinon, il est ouvert : la lampe est éteinte."
          },
          {
            type: "regle",
            titre: "Erreurs à éviter",
            texte: "Jamais de fil en biais sur un schéma.\nJamais de symbole dans un coin : les symboles sont au milieu des côtés.\nJamais de boucle incomplète : vérifie toujours en suivant le circuit du doigt."
          },
          {
            type: "remarque",
            titre: "Le schéma, un langage universel",
            texte: "Un technicien à Tana, un élève à Toliara ou un ingénieur en France lisent le même schéma de la même façon : c'est pour cela que les symboles sont normalisés."
          }
        ]
      }
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'un dipôle ? Donne deux exemples de dipôles.",
        correction: "Un dipôle est un composant électrique qui possède deux bornes (deux connexions).\nExemples : la pile, la lampe, l'interrupteur, le moteur, la résistance, la DEL."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Recopie et complète :\nDans un circuit simple, la lampe brille quand le circuit est ........\nElle est éteinte quand le circuit est ........",
        correction: "Dans un circuit simple, la lampe brille quand le circuit est fermé.\nElle est éteinte quand le circuit est ouvert."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Recopie le tableau et associe chaque élément à son rôle :\nÉléments : la pile, la lampe, l'interrupteur, les fils.\nRôles : liaison, générateur, commande, récepteur.",
        correction: "La pile : générateur (elle produit le courant).\nLa lampe : récepteur (elle transforme le courant en lumière).\nL'interrupteur : commande (il ouvre ou ferme le circuit).\nLes fils : liaison (ils relient les éléments)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une lampe de poche ne s'allume plus. Cite trois causes possibles, puis explique ce qui se passe dans chaque cas.",
        correction: "1. L'interrupteur est ouvert ou cassé : la boucle est coupée.\n2. Un fil est débranché ou coupé : la boucle est coupée.\n3. La lampe est grillée (ou dévissée) : la boucle est coupée.\nDans les trois cas, le circuit est ouvert : le courant ne circule plus."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Voici les éléments d'un circuit : une pile, un interrupteur fermé, une lampe, trois fils.\n1. Dessine le schéma normalisé de ce circuit.\n2. La lampe brille-t-elle ? Justifie.\n3. On ouvre l'interrupteur : que se passe-t-il ?",
        correction: "1. Schéma : un rectangle avec la pile sur un côté (grand trait = borne +), la lampe (cercle avec une croix) sur un autre, l'interrupteur fermé (trait continu) sur un troisième. Les fils sont horizontaux et verticaux.\n2. Oui, la lampe brille : l'interrupteur est fermé, la boucle est complète, le courant circule.\n3. La lampe s'éteint : le circuit devient ouvert."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sur un schéma, la pile a deux bornes : un grand trait fin et un petit trait épais.\n1. Laquelle est la borne + ?\n2. Dessine le symbole de la pile et celui de la lampe.\n3. Pourquoi utilise-t-on des symboles au lieu de dessiner les vrais objets ?",
        correction: "1. Le grand trait fin est la borne + (le petit trait épais est la borne −).\n2. Pile : un grand trait fin et un petit trait épais côte à côte. Lampe : un cercle avec une croix à l'intérieur.\n3. Les symboles sont normalisés : tout le monde les comprend de la même façon, et le schéma est plus simple et plus rapide à dessiner."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Rado monte un circuit avec une pile, deux lampes à la suite et un interrupteur.\n1. Dessine le schéma normalisé de ce circuit.\n2. Rado dévisse une lampe : que se passe-t-il ? Pourquoi ?\n3. Comment s'appelle ce type de montage ?",
        correction: "1. Schéma : un rectangle avec la pile, l'interrupteur et les deux lampes à la suite, une seule boucle. Fils horizontaux et verticaux, symboles au milieu des côtés.\n2. Les deux lampes s'éteignent : dévisser une lampe ouvre le circuit, et dans ce montage il n'y a qu'une seule boucle, donc plus de courant nulle part.\n3. C'est un montage en série (on le reverra en détail au chapitre 6)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Voici un circuit vu dans la cour de l'école : une pile, un interrupteur ouvert, une lampe et un moteur à la suite, reliés par des fils.\n1. La lampe brille-t-elle ? Le moteur tourne-t-il ? Justifie.\n2. On ferme l'interrupteur : que se passe-t-il ?\n3. Quel est le récepteur dans ce circuit ? Y en a-t-il plusieurs ?",
        correction: "1. Non, la lampe est éteinte et le moteur ne tourne pas : l'interrupteur est ouvert, le circuit est ouvert, le courant ne circule pas.\n2. La lampe brille et le moteur tourne : le circuit est fermé, le courant circule dans toute la boucle.\n3. Il y a deux récepteurs : la lampe (courant → lumière) et le moteur (courant → mouvement). Le générateur est la pile."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch4.js =====
