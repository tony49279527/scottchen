import type { Metadata } from "next";
import { ProductCompliancePage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "磨料磨具产品合规证据矩阵 | SCOTTCHEN",
  description:
    "按抛光轮、砂纸、百叶片、砂带、切割片与贴牌套装列出需核验的 SKU 规格、测试、标签与记录；具体标准以报价范围书面确认。",
  path: "/zh/product-compliance",
  alternatePath: "/product-compliance",
  locale: "zh-CN",
});

export default function Page() {
  return <ProductCompliancePage locale="zh" />;
}
