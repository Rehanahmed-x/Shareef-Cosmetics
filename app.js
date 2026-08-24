/**
 * SHAREEF COSMETICS - JAVASCRIPT APPLICATION CORE
 * 20 Iconic Pakistani Local Cosmetics & Skincare Products (White Background).
 */

// =================================================================
// 1. PRODUCTS DATASET (20 PAKISTANI COSMETIC & BEAUTY FAVORITES)
// =================================================================
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Pond's Bright Beauty Spot-less Glow Face Wash (100g)",
    category: 'skincare',
    price: 480,
    originalPrice: 550,
    badge: 'Pakistan Top Choice',
    badgeClass: 'badge-gold',
    rating: 4.9,
    reviewsCount: 680,
    image: 'assets/images/products/ponds_facewash.jpg',
    description: 'Enriched with Vitamin B3+ formula, clinically proven to fade dark spots and remove dead skin cells for a radiant spot-less glowing skin.',
    shades: [
      { name: '100g Standard Pack', color: '#EB4B78' },
      { name: '50g Travel Pack', color: '#F6A4BA' }
    ],
    details: 'Vitamin B3+ Formula • Removes Dullness • Daily Cleanser'
  },
  {
    id: 2,
    name: "Pond's Moisturizing Cold Cream (100ml)",
    category: 'skincare',
    price: 390,
    originalPrice: 450,
    badge: 'Winter Classic',
    badgeClass: '',
    rating: 4.8,
    reviewsCount: 540,
    image: 'assets/images/products/ponds_cold_cream.jpg',
    description: 'The iconic deep moisturizer infused with vital moisture nutrients to protect against dry, rough skin and provide 24-hour softness.',
    shades: [
      { name: '100ml Jar', color: '#325FAF' },
      { name: '55ml Tub', color: '#82A8E5' }
    ],
    details: 'Rich Moisture • 24hr Nourishment • Soft Velvety Skin'
  },
  {
    id: 3,
    name: "Himalaya Purifying Neem Face Wash (150ml)",
    category: 'skincare',
    price: 650,
    originalPrice: 750,
    badge: 'Herbal Bestseller',
    badgeClass: 'badge-gold',
    rating: 4.9,
    reviewsCount: 920,
    image: 'assets/images/products/himalaya_neem_facewash.jpg',
    description: 'Soap-free herbal formulation that clears impurities and prevents pimples with antibacterial Neem and purifying Turmeric.',
    shades: [
      { name: '150ml Value Pump', color: '#2E7D32' },
      { name: '100ml Tube', color: '#66BB6A' }
    ],
    details: 'Neem & Turmeric • 100% Herbal Actives • Soap Free'
  },
  {
    id: 4,
    name: "Himalaya Herbals Nourishing Skin Cream (100ml)",
    category: 'skincare',
    price: 420,
    originalPrice: 500,
    badge: 'All Day Hydration',
    badgeClass: '',
    rating: 4.8,
    reviewsCount: 390,
    image: 'assets/images/products/himalaya_skin_cream.jpg',
    description: 'Light and non-greasy daily use cream enriched with Aloe Vera and Winter Cherry to protect skin from pollution and dry weather.',
    shades: [
      { name: '100ml Tub', color: '#00897B' }
    ],
    details: 'Aloe Vera & Ashwagandha • Non-Greasy • All Skin Types'
  },
  {
    id: 5,
    name: "Saeed Ghani Pure Damask Rose Water Spray (Arq-e-Gulab 120ml)",
    category: 'skincare',
    price: 280,
    originalPrice: 350,
    badge: '100% Natural Herbal',
    badgeClass: 'badge-gold',
    rating: 5.0,
    reviewsCount: 1150,
    image: 'assets/images/products/saeed_ghani_arq_e_gulab.jpg',
    description: 'Traditional steam-distilled pure Damask rose water. Tones pores, balances skin pH, and refreshes the face instantly in Pakistani summers.',
    shades: [
      { name: '120ml Mist Spray', color: '#CD325A' }
    ],
    details: 'Pure Steam Distilled • Zero Alcohol • Natural Pore Toner'
  },
  {
    id: 6,
    name: "Saeed Ghani Mughziat 7 Natural Oils Hair Tonic (200ml)",
    category: 'haircare',
    price: 490,
    originalPrice: 600,
    badge: 'Heritage Hair Secret',
    badgeClass: '',
    rating: 4.9,
    reviewsCount: 780,
    image: 'assets/images/products/saeed_ghani_mughziat_oil.jpg',
    description: 'Ancient Ayurvedic blend of Almond, Olive, Castor, Sesame, Mustard, Coconut, and Black Seed oils for deep hair strength and growth.',
    shades: [
      { name: '200ml Glass Bottle', color: '#A07828' }
    ],
    details: '7 Natural Seed Oils • Anti-Hairfall • Herbal Root Nourishment'
  },
  {
    id: 7,
    name: "Saeed Ghani Husn-e-Yousuf Herbal Beauty Cream (60g)",
    category: 'skincare',
    price: 380,
    originalPrice: 460,
    badge: 'Glowing Complexion',
    badgeClass: '',
    rating: 4.7,
    reviewsCount: 460,
    image: 'assets/images/products/saeed_ghani_husn_e_yousuf.jpg',
    description: 'Traditional botanical blend formulated with Husn-e-Yousuf herbs, saffron, and natural extracts to restore healthy radiance and soft texture.',
    shades: [
      { name: '60g Gold Jar', color: '#C3912D' }
    ],
    details: 'Herbal Extracts • Saffron & Pearl Minerals • Night & Day'
  },
  {
    id: 8,
    name: "Medora of London Velvet Matte Lipstick (Classic Collection)",
    category: 'lips',
    price: 350,
    originalPrice: 450,
    badge: 'Pakistani Icon',
    badgeClass: 'badge-ruby',
    rating: 4.9,
    reviewsCount: 1420,
    image: 'assets/images/products/medora_matte_lipstick.jpg',
    description: 'The legendary Pakistani lipstick favorite for over 50 years. Rich pigment matte payoff with nourishing vitamin E in time-tested shades.',
    shades: [
      { name: '238 Dusty Rose', color: '#B86B77' },
      { name: '201 Ruby Surkh', color: '#881B2C' },
      { name: '215 Mitti Nude', color: '#B37358' },
      { name: '242 Pink Velvet', color: '#D97587' }
    ],
    details: 'Long-wearing Matte • Vitamin E Enriched • Original Swatch'
  },
  {
    id: 9,
    name: "Medora Flawless Matte Compact Face Powder with Puff",
    category: 'face',
    price: 320,
    originalPrice: 400,
    badge: 'Daily Staple',
    badgeClass: '',
    rating: 4.7,
    reviewsCount: 510,
    image: 'assets/images/products/medora_compact_powder.jpg',
    description: 'Silk micro-powder designed to control sweat and shine while giving lightweight buildable coverage for everyday Pakistani college and work wear.',
    shades: [
      { name: 'Natural Light #01', color: '#F6E4D3' },
      { name: 'Warm Wheatish #02', color: '#E4C3A3' },
      { name: 'Medium Olive #03', color: '#CE9F72' }
    ],
    details: 'Mirror & Puff Included • Oil Absorption • Pocket Friendly'
  },
  {
    id: 10,
    name: "Rivaj UK HD Matte Mineral Sunblock SPF 60 (100ml)",
    category: 'skincare',
    price: 950,
    originalPrice: 1200,
    badge: 'Summer Must-Have',
    badgeClass: 'badge-gold',
    rating: 4.9,
    reviewsCount: 880,
    image: 'assets/images/products/rivaj_mineral_sunblock.jpg',
    description: 'Broad spectrum UVA/UVB mineral sun protection formulated for Pakistan hot climate. Sweat-resistant with zero white cast and smooth matte finish.',
    shades: [
      { name: '100ml Tube (Universal)', color: '#F08C14' }
    ],
    details: 'SPF 60 PA+++ • Zinc Oxide Mineral Filter • Water Resistant'
  },
  {
    id: 11,
    name: "Rivaj UK Deep Cleansing Charcoal Peel-Off Black Mask (100ml)",
    category: 'skincare',
    price: 450,
    originalPrice: 580,
    badge: 'Pore Detox',
    badgeClass: '',
    rating: 4.8,
    reviewsCount: 620,
    image: 'assets/images/products/rivaj_charcoal_mask.jpg',
    description: 'Activated bamboo charcoal formula that deeply extracts blackheads, unclogs congested pores, and removes facial excess sebum.',
    shades: [
      { name: '100ml Black Gel Tube', color: '#282828' }
    ],
    details: 'Activated Charcoal • Removes Blackheads • Tightens Pores'
  },
  {
    id: 12,
    name: "Golden Rose Velvet Matte Lipstick Crayon",
    category: 'lips',
    price: 1150,
    originalPrice: 1400,
    badge: 'Trending Beauty',
    badgeClass: '',
    rating: 4.9,
    reviewsCount: 380,
    image: 'assets/images/products/golden_rose_velvet_lipstick.jpg',
    description: 'Ultra-creamy matte lipstick crayon that glides effortlessly on lips with precise contouring definition. Non-drying and highly pigmented.',
    shades: [
      { name: 'Nude Rose #16', color: '#A5464B' },
      { name: 'Deep Burgundy #02', color: '#6A1E2B' },
      { name: 'Warm Terracotta #24', color: '#B85842' }
    ],
    details: 'Velvet Matte Finish • Enriched with Vitamin E • Dermatologically Tested'
  },
  {
    id: 13,
    name: "Christine High Precision Oil-Control Compact Powder",
    category: 'face',
    price: 680,
    originalPrice: 850,
    badge: 'Pro Coverage',
    badgeClass: '',
    rating: 4.8,
    reviewsCount: 490,
    image: 'assets/images/products/christine_compact_powder.jpg',
    description: 'Micro-fine pressed powder that locks foundation in place for 12+ hours without caking. Blurs pores and absorbs oil in humid Karachi and Lahore weather.',
    shades: [
      { name: 'Ivory #91', color: '#F5E4D5' },
      { name: 'Natural Beige #93', color: '#E5CCA9' },
      { name: 'Honey Wheat #95', color: '#D4B38A' }
    ],
    details: 'High Definition • Velvet Texture • Includes Luxury Mirror'
  },
  {
    id: 14,
    name: "Christine Shiny Pearl Single Velvet Eyeshadow & Highlighter",
    category: 'face',
    price: 420,
    originalPrice: 550,
    badge: 'Shimmer Glow',
    badgeClass: '',
    rating: 4.7,
    reviewsCount: 310,
    image: 'assets/images/products/christine_pearl_eyeshadow.jpg',
    description: 'High-impact shimmer pearl pigment that doubles as an eyeshadow and cheekbone highlighter for that radiant Pakistani wedding party glow.',
    shades: [
      { name: 'Champagne Gold #04', color: '#E6C896' },
      { name: 'Rose Gold #09', color: '#E4A5A5' },
      { name: 'Silver Starlight #01', color: '#DCE2E6' }
    ],
    details: 'Intense Shimmer • Multi-use Cheek & Eyes • Crease Proof'
  },
  {
    id: 15,
    name: "Masarrat Misbah Silk Luminous Liquid Foundation (35ml)",
    category: 'face',
    price: 3650,
    originalPrice: 4200,
    badge: '100% Halal Luxury',
    badgeClass: 'badge-gold',
    rating: 5.0,
    reviewsCount: 890,
    image: 'assets/images/products/masarrat_misbah_foundation.jpg',
    description: 'Formulated specifically for Pakistani warm and wheatish undertones. Weightless fluid texture provides medium to full coverage with a healthy silk radiance.',
    shades: [
      { name: 'Fair Ivory (MM01)', color: '#F6DFCE' },
      { name: 'Warm Natural (MM02)', color: '#E8C6A5' },
      { name: 'Golden Beige (MM03)', color: '#DDB68F' },
      { name: 'Warm Olive (MM04)', color: '#C89D73' }
    ],
    details: 'Halal Certified • Formulated for Asian Skin • Non-comedogenic'
  },
  {
    id: 16,
    name: "Tibet Snow Moisturizing Beauty Vanishing Cream (50g)",
    category: 'skincare',
    price: 180,
    originalPrice: 220,
    badge: 'Heritage Vintage 1950',
    badgeClass: 'badge-ruby',
    rating: 4.9,
    reviewsCount: 1600,
    image: 'assets/images/products/tibet_snow_cream.jpg',
    description: 'Pakistan most famous vintage beauty vanishing cream. Keeps skin clear, soft, and oil-free with a classic cooling touch loved by generations.',
    shades: [
      { name: '50g Original Glass Jar', color: '#1E64B4' }
    ],
    details: 'Vanishing Formula • Controls Oil • 70+ Years Trusted Heritage'
  },
  {
    id: 17,
    name: "Olivia Herbal Bleach Cream with Avocado & Rose (Large Pack)",
    category: 'skincare',
    price: 220,
    originalPrice: 280,
    badge: 'Salon Favorite',
    badgeClass: '',
    rating: 4.8,
    reviewsCount: 710,
    image: 'assets/images/products/olivia_bleach_cream.jpg',
    description: 'Gentle herbal bleach cream enriched with nourishing Avocado oil and calming Rose water to lighten facial hair naturally without burning or irritation.',
    shades: [
      { name: 'Avocado & Rose Herbal', color: '#288C46' }
    ],
    details: 'Infused with Avocado • No Harsh Stinging • Salon Grade'
  },
  {
    id: 18,
    name: "Hemani Organic Tea Tree Purifying Face Serum (30ml)",
    category: 'skincare',
    price: 950,
    originalPrice: 1250,
    badge: 'Anti-Acne Herbal',
    badgeClass: 'badge-gold',
    rating: 4.9,
    reviewsCount: 340,
    image: 'assets/images/products/hemani_tea_tree_serum.jpg',
    description: 'Concentrated 100% natural Australian tea tree oil and willow bark extract to target breakouts, reduce redness, and refine enlarged pores.',
    shades: [
      { name: '30ml Dropper Bottle', color: '#286E3C' }
    ],
    details: 'Pure Tea Tree Oil • Anti-Blemish • Lightweight Absorption'
  },
  {
    id: 19,
    name: "Care Honey & Almond Nourishing Body Lotion (200ml)",
    category: 'skincare',
    price: 380,
    originalPrice: 480,
    badge: 'Winter Care Staple',
    badgeClass: '',
    rating: 4.8,
    reviewsCount: 520,
    image: 'assets/images/products/care_honey_lotion.jpg',
    description: 'Deep penetrating daily body lotion packed with pure Honey and Almond oil extracts to restore dry skin elasticity and all-day smoothness.',
    shades: [
      { name: '200ml Pump Bottle', color: '#DC961E' }
    ],
    details: 'Real Honey & Almonds • 24-Hour Softness • Non-Sticky Formula'
  },
  {
    id: 20,
    name: "Glow & Lovely Advanced Multivitamin Daily Glow Cream (50g)",
    category: 'face',
    price: 320,
    originalPrice: 390,
    badge: 'Multivitamin Glow',
    badgeClass: '',
    rating: 4.8,
    reviewsCount: 1240,
    image: 'assets/images/products/glow_and_lovely_cream.jpg',
    description: 'Clinically tested with Vitamin B3, Vitamin C, and Vitamin E to even out skin tone, reduce sun spots, and provide sun protection with a matte glow.',
    shades: [
      { name: '50g Daily Tube', color: '#E13C6E' }
    ],
    details: 'Vitamin B3, C & E • SPF 15 Sun Protection • Matte Radiant Glow'
  }
];

