export interface PortfolioItem {
  id: string;
  title: string;
  category: 'WEBSITES' | 'SEO' | 'BRANDING' | 'APPS' | 'MARKETING';
  categoryLabel: string;
  description: string;
  client: string;
  technology: string[];
  results: string;
  image: string;
  accentColor: string;
  demoUrl?: string;
  highlights: string[];
}

export const portfolioCategories = [
  'ALL',
  'WEBSITES',
  'SEO',
  'BRANDING',
  'APPS',
  'MARKETING',
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

// IMPORTANT:
// DO NOT INVENT REAL CLIENTS OR FAKE RESULTS.
// These are clean showcase demo templates and editable structural placeholders for verified Digital Barpeta projects.
export const portfolioData: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Modern E-Commerce Storefront',
    category: 'WEBSITES',
    categoryLabel: 'Web Design & Development',
    description: 'High-speed headless commerce architecture with instant catalog filtering, mobile-first checkout, and global CDN delivery.',
    client: 'E-Commerce Showcase Prototype',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
    results: 'Fast-loading page rendering & optimized checkout flow',
    image: '/images/portfolio-ecommerce.svg',
    accentColor: '#10B981',
    demoUrl: '#',
    highlights: ['Optimized Core Web Vitals', 'Mobile-first micro-interactions', 'Global edge caching'],
  },
  {
    id: 'project-2',
    title: 'Local Search & Map Pack Authority',
    category: 'SEO',
    categoryLabel: 'SEO & Search Growth',
    description: 'Comprehensive technical and local SEO roadmap targeting high-intent geographical keywords and citation building.',
    client: 'Local Business Showcase',
    technology: ['Technical SEO', 'Schema Markup', 'Google Business Profile', 'Core Web Vitals'],
    results: 'Structured local presence and Google Maps optimization',
    image: '/images/portfolio-seo.svg',
    accentColor: '#38BDF8',
    demoUrl: '#',
    highlights: ['Zero crawl errors', 'Rich snippets enabled', 'Local map citations'],
  },
  {
    id: 'project-3',
    title: 'Futuristic Identity & Design System',
    category: 'BRANDING',
    categoryLabel: 'Logo & Brand Design',
    description: 'End-to-end visual identity system including logo design, color harmony system, typographic hierarchy, and social brand kit.',
    client: 'Technology Venture Concept',
    technology: ['Vector Design', 'Brand Architecture', 'Figma', 'Typography Tokens'],
    results: 'Distinctive visual language and comprehensive brand guidelines',
    image: '/images/portfolio-branding.svg',
    accentColor: '#8B5CF6',
    demoUrl: '#',
    highlights: ['Master vector logo files', 'Social media kit', 'Typography rules'],
  },
  {
    id: 'project-4',
    title: 'Service Booking & Admin Dashboard',
    category: 'APPS',
    categoryLabel: 'Software & App Development',
    description: 'Scalable application architecture with real-time schedule management, client booking, and administrative telemetry.',
    client: 'Services Platform Concept',
    technology: ['React Native', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS'],
    results: 'Synchronized real-time scheduling and admin controls',
    image: '/images/portfolio-app.svg',
    accentColor: '#10B981',
    demoUrl: '#',
    highlights: ['Live status updates', 'Cross-platform layout', 'Automated notifications'],
  },
  {
    id: 'project-5',
    title: 'AI Marketing & Lead Pipeline',
    category: 'MARKETING',
    categoryLabel: 'AI Marketing & Growth',
    description: 'Intelligent multi-stage customer acquisition funnel with automated lead triage and connected CRM workflows.',
    client: 'Growth Marketing Prototype',
    technology: ['AI Pipelines', 'CRM Automation', 'Campaign Funnels', 'Workflow Sync'],
    results: 'Automated 24/7 inquiry routing and multi-channel attribution',
    image: '/images/portfolio-marketing.svg',
    accentColor: '#EC4899',
    demoUrl: '#',
    highlights: ['24/7 Automated response', 'Multi-channel attribution', 'Custom CRM sync'],
  },
  {
    id: 'project-6',
    title: 'Enterprise Performance Tune-Up',
    category: 'WEBSITES',
    categoryLabel: 'Optimization & Tune-Up',
    description: 'Performance engineering audit, script payload reduction, responsive image optimization, and technical SEO hygiene.',
    client: 'Enterprise Portal Concept',
    technology: ['Next.js', 'Image Optimization', 'Asset Pipelining', 'Service Workers'],
    results: 'Clean Core Web Vitals and streamlined asset payload',
    image: '/images/portfolio-optimization.svg',
    accentColor: '#F59E0B',
    demoUrl: '#',
    highlights: ['Core Web Vitals focused', 'Zero layout shift', 'Clean code structure'],
  },
];
