import { api } from "@/common/api";
import type {
  ContactDetailCard,
  ContactInquiryPayload,
  ContactInquiryResponse,
  ContactOfficeDetails,
} from "../types/contact.types";

export const contactService = {
  fetchOfficeDetails: () => api.get<ContactOfficeDetails>("/contact/office"),
  fetchDetailCards: () => api.get<ContactDetailCard[]>("/contact/detail-cards"),
  submitInquiry: (payload: ContactInquiryPayload) =>
    api.post<ContactInquiryResponse, ContactInquiryPayload>("/contact/inquiries", payload),
};

