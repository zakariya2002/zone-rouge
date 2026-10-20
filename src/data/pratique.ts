import type { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "vidange-moteur-quand-et-comment",
    category: "pratique",
    title: "Vidange : le geste simple qui fait vivre votre moteur",
    excerpt:
      "Huile noire, voyant qui clignote, kilomètres qui défilent : on vous explique quand et pourquoi vidanger, et comment contrôler le niveau soi-même.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&q=80",
    imageAlt: "Mécanicien versant de l’huile neuve dans le moteur d’une voiture",
    author: "Julien Marchand",
    date: "2026-07-02",
    readTime: 4,
    tags: ["entretien", "moteur", "vidange"],
    seoTitle: "Vidange moteur : quand la faire et comment contrôler l’huile",
    seoDescription:
      "Fréquence, signes d’alerte, contrôle du niveau à la jauge et choix de l’huile : le guide clair pour réussir la vidange de votre voiture et préserver le moteur.",
    keywords: ["vidange", "huile moteur", "entretien voiture", "filtre à huile", "jauge d’huile"],
    body: [
      {
        type: "p",
        text: "C’est l’opération d’entretien la plus connue, et pourtant l’une des plus souvent repoussées. La vidange consiste à remplacer l’huile usagée du moteur par une huile neuve, généralement accompagnée du changement du filtre à huile. Un geste banal en apparence, mais dont dépend directement la longévité de votre mécanique.",
      },
      { type: "h2", text: "À quoi sert l’huile moteur ?" },
      {
        type: "p",
        text: "L’huile lubrifie les pièces en mouvement, limite les frottements, évacue une partie de la chaleur et emprisonne les impuretés issues de la combustion. Avec le temps et les kilomètres, elle perd ses propriétés : elle s’épaissit, se charge de particules et protège moins bien. Rouler trop longtemps avec une huile fatiguée, c’est accélérer l’usure de pièces coûteuses comme le turbo, les coussinets ou la distribution.",
      },
      { type: "h2", text: "Quand faut-il vidanger ?" },
      {
        type: "p",
        text: "La seule référence fiable reste le carnet d’entretien de votre véhicule. Selon les modèles et les motorisations, les intervalles varient largement, de l’ordre de 10 000 à 30 000 kilomètres, avec presque toujours une limite dans le temps, souvent d’un an ou deux. Beaucoup de voitures récentes affichent d’ailleurs un indicateur de maintenance au tableau de bord. Attention : un usage sévère, fait de petits trajets, de conduite urbaine ou de remorquage, justifie souvent des vidanges plus rapprochées.",
      },
      { type: "h2", text: "Contrôler le niveau soi-même" },
      {
        type: "p",
        text: "Entre deux vidanges, un moteur peut consommer un peu d’huile. Vérifier le niveau régulièrement, par exemple une fois par mois et avant un long trajet, est donc une excellente habitude. La méthode est simple, à condition de respecter quelques règles.",
      },
      {
        type: "list",
        items: [
          "Garez-vous sur un sol plat, moteur coupé depuis quelques minutes.",
          "Sortez la jauge, essuyez-la avec un chiffon propre, puis replongez-la à fond.",
          "Ressortez-la : le niveau doit se situer entre les repères minimum et maximum.",
          "Si besoin, complétez progressivement avec l’huile préconisée, sans dépasser le maximum.",
          "Sur certains modèles sans jauge, le niveau se consulte via l’ordinateur de bord.",
        ],
      },
      { type: "h2", text: "Choisir la bonne huile" },
      {
        type: "p",
        text: "Toutes les huiles ne se valent pas pour votre moteur. Le constructeur indique une viscosité, du type 5W30 ou 0W20, et souvent une norme précise. Respecter ces préconisations est essentiel, notamment sur les moteurs équipés d’un filtre à particules, qui exigent des huiles spécifiques. Une huile inadaptée peut, à terme, encrasser ce filtre ou réduire la protection du moteur. En cas de doute, renseignez-vous auprès de votre garagiste ou du service client de la marque.",
      },
      { type: "h2", text: "Au garage ou à la maison ?" },
      {
        type: "p",
        text: "Faire sa vidange soi-même est possible pour les bricoleurs équipés, mais l’huile usagée doit impérativement être déposée en déchetterie ou dans un point de collecte : la jeter dans la nature ou les égouts est interdit et très polluant. Passer par un professionnel garantit aussi la traçabilité dans le carnet d’entretien, un argument précieux à la revente et pour la garantie constructeur. Le professionnel en profite généralement pour jeter un œil aux autres points d’usure, des courroies aux plaquettes de frein. Enfin, gardez toutes vos factures : un historique d’entretien complet et régulier rassure toujours un futur acheteur, et reste la meilleure preuve que votre moteur a été choyé.",
      },
    ],
  },
  {
    slug: "preparer-sa-voiture-avant-les-vacances",
    category: "pratique",
    title: "Grand départ : la check-list pour partir l’esprit léger",
    excerpt:
      "Pneus, niveaux, chargement, papiers et pauses : tout ce qu’il faut vérifier avant de prendre la route des vacances en famille.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80",
    imageAlt: "SUV blanc sur une route de terre au milieu de paysages désertiques en été",
    author: "Camille Rousseau",
    date: "2026-07-08",
    readTime: 4,
    tags: ["vacances", "entretien", "sécurité"],
    seoTitle: "Préparer sa voiture avant les vacances : la check-list",
    seoDescription:
      "Pneus, freins, niveaux, chargement, documents et pauses : la liste complète pour préparer votre voiture et partir en vacances en toute sérénité cet été.",
    keywords: ["départ en vacances", "check-list voiture", "pression des pneus", "chargement", "long trajet"],
    body: [
      {
        type: "p",
        text: "Les valises sont prêtes, les enfants impatients, la destination programmée dans le GPS. Avant de tourner la clé, prenez une heure pour vous occuper de la voiture. Une panne sur l’autoroute un samedi de chassé-croisé gâche des vacances bien plus sûrement qu’un orage. La plupart des vérifications sont à la portée de tous. Et si votre révision approche, avancez-la de quelques jours : partir avec une voiture fraîchement contrôlée est la meilleure des assurances tranquillité.",
      },
      { type: "h2", text: "Les pneus, priorité absolue" },
      {
        type: "p",
        text: "Seul point de contact avec la route, les pneumatiques méritent votre attention. Contrôlez la pression à froid, en tenant compte de la charge : la plupart des constructeurs indiquent des valeurs spécifiques pour un véhicule chargé, sur une étiquette située dans l’encadrement de portière ou dans la trappe à carburant. Vérifiez aussi l’usure grâce aux témoins dans les rainures, et jetez un œil à la roue de secours ou au kit anticrevaison.",
      },
      { type: "h2", text: "Niveaux et points de contrôle" },
      {
        type: "list",
        items: [
          "Huile moteur : niveau entre minimum et maximum sur la jauge.",
          "Liquide de refroidissement : contrôle moteur froid, dans le vase d’expansion.",
          "Liquide de frein : niveau correct et aucune alerte au tableau de bord.",
          "Lave-glace : réservoir plein, les insectes d’été ne pardonnent pas.",
          "Éclairage : feux de croisement, de route, stop et clignotants.",
          "Balais d’essuie-glace : remplacez-les s’ils laissent des traces.",
        ],
      },
      { type: "h2", text: "Bien charger le véhicule" },
      {
        type: "p",
        text: "Les objets lourds se placent au fond du coffre, au plus près des dossiers de la banquette. Rien ne doit traîner sur la plage arrière : en cas de freinage brusque, une simple bouteille devient un projectile. Si vous utilisez un coffre de toit, respectez la charge maximale indiquée par le constructeur et anticipez une consommation plus élevée ainsi qu’une prise au vent accrue. Enfin, ne dépassez jamais le poids total autorisé en charge, indiqué sur le certificat d’immatriculation. Une voiture surchargée freine moins bien, chauffe davantage et use prématurément ses pneus.",
      },
      { type: "h2", text: "Les papiers et équipements obligatoires" },
      {
        type: "p",
        text: "Gardez à portée de main le certificat d’immatriculation, votre permis et l’attestation d’assurance si vous en disposez encore sous forme papier. Le gilet de haute visibilité doit être accessible sans sortir du véhicule, et le triangle de présignalisation rangé dans le coffre. Si vous passez une frontière, renseignez-vous auprès des autorités du pays visité : certaines destinations imposent des équipements ou des vignettes spécifiques.",
      },
      { type: "h2", text: "Pendant le trajet" },
      {
        type: "p",
        text: "La règle d’or reste la même depuis des années : une pause toutes les deux heures environ. Marchez, hydratez-vous, et alternez les conducteurs si possible. Partir très tôt évite la chaleur et une partie des bouchons, à condition d’avoir bien dormi. Aux premiers signes de somnolence, paupières lourdes, bâillements, raideur de la nuque, arrêtez-vous : une courte sieste de quinze à vingt minutes fait des miracles.",
      },
      {
        type: "quote",
        text: "On prépare toujours le contenu des valises pendant des jours, et la voiture en cinq minutes. C’est l’inverse qu’il faudrait faire.",
        source: "Un dépanneur autoroutier",
      },
    ],
  },
  {
    slug: "voyager-en-voiture-avec-son-chien-ou-son-chat",
    category: "pratique",
    title: "Voyager avec son animal : nos conseils pour un trajet serein",
    excerpt:
      "Harnais, caisse de transport, pauses et chaleur : comment emmener chien ou chat en voiture sans stress pour lui, ni danger pour vous.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600&q=80",
    imageAlt: "Deux chiens courant joyeusement sur un chemin de campagne au coucher du soleil",
    author: "Sophie Lefèvre",
    date: "2026-07-14",
    readTime: 4,
    tags: ["animaux", "vacances", "sécurité"],
    seoTitle: "Voyager en voiture avec son chien ou son chat : nos conseils",
    seoDescription:
      "Harnais homologué, caisse, pauses, chaleur et formalités : tout savoir pour voyager en voiture avec votre chien ou votre chat en toute sécurité et sans stress.",
    keywords: ["voyager avec un chien", "chat en voiture", "harnais chien voiture", "caisse de transport", "animal vacances"],
    body: [
      {
        type: "p",
        text: "Pour beaucoup de familles, les vacances ne se conçoivent pas sans le chien ou le chat. Encore faut-il que le voyage se passe bien. Un animal mal installé peut distraire le conducteur, se blesser lors d’un freinage ou souffrir de la chaleur. Avec un peu de préparation, le trajet devient pourtant une formalité pour tout le monde. Tout commence par une bonne installation, se poursuit par quelques précautions pendant la route, et passe, pour les voyages à l’étranger, par des formalités à anticiper.",
      },
      { type: "h2", text: "Ce que dit la règle" },
      {
        type: "p",
        text: "Le Code de la route impose au conducteur de rester en permanence en état et en position d’exécuter commodément toutes les manœuvres. Un animal qui se promène dans l’habitacle, s’installe sur les genoux du conducteur ou gêne la visibilité peut donc valoir une verbalisation. Au-delà de la sanction, c’est surtout une question de sécurité : lors d’un choc, un animal non attaché est projeté avec une force considérable.",
      },
      { type: "h2", text: "Les bonnes solutions de transport" },
      {
        type: "list",
        items: [
          "La caisse de transport, idéale pour les chats et les petits chiens, calée au sol derrière un siège ou dans le coffre.",
          "Le harnais de sécurité relié à la ceinture, à préférer au simple collier qui peut blesser le cou.",
          "La grille de séparation pour les grands chiens voyageant dans le coffre d’un break ou d’un SUV.",
          "Une couverture ou un tapis familier pour rassurer l’animal.",
        ],
      },
      { type: "h2", text: "Préparer l’animal au voyage" },
      {
        type: "p",
        text: "Évitez de nourrir votre compagnon juste avant le départ : un repas léger quelques heures avant limite les nausées. S’il n’a pas l’habitude de la voiture, habituez-le progressivement avec de courts trajets. Pour les animaux très anxieux ou sujets au mal des transports, demandez conseil à votre vétérinaire, qui pourra recommander des solutions adaptées. N’improvisez jamais avec des médicaments destinés aux humains.",
      },
      { type: "h2", text: "Pendant la route" },
      {
        type: "p",
        text: "Prévoyez de l’eau fraîche et une gamelle, et marquez des arrêts réguliers pour permettre à votre chien de se dégourdir les pattes, toujours en laisse sur les aires d’autoroute. Ventilez l’habitacle sans exposer l’animal à un courant d’air direct et ne le laissez pas passer la tête par la fenêtre, au risque de blessures aux yeux ou aux oreilles. À l’arrivée, laissez-lui le temps de découvrir son nouvel environnement et vérifiez que sa médaille ou son identification indique un numéro de téléphone joignable pendant les vacances.",
      },
      {
        type: "quote",
        text: "Une voiture au soleil devient un four en quelques minutes. Même vitres entrouvertes, même pour une course rapide, on n’y laisse jamais son animal.",
        source: "Une vétérinaire en région lyonnaise",
      },
      { type: "h2", text: "Passer une frontière" },
      {
        type: "p",
        text: "Pour voyager dans l’Union européenne avec un chien, un chat ou un furet, l’animal doit en principe être identifié par puce électronique, vacciné contre la rage et disposer d’un passeport européen. Certains pays ajoutent des exigences particulières, et les règles diffèrent hors de l’Union. Renseignez-vous suffisamment tôt auprès de votre vétérinaire et des autorités du pays de destination, car certains délais sont incompressibles.",
      },
    ],
  },
  {
    slug: "liquide-de-refroidissement-et-niveaux-a-verifier",
    category: "pratique",
    title: "Liquide de refroidissement et niveaux : les contrôles qui évitent la panne",
    excerpt:
      "Refroidissement, frein, lave-glace, direction : quelques minutes capot ouvert suffisent pour prévenir les pannes les plus fréquentes.",
    image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=1600&q=80",
    imageAlt: "Compartiment moteur d’une voiture rouge capot ouvert, vue sur les réservoirs",
    author: "Thomas Girard",
    date: "2026-07-21",
    readTime: 4,
    tags: ["entretien", "moteur", "refroidissement"],
    seoTitle: "Liquide de refroidissement et niveaux : les bons contrôles",
    seoDescription:
      "Liquide de refroidissement, de frein, lave-glace : comment vérifier les niveaux de votre voiture en toute sécurité et repérer les signes qui doivent alerter.",
    keywords: ["liquide de refroidissement", "vase d’expansion", "niveaux voiture", "liquide de frein", "surchauffe moteur"],
    body: [
      {
        type: "p",
        text: "Ouvrir le capot intimide encore beaucoup d’automobilistes. Pourtant, les principaux réservoirs sont conçus pour être contrôlés facilement, avec des bouchons souvent colorés et des repères visibles. Prendre l’habitude de jeter un œil aux niveaux, c’est détecter tôt une fuite ou une consommation anormale, avant qu’elle ne se transforme en panne coûteuse. Nul besoin d’être mécanicien : il suffit d’un chiffon propre, d’une lampe de poche et de la notice d’utilisation, qui localise chaque réservoir.",
      },
      { type: "h2", text: "Le liquide de refroidissement, gardien de la température" },
      {
        type: "p",
        text: "Il circule dans le moteur et le radiateur pour maintenir une température de fonctionnement stable. Il protège aussi contre le gel en hiver et la corrosion. Un niveau trop bas peut entraîner une surchauffe, avec des dégâts parfois graves comme un joint de culasse endommagé. Le contrôle se fait sur le vase d’expansion, un réservoir translucide marqué de repères minimum et maximum.",
      },
      {
        type: "quote",
        text: "On n’ouvre jamais le bouchon du vase d’expansion moteur chaud. Le liquide est sous pression et peut provoquer de graves brûlures.",
        source: "Un formateur en mécanique automobile",
      },
      { type: "h2", text: "Comment faire l’appoint" },
      {
        type: "p",
        text: "Attendez que le moteur soit complètement froid, idéalement après une nuit. Si le niveau est sous le minimum, complétez avec le liquide préconisé par le constructeur, sans mélanger des produits de technologies différentes. Un niveau qui baisse régulièrement n’est pas normal : il signale probablement une fuite, une durite fatiguée ou un problème plus sérieux. Dans ce cas, faites contrôler la voiture sans tarder. Le liquide lui-même se remplace à intervalles indiqués dans le carnet d’entretien.",
      },
      { type: "h2", text: "Les autres niveaux à surveiller" },
      {
        type: "list",
        items: [
          "Liquide de frein : il baisse légèrement avec l’usure des plaquettes, mais une chute rapide impose un passage au garage.",
          "Lave-glace : un liquide adapté à la saison, antigel en hiver, anti-insectes en été.",
          "Direction assistée hydraulique : présente sur certains véhicules plus anciens, avec son propre réservoir.",
          "Huile moteur : contrôle à la jauge, moteur à l’arrêt et sur sol plat.",
        ],
      },
      { type: "h2", text: "Les signaux d’alerte au volant" },
      {
        type: "p",
        text: "Une aiguille de température qui grimpe, un voyant rouge qui s’allume, de la vapeur sous le capot ou une odeur sucrée doivent vous faire réagir immédiatement. Arrêtez-vous dès que possible en sécurité, coupez le moteur et patientez. Continuer à rouler en surchauffe, même quelques kilomètres, peut transformer une simple durite à remplacer en réparation lourde. Si vous devez absolument rejoindre un lieu sûr, mettre le chauffage à fond peut évacuer temporairement un peu de chaleur, mais ce n’est qu’un expédient : appelez l’assistance plutôt que de prendre des risques.",
      },
      { type: "h2", text: "Une routine de cinq minutes" },
      {
        type: "p",
        text: "Une vérification mensuelle, complétée par un contrôle avant chaque long trajet, suffit dans la plupart des cas. Notez ce que vous ajoutez et quand : cet historique aide le garagiste à poser un diagnostic. Profitez-en pour observer le sol sous la voiture garée la nuit : une tache colorée trahit souvent une fuite avant même que le niveau ne baisse franchement. Et si un réservoir vous pose question, votre notice d’utilisation reste la meilleure alliée pour l’identifier.",
      },
    ],
  },
  {
    slug: "conduite-de-nuit-conseils-securite",
    category: "pratique",
    title: "Conduire de nuit : voir, être vu et rester vigilant",
    excerpt:
      "Moins de trafic, mais plus de risques : éblouissement, fatigue et visibilité réduite. Nos conseils pour avaler les kilomètres nocturnes en sécurité.",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1600&q=80",
    imageAlt: "Voiture phares allumés sur une route sombre plongée dans la brume",
    author: "Élodie Bernard",
    date: "2026-07-27",
    readTime: 4,
    tags: ["sécurité", "conduite", "nuit"],
    seoTitle: "Conduite de nuit : nos conseils pour rouler en sécurité",
    seoDescription:
      "Éclairage, éblouissement, fatigue, vision et animaux sauvages : les conseils essentiels pour conduire de nuit en restant vigilant et en sécurité sur la route.",
    keywords: ["conduite de nuit", "fatigue au volant", "éblouissement", "phares", "sécurité routière"],
    body: [
      {
        type: "p",
        text: "Routes dégagées, fraîcheur, enfants endormis à l’arrière : rouler de nuit séduit de nombreux conducteurs, notamment l’été. Mais l’obscurité change profondément les conditions de conduite. La vision perd en précision, les distances sont plus difficiles à évaluer et la fatigue se fait sentir plus vite. Les statistiques de sécurité routière le rappellent régulièrement : la nuit pèse lourd dans la gravité des accidents.",
      },
      { type: "h2", text: "Un éclairage irréprochable" },
      {
        type: "p",
        text: "Avant de partir, vérifiez que tous vos feux fonctionnent et que les optiques sont propres. Un phare encrassé ou jauni peut perdre une part importante de son efficacité. Le réglage en hauteur compte aussi : trop bas, il raccourcit votre champ de vision ; trop haut, il éblouit les autres usagers. Pensez à ajuster la correction de portée lorsque la voiture est chargée.",
      },
      { type: "h2", text: "Gérer l’éblouissement" },
      {
        type: "p",
        text: "Basculez en feux de croisement dès qu’un véhicule arrive en face ou que vous en suivez un. Si vous êtes ébloui, ne fixez pas les phares : portez le regard vers le bord droit de la chaussée, en ralentissant si nécessaire. Un pare-brise propre, à l’intérieur comme à l’extérieur, limite considérablement les halos lumineux. Pour les porteurs de lunettes, des verres antireflets apportent un vrai confort.",
      },
      { type: "h2", text: "La fatigue, ennemi numéro un" },
      {
        type: "p",
        text: "Notre organisme est programmé pour dormir la nuit, en particulier entre deux et cinq heures du matin. Même reposé, un conducteur voit sa vigilance chuter. Les signes doivent être pris au sérieux : bâillements répétés, yeux qui piquent, difficulté à maintenir une trajectoire, oubli des derniers kilomètres parcourus. Ouvrir la fenêtre ou monter le son ne règle rien.",
      },
      {
        type: "list",
        items: [
          "Faites une pause toutes les deux heures, et plus souvent si nécessaire.",
          "Une sieste de quinze à vingt minutes est le remède le plus efficace.",
          "Évitez les repas lourds avant et pendant le trajet.",
          "Alternez la conduite avec un autre conducteur reposé.",
          "Renoncez à partir après une journée de travail épuisante.",
        ],
      },
      { type: "h2", text: "Vitesse, distances et faune sauvage" },
      {
        type: "p",
        text: "La portée de vos phares détermine ce que vous pouvez anticiper. Rouler à une vitesse qui ne vous permet pas de vous arrêter dans la zone éclairée revient à conduire à l’aveugle. Augmentez les distances de sécurité et redoublez d’attention aux usagers vulnérables, piétons et cyclistes, souvent difficiles à distinguer.",
      },
      {
        type: "quote",
        text: "La nuit, on ne voit pas mieux la route parce qu’elle est vide. On croit simplement qu’on a le droit d’aller plus vite.",
        source: "Une monitrice d’auto-école",
      },
      {
        type: "p",
        text: "Restez aussi attentif aux animaux. À l’aube et au crépuscule, mais aussi en pleine nuit, cerfs, chevreuils et sangliers traversent fréquemment, notamment en zone forestière signalée par un panneau. Si un animal surgit, freinez fermement en gardant la trajectoire plutôt que de donner un coup de volant, qui peut avoir des conséquences bien plus graves. Après une collision avec un gros animal, sécurisez les lieux, ne touchez pas à la bête et prévenez les forces de l’ordre, puis votre assureur.",
      },
    ],
  },
  {
    slug: "constat-amiable-mode-d-emploi",
    category: "pratique",
    title: "Constat amiable : le mode d’emploi pour ne rien rater",
    excerpt:
      "Un accrochage, et c’est la panique ? Sécuriser, remplir, signer, envoyer : la méthode pas à pas pour un constat amiable bien fait.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
    imageAlt: "Main tenant un stylo et remplissant un document papier sur une table",
    author: "Camille Rousseau",
    date: "2026-08-03",
    readTime: 4,
    tags: ["assurance", "accident", "démarches"],
    seoTitle: "Constat amiable : comment le remplir étape par étape",
    seoDescription:
      "Accident ou accrochage : comment sécuriser les lieux, remplir et signer le constat amiable, et dans quel délai le transmettre à votre assureur. Le guide.",
    keywords: ["constat amiable", "accident voiture", "e-constat", "déclaration de sinistre", "assurance auto"],
    body: [
      {
        type: "p",
        text: "Un rétroviseur arraché sur un parking, une collision à faible vitesse à un carrefour : l’accrochage arrive à presque tous les conducteurs un jour ou l’autre. Le constat amiable est l’outil qui permet aux assureurs de déterminer les responsabilités et d’indemniser. Bien rempli, il simplifie tout. Bâclé, il peut vous coûter cher.",
      },
      { type: "h2", text: "D’abord, la sécurité" },
      {
        type: "p",
        text: "Avant de sortir le stylo, protégez les lieux. Allumez les feux de détresse, enfilez votre gilet de haute visibilité avant de quitter le véhicule et placez le triangle de présignalisation si la situation le permet sans danger. Sur autoroute, mettez-vous à l’abri derrière les glissières. En cas de blessé, appelez immédiatement les secours au 112, au 15 ou au 18 : le constat passe alors au second plan.",
      },
      { type: "h2", text: "Remplir le constat, case par case" },
      {
        type: "p",
        text: "Le formulaire comporte deux colonnes, A et B, une par véhicule, et une partie commune. Un seul exemplaire est rempli ensemble, chaque conducteur repartant avec sa copie. Prenez le temps, même si l’ambiance est tendue.",
      },
      {
        type: "list",
        items: [
          "Date, heure et lieu précis de l’accident, ainsi que les éventuels témoins.",
          "Identité des conducteurs, références des véhicules et des contrats d’assurance.",
          "Les cases des circonstances : cochez celles qui correspondent et indiquez leur nombre total.",
          "Le croquis : position des véhicules, sens de circulation, signalisation, point de choc.",
          "Les dégâts apparents de chaque véhicule.",
          "Les observations, si vous êtes en désaccord sur un point.",
        ],
      },
      {
        type: "quote",
        text: "Le croquis vaut souvent mieux qu’un long discours. Un dessin clair évite bien des contestations.",
        source: "Une gestionnaire de sinistres",
      },
      { type: "h2", text: "La signature, un moment clé" },
      {
        type: "p",
        text: "Ne signez que si vous êtes d’accord avec tout ce qui figure sur le document. Une fois signé par les deux parties, le constat ne doit plus être modifié : toute mention ajoutée ensuite n’a pas de valeur. Si l’autre conducteur refuse de signer ou prend la fuite, notez sa plaque d’immatriculation, recueillez des témoignages et remplissez tout de même votre partie. Votre assureur vous indiquera la marche à suivre, qui peut inclure un dépôt de plainte.",
      },
      { type: "h2", text: "Délai d’envoi, version numérique et bons réflexes" },
      {
        type: "p",
        text: "Le constat doit être transmis à votre assureur rapidement, dans un délai de cinq jours ouvrés en règle générale, sauf disposition plus favorable de votre contrat. Vérifiez vos conditions générales. Il existe aussi une version numérique, l’e-constat, utilisable depuis un smartphone lorsque les deux conducteurs disposent de l’application : la déclaration est alors transmise directement aux assureurs.",
      },
      {
        type: "p",
        text: "Pensez enfin à garder un constat dans la boîte à gants : votre assureur peut vous en fournir gratuitement. Glissez-en un exemplaire vierge avec un stylo dans la boîte à gants, et prenez quelques photos des lieux et des dégâts le jour venu. Ces éléments complèteront utilement votre déclaration. Et quelle que soit la tension du moment, restez courtois : un échange calme aboutit presque toujours à un constat plus clair, et donc à une indemnisation plus rapide.",
      },
    ],
  },
  {
    slug: "bien-laver-sa-voiture-sans-l-abimer",
    category: "pratique",
    title: "Laver sa voiture comme un pro, sans rayer la carrosserie",
    excerpt:
      "Rouleaux, haute pression ou lavage à la main : les bonnes méthodes pour une voiture éclatante, sans micro-rayures ni mauvaises surprises.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&q=80",
    imageAlt: "Homme lavant à la main une voiture noire couverte de mousse devant deux seaux",
    author: "Julien Marchand",
    date: "2026-08-10",
    readTime: 4,
    tags: ["lavage", "entretien", "carrosserie"],
    seoTitle: "Laver sa voiture sans l’abîmer : méthodes et conseils",
    seoDescription:
      "Station de lavage, haute pression ou lavage à la main : les méthodes pour nettoyer votre voiture sans rayer la peinture, et les règles à connaître en France.",
    keywords: ["laver sa voiture", "lavage auto", "méthode des deux seaux", "carrosserie", "station de lavage"],
    body: [
      {
        type: "p",
        text: "Laver sa voiture n’est pas qu’une affaire d’esthétique. Fientes d’oiseaux, sève, résidus d’insectes ou sel de déneigement attaquent le vernis et favorisent la corrosion. Un lavage régulier préserve la peinture et la valeur du véhicule. Encore faut-il employer les bonnes méthodes, car un mauvais lavage peut faire plus de mal que de bien.",
      },
      { type: "h2", text: "Où laver sa voiture ?" },
      {
        type: "p",
        text: "En France, le lavage sur la voie publique est souvent interdit ou encadré par des arrêtés municipaux, notamment pour éviter le rejet d’eaux chargées d’hydrocarbures et de détergents dans les égouts. Même chez soi, les règles varient selon les communes : renseignez-vous auprès de votre mairie. Les stations de lavage, équipées de systèmes de récupération des eaux, restent la solution la plus simple.",
      },
      { type: "h2", text: "Rouleaux, haute pression ou main ?" },
      {
        type: "p",
        text: "Les portiques à rouleaux sont rapides et pratiques, mais des brosses mal entretenues peuvent laisser des micro-rayures visibles au soleil, surtout sur les teintes foncées. Le lavage haute pression en libre-service offre un bon compromis, à condition de garder la lance à distance raisonnable des joints et des autocollants. Le lavage à la main, enfin, reste le plus doux pour la peinture lorsqu’il est bien fait. Certaines stations proposent d’ailleurs des emplacements dédiés, où l’on peut utiliser ses propres seaux et produits. Quelle que soit la méthode, un prélavage pour ramollir la saleté incrustée change tout.",
      },
      { type: "h2", text: "La méthode des deux seaux" },
      {
        type: "list",
        items: [
          "Rincez abondamment pour décoller la saleté sans frotter.",
          "Préparez un seau d’eau savonneuse et un seau d’eau claire pour rincer le gant.",
          "Lavez du haut vers le bas, les bas de caisse et les jantes en dernier.",
          "Rincez le gant dans l’eau claire après chaque panneau pour ne pas redéposer les grains.",
          "Séchez avec une microfibre propre pour éviter les traces de calcaire.",
        ],
      },
      {
        type: "quote",
        text: "Ce n’est pas la saleté qui raye une voiture, c’est la manière dont on la frotte.",
        source: "Un spécialiste du detailing",
      },
      { type: "h2", text: "Les erreurs à éviter" },
      {
        type: "p",
        text: "Évitez de laver en plein soleil : l’eau et le shampoing sèchent trop vite et laissent des traces. Bannissez le liquide vaisselle, qui dégraisse aussi les protections de la peinture, ainsi que les éponges abrasives. Pour les jantes, utilisez un produit et une brosse dédiés, jamais le même gant que pour la carrosserie, car les poussières de frein sont très agressives. Traitez sans attendre les fientes d’oiseaux et la sève, qui marquent le vernis en quelques jours au soleil. En hiver, insistez sur le rinçage des bas de caisse et des passages de roue pour éliminer le sel. Et pour prolonger l’effet, une cire ou un produit de protection appliqué quelques fois par an facilite les lavages suivants.",
      },
      { type: "h2", text: "Ne pas oublier l’intérieur" },
      {
        type: "p",
        text: "Un coup d’aspirateur sur les tapis et les sièges, un chiffon légèrement humide sur le tableau de bord, et surtout un nettoyage soigné des vitres côté habitacle : le film gras qui s’y dépose accentue l’éblouissement la nuit. Une voiture propre est aussi une voiture plus sûre.",
      },
    ],
  },
  {
    slug: "eco-conduite-consommer-moins-carburant",
    category: "pratique",
    title: "Éco-conduite : les bons réflexes pour consommer moins",
    excerpt:
      "Anticiper, passer les rapports plus tôt, surveiller ses pneus : des gestes simples pour réduire sa consommation sans rouler moins vite partout.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    imageAlt: "Berline sportive noire roulant sur une route à deux voies en fin de journée",
    author: "Thomas Girard",
    date: "2026-08-18",
    readTime: 4,
    tags: ["éco-conduite", "consommation", "conduite"],
    seoTitle: "Éco-conduite : 10 réflexes pour consommer moins de carburant",
    seoDescription:
      "Anticipation, rapports, pression des pneus, climatisation, charge : les gestes d’éco-conduite qui réduisent votre consommation et l’usure de votre voiture.",
    keywords: ["éco-conduite", "consommation carburant", "économiser essence", "conduite souple", "pression des pneus"],
    body: [
      {
        type: "p",
        text: "Le prix du carburant fluctue, mais une chose ne change pas : la façon de conduire influe fortement sur la consommation. Sans investir un euro, en modifiant simplement quelques habitudes, il est possible de faire baisser sensiblement sa facture à la pompe ou sa consommation électrique. Bonus : l’éco-conduite réduit aussi l’usure et le stress.",
      },
      { type: "h2", text: "Anticiper, la clé de tout" },
      {
        type: "p",
        text: "Chaque coup de frein gaspille l’énergie que vous avez dépensée pour accélérer. Regarder loin devant, repérer un feu qui va passer au rouge ou un ralentissement, permet de lever le pied plus tôt et de laisser la voiture rouler sur son élan. Sur la plupart des véhicules modernes, l’injection est coupée lors de ces phases de décélération en prise : vous ne consommez alors presque rien.",
      },
      { type: "h2", text: "Une conduite souple et des rapports adaptés" },
      {
        type: "p",
        text: "Les accélérations brutales font exploser la consommation. Accélérez franchement mais progressivement, et passez le rapport supérieur assez tôt, sans faire peiner le moteur. Beaucoup de voitures affichent un indicateur de changement de rapport : suivez-le. Sur voie rapide, le régulateur de vitesse aide à maintenir une allure constante, idéale pour l’efficience. En terrain vallonné, en revanche, mieux vaut parfois reprendre la main pour laisser la vitesse varier légèrement dans les côtes plutôt que d’accélérer fort. Sur une voiture électrique ou hybride, la logique est la même : la récupération d’énergie au freinage aide, mais l’anticipation reste plus efficace.",
      },
      { type: "h2", text: "La vitesse, un levier puissant" },
      {
        type: "p",
        text: "La résistance de l’air augmente très vite avec la vitesse. Rouler un peu moins vite sur autoroute, par exemple 10 km/h en dessous de la limite, réduit nettement la consommation pour un temps de trajet souvent à peine allongé. Sur un trajet de quelques centaines de kilomètres, la différence se compte généralement en minutes, pas en heures.",
      },
      { type: "h2", text: "Le véhicule aussi doit être prêt" },
      {
        type: "list",
        items: [
          "Des pneus correctement gonflés : un sous-gonflage augmente la consommation et l’usure.",
          "Retirez le coffre de toit et les barres quand vous ne les utilisez pas.",
          "Videz le coffre des objets lourds inutiles.",
          "Utilisez la climatisation avec mesure, sans viser un écart de température extrême.",
          "Respectez l’entretien prévu : filtre à air, bougies et huile adaptée.",
        ],
      },
      {
        type: "quote",
        text: "L’éco-conduite, ce n’est pas rouler lentement. C’est rouler intelligemment, en dépensant l’énergie seulement quand elle sert.",
        source: "Un formateur en conduite économique",
      },
      { type: "h2", text: "Limiter les petits trajets à froid" },
      {
        type: "p",
        text: "Un moteur thermique consomme beaucoup plus tant qu’il n’a pas atteint sa température de fonctionnement. Les trajets de quelques centaines de mètres sont les plus gourmands, et les plus polluants. Quand c’est possible, regroupez vos courses, ou optez pour la marche ou le vélo. Inutile en revanche de laisser chauffer le moteur à l’arrêt : il chauffe plus vite en roulant doucement. De même, couper le moteur lors d’un arrêt prolongé, à un passage à niveau ou en attendant quelqu’un, évite une consommation inutile. Ces réflexes, une fois acquis, deviennent naturels et finissent par se voir nettement sur le budget annuel.",
      },
    ],
  },
  {
    slug: "conduite-accompagnee-aac-comment-ca-marche",
    category: "pratique",
    title: "Conduite accompagnée : la voie royale vers le permis",
    excerpt:
      "Dès 15 ans, l’apprentissage anticipé de la conduite permet d’accumuler de l’expérience. Fonctionnement, conditions et avantages expliqués.",
    image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=1600&q=80",
    imageAlt: "Longue route droite traversant une plaine sous un ciel bleu avec des montagnes au loin",
    author: "Élodie Bernard",
    date: "2026-08-25",
    readTime: 4,
    tags: ["permis", "conduite accompagnée", "jeunes conducteurs"],
    seoTitle: "Conduite accompagnée (AAC) : fonctionnement et avantages",
    seoDescription:
      "Âge minimum, formation initiale, accompagnateur, kilomètres et rendez-vous pédagogiques : tout comprendre de la conduite accompagnée et de ses avantages.",
    keywords: ["conduite accompagnée", "AAC", "permis à 17 ans", "accompagnateur", "jeune conducteur"],
    body: [
      {
        type: "p",
        text: "L’apprentissage anticipé de la conduite, plus connu sous le nom de conduite accompagnée ou AAC, a été conçu pour une idée simple : on apprend à conduire en conduisant. En multipliant les kilomètres aux côtés d’un adulte expérimenté avant de passer l’examen, le jeune conducteur arrive mieux préparé. Et les résultats suivent.",
      },
      { type: "h2", text: "Qui peut en bénéficier ?" },
      {
        type: "p",
        text: "La conduite accompagnée est accessible dès 15 ans. Elle débute par une formation initiale en auto-école, comprenant l’obtention du code de la route et un minimum d’heures de conduite, généralement vingt heures sur boîte manuelle. Le moniteur valide ensuite les compétences acquises et délivre une attestation de fin de formation initiale, sésame pour démarrer la phase accompagnée.",
      },
      { type: "h2", text: "Le rôle de l’accompagnateur" },
      {
        type: "p",
        text: "Parent, proche ou ami de la famille, l’accompagnateur doit être titulaire du permis B depuis au moins cinq ans sans interruption. Il est possible d’en désigner plusieurs. L’accord de l’assureur du véhicule utilisé est indispensable : la plupart l’accordent sans surcoût, mais il faut impérativement le demander. Un disque « conduite accompagnée » doit être apposé à l’arrière de la voiture. L’accompagnateur ne doit évidemment pas être sous l’emprise de l’alcool, et reste attentif tout au long du trajet, comme s’il conduisait lui-même.",
      },
      { type: "h2", text: "Les étapes de la phase accompagnée" },
      {
        type: "list",
        items: [
          "Une durée d’au moins un an de conduite accompagnée.",
          "Un minimum de 3 000 kilomètres parcourus, dans des situations variées.",
          "Un premier rendez-vous pédagogique avec l’auto-école quelques mois après le début.",
          "Un second rendez-vous pédagogique avant le passage de l’examen.",
          "Le respect des limitations propres aux jeunes conducteurs.",
        ],
      },
      { type: "h2", text: "Varier les situations" },
      {
        type: "p",
        text: "L’intérêt de l’AAC tient à la diversité des expériences : ville, campagne, autoroute, pluie, nuit, trafic dense. L’accompagnateur n’est pas un moniteur, mais il peut transmettre son expérience, commenter les situations et rassurer. L’essentiel est de rester calme et bienveillant : un apprenti stressé apprend moins bien. Mieux vaut commencer par des trajets courts et connus, puis élargir progressivement le terrain de jeu. Prendre quelques minutes après chaque sortie pour revenir sur ce qui s’est bien passé, et sur ce qui reste à travailler, accélère nettement la progression. Le livret d’apprentissage permet de suivre les kilomètres et les observations.",
      },
      {
        type: "quote",
        text: "Les trajets du quotidien deviennent des leçons. Au bout d’un an, l’élève a vu bien plus de situations qu’en vingt heures d’auto-école.",
        source: "Un moniteur d’auto-école en Normandie",
      },
      { type: "h2", text: "Des avantages concrets" },
      {
        type: "p",
        text: "Les candidats issus de la conduite accompagnée affichent historiquement un meilleur taux de réussite à l’examen pratique. Depuis l’abaissement de l’âge du permis B à 17 ans, ils peuvent aussi passer l’épreuve plus tôt. Surtout, la période probatoire est réduite à deux ans au lieu de trois, et de nombreux assureurs proposent des conditions plus favorables aux jeunes conducteurs passés par l’AAC. Les modalités précises peuvent évoluer : renseignez-vous auprès de votre auto-école ou sur le site de la Sécurité routière avant de vous lancer.",
      },
    ],
  },
  {
    slug: "permis-de-conduire-les-etapes",
    category: "pratique",
    title: "Permis B : les étapes, du code à la conduite en solo",
    excerpt:
      "Inscription, code, heures de conduite, examen, période probatoire : le parcours complet pour décrocher son permis voiture en France.",
    image: "https://images.unsplash.com/photo-1678899091039-9950e7f248b5?w=1600&q=80",
    imageAlt: "Jeune conductrice souriante au volant d’une voiture, vue à travers la vitre côté conducteur",
    author: "Sophie Lefèvre",
    date: "2026-09-01",
    readTime: 4,
    tags: ["permis", "jeunes conducteurs", "démarches"],
    seoTitle: "Permis de conduire B : toutes les étapes pour l’obtenir",
    seoDescription:
      "Inscription ANTS, code de la route, formation pratique, examen et période probatoire : le parcours complet pour obtenir son permis B en France, étape par étape.",
    keywords: ["permis de conduire", "permis B", "code de la route", "examen pratique", "permis probatoire"],
    body: [
      {
        type: "p",
        text: "Passer son permis reste un rite de passage, synonyme de liberté. Le parcours peut toutefois sembler complexe la première fois, entre démarches administratives, examen théorique et épreuve pratique. Voici les grandes étapes, dans l’ordre, pour savoir à quoi s’attendre.",
      },
      { type: "h2", text: "Étape 1 : l’inscription" },
      {
        type: "p",
        text: "Tout commence par une demande de numéro d’enregistrement auprès de l’Agence nationale des titres sécurisés, l’ANTS. Elle peut être effectuée par l’auto-école ou directement en ligne si vous préparez le permis en candidat libre. Ce numéro vous suivra tout au long de votre parcours. Méfiez-vous des sites qui facturent cette démarche : seul le site officiel fait foi.",
      },
      { type: "h2", text: "Étape 2 : le code de la route" },
      {
        type: "p",
        text: "L’épreuve théorique générale se présente sous forme de questionnaire à choix multiples, passé dans un centre agréé. Elle est accessible dès 15 ans. Une fois obtenu, le code reste valable pendant une durée limitée, durant laquelle il faut réussir l’examen pratique. Renseignez-vous sur le nombre de tentatives possibles et la durée de validité au moment de votre inscription.",
      },
      { type: "h2", text: "Étape 3 : la formation pratique" },
      {
        type: "p",
        text: "La réglementation impose un minimum de vingt heures de conduite sur boîte manuelle, ou treize heures pour un permis limité à la boîte automatique. En pratique, la plupart des élèves ont besoin de davantage d’heures. Le moniteur évalue votre progression grâce au livret d’apprentissage et décide du moment où vous êtes prêt. La formation s’articule autour de quatre grandes compétences, qui structurent le programme suivi par toutes les auto-écoles. Il est aussi possible de compléter les leçons par de la conduite supervisée avec un proche, une formule moins connue que la conduite accompagnée, accessible après la formation initiale.",
      },
      {
        type: "list",
        items: [
          "Maîtriser le maniement du véhicule à allure faible et normale.",
          "Appréhender la route et circuler en conditions normales.",
          "Circuler dans des conditions difficiles et partager la route.",
          "Pratiquer une conduite autonome, sûre et économique.",
        ],
      },
      { type: "h2", text: "Étape 4 : l’examen pratique" },
      {
        type: "p",
        text: "L’épreuve dure une trentaine de minutes et est accessible dès 17 ans. L’inspecteur évalue votre capacité à conduire en sécurité dans la circulation, à réaliser des manœuvres, à suivre un itinéraire et à adopter une conduite respectueuse des autres usagers. Il ne cherche pas la perfection, mais la sécurité et l’autonomie. Une petite erreur rattrapée n’est pas éliminatoire, contrairement à une situation dangereuse. En cas de réussite, un certificat d’examen permet de conduire en attendant la réception du titre définitif. En cas d’échec, pas de panique : il est possible de se représenter, après quelques heures de perfectionnement.",
      },
      { type: "h2", text: "Étape 5 : la période probatoire" },
      {
        type: "p",
        text: "Le jeune conducteur démarre avec un capital de six points, qui augmente progressivement jusqu’à douze en l’absence d’infraction. La période probatoire dure trois ans, ou deux ans après une conduite accompagnée. Pendant cette période, le taux d’alcool autorisé est abaissé, et le disque « A » doit être apposé à l’arrière du véhicule. Les règles précises sont détaillées sur le site de la Sécurité routière.",
      },
    ],
  },
  {
    slug: "permis-a-points-comment-ca-marche",
    category: "pratique",
    title: "Permis à points : tout comprendre en dix minutes",
    excerpt:
      "Douze points, des retraits, des récupérations et des stages : le fonctionnement du permis à points enfin expliqué simplement.",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80",
    imageAlt: "Feux arrière rouges d’une voiture dans une rue animée en ville au coucher du soleil",
    author: "Julien Marchand",
    date: "2026-09-08",
    readTime: 5,
    featured: true,
    tags: ["permis", "points", "code de la route"],
    seoTitle: "Permis à points : fonctionnement, retraits et récupération",
    seoDescription:
      "Capital de 12 points, retraits selon les infractions, récupération automatique, stage de sensibilisation : le fonctionnement du permis à points expliqué.",
    keywords: ["permis à points", "récupérer des points", "stage de récupération", "solde de points", "infraction"],
    body: [
      {
        type: "p",
        text: "Instauré au début des années 1990, le permis à points a profondément changé le rapport des Français à la route. Son principe est connu de tous, mais ses mécanismes restent souvent flous : combien de points perd-on, quand les récupère-t-on, que se passe-t-il lorsqu’on arrive à zéro ? Mise au point.",
      },
      { type: "h2", text: "Un capital de douze points" },
      {
        type: "p",
        text: "Un conducteur expérimenté dispose d’un capital maximal de douze points. Le jeune conducteur, lui, démarre avec six points en période probatoire, et gagne des points chaque année sans infraction jusqu’à atteindre le plafond. Le permis ne fonctionne donc pas comme un compteur qui part de zéro : chaque infraction concernée vient retirer des points du capital existant.",
      },
      { type: "h2", text: "Combien de points pour quelle infraction ?" },
      {
        type: "p",
        text: "Le nombre de points retirés dépend de la gravité de l’infraction, d’un point pour les plus légères jusqu’à six pour les plus graves, comme la conduite sous l’emprise de l’alcool au-delà d’un certain seuil ou de stupéfiants. Le non-port de la ceinture, l’usage du téléphone tenu en main ou le franchissement d’un feu rouge entraînent des retraits significatifs. Lorsque plusieurs infractions sont commises simultanément, le retrait est plafonné, dans la limite de huit points.",
      },
      {
        type: "p",
        text: "À noter : le retrait n’est pas immédiat. Les points sont retirés lorsque la réalité de l’infraction est établie : paiement de l’amende forfaitaire, condamnation définitive ou exécution d’une composition pénale. Vous êtes ensuite informé par courrier. Pour connaître votre solde à tout moment, le service officiel en ligne accessible via FranceConnect permet de le consulter gratuitement.",
      },
      { type: "h2", text: "Récupérer ses points" },
      {
        type: "list",
        items: [
          "Après une infraction ayant entraîné le retrait d’un seul point, celui-ci est restitué au bout de six mois sans nouvelle infraction.",
          "Sans nouvelle infraction donnant lieu à retrait pendant une période déterminée, le capital est intégralement reconstitué ; la durée dépend de la nature des infractions commises.",
          "Un stage de sensibilisation à la sécurité routière permet de récupérer jusqu’à quatre points, dans la limite d’un stage par an.",
          "Le jeune conducteur en probatoire peut être tenu de suivre un stage après certaines infractions.",
        ],
      },
      {
        type: "quote",
        text: "Beaucoup découvrent leur solde le jour où ils reçoivent un courrier inquiétant. Le consulter régulièrement devrait être un réflexe.",
        source: "Un animateur de stages de sensibilisation",
      },
      { type: "h2", text: "Et à zéro point, que se passe-t-il ?" },
      {
        type: "p",
        text: "Lorsque le solde atteint zéro, le permis est invalidé. Le conducteur reçoit une lettre lui enjoignant de restituer son titre et ne peut plus conduire. Il doit alors attendre un délai avant de pouvoir repasser le permis, en général précédé d’examens médicaux et psychotechniques. Selon l’ancienneté du permis, il faudra repasser le code, voire également l’épreuve pratique.",
      },
      {
        type: "p",
        text: "Enfin, le barème et certaines modalités de récupération font régulièrement l’objet d’ajustements. Pour connaître les règles en vigueur et votre situation personnelle, renseignez-vous auprès du site officiel de la Sécurité routière ou de la préfecture. Et retenez l’essentiel : la meilleure façon de garder ses points reste de ne pas les perdre.",
      },
    ],
  },
  {
    slug: "assurance-auto-tiers-ou-tous-risques",
    category: "pratique",
    title: "Assurance auto : au tiers ou tous risques, comment choisir ?",
    excerpt:
      "Responsabilité civile, tiers étendu, tous risques, franchise : les formules décryptées pour choisir la protection adaptée à votre voiture.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    imageAlt: "Personne étudiant des documents contractuels avec une calculatrice sur une table",
    author: "Camille Rousseau",
    date: "2026-09-14",
    readTime: 4,
    tags: ["assurance", "budget", "démarches"],
    seoTitle: "Assurance auto au tiers ou tous risques : comment choisir",
    seoDescription:
      "Responsabilité civile obligatoire, tiers étendu, tous risques, franchises et options : comparez les formules d’assurance auto pour choisir la bonne protection.",
    keywords: ["assurance auto", "assurance au tiers", "tous risques", "franchise", "responsabilité civile"],
    body: [
      {
        type: "p",
        text: "En France, tout véhicule terrestre à moteur doit être assuré, même s’il ne roule pas. Au-delà de cette obligation minimale, les assureurs proposent une palette de formules aux garanties et aux tarifs très différents. Bien choisir, c’est trouver l’équilibre entre protection et budget, en fonction de votre voiture et de votre usage.",
      },
      { type: "h2", text: "Le minimum légal : la responsabilité civile" },
      {
        type: "p",
        text: "C’est le socle de toute assurance auto. La responsabilité civile couvre les dommages matériels et corporels que vous causez à autrui avec votre véhicule : les autres conducteurs, les passagers, les piétons, les biens. En revanche, elle ne couvre ni les dégâts subis par votre propre voiture lorsque vous êtes responsable, ni vos propres blessures en tant que conducteur, sauf garantie spécifique.",
      },
      { type: "h2", text: "Les trois grandes familles de formules" },
      {
        type: "list",
        items: [
          "Au tiers : la responsabilité civile, souvent complétée d’une protection juridique et d’une assistance.",
          "Tiers étendu, ou intermédiaire : ajoute des garanties comme le vol, l’incendie, le bris de glace ou les événements climatiques.",
          "Tous risques : couvre en plus les dommages subis par votre véhicule, même si vous êtes responsable ou qu’aucun tiers n’est identifié.",
        ],
      },
      { type: "h2", text: "Quelle formule pour quelle voiture ?" },
      {
        type: "p",
        text: "Pour une voiture neuve ou récente, et a fortiori financée par un crédit ou une location, la formule tous risques est généralement recommandée, voire exigée par l’organisme financeur. Pour un véhicule ancien à faible valeur de revente, une formule au tiers ou intermédiaire suffit souvent : payer une cotisation élevée pour protéger une voiture qui vaut peu n’a pas toujours de sens. Entre les deux, tout dépend de votre usage : une voiture garée dans la rue d’une grande ville n’est pas exposée aux mêmes risques qu’un véhicule rentré chaque soir dans un garage fermé.",
      },
      {
        type: "quote",
        text: "La bonne question n’est pas « combien ça coûte », mais « est-ce que je pourrais assumer seul la réparation ou le remplacement de ma voiture ».",
        source: "Une courtière en assurance",
      },
      { type: "h2", text: "Ne pas négliger la garantie du conducteur" },
      {
        type: "p",
        text: "Souvent méconnue, la garantie du conducteur couvre vos propres dommages corporels lorsque vous êtes responsable d’un accident ou qu’aucun tiers n’est en cause. Elle peut être incluse ou proposée en option, avec des plafonds variables. C’est un point essentiel à vérifier, car les conséquences d’un accident grave peuvent être lourdes.",
      },
      { type: "h2", text: "Franchise, exclusions et options" },
      {
        type: "p",
        text: "Comparez attentivement les franchises, c’est-à-dire la somme qui reste à votre charge en cas de sinistre : une cotisation basse cache parfois une franchise élevée. Lisez les exclusions, et interrogez-vous sur l’utilité des options, du véhicule de remplacement à l’assistance zéro kilomètre. Pour comparer, demandez plusieurs devis et renseignez-vous auprès d’un conseiller : les conditions générales restent la référence. Bon à savoir : après la première année de contrat, il est en principe possible de résilier à tout moment, le nouvel assureur pouvant se charger des formalités. Profitez-en pour faire le point chaque année, car vos besoins évoluent avec l’âge de la voiture, votre kilométrage et votre situation personnelle.",
      },
    ],
  },
  {
    slug: "bonus-malus-assurance-auto-explique",
    category: "pratique",
    title: "Bonus-malus : le coefficient qui fait varier votre assurance",
    excerpt:
      "Pourquoi votre prime baisse ou grimpe d’une année sur l’autre ? Le mécanisme du coefficient de réduction-majoration expliqué simplement.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
    imageAlt: "Main tenant un smartphone affichant une calculatrice au-dessus de documents papier",
    author: "Thomas Girard",
    date: "2026-09-21",
    readTime: 4,
    tags: ["assurance", "bonus-malus", "budget"],
    seoTitle: "Bonus-malus auto : comment fonctionne le coefficient CRM",
    seoDescription:
      "Coefficient de départ, bonus annuel, malus après sinistre responsable, plancher et plafond : le fonctionnement du bonus-malus en assurance auto expliqué.",
    keywords: ["bonus-malus", "coefficient CRM", "assurance auto", "sinistre responsable", "relevé d’information"],
    body: [
      {
        type: "p",
        text: "Chaque année, votre avis d’échéance d’assurance auto mentionne un chiffre parfois mystérieux : votre coefficient de réduction-majoration, plus connu sous le nom de bonus-malus. Ce mécanisme, encadré par la réglementation et appliqué par tous les assureurs, récompense les conducteurs sans sinistre et pénalise ceux qui en provoquent. Son principe est simple : un conducteur qui s’assure pour la première fois démarre avec un coefficient de 1. Ce coefficient multiplie la prime de référence fixée par l’assureur. En dessous de 1, vous bénéficiez d’un bonus, donc d’une réduction. Au-dessus, vous subissez un malus, donc une majoration. Le coefficient est recalculé à chaque échéance annuelle, en fonction des sinistres survenus au cours de l’année écoulée. Il est attaché au conducteur et à son historique, non au seul véhicule.",
      },
      { type: "h2", text: "Le bonus : 5 % par an sans accident responsable" },
      {
        type: "p",
        text: "Chaque année sans sinistre responsable, votre coefficient est multiplié par 0,95, soit une baisse de 5 %. Ce bonus est plafonné : le coefficient ne peut pas descendre en dessous de 0,50, atteint après treize années consécutives sans accident responsable. Un conducteur au bonus maximal paie donc deux fois moins que la prime de référence.",
      },
      { type: "h2", text: "Le malus : la sanction d’un sinistre responsable" },
      {
        type: "list",
        items: [
          "Un sinistre totalement responsable majore le coefficient de 25 %.",
          "Un sinistre partiellement responsable entraîne une majoration de 12,5 %.",
          "Le coefficient ne peut pas dépasser 3,50.",
          "Les sinistres non responsables, comme le vol, le bris de glace isolé ou l’incendie, n’ont en principe pas d’impact.",
        ],
      },
      {
        type: "quote",
        text: "Un seul accrochage responsable peut effacer plusieurs années de bonus. C’est pour cela que certains préfèrent régler eux-mêmes les petits dégâts.",
        source: "Un agent d’assurance",
      },
      { type: "h2", text: "Sortir du malus" },
      {
        type: "p",
        text: "La règle est plutôt favorable : après deux années consécutives sans sinistre responsable, un conducteur malussé voit son coefficient revenir directement à 1. Par ailleurs, le premier sinistre responsable n’entraîne pas de malus pour un conducteur qui bénéficie du bonus maximal depuis au moins trois ans. Ces règles sont anciennes et stables, mais votre contrat peut prévoir des dispositions particulières : vérifiez-le.",
      },
      { type: "h2", text: "Le relevé d’information, votre passeport d’assuré" },
      {
        type: "p",
        text: "Lorsque vous changez d’assureur, votre coefficient vous suit grâce au relevé d’information, document qui récapitule vos sinistres et votre bonus-malus. L’assureur doit vous le fournir sur demande. Conservez-le précieusement : il permet de faire valoir votre historique et d’obtenir un tarif cohérent avec votre profil.",
      },
      { type: "h2", text: "Faut-il déclarer tous les sinistres ?" },
      {
        type: "p",
        text: "Face à un petit dégât dont vous êtes responsable, il peut être tentant de payer vous-même pour préserver votre bonus. C’est un calcul à faire au cas par cas, en comparant le coût de la réparation à la hausse de prime sur plusieurs années. Attention toutefois : en cas de dommage causé à un tiers, la déclaration s’impose. Renseignez-vous auprès de votre assureur avant de trancher.",
      },
    ],
  },
  {
    slug: "carte-grise-demarches-certificat-immatriculation",
    category: "pratique",
    title: "Carte grise : les démarches sans prise de tête",
    excerpt:
      "Achat d’occasion, déménagement, cession : quand et comment faire votre démarche de certificat d’immatriculation, et les pièges à éviter.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
    imageAlt: "Personne effectuant une démarche en ligne sur un ordinateur portable, carte en main",
    author: "Élodie Bernard",
    date: "2026-09-28",
    readTime: 4,
    tags: ["carte grise", "démarches", "occasion"],
    seoTitle: "Carte grise : démarches, délais et pièges à éviter",
    seoDescription:
      "Achat d’un véhicule d’occasion, changement d’adresse, vente : les démarches de carte grise en ligne, les délais à respecter et les arnaques à éviter.",
    keywords: ["carte grise", "certificat d’immatriculation", "ANTS", "changement d’adresse", "déclaration de cession"],
    body: [
      {
        type: "p",
        text: "Officiellement, on parle de certificat d’immatriculation. Dans le langage courant, c’est toujours la carte grise. Ce document, indispensable pour circuler, identifie le véhicule et son titulaire. Depuis la dématérialisation des démarches, plus besoin de passer en préfecture : tout se fait en ligne, à condition de savoir où cliquer.",
      },
      { type: "h2", text: "Où faire ses démarches ?" },
      {
        type: "p",
        text: "Les démarches s’effectuent sur le site officiel de l’Agence nationale des titres sécurisés, l’ANTS, ou auprès d’un professionnel de l’automobile habilité, comme certains garages. Méfiez-vous des sites qui imitent l’apparence d’un service public et facturent des frais injustifiés. En cas de doute, passez toujours par le portail officiel ou renseignez-vous auprès de votre préfecture.",
      },
      { type: "h2", text: "Vous achetez un véhicule d’occasion" },
      {
        type: "p",
        text: "Le vendeur doit vous remettre l’ancienne carte grise barrée avec la mention « vendu le » ainsi que la date, l’heure et sa signature, un certificat de cession, un certificat de situation administrative de moins de quinze jours et, pour la plupart des véhicules, un procès-verbal de contrôle technique de moins de six mois. Vous disposez ensuite d’un mois pour faire immatriculer le véhicule à votre nom.",
      },
      {
        type: "list",
        items: [
          "Le code de cession, transmis par le vendeur après sa déclaration en ligne.",
          "Un justificatif d’identité et un justificatif de domicile.",
          "Une attestation d’assurance du véhicule.",
          "Le permis de conduire correspondant à la catégorie du véhicule.",
        ],
      },
      { type: "h2", text: "Vous vendez votre véhicule" },
      {
        type: "p",
        text: "Le vendeur doit déclarer la cession en ligne dans un délai court après la vente. Cette étape est cruciale : elle vous dégage de toute responsabilité pour les infractions commises par le nouveau propriétaire. Conservez une copie du certificat de cession et notez l’heure exacte de la remise des clés. Le jour de la vente, on pense souvent au paiement et l’on oublie cette déclaration : c’est pourtant elle qui vous protège si le nouveau propriétaire tarde à faire immatriculer le véhicule à son nom. Une fois la démarche faite, vous recevez un code de cession à transmettre à l’acheteur.",
      },
      { type: "h2", text: "Vous déménagez" },
      {
        type: "p",
        text: "Un changement d’adresse doit être signalé dans le mois qui suit le déménagement. Pour les véhicules immatriculés dans le système actuel, une étiquette autocollante à apposer sur la carte grise vous est envoyée par courrier, dans la limite d’un certain nombre de changements avant l’édition d’un nouveau titre. La démarche est gratuite sur le site officiel.",
      },
      { type: "h2", text: "Le coût de la carte grise" },
      {
        type: "p",
        text: "Le prix dépend notamment de la région, via une taxe régionale fixée par chaque conseil régional, de la puissance fiscale et des caractéristiques environnementales du véhicule. Les tarifs évoluent régulièrement : renseignez-vous sur le simulateur officiel avant votre achat pour intégrer ce coût dans votre budget. Une fois la demande validée, un certificat provisoire permet en général de circuler en attendant la réception du titre définitif, envoyé par courrier sécurisé.",
      },
    ],
  },
  {
    slug: "stationnement-regles-et-bons-reflexes",
    category: "pratique",
    title: "Stationnement : les règles pour se garer sans se faire piéger",
    excerpt:
      "Zone bleue, forfait post-stationnement, stationnement gênant ou très gênant : ce qu’il faut savoir pour se garer en ville en toute tranquillité.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1600&q=80",
    imageAlt: "Vue aérienne d’un parking extérieur avec des voitures garées sur des places marquées",
    author: "Sophie Lefèvre",
    date: "2026-10-02",
    readTime: 4,
    tags: ["stationnement", "ville", "code de la route"],
    seoTitle: "Stationnement en ville : règles, FPS et zones bleues",
    seoDescription:
      "Forfait post-stationnement, zone bleue, stationnement gênant ou très gênant, fourrière : les règles essentielles pour se garer en ville sans mauvaise surprise.",
    keywords: ["stationnement", "forfait post-stationnement", "zone bleue", "stationnement gênant", "fourrière"],
    body: [
      {
        type: "p",
        text: "Trouver une place relève parfois de l’exploit, et la tentation est grande de se garer « juste cinq minutes » là où il ne faudrait pas. Pourtant, les règles de stationnement ne sont pas qu’une affaire de contraventions : elles garantissent la circulation des piétons, des secours et des transports. Petit tour d’horizon pour ne plus se faire surprendre.",
      },
      { type: "h2", text: "Le stationnement payant et le forfait post-stationnement" },
      {
        type: "p",
        text: "Depuis la réforme entrée en vigueur en 2018, le stationnement payant sur voirie relève des communes. Ne pas payer ou dépasser la durée réglée n’entraîne plus une amende pénale, mais un forfait post-stationnement, ou FPS, dont le montant est fixé localement. Il varie donc fortement d’une ville à l’autre. Renseignez-vous auprès de la mairie ou sur les horodateurs, qui indiquent les tarifs et les horaires.",
      },
      { type: "h2", text: "La zone bleue et le disque" },
      {
        type: "p",
        text: "Dans les zones bleues, le stationnement est gratuit mais limité dans le temps. Il faut apposer de manière visible un disque de stationnement européen indiquant l’heure d’arrivée. Les durées et horaires sont précisés par la signalisation. Oublier le disque ou dépasser la durée autorisée expose à une contravention. Au-delà du stationnement payant ou limité, le Code de la route distingue plusieurs niveaux de gravité, chacun exposant à une amende et, dans de nombreux cas, à un enlèvement du véhicule en fourrière, dont les frais restent à la charge du propriétaire.",
      },
      { type: "h2", text: "Gênant, très gênant, dangereux : des sanctions croissantes" },
      {
        type: "list",
        items: [
          "Stationnement gênant : par exemple en double file, devant une entrée carrossable ou sur une voie réservée aux transports.",
          "Stationnement très gênant : notamment sur un trottoir, une piste cyclable, un passage piéton ou une place réservée aux personnes handicapées sans titre.",
          "Stationnement dangereux : à proximité d’une intersection, d’un virage ou d’un sommet de côte, avec visibilité insuffisante. Il peut entraîner un retrait de points.",
        ],
      },
      {
        type: "quote",
        text: "Une voiture sur le trottoir, c’est une poussette ou un fauteuil roulant qui doit descendre sur la chaussée.",
        source: "Une agente de surveillance de la voie publique",
      },
      { type: "h2", text: "Bien se garer, c’est aussi une question de technique" },
      {
        type: "p",
        text: "Laissez assez d’espace devant et derrière pour que les autres puissent manœuvrer. En pente, braquez les roues vers le trottoir en descente et serrez fermement le frein à main. Avant d’ouvrir votre portière côté circulation, vérifiez l’arrivée de cyclistes et de deux-roues : la technique dite de l’ouverture par la main opposée oblige à tourner le buste et à regarder derrière. Enfin, ne laissez jamais d’objets de valeur en évidence dans l’habitacle : un sac sur la banquette suffit à attirer les convoitises.",
      },
      { type: "h2", text: "Parkings et applications" },
      {
        type: "p",
        text: "Les parkings souterrains et les parcs relais en périphérie offrent souvent une alternative plus sereine, notamment pour les longues durées. De nombreuses villes proposent aussi le paiement par application mobile, pratique pour prolonger sa durée à distance. Vérifiez simplement que l’application utilisée est bien celle référencée par votre commune. En cas de FPS que vous estimez injustifié, une procédure de recours administratif préalable existe : les modalités figurent sur l’avis reçu.",
      },
    ],
  },
  {
    slug: "entretien-moto-les-gestes-essentiels",
    category: "pratique",
    title: "Entretien moto : les gestes essentiels pour rouler serein",
    excerpt:
      "Chaîne, pneus, freins, niveaux et batterie : la routine d’entretien qui garde votre moto fiable et sûre, saison après saison.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1600&q=80",
    imageAlt: "Moto sportive rouge stationnée dans un garage faiblement éclairé",
    author: "Antoine Delmas",
    date: "2026-10-06",
    readTime: 4,
    tags: ["moto", "entretien", "sécurité"],
    seoTitle: "Entretien moto : chaîne, pneus, freins, les gestes clés",
    seoDescription:
      "Graissage et tension de la chaîne, pression des pneus, plaquettes, niveaux et hivernage : les gestes d’entretien moto essentiels pour rouler en sécurité.",
    keywords: ["entretien moto", "chaîne moto", "pneus moto", "plaquettes de frein", "hivernage moto"],
    body: [
      {
        type: "p",
        text: "Sur une moto, la mécanique est exposée, sollicitée et directement liée à la sécurité du pilote. Un pneu sous-gonflé ou une chaîne détendue se ressentent immédiatement dans le comportement. La bonne nouvelle, c’est que l’essentiel de l’entretien courant est accessible à tout motard un peu attentif, avec quelques outils de base.",
      },
      { type: "h2", text: "La chaîne, pièce maîtresse" },
      {
        type: "p",
        text: "Sur les motos à transmission par chaîne, celle-ci réclame une attention régulière. Elle doit être nettoyée et graissée fréquemment, en particulier après un roulage sous la pluie. Sa tension se contrôle selon les préconisations du manuel d’utilisation : trop tendue, elle use prématurément le kit ; trop lâche, elle risque de sauter. Un kit chaîne fatigué, avec des dents de couronne en forme de crochet, doit être remplacé dans son ensemble. Utilisez un dégraissant et un lubrifiant adaptés aux chaînes à joints toriques, jamais un solvant agressif.",
      },
      { type: "h2", text: "Les pneus, votre assurance-vie" },
      {
        type: "p",
        text: "Deux petites surfaces de contact assurent toute l’adhérence. Contrôlez la pression à froid au moins toutes les deux semaines, et adaptez-la si vous roulez en duo ou chargé, selon les valeurs du constructeur. Surveillez l’usure, les coupures et les déformations. Un pneu ancien, même peu usé, durcit avec le temps et perd en adhérence : la date de fabrication figure sur le flanc. Après le montage de pneus neufs, roulez prudemment les premiers kilomètres, le temps que la gomme perde son aspect lisse de sortie d’usine.",
      },
      { type: "h2", text: "La check-list avant de rouler" },
      {
        type: "list",
        items: [
          "Freins : efficacité des leviers, épaisseur des plaquettes, niveau de liquide.",
          "Éclairage et clignotants en état de marche.",
          "Niveau d’huile moteur au hublot ou à la jauge.",
          "Liquide de refroidissement pour les moteurs refroidis par eau.",
          "Jeu et fonctionnement des commandes, câble d’embrayage et poignée de gaz.",
        ],
      },
      { type: "h2", text: "Révisions et contrôle technique" },
      {
        type: "p",
        text: "Respectez les révisions prévues par le constructeur : vidange, filtres, jeu aux soupapes, liquide de frein. Notez chaque intervention dans le carnet, un atout à la revente. Par ailleurs, les deux-roues motorisés sont désormais soumis à un contrôle technique périodique en France, selon un calendrier qui dépend de la date de première immatriculation. Renseignez-vous auprès d’un centre agréé ou sur le site officiel du service public pour connaître votre échéance.",
      },
      { type: "h2", text: "Hivernage et équipement" },
      {
        type: "p",
        text: "Si votre moto reste au garage plusieurs mois, nettoyez-la soigneusement, graissez la chaîne, faites le plein pour limiter la condensation dans le réservoir et branchez la batterie sur un mainteneur de charge. Un léger surgonflage des pneus ou une béquille d’atelier évite les déformations. Au printemps, un contrôle complet s’impose avant de reprendre la route.",
      },
      {
        type: "p",
        text: "L’équipement du pilote s’entretient aussi. Le casque homologué et les gants certifiés sont obligatoires. Un casque ayant subi un choc doit être remplacé, et sa durée de vie reste limitée même sans chute : suivez les recommandations du fabricant. Nettoyez régulièrement la visière et traitez le cuir de vos vêtements pour préserver leur protection.",
      },
    ],
  },
  {
    slug: "freins-voiture-signes-usure",
    category: "pratique",
    title: "Freins : les signes qui doivent vous alerter",
    excerpt:
      "Grincements, vibrations, pédale molle, voyant allumé : savoir reconnaître l’usure des freins avant qu’il ne soit trop tard.",
    image: "https://images.unsplash.com/photo-1778087432647-b84c500cc302?w=1600&q=80",
    imageAlt: "Gros plan sur une jante sombre laissant voir le disque de frein et l’étrier rouge d’une voiture",
    author: "Antoine Delmas",
    date: "2026-10-09",
    readTime: 4,
    tags: ["freins", "entretien", "sécurité"],
    seoTitle: "Usure des freins : les signes qui doivent vous alerter",
    seoDescription:
      "Plaquettes, disques, liquide de frein : les bruits, vibrations et sensations qui trahissent l’usure du freinage, et quand passer au garage pour un contrôle.",
    keywords: ["freins voiture", "plaquettes de frein", "disques de frein", "liquide de frein", "usure freinage"],
    body: [
      {
        type: "p",
        text: "Le système de freinage est sans doute l’élément de sécurité le plus important de votre voiture. Il s’use pourtant progressivement, si bien que l’on s’habitue à une baisse d’efficacité sans s’en rendre compte. Connaître les signes d’alerte permet d’intervenir à temps, et souvent de limiter la facture.",
      },
      { type: "h2", text: "Comment fonctionnent vos freins" },
      {
        type: "p",
        text: "Sur la plupart des voitures modernes, chaque roue avant, et souvent arrière, est équipée d’un disque solidaire de la roue et d’un étrier qui vient pincer ce disque à l’aide de plaquettes. La pression est transmise par le liquide de frein, depuis la pédale jusqu’aux étriers. Certaines voitures conservent des tambours à l’arrière. Plaquettes, disques et liquide sont les trois principaux éléments à surveiller. Le frein de stationnement, manuel ou électrique, mérite lui aussi un contrôle lors des révisions.",
      },
      { type: "h2", text: "Les signes d’usure à connaître" },
      {
        type: "list",
        items: [
          "Un grincement aigu au freinage : de nombreuses plaquettes intègrent un témoin sonore d’usure.",
          "Un bruit de frottement métallique : la plaquette est peut-être usée jusqu’au support.",
          "Des vibrations dans la pédale ou le volant : signe possible de disques voilés.",
          "Une voiture qui tire d’un côté au freinage.",
          "Une pédale molle, spongieuse, ou qui s’enfonce davantage.",
          "Un voyant d’usure ou de liquide de frein allumé au tableau de bord.",
        ],
      },
      {
        type: "quote",
        text: "Quand un client me dit que ses freins font du bruit depuis des semaines, je sais que les disques seront à changer avec les plaquettes.",
        source: "Un garagiste en Alsace",
      },
      { type: "h2", text: "Plaquettes et disques, un duo" },
      {
        type: "p",
        text: "La durée de vie des plaquettes varie énormément selon le style de conduite et le type de trajets : la ville, avec ses freinages répétés, les use bien plus vite que l’autoroute. Les disques durent généralement plus longtemps, mais s’usent aussi. Un professionnel vérifie leur épaisseur par rapport à la cote minimale gravée par le fabricant. Les pièces se remplacent toujours par essieu, des deux côtés à la fois, pour conserver un freinage équilibré. Après un remplacement, prévoyez quelques dizaines de kilomètres de conduite douce, le temps que plaquettes et disques se rodent.",
      },
      { type: "h2", text: "Le liquide de frein, souvent oublié" },
      {
        type: "p",
        text: "Le liquide de frein absorbe l’humidité avec le temps, ce qui abaisse son point d’ébullition. Lors de freinages intenses, en descente de col par exemple, il peut alors bouillir et provoquer une perte d’efficacité brutale. Il doit être remplacé selon la périodicité indiquée par le constructeur, souvent de l’ordre de deux ans. Vérifiez votre carnet d’entretien.",
      },
      { type: "h2", text: "Adopter une conduite qui préserve les freins" },
      {
        type: "p",
        text: "Anticiper les ralentissements, utiliser le frein moteur en descente en rétrogradant et éviter les freinages tardifs prolongent la vie du système. Sur les voitures hybrides et électriques, le freinage régénératif soulage fortement les plaquettes, mais les disques peuvent s’oxyder faute d’usage : un contrôle régulier reste nécessaire. Au moindre doute, ne tardez pas : faites contrôler vos freins par un professionnel. C’est un poste sur lequel il ne faut jamais faire d’économie.",
      },
    ],
  },
  {
    slug: "controle-technique-comment-ca-marche",
    category: "pratique",
    title: "Contrôle technique : comment ça marche, et comment le réussir",
    excerpt:
      "Échéances, points contrôlés, défaillances mineures, majeures ou critiques, contre-visite : le contrôle technique automobile décrypté.",
    image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1600&q=80",
    imageAlt: "Mécanicien souriant penché sur le moteur d’une voiture jaune capot ouvert",
    author: "Julien Marchand",
    date: "2026-10-12",
    readTime: 5,
    tags: ["contrôle technique", "entretien", "démarches"],
    seoTitle: "Contrôle technique auto : fonctionnement et conseils",
    seoDescription:
      "Première échéance, périodicité, points contrôlés, défaillances et contre-visite : tout comprendre du contrôle technique auto et les astuces pour le réussir.",
    keywords: ["contrôle technique", "contre-visite", "défaillance critique", "centre de contrôle", "vente voiture"],
    body: [
      {
        type: "p",
        text: "Le contrôle technique fait partie de la vie de tout automobiliste. Obligatoire, il vise à vérifier que votre véhicule reste en état de circuler sans danger pour vous et pour les autres, et sans polluer au-delà des normes. Comprendre son fonctionnement permet de l’aborder sans appréhension, et souvent d’éviter une contre-visite.",
      },
      { type: "h2", text: "Quand le passer ?" },
      {
        type: "p",
        text: "Pour une voiture particulière, le premier contrôle technique doit être réalisé dans les six mois précédant le quatrième anniversaire de sa première mise en circulation. Il doit ensuite être renouvelé tous les deux ans. En cas de vente d’un véhicule de plus de quatre ans, le vendeur doit remettre à l’acheteur un procès-verbal de contrôle datant de moins de six mois. La date de la prochaine échéance figure sur la vignette apposée sur le pare-brise. Lors de chaque visite, le contrôleur examine plusieurs dizaines de fonctions et des centaines de points précis, uniquement de manière visuelle ou à l’aide d’appareils de mesure, sans démonter la moindre pièce. Il ne répare rien non plus : son rôle se limite au constat, les réparations relevant d’un garage de votre choix.",
      },
      { type: "h2", text: "Ce qui est contrôlé, sans démontage" },
      {
        type: "list",
        items: [
          "Identification du véhicule et conformité des documents.",
          "Freinage, direction, visibilité et éclairage.",
          "Liaisons au sol : pneumatiques, suspensions, trains roulants.",
          "Structure et carrosserie, dont la corrosion.",
          "Équipements de sécurité, comme les ceintures et les airbags.",
          "Nuisances : émissions polluantes, bruit, fuites.",
        ],
      },
      { type: "h2", text: "Mineure, majeure ou critique" },
      {
        type: "p",
        text: "Les défauts relevés sont classés en trois niveaux. Une défaillance mineure n’empêche pas de valider le contrôle, mais mérite d’être corrigée. Une défaillance majeure impose une contre-visite dans un délai de deux mois. Une défaillance critique, qui représente un danger immédiat, impose également une contre-visite, et le véhicule ne peut circuler que jusqu’à minuit le jour du contrôle, le temps de rejoindre un garage ou son domicile.",
      },
      {
        type: "quote",
        text: "La plupart des contre-visites tiennent à des détails : une ampoule grillée, un balai d’essuie-glace usé, un témoin qui reste allumé.",
        source: "Un contrôleur technique agréé",
      },
      { type: "h2", text: "Préparer son véhicule" },
      {
        type: "p",
        text: "Quelques jours avant le rendez-vous, vérifiez vous-même les points simples : toutes les ampoules, les essuie-glaces, le lave-glace, le klaxon, l’état et la pression des pneus, l’absence de voyant d’alerte au tableau de bord. Un véhicule propre facilite aussi le travail du contrôleur. N’oubliez pas la carte grise, indispensable.",
      },
      { type: "h2", text: "Tarifs et échéances à ne pas manquer" },
      {
        type: "p",
        text: "Les tarifs sont libres et varient d’un centre à l’autre, parfois sensiblement. Comparer les prix des centres agréés autour de chez vous est donc pertinent. La contre-visite peut être gratuite ou payante selon les centres et les points à revérifier : renseignez-vous au moment de la prise de rendez-vous. Attention en revanche à ne pas laisser filer la date : circuler avec un contrôle technique expiré expose à une contravention et à l’immobilisation possible du véhicule. Surtout, cela peut poser problème avec votre assurance en cas de sinistre. Notez la date d’échéance dans votre agenda : la plupart des centres proposent également un rappel.",
      },
    ],
  },
  {
    slug: "batterie-voiture-prevenir-la-panne",
    category: "pratique",
    title: "Batterie : prévenir la panne avant les premiers froids",
    excerpt:
      "Démarrage poussif, voyant, voiture qui dort au garage : comment savoir si votre batterie faiblit, et comment redémarrer en sécurité.",
    image: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1600&q=80",
    imageAlt: "Câbles de démarrage rouges et noirs branchés sur une batterie de voiture",
    author: "Thomas Girard",
    date: "2026-10-15",
    readTime: 4,
    tags: ["batterie", "entretien", "hiver"],
    seoTitle: "Batterie de voiture : signes de faiblesse et bons réflexes",
    seoDescription:
      "Démarrage difficile, froid, véhicule immobilisé : reconnaître une batterie de voiture fatiguée, la tester, la recharger et démarrer avec des câbles en sécurité.",
    keywords: ["batterie voiture", "panne de batterie", "câbles de démarrage", "booster", "chargeur de batterie"],
    body: [
      {
        type: "p",
        text: "La batterie figure parmi les premières causes de panne, et l’hiver est sa saison noire. Le froid réduit sa capacité au moment même où le moteur, plus difficile à lancer, lui demande davantage d’énergie. Une batterie fatiguée qui tenait encore en septembre peut lâcher au premier matin de gel. Mieux vaut anticiper, d’autant que la plupart des signes avant-coureurs sont faciles à repérer pour qui y prête attention. Et sur les voitures modernes, bardées d’électronique, une tension trop faible peut aussi provoquer des dysfonctionnements inattendus.",
      },
      { type: "h2", text: "Les signes qui ne trompent pas" },
      {
        type: "list",
        items: [
          "Le démarreur tourne lentement, le moteur peine à se lancer.",
          "Les éclairages faiblissent au démarrage.",
          "Le système stop and start se désactive de plus en plus souvent.",
          "Un voyant de batterie ou un message d’alerte apparaît.",
          "La batterie a plusieurs années, souvent au-delà de quatre ou cinq ans.",
        ],
      },
      { type: "h2", text: "Tester sa batterie" },
      {
        type: "p",
        text: "Un simple voltmètre donne une première indication. Moteur coupé depuis plusieurs heures, une batterie 12 volts en bonne santé affiche environ 12,6 volts. En dessous de 12,4 volts, elle est partiellement déchargée et mérite une recharge. La plupart des garages et centres auto proposent aussi un test plus complet, qui mesure la capacité réelle de démarrage. Profitez-en pour inspecter les bornes : un dépôt blanchâtre ou verdâtre gêne le passage du courant et se nettoie, batterie débranchée, avec une brosse métallique.",
      },
      { type: "h2", text: "Les ennemis de la batterie" },
      {
        type: "p",
        text: "Les trajets courts répétés ne laissent pas le temps à l’alternateur de recharger la batterie. Une voiture immobilisée plusieurs semaines se décharge lentement, car de nombreux calculateurs consomment même à l’arrêt. Les températures extrêmes, la chaleur estivale comme le froid, accélèrent aussi le vieillissement. Pour un véhicule qui roule peu, un chargeur mainteneur branché pendant l’immobilisation fait des merveilles.",
      },
      { type: "h2", text: "Démarrer avec des câbles" },
      {
        type: "p",
        text: "Si la panne survient, des câbles et un véhicule secoureur permettent souvent de repartir. L’ordre de branchement est important : relier d’abord le pôle positif de la batterie déchargée au positif de la batterie saine, puis le négatif de la batterie saine à une masse métallique du véhicule en panne, à distance de la batterie. Démarrez le véhicule secoureur, puis celui en panne, et débranchez dans l’ordre inverse. Consultez toujours la notice : certaines voitures disposent de points de branchement dédiés.",
      },
      {
        type: "quote",
        text: "Un booster de démarrage dans le coffre, c’est le petit investissement qui évite d’attendre la dépanneuse un matin de janvier.",
        source: "Un technicien de centre auto",
      },
      { type: "h2", text: "Remplacer sa batterie" },
      {
        type: "p",
        text: "Choisissez une batterie aux caractéristiques préconisées par le constructeur, notamment en capacité et en intensité de démarrage. Les véhicules équipés du stop and start exigent des technologies spécifiques. Sur certains modèles récents, la batterie doit aussi être déclarée au système électronique après remplacement : renseignez-vous auprès d’un professionnel. L’ancienne batterie doit être rapportée en point de collecte, jamais jetée : elle contient du plomb et de l’acide, et se recycle très bien. Les vendeurs de batteries sont généralement tenus de reprendre les usagées.",
      },
    ],
  },
  {
    slug: "preparer-sa-voiture-pour-l-hiver",
    category: "pratique",
    title: "Hiver : le guide complet pour préparer sa voiture",
    excerpt:
      "Pneus hiver, loi Montagne, batterie, visibilité, kit de survie : tout ce qu’il faut faire avant que le thermomètre ne plonge.",
    image: "https://images.unsplash.com/photo-1597220542065-dbd32fb169f9?w=1600&q=80",
    imageAlt: "SUV rouge roulant sur une route dégagée entre des bas-côtés enneigés, en lisière d’une forêt de pins",
    author: "Camille Rousseau",
    date: "2026-10-19",
    readTime: 5,
    featured: true,
    tags: ["hiver", "pneus", "entretien", "sécurité"],
    seoTitle: "Préparer sa voiture pour l’hiver : le guide complet",
    seoDescription:
      "Pneus hiver et loi Montagne, batterie, liquides, visibilité et équipements : le guide complet pour préparer votre voiture et rouler en sécurité cet hiver.",
    keywords: ["voiture hiver", "pneus hiver", "loi Montagne", "équipements hiver", "conduite sur neige", "batterie froid"],
    body: [
      {
        type: "p",
        text: "Routes glissantes, matins givrés, nuits qui tombent tôt : l’hiver met les voitures et leurs conducteurs à rude épreuve. Les pannes se multiplient et les conditions de circulation se compliquent. Une préparation soignée, idéalement dès l’automne, permet d’aborder la saison froide en toute sérénité.",
      },
      { type: "h2", text: "Les pneus, premier rempart" },
      {
        type: "p",
        text: "Sous environ 7 °C, la gomme des pneus été durcit et perd en adhérence. Les pneus hiver, ou les pneus toutes saisons de qualité, conservent leur souplesse et évacuent mieux la neige et l’eau. Pour être reconnus comme équipements hiver, ils doivent porter le marquage 3PMSF, un pictogramme représentant une montagne à trois pics et un flocon. Vérifiez aussi la profondeur des sculptures : en hiver, une bonne marge au-dessus du minimum légal est vivement conseillée.",
      },
      { type: "h2", text: "Ce que dit la loi Montagne" },
      {
        type: "p",
        text: "Dans certaines communes situées en zone de montagne, définies par arrêté préfectoral, les véhicules doivent, du 1er novembre au 31 mars, être équipés de pneus hiver ou détenir dans leur coffre des dispositifs antidérapants amovibles, chaînes ou chaussettes à neige. Une signalisation spécifique indique l’entrée et la sortie de ces zones. La liste des communes concernées varie selon les départements : renseignez-vous auprès de la préfecture ou sur le site de la Sécurité routière avant de partir.",
      },
      { type: "h2", text: "Batterie et liquides" },
      {
        type: "p",
        text: "Faites tester votre batterie, surtout si elle a plusieurs années : le froid ne pardonne pas aux batteries fatiguées. Vérifiez que le liquide de refroidissement assure une protection antigel suffisante, et remplacez le liquide de lave-glace par un produit hiver, faute de quoi il risque de geler dans le réservoir ou les gicleurs.",
      },
      { type: "h2", text: "Visibilité et kit de bord" },
      {
        type: "list",
        items: [
          "Remplacez les balais d’essuie-glace s’ils laissent des traînées.",
          "Contrôlez tous les feux et nettoyez régulièrement les optiques.",
          "Vérifiez le bon fonctionnement de la ventilation et du désembuage.",
          "Grattez entièrement les vitres givrées, pas seulement un hublot devant le conducteur.",
          "Déneigez aussi le toit, pour ne pas aveugler les véhicules qui suivent.",
        ],
      },
      {
        type: "p",
        text: "Côté coffre, un grattoir, un balai à neige, une paire de gants, une couverture, une lampe de poche, de l’eau et quelques encas : ce petit kit peut transformer une longue attente dans un bouchon neigeux en simple contretemps. Ajoutez des câbles de démarrage ou un booster, ainsi que les chaînes si vous prévoyez de rouler en montagne. Entraînez-vous à les monter une fois chez vous, au sec : la première fois ne doit pas se faire sur le bas-côté, sous la neige, à la tombée de la nuit.",
      },
      { type: "h2", text: "Adapter sa conduite" },
      {
        type: "p",
        text: "Sur route glissante, la douceur est de mise : accélérations progressives, freinages anticipés, mouvements de volant mesurés. Augmentez fortement les distances de sécurité, car la distance de freinage s’allonge considérablement sur la neige ou le verglas. Méfiez-vous des zones à l’ombre, des ponts et des sous-bois, où le verglas persiste. Et si la météo annonce des conditions extrêmes, la meilleure décision est parfois de différer son départ.",
      },
    ],
  },
];
