'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowRight, BookOpen, Sparkles, ChevronLeft } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'ALL' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background text-white relative">
      <ParticleBackground />
      <Navbar />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-green mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>BACK TO HOMEPAGE</span>
        </Link>

        {/* Header */}
        <SectionHeading
          badge="INSIGHTS &amp; STRATEGY"
          title="DIGITAL GROWTH JOURNAL."
          subtitle="Actionable perspectives on modern web engineering, organic search domination, AI automation, and high-impact brand strategy."
          align="center"
        />

        {/* Search & Category Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights by keyword, topic or tag..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-dark-green/70 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-green text-xs"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {blogCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-brand-green text-black shadow-glow-green scale-105'
                      : 'bg-dark-green/60 text-brand-muted hover:text-white border border-white/10 hover:border-brand-green/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="glass-panel rounded-3xl p-6 flex flex-col justify-between group glass-panel-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-brand-green/10 text-brand-green border border-brand-green/30">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-brand-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block group-hover:text-brand-green transition-colors">
                    <h3 className="text-xl font-black text-white group-hover:text-brand-green transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs text-brand-muted line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-zinc-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full bg-dark-green border border-brand-green/40 overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-none">{post.author.name}</p>
                      <p className="text-[10px] text-brand-muted font-mono">{post.date}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="p-2 rounded-full bg-white/5 text-brand-green hover:bg-brand-green hover:text-black transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 text-brand-muted">
            <BookOpen className="w-12 h-12 text-brand-green mx-auto mb-3 opacity-40" />
            <p className="text-sm">No articles found matching &ldquo;{searchQuery}&rdquo;</p>
          </div>
        )}

      </div>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
