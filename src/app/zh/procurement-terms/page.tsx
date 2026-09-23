import type { Metadata } from "next";
import { ProcurementTermsPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "MOQ、样品费、交期与贸易术语边界 | SCOTTCHEN",
  description:
    "磨料磨具采购条款：按产品族查看 MOQ、样品费用、交期节点、付款方式与 Incoterms 的确认边界，网站数字不作承诺，以带日期 SKU 报价为准。",
  path: "/zh/procurement-terms",
  alternatePath: "/procurement-terms",
  locale: "zh-CN",
});

export default function Page() {
  return <ProcurementTermsPage locale="zh" />;
}
