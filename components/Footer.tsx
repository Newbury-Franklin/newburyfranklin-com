import Image from "next/image";
import Link from "next/link";
import { fundContact } from "@/lib/fund";
import { publishedCompanies } from "@/lib/companies";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-navy bg-repeat py-14 text-white"
      style={{ backgroundImage: "url('/images/backgrounds/footer-pattern.svg')", backgroundSize: "28px 28px" }}
    >
      <div className="container-page grid grid-cols-1 gap-12 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <Link href="/" className="relative block h-9 w-40">
            <Image src="/images/logo/nf-logo-white.png" alt="Newbury Franklin" fill className="object-contain object-left" />
          </Link>

          <address className="not-italic text-lg font-serif leading-relaxed text-white/90">
            {fundContact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block">{fundContact.phone}</span>
          </address>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Firm</p>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <Link href="/#our-firm" className="hover:text-white">
                Our Firm
              </Link>
            </li>
            <li>
              <Link href="/#team" className="hover:text-white">
                Team
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Companies</p>
          <ul className="space-y-3 text-sm text-white/80">
            {publishedCompanies.map((company) => (
              <li key={company.slug}>
                <Link href={`/${company.slug}`} className="hover:text-white">
                  {company.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-white/10 pt-6">
        <p className="text-sm text-white/60">
          © {year} Newbury Franklin LLC. All rights reserved.{" "}
          <Link href="/terms-of-use" className="underline underline-offset-4 hover:text-white">
            Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}
