/**
 * SHAREEF COSMETICS - JAVASCRIPT APPLICATION CORE (v27.0)
 * 20 Iconic Pakistani Local Cosmetics & Skincare Products (White Background).
 */
console.log('%c SHAREEF COSMETICS v27.0 ACTIVE ', 'background: #111; color: #d4af37; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;');

// =================================================================
// 1. DEFAULT PRODUCTS DATASET (20 PAKISTANI COSMETIC FAVORITES)
// =================================================================
const DEFAULT_PRODUCTS_DATA = [
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
// 2. FULL-STACK DATABASE & REST API CLIENT (HYBRID CLOUD / GITHUB PAGES)
// =================================================================

// NOTE: All admin authentication is handled exclusively by the Python backend.
// No client-side password hashing or fallback is permitted.


const DEFAULT_CLOUD_API_URL = "https://shareefcosmetics.pythonanywhere.com";

// Safe JSON parser for localStorage items to prevent corrupt local data from breaking normal mode
function safeGetJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed !== null && parsed !== undefined ? parsed : fallback;
  } catch (e) {
    console.warn(`Safe JSON parse fallback for localStorage item "${key}":`, e);
    return fallback;
  }
}

// High-performance network fetch with strict timeout (prevents 2-minute mobile network hangs)
async function fetchWithTimeout(url, options = {}, timeoutMs = 3500) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);
    return res;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

const API = {
  getBaseUrl() {
    const customApiUrl = localStorage.getItem('shareef_cloud_api_url');
    if (customApiUrl && typeof customApiUrl === 'string' && customApiUrl.startsWith('http')) {
      if (customApiUrl.includes('onrender.com')) {
        localStorage.removeItem('shareef_cloud_api_url');
      } else {
        return customApiUrl.replace(/\/$/, '');
      }
    }

    if (typeof window !== 'undefined' && window.location) {
      if (window.location.protocol === 'file:') {
        // Opened as a local file — connect directly to the cloud backend
        return DEFAULT_CLOUD_API_URL;
      }
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        if (window.location.port === '5000') {
          return window.location.origin;
        }
        // Opened via local dev server (e.g. Live Server port 5500/8080/3000)
        return DEFAULT_CLOUD_API_URL;
      }
      if (window.location.hostname.includes('github.io')) {
        return DEFAULT_CLOUD_API_URL;
      }
      if (window.location.origin && window.location.origin.startsWith('http')) {
        return window.location.origin;
      }
    }
    return DEFAULT_CLOUD_API_URL;
  },
  isGitHubStatic() {
    const customApiUrl = localStorage.getItem('shareef_cloud_api_url');
    if (customApiUrl && customApiUrl === 'static') return true;
    return false;
  },
  getAuthToken() {
    return sessionStorage.getItem('shareef_admin_token') || '';
  },
  getAuthHeaders() {
    const token = this.getAuthToken();
    return {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
  },
  async parseResponse(res) {
    try {
      const text = await res.text();
      try {
        return JSON.parse(text);
      } catch (jsonErr) {
        if (!res.ok) {
          if (res.status === 404) {
            return { success: false, error: 'Endpoint not found (404).' };
          }
          if (res.status === 405) {
            return { success: false, error: 'Static host detected (405).' };
          }
          return { success: false, error: `Server error (${res.status}).` };
        }
        return { success: false, error: 'Invalid JSON response from server.' };
      }
    } catch (e) {
      return { success: false, error: e.message || 'Error reading server response' };
    }
  },
  async fetchProducts() {
    let prods = null;
    const baseUrl = this.getBaseUrl();

    // 1. Fetch Live Database with 5s timeout
    if (baseUrl && !this.isGitHubStatic()) {
      try {
        const res = await fetchWithTimeout(`${baseUrl}/api/products`, { cache: 'no-store' }, 5000);
        if (res.ok) {
          const json = await this.parseResponse(res);
          if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
            prods = json.data;
          }
        }
      } catch (e) {
        console.info('Live cloud backend sync fallback:', e.name || e.message);
      }
    }

    // 2. Fetch live products.json directly from repository with 2.5s timeout
    if (!prods) {
      try {
        const res = await fetchWithTimeout(`products.json?v=${Date.now()}`, { cache: 'no-store' }, 2500);
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json) && json.length > 0) {
            prods = json;
          }
        }
      } catch (e) {}
    }

    // 3. Fallback to cached catalog or hardcoded defaults
    if (!prods || prods.length === 0) {
      const cached = safeGetJSON('shareef_cached_catalog');
      if (cached && Array.isArray(cached) && cached.length > 0) {
        prods = cached;
      }
    }

    if (!prods || prods.length === 0) {
      prods = [...DEFAULT_PRODUCTS_DATA];
    }

    // 4. Merge any custom product overrides (stock status, custom items) stored locally
    const customList = safeGetJSON('shareef_custom_catalog');
    if (customList && Array.isArray(customList)) {
      customList.forEach(cp => {
        if (cp && cp.id !== undefined) {
          const existingIdx = prods.findIndex(p => p.id == cp.id);
          if (existingIdx !== -1) {
            if (cp.inStock !== undefined) prods[existingIdx].inStock = cp.inStock;
            if (cp.in_stock !== undefined) prods[existingIdx].in_stock = cp.in_stock;
            if (cp.price !== undefined) prods[existingIdx].price = cp.price;
          } else {
            prods.unshift(cp);
          }
        }
      });
    }

    // 5. Store resolved catalog in localStorage for instant 0ms startup on next load
    try {
      if (Array.isArray(prods) && prods.length > 0) {
        localStorage.setItem('shareef_cached_catalog', JSON.stringify(prods));
      }
    } catch (e) {}

    return prods;
  },
  async createProduct(productData) {
    const baseUrl = this.getBaseUrl();
    try {
      const res = await fetch(`${baseUrl}/api/products`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(productData)
      });
      const parsed = await this.parseResponse(res);
      if (parsed && parsed.success) {
        return parsed;
      }
      // Return the real error — do NOT silently fall back to local storage
      return { success: false, error: parsed.error || `Server rejected the request (HTTP ${res.status}). Product was NOT saved.` };
    } catch (e) {
      return { success: false, error: 'Network error — product was NOT saved to the database. Check your connection and ensure PythonAnywhere is running.' };
    }
  },
  async updateProduct(id, productData) {
    const baseUrl = this.getBaseUrl();
    try {
      const res = await fetch(`${baseUrl}/api/products/${id}`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(productData)
      });
      const parsed = await this.parseResponse(res);
      if (parsed && parsed.success) {
        // Only update in-memory cache after a confirmed server save
        const memIdx = PRODUCTS_DATA.findIndex(p => p.id == id);
        if (memIdx !== -1) {
          PRODUCTS_DATA[memIdx] = { ...PRODUCTS_DATA[memIdx], ...productData };
        }
        return parsed;
      }
      return { success: false, error: parsed.error || `Server error (HTTP ${res.status}). Changes were NOT saved.` };
    } catch (e) {
      return { success: false, error: 'Network error — changes were NOT saved to the database. Check your connection.' };
    }
  },
  async deleteProduct(id) {
    const baseUrl = this.getBaseUrl();
    try {
      const res = await fetch(`${baseUrl}/api/products/${id}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders()
      });
      const parsed = await this.parseResponse(res);
      if (parsed && parsed.success) return parsed;
      return { success: false, error: parsed.error || `Server error (HTTP ${res.status}). Product was NOT deleted.` };
    } catch (e) {
      return { success: false, error: 'Network error — product was NOT deleted from database. Check your connection.' };
    }
  },
  async loginAdmin(password) {
    // Authentication is handled exclusively server-side.
    // No client-side password hash comparison or fallback is allowed.
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(`${this.getBaseUrl()}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return await this.parseResponse(res);
    } catch (e) {
      if (e.name === 'AbortError') {
        return { success: false, error: 'Login request timed out. Please check your PythonAnywhere backend is running.' };
      }
      return { success: false, error: 'Cannot reach admin server. Ensure the PythonAnywhere backend is online and reachable.' };
    }
  },
  async verifyAdmin() {
    const token = this.getAuthToken();
    if (!token) return false;
    // Session token is always verified server-side — no client-side bypass.
    try {
      const res = await fetchWithTimeout(`${this.getBaseUrl()}/api/admin/verify`, {
        headers: this.getAuthHeaders()
      }, 5000);
      return res.ok;
    } catch (e) {
      return false; // Treat unreachable backend as unauthenticated
    }
  },
  async changeAdminPassword(newPassword) {
    // Password change is always server-side only.
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/admin/change-password`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ new_password: newPassword })
      });
      return await this.parseResponse(res);
    } catch (e) {
      return { success: false, error: 'Cannot reach server. Password was NOT updated. Check your connection.' };
    }
  },
  async checkHealth() {
    // Ping the backend /api/health endpoint and return connectivity status.
    try {
      const res = await fetchWithTimeout(`${this.getBaseUrl()}/api/health`, {}, 5000);
      if (res.ok) {
        const json = await this.parseResponse(res);
        return { online: true, db: json.db === 'connected', message: `Backend connected — DB: ${json.db}` };
      }
      return { online: false, message: `Backend returned HTTP ${res.status}` };
    } catch (e) {
      return { online: false, message: e.name === 'AbortError' ? 'Backend timed out (>5s)' : 'Backend unreachable' };
    }
  },
  async fetchOrders(status = 'all', search = '') {
    if (this.isGitHubStatic()) {
      let orders = safeGetJSON('shareef_orders_backup', []);
      if (status && status !== 'all') orders = orders.filter(o => o.status === status);
      if (search) {
        const q = search.toLowerCase();
        orders = orders.filter(o => 
          (o.id && o.id.toLowerCase().includes(q)) ||
          (o.customer && o.customer.name && o.customer.name.toLowerCase().includes(q)) ||
          (o.customer && o.customer.phone && o.customer.phone.includes(q))
        );
      }
      return orders;
    }
    const params = new URLSearchParams();
    if (status && status !== 'all') params.append('status', status);
    if (search) params.append('q', search);
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/orders?${params.toString()}`, {
        headers: this.getAuthHeaders()
      });
      if (res.ok) {
        const json = await this.parseResponse(res);
        return json.data || [];
      }
    } catch (e) {
      console.error('Error fetching orders:', e);
    }
    return safeGetJSON('shareef_orders_backup', []);
  },
  async updateOrderStatus(orderId, newStatus) {
    if (this.isGitHubStatic()) {
      let orders = safeGetJSON('shareef_orders_backup', []);
      const idx = orders.findIndex(o => o.id === orderId);
      if (idx !== -1) {
        orders[idx].status = newStatus;
        localStorage.setItem('shareef_orders_backup', JSON.stringify(orders));
        return { success: true, data: orders[idx] };
      }
      return { success: false, error: 'Order not found' };
    }
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/orders/${orderId}/status`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ status: newStatus })
      });
      return await this.parseResponse(res);
    } catch (e) {
      return { success: false, error: e.message || 'Network error' };
    }
  },
  async deleteOrder(orderId) {
    if (this.isGitHubStatic()) {
      let orders = safeGetJSON('shareef_orders_backup', []);
      orders = orders.filter(o => o.id !== orderId);
      localStorage.setItem('shareef_orders_backup', JSON.stringify(orders));
      return { success: true, message: 'Order deleted' };
    }
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/orders/${orderId}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders()
      });
      return await this.parseResponse(res);
    } catch (e) {
      return { success: false, error: e.message || 'Network error' };
    }
  },
  async createOrder(orderPayload) {
    // Always store in local backup as well
    try {
      let orders = safeGetJSON('shareef_orders_backup', []);
      orders.unshift({ ...orderPayload, id: 'SC-' + Date.now() });
      localStorage.setItem('shareef_orders_backup', JSON.stringify(orders));
    } catch(e) {}

    if (this.isGitHubStatic()) {
      return { success: true, orderId: 'SC-' + Date.now() };
    }
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      return await this.parseResponse(res);
    } catch (e) {
      return { success: true, orderId: 'SC-' + Date.now() };
    }
  },
  async fetchAdminStats() {
    if (!this.getAuthToken()) {
      const prods = (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA)) ? PRODUCTS_DATA : [];
      return {
        totalProducts: prods.length,
        skincareCount: prods.filter(p => p.category === 'skincare').length,
        faceCount: prods.filter(p => p.category === 'face' || p.category === 'lips').length,
        haircareCount: prods.filter(p => p.category === 'haircare').length,
        totalOrders: 0,
        pendingOrders: 0,
        dispatchedOrders: 0,
        revenue: 0
      };
    }
    if (this.isGitHubStatic()) {
      const prods = await this.fetchProducts();
      const orders = await this.fetchOrders();
      const rev = orders.reduce((sum, o) => sum + Number(o.grandTotal || 0), 0);
      return {
        totalProducts: prods.length,
        skincareCount: prods.filter(p => p.category === 'skincare').length,
        faceCount: prods.filter(p => p.category === 'face' || p.category === 'lips').length,
        haircareCount: prods.filter(p => p.category === 'haircare').length,
        totalOrders: orders.length,
        pendingOrders: orders.filter(o => o.status === 'pending' || !o.status).length,
        dispatchedOrders: orders.filter(o => o.status === 'dispatched').length,
        revenue: rev
      };
    }
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/admin/stats`, {
        headers: this.getAuthHeaders()
      });
      if (res.ok) {
        const json = await this.parseResponse(res);
        return json.stats;
      }
    } catch (e) {}
    return null;
  },
  async resetDefaultProducts() {
    if (this.isGitHubStatic()) {
      localStorage.removeItem('shareef_custom_catalog');
      return { success: true, message: 'Reset to defaults' };
    }
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/admin/reset-defaults`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });
      return await this.parseResponse(res);
    } catch (e) {
      localStorage.removeItem('shareef_custom_catalog');
      return { success: true, message: 'Reset locally' };
    }
  },
  async fetchSettings() {
    if (this.isGitHubStatic()) {
      const saved = localStorage.getItem('shareef_store_settings');
      if (saved) {
        try { return JSON.parse(saved); } catch(e){}
      }
      return { whatsapp: '923024317078', email: 'care@shareefcosmetics.pk' };
    }
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/settings`);
      if (res.ok) {
        const json = await this.parseResponse(res);
        return json.data;
      }
    } catch(e) {}
    return { whatsapp: '923024317078', email: 'care@shareefcosmetics.pk' };
  },
  async saveSettings(settings) {
    localStorage.setItem('shareef_store_settings', JSON.stringify(settings));
    if (this.isGitHubStatic()) {
      return { success: true, message: 'Settings saved' };
    }
    try {
      const res = await fetch(`${this.getBaseUrl()}/api/settings`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(settings)
      });
      return await this.parseResponse(res);
    } catch (e) {
      return { success: true, message: 'Saved locally' };
    }
  }
};

const CURRENT_APP_VERSION = '27.0';

// Automatic cache invalidation for older app versions stored in Chrome localStorage
(function checkLocalStorageVersion() {
  try {
    const customApiUrl = localStorage.getItem('shareef_cloud_api_url');
    if (customApiUrl && (customApiUrl.includes('onrender.com') || !customApiUrl.startsWith('http'))) {
      localStorage.removeItem('shareef_cloud_api_url');
    }
    const savedVer = localStorage.getItem('shareef_app_version');
    if (savedVer !== CURRENT_APP_VERSION) {
      localStorage.removeItem('shareef_cached_catalog');
      localStorage.removeItem('shareef_cloud_api_url');
      localStorage.setItem('shareef_app_version', CURRENT_APP_VERSION);
    }
  } catch (e) {}
})();

