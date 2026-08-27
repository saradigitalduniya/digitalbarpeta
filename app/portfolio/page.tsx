'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, X, Eye, ArrowRight, FolderGit2, Layers, Cpu } from 'lucide-react';
import { portfolioData, portfolioCategories, PortfolioCategory, PortfolioItem } from '@/data/portfolio';
import { siteConfig, SITE_URL } from '@/data/config';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('ALL');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const filteredProjects =
    selectedCategory === 'ALL'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Digital Barpeta Project Portfolio & Case Studies',
    description:
      'Verified showcase of website development, WordPress portals, Android mobile apps, graphic design, and branding projects by Digital Barpeta.',
    url: `${SITE_URL}/portfolio`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: portfolioData.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-background text-white relative selection:bg-brand-green/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
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
          <span className="text-brand-green font-bold">PORTFOLIO &amp; SHOWCASE</span>
        </nav>

        {/* Section Heading */}
        <SectionHeading
          badge="PORTFOLIO &amp; CASE STUDIES"
          title="PROVEN WORK. MEASURABLE RESULTS."
          subtitle="Explore our design systems, high-speed web platforms, WordPress CMS portals, Android mobile utilities, and digital growth architectures."
          align="center"
        />

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-green text-black shadow-glow-green scale-105'
                    : 'bg-dark-green/60 text-brand-muted hover:text-white border border-white/10 hover:border-brand-green/40'
                }`}
                aria-label={`Filter portfolio by ${cat}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-3xl overflow-hidden group glass-panel-hover flex flex-col justify-between"
              >
                {/* Project Image Preview */}
                <div
                  className="relative w-full h-56 bg-background-secondary overflow-hidden cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.categoryLabel} Project Showcase`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="px-4 py-2 rounded-full bg-brand-green text-black text-xs font-bold shadow-glow-green transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-1.5"
                      aria-label={`View Case Study for ${project.title}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </button>
                  </div>

                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md"
                    style={{
                      backgroundColor: `${project.accentColor}25`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}50`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-brand-muted uppercase">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white group-hover:text-brand-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Results Callout */}
                    <div className="mt-4 p-2.5 rounded-xl bg-dark-green/60 border border-brand-green/20 text-xs text-brand-green font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 text-brand-green-bright" />
                      <span className="truncate">{project.results}</span>
                    </div>
                  </div>

                  {/* Tech Tags & CTA Link */}
                  <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technology.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-zinc-400"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-xs font-bold text-brand-green hover:underline inline-flex items-center gap-1"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        href={`/services/${project.serviceSlug}`}
                        className="text-[11px] font-mono text-brand-muted hover:text-white transition-colors"
                      >
                        Service Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-12 rounded-3xl glass-panel border border-brand-green/30 text-center flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green mb-4">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">START YOUR PROJECT WITH DIGITAL BARPETA</h3>
          <p className="mt-2 text-xs sm:text-sm text-brand-muted max-w-lg">
            Whether you need a bespoke business website, WordPress CMS, Android mobile application, or distinctive graphic branding, we deliver high-performance digital solutions online.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 font-bold shadow-glow-green"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-1.5 inline" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                'Hello Digital Barpeta, I reviewed your portfolio and would like to discuss a project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs uppercase tracking-wider py-3.5 px-8 font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background-secondary border border-brand-green/30 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close case study modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase"
                  style={{
                    backgroundColor: `${activeProject.accentColor}25`,
                    color: activeProject.accentColor,
                  }}
                >
                  {activeProject.categoryLabel}
                </span>
                <span className="text-xs text-brand-muted font-mono">
                  {activeProject.client}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">{activeProject.title}</h2>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {activeProject.description}
              </p>

              {/* Case Study Structured Breakdown */}
              <div className="mt-6 space-y-6 pt-6 border-t border-white/10">
                {/* 1. Client Need */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>The Challenge &amp; Need:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-dark-green/40 p-4 rounded-xl border border-white/5">
                    {activeProject.caseStudy.clientNeed}
                  </p>
                </div>

                {/* 2. What Digital Barpeta Did */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-green font-bold mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>What Digital Barpeta Did:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-dark-green/40 p-4 rounded-xl border border-white/5">
                    {activeProject.caseStudy.whatDigitalBarpetaDid}
                  </p>
                </div>

                {/* 3. Execution Process */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-purple font-bold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Execution Process Steps:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.caseStudy.process.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-green/50 border border-white/5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Final Outcome */}
                <div className="p-4 rounded-xl bg-brand-green/10 border border-brand-green/30">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-green font-bold mb-1">
                    Key Outcome &amp; Value:
                  </h4>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {activeProject.caseStudy.outcome}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={`/services/${activeProject.serviceSlug}`}
                  className="text-xs text-brand-green font-mono hover:underline flex items-center gap-1"
                >
                  <span>Explore {activeProject.categoryLabel} Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="btn-secondary text-xs py-2.5 px-5"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact"
                    className="btn-primary text-xs py-2.5 px-6 font-bold shadow-glow-green"
                  >
                    Get a Quote for Similar Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
