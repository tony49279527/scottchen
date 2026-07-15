import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { absoluteUrl, SITE_EMAIL, SITE_UPDATED } from "@/lib/site";

type Locale = "en" | "zh";
type TrustPageKey = "evidence" | "compliance" | "terms" | "packaging" | "cases";

const routes: Record<TrustPageKey, string> = {
  evidence: "/evidence-center",
  compliance: "/product-compliance",
  terms: "/procurement-terms",
  packaging: "/packaging-private-label",
  cases: "/case-studies",
};

function localPath(locale: Locale, path: string) {
  return locale === "zh" ? `/zh${path}` : path;
}

function TrustNavigation({ locale, current }: { locale: Locale; current: TrustPageKey }) {
  const items = locale === "zh"
    ? [
        ["evidence", "证据中心"],
        ["compliance", "产品合规"],
        ["terms", "采购条款"],
        ["packaging", "包装流程"],
        ["cases", "案例标准"],
      ] as const
    : [
        ["evidence", "Evidence Center"],
        ["compliance", "Product Compliance"],
        ["terms", "Procurement Terms"],
        ["packaging", "Packaging Workflow"],
        ["cases", "Case Evidence"],
      ] as const;

  return (
    <nav aria-label={locale === "zh" ? "买家信任中心" : "Buyer trust center"} className="border-b border-industry-slate-800 bg-industry-slate-950">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {items.map(([key, label]) => (
          <Link
            key={key}
            href={localPath(locale, routes[key])}
            aria-current={current === key ? "page" : undefined}
            className={`whitespace-nowrap rounded px-3 py-2 text-xs font-bold transition-colors ${
              current === key
                ? "bg-industry-orange text-white"
                : "bg-industry-slate-900 text-industry-slate-300 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function PageHero({
  locale,
  current,
  eyebrow,
  title,
  intro,
}: {
  locale: Locale;
  current: TrustPageKey;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <>
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel={locale === "zh" ? "面包屑导航" : "Breadcrumb"}
            items={[
              { label: locale === "zh" ? "首页" : "Home", href: locale === "zh" ? "/zh" : "/" },
              { label: title, href: localPath(locale, routes[current]) },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            {eyebrow}
          </span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-industry-slate-300">{intro}</p>
        </div>
      </section>
      <TrustNavigation locale={locale} current={current} />
    </>
  );
}

function StatusBadge({ tone, children }: { tone: "public" | "project" | "missing" | "concept"; children: ReactNode }) {
  const classes = {
    public: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    project: "border-sky-400/30 bg-sky-400/10 text-sky-200",
    missing: "border-amber-400/30 bg-amber-400/10 text-amber-100",
    concept: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
  }[tone];

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${classes}`}>
      {children}
    </span>
  );
}

function PageSchema({ locale, path, name, description }: { locale: Locale; path: string; name: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`${localPath(locale, path)}#webpage`),
    url: absoluteUrl(localPath(locale, path)),
    name,
    description,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    dateModified: SITE_UPDATED,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#organization") },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function EvidenceCenterPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const records = zh
    ? [
        { title: "品牌、网站与商业邮箱", scope: "SCOTTCHEN、scottchentools.com、sales@scottchentools.com", status: "公开可核验", tone: "public" as const, note: "可通过当前网站与邮件域名核对；不等同于法律主体证明。" },
        { title: "签约法律主体与注册地址", scope: "报价、合同、发票和收款账户", status: "下单前索取", tone: "missing" as const, note: "目前网站未公开营业执照、注册号或注册地址。应在付款前核对主体与收款账户一致性。" },
        { title: "生产地点与主体关系", scope: "必须按具体 SKU 和关键工序确认", status: "按项目提供", tone: "project" as const, note: "上海项目支持地点不能自动视为所有产品的生产地点。报价应披露实际来源和外包工序。" },
        { title: "体系证书与第三方测试报告", scope: "主体、场地、编号、有效期和适用 SKU", status: "尚未公开", tone: "missing" as const, note: "当前没有可下载原件。不得从通用图标、网站文案或质量体系证书推断具体产品合规。" },
        { title: "批准样、规格和批次检验记录", scope: "图纸、BOM、抽样计划、结果和放行人", status: "订单记录", tone: "project" as const, note: "质量页面提供的是规划字段；真实结果必须来自实际样品和订单批次。" },
        { title: "包装、标签与条码批准", scope: "刀模、警告语、条码数据、签字版稿和扫描记录", status: "订单记录", tone: "project" as const, note: "真实文件由买家、法规顾问、平台和包装供应链共同确认；网站概念图不构成生产证据。" },
        { title: "客户案例和量化结果", scope: "国家、产品、难点、周期、基准、结果和授权范围", status: "尚未公开", tone: "missing" as const, note: "当前没有客户批准的案例资料。能力场景不会被描述为真实客户项目。" },
        { title: "网站概念视觉", scope: "包装和 QC 规划的 AI 生成示意图", status: "仅作示意", tone: "concept" as const, note: "所有生成视觉都明确标识，不代表真实工厂、实验室、订单、证书或客户。" },
      ]
    : [
        { title: "Brand, website and business email", scope: "SCOTTCHEN, scottchentools.com and sales@scottchentools.com", status: "Public", tone: "public" as const, note: "These can be checked on the current domain. They are not proof of the contracting legal entity." },
        { title: "Contracting entity and registered address", scope: "Quotation, contract, invoice and beneficiary account", status: "Request before PO", tone: "missing" as const, note: "No business license, registration number or registered address is currently published. Match the entity and beneficiary before payment." },
        { title: "Production location and facility relationship", scope: "Confirm against the exact SKU and critical process", status: "Project file", tone: "project" as const, note: "Shanghai project support must not be treated as the manufacturing location for every product. The quotation should disclose source and outsourced processes." },
        { title: "Management certificates and third-party reports", scope: "Entity, facility, number, validity and covered SKU", status: "Not published", tone: "missing" as const, note: "No downloadable originals are currently published. Do not infer SKU compliance from icons, marketing copy or a generic management-system certificate." },
        { title: "Approved sample, specification and batch inspection", scope: "Drawing, BOM, sampling plan, results and release authority", status: "Order record", tone: "project" as const, note: "The quality page provides planning fields only. Actual results must come from the physical sample and order batch." },
        { title: "Packaging, label and barcode approval", scope: "Dieline, warnings, barcode data, signed artwork and scan record", status: "Order record", tone: "project" as const, note: "Real files depend on buyer, regulatory, marketplace and packaging inputs. A website concept image is not production evidence." },
        { title: "Customer cases and quantified outcomes", scope: "Country, product, challenge, cycle, baseline, result and permission", status: "Not published", tone: "missing" as const, note: "No client-approved case evidence is currently published. Capability scenarios are never presented as customer projects." },
        { title: "Website concept visuals", scope: "AI-generated packaging and QC-planning illustrations", status: "Concept only", tone: "concept" as const, note: "Generated visuals are disclosed and do not represent a factory, laboratory, order, certificate or customer." },
      ];

  const name = zh ? "SCOTTCHEN 买家证据中心" : "SCOTTCHEN Buyer Evidence Center";
  const description = zh
    ? "公开说明 SCOTTCHEN 的证据状态、核验边界、订单文件和仍待提供的主体、工厂、证书、测试与案例资料。"
    : "A transparent register of SCOTTCHEN evidence status, project records and the entity, facility, certificate, test and case materials that are not yet public.";

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero
        locale={locale}
        current="evidence"
        eyebrow={zh ? "买家尽调 · 证据状态公开" : "Buyer due diligence · evidence status"}
        title={name}
        intro={zh
          ? "这个页面不把营销文案、图标或生成图片包装成证据。每一项都说明目前能公开核验什么、真实订单需要什么文件，以及哪些资料尚未提供。"
          : "This page does not turn marketing copy, icons or generated images into proof. Each record states what can be checked publicly, what belongs in the order file and what has not yet been supplied."}
      />

      <section className="bg-industry-slate-900 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {records.map((record) => (
                <article key={record.title} className="glass-panel rounded-xl border border-industry-slate-800 p-6">
                  <StatusBadge tone={record.tone}>{record.status}</StatusBadge>
                  <h2 className="mt-4 text-lg font-bold text-white">{record.title}</h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-industry-orange-light">{record.scope}</p>
                  <p className="mt-3 text-sm leading-relaxed text-industry-slate-300">{record.note}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-24 overflow-hidden rounded-xl border border-industry-slate-800 bg-industry-slate-950">
              <div className="relative">
                <Image
                  src="/images/qc-evidence-planning-concept-v2.jpg"
                  alt={zh ? "磨料产品证据规划的 AI 生成示意图" : "AI-generated concept visual of abrasive product evidence planning"}
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 38vw, 92vw"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-industry-slate-950/90 px-4 py-3 text-[11px] font-bold text-white backdrop-blur-sm">
                  {zh ? "AI 生成流程示意 · 非工厂、实验室、检测结果或订单实拍" : "AI-generated workflow concept · not a factory, laboratory, test result or order photo"}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white">{zh ? "合格证据卡的最小字段" : "Minimum fields for an evidence record"}</h2>
                <ul className="mt-4 space-y-3 text-sm text-industry-slate-300">
                  {(zh
                    ? ["法律主体与实际场地", "文件名称、编号与签发方", "签发日期、有效期与核验入口", "覆盖的产品族、尺寸、结构和 SKU", "样品/批次标识与变更控制", "原件、授权摘录或保密提供方式"]
                    : ["Legal entity and actual facility", "Document name, number and issuer", "Issue date, validity and verification route", "Covered family, size, construction and SKU", "Sample or batch identity and change control", "Original, authorized extract or confidential review route"]
                  ).map((item) => <li key={item} className="border-l-2 border-industry-orange pl-3">{item}</li>)}
                </ul>
                <a className="mt-6 inline-flex text-sm font-bold text-industry-orange-light hover:underline" href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent(zh ? "索取 SCOTTCHEN 项目证据清单" : "Request SCOTTCHEN project evidence checklist")}`}>
                  {zh ? "邮件索取项目证据清单 →" : "Request a project evidence checklist →"}
                </a>
                <a className="mt-3 block text-sm font-bold text-white underline underline-offset-4" href="/templates/evidence-register-template.csv" download>
                  {zh ? "下载证据登记 CSV 模板" : "Download evidence-register CSV template"}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">{zh ? "从证据状态进入采购决策" : "Move from evidence status to a buying decision"}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {(
              zh
                ? [
                    ["产品合规矩阵", "按产品族确认需要锁定的规格、测试和标签文件。", "/zh/product-compliance"],
                    ["采购条款登记", "查看已公开边界、未知项和报价所需输入。", "/zh/procurement-terms"],
                    ["包装放行流程", "把刀模、警告语、条码与签字版稿连成审批链。", "/zh/packaging-private-label"],
                    ["案例证据标准", "查看可公开匿名案例必须包含的字段和当前状态。", "/zh/case-studies"],
                  ]
                : [
                    ["Product compliance map", "Match each family to the specification, test and label evidence it needs.", "/product-compliance"],
                    ["Procurement terms register", "Review public boundaries, unknowns and the inputs required for a quotation.", "/procurement-terms"],
                    ["Packaging release workflow", "Connect dielines, warnings, barcode data and signed artwork to release evidence.", "/packaging-private-label"],
                    ["Case evidence standard", "See the fields required for a publishable anonymous case and the current status.", "/case-studies"],
                  ]
            ).map(([title, body, href]) => (
              <Link key={href} href={href} className="rounded-xl border border-industry-slate-800 bg-industry-slate-900 p-6 transition-colors hover:border-industry-orange">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-industry-slate-400">{body}</p>
                <span className="mt-4 inline-flex text-xs font-bold text-industry-orange-light">{zh ? "打开页面 →" : "Open page →"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageSchema locale={locale} path={routes.evidence} name={name} description={description} />
      <CTASection />
    </div>
  );
}

export function ProductCompliancePage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const rows = zh
    ? [
        { family: "抛光布轮与抛光套装", lock: "直径、厚度、层数、缝线、中心孔/接口、额定使用条件、配套抛光膏", evidence: "批准图纸或规格、结构与尺寸记录、适用性测试、标签和批次追溯", status: "未公开 SKU 报告" },
        { family: "砂纸片、砂碟与砂纸卷", lock: "磨料、粒度体系、基材、植砂/涂层、胶黏剂、孔型、尺寸和用途", evidence: "材料与规格声明、尺寸/外观记录、应用或寿命对比方法、包装标签批准", status: "按项目确认" },
        { family: "百叶片", lock: "直径、孔径、粒度、砂布来源、背基、叶片排列、最高转速和目标市场", evidence: "准确 SKU 的测试报告、额定转速与标签、批次编码、适用市场标准和变更记录", status: "不得从通用证书推断" },
        { family: "砂带", lock: "周长、宽度、磨料、基布、涂层、接头类型/方向/厚度和设备", evidence: "尺寸与接头记录、跑偏/接头/边缘测试方法、批准样、材料变更控制", status: "按项目确认" },
        { family: "切割片与固结磨具", lock: "尺寸、配方、增强结构、孔径、最高转速、应用材料和市场", evidence: "覆盖准确尺寸与配方的第三方报告、主体与场地、标签、批次追溯和保留样计划", status: "当前无公开原件" },
        { family: "私牌组合套装", lock: "完整 BOM、每个部件来源、兼容性、数量、包装、说明书、警告语和条码", evidence: "部件级证据、批准样、签字版稿、扫描记录、装箱检查和变更控制", status: "套装不能替代部件合规" },
      ]
    : [
        { family: "Buffing wheels and polishing kits", lock: "Diameter, thickness, ply, stitching, bore/interface, rated use and compound pairing", evidence: "Approved drawing or specification, construction and dimensional record, application check, label and batch traceability", status: "No public SKU report" },
        { family: "Sanding sheets, discs and rolls", lock: "Grain, grit system, backing, coat, bond, hole pattern, dimensions and use", evidence: "Material and specification statement, dimensional/visual record, application or life-test method and packaging approval", status: "Project-specific" },
        { family: "Flap discs", lock: "Diameter, arbor, grit, cloth source, backing, flap geometry, maximum speed and market", evidence: "Exact-SKU test report, speed and label data, batch code, applicable market standard and change record", status: "Never infer from a generic certificate" },
        { family: "Sanding belts", lock: "Length, width, grain, backing, coat, joint type/direction/thickness and machine", evidence: "Dimension and joint record, tracking/splice/edge test method, approved sample and material change control", status: "Project-specific" },
        { family: "Cut-off wheels and bonded abrasives", lock: "Dimensions, formulation, reinforcement, arbor, maximum speed, work material and market", evidence: "Third-party report covering the exact size and formulation, entity/facility, label, batch traceability and retained-sample plan", status: "No public original" },
        { family: "Private-label combination kits", lock: "Full BOM, source of each component, compatibility, count, pack, instructions, warnings and barcode", evidence: "Component-level evidence, approved sample, signed artwork, scan record, pack-out check and change control", status: "A kit does not replace component compliance" },
      ];
  const name = zh ? "磨料磨具产品合规与证据矩阵" : "Abrasive Product Compliance & Evidence Map";
  const description = zh ? "按产品族说明规格锁定、证据要求、标签与测试边界。" : "A product-family map for specification lock, evidence, labeling and test boundaries.";

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero locale={locale} current="compliance" eyebrow={zh ? "按 SKU 核验 · 不以图标代替证据" : "Verify by SKU · never substitute an icon for evidence"} title={name} intro={zh ? "合规结论取决于目标市场、准确 SKU、生产主体、场地、材料结构和有效文件。下面列出买家应锁定的字段，而不是宣称所有产品自动符合某一标准。" : "A compliance conclusion depends on the target market, exact SKU, legal entity, facility, construction and valid documents. This page lists what a buyer should lock; it does not claim every product automatically meets a standard."} />
      <section className="bg-industry-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-industry-slate-800">
            <div className="overflow-x-auto">
              <table className="min-w-[980px] w-full text-left text-sm">
                <thead className="bg-industry-slate-950 text-xs uppercase tracking-wider text-industry-slate-300">
                  <tr><th className="px-5 py-4">{zh ? "产品族" : "Product family"}</th><th className="px-5 py-4">{zh ? "报价/样品前锁定" : "Lock before quote/sample"}</th><th className="px-5 py-4">{zh ? "放行证据" : "Release evidence"}</th><th className="px-5 py-4">{zh ? "当前边界" : "Current boundary"}</th></tr>
                </thead>
                <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900 text-industry-slate-300">
                  {rows.map((row) => <tr key={row.family} className="align-top"><th className="px-5 py-5 font-bold text-white">{row.family}</th><td className="px-5 py-5 leading-relaxed">{row.lock}</td><td className="px-5 py-5 leading-relaxed">{row.evidence}</td><td className="px-5 py-5"><StatusBadge tone="missing">{row.status}</StatusBadge></td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {(zh
              ? [
                  ["体系证书 ≠ 产品报告", "ISO 9001 等体系文件说明管理范围，不能自动证明某个尺寸、配方或额定转速。"],
                  ["报告必须对应样品", "核对样品标识、尺寸、结构、生产主体、场地、标准版本、日期和有效性。"],
                  ["变更必须重新评估", "磨料、基材、胶黏剂、增强网、结构、标签或场地变化都可能影响原有结论。"],
                ]
              : [
                  ["A management certificate is not a product report", "ISO 9001 and similar files describe a management scope; they do not prove a specific size, formulation or rated speed."],
                  ["The report must identify the sample", "Check sample identity, size, construction, entity, facility, standard revision, date and validity."],
                  ["Changes require reassessment", "Changes to grain, backing, bond, reinforcement, construction, label or facility can invalidate an earlier conclusion."],
                ]
            ).map(([title, body]) => <article key={title} className="rounded-xl border border-industry-slate-800 bg-industry-slate-950 p-6"><h2 className="font-bold text-white">{title}</h2><p className="mt-3 text-sm leading-relaxed text-industry-slate-400">{body}</p></article>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={localPath(locale, "/resources/cutting-wheel-compliance-checklist")} className="rounded bg-industry-orange px-5 py-3 text-sm font-bold text-white">{zh ? "打开切割片合规清单" : "Open cut-off wheel compliance checklist"}</Link>
            <Link href={localPath(locale, "/evidence-center")} className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">{zh ? "查看证据状态" : "Review evidence status"}</Link>
          </div>
        </div>
      </section>
      <PageSchema locale={locale} path={routes.compliance} name={name} description={description} />
      <CTASection />
    </div>
  );
}

export function ProcurementTermsPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const rows = zh
    ? [
        { family: "私牌磨具组合套装", moq: "按 BOM、部件来源、包装与印刷逐项报价；网站不再把单一数字当作承诺", sample: "样品与快递费在发出前书面确认；如可抵扣，必须写入报价", lead: "规格、样品、版稿和产能确认后列出里程碑", payment: "未公开固定方式；以报价/合同为准", incoterm: "规则、命名地点、港口、税费与进口责任写入报价" },
        { family: "抛光布轮与抛光配件", moq: "按尺寸、层数、缝线、中心孔、组合与包装报价", sample: "现货评估样与定制样分开报价", lead: "样品批准、材料与包装确认后排期", payment: "以签署文件为准", incoterm: "按目的地和可用物流方案确认" },
        { family: "砂纸片、砂碟与砂纸卷", moq: "按磨料、粒度组合、基材、裁切、孔型、印刷和包装报价", sample: "材料/粒度样与零售包装样分开确认", lead: "材料、裁切、印刷和装配节点分别列明", payment: "以签署文件为准", incoterm: "按目的地和可用物流方案确认" },
        { family: "百叶片、砂带与切割片", moq: "按准确 SKU、结构、目标市场标签和测试范围报价", sample: "样品费、测试费和第三方检验费分项列明", lead: "样品、标签、文件与生产窗口确认后排期", payment: "以签署文件为准", incoterm: "按命名地点和责任边界确认" },
      ]
    : [
        { family: "Private-label abrasive kits", moq: "Quoted against BOM, component source, pack and print scope; no single website number is treated as a commitment", sample: "Sample and courier charges confirmed before dispatch; any credit must be written into the quotation", lead: "Milestones follow specification, sample, artwork and capacity confirmation", payment: "No fixed public method; quotation/contract controls", incoterm: "Rule, named place, port, taxes and importer responsibility written into the quote" },
        { family: "Buffing wheels and polishing accessories", moq: "Quoted by size, ply, stitching, bore, assortment and packaging", sample: "Stock evaluation samples and custom samples quoted separately", lead: "Scheduled after sample, material and pack approval", payment: "Signed document controls", incoterm: "Confirmed against destination and available logistics" },
        { family: "Sanding sheets, discs and rolls", moq: "Quoted by grain, grit mix, backing, conversion, hole pattern, print and packaging", sample: "Material/grit and retail-pack samples confirmed separately", lead: "Material, conversion, print and pack-out milestones stated separately", payment: "Signed document controls", incoterm: "Confirmed against destination and available logistics" },
        { family: "Flap discs, sanding belts and cut-off wheels", moq: "Quoted by exact SKU, construction, target-market label and test scope", sample: "Product, testing and third-party inspection charges itemized", lead: "Scheduled after sample, label, file and production-window approval", payment: "Signed document controls", incoterm: "Confirmed against the named place and responsibility split" },
      ];
  const name = zh ? "SCOTTCHEN 采购与商业条款登记" : "SCOTTCHEN Procurement & Commercial Terms Register";
  const description = zh ? "按产品族公开起订量、样品、交期、付款和贸易术语的确认边界。" : "Product-family boundaries for MOQ, samples, lead time, payment and Incoterms.";

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero locale={locale} current="terms" eyebrow={zh ? "商务条件 · 单一事实来源" : "Commercial scope · one source of truth"} title={name} intro={zh ? "同行可以公开自己的数字，但不能把同行的 MOQ、费用或交期复制成 SCOTTCHEN 的承诺。当前所有未知项都明确写为需报价，最终以带日期的 SKU 级报价和合同为准。" : "A peer can publish its own numbers, but its MOQ, fees and lead times cannot become SCOTTCHEN commitments. Every unknown is explicitly marked for quotation; the dated SKU-level quote and contract are the source of truth."} />
      <section className="bg-industry-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-industry-slate-800">
            <div className="overflow-x-auto">
              <table className="min-w-[1220px] w-full text-left text-sm">
                <thead className="bg-industry-slate-950 text-xs uppercase tracking-wider text-industry-slate-300"><tr><th className="px-4 py-4">{zh ? "产品族" : "Product family"}</th><th className="px-4 py-4">MOQ</th><th className="px-4 py-4">{zh ? "样品" : "Samples"}</th><th className="px-4 py-4">{zh ? "交期" : "Lead time"}</th><th className="px-4 py-4">{zh ? "付款" : "Payment"}</th><th className="px-4 py-4">Incoterms</th></tr></thead>
                <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900 text-industry-slate-300">{rows.map((row) => <tr key={row.family} className="align-top"><th className="px-4 py-5 font-bold text-white">{row.family}</th><td className="px-4 py-5 leading-relaxed">{row.moq}</td><td className="px-4 py-5 leading-relaxed">{row.sample}</td><td className="px-4 py-5 leading-relaxed">{row.lead}</td><td className="px-4 py-5 leading-relaxed">{row.payment}</td><td className="px-4 py-5 leading-relaxed">{row.incoterm}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-industry-orange/30 bg-industry-orange/5 p-7">
            <h2 className="text-2xl font-bold text-white">{zh ? "可比较报价必须包含" : "A comparable quotation must include"}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(zh
                ? ["准确 SKU、规格版本与 BOM", "评估量、首单量、补货量和年量", "产品、包装、模具、检测和物流分别计价", "样品、版稿、生产、检验和出运里程碑", "付款节点、币种、账户主体与有效期", "Incoterms 版本、命名地点和责任排除"]
                : ["Exact SKU, specification revision and BOM", "Evaluation, first-order, replenishment and annual volumes", "Separate product, pack, tooling, inspection and logistics costs", "Sample, artwork, production, inspection and shipment milestones", "Payment milestones, currency, beneficiary entity and validity", "Incoterms revision, named place and responsibility exclusions"]
              ).map((item) => <div key={item} className="rounded border border-industry-slate-800 bg-industry-slate-950 px-4 py-3 text-sm text-industry-slate-300">{item}</div>)}
            </div>
            <Link href={localPath(locale, "/contact")} className="mt-6 inline-flex rounded bg-industry-orange px-6 py-3 text-sm font-bold text-white">{zh ? "提交可比较询价" : "Submit a comparable RFQ"}</Link>
            <a href="/templates/commercial-terms-template.csv" download className="ml-3 mt-6 inline-flex rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">{zh ? "下载商业条款 CSV 模板" : "Download commercial-terms CSV"}</a>
          </div>
        </div>
      </section>
      <PageSchema locale={locale} path={routes.terms} name={name} description={description} />
      <CTASection />
    </div>
  );
}

export function PackagingPrivateLabelPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const rows = zh
    ? [
        { layer: "单品标签/压入标签", input: "准确 SKU、规格、额定使用条件、警告语责任方、品牌文件", approval: "签字版稿、版本号、实物位置检查", evidence: "批准 PDF/源文件引用 + 版稿签字记录" },
        { layer: "零售袋、彩盒、吸塑或卡装", input: "包装形式、尺寸、数量、材质、目标渠道、刀模来源", approval: "白样/数码样/产前样和装配检查", evidence: "刀模版本、样品照片、批准日期" },
        { layer: "说明书、安全卡与多语言插页", input: "买家或法规顾问批准的文字、语言和责任声明", approval: "逐页校对、折叠和装箱位置确认", evidence: "批准稿、翻译责任和版本控制" },
        { layer: "UPC/EAN/买家平台代码", input: "买家提供的当前数据、条码类型、尺寸、静区与位置", approval: "样品扫描和可读性记录；平台最终接受由买家确认", evidence: "数据来源、扫描设备/日期和异常处置" },
        { layer: "内盒、外箱和托盘标", input: "装箱数、重量、尺寸、箱唛、目的地和物流要求", approval: "首件装箱、重量尺寸和标签位置检查", evidence: "装箱规范、首件记录和出运版本" },
      ]
    : [
        { layer: "Product label or pressed-center label", input: "Exact SKU, specification, rated use, warning-copy owner and brand files", approval: "Signed artwork, revision and physical placement check", evidence: "Approved PDF/source reference plus sign-off record" },
        { layer: "Retail bag, color box, blister or card", input: "Pack format, dimensions, count, material, channel and dieline source", approval: "White sample, digital proof or pre-production pack plus assembly check", evidence: "Dieline revision, sample photo and approval date" },
        { layer: "Instructions, safety card and multilingual insert", input: "Buyer- or regulatory-approved copy, languages and responsibility statement", approval: "Page proof, fold and pack-position review", evidence: "Approved artwork, translation owner and revision control" },
        { layer: "UPC/EAN or buyer marketplace code", input: "Current buyer-supplied data, symbology, size, quiet zone and placement", approval: "Sample scan and readability record; buyer confirms platform acceptance", evidence: "Data source, scanner/date and exception handling" },
        { layer: "Inner box, master carton and pallet marks", input: "Pack count, weight, dimensions, marks, destination and logistics requirements", approval: "First pack-out, weight/dimension and label-position check", evidence: "Pack specification, first-article record and shipment revision" },
      ];
  const steps = zh
    ? ["锁定产品 BOM 与各部件来源", "确认包装形式、刀模责任方和尺寸", "由买家/法规顾问提供并批准警告语与条码数据", "发出带版本号的数码稿或白样", "客户签字批准并冻结文件", "做产前实物、扫描和首件装箱检查", "量产抽检、留存批准记录并控制变更"]
    : ["Lock the product BOM and source of each component", "Confirm pack format, dieline owner and dimensions", "Buyer or regulatory owner supplies approved warnings and barcode data", "Issue a revision-controlled digital proof or white sample", "Buyer signs off and files are frozen", "Perform pre-production physical, scan and first-pack checks", "Inspect production by sampling, retain approval evidence and control changes"];
  const name = zh ? "私牌包装、标签与条码放行流程" : "Private-Label Packaging, Label & Barcode Release Workflow";
  const description = zh ? "从 BOM、刀模、警告语和条码到版稿、扫描与量产放行的包装审批流程。" : "A release workflow from BOM, dieline, warnings and barcode data to artwork, scan checks and production approval.";

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero locale={locale} current="packaging" eyebrow={zh ? "包装工程 · 版本与签字控制" : "Packaging engineering · revision and sign-off control"} title={name} intro={zh ? "同行做得好的不是展示一张漂亮盒子，而是公开谁提供数据、谁审核警告语、何时签字、如何扫描，以及什么记录才能放行。下面把这些责任写成可执行流程。" : "Strong peers do more than show a polished box. They state who supplies data, who approves warnings, when artwork is signed, how codes are scanned and what record releases production. This page turns those responsibilities into an actionable workflow."} />
      <section className="bg-industry-slate-900 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xl border border-industry-slate-800 bg-industry-slate-950">
              <Image src="/images/oem-abrasive-packaging-concept-v2.jpg" alt={zh ? "未印刷磨具套装包装的 AI 生成概念图" : "AI-generated concept of unprinted abrasive kit packaging"} width={1536} height={1024} sizes="(min-width: 1024px) 56vw, 92vw" className="h-auto w-full object-cover" priority />
              <div className="absolute inset-x-0 bottom-0 bg-industry-slate-950/90 px-4 py-3 text-[11px] font-bold text-white backdrop-blur-sm">{zh ? "AI 生成包装概念图 · 非真实订单、刀模、标签、条码或出货照片" : "AI-generated packaging concept · not a customer order, dieline, label, barcode or shipment photo"}</div>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-white">{zh ? "7 道放行门" : "Seven release gates"}</h2>
            <ol className="mt-5 space-y-3">{steps.map((step, index) => <li key={step} className="flex gap-3 rounded-lg border border-industry-slate-800 bg-industry-slate-950 p-4"><span className="font-mono font-black text-industry-orange-light">{String(index + 1).padStart(2, "0")}</span><span className="text-sm leading-relaxed text-industry-slate-300">{step}</span></li>)}</ol>
          </aside>
        </div>
      </section>
      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">{zh ? "包装资料与放行证据矩阵" : "Packaging input and release-evidence matrix"}</h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-industry-slate-800"><div className="overflow-x-auto"><table className="min-w-[980px] w-full text-left text-sm"><thead className="bg-industry-slate-900 text-xs uppercase tracking-wider text-industry-slate-300"><tr><th className="px-5 py-4">{zh ? "层级" : "Layer"}</th><th className="px-5 py-4">{zh ? "必须输入" : "Required input"}</th><th className="px-5 py-4">{zh ? "批准检查" : "Approval check"}</th><th className="px-5 py-4">{zh ? "保留证据" : "Retained evidence"}</th></tr></thead><tbody className="divide-y divide-industry-slate-800 bg-industry-slate-950 text-industry-slate-300">{rows.map((row) => <tr key={row.layer} className="align-top"><th className="px-5 py-5 font-bold text-white">{row.layer}</th><td className="px-5 py-5 leading-relaxed">{row.input}</td><td className="px-5 py-5 leading-relaxed">{row.approval}</td><td className="px-5 py-5 leading-relaxed">{row.evidence}</td></tr>)}</tbody></table></div></div>
          <div className="mt-8 rounded-xl border border-amber-400/30 bg-amber-400/5 p-6 text-sm leading-relaxed text-amber-100">{zh ? "当前网站没有真实刀模、客户批准警告语、生产条码或扫描记录。概念图只用于讨论包装结构；任何可投入生产的文字和编码都必须来自当前项目并完成签字与扫描验证。" : "The site currently has no real dieline, client-approved warning copy, production barcode or scan record. The concept image is only for discussing pack structure; production-ready copy and codes must come from the live project and pass sign-off and scan verification."}</div>
          <a href="/templates/packaging-release-template.csv" download className="mt-6 inline-flex rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">{zh ? "下载包装放行 CSV 模板" : "Download packaging-release CSV"}</a>
        </div>
      </section>
      <PageSchema locale={locale} path={routes.packaging} name={name} description={description} />
      <CTASection />
    </div>
  );
}

export function CaseStudiesPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const examples = zh
    ? [
        { title: "汽车轮毂修复套装", label: "能力场景，不是客户案例", country: "未提供", challenge: "需要把清洁、打磨、细化和抛光步骤映射到兼容配件与零售包装。", cycle: "未提供真实项目周期", result: "应预先约定：表面缺陷、单套成本、退货原因和补货节奏。" },
        { title: "多粒度砂纸零售组合", label: "能力场景，不是客户案例", country: "未提供", challenge: "粒度、基材、孔型、每包数量、标签和渠道规则必须在一个 BOM 中锁定。", cycle: "未提供真实项目周期", result: "应预先约定：粒度完整性、包装错误率、扫描通过率和客户退货。" },
        { title: "渠道商抛光轮产品线", label: "能力场景，不是客户案例", country: "未提供", challenge: "不同直径、层数、缝线、中心孔和抛光膏组合需要统一规格和补货逻辑。", cycle: "未提供真实项目周期", result: "应预先约定：样品批准率、兼容性问题、批次一致性和补货交期。" },
      ]
    : [
        { title: "Automotive wheel-restoration kit", label: "Capability scenario, not a customer case", country: "Not supplied", challenge: "Map cleaning, sanding, refining and polishing steps to compatible accessories and a retail pack.", cycle: "No real project cycle supplied", result: "Pre-agree surface defects, landed kit cost, return reasons and replenishment cadence." },
        { title: "Multi-grit retail sanding assortment", label: "Capability scenario, not a customer case", country: "Not supplied", challenge: "Lock grit, backing, hole pattern, pack count, label and channel rules in one BOM.", cycle: "No real project cycle supplied", result: "Pre-agree grit completeness, pack-out error, scan pass and customer return metrics." },
        { title: "Distributor buffing-wheel range", label: "Capability scenario, not a customer case", country: "Not supplied", challenge: "Unify specifications and replenishment logic across diameter, ply, stitching, bore and compound combinations.", cycle: "No real project cycle supplied", result: "Pre-agree sample approval, compatibility issues, batch consistency and replenishment lead-time metrics." },
      ];
  const name = zh ? "客户案例证据标准与当前披露状态" : "Customer Case Evidence Standard & Current Disclosure Status";
  const description = zh ? "公开说明真实匿名客户案例所需字段，并区分能力场景与客户结果。" : "The publication standard for real anonymous customer cases, with capability scenarios clearly separated from customer outcomes.";

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero locale={locale} current="cases" eyebrow={zh ? "案例可信度 · 不编造客户结果" : "Case credibility · no invented customer outcomes"} title={name} intro={zh ? "目前没有客户批准的国家、采购量、周期或结果资料，因此这里不会把生成内容包装成案例。先公开案例标准和能力场景；收到真实项目并获得授权后，再升级为可核验案例。" : "No client-approved country, purchase volume, cycle or result data has been supplied, so generated content is not presented as a case study. This page publishes the case standard and capability scenarios until a real project is authorized."} />
      <section className="bg-industry-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-6"><StatusBadge tone="missing">{zh ? "案例库状态：等待客户批准的数据" : "Case library status: awaiting client-approved data"}</StatusBadge><p className="mt-4 max-w-4xl text-sm leading-relaxed text-amber-100">{zh ? "匿名不等于模糊。一个可信匿名案例仍应提供国家/区域、行业、准确产品与设备、采购难点、时间线、比较基准、结果指标和证据保存方式。" : "Anonymous does not mean vague. A credible anonymous case should still provide country/region, industry, exact product and equipment, sourcing challenge, timeline, comparison baseline, outcome metric and retained evidence."}</p></div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">{examples.map((example) => <article key={example.title} className="glass-panel rounded-xl border border-industry-slate-800 p-6"><StatusBadge tone="concept">{example.label}</StatusBadge><h2 className="mt-4 text-xl font-bold text-white">{example.title}</h2><dl className="mt-5 space-y-4 text-sm"><div><dt className="text-xs font-bold uppercase tracking-wider text-industry-orange-light">{zh ? "国家/区域" : "Country / region"}</dt><dd className="mt-1 text-industry-slate-300">{example.country}</dd></div><div><dt className="text-xs font-bold uppercase tracking-wider text-industry-orange-light">{zh ? "采购难点" : "Sourcing challenge"}</dt><dd className="mt-1 leading-relaxed text-industry-slate-300">{example.challenge}</dd></div><div><dt className="text-xs font-bold uppercase tracking-wider text-industry-orange-light">{zh ? "项目周期" : "Project cycle"}</dt><dd className="mt-1 text-industry-slate-300">{example.cycle}</dd></div><div><dt className="text-xs font-bold uppercase tracking-wider text-industry-orange-light">{zh ? "结果字段" : "Outcome fields"}</dt><dd className="mt-1 leading-relaxed text-industry-slate-300">{example.result}</dd></div></dl></article>)}</div>
        </div>
      </section>
      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-extrabold text-white">{zh ? "升级为真实案例所需的 8 个字段" : "Eight fields required to publish a real case"}</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{(zh ? ["客户授权范围与匿名规则", "国家/区域、行业与渠道", "准确 SKU、设备和应用", "采购难点与验收标准", "样品到量产的时间线", "原方案或竞品比较基准", "量化结果与统计口径", "照片、报告、订单或邮件证据"] : ["Client permission and anonymity rule", "Country/region, industry and channel", "Exact SKU, equipment and application", "Sourcing challenge and acceptance criteria", "Sample-to-production timeline", "Previous solution or competitor baseline", "Quantified result and measurement definition", "Photo, report, order or email evidence"]).map((item, index) => <div key={item} className="rounded border border-industry-slate-800 bg-industry-slate-900 p-4 text-sm text-industry-slate-300"><span className="mr-2 font-mono font-black text-industry-orange-light">{String(index + 1).padStart(2, "0")}</span>{item}</div>)}</div><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent(zh ? "提交可公开的客户案例资料" : "Submit client-approved case material")}`} className="inline-flex rounded bg-industry-orange px-6 py-3 text-sm font-bold text-white">{zh ? "邮件提交案例资料" : "Submit case evidence by email"}</a><a href="/templates/case-study-intake-template.csv" download className="inline-flex rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">{zh ? "下载案例采集 CSV 模板" : "Download case-intake CSV"}</a></div></div></section>
      <PageSchema locale={locale} path={routes.cases} name={name} description={description} />
      <CTASection />
    </div>
  );
}
