'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DigitalBarpetaCharacter } from '@/components/character/DigitalBarpetaCharacter';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-background-secondary/70 border-t border-b border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mascot / Digital Guide Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-sm glass-panel p-6 rounded-3xl border border-brand-green/30 shadow-glow-green">
              <DigitalBarpetaCharacter size="lg" enableParallax={true} enableFloating={true} />
              
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-[10px] uppercase">
                  <span>DIGITAL BARPETA GUIDE</span>
                </div>
                <p className="text-xs text-brand-muted mt-1 font-mono">
                  Guiding your business to digital dominance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs uppercase tracking-widest mb-4 w-fit shadow-glow-green"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT DIGITAL BARPETA</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
            >
              WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base text-brand-muted leading-relaxed"
            >
              {siteConfig.fullDescription}
            </motion.p>

            {/* Core Values Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Transparency &amp; Ethics</h4>
                  <p className="text-xs text-brand-muted mt-1">Honest roadmaps, verified metrics, zero hidden surprises.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <Zap className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Speed &amp; Agility</h4>
                  <p className="text-xs text-brand-muted mt-1">Rapid iterative sprints from prototype to live production.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Long-Term Partnership</h4>
                  <p className="text-xs text-brand-muted mt-1">Continuous optimization, maintenance, and growth tracking.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Futuristic Craft</h4>
                  <p className="text-xs text-brand-muted mt-1">State-of-the-art UI/UX, AI pipelines, and modern web architecture.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/#contact"
                className="btn-primary text-xs uppercase tracking-wider py-4 px-8 inline-flex items-center gap-2"
              >
                <span>LET&apos;S WORK TOGETHER</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
