import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Sparkles } from 'lucide-react';

export type PageId = 'home' | 'services' | 'pricing' | 'plans' | 'reviews' | 'location';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPickup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenPickup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [statusText, setStatusText] = useState('Open Today until 5:00 PM');

  // Calculate live store open/close status in Houston (Central Time)
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
        setStatusText('Closed Today • Opens Mon 8:00 AM');
      } else if (day >= 1 && day <= 4) {
        if ((timeDecimal >= 8 && timeDecimal < 13) || (timeDecimal >= 14 && timeDecimal < 17)) {
          setIsOpenNow(true);
          setStatusText(timeDecimal < 13 ? 'Open until 1:00 PM' : 'Open until 5:00 PM');
        } else if (timeDecimal >= 13 && timeDecimal < 14) {
          setIsOpenNow(false);
          setStatusText('Lunch Break • Reopens 2:00 PM');
        } else {
          setIsOpenNow(false);
          setStatusText('Closed Now • Opens 8:00 AM');
        }
      } else if (day === 5) {
        if ((timeDecimal >= 8 && timeDecimal < 13) || (timeDecimal >= 14 && timeDecimal < 16)) {
          setIsOpenNow(true);
          setStatusText(timeDecimal < 13 ? 'Open until 1:00 PM' : 'Open until 4:00 PM');
        } else {
          setIsOpenNow(false);
          setStatusText('Closed Now • Opens Sat 8:00 AM');
        }
      } else if (day === 6) {
        if (timeDecimal >= 8 && timeDecimal < 14) {
          setIsOpenNow(true);
          setStatusText('Open until 2:00 PM');
        } else {
          setIsOpenNow(false);
          setStatusText('Closed Now • Opens Mon 8:00 AM');
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks: Array<{ id: PageId; label: string; badge?: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing Estimator' },
    { id: 'plans', label: 'Monthly Plans', badge: 'Save' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Hours & Location' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      {/* Top Status Bar */}
      <div className="bg-village-navy text-slate-300 text-xs py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Address & Status Pill */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => handleLinkClick('location')}
              className="flex items-center gap-1.5 hover:text-white transition text-slate-300 font-medium text-left"
            >
              <MapPin className="w-3.5 h-3.5 text-village-sky shrink-0" />
              <span>2366 Rice Blvd, Suite D, Houston, TX 77005 (Rice Village)</span>
            </button>

            <div className="hidden md:flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className="font-semibold text-white text-[11px]">{statusText}</span>
            </div>
          </div>

          {/* Phone & Rating */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-1 text-village-gold font-bold">
              <span>★ 4.5</span>
              <span className="text-slate-300 font-normal">(140+ Google Reviews)</span>
            </div>
            <a
              href="tel:7132778770"
              className="flex items-center gap-1.5 text-white font-bold hover:text-village-sky transition"
            >
              <Phone className="w-3.5 h-3.5 text-village-sky" />
              <span>(713) 277-8770</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-village-navy flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-5 h-5 text-village-sky" />
            </div>
            <div>
              <div className="font-bold text-xl text-village-navy tracking-tight leading-none">
                VILLAGE <span className="text-village-blue">CLEANERS</span>
              </div>
              <div className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 mt-1">
                Rice Village • Houston
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-100 text-village-navy font-bold'
                      : 'hover:text-village-navy hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold uppercase bg-emerald-100 text-emerald-800">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:7132778770"
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-village-navy transition hidden md:block"
            >
              Call Us
            </a>
            <button
              onClick={onOpenPickup}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-village-blue hover:bg-village-blueHover text-white text-xs sm:text-sm font-bold shadow-sm transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Pickup</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-100 text-village-navy font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPickup();
                }}
                className="w-full py-3 rounded-xl bg-village-blue text-white text-center font-bold text-sm shadow-sm"
              >
                Schedule Pickup / Delivery
              </button>
              <a
                href="tel:7132778770"
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 text-center font-bold text-sm bg-white"
              >
                Call (713) 277-8770
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
