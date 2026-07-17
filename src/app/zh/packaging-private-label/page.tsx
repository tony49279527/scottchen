import type { Metadata } from "next";
import { PackagingPrivateLabelPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "私牌包装、标签与条码流程指南 | SCOTTCHEN",
  description:
    "规划磨具套装刀模、警告语、说明书、条码数据、版稿批准、扫描检查与装箱证据，并明确区分概念图与可接受的生产证明。",
  path: "/zh/packaging-private-label",
  alternatePath: "/packaging-private-label",
  locale: "zh-CN",
});

export default function Page() {
  return <PackagingPrivateLabelPage locale="zh" />;
}
