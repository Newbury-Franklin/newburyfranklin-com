import Image from "next/image";
import Link from "next/link";
import type { Company } from "@/lib/companies";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      href={`/${company.slug}`}
      className="group relative flex min-h-[26rem] flex-1 flex-col justify-end overflow-hidden"
    >
      <Image
        src={company.cardImage}
        alt={company.shortName}
        fill
        className="object-cover saturate-[0.8] transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-navy/30 mix-blend-color" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />
      <div className="relative z-10 p-8">
        <div className="relative mb-4 h-10 w-32">
          <Image src={company.logo} alt={company.shortName} fill className="object-contain object-left" />
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-white/85">{company.cardDescription}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-light">
          Learn more
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M0 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
