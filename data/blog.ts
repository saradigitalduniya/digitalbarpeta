export interface BlogPost {
  slug: string;
  title: string;
  category: 'SEO' | 'Web Development' | 'AI' | 'Digital Marketing' | 'Business Growth' | 'Technology';
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export const blogCategories = [
  'ALL',
  'SEO',
  'Web Development',
  'AI',
  'Digital Marketing',
  'Business Growth',
  'Technology',
] as const;

// NOTE:
// Sample editorial articles clearly marked for easy CMS or Markdown migration.
export const blogPosts: BlogPost[] = [
  {
    slug: 'dominate-local-seo-2026-guide',
    title: 'How Local Businesses Can Dominate Search Rankings & Google Maps',
    category: 'SEO',
    excerpt: 'Discover actionable strategies to claim high-intent local keywords, optimize your Google Business Profile, and capture customers in your area.',
    date: 'February 2026',
    readTime: '6 min read',
    author: {
      name: 'Digital Barpeta Growth Team',
      role: 'Search Engine Specialists',
      avatar: '/character/digital_barpeta_character.png',
    },
    tags: ['Local SEO', 'Google Maps', 'Search Growth', 'Keywords'],
    content: `
## Why Local SEO is the Highest ROI Channel for Regional Businesses

When customers search for services in their city, they rarely browse past the Google Map 3-Pack. Ranking in the top three positions transforms your website into an automated inquiry engine.

### 1. Optimize Google Business Profile (GBP)
Ensure your primary category matches your highest volume keyword. Maintain consistent NAP (Name, Address, Phone) citations across directories, upload high-resolution photos weekly, and respond to every client review within 24 hours.

### 2. High-Intent Local Landing Pages
Create dedicated service-location landing pages with structured schema markup (\`LocalBusiness\`), embedded maps, customer testimonials, and localized FAQs.

### 3. Build Authentic Local Authority
Collaborate with local news, business chambers, and community organizations to build natural, high-trust local backlinks that Google values above generic directory spam.
    `,
  },
  {
    slug: 'speed-conversions-core-web-vitals',
    title: 'Why Website Speed is Your Biggest Conversion Driver',
    category: 'Web Development',
    excerpt: 'A 1-second delay in page load time reduces conversions by up to 20%. Learn how modern web architecture keeps your users engaged.',
    date: 'January 2026',
    readTime: '5 min read',
    author: {
      name: 'Engineering Team',
      role: 'Web & Performance Engineers',
      avatar: '/character/digital_barpeta_character.png',
    },
    tags: ['Performance', 'Core Web Vitals', 'Next.js', 'Conversions'],
    content: `
## The Anatomy of a Sub-Second Website

Modern consumers expect instant gratification. When a page takes longer than 2.5 seconds to load, bounce rates skyrocket.

### Core Web Vitals That Actually Matter
- **Largest Contentful Paint (LCP)**: Must trigger within 1.2s to prevent user abandonment.
- **Cumulative Layout Shift (CLS)**: Must be zero so content doesn't jump as ads or images load.
- **Interaction to Next Paint (INP)**: Ensure clicks feel instantaneous through lightweight JavaScript execution.

### Architectural Best Practices
We build on modern static and edge-rendered architectures like Next.js, eliminating bloated plugins, optimizing modern image formats (AVIF/WebP), and serving assets from global edge CDNs.
    `,
  },
  {
    slug: 'ai-marketing-workflows-for-small-teams',
    title: 'Practical AI Marketing Workflows That Scale Your Business',
    category: 'AI',
    excerpt: 'Move beyond basic ChatGPT prompts. Discover how automated AI content pipelines, 24/7 lead bots, and predictive analytics drive revenue.',
    date: 'February 2026',
    readTime: '7 min read',
    author: {
      name: 'AI Solutions Lab',
      role: 'Automation Architects',
      avatar: '/character/digital_barpeta_character.png',
    },
    tags: ['AI Marketing', 'Automation', 'Chatbots', 'Workflows'],
    content: `
## Intelligent Automation: The Unfair Advantage

AI in marketing isn't about spamming generic articles—it's about removing repetitive friction and delivering personalized user experiences at scale.

### 1. 24/7 Intelligent Lead Triage
Custom AI conversational agents qualify inbound visitors on your website, answer specific pricing questions, and book qualified meetings directly into your calendar.

### 2. Autonomous Content Repurposing
Transform one core video or case study into 10 multi-platform social posts, an email newsletter, and an SEO-optimized summary in minutes.

### 3. Predictive Ad Budget Optimization
Leverage AI algorithms to dynamically allocate paid ad spend to high-converting audiences and cut underperforming ad sets before budget is wasted.
    `,
  },
  {
    slug: 'building-a-memorable-brand-identity',
    title: 'Building a Futuristic Brand Identity That Commands Attention',
    category: 'Digital Marketing',
    excerpt: 'How modern typography, consistent visual language, and emotional resonance position your company as the obvious market leader.',
    date: 'December 2025',
    readTime: '4 min read',
    author: {
      name: 'Creative Studio',
      role: 'Brand Directors',
      avatar: '/character/digital_barpeta_character.png',
    },
    tags: ['Branding', 'Design Systems', 'Identity', 'Strategy'],
    content: `
## Perception is Reality in Modern Business

A generic logo and template website tell prospects that you offer a generic service. A distinctive, polished visual presence commands higher trust and premium pricing.

### The Foundation of Brand Dominance
1. **Clear Brand Positioning**: What makes your solution the only logical choice?
2. **Distinctive Visual Assets**: Bespoke typography, recognizable color accents, and signature design motifs.
3. **Omnichannel Consistency**: Delivering the exact same high-standard experience across your website, social channels, proposals, and customer communications.
    `,
  },
];
