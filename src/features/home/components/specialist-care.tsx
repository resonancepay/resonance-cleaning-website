"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import specialistIcon from "@/assets/svgs/specialist-care.svg";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import Image from "next/image";
import { Col, Row } from "antd";
import quoteIcon from "@/assets/svgs/quote-icon.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cleanroom from "@/assets/images/clean room.jpg"

const testimonials = [
  {
    quote:
      "Resonance transformed our home entirely. Their team works with a level of precision and discretion I have never seen from any other cleaning service. Every visit feels like the first.",
    label: "Homeowner, Kensington",
  },
  {
    quote:
      "We brought Resonance in for our Aberdeen office and the results were immediate. The attention to detail is extraordinary — surfaces we had given up on looked completely renewed.",
    label: "Office Manager, Aberdeen",
  },
  {
    quote:
      "I have engaged cleaning companies for years across multiple properties. None have matched the consistency and care Resonance delivers. They treat your space as if it were their own.",
    label: "Private Client, Edinburgh",
  },
  {
    quote:
      "From the initial consultation to the finished result, the whole experience was seamless. Discreet, thorough, and dependable — exactly the standard our boutique hotel requires.",
    label: "Property Manager, Manchester",
  },
  {
    quote:
      "The specialist care applied to our antique marble flooring was exceptional. It is clear they understand materials at a depth most cleaning companies simply do not possess.",
    label: "Private Client, Surrey",
  },
];

export const SpecialistCare = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setFading(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-specialist-copy]", {
        autoAlpha: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from("[data-specialist-card]", {
        autoAlpha: 0,
        y: 42,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-specialist-card]",
          start: "top 76%",
          once: true,
        },
      });

      gsap.to("[data-quote-mark]", {
        yPercent: -10,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const current = testimonials[activeIndex];

  return (
    <div ref={sectionRef} className="mt-20 mb-28">
      <GeneralWrapper>
        <Row gutter={{ lg: 32 }}>
          <Col xs={24} lg={8} className="mb-10 lg:mb-0">
            <div>
              <div data-specialist-copy>
                <Image src={specialistIcon} alt="" />
              </div>
            </div>
            <div className="mt-8">
              <p
                data-specialist-copy
                className="font-manrope text-xl lg:text-2xl font-bold"
              >
                Specialist Care
              </p>
              <p
                data-specialist-copy
                className="text-black text-sm lg:text-base mt-4 mb-8"
              >
                Deep cleaning for marble, antique woods, and high-performance
                glass — using meticulous, non-abrasive techniques that respect
                and reveal the original beauty of each surface.
              </p>
              <div data-specialist-copy>
                <Image
                  src={cleanroom}
                  alt="A professionally cleaned interior room showcasing Resonance Cleaning's specialist care service"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </Col>
          <Col xs={24} lg={16}>
            <div
              data-specialist-card
              className="bg-surface-container-lowest h-full rounded-xl flex items-center shadow-[0_20px_50px_rgba(8,10,88,0.12)]"
            >
              <div className="lg:p-10 p-5 relative w-full">
                <span
                  className="block mb-4 lg:absolute lg:mb-0 lg:top-0 lg:left-10"
                  data-quote-mark
                >
                  <Image src={quoteIcon} alt="" />
                </span>

                <div
                  style={{
                    opacity: fading ? 0 : 1,
                    transform: fading ? "translateY(8px)" : "translateY(0)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  <p className="font-manrope font-bold text-base lg:text-xl">
                    &apos;&apos;{current.quote}&apos;&apos;
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full aspect-square bg-grey flex-shrink-0"></div>
                    <div>
                      <p className="text-xs text-on-surface/60 font-manrope">
                        {current.label}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-8">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to testimonial ${i + 1}`}
                      onClick={() => {
                        setFading(true);
                        setTimeout(() => {
                          setActiveIndex(i);
                          setFading(false);
                        }, 400);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-secondary"
                          : "w-1.5 bg-on-surface/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </GeneralWrapper>
    </div>
  );
};
