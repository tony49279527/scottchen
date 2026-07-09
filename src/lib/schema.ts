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
