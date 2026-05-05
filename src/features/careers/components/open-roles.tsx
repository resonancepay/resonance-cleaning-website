"use client";

import { ButtonLink } from "@/common/components/button";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const roles = [
  {
    title: "Lead Domestic Cleaning Specialist",
    location: "Aberdeen, Scotland",
    type: "Full-Time",
    description:
      "Deliver our premium domestic cleaning programme to private homes and executive residences across Aberdeen. You will work to Resonance's exacting standards and serve as a senior point of care on each assignment.",
    accent: true,
  },
  {
    title: "Commercial Cleaning Operative",
    location: "Aberdeen, Scotland",
    type: "Full-Time",
    description:
      "A hands-on role covering our commercial client portfolio — offices, boutique retail, and corporate interiors. Experience in professional commercial cleaning is preferred.",
    accent: false,
  },
  {
    title: "Specialist Surface Technician",
    location: "Aberdeen, Scotland",
    type: "Part-Time / Flexible",
    description:
      "Focused on the care of high-value and delicate surfaces — marble, natural stone, antique wood, and bespoke joinery. Specialist training is provided for the right candidate.",
    accent: false,
  },
  {
    title: "Operations & Client Coordinator",
    location: "Aberdeen, Scotland",
    type: "Full-Time",
    description:
      "A behind-the-scenes role ensuring scheduling, client communication, and service delivery run without disruption. Strong organisational skills and a professional manner are essential.",
    accent: false,
  },
];

export const OpenRoles = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-roles-heading]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });

      gsap.from("[data-role-card]", {
        autoAlpha: 0,
        y: 36,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-role-card]", start: "top 80%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="open-roles" className="py-16 lg:py-24 bg-surface-container-low">
      <GeneralWrapper>
        <div data-roles-heading className="mb-12">
          <p className="font-manrope text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-secondary">
            Current Opportunities
          </p>
          <h2 className="mt-3 font-manrope text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Open Roles
          </h2>
          <p className="mt-4 max-w-xl font-manrope text-base leading-7 text-on-surface/65">
            We recruit selectively and prioritise individuals who demonstrate a genuine commitment to precision and client care.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {roles.map((role) => (
            <Col key={role.title} xs={24} lg={12}>
              <div
                data-role-card
                className={`flex h-full flex-col justify-between rounded-2xl border p-8 lg:p-10 transition-shadow hover:shadow-[0_16px_40px_rgba(8,10,88,0.1)] ${
                  role.accent
                    ? "border-transparent bg-primary"
                    : "border-primary/8 bg-white"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span
                      className={`rounded-full px-3 py-1 text-[0.65rem] font-manrope font-bold tracking-[0.2em] ${
                        role.accent
                          ? "bg-accent-lime/20 text-accent-lime"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {role.type}
                    </span>
                    <span
                      className={`text-xs font-manrope ${
                        role.accent ? "text-white/50" : "text-on-surface/45"
                      }`}
                    >
                      {role.location}
                    </span>
                  </div>

                  <h3
                    className={`font-manrope text-xl font-extrabold leading-snug ${
                      role.accent ? "text-white" : "text-primary"
                    }`}
                  >
                    {role.title}
                  </h3>

                  <p
                    className={`mt-4 font-manrope text-sm leading-7 ${
                      role.accent ? "text-white/70" : "text-on-surface/65"
                    }`}
                  >
                    {role.description}
                  </p>
                </div>

                <div className="mt-8">
                  <ButtonLink
                    href="/contact"
                    variant={role.accent ? "lime" : "transparent"}
                    className="w-full sm:w-auto"
                  >
                    EXPRESS INTEREST
                  </ButtonLink>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </GeneralWrapper>
    </section>
  );
};