// =================================================================
// 2. STATE MANAGEMENT (Cart, Wishlist, Discount, Current Filter)
// =================================================================
let cart = JSON.parse(localStorage.getItem('shareef_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shareef_wishlist')) || [];

// Clean stale items from previous testing sessions
cart = cart.filter(item => PRODUCTS_DATA.some(p => p.id === item.id));
wishlist = wishlist.filter(id => PRODUCTS_DATA.some(p => p.id === id));

let appliedDiscount = 0; // percentage
let appliedCouponCode = '';
let activeFilter = 'all';
let activeSort = 'featured';

// =================================================================
// 3. INITIALIZATION ON DOM READY
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
  initEntryLoader();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
});

// =================================================================
// 4. ENTRY LOADING ANIMATION ORCHESTRATION
// =================================================================
function initEntryLoader() {
  const loader = document.getElementById('entry-loader');
  const percentEl = document.getElementById('loaderPercent');
  const barEl = document.getElementById('loaderProgressBar');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      if (percentEl) percentEl.textContent = '100';
      if (barEl) barEl.style.width = '100%';
      
      setTimeout(() => {
        if (loader) {
          loader.classList.add('loaded');
          setTimeout(() => {
            loader.style.display = 'none';
          }, 950);
        }
      }, 350);
    } else {
      if (percentEl) percentEl.textContent = progress;
      if (barEl) barEl.style.width = `${progress}%`;
    }
  }, 35);
}

