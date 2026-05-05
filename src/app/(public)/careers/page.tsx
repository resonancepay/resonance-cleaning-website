import type { Metadata } from "next";
import { StaticPage } from "@/features/static-page/static-page";

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

export default function CareersPage() {
  return (
    <StaticPage
      eyebrow="Careers"
      title="Join the Resonance Team"
      description="We are not currently advertising open roles, but we welcome discreet introductions from professionals who share our standards for precision, reliability, and care."
      primaryCta={{
        href: "/contact",
        label: "Contact Us",
      }}
      secondaryCta={{
        href: "/about",
        label: "About Resonance",
      }}
    />
  );
}
