import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";

import visionIcon from "@/assets/images/vision-image.png";
import Image from "next/image";
import shieldPlain from "@/assets/svgs/shield-plain.svg";
import React from "react";

export const VisionBanner = () => {
  return (
    <div className="flex items-center py-16 lg:h-screen lg:py-0">
      <GeneralWrapper>
        <Row gutter={{ lg: 32 }} align="middle">
          <Col xs={24} lg={10} className="mb-10 lg:mb-0 order-2 lg:order-1">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[34rem]">
                <Image src={visionIcon} alt="Elegantly cleaned interior space reflecting Resonance Cleaning's vision for precision and excellence" className="w-full" />
                <div className="absolute bottom-4 right-4 border-l-4 border-accent-lime bg-primary rounded-lg p-4 sm:p-6 lg:-bottom-6 lg:-right-12 lg:p-8">
                  <Image src={shieldPlain} alt="" />
                  <div className="mt-4">
                    <p className="text-white font-manrope font-bold text-lg">
                      UNCOMPROMISING <br /> STANDARDS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12} className="order-1 lg:order-2">
            <div className="flex  h-full flex-col justify-center">
              <h3 className="mb-8 font-manrope text-4xl font-extrabold text-primary">
                OUR VISION
              </h3>
              <div>
                <p className="font-manrope text-lg text-grey-4">
                  Resonance Cleaning Services was born from a singular
                  observation: the UK&apos;s finest homes and offices require
                  more than a standard cleaning service. They require a
                  meticulous, tailored approach — one that treats every
                  surface with precision and every commercial center, office,
                  and home with respect.
                </p>
                <p className="mt-4 font-manrope text-lg text-grey-4">
                  Our vision is to elevate residential and commercial cleaning
                  into a seamless, quietly excellent standard of care. We
                  believe real cleaning is found in the details.
                </p>

                <div className="mt-8 pt-12 border-t border-primary/10">
                  <Row gutter={[16, 16]}>
                    <Col xs={12}>
                      <h3 className="font-manrope text-4xl font-extrabold text-primary">
                        5-Star
                      </h3>
                      <p className="mt-1 font-manrope text-xs font-bold tracking-widest text-secondary">
                        SERVICE RATING
                      </p>
                    </Col>
                    <Col xs={12}>
                      <h3 className="font-manrope text-4xl font-extrabold text-primary">
                        100%
                      </h3>
                      <p className="mt-1 font-manrope text-xs font-bold tracking-widest text-secondary">
                        BESPOKE APPROACH
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
    </div>
  );
};
