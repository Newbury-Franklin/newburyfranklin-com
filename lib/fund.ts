export type PillarBullet = {
  label: string;
  description: string;
};

export type Pillar = {
  title: string;
  quote: string;
  tagline: string;
  bullets: PillarBullet[];
  icon: string;
};

/** "The NF Way" — our operating framework, shown on the homepage and reused
 * on every portfolio page's "About Newbury Franklin" section. Content pulled
 * verbatim from the "260724 NF Way 1 Page Slide" deck. */
export const pillars: Pillar[] = [
  {
    title: "Talent",
    quote: "The best team wins.",
    tagline: "Business is all about the people — a conviction, not a platitude.",
    bullets: [
      { label: "Accountability Map", description: "Clear lines of responsibility, CEO to front line." },
      { label: "Talent Reviews & Development", description: "Twice-yearly reviews on values, will, and skills." },
      { label: "Topgrading", description: "Rigorous, scorecard-driven hiring and reference checks." },
    ],
    icon: "/images/company-icons/pillars/icon-talent.svg",
  },
  {
    title: "Strategy",
    quote: "Discipline equals freedom.",
    tagline: "A proven operating system aligned around how we intend to win.",
    bullets: [
      { label: "Business Operating System", description: "Scaling Up / Rockefeller Habits, run with fidelity." },
      { label: "Strategy Principles", description: "Jim Collins tools: BHAG, Hedgehog, Flywheel." },
      {
        label: "Executive Coach",
        description: "CEO resource to implement business operating system and strategy principles.",
      },
    ],
    icon: "/images/company-icons/pillars/icon-strategy.svg",
  },
  {
    title: "Execution",
    quote: "Routine sets you free.",
    tagline: "We are on a 20-year march, systematic in what we control.",
    bullets: [
      {
        label: "Essential Meeting Rhythm",
        description: "A cadence ranging from daily huddles to annual resets keeps us aligned.",
      },
      { label: "World-Class Boards", description: "Experienced directors challenge us every quarter." },
    ],
    icon: "/images/company-icons/pillars/icon-execution.svg",
  },
  {
    title: "Results",
    quote: "What gets measured gets done.",
    tagline: "A scoreboard everyone understands and performs against.",
    bullets: [
      { label: "KPI Scorecard", description: "Critical numbers, reviewed daily, with a single owner for each." },
      { label: "Robust Reporting", description: "Strong finance functions; timely, accurate numbers." },
    ],
    icon: "/images/company-icons/pillars/icon-results.svg",
  },
];

export const nfWay = {
  title: "The NF Way.",
  intro:
    "We have been business leaders ourselves, not just investors — and that’s what we bring to the table as partners. We use a proven approach, the NF Way, to drive growth. We are dogmatic about building a cohesive firm — not a portfolio of disparate assets — using a consistent operating system, built on four enduring pillars.",
  outro:
    "We do not guarantee business outcomes, but we promise a consistent, earnest, and scalable approach to our work.",
};

export const whatWeDo = {
  lede: "Newbury Franklin buys US-based multi-location businesses and uses its operating know-how to help them grow.",
  body: "We “buy and build” companies, rather than “buy and flip” them — staying flexible on leadership changes and partnering with existing management teams to drive strong outcomes.",
};

export const ourWhy = {
  body: "Our passion is people who bet on themselves and are committed to growth through building businesses. Our goal is to help these bold leaders bring a compelling business plan to life, or handle a thoughtful ownership change, while giving investors a steady path to long-term value creation that we intend to sustain for decades.",
};

export const whatWeBelieve = {
  heading: "Enduringly great companies are built over decades, not years.",
  paragraphs: [
    "Responsible owners recognize this and set up their business for the long haul.",
    "Guided by this principle, Newbury Franklin acquires and builds companies with no plan to sell. This mindset, and our capital structure, keeps us focused on building value over decades.",
    "We are industry agnostic but disciplined — purchasing multi-location business models with industry characteristics that fit our criteria.",
  ],
};

export const investmentCriteria = {
  intro:
    "We invest in large, fragmented markets with strong consolidation fundamentals, targeting businesses that:",
  items: ["Multisite (or Potential for Multi-Site)", "Outstanding Revenue Retention", "Strong, Consistent Cash Flow"],
};

export const growthFocus = {
  continuing:
    "We continue to grow our existing platforms through acquisition and de novo market expansion.",
  newAreasIntro:
    "We are also selectively evaluating new verticals with similar business model characteristics, including:",
  newAreas: [
    { name: "Automotive Services", slug: "car-wash", lines: ["Automotive", "Services"] as [string, string] },
    { name: "Coffee & Snack", slug: "coffee-snack", lines: ["Coffee &", "Snack"] as [string, string] },
    { name: "Youth Enrichment Programs", slug: "youth-enrichment", lines: ["Youth Enrichment", "Programs"] as [string, string] },
    { name: "B2B Services", slug: "b2b-services", lines: ["B2B", "Services"] as [string, string] },
  ],
};

export const fundContact = {
  address: ["4 Inn Street", "Newburyport, MA 01950"],
  phone: "(978) 225-0663",
};
