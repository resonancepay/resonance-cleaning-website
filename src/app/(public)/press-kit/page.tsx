import type { Metadata } from "next";
import { StaticPage } from "@/features/static-page/static-page";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Media resources, brand assets, and press enquiry information for Resonance Cleaning.",
  openGraph: {
    title: "Press Kit — Resonance Cleaning",
    description:
      "Media resources, brand assets, and press enquiry information for Resonance Cleaning.",
    url: "https://www.resonancecleaningservices.org/press-kit",
  },
  twitter: {
    title: "Press Kit — Resonance Cleaning",
    description:
      "Media resources, brand assets, and press enquiry information for Resonance Cleaning.",
  },
  alternates: { canonical: "/press-kit" },
};

export default function PressKitPage() {
  return (
    <StaticPage
      eyebrow="Press Kit"
      title="Media and Brand Resources"
      description="For press requests, partnership enquiries, or brand information, please reach out to the Resonance team and we will share the relevant materials directly."
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
