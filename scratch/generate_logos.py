import os

os.makedirs('public/images', exist_ok=True)

chronicles_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <rect width="56" height="56" y="12" rx="14" fill="#0284C7"/>
  <path d="M28 24C20.268 24 14 30.268 14 38C14 45.732 20.268 52 28 52C33.5 52 38.2 48.8 40.5 44.2L34.5 42C33.2 44.8 30.8 46.5 28 46.5C23.3 46.5 19.5 42.7 19.5 38C19.5 33.3 23.3 29.5 28 29.5C31 29.5 33.3 31.2 34.6 33.8L40.6 31.8C38.2 27.2 33.5 24 28 24Z" fill="white"/>
  <text x="72" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" fill="#0F172A" letter-spacing="1.5">CHRONICLES</text>
  <text x="72" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#0284C7" letter-spacing="2.5">SOFTWARE DEVELOPMENT</text>
</svg>"""

successbox_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <rect width="56" height="56" y="12" rx="14" fill="#0EA5E9"/>
  <path d="M28 22L42 30V46L28 54L14 46V30L28 22Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>
  <path d="M28 22V38M42 30L28 38L14 30M28 38V54" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="72" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" fill="#0F172A" letter-spacing="1">Success<tspan fill="#0EA5E9">BOX</tspan></text>
  <text x="72" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#64748B" letter-spacing="2">AI EXAMINATION ENGINE</text>
</svg>"""

successtab_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <rect width="56" height="56" y="12" rx="14" fill="#38BDF8"/>
  <rect x="17" y="22" width="22" height="32" rx="3" stroke="white" stroke-width="2.5"/>
  <circle cx="28" cy="49" r="1.5" fill="white"/>
  <line x1="22" y1="25" x2="34" y2="25" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  <text x="72" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" fill="#0F172A" letter-spacing="1">Success<tspan fill="#0284C7">TAB</tspan></text>
  <text x="72" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#64748B" letter-spacing="2">DIGITAL LEARNING DEVICE</text>
</svg>"""

with open('public/images/logo-chronicles.svg', 'w') as f:
    f.write(chronicles_svg)
with open('public/images/logo-successbox.svg', 'w') as f:
    f.write(successbox_svg)
with open('public/images/logo-successtab.svg', 'w') as f:
    f.write(successtab_svg)

print('Logos created successfully!')

