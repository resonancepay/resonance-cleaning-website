"use client";

import { useEffect, useState } from "react";
import { CategoryLanding } from "./components/category-landing";
import { DomesticServicesView } from "./components/domestic-services-view";
import { CommercialServicesView } from "./components/commercial-services-view";
import { SpecialServicesView } from "./components/special-services-view";
import { DomesticConfigurator } from "./components/domestic-configurator";
import { QuoteForm } from "./components/quote-form";
import { QuoteConfirmation } from "./components/quote-confirmation";
import type { ServiceCategory, DomesticService, SpecialService } from "./data/services-v2-data";
import type { ConfiguratorData } from "./components/domestic-configurator";

type Step =
  | "landing"
  | "category"
  | "configurator"
  | "form"
  | "confirmation";

type FlowState = {
  step: Step;
  category: ServiceCategory | null;
  selectedService: string | null;
  configuratorData: ConfiguratorData | null;
};

const initialState: FlowState = {
  step: "landing",
  category: null,
  selectedService: null,
  configuratorData: null,
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function ServicesV2Page() {
  const [flow, setFlow] = useState<FlowState>(initialState);

  useEffect(() => {
    scrollToTop();
  }, [flow.step]);

  const goToCategory = (category: ServiceCategory) => {
    setFlow({ ...initialState, step: "category", category });
  };

  const goToConfigurator = (service: DomesticService) => {
    setFlow((prev) => ({
      ...prev,
      step: "configurator",
      selectedService: service.name,
    }));
  };

  const goToFormFromCommercial = () => {
    setFlow((prev) => ({
      ...prev,
      step: "form",
      selectedService: "Commercial Cleaning",
    }));
  };

  const goToFormFromSpecial = (service: SpecialService) => {
    setFlow((prev) => ({
      ...prev,
      step: "form",
      selectedService: service.name,
    }));
  };

  const goToFormFromConfigurator = (data: ConfiguratorData) => {
    setFlow((prev) => ({
      ...prev,
      step: "form",
      configuratorData: data,
    }));
  };

  const goToConfirmation = () => {
    setFlow((prev) => ({ ...prev, step: "confirmation" }));
  };

  const goBack = () => {
    if (flow.step === "confirmation") {
      setFlow(initialState);
      return;
    }

    if (flow.step === "form") {
      if (flow.category === "domestic" && flow.configuratorData) {
        setFlow((prev) => ({
          ...prev,
          step: "configurator",
          configuratorData: null,
        }));
        return;
      }
      setFlow((prev) => ({ ...prev, step: "category" }));
      return;
    }

    if (flow.step === "configurator") {
      setFlow((prev) => ({ ...prev, step: "category" }));
      return;
    }

    setFlow(initialState);
  };

  return (
    <>
      {flow.step === "landing" && (
        <CategoryLanding onSelectCategory={goToCategory} />
      )}

      {flow.step === "category" && flow.category === "domestic" && (
        <DomesticServicesView
          onSelectService={goToConfigurator}
          onBack={() => setFlow(initialState)}
        />
      )}

      {flow.step === "category" && flow.category === "commercial" && (
        <CommercialServicesView
          onGetQuote={goToFormFromCommercial}
          onBack={() => setFlow(initialState)}
        />
      )}

      {flow.step === "category" && flow.category === "special" && (
        <SpecialServicesView
          onSelectService={goToFormFromSpecial}
          onBack={() => setFlow(initialState)}
        />
      )}

      {flow.step === "configurator" && flow.category === "domestic" && (
        <DomesticConfigurator
          serviceName={flow.selectedService ?? "Domestic Cleaning"}
          onProceed={goToFormFromConfigurator}
          onBack={() => setFlow((prev) => ({ ...prev, step: "category" }))}
        />
      )}

      {flow.step === "form" && flow.category !== null && (
        <QuoteForm
          category={flow.category}
          selectedService={flow.selectedService}
          configuratorData={flow.configuratorData}
          onSuccess={goToConfirmation}
          onBack={goBack}
        />
      )}

      {flow.step === "confirmation" && (
        <QuoteConfirmation
          serviceName={flow.selectedService}
          onStartOver={() => setFlow(initialState)}
        />
      )}
    </>
  );
}
