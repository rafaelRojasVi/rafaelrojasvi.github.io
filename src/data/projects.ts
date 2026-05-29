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
      "Production full-stack operations platform: Astro public site, Python email intelligence pipeline, SQLite operational store, read-only FastAPI, optional Postgres mirror reporting, and React operator dashboard",
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
      "Four-app monorepo: origenlab.cl (Astro), Python ingest/marts (SQLite truth), read-only operator API (:8001), and React operator dashboard—with optional Postgres mirror reporting and human-reviewed outreach gates.",
    engineeringFocus: [
      "Public site: product-forward homepage, Ortoalresa centrifuge vitrine + comparison, SERVA reagents, catalog validator",
      "Brand: three-body logo (canvas header), static lockups, SVG tooling, conservative commercial copy governance",
      "Pipeline: SQLite authoritative store; optional Alembic Postgres mirror for reporting; email-pipeline owns all writes",
      "API & UI: GET-only apps/api (operator routes + /mirror/* reporting); multi-section React operator dashboard + smoke tests",
      "Lead intelligence: SQLite lead research imports, Postgres lead_intel mirror, GET /mirror/leads/*, read-only Prospectos page",
      "Safe outbound: sent-history, suppression, duplicates, human-reviewed LLM drafts—no auto-send",
    ],
    status: "Production (employed)",
    privacyNote:
      "Abstract diagrams and generic descriptions only—no customer or message content.",
    caseStudyIntro:
      "OrigenLab distributes laboratory equipment across Chile (Ortoalresa centrifuges, SERVA reagents, category hubs for food/QC/clinical labs). I built a production full-stack operations platform across four apps: public Astro site, Python email intelligence pipeline, SQLite operational store, read-only FastAPI operator API, optional Postgres mirror reporting, and a React operator dashboard. Previews and JSON shapes below are sanitized—no proprietary mail or customer content.",
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
        title: "What\u00a0I built",
        bullets: [
          "Redesigned origenlab.cl: split hero with featured Ortoalresa product, trust chips, Ortoalresa/SERVA commercial lines, three category hubs, quote process, and FAQ—typed catalog data with a validate-catalog CI guard.",
          "Product vitrine: five Ortoalresa microcentrífugas (local AVIF, PDFs, spec tables) plus comparison on /productos/centrifugas; SERVA reagent SKUs on the brand page; unified WhatsApp/mailto CTAs.",
          "Custom brand system: velocity-Verlet three-body mark in the header, static footer lockup, mint favicon, SVG export tooling, and internal logo-lab for motion QA.",
          "apps/email-pipeline: Gmail/PST ingest, SQLite archive + business marts, outbound safety, reports, Streamlit, mutation scripts—no FastAPI.",
          "apps/api: read-only operator API on port 8001 (SQLite-first routes for health, warm cases, equipment opportunities, contacts; optional Postgres mirror reporting under /mirror/*).",
          "apps/dashboard: multi-section React operator UI (Today, inbox triage, opportunities, deals, Prospectos, catálogo, suppliers, tenders, payments/logistics, contacts, system)—read-only, no send path.",
          "Streamlit for deep SQLite review; React for day-to-day operator workflows and mirror-backed reporting when Postgres is synced.",
          "Prospectos / lead intelligence: SQLite lead research imports, Postgres lead_intel mirror, mirror lead routes, filters by classification, sector, region, campaign bucket, score, and blocked status.",
          "Safe outbound: sent-history, suppression, duplicate prevention, human-reviewed LLM drafts (no auto-send); pytest + npm run smoke on API contracts.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "Four apps in one monorepo: apps/web (Astro marketing), apps/email-pipeline (Python ingest, SQLite truth, sync scripts, Streamlit), apps/api (read-only FastAPI :8001), apps/dashboard (React operator UI). Marketing never calls the pipeline at runtime.",
          "SQLite is authoritative for operational data and outbound safety. apps/api is GET-only and does not ingest, send mail, or mutate records. PostgreSQL mirror is optional/parked/reporting-oriented—synced from SQLite, consumed under /mirror/* when configured.",
          "Operator routes serve Today and triage from SQLite; mirror reporting routes expose KPIs, classification, commercial events, outbound readiness, and lead prospects when Postgres is available.",
        ],
      },
      {
        id: "pipeline",
        title: "Backend / data pipeline",
        body: [
          "Ingestion is incremental where possible; normalization steps are tested because email is never clean. Business views separate facts (what was received/sent) from proposed next actions and from heuristic classification labels.",
        ],
        bullets: [
          "Operator runbook: ingest → build_business_mart → optional OC promote → (optional) sync_dashboard_postgres_mirror → uvicorn apps/api :8001 → React dashboard.",
          "GET /health and GET /operator/status for SQLite operator plane; GET /mirror/meta/dashboard-sync and GET /mirror/health/dependencies when mirror reporting is enabled.",
          "Confirmed purchase events (mirror commercial routes) vs heuristic classification QA—different trust levels, separated in the UI.",
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
        title: "What\u00a0I learned",
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
