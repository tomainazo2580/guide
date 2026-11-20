enregistrerChapitres("3e", "sp", [
  {
    id: 20,
    titre: "Chapitre 20 : Propagation, réflexion et réfraction de la lumière",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Sources de lumière et vision",
        blocs: [
          {
            type: "introduction",
            titre: "Comment voit-on un objet ?",
            texte: "Pour voir un objet, de la lumière provenant de cet objet doit entrer dans nos yeux.\n\nUne lampe allumée produit sa propre lumière. Une feuille éclairée, elle, renvoie une partie de la lumière qu’elle reçoit : c’est cette lumière qui peut parvenir à nos yeux."
          },
          {
            type: "definition",
            titre: "Source primaire et objet diffusant",
            texte: "Une source primaire produit la lumière qu’elle émet : le Soleil, une lampe allumée ou une flamme en sont des exemples.\n\nUn objet diffusant renvoie une partie de la lumière qu’il reçoit dans différentes directions. La Lune éclairée et une feuille éclairée sont des exemples d’objets diffusants."
          },
          {
            type: "remarque",
            titre: "Dans l’obscurité",
            texte: "Un objet qui ne produit pas lui-même de lumière ne peut pas être vu s’il ne reçoit aucune lumière à renvoyer vers l’œil."
          },
          {
            type: "regle",
            titre: "Protection des yeux",
            texte: "Ne regarde jamais directement le Soleil, même à travers des lunettes ordinaires, un appareil photographique ou des jumelles. Ne dirige jamais un faisceau laser vers les yeux."
          }
        ]
      },

      {
        id: 2,
        titre: "La propagation de la lumière",
        blocs: [
          {
            type: "definition",
            titre: "Milieu transparent",
            texte: "Un milieu transparent laisse passer la lumière et permet de voir nettement à travers lui. L’air, l’eau claire et certains verres sont des exemples de milieux transparents."
          },
          {
            type: "regle",
            titre: "Propagation rectiligne",
            texte: "Dans un milieu transparent et homogène, la lumière se propage en ligne droite.\n\nUn milieu homogène possède les mêmes propriétés en chacun des points de la région étudiée."
          },
          {
            type: "definition",
            titre: "Rayon lumineux",
            texte: "On représente le trajet de la lumière par une droite ou une demi-droite munie d’une flèche : c’est un rayon lumineux. La flèche indique le sens de propagation de la lumière."
          },
          {
            type: "schema",
            titre: "Représenter un rayon lumineux",
            svg: "<svg viewBox='0 0 400 145' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Rayon lumineux allant d’une source vers un écran'><circle cx='45' cy='70' r='20' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='45' y='75' text-anchor='middle' font-size='13'>S</text><line x1='65' y1='70' x2='325' y2='70' stroke='#ea580c' stroke-width='3'/><path d='M205 70 L192 63 L192 77 Z' fill='#ea580c'/><line x1='330' y1='35' x2='330' y2='105' stroke='#475569' stroke-width='5'/><text x='45' y='120' text-anchor='middle' font-size='13'>Source</text><text x='195' y='50' text-anchor='middle' font-size='13'>Rayon lumineux</text><text x='330' y='125' text-anchor='middle' font-size='13'>Écran</text></svg>",
            legende: "La flèche indique le sens de propagation, de la source vers l’écran, dans un milieu transparent homogène."
          },
          {
            type: "exemple",
            titre: "Lumière passant par des trous alignés",
            texte: "On place une source lumineuse derrière plusieurs écrans percés d’un petit trou. Si les trous sont alignés avec la source, la lumière peut les traverser.\n\nSi l’un des écrans est décalé, la lumière directe ne traverse plus tous les trous. Cette observation illustre la propagation rectiligne."
          },
          {
            type: "remarque",
            titre: "Vitesse de la lumière",
            texte: "Dans le vide, la lumière se propage à environ 300 000 km/s, soit 3 × 10⁸ m/s. Elle se propage également dans d’autres milieux transparents, mais sa vitesse y est différente."
          }
        ]
      },

      {
        id: 3,
        titre: "Ombres",
        blocs: [
          {
            type: "definition",
            titre: "Corps opaque",
            texte: "Un corps opaque ne laisse pas passer la lumière à travers lui. Placé entre une source et un écran, il peut empêcher une partie de la lumière d’atteindre l’écran."
          },
          {
            type: "definition",
            titre: "Ombre propre et ombre portée",
            texte: "L’ombre propre est la partie non éclairée de l’objet opaque.\n\nL’ombre portée est la zone sombre formée sur une surface, par exemple un écran, lorsque l’objet empêche la lumière de l’atteindre."
          },
          {
            type: "schema",
            titre: "Formation d’une ombre portée",
            svg: "<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Source ponctuelle, objet opaque et ombre portée sur un écran'><circle cx='35' cy='110' r='7' fill='#f59e0b'/><text x='35' y='145' text-anchor='middle' font-size='13'>Source</text><text x='35' y='162' text-anchor='middle' font-size='13'>ponctuelle</text><rect x='150' y='85' width='28' height='50' fill='#475569'/><text x='164' y='70' text-anchor='middle' font-size='13'>Objet opaque</text><line x1='35' y1='110' x2='365' y2='38' stroke='#f59e0b' stroke-width='2'/><line x1='35' y1='110' x2='365' y2='182' stroke='#f59e0b' stroke-width='2'/><line x1='365' y1='20' x2='365' y2='200' stroke='#94a3b8' stroke-width='5'/><line x1='365' y1='38' x2='365' y2='182' stroke='#1e293b' stroke-width='7'/><text x='290' y='215' text-anchor='middle' font-size='13'>Ombre portée sur l’écran</text></svg>",
            legende: "Avec une source ponctuelle, les rayons limites délimitent la zone de l’écran qui ne reçoit pas directement la lumière."
          },
          {
            type: "remarque",
            titre: "Source étendue et pénombre",
            texte: "Avec une source lumineuse étendue, certaines zones peuvent recevoir la lumière d’une partie seulement de la source : ce sont des zones de pénombre. Les limites ne sont alors pas aussi nettes que dans le modèle de la source ponctuelle."
          }
        ]
      },

      {
        id: 4,
        titre: "La réflexion de la lumière",
        blocs: [
          {
            type: "definition",
            titre: "Réflexion",
            texte: "La réflexion est le renvoi de la lumière par une surface. Un miroir plan permet d’observer une réflexion régulière et de former une image."
          },
          {
            type: "definition",
            titre: "Vocabulaire",
            texte: "Le rayon incident arrive sur le miroir. Le point où il atteint le miroir est le point d’incidence.\n\nLa normale est la droite perpendiculaire au miroir au point d’incidence. Le rayon réfléchi repart du miroir."
          },
          {
            type: "schema",
            titre: "Réflexion sur un miroir plan",
            svg: "<svg viewBox='0 0 400 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Rayon incident et rayon réfléchi de part et d’autre de la normale à un miroir'><line x1='35' y1='180' x2='365' y2='180' stroke='#475569' stroke-width='5'/><text x='300' y='210' font-size='13'>Miroir plan</text><line x1='200' y1='180' x2='200' y2='25' stroke='#64748b' stroke-width='2' stroke-dasharray='6 5'/><text x='210' y='35' font-size='13'>Normale</text><line x1='80' y1='60' x2='200' y2='180' stroke='#ea580c' stroke-width='3'/><path d='M148 128 L145 113 L160 125 Z' fill='#ea580c'/><line x1='200' y1='180' x2='320' y2='60' stroke='#2563eb' stroke-width='3'/><path d='M262 118 L250 133 L265 130 Z' fill='#2563eb'/><circle cx='200' cy='180' r='4' fill='#111827'/><text x='45' y='52' font-size='13'>Rayon incident</text><text x='275' y='52' font-size='13'>Rayon réfléchi</text><text x='170' y='140' font-size='16'>i</text><text x='222' y='140' font-size='16'>r</text><text x='185' y='201' font-size='13'>I</text></svg>",
            legende: "Les angles i et r sont mesurés entre les rayons et la normale, et non entre les rayons et le miroir."
          },
          {
            type: "regle",
            titre: "Loi de la réflexion",
            texte: "Pour un miroir plan, l’angle de réflexion r est égal à l’angle d’incidence i :\n\nr = i.\n\nLe rayon incident, la normale et le rayon réfléchi sont dans un même plan. Les deux angles sont mesurés par rapport à la normale."
          },
          {
            type: "exemple",
            titre: "Calcul d’un angle",
            texte: "Si le rayon incident forme un angle de 35° avec la normale, l’angle d’incidence vaut i = 35°.\n\nL’angle de réflexion vaut donc r = 35°."
          },
          {
            type: "remarque",
            titre: "Angle avec le miroir",
            texte: "La normale est perpendiculaire au miroir. Si un rayon incident fait un angle de 30° avec la surface du miroir, il fait un angle de 90° − 30° = 60° avec la normale.\n\nSon angle d’incidence est donc 60°, et non 30°."
          }
        ]
      },

      {
        id: 5,
        titre: "La réfraction de la lumière",
        blocs: [
          {
            type: "definition",
            titre: "Changement de milieu",
            texte: "La réfraction est le changement de direction que peut subir la lumière lorsqu’elle traverse la surface séparant deux milieux transparents différents, par exemple l’air et l’eau.\n\nSa vitesse change généralement lorsqu’elle passe d’un milieu à l’autre."
          },
          {
            type: "definition",
            titre: "Rayon réfracté",
            texte: "Le rayon incident arrive sur la surface de séparation. Le rayon qui se propage dans le second milieu est le rayon réfracté.\n\nLa normale est perpendiculaire à la surface au point d’incidence. Les angles d’incidence et de réfraction sont mesurés par rapport à cette normale."
          },
          {
            type: "schema",
            titre: "Passage de l’air à l’eau",
            svg: "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Rayon passant de l’air à l’eau et se rapprochant de la normale'><rect x='0' y='125' width='400' height='125' fill='#dbeafe'/><line x1='20' y1='125' x2='380' y2='125' stroke='#2563eb' stroke-width='2'/><line x1='200' y1='20' x2='200' y2='230' stroke='#64748b' stroke-width='2' stroke-dasharray='6 5'/><line x1='90' y1='25' x2='200' y2='125' stroke='#ea580c' stroke-width='3'/><path d='M150 80 L137 68 L151 70 Z' fill='#ea580c'/><line x1='200' y1='125' x2='260' y2='230' stroke='#dc2626' stroke-width='3'/><path d='M232 181 L220 171 L233 167 Z' fill='#dc2626'/><circle cx='200' cy='125' r='4' fill='#111827'/><text x='20' y='35' font-size='14'>Air</text><text x='20' y='155' font-size='14'>Eau</text><text x='215' y='35' font-size='13'>Normale</text><text x='45' y='65' font-size='13'>Incident</text><text x='265' y='215' font-size='13'>Réfracté</text><text x='177' y='95' font-size='16'>i</text><text x='210' y='160' font-size='16'>r</text></svg>",
            legende: "Dans cet exemple, le rayon passe de l’air à l’eau et se rapproche de la normale. Les angles sont mesurés par rapport à la normale."
          },
          {
            type: "regle",
            titre: "Sens de la déviation",
            texte: "Lorsqu’un rayon passe obliquement de l’air dans l’eau, il se rapproche de la normale : l’angle de réfraction est plus petit que l’angle d’incidence.\n\nLorsqu’il passe de l’eau dans l’air et qu’un rayon réfracté existe, il s’écarte de la normale."
          },
          {
            type: "remarque",
            titre: "Incidence normale",
            texte: "Si le rayon arrive suivant la normale, il ne change pas de direction en traversant la surface. Sa vitesse peut toutefois changer."
          },
          {
            type: "exemple",
            titre: "Un objet dans l’eau",
            texte: "Une paille plongée obliquement dans un verre d’eau peut sembler cassée à la surface. La lumière provenant de la partie immergée change de direction en passant de l’eau à l’air avant d’atteindre l’œil."
          },
          {
            type: "remarque",
            titre: "Réflexion et réfraction ensemble",
            texte: "À la surface séparant deux milieux transparents, une partie de la lumière peut être réfléchie et une autre partie réfractée.\n\nDans certaines conditions, notamment lors d’un passage de l’eau vers l’air, la lumière peut être totalement réfléchie : il n’y a alors pas de rayon réfracté."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthode et bilan",
        blocs: [
          {
            type: "methode",
            titre: "Étudier un rayon sur une surface",
            texte: "1. Repérer le point d’incidence : c’est le point où le rayon arrive sur la surface.\n2. Tracer la normale, perpendiculaire à la surface en ce point.\n3. Identifier le phénomène : réflexion ou réfraction.\n4. Mesurer les angles entre les rayons et la normale.\n5. Pour une réflexion sur un miroir, utiliser r = i."
          },
          {
            type: "tableau",
            titre: "À retenir",
            entetes: ["Phénomène", "Idée essentielle"],
            lignes: [
              ["Propagation rectiligne", "Dans un milieu transparent homogène, la lumière se propage en ligne droite."],
              ["Ombre portée", "Un objet opaque empêche une partie de la lumière d’atteindre l’écran."],
              ["Réflexion", "La lumière est renvoyée par une surface ; sur un miroir, r = i."],
              ["Réfraction", "La lumière peut changer de direction en passant d’un milieu transparent à un autre."]
            ]
          },
          {
            type: "remarque",
            titre: "Erreurs à éviter",
            texte: "• Dire que la Lune produit sa propre lumière visible : elle diffuse principalement la lumière du Soleil.\n• Mesurer l’angle d’incidence par rapport au miroir au lieu de la normale.\n• Confondre rayon réfléchi et rayon réfracté.\n• Croire qu’un rayon arrivant suivant la normale est dévié.\n• Regarder directement le Soleil ou diriger un laser vers les yeux."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est la différence entre une source primaire et un objet diffusant ? Donne un exemple de chaque.",
        correction: "Une source primaire produit la lumière qu’elle émet : par exemple, une lampe allumée.\n\nUn objet diffusant renvoie une partie de la lumière qu’il reçoit : par exemple, une feuille éclairée."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Comment la lumière se propage-t-elle dans un milieu transparent et homogène ?",
        correction: "Elle se propage en ligne droite. On dit que sa propagation est rectiligne."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Pourquoi un objet opaque placé entre une lampe et un écran peut-il produire une ombre sur l’écran ?",
        correction: "L’objet opaque ne laisse pas passer la lumière. Il empêche donc une partie de la lumière de la lampe d’atteindre l’écran : une ombre portée se forme."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu’appelle-t-on la normale à un miroir au point d’incidence ?",
        correction: "C’est la droite perpendiculaire au miroir au point où le rayon incident atteint sa surface."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un rayon lumineux arrive sur un miroir avec un angle d’incidence de 40°. Quel est l’angle de réflexion ?",
        correction: "La loi de la réflexion donne r = i.\n\nDonc r = 40°. L’angle de réflexion est mesuré entre le rayon réfléchi et la normale."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un rayon incident fait un angle de 25° avec la surface d’un miroir plan. Calcule son angle d’incidence et son angle de réflexion.",
        correction: "L’angle d’incidence se mesure par rapport à la normale, perpendiculaire au miroir.\n\ni = 90° − 25° = 65°.\n\nLa loi de la réflexion donne r = i = 65°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu’est-ce que la réfraction ? Donne un exemple de deux milieux où elle peut être observée.",
        correction: "La réfraction est le changement de direction que peut subir la lumière lorsqu’elle passe d’un milieu transparent à un autre.\n\nOn peut l’observer au passage de l’air à l’eau."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un rayon passe obliquement de l’air dans l’eau. Se rapproche-t-il ou s’écarte-t-il de la normale ?",
        correction: "Il se rapproche de la normale. L’angle de réfraction dans l’eau est plus petit que l’angle d’incidence dans l’air."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un rayon arrive sur la surface de l’eau suivant la normale. Change-t-il de direction en entrant dans l’eau ? Sa vitesse peut-elle changer ?",
        correction: "Le rayon ne change pas de direction : il continue suivant la normale.\n\nEn revanche, sa vitesse change lorsqu’il passe de l’air à l’eau."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice type BEPC. Un rayon lumineux arrive sur un miroir plan. Il forme un angle de 30° avec la surface du miroir.\n\n1. Trace la normale au point d’incidence : quelle est sa direction par rapport au miroir ?\n2. Calcule l’angle d’incidence.\n3. Calcule l’angle de réflexion.\n4. Quel angle le rayon réfléchi forme-t-il avec la surface du miroir ?",
        correction: "1. La normale est perpendiculaire au miroir au point d’incidence.\n\n2. L’angle entre le rayon incident et la normale vaut i = 90° − 30° = 60°.\n\n3. D’après la loi de la réflexion : r = i = 60°.\n\n4. Le rayon réfléchi forme avec la surface du miroir un angle de 90° − 60° = 30°."
      }
    ]
  }
]);
