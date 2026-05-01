"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Button } from "@/common/components/button";
import { domesticServices } from "../data/services-v2-data";
import type { DomesticService } from "../data/services-v2-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type DomesticServicesViewProps = {
  onSelectService: (service: DomesticService) => void;
  onBack: () => void;
};

export function DomesticServicesView({
  onSelectService,
  onBack,
}: DomesticServicesViewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? domesticServices.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.tagline.toLowerCase().includes(query.toLowerCase()),
      )
    : domesticServices;

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-ds-header]", { autoAlpha: 0, y: 30, duration: 0.7 })
        .from(
          "[data-ds-sub]",
          { autoAlpha: 0, y: 20, duration: 0.6 },
          "-=0.35",
        )
        .from(
          "[data-ds-search]",
          { autoAlpha: 0, y: 16, duration: 0.5 },
          "-=0.3",
        );

      gsap.from("[data-ds-card]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.55,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-ds-grid]",
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
            All Services
          </button>

          <div data-ds-header>
            <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
              Domestic Cleaning
            </p>
            <h1 className="mt-3 text-3xl font-manrope font-extrabold leading-tight text-on-surface sm:text-4xl lg:text-6xl">
              Choose Your Service
            </h1>
          </div>
          <p
            data-ds-sub
            className="mt-4 max-w-xl font-manrope text-base leading-8 text-on-surface/65 lg:text-lg"
          >
            Select the service that fits your needs. Each quote is tailored
            to your space and requirements.
          </p>

          {/* Search */}
          <div data-ds-search className="mt-6 w-full max-w-md">
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
                placeholder="Search services…"
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
        </GeneralWrapper>
      </div>

      {/* Services grid */}
      <section className="pb-16 pt-2">
        <GeneralWrapper>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center py-16 text-center">
              <p className="font-manrope text-lg font-extrabold text-on-surface">
                No services found
              </p>
              <p className="mt-2 font-manrope text-sm text-on-surface/50">
                Try a different search term.
              </p>
            </div>
          ) : (
            <div
              data-ds-grid
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((service) => (
                <article
                  key={service.id}
                  data-ds-card
                  className="group flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-[0_8px_28px_rgba(8,10,88,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_44px_rgba(8,10,88,0.1)]"
                >
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-manrope text-base font-extrabold text-on-surface sm:text-lg">
                      {service.name}
                    </h2>
                    <p className="mt-1.5 flex-1 font-manrope text-sm leading-6 text-on-surface/60">
                      {service.tagline}
                    </p>
                    <div className="mt-4">
                      <Button
                        variant="lime"
                        className="w-full py-3"
                        onClick={() => onSelectService(service)}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </GeneralWrapper>
      </section>
    </div>
  );
}
