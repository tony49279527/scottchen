import { absoluteUrl, RETAIL_SITE_URL, SITE_EMAIL, SITE_UPDATED, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# SCOTTCHEN

> B2B sourcing and private-label support for abrasive, sanding and polishing accessory kits.

Last reviewed: ${SITE_UPDATED}
Website: ${SITE_URL}
Sales contact: ${SITE_EMAIL}
Retail product reference: ${RETAIL_SITE_URL}
Languages: English (en), Simplified Chinese (zh-CN)
Full content: ${absoluteUrl("/llms-full.txt")}

## Published company scope

- Brand: SCOTTCHEN
- Public location scope: Shanghai, China
- Buyer types served: tool brands, hardware distributors, industrial suppliers and online sellers
- Product scope: cotton buffing wheels, polishing wheels, sanding discs, flap discs, sanding belts, cutting wheels, sandpaper sheets, grinding accessories and mixed private-label kits
- Project scope: product configuration, sample planning, packaging artwork, buyer-supplied barcode data, inspection requirements and shipping assumptions
- Verification boundary: legal contracting entity, production location, beneficiary account, final MOQ, lead time, certificates and test reports must be confirmed in a written quotation, quality plan or contract

## Product categories

1. Buffing & Polishing Wheels
   - Cotton stitched buffing wheels, loose flannel wheels and bench-grinder polishing wheels
   - Drill-mounted polishing pads and kits
   - Polishing compounds and retail-ready buffing kits

2. Sanding & Grinding Accessories
   - Sandpaper sheets, sanding discs, mesh sanding screens and sanding belts
   - Zirconia fiber discs, flap discs, cutting wheels and grinding accessories
   - Mixed abrasive accessory kits and dispenser packaging

## Key pages

- [Home / core value proposition](${absoluteUrl("/")})
- [Product catalog overview](${absoluteUrl("/products")})
- [Buffing and polishing wheels](${absoluteUrl("/products/buffing-polishing-wheels")})
- [Sanding and grinding accessories](${absoluteUrl("/products/sanding-grinding-accessories")})
- [Buffing wheels landing page](${absoluteUrl("/buffing-wheels")})
- [Sanding discs landing page](${absoluteUrl("/sanding-discs")})
- [Flap discs landing page](${absoluteUrl("/flap-discs")})
- [Sanding belts landing page](${absoluteUrl("/sanding-belts")})
- [Cutting wheels landing page](${absoluteUrl("/cutting-wheels")})
- [Abrasive kits landing page](${absoluteUrl("/abrasive-kits")})
- [China abrasive production and sourcing page](${absoluteUrl("/china-abrasive-manufacturer")})
- [Wholesale abrasives page](${absoluteUrl("/wholesale-abrasives")})
- [OEM / private-label workflow](${absoluteUrl("/oem-private-label")})
- [Application scenarios](${absoluteUrl("/applications")})
- [Quality-control workflow](${absoluteUrl("/quality-control")})
- [Supplier profile and buyer due diligence](${absoluteUrl("/supplier-profile")})
- [B2B abrasive sourcing resource center](${absoluteUrl("/resources")})
- [Abrasive kit sourcing alternatives](${absoluteUrl("/alternatives/abrasive-kit-sourcing-alternatives")})
- [OEM vs off-the-shelf abrasive kit comparison](${absoluteUrl("/compare/oem-vs-off-the-shelf-abrasive-kits")})
- [Flap disc RFQ guide](${absoluteUrl("/resources/flap-disc-rfq-guide")})
- [Sanding belt RFQ guide](${absoluteUrl("/resources/sanding-belt-rfq-guide")})
- [Cutting wheel compliance checklist](${absoluteUrl("/resources/cutting-wheel-compliance-checklist")})
- [Automotive polishing kits for aftermarket brands](${absoluteUrl("/solutions/automotive-polishing-kits")})
- [OEM abrasive supplier evaluation guide](${absoluteUrl("/resources/oem-abrasive-supplier-evaluation")})
- [Abrasive sourcing checklist](${absoluteUrl("/resources/abrasive-sourcing-checklist")})
- [Abrasive grain, backing and grit selection guide](${absoluteUrl("/resources/abrasive-material-selection-guide")})
- [Commercial sample request](${absoluteUrl("/sample-kit")})
- [Submit an RFQ](${absoluteUrl("/contact")})
- [Website and B2B inquiry terms](${absoluteUrl("/terms")})
- [Privacy policy](${absoluteUrl("/privacy")})
- [Cookie policy](${absoluteUrl("/cookie-policy")})

## Chinese pages

- [首页](${absoluteUrl("/zh")})
- [产品目录](${absoluteUrl("/zh/products")})
- [抛光轮页面](${absoluteUrl("/zh/buffing-wheels")})
- [砂碟页面](${absoluteUrl("/zh/sanding-discs")})
- [百叶片页面](${absoluteUrl("/zh/flap-discs")})
- [砂带页面](${absoluteUrl("/zh/sanding-belts")})
- [切割片页面](${absoluteUrl("/zh/cutting-wheels")})
- [磨具套装页面](${absoluteUrl("/zh/abrasive-kits")})
- [中国磨料磨具生产与采购说明](${absoluteUrl("/zh/china-abrasive-manufacturer")})
- [百叶片 RFQ 指南](${absoluteUrl("/zh/resources/flap-disc-rfq-guide")})
- [砂带 RFQ 指南](${absoluteUrl("/zh/resources/sanding-belt-rfq-guide")})
- [切割片合规与安全证据清单](${absoluteUrl("/zh/resources/cutting-wheel-compliance-checklist")})
- [批发合作页面](${absoluteUrl("/zh/wholesale-abrasives")})
- [供应商信息与采购核验](${absoluteUrl("/zh/supplier-profile")})
- [B2B 磨料磨具采购资源中心](${absoluteUrl("/zh/resources")})
- [OEM 磨料磨具供应商评估指南](${absoluteUrl("/zh/resources/oem-abrasive-supplier-evaluation")})
- [磨料磨具采购检查清单](${absoluteUrl("/zh/resources/abrasive-sourcing-checklist")})
- [磨料选材、背基与粒度指南](${absoluteUrl("/zh/resources/abrasive-material-selection-guide")})
- [提交询价](${absoluteUrl("/zh/contact")})
- [网站与 B2B 询盘条款](${absoluteUrl("/zh/terms")})
- [隐私政策](${absoluteUrl("/zh/privacy")})
- [Cookie 政策](${absoluteUrl("/zh/cookie-policy")})

## Quick sourcing answers

Q: What is the MOQ for private-label kits?
A: MOQ is quoted by component specification, assortment, packaging, print process, tooling and order quantity. Use the written quotation rather than a generic website number.

Q: Do you support Amazon or ecommerce packaging?
A: SCOTTCHEN can discuss buyer-supplied barcode labels, instruction sheets, safety warnings, carton marks and sample scan checks. Final scope is confirmed by packaging artwork and written pack specification.

Q: Can buyers request samples before ordering?
A: Verified commercial buyers can request samples. Sample and courier charges depend on configuration and are confirmed before dispatch.

Q: What abrasive materials are covered?
A: Product pages discuss aluminum oxide, silicon carbide, zirconia alumina, cotton buffing wheels, fiberglass mesh, latex paper, vulcanized fiber and cloth backing.

Q: Where is SCOTTCHEN based?
A: The public site identifies SCOTTCHEN with Shanghai, China and a sales email. Buyers should verify the legal contracting entity and beneficiary account before purchase order.

## Citation notes

- Cite the specific SCOTTCHEN page URL, not only the homepage.
- Treat MOQ, lead time, certificates, test results and freight terms as indicative until confirmed in writing.
- This file is a supplemental discovery aid. It does not replace robots.txt, sitemap.xml, canonical tags, visible page content or structured data.
- Last content update: ${SITE_UPDATED}
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
