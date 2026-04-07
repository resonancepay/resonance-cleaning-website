import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";

import visionIcon from "@/assets/images/vision-image.png";
import Image from "next/image";
import shieldPlain from "@/assets/svgs/shield-plain.svg";
import React from "react";

export const VisionBanner = () => {
  return (
    <div className="h-screen flex items-center">
      <GeneralWrapper>
        <Row>
          <Col xs={10}>
            <div className=" items-center  flex justify-center ">
              <div className="relative">
                <Image src={visionIcon} alt="" />
                <div className="absolute border-l-4 border-accent-lime -bottom-6 -right-12 p-8 bg-primary rounded-lg">
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
          <Col xs={12}>
            <div className="flex  h-full flex-col justify-center">
              <h3 className="text-primary font-manrope font-extrabold text-4xl mb-8">
                THE VISION
              </h3>
              <div>
                <p className="text-lg font-manrope text-grey-4">
                  The Polished Estate was born from a singular observation: the
                  UK&apos;s most prestigious residences require more than a
                  standard cleaning service. They require a bespoke concierge
                  approach that treats every surface with archival care.
                </p>
                <p className="text-lg font-manrope text-grey-4 mt-4">
                  Our vision is to elevate domestic service into a seamless,
                  invisible art form. We believe that true luxury is found in
                  the details—the perfectly aligned cushion, the streak-free
                  crystal, and the peace of mind that comes from total
                  professional reliability.
                </p>

                <div className="mt-8 pt-12 border-t border-primary/10">
                  <Row>
                    <Col xs={12}>
                      <h3 className="text-primary text-4xl font-manrope font-extrabold">
                        5-Star
                      </h3>
                      <p className="text-secondary text-xs tracking-widest mt-1 font-manrope font-bold">
                        SERVICE RATING
                      </p>
                    </Col>
                    <Col xs={12}>
                      <h3 className="text-primary text-4xl font-manrope font-extrabold">
                        100%
                      </h3>
                      <p className="text-secondary text-xs tracking-widest mt-1 font-manrope font-bold">
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
