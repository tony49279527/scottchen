import type { Metadata } from "next";
import { EvidenceCenterPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "买家证据中心与公开证明边界 | SCOTTCHEN",
  description:
    "查看 SCOTTCHEN 法律主体、生产地点、证书、测试、包装与案例资料的公开、项目级、缺失与示意状态，避免把概念图当成证据。",
  path: "/zh/evidence-center",
  alternatePath: "/evidence-center",
  locale: "zh-CN",
});

export default function Page() {
  return <EvidenceCenterPage locale="zh" />;
}
