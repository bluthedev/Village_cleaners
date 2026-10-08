import React from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Calendar,
  Phone,
  Shield,
  Layers,
  Check,
  ChevronRight,
  Truck,
  ArrowRight
} from 'lucide-react';

import { PageId } from '../components/Navbar';

interface ServicesPageProps {
  onOpenPickup: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenPickup, onNavigate }) => {
  return (
    <div className="space-y-0 bg-slate-50">
      {/* ========================================================================= */}
      {/* 1. SERVICES PAGE HERO                                                    */}
      {/* ========================================================================= */}
      <section className="bg-village-navy text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-village-blue/20 text-village-sky border border-village-blue/40 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Full Service Menu</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Boutique Fabric Care, Wash & Fold, and Master Alterations
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Every garment receives individualized attention at our Rice Village boutique. We combine non-toxic eco fluids, hand stain removal, and professional steam finishing.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenPickup}
                className="px-6 py-3.5 rounded-xl bg-village-blue hover:bg-village-blueHover text-white font-extrabold text-sm shadow-md transition flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Pickup & Delivery</span>
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm border border-slate-700 transition"
              >
                View Price Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HOW OUR 4-STEP CARE PROCESS WORKS                                     */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
              The 4-Step Village Cleaners Standard
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              From the moment your garments enter our shop to final inspection, here is how we ensure perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-village-navy text-village-sky font-black flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-2">Triage & Hand Spotting</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Garments are inspected under daylight lamps. Stains are pre-treated by hand with fabric-specific enzymes before cleaning.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-village-navy text-village-sky font-black flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-2">Gentle Eco Cleaning</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Processed in our state-of-the-art closed-loop machines with non-toxic solvents that protect delicate fibers and colors.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-village-navy text-village-sky font-black flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-2">Artisanal Hand Press</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Shirts, jackets, and trousers are pressed by hand with tension steaming for razor-sharp creases and smooth collars.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-village-navy text-village-sky font-black flex items-center justify-center text-lg mb-4">
                4
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-2">Quality Audit & Bagging</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Buttons tightened, lint checked, and placed in breathable protective covers with velvet-padded or wooden hangers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DETAILED SERVICE CATALOG                                              */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((svc: ServiceItem, idx: number) => (
            <div
              key={svc.id}
              className={`rounded-3xl border-2 border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm flex flex-col ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-96 shrink-0 bg-slate-100">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-extrabold text-village-navy shadow-sm">
                  {svc.badge}
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-village-sky" />
                  <span>Turnaround: {svc.turnaround}</span>
                </div>
              </div>

              {/* Text Information Side */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-village-blue">
                    {svc.basePrice}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 mt-1">
                    {svc.title}
                  </h3>
                  <div className="text-sm font-semibold text-slate-500 mt-1">
                    {svc.subtitle}
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {svc.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="text-xs font-black text-slate-900 uppercase tracking-wider">Service Highlights:</div>
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={onOpenPickup}
                    className="px-6 py-3 rounded-xl bg-village-blue hover:bg-village-blueHover text-white font-extrabold text-xs sm:text-sm shadow-md transition"
                  >
                    Schedule This Service
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-50 transition"
                  >
                    Calculate Cost
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Pickup & Delivery Feature Card */}
          <div className="rounded-3xl border-2 border-slate-200 bg-gradient-to-r from-sky-50 to-blue-50 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-village-blue text-xs font-extrabold shadow-sm">
                <Truck className="w-4 h-4" />
                Houston Neighborhood Pickup
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
                Door-to-Door Pickup & Delivery Service
              </h3>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                We provide scheduled pickup and delivery throughout Rice Village, West University Place, Southampton, Southgate, Boulevard Oaks, and the Texas Medical Center.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700">77005</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700">77030</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700">77098</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700">77006</span>
              </div>
            </div>

            <button
              onClick={onOpenPickup}
              className="px-8 py-4 rounded-2xl bg-village-navy hover:bg-village-navyLight text-white font-extrabold text-sm shadow-md transition shrink-0"
            >
              Request Doorstep Pickup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
