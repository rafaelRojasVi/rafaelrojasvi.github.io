/**
 * CV content, in English and Spanish. The /cv pages, their PDFs and the
 * Markdown versions are all generated from this file, so they can never
 * disagree. Contact details come from `profile.ts`; role copy is written here
 * because a CV needs tighter bullets than the experience page.
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

export type Cv = {
  lang: "en" | "es";
  /** Page path; the PDF and Markdown sit next to it. */
  path: string;
  pdf: string;
  markdown: string;
  name: string;
  title: string;
  location: string;
  availability: string;
  email: string;
  phones: string[];
  links: { label: string; href: string }[];
  summary: string;
  expertise: { area: string; detail: string }[];
  experience: CvRole[];
  projects: CvProject[];
  education: { degree: string; school: string; dates: string; detail?: string }[];
  skills: { group: string; items: string }[];
  languages: string;
  labels: {
    summary: string;
    expertise: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    languages: string;
    caseStudy: string;
    updated: string;
    download: string;
    colophon: (site: string, updated: string, markdown: string) => string;
    otherLanguage: { label: string; href: string };
  };
};

const phones = ["+56 9 9123 9800", "+44 7821 734197"];

export const cvEn: Cv = {
  lang: "en",
  path: "/cv",
  pdf: "/cv/Rafael_Rojas_CV_EN.pdf",
  markdown: "/cv.md",
  name: profile.name,
  title: "Backend Software Engineer",
  location: "Valdivia, Chile",
  availability: "Open to remote, hybrid or relocation",
  email: profile.contact.email,
  phones,
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
        "Built tender intelligence on Mercado Público / ChileCompra that picks out capital laboratory equipment from public tenders, and rebuilt origenlab.cl as a static Astro catalogue behind a CI gate for catalogue accuracy, contrast and keyboard access.",
      ],
    },
    {
      title: "Chief Technology Officer",
      org: "BENKER",
      context:
        "Heavy civil works and earthmoving contractor. Building the estimating and commercial system the office quotes from.",
      dates: "Aug 2026 – Present",
      location: "Remote",
      caseStudy: "/projects/benker",
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
  ],

  projects: [
    {
      name: "LedgerBank API",
      stack: "Elixir, Phoenix, PostgreSQL, Oban",
      summary:
        "Banking-style API with JWT auth, a transactional ledger and background jobs, tested against double spends and concurrent transfers.",
      href: "/projects/ledger-bank-api",
    },
  ],

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

  labels: {
    summary: "Summary",
    expertise: "Domain expertise",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    caseStudy: "Case study",
    updated: "Updated",
    download: "Download PDF",
    colophon: (site, updated, md) =>
      `Generated from ${site}/cv, updated ${updated}. Plain-text version for software and agents: ${site}${md}`,
    otherLanguage: { label: "Español", href: "/cv/es" },
  },
};

