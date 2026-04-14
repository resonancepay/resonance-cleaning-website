export interface ContactOfficeDetails {
  title: string;
  locationLabel: string;
  addressLines: string[];
  directLineLabel: string;
  phoneNumber: string;
  emailAddress: string;
  operatingHoursLabel: string;
  operatingHours: string[];
  onlineStatusLabel: string;
  onlineStatus: string;
}

export interface ContactDetailCard {
  label: string;
  value: string;
  description: string;
}

export interface ContactInquiryPayload {
  fullName: string;
  postcode: string;
  emailAddress: string;
  preferredService: string;
  specificRequirements: string;
}

export interface ContactInquiryResponse {
  message: string;
  referenceId?: string;
  submittedAt?: string;
}

