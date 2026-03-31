import checkIcon from "@/assets/svgs/new-check-icon.svg";
import Image from "next/image";

export const SubserviceWrapper = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="mt-0.5">
        <Image src={checkIcon} alt="check-icon" />
      </span>
      <p
        className="text-on-surface/70 font-manrope
       text-sm"
      >
        Toilet (seat, bowl, base, flush handle)
      </p>
    </div>
  );
};
