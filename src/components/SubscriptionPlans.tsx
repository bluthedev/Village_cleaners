import React, { useState } from 'react';
import { Check, Calendar, ArrowRight, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

interface SubscriptionPlansProps {
  onSelectPlan: (planName: string, price: number) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const plans = [
    {
      id: 'essential',
      name: 'Essential Care',
      subtitle: 'Ideal for individuals & students',
      monthlyPrice: 89,
      quarterlyPrice: 79,
      popular: false,
      badge: 'Starter',
      deliveries: '1 Scheduled Pickup / week',
      washLbs: '40 lbs Wash & Fold / mo',
      dryCleanItems: '4 Dress Shirts or Blouses / mo',
      features: [
        '40 lbs of premium wash, dry & fold',
        '4 dress shirts laundered and hand-pressed',
        'Weekly scheduled doorstep pickup & return',
        'Hypoallergenic or scented detergent choice',
        'Rollover up to 15 unused pounds each month',
        'No commitment — pause or cancel anytime'
      ]
    },
    {
      id: 'professional',
      name: 'Executive Wardrobe',
      subtitle: 'Designed for professionals & couples',
      monthlyPrice: 149,
      quarterlyPrice: 135,
      popular: true,
      badge: 'Most Popular',
      deliveries: '2 Scheduled Pickups / week',
      washLbs: '75 lbs Wash & Fold / mo',
      dryCleanItems: '10 Dry Cleaned & Pressed Items / mo',
      features: [
        '75 lbs of premium wash, dry & fold',
        '10 dry clean pieces (suits, slacks, dresses, shirts)',
        '2 suit jacket or blazer shape restorations / mo',
        'Twice-weekly doorstep pickup & delivery',
        'Priority 24-hour turnaround guarantee',
        'Complimentary button replacement & seam check',
        'Rollover up to 30 unused pounds each month'
      ]
    },
    {
      id: 'family',
      name: 'Family & Home Estate',
      subtitle: 'Complete household & bedding care',
      monthlyPrice: 229,
      quarterlyPrice: 209,
      popular: false,
      badge: 'Full Service',
      deliveries: 'Unlimited Flexible Pickups',
      washLbs: '130 lbs Wash & Fold / mo',
      dryCleanItems: '18 Dry Cleaned Items / mo',
      features: [
        '130 lbs of premium wash, dry & fold',
        '18 dry clean pieces per month',
        '1 King or Queen down comforter cleaned free / mo',
        'Unlimited doorstep pickup and delivery visits',
        'Same-day rush service upon request (by 9 AM)',
        'Delicate bedding, linens & towel conditioning',
        'Dedicated wardrobe specialist assigned to your account'
      ]
    }
  ];

  return (
    <section id="subscriptions" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-village-navy text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            <RefreshCw className="w-3.5 h-3.5 text-village-blue" />
            <span>Effortless Monthly Care</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-village-navy tracking-tight leading-tight">
            Monthly Laundry & Dry Cleaning Memberships
          </h2>

          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Never worry about laundry baskets or dry cleaning errands again. Enjoy scheduled weekly doorstep pickups, priority turnarounds, and substantial savings for your household.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-village-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-village-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>3-Month Plan</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? 'bg-slate-50 border-2 border-village-blue shadow-card ring-1 ring-village-blue'
                    : 'bg-white border-2 border-slate-200 shadow-clean hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-village-blue text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Subtitle */}
                  <div>
                    {!plan.popular && (
                      <span className="inline-block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="font-display font-extrabold text-2xl text-village-navy">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-6 border-b border-slate-200">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-black text-4xl sm:text-5xl text-village-navy">
                        ${price}
                      </span>
                      <span className="text-slate-500 text-sm font-semibold">/ month</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {billingCycle === 'quarterly' ? 'Billed quarterly ($' + (price * 3) + ') • Cancel anytime' : 'Month-to-month • No long-term contract'}
                    </div>
                  </div>

                  {/* Highlight Specs */}
                  <div className="space-y-2 py-1">
                    <div className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                      👕 {plan.washLbs}
                    </div>
                    <div className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                      👔 {plan.dryCleanItems}
                    </div>
                    <div className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                      🚚 {plan.deliveries}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      Plan Inclusions:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Button */}
                <div className="pt-8 mt-8 border-t border-slate-200">
                  <button
                    onClick={() => onSelectPlan(plan.name, price)}
                    className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-village-blue hover:bg-village-blueHover text-white shadow-md'
                        : 'bg-village-navy hover:bg-village-navyLight text-white shadow-sm'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Pickup starts immediately this week
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Member Guarantee Footer */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-village-navy">
                Zero Risk, Zero Long-Term Commitment
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Traveling or away on vacation? Pause your subscription with one tap or roll over unused laundry pounds.
              </p>
            </div>
          </div>

          <div className="text-xs font-bold text-village-blue whitespace-nowrap">
            Rice Village & West U Exclusive
          </div>
        </div>
      </div>
    </section>
  );
};
