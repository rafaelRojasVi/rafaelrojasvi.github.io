export const profile = {
  name: "Rafael Rojas",
  pronouns: "they/them",
  location: "Valdivia, Chile",
  role: "Junior Backend Software Engineer",
  tagline: "Python · Elixir · APIs · Automation · Data Tools",
  /** Home + default OG when a page omits its own description */
  metaDescription:
    "Rafael Rojas, backend software engineer in Valdivia, Chile. CTO of OrigenLab and BENKER; platforms for Campo Digital and Heavy Ops. Python, TypeScript, FastAPI, PostgreSQL/PostGIS, React. First Class Honours CS (Westminster).",
  seo: {
    home: "Rafael Rojas (they/them), backend software engineer in Valdivia, Chile. CTO of OrigenLab and BENKER, building operations platforms in Python, TypeScript, FastAPI, and PostgreSQL.",
    about:
      "About Rafael Rojas: backend software engineer based in Valdivia, Chile; First Class Honours CS; Python, TypeScript, Elixir, APIs, geospatial data, and contact.",
    experience:
      "Experience & education: Rafael Rojas. CTO at OrigenLab and BENKER, Campo Digital geospatial platform, Heavy Ops operator-matching platform, freelance FastAPI/WhatsApp/Stripe work, Westminster First Class Honours.",
    projects:
      "Projects: OrigenLab CRM and data platform, Heavy Ops operator matching, BENKER commercial platform, Campo Digital LiDAR and forestry GIS, Tattoo Booking Bot, LedgerBank API, and more.",
  },
  headline:
    "Brilliant and flawed, combining rare engineering talents with ridiculous public displays of ostentation, Musk is our era’s Thomas Edison, the man who, you may recall, electrocuted an elephant in order to discredit a rival.",
  headlineAttribution: "Yanis Varoufakis",
  headlineSource: "Technofeudalism: What Killed Capitalism",
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
    "Currently: based in Valdivia, Chile. CTO of OrigenLab and BENKER; contract software engineer for Campo Digital and Heavy Ops; member of the NewDev software cooperative.",
  ],
  /** Short paragraph for reuse (e.g. structured data later). */
  bio: `Backend software engineer based in Valdivia, Chile, and CTO of OrigenLab and BENKER. Computer Science graduate with First Class Honours, building operations platforms for Chilean companies: an email-intelligence CRM for a laboratory supplier, a LiDAR and forestry GIS platform, an operator-matching platform for heavy equipment, and a commercial database for a civil-works contractor. Python, TypeScript, FastAPI, PostgreSQL and PostGIS, React, with tests on the paths that move money or messages.`,
  aboutExtended: `I’m Rafael (they/them), a backend software engineer based in Valdivia, Chile. I’m CTO of two companies, OrigenLab and BENKER, a contract engineer for Campo Digital and Heavy Ops, and a member of NewDev, Valdivia’s software development cooperative. I’m open to remote or hybrid backend roles.

I’m a Computer Science graduate with First Class Honours, focused on backend development, data platforms, and operator tools. I like work where the hard parts are clear: relational models, webhook and REST integrations, validation, migrations, idempotency, and tests that protect the fragile paths.

Since 2026 I have been building, mostly alone, the software behind four businesses. For OrigenLab, a laboratory equipment supplier, an email-intelligence pipeline, a read-only operator API, and a CRM dashboard with Google Workspace sign-in. For Campo Digital, a geospatial platform: LiDAR timber-volume measurement, forestry GIS for properties and stands, and a company portal. For Heavy Ops, a platform that matches construction companies with eligible, credentialed machine operators. For BENKER, a heavy-civil-works contractor, a commercial database that replaces spreadsheets and a PDF quotation archive. Each one ships with architecture decision records and a status document derived from the code, so nobody has to guess what works.

Outside engineering I read, write, and pay attention to art and music. That mostly shows up as patience for ambiguity and a bias toward clear explanations in code and runbooks.`,
  skills: {
    languages: ["Python", "TypeScript", "Elixir", "SQL", "Go"],
    backend: [
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "Alembic",
      "Next.js",
      "React",
      "Phoenix",
      "REST APIs",
    ],
    databases: ["PostgreSQL", "PostGIS", "SQLite", "Supabase", "Row-level security"],
    tools: [
      "Git",
      "Docker",
      "GitHub Actions",
      "uv",
      "pnpm",
      "Playwright",
      "Stripe",
      "Google Workspace APIs",
      "WhatsApp API",
      "MCP servers",
    ],
    concepts: [
      "API integrations",
      "Authentication flows",
      "Backend validation",
      "Relational modelling",
      "Geospatial data and LiDAR",
      "Automation with guardrails",
      "Architecture decision records",
      "Testing",
      "Migrations",
      "Idempotency",
      "Operational reliability",
    ],
    agents: [
      "Claude Code",
      "Claude API",
      "MCP server authoring",
      "Agent skills and slash commands",
      "Context engineering",
      "Agent permission design",
      "Human-in-the-loop review",
    ],
  },
  /** About page, "Working with agents" section. */
  agentsWork: {
    lead: "I build with agents every day, and I build the things agents need: servers with legible permissions, documents they can trust, and a human on anything that moves money or messages.",
    paragraphs: [
      "Claude Code is my daily driver. Each repository carries its project instructions, custom skills and slash commands, so a session starts with the architecture decisions, the status document and the test commands already in context. The agent reads the same canonical documents a new engineer would.",
      "When an agent needs to touch a real system I write the MCP server myself and split it by capability. For BENKER that means Drive read-only, Gmail read-only and Gmail send as three separate servers, so what an agent may do is visible in which server it was given, not buried in a config flag.",
      "Company knowledge gets the discipline of code: one owner per truth, provenance on every claim, recorded unknowns, and a validator that fails the build when the documents drift. The language model is not the memory. Git is. Outbound email, payments and migrations keep a person in the loop and tests on the fragile paths.",
    ],
    links: [
      { label: "BENKER Ops MCP Servers", href: "/projects/platt-commercial-ops" },
      { label: "NewDev company knowledge base", href: "/projects/newdev-company-knowledge" },
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
      body: "HTTP APIs and schemas with explicit validation, so invalid state fails in one place, not across three integrations.",
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
  personalNote: `I optimize for backends another engineer can extend: explicit data rules, migrations you can trust, and tests on parsers, webhooks, and payment edges, where production usually breaks.`,
} as const;

export type OrgLogo = {
  /** Light-theme asset. */
  src: string;
  /** Dark-theme asset; falls back to `src`. */
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
  /** When the asset is a symbol only, the wordmark is typeset next to it. */
  word?: string;
};

export type ExperienceItem = {
  title: string;
  /** Company or engagement label; omit when the title already names the org. */
  org?: string;
  /** Short name used in compact listings (homepage). */
  orgShort?: string;
  /** Company website. */
  orgUrl?: string;
  /** Real brand asset when one exists; otherwise the org name is typeset. */
  logo?: OrgLogo;
  dates: string;
  location: string;
  bullets: string[];
  featured?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    title: "Chief Technology Officer",
    org: "OrigenLab",
    orgShort: "OrigenLab",
    orgUrl: "https://origenlab.cl",
    logo: {
      src: "/clients/origenlab-mark.svg",
      srcDark: "/clients/origenlab-mark-dark.svg",
      alt: "OrigenLab",
      width: 48,
      height: 48,
      word: "OrigenLab",
    },
    dates: "January 2026 - Present",
    location: "Valdivia, Chile / Remote",
    featured: true,
    bullets: [
      "Own the software of a laboratory-equipment business end to end: the public site, the email intelligence pipeline, the operator API, the Cloudflare Worker proxy, and the CRM dashboard. One engineer, documented so another could take over from the seven canonical documents alone.",
      "Rebuilt origenlab.cl (V2, September 2026) as a static Astro site with a paper-and-ink design system, six equipment families from six manufacturers, and a validation gate in CI: catalog truth, built-HTML invariants with zero third-party requests, computed contrast, keyboard and reduced-motion checks, and screen captures at three widths.",
      "Operator API in FastAPI: dashboard reads, Postgres mirror reporting, and the only human write path, durable CRM commands under POST /operations/* with trusted operator identity, Idempotency-Key receipts, and optimistic concurrency. A CI test enforces the exact write surface and scans for forbidden pipeline imports.",
      "Cloudflare Worker proxy at dashboard.origenlab.cl/api: same-origin, method and path allowlist, Cloudflare Access service token plus origin API token, upstream redirects and cookies stripped, everything else 405. The browser never holds a token.",
      "CRM dashboard V2 in React: Google Workspace sign-in; summary, opportunities, organisations, people, suppliers, Drive archive, marketing, and review sections; role-based masking of contact details; honest labels for imported history.",
      "Email pipeline in Python 3.12 and uv: PST and Gmail ingest into SQLite, business marts, outbound safety memory, and an operator CLI. SQLite stays the authority for what may be sent; there is no autonomous send path.",
      "V2 data platform, accepted September 2026: one Supabase PostgreSQL 17 project with seven private schemas, 36 tables, four database roles and 139 row-level-security policies, one-writer rules per table, insert-only domain events, and ES256 JWT verification through JWKS. 23 migrations, 408 pgTAP assertions, a clean-room rebuild with 41 exact probes, and a hosted audit backed by 308 unit tests.",
    ],
  },
  {
    title: "Chief Technology Officer",
    org: "BENKER, heavy civil works contractor",
    orgShort: "BENKER",
    logo: {
      src: "/clients/benker-logo.svg",
      srcDark: "/clients/benker-logo-white.svg",
      alt: "BENKER",
      width: 949,
      height: 244,
    },
    dates: "August 2026 - Present",
    location: "Valdivia, Chile / Remote",
    featured: true,
    bullets: [
      "Replacing spreadsheets, a quotation PDF archive, and Drive folder workflows with a commercial database and process-tracking platform: Next.js and TypeScript over PostgreSQL with tested migrations.",
      "Audited the historical archive read-only and documented every source-data fact with provenance before modelling organisations, studies, quotations, approvals, and outcomes.",
      "Marketing subsystem on the same identity layer: contact imports, campaigns, audiences, eligibility and consent rules, and an isolated one-recipient send path.",
      "Companion MCP servers split by capability (Drive read-only, Gmail read-only, Gmail send) so agent permissions are legible to a human.",
    ],
  },
  {
    title: "Software Engineer, Geospatial Platform",
    org: "Campo Digital (contract)",
    orgShort: "Campo Digital",
    orgUrl: "https://www.campodigital.cl",
    logo: {
      src: "/clients/campodigital-logo.png",
      srcDark: "/clients/campodigital-logo-white.png",
      alt: "Campo Digital",
      width: 500,
      height: 168,
    },
    dates: "August 2026 - Present",
    location: "Valdivia, Chile / Remote",
    featured: true,
    bullets: [
      "Building a multi-product geospatial and forestry platform as a modular monolith: a shared FastAPI composition layer over PostgreSQL/PostGIS with product adapters isolated by bounded context.",
      "LiDAR / Cubicación: LAS/LAZ forensic inspection, pile localisation, projected-face measurement, geometric volume analysis, and estimator benchmarking against reference measurements.",
      "Gestión Predial Forestal: properties, stands, polygon management, partial harvest operations, area calculations, GIS and Excel export, and client reporting, modelled from a documented source-evidence contract.",
      "Company portal composing the LiDAR, forestry, and Transelec dashboards behind one branded entry point, with a staging deployment and Google Workspace sign-in.",
    ],
  },
  {
    title: "Software Engineer, Platform",
    org: "Heavy Ops",
    orgShort: "Heavy Ops",
    dates: "August 2026 - Present",
    location: "Valdivia, Chile / Remote",
    featured: true,
    bullets: [
      "Designing and building a B2B platform that matches construction and earthmoving companies with eligible, credentialed machine operators: FastAPI, Pydantic v2, SQLAlchemy 2, Alembic, PostgreSQL/PostGIS, and a React/TypeScript PWA.",
      "Eligibility evaluated before ranking and persisted with reasons: machine capability, verified credentials as of the start date, availability, project radius, and confirmed-booking conflicts. Deterministic and explainable by rule, no opaque ranking.",
      "Idempotent offer and booking endpoints with per-role authorisation, layered credential requirements with audited writes, and an arrival-bonus workflow that records confirmation without moving money.",
      "Product rules, ADRs, and an implementation-status table derived from code keep the README honest about what is built.",
    ],
  },
  {
    title: "Member",
    org: "NewDev, Cooperativa de Desarrollo de Software, Valdivia",
    orgShort: "NewDev Cooperativa",
    orgUrl: "https://www.newdev.cl",
    logo: {
      src: "/clients/newdev-logo-ink.svg",
      srcDark: "/clients/newdev-logo-white.svg",
      alt: "NewDev",
      width: 560,
      height: 160,
    },
    dates: "2026 - Present",
    location: "Valdivia, Chile",
    featured: true,
    bullets: [
      "Member of a Valdivia software development cooperative, working alongside other local engineers on shared practice and client work.",
      "Built a reference implementation of the cooperative's company knowledge base: canonical documents in Git with one owner per truth, claims tagged with class and provenance, recorded unknowns, and agent permission grants.",
      "Wrote the stdlib-only validator and contract tests that enforce the structure, so the knowledge base fails the build when it drifts.",
    ],
  },
  {
    title: "Freelance Software Engineer",
    org: "Self-employed contract",
    dates: "November 2025 - Present",
    location: "London / Remote",
    bullets: [
      "Built a WhatsApp tattoo booking assistant using FastAPI, Meta Cloud API, Stripe Checkout/webhooks, Google Sheets logging, and Google Calendar slot suggestions.",
      "Developed backend automation workflows, validation logic, service integrations, and production-oriented safety checks.",
      "Built and deployed business web solutions including infrastructure setup, domain/DNS configuration, SSL, email configuration, and technical documentation.",
    ],
  },
  {
    title: "English Tutor, IELTS Preparation Support",
    org: "Freelance / Informal",
    dates: "May 2026 - Present",
    location: "Chile / Remote",
    bullets: [
      "Supported an English learner preparing for an international study-abroad English test, with focus on listening, spelling, pronunciation, and exam-style practice.",
      "Created short structured exercises for IELTS-style dictation, names, postcodes, email spelling, and common listening traps.",
      "Adapted explanations between English and Spanish to make grammar, vocabulary, and test instructions easier to understand.",
    ],
  },
];

export const otherRoles = [
  {
    title: "Barista",
    org: "Harrison’s Coffee, London",
    dates: "January 2026 - February 2026",
  },
  {
    title: "Sales Assistant",
    org: "Sublime Vintage, London",
    dates: "September 2024 - January 2025",
  },
  {
    title: "Farmers Market Seller",
    org: "13 Acre, London",
    dates: "June 2024 - September 2024",
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
    dates: "September 2022 - July 2025",
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
      { course: "Client-Server Architectures", score: "74" },
    ],
  },
  {
    degree: "International Foundation Year in Computing",
    school: "University of Brighton International College",
    dates: "September 2021 - August 2022",
    detail:
      "Pass with Distinction. Student Representative; supported international students.",
  },
];
