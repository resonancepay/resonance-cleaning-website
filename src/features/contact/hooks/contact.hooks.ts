import { useMutation, useQuery } from "@tanstack/react-query";

import { contactQueryKeys } from "../query/contact.query-keys";
import { contactService } from "../services/contact.service";
import type { ContactInquiryPayload } from "../types/contact.types";

export const useContactOfficeDetailsQuery = (enabled = true) =>
  useQuery({
    queryKey: contactQueryKeys.officeDetails(),
    queryFn: contactService.fetchOfficeDetails,
    enabled,
  });

export const useContactDetailCardsQuery = (enabled = true) =>
  useQuery({
    queryKey: contactQueryKeys.detailCards(),
    queryFn: contactService.fetchDetailCards,
    enabled,
  });

export const useSubmitContactInquiryMutation = () =>
  useMutation({
    mutationFn: (payload: ContactInquiryPayload) => contactService.submitInquiry(payload),
  });

