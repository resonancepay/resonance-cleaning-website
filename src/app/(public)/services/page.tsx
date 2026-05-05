import type { Metadata } from "next";
import { ServicesV2Page } from "@/features/services-v2/services-v2-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover our full range of cleaning services including domestic, executive, commercial, and specialist programmes.",
  openGraph: {
    title: "Services — Resonance Cleaning",
    description:
      "Discover our full range of cleaning services including domestic, executive, commercial, and specialist programmes.",
    url: "https://www.resonancecleaningservices.org/services",
  },
  twitter: {
    title: "Services — Resonance Cleaning",
    description:
      "Discover our full range of cleaning services including domestic, executive, commercial, and specialist programmes.",
  },
  alternates: { canonical: "/services" },
};

export default function ServicesRoute() {
  return <ServicesV2Page />;
}
