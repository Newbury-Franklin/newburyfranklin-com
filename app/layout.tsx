import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const beaufort = localFont({
  src: "./fonts/BeaufortPro-Medium.otf",
  variable: "--font-beaufort",
  weight: "500",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.newburyfranklin.com"),
  title: {
    default: "Newbury Franklin | Buyers and Long-Term Builders of Recurring Revenue Businesses",
    template: "%s | Newbury Franklin",
  },
  description:
    "Newbury Franklin is an acquirer and long-term builder of multi-site, recurring-revenue businesses, partnering with owners across industrials, pet services, and early education.",
  icons: {
    icon: [
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beaufort.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}
