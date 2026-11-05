export const profile = {
  name: "KONE SIE MINANYAHA SEKOU",
  brandName: "KONE SIE MINANYAHA SEKOU",
  initial: "K",
  role: "Développeur et intégrateur d'applications",
  location: "Abidjan, Côte d'Ivoire",
  availability: "Ouvert aux missions & opportunités",
  heroTitleLines: ["Vos systèmes connectés.", "Vos données fiabilisées."],
  heroDescription:
    "Je conçois et j'exploite les flux qui relient les systèmes d'information : API REST et web services SOAP sécurisés, services d'échange automatisés, intégrations Sage X3. De l'analyse au déploiement, puis en maintien en condition opérationnelle, sur des flux critiques multi-entités.",
  aboutTitle: "Un développeur qui parle métier autant que code.",
  aboutDescription:
    "D'ORION, qui relie Sage 100 et Sage X3 pour 21 filiales africaines de NSIA Assurances, au support applicatif N1/N2 sous ServiceNow, j'interviens sur toute la chaîne : analyse du besoin, développement, déploiement, puis maintien en condition opérationnelle. Je traite les incidents de la qualification à la clôture dans le respect des SLA, et je remonte les causes racines pour fiabiliser durablement le SI.",
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
  { value: "2+", label: "ans d'expérience en développement et support" },
  { value: "10+", label: "projets livrés en production" },
  { value: "21", label: "filiales africaines connectées par ORION" },
];

// Intégrations : chaque entrée relie un système source à un système cible.
export const integrations = [
  {
    name: "ORION",
    client: "NSIA Assurances — 21 filiales africaines",
    from: "Sage 100",
    to: "Sage X3",
    description:
      "Import automatisé des écritures de paie : API REST sécurisée par JWT, transmission SOAP, service Windows de surveillance de répertoires et relance des imports en échec.",
    stack: ["ASP.NET Core", ".NET 9", "SOAP", "JWT", "React", "IIS"],
  },
  {
    name: "Passerelle aéroportuaire",
    client: "Assistance aéroportuaire",
    from: "Systèmes d'assistance",
    to: "Sage X3",
    description:
      "Transformation des messages JSON vers le format X3, transmission SOAP sur le modèle YSDH, authentification par rôles avec révocation et service Windows auto-hébergé.",
    stack: [".NET 9", "EF Core", "SQL Server", "Swagger"],
  },
  {
    name: "WEBPNM v2",
    client: "OSIRIS",
    from: "Fichiers de paie",
    to: "Sage X3",
    description:
      "Conversion des fichiers de paie en écritures comptables en un clic, à la place d'une saisie manuelle source d'erreurs : multi-sociétés et accès par rôles.",
    stack: ["Blazor Server", ".NET 8", "SQL Server"],
  },
  {
    name: "SANGEL",
    client: "SANGEL",
    from: "Sage X3",
    to: "Odoo",
    description:
      "Échanges entre l'ERP et Odoo, avec refonte du format d'export CSV et enrichissement du modèle de données.",
    stack: ["C#", "API REST", "CSV"],
  },
  {
    name: "Barron",
    client: "CARENA",
    from: "Demandes d'atelier",
    to: "Sage X3",
    description:
      "Les bons d'approvisionnement saisis par les ateliers deviennent une sortie diverse dans l'ERP : application Power Apps, flux Power Automate, procédures SQL et génération du fichier d'import, avec archivage des bons et contrôle des doublons.",
    stack: ["Power Apps", "Power Automate", "SQL Server", "SharePoint"],
  },
  {
    name: "Paie & rapprochement bancaire",
    client: "NSIA",
    from: "Paie & relevés bancaires",
    to: "Sage X3",
    description:
      "Conversion des fichiers de paie, envoi automatique des opérations diverses et import des suspens bancaires pour fiabiliser le rapprochement.",
    stack: ["Node.js", "C#", "Macro", "SuiteCRM"],
  },
];

