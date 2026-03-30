"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import businesLogo from "@/assets/images/business-1.png";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ProudMember = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-proud-copy]", {
        autoAlpha: 0,
        y: 22,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from("[data-proud-logo]", {
        autoAlpha: 0,
        scale: 0.82,
        rotate: -6,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.to("[data-proud-logo]", {
        yPercent: -6,
        duration: 2.8,
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
    <div ref={sectionRef} className="bg-primary py-20 border-t border-white/10">
      <GeneralWrapper>
        <div className="flex items-center flex-col justify-center">
          <p
            data-proud-copy
            className="text-white/60 text-center tracking-widest font-manrope text-xs font-bold"
          >
            PROUD MEMBER OF THE
          </p>
          <div data-proud-logo className="bg-brand-muted my-6">
            <Image
              src={businesLogo}
              alt=""
              className="w-30 h-30 aspect-square"
            />
          </div>
          <div data-proud-copy className="w-[40%]">
            <p className="text-center text-white/80">
              The Polished Estate is a specialist division of the Resonance
              Business Group, committed to excellence across luxury sectors.
            </p>
          </div>
        </div>
      </GeneralWrapper>
    </div>
  );
};
