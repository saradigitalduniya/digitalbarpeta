'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Send,
  Globe2,
} from 'lucide-react';
import { siteConfig, SITE_URL } from '@/data/config';
import { servicesData } from '@/data/services';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { SectionHeading } from '@/components/ui/SectionHeading';

const serviceOptions = [
  'Website Development & Web Design',
  'Graphic Design & Branding',
  'Android App Development',
  'WordPress Website Development',
  'Digital Marketing & Social Ads',
  'Brand Identity & Logo Design',
  'Data Entry & Management',
  'Search Engine Optimization (SEO)',
  'Other / Custom Project',
];

const budgetRanges = [
  '₹5,000 - ₹15,000',
  '₹15,000 - ₹30,000',
  '₹30,000 - ₹60,000',
  '₹60,000+',
  'Custom / Discuss on Call',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    budget: budgetRanges[0],
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct a formatted WhatsApp message
    const msg = `*New Project Inquiry — Digital Barpeta*\n\n*Name:* ${formData.name}\n*Business:* ${
      formData.businessName || 'N/A'
    }\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Service:* ${
      formData.service
    }\n*Budget:* ${formData.budget}\n\n*Project Details:*\n${formData.details}`;

    // Open WhatsApp directly with inquiry details
    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Digital Barpeta',
    description:
      'Contact Digital Barpeta for online website development, graphic design, Android apps, and digital marketing inquiries.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.brandName,
      url: SITE_URL,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      areaServed: 'Barpeta, Assam, India',
    },
  };

  return (
    <main className="min-h-screen bg-background text-white relative selection:bg-brand-green/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ParticleBackground />
      <Navbar />

      <div className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-8">
          <Link href="/" className="hover:text-brand-green transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-brand-green font-bold">CONTACT &amp; QUOTE</span>
        </nav>

        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="START YOUR PROJECT WITH DIGITAL BARPETA"
          subtitle="We provide 100% online services to clients in Barpeta, Assam, and nationwide. Tell us about your goals or reach us directly on WhatsApp."
          align="center"
        />

        {/* Main Grid: Contact Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-16">
          
          {/* Left Column: Direct Reach & Online Model Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 100% Online Notice */}
            <div className="p-6 rounded-3xl bg-brand-green/10 border border-brand-green/30 shadow-glow-green">
              <div className="flex items-center gap-2 text-brand-green text-xs font-mono font-bold mb-2">
                <Globe2 className="w-4 h-4" />
                <span>100% ONLINE SERVICE MODEL</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Digital Barpeta operates entirely online from Barpeta, Assam. All consultations, project milestones, designs, and staging previews are conducted remotely via WhatsApp, phone, email, and virtual meetings.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Digital Barpeta, I would like to discuss a project.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-dark-green/70 border border-white/10 hover:border-brand-green/40 transition-all block group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase block">FASTEST RESPONSE</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-green transition-colors">
                      WhatsApp: {siteConfig.contact.displayWhatsapp}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">Click to chat with our team instantly</p>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="p-5 rounded-2xl bg-dark-green/70 border border-white/10 hover:border-brand-green/40 transition-all block group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase block">DIRECT PHONE</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-blue transition-colors">
                      Call: {siteConfig.contact.displayPhone}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">Available Mon - Sat, 9 AM - 7 PM</p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-5 rounded-2xl bg-dark-green/70 border border-white/10 hover:border-brand-green/40 transition-all block group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase block">OFFICIAL EMAIL</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-purple transition-colors truncate">
                      {siteConfig.contact.email}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">Send detailed RFPs, specs, and briefs</p>
                  </div>
                </div>
              </a>

            </div>

            {/* Working Hours */}
            <div className="p-4 rounded-2xl bg-dark-green/40 border border-white/5 flex items-center gap-3 text-xs text-brand-muted font-mono">
              <Clock className="w-4 h-4 text-brand-green" />
              <span>{siteConfig.contact.workingHours}</span>
            </div>

          </div>

          {/* Right Column: Project Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-brand-green/30 shadow-glass-card">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-green/20 border border-brand-green text-brand-green flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Inquiry Initiated!</h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto">
                    Thank you! Your project details have been forwarded to our WhatsApp desk. If WhatsApp did not open automatically, please click below.
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 font-bold inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Directly</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 text-brand-green text-xs font-mono font-bold mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>ONLINE PROJECT INTAKE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="intake-name" className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="intake-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Das"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="intake-business" className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Business / Organization Name
                      </label>
                      <input
                        id="intake-business"
                        type="text"
                        placeholder="e.g. Assam Retail Store"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="intake-email" className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="intake-email"
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="intake-phone" className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="intake-phone"
                        type="tel"
                        placeholder="+91 93941 95533"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="intake-service" className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Primary Service Interest *
                      </label>
                      <select
                        id="intake-service"
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
                      <label htmlFor="intake-budget" className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        id="intake-budget"
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
                    <label htmlFor="intake-details" className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Project Details &amp; Requirements *
                    </label>
                    <textarea
                      id="intake-details"
                      rows={4}
                      required
                      placeholder="Describe what you want to build, existing website URLs, key features, target deadline, etc."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-green/70 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-xs sm:text-sm uppercase tracking-wider py-4 font-bold shadow-glow-green flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INQUIRY &amp; CONNECT ON WHATSAPP</span>
                  </button>

                  <p className="text-[11px] text-brand-muted text-center">
                    🔒 We respect your privacy. Your information is used strictly to discuss your project requirements.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
