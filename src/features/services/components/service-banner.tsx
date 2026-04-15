"use client";

import { useLayoutEffect, useRef } from "react";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { ServiceBadge } from "./service-badge";
import gsap from "gsap";

export const ServiceBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from("[data-service-badge]", {
          autoAlpha: 0,
          y: 18,
          duration: 0.55,
        })
        .from(
          "[data-service-heading]",
          {
            autoAlpha: 0,
            y: 42,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.2",
        )
        .from(
          "[data-service-copy]",
          {
            autoAlpha: 0,
            x: 28,
            duration: 0.8,
          },
          "-=0.45",
        );

      gsap.to("[data-service-badge]", {
        yPercent: -8,
        duration: 2.6,
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
    <div
      ref={sectionRef}
      className="flex min-h-[60svh] flex-col justify-center py-18 lg:h-[50vh] lg:min-h-0 lg:py-0"
    >
      <GeneralWrapper>
        <div className="flex flex-col items-start">
          <div data-service-badge>
            <ServiceBadge />
          </div>
          <div className="mt-6 flex w-full flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="text-4xl font-manrope font-extrabold leading-[0.95] sm:text-5xl lg:text-7xl">
              <p data-service-heading className="text-on-surface">
                Our Bespoke
              </p>
              <p data-service-heading className="text-secondary">
                Cleaning Services
              </p>
            </div>
            <div className="flex w-full items-center justify-start lg:w-1/2 lg:justify-end">
              <p
                data-service-copy
                className="w-full max-w-none font-manrope text-base leading-8 text-on-surface/70 lg:w-1/2 lg:text-lg"
              >
                Room-by-room cleaning protocols for private homes, commercial
                spaces, and offices, delivered with discretion, precision, and
                a flawless finish.
              </p>
            </div>
          </div>
        </div>
      </GeneralWrapper>
    </div>
  );
};
