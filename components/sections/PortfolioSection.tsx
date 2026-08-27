'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, X, Eye } from 'lucide-react';
import { portfolioData, portfolioCategories, PortfolioCategory, PortfolioItem } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('ALL');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const filteredProjects =
    selectedCategory === 'ALL'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="relative py-24 bg-background border-t border-b border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="PORTFOLIO &amp; SHOWCASE"
          title="WORK THAT SPEAKS FOR ITSELF."
          subtitle="Explore our design systems, high-speed web platforms, AI pipelines, and organic search growth architectures."
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
                aria-label={`Filter by ${cat}`}
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
                {/* Project Image / Mockup Preview */}
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
                      className="p-3 rounded-full bg-brand-green text-black font-bold shadow-glow-green transform translate-y-2 group-hover:translate-y-0 transition-transform"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Eye className="w-5 h-5" />
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

                  {/* Tech Tags */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-zinc-400"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* "YOUR PROJECT COULD BE HERE" Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-3xl glass-panel border border-brand-green/30 text-center flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green mb-4">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl font-black text-white">YOUR PROJECT COULD BE HERE</h3>
          <p className="mt-2 text-sm text-brand-muted max-w-md">
            Ready to build a digital presence that dominates search results and turns visitors into loyal clients?
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="btn-secondary text-xs uppercase tracking-wider py-3.5 px-8 font-semibold"
            >
              EXPLORE ALL CASE STUDIES →
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 font-bold shadow-glow-green"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Project Details Modal */}
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
              className="relative z-10 w-full max-w-2xl bg-background-secondary border border-brand-green/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close project modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} - Showcase Project Detail`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 mb-2">
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

              <h3 className="text-2xl font-black text-white">{activeProject.title}</h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {activeProject.description}
              </p>

              <div className="mt-4 p-3 rounded-xl bg-dark-green border border-brand-green/30 text-xs text-brand-green font-semibold">
                ✨ Key Result: {activeProject.results}
              </div>

              <div className="mt-4 space-y-1.5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Technical Architecture Highlights:
                </h4>
                {activeProject.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="btn-secondary text-xs py-2 px-6"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
