export const metadata = {
  title: "Egg Freezing in Delhi | Best IVF Center In Delhi",
  description:
    "Preserve your fertility with advanced egg freezing in Delhi at Pravi Global IVF Polyclinic. As a trusted IVF Center in Lajpat Nagar, we offer safe oocyte cryopreservation.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/egg-freezing",
  },
  openGraph: {
    title: "Egg Freezing in Delhi | Best IVF Center In Delhi",
    description:
      "Pravi Global IVF Polyclinic offers advanced egg freezing (oocyte cryopreservation) in Delhi for women who wish to preserve fertility securely. Safe and effective fertility choices.",
    url: "https://praviglobalivf.com/egg-freezing",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/egg-freezing.jpg",
        width: 1200,
        height: 630,
        alt: "Egg Freezing in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Egg Freezing in Delhi | Best IVF Center In Delhi",
    description:
      "Explore egg freezing in Delhi at Pravi Global IVF Polyclinic. Preserve your fertility with safe oocyte cryopreservation and expert reproductive specialists.",
    images: ["/images/egg-freezing.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Pravi Global IVF Polyclinic",
        "description": "Leading IVF Center in Lajpat Nagar offering advanced, secure oocyte cryopreservation and egg freezing treatments for proactive fertility preservation.",
        "url": "https://praviglobalivf.com",
        "logo": "https://praviglobalivf.com/logo.png",
        "image": "https://praviglobalivf.com/images/egg-freezing.jpg",
        "telephone": "+918009150040",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "E-3, 3rd Floor, Lajpat Nagar 2",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110024",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.5678,
          "longitude": 77.2433
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "18:00"
        },
        "medicalSpecialty": [
          "Gynecologic",
          "Surgical"
        ]
      },
      {
        "@type": "MedicalWebPage",
        "name": "Egg Freezing and Oocyte Cryopreservation Guide",
        "description": "Comprehensive EEAT-compliant guide on egg freezing, vitrification technology, process steps, and preserving your fertility for future family planning.",
        "url": "https://praviglobalivf.com/egg-freezing",
        "about": {
          "@type": "MedicalProcedure",
          "name": "Egg Freezing (Oocyte Cryopreservation)",
          "bodyLocation": "Ovary"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is egg freezing safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. It is a safe and minimally invasive process using advanced vitrification to perfectly prevent damage globally during the rapid freezing stage."
            }
          },
          {
            "@type": "Question",
            "name": "What is the ideal age to freeze eggs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best wonderful time is exactly between 25 and 35 years old, strictly when your lovely egg quality is solidly highest."
            }
          },
          {
            "@type": "Question",
            "name": "How long can eggs be stored?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tiny delicate eggs can be safely fully stored for deeply many long years absolutely without any sad loss of pure quality."
            }
          },
          {
            "@type": "Question",
            "name": "Can frozen eggs be used for IVF later?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes entirely, safely thawed eggs are smoothly fertilized through proven ICSI science to boldly achieve a happy pregnancy when absolutely desired."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
