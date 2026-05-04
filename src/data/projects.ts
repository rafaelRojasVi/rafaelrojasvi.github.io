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
      "Business automation and email intelligence monorepo for a laboratory-equipment company",
    stack: [
      "Python",
      "SQLite",
      "Streamlit",
      "Astro",
      "Tailwind",
      "Docker",
      "pytest",
      "LLM-assisted drafting",
    ],
    shortDescription:
      "A real business monorepo combining a static marketing site with a local-first backend and data pipeline for email intelligence, lead review, reporting, and guarded outbound workflows.",
    engineeringFocus: [
      "Email ingestion & SQLite archive",
      "Operational reporting & exports",
      "Lead tracking & outreach gates",
      "Monorepo documentation",
    ],
    status: "Production / active",
    privacyNote:
      "This case study uses abstract diagrams and sanitized descriptions only—no private business data.",
    caseStudyIntro:
      "OrigenLab is a Chilean laboratory-equipment business. The repository mirrors how the work actually runs: a public-facing site, a Python data layer, and internal tools that keep humans in the loop.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Operational email and lead flow lived in inboxes and ad hoc spreadsheets. Reporting was slow, outreach risked duplicates and tone-deaf follow-ups, and there was no single place to review what had already been sent.",
          "The goal was not a flashy demo—it was a maintainable system that matched how the business operates day to day.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        bullets: [
          "Marketing website with Astro + Tailwind.",
          "Python/SQLite pipeline to ingest and structure email archives.",
          "Exports and operational reports aligned to business questions.",
          "Lead/contact tracking with views that support review before action.",
          "Internal Streamlit dashboards for operators.",
          "Heavy documentation and a deliberate monorepo layout.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "At a high level: static site for presence, Python services and scripts for data movement, SQLite as a local-first store, and Streamlit as the human-facing control surface.",
          "The architecture prioritizes traceability—every export should be explainable from the underlying tables and scripts.",
        ],
      },
      {
        id: "pipeline",
        title: "Backend / data pipeline",
        body: [
          "Email data is ingested, normalized, and stored so it can be queried like any other operational dataset. That unlocks reporting that is repeatable instead of hand-compiled.",
        ],
        bullets: [
          "Ingestion paths designed for incremental updates.",
          "Business views that separate “what happened” from “what we think we should do next.”",
          "pytest coverage around fragile parsing and export logic.",
        ],
      },
      {
        id: "safety",
        title: "Safety and outbound gates",
        body: [
          "Outreach tooling is guarded: Sent-history checks, suppression rules, duplicate prevention, and LLM-assisted drafting that still expects human review before anything leaves the building.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "The most valuable automation is often the boring kind: idempotency, audit trails, and UI that makes the safest path the easiest path.",
          "When data is sensitive, documentation and structure matter as much as code—future you is also a stakeholder.",
        ],
      },
    ],
  },
  {
    slug: "tattoo-booking-bot",
    title: "Tattoo Booking Bot",
    subtitle:
      "WhatsApp automation platform for tattoo consultation, payment, and booking",
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
      "A production-oriented WhatsApp system for consultation, qualification, deposits via Stripe, and calendar-aware booking—not only a chatbot, but a small automation platform with operational safeguards.",
    engineeringFocus: [
      "Webhook processing & idempotency",
      "Payments & calendar integrations",
      "Stateful multi-step flows",
      "Admin tooling & hardening",
    ],
    status: "Production / freelance",
    caseStudyIntro:
      "This project sits at the intersection of conversational UX and backend engineering: a 13-question consultation flow, real money movement, and integrations that must fail safely.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Booking and consultation traffic arrived as unstructured WhatsApp messages. Artists needed qualification, deposits, and scheduling without losing track of state or double-charging clients.",
        ],
      },
      {
        id: "flow",
        title: "User flow",
        bullets: [
          "13-question consultation with validation at each step.",
          "Budget checks and location parsing to route requests sensibly.",
          "Stripe Checkout for deposits with webhook confirmation.",
          "Google Calendar slot suggestions aligned to artist availability.",
          "Secure artist approval before commitments solidify.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "FastAPI receives WhatsApp webhooks, persists conversation and payment state in PostgreSQL, and coordinates outbound API calls to Stripe, Sheets, and Calendar.",
          "Migrations via Alembic keep schema changes reviewable; Docker and CI support repeatable deploys.",
        ],
      },
      {
        id: "reliability",
        title: "Reliability and safety",
        bullets: [
          "Idempotent webhook handling and duplicate prevention.",
          "Operational safeguards for edge cases (retries, partial failures, out-of-order events).",
          "Admin tools to inspect and correct state when humans need to intervene.",
          "pytest coverage on critical paths.",
        ],
      },
      {
        id: "integrations",
        title: "Integrations",
        body: [
          "Stripe Checkout and webhooks for deposits. Google Sheets for lead logging. Google Calendar for proposed slots. Each integration is a contract: timeouts, retries, and clear failure modes.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Conversation state is just another domain model—name it, version it, and test transitions the way you would any state machine.",
          "When money moves, logs and idempotency keys are not optional polish; they are the product.",
        ],
      },
    ],
  },
  {
    slug: "ledger-bank-api",
    title: "LedgerBank API",
    subtitle: "Banking-style backend with jobs, auth, and clean boundaries",
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
      "An enterprise-flavored financial API emphasizing authentication, background processing, transaction modelling, and resilient backend patterns.",
    engineeringFocus: [
      "Phoenix API design",
      "JWT auth & permissions",
      "Oban background jobs",
      "Transactional integrity",
    ],
    status: "Academic / portfolio",
    caseStudyIntro:
      "LedgerBank API was an exercise in building a backend that feels like infrastructure: explicit boundaries, durable jobs, and data rules that survive concurrency.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Financial-ish domains punish vague models. The challenge was to represent accounts and movements clearly, authenticate callers, and run asynchronous work without losing guarantees.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "Phoenix exposes HTTP boundaries; PostgreSQL holds the ledger; Oban runs retries and scheduled work with observability hooks.",
          "JWT authentication and role-aware permissions keep endpoints explicit about who can move money—or read it.",
        ],
      },
      {
        id: "why-elixir",
        title: "Why Elixir",
        body: [
          "BEAM processes and supervision trees reward systems that need reliability and graceful failure. For background jobs and concurrent requests, Elixir’s defaults push you toward patterns that scale in complexity without becoming spaghetti.",
        ],
      },
      {
        id: "reliability",
        title: "Reliability patterns",
        bullets: [
          "Transactional boundaries around balance changes.",
          "Oban for durable, retryable work.",
          "Dockerized environments and CI for repeatable builds.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Money-like domains teach you to love explicit invariants and boring tests.",
          "Good Elixir reads like a set of small, supervised services—even inside one repo.",
        ],
      },
    ],
  },
  {
    slug: "misinformation-classifier",
    title: "Political Misinformation Classifier",
    subtitle: "BERT-based detection with serious evaluation and humility",
    stack: [
      "Python",
      "BERT",
      "NLP",
      "Machine learning",
      "Model evaluation",
      "Data pipelines",
    ],
    shortDescription:
      "An applied NLP project classifying political misinformation with transformer models, careful preprocessing, and evaluation pipelines—framed with clear limitations.",
    engineeringFocus: [
      "Transformer fine-tuning",
      "Train/val discipline",
      "Metrics beyond accuracy",
      "Responsible framing",
    ],
    status: "Academic",
    caseStudyIntro:
      "This work sits in the uncomfortable overlap of language, politics, and statistical models. The engineering goal was rigorous evaluation; the ethical goal was to avoid overclaiming.",
    sections: [
      {
        id: "problem",
        title: "Problem",
        body: [
          "Political misinformation spreads quickly and resists simple keyword rules. The project asked whether a BERT-style classifier could provide signal while remaining honest about failure modes.",
        ],
      },
      {
        id: "pipeline",
        title: "Model pipeline",
        bullets: [
          "Text preprocessing aligned to the tokenizer and task.",
          "Fine-tuned BERT classifier for the chosen label scheme.",
          "Reproducible training scripts and data splits.",
        ],
      },
      {
        id: "evaluation",
        title: "Evaluation",
        body: [
          "Beyond headline accuracy: confusion patterns, robustness notes, and qualitative spot checks. Models like this fail in public if you only report one number.",
        ],
      },
      {
        id: "limitations",
        title: "Limitations",
        body: [
          "Classifiers inherit dataset bias and temporal drift. They are aids for exploration—not arbiters of truth—and should be deployed only with governance, monitoring, and human oversight appropriate to the context.",
        ],
      },
      {
        id: "learned",
        title: "What I learned",
        body: [
          "Evaluation is where ML becomes engineering. The model is the easy part; the contract with reality is hard.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
