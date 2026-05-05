import type { Metadata } from "next";
import { HomePage } from "@/features/home/home-page";
import { JsonLd } from "@/common/components/json-ld";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Resonance Cleaning",
  url: "https://www.resonancecleaningservices.org",
  telephone: "+447831176317",
  address: {
    "@type": "PostalAddress",
    streetAddress: "50 Kaimhill Circle",
    addressLocality: "Aberdeen",
    postalCode: "AB10 7JH",
    addressCountry: "GB",
  },
  priceRange: "££",
  serviceArea: { "@type": "Country", name: "United Kingdom" },
};

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium domestic, commercial, and specialist cleaning services delivered to an editorial standard across the UK.",
  openGraph: {
    title: "Home — Resonance Cleaning",
    description:
      "Premium domestic, commercial, and specialist cleaning services delivered to an editorial standard across the UK.",
    url: "https://www.resonancecleaningservices.org/",
  },
  twitter: {
    title: "Home — Resonance Cleaning",
    description:
      "Premium domestic, commercial, and specialist cleaning services delivered to an editorial standard across the UK.",
  },
  alternates: { canonical: "/" },
};

export default function HomeRoute() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <HomePage />
    </>
  );
}