// =================================================================
// 5. PRODUCT RENDERING & FILTERING
// =================================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  // Update dynamic filter counts
  const countAll = document.getElementById('countAll');
  const countSkincare = document.getElementById('countSkincare');
  const countFace = document.getElementById('countFace');
  const countLips = document.getElementById('countLips');
  const countHaircare = document.getElementById('countHaircare');

  if (countAll) countAll.textContent = PRODUCTS_DATA.length;
  if (countSkincare) countSkincare.textContent = PRODUCTS_DATA.filter(p => p.category === 'skincare').length;
  if (countFace) countFace.textContent = PRODUCTS_DATA.filter(p => p.category === 'face').length;
  if (countLips) countLips.textContent = PRODUCTS_DATA.filter(p => p.category === 'lips').length;
  if (countHaircare) countHaircare.textContent = PRODUCTS_DATA.filter(p => p.category === 'haircare').length;

  // Filter products
  let filtered = PRODUCTS_DATA.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  // Sort products
  if (activeSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update visible count text
  const countEl = document.getElementById('visibleProductsCount');
  if (countEl) countEl.textContent = filtered.length;

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const swatchesHtml = product.shades.map((shade, idx) => `
      <div class="swatch-dot ${idx === 0 ? 'active' : ''}" 
           style="background-color: ${shade.color};" 
           title="${shade.name}"
           onclick="event.stopPropagation(); selectCardSwatch(${product.id}, '${shade.name}', this)">
      </div>
    `).join('');

    return `
      <article class="product-card" data-id="${product.id}">
        ${product.badge ? `<span class="product-card-badge ${product.badgeClass}">${product.badge}</span>` : ''}
        
        <button class="wishlist-card-btn ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist(${product.id})" 
                aria-label="Save to Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="product-image-wrap" onclick="openQuickView(${product.id})">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <button class="quick-view-overlay-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">
            <i class="fa-solid fa-eye"></i> Quick View
          </button>
        </div>

        <div class="product-info">
          <span class="product-category-tag">${product.category.toUpperCase()}</span>
          <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
          
          <div class="product-rating">
            ${getStarRatingHtml(product.rating)}
            <span>(${product.reviewsCount} reviews)</span>
          </div>

          <div class="swatches-row">
            ${swatchesHtml}
          </div>

          <div class="product-pricing">
            <div class="price-box">
              <span class="current-price">Rs. ${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="old-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <button class="btn-card-add" onclick="quickAddProduct(${product.id})" aria-label="Add to Bag" title="Add to Bag">
              <i class="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function getStarRatingHtml(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}

function selectCardSwatch(productId, shadeName, el) {
  const card = el.closest('.product-card');
  if (!card) return;
  card.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
  showToast(`Selected: ${shadeName}`);
}

// =================================================================
// 6. CART OPERATIONS & DRAWER LOGIC
// =================================================================
function quickAddProduct(productId, customShade = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const shade = customShade || product.shades[0].name;
  const existingIndex = cart.findIndex(item => item.id === productId && item.shade === shade);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      shade: shade,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  openCartDrawer();
  showToast(`Added "${product.name.slice(0, 25)}..." to Bag!`);
}

function updateCartQty(index, change) {
  if (cart[index]) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeCartItem(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Removed from Bag`);
  }
}

