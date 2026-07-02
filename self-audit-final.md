# Syvidea网站文案自查报告（执行前最终检查）

Generated: 2026-07-01

---

## 🎯 执行目标

基于元宝评估的融合方案，将网站文案统一为三层结构：

| 层次 | 原则 | 来源 |
|------|------|------|
| **Layer 1: Decision Context** | 用户决策场景 + 客观能力陈述 | 当前官网方向（元宝推荐） |
| **Layer 2: System Logic** | 技术映射与架构解释 | ChatGPT（技术准确性） |
| **Layer 3: Trust Layer** | 人工审核与服务承诺 | ChatGPT（信任信号） |

---

## 🔍 自查清单

### 1. 首页（/）

**当前状态：**
- Hero标题："Most mini PC brands sell specs. We help you choose one for real AI workloads."
- Hero副标题："Syvidea is a sourcing and advisory service for local AI workstations..."
- 缺少"70B-class"、"cloud GPU bills"等关键能力陈述

**问题：**
- ❌ Hero标题不是场景利益型，而是对比型
- ❌ 缺少核心能力陈述（70B模型、128GB统一内存）
- ❌ 副标题太长，信息密度低

**需要修改：**
- ✅ Hero标题改为："Run 70B-class AI models locally — without recurring cloud GPU bills."
- ✅ Hero副标题改为："Syvidea provides a workload-driven evaluation layer for local AI infrastructure, mapping inference requirements to optimized AMD Strix Halo configurations across BOSGAME, PELAND, and BITPC systems."
- ✅ 添加"What this means for you"信任信号

---

### 2. Start Here（/start-here）

**当前状态：**
- Hero标题："Start here — choose how you want to run local AI"
- 三个入口卡片使用"I want to..."风格：
  - "I want to run Local LLMs or RAG systems"
  - "I want to build AI agents or development workflows"
  - "I want to request a workstation quote"

**问题：**
- ❌ "I want to..."风格不符合ChatGPT的禁止规则
- ❌ 缺少信任信号（manually reviewed, 24–48h response）
- ❌ 缺少"What this means for you"

**需要修改：**
- ✅ Hero标题改为："Start here — workload-based AI system selection"
- ✅ 卡片标题改为："Local LLM / RAG workflows"、"AI agent and development workflows"、"Configuration quote request"
- ✅ 添加信任信号和"What this means for you"

---

### 3. Workstations（/workstations）

**当前状态：**
- Hero标题："Curated partner workstation options"
- 三品牌描述使用"Best for"：
  - "Best for developers"
  - "Best for sustained workloads"
  - "Best for compact deployment"

**问题：**
- ❌ "Best for"属于hype形容词，应改为"Optimized for"
- ❌ 缺少信任信号

**需要修改：**
- ✅ 品牌描述改为：
  - BOSGAME: "Optimized for general AI workloads"
  - PELAND: "Optimized for memory-intensive inference workloads"
  - BITPC: "Optimized for compact deployment environments"
- ✅ 添加"We evaluate" advisory语言

---

### 4. Request Quote（/request-quote）

**当前状态：**
- Hero标题："Request a configuration quote"
- 包含信任信号："This is not an instant checkout system. Every configuration is reviewed manually."
- 包含三步流程说明

**问题：**
- ✅ 基本符合要求
- ⚠️ 需要确认是否包含"24–48h response"

**需要修改：**
- ✅ 添加"24–48h response"明确承诺

---

### 5. Architecture（/architecture/strix-halo）

**当前状态：**
- Hero标题："AMD Strix Halo architecture"
- 包含"What this means for you"："You can run larger models locally than what's typically possible..."
- 包含架构价值说明

**问题：**
- ✅ 基本符合要求
- ⚠️ 需要添加"designed for"、"optimized for"等技术表述

**需要修改：**
- ✅ 添加技术映射表述

---

### 6. site.ts（全局配置）

**当前状态：**
- shortDescription: "Your local AI workstation sourcing partner. We help you choose, compare, and source AMD Strix Halo / AI Max+ 395 workstations from trusted hardware partners."

**问题：**
- ✅ 基本符合要求

**需要修改：**
- ✅ 保持不变或微调

---

## 📊 问题汇总

| 问题类型 | 数量 | 严重程度 |
|---------|------|---------|
| Hero标题不符合场景利益型 | 2 | 🔴 高 |
| 使用"Best for"等hype形容词 | 3 | 🔴 高 |
| 使用"I want to..."风格 | 3 | 🟡 中 |
| 缺少信任信号 | 3 | 🟡 中 |
| 缺少"What this means for you" | 2 | 🟡 中 |

---

## 🚀 执行计划

### Phase 1: 修改首页（/）
1. 修改Hero标题为场景利益型
2. 修改Hero副标题为技术准确表述
3. 添加信任信号和"What this means for you"

### Phase 2: 修改Start Here（/start-here）
1. 修改Hero标题
2. 修改卡片标题（移除"I want to..."）
3. 添加信任信号

### Phase 3: 修改Workstations（/workstations）
1. 将"Best for"改为"Optimized for"
2. 添加"We evaluate" advisory语言

### Phase 4: 修改Request Quote（/request-quote）
1. 添加"24–48h response"承诺

### Phase 5: 修改Architecture（/architecture/strix-halo）
1. 添加技术映射表述

### Phase 6: 构建测试
1. npm run build
2. npx astro preview

---

## ✅ 验证清单

修改完成后需验证：

| 页面 | 验证项 |
|------|-------|
| 首页 | Hero包含"70B-class"、"cloud GPU bills" |
| 首页 | 包含信任信号（manually reviewed, 24–48h response） |
| Start Here | 移除"I want to..."风格 |
| Workstations | 使用"Optimized for"而非"Best for" |
| Request Quote | 包含"24–48h response" |
| Architecture | 包含"What this means for you" |
| 全站 | 无否定式表述（Not a, does not） |
| 全站 | 无hype形容词（best, fastest, revolutionary） |

---

## 📋 执行前确认

✅ 方案已确认：采纳元宝的融合方案
✅ 自查已完成：6个页面，13个问题
✅ 执行计划已制定：6个阶段
✅ 验证清单已准备：8项验证

**可以进入执行阶段。**
