"use client";

import { ButtonLink } from "@/common/components/button";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export const AboutSubFooter = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-subfooter-copy]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from("[data-subfooter-button]", {
        autoAlpha: 0,
        y: 18,
        scale: 0.98,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-subfooter-button]",
          start: "top 86%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-10 lg:py-16">
      <GeneralWrapper>
        <div className="relative overflow-hidden rounded-[0.4rem] bg-primary px-6 py-18 text-center shadow-[0_24px_70px_rgba(8,10,88,0.18)] sm:px-10 lg:px-12 lg:py-22">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,223,66,0.08)_0%,transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04)_0%,transparent_26%)]" />
          <div
            data-subfooter-copy
            className="mx-auto flex max-w-[58rem] flex-col items-center"
          >
            <h2 className="font-manrope text-3xl font-extrabold uppercase leading-[0.95] text-white sm:text-4xl lg:text-[3.5rem]">
              Experience the Transformation
            </h2>
            <p className="mt-6 max-w-[34rem] font-manrope text-base leading-8 text-white/72 sm:text-lg">
              Allow us to introduce our standards to your home. Book a
              consultation for a bespoke management plan.
            </p>
          </div>

          <div
            data-subfooter-button
            className="mt-10 flex items-center justify-center"
          >
            <ButtonLink
              href="/get-a-quote"
              variant="lime"
              className="min-w-[16rem] py-4 text-sm tracking-[0.28em]"
            >
              REQUEST A QUOTE
            </ButtonLink>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-2 bg-accent-lime" />
        </div>
      </GeneralWrapper>
    </section>
  );
};
