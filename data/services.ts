export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  features: string[];
  fullDescription: string;
  benefits: string[];
  targetAudience: string[];
  deliverables: string[];
  methodology: { step: string; title: string; desc: string }[];
  faqs: ServiceFAQ[];
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
    title: 'SEO & Search Growth in Barpeta',
    shortDescription:
      'Improve your organic search rankings, Google Maps visibility, and attract qualified customer inquiries in Barpeta and across Assam.',
    features: [
      'Technical SEO Audits',
      'Local Keyword Strategy',
      'Google Maps 3-Pack Optimization',
      'On-Page Semantic Schema',
      'Organic Search Monitoring',
    ],
    fullDescription:
      'Our search engine optimization strategies are tailored for businesses in Barpeta, Assam, and regional markets seeking sustainable online discovery. We eliminate crawl blockers, structure on-page metadata, optimize Google Business Profiles, and position your brand at the top of high-intent search queries.',
    benefits: [
      'Capture ready-to-buy local customers searching for your services in Barpeta and Assam',
      'Build long-term organic authority without relying entirely on paid advertisements',
      'Improve website indexing speed and Core Web Vitals search compliance',
      'Stand out in Google Maps and local search pack rankings with synchronized citations',
    ],
    targetAudience: [
      'Local retail and service businesses in Barpeta and neighboring Assam districts',
      'Healthcare clinics, educational institutes, and professional firms',
      'Regional eCommerce brands wanting higher organic traffic',
      'Established businesses losing search visibility to local competitors',
    ],
    deliverables: [
      'Comprehensive Website Audit & Crawl Analysis',
      'High-Intent Keyword Map & Content Roadmap for Assam Markets',
      'On-Page Metadata, Schema & Semantic Hierarchy Implementation',
      'Google Business Profile & Local Map Optimization',
      'Monthly Search Position & Traffic Telemetry Reports',
    ],
    methodology: [
      { step: '01', title: 'Audit & Index Discovery', desc: 'Inspect crawl anomalies, server errors, schema gaps, and indexation blockers.' },
      { step: '02', title: 'Local Keyword Mapping', desc: 'Identify high-converting, location-specific queries relevant to Barpeta and regional customers.' },
      { step: '03', title: 'Technical & On-Page Execution', desc: 'Implement structured schema, clean semantic markup, fast load times, and optimized copy.' },
      { step: '04', title: 'Authority & Growth Tracking', desc: 'Track organic position climbs, monitor Google Maps citations, and continuously refine.' },
    ],
    faqs: [
      {
        question: 'How long does it take to see SEO results in Barpeta and Assam?',
        answer:
          'Local SEO and Google Maps optimizations often show measurable visibility improvements within 4 to 8 weeks. Broader competitive organic keyword rankings typically mature within 3 to 6 months as domain authority compounds.',
      },
      {
        question: 'What is the difference between Local SEO and Standard SEO?',
        answer:
          'Local SEO focuses on capturing geographically targeted searches (such as searches in Barpeta or Assam) through Google Business Profile optimization, local citations, and localized schema. Standard SEO targets national or global informational and transactional queries.',
      },
      {
        question: 'Do you provide ongoing monthly SEO maintenance?',
        answer:
          'Yes. We offer continuous SEO monitoring, technical health checks, keyword tracking, and monthly performance reports to ensure your rankings remain resilient against algorithm updates.',
      },
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
    title: 'Website Development & Web Design in Barpeta',
    shortDescription:
      'Fast, modern, and conversion-focused websites and WordPress solutions engineered for businesses in Barpeta, Assam and beyond.',
    features: [
      'Custom UI/UX Design',
      'Business Websites',
      'WordPress Development',
      'Next.js Web Applications',
      'Mobile-First Responsiveness',
    ],
    fullDescription:
      'We design and build bespoke business websites, eCommerce storefronts, and WordPress solutions that combine modern aesthetics with ultra-fast page speeds. Every website is engineered to look stunning on mobile phones, rank effectively on search engines, and guide visitors smoothly toward making an inquiry or purchase.',
    benefits: [
      'Establish a polished, credible corporate brand identity that wins customer trust immediately',
      'Lightning-fast page loading speeds that minimize bounce rates on mobile networks',
      'Full ownership of your content with easy-to-use WordPress or custom admin panels',
      'Built-in technical SEO foundations, schema markup, and conversion-optimized forms',
    ],
    targetAudience: [
      'Small and medium businesses in Barpeta needing their first professional website',
      'Companies with outdated websites looking for a modern, mobile-friendly redesign',
      'Contractors, doctors, consultants, and educational institutions in Assam',
      'Enterprises requiring custom web apps with specialized functional workflows',
    ],
    deliverables: [
      'Custom Visual UI/UX & Responsive Layouts for Mobile, Tablet, and Desktop',
      'Next.js or WordPress Development with Clean Modular Architecture',
      'Conversion-Optimized Contact Funnels, Inquiry Forms, and WhatsApp Integration',
      'Core Web Vitals Speed Tuning & SSL Security Configuration',
      'Complete Deployment on High-Speed Edge CDNs with Domain Setup',
    ],
    methodology: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'Define your business goals, target customer journey, and site architecture.' },
      { step: '02', title: 'UI Design & Prototyping', desc: 'Craft modern typography, glassmorphism tokens, and responsive layouts.' },
      { step: '03', title: 'Full-Stack Development', desc: 'Write clean, accessible, and high-performance production code with Next.js or WordPress.' },
      { step: '04', title: 'Testing & Launch', desc: 'Run cross-device QA, optimize Core Web Vitals, configure SSL, and deploy live.' },
    ],
    faqs: [
      {
        question: 'Which is better for my business: WordPress or Custom Next.js?',
        answer:
          'WordPress is excellent for content-heavy websites, blogs, and businesses that need frequent text updates without technical knowledge. Next.js is ideal for maximum speed, custom web applications, advanced security, and modern 2.5D interactive experiences.',
      },
      {
        question: 'Will my website work smoothly on all mobile devices?',
        answer:
          'Yes. We build with a strict mobile-first methodology, testing at 320px, 375px, 390px, 768px, and desktop widths to guarantee flawless responsiveness across all smartphones, tablets, and computers.',
      },
      {
        question: 'Can you help with domain registration and hosting setup?',
        answer:
          'Absolutely. We assist with domain connection, DNS configuration, SSL security certificates, and hosting deployment on reliable global infrastructure.',
      },
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
    title: 'AI Marketing & Intelligent Workflows',
    shortDescription:
      'Use practical AI-powered workflows, automated chatbots, and smart marketing systems to scale your business operations.',
    features: [
      'AI Content Pipelines',
      '24/7 Website Chatbots',
      'Lead Qualification Automation',
      'Marketing Automation',
      'Campaign Analytics',
    ],
    fullDescription:
      'Modern businesses can gain a significant competitive edge by integrating practical AI tools into their sales and marketing pipelines. We build automated customer lead triage systems, 24/7 intelligent web chatbots, personalized content repurposing engines, and smart marketing workflows that save hours of manual effort.',
    benefits: [
      'Engage website visitors 24/7 and capture qualified leads even outside business hours',
      'Automate repetitive customer inquiries and support questions instantly',
      'Speed up content generation and social media scheduling with custom AI workflows',
      'Reduce customer acquisition costs through data-driven campaign optimizations',
    ],
    targetAudience: [
      'Growing businesses seeking to automate customer inquiry handling',
      'Marketing teams wanting to scale content output without ballooning overhead',
      'Service providers needing automated appointment and consultation booking',
      'E-commerce brands looking for personalized product recommendation bots',
    ],
    deliverables: [
      'Custom 24/7 AI Customer Support & Lead Qualification Chatbots',
      'Automated Lead Triage & CRM Notification Integrations',
      'Multi-Channel AI Content Generation & Repurposing Workflows',
      'Campaign Performance Analytics & Automated Reporting Dashboards',
      'Team Training and Workflow Documentation for Easy Management',
    ],
    methodology: [
      { step: '01', title: 'Workflow Audit', desc: 'Identify operational bottlenecks and repetitive customer communication tasks.' },
      { step: '02', title: 'Pipeline Design', desc: 'Architect intelligent automation triggers, conversational scripts, and AI prompt models.' },
      { step: '03', title: 'Integration & Testing', desc: 'Connect chatbots, messaging channels (WhatsApp/Web), and CRM databases securely.' },
      { step: '04', title: 'Deployment & Iteration', desc: 'Launch live workflows, monitor engagement quality, and refine conversational accuracy.' },
    ],
    faqs: [
      {
        question: 'What can an AI chatbot do for my local business?',
        answer:
          'A custom AI chatbot can greet website visitors, answer common questions regarding pricing, services, and location, collect customer contact details, and forward qualified leads directly to your WhatsApp or email in real-time.',
      },
      {
        question: 'Is AI marketing suitable for small businesses in Assam?',
        answer:
          'Yes. AI automation is especially powerful for small teams because it handles lead capture and repetitive messaging without requiring full-time support staff, allowing you to focus on delivering your core services.',
      },
      {
        question: 'Is customer data kept secure when using AI workflows?',
        answer:
          'Yes. We adhere strictly to data privacy best practices, ensuring your business credentials, customer inquiries, and proprietary information remain protected.',
      },
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
    title: 'Android App Development & Custom Software in Barpeta',
    shortDescription:
      'Custom Android mobile applications, management software, and data entry systems built for regional and enterprise business needs.',
    features: [
      'Android App Development',
      'Business Software & Portals',
      'Database Architecture',
      'Data Entry & Processing Systems',
      'API Integrations',
    ],
    fullDescription:
      'We engineer native and cross-platform Android mobile applications, custom administrative dashboards, business operations software, and structured data entry systems for businesses in Barpeta and Assam. From customer-facing mobile apps to internal billing and inventory management tools, we build scalable software that powers daily operations.',
    benefits: [
      'Reach millions of smartphone users across Assam with dedicated Android applications',
      'Streamline internal business workflows, customer records, and inventory tracking',
      'Secure, reliable database management that prevents data loss and errors',
      'Custom feature sets built specifically around your unique operational rules',
    ],
    targetAudience: [
      'Retailers and distributors needing order booking and inventory tracking apps',
      'Educational institutions and coaching centers managing student records and fees',
      'Service businesses needing custom data entry, billing, or scheduling systems',
      'Startups building innovative digital products or mobile platforms',
    ],
    deliverables: [
      'Native / Cross-Platform Android Mobile Application Package (APK/AAB)',
      'Custom Web-Based Administrative Dashboard & Reporting Portal',
      'Secure Relational Database Architecture (PostgreSQL / MySQL / Supabase)',
      'Data Entry Interfaces with Validation & Export Capabilities',
      'Source Code Documentation, Security Configuration & Play Store Deployment Support',
    ],
    methodology: [
      { step: '01', title: 'Scope & User Flow Mapping', desc: 'Define functional requirements, database entities, and user access levels.' },
      { step: '02', title: 'Architecture & UI Prototyping', desc: 'Design mobile interface screens, database schemas, and API contracts.' },
      { step: '03', title: 'Sprint Development & Testing', desc: 'Build frontend and backend modules with continuous unit and integration testing.' },
      { step: '04', title: 'Deployment & Training', desc: 'Deploy cloud infrastructure, publish Android binaries, and train your administrative team.' },
    ],
    faqs: [
      {
        question: 'Do you help publish Android apps to Google Play Store?',
        answer:
          'Yes. We assist with Google Play Console account setup, app store listing assets, compliance checks, and publishing your application live for public download.',
      },
      {
        question: 'Can you build custom data entry and billing software for my shop or office in Barpeta?',
        answer:
          'Yes. We specialize in building lightweight, fast data entry and management systems with invoice generation, stock tracking, and secure daily backups.',
      },
      {
        question: 'What technologies do you use for app and software development?',
        answer:
          'We leverage modern, industry-standard technologies including React Native, Flutter, Next.js, Node.js, TypeScript, and secure PostgreSQL/MySQL databases.',
      },
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
    title: 'Graphic Design & Logo Branding in Barpeta',
    shortDescription:
      'Distinctive vector logo design, complete visual brand identity, and professional graphic design services for businesses in Barpeta and Assam.',
    features: [
      'Custom Vector Logo Design',
      'Brand Identity Systems',
      'Business Cards & Stationery',
      'Social Media Graphic Kits',
      'Marketing & Print Collateral',
    ],
    fullDescription:
      'A memorable brand identity is your company’s strongest visual asset. Our graphic designers craft bespoke vector logos, cohesive color systems, typography pairings, business stationery, and social media branding kits that command customer confidence and set your business apart in local and regional markets.',
    benefits: [
      'Build immediate credibility and look professional across all touchpoints',
      'Receive 100% original, scalable vector logo assets suitable for web and print',
      'Maintain unified visual consistency across social media, signage, and packaging',
      'Distinguish your business from generic competitors with bespoke aesthetic craft',
    ],
    targetAudience: [
      'New startups and local business launches in Barpeta looking for complete branding',
      'Established companies needing a modern logo refresh and professional identity',
      'Brands requiring monthly social media creatives, flyers, and banners',
      'Shops, restaurants, and clinics wanting high-quality print and digital branding',
    ],
    deliverables: [
      'Primary, Secondary & Monogram Vector Logo Assets (AI, SVG, PNG, PDF)',
      'Complete Brand Style Guide (Color Palette, Typography & Usage Rules)',
      'Print-Ready Business Card, Letterhead & Envelope Stationery Design',
      'Social Media Profile Graphics, Cover Banners & Post Templates',
      'Full Commercial Copyright Ownership on All Final Deliverables',
    ],
    methodology: [
      { step: '01', title: 'Brand Discovery', desc: 'Understand your brand values, target demographic, and industry landscape.' },
      { step: '02', title: 'Concept Sketches', desc: 'Develop distinct visual directions and creative vector concepts.' },
      { step: '03', title: 'Refinement & Typography', desc: 'Perfect geometry, fine-tune font pairings, and balance chromatic harmony.' },
      { step: '04', title: 'Asset Kit Delivery', desc: 'Export high-resolution vector and raster assets ready for both print and digital use.' },
    ],
    faqs: [
      {
        question: 'Will I own the full copyright to my logo design?',
        answer:
          'Yes. Upon project completion and final payment, you receive 100% full commercial copyright ownership of all customized logo files and branding assets.',
      },
      {
        question: 'In what file formats will I receive my logo and graphics?',
        answer:
          'You will receive vector formats (AI, EPS, SVG, PDF) that can scale infinitely without pixelation, as well as high-resolution PNG (transparent background) and JPG files for immediate web and social media use.',
      },
      {
        question: 'Do you also design promotional banners and social media posts?',
        answer:
          'Yes. We provide comprehensive graphic design services including promotional posters, digital ad banners, social media post templates, and print flyers.',
      },
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
    title: 'Digital Marketing & Social Media Services in Barpeta',
    shortDescription:
      'Targeted digital marketing campaigns, social media growth strategies, and lead generation for businesses in Barpeta and Assam.',
    features: [
      'Social Media Marketing',
      'Targeted Ad Campaigns',
      'Local Lead Generation',
      'Content Strategy & Planning',
      'Conversion Analytics',
    ],
    fullDescription:
      'Connect with prospective clients across modern digital channels. We develop data-informed campaign blueprints, organic social media content schedules, local ad campaigns, and targeted outreach funnels engineered to convert local and regional interest into real paying customers.',
    benefits: [
      'Generate high-quality customer inquiries directly via WhatsApp, phone, and website',
      'Build active brand engagement and local community following on social media',
      'Maximize return on ad spend (ROAS) through precise geographic and demographic targeting',
      'Gain clear visibility into campaign performance with transparent monthly metrics',
    ],
    targetAudience: [
      'Local service businesses looking to attract steady inbound customer inquiries',
      'Retail stores and showrooms in Assam wanting to drive local foot traffic',
      'Coaching centers, schools, and colleges running seasonal admission campaigns',
      'Regional eCommerce businesses aiming to scale online product orders',
    ],
    deliverables: [
      'Strategic Multi-Channel Digital Marketing & Budget Roadmap',
      'Custom Social Media Content Calendar & Creative Copywriting',
      'Targeted Meta (Facebook / Instagram) & Google Search Ad Setup',
      'Direct WhatsApp & Landing Page Inquiry Funnels',
      'Monthly Campaign Analytics, Lead Tracking & ROI Reporting',
    ],
    methodology: [
      { step: '01', title: 'Audience & Market Audit', desc: 'Identify target customer segments, high-intent channels, and competitor gaps in Assam.' },
      { step: '02', title: 'Campaign Blueprint', desc: 'Structure creative messaging, visual ad assets, and conversion inquiry landing pages.' },
      { step: '03', title: 'Launch & Ad Management', desc: 'Deploy targeted campaigns with pixel tracking, A/B testing, and budget optimization.' },
      { step: '04', title: 'Optimization & Scaling', desc: 'Analyze cost per lead and double down on the highest-converting creative and audiences.' },
    ],
    faqs: [
      {
        question: 'Which social media platforms should my business focus on in Assam?',
        answer:
          'For most consumer and local service businesses in Barpeta and Assam, Facebook, Instagram, and WhatsApp are the highest-converting platforms. For B2B firms and professional services, LinkedIn and Google Search Ads are also highly effective.',
      },
      {
        question: 'How do you track whether the marketing campaigns are working?',
        answer:
          'We measure real business metrics: number of phone calls, WhatsApp messages received, website form submissions, and cost per lead—rather than just superficial vanity impressions.',
      },
      {
        question: 'Can you handle both organic posting and paid advertising?',
        answer:
          'Yes. We provide complete end-to-end digital marketing management including daily/weekly organic content publishing as well as targeted paid advertising campaigns.',
      },
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
    title: 'Website Speed & Performance Optimization',
    shortDescription:
      'Accelerate your existing website, optimize Core Web Vitals, fix mobile UI friction, and enhance search engine compliance.',
    features: [
      'Core Web Vitals Optimization',
      'Mobile UX & Speed Tuning',
      'Asset Compression & Next-Gen Images',
      'Code Minification & Cleanup',
      'Server Caching & CDN Setup',
    ],
    fullDescription:
      'A slow website drives potential customers away and damages Google search rankings. We diagnose slow loading assets, eliminate blocking JavaScript, optimize Core Web Vitals (LCP, CLS, INP), fix mobile layout shifts, and accelerate load times across mobile and desktop connections.',
    benefits: [
      'Improve user engagement and reduce bounce rates by loading pages in under 2 seconds',
      'Boost search engine rankings with top-tier Google Core Web Vitals compliance',
      'Ensure smooth navigation for mobile users on standard 4G/5G regional networks',
      'Lower server bandwidth costs with modern image compression and edge caching',
    ],
    targetAudience: [
      'Businesses with slow-loading websites losing customers to competitors',
      'Websites failing Google Core Web Vitals diagnostic checks',
      'eCommerce stores where slow checkout speeds are decreasing sales conversions',
      'Companies wanting a comprehensive technical health check and speed tune-up',
    ],
    deliverables: [
      'Detailed Lighthouse & Core Web Vitals Diagnostic Audit Report',
      'Next-Gen Image Format Conversion (AVIF / WebP) & Payload Compression',
      'Elimination of Render-Blocking JavaScript & CSS Minification',
      'Mobile Touch Target & Cumulative Layout Shift (CLS) Corrections',
      'Global Edge CDN Configuration & Browser Caching Optimization',
    ],
    methodology: [
      { step: '01', title: 'Performance Diagnostic', desc: 'Conduct synthetic lab tests and real-user Core Web Vitals measurements.' },
      { step: '02', title: 'Asset & Script Minimization', desc: 'Compress media payloads, eliminate unused CSS/JS, and defer heavy scripts.' },
      { step: '03', title: 'Caching & Edge CDN', desc: 'Configure aggressive browser caching, gzip/brotli compression, and edge CDN delivery.' },
      { step: '04', title: 'Post-Optimization Audit', desc: 'Validate improved Lighthouse scores, fast LCP times, and responsive interactivity.' },
    ],
    faqs: [
      {
        question: 'Why does website speed matter for my business?',
        answer:
          'Studies show that every 1-second delay in page load time reduces conversions by up to 20%. Furthermore, Google officially uses page speed and Core Web Vitals as critical ranking signals in search results.',
      },
      {
        question: 'Can you optimize my existing website without rebuilding it from scratch?',
        answer:
          'Yes. In most cases, we can optimize your existing codebase, compress images, clean up render-blocking scripts, and configure CDN caching without needing a full rebuild.',
      },
      {
        question: 'What is a good Core Web Vitals score to aim for?',
        answer:
          'Google recommends an LCP (Largest Contentful Paint) under 2.5 seconds, CLS (Cumulative Layout Shift) under 0.1, and high responsiveness scores across mobile devices.',
      },
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
    title: 'Website Maintenance & Technical Support',
    shortDescription:
      'Keep your website secure, updated, and running smoothly with scheduled cloud backups, security patches, and direct developer support.',
    features: [
      'Scheduled Cloud Backups',
      'Security Patch Management',
      '24/7 Uptime Monitoring',
      'CMS & Plugin Updates',
      'Priority Bug Fixes & Support',
    ],
    fullDescription:
      'Ensure uninterrupted online business operations. We provide continuous technical support, automated off-site backups, CMS and plugin security patches, uptime monitoring, malware remediation, and rapid assistance whenever you need content updates or troubleshooting.',
    benefits: [
      'Peace of mind knowing your website is monitored, backed up, and protected 24/7',
      'Prevent site downtime, malware infections, and broken plugin compatibility issues',
      'Access on-demand developer support for regular content updates and enhancements',
      'Keep your digital infrastructure modern, fast, and compliant with web standards',
    ],
    targetAudience: [
      'Businesses wanting proactive technical protection without hiring an in-house webmaster',
      'WordPress website owners needing regular security updates and backup routines',
      'Companies requiring frequent promotional updates, banner changes, and content edits',
      'Firms needing dependable technical emergency support on short notice',
    ],
    deliverables: [
      '24/7 Automated Uptime & SSL Security Certificate Monitoring',
      'Scheduled Off-Site Cloud Backups with One-Click Disaster Recovery',
      'Monthly WordPress Core, Theme & Plugin Security Updates',
      'Malware Scanning & Vulnerability Remediation',
      'Direct Priority Developer Support for Content Edits & Technical Queries',
    ],
    methodology: [
      { step: '01', title: 'Baseline Audit & Backup', desc: 'Create initial off-site backup snapshots and establish security monitoring.' },
      { step: '02', title: 'Continuous Health Checks', desc: 'Monitor uptime, SSL certificates, and performance metrics around the clock.' },
      { step: '03', title: 'Safe Staging Updates', desc: 'Safely test and apply software patches and plugin updates in a staging environment.' },
      { step: '04', title: 'Priority Support Desk', desc: 'Resolve urgent client tickets, content additions, and feature tweaks promptly.' },
    ],
    faqs: [
      {
        question: 'What happens if my website goes down or gets hacked?',
        answer:
          'With our maintenance plans, our 24/7 uptime monitoring alerts us immediately. We restore your clean website from secure off-site backups, identify the vulnerability, and apply security fixes immediately.',
      },
      {
        question: 'Can I request regular text, image, and price updates on my website?',
        answer:
          'Yes. Our maintenance packages include dedicated developer hours each month for routine content edits, new image uploads, and promotional banner updates.',
      },
      {
        question: 'Do you support websites built by other development agencies?',
        answer:
          'Yes. We conduct a preliminary code and security audit on your existing website, after which we can take over ongoing maintenance and support seamlessly.',
      },
    ],
    cta: 'EXPLORE SERVICE →',
    icon: 'ShieldCheck',
    companionType: 'maintenance',
    accentColor: '#22C55E',
  },
];
