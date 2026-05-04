import type { Metadata } from "next";
import AboutScreen from "@/features/about/about.screen";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Resonance Cleaning's standards, ethos, and the team behind our precision-led approach to professional cleaning.",
  openGraph: {
    title: "About Us — Resonance Cleaning",
    description:
      "Learn about Resonance Cleaning's standards, ethos, and the team behind our precision-led approach to professional cleaning.",
    url: "https://www.resonancecleaningservices.org/about",
  },
  twitter: {
    title: "About Us — Resonance Cleaning",
    description:
      "Learn about Resonance Cleaning's standards, ethos, and the team behind our precision-led approach to professional cleaning.",
  },
  alternates: { canonical: "/about" },
};

const About = () => {
  return <AboutScreen />;
};

export default About;
