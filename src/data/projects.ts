export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type ProjectKind = "case-study" | "repository";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  /** `case-study` entries are featured and written up in depth; `repository` entries are shorter. */
  kind: ProjectKind;
  /** GitHub repository name under rafaelRojasVi; metadata is merged from github.generated.json. */
  repo?: string;
  /** Private repositories are described but not linked. */
  visibility: "public" | "private";
  stack: string[];
  shortDescription: string;
  engineeringFocus: string[];
  status: string;
  /** Year span shown in indexes. */
  years: string;
  /** Live site, when one exists. */
  live?: string;
  caseStudyIntro: string;
  sections: CaseStudySection[];
  privacyNote?: string;
  /** Screenshots under public/projects/<slug>/. Rendered as an editorial figure gallery. */
  gallery?: GalleryImage[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  /** Intrinsic size, to reserve layout space. */
  width: number;
  height: number;
};

export const projects: Project[] = [
  {
    slug: "origenlab",
    title: "OrigenLab",
    subtitle:
      "Commercial software for a laboratory-equipment business: public site, email intelligence pipeline, operator API behind a Cloudflare Worker, CRM dashboard, and a Supabase V2 data platform under migration",
    kind: "case-study",
    repo: "origenlab",
    visibility: "public",
    stack: [
      "Astro",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Vite",
      "Python 3.12",
      "uv",
      "FastAPI",
      "SQLite",
      "PostgreSQL 17",
      "Supabase",
      "Alembic",
      "pgTAP",
      "Cloudflare Workers",
      "Cloudflare Access",
      "pytest",
      "Playwright",
    ],
    shortDescription:
      "One system that finds demand, records counterparties, tracks each pursuable sale, produces quotations, and sends email under strict safety controls. V1 runs today as an Astro site, a SQLite-first Python pipeline, a FastAPI operator API over PostgreSQL, a Cloudflare Worker proxy, and a React CRM. V2 moves it onto one Supabase PostgreSQL project with a single command boundary.",
    engineeringFocus: [
      "Public site V2: paper-and-ink design system, six equipment families, CI gates for catalog truth, built-HTML invariants, contrast, and interaction",
      "FastAPI as the only human write path: POST /operations/* commands with operator identity, Idempotency-Key receipts, optimistic concurrency, and a test that pins the exact write surface",
      "Cloudflare Worker proxy: same-origin, method and path allowlist, Access service token plus origin token, redirects and cookies stripped",
      "CRM dashboard with Google Workspace sign-in, eight sections, role-based masking, honest labels for imported history",
      "V2 foundation: 7 private schemas, 36 tables, 4 roles, 139 RLS policies, one-writer rules, insert-only domain events, ES256 JWT via JWKS",
      "Seven canonical documents, each owning exactly one concern, plus a non-canonical status file updated in the same PR as any build-state change",
    ],
    status: "Production (CTO)",
    years: "2026",
    live: "https://origenlab.cl",
    caseStudyIntro:
      "OrigenLab sells laboratory equipment across Chile. Its software has to turn years of email into a commercial memory, let operators act on it, and never send a message the business would regret. The work is mostly boundaries: who may write what, through which path, with what evidence.",
    privacyNote:
      "Screenshots show the public site only. Dashboard, pipeline, and data are described, not shown; no customer or message content appears here.",
    gallery: [
      {
        src: "/projects/origenlab/site-home-desktop.png",
        alt: "origenlab.cl homepage on desktop: headline, six-point application diagram, and the list of equipment families",
        caption: "origenlab.cl, October 2026. The homepage leads with what a laboratory needs to do with its sample, then lists six equipment families from six manufacturers.",
        width: 1440,
        height: 900,
      },
      {
        src: "/projects/origenlab/site-centrifugas.png",
        alt: "Centrifuges product family page with the Ortoalresa brand and the first catalogue model",
        caption: "A product family page. Figures come from manufacturer documentation and are validated in CI before the site builds.",
        width: 1440,
        height: 900,
      },
      {
        src: "/projects/origenlab/site-home-mobile.png",
        alt: "origenlab.cl homepage on a phone",
        caption: "The same page at phone width. Interaction QA covers the mobile menu, keyboard order, and reduced motion.",
        width: 390,
        height: 844,
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Years of commercial history lived in mailboxes and PST archives. Nobody could say which organisations had bought, which threads were still warm, or which addresses must never be contacted again. Quotations were built by hand and sent from personal accounts.",
          "The business needed software that matched how it actually works: review before send, evidence for every claim, and a schema that answers operational questions without exposing raw mail to everyone.",
        ],
      },
      {
        id: "today",
        title: "What runs today",
        body: [
          "V1 is a monorepo of five deployable parts. Each one has a single job and a documented list of things it must never do.",
        ],
        bullets: [
          "apps/web: the public site, rebuilt in September 2026 as static Astro. Six equipment families, six manufacturer pages, application and category hubs, one quotation call to action. Deployed to shared hosting with security headers.",
          "apps/email-pipeline: Python 3.12 with uv. PST and Gmail ingestion into SQLite, business marts, commercial intelligence, outbound safety memory, and an operator CLI (status, daily health, refresh safety, build mart, mirror dashboard). The machine write path.",
          "apps/api: FastAPI on port 8001. Dashboard reads, read-only Postgres mirror reporting, and the only human write path: durable CRM commands under POST /operations/* with trusted operator identity, Idempotency-Key receipts, and optimistic concurrency.",
          "apps/dashboard-proxy: a Cloudflare Worker at dashboard.origenlab.cl/api. Method and path allowlist, Cloudflare Access service token plus origin API token, upstream redirects and cookies stripped, every other method answered 405. The browser never holds a token.",
          "apps/dashboard: the React CRM. Google Workspace sign-in, eight sections (summary, opportunities, organisations, people, suppliers, Drive archive, marketing, review), role-based masking for viewers, and labels that say when a case is imported history rather than live work.",
        ],
      },
      {
        id: "writes",
        title: "Who may write what",
        body: [
          "SQLite in the pipeline is the authority for outbound safety: sent memory, suppression, and outreach state. The API is read-only outside the enumerated command routes, and a CI test asserts the exact write surface and scans the API source for any import of a pipeline script that ingests, migrates, syncs, or sends.",
          "Postgres holds rebuildable machine mirrors plus the durable human CRM. Mirror data is never treated as send truth. Sending is a pipeline script run by a person, with history and suppression checks in front of it.",
        ],
      },
      {
        id: "v2",
        title: "V2: one database, one command boundary",
        body: [
          "The V2 architecture was accepted in September 2026. Everything moves onto one Supabase PostgreSQL 17 project with seven private schemas (crm, comms, outbound, evidence, catalog, procurement, platform) and 36 application tables. FastAPI becomes the only business command boundary; a Python worker owns Gmail sync, MIME parsing, PDF rendering, ChileCompra fetching, and classification; the dashboard never touches the database.",
          "Every mutation is a POST command with a trusted operator identity and an idempotency receipt. One command is one transaction and writes exactly one domain event, into a table with no UPDATE or DELETE grant. Each table has one writer; sending happens only through a closed list of privileged functions.",
          "Identity comes from Supabase Auth as ES256 JWTs verified against JWKS; the dashboard holds only the publishable key. FastAPI authorises from an operator table, and admin commands require a second authentication factor.",
        ],
        bullets: [
          "Local foundation done: 23 migrations, 4 roles, 139 row-level-security policies, 408 pgTAP assertions, zero security advisor findings.",
          "Clean-room rebuild as the recovery procedure: rebuild from migrations, import the evidence waves, verify 41 exact probes against a committed baseline.",
          "Hosted audit tooling in the Python standard library: read-only SQL proofs, 308 unit tests, failure-injection scenarios, one completed run against the hosted project.",
          "Slices 1 to 7 (auth, CRM identity, quotes, evidence, loading, sender handoff, rollback) not started. V1 remains authoritative until the handoff gate passes.",
        ],
      },
      {
        id: "docs",
        title: "Documentation as infrastructure",
        body: [
          "Seven canonical documents each own exactly one concern: domain, data, workflows, architecture, migration, operations, and the map itself. Any other document links to the owner instead of restating a rule. Every non-obvious claim is labelled as a V1 fact, a V2 decision, or planned work.",
          "A separate status file reports only what is built, applied, and deployed, with the date and commit it was measured against, and must change in the same pull request as the fact it reports. It owns no rule and cannot override the seven.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "The highest-leverage features were guardrails and auditability, not more automation.",
          "A one-writer rule per table removes a whole class of arguments about which number is right.",
          "When the data is sensitive, folder layout, runbooks, and the list of forbidden operations are part of the product.",
        ],
      },
    ],
  },
  {
    slug: "heavy-ops-platform",
    title: "Heavy Ops",
    subtitle:
      "B2B platform matching heavy-equipment companies with eligible, compliant machine operators, with an explainable arrival-bonus workflow",
    kind: "case-study",
    repo: "heavy-ops-platform",
    visibility: "private",
    stack: [
      "Python 3.12",
      "FastAPI",
      "Pydantic v2",
      "SQLAlchemy 2",
      "Alembic",
      "PostgreSQL",
      "PostGIS",
      "React",
      "TypeScript",
      "Vite",
      "pytest",
    ],
    shortDescription:
      "Chile-first platform where a company publishes a structured operator request, the system checks machine capability, verified credentials, availability, radius, and booking conflicts before anyone sees it, and only eligible operators receive the opportunity. An optional arrival bonus rises within a company-set band until acceptance and freezes there.",
    engineeringFocus: [
      "Eligibility predicates evaluated before exposure: capability, availability, mandatory verified credentials as of start date, project radius, confirmed-booking overlap",
      "Idempotent offer and booking endpoints with authorisation per company role",
      "Layered credential requirements (organisation, project, request) with audited writes",
      "Architecture decision records and an implementation-status document derived from code, not intent",
    ],
    status: "Pre-pilot (private)",
    years: "2026",
    caseStudyIntro:
      "A gated eligible-opportunity feed, not a public job board. The platform never moves money: a confirmed arrival bonus is recorded, not paid. Most of the engineering is in deciding who is allowed to see what, and proving it.",
    privacyNote: "Private repository. Described from its architecture and status documents only.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Urgent operator requests travel over WhatsApp and spreadsheets. Companies cannot verify credentials quickly, operators see jobs they are not eligible for, and nobody can explain afterwards why one operator was chosen.",
        ],
      },
      {
        id: "flow",
        title: "Flow",
        bullets: [
          "A company publishes a structured request for a machine role at a project site.",
          "Eligibility is computed and persisted per operator with ineligibility reasons and a score breakdown.",
          "Only eligible operators see the request; an optional arrival bonus in CLP rises within a company-set band until one accepts with a committed ETA.",
          "The company confirms, the operator checks in on arrival, and the platform records the confirmed bonus.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "A modular monolith: FastAPI with Pydantic v2 and SQLAlchemy 2 over PostgreSQL with PostGIS for radius checks, Alembic migrations, and a React PWA for operators plus an admin verification UI. No microservices, no queues, no ML matching.",
          "Product rules live in a project context document and ADRs. A separate implementation-status file records, per capability, what is designed, migrated, exposed, rendered, tested, and pilot-ready, so the README never overstates what works.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Explainability is a data-model decision. Persisting ineligibility reasons costs little and answers most disputes.",
          "A status table derived from code is the only honest roadmap.",
        ],
      },
    ],
  },
  {
    slug: "platt-commercial-platform",
    title: "BENKER Commercial Platform",
    subtitle:
      "Pre-production platform for a heavy-civil-works estimating business: organisations, studies, quotations, approvals, outcomes, and marketing eligibility on one identity layer",
    kind: "case-study",
    repo: "platt-commercial-platform",
    visibility: "private",
    stack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "PL/pgSQL",
      "Python",
      "pnpm workspaces",
      "Google Drive API",
      "Gmail API",
    ],
    shortDescription:
      "Replaces fragmented spreadsheets, a quotation PDF archive, and Drive folder workflows with a reliable record of what is in the pipeline, what was quoted, and what the outcome was. Two subsystems, commercial and marketing, share one identity layer.",
    engineeringFocus: [
      "Study-first quotation cockpit in Next.js over a Postgres schema with tested migrations",
      "Read-only reconciliation of a real Drive and Gmail archive that is never committed to the repository",
      "Marketing subsystem: imports, campaigns, audiences, eligibility, and consent",
      "Stdlib-only Python analysis and status tooling with tests; a single delivery status document as the authority on what is done",
    ],
    status: "Pre-production (private)",
    years: "2026",
    caseStudyIntro:
      "The hard part of a commercial database is not the tables, it is agreeing on what counts as a study, a budget, a quotation, and an outcome, then making the archive of past PDFs fit that model without leaking it.",
    privacyNote:
      "Private repository. Archive contents, contacts, and quotation data are omitted; the platform is described from its architecture and status documents.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Quotations lived as PDFs in Drive, pipeline state in spreadsheets, and customer context in Gmail. Nobody could answer how many studies were open, what had been quoted, or which outreach was still permitted.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        bullets: [
          "A Next.js application with a quotation cockpit that starts from the study, not the document.",
          "Postgres migrations with their own tests and README; PL/pgSQL where constraints belong in the database.",
          "Drive and Gmail integration that reads a snapshot outside the repository, read-only, with secret scanning configured.",
          "Make targets for foundation checks, web lint, types, tests, build, end-to-end runs, and read-only status reports.",
        ],
      },
      {
        id: "governance",
        title: "Documentation as infrastructure",
        body: [
          "A delivery status file is the only authority on what is done, in progress, blocked, or gated. The architecture document classifies every artefact as built, designed, or proposed. The agent router and contributor guide point at both.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "When part of the business history is unresolved, the codebase should say so rather than model an entity nobody has confirmed.",
        ],
      },
    ],
  },
  {
    slug: "campo-digital-platform",
    title: "Campo Digital Platform",
    subtitle:
      "Geospatial and forestry monorepo: LiDAR timber-stack measurement, forestry GIS management, and shared PostGIS platform services",
    kind: "case-study",
    repo: "campo-digital-platform",
    visibility: "public",
    stack: [
      "Python",
      "TypeScript",
      "PostgreSQL",
      "PostGIS",
      "QGIS",
      "LiDAR (LAS/LAZ)",
      "Docker",
      "Jupyter",
    ],
    shortDescription:
      "Multi-product platform for a Chilean forestry and geospatial services company: point-cloud processing and volume estimation for timber piles, a forestry GIS product for properties, stands, and partial harvests, a separate utilities-sector application domain, and a local company portal that composes all three.",
    engineeringFocus: [
      "LAS/LAZ forensic inspection, pile localisation, projected-face measurement, and estimator benchmarking against reference volumes",
      "Forestry GIS: predios, rodales, polygon management, partial harvest operations, area calculations, GIS and Excel export",
      "Source Evidence and Source Contract documents derived from the first real estate snapshot before building features",
      "Shared PostGIS services and a Makefile-driven local demo composition for all products",
    ],
    status: "In development (contract)",
    years: "2026",
    caseStudyIntro:
      "Forestry operations measure timber in the field and manage land in GIS tools. This platform turns both into software: measurable point clouds, a governed property and stand model, and reporting the client can hand to their own customers.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Timber volume was estimated by eye or by slow manual measurement. Property and stand data lived in loose shapefiles and spreadsheets, so area calculations and harvest records drifted apart.",
        ],
      },
      {
        id: "products",
        title: "Products",
        bullets: [
          "LiDAR / Cubicación: LAS/LAZ inspection, pile localisation, local face geometry, projected-face measurement, geometric volume analysis, and estimator benchmarking with reference validation.",
          "Gestión Predial Forestal: properties, stands, polygon management, partial harvest operations, area calculations, cartographic visualisation, GIS and Excel export, client reporting.",
          "Transelec: an independent application domain for a utilities-sector project, kept separate from the forestry model.",
          "Company portal: one local URL that navigates into all three products for demos.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "A monorepo with a products directory per domain and shared geospatial services on PostGIS. Each product keeps its own documentation of experiments and decisions; the LiDAR scientific notes remain authoritative for measurement methods.",
          "Before any forestry feature was built, the first real estate snapshot was documented as source evidence and a source contract, so the data model answers to real files rather than assumptions.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Geometry is only half of measurement. Reference validation and benchmarking are what make an estimator trustworthy to a client.",
          "Writing the source contract first saves rework: the schema follows the evidence instead of the other way round.",
        ],
      },
    ],
  },
  {
    slug: "tattoo-booking-bot",
    title: "Tattoo Booking Bot",
    subtitle:
      "Freelance platform: FastAPI, PostgreSQL, Stripe, and Meta WhatsApp with production-style webhook discipline",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Stripe",
      "WhatsApp Business Cloud API",
      "Google Sheets",
      "Google Calendar",
      "Docker",
      "pytest",
      "GitHub Actions",
    ],
    shortDescription:
      "End-to-end booking stack: WhatsApp webhooks into FastAPI, durable conversation/payment state in PostgreSQL, Stripe deposits with webhook reconciliation, and Google Calendar/Sheets integrations. pytest on critical paths and Docker + GHA for delivery.",
    engineeringFocus: [
      "Idempotent WhatsApp webhooks & duplicate-safe Stripe reconciliation",
      "PostgreSQL, SQLAlchemy, Alembic migrations; durable session + payment state",
      "13-question consultation flow with validation; admin / artist approval before commit",
      "Docker, pytest, GitHub Actions; production safeguards on critical paths",
    ],
    status: "Production (freelance)",
    years: "2025 - 2026",
    repo: "tattoo-booking-bot",
    kind: "case-study",
    visibility: "public",
    caseStudyIntro:
      "This is not a toy chatbot, it is a small integration-heavy backend. Money, third-party APIs, and asynchronous events land in the same service; the engineering work is state, retries, and tests.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Consultations arrived as unstructured WhatsApp traffic. The studio needed qualification, deposits, and scheduling without double charges, lost threads, or ambiguous handoff to artists.",
        ],
      },
      {
        id: "flow",
        title: "User flow",
        bullets: [
          "13-question consultation flow with per-step validation (budget, location parsing, intent).",
          "Stripe Checkout for deposits; webhooks confirm payment before state advances.",
          "Google Calendar slot suggestions; Google Sheets for lead logging.",
          "Admin and artist approval workflow before hard commitments.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "FastAPI fronts Meta webhooks; PostgreSQL holds authoritative state. Outbound calls to Stripe, Google APIs, and WhatsApp are sequenced with explicit failure handling, no “best effort” on money movement.",
          "Alembic tracks schema evolution; Docker packages the runtime; GitHub Actions runs automated checks.",
        ],
      },
      {
        id: "reliability",
        title: "Reliability and safety",
        bullets: [
          "Webhook idempotency keys / dedupe strategies to survive retries and out-of-order delivery.",
          "Explicit handling for partial failures (API down, webhook late, user abandons mid-flow).",
          "Admin paths to inspect and correct state when automation is wrong.",
          "pytest coverage on parsers, state transitions, and payment edge cases.",
        ],
      },
      {
        id: "integrations",
        title: "Integrations",
        body: [
          "Each vendor is a contract: timeouts, structured errors, and logging that identifies which side failed. Stripe webhooks are reconciled against Checkout session state; Google APIs are treated as flaky dependencies.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Conversational products are state machines, model the transitions, test illegal transitions, log decisions.",
          "If Stripe is involved, idempotency and reconciliation are core features, not polish.",
        ],
      },
    ],
  },
  {
    slug: "ledger-bank-api",
    title: "LedgerBank API",
    subtitle:
      "University-grade Phoenix API: JWT auth, PostgreSQL ledger, Oban jobs, Docker/CI",
    stack: [
      "Elixir",
      "Phoenix",
      "PostgreSQL",
      "Oban",
      "JWT",
      "Docker",
      "CI/CD",
    ],
    shortDescription:
      "Banking-style Elixir/Phoenix API: JWT authentication, transactional ledger modelling in PostgreSQL, Oban background jobs, and clean architecture, focused on invariants and backend reliability, not UI polish.",
    engineeringFocus: [
      "JWT-secured routes with role-aware permissions",
      "Transactional account/transfer modelling",
      "Oban for async, retried jobs",
      "Docker + CI for reproducible builds",
    ],
    status: "Academic / portfolio",
    years: "2025 - 2026",
    repo: "ledger-bank-api",
    kind: "case-study",
    visibility: "public",
    caseStudyIntro:
      "A structured answer to “what breaks when money and concurrency meet?” Phoenix handles HTTP; PostgreSQL enforces data rules; Oban carries work that must survive restarts.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Ledger-like systems fail when balances are implicit or updates race. The brief was to model accounts and movements clearly, authenticate callers, and run async jobs without losing work.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "Phoenix contexts keep domain boundaries explicit (clean architecture style). PostgreSQL transactions guard balance changes. Oban workers process retries and scheduled tasks with supervision-friendly failure modes.",
          "JWT authentication encodes roles; endpoints declare which operations are allowed per principal.",
        ],
      },
      {
        id: "why-elixir",
        title: "Why Elixir",
        body: [
          "BEAM gives cheap concurrency and supervision, useful when HTTP requests and background settlement overlap. The goal was readable, testable domain code rather than clever macros.",
        ],
      },
      {
        id: "reliability",
        title: "Reliability patterns",
        bullets: [
          "Database transactions as the source of truth for balance invariants.",
          "Oban for durable jobs; failures retry with backoff instead of silent drops.",
          "Dockerized app + CI pipeline so “works locally” matches what the pipeline builds.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Money domains reward boring tests: double-spend attempts, concurrent transfers, partial job failure.",
          "Elixir shines when you lean on OTP patterns instead of hiding side effects in controllers.",
        ],
      },
    ],
  },
  {
    slug: "misinformation-classifier",
    title: "Political Misinformation Classifier",
    subtitle:
      "Applied ML: BERT fine-tuning, evaluation discipline, honest limitations",
    stack: [
      "Python",
      "BERT",
      "NLP",
      "Machine learning",
      "Model evaluation",
      "Data pipelines",
    ],
    shortDescription:
      "Python NLP project: BERT-based political misinformation / fake-news classification with data preprocessing, train/validation discipline, model evaluation, and explicit limitations for responsible use.",
    engineeringFocus: [
      "Tokenizer-aligned preprocessing",
      "Train/val rigor and confusion analysis",
      "Reproducible scripts & data hygiene",
      "Responsible framing (limitations first)",
    ],
    status: "Academic",
    years: "2025",
    kind: "case-study",
    visibility: "private",
    caseStudyIntro:
      "ML work with an engineering mindset: the artifact is not only weights, it is the preprocessing contract, evaluation notebook, and clear statement of where the model will lie.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Keyword filters miss nuanced propaganda. The project tested whether a fine-tuned transformer could add signal while staying humble about politics, language shift, and dataset bias.",
        ],
      },
      {
        id: "pipeline",
        title: "Model pipeline",
        bullets: [
          "Text preprocessing aligned to tokenizer and task (no silent truncation surprises).",
          "Fine-tuned BERT classifier for political misinformation labels.",
          "Versioned training scripts and frozen splits for reproducible comparison.",
        ],
      },
      {
        id: "evaluation",
        title: "Evaluation",
        body: [
          "Reported precision/recall tradeoffs, confusion patterns, and qualitative failures, not a single leaderboard number. The goal is to know when the model should refuse to classify.",
        ],
      },
      {
        id: "limitations",
        title: "Limitations",
        body: [
          "Temporal and demographic drift break political classifiers silently. These models belong behind human review, monitoring, and governance, not as autonomous truth engines.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Most of the “backend” in ML is evaluation and data contracts; the forward pass is the short part.",
        ],
      },
    ],
  },
  {
    slug: "newdev-company-knowledge",
    title: "NewDev Company Knowledge",
    subtitle:
      "Versioned, validated knowledge base for a software cooperative, designed to be read by people first and AI agents second",
    kind: "repository",
    repo: "newdev-company-knowledge",
    visibility: "private",
    stack: ["Python", "Markdown", "Make"],
    shortDescription:
      "A reference implementation of company memory in Git: a canonical registry naming the owner of each kind of truth, claims tagged with a class and a basis, recorded unknowns, agent permission grants, and a validator that enforces all of it.",
    engineeringFocus: [
      "Validator enforcing required files, responsibility statements, resolvable links, unique identifiers, decision structure, provenance fields, and absence of secrets",
      "Contract tests with no third-party packages",
      "Explicit principle that the language model is not company memory",
    ],
    status: "Foundation, not adopted (private)",
    years: "2026",
    caseStudyIntro:
      "If agents are going to read a company's documents, the documents need the discipline of code: one owner per truth, provenance per claim, and checks that fail the build.",
    privacyNote: "Private repository. Built as a reference; not adopted by the cooperative.",
    sections: [
      {
        id: "principles",
        title: "Principles",
        bullets: [
          "The language model is not company memory. Knowledge lives in canonical documents in Git; agents read it.",
          "One truth, one owner. A canonical registry names the document that owns each kind of fact.",
          "Every material claim has a class and a basis: fact, owner decision, inference, contradiction, open, proposed, or historical.",
          "Unknowns are recorded, not guessed. Access is not authority.",
        ],
      },
      {
        id: "checks",
        title: "Checks",
        body: [
          "A stdlib-only validator and contract tests enforce the structure: required headings, responsibility statements, resolvable links, defined identifiers, decision and ADR structure, provenance fields, agent capability grants, and absence of template placeholders or contact data.",
        ],
      },
    ],
  },
  {
    slug: "kraken",
    title: "Kraken API Client",
    subtitle:
      "Progressive Python lessons on Kraken REST and WebSocket integration, building toward a small FastAPI wrapper",
    kind: "repository",
    repo: "kraken",
    visibility: "private",
    stack: ["Python 3.12", "FastAPI", "WebSockets", "uv", "Go"],
    shortDescription:
      "Thirteen self-contained lessons from raw REST calls to a FastAPI service, plus WebSocket ticker and order-book examples and a shared client with the request patterns extracted.",
    engineeringFocus: [
      "REST client patterns: pagination, error handling, rate limits",
      "WebSocket ticker and order book consumers",
      "FastAPI wrapper exposing the public API",
    ],
    status: "Learning project (private)",
    years: "2026",
    caseStudyIntro:
      "A deliberate study repository: each lesson adds one concept, and the later lessons turn the exercises into a service.",
    sections: [
      {
        id: "layout",
        title: "Layout",
        bullets: [
          "kraken-prep/lessons: lesson_1 through lesson_13_api, runnable directly with uv.",
          "kraken_client.py: shared REST client patterns; kraken_ws_ticker and kraken_ws_book: WebSocket examples.",
          "src/kraken: the FastAPI package scaffold the lessons build toward.",
        ],
      },
    ],
  },
  {
    slug: "platt-commercial-ops",
    title: "BENKER Ops MCP Servers",
    subtitle:
      "Model Context Protocol servers giving agents read-only Drive and Gmail access, and a separate gated send server, for the commercial platform",
    kind: "repository",
    repo: "platt-commercial-ops",
    visibility: "private",
    stack: ["Python", "MCP", "Google Drive API", "Gmail API", "uv"],
    shortDescription:
      "Companion to the commercial platform: small MCP servers split by capability (common, Drive read-only, Gmail read-only, Gmail send) so an agent's permissions are visible in which server it is given.",
    engineeringFocus: [
      "Capability split per server rather than per flag",
      "Registration script and placement notes for the host environment",
      "Tests per server package",
    ],
    status: "Internal tooling (private)",
    years: "2026",
    caseStudyIntro:
      "Agent permissions should be legible to a human. Separating read-only and send into different servers makes the grant obvious.",
    sections: [
      {
        id: "packages",
        title: "Packages",
        bullets: [
          "platt_common: shared auth and client helpers.",
          "platt_drive_ro and platt_gmail_ro: read-only servers.",
          "platt_gmail_send: the only package that can send, registered separately.",
        ],
      },
    ],
  },
  {
    slug: "go-ws-autobahn",
    title: "Go WebSocket Server",
    subtitle:
      "WebSocket echo server in Go validated against the Autobahn test suite",
    kind: "repository",
    repo: "go-ws-autobahn",
    visibility: "public",
    stack: ["Go", "WebSocket", "RFC 6455", "Docker"],
    shortDescription:
      "An echo server implementing the WebSocket protocol, run against 500+ Autobahn compliance cases to check framing, fragmentation, control frames, and close handshakes.",
    engineeringFocus: [
      "RFC 6455 framing and fragmentation",
      "Conformance testing with Autobahn in Docker",
      "Strict UTF-8 validation in progress",
    ],
    status: "Experiment",
    years: "2025",
    caseStudyIntro:
      "Protocol work is mostly edge cases. The test suite found them faster than reading the specification twice.",
    sections: [
      {
        id: "scope",
        title: "Scope",
        body: [
          "Echo server in Go with a Dockerfile for running the Autobahn fuzzing client against it. Passing cases cover the core protocol; strict UTF-8 validation of text frames is the remaining gap.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
