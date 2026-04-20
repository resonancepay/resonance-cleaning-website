"use client";

import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Button } from "@/common/components/button";
import { Col, Row } from "antd";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSubmitContactInquiryMutation } from "./hooks/contact.hooks";
import type { ContactInquiryPayload } from "./types/contact.types";

type ContactFormValues = Pick<
  ContactInquiryPayload,
  | "fullName"
  | "postcode"
  | "emailAddress"
  | "preferredService"
  | "specificRequirements"
>;

const initialContactFormValues: ContactFormValues = {
  fullName: "",
  postcode: "",
  emailAddress: "",
  preferredService: "Signature Estate Cleaning",
  specificRequirements: "",
};

export function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [formValues, setFormValues] = useState<ContactFormValues>(
    initialContactFormValues,
  );
  const submitInquiryMutation = useSubmitContactInquiryMutation();

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set("[data-contact-glow]", { scale: 0.82, opacity: 0.22 });
      gsap.set("[data-contact-art]", { autoAlpha: 0, x: 28, rotate: -2, scale: 0.96 });
      gsap.set("[data-contact-eyebrow]", { autoAlpha: 0, y: 18 });
      gsap.set("[data-contact-title]", { autoAlpha: 0, y: 42 });
      gsap.set("[data-contact-orb]", { scale: 0.72, opacity: 0.14 });
      gsap.set("[data-contact-card]", { autoAlpha: 0, y: 26, scale: 0.96 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to("[data-contact-glow]", {
          scale: 1,
          opacity: 0.4,
          duration: 1.4,
        })
        .to(
          "[data-contact-eyebrow]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.7",
        )
        .to(
          "[data-contact-title]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.08,
          },
          "-=0.45",
        )
        .to(
          "[data-contact-art]",
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
          "[data-contact-card]",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          "-=0.45",
        );

      gsap.to("[data-contact-glow]", {
        yPercent: -8,
        xPercent: 4,
        rotation: 6,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-contact-orb]", {
        yPercent: -8,
        xPercent: 6,
        rotation: 12,
        duration: 6.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-contact-card]", {
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

  const handleFieldChange = (
    field: keyof ContactFormValues,
    value: string,
  ) => {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    submitInquiryMutation.mutate(formValues);
  };

  useLayoutEffect(() => {
    if (!detailsRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set("[data-contact-section-title]", { autoAlpha: 0, y: 26 });
      gsap.set("[data-contact-detail-card]", { autoAlpha: 0, y: 24, rotateX: 8 });
      gsap.set("[data-contact-detail-field]", { autoAlpha: 0, y: 18 });
      gsap.set("[data-contact-detail-panel]", { autoAlpha: 0, x: 26, scale: 0.98 });
      gsap.set("[data-contact-detail-fact]", { autoAlpha: 0, y: 20 });
      gsap.set("[data-submit-button]", { scale: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 76%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      timeline
        .to("[data-contact-section-title]", {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        })
        .to(
          "[data-contact-detail-card]",
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.1,
          },
          "-=0.35",
        )
        .to(
          "[data-contact-detail-field]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.45",
        )
        .to(
          "[data-contact-detail-panel]",
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
          },
          "-=0.55",
        )
        .to(
          "[data-contact-detail-fact]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.45",
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

      gsap.to("[data-contact-detail-panel]", {
        yPercent: -3,
        duration: 5.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, detailsRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className="flex-1">
      <section
        ref={sectionRef}
        className="relative flex min-h-[52svh] flex-col justify-center overflow-hidden bg-primary py-14 sm:min-h-[60svh] sm:py-16 lg:min-h-screen lg:py-0"
      >
        <div
          data-contact-glow
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(163,223,66,0.18),transparent_24%),radial-gradient(circle_at_84%_76%,rgba(184,245,86,0.1),transparent_20%),radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.08),transparent_26%)]"
        />
        <div
          className="pointer-events-none absolute -right-16 top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_44%,transparent_74%)] blur-[2px] lg:h-72 lg:w-72"
          aria-hidden="true"
        />

        <GeneralWrapper>
          <div className="relative flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-14">
            <div className="w-full max-w-3xl lg:w-[55%]">
              <p
                data-contact-eyebrow
                className="text-accent-lime tracking-widest text-xs sm:text-sm"
              >
                Inquiry concierge
              </p>
              <p
                data-contact-title
                className="mt-5 text-3xl font-manrope font-extrabold leading-[1.02] sm:mt-6 sm:text-5xl lg:text-7xl lg:leading-[1]"
              >
                <span className="text-white">Concierge</span> <br />
                <span className="text-white">Support</span> <br />
                <span className="text-white">at Your Service.</span>
              </p>
            </div>

            <div
              data-contact-art
              className="relative w-full lg:w-[45%]"
              aria-hidden="true"
            >
              <div className="relative mx-auto flex min-h-[20rem] w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:min-h-[24rem] sm:p-6 lg:min-h-[34rem] lg:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(163,223,66,0.22),transparent_18%),radial-gradient(circle_at_72%_70%,rgba(255,255,255,0.09),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06)_0%,transparent_28%,transparent_72%,rgba(255,255,255,0.05)_100%)]" />
                <div
                  data-contact-orb
                  className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(163,223,66,0.34)_0%,rgba(163,223,66,0.08)_42%,transparent_76%)] blur-[1px] lg:h-32 lg:w-32"
                />
                <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/12 bg-white/6 blur-[0.2px] lg:h-28 lg:w-28" />
                <div className="absolute bottom-10 left-8 h-28 w-28 rounded-full border border-white/8 bg-white/5 lg:h-40 lg:w-40" />

                <div
                  data-contact-card
                  className="relative z-10 mx-auto w-full max-w-[20rem] rounded-[1.5rem] border border-white/14 bg-primary/35 px-4 py-4 text-white shadow-[0_24px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:max-w-sm sm:px-5 sm:py-5"
                >
                  <p className="text-sm leading-7 text-white/85 sm:text-lg sm:leading-8">
                    Experience the pinnacle of estate management with dedicated support tailored to your
                    lifestyle and standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GeneralWrapper>
      </section>

      <section
        ref={detailsRef}
        className="-mt-8 px-4 pb-10 sm:-mt-10 sm:px-6 sm:pb-12 lg:-mt-20 lg:px-10 lg:pb-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="surface-group rounded-[2rem] p-3 sm:p-5 lg:p-8">
            <Row gutter={{ xs: 16, sm: 20, lg: 32 }} align="stretch">
              <Col xs={24} lg={8}>
                <div className="flex h-full flex-col gap-4 sm:gap-5 lg:gap-6">
                  <article
                    data-contact-detail-card
                    className="surface-panel rounded-[1.5rem] p-5 sm:p-7 lg:p-9"
                  >
                    <p className="font-manrope text-xl font-extrabold tracking-[-0.02em] text-[var(--primary)] sm:text-2xl lg:text-[2rem]">
                      The Estate Office
                    </p>

                    <div className="mt-6 space-y-5 border-t border-[var(--line)] pt-5 sm:mt-8 sm:space-y-6 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white sm:h-11 sm:w-11">
                          ⌖
                        </div>
                        <div>
                          <p className="label-text text-[var(--secondary-dark-green)]">
                            London HQ
                          </p>
                          <p className="mt-2 text-sm leading-7 text-[var(--primary)] sm:text-base sm:leading-8">
                            50 Kaimhill Circle
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 border-t border-[var(--line)] pt-5 sm:gap-4 sm:pt-6">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white sm:h-11 sm:w-11">
                          ?
                        </div>
                        <div>
                          <p className="label-text text-[var(--secondary-dark-green)]">
                            Direct Line
                          </p>
                          <p className="mt-2 text-sm leading-7 text-[var(--primary)] sm:text-base sm:leading-8">
                            +447831176317
                            <br />
                            +447584054566
                            <br />
                            Talk2us@resonancebusinessgroup.org
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 border-t border-[var(--line)] pt-5 sm:gap-4 sm:pt-6">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white sm:h-11 sm:w-11">
                          ◔
                        </div>
                        <div>
                          <p className="label-text text-[var(--secondary-dark-green)]">
                            Operating Hours
                          </p>
                          <p className="mt-2 text-sm leading-7 text-[var(--primary)] sm:text-base sm:leading-8">
                            Mon - Fri: 08:00 - 20:00
                            <br />
                            Sat: 09:00 - 17:00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3 border-t border-[var(--line)] pt-4 sm:mt-6 sm:pt-5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary-dark-green)]" />
                      <p className="label-text text-[var(--secondary-dark-green)]">
                        Concierge currently online
                      </p>
                    </div>
                  </article>

                  <div
                    data-contact-detail-card
                    className="surface-soft h-44 overflow-hidden rounded-[1.5rem] sm:h-52 lg:h-56"
                  >
                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(17,18,96,0.18)_0%,rgba(17,18,96,0.04)_100%)] px-6 text-center">
                      <div>
                        <p className="font-manrope text-lg font-bold tracking-[-0.02em] text-[var(--primary)]">
                          Private support
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--on-surface-variant)]">
                          We respond with the same level of care, clarity, and discretion reflected in the
                          quote flow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} lg={16}>
                <div
                  data-contact-detail-panel
                  className="surface-panel rounded-[1.75rem] p-5 sm:p-7 lg:p-10"
                >
                  <p className="font-manrope text-2xl font-extrabold tracking-[-0.03em] text-[var(--primary)] sm:text-3xl lg:text-[2.25rem]">
                    Service Inquiry
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--on-surface-variant)] sm:mt-4 sm:text-base sm:leading-8">
                    Complete the details below, and a member of our private management team will contact you
                    within two hours.
                  </p>

                  <div className="mt-7 lg:mt-10">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-8">
                      <div className="w-full" data-contact-detail-field>
                        <label className="text-[var(--secondary-dark-green)] tracking-widest uppercase text-[11px] font-manrope font-extrabold sm:text-xs">
                          Full Name
                        </label>
                        <input
                          value={formValues.fullName}
                          onChange={(event) =>
                            handleFieldChange("fullName", event.target.value)
                          }
                          className="bg-[#F4F5F7] w-full mt-2 text-sm font-manrope py-3.5 px-4 placeholder:text-grey-6 placeholder:font-manrope sm:text-base"
                          placeholder="e.g. Alexander Hamilton"
                        />
                      </div>
                      <div className="w-full" data-contact-detail-field>
                        <label className="text-[var(--secondary-dark-green)] uppercase tracking-widest text-[11px] font-manrope font-extrabold sm:text-xs">
                          Postcode
                        </label>
                        <input
                          value={formValues.postcode}
                          onChange={(event) =>
                            handleFieldChange("postcode", event.target.value)
                          }
                          className="bg-[#F4F5F7] w-full mt-2 text-sm font-manrope py-3.5 px-4 placeholder:text-grey-6 placeholder:font-manrope sm:text-base"
                          placeholder="e.g. W1J 6ED"
                        />
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
                      <div className="w-full" data-contact-detail-field>
                        <label className="text-[var(--secondary-dark-green)] tracking-widest uppercase text-[11px] font-manrope font-extrabold sm:text-xs">
                          Email Address
                        </label>
                        <input
                          value={formValues.emailAddress}
                          onChange={(event) =>
                            handleFieldChange("emailAddress", event.target.value)
                          }
                          className="bg-[#F4F5F7] w-full mt-2 text-sm font-manrope py-3.5 px-4 placeholder:text-grey-6 placeholder:font-manrope sm:text-base"
                          placeholder="name@domain.com"
                        />
                      </div>
                      <div className="w-full" data-contact-detail-field>
                        <label className="text-[var(--secondary-dark-green)] uppercase tracking-widest text-[11px] font-manrope font-extrabold sm:text-xs">
                          Preferred Service
                        </label>
                        <div className="relative mt-2">
                          <select
                            value={formValues.preferredService}
                            onChange={(event) =>
                              handleFieldChange(
                                "preferredService",
                                event.target.value,
                              )
                            }
                            className="bg-[#F4F5F7] w-full appearance-none text-sm font-manrope py-3.5 px-4 pr-12 text-[var(--primary)] sm:text-base"
                          >
                            <option>Signature Estate Cleaning</option>
                            <option>Deep Cleaning</option>
                            <option>Move-In / Move-Out</option>
                            <option>Post-Renovation Cleaning</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--primary)]/60">
                            <span className="text-lg">⌄</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-8">
                      <div className="w-full" data-contact-detail-field>
                        <label className="text-[var(--secondary-dark-green)] tracking-widest uppercase text-[11px] font-manrope font-extrabold sm:text-xs">
                          Specific Requirements
                        </label>
                        <textarea
                          rows={5}
                          value={formValues.specificRequirements}
                          onChange={(event) =>
                            handleFieldChange(
                              "specificRequirements",
                              event.target.value,
                            )
                          }
                          className="bg-[#F4F5F7] w-full mt-2 text-sm font-manrope py-3.5 px-4 placeholder:text-grey-6 placeholder:font-manrope sm:text-base"
                          placeholder="How may we assist you today?"
                        />
                      </div>
                    </div>

                    <div className="mt-8 sm:mt-10">
                      <Button
                        type="button"
                        variant="lime"
                        className="w-full py-4 sm:w-auto sm:min-w-56"
                        data-submit-button
                        disabled={submitInquiryMutation.isPending}
                        onClick={handleSubmit}
                      >
                        {submitInquiryMutation.isPending
                          ? "SUBMITTING..."
                          : "SUBMIT INQUIRY"}
                      </Button>
                    </div>
                    {submitInquiryMutation.isError ? (
                      <p className="mt-4 text-sm font-manrope font-semibold text-red-600">
                        We could not send your inquiry right now. Please try
                        again.
                      </p>
                    ) : null}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </main>
  );
}
