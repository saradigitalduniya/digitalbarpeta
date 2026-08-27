'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { ConsultationModal } from './ConsultationModal';

const navLinks = [
  { name: 'SERVICES', href: '/services' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PRICING', href: '/#pricing' },
  { name: 'BLOG', href: '/blog' },
  { name: 'CONTACT', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section - Official Logo Mark & Typography */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0" aria-label="Digital Barpeta Homepage">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo/digital_barpeta_logo.png"
                alt="Digital Barpeta - Digital Marketing & Technology Agency"
                fill
                priority
                sizes="(max-width: 640px) 40px, 48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-white group-hover:text-brand-green transition-colors leading-tight">
                DIGITAL BARPETA
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-brand-green tracking-widest uppercase font-bold leading-none hidden sm:block">
                BUILD • GROW • DOMINATE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-brand-muted hover:text-white transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Action CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setConsultationOpen(true)}
              className="btn-primary text-xs tracking-wider uppercase py-2.5 px-5 font-bold shadow-glow-green"
              aria-label="Request Free Consultation"
            >
              <span>GET FREE CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile CTA & Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setConsultationOpen(true)}
              className="btn-primary text-[10px] tracking-wider uppercase py-1.5 px-3 font-bold"
              aria-label="Request Consultation"
            >
              CONSULTATION
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 rounded-xl bg-dark-green/70 border border-white/10 text-white hover:text-brand-green transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden glass-nav border-b border-brand-green/20 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-brand-muted hover:text-brand-green transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-brand-green opacity-70" />
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setConsultationOpen(true);
                  }}
                  className="btn-primary w-full text-xs tracking-wider uppercase py-3 mt-2 font-bold"
                  aria-label="Get Free Consultation"
                >
                  <span>GET FREE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};
