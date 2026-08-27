import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronLeft, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { siteConfig, SITE_URL } from '@/data/config';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Digital Barpeta',
    };
  }

  const title = `${post.title} | Digital Barpeta`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      title,
      description,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: 'Digital Barpeta',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${post.title} - Digital Barpeta Blog`,
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

export default function SingleBlogPost({ params }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: '2026-02-01T00:00:00+05:30',
        dateModified: '2026-02-01T00:00:00+05:30',
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.brandName,
          url: SITE_URL,
          logo: `${SITE_URL}/logo/digital_barpeta_logo.png`,
        },
        image: `${SITE_URL}/og-image.png`,
        keywords: post.tags.join(', '),
        articleSection: post.category,
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
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${SITE_URL}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ParticleBackground />
      <Navbar />

      <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-green mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>BACK TO ALL ARTICLES</span>
        </Link>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-brand-green/10 text-brand-green border border-brand-green/30">
            {post.category}
          </span>
          <span className="text-xs font-mono text-brand-muted flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span className="text-xs font-mono text-brand-muted flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Excerpt Banner */}
        <div className="my-8 p-6 rounded-2xl bg-dark-green/60 border-l-4 border-brand-green text-sm sm:text-base text-zinc-300 italic leading-relaxed">
          &ldquo;{post.excerpt}&rdquo;
        </div>

        {/* Author Plaque */}
        <div className="flex items-center gap-4 py-4 border-y border-white/10 my-8">
          <div className="relative w-12 h-12 rounded-2xl bg-dark-green border border-brand-green/40 overflow-hidden shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-white">{post.author.name}</p>
            <p className="text-xs text-brand-muted font-mono">{post.author.role}</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-emerald max-w-none space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} className="text-2xl font-black text-white mt-8 mb-4 border-b border-white/10 pb-2">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={i} className="text-lg font-bold text-brand-green mt-6 mb-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            return (
              <p key={i} className="text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-dark-green/80 border border-brand-green/20 text-xs font-mono text-brand-green"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Article Footer CTA */}
        <div className="mt-16 glass-panel p-8 rounded-3xl border border-brand-green/30 text-center">
          <Sparkles className="w-8 h-8 text-brand-green mx-auto mb-3" />
          <h2 className="text-2xl font-black text-white">Ready to implement this strategy?</h2>
          <p className="mt-2 text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
            Our engineering and digital marketing specialists are ready to build and scale your tailored system.
          </p>
          <Link
            href="/#contact"
            className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 inline-flex items-center gap-2 mt-6 font-bold shadow-glow-green"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </article>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
