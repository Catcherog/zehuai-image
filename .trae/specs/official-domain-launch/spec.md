# 官网域名与收录 Spec

## Why
泽怀影像官网已部署到 CloudBase CDN 域名（`zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com`），但该域名不可读、不可记忆、无法体现品牌，且搜索引擎收录效果差。需要注册专属域名、完成 ICP 备案、绑定自定义域名，并主动提交搜索引擎收录，使网站成为真正的品牌官网。

## What Changes
- 注册自定义域名（如 `zehuai-image.com` 或 `zehuai-image.cn`）
- 完成 ICP 备案（中国大陆网站必须）
- 将自定义域名绑定到 CloudBase 静态托管
- 更新代码中所有 URL 引用（sitemap.xml、robots.txt、index.html meta 标签）
- 主动提交搜索引擎收录（百度、Google、Bing）
- 添加百度统计代码，跟踪网站流量

## Impact
- Affected specs: deploy-with-backend（在其基础上升级域名和收录）
- Affected code: index.html、sitemap.xml、robots.txt、cloudbase.ts（可能需更新环境域名配置）
- 外部依赖: 域名注册商、ICP 备案流程、搜索引擎站长平台

---

## ADDED Requirements

### Requirement: 自定义域名
系统 SHALL 使用自定义域名（如 `www.zehuai-image.com`）作为官网访问地址，替代 CloudBase CDN 默认域名。

#### Scenario: 用户通过自定义域名访问
- **WHEN** 用户在浏览器输入 `www.zehuai-image.com`
- **THEN** 页面正常加载，浏览器地址栏显示自定义域名，HTTPS 证书有效

#### Scenario: 旧 CDN 域名自动跳转
- **WHEN** 用户通过旧 CDN 域名访问
- **THEN** 自动 301 跳转到自定义域名

### Requirement: ICP 备案
系统 SHALL 完成中国大陆 ICP 备案，确保网站合法合规运营。

#### Scenario: 备案完成
- **WHEN** 网站通过 ICP 备案审核
- **THEN** 网站底部展示备案号，可正常通过自定义域名访问

### Requirement: 搜索引擎收录
系统 SHALL 主动向主流搜索引擎提交收录申请，确保官网可被搜索到。

#### Scenario: 百度收录
- **WHEN** 用户在百度搜索"泽怀影像"或"杭州新中式写真"
- **THEN** 官网出现在搜索结果中，展示标题、描述和站点链接

#### Scenario: Google 收录
- **WHEN** 用户在 Google 搜索"泽怀影像"
- **THEN** 官网出现在搜索结果中

### Requirement: URL 引用更新
系统 SHALL 将代码中所有 CloudBase CDN 域名引用替换为自定义域名，包括 sitemap.xml、robots.txt、Open Graph 标签、JSON-LD 结构化数据。

#### Scenario: sitemap 使用自定义域名
- **WHEN** 搜索引擎爬虫访问 /sitemap.xml
- **THEN** sitemap 中的 URL 使用自定义域名

### Requirement: 网站流量统计
系统 SHALL 集成百度统计，跟踪网站访问数据，为运营决策提供依据。

#### Scenario: 访问数据可查
- **WHEN** 用户访问官网任意页面
- **THEN** 百度统计后台记录访问数据（PV、UV、来源、地域等）

## MODIFIED Requirements

### Requirement: SEO 优化
在原 SEO 优化基础上，将所有 URL 引用从 CloudBase CDN 域名更新为自定义域名，并增加百度统计代码。
