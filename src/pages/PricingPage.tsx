import React, { useState } from 'react';
import { PriceEstimator } from '../components/PriceEstimator';
import { Calculator, ShieldCheck, Check, HelpCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface PricingPageProps {
  onBookWithEstimate: (estimate: { total: number; itemCount: number; details: string; readyDate: string }) => void;
  onOpenPickup: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBookWithEstimate, onOpenPickup }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Are there any hidden environmental or hazardous disposal fees?",
      a: "Never. We believe in 100% transparent pricing. The price you see on your estimate is the price you pay. Because we utilize non-toxic biodegradable eco-solvents, we do not tack on mandatory chemical surcharge fees."
    },
    {
      q: "What is your turnaround time for standard dry cleaning and shirts?",
      a: "Standard dry cleaning and dress shirts dropped off before 9:00 AM are ready the very next business day afternoon. Same-day rush service is available upon request for early drop-offs."
    },
    {
      q: "What if a button breaks or falls off during laundering?",
      a: "We inspect every shirt and garment during pressing. If a button is cracked, loose, or missing, our tailors replace or tighten it free of charge with an exact color-matched replacement before delivery."
    },
    {
      q: "How does Wash & Fold pricing work?",
      a: "Wash & Fold laundry is priced at $1.85 per pound with a 10 lb minimum. We weigh your garments dry, separate whites from colors, wash with premium hypoallergenic detergent, tumble dry on gentle, and fold each item with boutique precision."
    },
    {
      q: "Do you clean King and Queen size down comforters?",
      a: "Yes! We specialize in bulky bed comforters, duvets, and down-filled blankets. Our commercial-capacity Dexter drums ensure down feathers are thoroughly sanitised, conditioned, and lofted without clumping."
    }
  ];

  return (
    <div className="space-y-0 bg-slate-50">
      {/* ========================================================================= */}
      {/* 1. PRICING HERO HEADER                                                   */}
      {/* ========================================================================= */}
      <section className="bg-village-navy text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-village-blue/20 text-village-sky border border-village-blue/40 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Clear & Honest Pricing
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Transparent Garment & Laundry Pricing
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            No unexpected charges, no environmental markups. Select your items below to calculate an instant total and guaranteed turnaround time.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE PRICING ESTIMATOR                                         */}
      {/* ========================================================================= */}
      <div className="border-b border-slate-200">
        <PriceEstimator onBookWithEstimate={onBookWithEstimate} />
      </div>

      {/* ========================================================================= */}
      {/* 3. TRANSPARENCY & QUALITY PROMISES                                       */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
              The Village Cleaners Quality Guarantee
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Every item entrusted to us is backed by our customer satisfaction promise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">Complimentary Button Care</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Found a loose or missing button? Our on-site tailor replaces or tightens standard dress shirt buttons at zero extra cost.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-village-blue flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">Color-Safe & Non-Toxic</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                We never use harsh petroleum solvents that fade dyes or weaken seams. Colors remain vibrant and whites stay brilliant.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">Re-Clean Guarantee</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                If you are not completely delighted with how a stain was handled or the sharpness of a crease, we re-clean or re-press it for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl text-slate-950">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Everything you need to know about pricing, pickup, and garment care.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-display font-extrabold text-base sm:text-lg text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50"
                  >
                    <span>{faq.q}</span>
                    <span className="text-village-blue text-xl font-bold">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need help callout */}
          <div className="mt-12 p-6 rounded-3xl bg-white border-2 border-slate-200 text-center space-y-3">
            <h4 className="font-display font-bold text-base text-slate-900">
              Have a special garment, wedding gown, or leather item?
            </h4>
            <p className="text-xs text-slate-600">
              Call our Rice Village shop directly for custom quotes and fabric evaluations.
            </p>
            <a
              href="tel:7132778770"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-village-navy text-white text-xs font-bold hover:bg-village-navyLight transition"
            >
              <Phone className="w-3.5 h-3.5 text-village-sky" />
              <span>Call (713) 277-8770</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
