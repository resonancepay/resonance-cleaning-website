import React from "react";
import starIcon from "@/assets/svgs/star-icon.svg";
import Image from "next/image";

export const BannerBadge = () => {
  return (
    <div className="bg-foreground px-4 py-2 rounded-full flex gap-2">
      <Image src={starIcon} alt="star icon" />
      <p className="text-accent-lime text-xs font-manrope font-bold">
        The Resonance Standard
      </p>
    </div>
  );
};
