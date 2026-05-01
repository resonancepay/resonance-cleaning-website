"use client";

import { useLayoutEffect, useRef } from "react";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Button } from "@/common/components/button";
import checkIcon from "@/assets/svgs/check-icon.svg";
import Image from "next/image";
import gsap from "gsap";

type QuoteConfirmationProps = {
  serviceName: string | null;
  onStartOver: () => void;
};

export function QuoteConfirmation({
  serviceName,
  onStartOver,
}: QuoteConfirmationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-qc-icon]", {
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.8)",
      })
        .from(
          "[data-qc-title]",
          { autoAlpha: 0, y: 24, duration: 0.65 },
          "-=0.25",
        )
        .from(
          "[data-qc-message]",
          { autoAlpha: 0, y: 18, duration: 0.55 },
          "-=0.3",
        )
        .from(
          "[data-qc-cta]",
          { autoAlpha: 0, y: 14, duration: 0.5 },
          "-=0.25",
        );

      gsap.to("[data-qc-icon]", {
        yPercent: -8,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex min-h-[70svh] flex-col items-center justify-center py-20"
    >
      <GeneralWrapper>
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          {/* Check icon */}
          <div
            data-qc-icon
            className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-container shadow-[0_8px_32px_rgba(39,108,0,0.18)]"
          >
            <Image
              src={checkIcon}
              alt="Request received"
              className="h-10 w-10"
            />
          </div>

          {/* Heading */}
          <h1
            data-qc-title
            className="mt-7 text-3xl font-manrope font-extrabold text-on-surface sm:text-4xl"
          >
            Request Received
          </h1>

          {/* Service name chip */}
          {serviceName && (
            <div className="mt-3">
              <span className="inline-flex items-center rounded-full bg-grey-3 px-4 py-1.5 font-manrope text-xs font-extrabold uppercase tracking-widest text-secondary">
                {serviceName}
              </span>
            </div>
          )}

          {/* Confirmation message */}
          <div
            data-qc-message
            className="mt-6 rounded-2xl border border-secondary/20 bg-secondary-container/20 px-6 py-6 sm:px-8"
          >
            <p className="font-manrope text-lg font-bold leading-8 text-on-surface sm:text-xl">
              Our sales team will contact you to provide a quote.
            </p>
            <p className="mt-3 font-manrope text-sm leading-7 text-on-surface/65">
              We aim to respond within two business hours. In the meantime,
              feel free to explore our other services.
            </p>
          </div>

          {/* CTA */}
          <div data-qc-cta className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="primary"
              className="px-8 py-3.5"
              onClick={onStartOver}
            >
              Explore More Services
            </Button>
            <Button
              variant="lime"
              className="px-8 py-3.5"
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </GeneralWrapper>
    </div>
  );
}
