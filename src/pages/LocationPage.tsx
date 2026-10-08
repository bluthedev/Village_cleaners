import React, { useState, useEffect } from 'react';
import { LocationHours } from '../components/LocationHours';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Car,
  Smartphone,
  Wifi,
  CheckCircle2,
  ExternalLink,
  Calendar
} from 'lucide-react';

interface LocationPageProps {
  onOpenPickup: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenPickup }) => {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [statusText, setStatusText] = useState('Open Today until 5:00 PM');

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const houstonTimeStr = now.toLocaleString("en-US", { timeZone: "America/Chicago" });
      const houstonDate = new Date(houstonTimeStr);
      const day = houstonDate.getDay();
      const hour = houstonDate.getHours();
      const min = houstonDate.getMinutes();
      const timeDecimal = hour + min / 60;

      if (day === 0) {
        setIsOpenNow(false);
        setStatusText('Closed Today (Sunday) • Opens Monday 8:00 AM');
      } else if (day >= 1 && day <= 4) {
        if ((timeDecimal >= 8 && timeDecimal < 13) || (timeDecimal >= 14 && timeDecimal < 17)) {
          setIsOpenNow(true);
          setStatusText(timeDecimal < 13 ? 'Open Now until 1:00 PM (Reopens 2:00 PM)' : 'Open Now until 5:00 PM');
        } else if (timeDecimal >= 13 && timeDecimal < 14) {
          setIsOpenNow(false);
          setStatusText('Mid-Day Lunch Break • Reopens 2:00 PM');
        } else {
          setIsOpenNow(false);
          setStatusText('Closed for the Day • Opens Tomorrow 8:00 AM');
        }
      } else if (day === 5) {
        if ((timeDecimal >= 8 && timeDecimal < 13) || (timeDecimal >= 14 && timeDecimal < 16)) {
          setIsOpenNow(true);
          setStatusText(timeDecimal < 13 ? 'Open Now until 1:00 PM' : 'Open Now until 4:00 PM');
        } else {
          setIsOpenNow(false);
          setStatusText('Closed for the Day • Opens Saturday 8:00 AM');
        }
      } else if (day === 6) {
        if (timeDecimal >= 8 && timeDecimal < 14) {
          setIsOpenNow(true);
          setStatusText('Open Now until 2:00 PM');
        } else {
          setIsOpenNow(false);
          setStatusText('Closed for the Weekend • Opens Monday 8:00 AM');
        }
      }
    };

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-0 bg-slate-50">
      {/* 1. Location Header */}
      <section className="bg-village-navy text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-village-blue/20 text-village-sky border border-village-blue/40 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Rice Village Storefront</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Visit Us at 2366 Rice Boulevard
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Conveniently located in Rice Village shopping center with dedicated parking right in front of our entrance.
            </p>

            {/* Live Clock Badge */}
            <div className="pt-2 flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
              <span className="font-bold text-white text-sm bg-slate-800/90 px-3.5 py-1.5 rounded-xl border border-slate-700">
                {statusText}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Embedded Location and Map Module */}
      <LocationHours />

      {/* 3. Detailed Driving & Parking Guide */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
              Parking & Directions Guide
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Easy access from Kirby Drive, University Boulevard, and Greenbriar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-village-blue flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">Front Angle Parking</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Dedicated 20-minute drop-off and pickup parking stalls are situated directly on Rice Blvd in front of Suite D. Perfect for quick morning drop-offs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-village-navy flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">Dexter Pay App Integration</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Using our smart laundromat? Download Dexter Pay on iOS or Android to start washers directly from your smartphone, monitor remaining cycle time, and earn wash credits.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">Air-Conditioned Lounge</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Enjoy complimentary high-speed Wi-Fi, television, seating, and clean restrooms with an attendant always on duty to answer any garment care questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Pickup CTA */}
      <section className="py-14 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-display font-extrabold text-2xl text-slate-950">
            Can’t Make It In Person?
          </h3>
          <p className="text-sm text-slate-700 max-w-lg mx-auto">
            Let us do the driving! Book a scheduled pickup and our driver will collect your laundry directly from your doorstep in West U or Rice Village.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenPickup}
              className="px-8 py-3.5 rounded-2xl bg-village-blue hover:bg-village-blueHover text-white font-extrabold text-sm shadow-md transition inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Doorstep Pickup</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
