"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import clinicalIcon from "@/assets/svgs/clinical-icon.svg";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FiveStarStandard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vettedValueRef = useRef<HTMLParagraphElement>(null);
  const conciergeValueRef = useRef<HTMLParagraphElement>(null);

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

          if (conciergeValueRef.current) {
            const conciergeCounter = { value: 0 };
            gsap.to(conciergeCounter, {
              value: 24,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                if (conciergeValueRef.current) {
                  conciergeValueRef.current.textContent = `${Math.round(conciergeCounter.value)}/7`;
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
    <div ref={sectionRef} className="bg-on-surface py-16 lg:py-32">
      <GeneralWrapper>
        <Row gutter={80}>
          <Col lg={12} xs={24} className="mb-10 lg:mb-0">
            <div>
              <h1
                data-standard-copy
                className="text-surface-container-lowest font-manrope text-4xl lg:text-5xl font-bold"
              >
                The 5-Star Standard
              </h1>
              <div className="mt-8 flex flex-col gap-10">
                <div data-standard-copy className="flex gap-6 items-start">
                  <Image src={clinicalIcon} alt="" />
                  <div>
                    <p className="font-bold font-manrope text:lg lg:text-xl text-surface-container-lowest">
                      Clinical Precision
                    </p>
                    <p className="mt-2 text-sm lg:text-base  text-surface-container-lowest/70">
                      We employ laboratory-grade inspection techniques to ensure
                      every corner meets a surgical standard of cleanliness.
                    </p>
                  </div>
                </div>
                <div data-standard-copy className="flex gap-6 items-start">
                  <Image src={clinicalIcon} alt="" />
                  <div>
                    <p className="font-bold font-manrope text:lg lg:text-xl text-surface-container-lowest">
                      DBS-Vetted Professionalism
                    </p>
                    <p className="mt-2 text-sm lg:text-base  text-surface-container-lowest/70">
                      Security is paramount. Every member of our staff undergoes
                      rigorous UK background checks and confidentiality
                      training.
                    </p>
                  </div>
                </div>
                <div data-standard-copy className="flex gap-6 items-start">
                  <Image src={clinicalIcon} alt="" />
                  <div>
                    <p className="font-bold font-manrope text:lg lg:text-xl text-surface-container-lowest">
                      Concierge-Led Management
                    </p>
                    <p className="mt-2 text-sm lg:text-base text-surface-container-lowest/70">
                      Dedicated account managers oversee every project, ensuring
                      your specific preferences are archived and executed
                      flawlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} xs={24}>
            <div
              data-standard-panel
              className="h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="h-62.5 w-full mb-8"></div>
              <div className="flex items-center gap-4">
                <div className="w-full py-4 flex justify-center border border-white/10 items-center rounded-lg bg-white/5 backdrop-blur-xl flex-col">
                  <p
                    ref={vettedValueRef}
                    className="text-accent-lime font-manrope text-4xl font-bold"
                  >
                    100%
                  </p>
                  <p className="font-inter text-white/50 text-xs font-semibold mt-1">
                    VETTED STAFF
                  </p>
                </div>
                <div className="w-full py-4 flex justify-center border border-white/10 items-center rounded-lg bg-white/5 backdrop-blur-xl flex-col">
                  <p
                    ref={conciergeValueRef}
                    className="text-accent-lime font-manrope text-4xl font-bold"
                  >
                    24/7
                  </p>
                  <p className="font-inter text-white/50 text-xs font-semibold mt-1">
                    CONCIERGE ACCESS
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
