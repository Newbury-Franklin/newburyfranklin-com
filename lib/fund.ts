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
    title: "Measurable Results",
    description:
      "We track performance consistently, so progress is visible and outcomes are earned.",
    icon: "/images/company-icons/pillars/icon-results.svg",
  },
];

export const nfWay = {
  title: "The NF Way.",
  intro:
    "We have been business leaders ourselves, not just investors — and that’s what we bring to the table as partners. We use a proven approach, the NF Way, to drive growth.",
  outro:
    "We do not guarantee business outcomes, but we promise a consistent, earnest, and scalable approach to our work.",
};

export const whatWeDo = {
  lede: "Newbury Franklin buys US-based businesses — multi-location today, or built for multi-location potential — and uses its operating know-how to help them grow.",
  body: "We look for businesses with loyal customers and room for expansion. We “buy and build” companies, rather than “buy and flip” them — staying flexible on leadership changes and partnering with existing management teams to drive strong outcomes.",
};

export const whatWeBelieve = {
  heading: "Enduringly great companies are built over decades, not years.",
  paragraphs: [
    "Responsible owners recognize this and set up their business for the long haul.",
    "Guided by this principle, Newbury Franklin acquires and builds companies with no plan to sell. This mindset — and our capital structure — keeps us focused on building value over decades.",
    "We are industry agnostic but disciplined, seeking business models and industry traits — multi-location today or with multi-location potential — that fit our criteria.",
  ],
};

export const investmentCriteria = {
  intro:
    "We invest in large, fragmented markets with strong consolidation fundamentals, targeting businesses that:",
  items: ["Strong, Consistent Cash Flow", "Outstanding Revenue Retention", "Multisite Potential"],
};

export const growthFocus = {
  continuing:
    "We continue to grow our existing platforms through acquisition and de novo market expansion.",
  newAreasIntro:
    "We are also selectively evaluating new verticals with similar business model characteristics, including:",
  newAreas: [
    { name: "Car Wash Services", slug: "car-wash", lines: ["Car Wash", "Services"] as [string, string] },
    { name: "Early Childhood Education", slug: "early-education", lines: ["Early Childhood", "Education"] as [string, string] },
    { name: "Salon & Barbershop Services", slug: "salon-barbershop", lines: ["Salon & Barbershop", "Services"] as [string, string] },
    { name: "Taproom & Craft Beverage", slug: "taproom", lines: ["Taproom & Craft", "Beverage"] as [string, string] },
    { name: "Youth Enrichment Programs", slug: "youth-enrichment", lines: ["Youth Enrichment", "Programs"] as [string, string] },
  ],
};

export const fundContact = {
  address: ["4 Inn Street", "Newburyport, MA 01950"],
  phone: "(978) 225-0663",
};
