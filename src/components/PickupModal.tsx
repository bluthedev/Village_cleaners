import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, MapPin, Phone, User, CheckCircle2, Sparkles, Clock, AlertCircle } from 'lucide-react';

interface PickupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEstimate?: {
    total: number;
    itemCount: number;
    details: string;
    readyDate: string;
  } | null;
}

export const PickupModal: React.FC<PickupModalProps> = ({ isOpen, onClose, initialEstimate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [serviceType, setServiceType] = useState('dry-clean-wash');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTimeSlot, setPickupTimeSlot] = useState('morning');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Default date to tomorrow
  useEffect(() => {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    if (tmr.getDay() === 0) {
      tmr.setDate(tmr.getDate() + 1); // Skip Sunday
    }
    const yyyy = tmr.getFullYear();
    const mm = String(tmr.getMonth() + 1).padStart(2, '0');
    const dd = String(tmr.getDate()).padStart(2, '0');
    setPickupDate(`${yyyy}-${mm}-${dd}`);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomOrder = 'VC-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrder);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0284C7', '#0F2744', '#38BDF8', '#F59E0B']
      });
    } catch {
      // Confetti fallback
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-machine border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-village-navy text-white flex items-center justify-center">
              <Calendar className="w-5 h-5 text-village-sky" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl">
                {isSubmitted ? 'Pickup Confirmed!' : 'Schedule Pickup & Delivery'}
              </h3>
              <p className="text-xs text-slate-500">
                Rice Village • West U • Southampton • Med Center
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-display font-extrabold text-2xl text-slate-900">
                  We'll Pick Up Your Clothes!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-800">{name || 'Neighbor'}</span>. We have logged your request. Our driver will arrive during your selected window at <span className="font-semibold text-slate-800">{address}</span>.
                </p>
              </div>

              {/* Order Confirmation Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 max-w-md mx-auto text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Confirmation Code:</span>
                  <span className="font-mono font-bold text-village-navy">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pickup Date:</span>
                  <span className="font-semibold text-slate-800">{pickupDate} ({pickupTimeSlot === 'morning' ? '8:00 AM – 11:00 AM' : '2:00 PM – 5:00 PM'})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-800">
                    {initialEstimate ? `Estimate: $${initialEstimate.total.toFixed(2)} (${initialEstimate.itemCount} items)` : 'Standard Laundry & Dry Clean'}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3.5 rounded-xl bg-village-navy hover:bg-village-navyLight text-white font-bold text-sm shadow-md transition"
                >
                  Done
                </button>
                <a
                  href="tel:7132778770"
                  className="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 transition"
                >
                  Call (713) 277-8770
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Optional Estimate Summary banner */}
              {initialEstimate && initialEstimate.total > 0 && (
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2 text-village-navy">
                    <Sparkles className="w-4 h-4 text-village-blue shrink-0" />
                    <span>
                      Estimated: <span className="font-bold">${initialEstimate.total.toFixed(2)}</span> ({initialEstimate.itemCount} pieces)
                    </span>
                  </div>
                  <span className="font-bold text-village-blue text-[11px] bg-white px-2.5 py-1 rounded-full border border-sky-100">
                    Est. Ready: {initialEstimate.readyDate.split(',')[0]}
                  </span>
                </div>
              )}

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-village-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (for SMS updates) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="(713) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-village-blue"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Houston Pickup Address (Street, Apt/Suite, Zip) *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2400 University Blvd, Apt 4B, Houston, TX 77005"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-village-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-village-blue bg-white"
                  >
                    <option value="dry-clean-wash">Dry Cleaning & Dress Shirts</option>
                    <option value="wash-and-fold">Wash, Dry & Fold Laundry</option>
                    <option value="tailoring">Master Alterations & Tailoring</option>
                    <option value="comforters">Comforters, Duvets & Linens</option>
                    <option value="mixed">Mixed Laundry & Dry Clean</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-village-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Pickup Time Window
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPickupTimeSlot('morning')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition ${
                      pickupTimeSlot === 'morning'
                        ? 'border-village-blue bg-sky-50 text-village-blue'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Morning (8 AM – 11 AM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPickupTimeSlot('afternoon')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition ${
                      pickupTimeSlot === 'afternoon'
                        ? 'border-village-blue bg-sky-50 text-village-blue'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Afternoon (2 PM – 5 PM)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Special Notes or Garment Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Leave bag on front porch, red wine spot on blue dress, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-village-blue"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-bold text-sm shadow-glow hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Pickup Schedule</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  No payment required until delivery • 100% Satisfaction Guaranteed
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
