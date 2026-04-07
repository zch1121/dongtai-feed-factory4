/**
 * 产品图片配置文件
 * 使用说明：
 * 1. 将您的图片文件放在 assets/images/ 文件夹中
 * 2. 在下面更新对应的图片路径
 * 3. 图片会自动应用到所有产品和新闻页面
 * 
 * 支持的图片格式：JPG, PNG, WebP, SVG
 * 推荐图片尺寸：
 * - 产品图片：800x600px 或 16:9 比例
 * - 新闻图片：1200x600px 或 2:1 比例
 */

window.imageConfig = {
  // ============ 产品图片配置 ============
  products: {
  
    'feed-red': 'assets/images/products/rouqin-siliao.jpg',
    
    // 蛋禽饲料
    'feed-gold': 'assets/images/products/您的蛋禽饲料图片.jpg',
    
    // 水产饲料
    'feed-blue': 'assets/images/products/您的水产饲料图片.jpg',
    
    // 预混料 - 绿色
    'premix-green': 'assets/images/products/您的预混料图片.jpg',
    
    // 预混料 - 橙色
    'premix-orange': 'assets/images/products/您的功能预混料图片.jpg',
    
    // 设备 - 灰色
    'equipment-gray': 'assets/images/products/您的鸡笼图片.jpg',
    
    // 设备 - 绿色
    'equipment-green': 'assets/images/products/您的通风系统图片.jpg',
    
    // 原料 - 棕色
    'grain-brown': 'assets/images/products/您的粮食图片.jpg'
  },

  // ============ 新闻图片配置 ============
  news: {
    // 绿色新闻图
    'news-green': 'assets/images/news/service-upgrade.jpg',
    
    // 金色新闻图
    'news-gold': 'assets/images/news/equipment-news.jpg',
    
    // 土色新闻图
    'news-earth': 'assets/images/news/market-analysis.jpg',
    
    // 灰绿色新闻图
    'news-sage': 'assets/images/news/industry-trend.jpg'
  },

  // ============ 首页轮播图配置 ============
  sliders: {
    // 饲料研发主题
    'slide-feed': 'assets/images/sliders/feed-innovation.jpg',
    
    // 产业协同主题
    'slide-service': 'assets/images/sliders/service-integration.jpg',
    
    // 品牌主题
    'slide-brand': 'assets/images/sliders/brand-mission.jpg'
  },

  // ============ 默认备用图片 ============
  // 当某个图片不存在时，使用备用方案（颜色渐变 或 占位符）
  fallback: {
    // 是否使用颜色渐变作为备用
    useFallbackGradient: true,
    
    // 备用占位符图片（中文服务无法直接使用在线图片）
    placeholderImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23eee" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%23999" text-anchor="middle" dy=".3em"%3E图片加载中...%3C/text%3E%3C/svg%3E'
  },

  // ============ 图片加载函数 ============
  /**
   * 获取图片 URL
   * @param {string} category - 类别 ('products', 'news', 'sliders')
   * @param {string} key - 图片键名
   * @returns {string} 图片 URL
   */
  getImageUrl: function(category, key) {
    if (this[category] && this[category][key]) {
      return this[category][key];
    }
    return this.fallback.placeholderImage;
  },

  /**
   * 更新图片配置
   * @param {string} category - 类别
   * @param {string} key - 图片键名
   * @param {string} url - 新的图片 URL
   */
  updateImage: function(category, key, url) {
    if (!this[category]) {
      this[category] = {};
    }
    this[category][key] = url;
    console.log(`已更新 ${category} - ${key}: ${url}`);
  },

  /**
   * 获取所有产品图片
   * @returns {object} 所有产品图片配置
   */
  getAllProductImages: function() {
    return this.products;
  },

  /**
   * 获取所有新闻图片
   * @returns {object} 所有新闻图片配置
   */
  getAllNewsImages: function() {
    return this.news;
  }
};

// ============ 使用示例 ============
/*
// 在浏览器控制台中，您可以这样更新图片：

// 1. 查看当前图片配置
console.log(imageConfig.products);

// 2. 更新单个产品图片
imageConfig.updateImage('products', 'feed-red', 'assets/images/my-broiler-feed.jpg');

// 3. 获取指定图片
const url = imageConfig.getImageUrl('products', 'feed-red');

// 4. 更新新闻图片
imageConfig.updateImage('news', 'news-green', 'assets/images/my-news.jpg');

// 5. 批量更新产品图片
imageConfig.products = {
  'feed-red': 'assets/images/products/my-broiler.jpg',
  'feed-gold': 'assets/images/products/my-layer.jpg',
  // ... 其他图片
};
*/
