"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Button } from "@/common/components/button";
import { categoryCards } from "../data/services-v2-data";
import type { ServiceCategory } from "../data/services-v2-data";
import brushIcon from "@/assets/svgs/brush-icon.svg";
import gsap from "gsap";

type CategoryLandingProps = {
  onSelectCategory: (category: ServiceCategory) => void;
};

export function CategoryLanding({ onSelectCategory }: CategoryLandingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-v2-badge]", { autoAlpha: 0, y: 18, duration: 0.55 })
        .from(
          "[data-v2-heading]",
          { autoAlpha: 0, y: 42, duration: 0.9, stagger: 0.1 },
          "-=0.2",
        )
        .from(
          "[data-v2-copy]",
          { autoAlpha: 0, y: 20, duration: 0.7 },
          "-=0.4",
        )
        .from(
          "[data-v2-card]",
          { autoAlpha: 0, y: 36, duration: 0.7, stagger: 0.14 },
          "-=0.35",
        );

      gsap.to("[data-v2-badge]", {
        yPercent: -8,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Hero banner */}
      <div className="flex flex-col pt-24 pb-10 md:pt-24 lg:pt-28 lg:pb-14">
        <GeneralWrapper>
          <div className="flex flex-col items-start">
            <div data-v2-badge>
              <div className="flex items-center gap-2 rounded-sm bg-grey-3 px-4 py-1">
                <Image src={brushIcon} alt="" />
                <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
                  Excellence Defined
                </p>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="text-4xl font-manrope font-extrabold leading-[0.95] sm:text-5xl lg:text-7xl">
                <p data-v2-heading className="text-on-surface">
                  World-Class
                </p>
                <p data-v2-heading className="text-secondary">
                  Cleaning Services
                </p>
              </div>
              <div className="flex w-full items-start justify-start lg:w-1/2 lg:justify-end">
                <p
                  data-v2-copy
                  className="w-full max-w-none font-manrope text-base leading-8 text-on-surface/70 lg:w-1/2 lg:text-lg"
                >
                  Choose the service path that fits your needs — domestic,
                  commercial, or specialist. Every quote is tailored to you.
                </p>
              </div>
            </div>
          </div>
        </GeneralWrapper>
      </div>

      {/* Category cards */}
      <section className="pb-16 pt-4">
        <GeneralWrapper>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((card) => (
              <div
                key={card.id}
                data-v2-card
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(8,10,88,0.07)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-72">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-manrope text-xl font-extrabold text-white sm:text-2xl">
                      {card.title}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <p className="font-manrope text-sm leading-7 text-on-surface/68 sm:text-base sm:leading-8">
                    {card.description}
                  </p>
                  <div className="mt-5">
                    <Button
                      variant="primary"
                      className="w-full py-3.5"
                      onClick={() => onSelectCategory(card.id)}
                    >
                      {card.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GeneralWrapper>
      </section>
    </div>
  );
}
