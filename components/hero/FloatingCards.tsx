'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bot, Code, Smartphone, TrendingUp } from 'lucide-react';

export const FloatingCards: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 01: SEO / SEARCH GROWTH (Top Left of Character area) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden md:flex absolute top-[20%] right-[44%] lg:right-[42%] xl:right-[40%] z-20"
      >
        <motion.div
          animate={{
            y: [-6, 6, -6],
            x: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center gap-3 bg-dark-green/90 border border-brand-green/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow-green"
        >
          <div className="w-8 h-8 rounded-xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-brand-green font-bold tracking-wider">SEO</p>
            <p className="text-xs font-bold text-white tracking-wide">SEARCH GROWTH</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 02: AI / SMART AUTOMATION (Top Right of Character area) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:flex absolute top-[12%] right-[5%] xl:right-[8%] z-20"
      >
        <motion.div
          animate={{
            y: [6, -6, 6],
            x: [3, -3, 3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center gap-3 bg-background-secondary/95 border border-brand-purple/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow-purple"
        >
          <div className="w-8 h-8 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-brand-purple font-bold tracking-wider">AI</p>
            <p className="text-xs font-bold text-white tracking-wide">SMART AUTOMATION</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 03: WEB / HIGH PERFORMANCE (Bottom Left of Character area) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden sm:flex absolute bottom-[18%] right-[44%] lg:right-[40%] z-20"
      >
        <motion.div
          animate={{
            y: [-5, 5, -5],
            x: [3, -3, 3],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center gap-3 bg-background-secondary/90 border border-brand-blue/40 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glow-blue"
        >
          <div className="w-8 h-8 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-brand-blue font-bold tracking-wider">WEB</p>
            <p className="text-xs font-bold text-white tracking-wide">HIGH PERFORMANCE</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 04: APP / DIGITAL PRODUCT (Bottom Right of Character area) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="hidden lg:flex absolute bottom-[14%] right-[4%] xl:right-[6%] z-20"
      >
        <motion.div
          animate={{
            y: [6, -6, 6],
            x: [-2, 2, -2],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center gap-3 bg-dark-green/90 border border-brand-green/30 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-glass-card"
        >
          <div className="w-8 h-8 rounded-xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-brand-green font-bold tracking-wider">APP</p>
            <p className="text-xs font-bold text-white tracking-wide">DIGITAL PRODUCT</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 05: GROWTH / DIGITAL GROWTH (Mid-Right Floating Accent) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="hidden xl:flex absolute top-[48%] right-[1%] lg:right-[2%] z-20"
      >
        <motion.div
          animate={{
            scale: [0.97, 1.03, 0.97],
            y: [-4, 4, -4],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-600 px-3.5 py-1.5 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.45)] text-black font-black text-xs tracking-wider uppercase border border-emerald-300"
        >
          <span className="font-mono text-[10px] text-black/80 font-bold">GROWTH</span>
          <span>DIGITAL GROWTH</span>
          <TrendingUp className="w-3.5 h-3.5 stroke-[3]" />
        </motion.div>
      </motion.div>
    </div>
  );
};
