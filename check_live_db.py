import urllib.request
import json

try:
    req = urllib.request.Request('https://shareefcosmetics.pythonanywhere.com/api/products')
    res = urllib.request.urlopen(req)
    data = json.loads(res.read().decode('utf-8'))
    print("STATUS: 200 OK")
    print(f"Total Products on PythonAnywhere: {len(data.get('data', []))}")
    for p in data.get('data', []):
        print(f"  - [{p['id']}] {p['name']} (Price: Rs. {p['price']})")
except Exception as e:
    print(f"Error fetching from PythonAnywhere: {e}")
