export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  solutions: string[];
  icon: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: 'local-businesses',
    name: 'LOCAL BUSINESSES',
    tagline: 'Dominate your immediate neighborhood and city.',
    description: 'Capture local customer searches, build trust with high-converting landing pages, and secure top 3 rankings on Google Maps.',
    solutions: ['Google Business Profile Optimization', 'Local SEO & Citation Building', 'Mobile-First Website Design', 'Click-to-Call & WhatsApp Setup'],
    icon: 'MapPin',
  },
  {
    id: 'ecommerce',
    name: 'E-COMMERCE',
    tagline: 'Turn store visitors into loyal repeat buyers.',
    description: 'Lightning-fast product catalogs, frictionless checkout flows, cart recovery automation, and performance marketing campaigns.',
    solutions: ['Custom Headless Stores', 'Product Schema & SEO', 'Payment Gateway Integration', 'Automated Retargeting Ads'],
    icon: 'ShoppingBag',
  },
  {
    id: 'education',
    name: 'EDUCATION & INSTITUTES',
    tagline: 'Attract students and streamline admissions.',
    description: 'Modern institutional portals, course catalogs, student inquiry lead funnels, and automated enrollment workflows.',
    solutions: ['Course Directory Systems', 'Admission Inquiry Automation', 'Local Education Authority SEO', 'Student Portal Architecture'],
    icon: 'GraduationCap',
  },
  {
    id: 'healthcare',
    name: 'HEALTHCARE & CLINICS',
    tagline: 'Build patient trust and simplify appointments.',
    description: 'Professional medical websites, HIPAA-compliant contact forms, online doctor appointment booking, and local clinic discovery.',
    solutions: ['Doctor Booking Portals', 'Reputation & Review Management', 'Local Doctor SEO Strategy', 'Fast Mobile Health Portals'],
    icon: 'Activity',
  },
  {
    id: 'real-estate',
    name: 'REAL ESTATE',
    tagline: 'Showcase properties with high-impact visual appeal.',
    description: 'Interactive property listings, virtual tour embeds, automated WhatsApp buyer leads, and geotargeted search ads.',
    solutions: ['Property Showcase Grids', 'Lead Capture Funnels', 'Virtual Tour Integrations', 'High-Intent Search Ads'],
    icon: 'Building2',
  },
  {
    id: 'restaurants',
    name: 'RESTAURANTS & CAFES',
    tagline: 'Fill tables and power direct digital orders.',
    description: 'Mouth-watering digital menus, table reservation widgets, Google Maps discovery, and local foodie social media branding.',
    solutions: ['QR & Online Menus', 'Direct WhatsApp Ordering', 'Local Food Pack Ranking', 'Instagram & Meta Growth'],
    icon: 'Utensils',
  },
  {
    id: 'startups',
    name: 'STARTUPS & TECH',
    tagline: 'Launch fast and validate your product market fit.',
    description: 'High-converting MVP landing pages, custom SaaS web apps, product animations, and growth experimentation funnels.',
    solutions: ['MVP Rapid Development', 'Investor Pitch Decks & Sites', 'SaaS Onboarding UX', 'Product Launch Marketing'],
    icon: 'Rocket',
  },
  {
    id: 'professional-services',
    name: 'PROFESSIONAL SERVICES',
    tagline: 'Establish undeniable authority in your domain.',
    description: 'Sophisticated corporate websites for law firms, consultants, accountants, and agencies seeking high-ticket client inquiries.',
    solutions: ['Authority Content Hubs', 'Lead Magnet Funnels', 'B2B LinkedIn & Search Strategy', 'Secure Client Dashboards'],
    icon: 'Briefcase',
  },
];
