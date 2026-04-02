import checkIcon from "@/assets/svgs/new-check-icon.svg";
import Image from "next/image";

type SubserviceWrapperProps = {
  text: string;
};

export const SubserviceWrapper = ({ text }: SubserviceWrapperProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="mt-0.5">
        <Image src={checkIcon} alt="check-icon" />
      </span>
      <p className="text-sm font-manrope text-on-surface/70">{text}</p>
    </div>
  );
};
