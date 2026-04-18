"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import clinicalIcon from "@/assets/svgs/clinical-icon.svg";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cleanroom from "@/assets/images/clean room.jpg";

export const FiveStarStandard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vettedValueRef = useRef<HTMLParagraphElement>(null);
  const roomPlanValueRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-standard-copy]", {
        autoAlpha: 0,
        y: 36,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from("[data-standard-panel]", {
        autoAlpha: 0,
        y: 48,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-standard-panel]",
          start: "top 76%",
          once: true,
        },
      });

      const statsTrigger = ScrollTrigger.create({
        trigger: "[data-standard-panel]",
        start: "top 76%",
        once: true,
        onEnter: () => {
          if (vettedValueRef.current) {
            const vettedCounter = { value: 0 };
            gsap.to(vettedCounter, {
              value: 100,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                if (vettedValueRef.current) {
                  vettedValueRef.current.textContent = `${Math.round(vettedCounter.value)}%`;
                }
              },
            });
          }

          if (roomPlanValueRef.current) {
            const roomPlanCounter = { value: 0 };
            gsap.to(roomPlanCounter, {
              value: 100,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                if (roomPlanValueRef.current) {
                  roomPlanValueRef.current.textContent = `${Math.round(roomPlanCounter.value)}%`;
                }
              },
            });
          }
        },
      });

      return () => {
        statsTrigger.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden bg-on-surface py-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,223,66,0.1),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_24%)]" />
      <GeneralWrapper>
        <Row gutter={{ lg: 80 }} align="middle">
          <Col lg={12} xs={24} className="mb-10 lg:mb-0">
            <div>
              <h1
                data-standard-copy
                className="text-surface-container-lowest font-manrope text-4xl lg:text-5xl font-bold"
              >
                Why Resonance
              </h1>
              <p
                data-standard-copy
                className="mt-4 max-w-xl text-sm leading-7 text-surface-container-lowest/70 lg:text-base"
              >
                Premium cleaning for private homes, commercial interiors, and
                specialist surfaces - delivered with quiet precision and a
                finish that feels considered, not rushed.
              </p>
              <div className="mt-8 flex flex-col gap-10">
                <div data-standard-copy className="flex gap-6 items-start">
                  <Image src={clinicalIcon} alt="" />
                  <div>
                    <p className="font-bold font-manrope text:lg lg:text-xl text-surface-container-lowest">
                      Who We Are
                    </p>
                    <p className="mt-2 text-sm lg:text-base  text-surface-container-lowest/70">
                      Resonance Cleaning Services is a premium cleaning company
                      based in the UK. We provide meticulous, discreet, and
                      tailored cleaning for homes and commercial spaces — with
                      an uncompromising standard of finish, every time.
                    </p>
                  </div>
                </div>
                <div data-standard-copy className="flex gap-6 items-start">
                  <Image src={clinicalIcon} alt="" />
                  <div>
                    <p className="font-bold font-manrope text:lg lg:text-xl text-surface-container-lowest">
                      Our Approach
                    </p>
                    <p className="mt-2 text-sm lg:text-base  text-surface-container-lowest/70">
                      We deliver a repeatable standard of care for every
                      surface, fabric, and finish. We learn the space, respect
                      the routine, and leave nothing overlooked.
                    </p>
                  </div>
                </div>
                <div data-standard-copy className="flex gap-6 items-start">
                  <Image src={clinicalIcon} alt="" />
                  <div>
                    <p className="font-bold font-manrope text:lg lg:text-xl text-surface-container-lowest">
                      Private Homes | Commercial Centers | Offices
                    </p>
                    <p className="mt-2 text-sm lg:text-base text-surface-container-lowest/70">
                      Designed for the spaces that matter most, from daily
                      upkeep to deeper specialist attention across high-value
                      interiors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} xs={24}>
            <div
              data-standard-panel
              className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:p-6"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src={cleanroom}
                  alt="Clean, bright room interior"
                  className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[34rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,88,0)_30%,rgba(8,10,88,0.74)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl lg:left-6 lg:top-6">
                  <p className="text-[10px] font-manrope font-extrabold uppercase tracking-[0.28em] text-white/80">
                    Finish Standard
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <div className="max-w-xl rounded-[1.5rem] border border-white/12 bg-primary/35 p-4 text-white backdrop-blur-xl lg:p-5">
                    <p className="text-xs font-manrope font-bold uppercase tracking-[0.24em] text-white/60">
                      What We Deliver
                    </p>
                    <p className="mt-3 text-lg font-manrope font-bold leading-8 text-white lg:text-xl">
                      Tailored room-by-room care that leaves every space
                      polished, calm, and ready to be lived in.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                  <p
                    ref={vettedValueRef}
                    className="text-accent-lime font-manrope text-3xl font-bold"
                  >
                    100%
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Vetted Staff
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                  <p
                    ref={roomPlanValueRef}
                    className="text-accent-lime font-manrope text-3xl font-bold"
                  >
                    100%
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Room-by-Room Plans
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
    </div>
  );
};
