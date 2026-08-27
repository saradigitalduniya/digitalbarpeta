import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  Code2,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react';
import { siteConfig, SITE_URL } from '@/data/config';
import { servicesData } from '@/data/services';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DigitalBarpetaCharacter } from '@/components/character/DigitalBarpetaCharacter';

export const metadata: Metadata = {
  title: 'About Digital Barpeta | Online Digital Agency in Assam',
  description:
    'Learn about Digital Barpeta — a 100% online digital agency from Barpeta, Assam delivering custom website development, graphic design, Android apps, and digital services.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE_URL}/about`,
    title: 'About Digital Barpeta | Online Digital Agency in Assam',
    description:
      'Learn about Digital Barpeta — a 100% online digital agency from Barpeta, Assam delivering custom website development, graphic design, Android apps, and digital services.',
    siteName: 'Digital Barpeta',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Digital Barpeta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Digital Barpeta | Online Digital Agency in Assam',
    description:
      'Learn about Digital Barpeta — a 100% online digital agency from Barpeta, Assam delivering custom website development, graphic design, Android apps, and digital services.',
    images: ['/og-image.png'],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Digital Barpeta',
  description:
    'Digital Barpeta is an online digital agency originating from Barpeta, Assam, India. We deliver website development, graphic design, Android apps, and branding services.',
  url: `${SITE_URL}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.brandName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/digital_barpeta_logo.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    areaServed: 'Barpeta, Assam, India',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-white relative selection:bg-brand-green/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
          <span className="text-brand-green font-bold">ABOUT DIGITAL BARPETA</span>
        </nav>

        {/* Section Heading */}
        <SectionHeading
          badge="ABOUT OUR AGENCY"
          title="WE BUILD DIGITAL SOLUTIONS FOR MODERN BUSINESSES."
          subtitle="Originating from Barpeta, Assam, Digital Barpeta operates 100% online to engineer fast websites, distinctive brand designs, Android apps, and sustainable digital strategies."
          align="center"
        />

        {/* Grid: Character Visual + Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16">
          
          {/* Mascot / Guide Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm glass-panel p-8 rounded-3xl border border-brand-green/30 shadow-glow-green text-center">
              <DigitalBarpetaCharacter size="lg" enableParallax={true} enableFloating={true} />
              
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs uppercase font-bold">
                  <span>100% ONLINE AGENCY</span>
                </div>
                <p className="text-xs text-brand-muted mt-2 font-mono">
                  Delivering digital excellence from Barpeta, Assam to clients anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Core Story & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs uppercase tracking-widest shadow-glow-green">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              A Modern, Online-First Digital Partner for Growing Enterprises.
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Digital Barpeta was founded with a clear objective: to make high-performance website development, custom graphic design, and modern digital marketing accessible, affordable, and practical for businesses in Barpeta, Assam, and across India.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We operate as a 100% online agency. By removing the overhead of physical walk-in retail offices, we pass the savings directly to our clients while providing faster turnarounds, seamless WhatsApp collaboration, and transparent project milestones.
            </p>

            {/* Core Values Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">100% Online Delivery</h3>
                  <p className="text-xs text-brand-muted mt-1">Direct communication via WhatsApp, phone, email, and live staging previews.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Truthful &amp; Transparent</h3>
                  <p className="text-xs text-brand-muted mt-1">Honest roadmaps, genuine deliverables, and zero hidden technical fees.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Speed &amp; Performance</h3>
                  <p className="text-xs text-brand-muted mt-1">Clean code and Core Web Vitals optimization for instant mobile loading.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-green/60 border border-white/5 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Regional Understanding</h3>
                  <p className="text-xs text-brand-muted mt-1">Deep familiarity with the business dynamics of Barpeta and Assam.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Services We Deliver */}
        <section className="my-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-brand-green uppercase tracking-wider block mb-1">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
              Full-Spectrum Online Services
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-2">
              Every service is delivered remotely with high standards of technical excellence and customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="p-6 rounded-2xl bg-dark-green/60 border border-white/10 hover:border-brand-green/40 transition-all hover:-translate-y-1 block group"
              >
                <span className="text-xs font-mono font-bold text-brand-green block mb-2">
                  {service.number}
                </span>
                <h3 className="text-base font-black text-white group-hover:text-brand-green transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed line-clamp-3 mb-4">
                  {service.shortDescription}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs text-brand-green font-bold">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Who We Serve */}
        <section className="my-20 p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Who We Work With
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              We partner with local retailers, healthcare clinics, schools, coaching institutes, contractors, wholesale distributors, startups, and professional consultants across Barpeta, Guwahati, and Assam seeking reliable digital solutions.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-dark-green border border-brand-green/30 text-xs font-mono text-brand-green">
                ✓ Local Retail &amp; Commerce
              </span>
              <span className="px-4 py-1.5 rounded-full bg-dark-green border border-brand-green/30 text-xs font-mono text-brand-green">
                ✓ Healthcare &amp; Clinics
              </span>
              <span className="px-4 py-1.5 rounded-full bg-dark-green border border-brand-green/30 text-xs font-mono text-brand-green">
                ✓ Education &amp; Coaching
              </span>
              <span className="px-4 py-1.5 rounded-full bg-dark-green border border-brand-green/30 text-xs font-mono text-brand-green">
                ✓ Startups &amp; Tech Ventures
              </span>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="text-center pt-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Ready to Discuss Your Project?</h2>
          <p className="mt-2 text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
            Get in touch with Digital Barpeta today. We reply promptly with clear roadmaps and transparent quotes.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 font-bold shadow-glow-green"
            >
              <span>CONTACT DIGITAL BARPETA</span>
              <ArrowRight className="w-4 h-4 ml-1.5 inline" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                'Hello Digital Barpeta, I would like to get a quote for a digital project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs uppercase tracking-wider py-3.5 px-8 font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-brand-green mr-1.5 inline" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
