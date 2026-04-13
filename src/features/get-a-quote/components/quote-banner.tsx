"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const QuoteBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set("[data-quote-glow]", { scale: 0.82, opacity: 0.22 });
      gsap.set("[data-quote-art]", { autoAlpha: 0, x: 28, rotate: -2, scale: 0.96 });
      gsap.set("[data-quote-eyebrow]", { autoAlpha: 0, y: 18 });
      gsap.set("[data-quote-title]", { autoAlpha: 0, y: 42 });
      gsap.set("[data-quote-copy]", { autoAlpha: 0, y: 28 });
      gsap.set("[data-quote-chip]", { autoAlpha: 0, y: 14, scale: 0.92 });
      gsap.set("[data-quote-orb]", { scale: 0.72, opacity: 0.14 });
      gsap.set("[data-quote-card]", { autoAlpha: 0, y: 26, scale: 0.96 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to("[data-quote-glow]", {
          scale: 1,
          opacity: 0.4,
          duration: 1.4,
        })
        .to(
          "[data-quote-eyebrow]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.7",
        )
        .to(
          "[data-quote-title]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.08,
          },
          "-=0.45",
        )
        .to(
          "[data-quote-copy]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .to(
          "[data-quote-art]",
          {
            autoAlpha: 1,
            x: 0,
            rotate: 0,
            scale: 1,
            duration: 1,
          },
          "-=0.7",
        )
        .to(
          "[data-quote-chip]",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.55",
        )
        .to(
          "[data-quote-card]",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          "-=0.45",
        );

      gsap.to("[data-quote-glow]", {
        yPercent: -8,
        xPercent: 4,
        rotation: 6,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-quote-halo]", {
        scale: 1.08,
        opacity: 0.28,
        duration: 5.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-quote-orb]", {
        yPercent: -8,
        xPercent: 6,
        rotation: 12,
        duration: 6.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-quote-card]", {
        yPercent: -4,
        duration: 4.8,
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
      className="relative flex min-h-[60svh] flex-col justify-center overflow-hidden bg-primary py-18 lg:min-h-screen lg:py-0"
    >
      <div
        data-quote-glow
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(163,223,66,0.18),transparent_24%),radial-gradient(circle_at_84%_76%,rgba(184,245,86,0.1),transparent_20%),radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.08),transparent_26%)]"
      />
      <div
        data-quote-halo
        className="pointer-events-none absolute -right-16 top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_44%,transparent_74%)] blur-[2px] lg:h-72 lg:w-72"
      />
      <GeneralWrapper>
        <div className="relative flex w-full flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="w-full max-w-3xl lg:w-[54%]">
            <p
              data-quote-eyebrow
              className="text-accent-lime tracking-widest text-xs sm:text-sm"
            >
              Bespoke Concierge Services
            </p>
            <p
              data-quote-title
              className="mt-6 text-4xl font-manrope font-extrabold leading-tight sm:text-6xl lg:text-7xl lg:leading-20"
            >
              <span className="text-white">Request a Bespoke</span> <br />{" "}
              <span className="text-secondary">Quotation</span>
            </p>
            <p
              data-quote-copy
              className="mt-6 w-full max-w-xl text-base leading-8 text-white/70 sm:text-lg"
            >
              Experience the gold standard of estate management. Our tailored
              solutions are designed for those who demand excellence in every
              corner of their residence.
            </p>
          </div>

          <div
            data-quote-art
            className="relative w-full lg:w-[46%]"
            aria-hidden="true"
          >
            <div className="relative mx-auto flex min-h-[24rem] w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:min-h-[34rem] lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(163,223,66,0.22),transparent_18%),radial-gradient(circle_at_72%_70%,rgba(255,255,255,0.09),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06)_0%,transparent_28%,transparent_72%,rgba(255,255,255,0.05)_100%)]" />
              <div
                data-quote-orb
                className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(163,223,66,0.34)_0%,rgba(163,223,66,0.08)_42%,transparent_76%)] blur-[1px] lg:h-32 lg:w-32"
              />
              <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/12 bg-white/6 blur-[0.2px] lg:h-28 lg:w-28" />
              <div className="absolute bottom-10 left-8 h-28 w-28 rounded-full border border-white/8 bg-white/5 lg:h-40 lg:w-40" />

              <div className="relative z-10 grid w-full gap-4 lg:gap-5">
                {[
                  "Fast photo quotes",
                  "Room-by-room planning",
                  "Book with confidence",
                ].map((item) => (
                  <div
                    key={item}
                    data-quote-chip
                    className="mx-auto w-full max-w-sm rounded-[1.25rem] border border-white/14 bg-white/10 px-5 py-4 text-center text-sm font-inter font-semibold tracking-[0.02em] text-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}

                <div
                  data-quote-card
                  className="mx-auto mt-2 w-full max-w-sm rounded-[1.5rem] border border-white/14 bg-primary/35 px-5 py-5 text-white shadow-[0_24px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <p className="text-xs font-manrope font-bold uppercase tracking-[0.22em] text-white/55">
                    What to expect
                  </p>
                  <p className="mt-3 text-lg font-manrope font-bold leading-8 text-white">
                    A beautiful quote flow, then a clean that matches it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GeneralWrapper>
    </div>
  );
};
