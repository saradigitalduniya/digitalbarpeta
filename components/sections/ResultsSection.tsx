'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Globe2, Cpu, Info } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { SectionHeading } from '@/components/ui/SectionHeading';

// IMPORTANT DEVELOPER NOTICE:
// DO NOT INVENT REAL BUSINESS RESULTS.
// The metrics below are editable placeholders (00+) and MUST be replaced with verified Digital Barpeta official figures.
// Counters will animate once official numbers are connected.
const statsItems = [
  {
    label: 'PROJECTS DELIVERED',
    value: siteConfig.stats.projects, // '00+'
    icon: Briefcase,
    color: '#10B981',
  },
  {
    label: 'BUSINESSES SERVED',
    value: siteConfig.stats.businesses, // '00+'
    icon: Building2,
    color: '#38BDF8',
  },
  {
    label: 'WEBSITES ENGINEERED',
    value: siteConfig.stats.websites, // '00+'
    icon: Globe2,
    color: '#8B5CF6',
  },
  {
    label: 'DIGITAL SOLUTIONS',
    value: siteConfig.stats.solutions, // '00+'
    icon: Cpu,
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

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsItems.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl text-center flex flex-col items-center justify-center group glass-panel-hover"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    border: `1px solid ${stat.color}40`,
                    color: stat.color,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-brand-green transition-colors">
                  {stat.value}
                </div>

                <div className="mt-2 text-xs font-mono font-bold text-brand-muted tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-brand-muted font-mono">
          <Info className="w-3.5 h-3.5 text-brand-green" />
          <span>Note: Verified client counters will be updated dynamically upon official verification.</span>
        </div>

      </div>
    </section>
  );
};
