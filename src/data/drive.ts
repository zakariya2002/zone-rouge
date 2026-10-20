import type { Article } from "./types";

// Sources : profils LinkedIn publics, chaîne YouTube de Qassim Rouahi, page LinkedIn Drivecar.io,
// drivefranchise.com et photos officielles du stand Drive à Franchise Expo Paris 2026.
const QASSIM = {
  name: "Qassim Rouahi",
  jobTitle: "Fondateur de Drive (Drivecar.io)",
  sameAs: ["https://fr.linkedin.com/in/qassim-rouahi-668635282", "https://www.youtube.com/@QassimRouahi"],
};
const LENA = {
  name: "Léna Djafer",
  jobTitle: "Ressources humaines, Drive (Drivecar.io)",
  sameAs: ["https://www.linkedin.com/in/l%C3%A9na-djafer/"],
};

export const articles: Article[] = [
  {
    slug: "qassim-rouahi-drive-le-passionne-qui-veut-reinventer-la-vente-de-voitures",
    category: "auto",
    title: "Qassim Rouahi, le passionné d’auto qui veut réinventer la vente de voitures d’occasion",
    excerpt:
      "Il a vendu ses premières voitures en parallèle de ses études de médecine. Aujourd’hui, le fondateur de Drive veut professionnaliser le marché de l’occasion entre particuliers.",
    image: "/media/drive/DSC03035.jpg",
    imageAlt: "Qassim Rouahi, fondateur de Drive (Drivecar.io), en discussion sur le stand Drive",
    imagePosition: "center 20%",
    heroLayout: "split",
    author: "Julien Marchetti",
    date: "2026-10-20",
    readTime: 6,
    featured: true,
    tags: ["drive", "occasion", "entrepreneur"],
    seoTitle: "Qassim Rouahi (Drive) : réinventer la vente de voitures",
    seoDescription:
      "Qassim Rouahi, fondateur de Drive (Drivecar.io), veut professionnaliser la vente de voitures d’occasion entre particuliers. Portrait d’un passionné d’auto.",
    keywords: ["Qassim Rouahi", "Drive", "Drivecar.io", "Drive franchise", "voiture d’occasion", "vente entre particuliers"],
    people: [QASSIM],
    body: [
      {
        type: "p",
        text: "Dans le monde de l’automobile, il y a ceux qui collectionnent les voitures et ceux qui collectionnent les transactions. Qassim Rouahi a commencé par les secondes. À 21 ans, alors qu’il suit des études de médecine à l’Université Sorbonne Paris Nord, il se lance dans l’achat et la revente de véhicules. Trois ans plus tard, il range la blouse pour se consacrer entièrement à l’automobile. Il dirige aujourd’hui Drive (Drivecar.io), un réseau de franchise d’intermédiation automobile.",
      },
      { type: "h2", text: "Le terrain avant le business plan" },
      {
        type: "p",
        text: "Ce qui frappe dans son parcours, c’est l’ordre des étapes. Pas de grande théorie au départ, mais des voitures vendues, des acheteurs rencontrés, des annonces rédigées, des essais organisés. Autant de situations qui lui ont montré les points faibles du marché de l’occasion entre particuliers : la difficulté à fixer le bon prix, les heures perdues avec des acheteurs peu sérieux, la crainte de l’arnaque au moment du paiement.",
      },
      {
        type: "quote",
        text: "Je me suis lancé dans l’automobile à 21 ans, en parallèle de mes études de médecine. À 24 ans, j’ai arrêté médecine pour m’y consacrer entièrement.",
        source: "Qassim Rouahi, sur sa chaîne YouTube",
      },
      { type: "h2", text: "Un marché gigantesque et mal équipé" },
      {
        type: "p",
        text: "Avec plus de 5,5 millions de transactions de voitures d’occasion chaque année en France, l’occasion pèse bien plus lourd que le neuf. Pourtant, côté particuliers, les outils ont peu évolué : une annonce en ligne, un téléphone qui sonne, des rendez-vous sur un parking. C’est ce décalage que Qassim Rouahi veut combler avec Drive, en confiant la vente à un professionnel qui estime le véhicule, filtre les acheteurs, organise les essais et sécurise la transaction.",
      },
      {
        type: "img",
        src: "/media/drive/qassim-rouahi.jpg",
        alt: "Portrait de Qassim Rouahi, fondateur de Drive, sur un toit parisien",
        caption: "Qassim Rouahi a quitté les études de médecine à 24 ans pour se consacrer à l’automobile.",
      },
      { type: "h2", text: "Franchiseur et opérateur" },
      {
        type: "p",
        text: "Qassim Rouahi se présente lui-même comme « franchiseur et opérateur ». Une double casquette qui compte : il ne se contente pas de vendre un concept, il le pratique. Sur YouTube, il documente la construction de son réseau étape par étape, une façon de rendre le projet transparent pour les futurs franchisés comme pour les passionnés d’auto curieux de voir l’envers du décor.",
      },
      {
        type: "p",
        text: "Le printemps 2026 a marqué un cap : après sa présence à Franchise Expo Paris, du 14 au 16 mars, il annonce que Drive est « officiellement lancé ». Le stand, avec une Porsche 911 GT3 RS en vitrine, affichait déjà « 17 agences DRIVE en France, pour l’instant ».",
      },
      { type: "h2", text: "Ce que ça change pour les automobilistes" },
      {
        type: "p",
        text: "Pour le vendeur, la promesse est simple : vendre sa voiture au prix du marché entre particuliers, sans en subir les contraintes. Pour l’acheteur, c’est l’assurance d’un interlocuteur professionnel et d’une transaction encadrée. Reste à voir si le modèle tiendra la distance à grande échelle, mais une chose est sûre : sur un marché aussi vaste, la confiance est la meilleure des cylindrées.",
      },
    ],
  },
  {
    slug: "vendre-sa-voiture-sans-stress-la-methode-drive-decryptee",
    category: "guides",
    title: "Vendre sa voiture sans stress : on a décortiqué la méthode Drive",
    excerpt:
      "Estimation, annonce, tri des acheteurs, essais, paiement sécurisé : comment fonctionne Drive (Drivecar.io) et à qui s’adresse ce modèle de vente accompagnée.",
    image: "/media/drive/DSC03006.jpg",
    imageAlt: "Porsche 911 GT3 RS grise aux jantes dorées exposée sur le stand Drive (Drivecar.io)",
    author: "Claire Dubreuil",
    date: "2026-10-20",
    readTime: 6,
    featured: true,
    tags: ["drive", "vendre sa voiture", "occasion"],
    seoTitle: "Vendre sa voiture avec Drive (Drivecar.io) : la méthode",
    seoDescription:
      "Comment vendre sa voiture d’occasion avec Drive (Drivecar.io) : estimation, annonce, sélection des acheteurs, essais et paiement sécurisé. Notre décryptage.",
    keywords: ["Drive", "Drivecar.io", "vendre sa voiture", "vente voiture entre particuliers", "Drive avis", "Qassim Rouahi"],
    people: [QASSIM],
    body: [
      {
        type: "p",
        text: "Vendre sa voiture soi-même, c’est souvent le meilleur moyen d’en tirer un bon prix. C’est aussi l’assurance de perdre des soirées entières au téléphone, de recevoir des inconnus sur le parking et de stresser au moment de remettre les clés. Drive (Drivecar.io), le réseau fondé par Qassim Rouahi, propose une troisième voie : la vente entre particuliers, mais accompagnée par un professionnel.",
      },
      { type: "h2", text: "Le principe : un mandat, pas un rachat" },
      {
        type: "p",
        text: "Contrairement à un garage qui rachète votre véhicule pour le revendre, Drive ne prend pas la voiture en stock. Le propriétaire signe un mandat de vente et reste vendeur. L’agence s’occupe de tout le reste. C’est ce qui permet de viser un prix proche du marché entre particuliers, plutôt qu’une offre de reprise.",
      },
      {
        type: "list",
        items: [
          "Estimation du véhicule grâce à DriveX, l’outil de cotation développé par le réseau.",
          "Rédaction et publication de l’annonce.",
          "Tri des contacts pour ne garder que les acheteurs sérieux.",
          "Organisation des essais.",
          "Sécurisation de la transaction, couverte par un assureur partenaire.",
        ],
      },
      {
        type: "img",
        src: "/media/drive/DSC03011.jpg",
        alt: "Brochures Drive posées sur une table du stand",
        caption: "Sur le stand Drive, les brochures présentent le parcours de vente accompagnée.",
      },
      { type: "h2", text: "Suivre sa vente en temps réel" },
      {
        type: "p",
        text: "Le réseau insiste sur la transparence : le vendeur peut suivre l’avancement de sa vente, et les fonds comme les dossiers sont protégés à chaque étape. Pour qui a déjà vécu l’angoisse d’un virement qui n’arrive pas ou d’un chèque douteux, l’argument pèse lourd.",
      },
      { type: "h2", text: "Pour qui ?" },
      {
        type: "p",
        text: "Ce type de service parle d’abord à ceux qui manquent de temps, à ceux qui vendent une voiture de valeur et ne veulent pas prendre de risques, et à ceux qui ne se sentent pas à l’aise avec la négociation. À l’inverse, un vendeur très disponible, à l’aise avec les annonces et sûr de lui sur la partie administrative, pourra préférer garder la main.",
      },
      {
        type: "quote",
        text: "Le réseau Drive est sélectif : nous cherchons des personnalités, pas des CV.",
        source: "Site officiel du réseau Drive, à propos de ses franchisés",
      },
      { type: "h2", text: "Notre conseil" },
      {
        type: "p",
        text: "Comme pour tout service, comparez. Demandez une estimation, renseignez-vous sur les frais appliqués à la vente et sur les délais constatés dans votre secteur. Drive recrute des franchisés dans toute la France, et la disponibilité varie selon les villes. La bonne nouvelle, c’est que la vente entre particuliers n’est plus condamnée à rimer avec galère.",
      },
    ],
  },
  {
    slug: "une-gt3-rs-sur-un-salon-de-la-franchise-les-coulisses-du-stand-drive",
    category: "auto",
    title: "Une GT3 RS sur un salon de la franchise : les coulisses du stand Drive",
    excerpt:
      "Jantes dorées, aileron XXL et écran géant : à Franchise Expo Paris, l’équipe Drive a misé sur une Porsche pour faire passer un message. Visite guidée.",
    image: "/media/drive/DSC03041.jpg",
    imageAlt: "Enseigne Drive suspendue au-dessus d’une Porsche 911 GT3 RS sur le stand de Franchise Expo Paris",
    author: "Antoine Lefèvre",
    date: "2026-10-20",
    readTime: 5,
    tags: ["drive", "porsche", "salon"],
    seoTitle: "Stand Drive à Franchise Expo : une GT3 RS et une équipe",
    seoDescription:
      "Dans les coulisses du stand Drive (Drivecar.io) à Franchise Expo Paris : une Porsche 911 GT3 RS, l’équipe de Qassim Rouahi et le message d’un réseau en plein essor.",
    keywords: ["Drive", "Drivecar.io", "équipe Drive", "Franchise Expo Paris", "Porsche GT3 RS", "Qassim Rouahi", "Léna Djafer"],
    people: [QASSIM, LENA, { name: "Greg B" }, { name: "Sally Camara" }],
    body: [
      {
        type: "p",
        text: "Dans les allées d’un salon de la franchise, on croise surtout des comptoirs, des kakémonos et des brochures. Sur le stand Drive, on tombait nez à nez avec une Porsche 911 GT3 RS grise, jantes dorées et aileron monumental. Un choix qui n’a rien d’un hasard pour un réseau qui veut rendre la vente de voitures « plus simple, plus transparente et plus premium ».",
      },
      { type: "h2", text: "La voiture comme manifeste" },
      {
        type: "p",
        text: "Exposer une GT3 RS, c’est envoyer un signal clair : chez Drive, la voiture reste au centre. Le réseau d’intermédiation automobile fondé par Qassim Rouahi ne vend pas de véhicules en propre, il accompagne des particuliers qui vendent le leur. Mais pour attirer des futurs franchisés passionnés, rien ne vaut une icône de la sportivité allemande.",
      },
      {
        type: "img",
        src: "/media/drive/DSC03157.jpg",
        alt: "Détail du blason Porsche sur le capot de la 911 GT3 RS du stand Drive",
        caption: "Le blason de Stuttgart, star discrète du stand.",
      },
      { type: "h2", text: "Un stand pensé comme un showroom" },
      {
        type: "p",
        text: "Autour de la Porsche, un écran géant lumineux, des ballons noirs et blancs aux couleurs de la marque, un canapé et quelques mange-debout. Sur l’écran défilaient des messages courts : « 17 agences DRIVE en France, pour l’instant », puis une démonstration d’estimation de véhicule, avec une courbe et un prix affiché. Un aperçu de DriveX, l’outil de cotation maison.",
      },
      {
        type: "img",
        src: "/media/drive/DSC03046.jpg",
        alt: "Profil de la Porsche 911 GT3 RS devant le canapé et l’écran géant du stand Drive",
        caption: "La GT3 RS devant l’écran géant du stand, pendant les trois jours du salon.",
      },
      { type: "h2", text: "L’équipe derrière le stand" },
      {
        type: "p",
        text: "Pendant trois jours, une équipe jeune s’est relayée pour accueillir les visiteurs : Qassim Rouahi, le fondateur, entouré notamment de Léna Djafer, Greg B et Sally Camara. Une petite structure, la page LinkedIn de l’entreprise affiche entre deux et dix salariés, qui a fait le choix de l’impact visuel pour se faire remarquer parmi des centaines d’exposants.",
      },
      {
        type: "quote",
        text: "Un projet ne vaut que par les personnes qui le portent.",
        source: "Drivecar.io, sur LinkedIn, au lendemain du salon",
      },
      {
        type: "img",
        src: "/media/drive/DSC03055-2.jpg",
        alt: "Le stand Drive vu depuis l’allée de Franchise Expo Paris",
        caption: "Vu de l’allée, le stand Drive se repère de loin grâce à son enseigne suspendue.",
      },
      { type: "h2", text: "Et maintenant ?" },
      {
        type: "p",
        text: "Le salon passé, Drive a annoncé son lancement officiel et poursuit le recrutement de franchisés dans toute la France. La GT3 RS a quitté les lieux, mais le message reste : la vente de voitures d’occasion mérite elle aussi un peu de spectacle.",
      },
    ],
  },
  {
    slug: "lena-djafer-drive-les-femmes-qui-font-avancer-l-automobile",
    category: "auto",
    title: "Léna Djafer : ces femmes qui font avancer l’automobile, côté coulisses",
    excerpt:
      "On parle souvent des pilotes et des designers. Beaucoup moins de celles qui recrutent et structurent les équipes. Rencontre avec le parcours de Léna Djafer, chez Drive.",
    image: "/media/drive/DSC03202.jpg",
    imageAlt: "Léna Djafer, membre de l’équipe Drive (Drivecar.io), souriante sur le stand de Franchise Expo Paris",
    imagePosition: "center 12%",
    heroLayout: "split",
    author: "Sophie Garnier",
    date: "2026-10-20",
    readTime: 5,
    tags: ["drive", "femmes", "métiers"],
    seoTitle: "Léna Djafer (Drive) : les femmes dans l’automobile",
    seoDescription:
      "Léna Djafer, diplômée d’un master RH, a rejoint Drive (Drivecar.io) à Paris. Portrait et regard sur la place des femmes dans les métiers de l’automobile.",
    keywords: ["Léna Djafer", "Drive", "Drivecar.io", "femmes automobile", "RH automobile", "Qassim Rouahi"],
    people: [LENA, QASSIM],
    body: [
      {
        type: "p",
        text: "L’automobile reste un univers où les femmes sont encore minoritaires, que ce soit en concession, en atelier ou dans les directions. Pourtant, les choses bougent, et pas seulement sur les circuits. Dans les jeunes entreprises du secteur, de plus en plus de femmes occupent des postes clés. C’est le cas de Léna Djafer, diplômée d’un master en ressources humaines, qui a rejoint Drive (Drivecar.io) à Paris.",
      },
      { type: "h2", text: "Les RH, moteur caché d’un réseau automobile" },
      {
        type: "p",
        text: "Un réseau de franchise automobile ne se construit pas seulement avec des voitures et un logiciel. Il faut recruter l’équipe du siège, sélectionner les futurs franchisés, organiser leur formation et faire vivre une culture commune entre des agences réparties sur tout le territoire. Chez Drive, la formation initiale dure trois à quatre semaines, entre le siège et une agence pilote.",
      },
      {
        type: "img",
        src: "/media/drive/DSC03193.jpg",
        alt: "Léna Djafer consulte son téléphone dans les allées de Franchise Expo Paris",
        caption: "Léna Djafer lors de Franchise Expo Paris, où l’équipe Drive a tenu son stand pendant trois jours.",
      },
      { type: "h2", text: "Recruter des personnalités" },
      {
        type: "p",
        text: "Drive revendique une approche sélective : le réseau affirme chercher « des personnalités, pas des CV ». Dans un secteur où la relation client est décisive, évaluer le savoir-être, la capacité à rassurer un vendeur ou à gérer une négociation devient essentiel. C’est précisément le terrain d’expertise des ressources humaines.",
      },
      {
        type: "quote",
        text: "Le réseau Drive est sélectif : nous cherchons des personnalités, pas des CV.",
        source: "Site officiel du réseau Drive",
      },
      { type: "h2", text: "Une nouvelle génération dans l’auto" },
      {
        type: "p",
        text: "Le parcours de Léna Djafer illustre une évolution plus large : l’automobile attire désormais des profils venus d’autres horizons, formés aux métiers de l’humain, du digital ou de la gestion. Dans une équipe resserrée comme celle de Drive, fondée par Qassim Rouahi, chacun contribue directement à la construction de l’entreprise.",
      },
      {
        type: "p",
        text: "Si l’on veut que l’automobile ressemble davantage à la société, il faudra plus de femmes à tous les étages, du volant aux bureaux. Les jeunes entreprises du secteur ont une carte à jouer, et certaines ont déjà commencé à la poser sur la table.",
      },
    ],
  },
];
