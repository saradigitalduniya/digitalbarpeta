'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '@/data/config';
import { SectionHeading } from '@/components/ui/SectionHeading';

const serviceOptions = [
  'SEO & Search Growth',
  'Web Design & Development',
  'AI Marketing',
  'Software Development',
  'App Development',
  'Logo & Branding',
  'Digital Marketing',
  'Optimization & Tune-Up',
  'Maintenance & Support',
  'Other',
];

const budgetRanges = [
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+',
  'Custom Project Scope',
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    budget: budgetRanges[1],
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.details.trim()) {
      setErrorMessage('Please provide your project details.');
      return;
    }

    setIsSubmitting(true);

    // Local submission receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      service: serviceOptions[0],
      budget: budgetRanges[1],
      details: '',
    });
  };

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Digital Barpeta! My name is ${formData.name || 'Client'}. I am interested in ${formData.service}.`
  )}`;

  return (
    <section id="contact" className="relative py-24 bg-background-secondary/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-brand-green/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="READY TO GROW YOUR BUSINESS?"
          subtitle="Tell us what you're building. We'll help you figure out what comes next."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Agency Contact Desk */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-brand-green/30 relative overflow-hidden">
              <h3 className="text-2xl font-black text-white">Let&apos;s Build Together</h3>
              <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                Reach out to our strategy team for web engineering, SEO growth, AI automation, or custom software projects.
              </p>

              <div className="mt-8 space-y-5">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-green border border-brand-green/30 flex items-center justify-center text-brand-green shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase">Official Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-bold text-white block hover:text-brand-green transition-colors font-mono"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-green border border-brand-green/30 flex items-center justify-center text-brand-green-bright shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase">WhatsApp</span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white block hover:text-brand-green transition-colors font-mono"
                    >
                      {siteConfig.contact.displayWhatsapp}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-green border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase">Phone</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-bold text-white block hover:text-brand-blue transition-colors font-mono"
                    >
                      {siteConfig.contact.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-green border border-brand-purple/30 flex items-center justify-center text-brand-purple shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase">Location</span>
                    <p className="text-sm font-bold text-white">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-green border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase">Working Hours</span>
                    <p className="text-xs text-zinc-300 font-medium font-mono">
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Digital Barpeta, I would like to inquire about your digital services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-xs uppercase tracking-wider py-3 flex items-center justify-center gap-2 font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-brand-green/30 shadow-glow-green">
              
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Project Enquiry Recorded</h3>
                  <p className="mt-2 text-sm text-brand-muted max-w-md mx-auto">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your enquiry for <span className="text-brand-green font-semibold">{formData.service}</span> has been logged. Our strategy team will reach out at <span className="text-white font-mono">{formData.email}</span>.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleReset}
                      className="btn-secondary text-xs px-6 py-3"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-6 py-3 font-bold"
                    >
                      <span>Continue on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-2 text-brand-green text-xs font-mono mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>START YOUR PROJECT</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company / Brand"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white focus:outline-none focus:border-brand-green text-sm"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-dark-green text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white focus:outline-none focus:border-brand-green text-sm"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b} className="bg-dark-green text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project vision, timeline, current challenges or desired outcomes..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-400 font-mono flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-xs font-bold uppercase tracking-wider shadow-glow-green"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Processing Enquiry...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>SEND PROJECT ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
