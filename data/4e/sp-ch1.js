// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch1",
    titre: "Chapitre 1 : L'atome et ses constituants",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch1-lecon1",
        titre: "De la matière à l'atome",
        blocs: [
          {
            type: "texte",
            titre: "La matière autour de nous",
            texte: "L'eau d'une rivière, l'air, le fer d'un outil et le bois sont des exemples de matière. Pour comprendre de quoi la matière est constituée et comment elle se transforme, les scientifiques utilisent des modèles."
          },
          {
            type: "definition",
            titre: "Un modèle pour comprendre",
            texte: "Un modèle est une représentation simplifiée de la réalité. Il permet d'expliquer certaines observations, même s'il ne montre pas tous les détails."
          },
          {
            type: "definition",
            titre: "L'atome",
            texte: "Un atome est une très petite entité qui constitue la matière. Il est beaucoup trop petit pour être observé à l'œil nu."
          },
          {
            type: "exemple",
            titre: "Des atomes différents",
            texte: "Il existe différentes sortes d'atomes. Par exemple, on distingue les atomes d'hydrogène, d'oxygène, de carbone et de fer."
          },
          {
            type: "remarque",
            titre: "Atome et molécule",
            texte: "Des atomes peuvent s'associer pour former une molécule. Par exemple, une molécule d'eau contient deux atomes d'hydrogène et un atome d'oxygène. Nous étudierons les molécules plus en détail au chapitre 3."
          }
        ]
      },
      {
        id: "sp4-ch1-lecon2",
        titre: "Les constituants de l'atome",
        blocs: [
          {
            type: "definition",
            titre: "Le noyau et les électrons",
            texte: "Un atome possède un noyau central et des électrons autour de ce noyau. Le noyau est constitué de protons et, dans la plupart des atomes, de neutrons."
          },
          {
            type: "tableau",
            titre: "Trois types de particules",
            entetes: ["Particule", "Emplacement", "Charge électrique"],
            lignes: [
              ["Proton", "Dans le noyau", "Positive"],
              ["Neutron", "Dans le noyau", "Nulle"],
              ["Électron", "Autour du noyau", "Négative"]
            ]
          },
          {
            type: "schema",
            titre: "Une représentation simplifiée d'un atome",
            svg: "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><rect width='340' height='200' fill='#f8fafc'/><ellipse cx='150' cy='100' rx='105' ry='62' fill='none' stroke='#94a3b8' stroke-width='2' stroke-dasharray='5 4'/><circle cx='140' cy='95' r='15' fill='#ef4444'/><circle cx='160' cy='105' r='15' fill='#94a3b8'/><text x='140' y='100' text-anchor='middle' font-size='15' fill='white'>+</text><text x='160' y='110' text-anchor='middle' font-size='13' fill='#0f172a'>0</text><circle cx='45' cy='100' r='10' fill='#2563eb'/><text x='45' y='105' text-anchor='middle' font-size='15' fill='white'>−</text><line x1='168' y1='93' x2='250' y2='50' stroke='#475569' stroke-width='1.5'/><text x='254' y='50' font-size='13' fill='#0f172a'>Noyau</text><line x1='51' y1='109' x2='64' y2='155' stroke='#475569' stroke-width='1.5'/><text x='18' y='175' font-size='13' fill='#0f172a'>Électron</text></svg>",
            legende: "Le noyau contient ici un proton et un neutron ; l'électron est représenté autour. Ce dessin est un modèle simplifié : les tailles et la trajectoire ne sont pas réalistes."
          },
          {
            type: "remarque",
            titre: "Un noyau sans neutron ?",
            texte: "Tous les noyaux contiennent des protons. La plupart contiennent aussi des neutrons, mais le noyau de l'atome d'hydrogène le plus courant contient un proton et aucun neutron."
          },
          {
            type: "remarque",
            titre: "Une grande différence de taille",
            texte: "Le noyau est très petit par rapport à l'atome. L'essentiel du volume de l'atome se trouve autour du noyau."
          }
        ]
      },
      {
        id: "sp4-ch1-lecon3",
        titre: "La charge électrique de l'atome",
        blocs: [
          {
            type: "regle",
            titre: "Un atome est électriquement neutre",
            texte: "Dans un atome, le nombre de protons est égal au nombre d'électrons. Les charges positives des protons et les charges négatives des électrons se compensent : la charge totale de l'atome est nulle."
          },
          {
            type: "exemple",
            titre: "Compter les électrons",
            texte: "Un atome possède 8 protons. Comme il est neutre, il possède aussi 8 électrons. Le nombre de neutrons n'intervient pas dans la charge électrique, car les neutrons sont neutres."
          },
          {
            type: "methode",
            titre: "Déterminer le nombre d'électrons",
            texte: "1. Vérifie que l'énoncé parle bien d'un atome neutre.\n2. Repère son nombre de protons.\n3. Dans cet atome, le nombre d'électrons est égal au nombre de protons.\n4. Rédige ta réponse en expliquant que l'atome est neutre."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre atome et ion",
            texte: "Un ion possède une charge électrique : il ne faut donc pas appliquer automatiquement à un ion la règle « autant de protons que d'électrons ». Les ions seront étudiés au chapitre 7."
          }
        ]
      },
      {
        id: "sp4-ch1-lecon4",
        titre: "Numéro atomique et nombre de nucléons",
        blocs: [
          {
            type: "definition",
            titre: "Le numéro atomique Z",
            texte: "Le numéro atomique, noté Z, est le nombre de protons dans le noyau. Il permet d'identifier l'élément chimique. Dans un atome neutre, Z est aussi égal au nombre d'électrons."
          },
          {
            type: "definition",
            titre: "Le nombre de nucléons A",
            texte: "Les protons et les neutrons du noyau sont appelés nucléons. Le nombre de nucléons, noté A, est la somme du nombre de protons et du nombre de neutrons."
          },
          {
            type: "regle",
            titre: "Les relations à connaître",
            texte: "Nombre de protons = Z.\nNombre de nucléons = A = nombre de protons + nombre de neutrons.\nNombre de neutrons = A − Z.\nPour un atome neutre : nombre d'électrons = Z."
          },
          {
            type: "exemple",
            titre: "Un atome de carbone",
            texte: "Pour un atome de carbone ayant Z = 6 et A = 12 :\n• il y a 6 protons ;\n• il y a 12 − 6 = 6 neutrons ;\n• l'atome étant neutre, il y a 6 électrons."
          },
          {
            type: "methode",
            titre: "Retrouver les constituants d'un atome",
            texte: "1. Lis Z : c'est le nombre de protons.\n2. Calcule A − Z : c'est le nombre de neutrons.\n3. Pour un atome neutre, prends le même nombre d'électrons que de protons.\n4. Vérifie que le nombre de protons plus le nombre de neutrons donne bien A."
          },
          {
            type: "remarque",
            titre: "Des atomes du même élément",
            texte: "Des atomes d'un même élément ont le même nombre de protons. Ils peuvent cependant avoir des nombres de neutrons différents : on les appelle alors des isotopes de cet élément."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Nomme les deux grandes parties d'un atome.",
        correction: "Un atome comprend un noyau central et des électrons autour du noyau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Indique la charge électrique d'un proton, d'un neutron et d'un électron.",
        correction: "Le proton porte une charge positive. Le neutron a une charge nulle. L'électron porte une charge négative."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un atome neutre possède 11 protons.\n1. Combien possède-t-il d'électrons ?\n2. Explique ta réponse.",
        correction: "1. Il possède 11 électrons.\n2. Un atome est électriquement neutre : il possède autant d'électrons que de protons. Les charges se compensent."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le noyau d'un atome contient 8 protons et 8 neutrons.\n1. Quel est son numéro atomique Z ?\n2. Quel est son nombre de nucléons A ?",
        correction: "1. Z est le nombre de protons, donc Z = 8.\n2. A est le nombre de protons plus le nombre de neutrons : A = 8 + 8 = 16."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un atome neutre a pour numéro atomique Z = 13 et pour nombre de nucléons A = 27.\nDétermine son nombre de protons, de neutrons et d'électrons.",
        correction: "Le nombre de protons est Z = 13.\nLe nombre de neutrons est A − Z = 27 − 13 = 14.\nL'atome étant neutre, il possède autant d'électrons que de protons : 13 électrons.\nVérification : 13 + 14 = 27 nucléons."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève dit : « Un atome qui possède 6 protons et 7 neutrons a 13 électrons. » A-t-il raison ? Explique et donne le bon nombre d'électrons.",
        correction: "Non. Les 13 correspondent au nombre de nucléons : 6 protons + 7 neutrons = 13.\nL'atome est neutre : il possède autant d'électrons que de protons, donc 6 électrons."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux atomes neutres possèdent chacun 6 protons. Le premier possède 6 neutrons et le second 8 neutrons.\n1. Ont-ils le même numéro atomique ?\n2. Calcule A pour chacun.\n3. Combien d'électrons possède chacun ?\n4. Comment appelle-t-on ces deux atomes l'un par rapport à l'autre ?",
        correction: "1. Oui. Le numéro atomique est le nombre de protons : Z = 6 pour chacun.\n2. Premier atome : A = 6 + 6 = 12. Second atome : A = 6 + 8 = 14.\n3. Chaque atome est neutre et possède 6 protons : chacun possède donc 6 électrons.\n4. Ils ont le même nombre de protons mais des nombres de neutrons différents : ce sont deux isotopes du même élément."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un atome neutre possède 17 électrons et 18 neutrons.\n1. Combien possède-t-il de protons ?\n2. Détermine Z et A.\n3. Explique pourquoi sa charge totale est nulle.",
        correction: "1. L'atome est neutre : il possède autant de protons que d'électrons, soit 17 protons.\n2. Z = nombre de protons = 17. A = protons + neutrons = 17 + 18 = 35.\n3. Les 17 charges positives des protons compensent les 17 charges négatives des électrons. Les neutrons n'ont pas de charge électrique."
      }
    ]
  }
]);
