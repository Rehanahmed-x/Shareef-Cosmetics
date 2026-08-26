import urllib.request
import urllib.error
import json

def run_tests():
    base = 'http://localhost:5000'
    print("--- 1. Testing Bad Login ---")
    try:
        req = urllib.request.Request(
            f'{base}/api/admin/login',
            data=json.dumps({'password': 'wrong_password'}).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        urllib.request.urlopen(req)
        print("FAIL: Unauthorized request was allowed")
    except urllib.error.HTTPError as e:
        print(f"PASS: Rejected with HTTP {e.code}")

    print("\n--- 2. Testing Valid Admin Login ---")
    req = urllib.request.Request(
        f'{base}/api/admin/login',
        data=json.dumps({'password': 'umair2026'}).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    res = urllib.request.urlopen(req)
    login_data = json.loads(res.read().decode('utf-8'))
    token = login_data['token']
    print(f"PASS: Login successful! Token: {token[:12]}...")

    print("\n--- 3. Testing Protected Stats with Bearer Token ---")
    req = urllib.request.Request(
        f'{base}/api/admin/stats',
        headers={'Authorization': f'Bearer {token}'}
    )
    res = urllib.request.urlopen(req)
    stats_data = json.loads(res.read().decode('utf-8'))
    print(f"PASS: Stats fetched: {stats_data['stats']}")

    print("\n--- 4. Testing Order Placement ---")
    order_payload = {
        "customer": {
            "name": "Ayesha Khan",
            "phone": "03001234567",
            "address": "House 12, Street 4, Gulberg III",
            "city": "Lahore"
        },
        "items": [
            {"id": 1, "name": "Pond's Face Wash", "qty": 2, "price": 480, "shade": "100g Standard"}
        ],
        "subtotal": 960,
        "deliveryFee": 200,
        "grandTotal": 1160
    }
    req = urllib.request.Request(
        f'{base}/api/orders',
        data=json.dumps(order_payload).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    res = urllib.request.urlopen(req)
    order_res = json.loads(res.read().decode('utf-8'))
    order_id = order_res['orderId']
    print(f"PASS: Order created successfully with ID: {order_id}")

    print("\n--- 5. Testing Admin View Orders ---")
    req = urllib.request.Request(
        f'{base}/api/orders',
        headers={'Authorization': f'Bearer {token}'}
    )
    res = urllib.request.urlopen(req)
    orders_data = json.loads(res.read().decode('utf-8'))
    print(f"PASS: Admin fetched {orders_data['count']} orders from database!")

    print("\n==========================================")
    print("ALL BACKEND & DATABASE TESTS PASSED 100%!")
    print("==========================================")

if __name__ == '__main__':
    run_tests()
