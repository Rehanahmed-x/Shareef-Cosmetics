import urllib.request
import urllib.error
import json
import time

BASE_URL = 'http://localhost:5000'

def request_json(path, method='GET', data=None, token=None):
    url = f"{BASE_URL}{path}"
    headers = {'Content-Type': 'application/json'}
    if token:
        headers['Authorization'] = f"Bearer {token}"
    body = json.dumps(data).encode('utf-8') if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as response:
            return response.status, json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode('utf-8')) if e.fp else {'error': str(e)}

def run_full_suite():
    print("================================================================")
    print("   SHAREEF COSMETICS FULL-STACK & DATABASE TEST SUITE")
    print("================================================================")

    # 1. Test Public Products API
    status, res = request_json('/api/products')
    assert status == 200, f"Expected 200, got {status}"
    assert res['success'] is True
    initial_count = res['count']
    print(f"[OK] 1. Public Products API: OK (Found {initial_count} Pakistani products)")

    # 2. Test Security: Unauthorized attempt to add product
    status, res = request_json('/api/products', method='POST', data={"name": "Hacked Product", "price": 100})
    assert status == 401, f"Security Breach! Expected 401 Unauthorized, got {status}"
    print(f"[OK] 2. Security Barrier (Inspect Protection): OK (Unauthorized POST blocked with HTTP {status})")

    # 3. Test Security: Unauthorized attempt to fetch admin stats
    status, res = request_json('/api/admin/stats', method='GET')
    assert status == 401, f"Security Breach! Expected 401 Unauthorized, got {status}"
    print(f"[OK] 3. Admin Route Protection: OK (Unauthorized stats fetch blocked with HTTP {status})")

    # 4. Test Admin Authentication with PBKDF2 Password
    status, res = request_json('/api/admin/login', method='POST', data={"password": "umair2026"})
    assert status == 200, f"Login failed: {res}"
    token = res['token']
    assert len(token) >= 32, "Invalid token length"
    print(f"[OK] 4. Admin PBKDF2 Authentication: OK (Issued Cryptographic Bearer Token: {token[:12]}...)")

    # 5. Test Token Verification
    status, res = request_json('/api/admin/verify', method='GET', token=token)
    assert status == 200 and res['authenticated'] is True
    print("[OK] 5. Token Verification: OK (Session active)")

    # 6. Test Admin Creating New Product in Central Database
    new_product_payload = {
        "name": "Rivaj UK Sunscreen Whitening Lotion SPF 50 (120ml)",
        "category": "skincare",
        "price": 850,
        "originalPrice": 1050,
        "badge": "New Arrival",
        "badgeClass": "badge-gold",
        "description": "Multi-action water-resistant sun protection formula.",
        "image": "assets/images/products/rivaj_mineral_sunblock.jpg",
        "details": "SPF 50 • Water Resistant • Made in Pakistan",
        "shades": [{"name": "120ml Bottle", "color": "#FFC107"}]
    }
    status, res = request_json('/api/products', method='POST', data=new_product_payload, token=token)
    assert status == 201, f"Failed to create product: {res}"
    created_id = res['data']['id']
    print(f"[OK] 6. Database Product Creation: OK (Product added with ID {created_id})")

    # 7. Test Multi-Device Sync: Verify Public API sees new product immediately
    status, res = request_json('/api/products')
    assert status == 200
    assert res['count'] == initial_count + 1, "Product not reflected in public catalog!"
    print(f"[OK] 7. Multi-Device Synchronization: OK (Public catalog immediately grew to {res['count']} items)")

    # 8. Test Admin Inline Price Update in Database
    status, res = request_json(f'/api/products/{created_id}', method='PUT', data={"price": 790, "originalPrice": 1000}, token=token)
    assert status == 200 and res['data']['price'] == 790
    print(f"[OK] 8. Database Price Update: OK (Price updated to Rs. 790)")

    # 9. Test Public Checkout & Order Creation
    order_data = {
        "customer": {
            "name": "Hamza Tariq",
            "phone": "03219876543",
            "address": "Model Town Block C",
            "city": "Lahore"
        },
        "items": [
            {"id": created_id, "name": "Rivaj UK Sunscreen", "qty": 2, "price": 790, "shade": "120ml Bottle"}
        ],
        "subtotal": 1580,
        "deliveryFee": 200,
        "discount": 0,
        "grandTotal": 1780,
        "paymentMethod": "Cash on Delivery (COD)"
    }
    status, res = request_json('/api/orders', method='POST', data=order_data)
    assert status == 201 and 'orderId' in res
    order_id = res['orderId']
    print(f"[OK] 9. Store Checkout & Order Persistence: OK (Order #{order_id} recorded in SQLite DB)")

    # 10. Test Admin Fetching & Updating Orders
    status, res = request_json('/api/orders', method='GET', token=token)
    assert status == 200 and res['count'] >= 1
    status, res = request_json(f'/api/orders/{order_id}/status', method='PUT', data={"status": "dispatched"}, token=token)
    assert status == 200 and res['data']['status'] == 'dispatched'
    print(f"[OK] 10. Admin Order Management: OK (Order status updated to 'dispatched' in DB)")

    # 11. Test Admin Deleting Product
    status, res = request_json(f'/api/products/{created_id}', method='DELETE', token=token)
    assert status == 200
    print(f"[OK] 11. Database Product Deletion: OK (Cleaned test product)")

    # 12. Test Admin Password Change
    status, res = request_json('/api/admin/change-password', method='POST', data={"new_password": "umair2026_updated"}, token=token)
    assert status == 200
    # Verify old password fails
    status, res = request_json('/api/admin/login', method='POST', data={"password": "umair2026"})
    assert status == 401
    # Verify new password succeeds
    status, res = request_json('/api/admin/login', method='POST', data={"password": "umair2026_updated"})
    assert status == 200
    new_token = res['token']
    # Restore original password for client convenience
    status, res = request_json('/api/admin/change-password', method='POST', data={"new_password": "umair2026"}, token=new_token)
    assert status == 200
    print("[OK] 12. Master Password Change & Hashing: OK (PBKDF2 salt & hash updated in database)")

    print("\n================================================================")
    print("   ALL 12 FULL-STACK & DATABASE CHECKS PASSED WITH 100% SUCCESS!")
    print("================================================================")

if __name__ == '__main__':
    run_full_suite()
