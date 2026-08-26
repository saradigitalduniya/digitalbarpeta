'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Palette, Cpu, TrendingUp, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const introCards = [
  {
    title: 'STRATEGY',
    description: 'Build with a clear purpose.',
    detail: 'Every campaign, line of code, and design choice begins with a thorough understanding of your market, audience intent, and long-term goals.',
    icon: Target,
    color: '#10B981',
    glow: 'hover:shadow-glow-green',
  },
  {
    title: 'CREATIVITY',
    description: 'Create experiences people remember.',
    detail: 'Distinctive visual aesthetics, high-impact branding, and frictionless user experiences that capture attention and build authority.',
    icon: Palette,
    color: '#8B5CF6',
    glow: 'hover:shadow-glow-purple',
  },
  {
    title: 'TECHNOLOGY',
    description: 'Use modern tools and scalable solutions.',
    detail: 'State-of-the-art web frameworks, lightning-fast edge performance, AI automation pipelines, and robust software architecture.',
    icon: Cpu,
    color: '#38BDF8',
    glow: 'hover:shadow-glow-blue',
  },
  {
    title: 'GROWTH',
    description: 'Optimize continuously for better performance.',
    detail: 'Data-backed search optimization, conversion rate enhancement, and agile marketing workflows that continuously compound revenue.',
    icon: TrendingUp,
    color: '#22C55E',
    glow: 'hover:shadow-glow-green',
  },
];

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-background border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="OUR CORE PILLARS"
          title="DIGITAL SOLUTIONS BUILT FOR GROWTH."
          subtitle="From your first website to your next stage of growth, Digital Barpeta brings strategy, creativity and technology together to create digital experiences that work for your business."
          align="center"
        />

        {/* 4 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {introCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`glass-panel p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${card.glow}`}
              >
                {/* Top Subtle Light Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: card.color }}
                />

                <div>
                  {/* Icon Header */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${card.color}15`,
                      border: `1px solid ${card.color}40`,
                      color: card.color,
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-white tracking-tight mb-2 flex items-center gap-2">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-brand-green mb-3">
                    {card.description}
                  </p>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-muted font-mono">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.color }} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
