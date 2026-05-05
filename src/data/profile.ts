export const profile = {
  name: "Rafael Rojas",
  pronouns: "they/them",
  location: "Valdivia, Chile",
  role: "Junior Backend Software Engineer",
  tagline: "Python · Elixir · APIs · Automation · Data Tools",
  /** Home + default OG when a page omits its own description */
  metaDescription:
    "Rafael Rojas — Junior Backend Software Engineer, Valdivia, Chile. First Class Honours CS (Westminster). Python, Elixir, APIs, automation, PostgreSQL/SQLite, webhooks, integrations.",
  seo: {
    home: "Rafael Rojas — Junior Backend Software Engineer (they/them), Valdivia, Chile. First Class Honours CS. Python, Elixir, APIs, automation, data tools, databases, integrations.",
    about:
      "About Rafael Rojas: backend engineer in Valdivia, Chile; First Class Honours; Python, Elixir, APIs, automation, databases, and contact.",
    experience:
      "Experience & education: Rafael Rojas — OrigenLab data & automation, freelance FastAPI/WhatsApp/Stripe platform, Westminster First Class Honours, Brighton foundation year.",
    projects:
      "Projects: OrigenLab monorepo, Tattoo Booking Bot (FastAPI, PostgreSQL, Stripe, WhatsApp), LedgerBank API (Phoenix), Political Misinformation Classifier (BERT).",
  },
  headline:
    "I enjoy turning messy real-world problems into structured, reliable systems—with solid databases, integrations, and backend logic behind them.",
  /**
   * First “At a glance” line (homepage). `homeEducationLocation` is styled as a highlight in index.
   */
  homeEducation:
    "Computer Science graduate with First Class Honours (University of Westminster, 2025). Studied abroad in",
  homeEducationLocation: "London, United Kingdom",
  /** Remaining scannable lines for recruiters (homepage). */
  atAGlance: [
    "Focused on backend development, automation, APIs, and data-driven tools.",
    "Strong with relational databases, integrations, Python applications, API integrations, and automation workflows.",
    "Currently: Software Engineer (Data & Automation) at OrigenLab; freelance backend and integration work (London / remote).",
  ],
  /** Short paragraph for reuse (e.g. structured data later). */
  bio: `Computer Science graduate with First Class Honours, focused on backend development, automation, APIs, and data-driven tools. Hands-on with Python applications, PostgreSQL and SQLite, webhooks, Stripe and WhatsApp integrations, pytest, and Docker. Enjoys turning messy real-world problems into structured, reliable systems.`,
  aboutExtended: `I’m Rafael (they/them), based in Valdivia, Chile, open to remote or hybrid backend roles.

I’m a Computer Science graduate with First Class Honours, focused on backend development, automation, APIs, and data-driven tools. I like work where the hard parts are clear: relational models, webhook and REST integrations, validation, migrations, idempotency, and tests that protect the fragile paths.

Recent work includes a Python and SQLite pipeline for email and lead intelligence (OrigenLab), and a FastAPI + PostgreSQL service behind WhatsApp with Stripe, Google Sheets, and Calendar—plus university projects in Phoenix/Oban and applied NLP. I care about operational reliability and documentation another engineer can run.

Outside engineering I read, write, and pay attention to art and music—that mostly shows up as patience for ambiguity and a bias toward clear explanations in code and runbooks.`,
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
      "Webhooks",
    ],
    concepts: [
      "API integrations",
      "Authentication flows",
      "Backend validation",
      "Relational databases",
      "Automation",
      "NLP",
      "Model evaluation",
      "Testing",
      "Migrations",
      "Idempotency",
      "Operational reliability",
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
    linkedIn: "https://www.linkedin.com/in/rafael-rojas-001906263",
    github: "https://github.com/rafaelRojasVi",
  },
  pillars: [
    {
      title: "Services & data models",
      body: "HTTP APIs and schemas with explicit validation—so invalid state fails in one place, not across three integrations.",
    },
    {
      title: "Automation with guardrails",
      body: "Pipelines and outbound workflows with suppression, history checks, and human review where risk is high.",
    },
    {
      title: "Integration-heavy backends",
      body: "Stripe, Meta, Google: webhooks, retries, timeouts, and tests around the paths that move money or messages.",
    },
    {
      title: "Operator-facing tools",
      body: "Exports, dashboards, and runbooks so the team can answer “what happened?” without opening raw logs.",
    },
  ],
  personalNote: `I optimize for backends another engineer can extend: explicit data rules, migrations you can trust, and tests on parsers, webhooks, and payment edges—where production usually breaks.`,
} as const;

export type ExperienceItem = {
  title: string;
  /** Company or engagement label; omit when the title already names the org. */
  org?: string;
  dates: string;
  location: string;
  bullets: string[];
  featured?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer at OrigenLab — Data & Automation",
    dates: "January 2026 — Present",
    location: "Chile / Remote",
    featured: true,
    bullets: [
      "Built a Python/SQLite backend pipeline for OrigenLab to ingest emails, generate business reports, track leads, and support safe outbound workflows.",
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
      "Pass with Distinction. Student Representative — supported international students.",
  },
];
