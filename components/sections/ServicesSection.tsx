'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Search,
  Globe,
  Bot,
  Smartphone,
  Sparkles,
  TrendingUp,
  Gauge,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { servicesData, ServiceItem } from '@/data/services';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Search,
  Globe,
  Bot,
  Smartphone,
  Sparkles,
  TrendingUp,
  Gauge,
  ShieldCheck,
};

interface ServiceCard3DProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard3D: React.FC<ServiceCard3DProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const IconComponent = iconMap[service.icon] || Search;

  // Normalized mouse coordinates within card (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Gentle spring physics for subtle 3D tilt (max ~3 degrees)
  const springConfig = { damping: 25, stiffness: 120, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D tilt: max 3 degrees
  const rotateX = useTransform(smoothY, [-1, 1], [3, -3]);
  const rotateY = useTransform(smoothX, [-1, 1], [-3, 3]);

  // Subtle icon shift
  const iconTranslateX = useTransform(smoothX, [-1, 1], [-3, 3]);
  const iconTranslateY = useTransform(smoothY, [-1, 1], [-3, 3]);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);

    const handleResize = () => {
      checkViewport();
      setHasReducedMotion(mediaQuery.matches);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasReducedMotion || isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const is3DDisabled = hasReducedMotion || isMobile;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="relative h-full flex flex-col"
    >
      <motion.div
        style={{
          rotateX: is3DDisabled ? 0 : rotateX,
          rotateY: is3DDisabled ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-full flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
          isHovered
            ? '-translate-y-1.5 border-brand-green/50 shadow-glow-green bg-gradient-to-b from-[#0e241c] via-[#091510] to-[#050505]'
            : 'border-white/10 bg-[#070b09]/90 hover:border-brand-green/30'
        } border backdrop-blur-md overflow-hidden group`}
      >
        {/* Subtle Ambient Radial Highlight on Hover */}
        <div
          className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-40 bg-brand-green' : 'opacity-0'
          }`}
        />

        {/* Top Header: Service Number & Icon */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-5">
            {/* Service Number */}
            <span className="text-xs font-mono font-bold tracking-widest text-brand-green/80 uppercase">
              {service.number}
            </span>

            {/* Service Icon with Micro 3D Shift */}
            <motion.div
              style={{
                x: is3DDisabled ? 0 : iconTranslateX,
                y: is3DDisabled ? 0 : iconTranslateY,
              }}
              className="w-11 h-11 rounded-2xl bg-dark-green border border-brand-green/30 flex items-center justify-center text-brand-green group-hover:border-brand-green group-hover:text-brand-green-bright group-hover:scale-105 transition-all duration-300 shadow-glass-card"
            >
              <IconComponent className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Service Title */}
          <h3 className="text-lg font-black tracking-tight text-white group-hover:text-brand-green transition-colors leading-snug mb-3">
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-brand-muted leading-relaxed mb-6 font-normal">
            {service.shortDescription}
          </p>

          {/* Feature Bullet Points */}
          <div className="pt-4 border-t border-white/5 space-y-2 mb-6">
            {service.features.map((feature, fIndex) => (
              <div key={fIndex} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-2">
          <Link
            href={`/services/${service.slug}`}
            className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-green hover:text-white transition-colors py-2.5 px-3 rounded-xl bg-brand-green/5 hover:bg-brand-green/15 border border-brand-green/20 group/btn"
          >
            <span>EXPLORE SERVICE</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-28 bg-[#050505] overflow-hidden">
      
      {/* Background Depth: Subtle Cyber Grid & Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none -z-10" />
      
      {/* Large Soft Emerald Center Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-green/10 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs uppercase tracking-widest mb-4 shadow-glow-green"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE DO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase"
          >
            <span>DIGITAL SOLUTIONS</span>
            <span className="block text-gradient-green">BUILT TO GROW.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-brand-muted leading-relaxed"
          >
            From search visibility to high-performance websites and digital products, Digital Barpeta builds technology that helps businesses move forward.
          </motion.p>
        </div>

        {/* 8 Premium 3D Service Cards (4 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard3D key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-dark-green via-[#081711] to-dark-green border border-brand-green/30 shadow-glow-green text-center relative overflow-hidden"
        >
          {/* Accent lighting behind CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-green/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              READY TO BUILD SOMETHING BETTER?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              Discuss your project goals with our technology strategists and get a clear roadmap.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="btn-primary inline-flex items-center gap-2 py-4 px-8 text-xs font-bold uppercase tracking-wider shadow-glow-green"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
