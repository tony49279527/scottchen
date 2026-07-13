# SCOTTCHEN GEO 基线快照（小样本）

日期：2026-07-10  
环境：无痕式浏览器自动化；地区信号偏 US/HK；**单次运行，非稳定性复测**  
平台：Perplexity、Google（含 AI Overview）  
Query 来源：[docs/geo-query-set.md](geo-query-set.md)

> 本文件是基线快照，不是月度完整复测。每条查询仅 1 次；未覆盖 Bing Copilot / ChatGPT Search / Gemini / Claude。

## 汇总

| 指标 | 结果 |
|---|---|
| 测试查询数 | 6（Buffing×3、Sanding×1、OEM-Kits×1、Brand×2 有重叠） |
| Brand Mention 率 | 2/6 ≈ 33%（仅品牌实体查询命中） |
| Source Citation（scottchentools.com）率 | 1/6 ≈ 17%（Google 品牌查询有机结果出现官网；AI 答案未主导引用） |
| 非品牌采购意图命中 | **0/4**（产品发现 / MOQ / fiber disc / OEM kit 均未提 SCOTTCHEN） |
| 品牌 AI 可见度（粗算） | 0.33×0.4 + 0.17×0.6 ≈ **0.23** |
| 主要竞品/替代源 | Zephyr、Renegade、Elite Abrasives、Valgro、CUMET、Made-in-China、Amazon/eBay 零售页 |

**结论**：非品牌采购意图下，AI/搜索答案目前由零售品牌、印度/中国目录站与通用磨料贴牌商主导；SCOTTCHEN 在**品牌名查询**下可被提及，但叙事偏向 **Amazon/Walmart 零售卖家**，B2B 工厂站 `scottchentools.com` 尚未成为 AI 答案的优先引用源。与评分卡 GEO 子分 1.5 一致。

## 记录表

| Date | Engine | Locale | Query | Cluster | Brand Mention | Source Citation | Citation Position | Answer Accuracy | Sentiment | Competitors / Notes |
|---|---|---|---|---|---:|---:|---|---|---|---|
| 2026-07-10 | Perplexity | zh-UI / EN query | best cotton buffing wheel manufacturer | Buffing / 产品发现 | 0 | 0 | 0 | n/a | 0.5 | Valgro、Western Abrasive、Allied/Novelty、AA Abrasives；无 SCOTTCHEN |
| 2026-07-10 | Perplexity | zh-UI / EN query | SCOTTCHEN buffing wheels manufacturer | Buffing / 品牌实体 | 1 | 0 | 0 | 0.5 | 0.5 | 提及品牌但归因 Amazon/eBay/Walmart；混淆 Dr. Scott Chen 地点；**未引 scottchentools.com** |
| 2026-07-10 | Perplexity | zh-UI / EN query | buffing wheel MOQ for private label | Buffing / 采购决策 | 0 | 0 | 0 | 0.5 | 0.5 | Elite Abrasives 主导；泛化 MOQ 100–500；未对齐官网「500 pcs/规格」口径 |
| 2026-07-10 | Perplexity | zh-UI / EN query | zirconia fiber disc manufacturer wholesale | Sanding / 产品发现 | 0 | 0 | 0 | n/a | 0.5 | CUMET、Buddies、WEEM、Made-in-China、NovoAbrasive |
| 2026-07-10 | Google AI Overview | en / gl=us | best cotton buffing wheel manufacturer | Buffing / 产品发现 | 0 | 0 | 0 | n/a | 0.5 | AIO 推荐 Zephyr、Renegade；有机结果 Empire/Red Label/Justdial；无 SCOTTCHEN |
| 2026-07-10 | Google AI Overview + SERP | en / gl=us | SCOTTCHEN abrasives manufacturer | Brand / 品牌实体 | 1 | 1* | 有机中位* | 0.5 | 0.5 | AIO 讲产品线但购买路径指向 Amazon/Walmart；**有机结果出现 scottchentools.com 首页**；零售页仍占主导 |

\*Citation：有机 SERP 出现官网计 Source Citation=1；AI Overview 正文未明确以 scottchentools.com 为引用源。

## OEM-Kits 簇说明

`abrasive kit wholesale private label OEM` 在 Perplexity 上启动了搜索，但本轮快照时答案未完整落盘（登录墙/加载中断）。按计划归入「待补测」：下次复测优先补该条 + `how to choose a reliable botanical extract supplier` 类比的 `how to evaluate OEM abrasive supplier`（承接 `/resources/oem-abrasive-supplier-evaluation`）。

## 对内容与实体的行动含义（非本轮代码阻塞）

1. **实体消歧**：强化「SCOTTCHEN = Shanghai OEM abrasive manufacturer / scottchentools.com」，减少与零售市场页、同名个人混淆。
2. **采购意图页可抽取事实**：MOQ/交期/贸易条款已在落地页与 schema；需更多外部一致提及才能进入 AI 候选池。
3. **站外权威**：Amazon 零售信号强于 B2B 站；需 LinkedIn/目录/案例与官网法定主体对齐。
4. **下月复测**：同一 6–12 条查询 × Perplexity + Google + Bing，各 ≥3 次，填稳定性列。

## 本轮代码侧已完成的可引用性增强（待生产提升后生效）

- 16 个中英关键词页：可见 FAQ + `FAQPage` 与 `ProductGroup` 同页 `@graph`
- 中文首页 description 加长至 ~81 字
- `SITE_UPDATED=2026-07-10`；IndexNow 已提交 51 URL
- Preview：`https://scottchen-cv244ma38-context27149.vercel.app`（Ready；需 SSO）
- **生产提升**：`vercel --prod` / `vercel promote` 需人工审批后执行
