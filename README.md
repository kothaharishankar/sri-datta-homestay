# Sri Datta Avadhutha Home Stay: Website

Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.

## 1. Install
```bash
npm install
```
## 2. Run locally
```bash
npm run dev      # http://localhost:3000
npm run build && npm run start   # production check
```
## 3. Add or replace photos
Put files in `public/images/` (`hero/`, `rooms/`, `property/`, `spiritual/`, `gallery/`). Then edit `lib/data.ts`: the `IMG` and `GALLERY` entries (`src`, `w`, `h` = real pixel size, `alt`, `caption`). Use landscape photos of 2000px+ width for the hero.
## 4. Phone numbers
`lib/data.ts` → `SITE.phone1`, `phone2` (display), `tel1`, `tel2` (with +91, no spaces), `whatsapp` (91 + number, no +).
## 5. Address
`lib/data.ts` → `SITE.address`, `street`, `plusCode`, and the address text inside `directionsLink` and `mapsEmbed`. Also update the address in the JSON-LD in `app/page.tsx` if it changes.
## 6. Review information
`lib/data.ts` → `SITE.rating`, `reviewCount`, `related`. Review themes are in `components/Reviews.tsx`. Only enter numbers you can see on Google Maps.
## 7. Google Maps URL
`lib/data.ts` → `SITE.mapsUrl`. The embedded map uses an address search (no API key).
## 8. GitHub
```bash
git init && git add . && git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```
## 9. Vercel
vercel.com → Add New → Project → import the repo → Framework: Next.js (auto) → add env var `NEXT_PUBLIC_SITE_URL` = your live URL → Deploy.
## 10. Custom domain
Vercel project → Settings → Domains → add your domain → set the DNS records Vercel shows at your registrar. Then update `NEXT_PUBLIC_SITE_URL` and redeploy.

No API keys are used anywhere.
