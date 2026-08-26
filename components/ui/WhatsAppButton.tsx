'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/config';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Digital Barpeta, I would like to discuss a digital project for my business.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden sm:flex items-center gap-2 bg-dark-green/90 border border-brand-green/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-glass-card text-xs text-white"
      >
        <span className="w-2 h-2 rounded-full bg-brand-green-bright animate-ping" />
        <span className="font-semibold">Chat on WhatsApp</span>
      </motion.div>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Digital Barpeta"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-green to-emerald-400 text-black flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] border-2 border-emerald-300 relative group transition-all"
      >
        <MessageCircle className="w-7 h-7 fill-current stroke-none group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-green-bright rounded-full border-2 border-background animate-pulse" />
      </motion.a>
    </div>
  );
};
