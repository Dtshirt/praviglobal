import { Outfit, Kalam } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import Analytics from '@/components/Analytics';
import { hospitalInfo } from '@/lib/data';
import { generateOrganizationSchema } from '@/lib/schema';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'], variable: '--font-outfit' });
const kalam = Kalam({ subsets: ['devanagari'], weight: ['400', '700'], variable: '--font-kalam' });

export const metadata = {
  title: {
    default: `Best IVF Centre in Delhi | Expert Fertility Care | Pravi IVF`,
    template: `%s | Pravi IVF`,
  },
  description:
    "Pravi IVF is the best IVF centre in Delhi offering advanced fertility treatments like ICSI, IUI, and more with high success rates. Book your consultation today.",
  keywords:
    'Best IVF centre in Delhi, Top IVF clinic in Delhi, Best fertility clinic in Delhi, IVF hospital in Delhi, IVF treatment in Delhi, Best IVF doctor in Delhi, fertility specialist Delhi, IUI, ICSI, surrogacy, egg freezing, male infertility, female infertility',
  authors: [{ name: 'Pravi Global IVF Polyclinic' }],
  creator: 'Pravi Global IVF Polyclinic',
  publisher: 'Pravi Global IVF Polyclinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://praviglobalivf.com'),
  alternates: {
    canonical: 'https://praviglobalivf.com/',
  },
  openGraph: {
    title: 'Pravi Global IVF Polyclinic - Best IVF Centre in Lajpat Nagar Delhi',
    description:
      'Looking for the best IVF centre in Lajpat Nagar, Delhi? Pravi Global IVF Polyclinic offers IVF, ICSI, IUI, surrogacy, and advanced fertility care.',
    url: 'https://praviglobalivf.com',
    siteName: 'Pravi Global IVF Delhi',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pravi Global IVF Polyclinic - Best IVF Centre in Lajpat Nagar Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravi Global IVF Polyclinic - Best IVF Centre in Lajpat Nagar Delhi',
    description:
      'Top fertility clinic in Lajpat Nagar, Delhi offering advanced IVF, ICSI, and IUI treatments with high success rates under expert specialists.',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

const mapSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": hospitalInfo.name,
  "alternateName": "Pravi Global IVF & Fertility Center",
  "url": "https://praviglobalivf.com",
  "logo": "https://praviglobalivf.com/logo.png",
  "image": {
    "@type": "ImageObject",
    "url": "https://praviglobalivf.com/images/og-image.jpg",
    "name": "Pravi Global IVF Polyclinic Front View"
  },
  "description": "Pravi Global IVF Polyclinic is a premier fertility center in Delhi offering IVF, ICSI, IUI, and advanced reproductive care.",
  "email": hospitalInfo.email,
  "telephone": hospitalInfo.phone,
  "priceRange": "₹₹₹",
  "hasMap": "https://maps.app.goo.gl/79RLa9txkQWQ58Jg6",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Building number 41, First Floor, Ring Rd, Block Q, Lajpat Nagar IV",
    "addressLocality": "Lajpat Nagar",
    "addressRegion": "Delhi",
    "postalCode": "110024",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5721,
    "longitude": 77.2437
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "medicalSpecialty": "ReproductiveEndocrinology",
  "knowsAbout": ["IVF", "ICSI", "IUI", "Surrogacy", "Egg Freezing"],
  "sameAs": [
    hospitalInfo.social.facebook,
    hospitalInfo.social.instagram,
    hospitalInfo.social.youtube,
    "https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": hospitalInfo.rating.value.toString(),
    "reviewCount": hospitalInfo.rating.count.toString(),
    "bestRating": hospitalInfo.rating.best.toString()
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Verified Patient"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The best experience for IVF treatment in Delhi. Highly recommended."
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pravi Global IVF Delhi",
  "alternateName": [
    "Pravi Global IVF",
    "Pravi IVF Delhi",
    "Pravi Global IVF Delhi",
    "Pravi IVF"
  ],
  "url": "https://praviglobalivf.com"
};

export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mapSchema) }}
        />
      </head>
      <body className={`${outfit.variable} ${kalam.variable} font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[100]">
          Skip to main content
        </a>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}