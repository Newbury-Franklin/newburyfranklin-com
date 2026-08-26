import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-cream px-6 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="mx-auto mb-10 block h-9 w-40 relative">
          <Image
            src="/images/logo/nf-logo-navy.png"
            alt="Newbury Franklin"
            fill
            className="object-contain"
          />
        </Link>
        <div className="bg-white p-8 shadow-sm">{children}</div>
      </div>
    </div>
  );
}
