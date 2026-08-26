import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/data/config';

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalbarpeta.com'),
  title: {
    default: 'Digital Barpeta | Digital Marketing & Technology Agency',
    template: '%s | Digital Barpeta',
  },
  description:
    'Digital Barpeta helps businesses grow online through SEO, web design, AI marketing, software, app development, branding and digital marketing solutions.',
  keywords: [
    'Digital Marketing Agency',
    'SEO Services Barpeta',
    'Web Design and Development',
    'AI Marketing Solutions',
    'Software Development',
    'Android App Development',
    'Brand and Logo Design',
    'Search Engine Optimization',
    'Digital Growth Strategy',
    'Digital Barpeta Assam',
  ],
  authors: [{ name: 'Digital Barpeta', url: 'https://digitalbarpeta.com' }],
  creator: 'Digital Barpeta',
  publisher: 'Digital Barpeta',
  applicationName: 'Digital Barpeta',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://digitalbarpeta.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitalbarpeta.com',
    title: 'Digital Barpeta | Digital Marketing & Technology Agency',
    description:
      'Digital Barpeta helps businesses grow online through SEO, web design, AI marketing, software, app development, branding and digital marketing solutions.',
    siteName: 'Digital Barpeta',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Barpeta | Digital Marketing & Technology Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Barpeta | Digital Marketing & Technology Agency',
    description:
      'Digital Barpeta helps businesses grow online through SEO, web design, AI marketing, software, app development, branding and digital marketing solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

// Verified Organization, LocalBusiness, and WebSite JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://digitalbarpeta.com/#organization',
      name: siteConfig.brandName,
      url: 'https://digitalbarpeta.com',
      logo: 'https://digitalbarpeta.com/logo/digital_barpeta_logo.png',
      image: 'https://digitalbarpeta.com/character/digital_barpeta_character.png',
      description: siteConfig.fullDescription,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barpeta',
        addressRegion: 'Assam',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.contact.phone,
          contactType: 'customer service',
          email: siteConfig.contact.email,
          areaServed: 'IN',
          availableLanguage: ['English', 'Assamese', 'Hindi'],
        },
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://digitalbarpeta.com/#localbusiness',
      name: siteConfig.brandName,
      url: 'https://digitalbarpeta.com',
      logo: 'https://digitalbarpeta.com/logo/digital_barpeta_logo.png',
      image: 'https://digitalbarpeta.com/character/digital_barpeta_character.png',
      description: siteConfig.fullDescription,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barpeta',
        addressRegion: 'Assam',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://digitalbarpeta.com/#website',
      url: 'https://digitalbarpeta.com',
      name: siteConfig.brandName,
      description: siteConfig.shortDescription,
      publisher: {
        '@id': 'https://digitalbarpeta.com/#organization',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
