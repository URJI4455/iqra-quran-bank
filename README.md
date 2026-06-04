# Iqra Qur'an Bank — Official Website

Premium frontend website for **Iqra Qur'an Bank**, a registered Ethiopian charity distributing the Holy Qur'an, building Madrasas, installing solar energy, and providing clean water to rural Muslim communities across Ethiopia.

**Built by:** URHIDU Company  
**Client:** Iqra Qur'an Bank — Robe, Bale, Ethiopia  
**License No.:** M/m/dhi/i/km/g/049/17  
**Delivery Date:** June 2026  

---

## Tech Stack

| Layer      | Technology                         |
|------------|------------------------------------|
| Markup     | Pure HTML5 — semantic, accessible  |
| Styling    | Pure CSS3 — custom properties, no framework |
| Behaviour  | Vanilla JavaScript — no dependencies |
| Fonts      | Google Fonts CDN (Playfair Display + Inter) |
| Deployment | Vercel (free static hosting)       |

**Zero dependencies. Zero frameworks. Zero npm install.**

---

## Project Structure

```
iqra-quran-bank/
│
├── assets/
│   └── images/
│       ├── logo/        ← logo.png, favicon.png (READ README.md inside)
│       ├── hero/        ← hero-main.jpg
│       ├── projects/    ← quran-bank.jpg, madrasa.jpg, solar.jpg, water.jpg
│       ├── gallery/     ← all field documentation photos
│       ├── team/        ← testimonial avatars
│       └── partners/    ← partner logos (pending from client)
│
├── css/
│   ├── base/
│   │   ├── variables.css     Design tokens (colors, spacing, type)
│   │   ├── reset.css         Browser normalization
│   │   └── typography.css    Type scale + layout utilities
│   ├── components/
│   │   └── components.css    Buttons, cards, forms, badges, section headers
│   ├── sections/
│   │   └── sections.css      Hero, impact, causes, testimonials, CTA banner
│   ├── pages/
│   │   └── pages.css         Donate, gallery, contact, about, projects, legal
│   ├── navbar.css            Navigation component
│   ├── footer.css            Footer component
│   └── main.css              Master import file (link this in every HTML page)
│
├── js/
│   ├── data/
│   │   └── content.js        All site content — update this as org grows
│   ├── components/
│   │   ├── navbar.js         Scroll, hamburger, active link
│   │   └── animations.js     Scroll reveal, counter animation, progress bars
│   ├── pages/
│   │   ├── donate.js         Cause selector, amount buttons, payment modal
│   │   ├── gallery.js        Filter tabs, lightbox
│   │   └── contact.js        Form validation (UI only)
│   └── utils/
│       └── (helpers reserved for future use)
│
├── index.html        Home
├── about.html        About Us
├── projects.html     Our Projects
├── donate.html       Donate
├── gallery.html      Gallery
├── contact.html      Contact
├── privacy.html      Privacy Policy
├── terms.html        Terms & Conditions
├── disclaimer.html   Disclaimer
│
├── vercel.json       Vercel deployment configuration
└── README.md         This file
```

---

## Before Going Live — Client Checklist

### 1. Images (Critical — site looks empty without them)
Upload all images to the correct folders. Read each `README.md` inside each image folder for exact filenames and dimensions.

| Priority | Folder              | Files Needed                          |
|----------|---------------------|---------------------------------------|
| 🔴 Must  | `assets/images/logo`    | `logo.png`, `favicon.png`         |
| 🔴 Must  | `assets/images/hero`    | `hero-main.jpg`                   |
| 🔴 Must  | `assets/images/projects`| 4 project images + story-field.jpg|
| 🔴 Must  | `assets/images/gallery` | 9 gallery photos                  |
| 🟡 Soon  | `assets/images/team`    | 3 testimonial avatars             |
| 🟢 Later | `assets/images/partners`| Partner logos (when available)    |

### 2. Content Updates in `js/data/content.js`
- Update impact numbers (Qur'ans, communities, Madrasas, water points) with real data
- Update testimonials with real names and quotes once collected
- Update gallery captions to match actual photo locations

### 3. Legal Pages
Review `privacy.html`, `terms.html`, and `disclaimer.html` with a local advisor before launch.

### 4. Donate Page — Payment Accounts
Verify payment account numbers in `donate.html` (inside the payment modal):
- Telebirr: `0984617171`
- CBE: `1000720442365`
- Abyssinia: Contact email

---

## Deployment to Vercel

1. Push this entire folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repository
4. Framework: **Other** (static site)
5. Root directory: `/` (leave as default)
6. Click **Deploy**

Done. Vercel auto-deploys on every GitHub push.

---

## What Is UI-Only (No Backend)

| Feature             | Status     | Notes                                      |
|---------------------|------------|--------------------------------------------|
| Donate form         | UI only    | Shows payment instructions modal — no transaction |
| Contact form        | UI only    | Validates and shows success message — not sent |
| Email subscribe     | UI only    | Renders input — no list connected          |
| Payment processing  | Not included | Requires separate backend agreement      |

---

## Color Reference

| Name        | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| Gold        | `#C9A84C` | Primary CTAs, accents        |
| Gold Light  | `#E2C882` | Hover states                 |
| Navy Dark   | `#111D33` | Hero backgrounds, dark sections |
| Navy        | `#1A2A4A` | Cards, headers               |
| Green       | `#2E7D32` | Water pillar, success states |
| Gray 700    | `#374151` | Body text                    |

---

## Fonts

- **Headings:** Playfair Display (Google Fonts CDN)
- **Body:** Inter (Google Fonts CDN)

Both load via CDN link in `css/main.css`. No installation required.

---

## Built by URHIDU Company

**Urji Abdurehman** — Founder, URHIDU Company  
urjiabdurehman55@gmail.com  
Ethiopia

*"Built with purpose for a cause that matters."*
