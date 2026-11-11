import urllib.request
import re
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch_images(url, prefix):
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
        print(f'{url} found {len(imgs)} img tags:')
        downloaded = 0
        for src in imgs:
            if src.startswith('//'):
                src = 'https:' + src
            elif src.startswith('/'):
                base = '/'.join(url.split('/')[:3])
                src = base + src
            elif not src.startswith('http'):
                src = url.rstrip('/') + '/' + src
            
            # Clean url
            clean_url = src.split('?')[0]
            ext = clean_url.split('.')[-1].lower()
            if ext in ['png', 'jpg', 'jpeg', 'webp', 'svg']:
                filename = f'public/images/{prefix}_{downloaded}.{ext}'
                try:
                    img_req = urllib.request.Request(src, headers=headers)
                    data = urllib.request.urlopen(img_req, timeout=8).read()
                    if len(data) > 2000:
                        with open(filename, 'wb') as f:
                            f.write(data)
                        print(f'  Saved {filename} ({len(data)} bytes) from {src}')
                        downloaded += 1
                        if downloaded >= 4:
                            break
                except Exception as ex:
                    pass
    except Exception as e:
        print(f'Error fetching {url}: {e}')

os.makedirs('public/images', exist_ok=True)
fetch_images('https://successtabs.com/', 'succestab')
fetch_images('https://successbox.ng/', 'successbox')
fetch_images('https://chroniclesoft.com/', 'chronicles')

