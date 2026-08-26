import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Compass,
  MessageCircle,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { siteConfig, SITE_URL } from '@/data/config';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Digital Barpeta',
    };
  }

  const title = `${service.title} | Digital Barpeta`;
  const description = service.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: 'Digital Barpeta',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Digital Barpeta`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.fullDescription,
        url: `${SITE_URL}/services/${service.slug}`,
        provider: {
          '@type': 'Organization',
          name: siteConfig.brandName,
          url: SITE_URL,
          logo: `${SITE_URL}/logo/digital_barpeta_logo.png`,
        },
        serviceType: service.title,
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Assam, India',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${SITE_URL}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `${SITE_URL}/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col justify-between overflow-x-hidden selection:bg-brand-green/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* Hero Header for Service Detail */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-cyber-grid">
        {/* Ambient background glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-8">
            <Link href="/" className="hover:text-brand-green transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-green transition-colors">
              SERVICES
            </Link>
            <span>/</span>
            <span className="text-brand-green font-bold">{service.number}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Service Number & Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs uppercase tracking-widest mb-6 shadow-glow-green">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SERVICE {service.number} • DIGITAL BARPETA</span>
            </div>

            {/* Main Service H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase">
              {service.title}
            </h1>

            {/* Short Tagline */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-brand-muted leading-relaxed font-normal">
              {service.shortDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/#contact"
                className="btn-primary w-full sm:w-auto text-xs sm:text-sm uppercase tracking-wider py-4 px-8 font-bold shadow-glow-green flex items-center justify-center gap-2"
              >
                <span>GET A PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Digital Barpeta, I am interested in your ${service.title} service.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-xs sm:text-sm uppercase tracking-wider py-4 px-8 font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-brand-green" />
                <span>WHATSAPP INQUIRY</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content: Overview, Capabilities & Deliverables */}
      <section className="py-20 bg-background-secondary/80 border-t border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Overview & Methodology (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Comprehensive Overview */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-green" />
                  <span>Service Overview</span>
                </h2>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Methodology Roadmap */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-blue" />
                  <span>Execution Methodology</span>
                </h2>

                <div className="space-y-4">
                  {service.methodology.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-dark-green/70 border border-white/5 flex items-start gap-4 hover:border-brand-green/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green font-mono font-bold text-xs shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-xs text-brand-muted leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Capabilities & Key Deliverables Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6 sticky top-28">
              
              {/* Deliverables Card */}
              <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-brand-green/30 shadow-glow-green">
                <h2 className="text-lg font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-green" />
                  <span>What We Deliver</span>
                </h2>

                <ul className="space-y-3 mb-8">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Core Feature Tags */}
                <div className="pt-5 border-t border-white/10">
                  <span className="text-[10px] font-mono text-brand-muted uppercase block mb-3">
                    CORE CAPABILITIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3 py-1 rounded-full bg-dark-green border border-brand-green/30 text-brand-green text-xs font-mono font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="w-full btn-primary py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>START THIS SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Explore Other Services Grid */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-brand-green uppercase tracking-wider block mb-1">
                OTHER SOLUTIONS
              </span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                Explore More Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-green transition-colors"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.slug}`}
                className="p-6 rounded-2xl bg-dark-green/60 border border-white/10 hover:border-brand-green/40 transition-all hover:-translate-y-1 block group"
              >
                <span className="text-xs font-mono text-brand-green font-bold block mb-2">
                  {item.number}
                </span>
                <h3 className="text-base font-black text-white group-hover:text-brand-green transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">
                  {item.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-green font-bold">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Floating Action WhatsApp */}
      <WhatsAppButton />

      <Footer />
    </main>
  );
}
