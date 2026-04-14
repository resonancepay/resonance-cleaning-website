import { Suspense } from "react";
import { GetAQuotePage } from "@/features/get-a-quote/get-a-quote-page";

export default function GetAQuoteRoute() {
  return (
    <Suspense fallback={null}>
      <GetAQuotePage />
    </Suspense>
  );
}
