import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCw, Sparkles, Zap, ShieldCheck, Thermometer } from 'lucide-react';

interface WashingMachine2DProps {
  onEstimateClick?: () => void;
}

export const WashingMachine2D: React.FC<WashingMachine2DProps> = ({ onEstimateClick }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMode, setSpeedMode] = useState<'gentle' | 'normal' | 'turbo'>('normal');
  const [waterTemp, setWaterTemp] = useState<'cold' | 'warm' | 'sanitizing'>('cold');
  const [cycleTimeRemaining, setCycleTimeRemaining] = useState<number>(28);
  const [rpmDisplay, setRpmDisplay] = useState<number>(680);
  const [currentCycleName, setCurrentCycleName] = useState<string>('Eco Deep Clean');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  // Sync cycle parameters
  useEffect(() => {
    if (speedMode === 'gentle') {
      setRpmDisplay(350);
      setCurrentCycleName('Delicates & Silk Care');
    } else if (speedMode === 'normal') {
      setRpmDisplay(680);
      setCurrentCycleName('Eco Deep Clean & Press');
    } else {
      setRpmDisplay(1200);
      setCurrentCycleName('Turbo High-G Extract');
    }
  }, [speedMode]);

  // Timer countdown simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCycleTimeRemaining((prev) => (prev > 1 ? prev - 1 : 45));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // --- 2D Canvas Physics for Drum, Tumbling Clothes, Water & Suds ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let drumAngle = 0;
    let targetSpeed = 1.0;
    let currentSpeed = 1.0;

    // Clothes objects inside drum
    interface Cloth2D {
      color: string;
      accentColor: string;
      type: 'shirt' | 'towel' | 'sock' | 'denim';
      angle: number; // Angle on drum perimeter in radians
      radius: number; // Distance from center
      rotation: number; // In-place rotation
      scale: number;
      liftThreshold: number; // Point where lifter drops cloth (radians)
      isFalling: boolean;
      fallProgress: number;
    }

    const clothes: Cloth2D[] = [
      { color: '#1E3A8A', accentColor: '#3B82F6', type: 'denim', angle: 0.2, radius: 82, rotation: 0, scale: 1.1, liftThreshold: Math.PI * 0.72, isFalling: false, fallProgress: 0 },
      { color: '#EF4444', accentColor: '#F87171', type: 'shirt', angle: 1.2, radius: 78, rotation: 0.5, scale: 0.95, liftThreshold: Math.PI * 0.65, isFalling: false, fallProgress: 0 },
      { color: '#0284C7', accentColor: '#38BDF8', type: 'shirt', angle: 2.3, radius: 80, rotation: 1.2, scale: 1.0, liftThreshold: Math.PI * 0.75, isFalling: false, fallProgress: 0 },
      { color: '#F59E0B', accentColor: '#FCD34D', type: 'towel', angle: 3.4, radius: 85, rotation: 0.8, scale: 1.05, liftThreshold: Math.PI * 0.7, isFalling: false, fallProgress: 0 },
      { color: '#FFFFFF', accentColor: '#E2E8F0', type: 'shirt', angle: 4.5, radius: 76, rotation: 0.2, scale: 0.9, liftThreshold: Math.PI * 0.68, isFalling: false, fallProgress: 0 },
      { color: '#10B981', accentColor: '#6EE7B7', type: 'sock', angle: 5.6, radius: 84, rotation: 1.6, scale: 0.85, liftThreshold: Math.PI * 0.73, isFalling: false, fallProgress: 0 },
    ];

    // Bubbles inside
    interface Bubble {
      x: number;
      y: number;
      r: number;
      vy: number;
      phase: number;
    }
    const bubbles: Bubble[] = Array.from({ length: 22 }, () => ({
      x: (Math.random() - 0.5) * 140,
      y: 40 + Math.random() * 50,
      r: 2 + Math.random() * 4.5,
      vy: 0.4 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
    }));

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min(0.1, (time - lastTime) / 1000);
      lastTime = time;

      // Update speed smoothly
      if (isPlaying) {
        targetSpeed = speedMode === 'gentle' ? 0.6 : speedMode === 'normal' ? 1.1 : 2.5;
      } else {
        targetSpeed = 0;
      }
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;

      const rotSpeed = currentSpeed * 2.8 * dt;
      drumAngle = (drumAngle + rotSpeed) % (Math.PI * 2);

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // --- 1. Outer Chrome Bezel ---
      const outerRadius = 135;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, outerRadius, 0, Math.PI * 2);
      const bezelGrad = ctx.createLinearGradient(cx - outerRadius, cy - outerRadius, cx + outerRadius, cy + outerRadius);
      bezelGrad.addColorStop(0, '#FFFFFF');
      bezelGrad.addColorStop(0.25, '#CBD5E1');
      bezelGrad.addColorStop(0.5, '#94A3B8');
      bezelGrad.addColorStop(0.75, '#E2E8F0');
      bezelGrad.addColorStop(1, '#64748B');
      ctx.fillStyle = bezelGrad;
      ctx.fill();

      // Shadow rim
      ctx.beginPath();
      ctx.arc(cx, cy, outerRadius - 6, 0, Math.PI * 2);
      ctx.fillStyle = '#0F172A';
      ctx.fill();

      // --- 2. Perforated Stainless Steel Inner Drum Cavity ---
      const drumRadius = 118;
      ctx.beginPath();
      ctx.arc(cx, cy, drumRadius, 0, Math.PI * 2);
      const drumGrad = ctx.createRadialGradient(cx, cy - 20, 20, cx, cy, drumRadius);
      drumGrad.addColorStop(0, '#E2E8F0');
      drumGrad.addColorStop(0.7, '#94A3B8');
      drumGrad.addColorStop(1, '#475569');
      ctx.fillStyle = drumGrad;
      ctx.fill();
      ctx.clip(); // Keep drum content inside porthole

      // Drum Perforations (Holes) rotating with drumAngle
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(drumAngle);

      ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
      const holeRings = [45, 68, 92, 108];
      holeRings.forEach((r, rIdx) => {
        const count = 10 + rIdx * 6;
        for (let i = 0; i < count; i++) {
          const a = (i * Math.PI * 2) / count;
          const hx = Math.cos(a) * r;
          const hy = Math.sin(a) * r;
          ctx.beginPath();
          ctx.arc(hx, hy, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 3 Lifter Vanes (Baffles that scoop up clothes)
      for (let v = 0; v < 3; v++) {
        const va = (v * Math.PI * 2) / 3;
        ctx.save();
        ctx.rotate(va);
        ctx.fillStyle = '#64748B';
        ctx.fillRect(80, -7, 36, 14);
        ctx.fillStyle = '#94A3B8';
        ctx.fillRect(82, -5, 32, 10);
        ctx.restore();
      }
      ctx.restore();

      // --- 3. Dynamic Water Wave Layer at Bottom of Drum ---
      const waterLevelY = cy + 45;
      ctx.save();
      ctx.beginPath();
      const waveAmplitude = isPlaying ? (speedMode === 'turbo' ? 7 : 4) : 1;
      const waveFreq = 0.04;
      const waveShift = time * 0.005 * currentSpeed;

      ctx.moveTo(cx - drumRadius, cy + drumRadius);
      ctx.lineTo(cx - drumRadius, waterLevelY);

      for (let x = cx - drumRadius; x <= cx + drumRadius; x += 4) {
        const wy = waterLevelY + Math.sin((x - cx) * waveFreq + waveShift) * waveAmplitude;
        ctx.lineTo(x, wy);
      }
      ctx.lineTo(cx + drumRadius, cy + drumRadius);
      ctx.closePath();

      const waterGrad = ctx.createLinearGradient(cx, waterLevelY, cx, cy + drumRadius);
      waterGrad.addColorStop(0, 'rgba(56, 189, 248, 0.55)');
      waterGrad.addColorStop(1, 'rgba(2, 132, 199, 0.75)');
      ctx.fillStyle = waterGrad;
      ctx.fill();
      ctx.restore();

      // --- 4. 2D Tumbling Clothes Physics ---
      clothes.forEach((cloth) => {
        if (currentSpeed > 0.05) {
          if (speedMode === 'turbo' && currentSpeed > 1.8) {
            // Turbo centrifugal mode: clothes pin to the perimeter and spin fast
            cloth.angle = (cloth.angle + rotSpeed) % (Math.PI * 2);
            cloth.rotation += rotSpeed * 1.5;
            cloth.isFalling = false;
          } else {
            // Realistic 2D front-load tumble cycle:
            // The drum rotates counter-clockwise. Lifter paddles carry clothes up the right/top side.
            // When reaching the top quadrant (~50° to 110°), clothes peel off and tumble downward through center!
            cloth.angle = (cloth.angle + rotSpeed * 0.95) % (Math.PI * 2);

            const normalizedAngle = cloth.angle; // 0 to 2*PI
            // Apex drop zone: between 1.4 rad (~80°) and 2.6 rad (~150°)
            if (normalizedAngle > 1.4 && normalizedAngle < 2.6) {
              cloth.isFalling = true;
              cloth.fallProgress = (normalizedAngle - 1.4) / 1.2;
            } else {
              cloth.isFalling = false;
              cloth.fallProgress = 0;
            }

            cloth.rotation += (rotSpeed * 1.2 + (cloth.isFalling ? 0.08 : 0));
          }
        }

        // Calculate (X, Y)
        let clothX: number;
        let clothY: number;

        if (cloth.isFalling && speedMode !== 'turbo') {
          // Falling diagonally across center towards bottom-left
          const startX = Math.cos(1.4) * cloth.radius;
          const startY = -Math.sin(1.4) * cloth.radius;
          const endX = -30;
          const endY = 65;
          const p = cloth.fallProgress;
          clothX = cx + startX + (endX - startX) * p;
          clothY = cy + startY + (endY - startY) * (p * p * 1.2);
        } else {
          // Riding on drum perimeter
          clothX = cx + Math.cos(cloth.angle) * cloth.radius;
          clothY = cy - Math.sin(cloth.angle) * cloth.radius;
        }

        // Render individual stylized 2D garment
        ctx.save();
        ctx.translate(clothX, clothY);
        ctx.rotate(cloth.rotation);
        ctx.scale(cloth.scale, cloth.scale);

        // Garment shadow inside drum
        ctx.shadowColor = 'rgba(15, 23, 42, 0.4)';
        ctx.shadowBlur = 6;
        ctx.shadowOffsetY = 3;

        // Draw garment shape based on type
        if (cloth.type === 'shirt') {
          // Folded Oxford Shirt
          ctx.fillStyle = cloth.color;
          ctx.beginPath();
          ctx.roundRect(-16, -14, 32, 28, 5);
          ctx.fill();

          // Collar details
          ctx.fillStyle = cloth.accentColor;
          ctx.beginPath();
          ctx.moveTo(-10, -14);
          ctx.lineTo(0, -6);
          ctx.lineTo(10, -14);
          ctx.lineTo(7, -10);
          ctx.lineTo(0, -3);
          ctx.lineTo(-7, -10);
          ctx.closePath();
          ctx.fill();

          // Buttons
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(0, 2, 1.5, 0, Math.PI * 2);
          ctx.arc(0, 8, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (cloth.type === 'towel') {
          // Rolled Fluffy Bath Towel
          ctx.fillStyle = cloth.color;
          ctx.beginPath();
          ctx.roundRect(-20, -10, 40, 20, 9);
          ctx.fill();

          // Towel stripe accent
          ctx.strokeStyle = cloth.accentColor;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(-10, -10);
          ctx.lineTo(-10, 10);
          ctx.moveTo(10, -10);
          ctx.lineTo(10, 10);
          ctx.stroke();
        } else if (cloth.type === 'denim') {
          // Folded Jeans / Denim Slacks
          ctx.fillStyle = cloth.color;
          ctx.beginPath();
          ctx.roundRect(-18, -16, 36, 32, 6);
          ctx.fill();

          // Golden stitching
          ctx.strokeStyle = '#F59E0B';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 2]);
          ctx.beginPath();
          ctx.roundRect(-15, -13, 30, 26, 4);
          ctx.stroke();
          ctx.setLineDash([]);
        } else {
          // Little Sock
          ctx.fillStyle = cloth.color;
          ctx.beginPath();
          ctx.moveTo(-12, -8);
          ctx.lineTo(0, -8);
          ctx.lineTo(8, 6);
          ctx.lineTo(2, 12);
          ctx.lineTo(-8, 4);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = cloth.accentColor;
          ctx.beginPath();
          ctx.arc(4, 8, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // --- 5. Foamy Soap Suds & Bubbles ---
      bubbles.forEach((b) => {
        if (isPlaying) {
          b.y -= b.vy * (currentSpeed + 0.5);
          if (b.y < -30) {
            b.y = 80 + Math.random() * 20;
            b.x = (Math.random() - 0.5) * 140;
          }
        }
        const bx = cx + b.x + Math.sin(time * 0.003 + b.phase) * 6;
        const by = cy + b.y;

        ctx.beginPath();
        ctx.arc(bx, by, b.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(186, 230, 253, 0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // --- 6. Glass Porthole Reflection Highlight ---
      ctx.restore(); // Restore clip

      // Glass surface gloss / glare
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx - 30, cy - 35, 75, 45, -Math.PI / 4, 0, Math.PI * 2);
      const glareGrad = ctx.createLinearGradient(cx - 80, cy - 80, cx, cy);
      glareGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      glareGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      glareGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
      ctx.fillStyle = glareGrad;
      ctx.fill();

      // Circular Porthole Door Handle
      ctx.beginPath();
      ctx.arc(cx + outerRadius - 10, cy, 14, -Math.PI / 2, Math.PI / 2);
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, speedMode]);

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl bg-white border-2 border-slate-200/90 shadow-machine p-5 sm:p-7 transition-all">
      {/* 2D Modern Appliance Top Header / LED Console */}
      <div className="rounded-2xl bg-village-navy text-white p-4 sm:p-5 shadow-inner border border-slate-700/60 mb-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-village-blue flex items-center justify-center text-white shadow-sm">
              <RotateCw className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: speedMode === 'turbo' ? '1s' : speedMode === 'gentle' ? '3.5s' : '2s' }} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-village-sky flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                <span>Smart Care Console</span>
              </div>
              <h3 className="font-display font-extrabold text-sm sm:text-base text-white">{currentCycleName}</h3>
            </div>
          </div>

          {/* LED Digital Readout Screen */}
          <div className="text-right bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-sky-500/40 shadow-inner">
            <div className="text-[9px] uppercase tracking-wider text-sky-400 font-bold">Est. Remaining</div>
            <div className="font-mono font-black text-xl text-sky-300 tracking-wider">
              {isPlaying ? `00:${cycleTimeRemaining < 10 ? `0${cycleTimeRemaining}` : cycleTimeRemaining}` : 'PAUSED'}
            </div>
          </div>
        </div>

        {/* Status Indicators Strip */}
        <div className="grid grid-cols-4 gap-2 pt-3 text-center text-[10px] font-bold">
          <div className="py-1 px-1 rounded-lg bg-slate-800/80 text-emerald-400 border border-emerald-500/30 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            FILL
          </div>
          <div className={`py-1 px-1 rounded-lg transition ${isPlaying ? 'bg-sky-500/30 text-sky-200 border border-sky-400/50' : 'bg-slate-800/80 text-slate-500'}`}>
            WASH
          </div>
          <div className="py-1 px-1 rounded-lg bg-slate-800/80 text-slate-400">
            RINSE
          </div>
          <div className={`py-1 px-1 rounded-lg transition ${speedMode === 'turbo' ? 'bg-amber-500/30 text-amber-300 border border-amber-400/50' : 'bg-slate-800/80 text-slate-400'}`}>
            SPIN ({rpmDisplay})
          </div>
        </div>
      </div>

      {/* 2D Porthole Canvas Viewport */}
      <div className="relative w-full flex items-center justify-center py-2 select-none">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="w-[270px] h-[270px] sm:w-[300px] sm:h-[300px] drop-shadow-xl"
        />

        {/* Floating badge for clothes tumbling */}
        <div className="absolute bottom-1 right-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] text-white flex items-center gap-1.5 shadow-sm font-semibold">
          <Sparkles className="w-3 h-3 text-village-sky" />
          <span>Real-time Tumble Wash</span>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="space-y-4 pt-4 border-t border-slate-200 mt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-village-blue" />
            Extraction Spin:
          </div>

          {/* Speed Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setSpeedMode('gentle')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                speedMode === 'gentle'
                  ? 'bg-white text-village-navy shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gentle (350)
            </button>
            <button
              onClick={() => setSpeedMode('normal')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                speedMode === 'normal'
                  ? 'bg-village-blue text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Eco Clean (680)
            </button>
            <button
              onClick={() => setSpeedMode('turbo')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                speedMode === 'turbo'
                  ? 'bg-village-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Turbo (1200)
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold transition shadow-sm"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 text-amber-600 fill-amber-600" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                Start Wash
              </>
            )}
          </button>

          <button
            onClick={onEstimateClick}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-village-navy hover:bg-village-navyLight text-white text-xs sm:text-sm font-extrabold transition shadow-md hover:shadow-lg group"
          >
            <span>See Your Clothes Cleaned</span>
            <span className="text-village-sky group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Tech Guarantee micro-badge */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
          <span className="flex items-center gap-1 text-slate-700 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Dexter Commercial High-G Extract Tech
          </span>
          <span className="text-slate-500 font-medium">Rice Village Houston</span>
        </div>
      </div>
    </div>
  );
};
