"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const guidesEn = [
  {
    href: "/alternatives/abrasive-kit-sourcing-alternatives",
    label: "Sourcing alternatives",
    title: "Compare five abrasive-kit sourcing models",
    summary:
      "Decide when OEM production sourcing, a distributor, a trading company, a contract packer, or in-house assembly fits the buying brief.",
  },
  {
    href: "/compare/oem-vs-off-the-shelf-abrasive-kits",
    label: "OEM comparison",
    title: "OEM vs off-the-shelf abrasive kits",
    summary:
      "Compare branding, assortment control, MOQ, validation work and replenishment tradeoffs before requesting quotes.",
  },
  {
    href: "/solutions/automotive-polishing-kits",
    label: "Industry solution",
    title: "Automotive polishing kits for aftermarket brands",
    summary:
      "Map wheel-restoration and metal-polishing workflows to a private-label kit, sample plan and packaging specification.",
  },
] as const;

const guidesZh = [
  {
    href: "/zh/alternatives/abrasive-kit-sourcing-alternatives",
    label: "采购路径对比",
    title: "比较五种磨具套装采购模式",
    summary:
      "先判断 OEM 生产、经销商、贸易商、代工包装或自有组装哪一种更匹配采购目标，再发询价。",
  },
  {
    href: "/zh/compare/oem-vs-off-the-shelf-abrasive-kits",
    label: "OEM 对比",
    title: "OEM 定制套装 vs 现货套装",
    summary:
      "从品牌包装、组合控制、MOQ、验证工作量和补货稳定性对比两条路径，再决定是否询价。",
  },
  {
    href: "/zh/solutions/automotive-polishing-kits",
    label: "行业方案",
    title: "汽车后市场抛光套装",
    summary:
      "把轮毂/金属抛光工作流映射到贴牌套装、样品计划和包装规格，再进入样品与报价。",
  },
] as const;

export default function DecisionGuides() {
  const pathname = usePathname() || "";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const guides = isZh ? guidesZh : guidesEn;

  return (
    <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            {isZh ? "采购决策指南" : "Buyer Decision Guides"}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            {isZh ? "先选定采购路径，再比较报价" : "Choose a sourcing route before you compare quotations"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
            {isZh
              ? "这些短指南把产品匹配、定制范围与核验问题拆开，帮助采购团队发出更可横向对比的 RFQ。"
              : "These short guides separate product fit, customization and verification questions so procurement teams can issue a more comparable RFQ."}
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.href} className="glass-panel rounded-lg p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-industry-orange-light">
                {guide.label}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{guide.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">
                {guide.summary}
              </p>
              <Link
                href={guide.href}
                className="mt-5 inline-flex text-sm font-bold text-industry-orange hover:text-industry-orange-light"
              >
                {isZh ? "打开指南 →" : "Open guide →"}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
