import type { Metadata } from "next";
import { ServicesV2Page } from "@/features/services-v2/services-v2-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our domestic, commercial, and specialist cleaning services. Request a tailored quote in minutes.",
  openGraph: {
    title: "Services — Resonance Cleaning",
    description:
      "Explore our domestic, commercial, and specialist cleaning services. Request a tailored quote in minutes.",
    url: "https://www.resonancecleaningservices.org/services",
  },
  twitter: {
    title: "Services — Resonance Cleaning",
    description:
      "Explore our domestic, commercial, and specialist cleaning services. Request a tailored quote in minutes.",
  },
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesV2Page />;
}
