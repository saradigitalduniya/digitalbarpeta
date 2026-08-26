'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxCharacter } from './ParallaxCharacter';
import {
  Search,
  Globe,
  Bot,
  Smartphone,
  Sparkles,
  TrendingUp,
  Gauge,
  ShieldCheck,
  Code,
  Zap,
  Activity,
} from 'lucide-react';

interface ServiceCompanionProps {
  activeType: 'seo' | 'web' | 'ai' | 'app' | 'branding' | 'marketing' | 'optimization' | 'maintenance';
}

export const ServiceCompanion: React.FC<ServiceCompanionProps> = ({ activeType }) => {
  return (
    <div className="relative w-full h-[440px] lg:h-[500px] flex items-center justify-center p-4">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-radial-ambient opacity-50 rounded-3xl -z-10" />

      {/* Main Brand Character Mascot */}
      <div className="relative z-10 scale-90 md:scale-95">
        <ParallaxCharacter size="md" enableParallax={true} enableFloating={true} />
      </div>

      {/* Context-Aware Surrounding Floating Micro-Scenes */}
      <AnimatePresence mode="wait">
        {activeType === 'seo' && (
          <motion.div
            key="seo-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Top Search Bar Widget */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 left-4 lg:left-8 bg-background-secondary/90 border border-brand-green/40 backdrop-blur-md px-4 py-2 rounded-full shadow-glow-green flex items-center gap-3 text-xs"
            >
              <Search className="w-3.5 h-3.5 text-brand-green" />
              <span className="text-white font-mono text-[11px]">search engine rank</span>
              <span className="bg-brand-green/20 text-brand-green px-2 py-0.5 rounded-full font-bold text-[9px]">
                ORGANIC
              </span>
            </motion.div>

            {/* Bottom Growth Roadmap Widget */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 right-4 lg:right-8 bg-dark-green/90 border border-brand-blue/30 backdrop-blur-md p-3 rounded-2xl shadow-glass-card text-xs flex flex-col gap-1"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-brand-muted text-[10px]">Keyword Architecture</span>
                <span className="text-brand-green font-bold flex items-center gap-1 text-[10px]">
                  <TrendingUp className="w-3 h-3" /> ACTIVE
                </span>
              </div>
              <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
                <div className="w-4/5 h-full bg-gradient-to-r from-brand-green to-brand-blue rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeType === 'web' && (
          <motion.div
            key="web-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Top Browser Code Tag */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 left-6 bg-background-secondary/90 border border-brand-blue/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-glow-blue flex items-center gap-2 text-xs"
            >
              <Code className="w-4 h-4 text-brand-blue" />
              <span className="text-white font-mono text-[11px]">&lt;Next.js App /&gt;</span>
            </motion.div>

            {/* Bottom Performance Badge */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 right-8 bg-dark-green/90 border border-brand-green/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow-green flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green font-black text-xs">
                ⚡
              </div>
              <div>
                <p className="text-[11px] font-bold text-white">Sub-Second Speed</p>
                <p className="text-[9px] text-brand-muted">Core Web Vitals</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeType === 'ai' && (
          <motion.div
            key="ai-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* AI Agent Node Widget */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 right-6 bg-background-secondary/90 border border-brand-purple/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow-purple flex items-center gap-2.5 text-xs"
            >
              <Bot className="w-4 h-4 text-brand-purple" />
              <div>
                <p className="text-white font-bold text-[11px]">AI Smart Pipeline</p>
                <p className="text-[9px] text-brand-purple">Automated Routing</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 left-6 bg-dark-green/90 border border-brand-green/30 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs"
            >
              <Zap className="w-4 h-4 text-brand-green-bright" />
              <span className="text-white font-mono text-[10px]">Workflow Automation</span>
            </motion.div>
          </motion.div>
        )}

        {activeType === 'app' && (
          <motion.div
            key="app-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 left-6 bg-background-secondary/90 border border-brand-green/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glass-card flex items-center gap-3 text-xs"
            >
              <Smartphone className="w-4 h-4 text-brand-green" />
              <div>
                <p className="text-white font-bold text-[11px]">Android &amp; Web</p>
                <p className="text-[9px] text-brand-muted">Responsive Architecture</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeType === 'branding' && (
          <motion.div
            key="branding-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 right-6 bg-background-secondary/90 border border-amber-500/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glass-card flex items-center gap-2.5 text-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-white font-semibold text-[11px]">Brand Identity Systems</span>
            </motion.div>
          </motion.div>
        )}

        {activeType === 'marketing' && (
          <motion.div
            key="marketing-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 right-6 bg-background-secondary/90 border border-pink-500/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glass-card flex items-center gap-2.5 text-xs"
            >
              <Activity className="w-4 h-4 text-pink-400" />
              <span className="text-white font-semibold text-[11px]">Targeted Digital Campaigns</span>
            </motion.div>
          </motion.div>
        )}

        {activeType === 'optimization' && (
          <motion.div
            key="optimization-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 left-6 bg-background-secondary/90 border border-brand-blue/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow-blue flex items-center gap-2.5 text-xs"
            >
              <Gauge className="w-4 h-4 text-brand-blue" />
              <span className="text-white font-semibold text-[11px]">Performance &amp; Speed Tuning</span>
            </motion.div>
          </motion.div>
        )}

        {activeType === 'maintenance' && (
          <motion.div
            key="maintenance-companion"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 left-6 bg-background-secondary/90 border border-brand-green/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow-green flex items-center gap-2.5 text-xs"
            >
              <ShieldCheck className="w-4 h-4 text-brand-green-bright" />
              <span className="text-white font-semibold text-[11px]">Security &amp; Support</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
