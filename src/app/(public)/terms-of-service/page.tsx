import type { Metadata } from "next";
import { StaticPage } from "@/features/static-page/static-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern Resonance Cleaning's services, bookings, and client relationships.",
  openGraph: {
    title: "Terms of Service — Resonance Cleaning",
    description:
      "The terms and conditions that govern Resonance Cleaning's services, bookings, and client relationships.",
    url: "https://www.resonancecleaningservices.org/terms-of-service",
  },
  twitter: {
    title: "Terms of Service — Resonance Cleaning",
    description:
      "The terms and conditions that govern Resonance Cleaning's services, bookings, and client relationships.",
  },
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Terms of Service"
      description="This page is reserved for the terms that govern our services, bookings, and client expectations."
      primaryCta={{
        href: "/contact",
        label: "Contact Us",
      }}
      secondaryCta={{
        href: "/privacy-policy",
        label: "Privacy Policy",
      }}
    />
  );
}