function saveCart() {
  localStorage.setItem('shareef_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  // Badge counts
  const badgeEl = document.getElementById('cartBadgeCount');
  const mobileBadgeEl = document.getElementById('mobileBottomCartBadge');
  const drawerCountEl = document.getElementById('cartTotalItemsCount');
  const headerTotalEl = document.getElementById('cartHeaderTotal');

  if (badgeEl) badgeEl.textContent = totalItems;
  if (mobileBadgeEl) mobileBadgeEl.textContent = totalItems;
  if (drawerCountEl) drawerCountEl.textContent = totalItems;
  if (headerTotalEl) headerTotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;

  // Free shipping progress calculation (Free above 2500 PKR)
  const freeShippingThreshold = 2500;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const progressFill = document.getElementById('shippingProgressFill');
  const freeShippingMsg = document.getElementById('freeShippingMsg');

  if (progressFill) progressFill.style.width = `${progressPercent}%`;
  if (freeShippingMsg) {
    if (subtotal >= freeShippingThreshold) {
      freeShippingMsg.innerHTML = '🎉 <strong>Mubarak!</strong> You unlocked <strong>FREE Express Delivery</strong> across Pakistan!';
    } else {
      const remaining = freeShippingThreshold - subtotal;
      freeShippingMsg.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for <strong>FREE Delivery</strong>!`;
    }
  }

  // Delivery fee: 0 if >= 2500 or cart empty, else 200 PKR
  const deliveryFee = (subtotal >= freeShippingThreshold || subtotal === 0) ? 0 : 200;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  // Cart Drawer Items List
  const itemsContainer = document.getElementById('cartDrawerItems');
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>Your Beauty Bag is Empty</h4>
          <p>Explore our Pakistani authentic beauty favorites and add your essentials.</p>
          <a href="#collection" class="btn-luxury-primary" onclick="closeCartDrawer()">Start Shopping</a>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-shade"><i class="fa-solid fa-tag"></i> ${item.shade}</span>
            <span class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</span>
            <div class="cart-item-controls">
              <div class="qty-stepper">
                <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
              </div>
              <button class="cart-item-remove" onclick="removeCartItem(${idx})">
                <i class="fa-regular fa-trash-can"></i> Remove
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Bill summary texts
  const subtotalText = document.getElementById('cartSubtotalText');
  const deliveryText = document.getElementById('cartDeliveryText');
  const grandTotalText = document.getElementById('cartGrandTotalText');
  const discountRow = document.getElementById('discountSummaryRow');
  const discountText = document.getElementById('cartDiscountText');

  if (subtotalText) subtotalText.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (deliveryText) deliveryText.textContent = deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`;
  if (grandTotalText) grandTotalText.textContent = `Rs. ${grandTotal.toLocaleString()}`;

  if (discountRow && discountText) {
    if (appliedDiscount > 0) {
      discountRow.style.display = 'flex';
      discountText.textContent = `-Rs. ${discountAmount.toLocaleString()} (${appliedDiscount}% OFF)`;
    } else {
      discountRow.style.display = 'none';
    }
  }
}

// Drawer Toggles
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Promo Code Logic
function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  const feedback = document.getElementById('promoFeedback');
  if (!input || !feedback) return;

  const code = input.value.trim().toUpperCase();

  if (code === 'BEAUTY10') {
    appliedDiscount = 10;
    appliedCouponCode = code;
    feedback.style.color = 'var(--accent-success)';
    feedback.textContent = '✓ 10% Discount applied successfully!';
  } else if (code === 'SHAREEF20') {
    appliedDiscount = 20;
    appliedCouponCode = code;
    feedback.style.color = 'var(--accent-success)';
    feedback.textContent = '✓ VIP 20% Discount applied successfully!';
  } else {
    feedback.style.color = 'var(--accent-ruby)';
    feedback.textContent = '✕ Invalid promo code. Try BEAUTY10 or SHAREEF20';
    return;
  }
  updateCartUI();
}

// =================================================================
// 7. CHECKOUT ENGINE & ORDER PROCESSING
// =================================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your Bag is empty! Please add products before checkout.');
    return;
  }
  closeCartDrawer();

  const modal = document.getElementById('checkoutModalOverlay');
  const preview = document.getElementById('checkoutItemsPreview');
  const coSubtotal = document.getElementById('coSubtotal');
  const coDiscountRow = document.getElementById('coDiscountRow');
  const coDiscount = document.getElementById('coDiscount');
  const coShipping = document.getElementById('coShipping');
  const coGrandTotal = document.getElementById('coGrandTotal');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= 2500 ? 0 : 200;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  if (preview) {
    preview.innerHTML = cart.map(item => `
      <div class="co-item">
        <span>${item.qty}x ${item.name} (${item.shade})</span>
        <strong>Rs. ${(item.price * item.qty).toLocaleString()}</strong>
      </div>
    `).join('');
  }

  if (coSubtotal) coSubtotal.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (coShipping) coShipping.textContent = deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`;
  if (coGrandTotal) coGrandTotal.textContent = `Rs. ${grandTotal.toLocaleString()}`;

  if (coDiscountRow && coDiscount) {
    if (appliedDiscount > 0) {
      coDiscountRow.style.display = 'flex';
      coDiscount.textContent = `-Rs. ${discountAmount.toLocaleString()}`;
    } else {
      coDiscountRow.style.display = 'none';
    }
  }

  // Reset screen states
  document.getElementById('checkoutForm').style.display = 'grid';
  document.getElementById('orderSuccessScreen').style.display = 'none';

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const city = document.getElementById('custCity').value;
  const address = document.getElementById('custAddress').value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'COD';

  if (!name || !phone || !city || !address) {
    showToast('Please fill in all required delivery fields.');
    return;
  }

  const trackingId = `PK-SHF-${Math.floor(10000 + Math.random() * 90000)}`;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= 2500 ? 0 : 200;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  // Show Success Screen
  document.getElementById('checkoutForm').style.display = 'none';
  const successScreen = document.getElementById('orderSuccessScreen');
  successScreen.style.display = 'block';
  document.getElementById('successOrderId').textContent = trackingId;

  // Prepare WhatsApp message payload
  const itemsText = cart.map(i => `• ${i.qty}x ${i.name} (${i.shade}) - Rs. ${i.price * i.qty}`).join('%0A');
  const whatsappMsg = `*Assalam-o-Alaikum Shareef Cosmetics!*%0A%0A*New Order Placed:*%20${trackingId}%0A*Customer:*%20${encodeURIComponent(name)}%0A*Phone:*%20${encodeURIComponent(phone)}%0A*City:*%20${encodeURIComponent(city)}%0A*Address:*%20${encodeURIComponent(address)}%0A*Payment:*%20${paymentMethod}%0A%0A*Items:*%0A${itemsText}%0A%0A*Total Amount:*%20Rs.%20${grandTotal.toLocaleString()}%0A%0APlease confirm my dispatch. Shukriya!`;

  const waBtn = document.getElementById('successWhatsAppShareBtn');
  if (waBtn) {
    waBtn.onclick = () => {
      window.open(`https://wa.me/923001234567?text=${whatsappMsg}`, '_blank');
    };
  }

  // Clear Cart
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Order Placed Successfully!');
}

