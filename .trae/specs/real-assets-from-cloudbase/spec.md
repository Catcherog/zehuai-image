# 真实素材替换 Mock 内容 Spec

## Why
泽怀影像官网当前所有视觉区块均使用渐变色块、图标等 mock 占位，缺少真实客片、团队、门店、外景地等品牌素材，无法体现工作室的实际作品水准与品牌调性。需要将 mock 内容替换为上传至腾讯云开发（CloudBase）云存储的真实素材，让官网具备真正的品牌展示与转化能力。

## What Changes
- 在 CloudBase 云存储中建立标准化的素材目录结构（styles/、hero/、team/、studio/、activities/、social/）
- 前端新增 `src/lib/assets.ts` 资源管理模块，统一管理 CloudBase 存储文件 ID 与 CDN URL 映射
- 修改以下组件，将 mock 占位替换为真实图片：
  - **HeroSection**：背景替换为真实主视觉图（支持移动端适配）
  - **StyleShowcase**：5 种风格卡片 + 四季限定卡片替换为真实客片
  - **AboutSection**：团队卡片替换为真实工作场景照片
  - **StudioInfo**：门店信息卡片 + 外景地卡片替换为真实场景图
  - **ActivitySection**：常驻活动、四季限定、节日营销卡片替换为真实活动图
  - **ContactSection**：社交矩阵卡片替换为真实二维码图片
- 真实素材通过 CloudBase CDN URL 加载，支持懒加载与响应式尺寸
- 部分风格展示图片保留本地静态资源路径
- 添加图片加载失败兜底（fallback 到原 mock 渐变），保证可用性
- 更新 `public/sitemap.xml` 中的图片信息（如需 image sitemap）

## Impact
- Affected specs: build-zehuai-website（视觉区块从 mock 升级为真实素材）
- Affected code:
  - 新增 `src/lib/assets.ts`
  - 修改 `src/components/HeroSection.tsx`
  - 修改 `src/components/StyleShowcase.tsx`
  - 修改 `src/components/AboutSection.tsx`
  - 修改 `src/components/StudioInfo.tsx`
  - 修改 `src/components/ActivitySection.tsx`
  - 修改 `src/components/ContactSection.tsx`
- 外部依赖: CloudBase 云存储（env: `zeh-d7glqc07me2155c61`）、用户需上传真实素材

---

## ADDED Requirements

### Requirement: CloudBase 云存储素材库
系统 SHALL 在 CloudBase 云存储中建立标准化的素材目录结构，存储官网所需的真实素材，并通过 CDN URL 对外提供访问。部分图片（如部分风格展示图）可保留本地静态资源。

#### Scenario: 素材目录结构标准化
- **WHEN** 用户在 CloudBase 控制台查看云存储
- **THEN** 看到以下目录结构：
  - `assets/hero/` — 首屏主视觉图（桌面端 + 移动端）
  - `assets/styles/` — 5 种风格客片 + 四季限定客片
  - `assets/team/` — 团队与工作场景照片
  - `assets/studio/` — 门店实景 + 外景地实拍
  - `assets/activities/` — 常驻活动、四季限定、节日营销图
  - `assets/social/` — 小程序码、小红书/抖音/视频号/朋友圈二维码

#### Scenario: CDN URL 可访问
- **WHEN** 前端通过 CloudBase CDN URL 请求素材
- **THEN** 返回对应图片，HTTP 状态码 200，Content-Type 为 image/*

### Requirement: 资源管理模块
系统 SHALL 在 `src/lib/assets.ts` 中统一管理所有 CloudBase 存储素材的文件 ID 与 CDN URL 映射，便于维护与替换。

#### Scenario: 集中管理素材引用
- **WHEN** 开发者需要更新某张图片
- **THEN** 只需在 `assets.ts` 中修改对应条目的 fileId/url，所有引用处自动生效

#### Scenario: 素材分类导出
- **WHEN** 组件需要获取某类素材
- **THEN** 可从 `assets.ts` 导入对应分类（如 `styleImages`、`teamImages`、`studioImages`）

### Requirement: Hero 主视觉真实化
系统 SHALL 将 HeroSection 的渐变背景替换为真实品牌主视觉图，桌面端与移动端分别使用适配尺寸的图片。

#### Scenario: 桌面端加载主视觉
- **WHEN** 用户在桌面端访问首页
- **THEN** Hero 区背景显示真实主视觉图，叠加半透明遮罩保证文字可读性

#### Scenario: 移动端加载主视觉
- **WHEN** 用户在移动端访问首页
- **THEN** Hero 区背景显示移动端适配尺寸的主视觉图，避免加载过大图片

### Requirement: 风格展示真实客片
系统 SHALL 将 StyleShowcase 中 5 种风格卡片与四季限定卡片的渐变占位替换为真实客片缩略图。

#### Scenario: 风格卡片展示客片
- **WHEN** 用户浏览风格展示区块
- **THEN** 每种风格卡片顶部显示对应风格的真实客片，图片下方保留风格名称、关键词、适合人群文案

#### Scenario: 四季限定展示客片
- **WHEN** 用户浏览四季限定卡片
- **THEN** 每张卡片显示对应季节的真实客片作为背景或配图

### Requirement: 团队介绍真实照片
系统 SHALL 将 AboutSection 中团队卡片的图标占位替换为真实工作场景照片（摄影师/化妆师/客服团队或工作花絮）。

#### Scenario: 团队卡片展示照片
- **WHEN** 用户浏览关于我们区块
- **THEN** 每张团队卡片顶部显示真实照片，下方保留职位名称与描述文案

### Requirement: 门店与外景地真实照片
系统 SHALL 将 StudioInfo 中门店信息卡片与外景地卡片替换为真实场景照片。

#### Scenario: 门店卡片展示实景
- **WHEN** 用户浏览门店与场地区块
- **THEN** 门店信息卡片显示门店实景照片，外景地卡片显示对应外景地实拍照片

### Requirement: 活动专区真实图片
系统 SHALL 将 ActivitySection 中常驻活动、四季限定、节日营销卡片的图标占位替换为真实活动图片。

#### Scenario: 活动卡片展示图片
- **WHEN** 用户浏览活动专区
- **THEN** 每张活动卡片显示对应活动的真实图片，增强视觉吸引力

### Requirement: 社交矩阵真实二维码
系统 SHALL 将 ContactSection 中社交矩阵卡片的图标占位替换为真实二维码图片（小程序码、小红书/抖音/视频号/朋友圈二维码）。

#### Scenario: 社交卡片展示二维码
- **WHEN** 用户浏览联系预约区块
- **THEN** 每张社交卡片显示真实二维码图片，用户可扫码关注

### Requirement: 图片加载兜底
系统 SHALL 在图片加载失败时回退到原 mock 渐变/图标，保证页面可用性。

#### Scenario: 图片加载失败
- **WHEN** CloudBase CDN 或本地静态图片加载失败（网络异常、文件不存在等）
- **THEN** 显示原 mock 渐变背景或图标占位，不出现破图

### Requirement: 图片懒加载与性能
系统 SHALL 对非首屏图片启用懒加载，优化页面加载性能。

#### Scenario: 非首屏图片懒加载
- **WHEN** 用户首次打开页面
- **THEN** 仅 Hero 区图片立即加载，其他区块图片在滚动进入视口时才加载

## MODIFIED Requirements

### Requirement: 视觉设计风格
在原视觉设计风格基础上，所有图片素材 SHALL 保持统一的色彩氛围（电影感、新中式），与整体深色系 + 暖金色点缀的视觉体系协调。图片上叠加半透明遮罩或渐变，保证文字可读性。
