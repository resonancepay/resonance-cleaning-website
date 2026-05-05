"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import shieldGrey from "@/assets/svgs/shield-grey.svg";
import greenBadge from "@/assets/svgs/green-badge.svg";
import shieldVariant from "@/assets/svgs/shield-variant.svg";
import clinicalIcon from "@/assets/svgs/clinical-icon.svg";
import checkIcon from "@/assets/svgs/new-check-icon.svg";
import starIcon from "@/assets/svgs/star-icon.svg";

const benefits = [
  {
    icon: shieldGrey,
    title: "DBS Vetted & Insured",
    description:
      "All team members undergo full DBS certification and are covered by comprehensive insurance, so you join a team clients trust completely.",
    dark: false,
  },
  {
    icon: greenBadge,
    title: "Professional Training",
    description:
      "We invest in your development with hands-on training across all surface types, specialist materials, and Resonance's in-house service protocols.",
    dark: true,
  },
  {
    icon: starIcon,
    title: "Competitive Pay",
    description:
      "We pay above-market rates that reflect the standard we hold ourselves and every member of our team to — without exception.",
    dark: false,
  },
  {
    icon: checkIcon,
    title: "Flexible Scheduling",
    description:
      "We design rotas that respect life outside of work. Evening, weekend, and part-time arrangements are available for the right candidates.",
    dark: false,
  },
  {
    icon: clinicalIcon,
    title: "Small, Trusted Team",
    description:
      "You won't be a number. Resonance operates as a close, high-trust team where every individual's contribution is seen and valued.",
    dark: false,
  },
  {
    icon: shieldVariant,
    title: "Career Progression",
    description:
      "We promote from within. Demonstrating excellence opens pathways into senior, specialist, and coordination roles as we grow.",
    dark: false,
  },
];

export const WhyJoin = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-why-heading]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });

      gsap.from("[data-why-card]", {
        autoAlpha: 0,
        y: 36,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-why-card]", start: "top 80%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <GeneralWrapper>
        <div data-why-heading className="mb-12 text-center">
          <p className="font-manrope text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-secondary">
            Life at Resonance
          </p>
          <h2 className="mt-3 font-manrope text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Why Join Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-manrope text-base leading-7 text-on-surface/65">
            We don't just clean — we operate to a standard. Here's what that means for the people who work with us.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {benefits.map((benefit) => (
            <Col key={benefit.title} xs={24} sm={12} lg={8}>
              <div
                data-why-card
                className={`h-full rounded-2xl p-8 lg:p-10 ${
                  benefit.dark
                    ? "border-b-4 border-secondary bg-primary"
                    : "border border-primary/8 bg-surface-container-low"
                }`}
              >
                <Image src={benefit.icon} alt="" />
                <p
                  className={`mt-6 mb-3 font-manrope text-sm font-extrabold tracking-widest ${
                    benefit.dark ? "text-white" : "text-primary"
                  }`}
                >
                  {benefit.title.toUpperCase()}
                </p>
                <p
                  className={`font-manrope text-sm leading-7 ${
                    benefit.dark ? "text-white/75" : "text-on-surface/65"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </GeneralWrapper>
    </section>
  );
};
