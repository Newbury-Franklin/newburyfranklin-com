import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioPage from "@/components/PortfolioPage";
import { getCompany } from "@/lib/companies";

export const metadata: Metadata = {
  title: "Early Education",
  description:
    "Newbury Franklin Early Education is an acquirer and long-term steward of early childhood education centers, partnering with exceptional leaders to build enduring organizations.",
};

export default function EarlyEducation() {
  // Deal hasn't closed yet — 404 the page (not just delist it) until
  // `published` flips back to true in lib/companies.ts.
  if (getCompany("earlyeducation").published === false) {
    notFound();
  }
  return <PortfolioPage slug="earlyeducation" />;
}
