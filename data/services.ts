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
    id: 'web-development',
    slug: 'web-development',
    number: '01',
    title: 'Website Development & Web Design',
    shortDescription:
      'Fast, modern, and conversion-focused business websites and custom web applications built online for clients in Barpeta, Assam, and across India.',
    features: [
      'Custom UI/UX Design',
      'High-Speed Business Websites',
      'Next.js Web Applications',
      'Mobile-First Responsiveness',
      'Built-in Technical SEO',
    ],
    fullDescription:
      'Digital Barpeta builds bespoke business websites, company landing pages, and interactive web applications designed to load in under 2 seconds. Operating 100% online from Barpeta, Assam, we work closely with entrepreneurs and enterprises remotely to create digital storefronts that build trust and convert visitors into customers.',
    benefits: [
      'Establish a polished, credible digital presence that immediately builds trust with potential clients',
      'Ultra-fast page load speeds optimized for 4G/5G mobile connections across Assam and India',
      'Seamless direct WhatsApp and email inquiry funnels with zero friction',
      'Modern, accessible, and responsive layouts that look flawless across all screen sizes',
    ],
    targetAudience: [
      'Small and medium businesses in Barpeta and Assam needing their first official website',
      'Companies with outdated websites looking for a clean, modern redesign',
      'Service providers, consultants, contractors, and educational firms',
      'Startups requiring custom web apps with specialized functional workflows',
    ],
    deliverables: [
      'Custom Visual UI/UX & Responsive Layouts (Mobile, Tablet, Desktop)',
      'Next.js Production Build Deployed on Global Edge CDNs',
      'WhatsApp Quick-Chat Integration & Contact Inquiry System',
      'Core Web Vitals Speed Optimization & SSL Security Setup',
      'Domain DNS Connection & Complete Online Launch Support',
    ],
    methodology: [
      { step: '01', title: 'Online Discovery & Scope', desc: 'Discuss your goals, target audience, and feature requirements via WhatsApp or virtual meeting.' },
      { step: '02', title: 'UI Design & Wireframing', desc: 'Craft clean typography, dark-mode/light tokens, and intuitive user navigation flows.' },
      { step: '03', title: 'Full-Stack Development', desc: 'Write clean, accessible, and high-performance production code with Next.js.' },
      { step: '04', title: 'QA & Edge Deployment', desc: 'Test across mobile viewports, verify speed metrics, and deploy live.' },
    ],
    faqs: [
      {
        question: 'How do we collaborate if Digital Barpeta is an online-only agency?',
        answer:
          'We manage projects seamlessly through WhatsApp, phone, email, and Google Meet/Zoom. You receive regular progress previews on staging links, allowing you to give feedback in real-time from anywhere.',
      },
      {
        question: 'How long does it take to develop a business website?',
        answer:
          'A standard custom business website typically takes 1 to 2 weeks from initial concept approval to live deployment.',
      },
      {
        question: 'Will my website be mobile-friendly and fast?',
        answer:
          'Yes. Every website is built with a strict mobile-first architecture, tested at 320px, 375px, 390px, 768px, and desktop widths to ensure instant loading and smooth navigation.',
      },
    ],
    cta: 'EXPLORE WEB DEVELOPMENT →',
    icon: 'Globe',
    companionType: 'web',
    accentColor: '#38BDF8',
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    number: '02',
    title: 'Graphic Design Services',
    shortDescription:
      'High-impact vector graphics, promotional banners, social media creatives, and print-ready business marketing materials.',
    features: [
      'Vector Illustrations & Graphics',
      'Social Media Post Designs',
      'Promotional Flyers & Posters',
      'Brochures & Catalogs',
      'Print & Digital Assets',
    ],
    fullDescription:
      'Eye-catching graphic design communicates your value instantly. Digital Barpeta delivers customized graphic design solutions for businesses in Barpeta, Assam, and online clients nationwide. From promotional social media campaigns to professional business flyers, banners, and stationery, we craft visuals that stand out.',
    benefits: [
      'Elevate your brand perception with professionally crafted, high-resolution visuals',
      'Maintain unified aesthetic consistency across digital ads, social channels, and print collateral',
      'Fast online turnaround with digital proof reviews and vector file delivery',
      'Full commercial ownership of all finalized graphic design assets',
    ],
    targetAudience: [
      'Local businesses and startups needing promotional banners, posters, and flyers',
      'Brands requiring monthly creative kits for Facebook, Instagram, and WhatsApp',
      'Retail shops, restaurants, educational institutes, and healthcare centers',
      'Firms needing print-ready brochures, catalogs, and marketing collateral',
    ],
    deliverables: [
      'High-Resolution Print-Ready PDF & CMYK Graphics',
      'Web & Social Media Optimized PNG, JPG, and SVG Assets',
      'Multi-Format Creative Sizes for Instagram, Facebook, and WhatsApp Status',
      'Editable Master Source Files upon project handover',
    ],
    methodology: [
      { step: '01', title: 'Creative Brief', desc: 'Collect your design specifications, dimensions, text copy, and brand preferences online.' },
      { step: '02', title: 'Concept Creation', desc: 'Develop distinct visual layouts and graphic compositions.' },
      { step: '03', title: 'Review & Revision', desc: 'Refine colors, typography, and element alignment based on your feedback.' },
      { step: '04', title: 'Final File Delivery', desc: 'Package high-resolution digital and print-ready vector/raster files.' },
    ],
    faqs: [
      {
        question: 'What file formats will I receive for my graphic design order?',
        answer:
          'You receive print-ready high-resolution PDFs, scalable vector files (AI/SVG/EPS), and lightweight, optimized PNG/JPG images ready for immediate web and social media sharing.',
      },
      {
        question: 'Can you design social media posts in regional languages?',
        answer:
          'Yes. We can design graphics with Assamese, Bengali, Hindi, or English text according to your target audience.',
      },
      {
        question: 'How quickly can graphic design orders be delivered?',
        answer:
          'Standard graphic design projects (flyers, banners, social media creatives) are typically delivered within 24 to 72 hours.',
      },
    ],
    cta: 'EXPLORE GRAPHIC DESIGN →',
    icon: 'Sparkles',
    companionType: 'branding',
    accentColor: '#F59E0B',
  },
  {
    id: 'android-development',
    slug: 'android-development',
    number: '03',
    title: 'Android App Development',
    shortDescription:
      'Custom Android mobile applications, business utilities, and management software tailored for your operational requirements.',
    features: [
      'Native & Cross-Platform Android Apps',
      'Admin Dashboards & Cloud Sync',
      'Secure Database Integration',
      'Play Store Publishing Support',
      'Offline-First Functionality',
    ],
    fullDescription:
      'With millions of mobile users across Assam and India, a dedicated Android application connects you directly to your customers and field staff. Digital Barpeta designs, develops, and deploys scalable Android mobile apps for retail ordering, student management, service booking, and business workflow automation.',
    benefits: [
      'Reach customers directly on their smartphones with custom Android app experiences',
      'Streamline daily business tasks, customer orders, and internal team coordination',
      'Secure, cloud-connected database architecture that ensures reliable data handling',
      'Support for Google Play Store compliance, release management, and future updates',
    ],
    targetAudience: [
      'Retailers, wholesalers, and distributors needing order-taking and inventory apps',
      'Educational institutions, coaching centers, and academies managing students',
      'Service booking businesses wanting dedicated mobile client scheduling',
      'Startups and innovators building new Android-first software products',
    ],
    deliverables: [
      'Compiled Android Application Package (APK / AAB) ready for distribution',
      'Web-Based Cloud Administrative Dashboard for Record Management',
      'Secure REST API & Real-Time Database Setup (PostgreSQL / Supabase / Firebase)',
      'Google Play Store Listing Preparation & Release Support',
      'Technical Documentation and Administrator Guide',
    ],
    methodology: [
      { step: '01', title: 'Requirements & Wireframes', desc: 'Map out app user flows, screens, and database data models.' },
      { step: '02', title: 'UI/UX Mobile Design', desc: 'Create clean, intuitive touch-first mobile interfaces.' },
      { step: '03', title: 'Frontend & API Development', desc: 'Build the Android application with robust state management and cloud sync.' },
      { step: '04', title: 'Testing & Play Store Launch', desc: 'Perform multi-device testing, verify security, and package production builds.' },
    ],
    faqs: [
      {
        question: 'Do you help publish the app to Google Play Store?',
        answer:
          'Yes. We handle the entire release process, from generating signed release bundles to preparing Play Store metadata, screenshots, and compliance settings.',
      },
      {
        question: 'Can the app work offline if there is poor internet connectivity?',
        answer:
          'Yes. We can architect offline-first caching so that critical functions remain accessible even during intermittent network drops and sync automatically once reconnected.',
      },
      {
        question: 'What technologies do you use for Android app development?',
        answer:
          'We utilize React Native, Flutter, and native Android tooling paired with modern Node.js and TypeScript backends for maximum speed and maintainability.',
      },
    ],
    cta: 'EXPLORE ANDROID APPS →',
    icon: 'Smartphone',
    companionType: 'app',
    accentColor: '#10B981',
  },
  {
    id: 'wordpress',
    slug: 'wordpress',
    number: '04',
    title: 'WordPress Website Development',
    shortDescription:
      'Custom WordPress websites, WooCommerce stores, and content management systems that are easy to manage and edit.',
    features: [
      'Custom Theme Configuration',
      'WooCommerce Online Stores',
      'Easy Visual Page Builders',
      'Security & Speed Hardening',
      'Blog & News CMS Architecture',
    ],
    fullDescription:
      'WordPress powers over 40% of the web. Digital Barpeta develops clean, secure, and fast WordPress websites that give you complete control to update text, upload images, and publish blog articles without writing code. We eliminate bloated plugins and optimize themes for optimal speed and search indexing.',
    benefits: [
      'Easily manage and edit your website content anytime through an intuitive admin dashboard',
      'Launch eCommerce online stores with WooCommerce, payment gateways, and product catalogs',
      'Clean security hardening preventing malware and unauthorized access',
      'Cost-effective solution with rich blogging, portfolio, and inquiry management features',
    ],
    targetAudience: [
      'Business owners who want to update website content independently without developer fees',
      'Bloggers, content creators, news publishers, and educational portals in Assam',
      'eCommerce stores selling physical or digital products online',
      'Organizations needing multi-author publishing and structured media management',
    ],
    deliverables: [
      'Custom WordPress Installation & Responsive Theme Setup',
      'Essential Plugin Configuration for SEO, Security, and Caching',
      'Contact Forms, WhatsApp Click-to-Chat, and Social Integrations',
      'WooCommerce Payment Gateway & Catalog Setup (if eCommerce)',
      'Step-by-Step Video / Written Tutorial on How to Update Your Content',
    ],
    methodology: [
      { step: '01', title: 'Content & Structure Planning', desc: 'Determine pages, categories, blog requirements, and payment gateways.' },
      { step: '02', title: 'Theme Setup & Customization', desc: 'Configure brand typography, colors, and responsive page templates.' },
      { step: '03', title: 'Plugin Integration & Security', desc: 'Install clean, essential plugins for caching, SEO, and malware protection.' },
      { step: '04', title: 'Handoff & Training', desc: 'Train you on how to log in, add pages, write posts, and manage inquiries.' },
    ],
    faqs: [
      {
        question: 'Will I be able to edit text and images on my WordPress website myself?',
        answer:
          'Yes. We configure user-friendly visual page editors so you can easily change text, replace photos, and add blog posts whenever you want.',
      },
      {
        question: 'How do you keep WordPress websites secure from malware?',
        answer:
          'We implement strict login limits, automated security firewalls, SSL encryption, automatic off-site cloud backups, and regular plugin update routines.',
      },
      {
        question: 'Can you integrate Indian payment gateways like Razorpay or UPI?',
        answer:
          'Yes. For WooCommerce stores, we integrate Razorpay, Cashfree, UPI, and major Indian payment gateways for seamless customer transactions.',
      },
    ],
    cta: 'EXPLORE WORDPRESS →',
    icon: 'Globe',
    companionType: 'web',
    accentColor: '#38BDF8',
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing & Social Media',
    shortDescription:
      'Targeted digital marketing campaigns, Meta advertising, local social media growth, and conversion lead generation.',
    features: [
      'Targeted Meta (Facebook & Instagram) Ads',
      'Social Media Strategy & Calendars',
      'Direct WhatsApp Lead Funnels',
      'Creative Copywriting & Visuals',
      'Transparent Monthly Reporting',
    ],
    fullDescription:
      'Turn online attention into genuine customer inquiries. Digital Barpeta develops targeted digital marketing campaigns and organic social strategies for businesses in Barpeta, Assam, and across India. We focus on real commercial outcomes: verified phone calls, WhatsApp messages, and quote inquiries.',
    benefits: [
      'Reach potential customers actively interested in your specific products and services',
      'Direct advertising traffic straight into WhatsApp conversations for immediate sales closing',
      'Optimize your advertising budget to achieve low cost-per-lead and high conversion return',
      'Transparent performance reporting tracking real inquiries rather than vanity metrics',
    ],
    targetAudience: [
      'Local service businesses wanting steady inbound client inquiries',
      'Showrooms, retail shops, and commercial stores in Assam driving customer inquiries',
      'Schools, colleges, and coaching institutes running seasonal admission campaigns',
      'Regional eCommerce brands aiming to scale online product orders',
    ],
    deliverables: [
      'Strategic Campaign Blueprint & Audience Demographic Targeting',
      'Ad Creative Design (Images/Carousels) & High-Converting Copywriting',
      'Meta Ads Manager & Pixel Tracking Setup with Conversion Events',
      'WhatsApp Click-to-Chat Funnel Optimization',
      'Detailed Performance Analytics & Monthly ROI Review',
    ],
    methodology: [
      { step: '01', title: 'Target Audience Audit', desc: 'Identify your highest-value customer segments, locations in Assam, and search behaviors.' },
      { step: '02', title: 'Ad Creative & Funnel Setup', desc: 'Design compelling visuals and write persuasive copy leading to WhatsApp or landing pages.' },
      { step: '03', title: 'Campaign Launch & Monitoring', desc: 'Launch targeted ad sets with daily budget monitoring and A/B test variations.' },
      { step: '04', title: 'Optimization & Scaling', desc: 'Prune underperforming ad sets and scale the creative generating the highest quality leads.' },
    ],
    faqs: [
      {
        question: 'How much should a small business spend on digital marketing ads?',
        answer:
          'You can start with a modest daily ad budget (e.g. ₹300 - ₹500/day) to test high-converting audiences in Assam before scaling up based on verified sales returns.',
      },
      {
        question: 'How will I receive customer leads from the ad campaigns?',
        answer:
          'Leads can be sent directly to your official WhatsApp number (9394195533) or collected via dedicated website inquiry forms delivered straight to your email in real time.',
      },
      {
        question: 'Do you manage organic social media posting as well?',
        answer:
          'Yes. We offer combined packages covering both scheduled organic content publishing and paid performance advertising.',
      },
    ],
    cta: 'EXPLORE DIGITAL MARKETING →',
    icon: 'TrendingUp',
    companionType: 'marketing',
    accentColor: '#EC4899',
  },
  {
    id: 'branding',
    slug: 'branding',
    number: '06',
    title: 'Brand Identity & Logo Design',
    shortDescription:
      'Distinctive vector logo marks, color harmony systems, typography hierarchy, and complete brand identity packages.',
    features: [
      'Custom Vector Logo Marks',
      'Brand Color Palette & Harmony',
      'Typography Hierarchy Rules',
      'Business Stationery & Cards',
      'Social Media Brand Kit',
    ],
    fullDescription:
      'A distinctive visual identity sets your company apart from competitors. Digital Barpeta crafts 100% original vector logos, comprehensive color palettes, typographic guidelines, and brand kits designed to command trust and position your business as an industry authority.',
    benefits: [
      'Establish immediate professional credibility across all customer touchpoints',
      'Receive scalable vector files that remain razor-sharp on small screens and large signage',
      'Unified brand guidelines ensuring consistent presentation across all media',
      'Full commercial copyright ownership transferred to you upon completion',
    ],
    targetAudience: [
      'New startups and entrepreneurs establishing their official company identity',
      'Existing businesses looking for a modern, high-end logo refresh',
      'Companies wanting cohesive branding across business cards, invoices, and social channels',
      'Organizations needing complete brand style guides for internal and external use',
    ],
    deliverables: [
      'Primary, Secondary, and Monogram Vector Logo Files (AI, SVG, EPS, PDF)',
      'High-Resolution Web & Print PNG (Transparent) and JPG Formats',
      'Complete Brand Style Guide Document with Hex Color Codes & Font Pairings',
      'Print-Ready Business Card & Letterhead Layouts',
      'Social Media Avatar and Banner Kit',
    ],
    methodology: [
      { step: '01', title: 'Brand Discovery', desc: 'Understand your mission, core values, target demographic, and industry competitors.' },
      { step: '02', title: 'Concept Sketches', desc: 'Explore distinct visual metaphors and original vector logo concepts.' },
      { step: '03', title: 'Refinement & Geometry', desc: 'Perfect geometry, test contrast across dark and light backgrounds, and finalize fonts.' },
      { step: '04', title: 'Master Asset Export', desc: 'Package all master vector and raster files with complete brand guidelines.' },
    ],
    faqs: [
      {
        question: 'Do I own full commercial rights to my logo?',
        answer:
          'Yes. Upon final delivery and project completion, you hold 100% commercial copyright ownership of all custom logo assets.',
      },
      {
        question: 'Will the logo work for both website use and large physical print banners?',
        answer:
          'Yes. We provide vector source files (AI, SVG, EPS, PDF) that can scale infinitely without any loss of quality or pixelation.',
      },
      {
        question: 'How many design concepts do you provide?',
        answer:
          'We typically provide 2 to 3 unique creative directions during the initial concept phase and then refine your chosen concept to perfection.',
      },
    ],
    cta: 'EXPLORE BRANDING & LOGOS →',
    icon: 'Sparkles',
    companionType: 'branding',
    accentColor: '#F59E0B',
  },
  {
    id: 'data-entry',
    slug: 'data-entry',
    number: '07',
    title: 'Data Entry & Management Services',
    shortDescription:
      'Accurate, confidential data entry, document digitization, spreadsheet structuring, and digital database management.',
    features: [
      'Spreadsheet Formatting & Cleanup',
      'Product Catalog Data Entry',
      'Document Digitization',
      'Database Record Management',
      'Data Verification & Quality Checks',
    ],
    fullDescription:
      'Keep your business records accurate, organized, and accessible. Digital Barpeta provides professional, confidential data entry, spreadsheet cleanup, catalog digitization, and database management services for businesses in Barpeta, Assam, and online clients worldwide.',
    benefits: [
      'Save valuable staff hours by outsourcing repetitive data processing tasks',
      'High accuracy standards with multi-pass quality checks and formatting rules',
      'Strict confidentiality and data security protocols protecting your private records',
      'Fast digital turnaround with clean Excel, Google Sheets, or database exports',
    ],
    targetAudience: [
      'eCommerce stores needing bulk product uploads, descriptions, and price updates',
      'Educational institutes, offices, and clinics digitizing physical records and forms',
      'Wholesalers and distributors organizing inventory sheets and customer databases',
      'Businesses wanting clean, structured spreadsheet data for accounting or reporting',
    ],
    deliverables: [
      'Clean, Structured Excel (.xlsx), Google Sheets, or CSV Database Exports',
      'Formatted Product Catalogs with Standardized Attributes and Images',
      'Digitized Text & Form Data with Quality Verification Reports',
      'Secure Cloud Delivery with Direct Access Controls',
    ],
    methodology: [
      { step: '01', title: 'Data Intake & Scope', desc: 'Review source files, formatting rules, and timeline securely online.' },
      { step: '02', title: 'Structured Entry', desc: 'Perform meticulous data transcription, catalog formatting, and normalization.' },
      { step: '03', title: 'Quality Verification', desc: 'Run automated and manual validation checks to eliminate duplicates and typos.' },
      { step: '04', title: 'Secure Delivery', desc: 'Deliver finalized data files via encrypted cloud channels.' },
    ],
    faqs: [
      {
        question: 'How do you ensure data confidentiality and security?',
        answer:
          'We adhere to strict confidentiality protocols. Your files and customer information are never shared, exposed, or stored longer than necessary for project delivery.',
      },
      {
        question: 'Can you work with scanned documents or physical image files?',
        answer:
          'Yes. We can transcribe and digitize data from scanned PDFs, handwritten forms, printed documents, and photos into structured digital spreadsheets.',
      },
      {
        question: 'What file formats can you deliver?',
        answer:
          'We can export data to Microsoft Excel (.xlsx), Google Sheets, CSV, JSON, or import records directly into your online CMS or database.',
      },
    ],
    cta: 'EXPLORE DATA ENTRY →',
    icon: 'ShieldCheck',
    companionType: 'optimization',
    accentColor: '#22C55E',
  },
  {
    id: 'seo',
    slug: 'seo',
    number: '08',
    title: 'Search Engine Optimization (SEO)',
    shortDescription:
      'Technical SEO, on-page schema, keyword strategy, and organic search growth engineered to help your business get found on Google.',
    features: [
      'Technical SEO Audits',
      'Commercial Keyword Strategy',
      'On-Page Schema & Metadata',
      'Site Speed & Core Web Vitals',
      'Search Performance Telemetry',
    ],
    fullDescription:
      'Help prospective customers find your website organically on Google. Digital Barpeta implements clean technical SEO, semantic structured data, keyword optimization, and speed tuning designed to improve search visibility and drive qualified organic traffic to your website.',
    benefits: [
      'Attract high-intent search traffic from customers actively searching for your services',
      'Build long-term organic authority that delivers continuous leads without paid ad spend',
      'Improve website indexing speed and compliance with Google Core Web Vitals guidelines',
      'Clean structured JSON-LD schemas enabling rich search result presentation',
    ],
    targetAudience: [
      'Businesses with existing websites struggling to get indexed or ranked on Google',
      'Regional companies in Assam wanting organic search discovery for high-value terms',
      'eCommerce stores and service providers seeking sustainable organic customer leads',
      'Firms seeking comprehensive technical audits and on-page metadata optimization',
    ],
    deliverables: [
      'Complete Technical Website Audit & Indexation Health Report',
      'High-Intent Keyword Mapping & Content Hierarchy Plan',
      'On-Page Semantic Metadata, Heading Hierarchy & Schema Markup',
      'Core Web Vitals & Speed Optimization Tuning',
      'Google Search Console Telemetry & Crawl Error Remediation',
    ],
    methodology: [
      { step: '01', title: 'Technical Audit', desc: 'Inspect crawl anomalies, server response times, schema gaps, and indexation blockers.' },
      { step: '02', title: 'Keyword Architecture', desc: 'Map commercial search intent and high-volume queries to dedicated landing pages.' },
      { step: '03', title: 'On-Page Implementation', desc: 'Inject valid structured JSON-LD data, optimize meta tags, and refine semantic copy.' },
      { step: '04', title: 'Monitoring & Refinement', desc: 'Track Search Console impressions, clicks, and average position improvements.' },
    ],
    faqs: [
      {
        question: 'How long does it take for SEO optimizations to reflect on Google?',
        answer:
          'Technical fixes and schema additions are often indexed within 1 to 3 weeks. Organic keyword ranking improvements generally compound over 2 to 4 months as search engines recognize domain authority.',
      },
      {
        question: 'Do you use ethical, white-hat SEO techniques?',
        answer:
          'Yes. We strictly adhere to Google Search Essentials and people-first guidelines, focusing on helpful content, clean semantic code, fast speeds, and structured schema—never spam tactics.',
      },
      {
        question: 'How do you track SEO progress?',
        answer:
          'We utilize Google Search Console to monitor real search impressions, click-through rates (CTR), search query positions, and page indexing status.',
      },
    ],
    cta: 'EXPLORE SEO SERVICES →',
    icon: 'Search',
    companionType: 'seo',
    accentColor: '#10B981',
  },
];
