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
  stats: {
    projects: string;
    businesses: string;
    websites: string;
    solutions: string;
    notice: string;
  };
}

// Master Central Configuration - Single Source of Truth
export const siteConfig: BrandConfig = {
  brandName: 'Digital Barpeta',
  tagline: 'BUILD. GROW. DOMINATE.',
  shortDescription:
    'We create high-performance websites, powerful brands, SEO strategies and intelligent digital solutions that help businesses grow online.',
  fullDescription:
    'Digital Barpeta is a digital marketing and technology agency focused on helping businesses establish, improve and grow their online presence. From SEO and web development to AI marketing, software, apps and branding, we bring strategy, creativity and technology together to create practical digital solutions.',

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

  stats: {
    projects: '00+',
    businesses: '00+',
    websites: '00+',
    solutions: '00+',
    notice: 'Official metrics will update dynamically upon verified reporting.',
  },
};
