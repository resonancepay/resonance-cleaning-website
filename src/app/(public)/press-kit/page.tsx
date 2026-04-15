import { StaticPage } from "@/features/static-page/static-page";

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
