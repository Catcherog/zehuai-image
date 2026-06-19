# 方案：修复多个页面左侧留白不足的问题

## Summary

首页有 6 个 section（品牌故事 / 关于我们 / 活动专区 / 服务流程 / 门店与场地 / 联系预约）的内容紧贴视口左边缘，原因是 `.section-padding` 这个工具类只设置了垂直内边距（`py-*`），没有设置水平内边距（`px-*`），而这些 section 内部又包裹了一层不带任何 `container`/`px-*` 的 `<div ref={ref}>`，导致页面内容直接顶到屏幕左边。

只需 1 行 CSS 修改即可统一修复所有 6 个 section。

## Current State Analysis

### 根本原因

`src/index.css` 第 33-35 行：

```css
.section-padding {
  @apply py-20 md:py-28 lg:py-36;
}
```

只设置了垂直方向的 `py-*`，缺少水平方向的 `px-*`。

### 各 section 横向内边距现状

| 组件                  | 文件                                         | 是否有水平内边距                               | 状态                          |
| ------------------- | ------------------------------------------ | -------------------------------------- | --------------------------- |
| HeroSection         | `src/components/HeroSection.tsx:46`        | `container mx-auto px-4 lg:px-8`       | 正常                          |
| Navbar              | `src/components/Navbar.tsx:56`             | `container mx-auto px-4 py-4 lg:px-8`  | 正常                          |
| **BrandStory**      | `src/components/BrandStory.tsx:28-29`      | ❌ 无                                    | **异常**（截图所示）                |
| PricingSection      | `src/components/PricingSection.tsx:60-61`  | `container mx-auto px-4`               | 正常                          |
| StyleShowcase       | `src/components/StyleShowcase.tsx:25-26`   | `container mx-auto px-4`               | 正常                          |
| **ServiceFlow**     | `src/components/ServiceFlow.tsx:31-32`     | ❌ 无                                    | **异常**                      |
| **StudioInfo**      | `src/components/StudioInfo.tsx:21-22`      | ❌ 无                                    | **异常**                      |
| FAQSection          | `src/components/FAQSection.tsx:73-74`      | `container mx-auto px-4`               | 正常                          |
| **AboutSection**    | `src/components/AboutSection.tsx:28-29`    | ❌ 无                                    | **异常**                      |
| **ActivitySection** | `src/components/ActivitySection.tsx:35-36` | ❌ 无                                    | **异常**                      |
| **ContactSection**  | `src/components/ContactSection.tsx:21-22`  | ❌ 无（但内层表单用 `max-w-lg mx-auto` 居中自救）    | **异常**（标题、社交矩阵、Hashtag 仍贴边） |
| Footer              | `src/components/Footer.tsx:11`             | `container mx-auto px-4 py-12 lg:px-8` | 正常                          |

## Proposed Changes

### 唯一改动：`src/index.css`

修改 `.section-padding` 工具类，补充水平内边距，与 `HeroSection` / `Navbar` / `Footer` 现有 `px-4 lg:px-8` 保持一致，并补充 `sm:px-6` 过渡档：

```diff
 @layer components {
   .section-padding {
-    @apply py-20 md:py-28 lg:py-36;
+    @apply py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8;
   }
```

**为什么是这一处而非逐个修改组件：**

* 1 行 CSS 覆盖 6 个异常 section，符合 DRY 原则

* 与项目内已有 `px-4 lg:px-8` 节奏保持一致（Navbar/Hero/Footer 都是这套）

* 不改动任何组件结构，无回归风险

* 移动端/桌面端断点（`sm`/`lg`）对齐 Tailwind 默认 `container` 的语义

### 不需要改动

* 6 个异常组件的 JSX 结构（`<section>` / 内部 `<div ref={ref}>`）保持原样

* `tailwind.config.js` 中 `container.padding` 已配置 `DEFAULT: "1rem"`、`sm: "2rem"`、`lg: "4rem"`，本方案选择的 `px-4 sm:px-6 lg:px-8` 略小于 container 配置，但与现有页面其它位置完全统一，保持视觉一致性

* 表格单元格内的 `px-6 py-4`、卡片内 `p-5/p-6/p-8` 都不受影响，它们是元素自身 padding，不是外层

## Assumptions & Decisions

1. **断点选择** **`px-4 sm:px-6 lg:px-8`**：

   * 与 `Navbar` / `Hero` / `Footer` 现用的 `px-4 lg:px-8` 一致

   * 在 `sm`(≥640px) 增加一档 `px-6`（1.5rem）让平板/小桌面过渡更平滑

   * 大屏（≥1024px）固定 `px-8`（2rem）即 `lg:px-8`，不继续放大避免文本行过长

2. **不引入** **`container`** **类**：

   * 6 个 section 的内部布局既有左对齐（标题、表格），也有居中（`text-center`），并不都适合用 `container max-w-*` 限宽

   * 仅补 `px-*` 是最小动作，符合「不引入新概念」原则

3. **不动** **`ContactSection`** **的内部自救结构**：内层 `max-w-lg mx-auto` 表单在加外层 `px-*` 后仍能正常居中，不会产生新问题

## Verification

执行方案后，建议用以下步骤人工核对（无需新增测试用例，UI 调整靠目测即可）：

1. `npm run dev` 启动开发服务器
2. 访问首页，滚动到「品牌故事 / 服务体系 / 风格与作品 / 服务流程 / 门店与场地 / 常见问题 / 关于我们 / 活动专区 / 联系预约」每个 section
3. 检查点：

   * 标题、段落文字、表格、卡片左侧均与浏览器左边保持 ≥ 16px 间距（移动端 1rem）

   * 桌面端（≥1024px）左右对称留白约 32px

   * Hero / Navbar / Footer 的视觉位置不发生变化（共用相同 px 值）

   * 浏览器窗口从 320px → 1920px 拉伸，无内容溢出或意外贴边
4. `npm run build` 确认无构建错误

