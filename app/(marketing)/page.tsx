import HomeHero from "@/components/HomeHero";
import PillarGrid from "@/components/PillarGrid";
import CompanyCard from "@/components/CompanyCard";
import TeamSection from "@/components/TeamSection";
import Reveal from "@/components/Reveal";
import ScrollFadeImage from "@/components/ScrollFadeImage";
import ContactForm from "@/components/ContactForm";
import { companies } from "@/lib/companies";
import { whatWeDo, whatWeBelieve, nfWay, investmentCriteria, growthFocus } from "@/lib/fund";
import { industryIcons } from "@/components/IndustryIcons";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-gold-dark">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10.2L8.5 12.7L14 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="section relative bg-white/90">
        <Reveal className="container-page mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Overview</p>
          <h3 className="mb-6 text-3xl text-black sm:text-4xl">What We Do.</h3>
          <p className="mb-5 text-xl font-serif italic leading-relaxed text-navy">{whatWeDo.lede}</p>
          <p className="text-stone">{whatWeDo.body}</p>
        </Reveal>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-page">
          <PillarGrid
            eyebrow="How We Operate"
            heading={nfWay.title}
            intro={nfWay.intro}
            outro={nfWay.outro}
            theme="dark"
          />
        </div>
      </section>

      <section id="our-firm" className="section scroll-mt-20 bg-cream">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal className="text-center lg:text-left">
              <p className="eyebrow mb-3">Philosophy</p>
              <h3 className="mb-6 text-3xl text-black sm:text-4xl">What We Believe.</h3>
              <p className="mb-5 text-lg font-serif text-navy">{whatWeBelieve.heading}</p>
              <div className="space-y-4 text-stone">
                {whatWeBelieve.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <ScrollFadeImage
                base="/images/backgrounds/lighthouse-bw.png"
                overlay="/images/backgrounds/night-light.png"
                baseAlt="Newbury Franklin lighthouse"
                overlayAlt="Newbury Franklin lighthouse at night, light shining"
              />
            </Reveal>
          </div>

          <div id="criteria" className="scroll-mt-20 mt-12 border-t border-navy/10 pt-10">
            <Reveal className="mx-auto mb-8 max-w-2xl text-center">
              <p className="eyebrow mb-3">Investment Criteria</p>
              <h3 className="mb-5 text-3xl text-black sm:text-4xl">What We Look For.</h3>
              <p className="text-stone">{investmentCriteria.intro}</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {investmentCriteria.items.map((item, i) => (
                <Reveal key={item} delay={i * 100} className="flex items-center justify-center gap-3">
                  <CheckIcon />
                  <h5 className="text-lg font-serif text-navy">{item}</h5>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section scroll-mt-20 bg-white">
        <Reveal className="container-page mb-14 text-center">
          <p className="eyebrow mb-3">Portfolio</p>
          <h3 className="text-3xl text-black sm:text-4xl">Our Companies.</h3>
        </Reveal>
        <div className="flex flex-col gap-1 px-1 sm:flex-row">
          {companies.map((company, i) => (
            <Reveal key={company.slug} delay={i * 120} className="flex flex-1">
              <CompanyCard company={company} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="strategy" className="section scroll-mt-20 bg-navy text-white">
        <div className="container-page">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-3">Growth</p>
            <h3 className="text-3xl sm:text-4xl">Where We&rsquo;re Headed.</h3>
          </Reveal>

          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-white/80">{growthFocus.continuing}</p>
            <p className="text-white/80">{growthFocus.newAreasIntro}</p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
            {growthFocus.newAreas.map((area, i) => {
              const Icon = industryIcons[area.slug];
              return (
                <Reveal
                  key={area.slug}
                  delay={i * 80}
                  className="flex basis-[calc(50%-1rem)] flex-col items-center text-center sm:basis-[calc(33.3333%-1.3333rem)] lg:basis-[calc(20%-1.6rem)]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-gold-light">
                    <Icon />
                  </div>
                  <h5 className="text-sm font-medium leading-snug tracking-wide">
                    {area.lines[0]}
                    <br />
                    {area.lines[1]}
                  </h5>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="section scroll-mt-20 bg-cream">
        <div className="container-page">
          <Reveal className="mx-auto mb-14 text-center">
            <p className="eyebrow mb-3">Leadership</p>
            <h3 className="text-3xl text-black sm:text-4xl">Our Team.</h3>
          </Reveal>
          <TeamSection />
        </div>
      </section>

      <section
        id="contact"
        className="section scroll-mt-20 bg-sand bg-cover bg-[left_70%_top]"
        style={{ backgroundImage: "linear-gradient(rgba(248,244,244,.9),rgba(248,244,244,.9)), url('/images/backgrounds/contact-bg.jpg')" }}
      >
        <Reveal className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <p className="eyebrow mb-3">Get In Touch</p>
            <h3 className="mb-5 text-3xl text-black sm:text-4xl">Contact Us.</h3>
            <p className="mx-auto max-w-md text-stone lg:mx-0">
              Whether you&rsquo;re a business owner exploring a sale or an investor with questions about our
              approach, we&rsquo;d like to hear from you.
            </p>
          </div>
          <div className="bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