function getInitialProducts() {
  try {
    const cached = localStorage.getItem('shareef_cached_catalog');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {}
  return [...DEFAULT_PRODUCTS_DATA];
}

let PRODUCTS_DATA = getInitialProducts();

function getCatalogFingerprint(list) {
  if (!Array.isArray(list)) return '';
  return list.map(p => `${p.id}:${p.name || ''}:${p.price}:${p.originalPrice || ''}:${p.image || ''}:${p.badge || ''}:${p.inStock !== false && p.in_stock !== 0 ? 1 : 0}:${p.reviewsCount || 0}`).join('|');
}

let lastCatalogFingerprint = getCatalogFingerprint(PRODUCTS_DATA);
let isSyncingProducts = false;

async function syncProductsFromDatabase() {
  if (isSyncingProducts) return;
  isSyncingProducts = true;
  try {
    const latest = await API.fetchProducts();
    if (Array.isArray(latest) && latest.length > 0) {
      const newFingerprint = getCatalogFingerprint(latest);
      // Only re-render if data has genuinely changed to avoid DOM thrashing & mobile stutter
      if (newFingerprint !== lastCatalogFingerprint || latest.length !== PRODUCTS_DATA.length) {
        PRODUCTS_DATA = latest;
        lastCatalogFingerprint = newFingerprint;
        renderProducts();
        if (typeof updateAdminStats === 'function') updateAdminStats();
        if (typeof renderAdminProductsTable === 'function') renderAdminProductsTable();
      }
    }
  } catch (err) {
    console.warn('Product sync warning:', err);
  } finally {
    isSyncingProducts = false;
  }
}

let cart = safeGetJSON('shareef_cart', []);
let wishlist = safeGetJSON('shareef_wishlist', []);

let appliedDiscount = 0; // percentage
let appliedCouponCode = '';
let activeFilter = 'all';
let activeSort = 'featured';

// =================================================================
// 3. INITIALIZATION ON DOM READY & REAL-TIME MULTI-DEVICE SYNC
// =================================================================
let appInitialized = false;

function initApp() {
  if (appInitialized) return;
  appInitialized = true;

  initEntryLoader();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  initCategorySlider();
  initDrawerCategorySearch();
  initAdminDashboard();
  initReviewSystem();

  // Fetch live database products asynchronously in background
  syncProductsFromDatabase().catch(err => {
    console.warn('Initial product sync:', err);
  });

  // Multi-device real-time sync: Auto-refresh catalog when tab becomes active (with 10s cooldown)
  let lastVisibilitySync = 0;
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      const now = Date.now();
      if (now - lastVisibilitySync > 10000) {
        lastVisibilitySync = now;
        syncProductsFromDatabase();
      }
    }
  });

  // Background live polling sync every 60 seconds (only when tab is actively visible)
  setInterval(() => {
    if (document.visibilityState === 'visible') {
      syncProductsFromDatabase();
    }
  }, 60000);
}

// Immediate execution & readyState check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Also trigger immediate loader start in case DOM is already ready
setTimeout(() => {
  if (!appInitialized) initApp();
}, 50);

// =================================================================
// 4. ENTRY LOADING ANIMATION ORCHESTRATION & FAILSAFE
// =================================================================
let loaderAnimationDone = false;

function finishLoader() {
  if (loaderAnimationDone) return;
  loaderAnimationDone = true;

  const loader = document.getElementById('entry-loader');
  const percentEl = document.getElementById('loaderPercent');
  const barEl = document.getElementById('loaderProgressBar');

  if (percentEl) percentEl.textContent = '100';
  if (barEl) barEl.style.width = '100%';

  setTimeout(() => {
    if (loader) {
      loader.classList.add('loaded');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 700);
    }
  }, 200);
}

function initEntryLoader() {
  const loader = document.getElementById('entry-loader');
  const percentEl = document.getElementById('loaderPercent');
  const barEl = document.getElementById('loaderProgressBar');

  if (!loader || loaderAnimationDone) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 8;
    if (progress >= 100) {
      clearInterval(interval);
      finishLoader();
    } else {
      if (percentEl) percentEl.textContent = progress;
      if (barEl) barEl.style.width = `${progress}%`;
    }
  }, 25);

  // Absolute failsafe timeout: Guarantee screen unlocks within 900ms under any condition
  setTimeout(() => {
    clearInterval(interval);
    finishLoader();
  }, 900);
}

// =================================================================
// 5. PRODUCT RENDERING & FILTERING
// =================================================================
// 4 Days in milliseconds for automatic New Arrival lifespan (96 hours)
const FOUR_DAYS_MS = 4 * 24 * 60 * 60 * 1000;

function isNewArrival(product) {
  if (!product) return false;

  // 1. Check createdAt / created_at timestamp from database or payload
  const dateVal = product.createdAt || product.created_at || product.publishDate;
  if (dateVal) {
    const createdTime = new Date(dateVal).getTime();
    if (!isNaN(createdTime)) {
      const ageMs = Date.now() - createdTime;
      return ageMs >= 0 && ageMs <= FOUR_DAYS_MS;
    }
  }

  // 2. If product ID is a timestamp generated within 4 days
  if (typeof product.id === 'number' && product.id > 1700000000000) {
    const ageMs = Date.now() - product.id;
    return ageMs >= 0 && ageMs <= FOUR_DAYS_MS;
  }

  // 3. Fallback for explicit badge if recently set
  if (product.badge && (product.badge.toLowerCase().includes('new arrival') || product.badge.toLowerCase() === 'new')) {
    return true;
  }

  return false;
}

function matchesCategory(product, cat) {
  if (!cat || cat === 'all') return true;
  const pCat = (product.category || '').toLowerCase();
  if (pCat === cat.toLowerCase()) return true;

  // Special Category: New Arrivals (Automatic 4-Day Lifespan)
  if (cat === 'new-arrivals' || cat === 'new' || cat === 'newarrival' || cat === 'newarrivals') {
    return isNewArrival(product);
  }

  const text = ((product.name || '') + ' ' + (product.description || '') + ' ' + (product.details || '') + ' ' + pCat).toLowerCase();
  
  if (cat === 'cleanser') {
    return pCat === 'cleanser' || text.includes('face wash') || text.includes('cleanser') || text.includes('cleansing');
  }
  if (cat === 'serum') {
    return pCat === 'serum' || text.includes('serum') || text.includes('booster') || text.includes('essence') || text.includes('lightening');
  }
  if (cat === 'moisturizer') {
    return pCat === 'moisturizer' || text.includes('moisturiz') || text.includes('cold cream') || text.includes('skin cream') || text.includes('day cream') || text.includes('glow and lovely');
  }
  if (cat === 'sunblock') {
    return pCat === 'sunblock' || text.includes('sunblock') || text.includes('sunscreen') || text.includes('spf');
  }
  if (cat === 'nightcream') {
    return pCat === 'nightcream' || text.includes('night') || text.includes('anti-aging') || text.includes('whitening cream');
  }
  if (cat === 'brightening') {
    return pCat === 'brightening' || text.includes('bright') || text.includes('whitening') || text.includes('glow') || text.includes('radiance') || text.includes('spot-less');
  }
  if (cat === 'toner') {
    return pCat === 'toner' || text.includes('toner') || text.includes('rose water') || text.includes('astringent');
  }
  if (cat === 'facemask') {
    return pCat === 'facemask' || text.includes('mask') || text.includes('mud') || text.includes('clay') || text.includes('ubtan') || text.includes('husn-e-yousuf');
  }
  if (cat === 'sheetmask') {
    return pCat === 'sheetmask' || text.includes('sheet mask') || text.includes('patch');
  }
  if (cat === 'scrub') {
    return pCat === 'scrub' || text.includes('scrub') || text.includes('exfoliat') || text.includes('polisher');
  }
  if (cat === 'facialoil') {
    return pCat === 'facialoil' || (text.includes('facial oil') || text.includes('face oil') || text.includes('elixir'));
  }
  if (cat === 'acnecare') {
    return pCat === 'acnecare' || text.includes('acne') || text.includes('neem') || text.includes('pimple') || text.includes('purifying');
  }
  if (cat === 'darkspots') {
    return pCat === 'darkspots' || text.includes('dark spot') || text.includes('spot-less') || text.includes('pigmentation') || text.includes('melasma');
  }
  if (cat === 'eyecream') {
    return pCat === 'eyecream' || text.includes('eye cream') || text.includes('under eye') || text.includes('dark circle');
  }
  if (cat === 'ubtan') {
    return pCat === 'ubtan' || text.includes('ubtan') || text.includes('husn-e-yousuf') || text.includes('herbal paste') || text.includes('turmeric');
  }
  if (cat === 'bleachcream') {
    return pCat === 'bleachcream' || text.includes('bleach');
  }
  if (cat === 'skinpolisher') {
    return pCat === 'skinpolisher' || text.includes('polisher') || text.includes('dermacos');
  }
  if (cat === 'facemist') {
    return pCat === 'facemist' || text.includes('rose water') || text.includes('ark-e-gulab') || text.includes('mist');
  }
  if (cat === 'micellar') {
    return pCat === 'micellar' || text.includes('micellar') || text.includes('makeup remover');
  }
  if (cat === 'lipcare') {
    return pCat === 'lipcare' || text.includes('lip balm') || text.includes('lip care') || text.includes('lip scrub') || pCat === 'lips';
  }
  if (cat === 'bbcream') {
    return pCat === 'bbcream' || text.includes('bb cream') || text.includes('cc cream');
  }
  if (cat === 'foundation') {
    return pCat === 'foundation' || text.includes('foundation') || text.includes('complexion') || text.includes('silk foundation');
  }
  if (cat === 'compactpowder') {
    return pCat === 'compactpowder' || text.includes('compact') || text.includes('powder') || text.includes('oil-control');
  }
  if (cat === 'lipstick') {
    return pCat === 'lipstick' || text.includes('lipstick') || text.includes('velvet') || text.includes('medora') || text.includes('swiss miss') || pCat === 'lips';
  }
  if (cat === 'liptint') {
    return pCat === 'liptint' || text.includes('tint') || text.includes('gloss');
  }
  if (cat === 'handfoot') {
    return pCat === 'handfoot' || text.includes('hand') || text.includes('foot') || text.includes('feet');
  }
  if (cat === 'bodylotion') {
    return pCat === 'bodylotion' || text.includes('body lotion') || text.includes('body butter') || text.includes('lotion');
  }
  if (cat === 'hairoil') {
    return pCat === 'hairoil' || (text.includes('hair') && text.includes('oil')) || text.includes('mughziat');
  }
  if (cat === 'haircare') {
    return pCat === 'haircare' || text.includes('hair') || text.includes('shampoo') || text.includes('conditioner') || text.includes('mughziat');
  }
  if (cat === 'menscare') {
    return pCat === 'menscare' || text.includes('men') || text.includes('grooming') || text.includes('shave');
  }
  if (cat === 'skincare') {
    return pCat === 'skincare' || text.includes('cream') || text.includes('face') || text.includes('skin') || text.includes('lotion');
  }
  if (cat === 'face') {
    return pCat === 'face' || text.includes('foundation') || text.includes('powder') || text.includes('eyeshadow') || text.includes('highlighter');
  }
  if (cat === 'lips') {
    return pCat === 'lips' || text.includes('lipstick') || text.includes('lip');
  }

  return false;
}

