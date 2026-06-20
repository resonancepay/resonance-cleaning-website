import type { Metadata } from "next";
import { LegalPage } from "@/features/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Resonance Cleaning collects, uses, and protects your personal data.",
  openGraph: {
    title: "Privacy Policy — Resonance Cleaning",
    description:
      "How Resonance Cleaning collects, uses, and protects your personal data.",
    url: "https://www.resonancecleaningservices.org/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy — Resonance Cleaning",
    description: "How Resonance Cleaning collects, uses, and protects your personal data.",
  },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalPage type="privacy-policy" />;
}
