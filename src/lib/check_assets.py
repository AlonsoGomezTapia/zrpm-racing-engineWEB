import urllib.request
import re

with urllib.request.urlopen('http://localhost:3000') as res:
    html = res.read().decode('utf-8')

css_links = re.findall(r'href="(/_next/static/css/[^"]+)"', html)
print('Found CSS links:', css_links)
for l in css_links:
    try:
        with urllib.request.urlopen('http://localhost:3000' + l) as c_res:
            data = c_res.read()
            print('CSS:', l, 'Status:', c_res.status, 'Size:', len(data))
    except Exception as e:
        print('CSS err:', l, e)

# Check if there are JS chunks failing
js_scripts = re.findall(r'src="(/_next/static/[^"]+)"', html)
print('Found JS scripts count:', len(js_scripts))
for s in js_scripts[:5]:
    try:
        with urllib.request.urlopen('http://localhost:3000' + s) as j_res:
            print('JS:', s, 'Status:', j_res.status)
    except Exception as e:
        print('JS err:', s, e)
