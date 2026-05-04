import type { Metadata } from "next";
import { Suspense } from "react";
import { GetAQuotePage } from "@/features/get-a-quote/get-a-quote-page";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a tailored quote for domestic, commercial, or specialist cleaning. Transparent pricing, no obligation.",
  openGraph: {
    title: "Get a Quote — Resonance Cleaning",
    description:
      "Request a tailored quote for domestic, commercial, or specialist cleaning. Transparent pricing, no obligation.",
    url: "https://www.resonancecleaningservices.org/get-a-quote",
  },
  twitter: {
    title: "Get a Quote — Resonance Cleaning",
    description:
      "Request a tailored quote for domestic, commercial, or specialist cleaning. Transparent pricing, no obligation.",
  },
  alternates: { canonical: "/get-a-quote" },
};

export default function GetAQuoteRoute() {
  return (
    <Suspense fallback={null}>
      <GetAQuotePage />
    </Suspense>
  );
}
