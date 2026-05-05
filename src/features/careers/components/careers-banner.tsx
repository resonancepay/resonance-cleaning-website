"use client";

import { ButtonLink } from "@/common/components/button";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const stats = [
  { value: "100%", label: "DBS VETTED" },
  { value: "5★", label: "SERVICE RATING" },
  { value: "UK", label: "BASED TEAM" },
];

export const CareersBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set("[data-careers-line]", { scaleX: 0, transformOrigin: "left center" });
      gsap.set("[data-careers-copy]", { autoAlpha: 0, y: 24 });
      gsap.set("[data-careers-stat]", { autoAlpha: 0, y: 18 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to("[data-careers-line]", { scaleX: 1, duration: 0.6 })
        .to("[data-careers-copy]", { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12 }, "-=0.2")
        .to("[data-careers-stat]", { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-banner-gradient relative flex min-h-[90vh] w-full items-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,223,66,0.12),transparent_30%)]" />
      <GeneralWrapper>
        <div className="flex w-full flex-col items-start lg:max-w-[60%]">
          <div data-careers-copy className="mb-6 flex items-center gap-3">
            <span data-careers-line className="h-px w-12 bg-accent-lime/80" />
            <p className="font-manrope text-[0.68rem] font-bold tracking-[0.34em] text-accent-lime">
              JOIN OUR TEAM
            </p>
          </div>

          <h1
            data-careers-copy
            className="mb-6 font-manrope text-5xl font-extrabold leading-[1.08] text-white lg:text-7xl"
          >
            Work at the{" "}
            <span className="text-accent-lime">Highest</span>{" "}
            Standard
          </h1>

          <p
            data-careers-copy
            className="mb-10 w-full font-inter font-semibold text-lg text-white/75 sm:w-4/5"
          >
            We are building a team of precision-focused professionals who take
            pride in the details. If you value discretion, craftsmanship, and
            care, we want to hear from you.
          </p>

          <div data-careers-copy className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="lime" className="py-4 px-8">
              EXPRESS INTEREST
            </ButtonLink>
            <ButtonLink href="#open-roles" variant="transparent" className="py-4 px-8">
              VIEW OPEN ROLES
            </ButtonLink>
          </div>

          <div className="mt-14 flex items-center gap-10 border-t border-white/10 pt-10">
            {stats.map((stat) => (
              <div key={stat.label} data-careers-stat>
                <p className="font-manrope text-3xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 font-manrope text-[0.65rem] font-bold tracking-[0.26em] text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GeneralWrapper>
    </section>
  );
};
