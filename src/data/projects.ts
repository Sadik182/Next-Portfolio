// Single source of truth for all project/case-study content.
// Gallery images live under /public/images/gallery/<slug>/ and rotate with the
// cover in the case-study hero carousel; an empty gallery shows the cover only.

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface TechItem {
  name: string;
  purpose: string;
}

export interface StorySection {
  title: string;
  detail: string;
}

export type ProjectStatus = "Live" | "Completed" | "In Development";

export interface Project {
  slug: string;
  title: string;
  tagline: string; // one-liner for cards & metadata
  description: string; // short paragraph for the listing card
  year: string;
  status: ProjectStatus;
  featured?: boolean;
  tags: string[]; // "SaaS" | "AI" | "E-commerce" | "Productivity"
  cover: string;
  liveUrl?: string;
  codeUrl?: string;
  stack: string[]; // short chips for cards
  problem: string[]; // "The Problem" paragraphs
  solution: StorySection[]; // what it does, phrased as user benefit
  buildStory: StorySection[]; // engineering decisions & how it was built
  techStack: TechItem[]; // full stack with rationale
  gallery: GalleryImage[];
  outcomes?: string[];
}

export const projects: Project[] = [
  // ── SolarCRM ─────────────────────────────────────────────────────────
  {
    slug: "solarcrm",
    title: "SolarCRM",
    tagline:
      "A multi-tenant CRM that runs the full deal-to-install lifecycle for Australian solar installers.",
    description:
      "From lead capture to grid connection: AI-assisted site assessments, quotes with the STC government rebate calculated automatically, e-signature acceptance, and install tracking — built as a multi-tenant SaaS with data hosted in Sydney.",
    year: "2026",
    status: "Live",
    featured: true,
    tags: ["SaaS", "AI"],
    cover: "/images/solarcrm.png",
    liveUrl: "https://solarjobflow.com/",
    codeUrl: "https://github.com/Sadik182/",
    stack: ["Next.js", "TypeScript", "MongoDB", "Claude API", "AWS S3"],
    problem: [
      "Australian residential solar installers run a surprisingly complex sales cycle: capture the lead, visit the site, size a system from the roof and the customer's electricity bill, quote it with the government STC rebate applied correctly, get sign-off, then manage the physical install through inspection and grid connection. Most small installers juggle this across spreadsheets, phone notes, and generic CRMs that don't understand the solar domain.",
      "The rebate is the hard part. STC values depend on the customer's postcode zone and a deeming period that shrinks every year as the scheme winds down to 2030 — get it wrong and the quote is either uncompetitive or unprofitable. Installers were doing this maths by hand for every quote.",
    ],
    solution: [
      {
        title: "A visual pipeline for every lead",
        detail:
          "Leads move across a drag-and-drop Kanban board from new enquiry to won, with deal values, tags, and assignees. Website leads flow in automatically through a public API, so nothing gets lost between the marketing site and the CRM.",
      },
      {
        title: "AI site assessments from a phone",
        detail:
          "During a site visit, the installer photographs the roof and the customer's electricity bill. Claude's vision model analyses roof type, orientation, shading and usable area, extracts the bill's NMI, retailer and daily usage — then recommends a system size with estimated savings and payback period.",
      },
      {
        title: "Quotes with the rebate done right",
        detail:
          "The quote builder prices line items, labour and discounts with the STC rebate and GST calculated automatically from the customer's postcode. The customer receives a branded, tokenised link — no login needed — and accepts online with a typed name and terms agreement.",
      },
      {
        title: "Accepted quote becomes an install job",
        detail:
          "Acceptance automatically creates an install job with a solar-specific checklist — equipment ordering, installation, CCEW inspection, DNSP grid connection — tracked on its own board with progress photos, equipment serials, payments and scheduling.",
      },
      {
        title: "Runs as a real SaaS",
        detail:
          "Each installer company gets its own workspace on a subdomain, with owner/admin/installer roles, team invites, SMS and email templates, usage quotas, audit logs, and a separate platform console for provisioning and supporting tenants.",
      },
    ],
    buildStory: [
      {
        title: "Multi-tenancy as the core architectural decision",
        detail:
          "Every database model is scoped by tenant with compound indexes, and a single getTenantContext() chokepoint guards every request — re-fetching the live tenant and user on each call so role changes, suspensions and trial expiries take effect immediately instead of when a JWT expires.",
      },
      {
        title: "An STC rebate engine that models a phasing-out scheme",
        detail:
          "The rebate module maps Australian postcodes to the Clean Energy Regulator's four zone ratings and computes a deeming period that shrinks each year until the scheme ends in 2030. Every quote snapshots its rebate basis, so historical quotes stay reproducible after rates change.",
      },
      {
        title: "GST-correct pricing in integer cents",
        detail:
          "Prices are GST-inclusive as Australian retail expects, with GST computed on the full price before the STC discount — a subtle ATO rule, documented in code against the ATO's worked example. One pricing module powers both the server and the live UI preview, so displayed and stored figures can never drift.",
      },
      {
        title: "Claude vision with strict JSON contracts",
        detail:
          "The three AI endpoints (roof analysis, bill extraction, system recommendation) send base64 images to Claude and require strict JSON back, gated behind per-tenant feature flags, monthly quotas and rate limits that fail closed in production.",
      },
      {
        title: "Legally defensible quote acceptance",
        detail:
          "The public acceptance flow enforces a typed full name and explicit terms agreement server-side, records the acceptor's IP and timestamp, freezes the quote as immutable, and creates the install job with duplicate-key retry so concurrent acceptances can't create two jobs.",
      },
      {
        title: "Tested like a product, not a demo",
        detail:
          "Unit tests cover the pricing and rebate maths, integration tests run against an in-memory MongoDB, and Playwright drives end-to-end flows. Security details include SHA-256-hashed API keys, a per-request CSP nonce, and time-boxed super-admin impersonation that auto-expires after 15 minutes.",
      },
    ],
    techStack: [
      { name: "Next.js (App Router)", purpose: "Full-stack framework — route groups for auth, dashboard and the platform console" },
      { name: "TypeScript + Zod", purpose: "End-to-end type safety with schema validation on every API route" },
      { name: "MongoDB + Mongoose", purpose: "Tenant-scoped data models with compound indexes" },
      { name: "Auth.js v5", purpose: "JWT sessions carrying tenant and role; separate JWT system for the platform super-admin" },
      { name: "Claude API", purpose: "Vision analysis of roof photos and electricity bills, plus system recommendations" },
      { name: "AWS S3 (Sydney)", purpose: "Photo and logo storage via presigned URLs, tenant-prefixed keys" },
      { name: "Resend + Twilio", purpose: "Transactional email and SMS with per-tenant templates and merge fields" },
      { name: "Upstash Redis", purpose: "Per-tenant and per-IP rate limiting that fails closed in production" },
      { name: "Jest + Playwright", purpose: "Unit, integration (in-memory Mongo) and end-to-end test suites" },
    ],
    gallery: [
      { src: "/images/gallery/solarcrm/01-leads-pipeline.jpg", caption: "Leads pipeline — 73 leads tracked across the drag-and-drop Kanban, from new enquiry to won" },
      { src: "/images/gallery/solarcrm/02-quote-builder.jpg", caption: "Quote builder — panels, inverter and battery priced with the STC rebate and GST calculated live" },
      { src: "/images/gallery/solarcrm/03-lead-detail.jpg", caption: "Lead detail — stage progression, quotes, jobs and a full activity timeline in one view" },
      { src: "/images/gallery/solarcrm/04-communications.jpg", caption: "Communications hub — SMS and email conversations with templates and delivery stats" },
    ],
    outcomes: [
      "Live in production at solarjobflow.com with a companion marketing site feeding leads into the CRM's public ingestion API",
      "Quotes that used to require manual STC lookups are now priced correctly from a postcode",
      "A single codebase serves every installer company through subdomain-based multi-tenancy",
    ],
  },

  // ── SplitEven ────────────────────────────────────────────────────────
  {
    slug: "spliteven",
    title: "SplitEven",
    tagline:
      "Split group bills fairly and settle up with the fewest possible payments.",
    description:
      "Bill splitting for trips, dinners and households — four split modes, AI receipt scanning, guest members who don't need the app, and a settle-up engine that minimises the number of transfers. Plus personal and team expense tracking with budgets.",
    year: "2025",
    status: "Live",
    tags: ["SaaS", "AI"],
    cover: "/images/spliteven.png",
    liveUrl: "https://www.splitevenapp.com/",
    codeUrl: "https://github.com/Sadik182/",
    stack: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "AWS S3"],
    problem: [
      "Anyone who has shared a holiday house or a group dinner knows the endgame: a spreadsheet of who paid for what, and an awkward round of transfers that never quite balances. Splitting fairly is fiddly — some costs split evenly, some by shares, some are one person's exact amount — and settling up usually involves far more payments than necessary.",
      "The same people often have a second problem: tracking their own monthly spending against a budget. SplitEven treats these as one product — group events for splitting, and personal or team expense tracking with budgets, categories and reports.",
    ],
    solution: [
      {
        title: "Split any bill the fair way",
        detail:
          "Each expense can split equally, by shares, by percentage, or by exact amounts — with validation that percentages total 100 and custom amounts add up to the bill.",
      },
      {
        title: "Settle up with the fewest transfers",
        detail:
          "Instead of everyone paying everyone, the settle-up engine computes each person's net balance and suggests the minimal set of payments. Recording a real repayment shrinks the suggestions immediately.",
      },
      {
        title: "Snap a receipt, skip the typing",
        detail:
          "Photograph a receipt and AI extracts the amount, merchant, date, category, line items, tax and tip — with a warning if the receipt's currency doesn't match the event's.",
      },
      {
        title: "Friends without the app still count",
        detail:
          "Events support guest members by name only, so the one friend who refuses to install anything is still in the ledger. Invites work by email or shareable code, and debtors can be nudged with a reminder email.",
      },
      {
        title: "Budgets that speak up",
        detail:
          "Personal and team budgets alert by email when month-to-date spending crosses 80% and 100%. Recurring bills materialise automatically each month, and reports break spending down by category with CSV export.",
      },
    ],
    buildStory: [
      {
        title: "A greedy minimal-transfer algorithm",
        detail:
          "The settle-up engine computes per-member balances from the expense ledger (applying whichever split mode each expense uses), offsets recorded repayments, then repeatedly matches the largest debtor with the largest creditor until every balance is within a cent of zero.",
      },
      {
        title: "Receipt OCR with a strict schema, not free text",
        detail:
          "The extraction endpoint constrains GPT-4o-mini's vision output to a strict JSON schema — line items, subtotal, tax and tip as separate typed fields, null when unsure — then re-validates everything server-side before it touches the form.",
      },
      {
        title: "Direct-to-S3 uploads with a signed content length",
        detail:
          "Receipts upload from the browser straight to S3 on a 60-second presigned URL whose byte length is part of the signature — bypassing the serverless request-size cap while making the URL useless for uploading anything larger.",
      },
      {
        title: "One email, one account",
        detail:
          "Google sign-in and password accounts link instead of duplicating, using case-insensitive MongoDB collation lookups at every entry point — so a returning user never ends up with two identities.",
      },
      {
        title: "Cron jobs with safety valves",
        detail:
          "The recurring-expense cron caps how many templates run per invocation and how many missed occurrences backfill at once, so an overdue template catches up gradually instead of flooding the ledger. AI extraction and reminder emails are rate-limited per user.",
      },
    ],
    techStack: [
      { name: "Next.js (App Router)", purpose: "Full-stack framework for pages, API routes and cron endpoints" },
      { name: "TypeScript + Zod", purpose: "Typed models and split-mode validation (percentages sum to 100, exact amounts match the bill)" },
      { name: "MongoDB + Mongoose", purpose: "Expense, event, team and settlement models with compound indexes" },
      { name: "Auth.js v5", purpose: "Google OAuth and credentials login, linked to a single account per email" },
      { name: "OpenAI GPT-4o-mini", purpose: "Receipt OCR with strict structured output" },
      { name: "AWS S3", purpose: "Private receipt storage via presigned upload and download URLs" },
      { name: "Resend", purpose: "Budget alerts, settle-up reminders and invitations" },
      { name: "Recharts", purpose: "Monthly trend and category breakdown charts" },
    ],
    gallery: [
      { src: "/images/gallery/spliteven/01-event-detail.jpg", caption: "Event detail — who owes what, suggested transfers, and invite by code or email" },
      { src: "/images/gallery/spliteven/02-receipt-scan.jpg", caption: "Add expense — scan a receipt and amount, date and category are filled in for you" },
      { src: "/images/gallery/spliteven/03-dashboard.jpg", caption: "Dashboard — monthly spending, budget, category breakdown and active events" },
    ],
    outcomes: [
      "Live at splitevenapp.com supporting 12 currencies, snapshotted per record so history never mutates",
      "Settle-up suggestions update in real time as repayments are recorded",
      "Receipt scanning turns a photo into a structured, editable expense in seconds",
    ],
  },

  // ── Amazon Clone ─────────────────────────────────────────────────────
  {
    slug: "amazon-clone",
    title: "Amazon Clone",
    tagline:
      "A complete e-commerce flow — browse, cart, real Stripe payment, webhook-driven order fulfilment.",
    description:
      "An Amazon-style storefront demonstrating the full commercial loop: Google sign-in, a persisted Redux cart, Stripe hosted checkout, signature-verified webhooks writing orders to Firestore, and an order history page.",
    year: "2026",
    status: "Completed",
    tags: ["E-commerce"],
    cover: "/images/amazon.png",
    liveUrl: "https://amazon-clone-gamma-livid.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Amazon-Clone",
    stack: ["Next.js", "Redux", "Stripe", "Firebase", "NextAuth"],
    problem: [
      "E-commerce is the classic full-stack proving ground because the hard parts are invisible: payments have to be handled server-side, order fulfilment has to survive the user closing the tab mid-checkout, and cart state has to persist across sessions. This project implements the whole loop the way a production store would — not a fake checkout button.",
    ],
    solution: [
      {
        title: "Browse and shop like the real thing",
        detail:
          "An Amazon-style storefront with a product grid, star ratings, Prime badges, a rotating banner carousel and a live cart badge in the header.",
      },
      {
        title: "A cart that survives everything",
        detail:
          "The Redux basket persists to localStorage, so a refresh or a returning visit picks up exactly where the shopper left off. Duplicate products keep individual identities so any one of them can be removed.",
      },
      {
        title: "Real payments through Stripe",
        detail:
          "Checkout redirects to Stripe's hosted payment page with line items, AUD pricing, shipping-address collection and a shipping rate — sign-in is required before checking out.",
      },
      {
        title: "Orders fulfilled asynchronously",
        detail:
          "Payment confirmation arrives via a Stripe webhook — not the browser — so orders are recorded in Firestore even if the customer never returns to the site. An orders page lists purchase history with dates, totals and product images.",
      },
    ],
    buildStory: [
      {
        title: "Webhook signature verification done correctly",
        detail:
          "The webhook route reads the raw request body — not parsed JSON — before verifying Stripe's signature, the single most common failure point in Next.js webhook handlers. Only verified checkout.session.completed events write orders.",
      },
      {
        title: "Hydration-safe synthetic data",
        detail:
          "The product API has no ratings or Prime flags, so cards derive them deterministically from a hash of the product ID instead of Math.random() — avoiding the server/client hydration mismatch random values would cause.",
      },
      {
        title: "A defensive products API",
        detail:
          "The products route retries three times with exponential backoff, aborts requests after 10 seconds, and validates content types — so an upstream hiccup degrades gracefully instead of breaking the storefront.",
      },
    ],
    techStack: [
      { name: "Next.js (App Router)", purpose: "Server components for the storefront, route handlers for the API" },
      { name: "Redux Toolkit + redux-persist", purpose: "Cart state persisted to localStorage across sessions" },
      { name: "NextAuth", purpose: "Google OAuth with JWT sessions" },
      { name: "Stripe", purpose: "Hosted checkout sessions and signature-verified webhooks" },
      { name: "Firebase Firestore", purpose: "Order persistence via the server-side admin SDK" },
      { name: "Tailwind CSS", purpose: "Amazon-style responsive UI" },
    ],
    gallery: [],
  },

  // ── GoalFlow ─────────────────────────────────────────────────────────
  {
    slug: "goalflow",
    title: "GoalFlow",
    tagline: "Plan your week on a Kanban board and measure whether you actually shipped it.",
    description:
      "A weekly goal manager: goals live on a drag-and-drop board scoped to an ISO week, and a reports dashboard turns the history into completion rates, throughput and average cycle time.",
    year: "2025",
    status: "Completed",
    tags: ["Productivity"],
    cover: "/images/5.jpg",
    liveUrl: "https://goal-flow-liard.vercel.app/",
    codeUrl: "https://github.com/Sadik182/GoalFlow",
    stack: ["Next.js", "TypeScript", "MongoDB", "dnd-kit", "Recharts"],
    problem: [
      "Most to-do apps measure nothing. You add tasks, you tick some off, and next week looks exactly like last week. GoalFlow scopes goals to a specific week and treats the board like a tiny agile team would: work moves through To Do, In Progress and Done, and the history becomes metrics — how much you completed, how long things took, and whether you're improving.",
    ],
    solution: [
      {
        title: "A weekly board, not an endless list",
        detail:
          "Goals belong to an ISO week. Flip between weeks with a switcher, and each week starts as its own clean board with To Do, In Progress and Done columns.",
      },
      {
        title: "Drag-and-drop that feels alive",
        detail:
          "Cards drag between columns with live reflow — other cards make space while you drag — and moving a goal to Done stamps its completion time automatically.",
      },
      {
        title: "Analytics on your own productivity",
        detail:
          "The reports page computes completion rate, overdue count, throughput per week and average cycle time — how many days a goal takes from creation to done — with bar and pie charts over any date range.",
      },
    ],
    buildStory: [
      {
        title: "Drag state that persists efficiently",
        detail:
          "Drag-over events mutate in-memory column state for live reflow, then drop normalises the ordering and persists only the two affected columns in parallel requests — not the whole board.",
      },
      {
        title: "Cycle time computed in the database",
        detail:
          "Analytics run as MongoDB aggregation pipelines: cycle time from the difference between completion and creation timestamps, and weekly throughput grouped by ISO week — the server ships numbers, not raw rows.",
      },
      {
        title: "Auth from scratch",
        detail:
          "Rather than a library, GoalFlow uses hand-rolled JWT sessions in httpOnly cookies with bcrypt-hashed passwords, and Next.js middleware that redirects unauthenticated visitors while bouncing logged-in users away from the auth pages.",
      },
    ],
    techStack: [
      { name: "Next.js (App Router)", purpose: "Pages plus API route handlers" },
      { name: "MongoDB (native driver)", purpose: "Goals and users, with aggregation pipelines for reports" },
      { name: "dnd-kit", purpose: "Kanban drag-and-drop with sortable columns and a drag overlay" },
      { name: "JWT + bcrypt", purpose: "Hand-rolled cookie sessions and password hashing" },
      { name: "Recharts", purpose: "Throughput and status-distribution charts" },
    ],
    gallery: [],
  },

  // ── Portfolio ────────────────────────────────────────────────────────
  {
    slug: "portfolio",
    title: "This Portfolio",
    tagline: "The site you're reading — fast, SEO-ready, with case studies generated from one data file.",
    description:
      "Built with Next.js 15 and Tailwind CSS 4: statically generated case-study pages, Framer Motion animations, a Resend-powered contact form, and per-page Open Graph images.",
    year: "2025",
    status: "Live",
    tags: ["SaaS"],
    cover: "/images/portfolio.png",
    liveUrl: "https://sadik1820.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Next-Portfolio",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    problem: [
      "A portfolio has one job: let a visitor — usually a recruiter with thirty seconds — understand what I build and how I think, without logging into anything. This site is designed around that: every project is a public case study describing the problem, the build and the stack, statically generated so it loads instantly and ranks in search.",
    ],
    solution: [
      {
        title: "Case studies, not just cards",
        detail:
          "Each project gets its own page with the problem, the solution, engineering decisions, full tech stack and a screenshot gallery — all generated from a single typed data file.",
      },
      {
        title: "Fast and findable",
        detail:
          "Every page is statically generated with per-project metadata, Open Graph images, a sitemap and robots rules — so shared links unfurl properly and search engines index each case study.",
      },
      {
        title: "A working contact path",
        detail:
          "The contact form validates with Zod and react-hook-form and delivers via Resend — no mailto links.",
      },
    ],
    buildStory: [
      {
        title: "One data file drives everything",
        detail:
          "Listing cards, case-study pages, the sitemap and metadata all render from a single projects.ts — adding a project is one edit, and generateStaticParams turns it into a pre-rendered page at build time.",
      },
      {
        title: "Motion with restraint",
        detail:
          "Framer Motion powers scroll-reveal and hero animations behind a small reusable FadeIn component, and everything respects the user's reduced-motion preference.",
      },
    ],
    techStack: [
      { name: "Next.js 15 (App Router)", purpose: "Static generation with dynamic case-study routes" },
      { name: "Tailwind CSS 4", purpose: "Utility-first styling" },
      { name: "Framer Motion", purpose: "Scroll-reveal and hero animations" },
      { name: "Resend + Zod", purpose: "Validated contact form with email delivery" },
    ],
    gallery: [],
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
