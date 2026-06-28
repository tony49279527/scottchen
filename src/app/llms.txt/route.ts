import { absoluteUrl, RETAIL_SITE_URL, SITE_EMAIL, SITE_UPDATED } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# SCOTTCHEN

> B2B sourcing and private-label support for abrasive, sanding and polishing accessory kits.

Last reviewed: ${SITE_UPDATED}
Sales contact: ${SITE_EMAIL}
Retail product reference: ${RETAIL_SITE_URL}

## Business scope

- Buyers served: tool brands, hardware distributors, industrial suppliers and online sellers.
- Product scope: cotton buffing wheels, sanding sheets and rolls, mesh sanding screens, grinding accessories and mixed private-label kits.
- Project scope: product configuration, sample planning, packaging artwork, buyer-supplied barcode data, inspection requirements and shipping assumptions.
- Languages: English and Simplified Chinese.

## Key pages

- [Supplier profile and buyer due diligence](${absoluteUrl("/supplier-profile")})
- [Product catalog](${absoluteUrl("/products")})
- [Buffing and polishing wheels](${absoluteUrl("/products/buffing-polishing-wheels")})
- [Sanding and grinding accessories](${absoluteUrl("/products/sanding-grinding-accessories")})
- [Private-label workflow](${absoluteUrl("/oem-private-label")})
- [Quality-control workflow](${absoluteUrl("/quality-control")})
- [Abrasive sourcing checklist](${absoluteUrl("/resources/abrasive-sourcing-checklist")})
- [Abrasive grain, backing and grit selection guide](${absoluteUrl("/resources/abrasive-material-selection-guide")})
- [Commercial sample request](${absoluteUrl("/sample-kit")})
- [Submit an RFQ](${absoluteUrl("/contact")})

## Chinese pages

- [供应商信息与采购核验](${absoluteUrl("/zh/supplier-profile")})
- [产品目录](${absoluteUrl("/zh/products")})
- [磨料磨具采购检查清单](${absoluteUrl("/zh/resources/abrasive-sourcing-checklist")})
- [磨料选材、背基与粒度指南](${absoluteUrl("/zh/resources/abrasive-material-selection-guide")})
- [提交询价](${absoluteUrl("/zh/contact")})

## Verification guidance

- MOQ, sample charges, lead time, tolerances, certificates, performance results and freight terms vary by SKU and project.
- Treat a term as a supplier commitment only when it appears in a written quotation, approved specification, quality plan or contract.
- Confirm the legal contracting entity, production location and beneficiary account before issuing a purchase order.
- Tool compatibility and operating limits must be verified against the product label, approved SKU specification and tool manufacturer's instructions.
- The material selection guide links to primary FEPA, GS1 and ICC references for claims based on external standards.
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
