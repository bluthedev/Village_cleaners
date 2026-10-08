import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { PickupModal } from './components/PickupModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { StainLabPage } from './pages/StainLabPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { LocationPage } from './pages/LocationPage';
import { Phone, Calendar } from 'lucide-react';

export const App: React.FC = () => {
  // Read initial page from URL hash (e.g. #services -> 'services')
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = ['home', 'services', 'pricing', 'stain-lab', 'reviews', 'location'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage());
  const [isPickupOpen, setIsPickupOpen] = useState(false);
  const [estimateData, setEstimateData] = useState<{
    total: number;
    itemCount: number;
    details: string;
    readyDate: string;
  } | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'services', 'pricing', 'stain-lab', 'reviews', 'location'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPickup = () => {
    setIsPickupOpen(true);
  };

  const handleClosePickup = () => {
    setIsPickupOpen(false);
  };

  const handleBookWithEstimate = (estimate: {
    total: number;
    itemCount: number;
    details: string;
    readyDate: string;
  }) => {
    setEstimateData(estimate);
    setIsPickupOpen(true);
  };

  // Render current active page
  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onOpenPickup={handleOpenPickup} onNavigate={navigateToPage} />;
      case 'pricing':
        return <PricingPage onBookWithEstimate={handleBookWithEstimate} onOpenPickup={handleOpenPickup} />;
      case 'stain-lab':
        return <StainLabPage onOpenPickup={handleOpenPickup} />;
      case 'reviews':
        return <ReviewsPage onOpenPickup={handleOpenPickup} />;
      case 'location':
        return <LocationPage onOpenPickup={handleOpenPickup} />;
      case 'home':
      default:
        return <HomePage onOpenPickup={handleOpenPickup} onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Header & Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onOpenPickup={handleOpenPickup}
      />

      {/* Dynamic Active Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Footer with Page Links */}
      <Footer onNavigate={navigateToPage} onOpenPickup={handleOpenPickup} />

      {/* Floating Action Pill for Direct Call & Booking */}
      <aside aria-label="Quick Booking" className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <a
          href="tel:7132778770"
          className="w-12 h-12 rounded-full bg-white text-village-navy border-2 border-slate-200 shadow-xl flex items-center justify-center hover:bg-slate-50 transition transform hover:scale-105 sm:hidden"
          title="Call Village Cleaners"
        >
          <Phone className="w-5 h-5 text-village-blue" />
        </a>

        <button
          onClick={handleOpenPickup}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-village-blue hover:bg-village-blueHover text-white text-xs sm:text-sm font-extrabold shadow-glow hover:shadow-xl transition-all transform hover:-translate-y-0.5"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Pickup</span>
        </button>
      </aside>

      {/* Universal Pickup & Delivery Modal */}
      <PickupModal
        isOpen={isPickupOpen}
        onClose={handleClosePickup}
        initialEstimate={estimateData}
      />
    </div>
  );
};

export default App;
