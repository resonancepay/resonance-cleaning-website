export interface QuoteSubmissionPayload {
  fullname: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  key_areas: string[];
  special_focus: string[];
  frequency: string;
  start_date: string;
  requirements: string;
}

export interface QuoteSubmissionResponse {
  message: string;
  referenceId?: string;
  submittedAt?: string;
}

