import { StaticPage } from "@/features/static-page/static-page";

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
