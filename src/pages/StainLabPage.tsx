import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Sparkles, ShieldCheck, AlertTriangle, Check, X, Droplets, Calendar, ArrowRight } from 'lucide-react';

interface StainLabPageProps {
  onOpenPickup: () => void;
}

export const StainLabPage: React.FC<StainLabPageProps> = ({ onOpenPickup }) => {
  return (
    <div className="space-y-0 bg-slate-50">
      {/* 1. Header */}
      <section className="bg-village-navy text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Fabric Restoration Science
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            The Village Cleaners Stain Lab
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Stubborn stains require chemistry, patience, and artisan care. Discover how our eco-enzyme spot treatments lift wine, oil, and ink without fiber damage.
          </p>
        </div>
      </section>

      {/* 2. Interactive Before & After Slider */}
      <div className="border-b border-slate-200">
        <BeforeAfterSlider />
      </div>

      {/* 3. Stains We Treat */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
              Specialized Stain Elimination
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Each stain type requires a targeted pH balance and specialized natural solvent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-black mb-3">
                🍷
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Tannin Stains (Wine & Berries)</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Tannins oxidize rapidly when exposed to heat. Our cold-enzyme soak neutralizes grape polyphenols before gentle solvent wash.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black mb-3">
                🫒
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Grease & Salad Oils</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Lipids adhere stubbornly to polyester and cotton. We use organic degreasers that solubilize fatty lipids without rings or watermarks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center font-black mb-3">
                ☕
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Espresso & Dark Tea</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Coffee combines sugars, oils, and tannins. Our staged multi-level extraction removes dark halos and sweet residues completely.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black mb-3">
                🖋️
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Ballpoint & Fountain Pen Ink</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Inks contain permanent dyes. We hand-dab microscopic spots with ultrasonic vapor tools that lift ink droplets off woven threads.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-black mb-3">
                💄
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Cosmetics & Foundation</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Wax-based lipsticks and pigment foundations are dissolved using gentle solvent baths that preserve silk sheen and embroidery.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black mb-3">
                🌿
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Perspiration & Deodorant Chalk</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Aluminum salts turn yellow over time. Our de-salinizing conditioning removes yellow collar stains and restores pristine white cotton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stain Emergency Guide: DO's and DON'Ts */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              First Aid For Fabrics
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-950">
              Stain Emergency: What to Do (And What to Avoid)
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              90% of permanent stain damage happens during the first 10 minutes when well-intentioned rubbing bakes the stain into the fiber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DO's */}
            <div className="p-8 rounded-3xl bg-emerald-50/70 border-2 border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-display font-black text-xl">
                <Check className="w-6 h-6 bg-emerald-200 rounded-full p-1 text-emerald-800" />
                <span>WHAT TO DO:</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Blot, never rub:</strong> Use a dry white paper napkin or towel and gently press down to absorb excess liquid.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Keep it cool:</strong> If necessary, dab lightly with cold water. Never apply heat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Bring it in early:</strong> Fresh stains come out easily. Mention the source (wine, soy sauce, olive oil) to our staff.</span>
                </li>
              </ul>
            </div>

            {/* DON'Ts */}
            <div className="p-8 rounded-3xl bg-red-50/70 border-2 border-red-200 space-y-4">
              <div className="flex items-center gap-2 text-red-800 font-display font-black text-xl">
                <X className="w-6 h-6 bg-red-200 rounded-full p-1 text-red-800" />
                <span>WHAT TO AVOID:</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-800">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                  <span><strong>Never rub vigorously:</strong> Scrubbing abrades fine silk or wool fibers, creating permanent friction pilling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                  <span><strong>Avoid hot water & iron:</strong> Heat acts like a dye fixative, chemically locking the stain into the fabric core.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                  <span><strong>Don't use generic chemical pens:</strong> Portable stain pens can bleach colored designer silk or leave water halos.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenPickup}
              className="px-8 py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-extrabold text-sm shadow-md transition inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Have a Stained Item? Schedule Pickup Today</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
