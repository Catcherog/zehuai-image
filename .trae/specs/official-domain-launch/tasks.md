# Tasks

- [ ] Task 1: 域名注册 — 在腾讯云注册自定义域名
  - [ ] SubTask 1.1: 确定域名方案（推荐 `zehuai-image.com` 或 `zehuai-image.cn`，备选 `zehuaiimage.com`）
  - [ ] SubTask 1.2: 登录腾讯云控制台 → 域名注册，搜索并购买域名
  - [ ] SubTask 1.3: 完成域名实名认证（上传身份证/营业执照，通常 1-3 个工作日）

- [ ] Task 2: ICP 备案 — 完成中国大陆网站备案（法定要求）
  - [ ] SubTask 2.1: 登录腾讯云控制台 → ICP 备案，发起备案申请
  - [ ] SubTask 2.2: 准备备案材料：营业执照/身份证、域名证书、网站负责人信息、核验单
  - [ ] SubTask 2.3: 提交备案申请，等待管局审核（通常 7-20 个工作日）
  - [ ] SubTask 2.4: 备案通过后，在网站底部添加备案号及工信部链接

- [ ] Task 3: 自定义域名绑定 CloudBase — 将域名指向 CloudBase 静态托管
  - [ ] SubTask 3.1: 在 CloudBase 控制台 → 静态网站托管 → 域名管理，添加自定义域名
  - [ ] SubTask 3.2: 按提示在域名 DNS 解析中添加 CNAME 记录，指向 CloudBase 提供的目标地址
  - [ ] SubTask 3.3: 等待 SSL 证书自动签发和 DNS 生效（通常几分钟到几小时）
  - [ ] SubTask 3.4: 配置旧 CDN 域名 301 跳转到自定义域名（如 CloudBase 支持）

- [ ] Task 4: 更新代码中的 URL 引用 — 将所有 CloudBase CDN 域名替换为自定义域名
  - [ ] SubTask 4.1: 更新 index.html 中的 og:url、JSON-LD url、canonical 标签
  - [ ] SubTask 4.2: 更新 public/sitemap.xml 中的 URL
  - [ ] SubTask 4.3: 更新 public/robots.txt 中的 Sitemap URL
  - [ ] SubTask 4.4: 重新构建并部署到 CloudBase

- [ ] Task 5: 搜索引擎收录 — 主动提交网站到主流搜索引擎
  - [ ] SubTask 5.1: 注册百度搜索资源平台（ziyuan.baidu.com），添加网站并验证所有权
  - [ ] SubTask 5.2: 在百度搜索资源平台提交 sitemap.xml URL
  - [ ] SubTask 5.3: 注册 Google Search Console，添加网站并验证所有权
  - [ ] SubTask 5.4: 在 Google Search Console 提交 sitemap.xml URL
  - [ ] SubTask 5.5: 注册 Bing Webmaster Tools，提交 sitemap

- [x] Task 6: 百度统计集成 — 添加流量统计代码
  - [x] SubTask 6.1: 注册百度统计（tongji.baidu.com），添加网站获取统计代码（占位已添加，需用户注册后填入ID）
  - [x] SubTask 6.2: 在 index.html 的 <head> 中添加百度统计 JS 代码（占位已添加）
  - [ ] SubTask 6.3: 重新构建并部署

- [x] Task 7: 备案号展示 — 在网站底部添加 ICP 备案号
  - [x] SubTask 7.1: 在 Footer 组件中添加备案号及工信部链接（占位已添加，需用户备案后取消注释）
  - [ ] SubTask 7.2: 重新构建并部署

# Task Dependencies
- [Task 1] 无依赖，最先执行
- [Task 2] 依赖 [Task 1]（需要已注册的域名）
- [Task 3] 依赖 [Task 2]（ICP 备案通过后才能绑定自定义域名到大陆节点）
- [Task 4] 依赖 [Task 3]（域名绑定生效后更新代码）
- [Task 5] 依赖 [Task 4]（URL 更新后提交搜索引擎）
- [Task 6] 可与 [Task 5] 并行
- [Task 7] 依赖 [Task 2]（备案通过后展示备案号）

# 重要说明
Task 1-3 为外部操作（域名注册、备案、DNS 配置），需用户在腾讯云控制台手动完成，AI 可提供操作指引但无法代替执行。
Task 4-7 为代码修改，AI 可直接执行。
ICP 备案是整个流程的瓶颈，通常需要 7-20 个工作日，建议尽早启动。
