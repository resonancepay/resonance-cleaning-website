 "use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import companyIcon from "@/assets/svgs/company-green-icon.svg";
import starIcon from "@/assets/svgs/star-green.svg";
import homeIcon from "@/assets/svgs/home-green-icon.svg";
import Image from "next/image";
import { Button } from "@/common/components/button";
import star from "@/assets/svgs/star-icon.svg";
import checkOutline from "@/assets/svgs/check-outline.svg";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const QuoteDetails = () => {
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
      gsap.set("[data-quote-section-title]", { autoAlpha: 0, y: 26 });
      gsap.set("[data-quote-step]", { autoAlpha: 0, y: 24 });
      gsap.set("[data-quote-field]", { autoAlpha: 0, y: 18 });
      gsap.set("[data-quote-card]", { autoAlpha: 0, y: 30, rotateX: 10 });
      gsap.set("[data-quote-panel]", { autoAlpha: 0, x: 30, scale: 0.98 });
      gsap.set("[data-quote-facts]", { autoAlpha: 0, y: 24 });
      gsap.set("[data-submit-button]", { scale: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      timeline
        .to("[data-quote-section-title]", {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
        })
        .to(
          "[data-quote-field]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.35",
        )
        .to(
          "[data-quote-card]",
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.12,
          },
          "-=0.5",
        )
        .to(
          "[data-quote-panel]",
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.55",
        )
        .to(
          "[data-quote-facts]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.09,
          },
          "-=0.5",
        )
        .to(
          "[data-submit-button]",
          {
            scale: 1.03,
            duration: 0.35,
            yoyo: true,
            repeat: 1,
          },
          "-=0.15",
        );

      gsap.to("[data-quote-card]", {
        yPercent: -2,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
      });

      gsap.to("[data-quote-panel]", {
        yPercent: -3,
        duration: 5.2,
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
    <GeneralWrapper>
      <Row
        ref={sectionRef}
        gutter={{ xs: 24, lg: 64 }}
        className="pt-14 lg:pt-24"
      >
        <Col xs={24} lg={16}>
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-4" data-quote-section-title data-quote-step>
              <div className="flex bg-primary rounded-md gap-4">
                <p className="font-manrope font-extrabold px-4 py-3 text-white">
                  01
                </p>
              </div>
              <p className="text-primary font-manrope text-2xl sm:text-3xl font-extrabold">
                Personal Details
              </p>
            </div>
            <div className="mt-8 lg:mt-10">
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
                <div className="w-full" data-quote-field>
                  <label className="text-primary tracking-widest uppercase text-xs font-manrope font-extrabold">
                    Full Name
                  </label>
                  <input
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="e.g. Alexander Hamilton"
                  />
                </div>
                <div className="w-full" data-quote-field>
                  <label className="text-primary uppercase tracking-widest text-xs font-manrope font-extrabold">
                    Email Address
                  </label>
                  <input
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="alex@gmail.com"
                  />
                </div>
              </div>
              <div className="mt-5 grid gap-5 lg:mt-8 lg:grid-cols-2 lg:gap-8">
                <div className="w-full" data-quote-field>
                  <label className="text-primary tracking-widest uppercase text-xs font-manrope font-extrabold">
                    Contact Number
                  </label>
                  <input
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="+44 20 7123 4567"
                  />
                </div>
                <div className="w-full" data-quote-field>
                  <label className="text-primary uppercase tracking-widest text-xs font-manrope font-extrabold">
                    Postcode / Area
                  </label>
                  <input
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="SW1A 1AA"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-4" data-quote-section-title data-quote-step>
              <div className="flex bg-primary rounded-md gap-4">
                <p className="font-manrope font-extrabold px-4 py-3 text-white">
                  02
                </p>
              </div>
              <p className="text-primary font-manrope text-2xl sm:text-3xl font-extrabold">
                Service Selection
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="w-full bg-grey-7 p-6 sm:p-8 rounded-md" data-quote-card>
                <Image src={homeIcon} alt="" />
                <div className="mt-6">
                  <p className="text-primary font-manrope font-extrabold text-lg">
                    Residential
                  </p>
                  <p className="mt-2 text-primary/70 font-manrope">
                    Full estate cleaning and meticulous housekeeping.
                  </p>
                </div>
              </div>
              <div className="w-full bg-grey-7 p-6 sm:p-8 rounded-md" data-quote-card>
                <Image src={companyIcon} alt="" />
                <div className="mt-6">
                  <p className="text-primary font-manrope font-extrabold text-lg">
                    Commercial
                  </p>
                  <p className="mt-2 text-primary/70 font-manrope">
                    Executive office spaces and high-end retail boutiques.
                  </p>
                </div>
              </div>
              <div className="w-full bg-grey-7 p-6 sm:p-8 rounded-md sm:col-span-2 xl:col-span-1" data-quote-card>
                <Image src={starIcon} alt="" />
                <div className="mt-6">
                  <p className="text-primary font-manrope font-extrabold text-lg">
                    Specialist
                  </p>
                  <p className="mt-2 text-primary/70 font-manrope">
                    Antiques care, post-renovation, or event staging.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-4" data-quote-section-title data-quote-step>
              <div className="flex bg-primary rounded-md gap-4">
                <p className="font-manrope font-extrabold px-4 py-3 text-white">
                  03
                </p>
              </div>
              <p className="text-primary font-manrope text-2xl sm:text-3xl font-extrabold">
                Service Specifics
              </p>
            </div>
            <div className="mt-8 lg:mt-10">
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
                <div className="w-full" data-quote-field>
                  <label className="text-primary tracking-widest uppercase text-xs font-manrope font-extrabold">
                    Service Frequency
                  </label>
                  <input
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="e.g. Alexander Hamilton"
                  />
                </div>
                <div className="w-full" data-quote-field>
                  <label className="text-primary uppercase tracking-widest text-xs font-manrope font-extrabold">
                    Preferred Start Date
                  </label>
                  <input
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="alex@gmail.com"
                  />
                </div>
              </div>
              <div className="mt-5 lg:mt-8">
                <div className="w-full" data-quote-field>
                  <label className="text-primary tracking-widest uppercase text-xs font-manrope font-extrabold">
                    Special Requirements
                  </label>
                  <textarea
                    rows={5}
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="Please detail any specific needs, high-value items requiring care, or entry instructions..."
                  />
                </div>
              </div>
            </div>
            <div className="mt-16">
              <Button
                variant="lime"
                className="w-full py-4 sm:w-auto"
                data-submit-button
              >
                SUBMIT INQUIRY
              </Button>
            </div>
            <div>
              <p className="text-primary/50 mt-6 text-sm leading-6 font-manrope font-bold uppercase">
                By submitting, you agree to our concierge contacting you via
                phone or email within 4 business hours.
              </p>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={8}>
          <div className="mt-2 lg:mt-0">
            <div className="bg-primary p-6 sm:p-8 lg:p-10 rounded-md" data-quote-panel>
              <div className="flex items-center gap-2">
                <Image className="w-4" src={star} alt="star-icon" />
                <Image className="w-4" src={star} alt="star-icon" />
                <Image className="w-4" src={star} alt="star-icon" />
                <Image className="w-4" src={star} alt="star-icon" />
                <Image className="w-4" src={star} alt="star-icon" />
              </div>
              <div className="mt-8">
                <p className="text-2xl font-manrope font-extrabold text-white">
                  Five-Star Standard
                </p>
                <p className="font-manrope text-white/70  mt-4">
                  Every team member is rigorously vetted and trained in-house to
                  meet our meticulous standards of discretion and excellence.
                </p>
              </div>
            </div>
            <div className="mt-6 lg:mt-10 bg-grey-7 rounded-md p-6 sm:p-8 lg:p-10" data-quote-panel>
              <p className="uppercase tracking-[6px] text-xs font-extrabold font-manrope text-primary">
                Why Choose Us
              </p>
              <div className="mt-6 lg:mt-8 flex flex-col gap-6 lg:gap-8">
                <div className="flex gap-4" data-quote-facts>
                  <div className="bg-accent-lime/20 flex items-center justify-center p-3 sm:p-4 rounded-md">
                    <Image src={checkOutline} alt="" />
                  </div>
                  <div>
                    <p className="uppercase font-manrope font-extrabold">
                      Fully DBS Vetted
                    </p>
                    <p className="text-primary/60 text-sm font-manrope mt-1">
                      Security-cleared staff for total peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4" data-quote-facts>
                  <div className="bg-accent-lime/20 flex items-center justify-center p-3 sm:p-4 rounded-md">
                    <Image src={checkOutline} alt="" />
                  </div>
                  <div>
                    <p className="uppercase font-manrope font-extrabold">
                      Eco-Friendly Protocols
                    </p>
                    <p className="text-primary/60 text-sm font-manrope mt-1">
                      Sustainable, non-toxic premium cleaning products.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4" data-quote-facts>
                  <div className="bg-accent-lime/20 flex items-center justify-center p-3 sm:p-4 rounded-md">
                    <Image src={checkOutline} alt="" />
                  </div>
                  <div>
                    <p className="uppercase font-manrope font-extrabold">
                      Bespoke Checklists
                    </p>
                    <p className="text-primary/60 text-sm font-manrope mt-1">
                      Tailored instructions for your specific property.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4" data-quote-facts>
                  <div className="bg-accent-lime/20 flex items-center justify-center p-3 sm:p-4 rounded-md">
                    <Image src={checkOutline} alt="" />
                  </div>
                  <div>
                    <p className="uppercase font-manrope font-extrabold">
                      Insurance Protection
                    </p>
                    <p className="text-primary/60 text-sm font-manrope mt-1">
                      Comprehensive liability for high-value items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </GeneralWrapper>
  );
};
