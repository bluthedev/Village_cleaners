import React from 'react';
import { SubscriptionPlans } from '../components/SubscriptionPlans';
import { RefreshCw, CheckCircle2, Truck, ShieldCheck, Calendar, Phone } from 'lucide-react';

interface SubscriptionPageProps {
  onSelectPlan: (planName: string, price: number) => void;
  onOpenPickup: () => void;
}

export const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ onSelectPlan, onOpenPickup }) => {
  return (
    <div className="space-y-0 bg-white">
      {/* 1. Header */}
      <section className="bg-village-navy text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-village-sky border border-white/20 text-xs font-bold uppercase tracking-wider">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Recurring Laundry Care</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Put Your Laundry on Autopilot
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reclaim 4 to 6 hours every single week. Our monthly membership plans give you scheduled weekly doorstep pickups, preferred rates, and rollover laundry pounds.
          </p>
        </div>
      </section>

      {/* 2. Main Subscription Plans Component */}
      <div className="border-b border-slate-200">
        <SubscriptionPlans onSelectPlan={onSelectPlan} />
      </div>

      {/* 3. How Memberships Work (Step by step) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-village-navy tracking-tight">
              How the Membership Works
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Simple, predictable, and designed for Rice Village and West University living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-4">
              <div className="w-10 h-10 rounded-xl bg-village-navy text-village-sky font-bold flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="font-display font-bold text-xl text-village-navy">Select Your Plan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose the laundry & dry clean allowance that fits your schedule. We provide you with two complimentary heavy-duty Village Cleaners nylon laundry bags.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-4">
              <div className="w-10 h-10 rounded-xl bg-village-navy text-village-sky font-bold flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="font-display font-bold text-xl text-village-navy">Weekly Doorstep Pickup</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leave your bag on your front porch on your designated route day (or hand it to our friendly driver). No need to be home.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-4">
              <div className="w-10 h-10 rounded-xl bg-village-navy text-village-sky font-bold flex items-center justify-center text-lg">
                3
              </div>
              <h3 className="font-display font-bold text-xl text-village-navy">Fresh Return in 24–48h</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your clothes return crisp-folded and hung in protective covers, delivered back to your front door like clockwork.
              </p>
            </div>
          </div>

          {/* Need help */}
          <div className="mt-14 text-center">
            <button
              onClick={onOpenPickup}
              className="px-8 py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-bold text-sm shadow-sm transition inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Sign Up with a Test Pickup</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