export const cvEs: Cv = {
  lang: "es",
  path: "/cv/es",
  pdf: "/cv/Rafael_Rojas_CV_ES.pdf",
  markdown: "/cv/es.md",
  name: profile.name,
  title: "Ingeniero de Software Backend",
  location: "Valdivia, Chile",
  availability: "Disponible para trabajo remoto, híbrido o reubicación",
  email: profile.contact.email,
  phones,
  links: [
    { label: "Portafolio", href: SITE },
    { label: "GitHub", href: profile.contact.github },
    { label: "LinkedIn", href: profile.contact.linkedIn },
  ],
  summary:
    "Ingeniero de software backend y CTO de dos empresas chilenas. Desde enero de 2026 diseño, construyo y opero, en gran parte solo, el software de tres empresas de tres rubros: construcción y movimiento de tierras, forestal y equipamiento de laboratorio. Aprendo cómo funciona cada oficio (cómo se calcula el precio de un m³ de relleno, cuándo vence una solicitud CONAF) y lo convierto en sistemas en Python y TypeScript sobre PostgreSQL, con migraciones probadas y una persona a cargo donde se mueven dinero, correos o permisos. Trabajo con agentes de IA a diario y construyo sus herramientas. Computer Science con First Class Honours (máxima distinción), University of Westminster, Londres.",

  expertise: [
    {
      area: "Construcción, movimiento de tierras y áridos",
      detail:
        "Análisis de precios unitarios (APU), cubicación, gastos generales, tarifas de arriendo de maquinaria, suministro y flete de áridos, historial de precios de proveedores, informes de mecánica de suelos, permisos DOM, licitaciones de movimiento de tierras en Mercado Público, bases de precios CYPE.",
    },
    {
      area: "Forestal",
      detail:
        "Predios y rodales, informes de cosecha, solicitudes CONAF y su vencimiento, shapefiles y flujos en ArcMap, PostGIS, cubicación de madera con LiDAR.",
    },
    {
      area: "Equipamiento de laboratorio",
      detail:
        "Catálogo de equipos por familia y fabricante, compras públicas en Mercado Público / ChileCompra, venta a universidades y laboratorios, historial de proveedores y cotizaciones.",
    },
    {
      area: "Agentes de IA",
      detail:
        "Claude Code como herramienta diaria, servidores MCP separados por permiso, instrucciones y skills de agente en cada repositorio, revisión humana antes de enviar o pagar cualquier cosa.",
    },
  ],

  experience: [
    {
      title: "Chief Technology Officer (CTO)",
      org: "OrigenLab",
      context:
        "Proveedor de equipamiento de laboratorio. Único ingeniero, a cargo de todo el software de la empresa.",
      dates: "ene 2026 – actualidad",
      location: "Valdivia, Chile",
      caseStudy: "/projects/origenlab",
      bullets: [
        "Construí el CRM con el que trabaja el equipo comercial: un dashboard en React con inicio de sesión de Google Workspace para oportunidades, organizaciones, personas, proveedores y un archivo de Drive, con datos de contacto enmascarados según el rol.",
        "Diseñé la plataforma de datos V2 en Supabase PostgreSQL 17: 36 tablas en siete esquemas privados, cuatro roles de base de datos, 139 políticas de seguridad a nivel de fila (RLS) y eventos de dominio de solo inserción. 23 migraciones, 408 aserciones pgTAP y 308 pruebas unitarias.",
        "Escribí la API de operador en FastAPI detrás de un proxy en Cloudflare Workers: su única vía de escritura son comandos idempotentes con concurrencia optimista, una prueba de CI falla si aparece otro endpoint de escritura y el navegador nunca tiene un token.",
        "Construí el pipeline de inteligencia de correo en Python 3.12: años de historial PST y Gmail cargados en marts de negocio en SQLite, con una memoria de seguridad que bloquea contactos repetidos o suprimidos. Nada se envía de forma automática.",
        "Construí inteligencia de licitaciones en Mercado Público / ChileCompra que detecta equipos de laboratorio en compras públicas, y rehíce origenlab.cl como catálogo estático en Astro con un control de CI para exactitud del catálogo, contraste y navegación por teclado.",
      ],
    },
    {
      title: "Chief Technology Officer (CTO)",
      org: "BENKER",
      context:
        "Contratista de obras civiles y movimiento de tierras. Construyo el sistema de presupuestos y gestión comercial con el que cotiza la oficina.",
      dates: "ago 2026 – actualidad",
      location: "Remoto",
      caseStudy: "/projects/benker",
      bullets: [
        "Construí el software de presupuestos (Cotizador) en Next.js y TypeScript sobre PostgreSQL: cada estudio en pestañas de cotización, cubicación, APU, antecedentes y resumen, con el PDF que recibirá el cliente al lado del presupuesto antes de enviarlo.",
        "Convertí la historia de la empresa en un libro de precios: 503 planillas de 409 estudios anteriores leídas en 18.311 precios con fecha (maquinaria, fletes, mano de obra, materiales y botadero), y reimplementé fórmula por fórmula la planilla de precios unitarios de la oficina, comprobada contra estudios anteriores.",
        "APU por partida con rendimientos de mano de obra y maquinaria, materiales con merma y referencias de mercado de bases CYPE y de licitaciones adjudicadas de movimiento de tierras en Mercado Público. Catálogos de áridos (costo de 1 m³ puesto en obra, ofertas de proveedores), maquinaria y proveedores.",
        "Lee los antecedentes de cada licitación: planos DWG dibujados por capa con cotas de terreno, sondajes y napa de los informes de mecánica de suelos en PDF, itemizados del cliente y cartas de arriendo, todo con búsqueda.",
        "CRM y marketing sobre una sola capa de identidad, con reglas de consentimiento y un envío controlado, y servidores MCP separados por capacidad (lectura de Drive, lectura de Gmail, envío de Gmail) para que los permisos de un agente se vean a simple vista.",
      ],
    },
    {
      title: "Ingeniero de Software, Plataforma Geoespacial",
      org: "Campo Digital (contrato)",
      context:
        "Empresa de servicios forestales y geoespaciales. Una plataforma para tres productos que antes vivían en shapefiles y Excel.",
      dates: "ago 2026 – actualidad",
      location: "Remoto",
      caseStudy: "/projects/campo-digital-platform",
      bullets: [
        "Construí un monolito modular en FastAPI sobre PostgreSQL/PostGIS, en producción, con inicio de sesión de Google Workspace, permisos por producto y cambios de rol auditados; rechaza configuraciones inseguras, como una conexión sin TLS.",
        "SIG forestal que usa el equipo forestal del cliente: carga validada de shapefiles con trazabilidad SHA-256, mapa interactivo, informes de cosecha con versiones publicadas y estado de solicitudes CONAF sincronizado cada noche. Los polígonos inválidos se marcan en el punto exacto donde su borde se cruza.",
        "Importación de Excel para un proyecto eléctrico que reconoce las columnas por su encabezado, conserva el número de fila de origen, se detiene ante mapeos ambiguos y guarda un informe de revisión en cada carga.",
        "Investigación LiDAR: inspección de LAS/LAZ y estimadores de volumen de pilas de madera comparados con mediciones de referencia. Más de 1.500 pruebas en Python, 20 migraciones y 11 registros de decisiones de arquitectura.",
      ],
    },
    {
      title: "Ingeniero de Software Freelance",
      org: "Independiente",
      context: "Backends e integraciones para pequeñas empresas.",
      dates: "nov 2025 – actualidad",
      location: "Londres / Remoto",
      caseStudy: "/projects/tattoo-booking-bot",
      bullets: [
        "Construí un asistente de reservas por WhatsApp para un estudio de tatuajes, en producción: FastAPI, PostgreSQL, abonos con Stripe, sugerencia de horas en Google Calendar y registro en Google Sheets.",
        "Modelé cada reserva como máquina de estados: webhooks idempotentes, bloqueo de filas para transiciones concurrentes, verificación de firmas de webhook, conciliación con Stripe y tokens de acción de un solo uso.",
      ],
    },
    {
      title: "Socio",
      org: "NewDev, cooperativa de desarrollo de software",
      context: "Cooperativa de ingenieros de software de Valdivia que comparte práctica y trabajo con clientes.",
      dates: "2026 – actualidad",
      location: "Valdivia, Chile",
      bullets: [
        "Construí la base de conocimiento de referencia de la cooperativa en Git, legible por personas y agentes: un responsable por cada dato, procedencia en cada afirmación y un validador que hace fallar el build cuando los documentos se desalinean.",
      ],
    },
  ],

  projects: [
    {
      name: "LedgerBank API",
      stack: "Elixir, Phoenix, PostgreSQL, Oban",
      summary:
        "API de estilo bancario con autenticación JWT, libro contable transaccional y trabajos en segundo plano, probada contra doble gasto y transferencias concurrentes.",
      href: "/projects/ledger-bank-api",
    },
  ],

  education: [
    {
      degree: "BSc Computer Science, First Class Honours",
      school: "University of Westminster, Londres",
      dates: "sep 2022 – jul 2025",
      detail:
        "Máxima distinción del sistema británico. Resultados destacados: Database Systems 91 %, Software Development 87 %, Algorithms 80 %, Client-Server Architectures 74 %.",
    },
    {
      degree: "International Foundation Year in Computing",
      school: "University of Brighton International College",
      dates: "sep 2021 – ago 2022",
      detail: "Aprobado con distinción. Representante estudiantil; apoyo a estudiantes internacionales.",
    },
  ],

  skills: [
    { group: "Lenguajes", items: "Python, TypeScript, SQL. Conocimiento práctico de Elixir y Go." },
    { group: "Backend", items: "FastAPI, Pydantic, SQLAlchemy, Alembic, Next.js, APIs REST, webhooks" },
    { group: "Datos y SIG", items: "PostgreSQL, PostGIS, Supabase, seguridad a nivel de fila, pgTAP, SQLite, shapefiles, DWG, LAS/LAZ" },
    { group: "Frontend", items: "React, Astro, Playwright" },
    { group: "Infraestructura", items: "Docker, GitHub Actions, Cloudflare Workers, Railway, Linux" },
    { group: "Integraciones", items: "Stripe, WhatsApp Business API, APIs de Google Workspace, servidores MCP" },
    { group: "Agentes de IA", items: "Claude Code, Claude API, desarrollo de servidores MCP, skills de agente, diseño de permisos" },
  ],

  languages: "Español (nativo), inglés (C1, carrera completa en Londres)",

  labels: {
    summary: "Perfil",
    expertise: "Conocimiento del rubro",
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Formación",
    skills: "Habilidades",
    languages: "Idiomas",
    caseStudy: "Caso de estudio",
    updated: "Actualizado",
    download: "Descargar PDF",
    colophon: (site, updated, md) =>
      `Generado desde ${site}/cv/es el ${updated}. Texto plano para software y agentes: ${site}${md}`,
    otherLanguage: { label: "English", href: "/cv" },
  },
};

/** English stays the default for llms.txt and other single-language uses. */
export const cv = cvEn;
