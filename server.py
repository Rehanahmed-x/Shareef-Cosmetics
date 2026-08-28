#!/usr/bin/env python3
"""
Shareef Cosmetics - Secure Full-Stack Server & REST API Engine
Powered by Python Native Standard Library & SQLite Database
"""

import os
import sys
import json
import sqlite3
import hashlib
import hmac
import secrets
import time
import mimetypes
import urllib.parse
from http.server import HTTPServer, BaseHTTPRequestHandler
import socket

# Database file location
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'shareef_cosmetics.db')
PORT = int(os.environ.get('PORT', 5000))
HOST = '0.0.0.0'

# Session tokens store (in addition to DB for ultra-fast validation)
# token -> { "user_id": int, "username": str, "expires_at": float }
ACTIVE_SESSIONS = {}
SESSION_DURATION_SECONDS = 7 * 24 * 3600  # 7 days

# =====================================================================
# 1. DATABASE MANAGEMENT & SCHEMA INITIALIZATION
# =====================================================================
def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def hash_password(password, salt=None):
    if salt is None:
        salt = secrets.token_hex(16)
    # PBKDF2 with 100,000 iterations
    key = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt.encode('utf-8'),
        100000
    )
    return key.hex(), salt

def verify_password(password, stored_hash, salt):
    key, _ = hash_password(password, salt)
    return hmac.compare_digest(key, stored_hash)

