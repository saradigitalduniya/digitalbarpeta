'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe2, Layers, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const trustBlocks = [
  {
    title: 'MODERN TECHNOLOGY',
    subtitle: 'Next.js • SEO • AI • Automation',
    icon: Cpu,
    color: '#10B981',
  },
  {
    title: 'LOCAL & REMOTE',
    subtitle: 'Serving businesses from Assam and beyond',
    icon: Globe2,
    color: '#38BDF8',
  },
  {
    title: 'END-TO-END',
    subtitle: 'Design • Development • Marketing',
    icon: Layers,
    color: '#8B5CF6',
  },
  {
    title: 'GROWTH FOCUSED',
    subtitle: 'Technology built for business growth',
    icon: TrendingUp,
    color: '#22C55E',
  },
];

export const ResultsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-background-secondary/40 border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="GROWTH IMPACT"
          title="MEASURABLE IMPACT. PRACTICAL SOLUTIONS."
          subtitle="Our engineering standards, search optimization frameworks, and creative direction are built to deliver verifiable business outcomes."
          align="center"
        />

        {/* 4 Trust / Value Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl text-center flex flex-col items-center justify-center group glass-panel-hover"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${block.color}15`,
                    border: `1px solid ${block.color}40`,
                    color: block.color,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-base sm:text-lg font-black text-white tracking-tight group-hover:text-brand-green transition-colors uppercase">
                  {block.title}
                </div>

                <div className="mt-2 text-xs font-mono font-medium text-brand-muted tracking-wide">
                  {block.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
