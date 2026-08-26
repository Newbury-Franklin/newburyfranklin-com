import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Industrials",
  description:
    "Newbury Franklin Industrials is a leading manufacturer and distributor of consumable industrial components across fasteners, hardware, electrical, plastics, and rubber.",
};

export default function Industrials() {
  return <PortfolioPage slug="industrials" />;
}
