import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, Check, ShieldCheck } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Proven Fabric Restoration
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            See the Village Cleaners Difference
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Drag the slider to see how our proprietary eco-clean solvents lift stubborn red wine, grease, and coffee stains from luxury wool and silk without color bleed.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-machine border border-slate-200 select-none bg-slate-900">
          <div
            ref={containerRef}
            className="relative h-80 sm:h-[420px] w-full cursor-ew-resize overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* "After" Clean Layer (Full Width background) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-sky-50 via-slate-100 to-white flex items-center justify-center p-8">
              {/* Photorealistic Garment Representation */}
              <div className="relative w-full max-w-md h-full flex flex-col items-center justify-center text-center">
                {/* Clean Shirt Mockup */}
                <div className="w-56 h-72 rounded-2xl bg-white shadow-xl border border-sky-100 flex flex-col items-center justify-center p-6 relative">
                  <div className="w-16 h-8 rounded-b-xl border-b-2 border-slate-200 mb-6 bg-slate-50 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-slate-400">VILLAGE FIT</span>
                  </div>
                  <div className="w-1 h-32 bg-slate-100 rounded-full flex flex-col justify-between py-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300 -ml-0.5" />
                    <span className="w-2 h-2 rounded-full bg-slate-300 -ml-0.5" />
                    <span className="w-2 h-2 rounded-full bg-slate-300 -ml-0.5" />
                    <span className="w-2 h-2 rounded-full bg-slate-300 -ml-0.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    Spotless & Steamed
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-extrabold shadow-md flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  AFTER VILLAGE ECO-CLEAN
                </div>
              </div>
            </div>

            {/* "Before" Stained Layer (Clipped dynamically by slider position) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[672px] sm:w-[768px] h-full bg-gradient-to-tr from-amber-50 via-stone-200 to-amber-100 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md h-full flex flex-col items-center justify-center text-center">
                  {/* Stained Shirt Mockup */}
                  <div className="w-56 h-72 rounded-2xl bg-stone-100 shadow-xl border border-stone-300 flex flex-col items-center justify-center p-6 relative">
                    <div className="w-16 h-8 rounded-b-xl border-b-2 border-stone-300 mb-6 bg-stone-200 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-stone-500">SOILED</span>
                    </div>

                    {/* Wine Stain Simulation */}
                    <div className="absolute top-28 left-20 w-16 h-14 bg-red-900/60 rounded-full blur-[2px] transform rotate-12" />
                    <div className="absolute top-36 left-24 w-8 h-8 bg-amber-900/50 rounded-full blur-[1px]" />

                    <div className="w-1 h-32 bg-stone-300 rounded-full flex flex-col justify-between py-2">
                      <span className="w-2 h-2 rounded-full bg-stone-400 -ml-0.5" />
                      <span className="w-2 h-2 rounded-full bg-stone-400 -ml-0.5" />
                      <span className="w-2 h-2 rounded-full bg-stone-400 -ml-0.5" />
                      <span className="w-2 h-2 rounded-full bg-stone-400 -ml-0.5" />
                    </div>

                    <div className="mt-4 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold border border-red-200">
                      Red Wine & Coffee Stains
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-extrabold shadow-md">
                    BEFORE (STAINED)
                  </div>
                </div>
              </div>
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 -ml-0.5 rounded-full bg-village-navy border-2 border-white shadow-lg flex items-center justify-center text-white">
                <MoveHorizontal className="w-5 h-5 text-village-sky" />
              </div>
            </div>
          </div>

          {/* Bottom helper text */}
          <div className="bg-village-navy py-3 px-6 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-4 h-4 text-village-sky" />
              Drag slider left or right to compare
            </span>
            <span className="font-semibold text-white">100% Color-Safe Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};
