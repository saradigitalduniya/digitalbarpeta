export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FaqItem[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'Our starter website solutions start from ₹9,999 for small business foundations, and scalable growth packages start from ₹24,999. For custom web applications, advanced AI marketing systems, or enterprise platforms, we provide custom tailored quotes based on your exact requirements, integrations, and timeline.',
  },
  {
    question: 'How long does website development take?',
    answer:
      'A standard business website typically takes 7 to 14 business days from kickoff to final launch. More complex custom web applications, e-commerce stores, or custom software projects usually require 3 to 6 weeks, structured across clear milestone reviews and testing phases.',
  },
  {
    question: 'Do you provide SEO?',
    answer:
      'Yes, SEO is one of our primary core services. We provide end-to-end Technical SEO, On-page Optimization, Local SEO (including Google Business Profile dominance), Keyword Strategy, Competitor Analysis, and E-commerce SEO to ensure your business ranks organically where high-intent buyers search.',
  },
  {
    question: 'Can you build Android apps?',
    answer:
      'Absolutely. Our software engineering team designs and develops high-performance native Android applications, cross-platform apps, booking systems, CRM dashboards, and business utility apps with seamless API integrations and intuitive user interfaces.',
  },
  {
    question: 'Do you maintain websites?',
    answer:
      'Yes! We believe a website should never be abandoned after launch. We provide ongoing maintenance and support packages that include 24/7 security monitoring, routine automated backups, speed tuning, software updates, content updates, bug fixing, and continuous technical support.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes, we frequently modernize outdated, slow, or poorly converting websites. We conduct a full UX and performance audit, redesign the visual identity to look modern and futuristic, optimize the conversion paths, and migrate your content with zero downtime and preserved SEO authority.',
  },
  {
    question: 'Do you provide logo design?',
    answer:
      'Yes, we create distinctive visual brand identities. Our branding package includes custom logo design/redesign, color psychology palettes, typography guidelines, vector master source files, business cards, and social media branding kits.',
  },
  {
    question: 'Can I request a custom package?',
    answer:
      'Yes, every business has unique growth goals. We can assemble a custom package tailored specifically to your needs—combining web development, ongoing SEO, AI automation, and paid marketing under a unified growth strategy.',
  },
];
