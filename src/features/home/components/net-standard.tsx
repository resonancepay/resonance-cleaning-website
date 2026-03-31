"use client";

import { Button } from "@/common/components/button";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const NetStandard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-net-copy]", {
        autoAlpha: 0,
        y: 34,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
          once: true,
        },
      });

      gsap.from("[data-net-cta]", {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-net-actions]",
          start: "top 84%",
          once: true,
        },
      });

      gsap.to("[data-net-lime]", {
        duration: 1.8,
        repeat: -1,
        ease: "power1.out",
        keyframes: [
          { boxShadow: "0 0 0 0 rgba(163,223,66,0.35)" },
          { boxShadow: "0 0 0 12px rgba(163,223,66,0)" },
        ],
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-32 bg-primary flex items-center justify-center"
    >
      <GeneralWrapper>
        <Row justify={"center"}>
          <Col lg={12} xs={24}>
            <p
              data-net-copy
              className="font-manrope font-extrabold text-5xl text-surface-container-lowest text-center"
            >
              Ready for a New Standard?
            </p>
            <p data-net-copy className="text-center text-white/80 mt-8 text-xl">
              Your estate deserves a level of care that matches its prestige.
              Connect with our advisors to curate your custom management plan.
            </p>
            <div
              data-net-actions
              className="mt-8 flex lg:flex-row flex-col items-center justify-center gap-4"
            >
              <div data-net-cta data-net-lime className="w-full lg:w-auto">
                <Button className="py-4 w-full lg:w-auto " variant="lime">
                  Start Your Inquiry
                </Button>
              </div>
              <div data-net-cta className="w-full lg:w-auto">
                <Button className="w-full lg:w-auto" variant="glass">Download Brochure</Button>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
    </div>
  );
};
