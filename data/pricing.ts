export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  startingFrom: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
}

export const pricingData: PricingTier[] = [
  {
    id: 'starter',
    name: 'STARTER',
    startingFrom: 'Starting from',
    price: '₹9,999',
    period: 'one-time / project base',
    description: 'For small businesses getting started online and needing a solid foundation.',
    features: [
      'Business Website',
      'Mobile Responsive Design',
      'Basic SEO',
      'Google Business Setup',
      'Basic Analytics',
      'Contact Form',
      'Basic Support',
    ],
    cta: 'GET STARTED',
  },
  {
    id: 'growth',
    name: 'GROWTH',
    startingFrom: 'Starting from',
    price: '₹24,999',
    period: 'monthly / growth base',
    badge: 'MOST POPULAR',
    isPopular: true,
    description: 'For growing businesses looking to expand their reach and dominate their niche.',
    features: [
      'Professional Website',
      'Advanced SEO',
      'Local SEO',
      'Content Optimization',
      'Google Business Optimization',
      'Analytics',
      'Performance Optimization',
      'Social Media Support',
      'Monthly Optimization',
    ],
    cta: 'CHOOSE GROWTH',
  },
  {
    id: 'scale',
    name: 'SCALE',
    startingFrom: 'Custom Tailored',
    price: 'CUSTOM PRICING',
    period: 'enterprise roadmap',
    description: 'For businesses requiring advanced digital products, automation & full-scale engineering.',
    features: [
      'Advanced SEO',
      'Custom Website',
      'AI Marketing',
      'Automation',
      'Software/App Development',
      'Advanced Analytics',
      'Conversion Optimization',
      'Priority Support',
    ],
    cta: 'REQUEST A QUOTE',
  },
];

export const pricingDisclaimer =
  'Final pricing depends on project requirements, features, integrations, content and support.';