// Applications métier : des outils utilisés au quotidien, pas des flux.
export const applications = [
  {
    name: "Application de maintenance",
    client: "CARENA",
    description:
      "Refonte et mise en production : trois flux automatisés, procédures stockées intégrées à Sage X3 et formation des utilisateurs.",
    stack: ["Power Apps", "Power Automate", "SQL Server", "Sage X3"],
  },
  {
    name: "GMAO & tableaux de bord",
    client: "CARENA",
    description:
      "GMAO, suivi des consultations avec statistiques automatiques, alertes e-mail programmées et tableaux de bord.",
    stack: ["Power Apps", "SharePoint", "Power BI"],
  },
  {
    name: "Console d'import",
    client: "NSIA Assurances",
    description:
      "Interface interne pour piloter les imports : chargement de fichiers Excel, table de correspondance des champs, historique des imports, authentification et gestion des utilisateurs. Architecture en couches (services, hooks, DTO).",
    stack: ["React", "TypeScript", "Vite", "Axios"],
  },
  {
    name: "Gestion d'infirmerie",
    client: "CARENA",
    description:
      "Consultations, gestion des repos maladie et stock de médicaments avec alertes de rupture.",
    stack: ["Power Apps", "Power Automate"],
  },
];

export const services = [
  {
    title: "Intégration d'API & flux d'échanges",
    description:
      "API REST et web services SOAP sécurisés, services Windows d'échange et relance automatique des flux en échec.",
    points: ["REST / SOAP", "JWT", "Services Windows"],
  },
  {
    title: "Intégration ERP Sage",
    description:
      "Chaînes d'import et passerelles entre vos applications métier et l'ERP : transformation JSON/XML, écritures comptables et de paie.",
    points: ["Sage X3", "Sage 100", "Odoo"],
  },
  {
    title: "Automatisation Power Platform",
    description:
      "Applications métier sur mesure, flux automatisés et tableaux de bord pour supprimer les saisies manuelles.",
    points: ["Power Apps", "Power Automate", "Power BI"],
  },
  {
    title: "Support applicatif & MCO",
    description:
      "Support N1/N2 de la qualification à la clôture, suivi des SLA, analyse des causes racines et maintien en condition opérationnelle.",
    points: ["ServiceNow", "GLPI", "ITIL"],
  },
];

export const skillGroups = [
  {
    category: "Intégration & API",
    items: ["API REST", "SOAP", "JSON / XML", "JWT", "Swagger / OpenAPI", "Postman"],
  },
  {
    category: "Développement",
    items: [
      "C# / .NET 8-9",
      "ASP.NET Core",
      "Blazor Server",
      "EF Core",
      "Node.js",
      "NestJS",
      "React",
      "TypeScript",
      "Python",
      "PHP",
      "Java (en cours)",
    ],
  },
  {
    category: "Bases de données",
    items: ["SQL Server", "T-SQL", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Dataverse"],
  },
  {
    category: "ERP & métier",
    items: ["Sage X3", "Sage 100", "Sage Paie", "Sage BI", "Odoo", "SharePoint", "Microsoft 365"],
  },
  {
    category: "Support & exploitation",
    items: [
      "ServiceNow",
      "GLPI",
      "Support N1/N2",
      "Suivi des SLA",
      "IIS",
      "PowerShell",
      "Docker",
      "Ubuntu",
      "VMware",
      "Git / GitHub",
    ],
  },
  {
    category: "Automatisation & IA",
    items: [
      "Power Automate",
      "Power Apps",
      "Power BI",
      "API LLM",
      "RAG",
      "Classification de texte",
      "Détection d'anomalies",
    ],
  },
];

export const values = [
  "Orientation résultats et qualité de service",
  "Rigueur, organisation et souci du détail",
  "Analyse et résolution de problèmes",
  "Collaboration avec les équipes métier et techniques",
];

export const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "https://github.com/franck-225-git", label: "GitHub" },
  { href: "#", label: "Behance" },
];
