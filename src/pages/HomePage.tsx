import React from 'react';
import { WashingMachine2D } from '../components/WashingMachine2D';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  Sparkles,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Check,
  ChevronRight,
  Phone,
  Calendar,
  Layers,
  HeartHandshake
} from 'lucide-react';

import { PageId } from '../components/Navbar';

interface HomePageProps {
  onOpenPickup: () => void;
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenPickup, onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH 2D WASHING MACHINE                                  */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-16 lg:py-20 bg-gradient-to-b from-sky-50/80 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headline, Proof, CTAs */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Neighborhood Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-bold text-slate-800">
                <span className="flex h-2.5 w-2.5 rounded-full bg-village-blue animate-pulse" />
                <span className="text-village-blue font-extrabold">Rice Village Boutique</span>
                <span className="text-slate-400">•</span>
                <span>2366 Rice Blvd Suite D</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.25rem] text-slate-950 tracking-tight leading-[1.15]">
                Impeccable Garment Care & Smart Laundry in{' '}
                <span className="text-gradient">Rice Village</span>
              </h1>

              {/* High-legibility Subtitle */}
              <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Boutique eco-friendly dry cleaning, crisp wash & fold, and master alterations. Backed by Dexter commercial power and 4.5-star Rice Village care since 1974.
              </p>

              {/* Conversion CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onOpenPickup}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-extrabold text-sm sm:text-base shadow-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Pickup & Delivery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base border-2 border-slate-200 shadow-sm transition flex items-center justify-center gap-2"
                >
                  <span>Estimate Your Order</span>
                </button>
              </div>

              {/* Trust Metric Pillars */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t-2 border-slate-200/80 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1 text-village-gold font-extrabold text-base sm:text-lg">
                    <Star className="w-4 h-4 fill-village-gold" />
                    <span>4.5 / 5.0</span>
                  </div>
                  <div className="text-xs text-slate-600 font-semibold">140+ Google Reviews</div>
                </div>

                <div className="text-center lg:text-left border-x-2 border-slate-200 px-2">
                  <div className="font-display font-black text-slate-950 text-base sm:text-lg">Same-Day</div>
                  <div className="text-xs text-slate-600 font-semibold">Drop by 9:00 AM</div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="font-display font-black text-emerald-700 text-base sm:text-lg">100% Eco</div>
                  <div className="text-xs text-slate-600 font-semibold">Non-toxic Solvents</div>
                </div>
              </div>

              {/* Community statement */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-700 pt-1 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Trusted by West U families, Rice faculty & Texas Medical Center professionals</span>
              </div>
            </div>

            {/* Right Column: Interactive 2D Washing Machine */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <WashingMachine2D onEstimateClick={() => onNavigate('pricing')} />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY CHOOSE VILLAGE CLEANERS (HIGH DEFINITION SECTION)                 */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-village-navy text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-village-blue" />
              The Village Cleaners Standard
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Boutique Craftsmanship Meets Modern Efficiency
            </h2>
            <p className="text-slate-700 mt-3 text-base sm:text-lg leading-relaxed">
              Unlike industrial discount cleaners that batch clothes in harsh chemical baths, we treat every garment with personalized care and non-toxic formulas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-village-blue flex items-center justify-center mb-4 font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">
                Non-Toxic Eco Solvents
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Zero chemical fumes, zero stiff residues. Gentle on wool, cashmere, and silk while safe for sensitive skin and the environment.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-village-navy flex items-center justify-center mb-4 font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">
                Same-Day Available
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Drop your dry cleaning or wash & fold off before 9:00 AM on weekdays, and pick it up freshly pressed and folded before closing.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">
                Master Tailor On-Site
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                With over 30 years of tailoring mastery, we provide precision alterations for suits, formal dresses, and everyday denim in-house.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">
                Dexter Smart Laundromat
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Commercial high-efficiency Dexter equipment, mobile payments via Dexter Pay, air-conditioned lounge, and free front parking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED SERVICES PREVIEW                                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-village-navy text-xs font-extrabold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5 text-village-blue" />
                Specialized Services
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                Our Garment Care Solutions
              </h2>
              <p className="text-slate-700 mt-2 text-base max-w-xl">
                Explore our full line of fabric care services designed for busy households, professionals, and students.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 rounded-xl bg-village-navy hover:bg-village-navyLight text-white font-extrabold text-sm transition flex items-center gap-2 self-start md:self-auto"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="rounded-3xl bg-white border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <img
                  src="/images/dry_cleaning.jpg"
                  alt="Eco Dry Cleaning"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs font-bold text-village-blue uppercase tracking-wider">From $7.50 / item</div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">Boutique Eco Dry Cleaning</h3>
                  <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                    Hand-inspected, gently cleaned with biodegradable non-toxic fluids, and steamed on artisanal pressers.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition"
                >
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="rounded-3xl bg-white border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <img
                  src="/images/storefront.jpg"
                  alt="Wash and Fold"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs font-bold text-village-blue uppercase tracking-wider">$1.85 / lb (10 lb min)</div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">Fluff & Fold Laundry</h3>
                  <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                    Whites and darks separated, tumble-dried on low, and crisp-folded ready to go straight into your drawers.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition"
                >
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="rounded-3xl bg-white border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <img
                  src="/images/tailoring.jpg"
                  alt="Alterations"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs font-bold text-village-blue uppercase tracking-wider">From $15.00</div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">Master Alterations & Tailoring</h3>
                  <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                    Custom hems, sleeve adjustments, waist tapering, and zipper replacements by our in-house master tailor.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BEFORE & AFTER STAIN REMOVAL SHOWCASE                                  */}
      {/* ========================================================================= */}
      <BeforeAfterSlider />

      {/* ========================================================================= */}
      {/* 5. PRICING & TURNAROUND CALLOUT BANNER                                   */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-village-navy via-village-navy to-village-navyLight p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-sky-500/20 text-village-sky border border-sky-400/30 uppercase tracking-wider">
                Instant Price Transparency
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Wondering How Much Your Laundry Will Cost?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Use our interactive price estimator to pick your garments, see turnaround schedules, and book a free pickup in 30 seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-7 py-4 rounded-xl bg-village-blue hover:bg-village-blueHover text-white font-extrabold text-sm shadow-md transition"
              >
                Open Price Estimator
              </button>
              <button
                onClick={onOpenPickup}
                className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-village-navy font-extrabold text-sm transition"
              >
                Schedule Pickup Directly
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GOOGLE REVIEWS TEASER                                                 */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Verified Local Trust
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
              4.5 Stars Across 140+ Google Reviews
            </h2>
            <p className="text-slate-700 mt-2 text-base">
              Here is what Rice Village neighbors say about our garment quality and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-village-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                  ))}
                </div>
                <p className="text-slate-800 text-sm italic leading-relaxed">
                  "Village Cleaners has been my go-to dry cleaner in Rice Village for over 4 years. They handled my tailored designer blouses with such care and removed a stubborn red wine stain without fading the silk."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-bold text-slate-900">Katherine M.</span> • West University
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-village-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                  ))}
                </div>
                <p className="text-slate-800 text-sm italic leading-relaxed">
                  "Working long shifts at the Med Center gives me zero time for laundry. Their Wash & Fold service is an absolute lifesaver. Everything comes back folded so sharply and smelling amazing."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-bold text-slate-900">David L., MD</span> • Texas Medical Center
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-village-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                  ))}
                </div>
                <p className="text-slate-800 text-sm italic leading-relaxed">
                  "Had three bespoke suits altered and pressed here before a wedding. The tailor is a true artist—the sleeve length and waist suppression were pinpoint perfection."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-bold text-slate-900">Julian Thorne</span> • Southampton
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('reviews')}
              className="px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-900 font-extrabold text-sm hover:bg-white transition"
            >
              Read All Verified Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. STORE VISIT & LOCATION TEASER                                         */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl border-2 border-slate-200 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-village-blue">
                <MapPin className="w-4 h-4" />
                Storefront in Rice Village
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-950">
                2366 Rice Boulevard, Suite D, Houston, TX 77005
              </h3>
              <p className="text-slate-700 text-sm">
                Open Mon–Thu: 8am–1pm, 2pm–5pm • Fri: 8am–1pm, 2pm–4pm • Sat: 8am–2pm
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:7132778770"
                className="px-5 py-3 rounded-xl border-2 border-slate-300 text-slate-900 font-bold text-sm bg-white hover:bg-slate-100 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-village-blue" />
                <span>(713) 277-8770</span>
              </a>
              <button
                onClick={() => onNavigate('location')}
                className="px-6 py-3 rounded-xl bg-village-navy text-white font-bold text-sm hover:bg-village-navyLight transition"
              >
                Hours & Route
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
