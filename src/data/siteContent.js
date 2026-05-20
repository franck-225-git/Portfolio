export const projects = [
  {
    tag: "Power Platform",
    title: "GMAO — Gestion de la Maintenance Assistée par Ordinateur",
    description:
      "Développement d'une application Power Apps complète pour la gestion de la maintenance : planification des interventions, suivi des équipements, tableaux de bord Power BI et automatisation des alertes via Power Automate.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "Power Platform",
    title: "Application de gestion de clinique et stock médicaments",
    description:
      "Conception d'une solution médicale sous Power Apps couvrant les consultations, fiches de suivi patient, repos médical, envoi automatique de mails aux responsables via Power Automate et gestion du stock de médicaments avec alertes de rupture.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "Power Platform",
    title: "Application de facturation compatible Sage X3",
    description:
      "Réalisation d'une application de facturation avec Power Apps et Power Automate, génération automatique des factures client et export d'un fichier au format compatible Sage X3 pour intégration directe.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "Intégration Paie",
    title: "Service C# de synchronisation des fichiers de paie vers Sage X3",
    description:
      "Développement d'un service Windows en C#, installable sur poste, assurant la récupération automatique des fichiers de paie, leur envoi vers Sage X3 avec contrôle des formats et reprise sur erreur. Interface de pilotage développée en React.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "Intégration Bancaire",
    title: "Macro d'import de suspens bancaires — NSIA",
    description:
      "Mise en place d'une macro d'automatisation pour l'import et le traitement des suspens bancaires, réduisant les opérations manuelles et fiabilisant le rapprochement des données.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "API Inter-SI",
    title: "API de facturation numérique électronique — DGI",
    description:
      "Conception et déploiement d'une API d'interopérabilité pour l'émission de factures numériques électroniques entre Sage 100, Sage X3 et la Direction Générale des Impôts (DGI), en conformité avec les exigences réglementaires.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
];

export const services = [
  {
    title: "Intégrations ERP et flux métier",
    description:
      "Développement de services et d'API pour connecter vos outils ERP, comptables et applicatifs — sans rupture, sans perte de données.",
    points: ["Sage X3", "Sage 100", "Odoo"],
  },
  {
    title: "Solutions Power Platform",
    description:
      "Conception d'applications métier sur mesure avec Power Apps, automatisation des processus via Power Automate, et reporting décisionnel avec Power BI.",
    points: ["Power Apps", "Power Automate", "Power BI"],
  },
  {
    title: "Développement web et applicatif",
    description:
      "Création d'interfaces et d'outils logiciels adaptés à vos besoins opérationnels, conçus pour être maintenables et évolutifs dans le temps.",
    points: ["React", "C#", "HTML/CSS/JS", "SQL"],
  },
  {
    title: "Intégrateur Sage X3",
    description:
      "Paramétrage, intégration et développement sur l'ERP Sage X3 : imports de données, développements spécifiques, interfaces et connecteurs métier.",
    points: ["Sage X3", "Scripts d'import", "Connecteurs API"],
  },
];

export const stats = [
  { value: "3", label: "ans d'expérience" },
  { value: "10+", label: "projets réalisés" },
  { value: "3", label: "domaines maîtrisés" },
];

export const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#services", label: "Services" },
  { href: "#a-propos", label: "À propos" },
];

export const profile = {
  name: "KONE SIE MINANYAHA SEKOU",
  role: "Développeur Full Stack, Power Platform & Intégrateur Sage X3",
  location: "Côte d'Ivoire",
  availability: "Ouvert aux missions et aux opportunités",
  yearLabel: "Portfolio 2026",
  heroTitle: "Je connecte vos systèmes. Je fiabilise vos données.",
  heroDescription:
    "Développeur avec 3 ans d'expérience et plus de 10 projets livrés, je conçois des intégrations ERP robustes, des applications Power Platform sur mesure et des API métier qui font vraiment tourner les opérations.",
  highlights: [
    "Intégration ERP",
    "Power Platform",
    "API métier",
    "Sage X3",
    "Automatisation",
    "Full Stack",
  ],
  aboutTitle: "Un développeur qui comprend le métier autant que le code.",
  aboutDescription:
    "De la gestion de la maintenance à la facturation électronique réglementaire, en passant par la paie et la gestion clinique, j'interviens sur des sujets concrets avec des contraintes réelles. Mon approche : comprendre le besoin fonctionnel, livrer un outil fiable, assurer la pérennité de ce qui est mis en place.",
  contactEmail: "konesekou15137@gmail.com",
  profileImage: "/profile.jpg",
};

export const skillGroups = [
  {
    category: "Web & Logiciel",
    items: ["React", "HTML", "CSS", "JavaScript", "C#", "C"],
  },
  {
    category: "Base de données & API",
    items: ["SQL", "API REST"],
  },
  {
    category: "Power Platform",
    items: ["Power Apps", "Power Automate", "Power BI"],
  },
  {
    category: "ERP & Intégration",
    items: ["Sage X3", "Sage 100", "Odoo"],
  },
  {
    category: "Système & Support",
    items: ["Services Windows", "Macros", "Maintenance informatique"],
  },
];

export const experiences = [
  {
    title: "Développeur & Intégrateur Sage X3",
    company: "OSIRIS",
    type: "Poste",
    summary:
      "Développement d'un service C# de synchronisation des fichiers de paie vers Sage X3 avec interface React, mise en place d'une API de facturation numérique électronique entre Sage 100, Sage X3 et la DGI, et intégration de solutions métier sur l'ERP Sage X3.",
  },
  {
    title: "Développeur Power Platform & Maintenance Informatique",
    company: "CARENA",
    type: "Stage",
    summary:
      "Conception de trois applications Power Platform : une GMAO, une solution de gestion de clinique et stock médicaments, et une application de facturation compatible Sage X3. Automatisation des processus internes et support informatique.",
  },
  {
    title: "Développeur Full Stack",
    company: "IVOIT AGENCE ACADÉMIE",
    type: "Stage",
    summary:
      "Participation au développement d'applications web full stack : intégration front-end, logique applicative et travail en équipe sur des projets livrés en production.",
  },
];

export const formations = [
  "Formation en développement full stack — logique applicative, interfaces et bases de données",
  "Certification pratique Power Platform (Power Apps, Power Automate, Power BI)",
  "Montée en compétences continue : SQL avancé, intégrations ERP, conception et documentation d'API",
];

export const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Behance" },
  { href: "#", label: "GitHub" },
];
