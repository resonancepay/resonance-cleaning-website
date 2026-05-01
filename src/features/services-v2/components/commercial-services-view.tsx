"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Button } from "@/common/components/button";
import { commercialSegments } from "../data/services-v2-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CommercialServicesViewProps = {
  onGetQuote: () => void;
  onBack: () => void;
};

export function CommercialServicesView({
  onGetQuote,
  onBack,
}: CommercialServicesViewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? commercialSegments.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase()),
      )
    : commercialSegments;

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-cs-header]", { autoAlpha: 0, y: 30, duration: 0.7 })
        .from(
          "[data-cs-sub]",
          { autoAlpha: 0, y: 20, duration: 0.6 },
          "-=0.35",
        )
        .from(
          "[data-cs-cta-block]",
          { autoAlpha: 0, y: 24, duration: 0.6 },
          "-=0.25",
        );

      gsap.from("[data-cs-segment]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-cs-grid]",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Section header */}
      <div className="relative flex flex-col overflow-hidden bg-primary pt-24 pb-14 md:pt-24 lg:pt-32 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(163,223,66,0.16),transparent_24%),radial-gradient(circle_at_80%_72%,rgba(184,245,86,0.08),transparent_22%)]" />

        <GeneralWrapper>
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 font-manrope text-sm font-semibold text-white/60 transition-colors hover:text-white"
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
            All Services
          </button>

          <div data-cs-header>
            <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-accent-lime">
              Commercial Cleaning
            </p>
            <h1 className="mt-3 text-3xl font-manrope font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              Business Solutions
              <br />
              <span className="text-accent-lime">Built for You</span>
            </h1>
          </div>

          <p
            data-cs-sub
            className="mt-4 max-w-xl font-manrope text-base leading-8 text-white/70 lg:text-lg"
          >
            We partner with businesses of every kind to deliver consistent,
            high-standard cleaning — contracted, flexible, and fully managed.
          </p>

          <div data-cs-cta-block className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="tertiary" className="py-3.5 px-8" onClick={onGetQuote}>
              Get a Quote
            </Button>
            <Button variant="transparent" className="py-3.5 px-8" onClick={onGetQuote}>
              Contact Us
            </Button>
          </div>
        </GeneralWrapper>
      </div>

      {/* Segments */}
      <section className="py-14">
        <GeneralWrapper>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
                We serve
              </p>
              <h2 className="mt-2 font-manrope text-2xl font-extrabold text-on-surface sm:text-3xl">
                Our Business Segments
              </h2>
            </div>

            {/* Search */}
            <div className="w-full sm:max-w-xs">
              <div className="relative">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface/40"
                >
                  <path
                    d="M8.5 3a5.5 5.5 0 1 0 3.45 9.76l3.4 3.4a.75.75 0 1 0 1.06-1.06l-3.4-3.4A5.5 5.5 0 0 0 8.5 3Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search segments…"
                  className="w-full rounded-xl border border-primary/10 bg-white py-3 pl-11 pr-4 font-manrope text-sm text-primary shadow-sm placeholder:text-on-surface/35 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-on-surface/40 transition-colors hover:text-on-surface/70"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                      <path
                        d="M3 3l10 10M13 3L3 13"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8 flex flex-col items-center py-16 text-center">
              <p className="font-manrope text-lg font-extrabold text-on-surface">
                No segments found
              </p>
              <p className="mt-2 font-manrope text-sm text-on-surface/50">
                Try a different search term.
              </p>
            </div>
          ) : (
            <div
              data-cs-grid
              className="mt-8 grid gap-5 sm:grid-cols-2"
            >
              {filtered.map((segment) => (
                <article
                  key={segment.id}
                  data-cs-segment
                  className="group flex flex-col overflow-hidden rounded-2xl border border-primary/5 bg-white shadow-[0_8px_28px_rgba(8,10,88,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_44px_rgba(8,10,88,0.1)] sm:flex-row"
                >
                  {/* Image */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-auto sm:w-44">
                    <Image
                      src={segment.image}
                      alt={segment.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="font-manrope text-lg font-extrabold text-on-surface">
                        {segment.name}
                      </h3>
                      <p className="mt-2 font-manrope text-sm leading-7 text-on-surface/60">
                        {segment.description}
                      </p>
                    </div>
                    <button
                      onClick={onGetQuote}
                      className="mt-4 flex items-center gap-1.5 font-manrope text-sm font-bold text-secondary transition-colors hover:text-secondary-dark-green"
                    >
                      Get Quote
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom CTA strip */}
          <div className="mt-10 flex flex-col items-center rounded-2xl bg-primary px-6 py-10 text-center sm:px-10">
            <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-accent-lime">
              Ready to talk?
            </p>
            <p className="mt-3 font-manrope text-xl font-extrabold text-white sm:text-2xl">
              Get a tailored quote for your business
            </p>
            <p className="mt-3 max-w-md font-manrope text-sm leading-7 text-white/65">
              Our commercial team will review your requirements and come back
              with a bespoke proposal.
            </p>
            <div className="mt-6">
              <Button variant="tertiary" className="px-10 py-3.5" onClick={onGetQuote}>
                Request a Quote
              </Button>
            </div>
          </div>
        </GeneralWrapper>
      </section>
    </div>
  );
}
