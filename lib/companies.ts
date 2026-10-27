export type Highlight = {
  title: string;
  description: string;
  icon: string;
};

export type Company = {
  slug: "industrials" | "petservices" | "earlyeducation";
  /** Set to false to hide a platform from all public listings and its own
   * page (returns 404) without deleting any of its content — e.g. before a
   * deal has closed. Defaults to published when omitted. */
  published?: boolean;
  name: string;
  shortName: string;
  cardDescription: string;
  tagline: string;
  logo: string;
  cardImage: string;
  hero:
    | { type: "video"; src: string }
    | { type: "image"; src: string };
  about: string[];
  highlightsHeading: string;
  highlights: Highlight[];
  ceoSlug: string;
  contactEmail: string;
  contactPhone: string;
  sellPrompt: string;
};

export const companies: Company[] = [
  {
    slug: "industrials",
    name: "Newbury Franklin Industrials",
    shortName: "Industrials",
    cardDescription: "Manufactures and Distributes Consumable Industrial Components",
    tagline: "Manufactures and distributes consumable industrial components.",
    logo: "/images/logo/nf-industrials-logo.png",
    cardImage: "/images/backgrounds/industrials-card.jpg",
    hero: { type: "video", src: "/videos/industrials-hero.mp4" },
    about: [
      "Headquartered in Buffalo, NY, Newbury Franklin Industrials is managed by a team of experienced operators with deep expertise scaling businesses both organically and through acquisition. We empower entrepreneurial management teams to focus on what matters most: serving customers and building durable relationships. This approach has allowed us to develop best-in-class relationships with manufacturers, distributors, employees, and customers alike.",
    ],
    highlightsHeading: "Our Industries.",
    highlights: [
      {
        title: "Fasteners, Hardware & Fittings",
        description: "Fasteners, hardware, and fittings are the small parts that hold bigger assemblies together — and NFI backs the asset-light manufacturers who supply them.",
        icon: "/images/company-icons/industrials/icon-hardware.svg",
      },
      {
        title: "Electrical",
        description: "Reliable electrical connections keep industrial and commercial systems running. NFI invests in the asset-light manufacturers and distributors behind them.",
        icon: "/images/company-icons/industrials/icon-electrical.svg",
      },
      {
        title: "Plastics",
        description: "Engineered plastic components show up in nearly every product our customers build. NFI partners with the asset-light manufacturers supplying them.",
        icon: "/images/company-icons/industrials/icon-plastics.svg",
      },
      {
        title: "Rubber",
        description: "Gaskets, seals, and molded rubber parts protect equipment from wear and the elements. NFI acquires the asset-light manufacturers that produce them.",
        icon: "/images/company-icons/industrials/icon-rubber.svg",
      },
    ],
    ceoSlug: "al-franjoine",
    contactEmail: "Kevin.brady@newburyfranklin.com",
    contactPhone: "(978) 225-0663",
    sellPrompt: "Considering a Sale? We'd Like to Hear From You.",
  },
  {
    slug: "petservices",
    name: "Newbury Franklin Pet Services",
    shortName: "Pet Services",
    cardDescription: "Provides Premium Dog Daycare, Boarding & Grooming Services",
    tagline: "Provides premium dog daycare, boarding & grooming services.",
    logo: "/images/logo/nf-pet-services-logo.png",
    cardImage: "/images/backgrounds/pet-services-card.png",
    hero: { type: "video", src: "/videos/pet-services-hero.mp4" },
    about: [
      "Newbury Franklin Pet Services (“NFPS”) is led by an experienced Nashville-based team building the most trusted pet services platform in the United States.",
      "We partner with pet resort owners seeking to reduce their administrative burden and focus on what matters most: caring for their clients’ pets. NFPS builds on the legacy these owners have created, leveraging technology to improve the customer and employee experience while providing safe, clean, and calm environments for pets to socialize, exercise, and rejuvenate.",
    ],
    highlightsHeading: "Why NF Pet Services.",
    highlights: [
      {
        title: "Built With Owners in Mind",
        description: "We partner with pet resort owners seeking to reduce their administrative burden, allowing them to focus on caring for their clients’ pets.",
        icon: "/images/company-icons/arts/arts-1.svg",
      },
      {
        title: "Technology-Enabled Operations",
        description: "We build on the legacy of pet resort owners by leveraging technology to improve the customer and employee experience.",
        icon: "/images/company-icons/arts/arts-2.svg",
      },
      {
        title: "Safe, Clean, Calm Environments",
        description: "We provide safe, clean, and calm environments for pets to socialize, exercise, and rejuvenate.",
        icon: "/images/company-icons/arts/arts-3.svg",
      },
    ],
    ceoSlug: "joe-graves",
    contactEmail: "joe.graves@newburyfranklin.com",
    contactPhone: "(978) 225-0663",
    sellPrompt: "Considering a Sale? We'd Like to Hear From You.",
  },
  {
    slug: "earlyeducation",
    name: "Newbury Franklin Early Education",
    shortName: "Early Education",
    cardDescription: "Operates Early Childhood Education and Child Care Centers",
    tagline: "Operates early childhood education and child care centers.",
    logo: "/images/logo/nf-earlyeducation-logo.png",
    cardImage: "/images/backgrounds/earlyeducation-card.jpg",
    hero: { type: "video", src: "/videos/earlyeducation-hero.mp4" },
    about: [
      "Newbury Franklin Early Education partners with exceptional early childhood education leaders to build enduring organizations that deliver outstanding experiences for children, families, and educators.",
      "We invest in centers with strong reputations for quality and care, providing the operational expertise, technology, and resources to support long-term growth — without compromising the culture and community relationships that made them successful.",
    ],
    highlightsHeading: "Why NF Early Education.",
    highlights: [
      {
        title: "Operational Excellence",
        description: "We bring decades of operating experience across marketing, technology, and customer experience to every center we partner with.",
        icon: "/images/company-icons/earlyeducation/icon-blocks.svg",
      },
      {
        title: "Long-Term Orientation",
        description: "We invest for the long term, giving directors and educators the stability to grow without pressure to exit.",
        icon: "/images/company-icons/earlyeducation/icon-growth.svg",
      },
      {
        title: "Experienced Acquirers",
        description: "We manage ownership transitions smoothly, preserving culture and continuity for staff, children, and families.",
        icon: "/images/company-icons/earlyeducation/icon-partnership.svg",
      },
      {
        title: "Committed to Quality",
        description: "We share a long-term commitment to quality, people, and sustainable growth in every community we serve.",
        icon: "/images/company-icons/earlyeducation/icon-heart.svg",
      },
    ],
    ceoSlug: "mg-shapiro",
    contactEmail: "mgshapiro@newburyfranklin.com",
    contactPhone: "(978) 225-0663",
    sellPrompt: "Considering a Sale? We'd Like to Hear From You.",
  },
];

/** Use for any public listing (nav, footer, homepage grid) — excludes
 * unpublished platforms while leaving their data and pages intact. */
export const publishedCompanies = companies.filter((company) => company.published !== false);

export function getCompany(slug: Company["slug"]) {
  return companies.find((company) => company.slug === slug)!;
}
