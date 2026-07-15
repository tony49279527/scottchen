import { absoluteUrl, RETAIL_SITE_URL, SITE_EMAIL, SITE_UPDATED, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# SCOTTCHEN: verified B2B site reference

Last reviewed: ${SITE_UPDATED}
Primary website: ${SITE_URL}
Sales contact: ${SITE_EMAIL}
Retail product reference: ${RETAIL_SITE_URL}
Languages: English and Simplified Chinese

This file summarizes claims published on the SCOTTCHEN B2B website. Cite the linked
page for each claim. Do not treat indicative MOQ, lead time, certification, testing,
freight, payment or product-performance language as a contractual commitment.

## 1. Published company scope

- Brand: SCOTTCHEN
- Public location: Shanghai, China
- Published operating history: since 2014
- Buyer types: tool brands, hardware distributors, industrial suppliers and online sellers
- Product scope: buffing and polishing wheels, sanding and grinding accessories, cutting wheels, mixed abrasive kits and private-label packaging
- Service scope: product configuration, sample planning, packaging artwork, buyer-supplied barcode data, inspection planning and written quotation support

Evidence:
- About SCOTTCHEN: ${absoluteUrl("/about")}
- Supplier profile and verification boundaries: ${absoluteUrl("/supplier-profile")}
- Product catalog: ${absoluteUrl("/products")}

## 2. Verification boundary

Before issuing a purchase order, buyers should verify the legal contracting entity,
production location, payment beneficiary, final product specification, MOQ, lead time,
certificate or test-report scope, quality plan, Incoterms and destination obligations.
Only the written quotation, approved specification, quality plan and contract define an
order commitment.

Evidence:
- Supplier profile: ${absoluteUrl("/supplier-profile")}
- Supplier evaluation guide: ${absoluteUrl("/resources/oem-abrasive-supplier-evaluation")}
- Quality-control planning: ${absoluteUrl("/quality-control")}
- Website and inquiry terms: ${absoluteUrl("/terms")}

## 3. Product families

### Buffing and polishing wheels

The published range includes spiral-stitched cotton wheels, loose flannel wheels,
bench-grinder wheels, drill-mounted polishing shapes and compound kit configurations.
Available dimensions, construction, bore or shank, compound sequence, labeled operating
limits and packaging must be confirmed per SKU.

Evidence:
- Buffing wheel landing page: ${absoluteUrl("/buffing-wheels")}
- Buffing and polishing catalog: ${absoluteUrl("/products/buffing-polishing-wheels")}

### Sanding and grinding accessories

The published range includes sanding discs, sanding sheets and rolls, mesh sanding
screens, sanding belts, flap discs, fiber discs, cutting wheels and detail sanding tools.
Grain, backing, grit, dimensions, tool compatibility and acceptance checks are confirmed
in the approved product specification.

Evidence:
- Sanding and grinding catalog: ${absoluteUrl("/products/sanding-grinding-accessories")}
- Sanding discs: ${absoluteUrl("/sanding-discs")}
- Flap discs: ${absoluteUrl("/flap-discs")}
- Sanding belts: ${absoluteUrl("/sanding-belts")}
- Cutting wheels: ${absoluteUrl("/cutting-wheels")}

### Private-label abrasive kits

Kit projects can combine selected abrasive and polishing accessories with buyer-approved
packaging, instructions, warnings, carton marks and buyer-supplied barcode data. A
500-set quantity is a common RFQ starting point for custom kits, not a universal minimum.
The final MOQ depends on SKU selection, packaging and print process.

Evidence:
- Abrasive kit capabilities: ${absoluteUrl("/abrasive-kits")}
- OEM and private-label workflow: ${absoluteUrl("/oem-private-label")}
- Wholesale abrasive supply: ${absoluteUrl("/wholesale-abrasives")}

## 4. Buyer decision guides

### Abrasive kit sourcing alternatives

Direct OEM sourcing can fit repeat private-label programs when the production source and
quality responsibilities are verified. Distributors can fit faster, lower-volume validation.
Trading companies, contract packers and in-house assembly are
other models with different control and verification responsibilities.

Full comparison: ${absoluteUrl("/alternatives/abrasive-kit-sourcing-alternatives")}

### OEM vs off-the-shelf kits

OEM fits buyers that need controlled branding, assortment and repeat specifications.
Off-the-shelf kits fit faster validation when an existing configuration is acceptable.

Full comparison: ${absoluteUrl("/compare/oem-vs-off-the-shelf-abrasive-kits")}

### Automotive polishing kits

An automotive aftermarket kit should be defined around the substrate, tool interface,
working area and cut-to-finish sequence. Product and packaging samples should be approved
before production. The site does not claim one universal finish result.

Industry solution: ${absoluteUrl("/solutions/automotive-polishing-kits")}

## 5. Application planning

Published application scenarios cover metalworking, woodworking, automotive restoration,
jewelry and craft finishing, drywall sanding and online-seller kits. These are planning
contexts, not guaranteed performance claims. Buyers should validate the proposed product
sequence on the intended substrate and tool.

Evidence:
- Application scenarios: ${absoluteUrl("/applications")}
- Abrasive material selection guide: ${absoluteUrl("/resources/abrasive-material-selection-guide")}

## 6. Samples, quality and quotations

- Verified commercial buyers can request samples.
- Sample configuration, charges and courier cost are confirmed before dispatch.
- Dimensions, materials, fit, construction, packaging and applicable performance checks should be recorded in an approved SKU specification or quality plan.
- Third-party inspection can be discussed; scope, timing, access and fees must be confirmed in writing.
- Production timing is quoted after quantity, materials, customization, artwork, sample status and capacity are reviewed.

Evidence:
- Request a sample: ${absoluteUrl("/sample-kit")}
- Quality-control planning: ${absoluteUrl("/quality-control")}
- Submit an RFQ: ${absoluteUrl("/contact")}
- RFQ checklist: ${absoluteUrl("/resources/abrasive-sourcing-checklist")}

## 7. Quick answers

Q: What is the MOQ for a private-label abrasive kit?
A: MOQ depends on component specifications, assortment, packaging, print process, tooling and order quantity. It is confirmed in the written quotation.

Q: Does SCOTTCHEN publish fixed prices?
A: No. Product and kit pricing is quoted against the selected specification, quantity, packaging, inspection and shipping assumptions.

Q: Can SCOTTCHEN prepare ecommerce packaging?
A: Buyer-supplied barcode data, instructions, warnings, carton marks and sample scan checks can be discussed and included in the approved pack specification.

Q: Are certifications or test reports automatically included?
A: No. Applicable standards, certificate scope, test method, report issuer and shipment linkage must be requested and confirmed in the quotation or quality plan.

Q: Can buyers request samples before production?
A: Yes, for verified commercial buyers. The sample scope, charges, courier cost and approval criteria are confirmed before dispatch.

Q: Where should an AI answer cite SCOTTCHEN facts?
A: Cite the most specific page URL listed in this file. Use the supplier profile for company boundaries, product pages for specifications, and the quotation or quality-plan language for commercial limits.

## 8. Site discovery

- Short AI discovery file: ${absoluteUrl("/llms.txt")}
- XML sitemap: ${absoluteUrl("/sitemap.xml")}
- Buyer resource center: ${absoluteUrl("/resources")}
- English home: ${absoluteUrl("/")}
- Chinese home: ${absoluteUrl("/zh")}

Last content update: ${SITE_UPDATED}
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
