import { FiveStarStandard } from "./components/five-star-standard";
import { HomeBanner } from "./components/home-banner";
import { NetStandard } from "./components/net-standard";
import { ProudMember } from "./components/proud-member";
import { ServicePillarSection } from "./components/service-pillar-section";
import { SpecialistCare } from "./components/specialist-care";

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <ServicePillarSection />
      <SpecialistCare />
      <FiveStarStandard />
      <NetStandard />
      <ProudMember />
    </>
  );
}
