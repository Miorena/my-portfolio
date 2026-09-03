export const PROFILE = {
  name: "Miorena Finaritra",
  fullName: "Raholdina Fiara Miorena Finaritra",
  role: "Développeur Junior",
  location: "Antananarivo, Madagascar",
  email: "miorenafinaritra@gmail.com",
  phone: "+261 38 92 192 10",
  summary:
    "Développeur junior de 20 ans, formé en génie logiciel avec une base solide en bases de données. À l'aise avec le cycle de développement agile, je m'adapte vite aux outils et pratiques d'une équipe, et je cherche un projet ambitieux pour continuer à progresser.",
  qualities: [
    "Autonome",
    "Curieux",
    "Rigoureux",
    "Esprit d'équipe",
    "Apprentissage rapide",
  ],
};

export const ABOUT = {
  text: "Développeur Junior spécialisé en génie logiciel et bases de données relationnelles. Je travaille régulièrement sur la modélisation de schémas PostgreSQL, la rédaction de requêtes SQL et le développement de logiciels métier sur mesure. En développement applicatif, je m'appuie sur la programmation orientée objet (notamment en Java) pour concevoir des architectures bien structurées et maintenables, tout en utilisant JavaScript et Python selon les besoins. À titre personnel, j'évolue sous Linux (Fedora, Ubuntu), ce qui me permet d'être à l'aise avec cet environnement.",
};

export const SKILL_GROUPS = [
  {
    table: "langages",
    title: "Langages & frameworks",
    items: ["Java", "JavaScript", "Python", "React", "HTML / CSS"],
  },
  {
    table: "donnees",
    title: "Bases de données & outils",
    items: ["PostgreSQL", "DBeaver", "Git / GitHub", "VS Code", "Omnis Studio"],
  },
  {
    table: "systemes",
    title: "Systèmes & réseau",
    items: [
      "Linux (Ubuntu, Fedora)",
      "Réseau Windows (IP, connexions distantes)",
    ],
  },
];

export const PROJECTS = [
  {
    name: "TaskManager",
    stack: "React · JavaScript",
    github: "https://github.com/Miorena/TaskManager",
    description:
      "Interface web de gestion de tâches avec gestion d'état (useState) et composants réutilisables.",
    bullets: [
      "CRUD complet : ajout, modification, suppression, filtrage",
      "Conception responsive",
      "Versionné sur GitHub",
    ],
  },
  {
    name: "Jeu d'échecs",
    stack: "Java · POO",
    github: "https://github.com/Miorena/chess-java",
    description:
      "Moteur de jeu d'échecs modélisé en programmation orientée objet, avec architecture en couches.",
    bullets: [
      "Hiérarchie de classes (héritage, classes abstraites) pour les pièces",
      "Validation des coups, chemins bloqués, captures",
      "Architecture modèle / contrôleur, versionnée sur Git",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Développeur de base de données - poste junior",
    place: "OBS-OI · Osmosis Business Solutions Océan Indien",
    period: "Mars 2026 - en cours",
    bullets: [
      "Conception de logiciels métier sur mesure avec Omnis Studio (environnement RAD orienté BD)",
      "Modélisation, optimisation et administration de bases PostgreSQL avec DBeaver",
      "Participation au cycle complet : analyse des besoins, conception, développement, tests, livraison",
    ],
  },
  {
    role: "Assistant commercial - stage d'observation",
    place: "Garage automobile, Mahajanga",
    period: "Juin - août 2023",
    bullets: [
      "Appui à la relation client et suivi des dossiers commerciaux",
      "Rédaction de comptes rendus et organisation de données clients",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Licence Informatique - Génie logiciel et base de données",
    place: "PEF / UPEF (cours en ligne), Antananarivo",
    period: "En cours",
  },
  {
    title: "Baccalauréat, série scientifique",
    place: "Lycée Privé Aladin, Mahajanga",
    period: "2023",
  },
];

export const LANGUAGES = [
  { name: "Malagasy", level: "Langue maternelle" },
  { name: "Français", level: "Courant (oral et écrit)" },
  { name: "Anglais", level: "Intermédiaire" },
];