function updateCategoryCounts() {
  const categoryIds = [
    'all', 'new-arrivals', 'cleanser', 'serum', 'moisturizer', 'sunblock', 'nightcream', 'brightening',
    'toner', 'facemask', 'sheetmask', 'scrub', 'facialoil', 'acnecare', 'darkspots',
    'eyecream', 'ubtan', 'bleachcream', 'skinpolisher', 'facemist', 'micellar',
    'lipcare', 'bbcream', 'foundation', 'compactpowder', 'lipstick', 'liptint',
    'handfoot', 'bodylotion', 'hairoil', 'haircare', 'menscare', 'skincare', 'face', 'lips'
  ];

  categoryIds.forEach(cat => {
    const count = cat === 'all' ? PRODUCTS_DATA.length : PRODUCTS_DATA.filter(p => matchesCategory(p, cat)).length;
    // Format slug e.g. 'new-arrivals' -> 'NewArrivals', 'cleanser' -> 'Cleanser'
    const camel = cat.replace(/-([a-z])/g, g => g[1].toUpperCase());
    const cap = camel.charAt(0).toUpperCase() + camel.slice(1);
    
    // Update category slider badge
    const countEl = document.getElementById(`count${cap}`);
    if (countEl) countEl.textContent = count;

    // Update drawer badge
    const drawerEl = document.getElementById(`drawerCount${cap}`);
    if (drawerEl) drawerEl.textContent = count;
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  // Update dynamic count badges for all categories
  updateCategoryCounts();

  // Filter products
  let filtered = PRODUCTS_DATA.filter(item => {
    return matchesCategory(item, activeFilter);
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
    const isInStock = product.inStock !== false && product.in_stock !== 0 && product.inStock !== 0;
    const validCardShades = (product.shades || []).filter(s => s && s.name && s.name !== 'Standard Pack' && !s.name.toLowerCase().startsWith('none'));
    const swatchesHtml = validCardShades.length > 0 ? `
      <div class="swatches-row">
        ${validCardShades.map((shade, idx) => `
          <div class="swatch-dot ${idx === 0 ? 'active' : ''}" 
               style="background-color: ${shade.color};" 
               title="${shade.name}"
               onclick="event.stopPropagation(); selectCardSwatch(${product.id}, '${shade.name.replace(/'/g, "\\'")}', this)">
          </div>
        `).join('')}
      </div>
    ` : '';

    return `
      <article class="product-card ${!isInStock ? 'is-out-of-stock out-of-stock' : ''}" data-id="${product.id}" data-selected-shade="${validCardShades.length > 0 ? validCardShades[0].name : 'None'}">
        ${product.badge ? `<span class="product-card-badge ${product.badgeClass}">${product.badge}</span>` : ''}
        
        <button class="wishlist-card-btn ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist(${product.id})" 
                aria-label="Save to Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="product-image-wrap" onclick="openQuickView(${product.id})">
          <img src="${product.image}" alt="${product.name}" class="product-img ${!isInStock ? 'img-grayscale' : ''}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='assets/images/hero_banner.jpg';">
          ${!isInStock ? `<div class="out-of-stock-banner-ribbon">OUT OF STOCK</div>` : ''}
          <button class="quick-view-overlay-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">
            <i class="fa-solid fa-eye"></i> Options & Quick View
          </button>
        </div>

        <div class="product-info">
          <span class="product-category-tag">${product.category.toUpperCase()}</span>
          <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
          
          <div class="product-rating">
            ${getStarRatingHtml(product.rating)}
            <span>(${product.reviewsCount} reviews)</span>
          </div>

          ${swatchesHtml}

          <div class="product-pricing">
            <div class="price-box">
              <span class="current-price">Rs. ${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="old-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <button class="btn-card-add ${!isInStock ? 'btn-out-of-stock' : ''}" 
                    ${!isInStock ? 'disabled title="Out of Stock"' : `onclick="event.stopPropagation(); quickAddFromCard(${product.id}, this)" aria-label="Add to Bag" title="Add to Bag"`}>
              <i class="fa-solid ${!isInStock ? 'fa-ban' : 'fa-bag-shopping'}"></i>
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
  card.dataset.selectedShade = shadeName;
  showToast(shadeName === 'None' ? 'Selected: No Shade (Default)' : `Selected Shade: ${shadeName}`);
}

function quickAddFromCard(productId, btnEl) {
  const card = btnEl ? btnEl.closest('.product-card') : null;
  const shade = card && card.dataset.selectedShade ? card.dataset.selectedShade : 'None';
  quickAddProduct(productId, shade, 'Standard', 1);
}

// =================================================================
// 6. CART OPERATIONS & DRAWER LOGIC
// =================================================================
function animateCartIcon() {
  const badgeEls = [
    document.getElementById('cartBadgeCount'),
    document.getElementById('mobileBottomCartBadge')
  ];
  const buttonEls = [
    document.getElementById('cartToggleBtn'),
    document.getElementById('mobileBottomCartBtn')
  ];

  badgeEls.forEach(el => {
    if (!el) return;
    el.classList.remove('animate-bounce');
    void el.offsetWidth; // force reflow
    el.classList.add('animate-bounce');
  });

  buttonEls.forEach(el => {
    if (!el) return;
    el.classList.remove('animate-shake');
    void el.offsetWidth; // force reflow
    el.classList.add('animate-shake');
  });

  setTimeout(() => {
    badgeEls.forEach(el => el && el.classList.remove('animate-bounce'));
    buttonEls.forEach(el => el && el.classList.remove('animate-shake'));
  }, 700);
}

function quickAddProduct(productId, customShade, customVolume, units = 1, customPrice = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  if (product.inStock === false || product.in_stock === 0 || product.inStock === 0) {
    showToast('✕ Sorry, this product is currently Out of Stock.');
    return;
  }

  const shade = customShade || 'None';
  const volume = customVolume || 'Standard';
  const addUnits = units > 0 ? units : 1;
  const itemPrice = customPrice !== null && !isNaN(customPrice) && customPrice > 0 ? Number(customPrice) : Number(product.price);

  const existingIndex = cart.findIndex(item => 
    item.id === productId && 
    (item.shade || 'None') === shade && 
    (item.volume || 'Standard') === volume
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty += addUnits;
    cart[existingIndex].price = itemPrice;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: itemPrice,
      image: product.image,
      shade: shade,
      volume: volume,
      qty: addUnits
    });
  }

  saveCart();
  updateCartUI();
  animateCartIcon();
  openCartDrawer();
  
  const shadeNotice = shade && shade !== 'None' && !shade.startsWith('None') ? ` (${shade})` : '';
  const volNotice = volume && volume !== 'Standard' && volume !== 'None' ? ` [${volume}]` : '';
  showToast(`Added ${addUnits > 1 ? addUnits + 'x ' : ''}"${product.name.slice(0, 22)}..."${shadeNotice}${volNotice} to Bag (Rs. ${itemPrice.toLocaleString()})!`);
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
      freeShippingMsg.innerHTML = '🎉 <strong>Mubarak!</strong> You unlocked <strong>FREE Delivery</strong> (FREE in Lahore & on orders over Rs. 2,500)!';
    } else {
      const remaining = freeShippingThreshold - subtotal;
      freeShippingMsg.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for <strong>FREE Delivery</strong> (FREE in Lahore)!`;
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
      itemsContainer.innerHTML = cart.map((item, idx) => {
        const displayShade = item.shade || 'None';
        const displayVolume = item.volume || 'Standard';

        return `
          <div class="cart-item" style="animation-delay: ${idx * 0.05}s;">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='assets/images/hero_banner.jpg';">
            <div class="cart-item-details">
              <h4 class="cart-item-title">${item.name}</h4>
              <div class="cart-item-meta-tags">
                <span class="cart-item-tag tag-shade"><i class="fa-solid fa-palette"></i> Shade: ${displayShade}</span>
                <span class="cart-item-tag tag-volume"><i class="fa-solid fa-flask"></i> Size: ${displayVolume}</span>
              </div>
              <span class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</span>
              <div class="cart-item-controls">
                <div class="qty-stepper">
                  <button class="qty-btn" onclick="updateCartQty(${idx}, -1)" aria-label="Decrease quantity">-</button>
                  <span class="qty-val">${item.qty}</span>
                  <button class="qty-btn" onclick="updateCartQty(${idx}, 1)" aria-label="Increase quantity">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeCartItem(${idx})" aria-label="Remove item">
                  <i class="fa-regular fa-trash-can"></i> Remove
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
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

  const couponRates = {
    'GLOW5': 5,
    'SILK10': 10,
    'VELVET15': 15
  };

  if (couponRates[code]) {
    appliedDiscount = couponRates[code];
    appliedCouponCode = code;
    feedback.style.color = 'var(--accent-success)';
    feedback.textContent = `✓ ${appliedDiscount}% Discount applied successfully!`;
  } else {
    feedback.style.color = 'var(--accent-ruby)';
    feedback.textContent = '✕ Invalid or expired promo code';
    return;
  }
  updateCartUI();
}

// =================================================================
// 7. CHECKOUT ENGINE & ORDER PROCESSING
// =================================================================
function updateCheckoutTotals() {
  const coSubtotal = document.getElementById('coSubtotal');
  const coDiscountRow = document.getElementById('coDiscountRow');
  const coDiscount = document.getElementById('coDiscount');
  const coShipping = document.getElementById('coShipping');
  const coGrandTotal = document.getElementById('coGrandTotal');
  const citySelect = document.getElementById('custCity');
  const selectedCity = citySelect ? citySelect.value.trim().toLowerCase() : '';

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const isFreeDelivery = (selectedCity === 'lahore') && (subtotal >= 2500);
  const deliveryFee = (isFreeDelivery || subtotal === 0) ? 0 : 200;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  if (coSubtotal) coSubtotal.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (coShipping) {
    if (deliveryFee === 0 && subtotal > 0) {
      coShipping.textContent = 'FREE (Lahore 2,500+)';
      coShipping.style.color = 'var(--accent-success)';
      coShipping.style.fontWeight = 'bold';
    } else {
      coShipping.textContent = `Rs. ${deliveryFee}`;
      coShipping.style.color = '';
      coShipping.style.fontWeight = '';
    }
  }
  if (coGrandTotal) coGrandTotal.textContent = `Rs. ${grandTotal.toLocaleString()}`;

  if (coDiscountRow && coDiscount) {
    if (appliedDiscount > 0) {
      coDiscountRow.style.display = 'flex';
      coDiscount.textContent = `-Rs. ${discountAmount.toLocaleString()}`;
    } else {
      coDiscountRow.style.display = 'none';
    }
  }
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your Bag is empty! Please add products before checkout.');
    return;
  }
  closeCartDrawer();

  const modal = document.getElementById('checkoutModalOverlay');
  const preview = document.getElementById('checkoutItemsPreview');

  if (preview) {
    preview.innerHTML = cart.map(item => {
      const shadeStr = item.shade && item.shade !== 'None' && !item.shade.startsWith('None') ? `Shade: ${item.shade}` : 'Shade: None';
      const volStr = item.volume && item.volume !== 'Standard' && item.volume !== 'None' ? item.volume : 'Standard';
      return `
        <div class="co-item">
          <span>${item.qty}x ${item.name} <small class="text-muted">(${shadeStr} | ${volStr})</small></span>
          <strong>Rs. ${(item.price * item.qty).toLocaleString()}</strong>
        </div>
      `;
    }).join('');
  }

  // Bind city selection listener to recalculate delivery fee
  const citySelect = document.getElementById('custCity');
  if (citySelect && !citySelect.dataset.listenerAttached) {
    citySelect.addEventListener('change', updateCheckoutTotals);
    citySelect.dataset.listenerAttached = 'true';
  }

  updateCheckoutTotals();

  // Reset screen states
  document.getElementById('checkoutForm').style.display = 'grid';
  document.getElementById('orderSuccessScreen').style.display = 'none';

  // Reset payment selection to COD
  const codRadio = document.querySelector('input[name="paymentMethod"][value*="COD"]');
  if (codRadio) codRadio.checked = true;
  const jazzBox = document.getElementById('jazzcashAccountBox');
  if (jazzBox) jazzBox.style.display = 'none';
  document.querySelectorAll('.payment-option-card').forEach(card => card.classList.remove('active'));
  const codCard = codRadio?.closest('.payment-option-card');
  if (codCard) codCard.classList.add('active');

  // Reset receipt upload state
  const receiptFile = document.getElementById('paymentReceiptFile');
  if (receiptFile) receiptFile.value = '';
  const receiptBase64 = document.getElementById('paymentReceiptBase64');
  if (receiptBase64) receiptBase64.value = '';
  const receiptPreview = document.getElementById('receiptPreviewWrap');
  if (receiptPreview) receiptPreview.style.display = 'none';
  const receiptPrompt = document.getElementById('receiptUploadPrompt');
  if (receiptPrompt) receiptPrompt.style.display = 'flex';

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

async function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const city = document.getElementById('custCity').value;
  const address = document.getElementById('custAddress').value.trim();
  let paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Cash on Delivery (COD)';
  const receiptImage = document.getElementById('paymentReceiptBase64')?.value || null;

  if (!name || !phone || !city || !address) {
    showToast('Please fill in all required delivery fields.');
    return;
  }

  // Mandatory Receipt Screenshot for JazzCash Online Payment
  if (paymentMethod.includes('JazzCash')) {
    if (!receiptImage) {
      showToast('⚠️ Please attach your payment screenshot before placing order.');
      const uploadBox = document.getElementById('receiptUploadBox');
      if (uploadBox) {
        uploadBox.style.borderColor = 'var(--accent-ruby)';
        uploadBox.style.background = '#FFF5F5';
        uploadBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          uploadBox.style.borderColor = '';
          uploadBox.style.background = '';
        }, 3500);
      }
      return;
    }
    paymentMethod += ' (Screenshot Attached)';
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const isFreeDelivery = (city.trim().toLowerCase() === 'lahore') && (subtotal >= 2500);
  const deliveryFee = isFreeDelivery ? 0 : 200;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const orderPayload = {
    customer: {
      name,
      phone,
      city,
      address
    },
    items: [...cart],
    subtotal,
    deliveryFee,
    discount: discountAmount,
    grandTotal,
    paymentMethod,
    receiptImage: receiptImage || null,
    notes: appliedCouponCode ? `Coupon: ${appliedCouponCode}` : ''
  };

  const submitBtn = e.target.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Order...';
  }

  // Post directly to SQLite Database via Backend API
  const apiRes = await API.createOrder(orderPayload);
  const trackingId = apiRes && apiRes.orderId ? apiRes.orderId : `PK-SHF-${Math.floor(10000 + Math.random() * 90000)}`;

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Complete Order';
  }

  // Show Success Screen
  document.getElementById('checkoutForm').style.display = 'none';
  const successScreen = document.getElementById('orderSuccessScreen');
  successScreen.style.display = 'block';
  document.getElementById('successOrderId').textContent = trackingId;

  // Prepare WhatsApp message payload with configured store WhatsApp number
  const storePhone = getStoreWhatsAppNumber();
  const itemsText = cart.map(i => {
    const shadeStr = i.shade && i.shade !== 'None' && !i.shade.startsWith('None') ? `Shade: ${i.shade}` : 'Shade: None';
    const volStr = i.volume && i.volume !== 'Standard' && i.volume !== 'None' ? `Size: ${i.volume}` : 'Size: Standard';
    return `• ${i.qty}x ${i.name} [${shadeStr} | ${volStr}] - Rs. ${(i.price * i.qty).toLocaleString()}`;
  }).join('\n');
  const paymentNote = paymentMethod.includes('JazzCash') ? `${paymentMethod} (Receipt Screenshot Attached)` : paymentMethod;
  const rawMessage = `*Assalam-o-Alaikum Shareef Cosmetics!*\n\n*📦 New Order Placed:* ${trackingId}\n*👤 Customer:* ${name}\n*📞 Phone:* ${phone}\n*📍 City:* ${city}\n*🏠 Address:* ${address}\n*💳 Payment:* ${paymentNote}\n\n*🛍️ Items Ordered:*\n${itemsText}\n\n*💰 Total Amount:* Rs. ${grandTotal.toLocaleString()}\n\nPlease confirm my order & dispatch tracking. Shukriya!`;

  const waUrl = `https://wa.me/${storePhone}?text=${encodeURIComponent(rawMessage)}`;

  // Update Optional Support Link on Success Screen
  const waBtn = document.getElementById('successWhatsAppShareBtn');
  if (waBtn) {
    waBtn.setAttribute('href', waUrl);
  }

  // Clear Cart
  cart = [];
  saveCart();
  updateCartUI();
  showToast(`🎉 Order ${trackingId} logged successfully in database!`);
}

function placeWhatsAppOrderDirect() {
  if (cart.length === 0) {
    showToast('Your Bag is empty!');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = 200;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);
  const storePhone = getStoreWhatsAppNumber();

  const itemsText = cart.map(i => {
    const shadeStr = i.shade && i.shade !== 'None' && !i.shade.startsWith('None') ? `Shade: ${i.shade}` : 'Shade: None';
    const volStr = i.volume && i.volume !== 'Standard' && i.volume !== 'None' ? `Size: ${i.volume}` : 'Size: Standard';
    return `• ${i.qty}x ${i.name} [${shadeStr} | ${volStr}] - Rs. ${(i.price * i.qty).toLocaleString()}`;
  }).join('%0A');
  const waMsg = `*Assalam-o-Alaikum Shareef Cosmetics!*%0A%0AI would like to place an instant order:%0A%0A*🛍️ Items in Bag:*%0A${itemsText}%0A%0A*💰 Total Bill:*%20Rs.%20${grandTotal.toLocaleString()}%0A%0APlease take my delivery address for Cash on Delivery.`;

  window.open(`https://wa.me/${storePhone}?text=${waMsg}`, '_blank');
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
// 9. PRODUCT QUICK VIEW MODAL & CUSTOM QUANTITY / SHADE ENGINE
// =================================================================
let qvState = {
  productId: null,
  shade: 'None',
  volume: 'Standard',
  isCustomVol: false,
  customVolText: '',
  units: 1,
  unitPrice: 0
};

// Rich default Pakistani beauty palette for enriched shading choices
const POPULAR_PAKISTANI_SHADES = [
  { name: 'Fair Ivory (MM01)', color: '#F6DFCE' },
  { name: 'Warm Natural (MM02)', color: '#E8C6A5' },
  { name: 'Golden Beige (MM03)', color: '#DDB68F' },
  { name: 'Honey Wheat #95', color: '#D4B38A' },
  { name: '238 Dusty Rose', color: '#B86B77' },
  { name: '201 Ruby Surkh', color: '#881B2C' },
  { name: '215 Mitti Nude', color: '#B37358' },
  { name: '242 Pink Velvet', color: '#D97587' },
  { name: 'Nude Rose #16', color: '#A5464B' },
  { name: 'Champagne Gold', color: '#E6C896' },
  { name: 'Natural Beige #93', color: '#E5CCA9' }
];

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModalOverlay');
  const container = document.getElementById('quickViewContent');

  // 1. Dynamic Size & Price Detection: Supports objects { name: '50ml', price: 450 } or strings '50ml'
  const productSizes = [];
  if (product.sizes && Array.isArray(product.sizes)) {
    product.sizes.forEach(s => {
      if (typeof s === 'object' && s !== null && s.name && s.name !== 'None') {
        productSizes.push({
          name: String(s.name).trim(),
          price: parseInt(s.price, 10) || product.price
        });
      } else if (typeof s === 'string' && s.trim() && s.trim() !== 'None') {
        productSizes.push({
          name: s.trim(),
          price: product.price
        });
      }
    });
  }

  // 2. Real Shade Detection: Only show if product actually has cosmetic shades configured
  const productShades = [];
  if (product.shades && Array.isArray(product.shades)) {
    product.shades.forEach(s => {
      if (s && s.name && s.name !== 'None' && s.name !== 'Standard Pack' && !s.name.toLowerCase().startsWith('none')) {
        productShades.push(s);
      }
    });
  }

  const hasMultiSizes = productSizes.length > 0;
  const hasShades = productShades.length > 0;
  const initialSizeObj = hasMultiSizes ? productSizes[0] : { name: 'Standard', price: product.price };

  // Initialize state
  qvState = {
    productId: product.id,
    shade: hasShades ? productShades[0].name : 'None',
    volume: initialSizeObj.name,
    isCustomVol: false,
    customVolText: '',
    units: 1,
    unitPrice: initialSizeObj.price
  };

  const isInStock = product.inStock !== false && product.in_stock !== 0 && product.inStock !== 0;

  container.innerHTML = `
    <div class="qv-image-side" style="background:#FFF; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
      <img src="${product.image}" alt="${product.name}" class="${!isInStock ? 'img-grayscale' : ''}" style="max-height:360px; object-fit:contain; background:#FFF;" onerror="this.onerror=null; this.src='assets/images/hero_banner.jpg';">
      ${!isInStock ? `<div class="out-of-stock-banner-ribbon">OUT OF STOCK</div>` : ''}
      ${product.badge ? `<span class="product-card-badge ${product.badgeClass}" style="top:16px; left:16px;">${product.badge}</span>` : ''}
    </div>
    <div class="qv-details-side">
      <span class="product-category-tag">${product.category.toUpperCase()}</span>
      <h3 class="product-title" style="font-size: 1.35rem; margin-bottom: 6px;">${product.name}</h3>
      <div class="product-rating" style="margin-bottom: 12px;">
        ${getStarRatingHtml(product.rating)}
        <span>(${product.reviewsCount} Customer Reviews)</span>
      </div>
      
      <div class="product-pricing" style="border: none; padding: 0; margin-bottom: 14px;">
        <div class="price-box">
          <span class="current-price" style="font-size: 1.5rem;">Rs. ${initialSizeObj.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="old-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
      </div>

      <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
        ${product.description}
      </p>

      <!-- 1. PACKAGING QUANTITY / SIZE (Rendered only if product has multiple sizes) -->
      ${hasMultiSizes ? `
        <div style="margin-bottom: 16px;">
          <div class="qv-section-title">
            <span><i class="fa-solid fa-flask text-gold"></i> Select Size / Volume:</span>
            <span class="qv-badge-val" id="qvVolBadge">${initialSizeObj.name} (Rs. ${initialSizeObj.price.toLocaleString()})</span>
          </div>

          <div class="qv-options-bar" id="qvVolumeBar">
            ${productSizes.map((sizeObj, idx) => `
              <button type="button" class="qv-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewVolume('${sizeObj.name.replace(/'/g, "\\'")}', ${sizeObj.price}, this)">
                <i class="fa-solid fa-flask text-gold"></i> ${sizeObj.name} <span style="font-weight:700; color:var(--accent-gold-dark); margin-left:4px;">Rs. ${sizeObj.price.toLocaleString()}</span>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 2. SHADING / SHADES BAR (Rendered only if product has shades) -->
      ${hasShades ? `
        <div style="margin-bottom: 16px;">
          <div class="qv-section-title">
            <span><i class="fa-solid fa-palette text-gold"></i> Select Shade:</span>
            <span class="qv-badge-val" id="qvShadeBadge">${productShades[0].name}</span>
          </div>

          <div class="qv-swatches-grid" id="qvShadesGrid">
            ${productShades.map((s, idx) => `
              <div class="qv-swatch-item ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewShade('${s.name.replace(/'/g, "\\'")}', this)" title="${s.name}">
                <span class="qv-swatch-circle" style="background-color: ${s.color};"></span>
                <span>${s.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Live Selection Summary Bar -->
      <div class="qv-summary-bar">
        <div>
          <span style="font-size: 0.72rem; color: var(--text-muted); display: block; margin-bottom: 2px;">SELECTION:</span>
          <div class="qv-summary-chips" id="qvSummaryChips">
            ${hasShades ? `<span class="qv-chip" id="qvSumShadeChip"><i class="fa-solid fa-palette text-gold"></i> Shade: ${productShades[0].name}</span>` : ''}
            ${hasMultiSizes ? `<span class="qv-chip" id="qvSumVolChip"><i class="fa-solid fa-flask text-gold"></i> Size: ${initialSizeObj.name}</span>` : ''}
            ${!hasShades && !hasMultiSizes ? `<span class="qv-chip"><i class="fa-solid fa-check text-gold"></i> Standard Pack (100% Genuine)</span>` : ''}
          </div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.72rem; color: var(--text-muted); display: block; margin-bottom: 2px;">SUBTOTAL:</span>
          <strong id="qvSubtotalAmount" style="color: var(--text-primary); font-size: 1.05rem;">Rs. ${initialSizeObj.price.toLocaleString()}</strong>
        </div>
      </div>

      <!-- Quantity Stepper & Add to Bag -->
      <div class="qv-qty-controls-row">
        <div class="qv-qty-stepper">
          <button type="button" class="qv-qty-btn" onclick="updateQuickViewUnits(-1)" aria-label="Decrease quantity" ${!isInStock ? 'disabled' : ''}>-</button>
          <span class="qv-qty-val" id="qvUnitsVal">1</span>
          <button type="button" class="qv-qty-btn" onclick="updateQuickViewUnits(1)" aria-label="Increase quantity" ${!isInStock ? 'disabled' : ''}>+</button>
        </div>

        <button class="btn-luxury-primary ${!isInStock ? 'disabled' : ''}" id="qvAddToCartBtn" style="flex: 1; justify-content: center; ${!isInStock ? 'background:#2A2523; color:#ff4455; border:1px solid #ff4455; cursor:not-allowed;' : ''}" ${!isInStock ? 'disabled' : 'onclick="handleQuickViewAddToCart()"'}>
          <i class="fa-solid ${!isInStock ? 'fa-ban' : 'fa-bag-shopping'}"></i> ${!isInStock ? 'Out of Stock' : 'Add to Beauty Bag'}
        </button>
      </div>

      <button type="button" class="btn-luxury-outline w-100" style="padding: 9px 16px; font-size: 0.8rem; border-color: var(--border-medium); justify-content: center; background: transparent; cursor: pointer;" onclick="openReviewModalForProduct(${product.id})">
        <i class="fa-solid fa-pen-to-square text-gold"></i> Write a Customer Review for this Product
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectQuickViewVolume(sizeName, sizePrice, btnEl) {
  const bar = document.getElementById('qvVolumeBar');
  if (bar) {
    bar.querySelectorAll('.qv-pill-btn').forEach(b => b.classList.remove('active'));
  }
  if (btnEl) btnEl.classList.add('active');

  qvState.volume = sizeName;
  if (sizePrice !== undefined && sizePrice !== null && !isNaN(sizePrice) && sizePrice > 0) {
    qvState.unitPrice = Number(sizePrice);
  }

  const volBadge = document.getElementById('qvVolBadge');
  if (volBadge) {
    volBadge.textContent = `${sizeName} (Rs. ${qvState.unitPrice.toLocaleString()})`;
  }

  const currentPriceEl = document.querySelector('#quickViewContent .current-price');
  if (currentPriceEl) {
    currentPriceEl.textContent = `Rs. ${qvState.unitPrice.toLocaleString()}`;
  }

  syncQuickViewSummary();
}

function handleQuickViewCustomQtyInput(val) {
  qvState.customVolText = val.trim();
  qvState.volume = val.trim() ? `${val.trim()} (Custom)` : 'Custom';
  const volBadge = document.getElementById('qvVolBadge');
  if (volBadge) volBadge.textContent = qvState.volume;
  syncQuickViewSummary();
}

function setQuickViewCustomQty(val) {
  const input = document.getElementById('qvCustomQtyInput');
  if (input) input.value = val;
  handleQuickViewCustomQtyInput(val);
  showToast(`Quantity set to: ${val}`);
}

function selectQuickViewShade(shadeName, el) {
  document.querySelectorAll('#qvShadesGrid .qv-swatch-item').forEach(s => s.classList.remove('active'));
  if (el) el.classList.add('active');

  qvState.shade = shadeName;
  const shadeBadge = document.getElementById('qvShadeBadge');
  if (shadeBadge) {
    shadeBadge.textContent = shadeName === 'None' ? 'None (No Shade / Default)' : shadeName;
  }
  syncQuickViewSummary();
  if (shadeName !== 'None') {
    showToast(`Selected Shade: ${shadeName}`);
  } else {
    showToast(`Selected: No Shade (Default)`);
  }
}

function updateQuickViewUnits(change) {
  qvState.units = Math.max(1, qvState.units + change);
  const unitsVal = document.getElementById('qvUnitsVal');
  if (unitsVal) unitsVal.textContent = qvState.units;
  syncQuickViewSummary();
}

function syncQuickViewSummary() {
  const sumShade = document.getElementById('qvSumShadeChip');
  const sumVol = document.getElementById('qvSumVolChip');
  const subtotalText = document.getElementById('qvSubtotalAmount');

  if (sumShade) {
    sumShade.innerHTML = `<i class="fa-solid fa-palette text-gold"></i> Shade: ${qvState.shade}`;
  }
  if (sumVol) {
    sumVol.innerHTML = `<i class="fa-solid fa-flask text-gold"></i> Size: ${qvState.volume}`;
  }
  if (subtotalText) {
    const total = qvState.unitPrice * qvState.units;
    subtotalText.textContent = `Rs. ${total.toLocaleString()}`;
  }
}

function handleQuickViewAddToCart() {
  if (!qvState.productId) return;
  quickAddProduct(qvState.productId, qvState.shade, qvState.volume, qvState.units);
  closeQuickView();
}

function selectQuickViewSwatch(shadeName, el) {
  selectQuickViewShade(shadeName, el);
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// =================================================================
// 9B. CUSTOMER REVIEWS & REAL-TIME COMMENTS SYSTEM
// =================================================================
const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: 'Ayesha Khan',
    city: 'DHA Phase 6, Karachi',
    rating: 5,
    title: 'Lifesaver for Karachi weather!',
    product: 'Shareef Minute Miracle Palette',
    comment: 'The Shareef Minute Miracle Palette is a lifesaver for Karachi weather! It doesn\'t melt in humidity and gives that effortlessly glowing look without feeling sticky or heavy. Delivery was super fast via TCS COD.',
    recommended: true,
    date: 'Verified Buyer'
  },
  {
    id: 2,
    name: 'Mahnoor Siddiqui',
    city: 'Gulberg, Lahore',
    rating: 5,
    title: 'Exact match for wheatish Pakistani skin tone',
    product: 'Masarrat Misbah Silk Foundation',
    comment: 'Masarrat Misbah silk foundation matched my exact wheatish skin tone perfectly through their Shade Quiz tool. The coverage looks like natural high-end magazine skin. Medora lipsticks are 100% authentic originals!',
    recommended: true,
    date: 'Verified Buyer'
  },
  {
    id: 3,
    name: 'Fatima Zahra',
    city: 'Sector F-7/2, Islamabad',
    rating: 5,
    title: 'Breathtaking Bridal Box & fast 2-day delivery',
    product: 'Shareef Signature Velvet Vanity Box',
    comment: 'I ordered the Bridal Vanity Box for my sister\'s wedding. The velvet packaging is breathtaking! Everything was intact and original. Ordered on WhatsApp and arrived within 2 days in Islamabad.',
    recommended: true,
    date: 'Verified Buyer'
  },
  {
    id: 4,
    name: 'Zainab Bukhari',
    city: 'Cantt, Multan',
    rating: 5,
    title: 'Purest Arq-e-Gulab and Face Wash',
    product: 'Saeed Ghani Pure Damask Rose Water Spray',
    comment: 'Saeed Ghani Rose Water spray is truly genuine. So refreshing in Multan summer heat. Packed securely with thick bubble wrap and TCS delivered right to my door within 48 hours.',
    recommended: true,
    date: 'Verified Buyer'
  },
  {
    id: 5,
    name: 'Hina Bilal',
    city: 'Satellite Town, Gujranwala',
    rating: 5,
    title: '100% Original Pakistani brands at best prices',
    product: 'Golden Pearl Beauty Cream & Serum',
    comment: 'Original Golden Pearl and Himalaya Neem Face wash arrived in perfect condition. Love the easy COD payment and customer care responsiveness on WhatsApp.',
    recommended: true,
    date: 'Verified Buyer'
  },
  {
    id: 6,
    name: 'Sana Tariq',
    city: 'University Town, Peshawar',
    rating: 5,
    title: 'Super smooth Medora shades & fast dispatch',
    product: 'Medora Matte Lipstick (50+ Shades)',
    comment: 'Medora matte lipsticks are classic! Authentic batch codes and vibrant colors. Ordered 4 shades and got them safely in Peshawar via TCS in 2 days.',
    recommended: true,
    date: 'Verified Buyer'
  }
];

function loadStoredReviews() {
  try {
    const saved = localStorage.getItem('shareef_customer_reviews');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading stored reviews:', e);
  }
  return [...DEFAULT_REVIEWS];
}

let CUSTOMER_REVIEWS = loadStoredReviews();

function persistReviews() {
  try {
    localStorage.setItem('shareef_customer_reviews', JSON.stringify(CUSTOMER_REVIEWS));
  } catch (e) {
    console.error('Error saving reviews:', e);
  }
}

function getInitials(name) {
  if (!name) return 'SC';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

let isAllReviewsExpanded = false;

function renderReviews(highlightId = null) {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;

  // Sort reviews: highest star rating first, then by newest ID
  const sortedReviews = [...CUSTOMER_REVIEWS].sort((a, b) => {
    if ((b.rating || 5) !== (a.rating || 5)) {
      return (b.rating || 5) - (a.rating || 5);
    }
    return (b.id || 0) - (a.id || 0);
  });

  // Display top 3 highest-rated comments by default, or all when expanded
  let visibleReviews;
  if (isAllReviewsExpanded) {
    visibleReviews = sortedReviews;
  } else {
    visibleReviews = sortedReviews.slice(0, 3);
    // If a brand new review was just submitted, ensure it's visible in top 3
    if (highlightId && !visibleReviews.some(r => r.id === highlightId)) {
      const highlightedItem = CUSTOMER_REVIEWS.find(r => r.id === highlightId);
      if (highlightedItem) {
        visibleReviews = [highlightedItem, ...visibleReviews.slice(0, 2)];
      }
    }
  }

  container.innerHTML = visibleReviews.map(r => {
    const initials = getInitials(r.name);
    const isNew = highlightId && r.id === highlightId;
    return `
      <div class="review-card ${isNew ? 'newly-added' : ''}" data-review-id="${r.id}">
        <div>
          <div class="review-top-bar">
            <div class="review-stars">
              ${getStarRatingHtml(r.rating || 5)}
            </div>
            ${r.product ? `<span class="review-product-tag" title="${r.product}"><i class="fa-solid fa-sparkles"></i> ${r.product}</span>` : ''}
          </div>

          ${r.title ? `<h4 class="review-title-heading">"${r.title}"</h4>` : ''}
          <p class="review-text">"${r.comment}"</p>
        </div>

        <div>
          ${r.recommended !== false ? `
            <div class="review-rec-badge">
              <i class="fa-solid fa-circle-check"></i> Recommends this brand / product
            </div>
          ` : ''}

          <div class="reviewer-meta">
            <div class="reviewer-avatar">${initials}</div>
            <div>
              <h4 class="reviewer-name">${r.name}</h4>
              <span class="reviewer-loc"><i class="fa-solid fa-location-dot text-gold"></i> ${r.city || 'Pakistan'}</span>
            </div>
            <span class="verified-badge"><i class="fa-solid fa-circle-check"></i> ${r.date || 'Verified Buyer'}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update See All Reviews toggle button
  const expandWrap = document.getElementById('reviewsExpandWrap');
  const expandText = document.getElementById('reviewsExpandText');
  const expandIcon = document.getElementById('reviewsExpandIcon');
  const toggleBtn = document.getElementById('toggleAllReviewsBtn');

  if (expandWrap) {
    if (sortedReviews.length <= 3) {
      expandWrap.style.display = 'none';
    } else {
      expandWrap.style.display = 'flex';
      if (expandText && expandIcon && toggleBtn) {
        if (isAllReviewsExpanded) {
          expandText.textContent = `Show Top 3 Highest-Rated Reviews`;
          expandIcon.className = 'fa-solid fa-chevron-up';
          toggleBtn.setAttribute('aria-expanded', 'true');
        } else {
          expandText.textContent = `See All Customer Reviews & Comments (${sortedReviews.length})`;
          expandIcon.className = 'fa-solid fa-chevron-down';
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      }
    }
  }
}

function populateReviewProductDropdown(selectedProductId = null) {
  const select = document.getElementById('reviewProductSelect');
  if (!select) return;

  let optionsHtml = '<option value="">✨ General Shopping & Brand Experience</option>';
  PRODUCTS_DATA.forEach(p => {
    const isSelected = selectedProductId && (p.id === selectedProductId || p.id === parseInt(selectedProductId, 10));
    optionsHtml += `<option value="${p.name}" ${isSelected ? 'selected' : ''}>💄 ${p.name} (Rs. ${p.price.toLocaleString()})</option>`;
  });
  select.innerHTML = optionsHtml;
}

function openReviewModal(productId = null) {
  const modal = document.getElementById('reviewModalOverlay');
  if (!modal) return;

  populateReviewProductDropdown(productId);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const nameInput = document.getElementById('reviewerName');
    if (nameInput) nameInput.focus();
  }, 100);
}

function closeReviewModal() {
  const modal = document.getElementById('reviewModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openReviewModalForProduct(productId) {
  closeQuickView();
  openReviewModal(productId);
}

function initReviewSystem() {
  renderReviews();
  populateReviewProductDropdown();

  const openBtn = document.getElementById('openReviewModalBtn');
  const closeBtn = document.getElementById('closeReviewModalBtn');
  const modal = document.getElementById('reviewModalOverlay');
  const reviewForm = document.getElementById('customerReviewForm');
  const toggleReviewsBtn = document.getElementById('toggleAllReviewsBtn');

  if (toggleReviewsBtn) {
    toggleReviewsBtn.addEventListener('click', () => {
      isAllReviewsExpanded = !isAllReviewsExpanded;
      renderReviews();
      if (!isAllReviewsExpanded) {
        const reviewsSection = document.querySelector('.reviews-section');
        if (reviewsSection) {
          reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openReviewModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeReviewModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeReviewModal();
    });
  }

  // Interactive Star Rating
  const starBtns = document.querySelectorAll('#interactiveStarRating .star-btn');
  const starScoreInput = document.getElementById('selectedStarRating');
  const ratingScoreText = document.getElementById('ratingScoreText');

  const ratingDescriptions = {
    1: '1.0 / 5.0 — Poor',
    2: '2.0 / 5.0 — Fair',
    3: '3.0 / 5.0 — Average',
    4: '4.0 / 5.0 — Very Good',
    5: '5.0 / 5.0 — Excellent!'
  };

  function updateStarsUI(rating) {
    starBtns.forEach(btn => {
      const r = parseInt(btn.getAttribute('data-rating'), 10);
      if (r <= rating) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    if (ratingScoreText && ratingDescriptions[rating]) {
      ratingScoreText.textContent = ratingDescriptions[rating];
    }
  }

  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const rating = parseInt(btn.getAttribute('data-rating'), 10);
      if (starScoreInput) starScoreInput.value = rating;
      updateStarsUI(rating);
    });

    btn.addEventListener('mouseenter', () => {
      const rating = parseInt(btn.getAttribute('data-rating'), 10);
      updateStarsUI(rating);
    });
  });

  const starContainer = document.getElementById('interactiveStarRating');
  if (starContainer) {
    starContainer.addEventListener('mouseleave', () => {
      const savedRating = parseInt(starScoreInput ? starScoreInput.value : 5, 10) || 5;
      updateStarsUI(savedRating);
    });
  }

  // Review Form Submit Handler
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('reviewerName').value.trim();
      const city = document.getElementById('reviewerCity').value;
      const rating = parseInt(document.getElementById('selectedStarRating').value, 10) || 5;
      const product = document.getElementById('reviewProductSelect').value;
      const title = document.getElementById('reviewTitle').value.trim();
      const comment = document.getElementById('reviewComment').value.trim();
      const recommended = document.getElementById('reviewRecommend').checked;

      if (!name || !comment || !city) {
        showToast('⚠️ Please fill in all required review fields.');
        return;
      }

      const newReview = {
        id: Date.now(),
        name,
        city,
        rating,
        product: product || '',
        title: title || (rating >= 4 ? 'Highly Recommended!' : 'Customer Review'),
        comment,
        recommended,
        date: 'Verified Buyer • Just now'
      };

      CUSTOMER_REVIEWS.unshift(newReview);
      persistReviews();
      renderReviews(newReview.id);
      closeReviewModal();
      reviewForm.reset();

      // Reset rating to 5
      if (starScoreInput) starScoreInput.value = 5;
      updateStarsUI(5);

      showToast(`✨ Shukriya, ${name}! Your review and comment have been posted.`);

      // Smooth scroll to reviews section
      const reviewsSection = document.querySelector('.reviews-section');
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
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
          <img src="${item.image}" alt="${item.name}" style="background:#FFF; object-fit:contain;" onerror="this.onerror=null; this.src='assets/images/hero_banner.jpg';">
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
            <img src="${p.image}" alt="${p.name}" class="search-result-img" style="background:#FFF; object-fit:contain;" onerror="this.onerror=null; this.src='assets/images/hero_banner.jpg';">
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
    link.addEventListener('click', (e) => {
      closeDrawer();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      const filter = link.getAttribute('data-filter');
      if (filter) setCategoryFilter(filter);
    });
  });

  // Category Filter Tabs & Drawer Links
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      if (cat) setCategoryFilter(cat);
    });
  });

  document.querySelectorAll('.drawer-cat-link').forEach(link => {
    link.addEventListener('click', () => {
      const filter = link.getAttribute('data-filter');
      if (filter) setCategoryFilter(filter);
    });
  });

  // Nav Filter links
  document.querySelectorAll('.desktop-nav .nav-link, .footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
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

  // Payment Method Selection & JazzCash Details Box
  const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const jazzcashBox = document.getElementById('jazzcashAccountBox');
  const copyJazzcashBtn = document.getElementById('copyJazzcashNumBtn');

  paymentMethodRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-option-card').forEach(card => card.classList.remove('active'));
      const parentCard = radio.closest('.payment-option-card');
      if (parentCard) parentCard.classList.add('active');

      if (jazzcashBox) {
        if (radio.value.includes('JazzCash')) {
          jazzcashBox.style.display = 'block';
        } else {
          jazzcashBox.style.display = 'none';
        }
      }
    });
  });

  if (copyJazzcashBtn) {
    copyJazzcashBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const numElem = document.getElementById('jazzcashAccNumber');
      const num = numElem ? numElem.textContent.trim() : '03289487059';
      navigator.clipboard.writeText(num).then(() => {
        showToast(`✓ Account No. ${num} copied to clipboard!`);
      }).catch(() => {
        showToast(`Account No: ${num}`);
      });
    });
  }

  // Payment Receipt Screenshot Upload & Smart Auto-Compressor
  const receiptFileInput = document.getElementById('paymentReceiptFile');
  const receiptBase64Input = document.getElementById('paymentReceiptBase64');
  const receiptPreviewWrap = document.getElementById('receiptPreviewWrap');
  const receiptPreviewImg = document.getElementById('receiptPreviewImg');
  const receiptUploadPrompt = document.getElementById('receiptUploadPrompt');
  const removeReceiptBtn = document.getElementById('removeReceiptBtn');
  const closeReceiptLightboxBtn = document.getElementById('closeReceiptLightboxBtn');

  function compressImageFile(file, maxWidth = 1000, maxHeight = 1000, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to optimized clean JPEG data URL
          const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedBase64);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  }

  if (receiptFileInput) {
    receiptFileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          if (receiptUploadPrompt) {
            receiptUploadPrompt.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Optimizing image...</span>';
          }
          // Automatically resize and optimize screenshot to crisp ~150KB
          const optimizedBase64 = await compressImageFile(file);
          if (receiptBase64Input) receiptBase64Input.value = optimizedBase64;
          if (receiptPreviewImg) receiptPreviewImg.src = optimizedBase64;
          if (receiptPreviewWrap) receiptPreviewWrap.style.display = 'block';
          if (receiptUploadPrompt) {
            receiptUploadPrompt.style.display = 'none';
            receiptUploadPrompt.innerHTML = `
              <i class="fa-solid fa-camera"></i>
              <span>Tap to Choose or Take Screenshot</span>
              <small>Any image size (Auto-optimized)</small>
            `;
          }
          showToast('✓ Payment screenshot attached & optimized!');
        } catch (err) {
          console.error('Image compression error:', err);
          showToast('✕ Error reading image file. Please try another screenshot.');
        }
      }
    });
  }

  if (removeReceiptBtn) {
    removeReceiptBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (receiptFileInput) receiptFileInput.value = '';
      if (receiptBase64Input) receiptBase64Input.value = '';
      if (receiptPreviewWrap) receiptPreviewWrap.style.display = 'none';
      if (receiptUploadPrompt) receiptUploadPrompt.style.display = 'flex';
      showToast('Payment screenshot removed.');
    });
  }

  if (closeReceiptLightboxBtn) {
    closeReceiptLightboxBtn.addEventListener('click', closeReceiptLightbox);
  }

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
      newsletterMsg.textContent = '🎉 Mubarak! You have been subscribed to exclusive VIP promotions.';
      newsletterForm.reset();
    });
  }

  // Scroll Header Shadow (RAF throttled & passive)
  let headerScrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!headerScrollTicking) {
      headerScrollTicking = true;
      requestAnimationFrame(() => {
        const header = document.getElementById('siteHeader');
        if (header) {
          if (window.scrollY > 40) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }
        headerScrollTicking = false;
      });
    }
  }, { passive: true });

  // Initialize Search
  initLiveSearch();
}

