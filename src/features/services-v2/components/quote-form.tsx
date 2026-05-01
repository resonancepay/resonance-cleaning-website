"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Button } from "@/common/components/button";
import type { ServiceCategory } from "../data/services-v2-data";
import type { ConfiguratorData } from "./domestic-configurator";
import { useSubmitContactInquiryMutation } from "@/features/contact/hooks/contact.hooks";
import gsap from "gsap";

type QuoteFormProps = {
  category: ServiceCategory;
  selectedService: string | null;
  configuratorData: ConfiguratorData | null;
  onSuccess: () => void;
  onBack: () => void;
};

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
};

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  businessType: "",
  message: "",
};

function buildRequirementsText(
  values: FormValues,
  category: ServiceCategory,
  configuratorData: ConfiguratorData | null,
): string {
  const parts: string[] = [];

  if (category === "commercial" && values.businessType) {
    parts.push(`Business type: ${values.businessType}`);
  }

  if (configuratorData) {
    const selectedRooms = Object.entries(configuratorData.rooms)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => `${id.replace(/-/g, " ")} x${qty}`)
      .join(", ");

    const selectedItems = Object.entries(configuratorData.items)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => `${id.replace(/-/g, " ")} x${qty}`)
      .join(", ");

    if (selectedRooms) parts.push(`Rooms: ${selectedRooms}`);
    if (selectedItems) parts.push(`Appliances: ${selectedItems}`);
  }

  if (values.message) {
    parts.push(`Message: ${values.message}`);
  }

  return parts.join(" | ") || "No additional details provided.";
}

export function QuoteForm({
  category,
  selectedService,
  configuratorData,
  onSuccess,
  onBack,
}: QuoteFormProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<FormValues>(initialValues);
  const submitMutation = useSubmitContactInquiryMutation();

  const isCommercial = category === "commercial";

  const set = (field: keyof FormValues, value: string) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    const payload = {
      fullName: values.fullName,
      emailAddress: values.email,
      postcode: values.phone,
      preferredService: selectedService ?? category,
      specificRequirements: buildRequirementsText(values, category, configuratorData),
    };

    submitMutation.mutate(payload, {
      onSuccess,
    });
  };

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-qf-header]", { autoAlpha: 0, y: 28, duration: 0.65 })
        .from(
          "[data-qf-panel]",
          { autoAlpha: 0, y: 24, scale: 0.98, duration: 0.7 },
          "-=0.3",
        )
        .from(
          "[data-qf-field]",
          { autoAlpha: 0, y: 18, duration: 0.45, stagger: 0.08 },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Header */}
      <div className="flex flex-col pt-24 pb-10 md:pt-24 lg:pt-28 lg:pb-12">
        <GeneralWrapper>
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 font-manrope text-sm font-semibold text-brand-muted transition-colors hover:text-primary"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>

          <div data-qf-header>
            <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
              {selectedService ?? (isCommercial ? "Commercial Quote" : "Get a Quote")}
            </p>
            <h1 className="mt-3 text-3xl font-manrope font-extrabold leading-tight text-on-surface sm:text-4xl lg:text-5xl">
              Your Details
            </h1>
            <p className="mt-3 max-w-lg font-manrope text-base leading-7 text-on-surface/60">
              Leave your contact details and our team will get back to you
              with a tailored quote.
            </p>
          </div>
        </GeneralWrapper>
      </div>

      {/* Form */}
      <section className="pb-16 pt-2">
        <GeneralWrapper>
          <div
            data-qf-panel
            className="mx-auto max-w-2xl rounded-2xl border border-primary/6 bg-white p-5 shadow-[0_16px_44px_rgba(8,10,88,0.07)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div data-qf-field className="flex flex-col gap-1.5">
                <label className="font-manrope text-[11px] font-extrabold uppercase tracking-widest text-secondary-dark-green">
                  Full Name
                </label>
                <input
                  type="text"
                  value={values.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  placeholder="e.g. James Harrington"
                  className="bg-[#F4F5F7] w-full py-3.5 px-4 font-manrope text-sm text-primary placeholder:text-grey-6 sm:text-base"
                />
              </div>

              <div data-qf-field className="flex flex-col gap-1.5">
                <label className="font-manrope text-[11px] font-extrabold uppercase tracking-widest text-secondary-dark-green">
                  Email Address
                </label>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="name@domain.com"
                  className="bg-[#F4F5F7] w-full py-3.5 px-4 font-manrope text-sm text-primary placeholder:text-grey-6 sm:text-base"
                />
              </div>

              <div
                data-qf-field
                className={`flex flex-col gap-1.5 ${isCommercial ? "" : "sm:col-span-2"}`}
              >
                <label className="font-manrope text-[11px] font-extrabold uppercase tracking-widest text-secondary-dark-green">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+44 7700 900000"
                  className="bg-[#F4F5F7] w-full py-3.5 px-4 font-manrope text-sm text-primary placeholder:text-grey-6 sm:text-base"
                />
              </div>

              {isCommercial && (
                <div data-qf-field className="flex flex-col gap-1.5">
                  <label className="font-manrope text-[11px] font-extrabold uppercase tracking-widest text-secondary-dark-green">
                    Business Type{" "}
                    <span className="font-normal normal-case text-on-surface/40">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={values.businessType}
                    onChange={(e) => set("businessType", e.target.value)}
                    placeholder="e.g. Office, Care Home"
                    className="bg-[#F4F5F7] w-full py-3.5 px-4 font-manrope text-sm text-primary placeholder:text-grey-6 sm:text-base"
                  />
                </div>
              )}
            </div>

            <div data-qf-field className="mt-4 flex flex-col gap-1.5 sm:mt-6">
              <label className="font-manrope text-[11px] font-extrabold uppercase tracking-widest text-secondary-dark-green">
                {isCommercial ? "Message / Requirements" : "Additional Notes"}{" "}
                <span className="font-normal normal-case text-on-surface/40">
                  (optional)
                </span>
              </label>
              <textarea
                rows={4}
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder={
                  isCommercial
                    ? "Tell us about your space and cleaning requirements…"
                    : "Anything else we should know?"
                }
                className="bg-[#F4F5F7] w-full py-3.5 px-4 font-manrope text-sm text-primary placeholder:text-grey-6 sm:text-base"
              />
            </div>

            <div className="mt-7 sm:mt-8">
              <Button
                type="button"
                variant="lime"
                className="w-full py-4 sm:w-auto sm:min-w-56"
                disabled={submitMutation.isPending}
                onClick={handleSubmit}
              >
                {submitMutation.isPending ? "Submitting…" : "Submit Quote Request"}
              </Button>
            </div>

            {submitMutation.isError && (
              <p className="mt-4 font-manrope text-sm font-semibold text-red-600">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </div>
        </GeneralWrapper>
      </section>
    </div>
  );
}
