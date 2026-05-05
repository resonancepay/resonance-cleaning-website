import type { Metadata } from "next";
import { StaticPage } from "@/features/static-page/static-page";

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
  return (
    <StaticPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="This is the place for our privacy practices, how we collect and use information, and the protections we apply to your data."
      primaryCta={{
        href: "/contact",
        label: "Contact Us",
      }}
      secondaryCta={{
        href: "/sitemap",
        label: "View Sitemap",
      }}
    />
  );
}
