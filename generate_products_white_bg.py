import os
import requests
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from io import BytesIO

os.makedirs('assets/images/products', exist_ok=True)

# List of all 20 Pakistani Products with search keywords & fallback render specs
products_specs = [
    {
        "id": 1,
        "filename": "ponds_facewash.jpg",
        "brand": "POND'S",
        "title": "Bright Beauty",
        "subtitle": "Spot-less Glow Face Wash",
        "badge": "100g",
        "theme_color": (235, 75, 120), # Pink
        "cap_color": (235, 75, 120),
        "body_color": (255, 245, 248),
        "shape": "tube"
    },
    {
        "id": 2,
        "filename": "ponds_cold_cream.jpg",
        "brand": "POND'S",
        "title": "Cold Cream",
        "subtitle": "Moisturizing & Nourishing",
        "badge": "100ml",
        "theme_color": (50, 95, 175), # Blue
        "cap_color": (50, 95, 175),
        "body_color": (255, 255, 255),
        "shape": "tub"
    },
    {
        "id": 3,
        "filename": "himalaya_neem_facewash.jpg",
        "brand": "Himalaya",
        "title": "Purifying Neem",
        "subtitle": "Face Wash - Prevents Pimples",
        "badge": "150ml",
        "theme_color": (46, 125, 50), # Herbal Green
        "cap_color": (46, 125, 50),
        "body_color": (230, 248, 235),
        "shape": "tube"
    },
    {
        "id": 4,
        "filename": "himalaya_skin_cream.jpg",
        "brand": "Himalaya",
        "title": "Nourishing Skin Cream",
        "subtitle": "Aloe Vera & Winter Cherry",
        "badge": "100ml",
        "theme_color": (0, 137, 123), # Teal Green
        "cap_color": (0, 137, 123),
        "body_color": (255, 255, 255),
        "shape": "tub"
    },
    {
        "id": 5,
        "filename": "saeed_ghani_arq_e_gulab.jpg",
        "brand": "Saeed Ghani",
        "title": "Pure Damask Rose Water",
        "subtitle": "Arq-e-Gulab Spray",
        "badge": "120ml",
        "theme_color": (205, 50, 90), # Rose
        "cap_color": (212, 175, 55), # Gold
        "body_color": (255, 240, 245),
        "shape": "spray"
    },
    {
        "id": 6,
        "filename": "saeed_ghani_mughziat_oil.jpg",
        "brand": "Saeed Ghani",
        "title": "Mughziat Hair Oil",
        "subtitle": "7 Natural Herbs & Seeds",
        "badge": "200ml",
        "theme_color": (160, 120, 40), # Golden Amber
        "cap_color": (40, 100, 50),
        "body_color": (245, 225, 170),
        "shape": "bottle"
    },
    {
        "id": 7,
        "filename": "saeed_ghani_husn_e_yousuf.jpg",
        "brand": "Saeed Ghani",
        "title": "Husn-e-Yousuf",
        "subtitle": "Herbal Beauty Cream",
        "badge": "60g",
        "theme_color": (195, 145, 45), # Gold
        "cap_color": (195, 145, 45),
        "body_color": (255, 250, 240),
        "shape": "jar"
    },
    {
        "id": 8,
        "filename": "medora_matte_lipstick.jpg",
        "brand": "Medora of London",
        "title": "Velvet Matte Lipstick",
        "subtitle": "Shade 238 Dusty Rose",
        "badge": "Iconic",
        "theme_color": (175, 55, 75), # Dusty Rose
        "cap_color": (30, 30, 30), # Black casing
        "body_color": (212, 175, 55), # Gold band
        "shape": "lipstick"
    },
    {
        "id": 9,
        "filename": "medora_compact_powder.jpg",
        "brand": "Medora of London",
        "title": "Flawless Matte",
        "subtitle": "Compact Face Powder",
        "badge": "With Puff",
        "theme_color": (215, 180, 140), # Beige
        "cap_color": (40, 40, 40),
        "body_color": (230, 205, 175),
        "shape": "compact"
    },
    {
        "id": 10,
        "filename": "rivaj_mineral_sunblock.jpg",
        "brand": "Rivaj UK",
        "title": "HD Matte Sunblock",
        "subtitle": "SPF 60 Broad Spectrum",
        "badge": "100ml",
        "theme_color": (240, 140, 20), # Orange
        "cap_color": (240, 140, 20),
        "body_color": (255, 255, 255),
        "shape": "tube"
    },
    {
        "id": 11,
        "filename": "rivaj_charcoal_mask.jpg",
        "brand": "Rivaj UK",
        "title": "Deep Cleansing Charcoal",
        "subtitle": "Peel-Off Black Mask",
        "badge": "100ml",
        "theme_color": (40, 40, 40), # Charcoal
        "cap_color": (20, 20, 20),
        "body_color": (50, 50, 50),
        "shape": "tube"
    },
    {
        "id": 12,
        "filename": "golden_rose_velvet_lipstick.jpg",
        "brand": "Golden Rose",
        "title": "Velvet Matte",
        "subtitle": "Nude Rose Crayon",
        "badge": "No. 16",
        "theme_color": (165, 70, 75),
        "cap_color": (120, 30, 40),
        "body_color": (35, 35, 35),
        "shape": "lipstick"
    },
    {
        "id": 13,
        "filename": "christine_compact_powder.jpg",
        "brand": "Christine",
        "title": "Oil-Control Matte",
        "subtitle": "High Definition Powder",
        "badge": "Ivory 91",
        "theme_color": (220, 185, 145),
        "cap_color": (212, 175, 55),
        "body_color": (240, 215, 185),
        "shape": "compact"
    },
    {
        "id": 14,
        "filename": "christine_pearl_eyeshadow.jpg",
        "brand": "Christine",
        "title": "Shiny Pearl Glow",
        "subtitle": "Velvet Shimmer Highlighter",
        "badge": "Single Pot",
        "theme_color": (230, 200, 150),
        "cap_color": (20, 20, 20),
        "body_color": (245, 220, 180),
        "shape": "compact"
    },
    {
        "id": 15,
        "filename": "masarrat_misbah_foundation.jpg",
        "brand": "Masarrat Misbah",
        "title": "Silk Luminous Foundation",
        "subtitle": "Halal Certified • Warm Natural",
        "badge": "35ml",
        "theme_color": (180, 135, 75),
        "cap_color": (212, 175, 55),
        "body_color": (230, 195, 155),
        "shape": "dropper"
    },
    {
        "id": 16,
        "filename": "tibet_snow_cream.jpg",
        "brand": "Tibet Snow",
        "title": "Beauty Vanishing Cream",
        "subtitle": "Vintage Heritage Formula",
        "badge": "50g",
        "theme_color": (30, 100, 180), # Classic Tibet Blue
        "cap_color": (30, 100, 180),
        "body_color": (255, 255, 255),
        "shape": "jar"
    },
    {
        "id": 17,
        "filename": "olivia_bleach_cream.jpg",
        "brand": "Olivia",
        "title": "Herbal Bleach Cream",
        "subtitle": "With Avocado & Rose Water",
        "badge": "Large Pack",
        "theme_color": (40, 140, 70), # Green
        "cap_color": (40, 140, 70),
        "body_color": (255, 255, 255),
        "shape": "tub"
    },
    {
        "id": 18,
        "filename": "hemani_tea_tree_serum.jpg",
        "brand": "Hemani Botanics",
        "title": "Tea Tree Purifying Serum",
        "subtitle": "Clarifying & Anti-Blemish",
        "badge": "30ml",
        "theme_color": (40, 110, 60),
        "cap_color": (255, 255, 255),
        "body_color": (220, 240, 225),
        "shape": "dropper"
    },
    {
        "id": 19,
        "filename": "care_honey_lotion.jpg",
        "brand": "Care Cosmetics",
        "title": "Honey & Almond",
        "subtitle": "Nourishing Body Lotion",
        "badge": "200ml",
        "theme_color": (220, 150, 30), # Honey Amber
        "cap_color": (220, 150, 30),
        "body_color": (255, 255, 255),
        "shape": "bottle"
    },
    {
        "id": 20,
        "filename": "glow_and_lovely_cream.jpg",
        "brand": "Glow & Lovely",
        "title": "Advanced Multivitamin",
        "subtitle": "Daily Radiance Glow Cream",
        "badge": "50g",
        "theme_color": (225, 60, 110), # Vibrant Pink
        "cap_color": (225, 60, 110),
        "body_color": (255, 255, 255),
        "shape": "tube"
    }
]

