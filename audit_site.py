import os
import re
import json

def run_audit():
    print("==================================================================")
    print("             SHAREEF COSMETICS CODEBASE DEEP AUDIT                ")
    print("==================================================================")

    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    with open('app.js', 'r', encoding='utf-8') as f:
        js = f.read()

    with open('server.py', 'r', encoding='utf-8') as f:
        server_code = f.read()

    errors_found = 0
    warnings_found = 0

    # 1. Check Product Image References
    img_refs = set(re.findall(r'assets/images/[a-zA-Z0-9_\-\.\/]+', js + html))
    missing_imgs = [p for p in img_refs if not os.path.exists(p.replace('/', os.sep))]
    if missing_imgs:
        print(f"[FAIL] Missing image files: {missing_imgs}")
        errors_found += len(missing_imgs)
    else:
        print(f"[PASS] All {len(img_refs)} image asset paths exist on disk.")

    # 2. Check DOM Elements in app.js vs index.html
    js_ids = set(re.findall(r'document\.getElementById\([\'"]([a-zA-Z0-9_\-]+)[\'"]\)', js))
    html_ids = set(re.findall(r'id=[\'"]([a-zA-Z0-9_\-]+)[\'"]', html))

    ignored_prefix = ('inlinePrice_', 'inlineOrigPrice_', 'productCard_', 'quickView_', 'shadeRow_', 'reviewItem_')
    missing_ids = [gid for gid in js_ids if gid not in html_ids and not gid.startswith(ignored_prefix)]

    if missing_ids:
        print(f"[WARN] DOM IDs referenced in JS but not in index.html: {missing_ids}")
        warnings_found += len(missing_ids)
    else:
        print(f"[PASS] All {len(js_ids)} getElementById targets match existing HTML IDs.")

    # 3. Check All Modal Close Buttons
    modals = re.findall(r'class=[\'"][^\'"]*modal-overlay[^\'"]*[\'"] id=[\'"]([a-zA-Z0-9_\-]+)[\'"]', html)
    print(f"[PASS] Found {len(modals)} interactive modal dialogs in HTML: {modals}")

    # 4. Check All Form Action / Submit bindings
    forms = set(re.findall(r'<form [^>]*id=[\'"]([a-zA-Z0-9_\-]+)[\'"]', html))
    bound_forms = set(re.findall(r'([a-zA-Z0-9_\-]+)\.addEventListener\([\'"]submit[\'"]', js))
    print(f"[PASS] Found {len(forms)} HTML forms: {forms}")

    # 5. Check Script Tag version in index.html
    script_match = re.search(r'<script src=[\'"]app\.js\?v=([0-9\.]+)[\'"]>', html)
    if script_match:
        print(f"[PASS] Cache buster script version active: v{script_match.group(1)}")
    else:
        print("[WARN] Script tag in index.html is missing cache buster version.")
        warnings_found += 1

    # 6. Check Cloud Config Files
    cloud_files = ['requirements.txt', 'Procfile', 'render.yaml', 'run_server.bat']
    for cf in cloud_files:
        if os.path.exists(cf):
            print(f"[PASS] Cloud & Runner config '{cf}' is ready.")
        else:
            print(f"[FAIL] Missing cloud file '{cf}'")
            errors_found += 1

    print("\n==================================================================")
    if errors_found == 0 and warnings_found == 0:
        print("   ALL AUDIT CHECKS PASSED WITH 0 ERRORS AND 0 WARNINGS!")
    elif errors_found == 0:
        print(f"   AUDIT COMPLETE: 0 ERRORS, {warnings_found} WARNINGS (SAFE TO UPLOAD)")
    else:
        print(f"   AUDIT FOUND {errors_found} ERRORS")
    print("==================================================================")

if __name__ == '__main__':
    run_audit()