function initCategorySlider() {
  const wrapper = document.getElementById('filterTabsWrapper');
  const prevBtn = document.getElementById('catSlidePrevBtn');
  const nextBtn = document.getElementById('catSlideNextBtn');

  if (!wrapper || !prevBtn || !nextBtn) return;

  const scrollAmount = 320;

  prevBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  let sliderScrollTicking = false;
  const updateArrowStates = () => {
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    prevBtn.disabled = wrapper.scrollLeft <= 5;
    nextBtn.disabled = wrapper.scrollLeft >= maxScroll - 5;
    sliderScrollTicking = false;
  };

  wrapper.addEventListener('scroll', () => {
    if (!sliderScrollTicking) {
      sliderScrollTicking = true;
      requestAnimationFrame(updateArrowStates);
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    if (!sliderScrollTicking) {
      sliderScrollTicking = true;
      requestAnimationFrame(updateArrowStates);
    }
  }, { passive: true });

  setTimeout(updateArrowStates, 300);
}

function initDrawerCategorySearch() {
  const searchInput = document.getElementById('drawerCategorySearch');
  const catList = document.getElementById('drawerCategoriesList');
  if (!searchInput || !catList) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const items = catList.querySelectorAll('li');
    items.forEach(li => {
      const text = li.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        li.classList.remove('drawer-cat-item-hidden');
      } else {
        li.classList.add('drawer-cat-item-hidden');
      }
    });
  });
}

