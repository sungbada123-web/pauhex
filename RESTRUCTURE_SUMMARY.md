# ✅ AURAON 网站结构重构：4层架构 (4-Layer Structure)

根据 Loewenstein Medical 的官网逻辑，我们将 Auraon 首页重构为精密的 **4 层结构**，摒弃一切多余装饰，追求极致的工业美学。

---

## 🏗️ 结构概览 (Overview)

整个首页现在仅由以下四个核心板块组成，逻辑极其清晰：

| 层级 (Layer) | 名称 (Section) | 功能 (Function) | 视觉特征 (Visual Style) |
| :--- | :--- | :--- | :--- |
| **Layer 1** | **Brand Hero** | 品牌愿景与核心 Slogan | 全屏大图，极简大标题，全大写导航栏 |
| **Layer 2** | **Product Matrix** | 核心业务领域 (四大支柱) | 精密网格，直线分割，直角 Tab，深蓝标签 |
| **Layer 3** | **Philosophy** | 品牌理念与质量承诺 | 强排版对比，"Made in Germany" 徽章，几何线条 |
| **Layer 4** | **Footer** | 底部导航与法律信息 | 干净的浅灰背景，标准网格布局 |

---

## 🎨 视觉规范 (Loewenstein Style)

为了实现 "完全一样" 的德系精密感，我们严格执行了以下设计规范：

### 1. 彻底去圆角化 (Zero Rounded Corners)
*   ❌ **禁止**：`rounded-lg`, `rounded-xl`, `rounded-full`
*   ✅ **强制**：所有的按钮、卡片、输入框、图片容器全部使用直角 (0px radius)。

### 2. 工业级排版 (Industrial Typography)
*   **导航栏**：全大写 (UPPERCASE) + 加宽字间距 (`tracking-wider`)。
*   **标签**：全大写 + 极小字号 + 深蓝底色 (如 `MEDIZINPRODUKT`)。
*   **标题**：使用 `font-light` (细体) 与 `font-bold` (粗体) 的强烈对比。

### 3. 精密网格 (Precision Grid)
*   放弃阴影 (`box-shadow`)，改用 **极细分割线 (`border-px`)**。
*   利用 `gap-px` 和背景色差来创建像手术刀切开一样的分隔线。

### 4. 宽屏布局 (Wide Layout)
*   主容器宽度扩大至 **1600px**，在大屏幕上展现出宏大的呼吸感。

---

## 🚀 状态

*   **首页 (Home)**: ✅ 已重构为 4 层结构。
*   **产品页 (Products)**: ✅ 已匹配 Loewenstein 风格。
*   **组件**:
    *   `Navigation`: ✅ 修复间距，改为全大写/直角。
    *   `ProductMatrix`: ✅ 重写为精密网格/直角样式。
    *   `Footer`: ✅ 匹配整体风格。

网站现已呈现出一种冷峻、专业、可信赖的德国医疗科技形象。
