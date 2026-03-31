"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import bathroomImage from "@/assets/images/bathroom-3.jpg";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { SubserviceWrapper } from "./subservice-wrapper";
import { Button } from "@/common/components/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ServiceContainer = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-service-image-wrap]", {
        autoAlpha: 0,
        y: 40,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          once: true,
        },
      });

      gsap.from("[data-service-content]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
          once: true,
        },
      });

      gsap.from("[data-subservice-item]", {
        autoAlpha: 0,
        x: -18,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-subservice-list]",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from("[data-service-button]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-service-button]",
          start: "top 88%",
          once: true,
        },
      });

      gsap.fromTo(
        "[data-service-image]",
        { scale: 1.08, yPercent: 0 },
        {
          scale: 1,
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <GeneralWrapper>
        <Row gutter={{ lg: 64 }}>
          <Col xs={14}>
            <div data-service-image-wrap className="overflow-hidden rounded-lg">
              <Image
                data-service-image
                className="w-full object-cover h-150 rounded-lg"
                src={bathroomImage}
                alt=""
              />
            </div>
          </Col>
          <Col xs={8}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <h1
                  data-service-content
                  className="text-4xl font-manrope font-extrabold"
                >
                  Bathroom Sanitation
                </h1>
                <div className="mt-6">
                  <h3
                    data-service-content
                    className="tracking-widest text-secondary text-xs font-manrope font-bold"
                  >
                    KEY FOCUS AREA
                  </h3>
                  <div data-subservice-list className="mt-5 flex flex-col gap-4">
                    <div data-subservice-item>
                      <SubserviceWrapper />
                    </div>
                    <div data-subservice-item>
                      <SubserviceWrapper />
                    </div>
                    <div data-subservice-item>
                      <SubserviceWrapper />
                    </div>
                    <div data-subservice-item>
                      <SubserviceWrapper />
                    </div>
                    <div data-subservice-item>
                      <SubserviceWrapper />
                    </div>
                    <div data-subservice-item>
                      <SubserviceWrapper />
                    </div>
                  </div>
                  <div
                    data-service-content
                    className="mt-8 p-6 bg-grey-3 border-l-2 rounded-lg border-secondary"
                  >
                    <div>
                      <h4 className="font-manrope text-xs font-extrabold">
                        SPECIAL FOCUS
                      </h4>
                      <p className="mt-2 text-primary/70 font-manrope">
                        Clinical-grade disinfection of high-touch areas,
                        intensive mold & mildew removal, and comprehensive drain
                        cleaning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-service-button>
                <Button className="py-4 w-full">Book Bathroom Service</Button>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
    </section>
  );
};
