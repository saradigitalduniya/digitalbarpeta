'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
    >
      <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-brand-muted uppercase">
        SCROLL TO EXPLORE
      </span>
      <div className="w-5 h-9 rounded-full border border-brand-green/30 p-1 flex justify-center bg-dark-green/30 backdrop-blur-sm">
        <motion.div
          animate={{
            y: [0, 14, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-glow-green"
        />
      </div>
    </motion.div>
  );
};
