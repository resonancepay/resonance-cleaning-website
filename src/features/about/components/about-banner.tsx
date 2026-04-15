"use client";

import { ButtonLink } from "@/common/components/button";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const AboutBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set("[data-about-copy]", { autoAlpha: 0, y: 24 });
      gsap.set("[data-about-panel]", { autoAlpha: 0, x: 34, scale: 0.97 });
      gsap.set("[data-about-left-track]", { yPercent: 0 });
      gsap.set("[data-about-orb]", { scale: 1.08, opacity: 0.45 });
      gsap.set("[data-about-chip]", { autoAlpha: 0, y: 14 });
      gsap.set("[data-about-feature]", { autoAlpha: 0, x: -18, y: 16 });
      gsap.set("[data-about-line]", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to("[data-about-line]", { scaleX: 1, duration: 0.6 })
        .to(
          "[data-about-copy]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
          },
          "-=0.15",
        )
        .to(
          "[data-about-panel]",
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1,
          },
          "-=0.55",
        )
        .to(
          "[data-about-chip]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.55",
        )
        .to(
          "[data-about-feature]",
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.55",
        )
        .to(
          "[data-about-left-track]",
          {
            yPercent: -50,
            duration: 24,
            ease: "none",
            repeat: -1,
          },
          "-=0.45",
        );

      gsap.to("[data-about-orb]", {
        yPercent: -6,
        xPercent: 2,
        duration: 4,
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
      className="home-banner-gradient relative flex h-screen min-h-screen w-full items-center overflow-hidden lg:pt-20"
    >
      <div
        data-hero-bg
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,223,66,0.14),transparent_26%)]"
      />
      <GeneralWrapper>
        <div className="flex w-full flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex w-full flex-col items-start lg:w-[50%]">
            <div data-about-copy className="mb-6 flex items-center gap-3">
              <span data-about-line className="h-px w-12 bg-accent-lime/80" />
              <p className="font-manrope text-[0.68rem] font-bold tracking-[0.34em] text-accent-lime">
                THE APPROACH
              </p>
            </div>
            <p
              data-hero-copy
              className="mt-6 mb-8 lg:text-7xl text-5xl font-manrope font-extrabold leading-14 lg:leading-20 text-surface-container-lowest"
            >
              Resonance Cleaning{" "}
              <span className="text-accent-lime">Services</span>
            </p>
              <p
                data-hero-copy
                className="mb-8  sm:w-4/5  w-full text-lg font-inter font-semibold text-surface-container-lowest/80"
              >
                Resonance Cleaning Services was born from a singular observation:
                the UK&apos;s finest homes and offices require more than a
                standard cleaning. They require a meticulous, tailored
                approach — one that treats every surface with precision and
                every commercial center, office, and home with respect.
              </p>
            <div
              data-hero-copy
              className="flex lg:flex-row flex-col items-start lg:items-center gap-4 w-full "
            >
              <ButtonLink
                href="#standards"
                variant="white"
                className="py-4 lg:w-auto w-full"
              >
                OUR STANDARDS
              </ButtonLink>
              <ButtonLink
                href="/get-a-quote"
                variant="transparent"
                className="py-4 lg:w-auto w-full"
              >
                GET A QUOTE
              </ButtonLink>
            </div>
          </div>

          <div className="relative hidden w-full lg:flex lg:w-[50%]">
            <div
              data-about-panel
              className="relative h-[32rem] w-full overflow-hidden rounded-4xl"
            >
              <div className="absolute inset-0 rounded-4xl bg-[linear-gradient(90deg,rgba(8,10,88,0.05)_0%,rgba(8,10,88,0.24)_100%)]" />
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl">
                <div
                  data-about-orb
                  className="absolute left-[8%] top-[-8%] h-[94%] w-[94%] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(8,10,88,0.2)_0%,rgba(8,10,88,0.2)_22%,rgba(8,10,88,0.05)_46%,transparent_72%)] shadow-[inset_0_0_0_1px_rgba(8,10,88,0.12)]"
                />
                <div className="absolute left-[20%] top-[10%] h-[72%] w-[72%] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(8,10,88,0.28)_0%,rgba(8,10,88,0.16)_18%,rgba(8,10,88,0.02)_46%,transparent_70%)]" />
                <div className="absolute left-[34%] top-[24%] h-[42%] w-[42%] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(8,10,88,0.44)_0%,rgba(8,10,88,0.22)_18%,transparent_56%)]" />
                <div className="absolute right-[7%] bottom-[8%] h-32 w-44 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(8,10,88,0.48)_0%,rgba(8,10,88,0.2)_45%,transparent_75%)] blur-sm" />
                <div className="absolute right-[8%] bottom-[10%] h-44 w-40 rounded-[50%_50%_42%_42%/48%_48%_52%_52%] border border-white/10 bg-[linear-gradient(180deg,rgba(8,10,88,0.44)_0%,rgba(8,10,88,0.16)_100%)]" />
                <div className="absolute right-[14%] bottom-[20%] h-28 w-[0.12rem] bg-white/10" />
                <div className="absolute right-[13.6%] bottom-[24%] h-5 w-3 rotate-[-28deg] rounded-full bg-white/7" />
                <div className="absolute right-[14.6%] bottom-[28%] h-4 w-2 rotate-24 rounded-full bg-white/7" />
                <div className="absolute right-[11.5%] bottom-[28%] h-4 w-2 rotate-42 rounded-full bg-white/7" />
                <div className="absolute right-[3%] bottom-2 h-18 w-[16rem] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(8,10,88,0.48)_0%,rgba(8,10,88,0.16)_42%,transparent_76%)] blur-[2px]" />
              </div>
              <div className="absolute inset-0 rounded-4xl bg-[linear-gradient(90deg,rgba(8,10,88,0.86)_0%,rgba(8,10,88,0.55)_36%,rgba(8,10,88,0.18)_70%,rgba(8,10,88,0)_100%)]" />
              <div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_68%_52%,rgba(255,255,255,0.06)_0%,transparent_18%)]" />

              <div className="absolute inset-0 overflow-hidden rounded-4xl px-6 py-5 lg:px-8 lg:py-6">
                <div className="flex h-full gap-5">
                  <div className="flex flex-1 min-w-0 flex-col overflow-hidden">
                    <div
                      data-about-left-track
                      className="flex flex-col gap-5 will-change-transform"
                    >
                      {[0, 1].map((repeatIndex) => (
                        <div
                          key={repeatIndex}
                          className="flex flex-col gap-5"
                          aria-hidden={repeatIndex === 1}
                        >
                          <div className="rounded-[1.1rem] border border-white/10 bg-[rgba(8,10,88,0.22)] p-3.5 backdrop-blur-xl">
                            <p
                              data-about-feature
                              className="font-manrope text-[0.58rem] font-bold tracking-[0.28em] text-accent-lime/90"
                            >
                              SERVICE HIGHLIGHTS
                            </p>
                            <div className="mt-3 space-y-2.5">
                              <div
                                data-about-feature
                                className="flex items-center gap-3"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
                                <p className="text-[0.88rem] font-semibold text-white/82">
                                  Residential cleaning
                                </p>
                              </div>
                              <div
                                data-about-feature
                                className="flex items-center gap-3"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
                                <p className="text-[0.88rem] font-semibold text-white/82">
                                  Office upkeep
                                </p>
                              </div>
                              <div
                                data-about-feature
                                className="flex items-center gap-3"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
                                <p className="text-[0.88rem] font-semibold text-white/82">
                                  Service planning
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[1.1rem] border border-white/10 bg-[rgba(8,10,88,0.2)] p-3.5 backdrop-blur-xl">
                            <p
                              data-about-feature
                              className="font-manrope text-[0.58rem] font-bold tracking-[0.28em] text-accent-lime/90"
                            >
                              CORE AREAS
                            </p>
                            <div className="mt-3 space-y-2">
                              <div
                                data-about-feature
                                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                              >
                                <p className="text-[0.84rem] font-semibold text-white/85">
                                  Bathroom Cleaning
                                </p>
                              </div>
                              <div
                                data-about-feature
                                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                              >
                                <p className="text-[0.84rem] font-semibold text-white/85">
                                  Kitchen Cleaning
                                </p>
                              </div>
                              <div
                                data-about-feature
                                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                              >
                                <p className="text-[0.84rem] font-semibold text-white/85">
                                  Bedroom Cleaning
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[1.1rem] border border-white/10 bg-[rgba(8,10,88,0.2)] p-3.5 backdrop-blur-xl">
                            <p
                              data-about-feature
                              className="font-manrope text-[0.58rem] font-bold tracking-[0.28em] text-accent-lime/90"
                            >
                              STANDARDS
                            </p>
                            <div className="mt-3 space-y-2">
                              <div
                                data-about-feature
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                              >
                                <p className="text-[0.7rem] font-bold tracking-[0.16em] text-white/80">
                                  RESIDENTIAL CLEANING
                                </p>
                              </div>
                              <div
                                data-about-feature
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                              >
                                <p className="text-[0.7rem] font-bold tracking-[0.16em] text-white/80">
                                  COMMERCIAL CENTERS
                                </p>
                              </div>
                              <div
                                data-about-feature
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                              >
                                <p className="text-[0.7rem] font-bold tracking-[0.16em] text-white/80">
                                  OFFICES
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex w-[19rem] shrink-0 flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[rgba(8,10,88,0.24)] p-4 backdrop-blur-xl">
                    <div>
                      <p className="font-manrope text-[0.58rem] font-bold tracking-[0.28em] text-accent-lime/90">
                        REFINED PROCESS
                      </p>
                      <p className="mt-2 font-manrope text-[1.35rem] font-semibold leading-tight text-white">
                        Quiet execution, consistent standards, and a tailored
                        cleaning approach to every visit.
                      </p>
                    </div>
                    <div>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        <div
                          data-about-chip
                          className="rounded-full border border-white/10 bg-white/7 px-3.5 py-1.5"
                        >
                          <p className="text-[0.68rem] font-bold tracking-[0.16em] text-white/80">
                            AFTER-HOURS
                          </p>
                        </div>
                        <div
                          data-about-chip
                          className="rounded-full border border-white/10 bg-white/7 px-3.5 py-1.5"
                        >
                          <p className="text-[0.68rem] font-bold tracking-[0.16em] text-white/80">
                            PRIVATE CARE
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2.5">
                        <div
                          data-about-stat
                          className="rounded-[0.9rem] border border-white/10 bg-white/5 p-2.5 text-center"
                        >
                          <p className="font-manrope text-base font-bold text-white">
                            01
                          </p>
                          <p className="mt-1 text-[0.58rem] font-semibold tracking-[0.16em] text-white/55">
                            REVIEW
                          </p>
                        </div>
                        <div
                          data-about-stat
                          className="rounded-[0.9rem] border border-white/10 bg-white/5 p-2.5 text-center"
                        >
                          <p className="font-manrope text-base font-bold text-white">
                            02
                          </p>
                          <p className="mt-1 text-[0.58rem] font-semibold tracking-[0.16em] text-white/55">
                            PLAN
                          </p>
                        </div>
                        <div
                          data-about-stat
                          className="rounded-[0.9rem] border border-white/10 bg-white/5 p-2.5 text-center"
                        >
                          <p className="font-manrope text-base font-bold text-white">
                            03
                          </p>
                          <p className="mt-1 text-[0.58rem] font-semibold tracking-[0.16em] text-white/55">
                            CLEAN
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GeneralWrapper>
    </section>
  );
};
