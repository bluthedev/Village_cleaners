import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';

export interface WallpaperSlide {
  id: string;
  src: string;
  alt: string;
  title: string;
  badge: string;
}

interface HeroProps {
  businessName: string;
  neighborhood: string;
  address: string;
  slides: WallpaperSlide[];
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
  onTertiaryCta: () => void;
}

export const HeroWallpaper: React.FC<HeroProps> = ({
  businessName,
  neighborhood,
  address,
  slides,
  onPrimaryCta,
  onSecondaryCta,
  onTertiaryCta
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll left at 5-second timed intervals
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
      {/* 1. BACKGROUND LIVE WALLPAPER: 3 REAL IMAGES SCROLLING LEFT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full relative shrink-0">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* High-Clarity Scrim: 75%+ of the raw photography on the right is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/25" />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-bold text-white shadow-md backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span className="text-sky-300 font-extrabold">{neighborhood}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-200">{address}</span>
            </div>

            {/* Solid White Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] drop-shadow-sm">
              Boutique Garment Care & Smart Laundry in {neighborhood}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience non-toxic eco cleaning, crisp wash & fold, and artisan care with same-day turnaround.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onPrimaryCta}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-950/40 transition-all flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Doorstep Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onSecondaryCta}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base shadow-md transition"
              >
                Price Calculator
              </button>

              <button
                onClick={onTertiaryCta}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-sm sm:text-base border border-slate-700 backdrop-blur-sm transition"
              >
                Monthly Plans
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 max-w-xl mx-auto lg:mx-0 bg-slate-950/60 backdrop-blur-md p-4 rounded-2xl border border-slate-800/70">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400 font-extrabold text-base sm:text-lg">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.5 / 5.0</span>
                </div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">140+ Google Reviews</div>
              </div>
              <div className="text-center lg:text-left border-x border-slate-800 px-3">
                <div className="font-display font-bold text-white text-base sm:text-lg">Same-Day</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">Drop by 9:00 AM</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display font-bold text-emerald-400 text-base sm:text-lg">100% Eco</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">Non-Toxic Solvents</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. WALLPAPER CAROUSEL CONTROLS BAR */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800 bg-slate-950/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-bold text-white">
              Live Showcase: {slides[currentSlide]?.title}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
              {slides[currentSlide]?.badge}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Slide Dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-6 bg-sky-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 border-l border-slate-700 pl-3">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition"
                aria-label="Toggle Play/Pause"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
