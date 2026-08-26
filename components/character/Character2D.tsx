'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Character2DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  enableParallax?: boolean;
  enableFloating?: boolean;
  priority?: boolean;
}

export const Character2D: React.FC<Character2DProps> = ({
  className = '',
  size = 'lg',
  enableParallax = true,
  enableFloating = true,
  priority = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion coordinates (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, weighted spring physics for premium 2.5D response
  const springConfig = { damping: 28, stiffness: 100, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 2.5D 3D Transform calculations (Strictly controlled to preserve facial features & prevent distortion)
  const rotateX = useTransform(smoothY, [-1, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]);
  const translateX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const translateY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const shadowX = useTransform(smoothX, [-1, 1], [18, -18]);

  useEffect(() => {
    // Detect mobile device or reduced motion preferences
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
      // Automatically disable mouse parallax on mobile or if reduced motion is requested
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

  const sizeClasses = {
    sm: 'w-44 h-56 md:w-52 md:h-64',
    md: 'w-60 h-72 md:w-72 md:h-88',
    lg: 'w-72 h-96 sm:w-88 sm:h-[440px] lg:w-[420px] lg:h-[520px]',
    xl: 'w-72 h-88 sm:w-[380px] sm:h-[480px] lg:w-[460px] lg:h-[580px] xl:w-[500px] xl:h-[620px]',
  };

  const shouldDisableParallax = hasReducedMotion || isMobile;

  return (
    <div
      ref={containerRef}
      className={`relative select-none perspective-1000 flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft Green & Technology Atmospheric Backlight Halo */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full blur-[80px] md:blur-[110px] bg-gradient-to-tr from-brand-green/35 via-brand-blue/20 to-brand-purple/20 pointer-events-none"
        animate={{
          scale: isHovered ? 1.12 : [1, 1.06, 1],
          opacity: isHovered ? 0.8 : [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 2.5D Parallax Interactive Container */}
      <motion.div
        style={{
          rotateX: shouldDisableParallax ? 0 : rotateX,
          rotateY: shouldDisableParallax ? 0 : rotateY,
          x: shouldDisableParallax ? 0 : translateX,
          y: shouldDisableParallax ? 0 : translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        {/* Gentle Floating Idle Sine-Wave Animation */}
        <motion.div
          animate={
            enableFloating && !hasReducedMotion
              ? {
                  y: isMobile ? [-4, 4, -4] : [-8, 8, -8],
                  rotateZ: isMobile ? 0 : [-0.6, 0.6, -0.6],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`relative ${sizeClasses[size]} transition-all duration-300 flex items-center justify-center`}
        >
          {/* Official Digital Barpeta Character PNG Asset */}
          <div className="relative w-full h-full filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] drop-shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:drop-shadow-[0_0_45px_rgba(34,197,94,0.6)] transition-all duration-500">
            <Image
              src="/character/digital_barpeta_character.png"
              alt="Digital Barpeta AI Guide & Mascot"
              fill
              priority={priority}
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 500px"
              className="object-contain pointer-events-none"
            />
          </div>

          {/* Dynamic Ground Shadow Base */}
          <motion.div
            style={{ x: shouldDisableParallax ? 0 : shadowX }}
            animate={{
              scale: [0.92, 1.06, 0.92],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/70 blur-xl rounded-full -z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
