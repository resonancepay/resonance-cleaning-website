import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Resonance Cleaning team for enquiries, bookings, and bespoke cleaning service requests.",
  openGraph: {
    title: "Contact Us — Resonance Cleaning",
    description:
      "Get in touch with the Resonance Cleaning team for enquiries, bookings, and bespoke cleaning service requests.",
    url: "https://www.resonancecleaningservices.org/contact",
  },
  twitter: {
    title: "Contact Us — Resonance Cleaning",
    description:
      "Get in touch with the Resonance Cleaning team for enquiries, bookings, and bespoke cleaning service requests.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactRoute() {
  return <ContactPage />;
}
