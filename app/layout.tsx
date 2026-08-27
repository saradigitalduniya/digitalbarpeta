import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig, SITE_URL } from '@/data/config';

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Digital Barpeta | Web Design, Graphic Design & Digital Services',
    template: '%s | Digital Barpeta',
  },
  description:
    'Digital Barpeta provides website development, graphic design, Android apps, WordPress, digital marketing and branding services online from Barpeta, Assam.',
  keywords: [
    'Digital Barpeta',
    'website development Barpeta',
    'web design Barpeta',
    'graphic design Barpeta',
    'website developer Barpeta',
    'web designer Barpeta',
    'digital marketing Barpeta',
    'WordPress developer Barpeta',
    'Android app development Barpeta',
    'branding services Barpeta',
    'website development Assam',
    'web design Assam',
    'graphic design Assam',
    'digital marketing Assam',
    'WordPress developer Assam',
    'Android app development Assam',
    'website designer Assam',
    'branding agency Assam',
    'website development India',
    'WordPress development India',
    'graphic design services India',
    'Android app development India',
    'digital marketing services India',
    'business website development India',
    'data entry services Barpeta',
  ],
  authors: [{ name: 'Digital Barpeta', url: SITE_URL }],
  creator: 'Digital Barpeta',
  publisher: 'Digital Barpeta',
  applicationName: 'Digital Barpeta',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Digital Barpeta | Web Design, Graphic Design & Digital Services',
    description:
      'Digital Barpeta provides website development, graphic design, Android apps, WordPress, digital marketing and branding services online from Barpeta, Assam.',
    siteName: 'Digital Barpeta',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Barpeta | Web Design, Graphic Design & Digital Services Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Barpeta | Web Design, Graphic Design & Digital Services',
    description:
      'Digital Barpeta provides website development, graphic design, Android apps, WordPress, digital marketing and branding services online from Barpeta, Assam.',
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
  verification: {
    google: 'M5SeexgazBpWu8xi7Y17ev4jWIKF0l45O-FNlrZqHBI',
  },
};

// Truthful Organization and WebSite JSON-LD Structured Data (100% Online Agency Model)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: siteConfig.brandName,
      url: SITE_URL,
      logo: `${SITE_URL}/logo/digital_barpeta_logo.png`,
      image: `${SITE_URL}/character/digital_barpeta_character.png`,
      description: siteConfig.fullDescription,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Barpeta, Assam, India',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.contact.phone,
          contactType: 'customer support and inquiries',
          email: siteConfig.contact.email,
          availableLanguage: ['English', 'Assamese', 'Hindi', 'Bengali'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.brandName,
      description: siteConfig.shortDescription,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
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
