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
    <div ref={sectionRef} className="h-[50vh] flex flex-col justify-center">
      <GeneralWrapper>
        <div className="flex flex-col items-start">
          <div data-service-badge>
            <ServiceBadge />
          </div>
          <div className="flex items-end justify-between mt-6">
            <div className="text-7xl font-manrope font-extrabold">
              <p data-service-heading className="text-on-surface">
                Our Bespoke
              </p>
              <p data-service-heading className="text-secondary ">
                Cleaning Protocols
              </p>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <p
                data-service-copy
                className="text-on-surface/70 w-1/2  font-manrope text-lg"
              >
                Meticulously designed maintenance protocols tailored for the
                most discerning residential environments, room by room.
              </p>
            </div>
          </div>
        </div>
      </GeneralWrapper>
    </div>
  );
};
