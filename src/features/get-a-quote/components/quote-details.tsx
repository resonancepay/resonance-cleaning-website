"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Col, Row } from "antd";
import Image from "next/image";
import { Button } from "@/common/components/button";
import star from "@/assets/svgs/star-icon.svg";
import checkOutline from "@/assets/svgs/check-outline.svg";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSearchParams } from "next/navigation";
import { useSubmitQuoteMutation } from "../hooks/quote.hooks";
import {
  findServiceProtocolBySlug,
  serviceProtocols,
} from "@/features/services/data/service-protocols";
import type { QuoteSubmissionPayload } from "../types/quote.types";

type QuoteFormValues = Pick<
  QuoteSubmissionPayload,
  "fullname" | "email" | "phone" | "postcode" | "frequency" | "start_date" | "requirements"
>;

const initialQuoteFormValues: QuoteFormValues = {
  fullname: "",
  email: "",
  phone: "",
  postcode: "",
  frequency: "",
  start_date: "",
  requirements: "",
};

export const QuoteDetails = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const personalDetailsRef = useRef<HTMLDivElement>(null);
  const specialAreasRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const incomingService = searchParams.get("service");
  const incomingAreas = searchParams.get("areas");
  const initialSelectedServiceSlug = useMemo(
    () =>
      findServiceProtocolBySlug(incomingService)?.slug ??
      serviceProtocols[0]?.slug ??
      "",
    [incomingService],
  );
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(
    initialSelectedServiceSlug,
  );
  const initialSelectedKeyAreas = useMemo(() => {
    if (!incomingAreas) {
      return [];
    }

    return incomingAreas
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);
  }, [incomingAreas]);
  const [selectedKeyAreas, setSelectedKeyAreas] = useState<string[]>(
    initialSelectedKeyAreas,
  );
  const [formValues, setFormValues] = useState<QuoteFormValues>(
    initialQuoteFormValues,
  );
  const today = useMemo(() => {
    const currentDate = new Date();
    const timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;

    return new Date(currentDate.getTime() - timezoneOffset)
      .toISOString()
      .split("T")[0];
  }, []);
  const submitQuoteMutation = useSubmitQuoteMutation();
  const selectedService = useMemo(
    () =>
      serviceProtocols.find((service) => service.slug === selectedServiceSlug) ??
      serviceProtocols[0] ??
      null,
    [selectedServiceSlug],
  );

  useEffect(() => {
    if (!incomingService) {
      return;
    }

    const rafId = window.requestAnimationFrame(() => {
      personalDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [incomingService]);

  const handleSelectService = (serviceSlug: string) => {
    if (serviceSlug !== selectedServiceSlug) {
      setSelectedKeyAreas([]);
    }

    setSelectedServiceSlug(serviceSlug);

    window.requestAnimationFrame(() => {
      specialAreasRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const toggleKeyArea = (item: string) => {
    setSelectedKeyAreas((current) =>
      current.includes(item)
        ? current.filter((entry) => entry !== item)
        : [...current, item],
    );
  };

  const handleFieldChange = (
    field: keyof QuoteFormValues,
    value: string,
  ) => {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!selectedService) {
      return;
    }
    console.log("Got right here")

    submitQuoteMutation.mutate({
      ...formValues,
      service: selectedService.serviceName,
      key_areas: selectedKeyAreas,
      special_focus: selectedService.specialFocus,
    });
  };

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
          <div
            ref={personalDetailsRef}
            className="mb-16 lg:mb-20 scroll-mt-24 lg:scroll-mt-32"
          >
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
                    value={formValues.fullname}
                    onChange={(event) =>
                      handleFieldChange("fullname", event.target.value)
                    }
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="e.g. Alexander Hamilton"
                  />
                </div>
                <div className="w-full" data-quote-field>
                  <label className="text-primary uppercase tracking-widest text-xs font-manrope font-extrabold">
                    Email Address
                  </label>
                  <input
                    value={formValues.email}
                    onChange={(event) =>
                      handleFieldChange("email", event.target.value)
                    }
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
                    value={formValues.phone}
                    onChange={(event) =>
                      handleFieldChange("phone", event.target.value)
                    }
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="+44 20 7123 4567"
                  />
                </div>
                <div className="w-full" data-quote-field>
                  <label className="text-primary uppercase tracking-widest text-xs font-manrope font-extrabold">
                    Postcode / Area
                  </label>
                  <input
                    value={formValues.postcode}
                    onChange={(event) =>
                      handleFieldChange("postcode", event.target.value)
                    }
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
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {serviceProtocols.map((serviceProtocol) => {
                const isActive = selectedServiceSlug === serviceProtocol.slug;

                return (
                  <button
                    type="button"
                    key={serviceProtocol.slug}
                    data-quote-card
                    aria-pressed={isActive}
                    onClick={() => handleSelectService(serviceProtocol.slug)}
                    className={`w-full rounded-md p-6 text-left transition sm:p-8 ${
                      isActive
                        ? "border-2 border-secondary bg-secondary/10 shadow-[0_16px_35px_rgba(8,10,88,0.08)]"
                        : "bg-grey-7 opacity-70 grayscale-[0.35] hover:-translate-y-0.5 hover:opacity-100 hover:grayscale-0"
                    }`}
                  >
                    <Image src={serviceProtocol.image} alt={serviceProtocol.serviceName} />
                    <div className="mt-6">
                      <p className="text-primary font-manrope font-extrabold text-lg">
                        {serviceProtocol.serviceName}
                      </p>
                      <p className="mt-2 text-primary/70 font-manrope">
                        {serviceProtocol.keyAreas[0]}
                      </p>
                    </div>
                    {isActive ? (
                      <p className="mt-5 text-xs font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                        Selected from services page
                      </p>
                    ) : null}
                  </button>
                );
              })}
            </div>
            {selectedService ? (
              <div
                ref={specialAreasRef}
                className="mt-6 rounded-lg border border-secondary/15 bg-secondary/6 p-4 sm:p-5"
              >
                <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                  Protocol builder
                </p>
                <p className="mt-2 text-base font-manrope font-extrabold text-primary">
                  {selectedService.serviceName}
                </p>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  Pick any key area below to include it in the quote. Click again to remove it.
                </p>
                <div className="mt-4">
                  <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                    Key areas
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selectedService.keyAreas.map((item) => (
                      <button
                        type="button"
                        key={item}
                        aria-pressed={selectedKeyAreas.includes(item)}
                        onClick={() => toggleKeyArea(item)}
                        className={`rounded-full px-4 py-3 text-left text-xs font-manrope font-semibold transition sm:text-sm ${
                          selectedKeyAreas.includes(item)
                            ? "border border-secondary bg-secondary/12 text-primary shadow-[0_8px_18px_rgba(8,10,88,0.08)]"
                            : "border border-[var(--line)] bg-white text-primary/60 hover:border-secondary/35 hover:bg-secondary/6 hover:text-primary"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                    Special focus
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedService.specialFocus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-secondary/15 bg-white px-3 py-2 text-xs font-manrope font-semibold text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-white/70 bg-white/70 p-4">
                  <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                    Selected count
                  </p>
                  <p className="mt-2 text-sm font-manrope font-semibold text-primary">
                    {selectedKeyAreas.length} key area
                    {selectedKeyAreas.length === 1 ? "" : "s"} selected
                  </p>
                </div>
              </div>
            ) : null}
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
                    value={formValues.frequency}
                    onChange={(event) =>
                      handleFieldChange("frequency", event.target.value)
                    }
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 placeholder:text-grey-6 placeholder:font-manrope"
                    placeholder="e.g. Alexander Hamilton"
                  />
                </div>
                <div className="w-full" data-quote-field>
                  <label className="text-primary uppercase tracking-widest text-xs font-manrope font-extrabold">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={formValues.start_date}
                    onChange={(event) =>
                      handleFieldChange("start_date", event.target.value)
                    }
                    className="bg-[#F4F5F7] w-full mt-2 text-base font-manrope py-4 px-4 text-primary [color-scheme:light]"
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
                    value={formValues.requirements}
                    onChange={(event) =>
                      handleFieldChange("requirements", event.target.value)
                    }
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
                disabled={submitQuoteMutation.isPending}
                onClick={handleSubmit}
              >
                {submitQuoteMutation.isPending ? "SUBMITTING..." : "SUBMIT INQUIRY"}
              </Button>
            </div>
            <div>
              <p className="text-primary/50 mt-6 text-sm leading-6 font-manrope font-bold uppercase">
                By submitting, you agree to our concierge contacting you via
                phone or email within 4 business hours.
              </p>
              {submitQuoteMutation.isError ? (
                <p className="mt-4 text-sm font-manrope font-semibold text-red-600">
                  We could not submit your quote right now. Please try again.
                </p>
              ) : null}
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
