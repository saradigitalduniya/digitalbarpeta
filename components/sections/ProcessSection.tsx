'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Layers, Code2, Send, TrendingUp, CheckCircle2 } from 'lucide-react';
import { processSteps } from '@/data/process';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Code2,
  Send,
  TrendingUp,
};

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-24 bg-background-secondary/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="OUR PROVEN FRAMEWORK"
          title="HOW WE TURN IDEAS INTO RESULTS."
          subtitle="A structured, transparent roadmap from initial discovery to high-impact launch and continuous search growth."
          align="center"
        />

        {/* Desktop Connected Horizontal Timeline */}
        <div className="hidden lg:block relative mt-16">
          {/* Animated Connecting Line */}
          <div className="absolute top-20 left-12 right-12 h-1 bg-white/10 rounded-full z-0 overflow-hidden">
            <motion.div
              style={{ scaleX, transformOrigin: 'left' }}
              className="w-full h-full bg-gradient-to-r from-brand-green via-brand-blue to-emerald-400"
            />
          </div>

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Compass;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon Node */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-dark-green border-2 border-brand-green/40 group-hover:border-brand-green flex items-center justify-center text-brand-green shadow-glow-green group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-brand-green text-[10px] font-black text-black font-mono">
                      {step.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="glass-panel p-5 rounded-2xl w-full flex-1 flex flex-col justify-between group-hover:border-brand-green/40 transition-all">
                    <div>
                      <h4 className="text-base font-black text-white tracking-wide group-hover:text-brand-green transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[11px] font-mono text-brand-blue mt-0.5">
                        {step.subtitle}
                      </p>
                      <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 space-y-1 text-left">
                      {step.details.map((d) => (
                        <div key={d} className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                          <CheckCircle2 className="w-3 h-3 text-brand-green shrink-0" />
                          <span className="truncate">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative mt-12 space-y-8 pl-6 border-l-2 border-brand-green/30">
          {processSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Compass;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot Node */}
                <div className="absolute -left-[35px] top-1.5 w-8 h-8 rounded-full bg-dark-green border-2 border-brand-green flex items-center justify-center text-brand-green text-xs font-mono font-bold shadow-glow-green">
                  {step.step}
                </div>

                <div className="glass-panel p-6 rounded-2xl ml-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-brand-green" />
                    <h4 className="text-lg font-black text-white">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs font-mono text-brand-blue mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {step.details.map((d) => (
                      <div key={d} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
