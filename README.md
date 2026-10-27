# MIVRA LABS website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Inquiry form → server route (`app/api/contact/route.ts`) → Resend → jamesandersonofficial60@gmail.com.

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY and FROM_EMAIL
npm run dev                  # http://localhost:3000
npm run typecheck && npm run build
```

## Email setup (Resend)
1. Create an account at resend.com and create an API key → `RESEND_API_KEY`.
2. **Production sender (recommended):** Resend → Domains → Add Domain (a domain you own, e.g. `mivralabs.com`). Add the DNS records Resend shows (SPF, DKIM, optional DMARC) at your DNS provider, then click Verify. Set `FROM_EMAIL="MIVRA LABS <inquiries@mivralabs.com>"`. The address can be anything @ your verified domain.
3. **Quick test without a domain:** `FROM_EMAIL="MIVRA LABS <onboarding@resend.dev>"`. Resend only delivers this sender to the email address of the Resend account itself, so register the Resend account with jamesandersonofficial60@gmail.com, or sending will fail.
4. `CONTACT_EMAIL` is the inbox that receives inquiries (the Gmail address). Gmail cannot be used as the *sender* domain: you cannot verify gmail.com in Resend.
5. The visitor's address is set as `Reply-To`, so hitting Reply answers the client.

## Deploy to Vercel
1. `git init && git add . && git commit -m "Initial commit"`; create a GitHub repo and push (`.env.local` is git-ignored).
2. vercel.com → Add New → Project → import the repo (Next.js is auto-detected).
3. Settings → Environment Variables: add `RESEND_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL` (your live URL). Deploy (redeploy after any change to variables).
4. Optional: add your custom domain under Settings → Domains.

## Notes
- Rate limiting is in-memory (5 requests / IP / 10 min) and best-effort on serverless; add Upstash Redis or Vercel WAF rules for stronger protection.
- Portfolio entries in `components/Portfolio.tsx` are labelled demos; replace with real projects when available.
- Add an `og-image.png` (1200×630) to `/public` and reference it in `app/layout.tsx` for richer link previews.
- Privacy Policy is a basic template, not legal advice.

## Testing checklist
**Validation:** empty submit shows errors on required fields; invalid email rejected; description under 20 chars rejected; consent unchecked blocks submit; optional fields can stay empty.
**Email delivery (not verified until you run it):** submit a real inquiry → email arrives at CONTACT_EMAIL with all fields, correct subject, and Reply-To = submitted email; check spam folder; submit with a wrong API key → UI shows error, not success; submit 6 times quickly → 429 message; double-click Send → one email only.
**Responsive:** 360px, 768px, 1280px widths; mobile menu opens/closes; no horizontal scroll; selects and inputs usable on a phone.
**Production:** env vars set in Vercel; domain verified in Resend; all nav and CTA links work; `/privacy` and a bad URL (404) render; metadata/favicon present; Lighthouse accessibility check; no console errors.
