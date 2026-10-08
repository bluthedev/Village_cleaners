import React from 'react';
import { Calendar, ArrowRight, Star, CheckCircle2, Clock, MapPin, ShieldCheck, Sparkles, Phone } from 'lucide-react';

interface HeroProps {
  onOpenPickup: () => void;
  onNavigateToPricing: () => void;
  onNavigateToPlans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPickup, onNavigateToPricing, onNavigateToPlans }) => {
  return (
    <section className="relative bg-white pt-12 pb-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-conversion Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Clean Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-village-blue" />
              <span className="text-village-navy font-extrabold">Rice Village Boutique</span>
              <span className="text-slate-400">•</span>
              <span>2366 Rice Blvd, Suite D</span>
            </div>

            {/* Solid, High-Contrast Headline (No gradients) */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-village-navy tracking-tight leading-[1.12]">
              Boutique Garment Care & Smart Laundry in Rice Village
            </h1>

            {/* Spacious, Legible Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience the fresh touch of non-toxic eco dry cleaning, crisp wash & fold, and master alterations. Serving West University, Southampton, and Houston with same-day care since 1974.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenPickup}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Doorstep Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToPricing}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-village-navy font-bold text-sm sm:text-base border-2 border-slate-200 shadow-sm transition flex items-center justify-center gap-2"
              >
                <span>Price Calculator</span>
              </button>

              <button
                onClick={onNavigateToPlans}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base transition flex items-center justify-center"
              >
                <span>Monthly Plans</span>
              </button>
            </div>

            {/* Key Trust Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-village-gold font-extrabold text-base sm:text-lg">
                  <Star className="w-4 h-4 fill-village-gold" />
                  <span>4.5 / 5.0</span>
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">140+ Google Reviews</div>
              </div>

              <div className="text-center lg:text-left border-x border-slate-200 px-3">
                <div className="font-display font-bold text-village-navy text-base sm:text-lg">Same-Day</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">Drop by 9:00 AM</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="font-display font-bold text-emerald-700 text-base sm:text-lg">100% Eco</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">Non-Toxic Solvents</div>
              </div>
            </div>

            {/* Neighborhood statement */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-600 font-medium pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free weekly doorstep pickup available in 77005, 77030 & 77098</span>
            </div>
          </div>

          {/* Right Column: Clean Visual Presentation */}
          <div className="lg:col-span-5 w-full">
            <div className="relative max-w-lg mx-auto rounded-3xl overflow-hidden border-2 border-slate-200 shadow-card bg-white">
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
                <img
                  src="/images/storefront.jpg"
                  alt="Village Cleaners Storefront Rice Village"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-village-navy shadow-sm">
                  Rice Village • Est. 1974
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold text-village-sky uppercase tracking-wider">
                    2366 Rice Boulevard, Suite D
                  </div>
                  <div className="font-display font-extrabold text-lg mt-0.5">
                    Houston, TX 77005
                  </div>
                </div>
              </div>

              {/* Informative Sub-card */}
              <div className="p-6 sm:p-7 space-y-4 bg-white">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="block text-slate-500 font-medium">Wash & Fold</span>
                    <span className="font-bold text-village-navy text-sm mt-0.5 block">$1.85 / lb</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="block text-slate-500 font-medium">Dress Shirts</span>
                    <span className="font-bold text-village-navy text-sm mt-0.5 block">$3.50 pressed</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-village-blue shrink-0" />
                    <span className="font-semibold text-village-navy">Ready Tomorrow Afternoon</span>
                  </div>
                  <span className="font-bold text-village-blue">Express Care</span>
                </div>

                <button
                  onClick={onOpenPickup}
                  className="w-full py-3.5 rounded-xl bg-village-navy hover:bg-village-navyLight text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book Pickup for Tomorrow</span>
                  <ArrowRight className="w-4 h-4 text-village-sky" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
