'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUp,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '@/data/config';
import { servicesData } from '@/data/services';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  return (
    <footer className="relative bg-black border-t border-brand-green/20 pt-16 pb-12 overflow-hidden text-zinc-400">
      {/* Background ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-green/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Digital Barpeta Home">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105">
                <Image
                  src="/logo/digital_barpeta_logo.png"
                  alt="Digital Barpeta - Digital Marketing & Technology Agency"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg font-black text-white tracking-wide group-hover:text-brand-green transition-colors leading-tight">
                  {siteConfig.brandName}
                </h3>
                <p className="text-[10px] font-mono font-bold text-brand-green tracking-widest uppercase">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            <p className="text-xs text-brand-muted max-w-sm leading-relaxed">
              100% online digital agency originating from Barpeta, Assam. We engineer high-speed business websites, WordPress portals, Android apps, graphic designs, and digital marketing strategies.
            </p>

            {/* Direct Official Contact Summary */}
            <div className="pt-2 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>Barpeta, Assam, India (100% Online Services)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-green transition-colors font-mono">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-green transition-colors font-mono">
                  {siteConfig.contact.displayPhone}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram - @${siteConfig.socialLinks.instagram.username}`}
                title={`@${siteConfig.socialLinks.instagram.username}`}
                className="w-9 h-9 rounded-xl bg-dark-green border border-white/10 hover:border-brand-green flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook - ${siteConfig.socialLinks.facebook.name}`}
                title={siteConfig.socialLinks.facebook.name}
                className="w-9 h-9 rounded-xl bg-dark-green border border-white/10 hover:border-brand-green flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-dark-green border border-white/10 hover:border-brand-green flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="hover:text-brand-green transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-brand-green transition-colors">
                  About Digital Barpeta
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-green transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-green transition-colors">
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-brand-green transition-colors">
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-green transition-colors">
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-green transition-colors">
                  Contact &amp; Quotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & WhatsApp Desk (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              DIRECT DESK
            </h4>
            <p className="text-xs text-brand-muted">
              Get in touch directly with our technology team for fast quotes and project consultations.
            </p>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[10px] py-2 px-3 flex items-center gap-1.5 w-fit font-bold"
                aria-label="Contact WhatsApp Desk"
              >
                <MessageCircle className="w-3.5 h-3.5 text-brand-green" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; 2026 {siteConfig.brandName}. All rights reserved. • Barpeta, Assam, India
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-brand-green transition-colors"
              aria-label="Scroll back to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
