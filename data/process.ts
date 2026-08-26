export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understanding the core',
    description: 'We understand your business, audience, competitive landscape and ambitious growth goals before writing a single line of code.',
    details: ['Business Objective Mapping', 'Target Audience Persona', 'Competitor Gap Analysis', 'Tech Stack Evaluation'],
    icon: 'Compass',
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    subtitle: 'Designing the blueprint',
    description: 'We create the right digital roadmap—defining information architecture, conversion funnels, SEO strategy, and milestones.',
    details: ['SEO & Keyword Roadmap', 'Wireframing & UX Flow', 'Content Strategy & Messaging', 'Project Timeline & Deliverables'],
    icon: 'Layers',
  },
  {
    step: '03',
    title: 'CREATE',
    subtitle: 'Precision engineering',
    description: 'We turn the plan into a digital experience with bespoke visual design, clean modern code, responsive layouts, and rich micro-interactions.',
    details: ['Design System Crafting', 'High-Speed Web Development', 'AI & Automation Setup', 'Interactive Micro-Animations'],
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'LAUNCH',
    subtitle: 'Testing & deployment',
    description: 'We rigorously test across devices and browsers, audit speed and Core Web Vitals, implement security protocols, and execute a flawless launch.',
    details: ['Cross-Browser QA & Mobile Audit', 'Speed & Performance Tuning', 'Analytics & Tracking Setup', 'Live Production Deployment'],
    icon: 'Send',
  },
  {
    step: '05',
    title: 'GROW',
    subtitle: 'Continuous optimization',
    description: 'We continue improving your digital presence through ongoing SEO audits, conversion rate optimization, data analysis, and proactive support.',
    details: ['Organic Rank Tracking', 'Conversion Funnel Testing', 'Monthly Performance Reports', 'Proactive Maintenance & Backups'],
    icon: 'TrendingUp',
  },
];
