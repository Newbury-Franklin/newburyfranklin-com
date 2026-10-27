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
  /** Set to false to hide from the public "Our Team" grid without deleting
   * their data — e.g. before a deal has closed. Defaults to published. */
  published?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "mark-anderegg",
    name: "Mark Anderegg",
    titles: ["Co-Founder & CEO"],
    cardTitleLines: ["Co-Founder", "& CEO"],
    image: "/images/team/mark-anderegg.jpg",
    isPlaceholderBio: false,
    bio: [
      "Mark Anderegg is Co-Founder and CEO of Newbury Franklin. He sets the firm’s investment strategy and partners directly with leadership teams across Newbury Franklin’s companies on growth, capital allocation, and governance, with a focus on building value over decades rather than a typical hold period.",
      "Mark began his career as an investment banker at Goldman Sachs before moving into private equity. In 2012, he acquired Little Sprouts, a Boston-based childcare provider, and served as CEO for six years, growing it into the largest independent childcare company in New England before stepping down to co-found Newbury Franklin with Kevin Brady.",
      "Mark holds a B.A. in Economics from Vanderbilt University and an MBA from the Kellogg School of Management at Northwestern University. He is also an Adjunct Professor at the Tuck School of Business at Dartmouth College. Mark has three children and splits his time between Newburyport, MA and Gates Mills, OH.",
    ],
  },
  {
    slug: "kevin-brady",
    name: "Kevin Brady",
    titles: ["Co-Founder & President"],
    cardTitleLines: ["Co-Founder", "& President"],
    image: "/images/team/kevin-brady.jpg",
    isPlaceholderBio: false,
    bio: [
      "Kevin Brady is Co-Founder and President of Newbury Franklin. He founded Newbury Franklin with Mark Anderegg to partner with high-quality entrepreneurs and businesses to reach their highest potential over decades.",
      "Kevin began his career as an investment banker at Bank of America before joining The Wicks Group, a middle-market private equity firm, where he supported acquisitions, financings, and operations as Vice President. In 2015, he helped lead Wicks’ investment in Little Sprouts and later moved from investor to operator, joining as CFO & Head of Business Development before serving on its board through 2020.",
      "Kevin holds a B.S. in Finance from the Carroll School of Management at Boston College. He lives in Franklin Lakes, NJ, with his wife and three children.",
    ],
  },
  {
    slug: "matt-perloe",
    name: "Matt Perloe",
    titles: ["Vice President of Investments"],
    cardTitleLines: ["Vice President", "of Investments"],
    image: "/images/team/matt-perloe.jpg",
    isPlaceholderBio: false,
    bio: [
      "Matt Perloe is Vice President of Investments at Newbury Franklin, supporting the firm’s investment activities including new platform companies, add-on acquisitions, and capital allocation decisions.",
      "Prior to joining Newbury Franklin, Matt was an investment banking Associate at Robert W. Baird & Co. within the firm’s Global Industrial Group in Chicago.",
      "Matt holds a B.A. in Economics and East Asian Studies from New York University, where he was a Presidential Honors Scholar, and an MBA from the Yale School of Management.",
    ],
  },
  {
    slug: "rebecca-williamson",
    name: "Rebecca Williamson",
    titles: ["Chief Relationship Officer"],
    cardTitleLines: ["Chief Relationship", "Officer"],
    image: "/images/team/rebecca-williamson.jpg",
    isPlaceholderBio: false,
    bio: [
      "Rebecca Williamson is Chief Relationship Officer at Newbury Franklin, where she cultivates relationships with acquisition candidates and helps ensure best-in-class teams across the firm’s platform companies.",
      "Rebecca began her career as a financial analyst in Goldman Sachs’ Consumer and Investment Management Division in San Francisco, then moved to Boston to lead sales and business development at MOJO Cold Brewed Coffee.",
      "Rebecca holds a B.S. in Human and Organizational Development from Vanderbilt University, where she played Division I women’s lacrosse, and an MBA from Vanderbilt’s Owen Graduate School of Management. She lives in Portsmouth, NH.",
    ],
  },
  {
    slug: "al-franjoine",
    name: "Al Franjoine",
    titles: ["CEO, Industrials"],
    cardTitleLines: ["CEO,", "Industrials"],
    image: "/images/team/al-franjoine.png",
    isPlaceholderBio: false,
    bio: [
      "Al Franjoine is CEO of Newbury Franklin Industrials, a leading supplier of consumable industrial components to industrial and commercial markets across North America. Under his leadership, the company has grown from a single entity into an industrial conglomerate.",
      "Earlier in his career, Al was a leader at McMaster-Carr, a leading MRO distributor and the second-largest eCommerce player in the industrial supply market.",
      "Al holds a B.A. in Business from Canisius College, an M.A. in Economics from the University at Buffalo, and an MBA from the Kellogg School of Management at Northwestern University.",
    ],
  },
  {
    slug: "joe-graves",
    name: "Joe Graves",
    titles: ["CEO, Pet Services"],
    cardTitleLines: ["CEO,", "Pet Services"],
    image: "/images/team/joe-graves.jpg",
    isPlaceholderBio: false,
    bio: [
      "Joe Graves is CEO of Newbury Franklin Pet Services, building the most trusted brand in pet services.",
      "Joe began his career in finance in Chicago before earning his MBA and joining Kurgo, a Boston-based dog travel brand, as COO, helping scale the business and lead its successful exit to Radio Systems Corporation. He later served as CEO of GUNNER, a premium dog products brand in Nashville, leading a major transformation and significant growth before stepping down in 2023 to join Newbury Franklin.",
      "Joe holds a B.S. in Accounting from the Brock School of Business at Samford University and an MBA from the Kellogg School of Management at Northwestern University. He is Chairman of the Pet Products Standards Council and lives in Franklin, TN, with his wife, three children, and yellow lab.",
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

/** Use for the public "Our Team" grid — excludes unpublished members while
 * leaving their data intact. */
export const publishedTeamMembers = teamMembers.filter((member) => member.published !== false);

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
