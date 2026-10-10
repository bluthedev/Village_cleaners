---
name: local-business-website-builder
description: >-
  Develops modern, high-converting, boutique local business websites from just a business link
  (Google Maps, Yelp, or business URL). Generates responsive multi-page React/Vite/Tailwind
  apps featuring real photography, a 3-image live wallpaper hero scrolling to the left at timed
  intervals, transparent pricing calculators, subscription tiers, pickup booking, and live open/closed tracking.
---

# Local Business Website Builder

This skill provides an end-to-end blueprint for developing boutique, high-converting local business websites (laundromats, dry cleaners, auto detailers, barbershops, bakeries, medical/dental clinics, etc.) starting **solely from a business link** (e.g., Google Maps URL, Yelp profile, or company website).

---

## 1. Input Analysis & Intelligence Extraction

When a user provides a business link:
```text
Example: https://www.google.com/maps/place/Village+Cleaners/@29.7178287,-95.4168997...
```

### Step 1.1: Extract Business Metadata
Extract or determine the following key business facts:
1. **Business Identity**: Official name, brand tagline, year established.
2. **Physical Location**: Full street address, suite/unit, city, state, ZIP code, neighborhood (e.g., Rice Village, West U).
3. **Contact Points**: Phone number (formatted for `tel:` links), contact email, Google Maps link.
4. **Operating Schedule**: Exact open/close hours by day of week, mid-day breaks (if applicable), weekend hours.
5. **Reputation Metrics**: Exact Google rating (e.g., 4.5/5.0), total review count (e.g., 140+ reviews), authentic customer sentiment quotes.
6. **Core Service Catalog**: 4–6 signature services, base pricing, turnaround times, unique selling propositions (e.g., "Dexter commercial machines", "Eco-friendly non-toxic solvents", "30-year master tailor").
7. **Brand Palette**:
   - Primary: Deep brand shade (e.g., Navy `#0F2744`, Forest `#143D2B`, Charcoal `#1E293B`).
   - Accent: High-contrast action color (e.g., Sky Blue `#0284C7`, Emerald `#059669`, Amber `#D97706`).
   - Surfaces: Crisp white `#FFFFFF`, Slate-50 `#F8FAFC`, Dark `#020617`.

---

## 2. Core Design & UX Rules

To ensure every site achieves maximum aesthetic quality and conversion rates:

1. **Typography**:
   - Strictly use **Inter** (`font-sans`) across the entire website.
   - Clean hierarchy: Headlines `font-extrabold` / `font-bold tracking-tight`, body text `font-normal text-slate-600 sm:text-slate-700 leading-relaxed`.
2. **Text Colors**:
   - **Solid colors ONLY**. Strictly **NO text gradients** (no `bg-clip-text text-transparent bg-gradient-to-r`).
   - Light backgrounds: Solid navy `#0F2744` or slate `#0F172A`.
   - Dark backgrounds: Solid white `#FFFFFF` or slate `#F8FAFC`.
3. **Spacing & Structure**:
   - Spacious sections (`py-20` to `py-24` on desktop, `py-14` on mobile).
   - Rounded corners: `rounded-2xl` and `rounded-3xl` for modern luxury feel.
   - Subtle borders: `border border-slate-200` or `border-2 border-slate-200/80`.
4. **Multi-Page Architecture**:
   - Use clean hash-based or state routing with persistent header & footer:
     - `home`: Hero showcase, value pillars, featured services, reviews, location preview.
     - `services`: Detailed catalog of all services with turnaround, pricing, and 4-step process.
     - `pricing`: Interactive price estimator/calculator with live total and booking CTA.
     - `plans`: Monthly recurring subscription tiers ($89, $149, $229/mo) with billing toggle.
     - `reviews`: Verified Google reviews grid with ratings and customer testimonials.
     - `location`: Interactive map, live open/closed status clock, and parking/directions guide.

---

## 3. Hero Section Standard: 3-Image Live Wallpaper

The hero section must include a signature **3-image live background wallpaper scrolling to the left at timed intervals**:

### Technical Specifications:
- **3 Real Photos**:
  - Slide 1: Modern facility / equipment (e.g., clean machines, salon chairs, workshop).
  - Slide 2: Finished product / care details (e.g., folded clean laundry, styled cut, detailed car).
  - Slide 3: Artisan craftsmanship / boutique service (e.g., pressed garments on hangers, tailor at work).
- **Smooth Left-Scrolling Motion**:
  - Horizontal translation track: `translateX(-${currentSlide * 100}%)`.
  - Timing: 5-second interval (`5000ms`), `transition-transform duration-1000 ease-in-out`.
  - Pause on user interaction or pause button toggle.
- **High-Clarity Scrim Overlay**:
  - **Do NOT wash out the photo with heavy white fog.**
  - Use a high-clarity directional scrim:
    `bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/25`
  - This keeps left-side solid white text at 100% WCAG AAA contrast while allowing **75%+ of the raw photography on the right to shine through vibrantly**.
  - No `backdrop-blur` on the wallpaper layer so images remain razor-sharp.
- **Foreground Content**:
  - Pill badge with location and live indicator (`Rice Village Boutique • 2366 Rice Blvd`).
  - High-impact headline: Solid white `font-extrabold text-3xl sm:text-5xl lg:text-6xl`.
  - Spacious subtitle: Solid slate-200 `text-base sm:text-lg`.
  - Dual CTAs: Primary colored button (`bg-village-blue text-white`) + Secondary outlined button.
  - Trust metrics bar: Rating stars (e.g., 4.5★ Google), turnaround time, and quality pledge.
  - Floating Boutique Quick-Booking / Store Preview Card on the right.
