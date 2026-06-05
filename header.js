/* ORNZA shared site header — announcement bar + nav + search + mobile drawer */
(function () {
  const mount = document.getElementById('ornza-site-header');
  if (!mount) return;

  const page = mount.dataset.page || detectPage();
  const navMode = mount.dataset.navMode || detectNavMode();

  document.body.classList.add('has-site-header', 'ornza-page');
  if (navMode === 'hero') document.body.classList.add('has-hero');
  if (navMode === 'solid') document.body.classList.add('nav-solid');

  const chevron = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron-icon"><polyline points="6 9 12 15 18 9"/></svg>';

  mount.innerHTML = `
<div class="site-header-wrap">
  <div class="ann-bar" id="ann-bar">
    <div class="ann-bar-track">
      <div class="ann-item"><span>✦</span> Free Shipping Above ₹999</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> Cash on Delivery Available</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> Premium Gift Packaging on All Orders</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> BIS Hallmarked 925 Silver Collection</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>⭐</span> 10,000+ Happy Customers</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> Surat's Most Loved Jewellery Brand</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> Free Shipping Above ₹999</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> Cash on Delivery Available</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> Premium Gift Packaging on All Orders</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> BIS Hallmarked 925 Silver Collection</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>⭐</span> 10,000+ Happy Customers</div><div class="ann-item-dot"></div>
      <div class="ann-item"><span>✦</span> Surat's Most Loved Jewellery Brand</div><div class="ann-item-dot"></div>
    </div>
  </div>
  <nav class="nav" id="main-nav">
    <a href="index.html" class="nav-logo">ORN<span>Z</span>A</a>
    <ul class="nav-links-hp">
      <li><a href="index.html" data-nav="home">Home</a></li>
      <li class="mega-parent">
        <a href="women.html" class="mega-trigger" data-nav="women">Women ${chevron}</a>
        <div class="mega-menu">
          <div class="mega-menu-inner">
            <div class="mega-section">
              <div class="mega-section-label">Women's Jewellery</div>
              <ul class="mega-list">
                <li><a href="women.html#mangalsutras"><span class="mega-icon">◆</span> Mangalsutras</a></li>
                <li><a href="women.html#bracelets"><span class="mega-icon">◆</span> Bracelets</a></li>
                <li><a href="women.html#chains"><span class="mega-icon">◆</span> Chains</a></li>
                <li><a href="women.html#pendants"><span class="mega-icon">◆</span> Pendants</a></li>
                <li><a href="women.html#silver925"><span class="mega-icon">◆</span> 925 Silver</a></li>
                <li><a href="women.html#set-chain-pendant"><span class="mega-icon">◆</span> Set Chain &amp; Pendant</a></li>
                <li><a href="women.html#rings"><span class="mega-icon">◆</span> Rings</a></li>
                <li><a href="women.html#earrings"><span class="mega-icon">◆</span> Earrings</a></li>
                <li><a href="women.html#pearl"><span class="mega-icon">◆</span> Pearl Collection</a></li>
              </ul>
            </div>
            <div class="mega-featured">
              <div class="mega-featured-tag">New Season</div>
              <div class="mega-featured-title">Pearl Collection</div>
              <p class="mega-featured-desc">Timeless elegance with lustrous freshwater pearls</p>
              <a href="women.html#pearl" class="mega-featured-link">Explore →</a>
            </div>
          </div>
        </div>
      </li>
      <li class="mega-parent">
        <a href="men.html" class="mega-trigger" data-nav="men">Men ${chevron}</a>
        <div class="mega-menu">
          <div class="mega-menu-inner">
            <div class="mega-section">
              <div class="mega-section-label">Men's Collection</div>
              <ul class="mega-list">
                <li><a href="men.html#bracelets"><span class="mega-icon">◆</span> Bracelets</a></li>
                <li><a href="men.html#chains"><span class="mega-icon">◆</span> Chains</a></li>
                <li><a href="men.html#pendants"><span class="mega-icon">◆</span> Pendants</a></li>
                <li><a href="men.html#rings"><span class="mega-icon">◆</span> Rings</a></li>
              </ul>
            </div>
            <div class="mega-featured">
              <div class="mega-featured-tag">Best Sellers</div>
              <div class="mega-featured-title">Cuban Link Chains</div>
              <p class="mega-featured-desc">Bold, refined chains for the modern gentleman</p>
              <a href="men.html#chains" class="mega-featured-link">Explore →</a>
            </div>
          </div>
        </div>
      </li>
      <li><a href="silver925.html" data-nav="silver925">925 Silver</a></li>
      <li><a href="hampers.html" data-nav="hampers">Hampers</a></li>
      <li><a href="reviews.html" data-nav="reviews">Reviews</a></li>
      <li><a href="track-order.html" data-nav="track-order">Track Order</a></li>
      <li><a href="contact.html" data-nav="contact">Contact</a></li>
    </ul>
    <div class="nav-right-group">
      <button type="button" class="nav-search-btn" id="search-open-btn" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
      <a href="contact.html" class="nav-cta">Inquire</a>
      <button type="button" class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</div>
<div class="search-overlay" id="search-overlay">
  <button type="button" class="search-overlay-close" id="search-close-btn" aria-label="Close search">×</button>
  <div class="search-label">What are you looking for?</div>
  <div class="search-input-wrap">
    <input type="text" class="search-input" id="search-input" placeholder="Search jewellery..." autocomplete="off">
  </div>
  <div class="search-suggestions">
    <a href="women.html#earrings" class="search-suggestion">Earrings</a>
    <a href="women.html#mangalsutras" class="search-suggestion">Mangalsutra</a>
    <a href="silver925.html" class="search-suggestion">925 Silver</a>
    <a href="women.html#rings" class="search-suggestion">Rings</a>
    <a href="hampers.html" class="search-suggestion">Gift Hampers</a>
    <a href="women.html#pearl" class="search-suggestion">Pearl Collection</a>
    <a href="men.html#chains" class="search-suggestion">Men's Chains</a>
    <a href="women.html#bracelets" class="search-suggestion">Bracelets</a>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
<div class="mobile-nav-drawer" id="mobile-nav-drawer">
  <div class="mobile-nav-header">
    <a href="index.html" class="mobile-nav-logo">ORN<span>Z</span>A</a>
    <button type="button" class="mobile-nav-close" id="mobile-nav-close" aria-label="Close">×</button>
  </div>
  <div class="mobile-search">
    <div class="mobile-search-wrap">
      <svg class="mobile-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" class="mobile-search-input" id="mobile-search-input" placeholder="Search jewellery...">
    </div>
  </div>
  <div class="mobile-nav-quick-links">
    <a href="track-order.html" class="mobile-ql">📦 Track Order</a>
    <a href="reviews.html" class="mobile-ql">⭐ Reviews</a>
    <a href="hampers.html" class="mobile-ql">🎁 Hampers</a>
    <a href="silver925.html" class="mobile-ql">✦ 925 Silver</a>
  </div>
  <div class="mobile-nav-links">
    <a href="index.html">Home</a>
    <div class="mobile-nav-group">
      <div class="mobile-nav-group-title">Women's Collection</div>
      <a href="women.html#mangalsutras">Mangalsutras</a>
      <a href="women.html#earrings">Earrings</a>
      <a href="women.html#bracelets">Bracelets</a>
      <a href="women.html#chains">Chains</a>
      <a href="women.html#pendants">Pendants</a>
      <a href="women.html#rings">Rings</a>
      <a href="women.html#set-chain-pendant">Set Chain &amp; Pendant</a>
      <a href="women.html#pearl">Pearl Collection</a>
    </div>
    <div class="mobile-nav-group">
      <div class="mobile-nav-group-title">Men's Collection</div>
      <a href="men.html#bracelets">Bracelets</a>
      <a href="men.html#chains">Chains</a>
      <a href="men.html#pendants">Pendants</a>
      <a href="men.html#rings">Rings</a>
    </div>
    <a href="silver925.html">925 Silver</a>
    <a href="hampers.html">Gift Hampers</a>
    <a href="reviews.html">Customer Reviews</a>
    <a href="track-order.html">Track Order</a>
    <a href="contact.html">Contact Us</a>
  </div>
  <div class="mobile-nav-cta-row">
    <a href="https://wa.me/919999999999" class="mnc-wa" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a href="contact.html" class="mnc-inq">Inquire Now</a>
  </div>
</div>`;

  setActiveNav(page);
  initNavScroll(navMode);
  initMobileDrawer();
  initSearchOverlay();
  document.getElementById('mobile-search-input')?.addEventListener('input', (e) => mobileSearch(e.target.value));
})();

