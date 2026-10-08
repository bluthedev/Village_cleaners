import React, { useState, useMemo } from 'react';
import { pricingCatalog, PricingItem } from '../data/servicesData';
import { Calculator, Plus, Minus, RotateCcw, Clock, Sparkles, Check, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartItem {
  item: PricingItem;
  quantity: number;
}

interface PriceEstimatorProps {
  onBookWithEstimate: (estimateSummary: { total: number; itemCount: number; details: string; readyDate: string }) => void;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({ onBookWithEstimate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'dry-clean' | 'wash-fold' | 'household' | 'alterations'>('all');
  const [cart, setCart] = useState<{ [id: string]: number }>({
    'shirt-laundered': 3,
    'pants-trousers': 2,
    'suit-2pc': 1,
  });

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return pricingCatalog;
    return pricingCatalog.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const resetCart = () => {
    setCart({});
  };

  // Calculations
  const { totalCost, totalItems, maxTurnaroundHours, selectedList } = useMemo(() => {
    let cost = 0;
    let count = 0;
    let maxHours = 24;
    const list: Array<{ name: string; qty: number; price: number }> = [];

    Object.entries(cart).forEach(([id, qty]) => {
      if (qty > 0) {
        const found = pricingCatalog.find((item) => item.id === id);
        if (found) {
          cost += found.price * qty;
          count += qty;
          if (found.turnaroundHours > maxHours) {
            maxHours = found.turnaroundHours;
          }
          list.push({ name: found.name, qty, price: found.price * qty });
        }
      }
    });

    return { totalCost: cost, totalItems: count, maxTurnaroundHours: maxHours, selectedList: list };
  }, [cart]);

  // Format estimated ready date based on turnaround
  const estimatedReadyDate = useMemo(() => {
    const ready = new Date();
    ready.setHours(ready.getHours() + maxTurnaroundHours);
    // If it falls on Sunday, push to Monday
    if (ready.getDay() === 0) {
      ready.setDate(ready.getDate() + 1);
    }
    return ready.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  }, [maxTurnaroundHours]);

  const handleBookNow = () => {
    const details = selectedList.map((i) => `${i.qty}x ${i.name}`).join(', ');
    onBookWithEstimate({
      total: totalCost,
      itemCount: totalItems,
      details: details || 'General Laundry Order',
      readyDate: estimatedReadyDate,
    });
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-village-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Instant Laundry & Dry Cleaning Estimator
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            No surprise fees. Select your garment pieces below to get an immediate estimated total and turnaround schedule.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'dry-clean', label: 'Dry Cleaning' },
            { id: 'wash-fold', label: 'Wash & Fold' },
            { id: 'household', label: 'Comforters & Linens' },
            { id: 'alterations', label: 'Tailoring & Alterations' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-village-navy text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Garment Catalog Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const qty = cart[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    qty > 0
                      ? 'bg-white border-village-blue shadow-md ring-1 ring-village-blue/30'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-slate-900 text-sm">{item.name}</h4>
                        {item.popular && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>Ready in ~{item.turnaroundHours}h</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-display font-extrabold text-village-navy text-base">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="text-[10px] text-slate-400">{item.unit}</div>
                    </div>
                  </div>

                  {/* Counter Controls */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500">
                      {qty > 0 ? (
                        <span className="text-village-blue font-bold">{qty} in basket</span>
                      ) : (
                        'Add to estimate'
                      )}
                    </span>

                    <div className="flex items-center gap-2">
                      {qty > 0 && (
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className={`h-8 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs font-bold transition shadow-sm ${
                          qty > 0
                            ? 'bg-village-blue hover:bg-village-blueHover text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{qty > 0 ? 'More' : 'Add'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Basket & Schedule Summary Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-machine p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-village-navy text-white flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-village-sky" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg">Estimated Order</h3>
                </div>

                {totalItems > 0 && (
                  <button
                    onClick={resetCart}
                    className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-red-500 transition"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

              {/* Items Selected Breakdown */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {selectedList.length === 0 ? (
                  <div className="py-8 text-center text-slate-400 text-xs space-y-2">
                    <Sparkles className="w-6 h-6 mx-auto text-slate-300" />
                    <p>No items added yet. Click items on the left to build your estimate.</p>
                  </div>
                ) : (
                  selectedList.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-[10px]">
                          {item.qty}
                        </span>
                        <span className="font-medium text-slate-700 truncate max-w-[170px]">{item.name}</span>
                      </div>
                      <span className="font-bold text-slate-900">${item.price.toFixed(2)}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Turnaround Prediction Box */}
              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-village-navy flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-village-blue" />
                    Estimated Ready Time:
                  </span>
                  <span className="font-extrabold text-village-blue">{estimatedReadyDate}</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Drop off before 10 AM for fast turnaround. We will send an SMS notification the moment your garments are bagged and ready.
                </p>
              </div>

              {/* Cost Summary Total */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Selected Pieces:</span>
                  <span className="font-bold text-slate-800">{totalItems} items</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Eco Cleaning & Inspection:</span>
                  <span className="font-bold text-emerald-600">Included Free</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="font-display font-bold text-slate-900 text-base">Estimated Total:</span>
                  <span className="font-display font-black text-2xl text-village-navy">
                    ${totalCost.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Conversion CTA */}
              <button
                onClick={handleBookNow}
                className="w-full py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-bold text-sm shadow-glow hover:shadow-lg transition flex items-center justify-center gap-2 group"
              >
                <span>Book Pickup with this Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center text-[11px] text-slate-400">
                Payment made at pickup or via contactless link • No upfront deposit needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