- **Interactive Control Bar**:
  - Positioned at the bottom of the hero.
  - Displays: Live showcase description badge, active slide indicator pills, previous/next arrows, and play/pause toggle button.

---

## 4. Photography & Media Pipeline

### Rules for Images:
1. **Strictly NO AI-Generated Images**: Do not generate artificial or hallucinated storefronts. Use authentic, real photography only.
2. **Dimensions**:
   - **Hero Wallpapers**: Exact **1920 × 1080** (16:9 widescreen HD).
   - **Service Catalog & Cards**: Exact **1200 × 800** (3:2 standard ratio).
3. **Responsive Sizing**:
   - Always use `w-full h-full object-cover object-center` within bounded height containers (e.g., `h-56`, `h-64`, `h-72`, `h-96`).
   - Prevents layout shift, pixelation, and image distortion.

### Downloading Curated Stock Photos via Script:
Use the provided Node.js script template:
```javascript
// download_stock_photos.js
const https = require('https');
const fs = require('fs');
const path = require('path');

const photos = [
  { name: 'hero_1.jpg', url: 'https://images.unsplash.com/photo-...?w=1920&h=1080&fit=crop&q=85' },
  { name: 'hero_2.jpg', url: 'https://images.unsplash.com/photo-...?w=1920&h=1080&fit=crop&q=85' },
  { name: 'hero_3.jpg', url: 'https://images.unsplash.com/photo-...?w=1920&h=1080&fit=crop&q=85' },
  { name: 'service_1.jpg', url: 'https://images.unsplash.com/photo-...?w=1200&h=800&fit=crop&q=85' }
];
// (See scripts/download_stock_photos.js for complete implementation)
```

---

## 5. Interactive Conversion Modules

### 5.1 Interactive Price Estimator
- Item selector with categories (e.g. Wash & Fold, Shirts, Suits, Alterations, Linens).
- Real-time increment/decrement counters (`-` and `+`).
- Live subtotal calculation with free pickup qualification meter.
- 1-click button to carry cart total directly into the Doorstep Pickup booking modal.

### 5.2 Monthly Subscription Plans
- 3 Clear Tiers:
  - **Tier 1 (Starter/Light)**: $89/mo (e.g., 40 lbs laundry, free pickup).
  - **Tier 2 (Most Popular / Standard)**: $149/mo (e.g., 80 lbs laundry, 4 pressed shirts, priority turnaround).
  - **Tier 3 (Executive / Family)**: $229/mo (e.g., 140 lbs laundry, comforter credit, unlimited free alterations/pressing).
- Monthly vs. Annual toggle (with "Save 15%" badge).
- "Select Plan" button linking to checkout/pickup modal with pre-selected tier.

### 5.3 Live Operating Hours & Status Tracker
- Calculates live open/closed status dynamically based on current time in the business's timezone:
```typescript
const now = new Date();
const localTimeStr = now.toLocaleString("en-US", { timeZone: "America/Chicago" });
const localDate = new Date(localTimeStr);
// Checks weekday, morning shift, lunch break, and closing time.
// Emits: "Open Now until 5:00 PM" or "Mid-Day Break • Reopens 2:00 PM" or "Closed Today (Sunday)"
```
- Pulsing green indicator dot for open, amber for break/closing soon.

### 5.4 Doorstep Pickup / Booking Modal
- Multi-step or streamlined form:
  - Service selection / estimated weight.
  - Date picker & time window selector (Morning 8 AM–12 PM, Afternoon 1 PM–5 PM).
  - Customer contact: Name, phone, street address, gate code, special garment care instructions.
  - Instant booking confirmation screen with appointment ID and SMS notification notice.

---

## 6. Implementation Workflow

When asked to build a site from a business link:

1. **Research & Extract**:
   - Read the business link.
   - Extract name, address, hours, ratings, reviews, and services.
2. **Scaffold Tech Stack**:
   - Vite + React + TypeScript + Tailwind CSS + Lucide React.
   - Configure Tailwind with business primary/accent colors.
   - Enforce Inter font in `index.html` and `index.css`.
3. **Download Real Photography**:
   - Fetch 3 hero wallpaper images (1920×1080) and 4–6 service images (1200×800) matching the business industry.
   - Verify image dimensions using Node.js script.
4. **Build Core Components**:
   - `Navbar`: Mobile drawer, page switcher, telephone link, "Book Pickup" CTA button.
   - `Hero`: 3-image timed wallpaper sliding left, high-clarity scrim, floating booking card, bottom control bar.
   - `ServicesPage` & `servicesData.ts`: 4-step process and full catalog with exact uniform photos.
   - `PricingPage`: Interactive real-time cost calculator.
   - `SubscriptionPlans`: 3 tiers with annual billing toggle.
   - `ReviewsPage`: Real customer reviews from Google Maps.
   - `LocationPage` & `LocationHours`: Map embed, live open clock, parking guide.
   - `PickupModal`: Functional booking modal with instant confirmation state.
5. **Verify & Test**:
   - Run `npm run build` (`tsc && vite build`) to verify 0 errors.
   - Check mobile and desktop viewports.
6. **Deploy & Push**:
   - Commit cleanly with user git credentials and push to GitHub remote repository.