function detectPage() {
  const file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const map = {
    'index.html': 'home',
    'women.html': 'women',
    'men.html': 'men',
    'silver925.html': 'silver925',
    'hampers.html': 'hampers',
    'reviews.html': 'reviews',
    'track-order.html': 'track-order',
    'contact.html': 'contact',
    'about.html': 'about',
    'collections.html': 'collections',
    'earrings.html': 'women',
    'rings.html': 'women',
    'necklaces.html': 'women',
    'bracelets.html': 'women',
    'bangles.html': 'women',
    'diamonds.html': 'women',
  };
  return map[file] || 'home';
}

function detectNavMode() {
  if (document.querySelector('.hero-v2, .category-hero, .track-page, .reviews-hero, .reviews-page-hero, .hamper-hero')) return 'hero';
  return 'solid';
}

function setActiveNav(page) {
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.classList.toggle('active', el.dataset.nav === page);
  });
}

function initNavScroll(navMode) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  if (navMode === 'solid') nav.classList.add('scrolled');

  const onScroll = () => {
    const overLight = navMode === 'solid' || window.scrollY > 100;
    nav.classList.toggle('scrolled', overLight);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileDrawer() {
  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');
  if (!hamburger || !drawer || !overlay || !closeBtn) return;

  const open = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.classList.add('active');
  };
  const close = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.classList.remove('active');
  };

  hamburger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
}

function initSearchOverlay() {
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const openBtn = document.getElementById('search-open-btn');
  const closeBtn = document.getElementById('search-close-btn');
  if (!searchOverlay || !openBtn) return;

  const close = () => {
    searchOverlay.classList.remove('open');
    if (!document.getElementById('mobile-nav-drawer')?.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  };

  openBtn.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput?.focus(), 200);
    document.body.style.overflow = 'hidden';
  });
  closeBtn?.addEventListener('click', close);
  searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

function mobileSearch(val) {
  if (!val || val.length < 2) return;
  const suggestions = {
    earring: 'women.html#earrings',
    ring: 'women.html#rings',
    bracelet: 'women.html#bracelets',
    necklace: 'women.html#chains',
    mangal: 'women.html#mangalsutras',
    silver: 'silver925.html',
    hamper: 'hampers.html',
    pendant: 'women.html#pendants',
    pearl: 'women.html#pearl',
    chain: 'men.html#chains',
  };
  const q = val.toLowerCase();
  for (const [kw, url] of Object.entries(suggestions)) {
    if (q.includes(kw)) {
      window.location.href = url;
      break;
    }
  }
}
