"use client";

import { ButtonLink } from "@/common/components/button";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export const CareersCta = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-cta-copy]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });

      gsap.from("[data-cta-button]", {
        autoAlpha: 0,
        y: 18,
        scale: 0.98,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-cta-button]", start: "top 86%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 lg:py-16">
      <GeneralWrapper>
        <div className="relative overflow-hidden rounded-[0.4rem] bg-primary px-6 py-18 text-center shadow-[0_24px_70px_rgba(8,10,88,0.18)] sm:px-10 lg:px-12 lg:py-22">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,223,66,0.08)_0%,transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04)_0%,transparent_26%)]" />

          <div data-cta-copy className="mx-auto flex max-w-[52rem] flex-col items-center">
            <p className="font-manrope text-[0.68rem] font-bold tracking-[0.34em] text-accent-lime">
              DON'T SEE YOUR ROLE?
            </p>
            <h2 className="mt-4 font-manrope text-3xl font-extrabold uppercase leading-[0.95] text-white sm:text-4xl lg:text-[3.2rem]">
              We Welcome Discreet Introductions
            </h2>
            <p className="mt-6 max-w-[34rem] font-manrope text-base leading-8 text-white/72 sm:text-lg">
              If you are a professional who holds yourself to an uncompromising
              standard, we would like to hear from you — even when we are not
              actively advertising.
            </p>
          </div>

          <div data-cta-button className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <ButtonLink
              href="/contact"
              variant="lime"
              className="min-w-[16rem] py-4 text-sm tracking-[0.28em]"
            >
              GET IN TOUCH
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="transparent"
              className="min-w-[16rem] py-4 text-sm tracking-[0.28em]"
            >
              ABOUT RESONANCE
            </ButtonLink>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-2 bg-accent-lime" />
        </div>
      </GeneralWrapper>
    </section>
  );
};
