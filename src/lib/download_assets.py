import urllib.request
import json
import os

headers = {'User-Agent': 'Mozilla/5.0'}

os.makedirs(r'C:\Users\Fabian\.gemini\antigravity\scratch\zrpm-racing\public\images\builds', exist_ok=True)
os.makedirs(r'C:\Users\Fabian\.gemini\antigravity\scratch\zrpm-racing\public\images\hero', exist_ok=True)

# Download workshop dyno image
urls = [
    ('https://zrpm.cl/wp-content/uploads/2024/11/sinmarcadeagua-scaled.jpeg', r'C:\Users\Fabian\.gemini\antigravity\scratch\zrpm-racing\public\images\hero\workshop-dyno.jpg'),
    ('https://store.zrpm.cl/wp-content/uploads/2025/06/Roush.png', r'C:\Users\Fabian\.gemini\antigravity\scratch\zrpm-racing\public\images\builds\roush-kit.png'),
    ('https://store.zrpm.cl/wp-content/uploads/2025/06/WhatsApp_Image_2025-04-22_at_7.03.43_PM-removebg-preview.png', r'C:\Users\Fabian\.gemini\antigravity\scratch\zrpm-racing\public\images\builds\induction-kit.png'),
]

for url, dest in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            with open(dest, 'wb') as f:
                f.write(resp.read())
        print(f"Downloaded {url} -> {dest}")
    except Exception as e:
        print(f"Error {url}: {e}")
