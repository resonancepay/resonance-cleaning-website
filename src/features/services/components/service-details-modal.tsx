"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/common/components/button";
import brushIcon from "@/assets/svgs/brush-icon.svg";
import arrowRight from "@/assets/svgs/arrow-right.svg";
import checkeredIcon from "@/assets/svgs/checkered.svg";
import type { ServiceProtocol } from "../data/service-protocols";

type ServiceDetailsModalProps = {
  service: ServiceProtocol | null;
  onClose: () => void;
};

export function ServiceDetailsModal({
  onClose,
  service,
}: ServiceDetailsModalProps) {
  const router = useRouter();
  const [selectedKeyAreas, setSelectedKeyAreas] = useState<string[]>(
    service ? [...service.keyAreas] : [],
  );

  useEffect(() => {
    if (!service) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, service]);

  const toggleKeyArea = (item: string) => {
    setSelectedKeyAreas((current) =>
      current.includes(item)
        ? current.filter((entry) => entry !== item)
        : [...current, item],
    );
  };

  const handleBookThisProtocol = () => {
    const params = new URLSearchParams();

    params.set("service", service.slug);

    if (selectedKeyAreas.length > 0) {
      params.set("areas", selectedKeyAreas.join("|"));
    }

    router.push(`/get-a-quote?${params.toString()}`);
    onClose();
  };

  if (!service || typeof document === "undefined") {
    return null;
  }

  function CheckMarker({ checked }: { checked: boolean }) {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition ${
          checked
            ? "border-accent-lime text-accent-lime"
            : "border-accent-lime/55 text-transparent"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="m5.5 12 4.2 4.2L18.5 7.5"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-primary/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex min-h-screen items-center justify-center p-3 sm:p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="w-full max-w-4xl overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_80px_rgba(8,10,88,0.2)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 border-b border-primary/8 px-4 py-4 sm:px-7 sm:py-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-surface-container-low px-3 py-2">
                <Image
                  src={brushIcon}
                  alt=""
                  className="h-4 w-4 object-contain"
                />
                <p className="text-[10px] font-manrope font-extrabold uppercase tracking-[0.22em] text-secondary">
                  Protocol Details
                </p>
              </div>
              <h2
                id="service-modal-title"
                className="mt-4 font-manrope text-xl font-extrabold text-primary sm:mt-6 sm:text-4xl lg:text-6xl"
              >
                {service.serviceName} Protocols
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close service details"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary/55 transition hover:bg-primary/6 hover:text-primary"
              onClick={onClose}
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
          </div>

          <div className="flex flex-col gap-8 p-4 sm:p-6 lg:flex-row lg:items-start lg:gap-10 lg:p-8">
            <div className="w-full">
              <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                Select Key Focus Areas
              </p>
              <div className="mt-5 flex flex-col sm:mt-7">
                {service.keyAreas.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selectedKeyAreas.includes(item)}
                    className="flex items-start gap-3 rounded-xl px-1 py-2 text-left transition"
                    onClick={() => toggleKeyArea(item)}
                  >
                    <span className="mt-1 shrink-0">
                      <CheckMarker checked={selectedKeyAreas.includes(item)} />
                    </span>
                    <p className="text-sm font-manrope leading-6 text-primary sm:text-base">
                      {item}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col justify-end">
              <div className="rounded-3xl border-l-4 border-accent-lime bg-surface-container-low p-4">
                <div>
                  <div className="flex items-center gap-4">
                    <Image src={checkeredIcon} alt="" />
                    <p className="text-sm font-manrope font-extrabold uppercase text-primary">
                      Special Focus
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col gap-5">
                    {service.specialFocus.map((item) => (
                      <p
                        key={item}
                        className="text-sm font-manrope leading-6 text-primary/74 sm:text-base"
                      >
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  type="button"
                  className="w-full py-4 text-sm uppercase tracking-[0.18em] sm:py-5"
                  rightIcon={arrowRight}
                  onClick={handleBookThisProtocol}
                >
                  Book This Protocol
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
