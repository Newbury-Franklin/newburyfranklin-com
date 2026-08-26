import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Pet Services",
  description:
    "Newbury Franklin Pet Services partners with pet resort owners across the U.S., providing doggy daycare, boarding, and grooming facilities with a long-term ownership mindset.",
};

export default function PetServices() {
  return <PortfolioPage slug="petservices" />;
}
