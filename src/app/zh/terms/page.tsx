import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "网站与B2B询盘条款 | SCOTTCHEN",
  description:
    "了解 SCOTTCHEN B2B 网站、询价、样品申请、MOQ、包装、质量验收与项目合同确认相关条款。",
  path: "/zh/terms",
  alternatePath: "/terms",
  locale: "zh-CN",
});

export default function ChineseTermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[{ label: "首页", href: "/zh" }, { label: "服务条款", href: "/zh/terms" }]}
          />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">
            商务合作基础条款
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            网站与 B2B 询盘条款
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            生效日期：2026年6月28日。本页适用于网站浏览、询价和样品沟通；实际供货项目以书面报价、规格书或合同为准。
          </p>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-lg border border-industry-slate-800/80 bg-industry-slate-950/40 space-y-8 text-sm text-industry-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                1. 适用范围
              </h2>
              <p>
                本条款适用于 SCOTTCHEN 品牌网站的使用，以及通过网站提交的报价、样品、产品规格、包装和贴牌需求沟通。
              </p>
              <p>
                本网站面向 B2B 采购、渠道分销和品牌定制评估。目前不发布已核验的 SCOTTCHEN 消费者零售站链接；第三方平台商品需由买家独立核验。
              </p>
              <p>
                提交表单不代表形成采购、供货、代理或独家合作关系。项目的法律签约主体、付款信息、质量标准和责任边界必须在书面报价或合同中确认。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                2. 起订量与样品
              </h2>
              <p>
                网站展示的 MOQ 是 RFQ 参考起点，不是固定承诺。最终起订量取决于 SKU、材料、包装、印刷方式和项目复杂度。
              </p>
              <ul className="list-disc pl-5 space-y-2 font-mono text-xs text-industry-slate-400">
                <li>
                  <strong>棉布轮、麻布轮与气道轮：</strong>通常按尺寸、缝线方式和材料分别确认。
                </li>
                <li>
                  <strong>砂纸张、砂卷、砂碟与砂带：</strong>常受粒度、背基、孔型和包装方式影响。
                </li>
                <li>
                  <strong>百叶片、切割片和纤维砂盘：</strong>需确认尺寸、孔径、磨料、最高转速和标识要求。
                </li>
                <li>
                  <strong>贴牌套装：</strong>通常需确认组合清单、彩盒、条码、说明书和外箱唛头后报价。
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                3. 报价与价格
              </h2>
              <p>
                每份报价必须写明币种、有效期、包含与不包含项目、税费处理和价格调整条件；本网站不预设结算币种或价格基础。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                4. 包装、品牌与条码
              </h2>
              <p>
                包装刀模、商标授权、警示语、翻译、条码数据、FNSKU/UPC 标签、样品确认和改稿轮次均按项目单独确认。网站描述不保证任何零售平台、仓库或海关系统的自动接受。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                5. 规格与质量验收
              </h2>
              <p>
                产品尺寸、公差、结构、外观、包装和性能测试要求必须记录在确认的 SKU 规格书、封样和质量计划中。
              </p>
              <ul className="list-disc pl-5 space-y-2 text-industry-slate-350">
                <li>孔径、公差、外径、厚度、缝线密度和材料结构以项目规格书为准。</li>
                <li>转速、平衡、强度、粘结、磨削或抛光表现等测试需提前定义样本、方法和验收条件。</li>
                <li>证书、检测报告、批次照片或第三方验货材料应在报价或质量计划中约定提供范围。</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                6. 交付与运输
              </h2>
              <p>
                交期起算条件必须在报价中写明。可行的 Incoterms 规则、指定地点、装运路径、签约与进出口主体、税费及货代责任需按项目评估并在书面文件中明确；本页不承诺任何特定术语可用。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                7. 签约主体与准据条款
              </h2>
              <p>
                供应商法律名称、注册地址、收款账户、争议处理、质保和补救责任不由本网站单独确定，应以双方签署或确认的项目报价、采购订单或合同为准。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                8. 联系方式
              </h2>
              <p>如需确认网站条款、项目报价或技术规格，请联系：</p>
              <div className="bg-industry-slate-950 p-6 rounded border border-industry-slate-800 font-mono text-xs text-industry-slate-400 space-y-2">
                <div>
                  <span className="text-white font-bold">品牌：</span>SCOTTCHEN
                </div>
                <div>
                  <span className="text-white font-bold">邮箱：</span>
                  <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline">
                    sales@scottchentools.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-industry-slate-500">
                中文页面用于方便阅读；如与项目书面合同、订单或英文法律文本存在差异，以双方确认的项目文件为准。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
