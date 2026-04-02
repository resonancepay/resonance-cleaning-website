"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { BannerBadge } from "./banner-badge";
import { Button } from "@/common/components/button";
import arrowRight from "@/assets/svgs/arrow-right.svg";
import trustIcon from "@/assets/svgs/trust-icon.svg";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const HomeBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set("[data-hero-copy]", { autoAlpha: 0, y: 32 });
      gsap.set("[data-hero-trust]", { autoAlpha: 0, y: 18, scale: 0.96 });
      gsap.set("[data-hero-bg]", { scale: 1.08 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to("[data-hero-bg]", {
          scale: 1,
          duration: 1.8,
        })
        .to(
          "[data-hero-copy]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=1.2",
        )
        .to(
          "[data-hero-trust]",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          "-=0.35",
        );

      gsap.to("[data-hero-trust]", {
        yPercent: -10,
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
    <section
      ref={sectionRef}
      className="home-banner-gradient relative flex h-screen min-h-screen w-full items-center overflow-hidden pt-20"
    >
      <div
        data-hero-bg
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,223,66,0.14),transparent_26%)]"
      />
      <GeneralWrapper>
        <div className="flex lg:w-1/2 sm:w-4/5   w-full flex-col items-start">
          <div data-hero-copy>
            <BannerBadge />
          </div>
          <p
            data-hero-copy
            className="mt-6 mb-8 lg:text-7xl text-5xl font-manrope font-extrabold leading-14 lg:leading-20 text-surface-container-lowest"
          >
            Bespoke <span className="text-accent-lime">Excellence</span> for the
            Modern Estate.
          </p>
          <p
            data-hero-copy
            className="mb-8  sm:w-4/5  w-full text-lg font-inter font-semibold text-surface-container-lowest/80"
          >
            Redefining the standards of luxury maintenance across the United
            Kingdom. Impeccable, quiet, and authoritative service tailored to
            your lifestyle.
          </p>
          <div
            data-hero-copy
            className="flex lg:flex-row flex-col items-start lg:items-center gap-4 w-full "
          >
            <Button
              rightIcon={arrowRight}
              variant="lime"
              className="py-4 lg:w-auto w-full"
            >
              Discover our services
            </Button>
            <Button variant="glass" className="py-4 lg:w-auto w-full">
              Request a Private Viewing
            </Button>
          </div>
        </div>
      </GeneralWrapper>

      <div
        className="absolute bottom-5 flex w-full items-center rounded-lg"
        data-hero-trust
      >
        <GeneralWrapper>
          <div className="flex justify-end w-full lg:w-auto ">
            <div className="flex items-center gap-3 w-full lg:w-auto rounded-xl border border-white/20 bg-white/10 p-4 lg:p-6 backdrop-blur-xl sm:border-transparent sm:bg-surface-container-lowest sm:backdrop-blur-0 sm:shadow-[0_20px_50px_rgba(8,10,88,0.14)]">
              <div>
                <Image src={trustIcon} alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs font-manrope font-bold text-white/60 sm:text-[#080A58] sm:opacity-60">
                  TRUST SCORE
                </p>
                <p className="mt-1 lg:text-xl text-sm font-manrope font-bold text-white sm:text-on-surface">
                  5-Star UK Standard
                </p>
              </div>
            </div>
          </div>
        </GeneralWrapper>
      </div>
    </section>
  );
};