DEFAULT_PRODUCTS = [
    {
        "name": "Pond's Bright Beauty Spot-less Glow Face Wash (100g)",
        "category": "skincare",
        "price": 480,
        "original_price": 550,
        "badge": "Pakistan Top Choice",
        "badge_class": "badge-gold",
        "rating": 4.9,
        "reviews_count": 680,
        "image": "assets/images/products/ponds_facewash.jpg",
        "description": "Enriched with Vitamin B3+ formula, clinically proven to fade dark spots and remove dead skin cells for a radiant spot-less glowing skin.",
        "shades": "[{\"name\": \"100g Standard Pack\", \"color\": \"#EB4B78\"}, {\"name\": \"50g Travel Pack\", \"color\": \"#F6A4BA\"}]",
        "details": "Vitamin B3+ Formula • Removes Dullness • Daily Cleanser"
    },
    {
        "name": "Pond's Moisturizing Cold Cream (100ml)",
        "category": "skincare",
        "price": 390,
        "original_price": 450,
        "badge": "Winter Classic",
        "badge_class": "",
        "rating": 4.8,
        "reviews_count": 540,
        "image": "assets/images/products/ponds_cold_cream.jpg",
        "description": "The iconic deep moisturizer infused with vital moisture nutrients to protect against dry, rough skin and provide 24-hour softness.",
        "shades": "[{\"name\": \"100ml Jar\", \"color\": \"#325FAF\"}, {\"name\": \"55ml Tub\", \"color\": \"#82A8E5\"}]",
        "details": "Rich Moisture • 24hr Nourishment • Soft Velvety Skin"
    },
    {
        "name": "Himalaya Purifying Neem Face Wash (150ml)",
        "category": "skincare",
        "price": 650,
        "original_price": 750,
        "badge": "Herbal Bestseller",
        "badge_class": "badge-gold",
        "rating": 4.9,
        "reviews_count": 920,
        "image": "assets/images/products/himalaya_neem_facewash.jpg",
        "description": "Soap-free herbal formulation that clears impurities and prevents pimples with antibacterial Neem and purifying Turmeric.",
        "shades": "[{\"name\": \"150ml Value Pump\", \"color\": \"#2E7D32\"}, {\"name\": \"100ml Tube\", \"color\": \"#66BB6A\"}]",
        "details": "Neem & Turmeric • 100% Herbal Actives • Soap Free"
    },
    {
        "name": "Himalaya Herbals Nourishing Skin Cream (100ml)",
        "category": "skincare",
        "price": 420,
        "original_price": 500,
        "badge": "All Day Hydration",
        "badge_class": "",
        "rating": 4.8,
        "reviews_count": 390,
        "image": "assets/images/products/himalaya_skin_cream.jpg",
        "description": "Light and non-greasy daily use cream enriched with Aloe Vera and Winter Cherry to protect skin from pollution and dry weather.",
        "shades": "[{\"name\": \"100ml Tub\", \"color\": \"#00897B\"}]",
        "details": "Aloe Vera & Ashwagandha • Non-Greasy • All Skin Types"
    },
    {
        "name": "Saeed Ghani Pure Damask Rose Water Spray (Arq-e-Gulab 120ml)",
        "category": "skincare",
        "price": 280,
        "original_price": 350,
        "badge": "100% Natural Herbal",
        "badge_class": "badge-gold",
        "rating": 5.0,
        "reviews_count": 1150,
        "image": "assets/images/products/saeed_ghani_arq_e_gulab.jpg",
        "description": "Traditional steam-distilled pure Damask rose water. Tones pores, balances skin pH, and refreshes the face instantly in Pakistani summers.",
        "shades": "[{\"name\": \"120ml Mist Spray\", \"color\": \"#CD325A\"}]",
        "details": "Pure Steam Distilled • Zero Alcohol • Natural Pore Toner"
    },
    {
        "name": "Saeed Ghani Mughziat 7 Natural Oils Hair Tonic (200ml)",
        "category": "haircare",
        "price": 490,
        "original_price": 600,
        "badge": "Heritage Hair Secret",
        "badge_class": "",
        "rating": 4.9,
        "reviews_count": 780,
        "image": "assets/images/products/saeed_ghani_mughziat_oil.jpg",
        "description": "Ancient Ayurvedic blend of Almond, Olive, Castor, Sesame, Mustard, Coconut, and Black Seed oils for deep hair strength and growth.",
        "shades": "[{\"name\": \"200ml Glass Bottle\", \"color\": \"#A07828\"}]",
        "details": "7 Natural Seed Oils • Anti-Hairfall • Herbal Root Nourishment"
    },
    {
        "name": "Saeed Ghani Husn-e-Yousuf Herbal Beauty Cream (60g)",
        "category": "skincare",
        "price": 380,
        "original_price": 460,
        "badge": "Glowing Complexion",
        "badge_class": "",
        "rating": 4.7,
        "reviews_count": 460,
        "image": "assets/images/products/saeed_ghani_husn_e_yousuf.jpg",
        "description": "Traditional botanical blend formulated with Husn-e-Yousuf herbs, saffron, and natural extracts to restore healthy radiance and soft texture.",
        "shades": "[{\"name\": \"60g Gold Jar\", \"color\": \"#C3912D\"}]",
        "details": "Herbal Extracts • Saffron & Pearl Minerals • Night & Day"
    },
    {
        "name": "Medora of London Velvet Matte Lipstick (Classic Collection)",
        "category": "lips",
        "price": 350,
        "original_price": 450,
        "badge": "Pakistani Icon",
        "badge_class": "badge-ruby",
        "rating": 4.9,
        "reviews_count": 1420,
        "image": "assets/images/products/medora_matte_lipstick.jpg",
        "description": "The legendary Pakistani lipstick favorite for over 50 years. Rich pigment matte payoff with nourishing vitamin E in time-tested shades.",
        "shades": "[{\"name\": \"238 Dusty Rose\", \"color\": \"#B86B77\"}, {\"name\": \"201 Ruby Surkh\", \"color\": \"#881B2C\"}, {\"name\": \"215 Mitti Nude\", \"color\": \"#B37358\"}, {\"name\": \"242 Pink Velvet\", \"color\": \"#D97587\"}]",
        "details": "Long-wearing Matte • Vitamin E Enriched • Original Swatch"
    },
    {
        "name": "Medora Flawless Matte Compact Face Powder with Puff",
        "category": "face",
        "price": 320,
        "original_price": 400,
        "badge": "Daily Staple",
        "badge_class": "",
        "rating": 4.7,
        "reviews_count": 510,
        "image": "assets/images/products/medora_compact_powder.jpg",
        "description": "Silk micro-powder designed to control sweat and shine while giving lightweight buildable coverage for everyday Pakistani college and work wear.",
        "shades": "[{\"name\": \"Natural Light #01\", \"color\": \"#F6E4D3\"}, {\"name\": \"Warm Wheatish #02\", \"color\": \"#E4C3A3\"}, {\"name\": \"Medium Olive #03\", \"color\": \"#CE9F72\"}]",
        "details": "Mirror & Puff Included • Oil Absorption • Pocket Friendly"
    },
    {
        "name": "Rivaj UK HD Matte Mineral Sunblock SPF 60 (100ml)",
        "category": "skincare",
        "price": 950,
        "original_price": 1200,
        "badge": "Summer Must-Have",
        "badge_class": "badge-gold",
        "rating": 4.9,
        "reviews_count": 880,
        "image": "assets/images/products/rivaj_mineral_sunblock.jpg",
        "description": "Broad spectrum UVA/UVB mineral sun protection formulated for Pakistan hot climate. Sweat-resistant with zero white cast and smooth matte finish.",
        "shades": "[{\"name\": \"100ml Tube (Universal)\", \"color\": \"#F08C14\"}]",
        "details": "SPF 60 PA+++ • Zinc Oxide Mineral Filter • Water Resistant"
    },
    {
        "name": "Rivaj UK Deep Cleansing Charcoal Peel-Off Black Mask (100ml)",
        "category": "skincare",
        "price": 450,
        "original_price": 580,
        "badge": "Pore Detox",
        "badge_class": "",
        "rating": 4.8,
        "reviews_count": 620,
        "image": "assets/images/products/rivaj_charcoal_mask.jpg",
        "description": "Activated bamboo charcoal formula that deeply extracts blackheads, unclogs congested pores, and removes facial excess sebum.",
        "shades": "[{\"name\": \"100ml Black Gel Tube\", \"color\": \"#282828\"}]",
        "details": "Activated Charcoal • Removes Blackheads • Tightens Pores"
    },
    {
        "name": "Golden Rose Velvet Matte Lipstick Crayon",
        "category": "lips",
        "price": 1150,
        "original_price": 1400,
        "badge": "Trending Beauty",
        "badge_class": "",
        "rating": 4.9,
        "reviews_count": 380,
        "image": "assets/images/products/golden_rose_velvet_lipstick.jpg",
        "description": "Ultra-creamy matte lipstick crayon that glides effortlessly on lips with precise contouring definition. Non-drying and highly pigmented.",
        "shades": "[{\"name\": \"Nude Rose #16\", \"color\": \"#A5464B\"}, {\"name\": \"Deep Burgundy #02\", \"color\": \"#6A1E2B\"}, {\"name\": \"Warm Terracotta #24\", \"color\": \"#B85842\"}]",
        "details": "Velvet Matte Finish • Enriched with Vitamin E • Dermatologically Tested"
    },
    {
        "name": "Christine High Precision Oil-Control Compact Powder",
        "category": "face",
        "price": 680,
        "original_price": 850,
        "badge": "Pro Coverage",
        "badge_class": "",
        "rating": 4.8,
        "reviews_count": 490,
        "image": "assets/images/products/christine_compact_powder.jpg",
        "description": "Micro-fine pressed powder that locks foundation in place for 12+ hours without caking. Blurs pores and absorbs oil in humid Karachi and Lahore weather.",
        "shades": "[{\"name\": \"Ivory #91\", \"color\": \"#F5E4D5\"}, {\"name\": \"Natural Beige #93\", \"color\": \"#E5CCA9\"}, {\"name\": \"Honey Wheat #95\", \"color\": \"#D4B38A\"}]",
        "details": "High Definition • Velvet Texture • Includes Luxury Mirror"
    },
    {
        "name": "Christine Shiny Pearl Single Velvet Eyeshadow & Highlighter",
        "category": "face",
        "price": 420,
        "original_price": 550,
        "badge": "Shimmer Glow",
        "badge_class": "",
        "rating": 4.7,
        "reviews_count": 310,
        "image": "assets/images/products/christine_pearl_eyeshadow.jpg",
        "description": "High-impact shimmer pearl pigment that doubles as an eyeshadow and cheekbone highlighter for that radiant Pakistani wedding party glow.",
        "shades": "[{\"name\": \"Champagne Gold #04\", \"color\": \"#E6C896\"}, {\"name\": \"Rose Gold #09\", \"color\": \"#E4A5A5\"}, {\"name\": \"Silver Starlight #01\", \"color\": \"#DCE2E6\"}]",
        "details": "Intense Shimmer • Multi-use Cheek & Eyes • Crease Proof"
    },
    {
        "name": "Masarrat Misbah Silk Luminous Liquid Foundation (35ml)",
        "category": "face",
        "price": 3650,
        "original_price": 4200,
        "badge": "100% Halal Luxury",
        "badge_class": "badge-gold",
        "rating": 5.0,
        "reviews_count": 890,
        "image": "assets/images/products/masarrat_misbah_foundation.jpg",
        "description": "Formulated specifically for Pakistani warm and wheatish undertones. Weightless fluid texture provides medium to full coverage with a healthy silk radiance.",
        "shades": "[{\"name\": \"Fair Ivory (MM01)\", \"color\": \"#F6DFCE\"}, {\"name\": \"Warm Natural (MM02)\", \"color\": \"#E8C6A5\"}, {\"name\": \"Golden Beige (MM03)\", \"color\": \"#DDB68F\"}, {\"name\": \"Warm Olive (MM04)\", \"color\": \"#C89D73\"}]",
        "details": "Halal Certified • Formulated for Asian Skin • Non-comedogenic"
    },
    {
        "name": "Tibet Snow Moisturizing Beauty Vanishing Cream (50g)",
        "category": "skincare",
        "price": 180,
        "original_price": 220,
        "badge": "Heritage Vintage 1950",
        "badge_class": "badge-ruby",
        "rating": 4.9,
        "reviews_count": 1600,
        "image": "assets/images/products/tibet_snow_cream.jpg",
        "description": "Pakistan most famous vintage beauty vanishing cream. Keeps skin clear, soft, and oil-free with a classic cooling touch loved by generations.",
        "shades": "[{\"name\": \"50g Original Glass Jar\", \"color\": \"#1E64B4\"}]",
        "details": "Vanishing Formula • Controls Oil • 70+ Years Trusted Heritage"
    },
    {
        "name": "Olivia Herbal Bleach Cream with Avocado & Rose (Large Pack)",
        "category": "skincare",
        "price": 220,
        "original_price": 280,
        "badge": "Salon Favorite",
        "badge_class": "",
        "rating": 4.8,
        "reviews_count": 710,
        "image": "assets/images/products/olivia_bleach_cream.jpg",
        "description": "Gentle herbal bleach cream enriched with nourishing Avocado oil and calming Rose water to lighten facial hair naturally without burning or irritation.",
        "shades": "[{\"name\": \"Avocado & Rose Herbal\", \"color\": \"#288C46\"}]",
        "details": "Infused with Avocado • No Harsh Stinging • Salon Grade"
    },
    {
        "name": "Hemani Organic Tea Tree Purifying Face Serum (30ml)",
        "category": "skincare",
        "price": 950,
        "original_price": 1250,
        "badge": "Anti-Acne Herbal",
        "badge_class": "badge-gold",
        "rating": 4.9,
        "reviews_count": 340,
        "image": "assets/images/products/hemani_tea_tree_serum.jpg",
        "description": "Concentrated 100% natural Australian tea tree oil and willow bark extract to target breakouts, reduce redness, and refine enlarged pores.",
        "shades": "[{\"name\": \"30ml Dropper Bottle\", \"color\": \"#286E3C\"}]",
        "details": "Pure Tea Tree Oil • Anti-Blemish • Lightweight Absorption"
    },
    {
        "name": "Care Honey & Almond Nourishing Body Lotion (200ml)",
        "category": "skincare",
        "price": 380,
        "original_price": 480,
        "badge": "Winter Care Staple",
        "badge_class": "",
        "rating": 4.8,
        "reviews_count": 520,
        "image": "assets/images/products/care_honey_lotion.jpg",
        "description": "Deep penetrating daily body lotion packed with pure Honey and Almond oil extracts to restore dry skin elasticity and all-day smoothness.",
        "shades": "[{\"name\": \"200ml Pump Bottle\", \"color\": \"#DC961E\"}]",
        "details": "Real Honey & Almonds • 24-Hour Softness • Non-Sticky Formula"
    },
    {
        "name": "Glow & Lovely Advanced Multivitamin Daily Glow Cream (50g)",
        "category": "face",
        "price": 320,
        "original_price": 390,
        "badge": "Multivitamin Glow",
        "badge_class": "",
        "rating": 4.8,
        "reviews_count": 1240,
        "image": "assets/images/products/glow_and_lovely_cream.jpg",
        "description": "Clinically tested with Vitamin B3, Vitamin C, and Vitamin E to even out skin tone, reduce sun spots, and provide sun protection with a matte glow.",
        "shades": "[{\"name\": \"50g Daily Tube\", \"color\": \"#E13C6E\"}]",
        "details": "Vitamin B3, C & E • SPF 15 Sun Protection • Matte Radiant Glow"
    }
]

