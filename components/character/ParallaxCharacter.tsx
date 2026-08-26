'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ParallaxCharacterProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  enableParallax?: boolean;
  enableFloating?: boolean;
  priority?: boolean;
}

export const ParallaxCharacter: React.FC<ParallaxCharacterProps> = ({
  className = '',
  size = 'hero',
  enableParallax = true,
  enableFloating = true,
  priority = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion coordinates normalized (-1 to 1) from viewport center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, refined spring physics for natural, subtle agency feel (no motion sickness)
  const springConfig = { damping: 32, stiffness: 85, mass: 0.55 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 2.5D coordinate transforms:
  // Character translation: ±12px horizontal, ±8px vertical
  const charX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const charY = useTransform(smoothY, [-1, 1], [-8, 8]);

  // Gentle perspective tilt: ±3.5° max (keeps face and body upright & natural)
  const rotateX = useTransform(smoothY, [-1, 1], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-3.5, 3.5]);

  // Backlight & Orbital Ring Parallax (moves in counter-direction for 3D depth)
  const backLayerX = useTransform(smoothX, [-1, 1], [10, -10]);
  const backLayerY = useTransform(smoothY, [-1, 1], [6, -6]);

  // Shadow shift following light source
  const shadowX = useTransform(smoothX, [-1, 1], [14, -14]);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);

    const handleResize = () => {
      checkViewport();
      setHasReducedMotion(mediaQuery.matches);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableParallax || mediaQuery.matches || window.innerWidth < 768) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      const x = (e.clientX - width / 2) / (width / 2);
      const y = (e.clientY - height / 2) / (height / 2);

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enableParallax, mouseX, mouseY]);

  const isMotionDisabled = hasReducedMotion || isMobile;

  // Responsive character container sizes
  const sizeClasses = {
    sm: 'w-44 h-56 md:w-52 md:h-64',
    md: 'w-56 h-72 md:w-68 md:h-84',
    lg: 'w-64 h-84 sm:w-80 sm:h-[400px] lg:w-[380px] lg:h-[480px]',
    xl: 'w-72 h-92 sm:w-[360px] sm:h-[460px] lg:w-[440px] lg:h-[560px]',
    hero: 'w-64 h-84 sm:w-[340px] sm:h-[440px] md:w-[390px] md:h-[500px] lg:w-[460px] lg:h-[580px] xl:w-[500px] xl:h-[630px] max-w-full',
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none flex items-center justify-center max-w-full ${className}`}
      style={{ perspective: 1200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ============================================================ */}
      {/* 2.5D BACKGROUND LAYER: ATMOSPHERIC GLOW & ORBITAL RINGS */}
      {/* ============================================================ */}
      <motion.div
        style={{
          x: isMotionDisabled ? 0 : backLayerX,
          y: isMotionDisabled ? 0 : backLayerY,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
      >
        {/* Soft Emerald Core Radial Glow */}
        <div className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-tr from-brand-green/30 via-emerald-600/20 to-brand-blue/15 blur-[90px] sm:blur-[120px] opacity-75" />

        {/* Subtle Conic Light Ray Sheen */}
        <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/15 via-transparent to-transparent blur-2xl" />

        {/* Outer Circular Orbital Ring (SVG) */}
        <motion.svg
          animate={
            !isMotionDisabled
              ? { rotate: 360 }
              : {}
          }
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] text-brand-green/20"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="230"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 14"
            className="opacity-40"
          />
          {/* Subtle accent nodes on orbital ring */}
          <circle cx="250" cy="20" r="3" fill="#10B981" className="animate-pulse" />
          <circle cx="480" cy="250" r="2.5" fill="#38BDF8" className="opacity-70" />
          <circle cx="250" cy="480" r="2.5" fill="#10B981" className="opacity-60" />
          <circle cx="20" cy="250" r="3" fill="#8B5CF6" className="opacity-70" />
        </motion.svg>

        {/* Inner Counter-Rotating Orbital Ring (SVG) */}
        <motion.svg
          animate={
            !isMotionDisabled
              ? { rotate: -360 }
              : {}
          }
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] text-brand-green/25"
          viewBox="0 0 380 380"
          fill="none"
        >
          <circle
            cx="190"
            cy="190"
            r="175"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 20"
            className="opacity-50"
          />
          <circle cx="190" cy="15" r="2.5" fill="#22C55E" />
          <circle cx="365" cy="190" r="2" fill="#38BDF8" />
        </motion.svg>

        {/* Subtle Cyber Grid Disc at base */}
        <div className="absolute -bottom-4 w-[280px] sm:w-[400px] h-20 bg-gradient-to-t from-brand-green/10 to-transparent rounded-[100%] blur-sm opacity-60" />
      </motion.div>

      {/* ============================================================ */}
      {/* 2.5D INTERACTIVE CHARACTER LAYER */}
      {/* ============================================================ */}
      <motion.div
        style={{
          x: isMotionDisabled ? 0 : charX,
          y: isMotionDisabled ? 0 : charY,
          rotateX: isMotionDisabled ? 0 : rotateX,
          rotateY: isMotionDisabled ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        {/* Gentle Floating Idle Motion (Sine-wave vertical movement) */}
        <motion.div
          animate={
            enableFloating && !hasReducedMotion
              ? {
                  y: isMobile ? [-3, 3, -3] : [-6, 6, -6],
                  rotateZ: isMobile ? 0 : [-0.3, 0.3, -0.3],
                }
              : {}
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`relative ${sizeClasses[size]} transition-all duration-300 flex items-center justify-center`}
        >
          {/* Official Digital Barpeta Character PNG — Preserved with Original Proportions & Transparency */}
          <div className="relative w-full h-full filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:drop-shadow-[0_0_30px_rgba(34,197,94,0.45)] transition-all duration-500">
            <Image
              src="/character/digital_barpeta_character.png"
              alt="Digital Barpeta Character"
              fill
              priority={priority}
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 500px"
              className="object-contain pointer-events-none"
            />
          </div>

          {/* Depth Shadow Layer on Floor below the Character */}
          <motion.div
            style={{ x: isMotionDisabled ? 0 : shadowX }}
            animate={
              !hasReducedMotion
                ? {
                    scale: [0.94, 1.06, 0.94],
                    opacity: [0.35, 0.55, 0.35],
                  }
                : {}
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/80 blur-xl rounded-full -z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
