# 产品与新闻图片配置指南

## 📋 概述

已为您的网站创建了一个完整的**图片配置系统**，方便随时更换产品图片和新闻图片，**无需修改其他代码**。

## 📁 文件结构

```
富民饲料厂/
├── index.html                    # 已更新加载images.js
├── products.html                 # 已更新加载images.js
├── news.html                     # 已更新加载images.js
├── product-detail.html           # 已更新加载images.js
├── news-detail.html              # 已更新加载images.js
├── contact.html                  # 已更新加载images.js
├── about.html                    # 已更新加载images.js
├── services.html                 # 已更新加载images.js
└── assets/
    ├── images.js                 # ✨ 新添加：图片配置文件
    ├── images/                   # 存放您的图片文件夹
    │   ├── products/
    │   │   ├── broiler-feed.jpg
    │   │   ├── layer-feed.jpg
    │   │   ├── aqua-feed.jpg
    │   │   ├── premix-basic.jpg
    │   │   ├── premix-functional.jpg
    │   │   ├── cage-system.jpg
    │   │   ├── ventilation-system.jpg
    │   │   └── grain-storage.jpg
    │   └── news/
    │       ├── service-upgrade.jpg
    │       ├── equipment-news.jpg
    │       ├── market-analysis.jpg
    │       └── industry-trend.jpg
    ├── data.js                   # 已更新支持images.js
    ├── app.js                    # 已更新渲染逻辑
    └── styles.css
```

## 🎨 产品图片配置

### 支持的产品图片类型

```
产品图片 ID          说明                图片尺寸建议
───────────────────────────────────────────────
'feed-red'          肉禽饲料              800×600px
'feed-gold'         蛋禽饲料              800×600px
'feed-blue'         水产饲料              800×600px
'premix-green'      预混料-基础型          800×600px
'premix-orange'     预混料-功能型          800×600px
'equipment-gray'    鸡笼系统              800×600px
'equipment-green'   通风饮水系统          800×600px
'grain-brown'       原料仓储方案          800×600px
```

### 更新产品图片的3种方式

#### 方式1️⃣：直接修改 `assets/images.js`（推荐）

打开 `assets/images.js`，修改 `products` 部分：

```javascript
window.imageConfig = {
  products: {
    'feed-red': 'assets/images/products/broiler-feed.jpg',      // ← 改这里
    'feed-gold': 'assets/images/products/layer-feed.jpg',
    'feed-blue': 'assets/images/products/aqua-feed.jpg',
    // ...
  }
};
```

#### 方式2️⃣：在浏览器控制台动态更新

打开网站 → 按 `F12` 打开开发者工具 → 进入 Console 标签页 → 输入：

```javascript
// 更新单个产品图片
imageConfig.updateImage('products', 'feed-red', 'assets/images/my-broiler.jpg');

// 查看当前配置
console.log(imageConfig.products);

// 批量更新
imageConfig.products = {
  'feed-red': 'assets/images/products/1.jpg',
  'feed-gold': 'assets/images/products/2.jpg',
  'feed-blue': 'assets/images/products/3.jpg',
  // ... 完整列表
};
```

#### 方式3️⃣：使用数据URL（用于测试）

如果没有图片文件，可以临时使用数据URL测试：

```javascript
imageConfig.products['feed-red'] = 'data:image/svg+xml,...';
```

## 📰 新闻图片配置

### 支持的新闻图片类型

```
新闻图片 ID          说明                图片尺寸建议
───────────────────────────────────────────────
'news-green'        公司新闻-绿色         1200×600px
'news-gold'         公司新闻-金色         1200×600px
'news-earth'        行业资讯-土色         1200×600px
'news-sage'         行业资讯-灰绿色       1200×600px
```

### 更新新闻图片

修改 `assets/images.js` 中的 `news` 部分：

```javascript
window.imageConfig = {
  news: {
    'news-green': 'assets/images/news/service-upgrade.jpg',
    'news-gold': 'assets/images/news/equipment-news.jpg',
    'news-earth': 'assets/images/news/market-analysis.jpg',
    'news-sage': 'assets/images/news/industry-trend.jpg'
  }
};
```

## 🚀 首页轮播图配置

### 支持的轮播图类型

```
轮播图 ID           说明                图片尺寸建议
───────────────────────────────────────────────
'slide-feed'        饲料研发创新         1920×1080px 或更大
'slide-service'     产业协同服务         1920×1080px 或更大
'slide-brand'       品牌使命             1920×1080px 或更大
```

### 更新轮播图

修改 `assets/images.js` 中的 `sliders` 部分：

```javascript
window.imageConfig = {
  sliders: {
    'slide-feed': 'assets/images/sliders/feed-innovation.jpg',
    'slide-service': 'assets/images/sliders/service-integration.jpg',
    'slide-brand': 'assets/images/sliders/brand-mission.jpg'
  }
};
```

## 📸 如何准备图片

### 1️⃣ 创建图片文件夹

在 `assets/` 目录下创建文件夹结构：

```
assets/
├── images/
│   ├── products/          ← 放产品图片
│   ├── news/              ← 放新闻图片
│   └── sliders/           ← 放轮播图
```

