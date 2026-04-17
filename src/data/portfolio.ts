// ============================================
// PORTFOLIO DATA - Adel Achouche
// Modifie ce fichier pour mettre à jour ton portfolio
// ============================================

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  birthDate: string;
  driversLicense: string;
  bio: string;
  avatar?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'twitter' | 'website' | 'gitlab';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'database' | 'tool' | 'devops' | 'os' | 'soft';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  type: 'work' | 'academic';
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  specialization?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  category: 'web' | 'data' | 'mobile' | 'devops' | 'other';
  featured?: boolean;
}

export interface Interest {
  name: string;
  icon?: string;
}

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo: PersonalInfo = {
  firstName: "Adel",
  lastName: "Achouche",
  title: "Étudiant ingénieur admis à l'ESIEA",
  subtitle: "Admis à l'ESIEA - Alternance disponible à partir de septembre 2026",
  email: "adel.achouche@et.esiea.fr", // TODO: Remplace par ton vrai email
  phone: "06 XX XX XX XX", // TODO: Remplace par ton vrai numéro
  location: "Villejuif",
  birthDate: "26/09/2002",
  driversLicense: "Permis B",
  bio: "Étudiant passionné en informatique, admis à l'ESIEA pour un cycle de 3 ans. Je suis à la recherche d'un contrat d'apprentissage de 3 ans afin de développer mes compétences en data, administration de bases de données et exploitation de données, tout en relevant de nouveaux défis techniques.",
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/adel016", // TODO: Remplace par ton lien GitHub
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adel-achouche", // TODO: Remplace par ton lien LinkedIn
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:adel.achouche@et.esiea.fr", // TODO: Remplace par ton email
    icon: "email",
  },
];

// ============================================
// SKILLS
// ============================================

export const skills: Skill[] = [
  // Langages de programmation
  { name: "Python", level: 85, category: "language" },
  { name: "Java", level: 80, category: "language" },
  { name: "PL/SQL", level: 80, category: "language" },
  { name: "PHP", level: 75, category: "language" },
  { name: "JavaScript", level: 75, category: "language" },
  { name: "HTML / CSS", level: 85, category: "language" },
  { name: "Bash", level: 70, category: "language" },

  // Frameworks & Bibliothèques
  { name: "Symfony", level: 70, category: "framework" },
  { name: "Tailwind CSS", level: 70, category: "framework" },

  // Bases de données
  { name: "Oracle", level: 85, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "MongoDB", level: 65, category: "database" },
  { name: "Neo4j", level: 60, category: "database" },

  // Outils & DevOps
  { name: "Git / GitLab", level: 80, category: "tool" },
  { name: "Power BI", level: 70, category: "tool" },
  { name: "Excel", level: 80, category: "tool" },
  { name: "Suite Office", level: 85, category: "tool" },
  { name: "VS Code", level: 85, category: "tool" },
  { name: "Power Query", level: 70, category: "tool" },
  { name: "Docker", level: 70, category: "devops" },
  { name: "Apache", level: 65, category: "devops" },

  // Systèmes d'exploitation
  { name: "Linux (Debian/Ubuntu)", level: 80, category: "os" },
  { name: "Windows / Windows Server", level: 75, category: "os" },

  // Soft Skills
  { name: "Travail en équipe", level: 90, category: "soft" },
  { name: "Gestion de projet", level: 75, category: "soft" },
  { name: "Communication", level: 80, category: "soft" },
  { name: "Adaptabilité", level: 85, category: "soft" },
];

// ============================================
// SKILL CATEGORIES LABELS
// ============================================

export const skillCategories: Record<Skill['category'], string> = {
  language: "Langages",
  framework: "Frameworks & Libs",
  database: "Bases de données",
  tool: "Outils",
  devops: "DevOps & Infra",
  os: "Systèmes",
  soft: "Soft Skills",
};

