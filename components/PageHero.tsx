import Image from "next/image";
import type { Company } from "@/lib/companies";

export default function PageHero({ company }: { company: Company }) {
  return (
    <section className="relative flex min-h-[32rem] items-center overflow-hidden bg-navy pt-20">
      {company.hero.type === "video" ? (
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src={company.hero.src} type="video/mp4" />
        </video>
      ) : (
        <Image src={company.hero.src} alt="" fill className="object-cover" priority />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      <div className="container-page relative z-10 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-light">
          Newbury Franklin {company.shortName}
        </p>
        <h1 className="max-w-2xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{company.tagline}</h1>
      </div>
    </section>
  );
}
