import urllib.request
import urllib.error
import json
import time
import socket
import threading
import os
import sys

from server import HTTPServer, ShareefAppHandler, init_database

def run_test_server():
    init_database()
    httpd = HTTPServer(('127.0.0.1', 5055), ShareefAppHandler)
    httpd.serve_forever()

# Start background test server
t = threading.Thread(target=run_test_server, daemon=True)
t.start()
time.sleep(1)

BASE_URL = 'http://127.0.0.1:5055'

print("="*60)
print("RUNNING COMPREHENSIVE SECURITY VERIFICATION SUITE")
print("="*60)

passed = 0
failed = 0

def assert_test(name, condition, detail=""):
    global passed, failed
    if condition:
        print(f"[PASS] {name}")
        passed += 1
    else:
        print(f"[FAIL] {name} - {detail}")
        failed += 1

# Test 1: Check if static requests to sensitive files are BLOCKED (403)
for sensitive_path in ['/server.py', '/shareef_cosmetics.db', '/.git/config', '/requirements.txt', '/Procfile', '/render.yaml']:
    try:
        req = urllib.request.Request(f"{BASE_URL}{sensitive_path}")
        with urllib.request.urlopen(req) as resp:
            assert_test(f"Static block {sensitive_path}", False, f"Returned {resp.status}")
    except urllib.error.HTTPError as e:
        assert_test(f"Static block {sensitive_path}", e.code == 403, f"Code {e.code}")

# Test 2: Check allowed static files
for static_path in ['/', '/index.html', '/app.js', '/style.css', '/products.json']:
    try:
        req = urllib.request.Request(f"{BASE_URL}{static_path}")
        with urllib.request.urlopen(req) as resp:
            assert_test(f"Static allow {static_path}", resp.status == 200, f"Code {resp.status}")
    except Exception as e:
        assert_test(f"Static allow {static_path}", False, str(e))

# Test 3: Unauthorized API access to protected endpoints
for endpoint in ['/api/admin/verify', '/api/admin/stats', '/api/orders']:
    try:
        req = urllib.request.Request(f"{BASE_URL}{endpoint}")
        with urllib.request.urlopen(req) as resp:
            assert_test(f"Auth gate {endpoint}", False, "Allowed without token!")
    except urllib.error.HTTPError as e:
        assert_test(f"Auth gate {endpoint}", e.code == 401, f"Code {e.code}")

# Test 4: Rate Limiting & Brute-Force Lockout on /api/admin/login
print("\nTesting Brute-Force Rate Limiting on Login...")
got_429 = False
for i in range(1, 8):
    try:
        data = json.dumps({"password": f"wrong_pass_{i}"}).encode('utf-8')
        req = urllib.request.Request(f"{BASE_URL}/api/admin/login", data=data, headers={'Content-Type': 'application/json', 'X-Forwarded-For': '192.168.1.99'})
        with urllib.request.urlopen(req) as resp:
            pass
    except urllib.error.HTTPError as e:
        if e.code == 429:
            got_429 = True
            print(f"  Attempt {i}: Successfully triggered 429 Rate Limit Lockout!")
            break
        elif e.code == 401:
            print(f"  Attempt {i}: Denied (401)")

assert_test("Brute-Force Rate Limiting (429)", got_429, "Rate limiter did not lock out after 5 attempts")

# Test 5: Verify password search across all public frontend client files
print("\nAuditing all client files for raw password leakage...")
for fname in ['index.html', 'app.js', 'style.css', 'products.json']:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    found_leak = 'umair2026' in content
    assert_test(f"Zero raw password leakage in {fname}", not found_leak, f"Found 'umair2026' in {fname}!")

print("="*60)
print(f"FINAL RESULTS: {passed} PASSED, {failed} FAILED")
print("="*60)

if failed > 0:
    sys.exit(1)
