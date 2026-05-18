export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  stack: string[];
  shortDescription: string;
  engineeringFocus: string[];
  status: string;
  caseStudyIntro: string;
  sections: CaseStudySection[];
  privacyNote?: string;
};

export const projects: Project[] = [
  {
    slug: "origenlab",
    title: "OrigenLab",
    subtitle:
      "Employed build: Astro 5 public site, Gmail→SQLite pipeline, Postgres mirror, read-only FastAPI, React ops dashboard",
    stack: [
      "Astro 5",
      "Tailwind CSS 4",
      "TypeScript",
      "Python",
      "SQLite",
      "PostgreSQL",
      "Alembic",
      "FastAPI",
      "React",
      "Vite",
      "Streamlit",
      "pytest",
    ],
    shortDescription:
      "Production monorepo: origenlab.cl marketing (catalog, brand system), plus apps/email-pipeline (Gmail→SQLite marts→Postgres mirror→FastAPI) and apps/dashboard (read-only React KPIs, classification QA, confirmed OCs)—with health checks and human-reviewed outreach gates.",
    engineeringFocus: [
      "Public site: product-forward homepage, Ortoalresa centrifuge vitrine + comparison, SERVA reagents, catalog validator",
      "Brand: three-body logo (canvas header), static lockups, SVG tooling, conservative commercial copy governance",
      "Pipeline: SQLite authoritative store, Alembic Postgres mirror, sync runbook, canonical vs archive API scope",
      "API & UI: GET-only FastAPI (/health/dependencies, KPIs, classification, commercial events); React 19 panel + smoke tests",
      "Safe outbound: sent-history, suppression, duplicates, human-reviewed LLM drafts—no auto-send",
    ],
    status: "Production (employed)",
    privacyNote:
      "Abstract diagrams and generic descriptions only—no customer or message content.",
    caseStudyIntro:
      "OrigenLab distributes laboratory equipment across Chile (Ortoalresa centrifuges, SERVA reagents, category hubs for food/QC/clinical labs). I work across apps/web (origenlab.cl), apps/email-pipeline (ingest, SQLite marts, Postgres mirror, FastAPI), and apps/dashboard (read-only React). Previews and JSON shapes below are sanitized—no proprietary mail or customer content.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Leads and threads lived across mailboxes and ad hoc sheets. Reporting meant manual copy-paste; outreach risked duplicates and emails that ignored prior sends.",
          "The business needed software that matched real process: review before send, traceable exports, and a schema that could answer operational questions without exposing raw mail to everyone.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        bullets: [
          "Redesigned origenlab.cl: split hero with featured Ortoalresa product, trust chips, Ortoalresa/SERVA commercial lines, three category hubs, quote process, and FAQ—typed catalog data with a validate-catalog CI guard.",
          "Product vitrine: five Ortoalresa microcentrífugas (local AVIF, PDFs, spec tables) plus comparison on /productos/centrifugas; SERVA reagent SKUs on the brand page; unified WhatsApp/mailto CTAs.",
          "Custom brand system: velocity-Verlet three-body mark in the header, static footer lockup, mint favicon, SVG export tooling, and internal logo-lab for motion QA.",
          "apps/email-pipeline: Gmail/PST ingest, SQLite archive + business marts, commercial OC promotion, Alembic Postgres DDL, sync_dashboard_postgres_mirror.",
          "Read-only FastAPI (health, /dashboard/summary, classification, /commercial/purchase-events, outbound/readiness) consumed by apps/dashboard React panel.",
          "Streamlit for deep SQLite review; React for recurring KPIs, sync freshness, and separated confirmed OCs vs heuristic purchase signals.",
          "Safe outbound: sent-history, suppression, duplicate prevention, human-reviewed LLM drafts (no auto-send); pytest + npm run smoke on API contracts.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "Three apps in one monorepo: apps/web (static Astro), apps/email-pipeline (Python ingest + SQLite + sync + FastAPI), apps/dashboard (React consumer). Marketing never calls the pipeline at runtime.",
          "SQLite remains authoritative for ingest and mart rebuilds. PostgreSQL holds Alembic-managed mirror tables (mart, outbound, commercial, reporting) populated by sync scripts—the API is GET-only and never triggers ingest.",
          "Canonical API scope filters to the operational Gmail mailbox; full PST archive totals are opt-in via scope=archive so KPIs stay honest for day-to-day work.",
        ],
      },
      {
        id: "pipeline",
        title: "Backend / data pipeline",
        body: [
          "Ingestion is incremental where possible; normalization steps are tested because email is never clean. Business views separate facts (what was received/sent) from proposed next actions and from heuristic classification labels.",
        ],
        bullets: [
          "Operator runbook: ingest → build_business_mart → optional OC promote → sync_dashboard_postgres_mirror → uvicorn API → React panel.",
          "/health and /health/dependencies verify Postgres before operators trust KPIs; reporting.dashboard_sync_run exposes mirror age.",
          "Confirmed purchase events (commercial.*) vs classification QA (reporting.email_classification_canonical)—different trust levels, different UI tabs.",
          "pytest on parsers/exports; Vitest + npm run smoke on dashboard API wiring.",
        ],
      },
      {
        id: "safety",
        title: "Safety and outbound gates",
        body: [
          "Automation stops at the risky edge: humans confirm sends. Software enforces what can be queued—history, suppression, duplicates—and makes the safe path obvious in the UI.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "The highest leverage features are often auditability and guardrails, not more model calls.",
          "When data is sensitive, folder layout and runbooks are part of the product, not an afterthought.",
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
      "End-to-end booking stack: WhatsApp webhooks into FastAPI, durable conversation/payment state in PostgreSQL, Stripe deposits with webhook reconciliation, and Google Calendar/Sheets integrations—with pytest on critical paths and Docker + GHA for delivery.",
    engineeringFocus: [
      "Idempotent WhatsApp webhooks & duplicate-safe Stripe reconciliation",
      "PostgreSQL, SQLAlchemy, Alembic migrations; durable session + payment state",
      "13-question consultation flow with validation; admin / artist approval before commit",
      "Docker, pytest, GitHub Actions; production safeguards on critical paths",
    ],
    status: "Production (freelance)",
    caseStudyIntro:
      "This is not a toy chatbot—it is a small integration-heavy backend. Money, third-party APIs, and asynchronous events land in the same service; the engineering work is state, retries, and tests.",
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
          "FastAPI fronts Meta webhooks; PostgreSQL holds authoritative state. Outbound calls to Stripe, Google APIs, and WhatsApp are sequenced with explicit failure handling—no “best effort” on money movement.",
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
          "Conversational products are state machines—model the transitions, test illegal transitions, log decisions.",
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
      "Banking-style Elixir/Phoenix API: JWT authentication, transactional ledger modelling in PostgreSQL, Oban background jobs, and clean architecture—focused on invariants and backend reliability, not UI polish.",
    engineeringFocus: [
      "JWT-secured routes with role-aware permissions",
      "Transactional account/transfer modelling",
      "Oban for async, retried jobs",
      "Docker + CI for reproducible builds",
    ],
    status: "Academic / portfolio",
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
          "BEAM gives cheap concurrency and supervision—useful when HTTP requests and background settlement overlap. The goal was readable, testable domain code rather than clever macros.",
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
    caseStudyIntro:
      "ML work with an engineering mindset: the artifact is not only weights—it is the preprocessing contract, evaluation notebook, and clear statement of where the model will lie.",
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
          "Reported precision/recall tradeoffs, confusion patterns, and qualitative failures—not a single leaderboard number. The goal is to know when the model should refuse to classify.",
        ],
      },
      {
        id: "limitations",
        title: "Limitations",
        body: [
          "Temporal and demographic drift break political classifiers silently. These models belong behind human review, monitoring, and governance—not as autonomous truth engines.",
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
