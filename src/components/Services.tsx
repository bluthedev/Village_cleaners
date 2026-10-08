import React from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenPickup: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenPickup }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-village-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-village-blue" />
            Full-Spectrum Garment Care
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Rice Village Services
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            From bespoke silk dry cleaning to high-efficiency Dexter commercial self-service wash, we treat every garment with meticulous care.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc: ServiceItem, index: number) => (
            <div
              key={svc.id}
              className={`rounded-3xl border border-slate-200/90 overflow-hidden bg-white shadow-clean hover:shadow-machine transition-all duration-300 flex flex-col group ${
                index === 0 ? 'ring-2 ring-village-blue/40' : ''
              }`}
            >
              {/* Image Container with Badge */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Service Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-village-navy shadow-sm">
                  {svc.badge}
                </div>

                {/* Turnaround Pill */}
                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-village-sky" />
                  <span>{svc.turnaround}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-village-blue">
                    {svc.basePrice}
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mt-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {svc.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {svc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-village-blue shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenPickup}
                    className="w-full py-3 rounded-xl bg-slate-50 hover:bg-village-navy text-slate-800 hover:text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 group-hover:bg-village-navy group-hover:text-white"
                  >
                    <span>Schedule {svc.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-village-sky" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
