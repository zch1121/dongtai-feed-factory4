(function () {
  const data = window.siteData;
  if (!data) return;

  // 获取URL参数中的搜索关键词
  function getSearchQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('q') || '';
  }

  // 搜索函数
  function searchContent(query) {
    if (!query.trim()) return [];

    const results = [];
    const searchTerm = query.toLowerCase().trim();

    // 搜索产品
    if (data.homeProducts) {
      data.homeProducts.forEach(product => {
        if (product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.summary.toLowerCase().includes(searchTerm) ||
            product.feature.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'product',
            title: product.name,
            category: product.category,
            description: product.summary,
            link: 'products.html',
            image: product.image
          });
        }
      });
    }

    // 搜索业务范围
    if (data.businessCards) {
      data.businessCards.forEach(card => {
        if (card.title.toLowerCase().includes(searchTerm) ||
            card.text.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'business',
            title: card.title,
            description: card.text,
            link: 'about.html'
          });
        }
      });
    }

    // 搜索公司信息
    if (data.company) {
      Object.entries(data.company).forEach(([key, value]) => {
        if (typeof value === 'string' && value.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'company',
            title: `公司${key === 'name' ? '名称' : key === 'shortName' ? '简称' : key === 'slogan' ? '口号' : key === 'address' ? '地址' : key === 'phone' ? '电话' : key === 'email' ? '邮箱' : key}`,
            description: value,
            link: key === 'phone' ? `tel:${value}` : key === 'email' ? `mailto:${value}` : 'contact.html'
          });
        }
      });
    }

    // 搜索幻灯片内容
    if (data.slides) {
      data.slides.forEach(slide => {
        if (slide.title.toLowerCase().includes(searchTerm) ||
            slide.subtitle.toLowerCase().includes(searchTerm) ||
            slide.description.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'slide',
            title: slide.title,
            description: slide.description,
            link: slide.link
          });
        }
      });
    }

    // 搜索优势
    if (data.advantages) {
      data.advantages.forEach(adv => {
        if (adv.title.toLowerCase().includes(searchTerm) ||
            adv.text.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'advantage',
            title: adv.title,
            description: adv.text,
            link: 'about.html'
          });
        }
      });
    }

    // 搜索里程碑
    if (data.milestones) {
      data.milestones.forEach(milestone => {
        if (milestone.text.toLowerCase().includes(searchTerm) ||
            milestone.year.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'milestone',
            title: `${milestone.year}年`,
            description: milestone.text,
            link: 'about.html'
          });
        }
      });
    }

    return results;
  }

  // 渲染搜索结果
  function renderSearchResults(results, query) {
    const container = document.getElementById('searchResults');
    const queryDisplay = document.getElementById('searchQuery');

    queryDisplay.textContent = `搜索"${query}"的结果`;

    if (results.length === 0) {
      container.innerHTML = `
        <div class="no-results">
          <h3>未找到相关结果</h3>
          <p>抱歉，没有找到与"${query}"相关的搜索结果。</p>
          <p>建议：</p>
          <ul>
            <li>检查关键词拼写是否正确</li>
            <li>尝试使用更简单的关键词</li>
            <li>浏览我们的<a href="products.html">产品中心</a>或<a href="about.html">关于我们</a>页面</li>
          </ul>
        </div>
      `;
      return;
    }

    const resultsHtml = results.map(result => `
      <article class="search-result">
        <div class="search-result-content">
          <h3><a href="${result.link}">${result.title}</a></h3>
          <p class="search-result-type">${getTypeLabel(result.type)}</p>
          <p class="search-result-description">${result.description}</p>
          <a href="${result.link}" class="btn btn-outline btn-sm">查看详情</a>
        </div>
        ${result.image ? `<div class="search-result-image"><img src="assets/images/products/${result.image}.jpg" alt="${result.title}" /></div>` : ''}
      </article>
    `).join('');

    container.innerHTML = `
      <div class="search-summary">
        <p>找到 ${results.length} 个相关结果</p>
      </div>
      <div class="search-results-list">
        ${resultsHtml}
      </div>
    `;
  }

  function getTypeLabel(type) {
    const labels = {
      product: '产品',
      business: '业务',
      company: '公司信息',
      slide: '企业介绍',
      advantage: '企业优势',
      milestone: '发展历程'
    };
    return labels[type] || type;
  }

  // 初始化搜索
  function initSearch() {
    const query = getSearchQuery();
    if (query) {
      const results = searchContent(query);
      renderSearchResults(results, query);
    } else {
      document.getElementById('searchResults').innerHTML = `
        <div class="no-query">
          <h3>请输入搜索关键词</h3>
          <p>请在上方搜索框中输入您要查找的内容。</p>
        </div>
      `;
      document.getElementById('searchQuery').textContent = '请输入搜索关键词';
    }
  }

  // 页面加载完成后初始化
  document.addEventListener('DOMContentLoaded', initSearch);
})();