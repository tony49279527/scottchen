export type InquiryType = "quote" | "sample";

export interface AttributionFields {
  landingPage: string;
  sourcePage: string;
  locale: "en" | "zh-CN";
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  formStartedAt: string;
  /** Honeypot field; must be empty for legitimate submissions. */
  hpField?: string;
}

export interface QuoteInquiryPayload extends AttributionFields {
  type: "quote";
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  buyerType: string;
  productCategory: string;
  quantity: string;
  customPackaging: string;
  targetMarket: string;
  message: string;
}

export interface SampleInquiryPayload extends AttributionFields {
  type: "sample";
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  website: string;
  categories: string[];
  application: string;
  targetMaterial: string;
  estimatedQuantity: string;
  oemNeeded: string;
  message: string;
}

export type InquiryPayload = QuoteInquiryPayload | SampleInquiryPayload;

export interface InquiryApiResponse {
  ok: boolean;
  message?: string;
}

export interface InquiryAnalyticsEvent {
  event:
    | "quote_cta_click"
    | "sample_cta_click"
    | "quote_form_start"
    | "sample_form_start"
    | "quote_form_validation_error"
    | "sample_form_validation_error"
    | "quote_submit_success"
    | "quote_submit_error"
    | "sample_submit_success"
    | "sample_submit_error"
    | "catalog_download";
  locale: "en" | "zh-CN";
  formType?: InquiryType;
  category?: string;
  buyerType?: string;
  sourcePage?: string;
}