// ============================================
// EXPERIENCE
// ============================================

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Projet Medialise - Entrepôt de données médicales & IA sémantique",
    company: "IUT de l'UPEC (Université Paris-Est Créteil)", // TODO: Remplace par le nom de l'entreprise
    location: "Vitry sur Seine",
    startDate: "Septembre 2025",
    endDate: "Mars 2026",
    description: [
      "Conception d’un entrepôt de données médicales visant à centraliser, structurer et valoriser des données issues de sources hétérogènes afin de garantir leur qualité et leur cohérence. Développement d’un prototype d’assistant intelligent exploitant la recherche sémantique pour faciliter l’accès à l’information et soutenir l’aide à la décision dans le domaine de la santé",
    ],
    technologies: ["Python", "MongoDB", "Docker", "NEO4J", "Qdrant"],
    type: "academic",
  },
  {
    id: "exp-2",
    title: "Stage Data & Systèmes - Gestion du parc informatique",
    company: "Institut Pasteur",
    location: "Alger (Algérie)",
    startDate: "Avril 2025",
    endDate: "Juillet 2025",
    description: [
      "Structuration et gestion de la base de données du parc informatique.",
      "Développement d’outils internes pour centraliser les données matérielles.",
      "Mise en place de l'architecture et de la base de données",
    ],
    technologies: ["PHP", "Laravel", "SQL", "Git", "Sécurité informatique", "Administration système"],
    type: "work",
  },
  {
    id: "exp-3",
    title: "Stage Data & BI - DGAC (plans de vol & dashboards)",
    company: "DGAC (Direction Générale de l'Aviation Civile)",
    location: "Athis-Mons, France",
    startDate: "Avril 2026",
    endDate: "Août 2026",
    description: [
      "Développement de parseurs Python pour l'extraction et le stockage PostgreSQL de plans de vol Eurocontrol (formats hétérogènes).",
      "Conception et automatisation de pipelines de traitement de données avec Python et Power Query.",
      "Création de tableaux de bord Power BI pour la visualisation et le suivi des flux de données aéronautiques.",
    ],
    technologies: ["Python (NumPy, Pandas, plotly)", "Power BI", "Power Query", "PSQL"],
    type: "work",
  },
  {
    id: "exp-4",
    title: "Projet Data Météo - API Météo France & dashboard BI",
    company: "IUT de l'UPEC (Université Paris-Est Créteil)",
    location: "Vitry sur Seine",
    startDate: "Septembre 2022",
    endDate: "En cours",
    description: [
      "Collecte automatique via API Météo France.",
      "Dashboard Power BI (modèle, relations, DAX).",
    ],
    technologies: ["Python", "API REST", "Power BI", "SQL"],
    type: "academic",
  },
];

// ============================================
// EDUCATION
// ============================================

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Cycle ingénieur informatique",
    school: "ESIEA",
    location: "France",
    startDate: "2026",
    endDate: "2029",
    specialization: "1re année généraliste (spécialisation à partir de la 2e année)",
    description:
      "Admission à l'ESIEA pour un cycle de 3 ans avec recherche d'un contrat d'apprentissage. La 1re année est généraliste et la spécialisation se fait à partir de la 2e année.",
  },
  {
    id: "edu-2",
    degree: "BUT Informatique (3ème année)",
    school: "IUT de l'UPEC (Université Paris-Est Créteil)",
    location: "Vitry Sur Seine",
    startDate: "2023",
    endDate: "2026",
    specialization: "Administration, Gestion et Exploitation des Données (AGED)",
    description:
      "Formation complète en informatique avec spécialisation en bases de données, administration système et exploitation de données. Compétences acquises en data, développement web, programmation, gestion de projet et DevOps.",
  },
  {
    id: "edu-3",
    degree: "Baccalauréat technologique (mention Bien)",
    school: "Lycée polyvalent de Cachan",
    location: "Cachan",
    startDate: "2021",
    endDate: "2023",
    description: "BAC STI2D (Système informatique et numérique)",
  },
];

