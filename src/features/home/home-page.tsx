import { HomeBanner } from "./components/home-banner";
import { ServicePillarSection } from "./components/service-pillar-section";
import { SpecialistCare } from "./components/specialist-care";

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <ServicePillarSection />
      <SpecialistCare />
    </>
  );
}
