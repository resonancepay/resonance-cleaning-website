"use client";

import { useState } from "react";
import { GeneralWrapper } from "@/common/components/wrapper/general-wrapper";
import { ServiceBanner } from "./components/service-banner";
import { ServiceContainer } from "./components/service-container";
import { ServiceDetailsModal } from "./components/service-details-modal";
import { serviceProtocols } from "./data/service-protocols";
import type { ServiceProtocol } from "./data/service-protocols";

const services = serviceProtocols;

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceProtocol | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");

  const normalizeText = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const normalizedQuery = normalizeText(searchQuery);
  const filteredServices = services.filter((service) => {
    if (!normalizedQuery) {
      return true;
    }

    const searchIndex = [
      service.serviceName,
      `${service.serviceName} cleaning`,
      ...service.keyAreas,
      ...service.specialFocus,
    ]
      .join(" ")
      .replace(/[^a-zA-Z0-9\s]/g, " ");

    const normalizedIndex = normalizeText(searchIndex);

    return normalizedIndex.includes(normalizedQuery);
  });

  return (
    <>
      <ServiceBanner />
      <section className="pb-4">
        <GeneralWrapper>
          <div className="rounded-3xl border border-primary/8 bg-white p-4 shadow-[0_16px_40px_rgba(8,10,88,0.06)] sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                  Search Services
                </p>
                <p className="mt-2 text-sm font-manrope text-on-surface/68">
                  Search by service name, room type, or specialist focus.
                </p>
              </div>
              <p className="text-sm font-manrope font-bold text-primary/60">
                {filteredServices.length} result
                {filteredServices.length === 1 ? "" : "s"}
              </p>
            </div>

            <label className="mt-4 flex items-center gap-3 rounded-[1rem] border border-primary/10 bg-surface-container-low px-4 py-3">
              <span className="text-primary/45" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="m16 16 4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search bathroom, kitchen, office, or room-specific care..."
                className="w-full bg-transparent font-manrope text-sm text-primary outline-none placeholder:text-primary/35"
              />
            </label>
          </div>
        </GeneralWrapper>
      </section>
      {filteredServices.length > 0 ? (
        filteredServices.map((service, index) => (
          <ServiceContainer
            key={service.serviceName}
            image={service.image}
            isReversed={index % 2 === 1}
            keyAreas={service.keyAreas}
            onOpenDetails={() => setSelectedService(service)}
            revealImmediately={Boolean(normalizedQuery)}
            serviceName={service.serviceName}
            specialFocus={service.specialFocus}
          />
        ))
      ) : (
        <section className="py-10">
          <GeneralWrapper>
            <div className="rounded-[1.5rem] border border-dashed border-primary/12 bg-surface-container-low px-6 py-10 text-center">
              <p className="text-sm font-manrope font-extrabold uppercase tracking-[0.18em] text-secondary">
                No Matching Service
              </p>
              <p className="mt-3 font-manrope text-base text-on-surface/68">
                No service matches &quot;{searchQuery}&quot;. Try a room type,
                service name, or specialist focus area.
              </p>
            </div>
          </GeneralWrapper>
        </section>
      )}
      <ServiceDetailsModal
        key={selectedService?.serviceName ?? "service-details-modal"}
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