function placeWhatsAppOrderDirect() {
  if (cart.length === 0) {
    showToast('Your Bag is empty!');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= 2500 ? 0 : 200;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const itemsText = cart.map(i => `• ${i.qty}x ${i.name} (${i.shade}) - Rs. ${i.price * i.qty}`).join('%0A');
  const waMsg = `*Assalam-o-Alaikum Shareef Cosmetics!*%0A%0AI would like to order directly via WhatsApp:%0A%0A*Items in Bag:*%0A${itemsText}%0A%0A*Total:*%20Rs.%20${grandTotal.toLocaleString()}%0A%0APlease take my delivery address for Cash on Delivery.`;

  window.open(`https://wa.me/923001234567?text=${waMsg}`, '_blank');
}

// =================================================================
// 8. SHADE MATCHING QUIZ
// =================================================================
let quizAnswers = { tone: '', finish: '' };

function openShadeQuiz() {
  const modal = document.getElementById('shadeQuizModalOverlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    resetQuiz();
  }
}

function closeShadeQuiz() {
  const modal = document.getElementById('shadeQuizModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function selectQuizTone(tone) {
  quizAnswers.tone = tone;
  document.getElementById('quizStep1').classList.remove('active');
  document.getElementById('quizStep2').classList.add('active');
}

function selectQuizFinish(finish) {
  quizAnswers.finish = finish;
  document.getElementById('quizStep2').classList.remove('active');
  document.getElementById('quizStep3').classList.add('active');
  renderQuizRecommendation();
}

function resetQuiz() {
  quizAnswers = { tone: '', finish: '' };
  document.getElementById('quizStep1').classList.add('active');
  document.getElementById('quizStep2').classList.remove('active');
  document.getElementById('quizStep3').classList.remove('active');
}

function renderQuizRecommendation() {
  const title = document.getElementById('matchResultTitle');
  const subtitle = document.getElementById('matchResultSubtitle');
  const card = document.getElementById('recommendedBundleCard');

  let foundationShade = 'Warm Natural (MM02)';
  let powderShade = 'Natural Beige #93';
  let lipstickShade = '238 Dusty Rose';
  let routineName = 'Pakistani Golden Wheatish Radiance';

  if (quizAnswers.tone === 'fair') {
    foundationShade = 'Fair Ivory (MM01)';
    powderShade = 'Ivory #91';
    lipstickShade = '242 Pink Velvet';
    routineName = 'Porcelain Rose Radiance Routine';
  } else if (quizAnswers.tone === 'medium') {
    foundationShade = 'Golden Beige (MM03)';
    powderShade = 'Honey Wheat #95';
    lipstickShade = '215 Mitti Nude';
    routineName = 'Pakistani Classic Honey Olive Routine';
  } else if (quizAnswers.tone === 'dusky') {
    foundationShade = 'Warm Olive (MM04)';
    powderShade = 'Medium Olive #03';
    lipstickShade = '201 Ruby Surkh';
    routineName = 'Warm Bronze Sunlit Caramel Routine';
  }

  if (title) title.textContent = routineName;
  if (subtitle) subtitle.textContent = `Customized for ${quizAnswers.tone.toUpperCase()} skin tone with a ${quizAnswers.finish.toUpperCase()} finish.`;

  if (card) {
    card.innerHTML = `
      <div class="bundle-item-row">
        <img src="assets/images/products/masarrat_misbah_foundation.jpg" alt="Foundation" style="background:#FFF; object-fit:contain;">
        <div>
          <strong>Masarrat Misbah Silk Foundation</strong>
          <p class="text-muted text-xs">Recommended Shade: <span class="text-gold font-bold">${foundationShade}</span></p>
        </div>
      </div>
      <div class="bundle-item-row">
        <img src="assets/images/products/christine_compact_powder.jpg" alt="Powder" style="background:#FFF; object-fit:contain;">
        <div>
          <strong>Christine High Precision Powder</strong>
          <p class="text-muted text-xs">Recommended Shade: <span class="text-gold font-bold">${powderShade}</span></p>
        </div>
      </div>
      <div class="bundle-item-row">
        <img src="assets/images/products/medora_matte_lipstick.jpg" alt="Lipstick" style="background:#FFF; object-fit:contain;">
        <div>
          <strong>Medora Matte Lipstick</strong>
          <p class="text-muted text-xs">Recommended Shade: <span class="text-gold font-bold">${lipstickShade}</span></p>
        </div>
      </div>
    `;
  }

  const bundleBtn = document.getElementById('addQuizBundleToCartBtn');
  if (bundleBtn) {
    bundleBtn.onclick = () => {
      quickAddProduct(15, foundationShade);
      quickAddProduct(13, powderShade);
      quickAddProduct(8, lipstickShade);
      appliedDiscount = 15;
      appliedCouponCode = 'SHADEQUIZ15';
      updateCartUI();
      closeShadeQuiz();
      openCartDrawer();
      showToast('15% Quiz Bundle Discount Applied to Bag!');
    };
  }
}

// =================================================================
// 9. PRODUCT QUICK VIEW MODAL
// =================================================================
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModalOverlay');
  const container = document.getElementById('quickViewContent');

  let selectedShade = product.shades[0].name;

  container.innerHTML = `
    <div class="qv-image-side" style="background:#FFF; display:flex; align-items:center; justify-content:center;">
      <img src="${product.image}" alt="${product.name}" style="max-height:360px; object-fit:contain; background:#FFF;">
    </div>
    <div class="qv-details-side">
      <span class="product-category-tag">${product.category.toUpperCase()}</span>
      <h3 class="product-title" style="font-size: 1.35rem; margin-bottom: 8px;">${product.name}</h3>
      <div class="product-rating" style="margin-bottom: 14px;">
        ${getStarRatingHtml(product.rating)}
        <span>(${product.reviewsCount} Customer Reviews)</span>
      </div>
      
      <div class="product-pricing" style="border: none; padding: 0; margin-bottom: 16px;">
        <div class="price-box">
          <span class="current-price" style="font-size: 1.5rem;">Rs. ${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="old-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
      </div>

      <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 18px;">
        ${product.description}
      </p>

      <div style="margin-bottom: 20px;">
        <label style="display: block; font-size: 0.78rem; font-weight: 700; margin-bottom: 8px; color: var(--text-primary);">
          Select Option / Shade: <span id="qvShadeNameLabel" style="color: var(--accent-gold-dark);">${selectedShade}</span>
        </label>
        <div class="swatches-row" id="qvSwatchesRow">
          ${product.shades.map((s, idx) => `
            <div class="swatch-dot ${idx === 0 ? 'active' : ''}" 
                 style="background-color: ${s.color}; width: 26px; height: 26px;" 
                 title="${s.name}"
                 onclick="selectQuickViewSwatch('${s.name}', this)">
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background: var(--bg-secondary); padding: 12px; border-radius: var(--radius-sm); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 20px;">
        <i class="fa-solid fa-truck-fast text-gold"></i> 100% Genuine Guaranteed • Fast 2-3 Day Nationwide Delivery via TCS / Pakistan Post (COD Available)
      </div>

      <button class="btn-luxury-primary w-100" id="qvAddToCartBtn">
        <i class="fa-solid fa-bag-shopping"></i> Add to Beauty Bag
      </button>
    </div>
  `;

  document.getElementById('qvAddToCartBtn').onclick = () => {
    quickAddProduct(product.id, selectedShade);
    closeQuickView();
  };

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectQuickViewSwatch(shadeName, el) {
  document.querySelectorAll('#qvSwatchesRow .swatch-dot').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
  const label = document.getElementById('qvShadeNameLabel');
  if (label) label.textContent = shadeName;
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// =================================================================
// 10. WISHLIST OPERATIONS
// =================================================================
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from Wishlist');
  } else {
    wishlist.push(productId);
    showToast('Saved to Wishlist ❤️');
  }
  localStorage.setItem('shareef_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const count = wishlist.length;
  const badge = document.getElementById('wishlistBadgeCount');
  const countText = document.getElementById('wishlistCountText');
  if (badge) badge.textContent = count;
  if (countText) countText.textContent = count;
}

function openWishlistModal() {
  const modal = document.getElementById('wishlistModalOverlay');
  const container = document.getElementById('wishlistItemsContainer');

  const items = PRODUCTS_DATA.filter(p => wishlist.includes(p.id));

  if (container) {
    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-cart-state">
          <i class="fa-regular fa-heart"></i>
          <h4>No Saved Items</h4>
          <p>Click the heart icon on any cosmetic to save your personal favorites.</p>
        </div>
      `;
    } else {
      container.innerHTML = items.map(item => `
        <div class="bundle-item-row" style="padding: 12px 0;">
          <img src="${item.image}" alt="${item.name}" style="background:#FFF; object-fit:contain;">
          <div style="flex: 1;">
            <h4 style="font-size: 0.95rem; font-family: var(--font-serif);">${item.name}</h4>
            <span style="font-weight: 700; color: var(--text-primary); font-size: 0.9rem;">Rs. ${item.price.toLocaleString()}</span>
          </div>
          <button class="btn-card-add" onclick="quickAddProduct(${item.id}); closeWishlistModal();" title="Add to Bag">
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
          <button class="action-btn" onclick="toggleWishlist(${item.id}); openWishlistModal();" title="Remove" style="color: var(--accent-ruby);">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlistModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// =================================================================
// 11. LIVE SEARCH & FILTERING
// =================================================================
function initLiveSearch() {
  const searchToggle = document.getElementById('searchToggleBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('liveSearchInput');
  const searchDropdown = document.getElementById('searchResultsDropdown');

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', () => {
      searchOverlay.classList.toggle('active');
      if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
      }
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  }

  if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchDropdown.innerHTML = '';
        return;
      }

      const matches = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.shades.some(s => s.name.toLowerCase().includes(q))
      );

      if (matches.length === 0) {
        searchDropdown.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted);">No products found for "${q}"</div>`;
      } else {
        searchDropdown.innerHTML = matches.map(p => `
          <div class="search-result-item" onclick="openQuickView(${p.id}); searchOverlay.classList.remove('active');">
            <img src="${p.image}" alt="${p.name}" class="search-result-img" style="background:#FFF; object-fit:contain;">
            <div>
              <strong style="font-size: 0.9rem; display: block;">${p.name}</strong>
              <span style="font-size: 0.8rem; color: var(--accent-gold-dark);">Rs. ${p.price.toLocaleString()} • ${p.category.toUpperCase()}</span>
            </div>
          </div>
        `).join('');
      }
    });
  }
}

