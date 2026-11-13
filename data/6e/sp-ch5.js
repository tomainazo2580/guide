// ===== GUIDE - Sciences Physiques 6eme (T6) =====
// Base sur le programme officiel de Madagascar, complete par Guide.

enregistrerChapitres("6e", "sp", [
  {
    id: "sp6-courant",
    titre: "Chapitre 5 : Sens du courant, diode et DEL",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "sp6-courant-diodes",
        titre: "Les diodes et les DEL",
        blocs: [
          {
            type: "exemple",
            titre: "Les petites lumières autour de toi",
            texte: "Sur la télé, un petit point rouge en veille, vert quand elle est allumée. Sur l'ordinateur, sur la radio, sur le chargeur du téléphone : ces témoins lumineux sont des DEL."
          },
          {
            type: "definition",
            titre: "La diode",
            texte: "Une diode est un dipôle qui ne laisse passer le courant que dans un seul sens."
          },
          {
            type: "definition",
            titre: "La DEL",
            texte: "Une DEL (ou LED) est une diode qui émet de la lumière quand le courant la traverse dans le bon sens. Son nom vient de l'anglais : diode électroluminescente."
          },
          {
            type: "schema",
            titre: "Symboles de la diode et de la DEL",
            svg: "<svg viewBox='0 0 340 130' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='40' x2='55' y2='40' stroke='#1e3a5f' stroke-width='2'/><polygon points='55,26 55,54 82,40' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='82' y1='26' x2='82' y2='54' stroke='#1e3a5f' stroke-width='2'/><line x1='82' y1='40' x2='120' y2='40' stroke='#1e3a5f' stroke-width='2'/><text x='70' y='78' text-anchor='middle' font-size='12' fill='#1e3a5f'>Diode</text><line x1='185' y1='40' x2='220' y2='40' stroke='#1e3a5f' stroke-width='2'/><polygon points='220,26 220,54 247,40' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='247' y1='26' x2='247' y2='54' stroke='#1e3a5f' stroke-width='2'/><line x1='247' y1='40' x2='285' y2='40' stroke='#1e3a5f' stroke-width='2'/><line x1='232' y1='24' x2='224' y2='13' stroke='#f59e0b' stroke-width='2'/><polygon points='224,13 229,16 226,20' fill='#f59e0b'/><line x1='240' y1='27' x2='234' y2='15' stroke='#f59e0b' stroke-width='2'/><polygon points='234,15 239,18 236,22' fill='#f59e0b'/><text x='235' y='78' text-anchor='middle' font-size='12' fill='#1e3a5f'>DEL</text></svg>",
            legende: "La DEL est une diode avec deux petites flèches : elle émet de la lumière."
          },
          {
            type: "exemple",
            titre: "Où trouve-t-on des DEL ?",
            texte: "Les témoins rouge et vert de la télévision, les écrans, les lampes torches récentes, les guirlandes, les phares des vélos et des motos."
          },
          {
            type: "remarque",
            titre: "Une lampe pas comme les autres",
            texte: "La lampe ordinaire brille dans les deux sens du courant. La DEL, elle, ne brille que dans un seul sens : c'est une diode."
          }
        ]
      },
      {
        id: "sp6-courant-dipoles",
        titre: "Dipôles polarisés et non polarisés",
        blocs: [
          {
            type: "definition",
            titre: "Dipôle polarisé",
            texte: "Un dipôle polarisé a deux bornes différentes : on doit le brancher dans le bon sens. Sinon, il ne fonctionne pas.\nExemples : la diode, la DEL, le moteur à courant continu."
          },
          {
            type: "definition",
            titre: "Dipôle non polarisé",
            texte: "Un dipôle non polarisé fonctionne dans les deux sens : on peut le brancher comme on veut.\nExemples : la lampe à incandescence, la résistance."
          },
          {
            type: "tableau",
            titre: "Qui est polarisé ?",
            entetes: ["Dipôle", "Polarisé ?"],
            lignes: [
              ["Pile (générateur)", "Oui : borne + et borne −"],
              ["Diode", "Oui : un seul sens de branchement"],
              ["DEL", "Oui : elle ne brille que dans un sens"],
              ["Moteur à courant continu", "Oui : il change de sens de rotation"],
              ["Lampe à incandescence", "Non : elle brille dans les deux sens"],
              ["Résistance", "Non : elle chauffe dans les deux sens"]
            ]
          },
          {
            type: "exemple",
            titre: "L'expérience du moteur",
            texte: "Branche un petit moteur sur une pile : il tourne dans un sens. Inverse les deux fils sur les bornes de la pile : il tourne dans l'autre sens. Le moteur est polarisé."
          },
          {
            type: "remarque",
            titre: "Pourquoi c'est important",
            texte: "Avant de brancher un dipôle polarisé, regarde toujours ses bornes : la DEL branchée à l'envers ne s'allumera jamais."
          }
        ]
      },
// ===== FIN MORCEAU 1/4 — colle le morceau 2 juste en dessous =====
            {
        id: "sp6-courant-passant",
        titre: "Diode passante, diode bloquante",
        blocs: [
          {
            type: "definition",
            titre: "Diode passante",
            texte: "Une diode branchée dans le sens passant laisse passer le courant : le circuit est fermé, la lampe du circuit brille."
          },
          {
            type: "definition",
            titre: "Diode bloquante",
            texte: "Une diode branchée dans le sens bloqué ne laisse pas passer le courant : tout se passe comme si le circuit était ouvert."
          },
          {
            type: "regle",
            titre: "L'équivalence avec l'interrupteur",
            texte: "Diode passante = interrupteur fermé : le courant passe.\nDiode bloquante = interrupteur ouvert : le courant ne passe pas."
          },
          {
            type: "schema",
            titre: "Le test de la DEL",
            svg: "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='25' width='130' height='100' fill='none' stroke='#1e88e5' stroke-width='2'/><circle cx='65' cy='25' r='11' fill='#fff9c2' stroke='#1e3a5f' stroke-width='2'/><line x1='59' y1='19' x2='71' y2='31' stroke='#1e3a5f' stroke-width='1.5'/><line x1='59' y1='31' x2='71' y2='19' stroke='#1e3a5f' stroke-width='1.5'/><polygon points='60,112 60,138 80,125' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='80' y1='112' x2='80' y2='138' stroke='#1e3a5f' stroke-width='2'/><text x='95' y='75' text-anchor='middle' font-size='12' fill='#166534'>Sens passant</text><text x='95' y='92' text-anchor='middle' font-size='12' fill='#166534'>la DEL brille</text><rect x='200' y='25' width='130' height='100' fill='none' stroke='#1e88e5' stroke-width='2'/><circle cx='235' cy='25' r='11' fill='#e2e8f0' stroke='#1e3a5f' stroke-width='2'/><line x1='229' y1='19' x2='241' y2='31' stroke='#1e3a5f' stroke-width='1.5'/><line x1='229' y1='31' x2='241' y2='19' stroke='#1e3a5f' stroke-width='1.5'/><line x1='230' y1='112' x2='230' y2='138' stroke='#1e3a5f' stroke-width='2'/><polygon points='250,112 250,138 230,125' fill='none' stroke='#1e3a5f' stroke-width='2'/><text x='265' y='75' text-anchor='middle' font-size='12' fill='#dc2626'>Sens bloque</text><text x='265' y='92' text-anchor='middle' font-size='12' fill='#dc2626'>DEL eteinte</text><text x='170' y='170' text-anchor='middle' font-size='12' fill='#1e3a5f'>On inverse la DEL : tout change</text></svg>",
            legende: "La même DEL, branchée dans un sens puis dans l'autre."
          },
          {
            type: "exemple",
            titre: "L'expérience en classe",
            texte: "Monte une pile, une DEL et une lampe en série. La DEL brille : elle est passante. Tourne la DEL (inverse ses deux bornes) : elle ne brille plus, elle est bloquante. Aucun fil n'a été débranché, pourtant tout s'est arrêté."
          },
          {
            type: "remarque",
            titre: "Comment reconnaître le sens passant ?",
            texte: "Sur le symbole, le courant peut passer dans le sens de la flèche (le triangle), vers le trait vertical. Contre le trait : impossible."
          }
        ]
      },
// ===== FIN MORCEAU 2/4 — colle le morceau 3 juste en dessous =====
            {
        id: "sp6-courant-sens",
        titre: "Le sens conventionnel du courant",
        blocs: [
          {
            type: "definition",
            titre: "La convention",
            texte: "Par convention, le courant électrique circule de la borne + vers la borne − du générateur, à l'extérieur du générateur."
          },
          {
            type: "schema",
            titre: "Le sens conventionnel",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='80' y='30' width='200' height='150' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='80' y1='90' x2='80' y2='105' stroke='#1e3a5f' stroke-width='2'/><line x1='60' y1='90' x2='80' y2='90' stroke='#1e3a5f' stroke-width='2'/><line x1='66' y1='77' x2='66' y2='103' stroke='#1e3a5f' stroke-width='2'/><line x1='74' y1='83' x2='74' y2='97' stroke='#1e3a5f' stroke-width='4'/><line x1='80' y1='105' x2='80' y2='180' stroke='#1e3a5f' stroke-width='2'/><text x='48' y='86' font-size='14' font-weight='bold' fill='#dc2626'>+</text><text x='52' y='118' font-size='14' fill='#1e3a5f'>-</text><circle cx='180' cy='30' r='14' fill='none' stroke='#1e3a5f' stroke-width='2'/><line x1='170' y1='20' x2='190' y2='40' stroke='#1e3a5f' stroke-width='2'/><line x1='170' y1='40' x2='190' y2='20' stroke='#1e3a5f' stroke-width='2'/><line x1='120' y1='20' x2='150' y2='20' stroke='#dc2626' stroke-width='3'/><polygon points='150,20 140,15 140,25' fill='#dc2626'/><line x1='272' y1='80' x2='272' y2='110' stroke='#dc2626' stroke-width='3'/><polygon points='272,110 267,100 277,100' fill='#dc2626'/><line x1='230' y1='192' x2='200' y2='192' stroke='#dc2626' stroke-width='3'/><polygon points='200,192 210,187 210,197' fill='#dc2626'/></svg>",
            legende: "Les flèches rouges : le courant part du +, traverse la lampe, revient au −."
          },
          {
            type: "methode",
            titre: "Comment représenter le sens du courant",
            texte: "On dessine une flèche rouge sur un fil du circuit, à côté du conducteur. Cette flèche part de la borne + de la pile et pointe vers la borne −, en suivant la boucle extérieure."
          },
          {
            type: "exemple",
            titre: "Sur le circuit simple",
            texte: "La flèche part du + de la pile, longe le fil jusqu'à la lampe, la traverse, continue sur le fil de retour, et arrive à la borne − de la pile."
          },
          {
            type: "regle",
            titre: "Deux conditions pour que le courant circule",
            texte: "1. Le circuit doit être fermé (la boucle complète).\n2. Le circuit doit contenir un générateur (une pile).\nSans l'une de ces deux conditions : pas de courant."
          },
          {
            type: "remarque",
            titre: "Le mot « conventionnel »",
            texte: "Les savants ont choisi ce sens une fois pour toutes, pour que tout le monde parle de la même chose. Toi aussi, tu respectes cette convention dans tes schémas."
          }
        ]
      }
// ===== FIN MORCEAU 3/4 — colle le morceau 4 juste en dessous =====
          ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une DEL ? Donne deux exemples d'appareils qui utilisent des DEL.",
        correction: "Une DEL est une diode qui émet de la lumière quand le courant la traverse dans le bon sens.\nExemples : les témoins rouge et vert de la télévision, le voyant du chargeur de téléphone, les lampes torches récentes."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Recopie et complète :\nPar convention, le courant électrique circule de la borne ........ vers la borne ........ du générateur, à l'extérieur du générateur.",
        correction: "Par convention, le courant électrique circule de la borne + vers la borne − du générateur, à l'extérieur du générateur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une diode est branchée dans le sens passant dans un circuit avec une pile et une lampe.\n1. Le courant passe-t-il ?\n2. La lampe brille-t-elle ?\n3. À quoi cette diode est-elle équivalente ?",
        correction: "1. Oui, le courant passe : la diode est passante.\n2. Oui, la lampe brille : le circuit est fermé.\n3. Elle est équivalente à un interrupteur fermé."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Parmi ces dipôles, lesquels sont polarisés ? Explique ce que cela signifie.\nLa lampe à incandescence, la DEL, la résistance, le moteur à courant continu.",
        correction: "Polarisés : la DEL et le moteur à courant continu.\nCela signifie qu'ils ont deux bornes différentes : on doit les brancher dans le bon sens, sinon ils ne fonctionnent pas (ou fonctionnent à l'envers pour le moteur).\nLa lampe et la résistance fonctionnent dans les deux sens : elles sont non polarisées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un circuit série (pile, lampe, DEL), la DEL est bloquante.\n1. Le courant circule-t-il ?\n2. La lampe brille-t-elle ?\n3. Que peut-on faire pour que la lampe brille ?",
        correction: "1. Non : la diode bloquante ne laisse pas passer le courant.\n2. Non, la lampe est éteinte : tout se passe comme si le circuit était ouvert.\n3. On inverse les deux bornes de la DEL : elle devient passante, le courant circule et la lampe brille."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dessine le schéma d'un circuit fermé comportant une pile, un interrupteur fermé et une lampe. Place la flèche du sens conventionnel du courant et décris son trajet.",
        correction: "Schéma : un rectangle avec la pile (grand trait fin = borne +), l'interrupteur fermé et la lampe (cercle avec croix). Fils horizontaux et verticaux.\nLa flèche rouge part de la borne + de la pile, longe le fil, traverse la lampe, passe par l'interrupteur, et revient à la borne − de la pile."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Rado monte un circuit avec une pile, une lampe et une DEL en série. La lampe ne brille pas, la DEL non plus. Pourtant tous les fils sont bien branchés et la pile est neuve.\n1. Quelle est la cause la plus probable ?\n2. Explique pourquoi la lampe ne brille pas alors qu'elle n'est pas grillée.\n3. Que doit faire Rado ?\n4. Il refait l'expérience : cette fois les deux lampes brillent. Qu'a-t-il changé ?",
        correction: "1. La DEL est branchée dans le sens bloqué (à l'envers).\n2. La DEL bloquante agit comme un interrupteur ouvert : le courant ne circule nulle part dans la boucle, donc la lampe ne peut pas briller.\n3. Il doit inverser les deux bornes de la DEL pour la mettre dans le sens passant.\n4. Il a tourné la DEL : elle est devenue passante, le circuit est fermé, le courant circule dans toute la boucle."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Sur un circuit, on veut ajouter une DEL témoin qui s'allume en même temps que la lampe.\n1. Pourquoi le sens de branchement de la DEL est-il important, alors que celui de la lampe ne l'est pas ?\n2. On connaît le sens du courant : de la borne + vers la borne − à l'extérieur de la pile. Explique comment choisir le sens de branchement de la DEL.\n3. Que risque-t-on si on branche la DEL sans réfléchir ?",
        correction: "1. La lampe est un dipôle non polarisé : elle brille dans les deux sens du courant. La DEL est polarisée : elle ne brille que si le courant la traverse dans le sens passant.\n2. On branche la DEL pour que le courant, qui va du + vers le −, la traverse dans son sens passant (dans le sens de sa flèche, vers le trait vertical du symbole).\n3. Si on la branche à l'envers, elle est bloquante : elle ne s'allume pas, et si elle est en série avec la lampe, elle empêche aussi la lampe de briller."
      }
    ]
  }
]);
// ===== FIN DU FICHIER sp-ch5.js =====
