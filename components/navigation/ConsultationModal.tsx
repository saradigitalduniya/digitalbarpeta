'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles, Send } from 'lucide-react';
import { siteConfig } from '@/data/config';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SEO & Search Growth',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'SEO & Search Growth',
      details: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-lg bg-background-secondary border border-brand-green/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close consultation modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Consultation Request Received!</h3>
                <p className="mt-2 text-sm text-brand-muted max-w-sm mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our growth strategy team will review your requirements and reach out within 24 hours.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="btn-secondary text-xs px-5 py-2.5"
                  >
                    Done
                  </button>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Digital Barpeta, I just requested a consultation for ${formData.service} (${formData.name})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-5 py-2.5 font-bold"
                  >
                    Fast-Track on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-brand-green text-xs font-mono mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>FREE STRATEGY SESSION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Get Free Consultation
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-muted">
                  Discover how our tailored digital solutions can scale your business online.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-muted mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-green/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-muted mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-green/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-muted mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-green/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-muted mb-1">
                      Primary Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-green/60 border border-white/10 text-white focus:outline-none focus:border-brand-green text-sm"
                    >
                      <option value="SEO & Search Growth">SEO &amp; Search Growth</option>
                      <option value="Web Design & Development">Web Design &amp; Development</option>
                      <option value="AI Marketing">AI Marketing &amp; Automation</option>
                      <option value="Software & App Development">Software &amp; App Development</option>
                      <option value="Logo & Brand Design">Logo &amp; Brand Design</option>
                      <option value="Digital Marketing">Digital Marketing &amp; Ads</option>
                      <option value="Optimization & Tune-Up">Optimization &amp; Tune-Up</option>
                      <option value="Maintenance & Support">Website Maintenance &amp; Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-muted mb-1">
                      Project Goals / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your business goals, target timeline, or current website URL..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-green/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3 text-sm font-bold mt-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Scheduling Consultation...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Schedule My Free Consultation <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
