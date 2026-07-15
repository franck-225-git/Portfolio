export const profile = {
  name: "KONÉ SIÉ MINANYAHA SÉKOU",
  brandName: "Koné Sié Sékou",
  initial: "K",
  role: "Développeur Full Stack · Power Platform · Intégrateur Sage X3",
  location: "Côte d'Ivoire",
  availability: "Ouvert aux missions & opportunités",
  yearLabel: "Portfolio 2026",
  heroTitleLines: ["Vos systèmes connectés.", "Vos données fiabilisées."],
  heroDescription:
    "3 ans sur le terrain, plus de 10 projets livrés en production. Je conçois des intégrations ERP robustes, des applications Power Platform sur mesure et des API métier taillées pour les opérations réelles de l'entreprise.",
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
    "De la maintenance industrielle à la facturation électronique réglementaire, en passant par la paie et la gestion clinique, j'interviens sur des enjeux concrets, avec les vraies contraintes de la production. Ma méthode tient en trois temps : cerner précisément le besoin fonctionnel, livrer un outil fiable, et garantir sa pérennité dans le temps.",
  contactEmail: "konesekou15137@gmail.com",
  profileImage: "/profile.jpg",
};

export const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#services", label: "Services" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "3", label: "ans d'expérience terrain" },
  { value: "10+", label: "projets livrés en production" },
  { value: "3", label: "domaines d'expertise" },
];

export const projects = [
  {
    tag: "Power Platform",
    title: "GMAO — Maintenance Assistée par Ordinateur",
    description:
      "Application Power Apps pour CARENA couvrant tout le cycle de maintenance : planification et suivi des interventions, gestion du parc d'équipements et historisation des pannes. Power Automate orchestre les alertes automatiques et des tableaux de bord Power BI donnent une vision décisionnelle en temps réel.",
    visibility: "Privé",
  },
  {
    tag: "Power Platform",
    title: "Gestion de clinique & stock médicaments",
    description:
      "Solution Power Apps pour CARENA couvrant le parcours patient de la consultation à la fiche de suivi, ainsi que la gestion des repos médicaux. Power Automate alerte les responsables sur les cas à suivre, et un module de stock avec alertes de rupture sécurise l'approvisionnement.",
    visibility: "Privé",
  },
  {
    tag: "Power Platform",
    title: "FLUXIA — Automatisation de la facturation sous-traitants",
    description:
      "Solution end-to-end pour CARENA : calcul, contrôle et export comptable des heures de sous-traitance. App Power Apps 4 écrans (validation, KPIs temps réel, anti-doublon), 5 flows Power Automate et 3 procédures SQL Server générant un fichier d'import Sage X3.",
    visibility: "Privé",
  },
  {
    tag: "Intégration Paie",
    title: "Service C# de synchronisation paie → Sage X3",
    description:
      "Service Windows en C# installable sur poste : récupération automatique des fichiers de paie, envoi vers Sage X3 avec contrôle des formats et reprise sur erreur. Interface de pilotage développée en React.",
    visibility: "Privé",
  },
  {
    tag: "Migration & Paie",
    title: "WEBPNM — Migration Web Forms → Blazor Server",
    description:
      "Réécriture complète d'une application de paie en Blazor Server (.NET 8) : parsing d'un export fixed-width, génération d'imports Sage PNM, gestion des utilisateurs via ASP.NET Core Identity, architecture en couches EF Core / SQL Server.",
    visibility: "Privé",
  },
  {
    tag: "Intégration Sage",
    title: "SageInterfaceService — Service .NET 9 d'interfaçage",
    description:
      "Automatisation des échanges de fichiers avec Sage : réception, transformation (conversion en .txt) et mise à disposition via des endpoints API, avec une architecture modulaire séparant parsing, conversion et persistance.",
    visibility: "Privé",
  },
  {
    tag: "Intégration Bancaire",
    title: "Macro d'import de suspens bancaires — NSIA",
    description:
      "Macro d'automatisation pour l'import et le traitement des suspens bancaires, réduisant les opérations manuelles et fiabilisant le rapprochement des données.",
    visibility: "Privé",
  },
  {
    tag: "Développement Web",
    title: "NSIA Frontend — Administration & import de données",
    description:
      "Application interne NSIA (React 19 / TypeScript) : authentification et gestion des utilisateurs, import Excel multi-feuilles avec suivi temps réel, gestion multi-sites/filiales (X3), historique détaillé des imports et notifications email.",
    visibility: "Privé",
  },
  {
    tag: "API Inter-SI",
    title: "API de facturation électronique — DGI",
    description:
      "Conception et déploiement d'une API d'interopérabilité pour l'émission de factures numériques entre Sage 100, Sage X3 et la Direction Générale des Impôts (DGI), en conformité avec les exigences réglementaires.",
    visibility: "Privé",
  },
].map((project, i) => ({ ...project, num: String(i + 1).padStart(2, "0") }));

export const services = [
  {
    title: "Intégrations ERP & flux métier",
    description:
      "Des services et API qui relient vos outils ERP, comptables et applicatifs — de bout en bout, sans rupture ni perte de données.",
    points: ["Sage X3", "Sage 100", "Odoo"],
  },
  {
    title: "Solutions Power Platform",
    description:
      "Applications métier sur mesure (Power Apps), automatisation des processus (Power Automate) et pilotage décisionnel (Power BI).",
    points: ["Power Apps", "Power Automate", "Power BI"],
  },
  {
    title: "Développement web & applicatif",
    description:
      "Interfaces et outils pensés pour vos besoins opérationnels réels — maintenables, évolutifs et conçus pour durer.",
    points: ["React", "C#", "SQL", "JS"],
  },
  {
    title: "Intégrateur Sage X3",
    description:
      "Paramétrage, intégration et développements spécifiques sur l'ERP Sage X3 : imports, interfaces et connecteurs métier sur mesure.",
    points: ["Sage X3", "Imports", "Connecteurs API"],
  },
].map((service, i) => ({ ...service, num: `0${i + 1}` }));

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
    items: ["Services Windows", "Macros", "Maintenance"],
  },
];

export const values = [
  "Approche orientée résultats métier",
  "Qualité de code et maintenabilité",
  "Capacité à relier technique et opérations",
];

export const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "GitHub" },
  { href: "#", label: "Behance" },
];
