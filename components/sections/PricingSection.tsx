'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { pricingData, pricingDisclaimer } from '@/data/pricing';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="relative py-24 bg-background-secondary/60 overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="INVESTMENT &amp; PACKAGES"
          title="SIMPLE PLANS. FLEXIBLE SOLUTIONS."
          subtitle="Transparent, value-driven investment tiers engineered for maximum ROI at every stage of business maturity."
          align="center"
        />

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan, idx) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`glass-panel rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-2 border-brand-green shadow-glow-green-lg bg-dark-green/90 -translate-y-2'
                    : 'glass-panel-hover'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-green to-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest shadow-glow-green flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-black stroke-none" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-white tracking-wide">
                      {plan.name}
                    </h3>
                    <span className="text-[11px] font-mono text-brand-green">
                      TIER 0{idx + 1}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-brand-muted min-h-[32px]">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <span className="text-xs font-mono text-brand-muted block">
                      {plan.startingFrom}
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-brand-muted font-mono">
                        / {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                      Included Capabilities:
                    </p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-3 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/#contact"
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      plan.isPopular
                        ? 'btn-primary shadow-glow-green'
                        : 'btn-secondary hover:border-brand-green'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-muted max-w-2xl mx-auto italic font-mono bg-dark-green/40 border border-white/5 py-3 px-6 rounded-full inline-block">
            &ldquo;{pricingDisclaimer}&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};
