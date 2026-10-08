import React, { useState } from 'react';
import { reviewsData, ReviewItem } from '../data/reviewsData';
import { Star, ShieldCheck, ExternalLink, ThumbsUp, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ReviewsPageProps {
  onOpenPickup: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenPickup }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Stain Removal & Delicates', 'Wash & Fold Laundry', 'Suit Alterations', 'Modern Equipment', 'Dress Shirts & Press'];

  const filteredReviews = selectedTag === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.tag === selectedTag);

  return (
    <div className="space-y-0 bg-slate-50">
      {/* 1. Reviews Hero */}
      <section className="bg-village-navy text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                Customer Verified Feedback
              </div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                What Rice Village Says About Village Cleaners
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Serving generations of West University, Southampton, and Houston Medical Center residents with honest service, fast turnarounds, and spotless results.
              </p>
            </div>

            {/* Overall Rating Box */}
            <div className="lg:col-span-5 bg-slate-800/90 border-2 border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div>
                  <div className="font-display font-black text-4xl text-white">4.5 / 5.0</div>
                  <div className="flex items-center gap-1 text-village-gold mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-village-gold text-village-gold" />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold uppercase text-slate-400">Total Reviews</div>
                  <div className="font-display font-extrabold text-xl text-white">140+ Ratings</div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-12 text-slate-400 font-semibold">5 Stars</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div className="h-full bg-village-gold rounded-full w-[88%]" />
                  </div>
                  <span className="w-8 text-right font-bold text-slate-300">88%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-12 text-slate-400 font-semibold">4 Stars</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div className="h-full bg-village-gold rounded-full w-[10%]" />
                  </div>
                  <span className="w-8 text-right font-bold text-slate-300">10%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-12 text-slate-400 font-semibold">3 Stars</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full w-[2%]" />
                  </div>
                  <span className="w-8 text-right font-bold text-slate-300">2%</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/Village+Cleaners/@29.7178287,-95.4168997,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c0675cc139b1:0x7c9e9b2bf8933735!8m2!3d29.7178241!4d-95.4143248"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-village-blue hover:bg-village-blueHover text-white text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Review Tag Filter & List */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tag Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            <span className="text-xs font-black uppercase text-slate-500 mr-2">Filter by Service:</span>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedTag === t
                    ? 'bg-village-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 shadow-sm transition flex flex-col justify-between"
              >
                <div className="space-y-4">
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

                  <p className="text-slate-800 text-sm leading-relaxed italic">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-display font-bold text-slate-950 flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">{rev.location}</div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-semibold">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-100 border-2 border-slate-200 text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="font-display font-extrabold text-2xl text-slate-950">
              Ready to Experience Rice Village Care?
            </h3>
            <p className="text-sm text-slate-700">
              Schedule your first pickup or drop by 2366 Rice Blvd today.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenPickup}
                className="px-8 py-3.5 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-extrabold text-sm shadow-md transition"
              >
                Book Pickup & Delivery
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
