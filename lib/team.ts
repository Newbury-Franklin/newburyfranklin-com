export type TeamMember = {
  slug: string;
  name: string;
  titles: string[];
  /** Card title split across exactly 2 lines, for even row heights in TeamSection. */
  cardTitleLines: [string, string];
  image: string;
  linkedin?: string;
  bio: string[];
  isPlaceholderBio: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "mark-anderegg",
    name: "Mark Anderegg",
    titles: ["Co-Founder & CEO"],
    cardTitleLines: ["Co-Founder", "& CEO"],
    image: "/images/team/mark-anderegg.jpg",
    isPlaceholderBio: true,
    bio: [
      "Mark Anderegg co-founded Newbury Franklin with a mandate to acquire and build multi-site businesses for the long term.",
      "As CEO, he sets the firm’s investment strategy and partners directly with portfolio company leaders on growth, capital allocation, and governance, with a focus on sustainable value creation over decades rather than a typical hold period.",
    ],
  },
  {
    slug: "kevin-brady",
    name: "Kevin Brady",
    titles: ["Co-Founder & President"],
    cardTitleLines: ["Co-Founder", "& President"],
    image: "/images/team/kevin-brady.jpg",
    linkedin: "https://www.linkedin.com/in/kevin-brady-93688669/",
    isPlaceholderBio: true,
    bio: [
      "Kevin Brady co-founded Newbury Franklin and helps lead the firm's investment strategy and portfolio company partnerships.",
      "Kevin began his career in investment banking at Bank of America before moving into private equity at The Wicks Group. His shift from investor to operator at Little Sprouts — where he served as CFO & Head of Business Development — gave him firsthand experience supporting mission-driven organizations and scaling multi-site operations.",
      "Kevin holds a B.S. in Finance from Boston College and lives in Franklin Lakes, NJ, with his wife and three children.",
    ],
  },
  {
    slug: "matt-perloe",
    name: "Matt Perloe",
    titles: ["Vice President of Investments"],
    cardTitleLines: ["Vice President", "of Investments"],
    image: "/images/team/matt-perloe.jpg",
    isPlaceholderBio: true,
    bio: [
      "Matt Perloe leads deal sourcing and evaluation for Newbury Franklin, working closely with business owners considering a sale or partnership.",
      "He conducts diligence on prospective acquisitions and supports portfolio companies with financial planning and reporting after close.",
    ],
  },
  {
    slug: "rebecca-williamson",
    name: "Rebecca Williamson",
    titles: ["Chief Relationship Officer"],
    cardTitleLines: ["Chief Relationship", "Officer"],
    image: "/images/team/rebecca-williamson.jpg",
    isPlaceholderBio: true,
    bio: [
      "Rebecca Williamson manages Newbury Franklin’s relationships with business owners, brokers, and industry partners throughout the acquisition process.",
      "She is often the first point of contact for owners exploring a potential sale and works to make transitions smooth for teams and customers alike.",
    ],
  },
  {
    slug: "al-franjoine",
    name: "Al Franjoine",
    titles: ["CEO, Industrials"],
    cardTitleLines: ["CEO,", "Industrials"],
    image: "/images/team/al-franjoine.png",
    isPlaceholderBio: true,
    bio: [
      "Al Franjoine leads Newbury Franklin Industrials, overseeing the firm’s manufacturing and distribution platform across fasteners, hardware, electrical, plastics, and rubber.",
      "He is responsible for operating performance across the portfolio and for identifying and integrating new acquisitions in the industrials vertical.",
    ],
  },
  {
    slug: "joe-graves",
    name: "Joe Graves",
    titles: ["CEO, Pet Services"],
    cardTitleLines: ["CEO,", "Pet Services"],
    image: "/images/team/joe-graves.jpg",
    linkedin: "https://www.linkedin.com/in/josephbgraves/",
    isPlaceholderBio: true,
    bio: [
      "Joe Graves leads Newbury Franklin Pet Services, partnering with pet resort owners across the country to preserve what makes their businesses special while investing in technology, facilities, and staff.",
      "He is based in Nashville and works directly with owners considering a sale.",
    ],
  },
  {
    slug: "mg-shapiro",
    name: "M.G. Shapiro",
    titles: ["CEO, Early Education"],
    cardTitleLines: ["CEO,", "Early Education"],
    image: "/images/team/mg-shapiro.jpg",
    isPlaceholderBio: false,
    bio: [
      "M.G. Shapiro is CEO of Newbury Franklin Early Education, partnering with exceptional leaders to build enduring organizations that deliver outstanding experiences for children, families, and educators.",
      "M.G. has dedicated more than two decades to the early childhood education industry, helping organizations grow through operational excellence, marketing, technology, and customer experience. Throughout his career, he has held executive leadership roles spanning operations, marketing, information technology, and business transformation, working with organizations ranging from single-site providers to some of the largest operators in the country.",
      "Earlier in his career, M.G. held leadership positions with Rainbow Child Care Center, Learning Care Group, Crème de la Crème, and KinderCare Education, where he helped organizations strengthen enrollment, improve operational performance, and build the systems and processes needed to support long-term growth. Before joining Newbury Franklin, he advised organizations across multiple industries on growth strategy and operational improvement. He joined Newbury Franklin to build a best-in-class early childhood education organization with a long-term commitment to quality, people, and sustainable growth.",
      "M.G. is a graduate of the University of Michigan and also serves as a volunteer Lieutenant with the Troy Fire Department. He lives in Troy, Michigan with his wife, Trish, and their three children, all of whom proudly count themselves among the Detroit Lions' most enthusiastic fans.",
    ],
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
