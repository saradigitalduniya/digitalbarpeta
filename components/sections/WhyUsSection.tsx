'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, Zap, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const whyCards = [
  {
    title: 'STRATEGY FIRST',
    tagline: 'We understand the goal before choosing the technology.',
    description: 'We don’t believe in cookie-cutter solutions. We dissect your business model, target customer habits, and competitor gaps to build an authoritative digital blueprint that delivers measurable ROI.',
    icon: Target,
    accent: '#10B981',
    features: ['In-depth audience mapping', 'Data-driven competitor audits', 'Conversion roadmap before code'],
  },
  {
    title: 'DESIGNED TO STAND OUT',
    tagline: 'We combine clean design with memorable visual experiences.',
    description: 'First impressions matter. We merge futuristic 2.5D visual aesthetics, modern typography, glassmorphism, and seamless micro-animations to position your brand as the obvious industry leader.',
    icon: Sparkles,
    accent: '#8B5CF6',
    features: ['Bespoke brand design systems', 'Fluid micro-interactions', 'High-converting UX hierarchy'],
  },
  {
    title: 'BUILT FOR PERFORMANCE',
    tagline: 'Fast, responsive and technically optimized digital solutions.',
    description: 'Speed is non-negotiable. We engineer clean, modular Next.js code focused on fast-loading architecture, responsive design across devices, and Core Web Vitals optimization.',
    icon: Zap,
    accent: '#38BDF8',
    features: ['Fast-loading architecture', 'Core Web Vitals focused', 'Responsive across devices'],
  },
  {
    title: 'MADE TO GROW',
    tagline: 'Your digital presence should evolve as your business grows.',
    description: 'We build scalable digital architecture that adapts seamlessly—supporting new features, AI automation workflows, high-volume customer traffic, and continuous SEO expansion.',
    icon: TrendingUp,
    accent: '#22C55E',
    features: ['Modular scalable codebase', 'Continuous rank tracking', 'Proactive maintenance & support'],
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 bg-background border-t border-b border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-green/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="THE DIGITAL BARPETA ADVANTAGE"
          title="WHY BUILD WITH DIGITAL BARPETA?"
          subtitle="We combine visionary creative direction with rigorous engineering and search growth science to help modern businesses outpace their competition."
          align="center"
        />

        {/* 4 Large Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group glass-panel-hover flex flex-col justify-between"
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 w-24 h-1.5 rounded-br-full"
                  style={{ backgroundColor: card.accent }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${card.accent}15`,
                        border: `1px solid ${card.accent}40`,
                        color: card.accent,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="font-mono text-xs font-bold text-brand-muted">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-brand-green transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-brand-green">
                    &ldquo;{card.tagline}&rdquo;
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Key Checklist Features */}
                <div className="mt-8 pt-6 border-t border-white/5 space-y-2.5">
                  {card.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                      <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
