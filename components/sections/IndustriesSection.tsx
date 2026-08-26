'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  ShoppingBag,
  GraduationCap,
  Activity,
  Building2,
  Utensils,
  Rocket,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { industriesData } from '@/data/industries';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  ShoppingBag,
  GraduationCap,
  Activity,
  Building2,
  Utensils,
  Rocket,
  Briefcase,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-background border-t border-b border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="TARGET VERTICALS"
          title="DIGITAL SOLUTIONS FOR EVERY KIND OF BUSINESS."
          subtitle="Whether you run a regional enterprise, clinic, store, or high-growth tech startup, we architect digital systems tailored to your specific sector."
          align="center"
        />

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel p-6 rounded-3xl flex flex-col justify-between group glass-panel-hover"
              >
                <div>
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-dark-green border border-brand-green/30 text-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-muted">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-brand-green transition-colors">
                    {ind.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-brand-blue">
                    {ind.tagline}
                  </p>

                  <p className="mt-3 text-xs text-brand-muted leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                {/* Solutions List */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                  {ind.solutions.map((sol) => (
                    <div key={sol} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span className="truncate">{sol}</span>
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