// =================================================================
// 12. EVENT LISTENERS
// =================================================================
function setupEventListeners() {
  const mobileOpen = document.getElementById('mobileMenuOpen');
  const mobileClose = document.getElementById('mobileMenuClose');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileDrawerOverlay');

  if (mobileOpen && mobileDrawer && mobileOverlay) {
    mobileOpen.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
    });
  }

  const closeDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
  };

  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
      const filter = link.getAttribute('data-filter');
      if (filter) setCategoryFilter(filter);
    });
  });

  // Category Filter Tabs
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Nav Filter links
  document.querySelectorAll('.desktop-nav .nav-link, .footer-links a').forEach(link => {
    link.addEventListener('click', () => {
      const filter = link.getAttribute('data-filter');
      if (filter) setCategoryFilter(filter);
    });
  });

  // Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer Toggles
  const cartBtn = document.getElementById('cartToggleBtn');
  const cartClose = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const mobileBottomCart = document.getElementById('mobileBottomCartBtn');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
  if (mobileBottomCart) mobileBottomCart.addEventListener('click', openCartDrawer);

  // Promo Code
  const promoBtn = document.getElementById('applyPromoBtn');
  if (promoBtn) promoBtn.addEventListener('click', applyPromoCode);

  // Checkout Modal
  const checkoutBtn = document.getElementById('proceedToCheckoutBtn');
  const closeCheckout = document.getElementById('closeCheckoutModalBtn');
  const checkoutForm = document.getElementById('checkoutForm');
  const cartWaBtn = document.getElementById('cartWhatsAppOrderBtn');
  const successContinueBtn = document.getElementById('successContinueShoppingBtn');

  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
  if (closeCheckout) closeCheckout.addEventListener('click', closeCheckoutModal);
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  if (cartWaBtn) cartWaBtn.addEventListener('click', placeWhatsAppOrderDirect);
  if (successContinueBtn) successContinueBtn.addEventListener('click', closeCheckoutModal);

  // Shade Quiz Triggers
  const shadeHeroBtn = document.getElementById('openShadeFinderHeroBtn');
  const shadeNavBtn = document.getElementById('openShadeFinderNavBtn');
  const shadeQuizBannerBtn = document.getElementById('openShadeFinderQuizBtn');
  const shadeMobileBtn = document.getElementById('openShadeFinderMobileBtn');
  const mobileBottomShade = document.getElementById('mobileBottomShadeBtn');
  const footerShade = document.getElementById('footerOpenShadeQuiz');
  const closeShadeBtn = document.getElementById('closeShadeQuizModalBtn');

  [shadeHeroBtn, shadeNavBtn, shadeQuizBannerBtn, shadeMobileBtn, mobileBottomShade, footerShade].forEach(btn => {
    if (btn) btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
      openShadeQuiz();
    });
  });

  if (closeShadeBtn) closeShadeBtn.addEventListener('click', closeShadeQuiz);

  // Quick View Close
  const closeQv = document.getElementById('closeQuickViewBtn');
  if (closeQv) closeQv.addEventListener('click', closeQuickView);

  // Wishlist Modal
  const wishlistToggle = document.getElementById('wishlistToggleBtn');
  const closeWishlist = document.getElementById('closeWishlistBtn');
  if (wishlistToggle) wishlistToggle.addEventListener('click', openWishlistModal);
  if (closeWishlist) closeWishlist.addEventListener('click', closeWishlistModal);

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMessage');
  if (newsletterForm && newsletterMsg) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterMsg.style.color = 'var(--accent-gold-dark)';
      newsletterMsg.textContent = '🎉 Mubarak! You are registered. Use code "SHAREEF20" for 20% off your first order.';
      newsletterForm.reset();
    });
  }

  // Scroll Header Shadow
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Initialize Search
  initLiveSearch();
}

function setCategoryFilter(category) {
  activeFilter = category;
  document.querySelectorAll('.filter-tab-btn').forEach(b => {
    if (b.getAttribute('data-category') === category) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderProducts();
}

// =================================================================
// 13. TOAST NOTIFICATION UTILITY
// =================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<i class="fa-solid fa-sparkles"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
