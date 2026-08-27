export interface BrandConfig {
  brandName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string; // International format for wa.me URL (e.g. "919394195533")
    displayPhone: string;   // Clean national display (e.g. "9394195533")
    displayWhatsapp: string;// Clean display format (e.g. "9394195533")
    address: string;
    workingHours: string;
  };
  socialLinks: {
    instagram: {
      username: string;
      url: string;
    };
    facebook: {
      name: string;
      url: string;
    };
    linkedin: {
      name: string;
      url: string;
    };
    twitter: string;
    youtube: string;
  };
}

// Master Central Configuration - Single Source of Truth
export const siteConfig: BrandConfig = {
  brandName: 'Digital Barpeta',
  tagline: 'BUILD. GROW. DOMINATE.',
  shortDescription:
    'Digital Barpeta provides professional website development, graphic design, Android app development, WordPress, digital marketing, branding and data services for businesses in Barpeta, Assam and beyond.',
  fullDescription:
    'Digital Barpeta is a digital solutions and creative agency based in Barpeta, Assam, India. We specialize in custom website development, graphic design, Android app development, WordPress websites, digital marketing, brand identity design, and data management solutions designed to help local and regional businesses establish and scale their online presence.',

  // Official Verified Agency Contact Details
  contact: {
    email: 'saradigitalduniya@gmail.com',
    phone: '9394195533',
    whatsappNumber: '919394195533', // International code for wa.me links
    displayPhone: '9394195533',
    displayWhatsapp: '9394195533',
    address: 'Barpeta, Assam, India',
    workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },

  // Official Verified Social Accounts
  socialLinks: {
    instagram: {
      username: '__awara__soul__',
      url: 'https://instagram.com/__awara__soul__',
    },
    facebook: {
      name: 'Rakibul Ali',
      url: 'https://facebook.com',
    },
    linkedin: {
      name: 'Digital Barpeta',
      url: 'https://linkedin.com',
    },
    twitter: '#',
    youtube: '#',
  },
};

// Global canonical production website URL
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalbarpeta.vercel.app';

