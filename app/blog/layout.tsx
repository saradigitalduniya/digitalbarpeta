import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Growth Journal & Insights | Digital Barpeta',
  description:
    'Actionable perspectives on modern web engineering, organic search domination, AI automation, and high-impact brand strategy by Digital Barpeta.',
  alternates: {
    canonical: 'https://digitalbarpeta.com/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitalbarpeta.com/blog',
    title: 'Digital Growth Journal & Insights | Digital Barpeta',
    description:
      'Actionable perspectives on modern web engineering, organic search domination, AI automation, and high-impact brand strategy by Digital Barpeta.',
    siteName: 'Digital Barpeta',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Barpeta Growth Journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth Journal & Insights | Digital Barpeta',
    description:
      'Actionable perspectives on modern web engineering, organic search domination, AI automation, and high-impact brand strategy by Digital Barpeta.',
    images: ['/og-image.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
