import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RotateCw, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface WashingMachine3DProps {
  onEstimateClick?: () => void;
}

export const WashingMachine3D: React.FC<WashingMachine3DProps> = ({ onEstimateClick }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMode, setSpeedMode] = useState<'gentle' | 'normal' | 'turbo'>('normal');
  const [currentCycleName, setCurrentCycleName] = useState<string>('Eco Deep Clean');
  const [rpmDisplay, setRpmDisplay] = useState<number>(650);

  // References for animation control loop
  const animStateRef = useRef({
    isPlaying: true,
    speedMultiplier: 1.0,
    drumRotation: 0,
    targetSpeed: 1.0,
    clothes: [] as Array<{
      mesh: THREE.Mesh;
      angle: number;
      radius: number;
      axialZ: number;
      rotSpeed: THREE.Vector3;
      phase: number;
      liftFactor: number;
      dropSpeed: number;
      isDropping: boolean;
    }>,
    bubbles: [] as Array<{
      mesh: THREE.Mesh;
      initialPos: THREE.Vector3;
      wobbleSpeed: number;
      phase: number;
    }>,
    drumGroup: null as THREE.Group | null,
    waterMesh: null as THREE.Mesh | null,
  });

  // Keep state synced with ref
  useEffect(() => {
    animStateRef.current.isPlaying = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    if (speedMode === 'gentle') {
      animStateRef.current.targetSpeed = 0.5;
      setRpmDisplay(350);
      setCurrentCycleName('Delicates & Cashmere');
    } else if (speedMode === 'normal') {
      animStateRef.current.targetSpeed = 1.0;
      setRpmDisplay(680);
      setCurrentCycleName('Eco Deep Clean');
    } else {
      animStateRef.current.targetSpeed = 2.4;
      setRpmDisplay(1200);
      setCurrentCycleName('Turbo High-G Extract');
    }
  }, [speedMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // --- Studio Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 5, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const warmFill = new THREE.PointLight(0x0284c7, 1.5, 10);
    warmFill.position.set(0, 0.2, 1.2);
    scene.add(warmFill);

    // --- Materials ---
    const cabinetMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.15,
      metalness: 0.1,
    });

    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f2744,
      roughness: 0.2,
      metalness: 0.6,
    });

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.05,
      metalness: 0.95,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xbae6fd,
      transmission: 0.85,
      opacity: 0.55,
      transparent: true,
      roughness: 0.08,
      ior: 1.5,
      thickness: 0.4,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
    });

    const drumMaterial = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      roughness: 0.25,
      metalness: 0.85,
      side: THREE.DoubleSide,
    });

    // --- Washer Machine Assembly ---
    const machineGroup = new THREE.Group();
    scene.add(machineGroup);

    // 1. Main Cabinet Body (Rounded box-like appearance)
    const bodyGeometry = new THREE.BoxGeometry(2.1, 2.5, 1.8);
    const bodyMesh = new THREE.Mesh(bodyGeometry, cabinetMaterial);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    machineGroup.add(bodyMesh);

    // 2. Control Panel Header
    const panelGeo = new THREE.BoxGeometry(2.1, 0.5, 0.05);
    const panelMesh = new THREE.Mesh(panelGeo, trimMaterial);
    panelMesh.position.set(0, 1.0, 0.92);
    machineGroup.add(panelMesh);

    // Dial Knob on Panel
    const knobGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 32);
    const knobMesh = new THREE.Mesh(knobGeo, chromeMaterial);
    knobMesh.rotation.x = Math.PI / 2;
    knobMesh.position.set(-0.6, 1.0, 0.97);
    machineGroup.add(knobMesh);

    // Digital Screen Glow on Panel
    const screenGeo = new THREE.PlaneGeometry(0.55, 0.2);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0.4, 1.0, 0.96);
    machineGroup.add(screenMesh);

    // 3. Front Loading Drum Cavity (Dark recessed cylinder)
    const cavityGeo = new THREE.CylinderGeometry(0.85, 0.85, 1.2, 48, 1, true);
    const cavityMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, side: THREE.BackSide, roughness: 0.6 });
    const cavityMesh = new THREE.Mesh(cavityGeo, cavityMat);
    cavityMesh.rotation.x = Math.PI / 2;
    cavityMesh.position.set(0, -0.2, 0.2);
    machineGroup.add(cavityMesh);

    // Back wall of drum
    const drumBackGeo = new THREE.CircleGeometry(0.85, 48);
    const drumBackMesh = new THREE.Mesh(drumBackGeo, drumMaterial);
    drumBackMesh.position.set(0, -0.2, -0.4);
    machineGroup.add(drumBackMesh);

    // 4. Rotating Drum Group
    const drumGroup = new THREE.Group();
    drumGroup.position.set(0, -0.2, 0.2);
    machineGroup.add(drumGroup);
    animStateRef.current.drumGroup = drumGroup;

    // Drum inner cylinder
    const innerDrumGeo = new THREE.CylinderGeometry(0.82, 0.82, 1.15, 36, 1, true);
    const innerDrumMesh = new THREE.Mesh(innerDrumGeo, drumMaterial);
    innerDrumMesh.rotation.x = Math.PI / 2;
    drumGroup.add(innerDrumMesh);

    // 3 Drum Lifter Vanes (Baffles that scoop up clothes)
    for (let i = 0; i < 3; i++) {
      const angle = (i * (2 * Math.PI)) / 3;
      const vaneGeo = new THREE.BoxGeometry(0.08, 0.15, 1.0);
      const vaneMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7, roughness: 0.3 });
      const vaneMesh = new THREE.Mesh(vaneGeo, vaneMat);
      const r = 0.74;
      vaneMesh.position.set(Math.cos(angle) * r, Math.sin(angle) * r, 0);
      vaneMesh.rotation.z = angle + Math.PI / 2;
      drumGroup.add(vaneMesh);
    }

    // 5. 3D Tumbling Clothes Inside Drum
    // We create realistic curved geometric forms (folded garments, towels, t-shirts, socks)
    const clothColors = [
      0x1e40af, // Deep denim blue
      0x0284c7, // Village vibrant cyan
      0xef4444, // Coral red cotton
      0xf59e0b, // Amber gold tee
      0xffffff, // Crisp white oxford shirt
      0x10b981, // Mint green linen
      0x8b5cf6, // Lavender silk
    ];

    const clothesState: typeof animStateRef.current.clothes = [];

    clothColors.forEach((colorHex, idx) => {
      let geo: THREE.BufferGeometry;
      // Alternate geometries: torus for bundled towels, squashed sphere for rolled tees, rounded box
      if (idx % 3 === 0) {
        geo = new THREE.TorusGeometry(0.18, 0.08, 12, 24);
      } else if (idx % 3 === 1) {
        geo = new THREE.DodecahedronGeometry(0.16, 1);
        geo.scale(1.2, 0.7, 0.9);
      } else {
        geo = new THREE.CylinderGeometry(0.12, 0.14, 0.28, 16);
        geo.scale(1.0, 0.8, 1.1);
      }

      const clothMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.8,
        metalness: 0.05,
      });

      const clothMesh = new THREE.Mesh(geo, clothMat);
      clothMesh.castShadow = true;
      machineGroup.add(clothMesh); // Keep in machine space, we update positions manually for tumble physics

      const initialAngle = (idx / clothColors.length) * Math.PI * 2;
      clothesState.push({
        mesh: clothMesh,
        angle: initialAngle,
        radius: 0.45 + (idx % 3) * 0.08,
        axialZ: -0.2 + (idx / clothColors.length) * 0.45,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        phase: idx * 1.2,
        liftFactor: 0.8 + Math.random() * 0.35,
        dropSpeed: 0,
        isDropping: false,
      });
    });

    animStateRef.current.clothes = clothesState;

    // 6. Water Layer & Suds Bubbles
    const waterGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.4, 32, 1, false, 0, Math.PI);
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.7,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.x = Math.PI / 2;
    waterMesh.rotation.z = Math.PI;
    waterMesh.position.set(0, -0.65, 0.1);
    machineGroup.add(waterMesh);
    animStateRef.current.waterMesh = waterMesh;

    // Foam bubbles
    const bubbleGeo = new THREE.SphereGeometry(0.04, 12, 12);
    const bubbleMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.1,
      transparent: true,
      opacity: 0.75,
    });

    const bubbles: typeof animStateRef.current.bubbles = [];
    for (let b = 0; b < 16; b++) {
      const bMesh = new THREE.Mesh(bubbleGeo, bubbleMat);
      const angle = Math.random() * Math.PI * 2;
      const rad = 0.3 + Math.random() * 0.35;
      const bZ = -0.3 + Math.random() * 0.6;
      bMesh.position.set(Math.cos(angle) * rad, -0.2 + Math.sin(angle) * rad, bZ);
      machineGroup.add(bMesh);
      bubbles.push({
        mesh: bMesh,
        initialPos: bMesh.position.clone(),
        wobbleSpeed: 2 + Math.random() * 4,
        phase: Math.random() * Math.PI * 2,
      });
    }
    animStateRef.current.bubbles = bubbles;

    // 7. Front Chrome Door Frame & Transparent Porthole Glass
    const doorFrameGeo = new THREE.TorusGeometry(0.88, 0.09, 24, 64);
    const doorFrameMesh = new THREE.Mesh(doorFrameGeo, chromeMaterial);
    doorFrameMesh.position.set(0, -0.2, 0.92);
    machineGroup.add(doorFrameMesh);

    // Transparent Glass Lens (Domed outward)
    const glassGeo = new THREE.SphereGeometry(0.84, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3.2);
    const glassMesh = new THREE.Mesh(glassGeo, glassMaterial);
    glassMesh.position.set(0, -0.2, 0.88);
    machineGroup.add(glassMesh);

    // Chrome Door Handle
    const handleGeo = new THREE.TorusGeometry(0.18, 0.03, 16, 32, Math.PI);
    const handleMesh = new THREE.Mesh(handleGeo, chromeMaterial);
    handleMesh.rotation.z = -Math.PI / 2;
    handleMesh.position.set(0.92, -0.2, 0.94);
    machineGroup.add(handleMesh);

    // Base Pedestal / Feet
    const footGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.08, 16);
    const footPositions = [
      [-0.85, -1.28, 0.7],
      [0.85, -1.28, 0.7],
      [-0.85, -1.28, -0.7],
      [0.85, -1.28, -0.7],
    ];
    footPositions.forEach(([x, y, z]) => {
      const foot = new THREE.Mesh(footGeo, trimMaterial);
      foot.position.set(x, y, z);
      machineGroup.add(foot);
    });

    // --- Interactive Mouse Drag / Orbit Logic ---
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0.25;
    let targetRotX = 0.05;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotY += deltaX * 0.008;
      targetRotX = Math.max(-0.4, Math.min(0.4, targetRotX + deltaY * 0.008));
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      targetRotY += deltaX * 0.008;
      targetRotX = Math.max(-0.4, Math.min(0.4, targetRotX + deltaY * 0.008));
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // --- Animation Physics Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth Machine Group Orbit Rotation
      machineGroup.rotation.y += (targetRotY - machineGroup.rotation.y) * 0.06;
      machineGroup.rotation.x += (targetRotX - machineGroup.rotation.x) * 0.06;

      // Slowly idle wobble when user is not dragging
      if (!isDragging) {
        targetRotY += 0.0015;
      }

      // Smooth speed interpolation
      const currentMultiplier = animStateRef.current.speedMultiplier;
      const targetSpeed = animStateRef.current.isPlaying ? animStateRef.current.targetSpeed : 0;
      animStateRef.current.speedMultiplier += (targetSpeed - currentMultiplier) * 0.05;
      const speed = animStateRef.current.speedMultiplier;

      // Drum Rotation
      const drumSpeed = speed * delta * 5.0;
      animStateRef.current.drumRotation += drumSpeed;
      if (animStateRef.current.drumGroup) {
        animStateRef.current.drumGroup.rotation.z = animStateRef.current.drumRotation;
      }

      // Water sloshing animation
      if (animStateRef.current.waterMesh) {
        const wave = Math.sin(time * 6 * Math.max(0.4, speed)) * 0.04 * speed;
        animStateRef.current.waterMesh.rotation.z = Math.PI + wave;
      }

      // Bubble motion
      animStateRef.current.bubbles.forEach((b) => {
        b.mesh.rotation.y += delta * b.wobbleSpeed;
        const bSpeed = Math.max(0.2, speed);
        const floatY = Math.sin(time * b.wobbleSpeed + b.phase) * 0.08 * bSpeed;
        const floatX = Math.cos(time * b.wobbleSpeed * 0.7 + b.phase) * 0.05 * bSpeed;
        b.mesh.position.y = b.initialPos.y + floatY;
        b.mesh.position.x = b.initialPos.x + floatX;
      });

      // Clothes Tumble & Roll Physics
      // When speed > 0, clothes rotate along the drum radius until an apex angle, then drop/tumble!
      const drumCenter = new THREE.Vector3(0, -0.2, 0.2);

      animStateRef.current.clothes.forEach((c) => {
        if (speed > 0.02) {
          // If in Turbo Mode (> 1.8), centrifugal force pins clothes to the perimeter
          if (speed > 1.8) {
            c.angle += drumSpeed;
            c.mesh.rotation.z += drumSpeed;
            const curRad = 0.65;
            c.mesh.position.set(
              drumCenter.x + Math.cos(c.angle) * curRad,
              drumCenter.y + Math.sin(c.angle) * curRad,
              drumCenter.z + c.axialZ
            );
          } else {
            // Realistic Front-Load Tumble:
            // The drum rotates counter-clockwise. Lifters carry clothes up to top-right (~110° to 150°),
            // then clothes peel off and cascade diagonally across the drum to the bottom!
            c.angle += drumSpeed * 0.95;

            // Normalize angle between 0 and 2*PI
            c.angle = c.angle % (Math.PI * 2);

            let posX: number;
            let posY: number;

            // Peak drop range: Between PI/3 (60 deg) and 2*PI/3 (120 deg)
            const sinAngle = Math.sin(c.angle);
            const cosAngle = Math.cos(c.angle);

            if (c.angle > Math.PI * 0.5 && c.angle < Math.PI * 1.1) {
              // Tumbling / cascading down through the center
              const fallProgress = (c.angle - Math.PI * 0.5) / (Math.PI * 0.6);
              posX = drumCenter.x + Math.cos(Math.PI * 0.5) * c.radius * (1 - fallProgress * 0.7) - fallProgress * 0.2;
              posY = drumCenter.y + c.radius * (1 - fallProgress * 1.5) - 0.1;
            } else {
              // Riding the drum circumference
              posX = drumCenter.x + cosAngle * c.radius;
              posY = drumCenter.y + sinAngle * c.radius;
            }

            // Boundary constraints inside drum
            const distFromCenter = Math.hypot(posX - drumCenter.x, posY - drumCenter.y);
            if (distFromCenter > 0.68) {
              const normal = Math.atan2(posY - drumCenter.y, posX - drumCenter.x);
              posX = drumCenter.x + Math.cos(normal) * 0.68;
              posY = drumCenter.y + Math.sin(normal) * 0.68;
            }

            c.mesh.position.set(posX, posY, drumCenter.z + c.axialZ);

            // Dynamic rotation of fabric mesh
            c.mesh.rotation.x += delta * c.rotSpeed.x * speed;
            c.mesh.rotation.y += delta * c.rotSpeed.y * speed;
            c.mesh.rotation.z += drumSpeed * 1.2;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-gradient-to-b from-white/95 to-slate-100/90 backdrop-blur-xl border border-white/60 shadow-machine p-5 sm:p-7">
      {/* Top Header Card */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-village-navy flex items-center justify-center text-village-sky shadow-md">
            <RotateCw className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: speedMode === 'turbo' ? '1.2s' : speedMode === 'gentle' ? '5s' : '2.8s' }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider uppercase text-village-blue">Live 3D Care Sim</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Active Cycle
              </span>
            </div>
            <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">{currentCycleName}</h3>
          </div>
        </div>

        {/* Speed / RPM Badge */}
        <div className="text-right">
          <div className="text-xs font-medium text-slate-500">Extraction Speed</div>
          <div className="font-display font-extrabold text-village-navy text-lg sm:text-xl tracking-tight">
            {isPlaying ? `${rpmDisplay} RPM` : 'PAUSED'}
          </div>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div className="relative w-full h-[320px] sm:h-[360px] flex items-center justify-center overflow-hidden my-3 select-none cursor-grab active:cursor-grabbing">
        {/* Subtle radial ambient background behind washer */}
        <div className="absolute inset-0 bg-radial-gradient from-sky-100/60 via-transparent to-transparent pointer-events-none" />

        <div ref={mountRef} className="w-full h-full" />

        {/* Floating Interactive Badge Hint */}
        <div className="absolute bottom-2 left-3 px-3 py-1 rounded-full bg-slate-900/75 backdrop-blur-md text-[11px] text-white flex items-center gap-1.5 pointer-events-none shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-village-sky" />
          <span>Click & Drag to rotate 360°</span>
        </div>
      </div>

      {/* Interactive Appliance Controls */}
      <div className="space-y-4 pt-3 border-t border-slate-200/80">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-village-blue" />
            Cycle Mode:
          </div>

          {/* Speed Selector Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            <button
              onClick={() => setSpeedMode('gentle')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                speedMode === 'gentle'
                  ? 'bg-white text-village-navy shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gentle
            </button>
            <button
              onClick={() => setSpeedMode('normal')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                speedMode === 'normal'
                  ? 'bg-village-blue text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Eco Clean
            </button>
            <button
              onClick={() => setSpeedMode('turbo')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                speedMode === 'turbo'
                  ? 'bg-village-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Turbo 1200
            </button>
          </div>
        </div>

        {/* Start / Pause & Estimate CTA */}
        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-sm"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                Pause Tumble
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                Resume Wash
              </>
            )}
          </button>

          <button
            onClick={onEstimateClick}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-village-navy hover:bg-village-navyLight text-white text-xs font-bold transition shadow-md hover:shadow-lg group"
          >
            <span>See Your Clothes Cleaned</span>
            <span className="text-village-sky group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>

        {/* Technology Guarantee micro-badge */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
          <span className="flex items-center gap-1 text-slate-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Dexter Commercial High-G Extract Tech
          </span>
          <span className="text-slate-400">Rice Village Houston</span>
        </div>
      </div>
    </div>
  );
};