def create_product_image(spec):
    size = (600, 600)
    img = Image.new('RGB', size, (255, 255, 255))
    draw = ImageDraw.Draw(img)

    # 1. Subtle natural contact shadow at base on pure white background
    shadow_box = [160, 485, 440, 525]
    shadow_img = Image.new('RGBA', size, (255, 255, 255, 0))
    shadow_draw = ImageDraw.Draw(shadow_img)
    shadow_draw.ellipse(shadow_box, fill=(200, 195, 190, 85))
    shadow_draw.ellipse([190, 492, 410, 518], fill=(160, 155, 150, 110))
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(14))
    img.paste(shadow_img, (0, 0), shadow_img)

    shape = spec['shape']
    t_col = spec['theme_color']
    c_col = spec['cap_color']
    b_col = spec['body_color']

    # Load system font
    try:
        font_brand = ImageFont.truetype("arialbd.ttf", 24)
        font_title = ImageFont.truetype("arialbd.ttf", 28)
        font_sub = ImageFont.truetype("arial.ttf", 16)
        font_badge = ImageFont.truetype("arialbd.ttf", 14)
    except:
        font_brand = ImageFont.load_default()
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_badge = ImageFont.load_default()

    # Draw Packaging Silhouette
    if shape == "tube":
        # Tube Body
        points = [(210, 160), (390, 160), (365, 430), (235, 430)]
        draw.polygon(points, fill=b_col, outline=(220, 220, 220))
        # Top crimp
        draw.rectangle([205, 145, 395, 160], fill=(230, 230, 230), outline=(200, 200, 200))
        # Theme accent ribbon
        draw.rectangle([220, 240, 380, 310], fill=t_col)
        # Cap
        draw.rectangle([245, 430, 355, 485], fill=c_col, outline=(200, 200, 200))
        draw.rectangle([250, 485, 350, 492], fill=c_col)

    elif shape == "bottle":
        # Bottle body
        draw.rounded_rectangle([210, 190, 390, 475], radius=24, fill=b_col, outline=(215, 215, 215), width=2)
        # Neck & Cap / Pump
        draw.rectangle([270, 140, 330, 190], fill=c_col)
        draw.rectangle([260, 115, 340, 140], fill=c_col, outline=(200, 200, 200))
        # Theme Label
        draw.rounded_rectangle([225, 230, 375, 430], radius=12, fill=(255, 255, 255), outline=t_col, width=2)
        draw.rectangle([225, 230, 375, 280], fill=t_col)

    elif shape == "spray":
        # Spray bottle
        draw.rounded_rectangle([220, 180, 380, 480], radius=20, fill=b_col, outline=(220, 220, 220), width=2)
        # Gold collar & spray nozzle
        draw.rectangle([270, 135, 330, 180], fill=c_col)
        draw.rectangle([280, 105, 320, 135], fill=(240, 240, 240))
        # Clear/tinted cap
        draw.rounded_rectangle([265, 95, 335, 175], radius=6, outline=(200, 200, 200), width=2)
        # Label
        draw.rounded_rectangle([235, 225, 365, 440], radius=10, fill=(255, 255, 255), outline=(225, 225, 225), width=2)
        draw.rectangle([235, 225, 365, 285], fill=t_col)

    elif shape == "dropper":
        # Luxury glass dropper bottle
        draw.rounded_rectangle([225, 210, 375, 475], radius=18, fill=b_col, outline=(220, 220, 220), width=2)
        # Gold collar
        draw.rectangle([265, 160, 335, 210], fill=c_col, outline=(200, 170, 100))
        # Rubber bulb
        draw.rounded_rectangle([275, 110, 325, 160], radius=12, fill=(250, 250, 250), outline=(210, 210, 210))
        # Label
        draw.rounded_rectangle([240, 240, 360, 440], radius=8, fill=(255, 255, 255), outline=t_col, width=2)
        draw.rectangle([240, 240, 360, 290], fill=t_col)

    elif shape == "tub" or shape == "jar":
        # Cream Jar / Tub
        draw.rounded_rectangle([195, 260, 405, 480], radius=30, fill=b_col, outline=(220, 220, 220), width=2)
        # Lid
        draw.rounded_rectangle([185, 225, 415, 275], radius=14, fill=c_col, outline=(200, 200, 200))
        # Label wrap
        draw.rounded_rectangle([210, 305, 390, 440], radius=12, fill=(255, 255, 255), outline=(225, 225, 225), width=2)
        draw.rectangle([210, 305, 390, 350], fill=t_col)

    elif shape == "lipstick":
        # Luxury lipstick base & casing
        draw.rectangle([245, 280, 355, 485], fill=b_col, outline=(180, 180, 180), width=2)
        # Gold band
        draw.rectangle([243, 275, 357, 300], fill=(212, 175, 55))
        # Inner gold tube
        draw.rectangle([258, 200, 342, 275], fill=(212, 175, 55), outline=(180, 140, 40))
        # Slanted lipstick bullet
        bullet_pts = [(262, 200), (338, 200), (338, 145), (262, 105)]
        draw.polygon(bullet_pts, fill=t_col)

    elif shape == "compact":
        # Compact Powder case open with mirror & pan
        # Bottom base
        draw.ellipse([180, 310, 420, 480], fill=b_col, outline=(210, 210, 210), width=2)
        # Powder pan inside
        draw.ellipse([205, 335, 395, 455], fill=t_col, outline=(220, 180, 130), width=2)
        # Open lid with mirror
        draw.ellipse([180, 140, 420, 310], fill=c_col, outline=(180, 180, 180), width=2)
        draw.ellipse([200, 155, 400, 295], fill=(230, 240, 245), outline=(200, 200, 200)) # mirror reflection

    # Draw Brand & Text Labels on product
    # Brand
    draw.text((300, 310 if shape in ['tub', 'jar', 'compact'] else 260), spec['brand'], fill=(255, 255, 255) if shape == 'tube' else (40, 40, 40), font=font_brand, anchor="mm")
    
    # Title
    draw.text((300, 345 if shape in ['tub', 'jar', 'compact'] else 345), spec['title'], fill=t_col if shape != 'tube' else (255, 255, 255), font=font_title, anchor="mm")
    
    # Subtitle
    draw.text((300, 385 if shape in ['tub', 'jar', 'compact'] else 385), spec['subtitle'], fill=(80, 80, 80), font=font_sub, anchor="mm")
    
    # Badge (e.g. 100g, SPF 60, etc.)
    draw.rounded_rectangle([250, 410, 350, 435], radius=6, fill=t_col)
    draw.text((300, 422), spec['badge'], fill=(255, 255, 255), font=font_badge, anchor="mm")

    # Save on pure white background
    filepath = os.path.join('assets', 'images', 'products', spec['filename'])
    img.save(filepath, 'JPEG', quality=95)
    print(f"Generated clean white-background image: {filepath}")

for spec in products_specs:
    create_product_image(spec)

print("All 20 product images created successfully on pure white background!")