def init_database():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Products Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price INTEGER NOT NULL,
        original_price INTEGER DEFAULT 0,
        badge TEXT DEFAULT '',
        badge_class TEXT DEFAULT '',
        rating REAL DEFAULT 5.0,
        reviews_count INTEGER DEFAULT 0,
        image TEXT NOT NULL,
        description TEXT DEFAULT '',
        shades TEXT DEFAULT '[]',
        details TEXT DEFAULT '',
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # Orders Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        order_number INTEGER,
        customer_name TEXT NOT NULL,
        customer_phone TEXT NOT NULL,
        customer_email TEXT DEFAULT '',
        customer_address TEXT NOT NULL,
        customer_city TEXT NOT NULL,
        items_json TEXT NOT NULL,
        subtotal INTEGER NOT NULL,
        delivery_fee INTEGER DEFAULT 200,
        discount INTEGER DEFAULT 0,
        grand_total INTEGER NOT NULL,
        payment_method TEXT DEFAULT 'cod',
        status TEXT DEFAULT 'pending',
        notes TEXT DEFAULT '',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # Safe Schema Migrations for existing SQLite database
    try:
        cursor.execute("ALTER TABLE orders ADD COLUMN receipt_image TEXT DEFAULT ''")
    except Exception:
        pass
    try:
        cursor.execute("ALTER TABLE products ADD COLUMN sizes TEXT DEFAULT '[]'")
    except Exception:
        pass

    # Admin Users Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS admin_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        salt TEXT NOT NULL,
        role TEXT DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # Store Settings Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS store_settings (
        setting_key TEXT PRIMARY KEY,
        setting_value TEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # Reviews Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS product_reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        author_name TEXT NOT NULL,
        rating INTEGER NOT NULL,
        review_text TEXT NOT NULL,
        verified_buyer INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # Seed Admin User if not exists
    cursor.execute('SELECT COUNT(*) FROM admin_users')
    if cursor.fetchone()[0] == 0:
        pwd_hash, salt = hash_password('umair2026')
        cursor.execute(
            'INSERT INTO admin_users (username, password_hash, salt, role) VALUES (?, ?, ?, ?)',
            ('admin', pwd_hash, salt, 'superadmin')
        )
        print("[DATABASE] Created initial secure admin account: 'admin'")

    # Seed Settings if not exists
    default_settings = {
        'whatsapp': '923296209082',
        'email': 'care@shareefcosmetics.pk',
        'store_name': 'Shareef Cosmetics Pakistan',
        'currency': 'PKR',
        'delivery_fee': '200',
        'free_delivery_threshold': '2500'
    }
    for k, v in default_settings.items():
        cursor.execute('INSERT OR IGNORE INTO store_settings (setting_key, setting_value) VALUES (?, ?)', (k, v))

    # Seed Products if empty
    cursor.execute('SELECT COUNT(*) FROM products')
    count = cursor.fetchone()[0]
    if count == 0:
        print(f"[DATABASE] Seeding {len(DEFAULT_PRODUCTS)} iconic Pakistani cosmetics...")
        for p in DEFAULT_PRODUCTS:
            cursor.execute('''
            INSERT INTO products (
                name, category, price, original_price, badge, badge_class,
                rating, reviews_count, image, description, shades, details
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                p['name'], p['category'], p['price'], p['original_price'],
                p['badge'], p['badge_class'], p['rating'], p['reviews_count'],
                p['image'], p['description'], p['shades'], p['details']
            ))
        print("[DATABASE] Seeding complete!")

    conn.commit()
    conn.close()

# =====================================================================
# 2. AUTHENTICATION & SECURITY UTILITIES
# =====================================================================
def create_session(user_id, username):
    token = secrets.token_hex(32)
    expires_at = time.time() + SESSION_DURATION_SECONDS
    ACTIVE_SESSIONS[token] = {
        'user_id': user_id,
        'username': username,
        'expires_at': expires_at
    }
    return token

def authenticate_request(headers):
    auth_header = headers.get('Authorization', '')
    token = None
    if auth_header.startswith('Bearer '):
        token = auth_header[7:].strip()
    elif 'x-admin-token' in headers:
        token = headers.get('x-admin-token').strip()

    if not token or token not in ACTIVE_SESSIONS:
        return None

    session = ACTIVE_SESSIONS[token]
    if time.time() > session['expires_at']:
        del ACTIVE_SESSIONS[token]
        return None

    return session

def format_product_row(row):
    d = dict(row)
    # Parse shades JSON string
    if 'shades' in d and isinstance(d['shades'], str):
        try:
            d['shades'] = json.loads(d['shades'])
        except Exception:
            d['shades'] = []
    # Parse sizes JSON string if present
    if 'sizes' in d and isinstance(d['sizes'], str):
        try:
            d['sizes'] = json.loads(d['sizes'])
        except Exception:
            d['sizes'] = []
    # Map original_price to camelCase for frontend compatibility
    d['originalPrice'] = d.get('original_price', 0)
    d['reviewsCount'] = d.get('reviews_count', 0)
    d['badgeClass'] = d.get('badge_class', '')
    return d

def format_order_row(row):
    d = dict(row)
    if 'items_json' in d and isinstance(d['items_json'], str):
        try:
            d['items'] = json.loads(d['items_json'])
        except Exception:
            d['items'] = []
    d['grandTotal'] = d.get('grand_total', 0)
    d['subtotal'] = d.get('subtotal', 0)
    d['deliveryFee'] = d.get('delivery_fee', 200)
    d['discount'] = d.get('discount', 0)
    d['paymentMethod'] = d.get('payment_method') or 'Cash on Delivery (COD)'
    d['payment_method'] = d['paymentMethod']
    d['receiptImage'] = d.get('receipt_image') or ''
    d['customer'] = {
        'name': d.get('customer_name', ''),
        'phone': d.get('customer_phone', ''),
        'email': d.get('customer_email', ''),
        'address': d.get('customer_address', ''),
        'city': d.get('customer_city', '')
    }
    d['timestamp'] = d.get('created_at', '')
    return d

# =====================================================================
# 3. HTTP REQUEST HANDLER WITH REST API & STATIC SERVING
# =====================================================================
class ShareefAppHandler(BaseHTTPRequestHandler):

    def _set_headers(self, status=200, content_type='application/json'):
        self.send_response(status)
        self.send_header('Content-Type', content_type)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-token')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers(204)

    def _read_json_body(self):
        content_len = int(self.headers.get('Content-Length', 0))
        if content_len == 0:
            return {}
        body = self.rfile.read(content_len)
        try:
            return json.loads(body.decode('utf-8'))
        except Exception:
            return {}

    # -------------------------------------------------------------
    # GET REQUESTS
    # -------------------------------------------------------------
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query_params = urllib.parse.parse_qs(parsed_url.query)

        # 1. API: Get all products (Public)
        if path == '/api/products':
            category = query_params.get('category', [None])[0]
            search = query_params.get('q', [None])[0]
            conn = get_db_connection()
            cursor = conn.cursor()
            
            sql = "SELECT * FROM products WHERE is_active = 1"
            params = []
            if category and category != 'all':
                sql += " AND category = ?"
                params.append(category)
            if search:
                sql += " AND (name LIKE ? OR description LIKE ? OR category LIKE ?)"
                search_like = f"%{search}%"
                params.extend([search_like, search_like, search_like])
            
            sql += " ORDER BY id ASC"
            cursor.execute(sql, params)
            rows = cursor.fetchall()
            products = [format_product_row(r) for r in rows]
            conn.close()

            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'count': len(products), 'data': products}).encode('utf-8'))
            return

        # 2. API: Get single product by ID (Public)
        if path.startswith('/api/products/'):
            parts = path.strip('/').split('/')
            if len(parts) == 3 and parts[2].isdigit():
                pid = int(parts[2])
                conn = get_db_connection()
                cursor = conn.cursor()
                cursor.execute("SELECT * FROM products WHERE id = ?", (pid,))
                row = cursor.fetchone()
                conn.close()
                if row:
                    self._set_headers(200)
                    self.wfile.write(json.dumps({'success': True, 'data': format_product_row(row)}).encode('utf-8'))
                else:
                    self._set_headers(404)
                    self.wfile.write(json.dumps({'success': False, 'error': 'Product not found'}).encode('utf-8'))
                return

        # 3. API: Admin Verification (Check if current token is valid)
        if path == '/api/admin/verify':
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return
            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'authenticated': True, 'user': session['username']}).encode('utf-8'))
            return

        # 4. API: Admin Dashboard Stats (Admin Only)
        if path == '/api/admin/stats':
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return
            
            conn = get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute("SELECT COUNT(*) FROM products WHERE is_active = 1")
            total_products = cursor.fetchone()[0]
            cursor.execute("SELECT COUNT(*) FROM products WHERE category = 'skincare' AND is_active = 1")
            skincare_count = cursor.fetchone()[0]
            cursor.execute("SELECT COUNT(*) FROM products WHERE (category = 'face' OR category = 'lips') AND is_active = 1")
            face_count = cursor.fetchone()[0]
            cursor.execute("SELECT COUNT(*) FROM products WHERE category = 'haircare' AND is_active = 1")
            haircare_count = cursor.fetchone()[0]

            cursor.execute("SELECT COUNT(*) FROM orders")
            total_orders = cursor.fetchone()[0]
            cursor.execute("SELECT COUNT(*) FROM orders WHERE status = 'pending'")
            pending_orders = cursor.fetchone()[0]
            cursor.execute("SELECT COUNT(*) FROM orders WHERE status = 'dispatched'")
            dispatched_orders = cursor.fetchone()[0]
            cursor.execute("SELECT SUM(grand_total) FROM orders WHERE status != 'cancelled'")
            revenue = cursor.fetchone()[0] or 0

            conn.close()
            self._set_headers(200)
            self.wfile.write(json.dumps({
                'success': True,
                'stats': {
                    'totalProducts': total_products,
                    'skincareCount': skincare_count,
                    'faceCount': face_count,
                    'haircareCount': haircare_count,
                    'totalOrders': total_orders,
                    'pendingOrders': pending_orders,
                    'dispatchedOrders': dispatched_orders,
                    'revenue': revenue
                }
            }).encode('utf-8'))
            return

        # 5. API: Get Orders (Admin Only)
        if path == '/api/orders':
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return
            
            status = query_params.get('status', [None])[0]
            search = query_params.get('q', [None])[0]
            conn = get_db_connection()
            cursor = conn.cursor()

            sql = "SELECT * FROM orders WHERE 1=1"
            params = []
            if status and status != 'all':
                sql += " AND status = ?"
                params.append(status)
            if search:
                sql += " AND (id LIKE ? OR customer_name LIKE ? OR customer_phone LIKE ? OR customer_city LIKE ?)"
                search_like = f"%{search}%"
                params.extend([search_like, search_like, search_like, search_like])
            
            sql += " ORDER BY created_at DESC"
            cursor.execute(sql, params)
            rows = cursor.fetchall()
            orders = [format_order_row(r) for r in rows]
            conn.close()

            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'count': len(orders), 'data': orders}).encode('utf-8'))
            return

        # 6. API: Get Store Settings (Public)
        if path == '/api/settings':
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT setting_key, setting_value FROM store_settings")
            rows = cursor.fetchall()
            conn.close()
            settings = {r['setting_key']: r['setting_value'] for r in rows}
            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'data': settings}).encode('utf-8'))
            return

        # 7. Static File Serving
        self._serve_static(path)

    # -------------------------------------------------------------
    # POST REQUESTS
    # -------------------------------------------------------------
    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        body = self._read_json_body()

        # 1. API: Admin Login
        if path == '/api/admin/login':
            entered_password = body.get('password', '').strip()
            username = body.get('username', 'admin').strip()

            if not entered_password:
                self._set_headers(400)
                self.wfile.write(json.dumps({'success': False, 'error': 'Password is required'}).encode('utf-8'))
                return

            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT id, username, password_hash, salt FROM admin_users WHERE username = ?", (username,))
            user = cursor.fetchone()
            conn.close()

            if user and verify_password(entered_password, user['password_hash'], user['salt']):
                token = create_session(user['id'], user['username'])
                self._set_headers(200)
                self.wfile.write(json.dumps({
                    'success': True,
                    'token': token,
                    'username': user['username'],
                    'message': 'Login successful'
                }).encode('utf-8'))
            else:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Invalid credentials. Access denied.'}).encode('utf-8'))
            return

        # 2. API: Admin Logout
        if path == '/api/admin/logout':
            session = authenticate_request(self.headers)
            if session:
                auth_header = self.headers.get('Authorization', '')
                if auth_header.startswith('Bearer '):
                    token = auth_header[7:].strip()
                    ACTIVE_SESSIONS.pop(token, None)
            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'message': 'Logged out'}).encode('utf-8'))
            return

        # 3. API: Admin Change Password
        if path == '/api/admin/change-password':
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            new_password = body.get('new_password', '').strip()
            if not new_password or len(new_password) < 4:
                self._set_headers(400)
                self.wfile.write(json.dumps({'success': False, 'error': 'Password must be at least 4 characters'}).encode('utf-8'))
                return

            pwd_hash, salt = hash_password(new_password)
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE admin_users SET password_hash = ?, salt = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
                (pwd_hash, salt, session['user_id'])
            )
            conn.commit()
            conn.close()

            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'message': 'Master Password securely updated in database!'}).encode('utf-8'))
            return

        # 4. API: Create Product (Admin Only)
        if path == '/api/products':
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            name = body.get('name', '').strip()
            category = body.get('category', 'skincare').strip()
            price = int(body.get('price', 0))
            original_price = int(body.get('originalPrice', body.get('original_price', 0)))
            badge = body.get('badge', '').strip()
            badge_class = body.get('badgeClass', body.get('badge_class', ''))
            image = body.get('image', '').strip() or 'assets/images/products/ponds_facewash.jpg'
            description = body.get('description', '').strip()
            shades = json.dumps(body.get('shades', []))
            sizes = json.dumps(body.get('sizes', []))
            details = body.get('details', '').strip()
            rating = float(body.get('rating', 5.0))
            reviews_count = int(body.get('reviewsCount', 0))

            if not name or price <= 0:
                self._set_headers(400)
                self.wfile.write(json.dumps({'success': False, 'error': 'Product name and valid price are required'}).encode('utf-8'))
                return

            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('''
            INSERT INTO products (
                name, category, price, original_price, badge, badge_class,
                rating, reviews_count, image, description, shades, sizes, details
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                name, category, price, original_price, badge, badge_class,
                rating, reviews_count, image, description, shades, sizes, details
            ))
            new_id = cursor.lastrowid
            conn.commit()
            
            cursor.execute("SELECT * FROM products WHERE id = ?", (new_id,))
            created_row = cursor.fetchone()
            conn.close()

            self._set_headers(201)
            self.wfile.write(json.dumps({'success': True, 'data': format_product_row(created_row)}).encode('utf-8'))
            return

        # 5. API: Reset Products to Defaults (Admin Only)
        if path == '/api/admin/reset-defaults':
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM products")
            for p in DEFAULT_PRODUCTS:
                cursor.execute('''
                INSERT INTO products (
                    name, category, price, original_price, badge, badge_class,
                    rating, reviews_count, image, description, shades, details
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    p['name'], p['category'], p['price'], p['original_price'],
                    p['badge'], p['badge_class'], p['rating'], p['reviews_count'],
                    p['image'], p['description'], p['shades'], p['details']
                ))
            conn.commit()
            cursor.execute("SELECT * FROM products ORDER BY id ASC")
            rows = cursor.fetchall()
            products = [format_product_row(r) for r in rows]
            conn.close()

            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'data': products, 'message': 'Reset catalog to 20 Pakistani classics'}).encode('utf-8'))
            return

        # 6. API: Place Order (Public Checkout)
        if path == '/api/orders':
            customer = body.get('customer', {})
            items = body.get('items', [])
            subtotal = int(body.get('subtotal', 0))
            delivery_fee = int(body.get('deliveryFee', 200))
            discount = int(body.get('discount', 0))
            grand_total = int(body.get('grandTotal', subtotal + delivery_fee - discount))
            payment_method = body.get('paymentMethod') or body.get('payment_method') or 'Cash on Delivery (COD)'
            receipt_image = body.get('receiptImage') or body.get('receipt_image') or ''
            notes = body.get('notes', '')

            name = customer.get('name', '').strip()
            phone = customer.get('phone', '').strip()
            address = customer.get('address', '').strip()
            city = customer.get('city', '').strip()

            if not name or not phone or not address or not items:
                self._set_headers(400)
                self.wfile.write(json.dumps({'success': False, 'error': 'Missing required customer or items information'}).encode('utf-8'))
                return

            order_id = f"SC-{int(time.time())}-{secrets.randbelow(900)+100}"
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('''
            INSERT INTO orders (
                id, customer_name, customer_phone, customer_email, customer_address, customer_city,
                items_json, subtotal, delivery_fee, discount, grand_total, payment_method, receipt_image, status, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                order_id, name, phone, customer.get('email', ''), address, city,
                json.dumps(items), subtotal, delivery_fee, discount, grand_total, payment_method, receipt_image, 'pending', notes
            ))
            conn.commit()
            
            cursor.execute("SELECT * FROM orders WHERE id = ?", (order_id,))
            created_order = cursor.fetchone()
            conn.close()

            self._set_headers(201)
            self.wfile.write(json.dumps({'success': True, 'orderId': order_id, 'data': format_order_row(created_order)}).encode('utf-8'))
            return

        # 7. API: Save Store Settings (Admin Only)
        if path == '/api/settings':
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            conn = get_db_connection()
            cursor = conn.cursor()
            for k, v in body.items():
                cursor.execute(
                    "INSERT INTO store_settings (setting_key, setting_value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP) "
                    "ON CONFLICT(setting_key) DO UPDATE SET setting_value = excluded.setting_value, updated_at = CURRENT_TIMESTAMP",
                    (str(k), str(v))
                )
            conn.commit()
            conn.close()

            self._set_headers(200)
            self.wfile.write(json.dumps({'success': True, 'message': 'Settings updated'}).encode('utf-8'))
            return

        self._set_headers(404)
        self.wfile.write(json.dumps({'success': False, 'error': 'Endpoint not found'}).encode('utf-8'))

    # -------------------------------------------------------------
    # PUT REQUESTS
    # -------------------------------------------------------------
    def do_PUT(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        body = self._read_json_body()

        # 1. API: Update Product (Admin Only)
        if path.startswith('/api/products/'):
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            parts = path.strip('/').split('/')
            if len(parts) == 3 and parts[2].isdigit():
                pid = int(parts[2])
                conn = get_db_connection()
                cursor = conn.cursor()
                cursor.execute("SELECT * FROM products WHERE id = ?", (pid,))
                existing = cursor.fetchone()
                if not existing:
                    conn.close()
                    self._set_headers(404)
                    self.wfile.write(json.dumps({'success': False, 'error': 'Product not found'}).encode('utf-8'))
                    return

                # Build dynamic update
                fields = []
                params = []
                for k, col in [
                    ('name', 'name'),
                    ('category', 'category'),
                    ('price', 'price'),
                    ('originalPrice', 'original_price'),
                    ('original_price', 'original_price'),
                    ('badge', 'badge'),
                    ('badgeClass', 'badge_class'),
                    ('badge_class', 'badge_class'),
                    ('rating', 'rating'),
                    ('reviewsCount', 'reviews_count'),
                    ('image', 'image'),
                    ('description', 'description'),
                    ('details', 'details')
                ]:
                    if k in body:
                        fields.append(f"{col} = ?")
                        params.append(body[k])
                
                if 'shades' in body:
                    fields.append("shades = ?")
                    params.append(json.dumps(body['shades']))

                if 'sizes' in body:
                    fields.append("sizes = ?")
                    params.append(json.dumps(body['sizes']))

                if fields:
                    fields.append("updated_at = CURRENT_TIMESTAMP")
                    params.append(pid)
                    sql = f"UPDATE products SET {', '.join(fields)} WHERE id = ?"
                    cursor.execute(sql, params)
                    conn.commit()

                cursor.execute("SELECT * FROM products WHERE id = ?", (pid,))
                updated_row = cursor.fetchone()
                conn.close()

                self._set_headers(200)
                self.wfile.write(json.dumps({'success': True, 'data': format_product_row(updated_row)}).encode('utf-8'))
                return

        # 2. API: Update Order Status (Admin Only)
        if path.startswith('/api/orders/') and path.endswith('/status'):
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            parts = path.strip('/').split('/')
            order_id = parts[2]
            new_status = body.get('status', '').strip().lower()

            valid_statuses = ['pending', 'confirmed', 'dispatched', 'delivered', 'cancelled']
            if new_status not in valid_statuses:
                self._set_headers(400)
                self.wfile.write(json.dumps({'success': False, 'error': f'Invalid status. Allowed: {valid_statuses}'}).encode('utf-8'))
                return

            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("UPDATE orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?", (new_status, order_id))
            conn.commit()
            cursor.execute("SELECT * FROM orders WHERE id = ?", (order_id,))
            updated_order = cursor.fetchone()
            conn.close()

            if updated_order:
                self._set_headers(200)
                self.wfile.write(json.dumps({'success': True, 'data': format_order_row(updated_order)}).encode('utf-8'))
            else:
                self._set_headers(404)
                self.wfile.write(json.dumps({'success': False, 'error': 'Order not found'}).encode('utf-8'))
            return

        self._set_headers(404)
        self.wfile.write(json.dumps({'success': False, 'error': 'Endpoint not found'}).encode('utf-8'))

    # -------------------------------------------------------------
    # DELETE REQUESTS
    # -------------------------------------------------------------
    def do_DELETE(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        # 1. API: Delete Product (Admin Only)
        if path.startswith('/api/products/'):
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            parts = path.strip('/').split('/')
            if len(parts) == 3 and parts[2].isdigit():
                pid = int(parts[2])
                conn = get_db_connection()
                cursor = conn.cursor()
                cursor.execute("DELETE FROM products WHERE id = ?", (pid,))
                conn.commit()
                conn.close()
                self._set_headers(200)
                self.wfile.write(json.dumps({'success': True, 'message': f'Product {pid} deleted'}).encode('utf-8'))
                return

        # 2. API: Delete Order (Admin Only)
        if path.startswith('/api/orders/'):
            session = authenticate_request(self.headers)
            if not session:
                self._set_headers(401)
                self.wfile.write(json.dumps({'success': False, 'error': 'Unauthorized'}).encode('utf-8'))
                return

            parts = path.strip('/').split('/')
            if len(parts) == 3:
                order_id = parts[2]
                conn = get_db_connection()
                cursor = conn.cursor()
                cursor.execute("DELETE FROM orders WHERE id = ?", (order_id,))
                conn.commit()
                conn.close()
                self._set_headers(200)
                self.wfile.write(json.dumps({'success': True, 'message': f'Order {order_id} deleted'}).encode('utf-8'))
                return

        self._set_headers(404)
        self.wfile.write(json.dumps({'success': False, 'error': 'Endpoint not found'}).encode('utf-8'))

    # -------------------------------------------------------------
    # STATIC ASSET SERVING
    # -------------------------------------------------------------
    def _serve_static(self, req_path):
        if req_path == '/' or req_path == '':
            file_path = os.path.join(BASE_DIR, 'index.html')
        else:
            # Clean path to prevent directory traversal
            clean_rel_path = os.path.normpath(req_path.lstrip('/')).replace('\\', '/')
            if clean_rel_path.startswith('..'):
                self._set_headers(403, 'text/plain')
                self.wfile.write(b'Access denied')
                return
            file_path = os.path.join(BASE_DIR, clean_rel_path)

        if not os.path.isfile(file_path):
            self._set_headers(404, 'text/html')
            self.wfile.write(b'<h1>404 Not Found</h1><p>The requested file does not exist on Shareef Cosmetics server.</p>')
            return

        # Guess MIME type
        ctype, _ = mimetypes.guess_type(file_path)
        if not ctype:
            if file_path.endswith('.css'):
                ctype = 'text/css'
            elif file_path.endswith('.js'):
                ctype = 'application/javascript'
            elif file_path.endswith('.json'):
                ctype = 'application/json'
            elif file_path.endswith('.jpg') or file_path.endswith('.jpeg'):
                ctype = 'image/jpeg'
            elif file_path.endswith('.png'):
                ctype = 'image/png'
            elif file_path.endswith('.webp'):
                ctype = 'image/webp'
            elif file_path.endswith('.svg'):
                ctype = 'image/svg+xml'
            else:
                ctype = 'application/octet-stream'

        try:
            with open(file_path, 'rb') as f:
                content = f.read()
            self._set_headers(200, ctype)
            self.wfile.write(content)
        except Exception as e:
            self._set_headers(500, 'text/plain')
            self.wfile.write(f'Server Error: {str(e)}'.encode('utf-8'))

    def log_message(self, format, *args):
        # Clean logging
        sys.stderr.write(f"[{time.strftime('%H:%M:%S')}] {args[0]} {args[1]}\n")

# =====================================================================
# 4. SERVER RUNNER WITH LOCAL IP DISCOVERY FOR PHONE ACCESS
# =====================================================================
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

def run():
    print("=" * 65)
    print("  SHAREEF COSMETICS - SECURE FULL-STACK APPLICATION SERVER")
    print("=" * 65)
    
    init_database()
    local_ip = get_local_ip()

    server_address = (HOST, PORT)
    httpd = HTTPServer(server_address, ShareefAppHandler)

    print(f"\n[SERVER] Server running successfully!")
    print(f"[SERVER] Local Access:    http://localhost:{PORT}")
    print(f"[SERVER] Phone / WiFi:    http://{local_ip}:{PORT}")
    print(f"[DATABASE] Connected to:  {DB_PATH}")
    print(f"[SECURITY] Admin Auth:    PBKDF2-HMAC-SHA256 Token Engine Active")
    print(f"[SECURITY] Default Login: admin / umair2026")
    print("\nPress Ctrl+C to stop the server.\n")
    print("=" * 65)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[SERVER] Stopping server gracefully...")
        httpd.server_close()
        print("[SERVER] Stopped.")

# =====================================================================
# 5. WSGI APPLICATION COMPATIBILITY FOR PYTHONANYWHERE
# =====================================================================
def application(environ, start_response):
    init_database()
    method = environ.get('REQUEST_METHOD', 'GET').upper()
    path = environ.get('PATH_INFO', '/')
    query = environ.get('QUERY_STRING', '')
    path_with_query = f"{path}?{query}" if query else path

    try:
        content_length = int(environ.get('CONTENT_LENGTH', 0) or 0)
    except (ValueError, TypeError):
        content_length = 0

    input_stream = environ.get('wsgi.input')
    body_bytes = input_stream.read(content_length) if input_stream and content_length > 0 else b''

    from io import BytesIO
    raw_headers = []
    for k, v in environ.items():
        if k.startswith('HTTP_'):
            header_name = k[5:].replace('_', '-').title()
            raw_headers.append(f"{header_name}: {v}\r\n")
        elif k in ('CONTENT_TYPE', 'CONTENT_LENGTH'):
            header_name = k.replace('_', '-').title()
            raw_headers.append(f"{header_name}: {v}\r\n")

    headers_text = "".join(raw_headers) + "\r\n"
    full_input = f"{method} {path_with_query} HTTP/1.1\r\n{headers_text}".encode('utf-8') + body_bytes

    class MockSocket:
        def __init__(self, in_data):
            self.rfile = BytesIO(in_data)
            self.wfile = BytesIO()
        def makefile(self, mode, *args, **kwargs):
            if 'r' in mode:
                return self.rfile
            return self.wfile
        def sendall(self, data):
            self.wfile.write(data)
        def close(self):
            pass

    mock_sock = MockSocket(full_input)
    try:
        ShareefAppHandler(mock_sock, ('127.0.0.1', 80), None)
    except Exception:
        pass

    output_bytes = mock_sock.wfile.getvalue()
    if b'\r\n\r\n' in output_bytes:
        header_part, body_part = output_bytes.split(b'\r\n\r\n', 1)
        lines = header_part.decode('latin1').split('\r\n')
        status_line = lines[0]
        status_code = status_line.split(' ', 2)[1] + ' ' + (status_line.split(' ', 2)[2] if len(status_line.split(' ', 2)) > 2 else 'OK')
        headers_list = []
        for h in lines[1:]:
            if ':' in h:
                hk, hv = h.split(':', 1)
                headers_list.append((hk.strip(), hv.strip()))
        start_response(status_code, headers_list)
        return [body_part]
    else:
        start_response('200 OK', [('Content-Type', 'application/json'), ('Access-Control-Allow-Origin', '*')])
        return [output_bytes]

app = application
wsgi_app = application

if __name__ == '__main__':
    run()
