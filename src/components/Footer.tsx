import React from 'react';
import { Sparkles, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPickup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPickup }) => {
  const handlePageClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-village-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-village-blue flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-5 h-5 text-village-sky" />
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight">
                  VILLAGE <span className="text-village-sky">CLEANERS</span>
                </span>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Rice Village • Houston, Texas
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Dedicated to boutique fabric care, non-toxic eco dry cleaning, crisp shirt pressing, and master alterations. Proudly serving the West University, Southampton, and Rice University communities since 1974.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenPickup}
                className="px-5 py-2.5 rounded-xl bg-village-blue hover:bg-village-blueHover text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Free Pickup</span>
              </button>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Garment Care</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-white transition text-left">
                  Eco Dry Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-white transition text-left">
                  Wash, Dry & Fold
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-white transition text-left">
                  Master Tailoring & Alterations
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-white transition text-left">
                  Duvets & Bulky Linens
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-white transition text-left">
                  Dexter Smart Laundromat
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handlePageClick('home')} className="hover:text-white transition text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-white transition text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('pricing')} className="hover:text-white transition text-left">
                  Price Estimator
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('plans')} className="hover:text-white transition text-left font-bold text-village-sky">
                  Monthly Subscription Plans
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('reviews')} className="hover:text-white transition text-left">
                  Customer Reviews (4.5★)
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('location')} className="hover:text-white transition text-left">
                  Store Hours & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Store Hours & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Store Visit</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-village-sky shrink-0 mt-0.5" />
                <button onClick={() => handlePageClick('location')} className="text-left hover:text-white transition">
                  2366 Rice Blvd, Suite D<br/>Houston, TX 77005
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-village-sky shrink-0" />
                <a href="tel:7132778770" className="hover:text-white font-bold transition">(713) 277-8770</a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                <Clock className="w-4 h-4 text-village-sky shrink-0 mt-0.5" />
                <span>
                  Mon–Thu: 8am–1pm, 2pm–5pm<br/>
                  Fri: 8am–1pm, 2pm–4pm<br/>
                  Sat: 8am–2pm • Sun: Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Village Cleaners Houston. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Serving</span>
            <span className="text-white font-bold">Rice Village & West University Place</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
