export type Pillar = {
  title: string;
  description: string;
  icon: string;
};

/** "The NF Way" — our operating framework, shown on the homepage and reused
 * on every portfolio page's "About Newbury Franklin" section. */
export const pillars: Pillar[] = [
  {
    title: "Talent",
    description:
      "We apply consistent hiring rigor to build strong leadership teams across every business we own.",
    icon: "/images/company-icons/pillars/icon-talent.svg",
  },
  {
    title: "Strategy",
    description:
      "Each business operates from a clear strategy and execution plan aligned to long-term goals.",
    icon: "/images/company-icons/pillars/icon-strategy.svg",
  },
  {
    title: "Execution",
    description:
      "A disciplined meeting rhythm keeps teams aligned and accountable to the plan.",
    icon: "/images/company-icons/pillars/icon-execution.svg",
  },
  {
    title: "Results",
    description:
      "We track performance consistently, so progress is visible and outcomes are earned.",
    icon: "/images/company-icons/pillars/icon-results.svg",
  },
];

export const nfWay = {
  title: "The NF Way.",
  intro:
    "We have been business leaders ourselves, not just investors — and that’s what we bring to the table as partners. We use a proven approach, the NF Way, to drive growth. Built on four pillars — Talent, Strategy, Execution, and Results — the NF Way draws on proven frameworks for alignment, strategy, and execution. Each Newbury Franklin business applies consistent hiring rigor, talent development, strategy & execution plans, meeting rhythm, and performance tracking.",
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
