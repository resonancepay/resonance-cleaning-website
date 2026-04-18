import { useMutation } from "@tanstack/react-query";
import { quoteService } from "../services/quote.service";
import type { QuoteSubmissionPayload } from "../types/quote.types";

export const useSubmitQuoteMutation = () =>
  useMutation({
    mutationFn: (payload: QuoteSubmissionPayload) =>
      quoteService.submitQuote(payload),
  });

