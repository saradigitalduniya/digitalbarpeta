'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { ParallaxCharacter } from '@/components/character/ParallaxCharacter';
import { FloatingCards } from './FloatingCards';
import { ScrollIndicator } from './ScrollIndicator';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden bg-[#050505]">
      
      {/* ============================================================ */}
      {/* BACKGROUND DEPTH LAYERS: CYBER GRID, VIGNETTE & RADIAL GLOWS */}
      {/* ============================================================ */}
      {/* 1. Subtle Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none -z-20" />

      {/* 2. Soft Atmospheric Hero Gradient with Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(5,5,5,0.95))] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(5,5,5,0.85)_0%,rgba(5,5,5,1)_100%)] pointer-events-none -z-10" />

      {/* 3. Subtle Technology Blue & Purple Accents in Background */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/3 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* ============================================================ */}
      {/* FLOATING GLASSMORPHISM UI CARDS */}
      {/* ============================================================ */}
      <FloatingCards />

      {/* ============================================================ */}
      {/* MAIN HERO CONTAINER */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: HERO TYPOGRAPHY & CTAs (approx. 52-58% width) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            
            {/* Small Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-green/90 border border-brand-green/40 shadow-glow-green text-xs font-mono tracking-widest text-brand-green uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green-bright animate-ping" />
              <span>DIGITAL MARKETING • TECHNOLOGY • GROWTH</span>
            </motion.div>

            {/* Main Headline: BUILD. GROW. DOMINATE. */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white"
            >
              <span className="block text-white">BUILD.</span>
              <span className="block text-gradient-green">GROW.</span>
              <span className="block text-white">DOMINATE.</span>
            </motion.h1>

            {/* Supporting Subtitle Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-brand-muted max-w-xl leading-relaxed font-normal"
            >
              We create high-performance websites, powerful brands, SEO strategies and intelligent digital solutions that help businesses grow online.
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/#contact"
                className="btn-primary w-full sm:w-auto text-xs sm:text-sm uppercase tracking-wider py-4 px-8 group font-bold shadow-glow-green"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#services"
                className="btn-secondary w-full sm:w-auto text-xs sm:text-sm uppercase tracking-wider py-4 px-8 group font-semibold"
              >
                <span>EXPLORE SERVICES</span>
              </Link>
            </motion.div>

            {/* Technical Capability Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-muted font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                <span>Search Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-purple" />
                <span>Modern Technology</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 2.5D OFFICIAL DIGITAL BARPETA BRAND CHARACTER (approx. 42-48% visual area) */}
          <div className="lg:col-span-5 relative flex items-center justify-center z-10 mt-10 lg:mt-0 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full flex items-center justify-center"
            >
              <ParallaxCharacter
                size="hero"
                enableParallax={true}
                enableFloating={true}
                priority={true}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};
