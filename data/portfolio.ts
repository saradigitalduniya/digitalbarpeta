export interface CaseStudyData {
  clientNeed: string;
  whatDigitalBarpetaDid: string;
  process: string[];
  toolsUsed: string[];
  outcome: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'WEBSITES' | 'SEO' | 'BRANDING' | 'APPS' | 'MARKETING' | 'WORDPRESS' | 'DESIGN';
  categoryLabel: string;
  serviceSlug: string;
  description: string;
  client: string;
  technology: string[];
  results: string;
  image: string;
  accentColor: string;
  demoUrl?: string;
  highlights: string[];
  caseStudy: CaseStudyData;
}

export const portfolioCategories = [
  'ALL',
  'WEBSITES',
  'WORDPRESS',
  'DESIGN',
  'APPS',
  'BRANDING',
  'SEO',
  'MARKETING',
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

// Factual Project Showcases & Architecture Case Studies
export const portfolioData: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Modern Business Web Application',
    category: 'WEBSITES',
    categoryLabel: 'Website Development',
    serviceSlug: 'web-development',
    description: 'High-speed modern business web platform with instant page transitions, mobile-first responsive layouts, and integrated WhatsApp lead funnels.',
    client: 'Business Web Architecture Concept',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Edge'],
    results: 'Sub-second page loading speeds with 100% Core Web Vitals pass',
    image: '/images/portfolio-ecommerce.svg',
    accentColor: '#10B981',
    demoUrl: '#',
    highlights: ['Lighthouse 95+ Performance', 'Mobile-first UX hierarchy', 'Direct WhatsApp integration'],
    caseStudy: {
      clientNeed: 'A modern regional enterprise required a fast, clean website to replace an outdated site and convert mobile visitors into WhatsApp inquiries.',
      whatDigitalBarpetaDid: 'Engineered a bespoke Next.js web application with dark/light visual depth, responsive layouts, and optimized inquiry funnels.',
      process: ['Wireframe & Information Architecture', 'Mobile-First UI Design', 'Next.js Static Generation', 'Edge CDN Deployment'],
      toolsUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      outcome: 'Delivered an ultra-fast website loading in under 1.2s on regional 4G/5G mobile connections.',
    },
  },
  {
    id: 'project-2',
    title: 'Content CMS & Dynamic Portal',
    category: 'WORDPRESS',
    categoryLabel: 'WordPress Development',
    serviceSlug: 'wordpress',
    description: 'Custom WordPress business portal with intuitive block-editor management, secure plugin architecture, and automated daily backups.',
    client: 'Editorial & Business Portal Showcase',
    technology: ['WordPress', 'PHP', 'MySQL', 'Custom Theme', 'Security Hardening'],
    results: 'User-friendly admin publishing workflow with zero plugin bloat',
    image: '/images/portfolio-optimization.svg',
    accentColor: '#38BDF8',
    demoUrl: '#',
    highlights: ['Easy content editing', 'Automated cloud backups', 'Fast caching layer'],
    caseStudy: {
      clientNeed: 'A business needed a website where non-technical staff could publish weekly articles, update pricing, and upload product photos without developer assistance.',
      whatDigitalBarpetaDid: 'Developed a custom WordPress theme with streamlined admin controls, security hardening, and fast caching configurations.',
      process: ['CMS Requirement Analysis', 'Theme Configuration', 'Security & Caching Setup', 'Client Video Training'],
      toolsUsed: ['WordPress', 'PHP', 'MySQL', 'LiteSpeed Cache'],
      outcome: 'Empowered internal team to manage 100% of website content independently with zero technical hurdles.',
    },
  },
  {
    id: 'project-3',
    title: 'Vector Brand Identity & Logo System',
    category: 'BRANDING',
    categoryLabel: 'Brand Identity & Logo Design',
    serviceSlug: 'branding',
    description: 'Complete visual identity system including master vector logo marks, color harmony guidelines, typography hierarchy, and social stationery kits.',
    client: 'Brand Identity Project Concept',
    technology: ['Adobe Illustrator', 'Figma', 'Vector Geometry', 'Brand Guidelines'],
    results: 'Infinitely scalable vector assets and comprehensive brand guidelines',
    image: '/images/portfolio-branding.svg',
    accentColor: '#8B5CF6',
    demoUrl: '#',
    highlights: ['Master vector logo files', 'Social media brand kit', 'Typography rules'],
    caseStudy: {
      clientNeed: 'A newly launched venture needed a distinctive, professional brand mark that looked sharp on both mobile avatars and large physical signage.',
      whatDigitalBarpetaDid: 'Designed 3 original vector logo concepts, refined typography pairings, and packaged master AI, SVG, PNG, and PDF asset kits.',
      process: ['Brand Discovery', 'Geometric Vector Exploration', 'Color Contrast Testing', 'Brand Guidelines Delivery'],
      toolsUsed: ['Adobe Illustrator', 'Figma', 'Vector SVG'],
      outcome: 'Delivered an iconic visual identity that established immediate marketplace credibility.',
    },
  },
  {
    id: 'project-4',
    title: 'Promotional Graphics & Marketing Creatives',
    category: 'DESIGN',
    categoryLabel: 'Graphic Design Services',
    serviceSlug: 'graphic-design',
    description: 'High-resolution promotional social media ad sets, business flyers, and banner designs formatted for multi-channel distribution.',
    client: 'Commercial Marketing Creative Showcase',
    technology: ['Photoshop', 'Illustrator', 'Figma', 'CMYK Print Specs'],
    results: 'Cohesive, high-converting digital and print marketing collateral',
    image: '/images/portfolio-marketing.svg',
    accentColor: '#F59E0B',
    demoUrl: '#',
    highlights: ['Multi-size social banners', 'Print-ready CMYK PDFs', 'Fast 48h turnaround'],
    caseStudy: {
      clientNeed: 'A business needed high-impact promotional graphics for social media campaigns in both English and regional formats.',
      whatDigitalBarpetaDid: 'Created high-contrast digital banners and printable promotional flyers formatted for Facebook, Instagram, and WhatsApp distribution.',
      process: ['Creative Brief Intake', 'Layout & Typography Composition', 'Multi-Format Export', 'Quality Check'],
      toolsUsed: ['Photoshop', 'Illustrator', 'Figma'],
      outcome: 'Produced professional visual assets that increased social media campaign click-through rates.',
    },
  },
  {
    id: 'project-5',
    title: 'Android Business Utility & Management App',
    category: 'APPS',
    categoryLabel: 'Android App Development',
    serviceSlug: 'android-development',
    description: 'Touch-friendly Android application with cloud data synchronization, offline-first entry, and administrative record management.',
    client: 'Mobile Utility Application Concept',
    technology: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloud Sync'],
    results: 'Lightweight Android APK with responsive cloud database syncing',
    image: '/images/portfolio-app.svg',
    accentColor: '#10B981',
    demoUrl: '#',
    highlights: ['Offline-first caching', 'Touch-friendly mobile UX', 'Secure cloud database'],
    caseStudy: {
      clientNeed: 'A regional business required an Android utility application to record customer service inquiries and orders while staff were in the field.',
      whatDigitalBarpetaDid: 'Architected a lightweight Android application featuring offline data entry, push notifications, and automatic cloud database synchronization.',
      process: ['User Flow Architecture', 'Mobile UI Prototyping', 'API & Database Coding', 'APK Compilation & Testing'],
      toolsUsed: ['React Native', 'TypeScript', 'PostgreSQL', 'Node.js'],
      outcome: 'Streamlined field operations with zero data loss even during intermittent network connectivity.',
    },
  },
  {
    id: 'project-6',
    title: 'Technical SEO & Search Visibility Architecture',
    category: 'SEO',
    categoryLabel: 'Search Engine Optimization',
    serviceSlug: 'seo',
    description: 'Comprehensive technical SEO implementation, structured JSON-LD schema injection, keyword architecture, and Core Web Vitals speed tuning.',
    client: 'Search Engine Architecture Prototype',
    technology: ['Technical SEO', 'Schema.org JSON-LD', 'Google Search Console', 'Lighthouse'],
    results: 'Clean indexation status, rich snippet validation, and zero crawl blockers',
    image: '/images/portfolio-seo.svg',
    accentColor: '#38BDF8',
    demoUrl: '#',
    highlights: ['Valid Schema.org markup', 'Zero 404 crawl errors', 'Semantic HTML5 structure'],
    caseStudy: {
      clientNeed: 'A company website was not indexing properly on Google due to missing meta tags, broken canonicals, and duplicate URL structures.',
      whatDigitalBarpetaDid: 'Audited the site architecture, implemented structured JSON-LD schemas, fixed canonical headers, and optimized on-page semantic content.',
      process: ['Crawl & Index Audit', 'Schema.org Integration', 'Metadata & Heading Restructuring', 'Search Console Monitoring'],
      toolsUsed: ['Google Search Console', 'Schema Validator', 'Lighthouse'],
      outcome: 'Achieved 100% clean indexation with zero crawl errors and enabled rich search snippet features on Google.',
    },
  },
];
