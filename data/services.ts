export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  features: string[];
  fullDescription: string;
  deliverables: string[];
  methodology: { step: string; title: string; desc: string }[];
  cta: string;
  icon: string;
  companionType: 'seo' | 'web' | 'ai' | 'app' | 'branding' | 'marketing' | 'optimization' | 'maintenance';
  accentColor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'seo',
    slug: 'seo',
    number: '01',
    title: 'SEO & SEARCH GROWTH',
    shortDescription:
      'Improve your online visibility and attract the right audience through sustainable search strategies.',
    features: [
      'Technical SEO',
      'Keyword Strategy',
      'On-Page SEO',
      'Local SEO',
      'SEO Audits',
    ],
    fullDescription:
      'Our search engine optimization strategies are engineered to help your business gain authority, index flawlessly across search engines, and dominate search results for high-intent customer queries.',
    deliverables: [
      'Comprehensive Website Audit & Crawl Analysis',
      'High-Intent Keyword Map & Content Roadmap',
      'On-Page Metadata, Schema & Semantic Hierarchy',
      'Google Business Profile & Local Map Optimization',
      'Core Web Vitals & Technical Speed Tuning',
    ],
    methodology: [
      { step: '01', title: 'Audit & Index Discovery', desc: 'Inspect crawl anomalies, server errors, and indexation blockers.' },
      { step: '02', title: 'Keyword Architecture', desc: 'Map relevant, high-converting queries to dedicated landing pages.' },
      { step: '03', title: 'Technical & On-Page Execution', desc: 'Implement structured data, clean markup, and optimized copy.' },
      { step: '04', title: 'Authority & Search Monitoring', desc: 'Track organic position growth and refine search visibility.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'Search',
    companionType: 'seo',
    accentColor: '#10B981',
  },
  {
    id: 'web-development',
    slug: 'web-development',
    number: '02',
    title: 'WEB DESIGN & DEVELOPMENT',
    shortDescription:
      'Fast, responsive and conversion-focused websites designed around your brand and business goals.',
    features: [
      'UI/UX Design',
      'Business Websites',
      'Landing Pages',
      'WordPress',
      'Performance Optimization',
    ],
    fullDescription:
      'We engineer bespoke web applications and high-converting business websites with ultra-fast loading speeds, sleek dark-mode aesthetics, fluid mobile responsiveness, and clean modern code architecture.',
    deliverables: [
      'Bespoke Visual UI/UX & Responsive Layouts',
      'Fast-Loading Page Architecture',
      'Dynamic CMS Integration (Next.js / WordPress)',
      'Conversion-Optimized Inquiry Funnels & Forms',
      'Cross-Browser & Multi-Device Quality Assurance',
    ],
    methodology: [
      { step: '01', title: 'Wireframe & Architecture', desc: 'Define page structure, conversion paths, and user flows.' },
      { step: '02', title: 'UI Design & Prototyping', desc: 'Craft modern typography, glassmorphism tokens, and responsive UI.' },
      { step: '03', title: 'Full-Stack Development', desc: 'Write clean, accessible, and high-performance production code.' },
      { step: '04', title: 'Launch & Lighthouse Audit', desc: 'Optimize Core Web Vitals and deploy to global edge CDNs.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'Globe',
    companionType: 'web',
    accentColor: '#38BDF8',
  },
  {
    id: 'ai-marketing',
    slug: 'ai-marketing',
    number: '03',
    title: 'AI MARKETING',
    shortDescription:
      'Use practical AI-powered workflows to improve marketing, content and customer engagement.',
    features: [
      'AI Content Systems',
      'Marketing Automation',
      'AI Workflows',
      'Chatbot Integration',
      'Campaign Optimization',
    ],
    fullDescription:
      'Integrate intelligent AI workflows into your marketing pipeline. Automate lead qualification, generate high-quality localized content, deploy 24/7 client chatbots, and optimize campaign performance.',
    deliverables: [
      'Automated Lead Triage & Routing Workflows',
      'Custom 24/7 AI Customer Support Chatbots',
      'Structured Multi-Channel AI Content Workflows',
      'Predictive Campaign Optimization & Analytics',
      'CRM Integration & Automated Follow-Up Sequences',
    ],
    methodology: [
      { step: '01', title: 'Workflow Analysis', desc: 'Identify marketing bottlenecks and repetitive manual processes.' },
      { step: '02', title: 'Pipeline Architecture', desc: 'Design intelligent automation triggers and AI prompt frameworks.' },
      { step: '03', title: 'Integration & Testing', desc: 'Connect chatbots, CRM databases, and messaging channels.' },
      { step: '04', title: 'Deployment & Monitoring', desc: 'Track customer engagement and optimize automation rules.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'Bot',
    companionType: 'ai',
    accentColor: '#8B5CF6',
  },
  {
    id: 'software-app-development',
    slug: 'software-app-development',
    number: '04',
    title: 'SOFTWARE & APP DEVELOPMENT',
    shortDescription:
      'Custom digital products built for your specific business needs.',
    features: [
      'Web Applications',
      'Android Apps',
      'Business Software',
      'API Integration',
      'Database Systems',
    ],
    fullDescription:
      'We design and build robust custom software platforms, Android mobile apps, and administrative dashboards tailored to streamline your business operations and delight your users.',
    deliverables: [
      'Scalable Web & Native Mobile Architecture',
      'Custom Relational & Real-Time Database Schemas',
      'Secure REST & GraphQL API Endpoints',
      'Administrative Portals & Real-Time Dashboards',
      'Automated Testing & Secure Deployment Pipelines',
    ],
    methodology: [
      { step: '01', title: 'Requirements & Scope', desc: 'Map feature specifications, database entities, and user roles.' },
      { step: '02', title: 'System Architecture', desc: 'Architect secure databases, API layers, and frontend interfaces.' },
      { step: '03', title: 'Agile Sprint Coding', desc: 'Build core features with iterative testing and continuous integration.' },
      { step: '04', title: 'Production Rollout', desc: 'Deploy on scalable cloud infrastructure with monitoring telemetry.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'Smartphone',
    companionType: 'app',
    accentColor: '#10B981',
  },
  {
    id: 'logo-branding',
    slug: 'logo-branding',
    number: '05',
    title: 'LOGO & BRAND DESIGN',
    shortDescription:
      'Build a memorable visual identity that makes your business recognizable.',
    features: [
      'Logo Design',
      'Brand Identity',
      'Business Cards',
      'Social Media Design',
      'Marketing Materials',
    ],
    fullDescription:
      'A distinctive visual identity sets you apart. We craft iconic vector logo marks, cohesive color systems, typographic hierarchies, and brand kits designed to command trust and prestige.',
    deliverables: [
      'Primary, Secondary & Monogram Vector Logo Assets',
      'Comprehensive Brand Style Guide & Color Palette',
      'Typography Selection & Hierarchy Rules',
      'Business Card & Stationery Print Collateral',
      'Social Media Profile & Banner Brand Kit',
    ],
    methodology: [
      { step: '01', title: 'Brand Discovery', desc: 'Analyze brand positioning, industry landscape, and core values.' },
      { step: '02', title: 'Concept Sketches', desc: 'Explore distinct visual metaphors and vector logo concepts.' },
      { step: '03', title: 'Vector Refinement', desc: 'Refine geometry, typography pairings, and chromatic harmony.' },
      { step: '04', title: 'Asset Kit Delivery', desc: 'Package print and web-ready SVG, PNG, PDF, and guidelines.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'Sparkles',
    companionType: 'branding',
    accentColor: '#F59E0B',
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    number: '06',
    title: 'DIGITAL MARKETING',
    shortDescription:
      'Reach the right customers through focused digital campaigns and content strategies.',
    features: [
      'Social Media Marketing',
      'Content Strategy',
      'Campaign Planning',
      'Lead Generation',
      'Analytics',
    ],
    fullDescription:
      'Connect with prospective clients across modern digital channels. We develop data-informed campaign blueprints, organic content calendars, and targeted outreach funnels.',
    deliverables: [
      'Multi-Channel Campaign Strategy & Budget Allocation',
      'Target Audience & Customer Persona Mapping',
      'Creative Ad Copywriting & Visual Asset Direction',
      'Conversion Landing Page Funnels',
      'Comprehensive Campaign Performance Analytics',
    ],
    methodology: [
      { step: '01', title: 'Market & Audience Audit', desc: 'Identify target customer segments, channels, and search intent.' },
      { step: '02', title: 'Campaign Blueprint', desc: 'Structure creative messaging, landing pages, and conversion offers.' },
      { step: '03', title: 'Execution & Launch', desc: 'Deploy coordinated campaigns with conversion pixel tracking.' },
      { step: '04', title: 'Optimization & Iteration', desc: 'Analyze cost per lead and double down on top-performing channels.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'TrendingUp',
    companionType: 'marketing',
    accentColor: '#EC4899',
  },
  {
    id: 'optimization',
    slug: 'optimization',
    number: '07',
    title: 'OPTIMIZATION & TUNE-UP',
    shortDescription:
      'Improve the speed, usability and technical performance of your existing digital presence.',
    features: [
      'Website Speed',
      'Technical Optimization',
      'SEO Tune-Up',
      'UX Improvements',
      'Performance Review',
    ],
    fullDescription:
      'Accelerate your existing website. We diagnose slow loading assets, eliminate blocking JavaScript, optimize Core Web Vitals, fix mobile UI friction, and enhance search engine compliance.',
    deliverables: [
      'Lighthouse & Core Web Vitals Diagnostic Report',
      'Asset Compression & Next-Gen Image Conversion',
      'Render-Blocking JavaScript & CSS Minification',
      'Mobile UX Touch Target & Layout Shift Fixes',
      'Server Caching & CDN Optimization',
    ],
    methodology: [
      { step: '01', title: 'Performance Benchmark', desc: 'Run deep synthetic and real-user speed diagnostics.' },
      { step: '02', title: 'Payload Minimization', desc: 'Prune unused libraries, optimize images, and streamline code.' },
      { step: '03', title: 'Code & Cache Tuning', desc: 'Configure browser caching, compression, and critical CSS rendering.' },
      { step: '04', title: 'Post-Optimization Audit', desc: 'Verify Core Web Vitals compliance and smooth user interaction.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'Gauge',
    companionType: 'optimization',
    accentColor: '#38BDF8',
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    number: '08',
    title: 'MAINTENANCE & SUPPORT',
    shortDescription:
      'Keep your website and digital systems secure, updated and running smoothly.',
    features: [
      'Website Updates',
      'Security Checks',
      'Backup',
      'Bug Fixes',
      'Technical Support',
    ],
    fullDescription:
      'Ensure uninterrupted digital operations. We provide continuous technical support, scheduled off-site backups, CMS and plugin security patches, uptime monitoring, and priority troubleshooting.',
    deliverables: [
      '24/7 Uptime & Performance Health Monitoring',
      'Automated Weekly Off-Site Cloud Backups',
      'Core, Theme & Security Patch Management',
      'Malware Scanning & Vulnerability Remediation',
      'Direct Developer Support & Rapid Bug Resolution',
    ],
    methodology: [
      { step: '01', title: 'Onboarding & Backup Setup', desc: 'Establish automated snapshots and baseline security auditing.' },
      { step: '02', title: 'Proactive Monitoring', desc: 'Track uptime, SSL validity, and performance anomalies 24/7.' },
      { step: '03', title: 'Scheduled Maintenance', desc: 'Safely test and apply software and security updates in staging.' },
      { step: '04', title: 'Priority Support Desk', desc: 'Resolve urgent issues, content updates, and technical queries.' },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'ShieldCheck',
    companionType: 'maintenance',
    accentColor: '#22C55E',
  },
];
