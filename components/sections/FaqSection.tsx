'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqData } from '@/data/faq';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/config';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-background border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-green/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="QUESTIONS &amp; ANSWERS"
          title="FREQUENTLY ASKED QUESTIONS."
          subtitle="Everything you need to know about our workflow, pricing, deliverables, and technical capabilities."
          align="center"
        />

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? 'border-brand-green/50 bg-dark-green/70 shadow-glow-green'
                    : 'border-white/10 hover:border-brand-green/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-brand-green font-normal">
                      0{idx + 1}.
                    </span>
                    <span>{item.question}</span>
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-brand-green text-black rotate-180'
                        : 'bg-white/5 text-brand-muted hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-brand-muted leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Inquiry Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-dark-green/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question not listed here?</h4>
            <p className="text-xs text-brand-muted mt-0.5">We are ready to assist you right away.</p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              'Hi Digital Barpeta, I have a quick question about your agency services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2.5 px-5 flex items-center gap-2 whitespace-nowrap font-bold"
          >
            <MessageCircle className="w-4 h-4 text-brand-green" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
