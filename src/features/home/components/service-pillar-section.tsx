"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import React, { useLayoutEffect, useRef } from "react";
import arrowRight from "@/assets/svgs/arrow-right-short.svg";
import Image from "next/image";
import houseIcon from "@/assets/svgs/house-icon.svg";
import checkIcon from "@/assets/svgs/check-icon.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ServicePillarSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-pillar-header]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from("[data-pillar-card]", {
        autoAlpha: 0,
        y: 60,
        scale: 0.96,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-pillar-cards]",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from("[data-commercial-item]", {
        autoAlpha: 0,
        x: -18,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-commercial-list]",
          start: "top 82%",
          once: true,
        },
      });

      gsap.to("[data-domestic-card]", {
        backgroundPosition: "center, center, 58% center",
        duration: 6,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-domestic-card]",
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <GeneralWrapper>
      <div ref={sectionRef} className="py-24">
        <div>
          <h1
            data-pillar-header
            className="mb-3 text-4xl font-manrope font-bold text-on-surface"
          >
            Our Service Pillars
          </h1>
          <div className="flex items-center justify-between">
            <p data-pillar-header className="w-1/2 text-base text-black">
              We provide a spectrum of elite management solutions designed to
              maintain the architectural integrity and aesthetic purity of your
              most valued assets.
            </p>
            <p
              data-pillar-header
              className="text-sm font-manrope font-bold text-on-surface"
            >
              EXCELLENCE BY DESIGN
            </p>
          </div>
        </div>
        <Row gutter={32} className="mt-20" data-pillar-cards>
          <Col xs={16}>
            <div
              data-pillar-card
              data-domestic-card
              className="domestic-cleaning-bg flex h-125 flex-col items-start justify-end rounded-xl p-10"
            >
              <p className="font-manrope text-4xl text-white font-bold">
                Domestic Estates
              </p>
              <p className="my-6 w-1/2 text-surface-container-low text-base font-inter">
                Personalized residential upkeep focused on delicate surfaces,
                fine art preservation, and routine hospitality- grade cleaning.
              </p>
              <button className="flex items-center gap-2">
                <p className="text-accent-lime font-inter font-semibold text-base">
                  Explore Bespoke Plans
                </p>
                <Image src={arrowRight} alt="" />
              </button>
            </div>
          </Col>
          <Col xs={8}>
            <div
              data-pillar-card
              className="flex h-full flex-col rounded-xl bg-on-surface p-10"
            >
              <Image src={houseIcon} alt="" />
              <h3 className="mt-8 font-manrope text-4xl font-bold text-white">
                Commercial Luxury
              </h3>
              <div className="flex flex-1 flex-col justify-between">
                <p className="text-surface-container-low text-base mt-4 w-4/5">
                  Elevating corporate environments to reflect brand prestige,
                  from executive boardrooms to boutique lobbies.
                </p>
                <div
                  data-commercial-list
                  className="flex w-full flex-col gap-4 border-t border-[rgba(225,225,225,0.1)] pt-8"
                >
                  <div data-commercial-item className="flex items-center gap-3">
                    <Image src={checkIcon} alt="" />
                    <p className="text-surface-container-lowest text-sm">
                      After-hours Discretion
                    </p>
                  </div>
                  <div data-commercial-item className="flex items-center gap-3">
                    <Image src={checkIcon} alt="" />
                    <p className="text-surface-container-lowest text-sm">
                      After-hours Discretion
                    </p>
                  </div>
                  <div data-commercial-item className="flex items-center gap-3">
                    <Image src={checkIcon} alt="" />
                    <p className="text-surface-container-lowest text-sm">
                      After-hours Discretion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </GeneralWrapper>
  );
};
