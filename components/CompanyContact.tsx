import Image from "next/image";
import type { Company } from "@/lib/companies";

export default function CompanyContact({ company }: { company: Company }) {
  return (
    <div id="contact" className="scroll-mt-24 text-center">
      <h3 className="mb-2 text-3xl text-black sm:text-4xl">Contact Us.</h3>
      <p className="mx-auto mb-10 max-w-xl text-stone">
        {company.shortName} is looking to acquire and scale businesses with growth potential. Let’s talk.
      </p>
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
        <a href={`mailto:${company.contactEmail}`} className="group flex items-center gap-4">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy">
            <div className="relative h-5 w-5">
              <Image src="/images/company-icons/contact/icon-email.png" alt="" fill className="object-contain" />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Email</p>
            <p className="font-medium text-navy group-hover:text-gold-dark">{company.contactEmail}</p>
          </div>
        </a>
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy">
            <div className="relative h-5 w-5">
              <Image src="/images/company-icons/contact/icon-phone.png" alt="" fill className="object-contain" />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Phone</p>
            <p className="font-medium text-navy">{company.contactPhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
