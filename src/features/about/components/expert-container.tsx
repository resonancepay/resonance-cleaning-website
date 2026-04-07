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
        <div className="min-h-[80vh] h-[80vh] flex-col flex items-center justify-center bg-grey-5">
          <div>
            <h1 className="font-manrope font-extrabold text-primary text-4xl text-center">
              OUR EXPERT TEAM
            </h1>
            <p className="text-grey-4 font-manrope font-medium text-base w-[70%] mx-auto text-center mt-4">
              Selected for their discretion, trained for precision, and
              committed to the highest tier of service excellence.
            </p>
          </div>
          <div className="mt-18 w-full">
            <Row gutter={32}>
              <Col xs={8}>
                <div className="bg-white w-full p-12 rounded-sm">
                  <Image src={shieldGrey} alt="" />
                  <p className="tracking-widest mt-8 mb-4 text-primary text-sm font-manrope font-extrabold">
                    DBS CERTIFIED
                  </p>
                  <p className="font-manrope text-grey-4 leading-6">
                    Every member of our staff undergoes rigorous background
                    checks and enhanced DBS certification to ensure absolute
                    security for your home and family.
                  </p>
                </div>
              </Col>
              <Col xs={8}>
                <div className="bg-primary border-b-4 border-secondary w-full p-12 rounded-sm relative -top-6">
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
              <Col xs={8}>
                <div className="bg-white w-full p-12 rounded-sm">
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
