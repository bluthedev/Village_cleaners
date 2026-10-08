import React from 'react';
import { reviewsData } from '../data/reviewsData';
import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Verified Local Feedback
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Loved by Rice Village & West U Neighbors
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-xl">
              See why our local community trusts Village Cleaners with their designer wardrobe, everyday laundry, and formal suits.
            </p>
          </div>

          {/* Google Rating Hero Card */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm shrink-0">
            <div className="text-center pr-4 border-r border-slate-200">
              <div className="font-display font-black text-3xl text-slate-900">4.5</div>
              <div className="flex items-center justify-center gap-0.5 text-village-gold mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-village-gold text-village-gold" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <span>Google Reviews</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs text-slate-500 mt-0.5">Based on 140+ verified local ratings</div>
              <a
                href="https://www.google.com/maps/place/Village+Cleaners/@29.7178287,-95.4168997,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c0675cc139b1:0x7c9e9b2bf8933735!8m2!3d29.7178241!4d-95.4143248"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-village-blue hover:underline mt-1"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:shadow-clean transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-village-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-village-blue">
                    {rev.tag}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-slate-700 text-sm leading-relaxed italic relative">
                  "{rev.review}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">{rev.author}</h4>
                  <p className="text-[11px] text-slate-500">{rev.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold text-slate-400">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
