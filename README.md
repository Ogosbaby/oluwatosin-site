# Oluwatosin Oluwakoyejo — website

Next.js 14 (App Router) + Tailwind 3 + lucide-react.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Where to edit
- `lib/data.js` — all copy, images (`ASSETS`), articles, library, timeline, videos.
- Replace the three `ASSETS` URLs with real image URLs (or files in `public/`, e.g. `/portrait.jpg`).
- `app/api/subscribe/route.js` and `app/api/contact/route.js` — validate and log only; connect your email provider where marked TODO.

## Routes
/ · /about · /business · /philanthropy · /speeches · /thought-leadership · /thought-leadership/[slug] · /contact
