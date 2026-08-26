import PageHero from "@/components/PageHero";
import HighlightGrid from "@/components/HighlightGrid";
import PillarGrid from "@/components/PillarGrid";
import CeoCard from "@/components/CeoCard";
import CompanyContact from "@/components/CompanyContact";
import Reveal from "@/components/Reveal";
import { getCompany, type Company } from "@/lib/companies";
import { nfWay } from "@/lib/fund";

export default function PortfolioPage({ slug }: { slug: Company["slug"] }) {
  const company = getCompany(slug);

  return (
    <>
      <PageHero company={company} />

      <section className="section bg-white">
        <Reveal className="container-page max-w-3xl">
          {company.about.map((paragraph, i) => (
            <p key={i} className="mb-5 text-lg leading-relaxed text-stone">
              {paragraph}
            </p>
          ))}
          <a href={`mailto:${company.contactEmail}`} className="btn-outline-dark">
            {company.sellPrompt}
          </a>
        </Reveal>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <HighlightGrid heading={company.highlightsHeading} items={company.highlights} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <Reveal className="mb-14">
            <p className="eyebrow mb-3">Leadership</p>
            <h3 className="text-3xl text-black sm:text-4xl">Meet Our CEO</h3>
          </Reveal>
          <Reveal delay={100}>
            <CeoCard slug={company.ceoSlug} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container-page">
          <PillarGrid
            eyebrow="How We Operate"
            heading={nfWay.title}
            intro={nfWay.intro}
            theme="dark"
          />
        </div>
      </section>

      <section className="section bg-white">
        <Reveal className="container-page">
          <CompanyContact company={company} />
        </Reveal>
      </section>
    </>
  );
}
