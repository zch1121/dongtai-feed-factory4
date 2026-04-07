# 东台市富民饲料厂（东台市富民科技有限公司）企业官网

## 项目概述

本项目是一个完整的企业官网，采用**纯HTML + CSS + JavaScript**技术栈开发，参考新希望六和官网的设计风格，提供现代化的响应式响应式布局。

## 核心信息

- **公司名称**：东台市富民饲料厂（东台市富民科技有限公司）
- **品牌口号**：科技赋能养殖，富民助力三农
- **主营业务**：
  - 畜禽配合饲料、复合预混合饲料（畜禽水产）
  - 鸡笼加工、养殖设备定制与安装服务
  - 粮食、植物油料收购与销售
  - 养殖技术咨询与支持服务
- **联系方式**：
  - 地址：江苏省东台市许河镇新丰经营开发区
  - 电话：13901415586
  - 邮箱：dtfmsl@126.com

## 项目结构

```
富民饲料厂/
├── index.html              # 首页
├── about.html              # 关于我们
├── products.html           # 产品中心
├── services.html           # 技术服务
├── news.html               # 新闻动态
├── contact.html            # 联系我们
├── product-detail.html     # 产品详情页
├── news-detail.html        # 新闻详情页
├── assets/
│   ├── styles.css          # 样式表（1110行）
│   ├── app.js              # 应用逻辑（556行）
│   └── data.js             # 数据配置（373行）
└── README.md               # 项目文档
```

## 页面说明

### 首页 (index.html)
- 轮播banner展示
- 核心业务介绍（4个业务板块）
- 产品展示（精选产品卡片）
- 企业优势展示
- 统计数据展示
- 新闻动态预览

### 关于我们 (about.html)
- 企业简介
- 公司概况详细信息
- 业务范围说明
- 发展历程时间轴
- 企业资质列表
- 企业文化展示
- 团队介绍

### 产品中心 (products.html)
- 产品分类筛选
- 产品卡片列表（网格布局）
- 产品详情跳转

### 技术服务 (services.html)
- 服务矩阵展示（4大服务方向）
- 服务案例展示

### 新闻动态 (news.html)
- 新闻类型筛选
- 新闻列表展示
- 新闻详情页跳转

### 联系我们 (contact.html)
- 联系信息卡片
- 地图可视化定位
- 在线留言表单
- 高德地图和百度地图链接

## 技术亮点

### 响应式设计
- 采用CSS Grid和Flex布局
- Mobile-first设计理念
- 媒体查询优化不同屏幕尺寸
- 流式网格布局（grid-4, grid-3, grid-2）

### 颜色体系
- 主色绿色 (`--green: #2e7d32`)
- 深绿 (`--green-deep: #16481d`)
- 浅绿 (`--green-soft: #edf6ee`)
- 金色 (`--gold: #f57c00`)
- 土色 (`--earth: #6b5a3c`)

### 交互效果
- 导航栏吸顶效果
- 按钮悬停动画
- 链接下划线动画
- 轮播自动播放
- 平滑滚动

### 数据管理
- 集中式数据配置（data.js）
- 支持动态内容渲染
- 易于维护和扩展

## 开发特性

### 代码组织
- **语义化HTML**：使用适当的HTML5标签
- **模块化CSS**：按功能分类样式
- **面向对象JS**：IIFE包装，避免全局污染
- **清晰的缩进**：2空格缩进规范

### SEO优化
- 每页面有独特的title和description
- 语义化标签（header, main, footer, section, article）
- 结构化数据支持
- 完整的meta标签

### 可访问性
- ARIA标签支持
- 键盘导航支持
- 语义色彩对比度
- 表单标签关联

## 使用指南

### 本地预览
1. **简单预览**：直接在浏览器中打开 `index.html`
2. **启用JavaScript**：使用HTTP服务器浏览（避免跨域限制）
   ```bash
   # 使用Node.js http-server
   npx -y http-server . -p 8000
   
   # 或使用Python
   python -m http.server 8000
   ```
3. 访问 `http://localhost:8000` 进行测试

### GitHub部署
1. 创建GitHub仓库
2. 上传所有文件
3. 在GitHub Settings中启用Pages
4. 选择主分支作为源
5. 网站将在 `https://yourusername.github.io/repo-name` 自动发布

### 内容更新
- **修改公司信息**：编辑 `assets/data.js`
- **更新页面样式**：编辑 `assets/styles.css`
- **调整功能逻辑**：编辑 `assets/app.js`
- **修改页面结构**：编辑各HTML文件

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动浏览器 (iOS Safari, Chrome Mobile)

## 文件优化

### JavaScript 检验
✓ data.js：语法检查通过
✓ app.js：语法检查通过

### HTML 文件
✓ 所有HTML文件都有正确的标记结构
✓ 统一的缩进格式（2空格）
✓ 完整的元数据标签

### CSS 样式
✓ 1110行优化过的CSS代码
✓ CSS变量定义（--color, --radius, 等）
✓ 响应式媒体查询

## 最近修复

1. **修复data.js语法错误**：businessCards数组缺少逗号已修复
2. **代码格式统一**：所有HTML文件统一使用2空格缩进
3. **优化head标签**：添加完整的SEO元标签
4. **改进页面布局**：确保所有section正确对齐

## 未来扩展

- [ ] 添加多语言支持
- [ ] 集成CMS功能
- [ ] 添加搜索功能
- [ ] 实现用户评论系统
- [ ] 集成分析工具（Google Analytics）
- [ ] 添加CDN支持
- [ ] 实现PWA功能

## 许可证

© 2026 东台市富民饲料厂（东台市富民科技有限公司）。保留所有权利。

## 技术支持

如有任何问题或建议，欢迎联系：
- 电话：13901415586
- 邮箱：dtfmsl@126.com