function setCategoryFilter(category) {
  activeFilter = category;

  // Update category slider active tab & scroll into center view
  document.querySelectorAll('.filter-tab-btn').forEach(b => {
    if (b.getAttribute('data-category') === category) {
      b.classList.add('active');
      b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      b.classList.remove('active');
    }
  });

  // Update drawer category active link
  document.querySelectorAll('.drawer-cat-link').forEach(l => {
    if (l.getAttribute('data-filter') === category) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });

  // Update nav links active state
  document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-link').forEach(l => {
    if (l.getAttribute('data-filter') === category) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });

  // Close drawer if open
  if (typeof closeDrawer === 'function') closeDrawer();
  if (typeof closeMobileMenu === 'function') closeMobileMenu();

  renderProducts();

  // Smooth scroll to catalog section
  const collectionSection = document.getElementById('collection');
  if (collectionSection && window.scrollY > 400) {
    collectionSection.scrollIntoView({ behavior: 'smooth' });
  }
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
    toast.classList.add('hide');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3200);
}

// =================================================================
// 14. ADMIN DASHBOARD, ORDERS MANAGER & SECURE STORE BACKEND
// =================================================================
async function loadStoreSettingsAsync() {
  const settings = await API.fetchSettings();
  if (settings) {
    localStorage.setItem('shareef_store_settings', JSON.stringify(settings));
    return settings;
  }
  return {
    whatsapp: '923024317078',
    email: 'care@shareefcosmetics.pk'
  };
}

function getStoreWhatsAppNumber() {
  try {
    const saved = localStorage.getItem('shareef_store_settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.whatsapp) return parsed.whatsapp.replace(/[^0-9]/g, '');
    }
  } catch (e) {}
  return '923024317078';
}

function getStoreEmail() {
  try {
    const saved = localStorage.getItem('shareef_store_settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.email) return parsed.email;
    }
  } catch (e) {}
  return 'care@shareefcosmetics.pk';
}

