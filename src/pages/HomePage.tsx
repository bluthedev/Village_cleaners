import React from 'react';
import { Hero } from '../components/Hero';
import { SubscriptionPlans } from '../components/SubscriptionPlans';
import { PageId } from '../components/Navbar';
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
  Truck
} from 'lucide-react';

interface HomePageProps {
  onOpenPickup: () => void;
  onNavigate: (page: PageId) => void;
  onSelectPlan: (planName: string, price: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenPickup, onNavigate, onSelectPlan }) => {
  return (
    <div className="space-y-0 bg-white">
      {/* 1. HERO SECTION */}
      <Hero
        onOpenPickup={onOpenPickup}
        onNavigateToPricing={() => onNavigate('pricing')}
        onNavigateToPlans={() => onNavigate('plans')}
      />

      {/* 2. THE VILLAGE CLEANERS STANDARD (SPACIOUS PILLARS) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-village-navy text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-village-blue" />
              <span>Boutique Fabric Care</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-village-navy tracking-tight">
              Why Rice Village Neighbors Trust Us
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
              We reject harsh commercial chemical baths in favor of non-toxic biodegradable solutions, careful hand-spotting, and precision pressing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-village-blue flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-village-navy">
                Non-Toxic Eco Solvents
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero chemical fumes and zero stiff residues. Safe for delicate silk, cashmere, sensitive skin, and the environment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-village-navy flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-village-navy">
                Same-Day Available
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Drop your dry cleaning or laundry off before 9:00 AM on weekdays, and collect it crisp, pressed, and folded before evening.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-village-navy">
                Master Tailor On-Site
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 30 years of artisan tailoring experience for formal suits, bridal gowns, hemming, zipper replacement, and bespoke fittings.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-village-navy">
                Doorstep Pickup & Return
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Serving Rice Village, West U, Southampton, and Texas Medical Center with reliable weekly doorstep pickup routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SERVICES OVERVIEW */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-village-navy text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
                <Layers className="w-3.5 h-3.5 text-village-blue" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-village-navy tracking-tight">
                Full-Service Fabric Solutions
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-xl">
                From delicate evening gowns to bulky comforters and everyday wash & fold, we have you covered.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3.5 rounded-2xl bg-village-navy hover:bg-village-navyLight text-white font-bold text-sm transition flex items-center gap-2 self-start md:self-auto shadow-sm"
            >
              <span>Explore All Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-clean hover:shadow-card transition flex flex-col justify-between">
              <div>
                <img
                  src="/images/dry_cleaning.jpg"
                  alt="Dry Cleaning"
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="text-xs font-bold text-village-blue uppercase tracking-wider">From $7.50 / item</div>
                  <h3 className="font-display font-bold text-2xl text-village-navy mt-1">Boutique Eco Dry Cleaning</h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    Hand-inspected, gently treated with hypoallergenic biodegradable solvents, and pressed with artisan steam shapers.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
                >
                  View Details →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-clean hover:shadow-card transition flex flex-col justify-between">
              <div>
                <img
                  src="/images/wash_and_fold.jpg"
                  alt="Wash and Fold"
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="text-xs font-bold text-village-blue uppercase tracking-wider">$1.85 / lb (10 lb min)</div>
                  <h3 className="font-display font-bold text-2xl text-village-navy mt-1">Wash & Fold Laundry</h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    Whites and darks separated, washed with gentle formulas, tumble-dried on low heat, and folded ready for your dresser.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
                >
                  View Details →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-clean hover:shadow-card transition flex flex-col justify-between">
              <div>
                <img
                  src="/images/tailoring.jpg"
                  alt="Tailoring"
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="text-xs font-bold text-village-blue uppercase tracking-wider">From $15.00</div>
                  <h3 className="font-display font-bold text-2xl text-village-navy mt-1">Master Tailoring & Alterations</h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    Custom hems, sleeve adjustments, waist tapering, and zipper replacements by our in-house master tailor with 30+ years experience.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MONTHLY SUBSCRIPTION PLANS (NEW CORE FEATURE) */}
      <SubscriptionPlans onSelectPlan={onSelectPlan} />

      {/* 5. GOOGLE REVIEWS SECTION */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>4.5 Stars • 140+ Reviews</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-village-navy tracking-tight">
              Verified Feedback from Rice Village
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Hear what our local neighbors have to say about our fabric care and turnaround reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-village-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Village Cleaners has been my go-to cleaner in Rice Village for over 4 years. They handled my tailored designer blouses with such care and removed a stubborn red wine stain without fading the silk."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-bold text-village-navy">Katherine M.</span> • West University
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-village-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Working long shifts at the Med Center gives me zero time for laundry. Their Wash & Fold service is an absolute lifesaver. Everything comes back folded so sharply and smelling fresh."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-bold text-village-navy">David L., MD</span> • Texas Medical Center
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-clean flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-village-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Had three bespoke suits altered and pressed here before a wedding. The tailor is a true artist—the sleeve length and waist suppression were pinpoint perfection."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-bold text-village-navy">Julian Thorne</span> • Southampton
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('reviews')}
              className="px-7 py-3.5 rounded-2xl border-2 border-slate-200 text-village-navy font-bold text-sm hover:bg-slate-100 transition"
            >
              Read All Verified Google Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-village-navy text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-village-sky border border-white/20 uppercase tracking-wider">
                Doorstep Pickup & Delivery
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
                Ready for Fresh, Pristine Laundry?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Book your pickup in under 60 seconds. Our driver collects your clothes and returns them fresh, pressed, and folded.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={onOpenPickup}
                className="px-8 py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-bold text-sm shadow-sm transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Pickup Now</span>
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-village-navy font-bold text-sm transition"
              >
                Calculate Price
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
