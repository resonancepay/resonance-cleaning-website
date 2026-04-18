import { StaticPage } from "@/features/static-page/static-page";

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
