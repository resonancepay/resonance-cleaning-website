"use client";

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { Button } from "@/common/components/button";
import { roomOptions, applianceOptions } from "../data/services-v2-data";
import gsap from "gsap";

export type ConfiguratorData = {
  rooms: Record<string, number>;
  items: Record<string, number>;
};

type DomesticConfiguratorProps = {
  serviceName: string;
  onProceed: (data: ConfiguratorData) => void;
  onBack: () => void;
};

function QuantityControl({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (next: number) => void;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-4 py-3.5 transition-colors duration-200 ${
        value > 0
          ? "border-secondary/40 bg-secondary-container/30"
          : "border-primary/8 bg-white"
      }`}
    >
      <span
        className={`font-manrope text-sm font-semibold ${
          value > 0 ? "text-on-surface" : "text-on-surface/70"
        }`}
      >
        {label}
      </span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value === 0}
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/12 bg-white font-manrope text-lg font-bold text-primary/70 transition-colors hover:border-primary/30 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-30"
        >
          −
        </button>

        <span className="w-5 text-center font-manrope text-sm font-extrabold text-on-surface">
          {value}
        </span>

        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(value + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-manrope text-lg font-bold text-white transition-colors hover:bg-primary/80"
        >
          +
        </button>
      </div>
    </div>
  );
}

function buildInitialCounts(options: { id: string }[]) {
  return Object.fromEntries(options.map((o) => [o.id, 0]));
}

export function DomesticConfigurator({
  serviceName,
  onProceed,
  onBack,
}: DomesticConfiguratorProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [rooms, setRooms] = useState<Record<string, number>>(() =>
    buildInitialCounts(roomOptions),
  );
  const [items, setItems] = useState<Record<string, number>>(() =>
    buildInitialCounts(applianceOptions),
  );

  const setRoom = useCallback(
    (id: string, value: number) =>
      setRooms((prev) => ({ ...prev, [id]: value })),
    [],
  );
  const setItem = useCallback(
    (id: string, value: number) =>
      setItems((prev) => ({ ...prev, [id]: value })),
    [],
  );

  const totalSelected =
    Object.values(rooms).reduce((a, b) => a + b, 0) +
    Object.values(items).reduce((a, b) => a + b, 0);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-cfg-header]", { autoAlpha: 0, y: 28, duration: 0.65 })
        .from(
          "[data-cfg-panel]",
          { autoAlpha: 0, y: 24, duration: 0.6, stagger: 0.1 },
          "-=0.3",
        )
        .from(
          "[data-cfg-row]",
          { autoAlpha: 0, x: -14, duration: 0.4, stagger: 0.04 },
          "-=0.25",
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
            Back to Services
          </button>

          <div data-cfg-header>
            <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
              Configure Your Clean
            </p>
            <h1 className="mt-3 text-3xl font-manrope font-extrabold leading-tight text-on-surface sm:text-4xl lg:text-5xl">
              {serviceName}
            </h1>
            <p className="mt-3 max-w-lg font-manrope text-base leading-7 text-on-surface/60">
              Tell us about your space so we can build an accurate quote.
              Select the rooms and appliances you&apos;d like included.
            </p>
          </div>
        </GeneralWrapper>
      </div>

      {/* Configurator panels */}
      <section className="pb-16 pt-2">
        <GeneralWrapper>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Rooms */}
            <div
              data-cfg-panel
              className="rounded-2xl border border-primary/6 bg-white p-5 shadow-[0_8px_28px_rgba(8,10,88,0.05)] sm:p-6"
            >
              <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
                Rooms
              </p>
              <h2 className="mt-1.5 font-manrope text-xl font-extrabold text-on-surface">
                Select Rooms
              </h2>
              <p className="mt-1 font-manrope text-sm text-on-surface/55">
                Add the number of each room type to be cleaned.
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                {roomOptions.map((room) => (
                  <div key={room.id} data-cfg-row>
                    <QuantityControl
                      label={room.label}
                      value={rooms[room.id] ?? 0}
                      onChange={(val) => setRoom(room.id, val)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Appliances */}
            <div
              data-cfg-panel
              className="rounded-2xl border border-primary/6 bg-white p-5 shadow-[0_8px_28px_rgba(8,10,88,0.05)] sm:p-6"
            >
              <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
                Items & Appliances
              </p>
              <h2 className="mt-1.5 font-manrope text-xl font-extrabold text-on-surface">
                Select Appliances
              </h2>
              <p className="mt-1 font-manrope text-sm text-on-surface/55">
                Include specific appliances that need attention.
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                {applianceOptions.map((appliance) => (
                  <div key={appliance.id} data-cfg-row>
                    <QuantityControl
                      label={appliance.label}
                      value={items[appliance.id] ?? 0}
                      onChange={(val) => setItem(appliance.id, val)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary + CTA */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/6 bg-white px-5 py-5 shadow-[0_8px_28px_rgba(8,10,88,0.05)] sm:flex-row sm:px-6">
            <div>
              <p className="font-manrope text-sm font-extrabold text-on-surface">
                {totalSelected > 0
                  ? `${totalSelected} item${totalSelected === 1 ? "" : "s"} selected`
                  : "Nothing selected yet"}
              </p>
              <p className="mt-0.5 font-manrope text-xs text-on-surface/50">
                You can also proceed without selections — our team will follow
                up for details.
              </p>
            </div>
            <Button
              variant="primary"
              className="w-full py-3.5 sm:w-auto sm:min-w-44"
              onClick={() => onProceed({ rooms, items })}
            >
              Get Quote
            </Button>
          </div>
        </GeneralWrapper>
      </section>
    </div>
  );
}
