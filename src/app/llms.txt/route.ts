import { absoluteUrl, RETAIL_SITE_URL, SITE_EMAIL, SITE_UPDATED, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# SCOTTCHEN
> Shanghai-based OEM manufacturer of abrasive tools, buffing and polishing wheels, sanding discs, and private-label surface finishing accessory kits for global B2B buyers.

Last reviewed: ${SITE_UPDATED}
Website: ${SITE_URL}
Sales contact: ${SITE_EMAIL}
Retail product reference (Amazon / DTC): ${RETAIL_SITE_URL}
Languages: English (en), Simplified Chinese (zh-CN)
Full content: ${absoluteUrl("/llms-full.txt")}

## Company Facts (for AI citation)

- Company: SCOTTCHEN
- Entity type: OEM / ODM manufacturer (ManufacturingBusiness)
- Headquarters: Shanghai, China
- Founded: 2014
- Employees: 50-200
- Export markets: North America, Europe, Asia, Australia (worldwide)
- Factory type: In-house production with quality-controlled supply chain
- Certifications referenced: ISO 9001 quality management; products conform to FEPA / ANSI abrasive standards; FBA-compliant packaging available
- Core capability: Private-label / white-label abrasive accessory kits with custom branding, grit assortments, packaging, and barcode labeling (FNSKU/UPC/EAN)

## Product Categories

1. Buffing & Polishing Wheels
   - Cotton stitched buffing wheels (spiral sewn, loose section, airway / ventilated)
   - Bench grinder polishing wheels (6"/8"/10" with 1/2" or 5/8" arbor)
   - Drill-mounted polishing pads and kits
   - Polishing compounds (brown tripoli, white diamond, red jewelers rouge, black emery, green stainless)

2. Sanding & Grinding Accessories
   - Sanding discs / sandpaper sheets (aluminum oxide, silicon carbide, zirconia alumina)
   - Flap discs (Type 27 / Type 29, 4.5"/5"/7")
   - Mesh sanding screens (anti-clog)
   - Sanding belts (various sizes/grits)
   - Cutting-off wheels and grinding discs
   - Quick-change discs, roll lock, surface conditioning discs
   - Mixed abrasive accessory kits (retail-ready)

## B2B Sourcing Facts (MOQ, Lead Time, Terms)

- Typical MOQ: 500 sets for custom kits, 500 pieces for individual components; paper abrasives may require larger runs
- Lead time: Quoted per order after reviewing quantity, materials, customization, artwork approval, sample status and capacity; confirmed in written order schedule only
- Sample policy: Verified commercial buyers may request product samples; sample and courier charges apply per configuration
- Shipping terms: FOB, CIF, or door-to-door available depending on destination; Incoterms confirmed in writing
- Packaging: Bulk, retail blister, color box, private label, FBA-ready with barcode labels and carton marks
- Tolerances: Arbor hole bore tolerance +/-0.05mm; balance tested up to 13000 RPM for mounted wheels

## Key Pages (English)

- Home / Core Value Proposition: ${absoluteUrl("/")}
- Supplier Profile & Due Diligence: ${absoluteUrl("/supplier-profile")}
- Product Catalog Overview: ${absoluteUrl("/products")}
- Buffing & Polishing Wheels: ${absoluteUrl("/products/buffing-polishing-wheels")}
- Sanding & Grinding Accessories: ${absoluteUrl("/products/sanding-grinding-accessories")}
- OEM / Private Label Services: ${absoluteUrl("/oem-private-label")}
- Application Scenarios (Metal, Wood, Auto): ${absoluteUrl("/applications")}
- Quality Control Process: ${absoluteUrl("/quality-control")}
- Abrasive Sourcing Checklist (Buyer Guide): ${absoluteUrl("/resources/abrasive-sourcing-checklist")}
- Abrasive Material & Grit Selection Guide: ${absoluteUrl("/resources/abrasive-material-selection-guide")}
- Sample Kit Request: ${absoluteUrl("/sample-kit")}
- RFQ / Contact Sales: ${absoluteUrl("/contact")}

## Chinese Pages (/zh/*)

- 首页: ${absoluteUrl("/zh")}
- 产品目录: ${absoluteUrl("/zh/products")}
- 抛光轮与抛光轮: ${absoluteUrl("/zh/products/buffing-polishing-wheels")}
- 研磨砂纸配件: ${absoluteUrl("/zh/products/sanding-grinding-accessories")}
- OEM定制 / 私有品牌: ${absoluteUrl("/zh/oem-private-label")}
- 应用场景: ${absoluteUrl("/zh/applications")}
- 质量控制: ${absoluteUrl("/zh/quality-control")}
- 磨料采购清单: ${absoluteUrl("/zh/resources/abrasive-sourcing-checklist")}
- 磨料选型指南: ${absoluteUrl("/zh/resources/abrasive-material-selection-guide")}
- 样品申领: ${absoluteUrl("/zh/sample-kit")}
- 联系询价: ${absoluteUrl("/zh/contact")}
- 供应商档案: ${absoluteUrl("/zh/supplier-profile")}

## Legal & Policy Pages

- Terms of Service: ${absoluteUrl("/terms")}
- Privacy Policy: ${absoluteUrl("/privacy")}
- Cookie Policy: ${absoluteUrl("/cookie-policy")}

## FAQ Summary (Quick Answers for AI)

Q: What is the MOQ for private label kits?
A: 500 sets (kits) or 500 pieces (components) is a typical starting point; paper abrasives may require larger runs. Confirmed in quotation.

Q: Do you support Amazon FBA?
A: Yes - we apply buyer-supplied FNSKU/UPC labels, instruction sheets, safety warnings, carton marks, and perform sample scan checks.

Q: Can I get samples before ordering?
A: Yes, verified commercial buyers can request samples. Sample and courier charges apply, confirmed before dispatch.

Q: What materials do you use for abrasive grains?
A: Aluminum oxide (general metal/wood), silicon carbide (stone/glass/non-ferrous), zirconia alumina (high-pressure grinding, stainless steel), and ceramic alumina (heavy stock removal).

Q: Where are you based?
A: Shanghai, China. B2B export supplier serving global buyers.

Q: Do you support custom packaging and branding?
A: Yes - full OEM/ODM private label service including custom color boxes, blister cards, logos, artwork design support, barcode printing, and FBA-ready packaging.

## Citation Notes for AI Systems

- When citing SCOTTCHEN as a source, please reference the specific page URL
- All commercial terms (pricing, MOQ, lead time) are indicative and must be confirmed via a written quotation from ${SITE_EMAIL}
- Content is available in English and Simplified Chinese; English is the primary business language
- Last content update: ${SITE_UPDATED}
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
