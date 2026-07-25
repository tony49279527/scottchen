# SCOTTCHEN 每周站外权威增长补跑 - 2026-07-21 16:30

- 原计划时间：2026-07-21 16:30 北京时间
- 实际执行时间：2026-07-22 10:57 CST +0800
- 覆盖窗口：2026-07-14 16:30 至 2026-07-21 16:30 北京时间；官方页面复核在 2026-07-22 完成
- 状态：完成本地候选更新与校验；未执行任何账号提交、外链提交、发信、付费、commit、push 或 deploy

## 已采集数据

- automation：`/Users/liangxile/.codex/automations/scottchen/automation.toml` 已读取；本次开始时 `/Users/liangxile/.codex/automations/scottchen/memory.md` 不存在，未发现 2026-07-21 16:30 周期成功记录。
- git：当前分支 `main...origin/main`；补跑前已有未跟踪项 `.claude/`、`output/pdf/scottchen-rfq-sourcing-catalog.pdf`、`scottchen-gpt-site/`，本次未改动。
- 项目定位：`docs/seo-growth-system.md` 确认 SCOTTCHEN 当前公开定位为 `https://www.scottchentools.com`，磨料、砂磨、抛光附件、OEM/私牌组合套装，目标买家包括工具品牌、五金经销商、工业供应商和线上零售商。
- GSC：当前任务没有授权的完整 Links export；本期不声称全量外链审计，只做公开官方来源复核。
- 品牌提及：搜索 `"SCOTTCHEN" -site:scottchentools.com` 和 `"scottchentools.com" -site:scottchentools.com`，确认 Walmart 有 SCOTTCHEN 品牌/产品页；Amazon 有搜索结果摘要但本次打开未稳定核验，因此仅作为待复核品牌提及，不作为已验证外链资产。
- 官方候选页：
  - FEPA membership：官方页面说明会员申请需欧洲 abrasive 或 abrasive-related 生产 plant；SCOTTCHEN 当前公开资料未证明欧洲生产 plant。
  - oSa manufacturer membership：官方页面说明 worldwide resident companies 若 manufacture and sell grinding tools from artificial abrasives 可申请，并要求 application form、产品范围表、样品测试、IFA 测试、工厂检查和后续 audit；SCOTTCHEN 当前公开资料未证明自有制造工厂和测试范围。
  - UAMA membership：官方页面确认 UAMA 是 abrasives 标准/安全相关协会，但本次页面未看到申请类别、会费和非美国公司资格。
  - EISENWARENMESSE - International Hardware Fair：官方 exhibitor application 和 facts pages 确认硬件/工具产品板块、B2B trade/industry/commercial users 访问权、online application 与 sqm 费用。
  - NHS Concept to Commerce：官方 RX/NHS exhibitor-interest form 确认可提交参展兴趣；该入口适合私牌、global manufacturing 和 hardlines buyer 场景，但提交需人工授权。
  - China International Hardware Show：官方 CIHS booth application、why exhibit 页面和 2026 brochure 确认 2026-09-28 至 2026-09-30 上海展、abrasives/grinding category、hosted buyer matching 与 participation packages。
  - Thomasnet：官方页面确认 supplier discovery、RFQ、company profile claim 和 profile checklist，但 SCOTTCHEN profile 未核验，账号提交需授权。
  - GlobalSpec：官方页面确认 industrial product/supplier directory 与 get-listed path，但 abrasive-category onboarding 和费用未确认。

## 候选评分

评分脚本：`python3 /Users/liangxile/.codex/skills/scottchen-b2b-authority-growth/scripts/score_prospects.py docs/seo/backlink-prospects.csv --output /tmp/scottchen-prospects-scored-2026-07-21.csv`

```text
77 ready-for-manual-review  International Hardware Fair Cologne exhibitor
76 ready-for-manual-review  China International Hardware Show booth application
76 ready-for-manual-review  NHS Concept to Commerce exhibitor
65 research                 FEPA association membership
65 research                 UAMA membership research
60 research                 oSa manufacturer membership
60 research                 SCOTTCHEN unlinked brand mentions
56 research                 Thomasnet supplier profile research
54 observe-or-reject        GlobalSpec supplier listing research
```

## 本周建议人工动作

1. International Hardware Fair Cologne exhibitor：准备参展决策包，不提交。资料包应包含产品线、私牌包装能力、QC/合规证据、目标买家、sqm 预算和 ROI 假设；成功指标为获得官方展商资料/报价和可公开展商 profile 规则。
2. China International Hardware Show booth application：准备 CIHS 参展/展商档案资料，不提交。重点确认 grinding tools and abrasives 展区、标准展位/光地预算、hosted buyer 匹配资料和中英文公司描述；成功指标为明确展位包和展商 profile 字段。
3. NHS Concept to Commerce exhibitor：准备 hardlines/private-label 参展兴趣表字段，不提交。重点确认美国买家价值、私牌/全球制造 pavilion 适配、MOQ/样品/包装材料和费用；成功指标为可由人工审批后一键提交的完整草稿。
4. oSa/FEPA/UAMA 资格研究：先做证据差距表，不申请。FEPA 重点是欧洲 plant 条件；oSa 重点是自有制造、EN 标准测试、IFA 和 factory audit；UAMA 重点是会员类别、会费和非美国公司资格。
5. Thomasnet profile research：仅准备 profile checklist，不 claim。需要公司描述、产品分类、认证/注册、PDF/图片资产和 RFQ 接收邮箱；成功指标为人工确认账号归属和是否值得投入付费 category。

## 本地文件/修复

- 更新 `docs/seo/backlink-prospects.csv`：从 3 条扩展到 9 条，补充官方 URL、核验标记、买家意图、成本/风险、证据要求、目标落地页和未知项。
- 新增 `docs/seo/authority-growth-weekly-2026-07-21.md`：记录本期补跑窗口、官方来源、评分结果、3-5 个可人工执行动作和外部授权边界。

## 验证

- `score_prospects.py` 已通过并输出 `/tmp/scottchen-prospects-scored-2026-07-21.csv`。
- 候选 CSV 满足 rubric 要求列：`name,url,type,official_verified,eligibility_verified,relevance,editorial_review,buyer_intent,evidence_readiness,cost_risk,status,notes`。
- 未执行外部写操作；未修改补跑前已有未跟踪项。

## 外部授权

- 需要具体人工授权后才可执行：展会表单提交、协会申请、Thomasnet/GlobalSpec profile claim、任何付费会员/展位/广告、任何邮件/投稿/社交发布、公开证书/客户/测试/工厂证据、commit/push/deploy。

## 未执行动作

- 未提交 EISENWARENMESSE、CIHS、NHS 表单：需要公司预算、证据公开范围和人工授权。
- 未申请 FEPA/oSa/UAMA：资格、费用和证据要求未完全满足或未授权。
- 未 claim Thomasnet/GlobalSpec：需要账号归属、资料公开范围和费用确认。
- 未做全量 backlink audit：无授权 GSC Links export，本任务只能核验公开可访问来源。
- 未 commit/push/deploy：本任务明确要求不执行。
