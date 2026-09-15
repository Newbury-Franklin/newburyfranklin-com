"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { companies } from "@/lib/companies";

const LIGHT_TOP_PAGES = ["/terms-of-use"];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen || LIGHT_TOP_PAGES.includes(pathname);

  const navLinkClass = solid ? "text-navy hover:text-gold-dark" : "text-white hover:text-gold-light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="relative z-10 block h-9 w-40 shrink-0">
          <Image
            src={solid ? "/images/logo/nf-logo-navy.png" : "/images/logo/nf-logo-white.png"}
            alt="Newbury Franklin"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide lg:flex">
          <Link href="/#our-firm" className={navLinkClass}>
            Our Firm
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <button className={`flex items-center gap-1 ${navLinkClass}`}>
              Companies
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {portfolioOpen && (
              <div className="absolute left-0 top-full w-56 border-t-2 border-gold bg-white py-2 shadow-lg">
                {companies.map((company) => (
                  <Link
                    key={company.slug}
                    href={`/${company.slug}`}
                    className="block px-5 py-2.5 text-navy hover:bg-cream"
                  >
                    {company.shortName}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#team" className={navLinkClass}>
            Team
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-gold-dark"
          >
            Contact
          </Link>
        </nav>

        <button
          aria-label="Toggle navigation"
          className={`relative z-10 lg:hidden ${solid ? "text-navy" : "text-white"}`}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
            <path d="M0 1H26M0 9H26M0 17H26" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-light/30 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4 text-navy">
            <Link href="/#our-firm" className="py-2.5" onClick={() => setMobileOpen(false)}>
              Our Firm
            </Link>
            <span className="pt-2 text-xs font-semibold uppercase tracking-widest text-stone">Companies</span>
            {companies.map((company) => (
              <Link
                key={company.slug}
                href={`/${company.slug}`}
                className="py-2.5 pl-2"
                onClick={() => setMobileOpen(false)}
              >
                {company.shortName}
              </Link>
            ))}
            <Link href="/#team" className="py-2.5" onClick={() => setMobileOpen(false)}>
              Team
            </Link>
            <Link href="/#contact" className="py-2.5" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
