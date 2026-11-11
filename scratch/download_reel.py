import urllib.request
import re
import json

url = 'https://www.instagram.com/reel/DaQYnVcIZk3/?__a=1&__d=dis'
req = urllib.request.Request(
    url,
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    }
)
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        print('Response length:', len(content))
        # Look for video url
        urls = re.findall(r'https:[^"\',\\s]+\.mp4[^"\',\\s]*', content)
        print('Found mp4 URLs:', len(urls))
        if urls:
            vid_url = urls[0].replace('\\u0026', '&')
            print('Downloading from:', vid_url[:80])
            urllib.request.urlretrieve(vid_url, 'public/videos/confab-reel.mp4')
            print('Successfully saved public/videos/confab-reel.mp4')
except Exception as e:
    print('Error:', e)

