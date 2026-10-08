import React from 'react';
import { WashingMachine3D } from './WashingMachine3D';
import { Sparkles, Shield, Clock, ArrowRight, Star, CheckCircle2, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenPickup: () => void;
  onScrollToPricing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPickup, onScrollToPricing }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-16 lg:py-20 bg-gradient-to-b from-sky-50/70 via-slate-50 to-white">
      {/* Decorative ambient background blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & High Conversion CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Neighborhood Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-sm text-xs font-semibold text-village-navy">
              <span className="flex h-2 w-2 rounded-full bg-village-blue animate-pulse" />
              <span className="text-village-blue font-bold">Rice Village Boutique</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">2366 Rice Blvd Suite D</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.25rem] text-slate-900 tracking-tight leading-[1.12]">
              Impeccable Garment Care & Smart Laundry in{' '}
              <span className="text-gradient">Rice Village</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience the fresh touch of eco-friendly dry cleaning, crisp wash & fold, and master alterations. Serving West University, Southampton, and Houston with same-day care.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenPickup}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-bold text-sm sm:text-base shadow-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <span>Schedule Pickup & Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToPricing}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 shadow-sm transition flex items-center justify-center gap-2"
              >
                <span>Instant Price Estimator</span>
              </button>
            </div>

            {/* Trust Proof Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/70 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-village-gold font-bold text-base sm:text-lg">
                  <Star className="w-4 h-4 fill-village-gold" />
                  <span>4.5 / 5</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">140+ Google Reviews</div>
              </div>

              <div className="text-center lg:text-left border-x border-slate-200/80 px-2">
                <div className="font-display font-bold text-slate-900 text-base sm:text-lg">Same-Day</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Drop off by 9:00 AM</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="font-display font-bold text-emerald-600 text-base sm:text-lg">100% Eco</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Gentle Non-Toxic</div>
              </div>
            </div>

            {/* Local Community Recognition */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-1">
              <CheckCircle2 className="w-4 h-4 text-village-blue shrink-0" />
              <span>Recommended across Rice University, West U & Med Center communities</span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Washing Machine Experience */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end" id="simulator">
            <WashingMachine3D onEstimateClick={onScrollToPricing} />
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-village-blue flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">Boutique Eco Dry Clean</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Non-toxic, scent-free fabric revival</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-village-navy flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">Express Wash & Fold</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Sorted, washed & folded to perfection</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">Master Alterations</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">30+ yrs precision tailoring on-site</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">Dexter Smart Laundromat</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">High-G extract & Dexter Pay mobile app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
