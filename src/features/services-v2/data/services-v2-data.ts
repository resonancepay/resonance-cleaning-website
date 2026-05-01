import type { StaticImageData } from "next/image";
import domesticImage from "@/assets/images/domestic-cleaningpng.png";
import cleanRoomImage from "@/assets/images/clean room.jpg";
import bedroomImage from "@/assets/images/bedroom.jpg";
import bathroomImage from "@/assets/images/bathroom-3.jpg";
import kitchenImage from "@/assets/images/kitchen.jpg";
import sittingRoomImage from "@/assets/images/sitting-room.jpg";
import bathroomAltImage from "@/assets/images/bathroom.png";
import luxuryImage from "@/assets/images/Luxury interior.png";
import homePageImage from "@/assets/images/home-page-image.png";
import commercialHeroImage from "@/assets/images/commercial-hero.jpg";
import domesticHeroImage from "@/assets/images/domestic-hero.jpg";
import specialHeroImage from "@/assets/images/special-hero.jpg";

export type ServiceCategory = "domestic" | "commercial" | "special";

export type CategoryCard = {
  id: ServiceCategory;
  title: string;
  description: string;
  image: StaticImageData;
  cta: string;
};

export type DomesticService = {
  id: string;
  name: string;
  image: StaticImageData;
  tagline: string;
};

export type CommercialSegment = {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
};

export type SpecialService = {
  id: string;
  name: string;
  tagline: string;
  image: StaticImageData;
};

export type RoomOption = {
  id: string;
  label: string;
};

export type ApplianceOption = {
  id: string;
  label: string;
};

export const categoryCards: CategoryCard[] = [
  {
    id: "domestic",
    title: "Domestic Cleaning",
    description:
      "Tailored room-by-room cleaning for private homes, delivering a flawless finish with discretion and care.",
    image: domesticHeroImage,
    cta: "View Services",
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Business-grade cleaning solutions for offices, care homes, beauty salons, and fitness centres.",
    image: commercialHeroImage,
    cta: "View Services",
  },
  {
    id: "special",
    title: "Special Services",
    description:
      "Specialist and niche cleaning services crafted for unique requirements beyond standard care.",
    image: specialHeroImage,
    cta: "View Services",
  },
];

export const domesticServices: DomesticService[] = [
  {
    id: "general-housekeeping",
    name: "General Housekeeping",
    tagline: "Ongoing upkeep to keep every room in pristine order.",
    image: sittingRoomImage,
  },
  {
    id: "standard-cleaning",
    name: "Standard Cleaning",
    tagline: "A thorough clean covering all key areas of the home.",
    image: bathroomImage,
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    tagline: "An intensive top-to-bottom clean for a truly fresh start.",
    image: kitchenImage,
  },
  {
    id: "flooring-clean",
    name: "Flooring Clean",
    tagline: "Expert treatment for all floor types — hardwood, tile, or carpet.",
    image: bedroomImage,
  },
  {
    id: "move-in-move-out",
    name: "Move In / Move Out",
    tagline: "Seamless cleaning before you settle in or hand over the keys.",
    image: domesticImage,
  },
  {
    id: "end-of-tenancy-deep-clean",
    name: "End of Tenancy Deep Clean",
    tagline: "Deposit-ready results that meet letting agent standards.",
    image: luxuryImage,
  },
  {
    id: "drapes-curtain-cleaning",
    name: "Drapes & Curtain Cleaning",
    tagline: "Gentle specialist care to restore fabric freshness.",
    image: sittingRoomImage,
  },
  {
    id: "mattress-cleaning",
    name: "Mattress Cleaning",
    tagline: "Deep sanitisation for a hygienic, allergen-free sleep.",
    image: bedroomImage,
  },
  {
    id: "general-carpet-cleaning",
    name: "General Carpet Cleaning",
    tagline: "Revitalise carpets and remove everyday dirt and stains.",
    image: cleanRoomImage,
  },
  {
    id: "carpet-cleaning-end-of-tenancy",
    name: "Carpet Cleaning (End of Tenancy)",
    tagline: "Tenancy-standard carpet restoration for a full deposit return.",
    image: bathroomAltImage,
  },
  {
    id: "dust-and-polish",
    name: "Dust and Polish",
    tagline: "A meticulous dust and polish pass across all surfaces.",
    image: kitchenImage,
  },
];

export const commercialSegments: CommercialSegment[] = [
  {
    id: "offices",
    name: "Offices",
    description:
      "Regular and deep-clean contracts for professional workspaces, keeping your team in a pristine environment.",
    image: luxuryImage,
  },
  {
    id: "care-homes",
    name: "Care Homes",
    description:
      "Clinical-grade hygiene standards to ensure safe, comfortable conditions for residents and staff.",
    image: cleanRoomImage,
  },
  {
    id: "beauty-salons",
    name: "Beauty Salons",
    description:
      "Immaculate salon cleaning that reflects the premium standards your clients expect.",
    image: luxuryImage,
  },
  {
    id: "fitness-centres",
    name: "Fitness Centres",
    description:
      "High-frequency sanitisation of equipment, changing rooms, and common areas for a healthy facility.",
    image: sittingRoomImage,
  },
];

export const specialServices: SpecialService[] = [
  {
    id: "window-cleaning",
    name: "Interior & Exterior Window Cleaning",
    tagline: "Crystal-clear results inside and out, at any height.",
    image: cleanRoomImage,
  },
  {
    id: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    tagline: "Deep-clean and refresh sofas, chairs, and fabric surfaces.",
    image: sittingRoomImage,
  },
  {
    id: "ironing-services",
    name: "Ironing Services",
    tagline: "Crisp, perfectly pressed garments and linens.",
    image: bedroomImage,
  },
  {
    id: "rug-shampooing",
    name: "Rug Shampooing",
    tagline: "Restore colour, texture, and freshness to all rug types.",
    image: bathroomAltImage,
  },
  {
    id: "stain-removal",
    name: "Stain Removal",
    tagline: "Targeted treatment to eliminate stubborn stains on any surface.",
    image: kitchenImage,
  },
  {
    id: "short-let-cleaning",
    name: "Short Let Cleaning",
    tagline: "Turnover-ready cleans for Airbnb and short-let properties.",
    image: domesticImage,
  },
  {
    id: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    tagline: "Dust, debris, and residue removal after building or renovation.",
    image: luxuryImage,
  },
];

export const roomOptions: RoomOption[] = [
  { id: "bedroom", label: "Bedroom" },
  { id: "bathroom", label: "Bathroom" },
  { id: "living-room", label: "Living Room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "small-room-study", label: "Small Room / Study" },
  { id: "hallway", label: "Hallway" },
  { id: "flight-of-stairs", label: "Flight of Stairs" },
];

export const applianceOptions: ApplianceOption[] = [
  { id: "oven", label: "Oven" },
  { id: "microwave", label: "Microwave" },
  { id: "dishwasher", label: "Dishwasher" },
  { id: "cupboard", label: "Cupboard" },
  { id: "toaster", label: "Toaster" },
  { id: "plate-rack", label: "Plate Rack" },
  { id: "air-fryer", label: "Air Fryer" },
  { id: "washing-machine", label: "Washing Machine" },
];
