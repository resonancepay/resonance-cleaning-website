import { StaticPage } from "@/features/static-page/static-page";

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
