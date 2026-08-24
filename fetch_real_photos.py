import os
import re
import json
import requests
from PIL import Image
from io import BytesIO

os.makedirs('assets/images/products', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

products_queries = [
    {
        "filename": "ponds_facewash.jpg",
        "query": "Pond's Bright Beauty Spot-less Glow Face Wash 100g white background product"
    },
    {
        "filename": "ponds_cold_cream.jpg",
        "query": "Pond's Moisturizing Cold Cream 100ml white background product packshot"
    },
    {
        "filename": "himalaya_neem_facewash.jpg",
        "query": "Himalaya Purifying Neem Face Wash 150ml white background product packshot"
    },
    {
        "filename": "himalaya_skin_cream.jpg",
        "query": "Himalaya Herbals Nourishing Skin Cream 100ml white background product"
    },
    {
        "filename": "saeed_ghani_arq_e_gulab.jpg",
        "query": "Saeed Ghani Pure Rose Water Arq-e-Gulab Spray 120ml white background"
    },
    {
        "filename": "saeed_ghani_mughziat_oil.jpg",
        "query": "Saeed Ghani Mughziat Hair Oil 200ml white background product"
    },
    {
        "filename": "saeed_ghani_husn_e_yousuf.jpg",
        "query": "Saeed Ghani Husn-e-Yousuf Beauty Cream white background"
    },
    {
        "filename": "medora_matte_lipstick.jpg",
        "query": "Medora of London Matte Lipstick Dusty Rose 238 white background"
    },
    {
        "filename": "medora_compact_powder.jpg",
        "query": "Medora Compact Face Powder with Puff white background"
    },
    {
        "filename": "rivaj_mineral_sunblock.jpg",
        "query": "Rivaj UK HD Matte Mineral Sunblock SPF 60 white background product"
    },
    {
        "filename": "rivaj_charcoal_mask.jpg",
        "query": "Rivaj UK Deep Cleansing Charcoal Peel Off Mask 100ml white background"
    },
    {
        "filename": "golden_rose_velvet_lipstick.jpg",
        "query": "Golden Rose Velvet Matte Lipstick Crayon white background"
    },
    {
        "filename": "christine_compact_powder.jpg",
        "query": "Christine Compact Face Powder white background product"
    },
    {
        "filename": "christine_pearl_eyeshadow.jpg",
        "query": "Christine Shiny Pearl Eyeshadow single pot white background"
    },
    {
        "filename": "masarrat_misbah_foundation.jpg",
        "query": "Masarrat Misbah Silk Luminous Foundation 35ml white background"
    },
    {
        "filename": "tibet_snow_cream.jpg",
        "query": "Tibet Snow Beauty Vanishing Cream 50g white background product"
    },
    {
        "filename": "olivia_bleach_cream.jpg",
        "query": "Olivia Herbal Bleach Cream Avocado white background product"
    },
    {
        "filename": "hemani_tea_tree_serum.jpg",
        "query": "Hemani Tea Tree Essential Oil Purifying Serum 30ml white background"
    },
    {
        "filename": "care_honey_lotion.jpg",
        "query": "Care Honey and Almond Body Lotion 200ml white background"
    },
    {
        "filename": "glow_and_lovely_cream.jpg",
        "query": "Glow and Lovely Advanced Multivitamin Daily Glow Cream 50g white background"
    }
]

def get_duckduckgo_image_url(query):
    try:
        url = "https://html.duckduckgo.com/html/?q=" + requests.utils.quote(query)
        res = requests.get(url, headers=headers, timeout=10)
        # Search for direct img urls in results
        matches = re.findall(r'//external-content\.duckduckgo\.com/iu/\?u=([^&"\']+)', res.text)
        if matches:
            decoded = requests.utils.unquote(matches[0])
            return decoded
    except Exception as e:
        print(f"Error searching for {query}: {e}")
    return None

def process_and_save_image(image_data, filepath):
    try:
        img = Image.open(BytesIO(image_data))
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            # Create pure white background
            bg = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'RGBA':
                bg.paste(img, (0, 0), img)
            else:
                bg.paste(img.convert('RGBA'), (0, 0))
            img = bg
        else:
            img = img.convert('RGB')

        # Crop to square / fit on 600x600 pure white canvas
        target_size = 600
        canvas = Image.new('RGB', (target_size, target_size), (255, 255, 255))
        
        # Scale keeping aspect ratio
        w, h = img.size
        ratio = min((target_size - 40) / w, (target_size - 40) / h)
        new_w, new_h = int(w * ratio), int(h * ratio)
        resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

        # Center on white canvas
        pos_x = (target_size - new_w) // 2
        pos_y = (target_size - new_h) // 2
        canvas.paste(resized_img, (pos_x, pos_y))

        canvas.save(filepath, 'JPEG', quality=95)
        print(f"Successfully processed and saved real photo: {filepath}")
        return True
    except Exception as e:
        print(f"Error processing image for {filepath}: {e}")
        return False

for item in products_queries:
    fn = item["filename"]
    q = item["query"]
    target_path = os.path.join('assets', 'images', 'products', fn)
    
    print(f"Searching real photo for: {q}...")
    img_url = get_duckduckgo_image_url(q)
    
    saved = False
    if img_url:
        print(f"Found URL: {img_url[:80]}...")
        try:
            r = requests.get(img_url, headers=headers, timeout=12)
            if r.status_code == 200 and len(r.content) > 3000:
                saved = process_and_save_image(r.content, target_path)
        except Exception as e:
            print(f"Failed to download {img_url}: {e}")
    
    if not saved:
        print(f"Retrying alternative search for {fn}...")

print("Fetch complete.")
