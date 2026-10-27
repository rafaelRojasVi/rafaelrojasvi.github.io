/**
 * CV content. The /cv page, its PDF and /cv.md are all generated from this
 * file, so the three can never disagree. Contact and education come from
 * `profile.ts`; role copy is written here because a CV needs tighter bullets
 * than the experience page.
 */
import { profile, education } from "@/data/profile";

export const SITE = "https://rafaelrojasvi.github.io";

export type CvRole = {
  title: string;
  org: string;
  /** One line a non-engineer can read: who the client is and what I own. */
  context: string;
  dates: string;
  location: string;
  bullets: string[];
  /** Public write-up of the work, relative to the site root. */
  caseStudy?: string;
};

export type CvProject = {
  name: string;
  stack: string;
  summary: string;
  href: string;
};

export const cv = {
  name: profile.name,
  title: "Backend Software Engineer",
  location: "Valdivia, Chile",
  availability: "Open to remote, hybrid or relocation",
  email: profile.contact.email,
  links: [
    { label: "Portfolio", href: SITE },
    { label: "GitHub", href: profile.contact.github },
    { label: "LinkedIn", href: profile.contact.linkedIn },
  ],
  summary:
    "Backend software engineer and CTO of two Chilean companies. Since January 2026 I have designed, built and run the software behind three businesses in three industries, mostly on my own: construction and earthworks, forestry, and laboratory equipment. I learn how each trade actually works (how an estimator prices a cubic metre of fill, how a forestry permit expires) and turn it into Python and TypeScript systems over PostgreSQL, with tested migrations and a person in the loop wherever money, messages or permits move. I work with AI agents every day and build the tools they use. First Class Honours in Computer Science, University of Westminster, London.",

  expertise: [
    {
      area: "Construction, earthworks and aggregates",
      detail:
        "Unit-price analysis (APU), quantity take-off (cubicación), general expenses, machinery rental tariffs, aggregate supply and delivery, supplier price history, geotechnical reports, municipal (DOM) permits, Mercado Público earthworks tenders, CYPE price databases.",
    },
    {
      area: "Forestry",
      detail:
        "Estates (predios) and stands (rodales), harvest reporting, CONAF permit requests and their expiry, shapefiles and ArcMap workflows, PostGIS, LiDAR timber volume.",
    },
    {
      area: "Laboratory equipment",
      detail:
        "Equipment catalogue by family and manufacturer, public procurement on Mercado Público / ChileCompra, sales to universities and laboratories, supplier and quotation history.",
    },
    {
      area: "AI agents",
      detail:
        "Claude Code as a daily tool, MCP servers split by permission, agent instructions and skills per repository, human review before anything is sent or paid.",
    },
  ],

  experience: [
    {
      title: "Chief Technology Officer",
      org: "OrigenLab",
      context:
        "Laboratory-equipment supplier. Sole engineer, responsible for all of the company's software.",
      dates: "Jan 2026 – Present",
      location: "Valdivia, Chile",
      caseStudy: "/projects/origenlab",
      bullets: [
        "Built the CRM the sales team works in: a React dashboard with Google Workspace sign-in covering opportunities, organisations, people, suppliers and a Drive archive, with contact details masked by role.",
        "Designed the V2 data platform on Supabase PostgreSQL 17: 36 tables in seven private schemas, four database roles, 139 row-level-security policies and insert-only domain events. 23 migrations, 408 pgTAP assertions and 308 unit tests.",
        "Wrote the FastAPI operator API behind a Cloudflare Worker proxy. Its only write path is a set of commands with Idempotency-Key receipts and optimistic concurrency, a CI test fails if any other write endpoint appears, and the browser never holds a token.",
        "Built the email-intelligence pipeline in Python 3.12: years of PST and Gmail history ingested into SQLite business marts, with an outbound safety memory that blocks repeat or suppressed contacts. Nothing is sent automatically.",
        "Built tender intelligence on Mercado Público / ChileCompra that finds laboratory-equipment demand in 17,000+ procurement records, and rebuilt origenlab.cl as a static Astro catalogue behind a CI gate for catalogue accuracy, contrast and keyboard access.",
      ],
    },
    {
      title: "Chief Technology Officer",
      org: "BENKER",
      context:
        "Heavy civil works and earthmoving contractor. Building the estimating and commercial system the office quotes from.",
      dates: "Aug 2026 – Present",
      location: "Remote",
      caseStudy: "/projects/platt-commercial-platform",
      bullets: [
        "Built the estimating software (Cotizador) in Next.js and TypeScript over PostgreSQL: each study in tabs for quotation, quantity take-off, APU, background documents and summary, with the client's PDF shown beside the budget before it goes out.",
        "Turned the company's history into a price book: 503 estimate workbooks from 409 past studies read into 18,311 dated price observations for machinery, haulage, labour, materials and disposal, and the office's unit-price template re-implemented formula by formula and checked against past studies.",
        "APU per line item with labour and machine yields, materials with waste, and market references from CYPE price databases and awarded Mercado Público earthworks tenders. Catalogues of aggregates (delivered cost of 1 m³, supplier offers), machinery and suppliers.",
        "Reads what each tender comes with: DWG plans drawn by layer with terrain levels, borehole logs and water table from geotechnical PDFs, the client's itemised quantities and rental letters, all searchable.",
        "CRM and marketing on one identity layer with consent rules and a gated send path, plus MCP servers split by capability (Drive read, Gmail read, Gmail send) so an agent's permissions are visible at a glance.",
      ],
    },
    {
      title: "Software Engineer, Geospatial Platform",
      org: "Campo Digital (contract)",
      context:
        "Forestry and geospatial services company. One platform for three products that used to live in shapefiles and Excel.",
      dates: "Aug 2026 – Present",
      location: "Remote",
      caseStudy: "/projects/campo-digital-platform",
      bullets: [
        "Built a FastAPI modular monolith over PostgreSQL/PostGIS, live in production with Google Workspace sign-in, per-product access grants and audited role changes. Production refuses unsafe configuration such as a database connection without TLS.",
        "Forestry GIS used by the client's forestry team: validated shapefile ingestion with SHA-256 provenance, a map dashboard, harvest reports with published versions, and CONAF permit status synced every night. Invalid polygons are pinpointed where their edge crosses itself.",
        "Excel import for a utilities project that finds columns by their header, keeps source row numbers, blocks on ambiguous mappings and saves a review report with every import.",
        "LiDAR research: LAS/LAZ inspection and timber-pile volume estimators benchmarked against reference measurements. 1,500+ Python tests, 20 migrations and 11 architecture decision records across the platform.",
      ],
    },
    {
      title: "Freelance Software Engineer",
      org: "Self-employed",
      context: "Small-business backends and integrations.",
      dates: "Nov 2025 – Present",
      location: "London / Remote",
      caseStudy: "/projects/tattoo-booking-bot",
      bullets: [
        "Built a WhatsApp booking assistant for a tattoo studio, in production: FastAPI, PostgreSQL, Stripe deposits, Google Calendar slot suggestions and Google Sheets logging.",
        "Modelled each booking as a state machine: idempotent webhooks, row locking for concurrent transitions, signed-webhook verification, Stripe reconciliation and single-use action tokens.",
      ],
    },
    {
      title: "Member",
      org: "NewDev, software development cooperative",
      context: "Valdivia's cooperative of local software engineers, sharing practice and client work.",
      dates: "2026 – Present",
      location: "Valdivia, Chile",
      bullets: [
        "Built the cooperative's reference company knowledge base in Git, readable by people and agents alike: one owner per fact, provenance on every claim and a validator that fails the build when the documents drift.",
      ],
    },
  ] satisfies CvRole[],

  projects: [
    {
      name: "LedgerBank API",
      stack: "Elixir, Phoenix, PostgreSQL, Oban",
      summary:
        "Banking-style API with JWT auth, a transactional ledger and background jobs, tested against double spends and concurrent transfers.",
      href: "/projects/ledger-bank-api",
    },
  ] satisfies CvProject[],

  education: education.map((e) => ({
    degree: e.degree,
    school: e.school,
    // "September 2022 - July 2025" -> "Sep 2022 – Jul 2025", matching the roles.
    dates: e.dates
      .replace(/\b([A-Z][a-z]{2})[a-z]* (\d{4})/g, "$1 $2")
      .replace(" - ", " – "),
    detail: e.grades
      ? `Selected results: ${e.grades.map((g) => `${g.course} ${g.score}%`).join(", ")}.`
      : e.detail,
  })),

  skills: [
    { group: "Languages", items: "Python, TypeScript, SQL. Working knowledge of Elixir and Go." },
    { group: "Backend", items: "FastAPI, Pydantic, SQLAlchemy, Alembic, Next.js, REST APIs, webhooks" },
    { group: "Data and GIS", items: "PostgreSQL, PostGIS, Supabase, row-level security, pgTAP, SQLite, shapefiles, DWG, LAS/LAZ" },
    { group: "Frontend", items: "React, Astro, Playwright" },
    { group: "Infrastructure", items: "Docker, GitHub Actions, Cloudflare Workers, Railway, Linux" },
    { group: "Integrations", items: "Stripe, WhatsApp Business API, Google Workspace APIs, MCP servers" },
    { group: "AI agents", items: "Claude Code, Claude API, MCP server authoring, agent skills, permission design" },
  ],

  languages: "Spanish (native), English (C1, degree completed in London)",
};

export type Cv = typeof cv;
