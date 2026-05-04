export const profile = {
  name: "Rafael Rojas",
  pronouns: "they/them",
  location: "Valdivia, Chile",
  role: "Junior Backend Software Engineer",
  tagline: "Python · APIs · Automation · Data Tools",
  headline:
    "I build practical backend systems that turn messy real-world workflows into structured, reliable software.",
  bio: `Computer Science graduate with First Class Honours, focused on backend development, automation, APIs, and data-driven tools. I enjoy turning messy real-world problems into structured, reliable systems, with a careful approach to databases, integrations, and backend logic. Friendly, adaptable, and detail oriented, I bring strong communication skills alongside hands-on experience building Python applications, API integrations, and automation workflows.`,
  aboutExtended: `Rafael is a Computer Science graduate with First Class Honours from the University of Westminster. They focus on backend engineering, automation, APIs, data tools, and systems that stay understandable as they grow.

They like software with clear flows, careful boundaries, and enough structure to survive real-world messiness—not just code that works once, but systems you can reason about later.

Based in Valdivia, Chile, they are open to remote and hybrid opportunities. Technically, they gravitate toward Elixir, developer tooling, automation, platform work, and backend architecture.

Away from the keyboard, they care about fine arts, weird fiction, music, neuroscience, and writing—interests that show up as patience for ambiguity, taste for pattern, and respect for narrative.`,
  skills: {
    languages: ["Python", "Elixir", "Scala", "Java"],
    backend: ["FastAPI", "Django", "Phoenix", "REST APIs"],
    databases: ["PostgreSQL", "SQLite", "SQL"],
    tools: [
      "Git",
      "Docker",
      "Stripe",
      "Oban",
      "Google Workspace APIs",
      "WhatsApp API",
    ],
    concepts: [
      "Webhooks",
      "API integrations",
      "Authentication flows",
      "Backend validation",
      "Relational databases",
      "Automation",
      "NLP",
      "Model evaluation",
    ],
  },
  humanLanguages: [
    { name: "English", level: "C1" },
    { name: "Spanish", level: "Native" },
  ],
  interests: [
    "Fine arts",
    "Weird fiction",
    "Music",
    "Neuroscience",
    "Writing",
  ],
  contact: {
    email: "rafarojasv6@gmail.com",
    linkedIn: "https://www.linkedin.com/in/PLACEHOLDER",
    github: "https://github.com/PLACEHOLDER",
  },
  pillars: [
    {
      title: "Backend systems",
      body: "Services, data models, and boundaries that stay coherent when requirements shift.",
    },
    {
      title: "Automation workflows",
      body: "Pipelines that reduce manual work without hiding the important decision points.",
    },
    {
      title: "API integrations",
      body: "Webhooks, auth flows, and third-party systems wired together with idempotency in mind.",
    },
    {
      title: "Data-driven internal tools",
      body: "Reports, dashboards, and exports that help operators see what actually happened.",
    },
  ],
  personalNote: `I'm interested in systems that are not only functional, but understandable: software with clear flows, careful boundaries, and enough structure to survive real-world messiness.`,
} as const;

export type ExperienceItem = {
  title: string;
  org: string;
  dates: string;
  location: string;
  bullets: string[];
  featured?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer — Data & Automation",
    org: "OrigenLab",
    dates: "January 2026 — Present",
    location: "Chile / Remote",
    featured: true,
    bullets: [
      "Built a Python/SQLite backend pipeline to ingest emails, generate business reports, track leads, and support safe outbound workflows.",
      "Implemented guarded outreach tooling with Sent-history checks, suppression logic, duplicate prevention, and human-reviewed LLM draft assistance.",
      "Developed internal Streamlit dashboards, export scripts, operational reports, and monorepo documentation across a Python backend and Astro marketing site.",
    ],
  },
  {
    title: "Freelance Software Engineer",
    org: "Self-employed contract",
    dates: "November 2025 — Present",
    location: "London / Remote",
    featured: true,
    bullets: [
      "Built a WhatsApp tattoo booking assistant using FastAPI, Meta Cloud API, Stripe Checkout/webhooks, Google Sheets logging, and Google Calendar slot suggestions.",
      "Developed backend automation workflows, validation logic, service integrations, and production-oriented safety checks.",
      "Built and deployed business web solutions including infrastructure setup, domain/DNS configuration, SSL, email configuration, and technical documentation.",
    ],
  },
];

export const otherRoles = [
  {
    title: "Barista",
    org: "Harrison’s Coffee, London",
    dates: "January 2026 — February 2026",
  },
  {
    title: "Sales Assistant",
    org: "Sublime Vintage, London",
    dates: "September 2024 — January 2025",
  },
  {
    title: "Farmers Market Seller",
    org: "13 Acre, London",
    dates: "June 2024 — September 2024",
  },
] as const;

export type EducationItem = {
  degree: string;
  school: string;
  dates: string;
  detail?: string;
  focus?: string[];
  grades?: { course: string; score: string }[];
};

export const education: EducationItem[] = [
  {
    degree: "Computer Science BSc, First Class Honours",
    school: "University of Westminster, London",
    dates: "September 2022 — July 2025",
    focus: [
      "Backend systems",
      "Databases",
      "Algorithms",
      "Applied AI",
    ],
    grades: [
      { course: "Database Systems", score: "91" },
      { course: "Software Development", score: "87" },
      { course: "Algorithms", score: "80" },
      { course: "Client–Server Architectures", score: "74" },
    ],
  },
  {
    degree: "International Foundation Year in Computing",
    school: "University of Brighton International College",
    dates: "September 2021 — August 2022",
    detail:
      "Pass with Distinction. Student Representative; supported international students.",
  },
];
