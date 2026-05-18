export const personal = {
  name: "Sulav Poudel",
  role: "Sr. Backend Engineer",
  tagline: "Building scalable SaaS systems from the ground up",
  bio: "Backend engineer based in Kathmandu, Nepal. Designing and developing scalable SaaS products across desktop, tablet, and mobile platforms. Currently leading technical decisions and mentoring at Aricalot Technology.",
  email: "contact@suulaav.com.np",
location: "Chabahil, Kathmandu, Nepal",
  available: true,
  links: {
    github: "https://github.com/suulaav",
    linkedin: "https://www.linkedin.com/in/suulaav/",
    email: "mailto:contact@suulaav.com.np",
  },
};

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "7+", label: "Production Systems" },
  { value: "3", label: "Countries Served" },
  { value: "∞", label: "Bugs Squashed" },
];

export const experience = [
  {
    company: "Aricalot Technology",
    role: "Sr. Backend Engineer",
    period: "Jan 2022 — Present",
    location: "Kathmandu, Nepal",
    description:
      "Designing and developing scalable SaaS products across desktop, tablet, and mobile platforms. Building backend systems from the ground up while maintaining high development standards.",
    highlights: [
      "Architecting and implementing secure, well-documented RESTful APIs",
      "Using SonarQube and performance profilers to analyze code quality and address security vulnerabilities",
      "Responsible for guiding technical decisions and mentoring junior developers",
      "Creating documentation and training materials for team onboarding",
    ],
  },
  {
    company: "Origami Technology",
    role: "Backend Engineer",
    period: "Dec 2020 — Jan 2022",
    location: "Nepal",
    description:
      "Backend Java Developer contributing to RESTful APIs and backend systems. Collaborated with cross-functional teams, wrote clean and maintainable code.",
    highlights: [
      "Developed RESTful APIs using Java for multiple production systems",
      "Collaborated with cross-functional teams across the product lifecycle",
    ],
  },
  {
    company: "Huawei — NTC",
    role: "Network Operations Engineer",
    period: "Jan 2019 — Dec 2020",
    location: "Kathmandu, Nepal",
    description:
      "Monitored and maintained critical network infrastructure ensuring high availability and performance in a high-pressure telecom environment.",
    highlights: [
      "Real-time incident response, troubleshooting, and escalation",
      "Ensured SLA compliance with Huawei tools and telecom protocols",
      "Root cause analysis for complex network infrastructure issues",
    ],
  },
];

