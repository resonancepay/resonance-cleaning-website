import type { StaticImageData } from "next/image";
import commercialHeroImage from "@/assets/images/commercial-hero.jpg";
import domesticHeroImage from "@/assets/images/domestic-hero.jpg";
import specialHeroImage from "@/assets/images/special-hero.jpg";

// Domestic service images
import svcGeneralHousekeeping from "@/assets/images/svc-general-housekeeping.jpg";
import svcStandardCleaning from "@/assets/images/svc-standard-cleaning.jpg";
import svcDeepCleaning from "@/assets/images/svc-deep-cleaning.jpg";
import svcFlooringClean from "@/assets/images/svc-flooring-clean.jpg";
import svcMoveInOut from "@/assets/images/svc-move-in-out.jpg";
import svcEndOfTenancy from "@/assets/images/svc-end-of-tenancy.jpg";
import svcDrapesCurtain from "@/assets/images/svc-drapes-curtain.jpg";
import svcMattressCleaning from "@/assets/images/svc-mattress-cleaning.jpg";
import svcCarpetCleaning from "@/assets/images/svc-carpet-cleaning.jpg";
import svcCarpetTenancy from "@/assets/images/svc-carpet-tenancy.jpg";
import svcDustPolish from "@/assets/images/svc-dust-polish.jpg";

// Commercial segment images
import svcOffices from "@/assets/images/svc-offices.jpg";
import svcCareHomes from "@/assets/images/svc-care-homes.jpg";
import svcBeautySalons from "@/assets/images/svc-beauty-salons.jpg";
import svcFitnessCentres from "@/assets/images/svc-fitness-centres.jpg";

// Special service images
import svcWindowCleaning from "@/assets/images/svc-window-cleaning.jpg";
import svcUpholsteryCleaning from "@/assets/images/svc-upholstery-cleaning.jpg";
import svcIroning from "@/assets/images/svc-ironing.jpg";
import svcRugShampooing from "@/assets/images/svc-rug-shampooing.jpg";
import svcStainRemoval from "@/assets/images/svc-stain-removal.jpg";
import svcShortLet from "@/assets/images/svc-short-let.jpg";
import svcPostConstruction from "@/assets/images/svc-post-construction.jpg";

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
    image: svcGeneralHousekeeping,
  },
  {
    id: "standard-cleaning",
    name: "Standard Cleaning",
    tagline: "A thorough clean covering all key areas of the home.",
    image: svcStandardCleaning,
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    tagline: "An intensive top-to-bottom clean for a truly fresh start.",
    image: svcDeepCleaning,
  },
  {
    id: "flooring-clean",
    name: "Flooring Clean",
    tagline: "Expert treatment for all floor types — hardwood, tile, or carpet.",
    image: svcFlooringClean,
  },
  {
    id: "move-in-move-out",
    name: "Move In / Move Out",
    tagline: "Seamless cleaning before you settle in or hand over the keys.",
    image: svcMoveInOut,
  },
  {
    id: "end-of-tenancy-deep-clean",
    name: "End of Tenancy Deep Clean",
    tagline: "Deposit-ready results that meet letting agent standards.",
    image: svcEndOfTenancy,
  },
  {
    id: "drapes-curtain-cleaning",
    name: "Drapes & Curtain Cleaning",
    tagline: "Gentle specialist care to restore fabric freshness.",
    image: svcDrapesCurtain,
  },
  {
    id: "mattress-cleaning",
    name: "Mattress Cleaning",
    tagline: "Deep sanitisation for a hygienic, allergen-free sleep.",
    image: svcMattressCleaning,
  },
  {
    id: "general-carpet-cleaning",
    name: "General Carpet Cleaning",
    tagline: "Revitalise carpets and remove everyday dirt and stains.",
    image: svcCarpetCleaning,
  },
  {
    id: "carpet-cleaning-end-of-tenancy",
    name: "Carpet Cleaning (End of Tenancy)",
    tagline: "Tenancy-standard carpet restoration for a full deposit return.",
    image: svcCarpetTenancy,
  },
  {
    id: "dust-and-polish",
    name: "Dust and Polish",
    tagline: "A meticulous dust and polish pass across all surfaces.",
    image: svcDustPolish,
  },
];

export const commercialSegments: CommercialSegment[] = [
  {
    id: "offices",
    name: "Offices",
    description:
      "Regular and deep-clean contracts for professional workspaces, keeping your team in a pristine environment.",
    image: svcOffices,
  },
  {
    id: "care-homes",
    name: "Care Homes",
    description:
      "Clinical-grade hygiene standards to ensure safe, comfortable conditions for residents and staff.",
    image: svcCareHomes,
  },
  {
    id: "beauty-salons",
    name: "Beauty Salons",
    description:
      "Immaculate salon cleaning that reflects the premium standards your clients expect.",
    image: svcBeautySalons,
  },
  {
    id: "fitness-centres",
    name: "Fitness Centres",
    description:
      "High-frequency sanitisation of equipment, changing rooms, and common areas for a healthy facility.",
    image: svcFitnessCentres,
  },
];

export const specialServices: SpecialService[] = [
  {
    id: "window-cleaning",
    name: "Interior & Exterior Window Cleaning",
    tagline: "Crystal-clear results inside and out, at any height.",
    image: svcWindowCleaning,
  },
  {
    id: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    tagline: "Deep-clean and refresh sofas, chairs, and fabric surfaces.",
    image: svcUpholsteryCleaning,
  },
  {
    id: "ironing-services",
    name: "Ironing Services",
    tagline: "Crisp, perfectly pressed garments and linens.",
    image: svcIroning,
  },
  {
    id: "rug-shampooing",
    name: "Rug Shampooing",
    tagline: "Restore colour, texture, and freshness to all rug types.",
    image: svcRugShampooing,
  },
  {
    id: "stain-removal",
    name: "Stain Removal",
    tagline: "Targeted treatment to eliminate stubborn stains on any surface.",
    image: svcStainRemoval,
  },
  {
    id: "short-let-cleaning",
    name: "Short Let Cleaning",
    tagline: "Turnover-ready cleans for Airbnb and short-let properties.",
    image: svcShortLet,
  },
  {
    id: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    tagline: "Dust, debris, and residue removal after building or renovation.",
    image: svcPostConstruction,
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
