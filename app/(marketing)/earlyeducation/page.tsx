import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Early Education",
  description:
    "Newbury Franklin Early Education is an acquirer and long-term steward of early childhood education centers, partnering with exceptional leaders to build enduring organizations.",
};

export default function EarlyEducation() {
  return <PortfolioPage slug="earlyeducation" />;
}
