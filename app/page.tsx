import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { SeoAuditSection } from '@/components/sections/SeoAuditSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { faqData } from '@/data/faq';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-brand-green/30 selection:text-white">
      {/* FAQ Structured Data for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Interactive Particle Field */}
      <ParticleBackground />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Hero Section with 2.5D Depth & Character */}
      <HeroSection />

      {/* Section 01: Core Pillars (Strategy, Creativity, Tech, Growth) */}
      <IntroSection />

      {/* Section 02: 8 Core Services with Interactive Character Storytelling */}
      <ServicesSection />

      {/* Section 03: Why Digital Barpeta */}
      <WhyUsSection />

      {/* Section 04: Process Timeline */}
      <ProcessSection />

      {/* Section 05: Portfolio & Work Showcase */}
      <PortfolioSection />

      {/* Section 06: Measurable Impact & Verified Counters */}
      <ResultsSection />

      {/* Section 07: Target Industries */}
      <IndustriesSection />

      {/* Section 08: Pricing & Packages */}
      <PricingSection />

      {/* Section 09: Free SEO Audit Diagnostic Scanner */}
      <SeoAuditSection />

      {/* Section 10: About Brand & Story */}
      <AboutSection />

      {/* Section 11: FAQ Accordions */}
      <FaqSection />

      {/* Section 12: Project Intake & Contact */}
      <ContactSection />

      {/* Persistent Floating WhatsApp Quick-Chat Action */}
      <WhatsAppButton />

      {/* Agency Footer */}
      <Footer />
    </main>
  );
}
