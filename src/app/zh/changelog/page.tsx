import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "网站更新日志 | SCOTTCHEN",
  description: "SCOTTCHEN 官网实质性变更的日期记录：SEO 修复、页面更新与政策变更。",
  path: "/zh/changelog",
  locale: "zh-CN",
  alternatePath: "/changelog",
});

const entries = [
  {
    date: "2026-09-28",
    items: [
      "在 /sanding-discs、/wholesale-abrasives 与 /china-abrasive-manufacturer 启动标题 CTR 实验（仅改 title；描述、URL 与正文不动）。",
      "发布本更新日志页。",
    ],
  },
  {
    date: "2026-09-26",
    items: [
      "v2.1 审计 SEO 整改：全站 CTA 去掉 ?from= 内链追踪参数（归因改走 session 存储 + referrer 兜底）。",
      "修复中文类目页 H1 下划线分隔符。",
      "sitemap lastmod 改为构建时从 git 自动推导，不再使用过期手填日期。",
    ],
  },
  {
    date: "2026-09-23",
    items: ["16 个页面的 Product schema 更正为 CollectionPage 等 5 项小修。"],
  },
  {
    date: "2026-09-15",
    items: [
      "404 响应改为 noindex。",
      "B2B 发现路径与路由修复；询盘归因保留；采购主体说明澄清。",
    ],
  },
  {
    date: "2026-09-08",
    items: ["优化 B2B 产品发现与类目导航。"],
  },
  {
    date: "2026-08-29",
    items: ["加强 B2B 询盘证据链与询盘落地页；批发声明对比度无障碍修复。"],
  },
  {
    date: "2026-08-22",
    items: ["修复 B2B 发现路径与路由。"],
  },
  {
    date: "2026-08-12",
    items: ["意向页保留询盘来源。"],
  },
];

export default function ZhChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "首页", href: "/zh" },
              { label: "更新日志", href: "/zh/changelog" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold text-white">网站更新日志</h1>
          <p className="mt-4 max-w-2xl text-industry-slate-300">
            本站实质性变更的日期记录。纯样式微调不收录；以下每条对应一次已部署变更。
          </p>
        </div>
      </section>

      <section className="bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {entries.map((entry) => (
              <div key={entry.date}>
                <h2 className="text-xl font-semibold text-white">
                  {entry.date}
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-industry-slate-300">
                  {entry.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-industry-slate-500">
            要找产品或采购信息？{" "}
            <Link href="/zh" className="underline">
              从首页开始
            </Link>
            。
          </p>
        </div>
      </section>
    </div>
  );
}