export const projects = [
  {
    title: "Pacesetter",
    subtitle: "Taxation System · United States",
    description:
      "High-throughput taxation platform serving thousands of US users — engineered a custom in-house logging infrastructure and queue-based document processing pipeline capable of handling large-scale live tax workloads with precision and auditability.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JVM Tuning", "Queue Processing"],
    highlights: [
      "Created in-house logging solution for easier log processing",
      "Queue-based data processing for tax documents",
      "JVM garbage collection tuning for performance",
    ],
    live: null,
    status: "Production",
    featured: true,
    dateline: "United States · 2021",
  },
  {
    title: "Legal Candace",
    subtitle: "Case Management · United States",
    description:
      "Legal case management system for US courts — managing court cases, case logs, task management, and appointment scheduling with Elasticsearch-powered global search.",
    tech: ["Java", "Elasticsearch", "MongoDB", "Microservices"],
    highlights: [
      "Integrated Elasticsearch for global search across application and documents",
      "Migrated microservice code to monolithic backend",
      "Migrated SQL base to NoSQL application",
    ],
    live: null,
    status: "In Development",
    featured: false,
    dateline: "United States · 2025",
  },
  {
    title: "Acruit",
    subtitle: "Healthcare Staffing · AU & NZ",
    description:
      "AI-driven nurse shift placement platform serving healthcare facilities across Australia and New Zealand — intelligent matching engine pairs nurses to shifts based on qualifications, availability, and historical performance, with full financial and support integrations.",
    tech: ["Java", "Spring Boot", "Xero API", "Zendesk"],
    highlights: [
      "ML-based nurse-shift matching using qualification, location, and availability signals",
      "Predictive demand forecasting to pre-fill shifts before facilities post them",
      "Integrated Xero for automated invoicing and payroll processing",
      "Integrated Zendesk for customer support",
    ],
    live: null,
    status: "Production",
    featured: false,
    dateline: "AU & NZ · 2023",
  },
  {
    title: "BioCert",
    subtitle: "Identity & Biometrics · United States",
    description:
      "AI-assisted biometric identity verification platform for background screening and fingerprint enrollment — engineered a full 10-print capture pipeline with hardware-level integration, native C++ card generation, and intelligent image quality analysis.",
    tech: ["Java", "C++", "JNI", "Hardware Integration"],
    highlights: [
      "Built 10-fingerprint card from scratch using C++",
      "Implemented JNI to call native C++ code from Java",
      "Integrated fingerprint capture hardware via custom agent system",
    ],
    live: null,
    status: "Production",
    featured: false,
    dateline: "United States · 2025",
  },
  {
    title: "Speak Tu",
    subtitle: "DEI Analytics · United States",
    description:
      "Employee Report Generation System producing dynamic DEI reports on gender, ethnicity, salary equity, and EEO-1 compliance for US workplaces.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Analytics"],
    highlights: [
      "Pay equity analysis revealing salary discrepancies",
      "Diversity metrics with actionable workplace insights",
      "EEO-1 report generation required by US state governments",
    ],
    live: null,
    status: "Production since Sep 2022",
    featured: false,
    dateline: "United States · 2022",
  },
  {
    title: "Sahara",
    subtitle: "Community Health · Nepal",
    description:
      "Telemedicine platform connecting rural Nepali communities to licensed doctors — built to bridge the healthcare gap in remote districts where physical clinics are inaccessible, enabling real-time consultations, prescription management, and health record keeping.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "WebRTC", "Firebase"],
    highlights: [
      "Real-time video consultations via WebRTC for remote villages",
      "Offline-first health record sync for low-connectivity regions",
      "Multi-language support (Nepali, Maithili, Newari) for accessibility",
      "Integrated with government health ministry data reporting APIs",
    ],
    live: null,
    status: "Open Source",
    featured: false,
    dateline: "Nepal · 2024",
  },
  {
    title: "Nepal Warrior Championship",
    subtitle: "MMA Streaming · Nepal",
    description:
      "Online streaming portal for MMA events held by NWC Nepal, with Vimeo integration and dual payment systems for local and international audiences.",
    tech: ["Java", "Vimeo API", "IME Pay", "Stripe"],
    highlights: [
      "Vimeo video player for online MMA streaming",
      "IME Pay wallet and Stripe international payment integration",
    ],
    live: "https://hwcmma.com",
    status: "Production",
    featured: false,
    dateline: "Nepal · 2025",
  },
];

export const skills: Record<string, { name: string; level: number }[]> = {
  Backend: [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 92 },
    { name: "RESTful APIs", level: 90 },
    { name: "Microservices", level: 80 },
    { name: "JVM Tuning", level: 75 },
    { name: "C++", level: 60 },
    { name: "Python", level: 65 },
  ],
  Database: [
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "Elasticsearch", level: 82 },
    { name: "Redis", level: 75 },
    { name: "SQL", level: 90 },
    { name: "NoSQL Migration", level: 70 },
  ],
  DevOps: [
    { name: "Docker", level: 80 },
    { name: "Jenkins", level: 72 },
    { name: "Nginx", level: 75 },
    { name: "Wildfly", level: 70 },
    { name: "SonarQube", level: 78 },
    { name: "CI/CD", level: 80 },
  ],
  "Project Tools": [
    { name: "Confluence", level: 85 },
    { name: "Jira", level: 88 },
    { name: "Postman", level: 90 },
    { name: "Git", level: 92 },
    { name: "GitHub", level: 92 },
  ],
  "AI & Data": [
    { name: "Feature Pipelines", level: 65 },
    { name: "Embedding Generation", level: 60 },
    { name: "Vector Stores", level: 62 },
    { name: "Semantic Search", level: 70 },
    { name: "Hugging Face", level: 58 },
    { name: "ETL Design", level: 70 },
    { name: "Data Science Methodology", level: 60 },
  ],
};

export const education = [
  {
    institution: "Nepal Engineering College, Pokhara University",
    period: "2014 — 2018",
    degree: "B.E. Electronics & Communication Engineering",
  },
  {
    institution: "Trinity International College",
    period: "2011 — 2013",
    degree: "+2 Science",
  },
  {
    institution: "Lyceum Model School",
    period: "— 2011",
    degree: "SLC",
  },
];