function initAdminDashboard() {
  // Modal Triggers
  const closeLoginBtn = document.getElementById('closeAdminLoginBtn');
  const loginForm = document.getElementById('adminLoginForm');
  const closeDashboardBtn = document.getElementById('closeAdminDashboardBtn');
  const logoutBtn = document.getElementById('adminLogoutBtn');

  document.querySelectorAll('.open-admin-btn, #openAdminLoginBtn, #openAdminLoginBtnMobile').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (typeof closeMobileMenu === 'function') closeMobileMenu();
      const isValid = await API.verifyAdmin();
      if (isValid) {
        openAdminDashboard();
      } else {
        openAdminLogin();
      }
    });
  });

  if (closeLoginBtn) closeLoginBtn.addEventListener('click', closeAdminLogin);
  if (closeDashboardBtn) closeDashboardBtn.addEventListener('click', closeAdminDashboard);
  if (logoutBtn) logoutBtn.addEventListener('click', logoutAdmin);

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('adminPasswordInput');
      const errorMsg = document.getElementById('adminLoginError');
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      if (!input) return;

      const enteredPin = input.value.trim();
      if (!enteredPin) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...';
      }
      if (errorMsg) errorMsg.textContent = '';

      try {
        // Backend Database Authentication with PBKDF2
        const authRes = await API.loginAdmin(enteredPin);

        if (authRes && authRes.success && authRes.token) {
          sessionStorage.setItem('shareef_admin_token', authRes.token);
          if (errorMsg) errorMsg.textContent = '';
          input.value = '';
          closeAdminLogin();
          await openAdminDashboard();
          showToast('✓ Welcome to Secure Store Manager Portal!');
        } else {
          if (errorMsg) {
            errorMsg.textContent = authRes && authRes.error ? `✕ ${authRes.error}` : '✕ Incorrect password. Access denied.';
          }
        }
      } catch (err) {
        console.error('Login form error:', err);
        if (errorMsg) errorMsg.textContent = '✕ Server connection error. Please make sure server is running.';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i> Unlock Admin Portal';
        }
      }
    });
  }

  // Tabs Switching
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-admin-tab');
      switchAdminTab(targetTab);
    });
  });

  // Products Top Search & Filter in Table
  const searchInput = document.getElementById('adminSearchInput');
  const catFilter = document.getElementById('adminCategoryFilter');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderAdminProductsTable(searchInput.value.trim(), catFilter ? catFilter.value : 'all');
    });
  }

  if (catFilter) {
    catFilter.addEventListener('change', () => {
      renderAdminProductsTable(searchInput ? searchInput.value.trim() : '', catFilter.value);
    });
  }

  const addNewTopBtn = document.getElementById('adminAddNewTopBtn');
  if (addNewTopBtn) {
    addNewTopBtn.addEventListener('click', () => {
      resetAdminProductForm();
      switchAdminTab('add-product');
    });
  }

  // Orders Search & Status Filter
  const ordersSearch = document.getElementById('adminOrdersSearchInput');
  const ordersStatusFilter = document.getElementById('adminOrderStatusFilter');
  const exportOrdersCsvBtn = document.getElementById('adminExportOrdersCsvBtn');

  if (ordersSearch) {
    ordersSearch.addEventListener('input', () => {
      renderAdminOrdersTable(ordersSearch.value.trim(), ordersStatusFilter ? ordersStatusFilter.value : 'all');
    });
  }

  if (ordersStatusFilter) {
    ordersStatusFilter.addEventListener('change', () => {
      renderAdminOrdersTable(ordersSearch ? ordersSearch.value.trim() : '', ordersStatusFilter.value);
    });
  }

  if (exportOrdersCsvBtn) {
    exportOrdersCsvBtn.addEventListener('click', exportOrdersCSV);
  }

  // Store Contact Settings Form
  const storeContactForm = document.getElementById('adminStoreContactForm');
  if (storeContactForm) {
    storeContactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const waInput = document.getElementById('settingStoreWhatsApp');
      const emailInput = document.getElementById('settingStoreEmail');
      const submitBtn = storeContactForm.querySelector('button[type="submit"]');
      if (waInput && emailInput) {
        if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
        await API.saveSettings({
          whatsapp: waInput.value.trim(),
          email: emailInput.value.trim()
        });
        localStorage.setItem('shareef_store_settings', JSON.stringify({
          whatsapp: waInput.value.trim(),
          email: emailInput.value.trim()
        }));
        if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Save Store Contact Settings';
        showToast('✓ Store Settings saved to central database!');
      }
    });
  }

  // Cloud Database Connection Form
  const cloudDbForm = document.getElementById('adminCloudDbForm');
  const cloudApiInput = document.getElementById('settingCloudApiUrl');
  const clearCloudBtn = document.getElementById('adminClearCloudApiBtn');
  const cloudStatusMsg = document.getElementById('cloudDbStatusMsg');

  if (cloudApiInput) {
    cloudApiInput.value = localStorage.getItem('shareef_cloud_api_url') || '';
  }

  if (cloudDbForm) {
    cloudDbForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const url = cloudApiInput.value.trim().replace(/\/$/, '');
      if (url) {
        localStorage.setItem('shareef_cloud_api_url', url);
        if (cloudStatusMsg) {
          cloudStatusMsg.innerHTML = '<span style="color:#1976D2;"><i class="fa-solid fa-spinner fa-spin"></i> Testing connection to ' + url + '...</span>';
        }
        try {
          const prods = await API.fetchProducts();
          if (cloudStatusMsg) {
            cloudStatusMsg.innerHTML = '<span style="color:var(--accent-success);"><i class="fa-solid fa-circle-check"></i> Connected! Loaded ' + prods.length + ' products from live cloud database.</span>';
          }
          showToast('✓ Connected to Live Online Cloud Database!');
          renderProducts();
          renderAdminProductsTable();
          updateAdminStats();
        } catch (err) {
          if (cloudStatusMsg) {
            cloudStatusMsg.innerHTML = '<span style="color:var(--accent-ruby);"><i class="fa-solid fa-triangle-exclamation"></i> Connected URL saved, but server check failed: ' + err.message + '</span>';
          }
        }
      }
    });
  }

  if (clearCloudBtn) {
    clearCloudBtn.addEventListener('click', () => {
      localStorage.removeItem('shareef_cloud_api_url');
      if (cloudApiInput) cloudApiInput.value = '';
      if (cloudStatusMsg) cloudStatusMsg.innerHTML = '<span style="color:var(--text-muted);"><i class="fa-solid fa-circle-info"></i> Reset to local / default mode.</span>';
      showToast('Cloud API URL reset.');
      syncProductsFromDatabase();
    });
  }

  // Form Submit (Add / Edit Product)
  const productForm = document.getElementById('adminProductForm');
  if (productForm) {
    productForm.addEventListener('submit', handleProductFormSubmit);
  }

  const cancelEditBtn = document.getElementById('adminCancelEditBtn');
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', () => {
      resetAdminProductForm();
      switchAdminTab('catalog');
    });
  }

  // Add Shade Button
  const addShadeBtn = document.getElementById('adminAddShadeBtn');
  if (addShadeBtn) {
    addShadeBtn.addEventListener('click', () => {
      addShadeRow('New Shade', '#D2A379');
    });
  }

  // Image Upload File Input
  const imageFileInput = document.getElementById('adminImageFileInput');
  const imageUrlInput = document.getElementById('pImageUrl');

  if (imageFileInput) {
    imageFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const MAX_DIM = 600;
            let width = img.width;
            let height = img.height;
            if (width > height) {
              if (width > MAX_DIM) {
                height = Math.round((height * MAX_DIM) / width);
                width = MAX_DIM;
              }
            } else {
              if (height > MAX_DIM) {
                width = Math.round((width * MAX_DIM) / height);
                height = MAX_DIM;
              }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            let optimizedBase64 = canvas.toDataURL('image/webp', 0.82);
            if (!optimizedBase64.startsWith('data:image/webp')) {
              optimizedBase64 = canvas.toDataURL('image/jpeg', 0.80);
            }
            if (imageUrlInput) imageUrlInput.value = optimizedBase64;
            updateAdminImagePreview(optimizedBase64);
          };
          img.src = loadEvt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (imageUrlInput) {
    imageUrlInput.addEventListener('input', () => {
      updateAdminImagePreview(imageUrlInput.value.trim());
    });
  }

  // Export JSON
  const exportBtn = document.getElementById('adminExportJsonBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportProductsJSON);
  }

  // Reset to Defaults
  const resetDefaultBtn = document.getElementById('adminResetDefaultBtn');
  if (resetDefaultBtn) {
    resetDefaultBtn.addEventListener('click', async () => {
      if (confirm('Are you sure you want to reset all products in the database back to the original 20 Pakistani cosmetic favorites?')) {
        const res = await API.resetDefaultProducts();
        if (res && res.success) {
          await syncProductsFromDatabase();
          showToast('✓ Database reset to 20 Pakistani Classics!');
        } else {
          showToast('✕ Error resetting database.');
        }
      }
    });
  }

  // Change PIN Form
  const changePinForm = document.getElementById('adminChangePinForm');
  if (changePinForm) {
    changePinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newPinInput = document.getElementById('newAdminPinInput');
      const submitBtn = changePinForm.querySelector('button[type="submit"]');
      if (newPinInput && newPinInput.value.trim()) {
        const newPin = newPinInput.value.trim();
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Updating in database...';
        }
        const res = await API.changeAdminPassword(newPin);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Update Password';
        }
        if (res && res.success) {
          showToast('✓ Master Password securely updated in database!');
          newPinInput.value = '';
        } else {
          showToast('✕ ' + (res.error || 'Failed to update password.'));
        }
      }
    });
  }

  // Initial stats calculation
  updateAdminOrderStats();
}

function openAdminLogin() {
  const modal = document.getElementById('adminLoginModalOverlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = document.getElementById('adminPasswordInput');
      if (input) input.focus();
    }, 150);
  }
}

