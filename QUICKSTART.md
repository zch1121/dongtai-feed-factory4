# 快速开始指南

## 项目已完成的内容

✓ **语法修复**：data.js 中 businessCards 数组缺少逗号已修复
✓ **代码格式**：所有 HTML 文件统一 2 空格缩进
✓ **SEO 优化**：添加完整的 meta 标签和描述
✓ **响应式设计**：CSS 完全支持移动端和桌面端

## 立即开始

### 1. 本地测试（3种方式）

#### 方式 A：直接打开（最简单）
```bash
# Windows - 直接双击打开
index.html

# 或在命令行中
start index.html
```
**注意**：由于跨域限制，JavaScript可能不能正常加载本地文件。

#### 方式 B：使用 Node.js HTTP Server（推荐）
```bash
# 进入项目目录
cd c:\Users\YOYANG\Desktop\工作\富民饲料厂

# 启动服务器
npx -y http-server . -p 8000

# 在浏览器中打开
http://localhost:8000
```

#### 方式 C：使用 Python HTTP Server
```bash
# 进入项目目录
cd c:\Users\YOYANG\Desktop\工作\富民饲料厂

# 启动服务器（Python 3）
python -m http.server 8000

# 在浏览器中打开
http://localhost:8000
```

### 2. GitHub 部署

#### 步骤 1：创建 GitHub 仓库
```bash
git init
git add .
git commit -m "Initial commit: Fumin Feed Factory website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fumin-website.git
git push -u origin main
```

#### 步骤 2：启用 GitHub Pages
1. 在 GitHub 上打开仓库
2. 进入 **Settings** > **Pages**
3. 在 **Build and deployment** 下：
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `main` 和 `/root`
4. 点击 **Save**
5. 等待几分钟，网站将发布在 `https://your-username.github.io/fumin-website`

### 3. 内容更新

#### 修改公司信息
编辑 `assets/data.js` 文件中的:
```javascript
company: {
  name: "东台市富民饲料厂（东台市富民科技有限公司）",
  shortName: "东台富民",
  slogan: "科技赋能养殖，富民助力三农",
  address: "江苏省东台市许河镇新丰经营开发区",
  phone: "13901415586",
  email: "dtfmsl@126.com",
}
```

#### 修改产品信息
在 `assets/data.js` 中编辑 `products` 数组：
```javascript
{
  id: "broiler-feed",
  category: "畜禽饲料",
  name: "富民肉禽高效配合饲料",
  summary: "...",
  image: "feed-red",
  // 更新内容...
}
```

#### 更新新闻
在 `assets/data.js` 中编辑 `news` 数组，添加或修改新闻内容。

#### 修改页面样式
编辑 `assets/styles.css` 文件：
- 颜色变量：`:root { --green: ... }`
- 组件样式：`.btn`, `.section`, 等
- 响应式媒体查询：`@media (max-width: ...)`

## 页面功能说明

### 导航栏
- 固定在顶部，支持吸顶效果
- 响应式菜单（移动端隐藏菜单按钮）
- 当前页面高亮显示

### 轮播 Banner
- 自动循环播放（5秒间隔）
- 支持点击小圆点手动切换
- 响应式图片

### 产品/新闻筛选
- 点击按钮快速筛选内容
- 动态高亮当前选中项
- 支持全部查看

### 在线留言表单
- 表单验证
- 成功/失败提示
- 支持移动端输入

### 地图定位
- 可视化地图标记
- 快速链接到高德地图和百度地图
- 完整的地址信息

## 测试清单

- [ ] 首页轮播正常工作
- [ ] 导航链接可以正确跳转
- [ ] 产品筛选功能正常
- [ ] 新闻筛选功能正常
- [ ] 联系表单可以提交
- [ ] 移动端显示正常
- [ ] 所有链接都有效
- [ ] 字体和颜色显示正确

## 常见问题

### Q: 为什么 JavaScript 不工作？
**A**: 确保使用 HTTP 服务器而不是直接打开文件。跨域限制会阻止 JavaScript 加载。

### Q: 如何修改公司联系方式？
**A**: 编辑 `assets/data.js` 中的 `company` 对象，然后保存。更改会自动显示在所有页面上。

### Q: 响应式设计是怎样的？
**A**: CSS 使用媒体查询自动适配：
- 桌面版本：> 1200px
- 平板版本：768px - 1200px
- 手机版本：< 768px

### Q: 如何添加新产品？
**A**: 在 `assets/data.js` 的 `products` 数组中添加新对象，格式参考现有产品。

### Q: 如何更改颜色主题？
**A**: 编辑 `assets/styles.css` 中 `:root {}` 块中的 CSS 变量。

## 支持的浏览器

- ✓ Chrome/Edge (推荐)
- ✓ Firefox
- ✓ Safari
- ✓ Mobile browsers

## 文档结构

```
项目文件：
- index.html              → 首页
- about.html              → 关于我们
- products.html           → 产品中心
- product-detail.html     → 产品详情
- services.html           → 技术服务
- news.html               → 新闻动态
- news-detail.html        → 新闻详情
- contact.html            → 联系我们
- assets/
  - styles.css            → 样式表 (1110 行)
  - app.js                → JavaScript 应用 (556 行)
  - data.js               → 数据配置 (373 行)
- README.md               → 项目文档
- QUICKSTART.md           → 快速开始指南 (本文件)
```

## 下一步建议

1. **本地测试**：使用 HTTP 服务器启动项目
2. **内容定制**：更新 `data.js` 中的公司信息
3. **样式调整**：根据需要修改 `styles.css` 中的颜色和字体
4. **功能完善**：根据需求添加新页面或功能
5. **GitHub 部署**：发布到 GitHub Pages 进行在线预览

## 技术支持

如有问题，请联系：
- 电话：13901415586
- 邮箱：dtfmsl@126.com

---

**最后更新**：2026 年 4 月 7 日
**项目版本**：1.0 (完美版)
