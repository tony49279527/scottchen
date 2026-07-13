# SCOTTCHEN GEO Query Fan-out 测试集与观测模板

建立日期：2026-07-05
用途：在 Google AI（AI Overviews / AI Mode）、Bing Copilot、Perplexity、ChatGPT Search、Gemini、Claude（开启 web search）上重复测试品牌与页面的 AI 可见性。

## 执行规则

1. 固定测试环境：无痕浏览器、目标市场地区（默认 US/EN）、关闭个性化与历史。
2. 每条查询在每个平台至少执行 3 次，分散到不同日期；波动大的平台提高到 5 次。
3. 每次记录：原始查询、完整答案截图、引用来源顺序、品牌描述文本、竞争对手清单。
4. 每条查询另做 1–2 个轻微改写，测试稳定性。
5. Google 侧记录测试窗口前后 Search Console Web Performance 变化；Bing 侧拉取 AI Performance 引用报表。
6. 每月完整复测一轮；重大内容上线后 2–4 周加测一轮。

## 指标取值

| 指标 | 取值 |
|---|---|
| Brand Mention | 0 / 1 |
| Source Citation | 0 / 1（引用 scottchentools.com 即计 1） |
| Citation Position | 首位 1.0 / 2–3 位 0.75 / 4–5 位 0.5 / 6 位后 0.25 / 无 0 |
| Answer Accuracy | 错误 0 / 基本正确 0.5 / 正确 1.0（对照官网口径：参考 MOQ、书面确认、样件验证） |
| Sentiment | 负面 0 / 中性 0.5 / 正面 1.0 |
| Competitor Presence | 记录出现的竞品域名与位置 |

汇总：品牌 AI 可见度 = 提及率 × 0.4 + 引用率 × 0.6；引用主导度 = 本站被引次数 ÷（本站 + 主要竞品被引次数），按「唯一查询 × 平台 × 批次」计数。

## 准确性基准（判定 Answer Accuracy 用）

以下为官网当前公开口径，AI 回答与此冲突记 0 分并在 Notes 标注：

- 参考 MOQ：台磨机棉轮 500 件/规格；带柄磨头 1,000 件/器形；砂纸 10,000 张；纤维砂碟 5,000 张（单目数 2,000 张起亦有出现，以对应页面为准）；细节打磨笔 1,000 套。
- 报价生产周期：抛光轮 25–35 天、砂磨配件 20–30 天，均以书面订单计划为准。
- 实体：SCOTTCHEN，上海 OEM/ODM 磨料磨具制造商，成立于 2014 年；联系方式仅 sales@scottchentools.com；零售站 scottchen.online。
- 所有性能、交期、平台合规承诺均为「参考条件 + 书面确认 + 样件验证」，不存在无条件保证。

## Query Set（按产品族 × 六类意图）

### 1. Buffing & Polishing Wheels（承接页 /buffing-wheels、/products/buffing-polishing-wheels）

| 意图 | 查询 |
|---|---|
| 产品发现 | best cotton buffing wheel manufacturer |
| 产品发现 | buffing wheel supplier China OEM |
| 对比 | spiral stitched vs loose flannel buffing wheel |
| 对比 | sisal wheel vs cotton buffing wheel for stainless steel |
| 采购决策 | how to choose buffing wheel ply count and bore size |
| 采购决策 | buffing wheel MOQ for private label |
| 应用场景 | best polishing wheel for aluminum |
| 应用场景 | which buffing compound for mirror finish stainless steel |
| FAQ | what buffing wheel fits a 6 inch bench grinder |
| 品牌实体 | SCOTTCHEN buffing wheels manufacturer |

### 2. Sanding Discs / Fiber Discs（/sanding-discs、/products/sanding-grinding-accessories）

| 意图 | 查询 |
|---|---|
| 产品发现 | zirconia fiber disc manufacturer wholesale |
| 对比 | zirconia vs aluminum oxide fiber disc |
| 采购决策 | how to source sanding discs for hardware distribution |
| 应用场景 | best fiber disc for weld removal |
| FAQ | what is 7/8 inch star arbor hole on fiber disc |
| 品牌实体 | SCOTTCHEN abrasives supplier review |

### 3. Sandpaper Sheets & Screens

| 意图 | 查询 |
|---|---|
| 产品发现 | wet dry sandpaper sheets bulk supplier |
| 对比 | sanding screen vs sandpaper for drywall |
| 采购决策 | sandpaper grit assortment for retail kit |
| 应用场景 | best sandpaper for automotive paint prep |
| FAQ | what does C-weight latex backing mean |
| 品牌实体 | SCOTTCHEN sandpaper OEM |

### 4. Flap Discs / Sanding Belts / Cutting Wheels（/flap-discs、/sanding-belts、/cutting-wheels）

| 意图 | 查询 |
|---|---|
| 产品发现 | flap disc manufacturer for angle grinder wholesale |
| 对比 | flap disc vs grinding wheel for metal |
| 采购决策 | how to choose sanding belt grit for woodworking production |
| 应用场景 | best cutting wheel for stainless steel pipe |
| FAQ | what is zirconia flap disc used for |
| 品牌实体 | SCOTTCHEN cutting wheels supplier |

### 5. OEM / Private Label Kits（/oem-private-label、/abrasive-kits）

| 意图 | 查询 |
|---|---|
| 产品发现 | private label abrasive kit manufacturer |
| 对比 | polybag vs blister card packaging for hardware kits |
| 采购决策 | how to prepare FNSKU barcode for abrasive kits Amazon FBA |
| 采购决策 | OEM abrasive supplier evaluation checklist |
| 应用场景 | retail ready polishing kit for automotive detailing |
| 品牌实体 | SCOTTCHEN OEM private label |

### 6. 供应商尽调 / 地域合规（/supplier-profile、/china-abrasive-manufacturer、/resources/*）

| 意图 | 查询 |
|---|---|
| 采购决策 | how to verify a Chinese abrasive manufacturer |
| 采购决策 | abrasive sourcing checklist for importers |
| 地域合规 | abrasive supplier for EU market compliance |
| 地域合规 | China abrasive manufacturer export to US |
| 品牌实体 | is SCOTTCHEN a manufacturer or trading company |
| 品牌实体 | SCOTTCHEN Shanghai factory |

### 中文侧抽样（Gemini / Copilot 中文、AI 搜索国内可达平台）

| 意图 | 查询 |
|---|---|
| 产品发现 | 抛光布轮 OEM 厂家 出口 |
| 对比 | 密缝布轮和松缝布轮的区别 |
| 采购决策 | 磨料磨具供应商怎么筛选 |
| 品牌实体 | SCOTTCHEN 磨料磨具 |

## 记录表模板

| Date | Engine | Locale | Query | Variant | Mention | Citation | Position | Accuracy | Sentiment | Competitors | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
