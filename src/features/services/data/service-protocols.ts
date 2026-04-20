import type { StaticImageData } from "next/image";
import bathroomImage from "@/assets/images/bathroom-3.jpg";
import sittingRoomImage from "@/assets/images/sitting-room.jpg";
import kitchenImage from "@/assets/images/kitchen.jpg";
import bedroomImage from "@/assets/images/bedroom.jpg";

export type ServiceProtocol = {
  slug: string;
  serviceName: string;
  keyAreas: string[];
  specialFocus: string[];
  image: StaticImageData;
};

export const serviceProtocols: ServiceProtocol[] = [
  {
    slug: "bathroom-cleaning",
    image: bathroomImage,
    keyAreas: [
      "Toilet (seat, bowl, base, flush handle)",
      "Sink & faucet",
      "Shower area / bathtub",
      "Tiles & grout",
      "Mirrors & glass surfaces",
      "Bathroom cabinets & shelves",
      "Floor (sweeping & mopping)",
      "Door handles & light switches",
    ],
    serviceName: "Bathroom Cleaning",
    specialFocus: [
      "Disinfection of high-touch areas",
      "Mould & mildew removal",
      "Drain cleaning",
    ],
  },
  {
    slug: "sitting-room-cleaning",
    image: sittingRoomImage,
    keyAreas: [
      "Sofas & cushions (vacuuming/wiping)",
      "Coffee tables & side tables",
      "TV stand & electronics (dusting)",
      "Shelves & decor items",
      "Carpets & rugs",
      "Curtains & blinds",
      "Windows & window sills",
      "Floor (sweeping, mopping, or vacuuming)",
    ],
    serviceName: "Sitting Room",
    specialFocus: [
      "Dust removal",
      "Upholstery cleaning",
      "Odor control",
    ],
  },
  {
    slug: "kitchen-cleaning",
    image: kitchenImage,
    keyAreas: [
      "Sink & tap",
      "Countertops",
      "Stove / cooktop",
      "Oven & microwave (if included)",
      "Cabinets (inside & outside)",
      "Refrigerator (optional deep clean)",
      "Dish rack & surfaces",
      "Floor",
    ],
    serviceName: "Kitchen Cleaning",
    specialFocus: [
      "Grease removal",
      "Food stain cleaning",
      "Sanitization of food prep areas",
    ],
  },
  {
    slug: "bedroom-cleaning",
    image: bedroomImage,
    keyAreas: [
      "Bed & mattress (dusting/arranging)",
      "Wardrobe & drawers (external/internal optional)",
      "Bedside tables",
      "Mirrors",
      "Windows & curtains",
      "Carpets or floors",
      "Light switches & door handles",
    ],
    serviceName: "Bedroom Cleaning",
    specialFocus: [
      "Dusting & air freshness",
      "Organization (optional add-on)",
      "Linen changing",
    ],
  },
];

export const findServiceProtocolBySlug = (slug?: string | null) =>
  serviceProtocols.find((service) => service.slug === slug) ?? null;

