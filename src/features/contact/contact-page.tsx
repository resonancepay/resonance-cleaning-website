"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const contactChannels = [
  {
    label: "Email",
    value: "hello@resonancecleaning.com",
    description: "Best for briefs, access notes, and ongoing service coordination.",
  },
  {
    label: "Phone",
    value: "+234 800 000 0000",
    description: "For urgent scheduling updates and inspection requests.",
  },
  {
    label: "Hours",
    value: "Mon - Sat / 7am - 8pm",
    description: "After-hours coordination remains available for active clients.",
  },
];

export function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set("[data-contact-hero]", { autoAlpha: 0, y: 28 });
      gsap.set("[data-contact-card]", { autoAlpha: 0, y: 28, scale: 0.98 });
      gsap.set("[data-contact-glow]", { scale: 0.84, opacity: 0.22 });
      gsap.set("[data-contact-rule]", { scaleX: 0, transformOrigin: "left center" });
      gsap.set("[data-contact-panel]", { autoAlpha: 0, y: 18, scale: 0.98 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      timeline
        .to("[data-contact-glow]", {
          scale: 1,
          opacity: 0.38,
          duration: 1.2,
        })
        .to(
          "[data-contact-hero]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.55",
        )
        .to(
          "[data-contact-rule]",
          {
            scaleX: 1,
            duration: 0.55,
          },
          "-=0.35",
        )
        .to(
          "[data-contact-panel]",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
          },
          "-=0.4",
        )
        .to(
          "[data-contact-card]",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
          },
          "-=0.4",
        );

      gsap.to("[data-contact-glow]", {
        yPercent: -8,
        xPercent: 5,
        duration: 7.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-contact-panel]", {
        yPercent: -2,
        duration: 5,
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
    <main className="flex-1">
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-primary"
      >
        <div
          data-contact-glow
          className="pointer-events-none absolute -left-8 top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(163,223,66,0.18)_0%,rgba(163,223,66,0.06)_36%,transparent_74%)] blur-[1px] lg:h-72 lg:w-72"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-4 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-6">
          <div
            data-contact-hero
            className="relative flex min-h-[72svh] overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#080a58_0%,#090f68_48%,#101777_100%)] px-7 py-8 sm:px-10 sm:py-10 lg:min-h-[calc(100svh-3rem)] lg:px-14 lg:py-14"
          >
            <div className="accent-orb" aria-hidden="true" />
            <div className="relative flex w-full flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl lg:max-w-[40rem]">
                <div className="mb-5 flex items-center gap-4">
                  <span
                    data-contact-rule
                    className="h-px w-12 bg-accent-lime/85 sm:w-16"
                  />
                  <p className="label-text text-[var(--accent-lime)]">
                    Inquiry concierge
                  </p>
                </div>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.02em] text-[var(--on-primary)] sm:text-6xl lg:text-7xl xl:text-[5.8rem]">
                  Concierge
                  <br />
                  Support
                  <br />
                  at Your Service.
                </h1>
                <p className="mt-7 max-w-xl text-base leading-8 tracking-[0.01em] text-white/76 sm:text-lg">
                  Use this page for direct conversations, site reviews, or handoff planning for new spaces
                  entering the schedule.
                </p>
              </div>

              <div
                data-contact-panel
                className="w-full max-w-md self-start rounded-[1.5rem] border border-white/10 bg-white/8 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.16)] backdrop-blur-2xl sm:p-8 lg:mb-12"
              >
                <p className="text-sm font-manrope font-bold uppercase tracking-[0.22em] text-accent-lime">
                  Experience
                </p>
                <p className="mt-5 max-w-md text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
                  Experience the pinnacle of estate management with dedicated support tailored to your lifestyle and standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-10 px-5 pb-12 sm:px-8 lg:-mt-20 lg:px-10 lg:pb-16">
          <div className="mx-auto max-w-7xl">
            <div
              data-contact-shell
              className="surface-group rounded-[2rem] p-4 sm:p-6"
            >
              <div className="grid gap-4">
                {contactChannels.map((channel, index) => (
                  <article
                    key={channel.label}
                    data-contact-card
                    className={`rounded-[1.5rem] p-7 ${
                      index % 2 === 0 ? "surface-panel" : "surface-soft"
                    }`}
                  >
                    <p className="label-text text-[var(--secondary-dark-green)]">
                      {channel.label}
                    </p>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.02em] text-[var(--primary)]">
                      {channel.value}
                    </h2>
                    <p className="mt-4 text-sm leading-7 tracking-[0.01em] text-[var(--on-surface-variant)] sm:text-base sm:leading-8">
                      {channel.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
