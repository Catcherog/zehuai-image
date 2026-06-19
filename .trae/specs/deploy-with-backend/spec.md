# 公网部署与后端数据库 Spec

## Why
泽怀影像工作室官网目前仅能在本地开发环境访问，无法被搜索引擎收录，也缺少后端数据管理能力。需要将前端静态站点部署到公网使其可被搜索到，并接入后端数据库以支撑客户预约、内容管理等动态业务需求。

## What Changes
- 使用 Vercel 托管静态站点，实现公网可访问
- 使用 Vercel Git 集成实现 CI/CD 自动构建与部署
- 配置 SEO 优化（meta 标签、Open Graph、sitemap、robots.txt），使搜索引擎可收录
- 接入 CloudBase 云数据库（NoSQL），存储业务数据
- 前端通过 CloudBase 前端 SDK 直连数据库（匿名认证 + 集合权限）
- 前端新增预约提交等交互功能，对接 CloudBase 数据服务

## Impact
- Affected specs: build-zehuai-website（在其基础上扩展后端能力）
- Affected code: 新增 `.github/workflows/deploy.yml`、新增 CloudBase 配置、修改前端部分组件以对接 CloudBase、新增 SEO 配置
- 新增依赖: @cloudbase/js-sdk（前端 SDK）

---

## ADDED Requirements

### Requirement: 公网部署
系统 SHALL 将构建产物部署至 Vercel，使网站可通过公网 URL 访问。

#### Scenario: 用户通过浏览器访问官网
- **WHEN** 用户在浏览器输入官网 URL
- **THEN** 页面正常加载，所有区块和交互功能可用

#### Scenario: 搜索引擎爬虫抓取
- **WHEN** 搜索引擎爬虫访问官网 URL
- **THEN** 返回完整的 HTML 内容，包含正确的 meta 标签和结构化数据

### Requirement: SEO 优化
系统 SHALL 为网站配置完整的 SEO 元素，包括页面 meta 标签、Open Graph 标签、结构化数据、sitemap.xml 和 robots.txt，使搜索引擎能正确收录和展示网站。

#### Scenario: 搜索引擎收录
- **WHEN** 搜索引擎爬虫抓取网站
- **THEN** 页面包含 title、description、keywords meta 标签，Open Graph 标签，以及 JSON-LD 结构化数据

#### Scenario: Sitemap 可访问
- **WHEN** 访问 /sitemap.xml
- **THEN** 返回包含所有页面 URL 的标准 sitemap 文件

### Requirement: 云数据库
系统 SHALL 使用 CloudBase 云数据库（NoSQL）存储业务数据，包含以下集合：
- `bookings`：客户预约记录
- `contacts`：客户咨询记录
- `activities`：活动信息（可动态更新）

#### Scenario: 数据库初始化
- **WHEN** 首次部署后端
- **THEN** 自动创建所需集合及基础数据

#### Scenario: 数据写入
- **WHEN** 前端提交预约或咨询表单
- **THEN** 数据通过 CloudBase 前端 SDK 写入对应集合，返回成功状态

### Requirement: CloudBase 数据写入
系统 SHALL 使用 CloudBase 前端 SDK 直连云数据库，实现预约和咨询数据的持久化。

#### Scenario: 提交预约
- **WHEN** 用户填写预约表单并提交
- **THEN** 通过 `@cloudbase/js-sdk` 直连 CloudBase 云数据库，将数据写入 bookings 集合

#### Scenario: 提交咨询
- **WHEN** 用户填写咨询表单并提交
- **THEN** 通过 CloudBase 前端 SDK 将数据写入 contacts 集合

### Requirement: 预约功能
系统 SHALL 在联系预约区块提供在线预约表单，包含姓名、手机号、拍摄类型、期望日期等字段，提交后数据存入数据库。

#### Scenario: 用户提交预约
- **WHEN** 用户填写完整预约信息并点击提交
- **THEN** 表单数据通过 CloudBase 前端 SDK 存入数据库，页面显示提交成功提示

#### Scenario: 表单校验
- **WHEN** 用户提交不完整的预约信息
- **THEN** 表单高亮未填写的必填项，提示用户补充

### Requirement: 咨询功能
系统 SHALL 在页面提供在线咨询入口，用户可提交姓名、手机号和咨询内容，数据存入数据库。

#### Scenario: 用户提交咨询
- **WHEN** 用户填写咨询信息并提交
- **THEN** 数据存入 contacts 集合，页面显示提交成功提示
