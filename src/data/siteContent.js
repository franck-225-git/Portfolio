export const profile = {
  name: "KONE SIE MINANYAHA SEKOU",
  brandName: "KONE SIE MINANYAHA SEKOU",
  initial: "K",
  role: "Développeur / Intégrateur d'applications · API, flux d'échanges & support applicatif",
  location: "Abidjan, Côte d'Ivoire",
  availability: "Ouvert aux missions & opportunités",
  yearLabel: "Portfolio 2026",
  heroTitleLines: ["Vos systèmes connectés.", "Vos données fiabilisées."],
  heroDescription:
    "Je conçois et j'exploite les flux qui relient les systèmes d'information : API REST et web services SOAP sécurisés, services d'échange automatisés, intégrations Sage X3. De l'analyse au déploiement, puis en maintien en condition opérationnelle, sur des flux critiques multi-entités.",
  highlights: [
    "API REST & SOAP",
    "Intégration Sage X3",
    "Services Windows .NET",
    "Power Platform",
    "Support N1/N2",
    "IA générative",
  ],
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
  { value: "2", label: "ans d'expérience en développement et support" },
  { value: "10+", label: "projets livrés en production" },
  { value: "21", label: "filiales africaines connectées par ORION" },
];

export const projects = [
  {
    tag: "Intégration inter-SI",
    title: "ORION — Plateforme d'intégration Sage 100 ↔ Sage X3",
    description:
      "Pour NSIA Assurances et ses 21 filiales africaines : chaîne d'échange automatisée pour l'import des écritures de paie. API REST ASP.NET Core sécurisée par JWT, transmission par web services SOAP, service Windows .NET 9 de surveillance de répertoires, relance des imports en échec, frontend React/TypeScript, déploiement IIS.",
    visibility: "Privé",
  },
  {
    tag: "API & ERP",
    title: "Passerelle aéroportuaire ↔ Sage X3",
    description:
      "API REST .NET 9 entre les systèmes d'assistance aéroportuaire et l'ERP : transformation JSON vers le format X3, transmission SOAP (modèle YSDH), authentification JWT avec rôles et révocation, EF Core / SQL Server, service Windows auto-hébergé et documentation Swagger.",
    visibility: "Privé",
  },
  {
    tag: "Paie & comptabilité",
    title: "WEBPNM v2 — Automatisation des écritures comptables",
    description:
      "Conversion des fichiers de paie en imports comptables Sage X3 en un clic, en remplacement d'une saisie manuelle source d'erreurs : multi-sociétés, accès par rôles et service Windows autonome. Blazor Server, .NET 8, SQL Server.",
    visibility: "Privé",
  },
  {
    tag: "Intégration ERP",
    title: "Intégration Sage X3 ↔ Odoo — SANGEL",
    description:
      "API REST en C# pour les échanges entre Sage X3 et Odoo, avec refonte du format d'export CSV et enrichissement du modèle de données.",
    visibility: "Privé",
  },
  {
    tag: "Automatisation financière",
    title: "Paie & rapprochement bancaire — NSIA",
    description:
      "API Node.js de conversion des fichiers de paie, API C# d'envoi automatique des opérations diverses (OD) et macro d'import des suspens bancaires. Étude et démonstration de SuiteCRM sur un Ubuntu virtualisé.",
    visibility: "Privé",
  },
  {
    tag: "Power Platform & Sage X3",
    title: "Application de maintenance — CARENA",
    description:
      "Refonte et mise en production d'une application Power Apps : trois flux Power Automate et procédures stockées SQL intégrées à Sage X3, puis formation des utilisateurs.",
    visibility: "Privé",
  },
  {
    tag: "Power Platform & SharePoint",
    title: "Applications métiers — GMAO & tableaux de bord",
    description:
      "Applications métiers pour CARENA sur Power Platform et SharePoint : GMAO, suivi des consultations avec statistiques automatiques, alertes e-mail programmées et tableaux de bord dynamiques.",
    visibility: "Privé",
  },
  {
    tag: "Power Platform",
    title: "Gestion d'infirmerie & stock de médicaments",
    description:
      "Application pour CARENA couvrant les consultations, la gestion des repos maladie et le stock de médicaments avec alertes de rupture, ainsi que les modules associés.",
    visibility: "Privé",
  },
].map((project, i) => ({ ...project, num: String(i + 1).padStart(2, "0") }));

export const services = [
  {
    title: "Intégration d'API & flux d'échanges",
    description:
      "API REST et web services SOAP sécurisés, services Windows d'échange et relance automatique des flux en échec — de bout en bout, sans perte de données.",
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
      "Support N1/N2 de la qualification à la clôture, suivi des SLA, analyse des causes racines et maintien en condition opérationnelle des flux.",
    points: ["ServiceNow", "GLPI", "ITIL"],
  },
].map((service, i) => ({ ...service, num: `0${i + 1}` }));

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
