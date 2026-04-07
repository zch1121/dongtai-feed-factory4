(function () {
  const data = window.siteData;
  if (!data) return;

  const body = document.body;
  const page = body.dataset.page || "";
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function renderHeader() {
    const container = qs("#site-header");
    if (!container) return;

    const navItems = data.navigation
      .map(
        (item) => `
          <li><a class="${item.key === page ? "active" : ""}" href="${item.href}">${item.label}</a></li>
        `
      )
      .join("");

    container.innerHTML = `
      <header class="site-header" id="siteHeader">
        <div class="nav-shell">
          <div class="container nav-inner">
            <div class="nav-left">
              <a class="brand" href="index.html" aria-label="${data.company.name}">
                <img src="assets/images/company/logo.jpg" alt="${data.company.name}" class="brand-logo">
              </a>
            </div>
            <div class="nav-right">
              <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="siteNav">
                <span></span><span></span><span></span>
              </button>
              <nav class="site-nav" id="siteNav">
                <ul>${navItems}</ul>
              </nav>
              <div class="search-box">
                <input type="text" id="searchInput" placeholder="搜索产品、服务或信息..." />
                <button id="searchBtn">搜索</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;

    const header = qs("#siteHeader");
    const navToggle = qs("#navToggle");
    const nav = qs("#siteNav");

    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    });

    navToggle?.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
      body.classList.toggle("menu-open");
    });

    // 搜索功能
    const searchInput = qs("#searchInput");
    const searchBtn = qs("#searchBtn");

    function performSearch() {
      const query = searchInput?.value.trim();
      if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    }

    searchBtn?.addEventListener("click", performSearch);
    searchInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch();
      }
    });

    qsa(".site-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        body.classList.remove("menu-open");
        navToggle?.setAttribute("aria-expanded", "false");
      });
    });
  }

  function renderFooter() {
    const container = qs("#site-footer");
    if (!container) return;

    const links = data.navigation
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");

    container.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <div class="brand brand-footer">
              <img src="assets/images/company/logo.jpg" alt="${data.company.name}" class="brand-logo-footer">
            </div>
            <p>${data.company.slogan}</p>
          </div>
          <div>
            <h4>网站导航</h4>
            <ul class="footer-links">${links}</ul>
          </div>
          <div>
            <h4>联系我们</h4>
            <ul class="footer-contact">
              <li>地址：${data.company.address}</li>
              <li>电话：<a href="tel:${data.company.phone}">${data.company.phone}</a></li>
              <li>邮箱：<a href="mailto:${data.company.email}">${data.company.email}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container footer-bottom-inner">
            <span>Copyright © 2026 ${data.company.name}</span>
            <span>${data.company.icp}</span>
          </div>
        </div>
      </footer>
    `;
  }

  function initSlider() {
    const slides = qsa(".hero-slide");
    const dots = qsa(".hero-dot");
    if (!slides.length) return;

    let current = 0;
    let timer = null;

    const activate = (index) => {
      slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === index));
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
      current = index;
    };

    const next = () => activate((current + 1) % slides.length);
    timer = window.setInterval(next, 5000);

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        window.clearInterval(timer);
        activate(Number(dot.dataset.slide));
        timer = window.setInterval(next, 5000);
      });
    });
  }

  function renderHome() {
    const banner = qs("#homeBanner");
    if (!banner) return;

    banner.innerHTML = `
      <div class="hero-slider">
        ${data.slides
          .map(
            (slide, index) => `
            <article class="hero-slide ${slide.theme} ${index === 0 ? "active" : ""}">
              <div class="container hero-content">
                <div class="eyebrow">FU MIN AGRI TECH</div>
                <h1>${slide.title}</h1>
                <h2>${slide.subtitle}</h2>
                <p>${slide.description}</p>
                <div class="hero-actions">
                  <a class="btn btn-primary" href="${slide.link}">${slide.linkText}</a>
                  <a class="btn btn-secondary" href="about.html">了解企业实力</a>
                </div>
              </div>
            </article>
          `
          )
          .join("")}
        <div class="hero-dots container">
          ${data.slides
            .map(
              (_, index) => `
                <button class="hero-dot ${index === 0 ? "active" : ""}" data-slide="${index}" aria-label="切换到第${index + 1}张轮播"></button>
              `
            )
            .join("")}
        </div>
      </div>
    `;

    const business = qs("#homeBusiness");
    if (business) {
      business.innerHTML = data.businessCards
        .map(
          (item) => `
            <article class="business-card">
              <div class="icon icon-${item.icon}"></div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("");
    }

    const showcase = qs("#homeProducts");
    if (showcase) {
      const getImageStyle = (imageKey) => {
        if (!window.imageConfig) return "";
        const imageUrl = window.imageConfig.getImageUrl('products', imageKey);
        if (imageUrl && !imageUrl.includes('data:image')) {
          return `style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"`;
        }
        return "";
      };

      showcase.innerHTML = data.homeProducts
        .map(
          (item) => `
            <article class="product-card">
              <div class="product-media ${item.image}" ${getImageStyle(item.image)}></div>
              <div class="product-card-body">
                <span class="product-category">${item.category}</span>
                <h3>${item.name}</h3>
                <p>${item.summary}</p>
                <div class="product-meta">
                  <strong>${item.feature}</strong>
                  <a href="product-detail.html?id=${item.id}">查看详情</a>
                </div>
              </div>
            </article>
          `
        )
        .join("");
    }

    const advantages = qs("#homeAdvantages");
    if (advantages) {
      advantages.innerHTML = data.advantages
        .map(
          (item) => `
            <article class="advantage-card">
              <span>${item.number}</span>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("");
    }

    const stats = qs("#homeStats");
    if (stats) {
      stats.innerHTML = data.stats
        .map(
          (item) => `
            <div class="stat-card">
              <strong>${item.value}</strong>
              <span>${item.label}</span>
            </div>
          `
        )
        .join("");
    }

    const newsList = qs("#homeNews");
    if (newsList) {
      newsList.innerHTML = data.news
        .slice(0, 3)
        .map(
          (item) => `
            <article class="news-item">
              <span class="news-date">${item.date}</span>
              <div class="news-item-body">
                <span class="news-type">${item.type}</span>
                <h3><a href="news-detail.html?id=${item.id}">${item.title}</a></h3>
                <p>${item.summary}</p>
              </div>
            </article>
          `
        )
        .join("");
    }

    initSlider();
  }

  function renderAbout() {
    const timeline = qs("#timelineList");
    if (timeline) {
      timeline.innerHTML = data.milestones
        .map(
          (item) => `
            <article class="timeline-item">
              <span class="timeline-year">${item.year}</span>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("");
    }

    const qualifications = qs("#qualificationList");
    if (qualifications) {
      qualifications.innerHTML = data.qualifications.map((item) => `<li>${item}</li>`).join("");
    }

    const cultures = qs("#cultureGrid");
    if (cultures) {
      cultures.innerHTML = data.culture
        .map(
          (item) => `
            <article class="info-card">
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("");
    }

    const team = qs("#teamGrid");
    if (team) {
      team.innerHTML = data.team
        .map(
          (item) => `
            <article class="team-card">
              <div class="team-avatar">${item.name.slice(0, 2)}</div>
              <h3>${item.name}</h3>
              <p>${item.role}</p>
            </article>
          `
        )
        .join("");
    }
  }

  function renderProducts() {
    const filters = qs("#productFilters");
    const list = qs("#productList");
    if (!filters || !list) return;

    let currentCategory = "全部产品";

    const getImageStyle = (imageKey) => {
      if (!window.imageConfig) return "";
      const imageUrl = window.imageConfig.getImageUrl('products', imageKey);
      if (imageUrl && !imageUrl.includes('data:image')) {
        return `style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"`;
      }
      return "";
    };

    const renderList = () => {
      const items =
        currentCategory === "全部产品"
          ? data.products
          : data.products.filter((item) => item.category === currentCategory);

      list.innerHTML = items
        .map(
          (item) => `
            <article class="product-card product-card-page">
              <div class="product-media ${item.image}" ${getImageStyle(item.image)}></div>
              <div class="product-card-body">
                <span class="product-category">${item.category}</span>
                <h3>${item.name}</h3>
                <p>${item.summary}</p>
                <div class="tag-list">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                <div class="product-meta">
                  <strong>${item.tags[0]}</strong>
                  <a href="product-detail.html?id=${item.id}">查看详情</a>
                </div>
              </div>
            </article>
          `
        )
        .join("");
    };

    filters.innerHTML = data.productCategories
      .map(
        (category) => `
          <button class="${category === currentCategory ? "active" : ""}" data-category="${category}">
            ${category}
          </button>
        `
      )
      .join("");

    filters.addEventListener("click", (event) => {
      const target = event.target.closest("button[data-category]");
      if (!target) return;
      currentCategory = target.dataset.category;
      qsa("button", filters).forEach((button) => {
        button.classList.toggle("active", button.dataset.category === currentCategory);
      });
      renderList();
    });

    renderList();
  }

  function renderProductDetail() {
    const box = qs("#productDetail");
    if (!box) return;

    const params = new URLSearchParams(window.location.search);
    const product = data.products.find((item) => item.id === params.get("id")) || data.products[0];

    const getImageStyle = (imageKey) => {
      if (!window.imageConfig) return "";
      const imageUrl = window.imageConfig.getImageUrl('products', imageKey);
      if (imageUrl && !imageUrl.includes('data:image')) {
        return `style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"`;
      }
      return "";
    };

    box.innerHTML = `
      <div class="detail-hero">
        <div class="product-media detail-media ${product.image}" ${getImageStyle(product.image)}></div>
        <div class="detail-content">
          <span class="product-category">${product.category}</span>
          <h1>${product.name}</h1>
          <p>${product.summary}</p>
          <div class="tag-list">${product.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <a class="btn btn-primary" href="contact.html">获取方案咨询</a>
        </div>
      </div>
      <div class="detail-section">
        <h2>产品介绍</h2>
        <div class="detail-text">${product.details.map((line) => `<p>${line}</p>`).join("")}</div>
      </div>
      <div class="detail-section">
        <h2>相关产品</h2>
        <div class="detail-related">
          ${data.products
            .filter((item) => item.id !== product.id)
            .slice(0, 3)
            .map(
              (item) => {
                const imageUrl = window.imageConfig ? window.imageConfig.getImageUrl('products', item.image) : '';
                const imageStyle = imageUrl && !imageUrl.includes('data:image') ? `style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"` : '';
                return `
                  <a class="related-card" href="product-detail.html?id=${item.id}">
                    <div class="product-media ${item.image}" ${imageStyle}></div>
                    <strong>${item.name}</strong>
                  </a>
                `;
              }
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderServices() {
    const services = qs("#servicesGrid");
    if (services) {
      services.innerHTML = data.services
        .map(
          (item) => `
            <article class="service-card">
              <div class="icon icon-${item.icon}"></div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("");
    }

    const cases = qs("#caseGrid");
    if (cases) {
      cases.innerHTML = data.cases
        .map(
          (item, index) => `
            <article class="case-card">
              <span>案例 ${index + 1}</span>
              <h3>${item.name}</h3>
              <p>${item.result}</p>
            </article>
          `
        )
        .join("");
    }
  }

  function renderNews() {
    const filters = qs("#newsFilters");
    const list = qs("#newsList");
    if (!filters || !list) return;

    let currentType = "全部资讯";

    const getImageStyle = (imageKey) => {
      if (!window.imageConfig) return "";
      const imageUrl = window.imageConfig.getImageUrl('news', imageKey);
      if (imageUrl && !imageUrl.includes('data:image')) {
        return `style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"`;
      }
      return "";
    };

    const renderList = () => {
      const items =
        currentType === "全部资讯"
          ? data.news
          : data.news.filter((item) => item.type === currentType);

      list.innerHTML = items
        .map(
          (item) => `
            <article class="news-card">
              <div class="news-media ${item.image}" ${getImageStyle(item.image)}></div>
              <div class="news-card-body">
                <div class="news-card-meta">
                  <span>${item.type}</span>
                  <time>${item.date}</time>
                </div>
                <h3><a href="news-detail.html?id=${item.id}">${item.title}</a></h3>
                <p>${item.summary}</p>
                <a class="text-link" href="news-detail.html?id=${item.id}">阅读详情</a>
              </div>
            </article>
          `
        )
        .join("");
    };

    filters.innerHTML = data.newsTypes
      .map(
        (type) => `
          <button class="${type === currentType ? "active" : ""}" data-type="${type}">
            ${type}
          </button>
        `
      )
      .join("");

    filters.addEventListener("click", (event) => {
      const target = event.target.closest("button[data-type]");
      if (!target) return;
      currentType = target.dataset.type;
      qsa("button", filters).forEach((button) => {
        button.classList.toggle("active", button.dataset.type === currentType);
      });
      renderList();
    });

    renderList();
  }

  function renderNewsDetail() {
    const box = qs("#newsDetail");
    if (!box) return;

    const params = new URLSearchParams(window.location.search);
    const item = data.news.find((news) => news.id === params.get("id")) || data.news[0];

    const getImageStyle = (imageKey) => {
      if (!window.imageConfig) return "";
      const imageUrl = window.imageConfig.getImageUrl('news', imageKey);
      if (imageUrl && !imageUrl.includes('data:image')) {
        return `style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"`;
      }
      return "";
    };

    box.innerHTML = `
      <article class="article-detail">
        <div class="news-media detail-media ${item.image}" ${getImageStyle(item.image)}></div>
        <div class="article-head">
          <span class="news-type">${item.type}</span>
          <h1>${item.title}</h1>
          <time>${item.date}</time>
        </div>
        <div class="article-body">
          ${item.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </article>
      <div class="detail-section">
        <h2>更多资讯</h2>
        <div class="detail-related">
          ${data.news
            .filter((news) => news.id !== item.id)
            .slice(0, 3)
            .map(
              (news) => {
                const imageUrl = window.imageConfig ? window.imageConfig.getImageUrl('news', news.image) : '';
                const imageStyle = imageUrl && !imageUrl.includes('data:image') ? `style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;"` : '';
                return `
                  <a class="related-card article-related" href="news-detail.html?id=${news.id}">
                    <div class="news-media ${news.image}" ${imageStyle}></div>
                    <strong>${news.title}</strong>
                  </a>
                `;
              }
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function initForm() {
    const form = qs("#contactForm");
    if (!form) return;

    const status = qs("#formStatus");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = qs("#name").value.trim();
      const phone = qs("#phone").value.trim();
      const email = qs("#email").value.trim();
      const subject = qs("#subject")?.value.trim() || "";
      const message = qs("#message").value.trim();

      if (!name || name.length < 2) {
        status.textContent = "请输入有效姓名。";
        status.className = "form-status error";
        return;
      }
      if (!/^1\d{10}$/.test(phone)) {
        status.textContent = "请输入有效手机号码。";
        status.className = "form-status error";
        return;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "请输入有效邮箱地址。";
        status.className = "form-status error";
        return;
      }
      if (!message || message.length < 10) {
        status.textContent = "请填写不少于10个字的留言内容。";
        status.className = "form-status error";
        return;
      }

      const records = JSON.parse(window.localStorage.getItem("fumin-messages") || "[]");
      records.push({ name, phone, email, subject, message, createdAt: new Date().toISOString() });
      window.localStorage.setItem("fumin-messages", JSON.stringify(records));
      form.reset();
      status.textContent = "留言已提交，我们将尽快与您联系。";
      status.className = "form-status success";
    });
  }

  function initScrollLinks() {
    qsa('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = qs(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  renderHeader();
  renderFooter();
  renderHome();
  renderAbout();
  renderProducts();
  renderProductDetail();
  renderServices();
  renderNews();
  renderNewsDetail();
  initForm();
  initScrollLinks();
})();
