"use client";

import React, { useLayoutEffect, useRef } from "react";
import specialistIcon from "@/assets/svgs/specialist-care.svg";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import Image from "next/image";
import { Col, Row } from "antd";
import specialistImage from "@/assets/svgs/specialist-big-image.svg";
import quoteIcon from "@/assets/svgs/quote-icon.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SpecialistCare = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-specialist-copy]", {
        autoAlpha: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from("[data-specialist-card]", {
        autoAlpha: 0,
        y: 42,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-specialist-card]",
          start: "top 76%",
          once: true,
        },
      });

      gsap.to("[data-quote-mark]", {
        yPercent: -10,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="mt-20 mb-28">
      <GeneralWrapper>
        <Row gutter={{ lg: 32 }}>
          <Col xs={24} lg={8} className="mb-10 lg:mb-0">
            <div>
              <div data-specialist-copy>
                <Image src={specialistIcon} alt="" />
              </div>
            </div>
            <div className="mt-8">
              <p
                data-specialist-copy
                className="font-manrope text-xl lg:text-2xl font-bold"
              >
                Specialist Care
              </p>
              <p
                data-specialist-copy
                className="text-black text-sm lg:text-base mt-4 mb-8"
              >
                Deep restoration services for marble, antique woods, and
                high-performance glass facades using surgical precision.
              </p>
              <div data-specialist-copy>
                <Image
                  src={specialistImage}
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </Col>
          <Col xs={24} lg={16}>
            <div
              data-specialist-card
              className="bg-surface-container-lowest h-full rounded-xl flex items-center shadow-[0_20px_50px_rgba(8,10,88,0.12)]"
            >
              <div className="lg:p-10 p-5 relative">
                <span
                  className="absolute lg:top-0 top-5 left-10"
                  data-quote-mark
                >
                  <Image src={quoteIcon} alt="" />
                </span>
                <p className="font-manrope font-bold text-base lg:text-xl">
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
