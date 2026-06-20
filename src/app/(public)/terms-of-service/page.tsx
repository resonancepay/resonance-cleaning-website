import type { Metadata } from "next";
import { LegalPage } from "@/features/legal/legal-page";

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
  return <LegalPage type="terms-of-service" />;
}
