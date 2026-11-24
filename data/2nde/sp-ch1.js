// ===== GUIDE - Sciences physiques 2nde =====
// Chimie — Chapitre 1 : structure de l'atome.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "sp", [
  {
    id: 1,
    titre: "Chapitre 1 : Structure de l'atome",
    premium: false,
    guide: false,
    lecons: [
      {
        id: 1,
        titre: "La matière et les atomes",
        blocs: [
          {
            type: "introduction",
            titre: "De quoi la matière est-elle constituée ?",
            texte: "L'air, l'eau, les roches et les êtres vivants sont constitués de matière. Pour expliquer ses propriétés et ses transformations, les chimistes utilisent des modèles à l'échelle microscopique.\n\nLes atomes sont des constituants de la matière. Ils peuvent notamment s'assembler pour former des molécules ou donner des ions."
          },
          {
            type: "definition",
            titre: "Atome",
            texte: "Un atome est une entité électriquement neutre constituée d'un noyau autour duquel se trouvent des électrons.\n\nLe noyau est très petit devant l'atome. Il contient l'essentiel de la masse de l'atome."
          },
          {
            type: "remarque",
            titre: "Un modèle pour comprendre",
            texte: "Les schémas de ce chapitre sont des représentations simplifiées. Ils ne sont pas à l'échelle et ne montrent pas les électrons comme de petites planètes suivant des trajectoires connues avec précision."
          },
          {
            type: "exemple",
            titre: "Quelques éléments familiers",
            texte: "Le fer, le carbone, l'oxygène et l'hydrogène sont des éléments chimiques. Leurs symboles sont respectivement Fe, C, O et H.\n\nUne molécule d'eau H₂O contient deux atomes d'hydrogène et un atome d'oxygène."
          }
        ]
      },
      {
        id: 2,
        titre: "Les constituants de l'atome",
        blocs: [
          {
            type: "definition",
            titre: "Le noyau",
            texte: "Le noyau est constitué de particules appelées nucléons : les protons et les neutrons.\n\n• Un proton porte une charge électrique positive.\n• Un neutron est électriquement neutre.\n\nLes protons et les neutrons ont des masses voisines."
          },
          {
            type: "definition",
            titre: "Les électrons",
            texte: "Les électrons se trouvent autour du noyau. Chaque électron porte une charge électrique négative.\n\nLa charge d'un électron est opposée à celle d'un proton. La masse d'un électron est très faible devant celle d'un proton ou d'un neutron."
          },
          {
            type: "tableau",
            titre: "Comparer les particules",
            entetes: ["Particule", "Emplacement", "Charge électrique"],
            lignes: [
              ["Proton", "Dans le noyau", "+e"],
              ["Neutron", "Dans le noyau", "0"],
              ["Électron", "Autour du noyau", "−e"]
            ]
          },
          {
            type: "regle",
            titre: "Neutralité de l'atome",
            texte: "Un atome est électriquement neutre : il possède autant d'électrons que de protons.\n\nLes charges positives des protons et les charges négatives des électrons se compensent."
          },
          {
            type: "exemple",
            titre: "Exemple",
            texte: "Un atome dont le noyau contient 8 protons possède 8 électrons.\n\nLa charge totale du noyau est +8e et celle des électrons est −8e. La charge totale de l'atome est donc nulle."
          },
          {
            type: "schema",
            titre: "Représentation simplifiée d'un atome",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 210' role='img' aria-label='Représentation simplifiée : noyau contenant des protons et des neutrons, entouré d’électrons'><rect width='360' height='210' fill='#f8fafc'/><ellipse cx='125' cy='105' rx='90' ry='65' fill='none' stroke='#94a3b8' stroke-width='2' stroke-dasharray='5 4'/><circle cx='125' cy='105' r='32' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><text x='125' y='101' text-anchor='middle' font-size='15' fill='#1e3a8a'>p⁺</text><text x='125' y='120' text-anchor='middle' font-size='15' fill='#1e3a8a'>n</text><circle cx='35' cy='105' r='6' fill='#dc2626'/><circle cx='215' cy='105' r='6' fill='#dc2626'/><line x1='155' y1='95' x2='235' y2='60' stroke='#475569' stroke-width='1.5'/><text x='240' y='56' font-size='14' fill='#334155'>Noyau :</text><text x='240' y='75' font-size='13' fill='#334155'>protons et neutrons</text><line x1='215' y1='105' x2='235' y2='140' stroke='#475569' stroke-width='1.5'/><text x='240' y='145' font-size='14' fill='#334155'>Électron</text></svg>",
            legende: "Schéma de principe, non à l'échelle. L'ellipse ne représente pas une trajectoire réelle précise. Le nombre de particules dessinées n'est pas celui d'un atome particulier."
          }
        ]
      },
      {
        id: 3,
        titre: "Numéro atomique et nombre de nucléons",
        blocs: [
          {
            type: "definition",
            titre: "Numéro atomique Z",
            texte: "Le numéro atomique, noté Z, est le nombre de protons du noyau.\n\nTous les atomes d'un même élément chimique possèdent le même numéro atomique. Pour un atome neutre, le nombre d'électrons est également égal à Z."
          },
          {
            type: "definition",
            titre: "Nombre de nucléons A",
            texte: "Le nombre de nucléons, noté A, est le nombre total de protons et de neutrons dans le noyau.\n\nA = nombre de protons + nombre de neutrons.\n\nSi N désigne le nombre de neutrons : A = Z + N, donc N = A − Z."
          },
          {
            type: "regle",
            titre: "Notation d'un noyau",
            texte: "On représente un noyau par ᴬ_ZX, où :\n\n• X est le symbole de l'élément ;\n• Z est son numéro atomique ;\n• A est son nombre de nucléons.\n\nPar exemple, pour le carbone ¹²₆C : Z = 6 et A = 12."
          },
          {
            type: "methode",
            titre: "Déterminer les particules",
            texte: "Pour un atome neutre noté ᴬ_ZX :\n\n1. Le nombre de protons est Z.\n2. Le nombre de neutrons est A − Z.\n3. Le nombre d'électrons est Z.\n\nAttention : la dernière étape concerne l'atome neutre, pas forcément un ion."
          },
          {
            type: "exemple",
            titre: "Exemple : l'atome de sodium",
            texte: "Pour ²³₁₁Na :\n\n• Z = 11 : le noyau contient 11 protons ;\n• A = 23 : il contient 23 nucléons ;\n• N = A − Z = 23 − 11 = 12 neutrons ;\n• l'atome neutre possède 11 électrons."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre A et Z",
            texte: "Z compte uniquement les protons. A compte les protons et les neutrons. Les électrons ne sont pas des nucléons : ils ne sont donc pas comptés dans A."
          }
        ]
      },
      {
        id: 4,
        titre: "Isotopes et élément chimique",
        blocs: [
          {
            type: "definition",
            titre: "Élément chimique",
            texte: "Un élément chimique est caractérisé par son numéro atomique Z, donc par le nombre de protons de son noyau.\n\nPar exemple, tous les noyaux qui possèdent 6 protons appartiennent à l'élément carbone."
          },
          {
            type: "definition",
            titre: "Isotopes",
            texte: "Deux noyaux sont isotopes s'ils possèdent le même nombre de protons, mais des nombres de neutrons différents.\n\nIls appartiennent donc au même élément chimique. Ils ont le même numéro atomique Z, mais des nombres de nucléons A différents."
          },
          {
            type: "exemple",
            titre: "Deux isotopes du carbone",
            texte: "Les noyaux ¹²₆C et ¹⁴₆C ont chacun 6 protons.\n\n• ¹²₆C contient 12 − 6 = 6 neutrons.\n• ¹⁴₆C contient 14 − 6 = 8 neutrons.\n\nIls ont le même Z et des nombres de neutrons différents : ce sont deux isotopes du carbone."
          },
          {
            type: "remarque",
            titre: "Isotopes et stabilité",
            texte: "Certains isotopes sont stables ; d'autres sont radioactifs et se transforment spontanément. La radioactivité sera étudiée plus en détail si elle est abordée dans la suite du parcours."
          }
        ]
      },
      {
        id: 5,
        titre: "Répartition des électrons en couches",
        blocs: [
          {
            type: "introduction",
            titre: "Un modèle simplifié",
            texte: "Pour comprendre certaines propriétés chimiques, on répartit les électrons d'un atome sur des couches électroniques. Dans ce chapitre, nous utilisons un modèle simplifié pour les 18 premiers éléments."
          },
          {
            type: "regle",
            titre: "Couches K, L et M",
            texte: "Pour les atomes neutres des 18 premiers éléments, on remplit les couches dans l'ordre suivant :\n\n• couche K : au maximum 2 électrons ;\n• couche L : au maximum 8 électrons ;\n• couche M : jusqu'à 8 électrons dans ce modèle et pour les éléments étudiés ici.\n\nLe total des électrons placés doit être égal à Z."
          },
          {
            type: "methode",
            titre: "Écrire une répartition",
            texte: "1. Relever le numéro atomique Z.\n2. Pour un atome neutre, prendre Z électrons.\n3. Placer d'abord jusqu'à 2 électrons sur K.\n4. Placer ensuite jusqu'à 8 électrons sur L.\n5. Placer les électrons restants sur M, pour les 18 premiers éléments.\n6. Vérifier que la somme des électrons vaut Z."
          },
          {
            type: "exemple",
            titre: "Exemple : l'oxygène",
            texte: "L'oxygène a pour numéro atomique Z = 8. Un atome neutre d'oxygène possède donc 8 électrons.\n\nOn place 2 électrons sur K, puis les 6 autres sur L.\n\nRépartition : K² L⁶, soit 2 + 6 = 8 électrons."
          },
          {
            type: "exemple",
            titre: "Exemple : le sodium",
            texte: "Le sodium a Z = 11. Son atome neutre possède 11 électrons.\n\nOn place 2 électrons sur K, 8 sur L et le dernier sur M.\n\nRépartition : K² L⁸ M¹, soit 2 + 8 + 1 = 11 électrons."
          },
          {
            type: "definition",
            titre: "Couche externe",
            texte: "La couche externe est la dernière couche occupée par des électrons. Ses électrons jouent un rôle important dans les propriétés chimiques de l'atome.\n\nDans K² L⁸ M¹, la couche externe est M et elle contient un électron."
          },
          {
            type: "remarque",
            titre: "Limite du modèle",
            texte: "La répartition présentée ici suffit pour les 18 premiers éléments. Au-delà, le remplissage électronique demande un modèle plus détaillé : il ne faut pas généraliser la limite de 8 électrons donnée ici à tous les cas."
          }
        ]
      },
      {
        id: 6,
        titre: "Masse et dimensions de l'atome",
        blocs: [
          {
            type: "regle",
            titre: "Masse approximative",
            texte: "La masse d'un électron étant très faible devant celle d'un nucléon, on peut estimer la masse d'un atome par celle de son noyau.\n\nEn prenant la masse d'un nucléon égale à environ 1,67 × 10⁻²⁷ kg :\n\nm(atome) ≈ A × 1,67 × 10⁻²⁷ kg.\n\nC'est une approximation : la masse exacte dépend notamment de la composition du noyau."
          },
          {
            type: "exemple",
            titre: "Estimer la masse d'un atome",
            texte: "Pour l'atome ¹²₆C, A = 12.\n\nm(atome) ≈ 12 × 1,67 × 10⁻²⁷ kg\n≈ 2,00 × 10⁻²⁶ kg.\n\nCette masse est extrêmement petite."
          },
          {
            type: "remarque",
            titre: "Des dimensions très différentes",
            texte: "L'ordre de grandeur du diamètre d'un atome est d'environ 10⁻¹⁰ m. Celui d'un noyau atomique est de l'ordre de 10⁻¹⁵ à 10⁻¹⁴ m selon le noyau.\n\nLe noyau est donc beaucoup plus petit que l'atome. Les valeurs exactes varient selon l'élément et le noyau considéré."
          },
          {
            type: "methode",
            titre: "Travailler avec les puissances de dix",
            texte: "Pour multiplier un nombre par 10⁻²⁷, on conserve la puissance de dix puis on met si nécessaire le résultat en écriture scientifique.\n\nExemple : 23 × 1,67 × 10⁻²⁷ = 38,41 × 10⁻²⁷ = 3,841 × 10⁻²⁶."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Indique la charge électrique de chacune de ces particules : proton, neutron et électron. Lesquelles se trouvent dans le noyau ?",
        correction: "Le proton porte une charge positive, le neutron est neutre et l'électron porte une charge négative.\n\nLes protons et les neutrons se trouvent dans le noyau."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un atome neutre possède 7 protons. Combien possède-t-il d'électrons ? Justifie.",
        correction: "Un atome neutre possède autant d'électrons que de protons. Il possède donc 7 électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour l'atome ¹⁶₈O, donne le nombre de protons, de neutrons et d'électrons.",
        correction: "Z = 8 : il y a 8 protons.\n\nA = 16 : le nombre de neutrons est A − Z = 16 − 8 = 8.\n\nL'atome étant neutre, il possède 8 électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un atome neutre possède 13 protons et 14 neutrons. Donne Z, A et son nombre d'électrons.",
        correction: "Z est le nombre de protons : Z = 13.\n\nA est le nombre de nucléons : A = 13 + 14 = 27.\n\nL'atome étant neutre, il possède 13 électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les noyaux ³⁵₁₇Cl et ³⁷₁₇Cl sont-ils isotopes ? Combien chacun possède-t-il de neutrons ?",
        correction: "Les deux noyaux ont le même numéro atomique Z = 17. Ils possèdent donc chacun 17 protons.\n\n³⁵₁₇Cl contient 35 − 17 = 18 neutrons.\n³⁷₁₇Cl contient 37 − 17 = 20 neutrons.\n\nIls ont des nombres de neutrons différents : ce sont deux isotopes du chlore."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "L'atome de magnésium est représenté par ²⁴₁₂Mg.\n\n1. Détermine sa composition en protons, neutrons et électrons.\n2. Écris sa répartition électronique en couches K, L et M.\n3. Combien possède-t-il d'électrons sur sa couche externe ?",
        correction: "1. Z = 12 : le noyau contient 12 protons. Le nombre de neutrons est 24 − 12 = 12. L'atome neutre possède 12 électrons.\n\n2. On place 2 électrons sur K, 8 sur L et les 2 restants sur M : K² L⁸ M².\n\n3. La couche externe est M. Elle contient 2 électrons."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un atome neutre a pour répartition électronique K² L⁸ M⁵.\n\n1. Combien possède-t-il d'électrons et de protons ?\n2. Quel est son numéro atomique Z ?\n3. Sa couche externe est-elle K, L ou M ? Combien contient-elle d'électrons ?",
        correction: "1. Le nombre d'électrons est 2 + 8 + 5 = 15. Comme l'atome est neutre, il possède aussi 15 protons.\n\n2. Le numéro atomique est le nombre de protons : Z = 15.\n\n3. La couche externe est M. Elle contient 5 électrons."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère les noyaux ¹⁴₆C, ¹⁴₇N et ¹²₆C.\n\n1. Donne le nombre de protons et de neutrons de chacun.\n2. Parmi ces noyaux, lesquels sont isotopes ? Justifie.",
        correction: "1. ¹⁴₆C : 6 protons et 14 − 6 = 8 neutrons.\n\n¹⁴₇N : 7 protons et 14 − 7 = 7 neutrons.\n\n¹²₆C : 6 protons et 12 − 6 = 6 neutrons.\n\n2. ¹⁴₆C et ¹²₆C sont isotopes : ils ont le même nombre de protons, mais des nombres de neutrons différents. ¹⁴₇N ne leur est pas isotope, car son numéro atomique est différent."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Estime la masse d'un atome de sodium ²³₁₁Na. On prendra la masse d'un nucléon égale à 1,67 × 10⁻²⁷ kg et on négligera la masse des électrons.",
        correction: "L'atome possède A = 23 nucléons.\n\nm(atome) ≈ A × 1,67 × 10⁻²⁷\n≈ 23 × 1,67 × 10⁻²⁷\n≈ 38,41 × 10⁻²⁷ kg\n≈ 3,84 × 10⁻²⁶ kg.\n\nIl s'agit d'une estimation."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un atome neutre X possède 17 électrons et son noyau contient 18 neutrons.\n\n1. Détermine Z et A.\n2. L'élément de numéro atomique 17 est le chlore, de symbole Cl. Écris la notation du noyau.\n3. Écris la répartition électronique de l'atome.\n4. Un autre noyau de chlore contient 20 neutrons. Ces deux noyaux sont-ils isotopes ? Justifie.",
        correction: "1. L'atome est neutre : il possède autant de protons que d'électrons, soit 17. Donc Z = 17.\n\nA = nombre de protons + nombre de neutrons = 17 + 18 = 35.\n\n2. Le noyau se note ³⁵₁₇Cl.\n\n3. On répartit les 17 électrons : K² L⁸ M⁷. La somme vaut bien 2 + 8 + 7 = 17.\n\n4. L'autre noyau de chlore possède lui aussi 17 protons, mais 20 neutrons au lieu de 18. Les deux noyaux sont donc isotopes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Exercice de type examen. On étudie deux atomes neutres A et B.\n\n• L'atome A possède 11 protons et 12 neutrons.\n• L'atome B possède 11 protons et 13 neutrons.\n\nOn donne : l'élément de numéro atomique 11 est le sodium, symbole Na ; masse approximative d'un nucléon : 1,67 × 10⁻²⁷ kg.\n\n1. Donne les nombres Z et A de chaque noyau, puis écris leurs notations.\n2. Ces deux noyaux sont-ils isotopes ?\n3. Donne la répartition électronique de chacun des deux atomes neutres.\n4. Estime la masse de l'atome A.",
        correction: "1. Pour les deux atomes, Z = 11.\n\nPour A : nombre de nucléons = 11 + 12 = 23. Son noyau se note ²³₁₁Na.\n\nPour B : nombre de nucléons = 11 + 13 = 24. Son noyau se note ²⁴₁₁Na.\n\n2. Ces noyaux ont le même nombre de protons mais des nombres de neutrons différents : ils sont isotopes.\n\n3. Chaque atome est neutre et possède donc 11 électrons. Leur répartition électronique est K² L⁸ M¹.\n\n4. Pour l'atome A, le nombre de nucléons vaut 23.\n\nm(A) ≈ 23 × 1,67 × 10⁻²⁷\n≈ 3,84 × 10⁻²⁶ kg."
      }
    ]
  }
]);