// ============================================
// PROJECTS
// ============================================

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Stage Data & BI à la DGAC – Parseur de plans de vol & tableaux de bord",
    description:
      "Développement de parseurs Python pour extraire des plans de vol Eurocontrol, structuration des données dans PostgreSQL et création de dashboards Power BI pour le suivi opérationnel des flux aéronautiques.",
    longDescription:
      "Mise en place d'une chaîne complète de traitement de données: parsing de fichiers hétérogènes, normalisation et stockage PostgreSQL, puis restitution via des tableaux de bord Power BI. Travail orienté fiabilité des données, automatisation des traitements et restitution métier pour les équipes de la DGAC.",
    technologies: ["Python", "PostgreSQL", "Power BI", "Power Query", "ETL"],
    category: "data",
    featured: true,
    image: "/assets/images/projects/p2.jpg",
    githubUrl: "https://github.com/adel016/SAE3.01",
  },
  {
    id: "proj-3",
    title: "Application de gestion de parc informatique",
    description:
      "Développement d’une application de gestion du parc informatique permettant de centraliser, structurer et suivre l’ensemble des équipements et ressources internes. Mise en place d’outils de suivi et d’administration afin d’optimiser la gestion des actifs, d’améliorer la traçabilité et de renforcer l’efficacité opérationnelle.",
    technologies: ["PHP", "Laravel", "SQL", "Sécurité informatique", "Administration système"],
    category: "web",
    featured: false,
    image: "/assets/images/projects/p2.png",
  },
  {
    id: "proj-4",
    title: "Medialise - Entrepôt de données médicales et IA sémantique",
    description:
      "Conception d’un entrepôt de données médicales visant à centraliser, structurer et valoriser des données issues de sources hétérogènes afin de garantir leur qualité et leur cohérence. Développement d’un prototype d’assistant intelligent exploitant la recherche sémantique pour faciliter l’accès à l’information et soutenir l’aide à la décision dans le domaine de la santé.",
    technologies: ["Python", "Agno", "SQL", "MongoDB", "Docker", "Qdrant", "Neo4j", "GIT", "LLM"],
    category: "data",
    featured: true,
    image: "/assets/images/projects/p1.jpg",
    githubUrl: "https://github.com/adel016/Medialise",
  },
  {
    id: "proj-6",
    title: "Plateforme Météo France",
    description:
      "Application web avec système d'authentification permettant aux utilisateurs de consulter des données météorologiques extraites et traitées depuis les APIs officielles de Météo France, avec un espace personnalisé par compte.",
    longDescription:
      "Conception et développement d'une application web full-stack permettant de gérer, analyser et visualiser des jeux de données. Intégration d'une interface d'administration sécurisée et de tableaux de bord interactifs.",
    technologies: ["PHP", "Python", "Tailwind CSS", "SQL", "REST API"],
    category: "web",
    featured: true,
    image: "/assets/images/projects/p4.png",
    githubUrl: "https://github.com/adel016/SAE3.01",
  },
  {
    id: "proj-2",
    title: "Chaîne CI/CD avec Docker & GitHub Actions",
    description:
      "Mise en place d'une pipeline CI/CD complète avec un service Python Flask connecté à MySQL et MongoDB, conteneurisé avec Docker et déployé automatiquement via GitHub Actions et Docker Hub sur une VM de production.",
    technologies: ["Python", "Flask", "Docker", "Docker Compose", "GitHub Actions", "MySQL", "MongoDB"],
    category: "devops",
    featured: true,
    image: "/assets/images/projects/p5.png",
  },
  {
    id: "proj-5",
    title: "Dashboard Démographique France",
    description:
      "Dashboard interactif de représentation démographique française avec nettoyage et structuration des données socio-professionnelles, visualisation de répartitions par âge, CSP, région et revenus.",
    technologies: ["Power BI", "Power Query", "Python", "Pandas", "SQL", "Excel"],
    category: "data",
    featured: false,
    image: "/assets/images/projects/p3.png",
  },
];

// ============================================
// INTERESTS
// ============================================

export const interests: Interest[] = [
  { name: "Nouvelles technologies" },
  { name: "Intelligence artificielle" },
  { name: "Randonnée" },
  { name: "Voyage" },
  { name: "Athlétisme" },
];

// ============================================
// NAV ITEMS
// ============================================

export const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Parcours", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
