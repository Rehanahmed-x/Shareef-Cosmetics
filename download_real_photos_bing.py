import os
import re
import json
import requests
from PIL import Image
from io import BytesIO

os.makedirs('assets/images/products', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'Accept': '*/*'
}

def search_bing_image(query):
    try:
        url = f"https://www.bing.com/images/search?q={requests.utils.quote(query)}&qft=+filterui:photo-photo&FORM=HDRSC2"
        res = requests.get(url, headers=headers, timeout=10)
        matches = re.findall(r'murl&quot;:&quot;(https?://[^&]+)&quot;', res.text)
        if matches:
            for m in matches:
                # filter clean direct image URLs
                if any(ext in m.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    return m
            return matches[0]
    except Exception as e:
        print(f"Bing search error for {query}: {e}")
    return None

def process_and_save_image(image_data, filepath):
    try:
        img = Image.open(BytesIO(image_data))
        
        # Handle transparency / convert to pure white RGB
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            bg = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'RGBA':
                bg.paste(img, (0, 0), img)
            else:
                bg.paste(img.convert('RGBA'), (0, 0))
            img = bg
        else:
            img = img.convert('RGB')

        target_size = 600
        canvas = Image.new('RGB', (target_size, target_size), (255, 255, 255))
        
        w, h = img.size
        ratio = min((target_size - 30) / w, (target_size - 30) / h)
        new_w, new_h = max(1, int(w * ratio)), max(1, int(h * ratio))
        resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

        pos_x = (target_size - new_w) // 2
        pos_y = (target_size - new_h) // 2
        canvas.paste(resized_img, (pos_x, pos_y))

        canvas.save(filepath, 'JPEG', quality=95)
        print(f"[SUCCESS] Saved real photo: {filepath}")
        return True
    except Exception as e:
        print(f"[ERROR] Processing error for {filepath}: {e}")
        return False

products_queries = [
    { "filename": "ponds_facewash.jpg", "query": "Ponds Bright Beauty Spot-less Glow Face Wash 100g white background" },
    { "filename": "ponds_cold_cream.jpg", "query": "Ponds Moisturizing Cold Cream 100ml white background packshot" },
    { "filename": "himalaya_neem_facewash.jpg", "query": "Himalaya Purifying Neem Face Wash 150ml white background" },
    { "filename": "himalaya_skin_cream.jpg", "query": "Himalaya Herbals Nourishing Skin Cream white background" },
    { "filename": "saeed_ghani_arq_e_gulab.jpg", "query": "Saeed Ghani Pure Rose Water Arq-e-Gulab Spray 120ml white background" },
    { "filename": "saeed_ghani_mughziat_oil.jpg", "query": "Saeed Ghani Mughziat Hair Oil 200ml white background" },
    { "filename": "saeed_ghani_husn_e_yousuf.jpg", "query": "Saeed Ghani Husn e Yousuf Cream 60g white background" },
    { "filename": "medora_matte_lipstick.jpg", "query": "Medora of London Matte Lipstick 238 Dusty Rose white background" },
    { "filename": "medora_compact_powder.jpg", "query": "Medora Flawless Matte Compact Face Powder white background" },
    { "filename": "rivaj_mineral_sunblock.jpg", "query": "Rivaj UK HD Sunblock SPF 60 white background product" },
    { "filename": "rivaj_charcoal_mask.jpg", "query": "Rivaj UK Charcoal Peel Off Black Mask white background" },
    { "filename": "golden_rose_velvet_lipstick.jpg", "query": "Golden Rose Velvet Matte Lipstick Crayon white background" },
    { "filename": "christine_compact_powder.jpg", "query": "Christine Compact Powder Ivory white background" },
    { "filename": "christine_pearl_eyeshadow.jpg", "query": "Christine Shiny Pearl Eyeshadow single pot white background" },
    { "filename": "masarrat_misbah_foundation.jpg", "query": "Masarrat Misbah Silk Luminous Liquid Foundation white background" },
    { "filename": "tibet_snow_cream.jpg", "query": "Tibet Snow Beauty Vanishing Cream white background" },
    { "filename": "olivia_bleach_cream.jpg", "query": "Olivia Herbal Bleach Cream with Avocado white background" },
    { "filename": "hemani_tea_tree_serum.jpg", "query": "Hemani Tea Tree Essential Oil 30ml white background" },
    { "filename": "care_honey_lotion.jpg", "query": "Care Honey and Almond Body Lotion 200ml white background" },
    { "filename": "glow_and_lovely_cream.jpg", "query": "Glow and Lovely Advanced Multivitamin Daily Glow Cream white background" }
]

success_count = 0
for item in products_queries:
    fn = item["filename"]
    q = item["query"]
    target_path = os.path.join('assets', 'images', 'products', fn)
    print(f"Searching real photo for: {q}")
    url = search_bing_image(q)
    if url:
        try:
            print(f"-> Downloading: {url[:70]}...")
            r = requests.get(url, headers=headers, timeout=15)
            if r.status_code == 200 and len(r.content) > 3000:
                if process_and_save_image(r.content, target_path):
                    success_count += 1
                    continue
        except Exception as e:
            print(f"[FAIL] Download failed for {url}: {e}")
    print(f"[RETRY] Failed for {fn}")

print(f"\nCompleted! {success_count}/{len(products_queries)} real product photos downloaded.")
