import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export type PageId = 'home' | 'services' | 'pricing' | 'stain-lab' | 'reviews' | 'location';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPickup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenPickup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ id: PageId; label: string; badge?: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing Estimator' },
    { id: 'stain-lab', label: 'Stain Lab', badge: 'Results' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Hours & Location' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Trust Bar */}
      <div className="bg-village-navy text-slate-200 text-xs py-2 px-4 sm:px-6 border-b border-village-navyLight/70">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Address & Status Pill */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => handleLinkClick('location')}
              className="flex items-center gap-1.5 hover:text-white transition text-slate-300 font-semibold text-left"
            >
              <MapPin className="w-3.5 h-3.5 text-village-sky shrink-0" />
              <span>2366 Rice Blvd, Suite D, Houston, TX 77005 (Rice Village)</span>
            </button>

            <div className="hidden md:flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-0.5 rounded-full border border-slate-700">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-semibold text-white text-[11px]">{statusText}</span>
            </div>
          </div>

          {/* Contact & Google Rating badge */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 text-village-gold font-bold">
              <span>★ 4.5</span>
              <span className="text-slate-300 font-medium">(140+ Google Reviews)</span>
            </div>
            <a
              href="tel:7132778770"
              className="flex items-center gap-1.5 text-white font-extrabold hover:text-village-sky transition"
            >
              <Phone className="w-3.5 h-3.5 text-village-sky" />
              <span>(713) 277-8770</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-clean border-b-2 border-slate-200'
            : 'bg-white border-b-2 border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-village-navy via-village-navy to-village-blue flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-village-sky" />
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-2xl text-slate-950 tracking-tight leading-none flex items-center gap-1.5">
                VILLAGE <span className="text-village-blue">CLEANERS</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-slate-600 mt-0.5">
                Rice Village • Houston, TX
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-extrabold text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-village-navy text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-black uppercase ${
                      isActive ? 'bg-sky-400 text-village-navy' : 'bg-sky-100 text-village-blue'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:7132778770"
              className="px-3.5 py-2 text-xs font-black text-slate-800 hover:text-village-blue transition hidden md:block"
            >
              Call Us
            </a>
            <button
              onClick={onOpenPickup}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-village-blue hover:bg-village-blueHover text-white text-xs sm:text-sm font-extrabold shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Pickup</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t-2 border-slate-200 space-y-1.5 animate-in fade-in duration-200">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center justify-between ${
                    isActive
                      ? 'bg-village-navy text-white'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-village-blue">
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
                className="w-full py-3 rounded-xl bg-village-blue text-white text-center font-extrabold text-sm shadow-md"
              >
                Schedule Pickup / Delivery
              </button>
              <a
                href="tel:7132778770"
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-900 text-center font-extrabold text-sm bg-white"
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
