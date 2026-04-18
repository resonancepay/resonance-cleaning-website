import { api } from "@/common/api";
import type {
  QuoteSubmissionPayload,
  QuoteSubmissionResponse,
} from "../types/quote.types";

export const quoteService = {
  submitQuote: (payload: QuoteSubmissionPayload) =>
    api.post<QuoteSubmissionResponse, QuoteSubmissionPayload>(
      "/getaquote",
      payload,
    ),
};

