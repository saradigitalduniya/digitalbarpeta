import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Sparkles, Search, Compass, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { siteConfig } from '@/data/config';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-white flex flex-col justify-between overflow-x-hidden relative selection:bg-brand-green/30 selection:text-white">
      <ParticleBackground />
      <Navbar />

      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[75vh]">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[170px] pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs uppercase tracking-widest mb-6 shadow-glow-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>404 • SYSTEM STATUS</span>
          </div>

          {/* Huge 404 Visual */}
          <div className="text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-brand-green/30 select-none">
            404
          </div>

          {/* Main H1 */}
          <h1 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-4">
            PAGE NOT FOUND
          </h1>

          <p className="mt-4 text-sm sm:text-base text-brand-muted max-w-lg mx-auto leading-relaxed">
            The page or resource you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          {/* Quick Helpful Nav Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-primary text-xs uppercase tracking-wider py-3.5 px-6 font-bold flex items-center gap-2 shadow-glow-green"
            >
              <Home className="w-4 h-4" />
              <span>BACK TO HOMEPAGE</span>
            </Link>

            <Link
              href="/services"
              className="btn-secondary text-xs uppercase tracking-wider py-3.5 px-6 font-semibold flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-brand-green" />
              <span>VIEW ALL SERVICES</span>
            </Link>
          </div>

          {/* Support prompt */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-brand-muted font-mono">
            <span>Need assistance?</span>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:underline flex items-center gap-1 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contact WhatsApp Desk</span>
            </a>
          </div>

        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
