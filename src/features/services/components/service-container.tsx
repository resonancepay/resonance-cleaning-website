"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { SubserviceWrapper } from "./subservice-wrapper";
import { Button } from "@/common/components/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { StaticImageData } from "next/image";

type ServiceContainerProps = {
  image: StaticImageData;
  serviceName: string;
  keyAreas: string[];
  specialFocus: string[];
  isReversed?: boolean;
  onOpenDetails?: () => void;
  revealImmediately?: boolean;
};

export const ServiceContainer = ({
  image,
  keyAreas,
  serviceName,
  specialFocus,
  isReversed = false,
  onOpenDetails,
  revealImmediately = false,
}: ServiceContainerProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    if (revealImmediately) {
      const imageWrap = sectionRef.current.querySelector("[data-service-image-wrap]");
      const contentTargets = sectionRef.current.querySelectorAll("[data-service-content]");
      const subserviceTargets = sectionRef.current.querySelectorAll("[data-subservice-item]");
      const buttonTarget = sectionRef.current.querySelector("[data-service-button]");
      const imageTarget = sectionRef.current.querySelector("[data-service-image]");

      gsap.set(
        [
          imageWrap,
          ...contentTargets,
          ...subserviceTargets,
          buttonTarget,
          imageTarget,
        ].filter(Boolean),
        { clearProps: "all" },
      );

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (imageWrap) {
        timeline.fromTo(
          imageWrap,
          { autoAlpha: 0, y: 28, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 },
        );
      }

      if (contentTargets.length > 0) {
        timeline.fromTo(
          contentTargets,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 },
          imageWrap ? "-=0.3" : 0,
        );
      }

      if (subserviceTargets.length > 0) {
        timeline.fromTo(
          subserviceTargets,
          { autoAlpha: 0, x: -12 },
          { autoAlpha: 1, x: 0, duration: 0.35, stagger: 0.04 },
          "-=0.18",
        );
      }

      if (buttonTarget) {
        timeline.fromTo(
          buttonTarget,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.35 },
          "-=0.12",
        );
      }

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
  }, [revealImmediately]);

  return (
    <section ref={sectionRef} className="py-6 lg:py-12">
      <GeneralWrapper>
        <Row gutter={{ xs: 24, lg: 64 }}>
          <Col xs={24} lg={14} className={isReversed ? "lg:order-2" : ""}>
            <div data-service-image-wrap className="overflow-hidden rounded-lg">
              <Image
                data-service-image
                className="h-70 w-full rounded-lg object-cover sm:h-96 lg:h-150"
                src={image}
                alt={serviceName}
              />
            </div>
          </Col>
          <Col xs={24} lg={8} className={isReversed ? "lg:order-1" : ""}>
            <div className="flex h-full flex-col justify-between pt-6 lg:pt-0">
              <div>
                <h1
                  data-service-content
                  className="text-2xl font-manrope font-extrabold sm:text-3xl lg:text-4xl"
                >
                  {serviceName}
                </h1>
                <div className="mt-6">
                  <h3
                    data-service-content
                    className="tracking-widest text-secondary text-xs font-manrope font-bold"
                  >
                    KEY FOCUS AREA
                  </h3>
                  <div data-subservice-list className="mt-5 flex flex-col gap-4">
                    {keyAreas.map((item) => (
                      <div key={item} data-subservice-item>
                        <SubserviceWrapper text={item} />
                      </div>
                    ))}
                  </div>
                  <div
                    data-service-content
                    className="mt-8 rounded-lg border-l-2 border-secondary bg-grey-3 p-4 sm:p-6"
                  >
                    <div>
                      <h4 className="font-manrope text-xs font-extrabold">
                        SPECIAL FOCUS
                      </h4>
                      <div className="mt-3 flex flex-col gap-2">
                        {specialFocus.map((item) => (
                          <p key={item} className="font-manrope text-sm text-primary/70 sm:text-base">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-service-button className="mt-8 lg:mt-6">
                <Button className="w-full py-4" onClick={onOpenDetails}>
                  Book {serviceName}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
    </section>
  );
};