function closeAdminLogin() {
  const modal = document.getElementById('adminLoginModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

async function openAdminDashboard() {
  const isValid = await API.verifyAdmin();
  if (!isValid) {
    sessionStorage.removeItem('shareef_admin_token');
    closeAdminDashboard();
    openAdminLogin();
    return;
  }
  const modal = document.getElementById('adminDashboardModalOverlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    await syncProductsFromDatabase();
    await updateAdminStats();
    await updateAdminOrderStats();
    renderAdminProductsTable();
    renderAdminOrdersTable();
    populateStoreSettingsFields();

    // Background health check — result shown in Settings tab connection status
    API.checkHealth().then(health => {
      const statusMsg = document.getElementById('cloudDbStatusMsg');
      if (statusMsg) {
        if (health.online && health.db) {
          statusMsg.innerHTML = `<span style="color:var(--accent-success);"><i class="fa-solid fa-circle-check"></i> ✅ ${health.message}</span>`;
        } else if (health.online) {
          statusMsg.innerHTML = `<span style="color:#FF9800;"><i class="fa-solid fa-triangle-exclamation"></i> Backend reached but DB may have an issue: ${health.message}</span>`;
        } else {
          statusMsg.innerHTML = `<span style="color:var(--accent-ruby);"><i class="fa-solid fa-circle-xmark"></i> ❌ ${health.message} — Admin saves will fail until the server is back online.</span>`;
        }
      }
    });
  }
}

function closeAdminDashboard() {
  const modal = document.getElementById('adminDashboardModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function logoutAdmin() {
  sessionStorage.removeItem('shareef_admin_token');
  closeAdminDashboard();
  showToast('Logged out of Admin Portal');
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-admin-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.admin-tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  if (tabName === 'catalog') {
    const p = document.getElementById('adminTabCatalog');
    if (p) p.classList.add('active');
    updateAdminStats();
    renderAdminProductsTable();
  } else if (tabName === 'orders') {
    const p = document.getElementById('adminTabOrders');
    if (p) p.classList.add('active');
    updateAdminOrderStats();
    renderAdminOrdersTable();
  } else if (tabName === 'add-product') {
    const p = document.getElementById('adminTabAddProduct');
    if (p) p.classList.add('active');
  } else if (tabName === 'settings') {
    const p = document.getElementById('adminTabSettings');
    if (p) p.classList.add('active');
    populateStoreSettingsFields();
  }
}

async function populateStoreSettingsFields() {
  const settings = await loadStoreSettingsAsync();
  const waInput = document.getElementById('settingStoreWhatsApp');
  const emailInput = document.getElementById('settingStoreEmail');
  if (waInput) waInput.value = settings.whatsapp || '923024317078';
  if (emailInput) emailInput.value = settings.email || 'care@shareefcosmetics.pk';
}

async function updateAdminStats() {
  const stats = await API.fetchAdminStats();
  const total = stats ? stats.totalProducts : PRODUCTS_DATA.length;
  const skincare = stats ? stats.skincareCount : PRODUCTS_DATA.filter(p => p.category === 'skincare').length;
  const face = stats ? stats.faceCount : PRODUCTS_DATA.filter(p => p.category === 'face' || p.category === 'lips').length;
  const haircare = stats ? stats.haircareCount : PRODUCTS_DATA.filter(p => p.category === 'haircare').length;

  const totalEl = document.getElementById('adminStatTotal');
  const skinEl = document.getElementById('adminStatSkincare');
  const faceEl = document.getElementById('adminStatFace');
  const hairEl = document.getElementById('adminStatHaircare');
  const badgeEl = document.getElementById('adminTotalCountBadge');

  if (totalEl) totalEl.textContent = total;
  if (skinEl) skinEl.textContent = skincare;
  if (faceEl) faceEl.textContent = face;
  if (hairEl) hairEl.textContent = haircare;
  if (badgeEl) badgeEl.textContent = total;
}

async function updateAdminOrderStats() {
  const stats = await API.fetchAdminStats();
  if (stats) {
    const totalEl = document.getElementById('adminOrdersTotalCount');
    const pendingEl = document.getElementById('adminOrdersPendingCount');
    const dispEl = document.getElementById('adminOrdersDispatchedCount');
    const revEl = document.getElementById('adminOrdersRevenueSum');
    const badgeEl = document.getElementById('adminOrdersCountBadge');

    if (totalEl) totalEl.textContent = stats.totalOrders;
    if (pendingEl) pendingEl.textContent = stats.pendingOrders;
    if (dispEl) dispEl.textContent = stats.dispatchedOrders;
    if (revEl) revEl.textContent = `Rs. ${Number(stats.revenue).toLocaleString()}`;
    if (badgeEl) badgeEl.textContent = stats.totalOrders;
  }
}

function renderAdminProductsTable(searchTerm = '', categoryFilter = 'all') {
  const tbody = document.getElementById('adminProductsTableBody');
  if (!tbody) return;

  let filtered = [...PRODUCTS_DATA];

  if (categoryFilter && categoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }

  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      (p.badge && p.badge.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding: 36px; color: var(--text-muted);">
          <i class="fa-solid fa-box-open" style="font-size: 2rem; margin-bottom: 8px; display:block; color:var(--accent-gold);"></i>
          No products matched your search filter.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(product => {
    const isInStock = product.inStock !== false && product.in_stock !== 0 && product.inStock !== 0;
    const shadesHtml = product.shades && product.shades.length > 0
      ? product.shades.map(s => `
          <span class="admin-swatch-chip" style="background-color:${s.color};" title="${s.name}"></span>
        `).join('')
      : '<span class="text-muted text-xs">Standard</span>';

    return `
      <tr>
        <td>
          <img src="${product.image}" alt="${product.name}" class="admin-p-thumb ${!isInStock ? 'img-grayscale' : ''}" onerror="this.src='assets/images/hero_banner.jpg'">
        </td>
        <td>
          <div class="admin-p-title">${product.name}</div>
          ${product.badge ? `<span class="admin-p-badge-tag">${product.badge}</span>` : ''}
        </td>
        <td>
          <span style="text-transform: capitalize; font-weight:600; color:var(--text-secondary);">${product.category}</span>
        </td>
        <td>
          <button type="button" class="btn-stock-toggle" onclick="toggleProductStock(${product.id})" title="Click to toggle In Stock / Out of Stock" style="padding:4px 10px; border-radius:20px; font-size:0.72rem; font-weight:700; cursor:pointer; border:1px solid ${isInStock ? '#4CAF50' : '#E53935'}; background:${isInStock ? 'rgba(76,175,80,0.12)' : 'rgba(229,57,53,0.12)'}; color:${isInStock ? '#2E7D32' : '#C62828'}; display:inline-flex; align-items:center; gap:4px;">
            <i class="fa-solid ${isInStock ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
            <span>${isInStock ? 'In Stock' : 'Out of Stock'}</span>
          </button>
        </td>
        <td>
          <div class="inline-price-box">
            <span style="font-weight:700; color:var(--text-muted); font-size:0.75rem;">Rs.</span>
            <input type="number" id="inlinePrice_${product.id}" class="inline-price-input" value="${product.price}" min="0">
            <button type="button" class="btn-inline-save" onclick="handleInlinePriceSave(${product.id})" title="Save Price to Database">
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
        </td>
        <td>
          <div class="inline-price-box">
            <span style="font-weight:700; color:var(--text-muted); font-size:0.75rem;">Rs.</span>
            <input type="number" id="inlineOrigPrice_${product.id}" class="inline-price-input" value="${product.originalPrice || 0}" min="0" placeholder="0">
          </div>
        </td>
        <td>
          <div class="admin-shades-preview">
            ${shadesHtml}
          </div>
        </td>
        <td>
          <div class="admin-actions-cell">
            <button type="button" class="btn-tbl-action edit" onclick="openEditProductModal(${product.id})" title="Edit Details">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn-tbl-action delete" onclick="deleteProductItem(${product.id})" title="Delete Product">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

async function toggleProductStock(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const currentStock = product.inStock !== false && product.in_stock !== 0 && product.inStock !== 0;
  const newStock = !currentStock;

  const res = await API.updateProduct(productId, { inStock: newStock });
  if (res && res.success) {
    // Use the confirmed data from the server response to update PRODUCTS_DATA
    const confirmed = res.data;
    const idx = PRODUCTS_DATA.findIndex(p => p.id === productId);
    if (idx !== -1) {
      if (confirmed && confirmed.id) {
        // Replace with full server-confirmed product data
        PRODUCTS_DATA[idx] = confirmed;
      } else {
        // Fallback: update both field names the app checks
        PRODUCTS_DATA[idx].inStock = newStock;
        PRODUCTS_DATA[idx].in_stock = newStock ? 1 : 0;
      }
    }
    // Force re-render directly — bypass fingerprint check
    lastCatalogFingerprint = '';
    renderProducts();
    renderAdminProductsTable();
    showToast(`✓ "${product.name.slice(0, 20)}..." marked as ${newStock ? '🟢 IN STOCK' : '🔴 OUT OF STOCK'}`);
  } else {
    showToast('✕ Error updating stock: ' + (res.error || 'Unauthorized'));
  }
}

// Time formatting helper for Pakistan / Islamabad Timezone (PKT, UTC+5)
function formatIslamabadTime(isoOrDbTimestamp, customOptions = {}) {
  if (!isoOrDbTimestamp) return 'Just now';
  let dateObj;
  
  if (typeof isoOrDbTimestamp === 'string') {
    let cleanStr = isoOrDbTimestamp.trim();
    if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(cleanStr)) {
      cleanStr = cleanStr.replace(' ', 'T') + 'Z';
    } else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(cleanStr)) {
      cleanStr = cleanStr + 'Z';
    }
    dateObj = new Date(cleanStr);
  } else {
    dateObj = new Date(isoOrDbTimestamp);
  }

  if (isNaN(dateObj.getTime())) {
    dateObj = new Date(isoOrDbTimestamp);
  }

  if (isNaN(dateObj.getTime())) {
    return String(isoOrDbTimestamp);
  }

  const defaultOptions = {
    timeZone: 'Asia/Karachi', // Islamabad / Pakistan Standard Time (PKT, UTC+5)
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  return dateObj.toLocaleString('en-PK', { ...defaultOptions, ...customOptions });
}

let CURRENT_ADMIN_ORDERS = [];

async function renderAdminOrdersTable(searchTerm = '', statusFilter = 'all') {
  const tbody = document.getElementById('adminOrdersTableBody');
  if (!tbody) return;

  const orders = await API.fetchOrders(statusFilter, searchTerm);
  CURRENT_ADMIN_ORDERS = orders;

  if (orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding: 48px; color: var(--text-muted);">
          <i class="fa-solid fa-cart-flatbed" style="font-size: 2.2rem; margin-bottom: 12px; display:block; color:var(--accent-gold);"></i>
          <strong>No customer orders found in database.</strong>
          <p style="font-size:0.8rem; margin-top:4px;">When customers checkout on the store or via WhatsApp, their orders will appear here in real-time.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = orders.map(order => {
    const dateStr = formatIslamabadTime(order.timestamp);

    const customerPhoneDigits = (order.customer.phone || '').replace(/[^0-9]/g, '');
    const cleanWhatsAppPhone = customerPhoneDigits.startsWith('0')
      ? `92${customerPhoneDigits.slice(1)}`
      : customerPhoneDigits;

    const itemsSummaryHtml = (order.items || []).map(item => {
      const shadePart = item.shade && item.shade !== 'None' && !item.shade.startsWith('None') ? `Shade: ${item.shade}` : 'Shade: None';
      const volPart = item.volume && item.volume !== 'Standard' && item.volume !== 'None' ? `Size: ${item.volume}` : '';
      const metaStr = [shadePart, volPart].filter(Boolean).join(' | ');
      return `
        <div class="order-item-compact">
          <strong>${item.qty}x</strong> ${item.name} <span class="text-muted text-xs">(${metaStr})</span>
        </div>
      `;
    }).join('');

    const statusClasses = {
      pending: 'status-pending',
      confirmed: 'status-confirmed',
      dispatched: 'status-dispatched',
      delivered: 'status-delivered',
      cancelled: 'status-cancelled'
    };

    return `
      <tr>
        <td>
          <span class="order-id-badge">${order.id}</span>
          <span class="order-timestamp"><i class="fa-regular fa-clock"></i> ${dateStr}</span>
        </td>
        <td>
          <span class="cust-name">${order.customer.name}</span>
          <div class="cust-address"><i class="fa-solid fa-location-dot text-gold"></i> ${order.customer.address}, <strong>${order.customer.city}</strong></div>
          <div class="cust-contact-chips">
            <a href="https://wa.me/${cleanWhatsAppPhone}?text=Assalam-o-Alaikum%20${encodeURIComponent(order.customer.name)}!%20Regarding%20your%20Shareef%20Cosmetics%20Order%20${order.id}" target="_blank" class="chip-whatsapp" title="WhatsApp Customer">
              <i class="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
            <a href="tel:${order.customer.phone}" class="chip-phone" title="Call Customer">
              <i class="fa-solid fa-phone"></i> ${order.customer.phone}
            </a>
          </div>
        </td>
        <td>
          <div class="order-items-compact-list">
            ${itemsSummaryHtml}
          </div>
        </td>
        <td>
          <span class="order-bill-total">Rs. ${Number(order.grandTotal).toLocaleString()}</span>
          <span class="order-pay-method">${order.payment_method || order.paymentMethod || 'COD'}</span>
          ${order.receiptImage ? `
            <button type="button" class="btn-view-receipt" onclick="openReceiptLightbox('${order.id}')" title="View Customer Payment Screenshot">
              <i class="fa-solid fa-camera"></i> View Receipt
            </button>
          ` : ''}
        </td>
        <td>
          <select class="order-status-select ${statusClasses[order.status] || 'status-pending'}" onchange="updateOrderStatus('${order.id}', this.value)">
            <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>🟡 Pending</option>
            <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>🔵 Confirmed</option>
            <option value="dispatched" ${order.status === 'dispatched' ? 'selected' : ''}>🚚 Dispatched</option>
            <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>🟢 Delivered</option>
            <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>🔴 Cancelled</option>
          </select>
        </td>
        <td>
          <div class="admin-actions-cell">
            <button type="button" class="btn-tbl-action print" onclick="printOrderInvoice('${order.id}')" title="Print Invoice Slip">
              <i class="fa-solid fa-print"></i>
            </button>
            <button type="button" class="btn-tbl-action delete" onclick="deleteOrder('${order.id}')" title="Delete Order">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function openReceiptLightbox(orderId) {
  const order = CURRENT_ADMIN_ORDERS.find(o => o.id === orderId);
  if (!order || !order.receiptImage) {
    showToast('No receipt screenshot attached for this order.');
    return;
  }

  const modal = document.getElementById('receiptLightboxOverlay');
  const img = document.getElementById('receiptLightboxImg');
  const title = document.getElementById('receiptLightboxTitle');
  const dlBtn = document.getElementById('downloadReceiptBtn');

  if (img) img.src = order.receiptImage;
  if (title) title.textContent = `Receipt Proof - ${order.id} (${order.customer.name})`;
  if (dlBtn) {
    dlBtn.href = order.receiptImage;
    dlBtn.download = `Receipt_${order.id}_${order.customer.name.replace(/\s+/g, '_')}.jpg`;
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeReceiptLightbox() {
  const modal = document.getElementById('receiptLightboxOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

async function updateOrderStatus(orderId, newStatus) {
  const res = await API.updateOrderStatus(orderId, newStatus);
  if (res && res.success) {
    await updateAdminOrderStats();
    renderAdminOrdersTable(
      document.getElementById('adminOrdersSearchInput')?.value.trim() || '',
      document.getElementById('adminOrderStatusFilter')?.value || 'all'
    );
    showToast(`✓ Order ${orderId} updated to "${newStatus.toUpperCase()}" in database`);
  } else {
    showToast('✕ Failed to update order status');
  }
}

async function deleteOrder(orderId) {
  if (confirm(`Are you sure you want to delete order ${orderId} permanently from database?`)) {
    const res = await API.deleteOrder(orderId);
    if (res && res.success) {
      await updateAdminOrderStats();
      renderAdminOrdersTable(
        document.getElementById('adminOrdersSearchInput')?.value.trim() || '',
        document.getElementById('adminOrderStatusFilter')?.value || 'all'
      );
      showToast(`Order ${orderId} removed from database`);
    } else {
      showToast('✕ Error deleting order');
    }
  }
}

function exportOrdersCSV() {
  const orders = CURRENT_ADMIN_ORDERS;
  if (orders.length === 0) {
    showToast('No orders available to export.');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Order ID,Date,Customer Name,Phone,City,Delivery Address,Payment Method,Items Count,Items List,Subtotal PKR,Discount PKR,Grand Total PKR,Status\n";

  orders.forEach(o => {
    const dateStr = formatIslamabadTime(o.timestamp);
    const itemsListClean = (o.items || []).map(i => `${i.qty}x ${i.name} (${i.shade})`).join(' | ').replace(/"/g, '""');
    const itemsCount = (o.items || []).reduce((sum, i) => sum + i.qty, 0);

    const row = [
      `"${o.id}"`,
      `"${dateStr}"`,
      `"${(o.customer.name || '').replace(/"/g, '""')}"`,
      `"${(o.customer.phone || '').replace(/"/g, '""')}"`,
      `"${(o.customer.city || '').replace(/"/g, '""')}"`,
      `"${(o.customer.address || '').replace(/"/g, '""')}"`,
      `"${(o.paymentMethod || o.payment_method || 'COD').replace(/"/g, '""')}"`,
      itemsCount,
      `"${itemsListClean}"`,
      o.subtotal || 0,
      o.discount || 0,
      o.grandTotal || 0,
      `"${o.status || 'pending'}"`
    ].join(",");

    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `shareef_cosmetics_orders_export_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('✓ Orders exported to CSV spreadsheet!');
}

function printOrderInvoice(orderId) {
  const order = CURRENT_ADMIN_ORDERS.find(o => o.id === orderId);
  if (!order) return;

  const dateStr = formatIslamabadTime(order.timestamp, { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const payMethod = order.paymentMethod || order.payment_method || 'Cash on Delivery (COD)';
  const isOnlinePaid = payMethod.toLowerCase().includes('jazzcash') || payMethod.toLowerCase().includes('online');

  const itemsRows = (order.items || []).map(i => {
    const shadeStr = i.shade && i.shade !== 'None' && !i.shade.startsWith('None') ? `Shade: ${i.shade}` : 'Shade: None';
    const volStr = i.volume && i.volume !== 'Standard' && i.volume !== 'None' ? `Size: ${i.volume}` : 'Size: Standard';
    return `
      <tr>
        <td style="padding:10px 8px; border-bottom:1px solid #ddd;">
          <strong style="font-size:14px;">${i.name}</strong><br>
          <span style="display:inline-block; margin-top:3px; font-size:11px; background:#F5EFE6; color:#8A6D3B; padding:2px 6px; border-radius:3px;">${shadeStr}</span>
          <span style="display:inline-block; margin-top:3px; font-size:11px; background:#FFF3E0; color:#E65100; padding:2px 6px; border-radius:3px; margin-left:4px;">${volStr}</span>
        </td>
        <td style="padding:10px 8px; border-bottom:1px solid #ddd; text-align:center; font-weight:bold;">${i.qty}</td>
        <td style="padding:10px 8px; border-bottom:1px solid #ddd; text-align:right;">Rs. ${Number(i.price).toLocaleString()}</td>
        <td style="padding:10px 8px; border-bottom:1px solid #ddd; text-align:right; font-weight:bold;">Rs. ${(Number(i.price) * Number(i.qty)).toLocaleString()}</td>
      </tr>
    `;
  }).join('');

  const paymentBadge = isOnlinePaid
    ? `<span style="background:#E8F5E9; color:#2E7D32; padding:4px 10px; border-radius:4px; font-weight:bold; font-size:12px; display:inline-block; border:1px solid #C8E6C9;">💳 ${payMethod}</span>`
    : `<span style="background:#FFF3E0; color:#E65100; padding:4px 10px; border-radius:4px; font-weight:bold; font-size:12px; display:inline-block; border:1px solid #FFE0B2;">💵 Cash on Delivery (COD)</span>`;

  const invoiceWindow = window.open('', '_blank', 'width=800,height=900');
  invoiceWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice - ${order.id} | Shareef Cosmetics</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #222; max-width: 700px; margin: 0 auto; line-height: 1.5; }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #C6A675; padding-bottom: 16px; margin-bottom: 20px; }
        .brand h1 { margin: 0; color: #141211; font-size: 24px; letter-spacing: 2px; }
        .brand p { margin: 2px 0 0; color: #C6A675; font-size: 11px; letter-spacing: 1px; font-weight: bold; }
        .order-meta { text-align: right; font-size: 13px; color: #555; }
        .two-col { display: flex; justify-content: space-between; margin-bottom: 24px; }
        .box { background: #f9f9f9; padding: 14px 18px; border-radius: 6px; width: 46%; border: 1px solid #eee; }
        .box h3 { margin: 0 0 8px; font-size: 13px; text-transform: uppercase; color: #8A2D3C; letter-spacing: 0.5px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
        th { background: #f0ebe5; padding: 10px 8px; text-align: left; border-bottom: 2px solid #ddd; font-weight: 700; color: #333; }
        .totals { margin-left: auto; width: 280px; font-size: 13px; }
        .totals-row { display: flex; justify-content: space-between; padding: 4px 0; }
        .totals-row.grand { border-top: 2px solid #222; font-weight: bold; font-size: 16px; color: #141211; padding-top: 8px; margin-top: 6px; }
        .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 16px; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <div class="no-print" style="margin-bottom:20px; display:flex; justify-content:space-between;">
        <button onclick="window.print()" style="padding:10px 20px; background:#141211; color:#fff; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">🖨️ Print Official Invoice</button>
        <button onclick="window.close()" style="padding:10px 20px; background:#eee; border:none; border-radius:4px; cursor:pointer;">Close</button>
      </div>

      <div class="header">
        <div class="brand">
          <h1>SHAREEF COSMETICS</h1>
          <p>PAKISTANI LUXURY BEAUTY • OFFICIAL DISPATCH INVOICE</p>
        </div>
        <div class="order-meta">
          <strong>Order ID: ${order.id}</strong><br>
          Date: ${dateStr}<br>
          Status: <strong style="color:#8A2D3C;">${(order.status || 'PENDING').toUpperCase()}</strong>
        </div>
      </div>

      <div class="two-col">
        <div class="box">
          <h3>Customer Details</h3>
          <strong>${order.customer.name}</strong><br>
          Phone: ${order.customer.phone}<br>
          City: <strong>${order.customer.city}</strong>
        </div>
        <div class="box">
          <h3>Delivery & Payment Method</h3>
          ${order.customer.address}<br>
          <strong>${order.customer.city}, Pakistan</strong>
          <div style="margin-top:8px;">
            ${paymentBadge}
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item, Shade & Size</th>
            <th style="text-align:center;">Qty</th>
            <th style="text-align:right;">Unit Price</th>
            <th style="text-align:right;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows}
        </tbody>
      </table>

      <div class="totals">
        <div class="totals-row">
          <span>Subtotal:</span>
          <span>Rs. ${(order.subtotal || 0).toLocaleString()}</span>
        </div>
        ${order.discount ? `
          <div class="totals-row" style="color:#2E7D32;">
            <span>Discount:</span>
            <span>-Rs. ${order.discount.toLocaleString()}</span>
          </div>
        ` : ''}
        <div class="totals-row">
          <span>Delivery Fee:</span>
          <span>${order.deliveryFee === 0 ? 'FREE' : `Rs. ${order.deliveryFee || 200}`}</span>
        </div>
        <div class="totals-row grand">
          <span>Grand Total:</span>
          <span>Rs. ${(order.grandTotal || 0).toLocaleString()}</span>
        </div>
      </div>

      <div class="footer">
        <p>Thank you for choosing Shareef Cosmetics! 100% Genuine Pakistani Formulations.<br>Helpline / WhatsApp: +92 329 6209082 | care@shareefcosmetics.pk</p>
      </div>
    </body>
    </html>
  `);
  invoiceWindow.document.close();
}

async function handleInlinePriceSave(productId) {
  const priceInput = document.getElementById(`inlinePrice_${productId}`);
  const origPriceInput = document.getElementById(`inlineOrigPrice_${productId}`);

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !priceInput) return;

  const newPrice = parseInt(priceInput.value, 10);
  const newOrigPrice = origPriceInput ? parseInt(origPriceInput.value, 10) : 0;

  if (isNaN(newPrice) || newPrice < 0) {
    showToast('✕ Please enter a valid price amount');
    return;
  }

  const res = await API.updateProduct(productId, {
    price: newPrice,
    originalPrice: newOrigPrice > 0 ? newOrigPrice : 0
  });

  if (res && res.success) {
    await syncProductsFromDatabase();
    showToast(`✓ Saved price for "${product.name.slice(0, 20)}..." to database (Rs. ${newPrice.toLocaleString()})`);
  } else {
    showToast('✕ Failed to update price in database: ' + (res.error || 'Unauthorized'));
  }
}

function setAdminSizeMode(mode) {
  const noneBtn = document.getElementById('adminSizeNoneBtn');
  const singleBtn = document.getElementById('adminSizeSingleCustomBtn');
  const multiBtn = document.getElementById('adminSizeMultiBtn');
  const singleSection = document.getElementById('adminSingleCustomSizeSection');
  const multiSection = document.getElementById('adminMultiSizeSection');
  const singleInput = document.getElementById('pSingleCustomSize');

  // Reset all mode pills
  if (noneBtn) noneBtn.className = 'admin-mode-pill';
  if (singleBtn) singleBtn.className = 'admin-mode-pill';
  if (multiBtn) multiBtn.className = 'admin-mode-pill';

  if (mode === 'none') {
    if (noneBtn) noneBtn.className = 'admin-mode-pill active none-mode';
    if (singleSection) singleSection.style.display = 'none';
    if (multiSection) multiSection.style.display = 'none';
    if (singleInput) singleInput.value = '';
    renderSizesInForm([]);
  } else if (mode === 'single-custom') {
    if (singleBtn) singleBtn.className = 'admin-mode-pill active';
    if (singleSection) singleSection.style.display = 'block';
    if (multiSection) multiSection.style.display = 'none';
    if (singleInput && !singleInput.value.trim()) {
      singleInput.value = '50ml';
    }
  } else {
    // Multi mode
    if (multiBtn) multiBtn.className = 'admin-mode-pill active';
    if (singleSection) singleSection.style.display = 'none';
    if (multiSection) multiSection.style.display = 'block';
    const currentRows = document.querySelectorAll('#adminSizesList .size-builder-row');
    if (currentRows.length === 0) {
      const basePrice = parseInt(document.getElementById('pPrice')?.value || 0, 10);
      addAdminSizeRow('50ml', basePrice || 450);
      addAdminSizeRow('100ml', basePrice ? Math.round(basePrice * 1.7) : 850);
    }
  }
}

function setSingleCustomSizeVal(val) {
  setAdminSizeMode('single-custom');
  const input = document.getElementById('pSingleCustomSize');
  if (input) {
    input.value = val;
    if (val) {
      showToast(`Set custom quantity: ${val}`);
    } else {
      showToast('Cleared custom quantity');
    }
  }
}

function addAdminSizeRow(name = '50ml', price = '') {
  const multiBtn = document.getElementById('adminSizeMultiBtn');
  const noneBtn = document.getElementById('adminSizeNoneBtn');
  const singleBtn = document.getElementById('adminSizeSingleCustomBtn');
  const multiSection = document.getElementById('adminMultiSizeSection');
  const singleSection = document.getElementById('adminSingleCustomSizeSection');

  if (noneBtn) noneBtn.className = 'admin-mode-pill';
  if (singleBtn) singleBtn.className = 'admin-mode-pill';
  if (multiBtn) multiBtn.className = 'admin-mode-pill active';
  if (singleSection) singleSection.style.display = 'none';
  if (multiSection) multiSection.style.display = 'block';

  const list = document.getElementById('adminSizesList');
  if (!list) return;

  const defaultBasePrice = parseInt(document.getElementById('pPrice')?.value || 0, 10);
  const rowPrice = price !== '' && price !== null && price !== undefined ? price : (defaultBasePrice || 500);

  const div = document.createElement('div');
  div.className = 'size-builder-row';
  div.innerHTML = `
    <input type="text" placeholder="Size / Volume (e.g. 50ml)" value="${name}" class="size-name-input" required>
    <div style="display:flex; align-items:center; gap:4px; flex:1;">
      <span class="size-price-prefix">Rs.</span>
      <input type="number" placeholder="Price (PKR)" value="${rowPrice}" class="size-price-input" min="0" required>
    </div>
    <button type="button" class="btn-remove-size" onclick="this.parentElement.remove()" title="Remove size variant">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
  list.appendChild(div);
  if (name) {
    showToast(`Added size variant: ${name} (Rs. ${Number(rowPrice).toLocaleString()})`);
  }
}

function renderSizesInForm(sizesArray) {
  const list = document.getElementById('adminSizesList');
  if (!list) return;
  list.innerHTML = '';

  if (Array.isArray(sizesArray) && sizesArray.length > 0) {
    sizesArray.forEach(s => {
      if (typeof s === 'object' && s !== null) {
        addAdminSizeRow(s.name || '50ml', s.price !== undefined ? s.price : '');
      } else if (typeof s === 'string' && s.trim() && s.trim() !== 'None') {
        addAdminSizeRow(s.trim(), '');
      }
    });
  }
}

function collectSizesFromForm() {
  const isNone = document.getElementById('adminSizeNoneBtn')?.classList.contains('active');
  if (isNone) return [];

  const isSingleCustom = document.getElementById('adminSizeSingleCustomBtn')?.classList.contains('active');
  if (isSingleCustom) {
    const singleInput = document.getElementById('pSingleCustomSize');
    const val = singleInput ? singleInput.value.trim() : '';
    const basePrice = parseInt(document.getElementById('pPrice')?.value || 0, 10) || 0;
    if (val && val !== 'None') {
      return [{ name: val, price: basePrice }];
    }
    return [];
  }

  // Multi size mode
  const rows = document.querySelectorAll('#adminSizesList .size-builder-row');
  const sizes = [];
  rows.forEach(row => {
    const nameInput = row.querySelector('.size-name-input');
    const priceInput = row.querySelector('.size-price-input');
    if (nameInput && nameInput.value.trim()) {
      const name = nameInput.value.trim();
      const price = parseInt(priceInput ? priceInput.value : 0, 10) || 0;
      sizes.push({ name, price });
    }
  });
  return sizes;
}

function setAdminShadeMode(mode) {
  const noneBtn = document.getElementById('adminShadeNoneBtn');
  const customBtn = document.getElementById('adminShadeCustomBtn');
  const section = document.getElementById('adminCustomShadeSection');

  if (mode === 'none') {
    if (noneBtn) noneBtn.className = 'admin-mode-pill active none-mode';
    if (customBtn) customBtn.className = 'admin-mode-pill';
    if (section) section.style.display = 'none';
    renderShadesInForm([]);
  } else {
    if (noneBtn) noneBtn.className = 'admin-mode-pill';
    if (customBtn) customBtn.className = 'admin-mode-pill active';
    if (section) section.style.display = 'block';
    const currentRows = document.querySelectorAll('#adminShadesList .shade-builder-row');
    if (currentRows.length === 0) {
      addShadeRow('Ivory 01', '#E8D0B3');
    }
  }
}

function addShadePreset(name, color) {
  setAdminShadeMode('custom');
  addShadeRow(name, color);
  showToast(`Added ${name} to product shades`);
}

function setAdminStockMode(inStock) {
  const inBtn = document.getElementById('adminStockInBtn');
  const outBtn = document.getElementById('adminStockOutBtn');
  const hiddenInput = document.getElementById('pInStock');

  if (inBtn) inBtn.className = inStock ? 'admin-mode-pill in-stock-mode active' : 'admin-mode-pill in-stock-mode';
  if (outBtn) outBtn.className = !inStock ? 'admin-mode-pill out-of-stock-mode active' : 'admin-mode-pill out-of-stock-mode';
  if (hiddenInput) hiddenInput.value = inStock ? '1' : '0';
}

function resetAdminProductForm() {
  const form = document.getElementById('adminProductForm');
  if (!form) return;
  form.reset();

  document.getElementById('adminEditProductId').value = '';
  document.getElementById('adminFormModeTitle').textContent = 'Add New Product to Store Catalog';
  document.getElementById('adminSaveBtnText').textContent = 'Save & Publish Product';
  document.getElementById('adminCancelEditBtn').style.display = 'none';

  setAdminSizeMode('none');
  setAdminShadeMode('none');
  setAdminStockMode(true);

  updateAdminImagePreview('');
}

function updateAdminImagePreview(src) {
  const previewImg = document.getElementById('adminImagePreviewImg');
  const placeholder = document.getElementById('adminImagePlaceholderText');

  if (src) {
    if (previewImg) {
      previewImg.src = src;
      previewImg.style.display = 'block';
    }
    if (placeholder) placeholder.style.display = 'none';
  } else {
    if (previewImg) previewImg.style.display = 'none';
    if (placeholder) placeholder.style.display = 'block';
  }
}

function addShadeRow(name = 'New Shade', color = '#C6A675') {
  const list = document.getElementById('adminShadesList');
  if (!list) return;

  const div = document.createElement('div');
  div.className = 'shade-builder-row';
  div.innerHTML = `
    <input type="text" placeholder="Shade Name" value="${name}" class="shade-name-input" required>
    <input type="color" value="${color}" class="shade-color-input">
    <button type="button" class="btn-remove-shade" onclick="this.parentElement.remove()" title="Remove shade">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
  list.appendChild(div);
}

function renderShadesInForm(shadesArray) {
  const list = document.getElementById('adminShadesList');
  if (!list) return;
  list.innerHTML = '';

  if (shadesArray && shadesArray.length > 0) {
    shadesArray.forEach(s => addShadeRow(s.name, s.color || '#C6A675'));
  }
}

function collectShadesFromForm() {
  const isNone = document.getElementById('adminShadeNoneBtn')?.classList.contains('active');
  if (isNone) return [];

  const rows = document.querySelectorAll('#adminShadesList .shade-builder-row');
  const shades = [];
  rows.forEach(row => {
    const nameInput = row.querySelector('.shade-name-input');
    const colorInput = row.querySelector('.shade-color-input');
    if (nameInput && nameInput.value.trim()) {
      shades.push({
        name: nameInput.value.trim(),
        color: colorInput ? colorInput.value : '#C6A675'
      });
    }
  });
  return shades;
}

function openEditProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('adminEditProductId').value = product.id;
  document.getElementById('pName').value = product.name || '';
  document.getElementById('pCategory').value = product.category || 'skincare';
  document.getElementById('pBadge').value = product.badge || '';
  document.getElementById('pPrice').value = product.price || 0;
  document.getElementById('pOriginalPrice').value = product.originalPrice || '';
  document.getElementById('pDescription').value = product.description || '';
  document.getElementById('pDetails').value = product.details || '';
  document.getElementById('pImageUrl').value = product.image || '';
  document.getElementById('pRating').value = product.rating || 4.9;
  document.getElementById('pReviewsCount').value = product.reviewsCount || 450;

  // Handle Stock Mode
  const isInStock = product.inStock !== false && product.in_stock !== 0 && product.inStock !== 0;
  setAdminStockMode(isInStock);

  // Handle Sizes & Quantity Mode
  if (product.sizes && Array.isArray(product.sizes) && product.sizes.length > 1) {
    setAdminSizeMode('multi');
    renderSizesInForm(product.sizes);
  } else if (product.sizes && Array.isArray(product.sizes) && product.sizes.length === 1) {
    setAdminSizeMode('single-custom');
    const singleObj = product.sizes[0];
    const singleVal = typeof singleObj === 'object' && singleObj !== null ? singleObj.name : String(singleObj);
    const singleInput = document.getElementById('pSingleCustomSize');
    if (singleInput) singleInput.value = singleVal;
  } else if (typeof product.sizes === 'string' && product.sizes.trim().length > 0 && product.sizes !== 'None') {
    const parsed = product.sizes.split(',').map(s => s.trim()).filter(Boolean);
    if (parsed.length > 1) {
      setAdminSizeMode('multi');
      renderSizesInForm(parsed.map(s => ({ name: s, price: product.price })));
    } else if (parsed.length === 1) {
      setAdminSizeMode('single-custom');
      const singleInput = document.getElementById('pSingleCustomSize');
      if (singleInput) singleInput.value = parsed[0];
    } else {
      setAdminSizeMode('none');
    }
  } else {
    setAdminSizeMode('none');
  }

  // Handle Shades Mode
  const validShades = (product.shades || []).filter(s => s && s.name && s.name !== 'Standard Pack' && !s.name.toLowerCase().startsWith('none'));
  if (validShades.length > 0) {
    setAdminShadeMode('custom');
    renderShadesInForm(validShades);
  } else {
    setAdminShadeMode('none');
  }

  updateAdminImagePreview(product.image);

  document.getElementById('adminFormModeTitle').textContent = `Edit Product: ${product.name}`;
  document.getElementById('adminSaveBtnText').textContent = 'Update Product Details';
  document.getElementById('adminCancelEditBtn').style.display = 'inline-flex';

  switchAdminTab('add-product');
}

async function handleProductFormSubmit(e) {
  e.preventDefault();

  const editId = document.getElementById('adminEditProductId').value;
  const name = document.getElementById('pName').value.trim();
  const category = document.getElementById('pCategory').value;
  const badge = document.getElementById('pBadge').value.trim();
  const inStock = document.getElementById('pInStock')?.value === '1';
  const price = parseInt(document.getElementById('pPrice').value, 10) || 0;
  const origPriceVal = document.getElementById('pOriginalPrice').value.trim();
  const originalPrice = origPriceVal ? parseInt(origPriceVal, 10) : 0;
  const description = document.getElementById('pDescription').value.trim();
  const details = document.getElementById('pDetails').value.trim();
  const image = document.getElementById('pImageUrl').value.trim() || 'assets/images/hero_banner.jpg';
  const rating = parseFloat(document.getElementById('pRating').value) || 4.9;
  const reviewsCount = parseInt(document.getElementById('pReviewsCount').value, 10) || 450;
  const shades = collectShadesFromForm();
  const sizes = collectSizesFromForm();

  const submitBtn = document.getElementById('adminSaveProductBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving to Database...';
  }

  const payload = {
    name,
    category,
    badge: badge || (editId ? '' : 'New Arrival'),
    badgeClass: (badge || '').toLowerCase().includes('ruby') || (badge || '').toLowerCase().includes('save') ? 'badge-ruby' : 'badge-gold',
    inStock,
    price,
    originalPrice,
    description,
    details,
    image,
    rating,
    reviewsCount,
    shades,
    sizes,
    createdAt: editId ? undefined : new Date().toISOString()
  };

  let res;
  if (editId) {
    res = await API.updateProduct(parseInt(editId, 10), payload);
  } else {
    res = await API.createProduct(payload);
  }

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> ' + (editId ? 'Update Product Details' : 'Save & Publish Product');
  }

  if (res && res.success) {
    await syncProductsFromDatabase();
    showToast(editId ? `✓ Updated "${name}" in live cloud database!` : `✓ Added "${name}" across all devices worldwide!`);
    resetAdminProductForm();
    switchAdminTab('catalog');
  } else {
    showToast('✕ Error saving product: ' + (res.error || 'Unauthorized'));
  }
}

async function deleteProductItem(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  if (confirm(`Are you sure you want to delete "${product.name}" from the store database? All devices will no longer see this product.`)) {
    const res = await API.deleteProduct(productId);
    if (res && res.success) {
      await syncProductsFromDatabase();
      showToast(`✓ Removed "${product.name.slice(0, 20)}..." from database`);
    } else {
      showToast('✕ Error deleting product: ' + (res.error || 'Unauthorized'));
    }
  }
}

function exportProductsJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(PRODUCTS_DATA, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "products.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('✓ "products.json" downloaded! Upload it to GitHub to sync all phones worldwide.');
}

