import {
  absoluteUrl,
  SITE_EMAIL,
  SITE_NAME,
  SITE_UPDATED,
  SITE_URL,
} from "@/lib/site";

/** Canonical Organization node. Keep Brand as a related entity, not as #organization. */
export function buildOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/images/hero_abrasives_kit.webp"),
    slogan: "B2B Abrasive Sourcing & Project Support",
    description:
      "B2B sourcing and private-label support for abrasive, sanding and polishing accessory kits.",
    dateModified: SITE_UPDATED,
    knowsAbout: [
      "Coated abrasives",
      "Cotton buffing wheels",
      "Spiral stitched polishing wheels",
      "Wet/dry sandpaper sheets",
      "Sanding discs and flap discs",
      "Zirconia fiber grinding discs",
      "Drywall sanding screens",
      "Private-label tool accessory kits",
      "Retail packaging and barcode preparation",
      "B2B abrasive supplier evaluation",
    ],
    brand: {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE_EMAIL,
        availableLanguage: ["en", "zh-CN"],
      },
    ],
  };
}

export function buildFaqPageSchema(
  faqs: ReadonlyArray<{ q: string; a: string }>
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildProductGroupProperties(
  properties: ReadonlyArray<{ name: string; value: string }>
) {
  return properties.map((property) => ({
    "@type": "PropertyValue",
    name: property.name,
    value: property.value,
  }));
}
