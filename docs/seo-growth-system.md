# SCOTTCHEN B2B SEO 增长系统

## 当前范围与基线

- 项目：`/Users/liangxile/project/scottchen`；生产域名：`https://www.scottchentools.com`；时区：`Asia/Shanghai`。
- 品牌与产品：SCOTTCHEN；磨料、砂磨、抛光附件，以及 OEM/私牌组合套装。当前买家定位包括工具品牌、五金经销商、工业供应商和线上零售商。
- 技术栈：Next.js 16 App Router、React 19、TypeScript、Vercel Node runtime。修改 Next.js 代码前必须阅读 `node_modules/next/dist/docs/` 对应版本文档。
- 2026-07-15 线上基线：主页、Products、Contact、robots、sitemap 返回正常；生产 SEO smoke 为 62 个 sitemap URL、61 个 HTML 页面、301 个图片引用。主页 PSI mobile `90/96/100/100`、LCP 约 `3.3s`，desktop `100/100/100/100`，无 CrUX 字段数据。
- GSC 属性：`sc-domain:scottchentools.com`。最近一次可用 28 天为 37 impressions、0 clicks、CTR 0、平均排名 12.38；最近 7 天 25 impressions，样本很小，不能据此判断市场规模或批量建页。
- sitemap 当时无 warnings/errors，submitted 56、API 报告 indexed 0；URL Inspection 显示主页和若干决策页已收录，Products、Contact、中文首页仍处于 discovered/not indexed。不同 GSC 接口口径不得强行对账。
- 最高价值缺口不是泛化技术重构，而是真实证书/检测范围、法律主体/设施、QC/包装、商业条款、客户案例，以及足够长的 GSC/漏斗时间序列。

## 五个可自然语言触发的 Skills

1. `scottchen-b2b-authority-growth`：验证并评分品牌提及、协会、目录、展会、媒体、合作伙伴与高质量引用机会。例：“找出本周 3 个值得人工申请的行业权威入口，并说明证据要求。”
2. `scottchen-gsc-content-growth`：比较 28/7 天及历史等长窗口，识别 CTR、冲击首页、内链与内容差距。例：“根据最新 GSC 找 3 个应该先更新的现有页面。”
3. `scottchen-evidence-case-builder`：管理证据有效期、范围、脱敏、客户许可与发布审批。例：“检查现有 QC 和包装资料能否做一个匿名案例。”
4. `scottchen-seo-conversion-growth`：审计自然落地页到 RFQ、样品、报价、成交与响应时间。例：“检查产品页到询盘表单是否丢失来源和产品上下文。”
5. `scottchen-competitive-market-intelligence`：做竞争矩阵和市场准备度评分。例：“比较 3 个磨料 OEM 竞争者，并判断美国或德国是否值得深入调查。”

## 自动化周期（Asia/Shanghai）

- 每日 07:45：`SCOTTCHEN 每日技术 SEO 巡检`。
- 每周二 09:50：`SCOTTCHEN 每周站外权威增长`，最多 3-5 个人工行动。
- 每月 2 日 10:50：`SCOTTCHEN 每月 SEO 内容证据与转化增长`，最多 3-5 个内容/转化行动及 1 个案例/证据包。
- 每季度首月 6 日 11:20：`SCOTTCHEN 季度竞争与国际市场复盘`，调查 1-2 个市场/语言、2-3 个竞争改进、最多 1 个渠道实验。

每个任务绑定本地项目、状态 ACTIVE、先读自身 memory、保护未提交改动、以中文分开报告已采集数据、本地修复、验证、外部授权和未执行动作，并在结束后追加不含 secret 的简短 memory。

## 确定性工具

```bash
python3 /Users/liangxile/.codex/skills/scottchen-b2b-authority-growth/scripts/score_prospects.py docs/seo/backlink-prospects.csv --output /tmp/scottchen-prospects-scored.csv
python3 /Users/liangxile/.codex/skills/scottchen-gsc-content-growth/scripts/score_gsc_opportunities.py docs/seo/gsc-opportunity-baseline.csv --output /tmp/scottchen-gsc-scored.csv
python3 /Users/liangxile/.codex/skills/scottchen-evidence-case-builder/scripts/validate_evidence_manifest.py docs/seo/evidence-manifest.csv
python3 /Users/liangxile/.codex/skills/scottchen-seo-conversion-growth/scripts/audit_rfq_journey.py --base-url https://www.scottchentools.com --sitemap https://www.scottchentools.com/sitemap.xml
python3 /Users/liangxile/.codex/skills/scottchen-competitive-market-intelligence/scripts/score_market_candidates.py docs/seo/market-candidates.csv --output /tmp/scottchen-markets-scored.csv
```

项目验证继续使用 `npm run typecheck`、`npm run build`、`SEO_SMOKE_FETCH_TIMEOUT_MS=20000 npm run seo:smoke`，以及需要时的本地/移动端浏览器 smoke test。

## 自动化可直接完成

可收集公开/已授权只读数据，更新本地 CSV、报告、模板和 automation memory；可修复证据充分、低风险、可验证且不覆盖用户工作的本地 metadata、schema、内链、可访问性、图片属性、静态文字或小型性能问题。

## 必须等待具体确认

注册账号、提交目录/公司档案、发送邮件/投稿/社交发布/联系伙伴、购买工具/会员/广告/展位、公开证书/客户/订单/检测/评价、安装分析/Cookie/像素/CRM 或改保留策略、真实测试询盘、请求索引/提交 sitemap、修改 DNS/Cloudflare/GSC 权限、commit、push、生产部署、删除数据或修改外部账号。

## KPI

最终 KPI：有效询盘、销售合格线索、样品、报价、成交、首次响应时间。中间指标：展示、点击、CTR、排名、收录、引荐访问、相关引用域名、CTA 点击、表单开始/有效提交和交付失败率。所有比率必须明确分子、分母、窗口、归因、排除项和数据源；缺少分析/CRM 数据时标为未知，不写成 0。
