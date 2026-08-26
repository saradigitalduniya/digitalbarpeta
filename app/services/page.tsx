import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';
import { SITE_URL } from '@/data/config';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Digital Services & Technology Solutions | Digital Barpeta',
  description:
    'Explore Digital Barpeta’s 8 primary digital agency services: SEO, web design, AI marketing, software development, branding, digital marketing, optimization, and maintenance.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/services`,
    title: 'Digital Services & Technology Solutions | Digital Barpeta',
    description:
      'Explore Digital Barpeta’s 8 primary digital agency services: SEO, web design, AI marketing, software development, branding, digital marketing, optimization, and maintenance.',
    siteName: 'Digital Barpeta',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Barpeta Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services & Technology Solutions | Digital Barpeta',
    description:
      'Explore Digital Barpeta’s 8 primary digital agency services: SEO, web design, AI marketing, software development, branding, digital marketing, optimization, and maintenance.',
    images: ['/og-image.png'],
  },
};

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital Barpeta Services',
  description:
    'Comprehensive digital agency services including SEO, Web Development, AI Marketing, Software Engineering, and Branding.',
  itemListElement: servicesData.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    description: service.shortDescription,
    url: `${SITE_URL}/services/${service.slug}`,
  })),
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col justify-between overflow-x-hidden selection:bg-brand-green/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Navbar />

      {/* Services Index Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-cyber-grid">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs uppercase tracking-widest mb-4 shadow-glow-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIMARY SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase">
            <span>DIGITAL SOLUTIONS</span>
            <span className="block text-gradient-green">BUILT TO GROW.</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            From search visibility to high-performance websites and digital products, Digital Barpeta builds technology that helps businesses move forward.
          </p>
        </div>
      </section>

      {/* 8 Services Grid */}
      <section className="py-16 bg-background-secondary/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-3xl bg-[#070b09]/90 border border-white/10 hover:border-brand-green/40 transition-all hover:-translate-y-1.5 flex flex-col justify-between group shadow-glass-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-brand-green">
                      {service.number}
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-white group-hover:text-brand-green transition-colors leading-snug mb-3">
                    {service.title}
                  </h2>

                  <p className="text-xs text-brand-muted leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-white/5 space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-green hover:text-white transition-colors py-2.5 px-3 rounded-xl bg-brand-green/5 hover:bg-brand-green/15 border border-brand-green/20 group/btn"
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
