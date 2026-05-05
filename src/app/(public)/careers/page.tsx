import type { Metadata } from "next";
import { CareersPage } from "@/features/careers/careers-page";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Resonance Cleaning team. We welcome discreet introductions from professionals who share our standards.",
  openGraph: {
    title: "Careers — Resonance Cleaning",
    description:
      "Join the Resonance Cleaning team. We welcome discreet introductions from professionals who share our standards.",
    url: "https://www.resonancecleaningservices.org/careers",
  },
  twitter: {
    title: "Careers — Resonance Cleaning",
    description:
      "Join the Resonance Cleaning team. We welcome discreet introductions from professionals who share our standards.",
  },
  alternates: { canonical: "/careers" },
};

export default function CareersRoute() {
  return <CareersPage />;
}
