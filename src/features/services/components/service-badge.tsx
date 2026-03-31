import React from "react";
import brushIcon from "@/assets/svgs/brush-icon.svg";
import Image from "next/image";

export const ServiceBadge = () => {
  return (
    <div className="flex items-center gap-2 bg-grey-3 px-4 py-1 rounded-sm">
      <Image src={brushIcon} alt="" />
      <p className="text-secondary tracking-widest font-manrope font-extrabold text-xs">
        Excellence Defined
      </p>
    </div>
  );
};