### 2️⃣ 上传您的图片

- 将产品图片放在 `assets/images/products/` 
- 将新闻图片放在 `assets/images/news/`
- 将轮播图放在 `assets/images/sliders/`

**格式**：JPG、PNG、WebP 都支持

### 3️⃣ 更新配置文件

编辑 `assets/images.js`，填写正确的图片路径

### 4️⃣ 检查效果

刷新网站，图片应该自动显示

## 🔧 完整配置示例

```javascript
// 完整的 assets/images.js 配置示例
window.imageConfig = {
  // 产品图片
  products: {
    'feed-red': 'assets/images/products/broiler.jpg',
    'feed-gold': 'assets/images/products/layer.jpg',
    'feed-blue': 'assets/images/products/aquatic.jpg',
    'premix-green': 'assets/images/products/basic-premix.jpg',
    'premix-orange': 'assets/images/products/functional-premix.jpg',
    'equipment-gray': 'assets/images/products/cage.jpg',
    'equipment-green': 'assets/images/products/ventilation.jpg',
    'grain-brown': 'assets/images/products/grain.jpg'
  },

  // 新闻图片
  news: {
    'news-green': 'assets/images/news/fumin-news.jpg',
    'news-gold': 'assets/images/news/equipment-news.jpg',
    'news-earth': 'assets/images/news/market-news.jpg',
    'news-sage': 'assets/images/news/industry-news.jpg'
  },

  // 首页轮播图
  sliders: {
    'slide-feed': 'assets/images/sliders/banner1.jpg',
    'slide-service': 'assets/images/sliders/banner2.jpg',
    'slide-brand': 'assets/images/sliders/banner3.jpg'
  }
};
```

## 💡 常见场景

### 场景1️⃣：只想改一张产品图片

```javascript
// 在 assets/images.js 中找到这一行
'feed-red': 'assets/images/products/broiler-feed.jpg',

// 改成您的图片路径
'feed-red': 'assets/images/products/my-broiler.jpg',
```

### 场景2️⃣：想用在线图片（来自互联网）

```javascript
// 直接用完整URL
'feed-red': 'https://example.com/images/broiler.jpg',
```

### 场景3️⃣：想用本地相对路径

```javascript
// 如果图片在项目根目录的 img 文件夹
'feed-red': '../../img/broiler.jpg',
```

### 场景4️⃣：暂时没有图片，想用占位符

**不需要做任何事！** 系统会自动显示美观的颜色渐变作为备用。

## ⚙️ 进阶功能

### 函数列表

在 `assets/images.js` 中提供的函数：

```javascript
// 获取指定图片 URL
imageConfig.getImageUrl('products', 'feed-red')
// 返回：'assets/images/products/broiler-feed.jpg'

// 更新单个图片
imageConfig.updateImage('products', 'feed-red', 'new/path.jpg')

// 获取所有产品图片
imageConfig.getAllProductImages()
// 返回：{ 'feed-red': '...', 'feed-gold': '...', ... }

// 获取所有新闻图片
imageConfig.getAllNewsImages()
// 返回：{ 'news-green': '...', 'news-gold': '...', ... }
```

### 开发者使用

在您的 JavaScript 代码中：

```javascript
// 检查图片是否存在
if (imageConfig.getImageUrl('products', 'feed-red')) {
  console.log('图片已配置');
}

// 动态加载不同图片
const url = imageConfig.getImageUrl('news', 'news-green');
const img = new Image();
img.src = url;
```

## 🐛 故障排查

### 问题1️⃣：图片不显示

**检查清单**：
1. ✅ 图片文件是否确实存在？
2. ✅ 路径是否正确？（区分大小写）
3. ✅ 是否刷新了页面（Ctrl+F5强制刷新）？
4. ✅ 浏览器控制台是否有错误？

### 问题2️⃣：配置不生效

**解决方案**：
1. 确保 `images.js` 在 `data.js` 之前加载
2. 确保没有浏览器缓存 - 用 Ctrl+Shift+Delete 清除缓存
3. 检查 `assets/images.js` 是否有语法错误

### 问题3️⃣：如何重置为默认

编辑 `assets/images.js`，恢复原始配置或使用空字符串：

```javascript
'feed-red': '' // 使用默认颜色渐变
```

## 📞 支持

如有问题：
1. 查看图片配置中的注释
2. 检查浏览器开发者工具的 Console 标签
3. 确保图片格式支持（JPG/PNG/WebP）
4. 联系技术支持

## 总结

✨ **现在您可以**：
- ✅ 随时更换产品图片（无需改代码）
- ✅ 随时更换新闻图片（无需改代码）
- ✅ 随时更换轮播图（无需改代码）
- ✅ 使用本地图片或在线图片
- ✅ 在浏览器控制台动态测试
- ✅ 享受自动备用方案（颜色渐变）

**关键文件**：
- `assets/images.js` - 所有图片配置在这里
- `assets/app.js` - 已更新支持图片 URL
- 所有 HTML 文件 - 已更新加载 images.js

祝您使用愉快！ 🎉
