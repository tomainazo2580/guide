// ===== GUIDE - SVT 3e (T9) =====
// Chapitre 8 : Le cancer du col de l'utérus

enregistrerChapitres("3e", "svt", [
  {
    id: "svt3-cancer-col-uterus",
    titre: "Chapitre 8 : Le cancer du col de l'utérus",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt3-col-organes",
        titre: "Situer le col de l'utérus",
        blocs: [
          {
            type: "introduction",
            titre: "Un problème de santé que l'on peut prévenir",
            texte: "Le cancer du col de l'utérus est une maladie qui se développe au niveau du col. Certaines mesures, notamment la vaccination contre les papillomavirus humains et le dépistage, permettent de réduire les risques ou de détecter des anomalies avant qu'elles n'évoluent."
          },
          {
            type: "definition",
            titre: "L'utérus et son col",
            texte: "L'utérus est un organe de l'appareil reproducteur féminin. Sa partie inférieure, plus étroite, s'appelle le col de l'utérus. Le col relie la cavité de l'utérus au vagin."
          },
          {
            type: "schema",
            titre: "Situer le col de l'utérus",
            svg: "<svg viewBox='0 0 360 280' xmlns='http://www.w3.org/2000/svg'><text x='180' y='24' text-anchor='middle' font-size='14' fill='#1f2937'>Appareil reproducteur : vue simplifiée</text><path d='M105 65 Q180 35 255 65 Q247 125 205 155 L155 155 Q113 125 105 65 Z' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><path d='M155 155 L205 155 L198 185 L162 185 Z' fill='#f9a8d4' stroke='#be185d' stroke-width='2'/><path d='M162 185 L155 245 M198 185 L205 245' fill='none' stroke='#be185d' stroke-width='3'/><text x='180' y='100' text-anchor='middle' font-size='13' fill='#831843'>Utérus</text><text x='245' y='168' font-size='13' fill='#831843'>Col</text><line x1='238' y1='165' x2='202' y2='168' stroke='#831843'/><text x='230' y='222' font-size='13' fill='#831843'>Vagin</text><line x1='224' y1='218' x2='201' y2='215' stroke='#831843'/><text x='180' y='270' text-anchor='middle' font-size='12' fill='#374151'>Schéma simplifié, proportions non respectées</text></svg>",
            legende: "Le col est la partie inférieure de l'utérus. Il relie l'utérus au vagin. Les autres organes de l'appareil reproducteur ne sont pas représentés."
          },
          {
            type: "remarque",
            titre: "Deux localisations différentes",
            texte: "Le col est différent de la paroi interne du corps de l'utérus, appelée endomètre. Un cancer du col et un cancer de l'endomètre ne sont donc pas la même maladie."
          }
        ]
      },
      {
        id: "svt3-col-cancer",
        titre: "Qu'est-ce qu'un cancer du col ?",
        blocs: [
          {
            type: "definition",
            titre: "Le cancer",
            texte: "Un cancer apparaît lorsque des cellules se multiplient de manière incontrôlée. Elles peuvent former une tumeur, envahir les tissus voisins et parfois se propager à d'autres parties du corps."
          },
          {
            type: "texte",
            titre: "Une évolution généralement progressive",
            texte: "Au niveau du col, des cellules peuvent d'abord présenter des anomalies précancéreuses. Certaines disparaissent, mais d'autres peuvent évoluer en cancer après plusieurs années si elles ne sont pas détectées et prises en charge."
          },
          {
            type: "definition",
            titre: "Une lésion précancéreuse",
            texte: "Une lésion précancéreuse est une anomalie de cellules qui n'est pas encore un cancer, mais qui peut parfois évoluer vers un cancer. Son dépistage et sa prise en charge peuvent empêcher cette évolution."
          },
          {
            type: "remarque",
            titre: "Une anomalie n'est pas toujours un cancer",
            texte: "Un résultat anormal lors d'un dépistage ne signifie pas forcément qu'une personne a un cancer. Des examens complémentaires peuvent être nécessaires pour comprendre le résultat et décider de la suite."
          }
        ]
      },
      {
        id: "svt3-col-hpv",
        titre: "Le rôle des papillomavirus humains",
        blocs: [
          {
            type: "definition",
            titre: "Les HPV",
            texte: "Les papillomavirus humains, ou HPV, sont une famille de virus. Certains types se transmettent principalement lors de contacts sexuels. L'infection par un HPV est fréquente et passe souvent inaperçue."
          },
          {
            type: "texte",
            titre: "Infection persistante et risque",
            texte: "La plupart des infections à HPV disparaissent spontanément. Cependant, lorsqu'une infection par un HPV à haut risque persiste, elle peut provoquer des anomalies des cellules du col. Certaines de ces anomalies peuvent évoluer en cancer au fil des années."
          },
          {
            type: "schema",
            titre: "Une évolution possible, mais non automatique",
            svg: "<svg viewBox='0 0 360 300' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='10' width='290' height='44' rx='8' fill='#dbeafe' stroke='#2563eb'/><text x='180' y='37' text-anchor='middle' font-size='13' fill='#1f2937'>Infection par un HPV à haut risque</text><path d='M180 54 L180 75 M175 69 L180 76 L185 69' fill='none' stroke='#374151' stroke-width='2'/><rect x='35' y='78' width='290' height='44' rx='8' fill='#fef3c7' stroke='#92400e'/><text x='180' y='105' text-anchor='middle' font-size='13' fill='#1f2937'>Persistance de certaines infections</text><path d='M180 122 L180 143 M175 137 L180 144 L185 137' fill='none' stroke='#374151' stroke-width='2'/><rect x='35' y='146' width='290' height='44' rx='8' fill='#fed7aa' stroke='#c2410c'/><text x='180' y='173' text-anchor='middle' font-size='13' fill='#1f2937'>Anomalies précancéreuses possibles</text><path d='M180 190 L180 211 M175 205 L180 212 L185 205' fill='none' stroke='#374151' stroke-width='2'/><rect x='35' y='214' width='290' height='44' rx='8' fill='#fee2e2' stroke='#b91c1c'/><text x='180' y='241' text-anchor='middle' font-size='13' fill='#1f2937'>Cancer possible après des années</text><text x='180' y='282' text-anchor='middle' font-size='12' fill='#374151'>Chaque étape n'entraîne pas forcément la suivante.</text></svg>",
            legende: "Ce schéma montre une évolution possible. La plupart des infections disparaissent et toutes les anomalies n'évoluent pas en cancer."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre infection et cancer",
            texte: "Avoir une infection à HPV ne signifie pas avoir un cancer, ni en développer forcément un. Le cancer du col est lié principalement à la persistance d'une infection par certains HPV à haut risque."
          },
          {
            type: "remarque",
            titre: "Respect des personnes",
            texte: "Une infection à HPV est fréquente. Elle ne permet pas de juger la conduite d'une personne. Les informations de santé doivent être traitées avec respect et confidentialité."
          }
        ]
      },
      {
        id: "svt3-col-prevention",
        titre: "Vaccination et dépistage",
        blocs: [
          {
            type: "definition",
            titre: "La vaccination contre les HPV",
            texte: "Les vaccins contre les HPV protègent contre plusieurs types de papillomavirus responsables de cancers. Ils sont particulièrement utiles avant une exposition au virus. Les personnes concernées, l'âge et le nombre de doses dépendent des recommandations en vigueur."
          },
          {
            type: "definition",
            titre: "Le dépistage",
            texte: "Le dépistage consiste à rechercher une infection à risque ou des anomalies du col chez une personne qui ne présente pas nécessairement de symptômes. Selon les recommandations et les moyens disponibles, différentes méthodes peuvent être utilisées."
          },
          {
            type: "texte",
            titre: "Pourquoi le dépistage est-il utile ?",
            texte: "Le dépistage peut permettre de repérer des anomalies précancéreuses avant qu'elles n'évoluent. Un résultat anormal doit être suivi selon les conseils d'un professionnel de santé : un examen complémentaire ou un traitement peut être nécessaire."
          },
          {
            type: "regle",
            titre: "Deux moyens complémentaires",
            texte: "La vaccination réduit le risque d'infection par les types de HPV visés par le vaccin. Le dépistage recherche des anomalies ou des infections à risque selon la méthode utilisée. La vaccination ne protège pas contre tous les types de HPV : les personnes vaccinées doivent donc suivre les recommandations de dépistage qui les concernent."
          },
          {
            type: "remarque",
            titre: "Où se renseigner ?",
            texte: "Les âges, les méthodes et la fréquence du dépistage peuvent varier selon les recommandations nationales et la situation de la personne. Pour connaître les services disponibles et les conseils applicables à Madagascar, il faut se renseigner auprès d'un professionnel ou d'un centre de santé."
          }
        ]
      },
      {
        id: "svt3-col-signes-soins",
        titre: "Signes possibles et prise en charge",
        blocs: [
          {
            type: "texte",
            titre: "Une maladie parfois silencieuse",
            texte: "Au début, les anomalies précancéreuses et certains cancers peuvent ne provoquer aucun signe visible. C'est l'une des raisons pour lesquelles le dépistage est utile, même lorsqu'une personne se sent bien."
          },
          {
            type: "texte",
            titre: "Des signes à faire examiner",
            texte: "Des saignements vaginaux inhabituels, notamment après un rapport sexuel ou après la ménopause, ou des pertes vaginales inhabituelles peuvent avoir plusieurs causes. Ils demandent une évaluation par un professionnel de santé."
          },
          {
            type: "remarque",
            titre: "Un signe ne suffit pas à conclure",
            texte: "Un saignement ou une perte inhabituelle ne prouve pas qu'il s'agit d'un cancer. À l'inverse, l'absence de symptôme ne prouve pas qu'il n'existe aucune anomalie. Seuls des examens adaptés permettent d'évaluer la situation."
          },
          {
            type: "texte",
            titre: "La prise en charge",
            texte: "La prise en charge dépend des résultats et de l'état de la personne. Des lésions précancéreuses peuvent être surveillées ou traitées selon les conseils médicaux. Si un cancer est diagnostiqué, des soins adaptés sont proposés par une équipe de santé."
          }
        ]
      },
      {
        id: "svt3-col-document",
        titre: "Analyser un document de prévention",
        blocs: [
          {
            type: "methode",
            titre: "Distinguer les étapes",
            texte: "1. Repère si le document parle d'infection à HPV, de lésion précancéreuse ou de cancer.\n2. Identifie les moyens de prévention ou de dépistage mentionnés.\n3. Distingue une réduction du risque d'une protection totale.\n4. Ne transforme pas un résultat de dépistage anormal en diagnostic certain.\n5. Justifie tes réponses à partir des informations du document."
          },
          {
            type: "exemple",
            titre: "Comprendre un message",
            texte: "Un document affirme : « La vaccination contre les HPV et le dépistage sont complémentaires. » Cela signifie qu'ils n'agissent pas de la même façon : le vaccin réduit le risque lié aux types de HPV qu'il vise ; le dépistage recherche ensuite des infections à risque ou des anomalies selon la méthode employée."
          }
        ]
      },
      {
        id: "svt3-col-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan du chapitre",
            texte: "• Le col est la partie inférieure de l'utérus, reliée au vagin.\n• Le cancer du col est lié principalement à la persistance d'une infection par certains HPV à haut risque.\n• La plupart des infections à HPV disparaissent ; une infection ne signifie pas forcément cancer.\n• Certaines anomalies précancéreuses peuvent évoluer en cancer après plusieurs années.\n• La vaccination contre les HPV et le dépistage sont complémentaires.\n• Un symptôme ou un résultat anormal ne permet pas, à lui seul, de poser un diagnostic.\n• Il faut suivre les conseils d'un professionnel de santé et respecter la confidentialité des personnes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Où se situe le col de l'utérus ?",
        correction: "Le col est la partie inférieure, plus étroite, de l'utérus. Il relie l'utérus au vagin."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que signifie le sigle HPV dans ce chapitre ?",
        correction: "HPV désigne les papillomavirus humains, une famille de virus."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une personne infectée par un HPV développe-t-elle forcément un cancer du col ? Explique.",
        correction: "Non. La plupart des infections à HPV disparaissent spontanément. Une infection persistante par certains HPV à haut risque peut provoquer des anomalies, mais toutes ces anomalies n'évoluent pas en cancer."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pourquoi le dépistage peut-il être utile même en l'absence de symptômes ?",
        correction: "Des anomalies précancéreuses peuvent ne provoquer aucun signe visible. Le dépistage peut les repérer afin qu'elles soient surveillées ou prises en charge selon les conseils d'un professionnel de santé."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève dit : « Un résultat de dépistage anormal prouve que la personne a un cancer. » Corrige cette affirmation.",
        correction: "Un résultat anormal ne prouve pas à lui seul qu'il existe un cancer. Il peut révéler une infection à risque ou une anomalie nécessitant une évaluation. Un professionnel de santé indique si des examens complémentaires sont nécessaires."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique la différence entre une infection à HPV et une lésion précancéreuse du col.",
        correction: "Une infection à HPV correspond à la présence d'un papillomavirus humain. Une lésion précancéreuse est une anomalie de cellules qui n'est pas encore un cancer, mais qui peut parfois évoluer vers un cancer. Une infection persistante par certains HPV peut favoriser l'apparition de telles anomalies."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne vaccinée contre les HPV pense qu'elle n'aura jamais besoin de dépistage du col. Explique pourquoi cette conclusion est incorrecte.",
        correction: "Le vaccin réduit le risque lié aux types de HPV qu'il vise, mais il ne protège pas contre tous les types. Vaccination et dépistage sont complémentaires. Une personne vaccinée doit suivre les recommandations de dépistage qui la concernent."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un document indique que certaines anomalies du col peuvent évoluer en cancer après plusieurs années. Quel intérêt présente leur détection avant cette évolution ?",
        correction: "Détecter une anomalie avant son évolution permet à un professionnel de proposer une surveillance ou un traitement adapté. Cela peut empêcher certaines lésions précancéreuses d'évoluer en cancer. Toutes les anomalies ne deviennent toutefois pas des cancers."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un document fictif, quatre étapes sont présentées : infection par un HPV à haut risque, persistance de l'infection, anomalie précancéreuse, cancer du col. Remets-les dans l'ordre d'une évolution possible. Explique ensuite pourquoi ce document ne signifie pas que toutes les personnes infectées auront un cancer.",
        correction: "L'ordre d'une évolution possible est : infection par un HPV à haut risque → persistance de l'infection → anomalie précancéreuse → cancer du col.\nCette évolution n'est pas automatique. La plupart des infections disparaissent spontanément et toutes les anomalies ne deviennent pas cancéreuses. Le dépistage et la prise en charge peuvent aussi interrompre certaines évolutions."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une personne sans symptôme reçoit un résultat de dépistage anormal. Un voisin affirme : « Puisqu'elle ne souffre pas, le test est forcément faux ; elle ne doit pas consulter. » Analyse cette affirmation et indique une conduite adaptée.",
        correction: "L'affirmation est incorrecte. Une anomalie du col peut être présente sans provoquer de symptôme : l'absence de douleur ne prouve donc pas que le test est faux.\nCependant, un résultat anormal ne signifie pas forcément cancer. La personne doit suivre les indications d'un professionnel de santé pour savoir si un contrôle ou des examens complémentaires sont nécessaires. Sa situation doit rester confidentielle."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Pour une campagne de santé fictive, un groupe propose ce message : « Le vaccin protège contre tous les HPV. Il remplace le dépistage. Toute personne infectée aura un cancer. » Repère les trois erreurs et rédige un message corrigé.",
        correction: "Première erreur : les vaccins protègent contre plusieurs types de HPV, mais pas contre tous.\nDeuxième erreur : la vaccination ne remplace pas le dépistage recommandé aux personnes concernées ; les deux moyens sont complémentaires.\nTroisième erreur : une infection à HPV ne conduit pas forcément à un cancer. La plupart des infections disparaissent.\nMessage corrigé possible : « La vaccination contre les HPV réduit certains risques. Le dépistage permet de rechercher des infections à risque ou des anomalies selon la méthode utilisée. Renseignez-vous auprès d'un professionnel de santé sur les recommandations qui vous concernent. »"
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une campagne fictive dépiste 200 personnes. Le résultat de 20 personnes demande un examen complémentaire. Calcule la proportion correspondante en pourcentage. Peut-on conclure que 20 personnes ont un cancer ? Justifie.",
        correction: "La proportion est : 20 ÷ 200 × 100 = 10 %. Dans ce document, 10 % des personnes dépistées ont un résultat demandant un examen complémentaire.\nOn ne peut pas conclure que les 20 personnes ont un cancer. Un résultat de dépistage nécessitant une vérification n'est pas un diagnostic de cancer. Les examens complémentaires servent à préciser la situation."
      }
    ]
  }
]);
