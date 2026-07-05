export const projects = [
  {
    tag: "Power Platform",
    title: "GMAO — Gestion de la Maintenance Assistée par Ordinateur",
    description:
      "Application Power Apps développée pour CARENA, couvrant l'ensemble du cycle de maintenance : planification et suivi des interventions, gestion du parc d'équipements et historisation des pannes. Power Automate orchestre les alertes automatiques (échéances, anomalies détectées) et des tableaux de bord Power BI donnent aux équipes une vision décisionnelle en temps réel de l'activité de maintenance.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "Power Platform",
    title: "Application de gestion de clinique et stock médicaments",
    description:
      "Solution Power Apps développée pour CARENA, couvrant le parcours patient de la consultation à la fiche de suivi médical, ainsi que la gestion des repos médicaux. Power Automate automatise l'envoi de mails aux responsables pour les cas nécessitant un suivi particulier, tandis qu'un module de gestion de stock avec alertes de rupture sécurise l'approvisionnement en médicaments.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "Power Platform",
    title: "FLUXIA — Automatisation de la facturation sous-traitants",
    description:
      "Solution end-to-end pour CARENA automatisant le calcul, le contrôle et l'export comptable des heures de sous-traitance : application Power Apps à 4 écrans (validation, KPIs en temps réel, anti-doublon), 5 flows Power Automate et 3 procédures SQL Server (majoration horaire par matricule/catégorie, répartition analytique via fenêtres OVER PARTITION BY) générant un fichier d'import Sage X3.",
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
    tag: "Migration & Paie",
    title: "WEBPNM — Migration ASP.NET Web Forms vers Blazor Server",
    description:
      "Réécriture complète d'une application de paie en Blazor Server (.NET 8) : parsing d'un export paie fixed-width, génération de fichiers d'import Sage PNM, gestion des utilisateurs via ASP.NET Core Identity, architecture en couches avec EF Core/SQL Server et déploiement Kestrel/Nginx ou IIS.",
    visibility: "Privé",
    caseStudyUrl: "",
  },
  {
    tag: "Intégration Sage",
    title: "SageInterfaceService — Service .NET 9 d'interfaçage Sage",
    description:
      "Service d'automatisation des échanges de fichiers avec Sage : réception, transformation (conversion en .txt) et mise à disposition des fichiers via des endpoints API, avec une architecture modulaire séparant parsing, conversion et persistance.",
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
    tag: "Développement Web",
    title: "NSIA Frontend — Plateforme d'administration et d'import de données",
    description:
      "Application interne pour NSIA (React 19/TypeScript) : authentification et gestion des utilisateurs, import Excel multi-feuilles avec suivi en temps réel, gestion multi-sites/filiales (X3), historique détaillé des imports et notifications email.",
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
      "Conception de services et d'API qui relient vos outils ERP, comptables et applicatifs — de bout en bout, sans rupture ni perte de données.",
    points: ["Sage X3", "Sage 100", "Odoo"],
  },
  {
    title: "Solutions Power Platform",
    description:
      "Applications métier sur mesure avec Power Apps, automatisation des processus avec Power Automate, et pilotage décisionnel avec Power BI.",
    points: ["Power Apps", "Power Automate", "Power BI"],
  },
  {
    title: "Développement web et applicatif",
    description:
      "Interfaces et outils logiciels pensés pour vos besoins opérationnels réels — maintenables, évolutifs, et conçus pour durer.",
    points: ["React", "C#", "HTML/CSS/JS", "SQL"],
  },
  {
    title: "Intégrateur Sage X3",
    description:
      "Paramétrage, intégration et développements spécifiques sur l'ERP Sage X3 : imports de données, interfaces et connecteurs métier sur mesure.",
    points: ["Sage X3", "Scripts d'import", "Connecteurs API"],
  },
];

export const stats = [
  { value: "3", label: "ans d'expérience terrain" },
  { value: "10+", label: "projets livrés en production" },
  { value: "3", label: "domaines d'expertise" },
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
  heroTitle: "Vos systèmes connectés. Vos données fiabilisées.",
  heroDescription:
    "Fort de 3 ans d'expérience et de plus de 10 projets livrés en production, je conçois des intégrations ERP robustes, des applications Power Platform sur mesure et des API métier taillées pour les opérations réelles de l'entreprise.",
  highlights: [
    "Intégration ERP",
    "Power Platform",
    "API métier",
    "Sage X3",
    "Automatisation",
    "Full Stack",
  ],
  aboutTitle: "Un développeur qui parle métier autant que code.",
  aboutDescription:
    "De la maintenance industrielle à la facturation électronique réglementaire, en passant par la paie et la gestion clinique, j'interviens sur des enjeux concrets, avec des contraintes réelles de production. Ma méthode : cerner précisément le besoin fonctionnel, livrer un outil fiable, et garantir sa pérennité dans le temps.",
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
