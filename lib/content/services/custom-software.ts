import type { ContentPageData } from "../types";

export const customSoftwarePage: ContentPageData = {
  type: "page",
  eyebrow: "Software & Web",
  title: "Custom Software Development",
  subtitle:
    "Internal tools, dashboards, portals and APIs built around how your business really works — for when a spreadsheet stops coping and off-the-shelf does not fit.",
  breadcrumbs: [{ label: "Services", href: "/#services" }],
  keywords: [
    "custom software development",
    "custom software development company India",
    "bespoke software development",
    "internal tools development",
    "business software development",
    "custom web application development",
    "API development",
    "software development Ghaziabad",
  ],
  stats: [
    { label: "Businesses served", value: "50+" },
    { label: "Industries served", value: "6+" },
    { label: "Code you own", value: "100%" },
  ],
  sections: [
    {
      heading: "When custom software is the right answer",
      paragraphs: [
        "Most businesses do not need custom software on day one. They need a sheet that updates itself, or a form that routes to the right person. That is where we usually start, and for a lot of our clients it is where the work ends.",
        "Custom software earns its cost at a specific point: when the process has outgrown a spreadsheet, when the ready-made product forces you to work its way instead of yours, or when the monthly per-seat fee for a tool you half-use has quietly become one of your larger bills.",
        "We will tell you honestly which side of that line you are on. If [[Google Sheets automation|/google-sheets-automation]] or an [[Apps Script build|/google-apps-script-development]] solves it for a fraction of the price, that is what we will recommend.",
      ],
    },
    {
      heading: "What we build",
      list: {
        items: [
          "Internal tools and admin panels — the screens your team uses all day, built for your actual process rather than a generic one.",
          "Dashboards that pull from several systems at once, so nobody exports three files to answer one question.",
          "Customer, vendor, and partner portals with proper roles and permissions.",
          "REST APIs and integrations that make two systems which were never meant to talk, talk.",
          "Database-backed applications for businesses that have outgrown spreadsheets but do not want enterprise software.",
          "Quote, order, and approval systems with an audit trail you can actually defend.",
          "Scheduled jobs and background processing — reports, reconciliations, and syncs that run without anyone remembering to run them.",
        ],
      },
    },
    {
      heading: "Spreadsheet, off-the-shelf, or custom?",
      paragraphs: [
        "There is no universally right answer. There is a right answer for your process, your team size, and your budget. This is roughly how we think about it:",
      ],
      table: {
        headers: [
          "",
          "Automated spreadsheet",
          "Off-the-shelf product",
          "Custom software",
        ],
        rows: [
          [
            "Best when",
            "Process is simple and stable",
            "Process is standard across your industry",
            "Process is yours and gives you an edge",
          ],
          ["Upfront cost", "Lowest", "Low", "Highest"],
          [
            "Ongoing cost",
            "None beyond Workspace",
            "Per seat, every month, forever",
            "Hosting plus changes you ask for",
          ],
          [
            "Fits your workflow",
            "Mostly",
            "You fit its workflow",
            "Exactly",
          ],
          [
            "Scales to",
            "Dozens of users",
            "Whatever the vendor allows",
            "What you design for",
          ],
          ["You own it", "Yes", "No", "Yes — code and data"],
        ],
      },
    },
    {
      heading: "How a project runs",
      paragraphs: [
        "No discovery phase that bills for three weeks and produces a slide deck. We map the process, agree a scope and a fixed quote, then build in visible stages so you are never waiting on a black box.",
      ],
      list: {
        ordered: true,
        items: [
          "We sit with the people who do the work today and map the process as it really runs, not as the manual describes it.",
          "We scope the smallest version that is genuinely useful, and quote it fixed before any code is written.",
          "We build in stages, with something you can click at the end of each one.",
          "We test with your real data, migrate what already exists, and train the team that will use it.",
          "We hand over the code, the database, and the documentation. You own all of it.",
        ],
      },
    },
    {
      heading: "What you get at handover",
      list: {
        items: [
          "Source code in your own repository, not ours.",
          "The database and every record in it, exportable at any time.",
          "Written documentation plus a recorded walkthrough for new joiners.",
          "A warranty period for defects, with optional support after it.",
          "No licence, no per-seat fee, and no clause that makes leaving expensive.",
        ],
      },
    },
    {
      heading: "Where this fits with the rest of your stack",
      paragraphs: [
        "Custom software rarely replaces everything. More often it becomes the one place your team works, with everything else feeding into it — Google Workspace on one side, [[WhatsApp|/whatsapp-business-api]] on the other, and your existing files migrated in rather than abandoned.",
        "If you are not sure whether your problem needs software or just better automation, the free consultation is the cheapest way to find out.",
      ],
    },
  ],
  faq: [
    {
      q: "How much does custom software cost in India?",
      a: "It depends entirely on scope, and anyone who quotes a figure before understanding your process is guessing. We scope the smallest genuinely useful version first and quote that fixed, so you can start small and extend later rather than committing to one large number up front.",
    },
    {
      q: "How long does a custom software project take?",
      a: "A focused internal tool or dashboard is usually weeks rather than months. Larger systems are broken into stages so something useful ships early instead of everything arriving at the end. We agree the timeline with the quote and tell you immediately if anything threatens it.",
    },
    {
      q: "Do we own the code?",
      a: "Yes, completely. Source code goes into your repository, the database and its data are yours, and there is no licence fee or lock-in clause. If you ever want to move to another developer, everything they need is already in your hands.",
    },
    {
      q: "Can you work with the software we already have?",
      a: "Usually, yes. Most projects involve connecting to something that already exists — an accounting package, a CRM, Google Workspace, or a supplier system. If it has an API or can export data on a schedule, we can integrate with it.",
    },
    {
      q: "What if automation would be cheaper than custom software?",
      a: "Then we will say so. A large share of what clients first describe as a software project turns out to be solvable with Sheets automation or Apps Script at a fraction of the cost. We would rather build the smaller right thing than the larger wrong one.",
    },
    {
      q: "Who maintains it after launch?",
      a: "You can, since you own the code and the documentation. Most clients keep us on for changes and support because it is faster, but it is a choice rather than a dependency, and no retainer is required to keep the software running.",
    },
  ],
  ctaNote:
    "Tell us the process that is breaking and we will tell you honestly whether it needs software or just automation. [[Book a free consultation|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
  relatedLinks: [
    {
      title: "Website Development",
      href: "/website-development",
      description:
        "Business sites and landing pages built to load fast and rank.",
    },
    {
      title: "Google Apps Script Development",
      href: "/google-apps-script-development",
      description:
        "Custom tools inside the Google Workspace you already pay for.",
    },
    {
      title: "Google Sheets Automation",
      href: "/google-sheets-automation",
      description:
        "Often the cheaper answer before software is worth building.",
    },
  ],
};
