import type { Metadata } from "next";
import { ProcurementTermsPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "MOQ、样品费、交期与贸易术语 | SCOTTCHEN",
  description: "按产品族查看 MOQ、样品费用、交期节点、付款方式与 Incoterms 的确认边界，并准备可比较询价。",
  path: "/zh/procurement-terms",
  alternatePath: "/procurement-terms",
  locale: "zh-CN",
});

export default function Page() {
  return <ProcurementTermsPage locale="zh" />;
}
