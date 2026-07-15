import type { Metadata } from "next";
import { EvidenceCenterPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "买家证据中心 | SCOTTCHEN",
  description: "查看 SCOTTCHEN 法律主体、生产地点、证书、测试、包装和案例资料的公开、项目、缺失与示意状态。",
  path: "/zh/evidence-center",
  alternatePath: "/evidence-center",
  locale: "zh-CN",
});

export default function Page() {
  return <EvidenceCenterPage locale="zh" />;
}
