import { Col, Row } from "antd";
import React from "react";
import shieldGrey from "@/assets/svgs/shield-grey.svg";
import shieldVariant from "@/assets/svgs/shield-variant.svg";
import Image from "next/image";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import greenBadge from "@/assets/svgs/green-badge.svg";

export const ExperContainer = () => {
  return (
    <>
      <GeneralWrapper>
        <div className="flex flex-col items-center justify-center bg-grey-5 py-16 lg:min-h-[80vh] lg:h-[80vh] lg:py-0">
          <div>
            <h1 className="text-center font-manrope text-4xl font-extrabold text-primary">
              OUR EXPERT TEAM
            </h1>
            <p className="mx-auto mt-4 w-full max-w-2xl text-center font-manrope text-base font-medium text-grey-4">
              Selected for their discretion, trained for precision, and
              committed to the highest tier of cleaning excellence.
            </p>
          </div>
          <div className="mt-12 w-full lg:mt-18">
            <Row gutter={[32, 24]}>
              <Col xs={24} lg={8}>
                <div className="w-full rounded-sm bg-white p-8 sm:p-10 lg:p-12">
                  <Image src={shieldGrey} alt="" />
                  <p className="tracking-widest mt-8 mb-4 text-primary text-sm font-manrope font-extrabold">
                    DBS CERTIFIED
                  </p>
                  <p className="font-manrope text-grey-4 leading-6">
                    Every member of our staff undergoes rigorous background
                    checks and enhanced DBS certification to ensure absolute
                    security for your home, office, or commercial centre.
                  </p>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="relative w-full rounded-sm border-b-4 border-secondary bg-primary p-8 sm:p-10 lg:-top-6 lg:p-12">
                  <Image src={greenBadge} alt="" />
                  <p className="tracking-widest mt-8 mb-4 text-white text-sm font-manrope font-extrabold">
                    Elite Training
                  </p>
                  <p className="font-manrope text-white/80 leading-6">
                    Our professionals are trained in the specific care
                    requirements of high-value materials, from rare marble to
                    bespoke joinery and delicate textiles.
                  </p>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="w-full rounded-sm bg-white p-8 sm:p-10 lg:p-12">
                  <Image src={shieldVariant} alt="" />
                  <p className="tracking-widest mt-8 mb-4 text-primary text-sm font-manrope font-extrabold">
                    Discreet Presence
                  </p>
                  <p className="font-manrope text-grey-4 leading-6">
                    We operate with the quiet efficiency of a world-class butler
                    service, respecting your privacy and the sanctity of your
                    private sanctuary.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </GeneralWrapper>
    </>
  );
};
