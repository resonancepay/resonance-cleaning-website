import { QuoteBanner } from "./components/quote-banner";
import { QuoteDetails } from "./components/quote-details";

export function GetAQuotePage() {
  return (
    <>
      <QuoteBanner />
      <QuoteDetails />
    </>
  );
}
