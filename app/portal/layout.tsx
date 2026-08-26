import Link from "next/link";
import Image from "next/image";
import { requireActiveInvestor } from "@/lib/auth/requireRole";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const { investor } = await requireActiveInvestor();

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-navy/10 bg-white">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/portal" className="relative block h-7 w-32">
            <Image src="/images/logo/nf-logo-navy.png" alt="Newbury Franklin" fill className="object-contain object-left" />
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-navy">
            <span className="text-stone">{investor.legalName}</span>
            <form action="/api/auth/logout" method="post">
              <button type="submit" className="text-stone hover:text-navy">
                Sign Out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="container-page py-10">{children}</main>
    </div>
  );
}
