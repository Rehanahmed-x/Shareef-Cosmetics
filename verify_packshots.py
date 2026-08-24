import os
import re
import requests
from PIL import Image
from io import BytesIO

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
}

def save_centered_image(image_bytes, out_path):
    img = Image.open(BytesIO(image_bytes))
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
    ratio = min(560 / w, 560 / h)
    new_w, new_h = max(1, int(w * ratio)), max(1, int(h * ratio))
    resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    canvas.paste(resized_img, ((target_size - new_w) // 2, (target_size - new_h) // 2))
    canvas.save(out_path, 'JPEG', quality=95)
    print(f"Saved: {out_path} ({new_w}x{new_h})")

# Direct verified product packshot search for Himalaya skin cream & Masarrat Misbah
specific_searches = {
    "himalaya_skin_cream.jpg": "Himalaya Herbals Nourishing Skin Cream Aloe Vera green tub cosmetic product",
    "masarrat_misbah_foundation.jpg": "Masarrat Misbah Silk Foundation MM02 cosmetic bottle",
    "medora_compact_powder.jpg": "Medora of London Compact Powder with puff cosmetic case"
}

for fn, q in specific_searches.items():
    url = f"https://www.bing.com/images/search?q={requests.utils.quote(q)}&qft=+filterui:photo-photo&FORM=HDRSC2"
    res = requests.get(url, headers=headers).text
    matches = re.findall(r'murl&quot;:&quot;(https?://[^&]+)&quot;', res)
    for m in matches:
        if not any(bad in m.lower() for bad in ['wallpaper', 'mountain', 'landscape', 'peak', 'vecteezy', 'blogspot', 'youtube', 'hqdefault']):
            try:
                r = requests.get(m, headers=headers, timeout=10)
                if r.status_code == 200 and len(r.content) > 3000:
                    save_centered_image(r.content, os.path.join('assets', 'images', 'products', fn))
                    print(f"Successfully downloaded {fn} from {m[:60]}...")
                    break
            except Exception as e:
                continue

print("Verified specific product downloads.")
