import React, { useState } from 'react';
import { PriceEstimator } from '../components/PriceEstimator';
import { SubscriptionPlans } from '../components/SubscriptionPlans';
import { Calculator, ShieldCheck, Check, Phone, RefreshCw, Layers } from 'lucide-react';

interface PricingPageProps {
  onBookWithEstimate: (estimate: { total: number; itemCount: number; details: string; readyDate: string }) => void;
  onOpenPickup: () => void;
  onSelectPlan: (planName: string, price: number) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBookWithEstimate, onOpenPickup, onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'subscriptions'>('calculator');
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
      q: "How does the monthly subscription plan work?",
      a: "Our monthly subscription plans include scheduled weekly doorstep pickups, a generous allowance of wash & fold pounds, and complimentary dry cleaning credits. Unused pounds roll over to the next month, and you can pause or cancel anytime."
    },
    {
      q: "What if a button breaks or falls off during laundering?",
      a: "We inspect every shirt and garment during pressing. If a button is cracked, loose, or missing, our tailors replace or tighten it free of charge with an exact color-matched replacement before delivery."
    },
    {
      q: "How does Wash & Fold pricing work by the pound?",
      a: "Wash & Fold laundry is priced at $1.85 per pound with a 10 lb minimum. We weigh your garments dry, separate whites from colors, wash with premium hypoallergenic detergent, tumble dry on gentle, and fold each item with boutique precision."
    }
  ];

  return (
    <div className="space-y-0 bg-white">
      {/* 1. PRICING HERO HEADER */}
      <section className="bg-village-navy text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-village-sky border border-white/20 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Honest & Transparent</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Transparent Pricing & Memberships
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            No surprise surcharges, no chemical fees. Calculate an instant itemized estimate or choose a monthly plan with free weekly doorstep pickups.
          </p>

          {/* Clean View Mode Switcher */}
          <div className="pt-6 inline-flex p-1.5 bg-slate-800 rounded-2xl border border-slate-700">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'bg-village-blue text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Item Estimator</span>
            </button>
            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                activeTab === 'subscriptions'
                  ? 'bg-village-blue text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Monthly Subscription Plans</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CHOSEN VIEW CONTENT */}
      {activeTab === 'calculator' ? (
        <div className="border-b border-slate-200">
          <PriceEstimator onBookWithEstimate={onBookWithEstimate} />
        </div>
      ) : (
        <SubscriptionPlans onSelectPlan={onSelectPlan} />
      )}

      {/* 3. QUALITY GUARANTEE (SPACIOUS) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-village-navy tracking-tight">
              The Village Cleaners Quality Promise
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Every garment entrusted to our care is backed by our full satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-village-navy">Free Button Replacement</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Found a loose or missing button? Our on-site tailor tightens or replaces standard shirt buttons free of charge.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-village-blue flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-village-navy">Gentle Eco Cleaning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We never use harsh chlorinated solvents. Fabric dyes remain vibrant, silks stay soft, and garments smell naturally fresh.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-village-navy">Free Re-Clean Guarantee</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you are not 100% satisfied with the finish of your garment or a crease, bring it back within 7 days and we will re-clean it for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-village-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Clear answers regarding pricing, turnarounds, and our pickup service.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-clean transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left font-display font-bold text-base sm:text-lg text-village-navy flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span>{faq.q}</span>
                    <span className="text-village-blue text-xl font-bold">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need help callout */}
          <div className="mt-14 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
            <h4 className="font-display font-bold text-lg text-village-navy">
              Have a special garment, bridal dress, or leather piece?
            </h4>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Call our Rice Village shop directly for custom quotes and fabric evaluations.
            </p>
            <div className="pt-2">
              <a
                href="tel:7132778770"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-village-navy text-white text-xs font-bold hover:bg-village-navyLight transition shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-village-sky" />
                <span>Call (713) 277-8770</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
