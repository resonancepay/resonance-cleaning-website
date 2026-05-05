import { CareersBanner } from "./components/careers-banner";
import { OpenRoles } from "./components/open-roles";
import { WhyJoin } from "./components/why-join";
import { CareersCta } from "./components/careers-cta";

export function CareersPage() {
  return (
    <>
      <CareersBanner />
      <OpenRoles />
      <WhyJoin />
      <CareersCta />
    </>
  );
}
