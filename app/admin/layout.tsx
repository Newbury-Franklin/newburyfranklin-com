import Link from "next/link";
import Image from "next/image";
import { requireRole } from "@/lib/auth/requireRole";
import { Role } from "@/lib/generated/prisma/client";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { profile } = await requireRole(Role.ADMIN);

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-navy/10 bg-white">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/admin" className="relative block h-7 w-32">
            <Image src="/images/logo/nf-logo-navy.png" alt="Newbury Franklin" fill className="object-contain object-left" />
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-navy">
            <Link href="/admin/investors" className="hover:text-gold-dark">
              Investors
            </Link>
            <Link href="/admin/documents" className="hover:text-gold-dark">
              Documents
            </Link>
            <span className="text-stone">{profile.email}</span>
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
