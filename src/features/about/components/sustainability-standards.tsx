"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import Image from "next/image";
import { Col, Row } from "antd";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import kitchenImage from "@/assets/images/kitchen.jpg";
import shieldPlain from "@/assets/svgs/shield-plain.svg";
import shieldGrey from "@/assets/svgs/shield-grey.svg";
import shieldVariant from "@/assets/svgs/shield-variant.svg";

const standards = [
  {
    icon: shieldPlain,
    title: "Ethical Chemistry",
    description:
      "We use biodegradable, non-toxic agents that protect delicate surfaces while remaining highly effective on every clean.",
  },
  {
    icon: shieldGrey,
    title: "Technical Precision",
    description:
      "Our method is documented, refined, and consistently reviewed so every visit meets the same exacting standard.",
  },
  {
    icon: shieldVariant,
    title: "The Service Log",
    description:
      "Clients receive detailed service logs that record what was cleaned and how the property was maintained over time.",
  },
];

export const SustainabilityStandards = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-sustainability-copy]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from("[data-sustainability-item]", {
        autoAlpha: 0,
        x: -20,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-sustainability-list]",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from("[data-sustainability-image]", {
        autoAlpha: 0,
        y: 32,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-sustainability-image]",
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="standards" className="py-10 lg:py-16 scroll-mt-24 lg:scroll-mt-32">
      <GeneralWrapper>
        <div className="rounded-[1.75rem] border border-primary/8 bg-white shadow-[0_22px_70px_rgba(8,10,88,0.08)] overflow-hidden">
          <Row gutter={0} className="min-h-[42rem]">
            <Col xs={24} lg={12} className="bg-[#F0F1FF]">
              <div className="flex h-full flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
                <p
                  data-sustainability-copy
                  className="font-manrope text-3xl font-extrabold leading-[0.95] text-primary sm:text-4xl lg:text-[3.4rem]"
                >
                  Sustainability &
                  <span className="block">Standards</span>
                </p>

                <div
                  id="sustainability-list"
                  data-sustainability-list
                  className="mt-10 flex flex-col gap-8 lg:mt-12 lg:gap-10"
                >
                  {standards.map((item) => (
                    <div
                      key={item.title}
                      data-sustainability-item
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 shrink-0">
                        <Image src={item.icon} alt="" className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
                          {item.title}
                        </p>
                        <p className="mt-2 max-w-[34rem] font-manrope text-sm leading-7 text-grey-4 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div
                data-sustainability-image
                className="h-full min-h-[22rem] lg:min-h-[42rem]"
              >
                <Image
                  src={kitchenImage}
                  alt="Clean kitchen interior"
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </div>
            </Col>
          </Row>
        </div>
      </GeneralWrapper>
    </section>
  );
};
