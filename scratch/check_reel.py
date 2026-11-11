import urllib.request
import re

url = 'https://www.instagram.com/reel/DaQYnVcIZk3/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        with open('scratch/reel.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print('Saved html length:', len(html))
        # Search for .mp4 URLs
        mp4s = re.findall(r'https:[^"\',\\s]+\.mp4[^"\',\\s]*', html)
        print('MP4 found:', len(mp4s))
        for m in mp4s[:3]:
            print('URL:', m.replace('\\u0026', '&'))
except Exception as e:
    print('Error:', e)

