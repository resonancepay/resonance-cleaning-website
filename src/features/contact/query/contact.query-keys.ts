export const contactQueryKeys = {
  all: ["contact"] as const,
  officeDetails: () => [...contactQueryKeys.all, "office-details"] as const,
  detailCards: () => [...contactQueryKeys.all, "detail-cards"] as const,
} as const;

