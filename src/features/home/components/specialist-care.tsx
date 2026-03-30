import React from "react";
import specialistIcon from "@/assets/svgs/specialist-care.svg";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import Image from "next/image";
import { Col, Row } from "antd";
import specialistImage from "@/assets/svgs/specialist-big-image.svg";
import quoteIcon from "@/assets/svgs/quote-icon.svg";

export const SpecialistCare = () => {
  return (
    <div className="mt-20">
      <GeneralWrapper>
        <Row gutter={32}>
          <Col xs={8}>
            <div>
              <Image src={specialistIcon} alt="" />
            </div>
            <div className="mt-8">
              <p className="font-manrope text-2xl font-bold">Specialist Care</p>
              <p className="text-black text-base mt-4 mb-8">
                Deep restoration services for marble, antique woods, and
                high-performance glass facades using surgical precision.
              </p>
              <div>
                <Image
                  src={specialistImage}
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </Col>
          <Col xs={16}>
            <div className="bg-surface-container-lowest h-full rounded-xl flex items-center shadow-[0_20px_50px_rgba(8,10,88,0.12)]">
              <div className="p-10 relative">
                <span className="absolute top-0 left-10">
                  <Image src={quoteIcon} alt="" />
                </span>
                <p className="font-manrope font-bold text-xl">
                  &apos;&apos;The Polished Estate has completely transformed our
                  London townhouse management. Their team operates like a
                  high-end concierge service—invisible yet
                  impactful.&apos;&apos;
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full aspect-square bg-grey"></div>
                  <div>
                    <p className="text-sm font-manrope font-bold">
                      JAMES HARRINGTON
                    </p>
                    <div className="mt-1">
                      <p className="text-xs">Private Estate Owner, Kesington</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
    </div>
  );
};
