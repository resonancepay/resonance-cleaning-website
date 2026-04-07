import { AboutBanner } from "./components/about-banner";
import { AboutSubFooter } from "./components/about-sub-footer";
import { ExperContainer } from "./components/expert-container";
import { VisionBanner } from "./components/vision-banner";
import { SustainabilityStandards } from "./components/sustainability-standards";

function AboutScreen() {
  return (
    <>
      <AboutBanner />
      <VisionBanner />
      <ExperContainer />
      <SustainabilityStandards />
      <AboutSubFooter />
    </>
  );
}

export default AboutScreen;
