import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
}

# Fetch the wp-json media endpoint from store.zrpm.cl if available
media_url = 'https://store.zrpm.cl/wp-json/wp/v2/media?per_page=50'
req = urllib.request.Request(media_url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=15) as resp:
        import json
        items = json.loads(resp.read().decode('utf-8'))
        print(f"Retrieved {len(items)} media items from store.zrpm.cl!")
        for item in items:
            title = item.get('title', {}).get('rendered', '')
            src = item.get('source_url', '')
            alt = item.get('alt_text', '')
            print(f"- {title} | {src}")
except Exception as e:
    print("Media endpoint error:", e)
