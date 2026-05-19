export const metadata = {
  title: "Follicular Monitoring in Lajpat Nagar Delhi | Pravi IVF",
  description: "Track ovulation with high-resolution follicular monitoring in Lajpat Nagar, Delhi. Expert fertility tracking at Pravi Global IVF ensures precise timing for natural conception, IUI, and IVF.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/follicular-monitoring-in-lajpat-nagar-delhi/",
  },
  openGraph: {
    title: "Follicular Monitoring in Lajpat Nagar Delhi | Pravi IVF",
    description: "Track ovulation with high-resolution follicular monitoring in Lajpat Nagar, Delhi. Expert fertility tracking at Pravi Global IVF ensures precise timing for natural conception, IUI, and IVF.",
    url: "https://praviglobalivf.com/follicular-monitoring-in-lajpat-nagar-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Follicular Monitoring in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Follicular Monitoring in Lajpat Nagar Delhi | Pravi IVF",
    description: "Track ovulation with high-resolution follicular monitoring in Lajpat Nagar, Delhi. Expert fertility tracking at Pravi Global IVF ensures precise timing for natural conception, IUI, and IVF.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "248",
                "bestRating": "5"
              },
        "name": "Follicular Monitoring in Lajpat Nagar Delhi",
        "description": "Leading IVF Center in Lajpat Nagar providing advanced follicular monitoring and ultrasound tracking to maximize your chances of pregnancy.",
        "url": "https://praviglobalivf.com",
        "logo": "https://praviglobalivf.com/logo.png",
        "image": "https://praviglobalivf.com/images/og-image.jpg",
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
          "Ultrasound"
        ]
      },
      {
        "@type": "MedicalWebPage",
        "name": "Follicular Monitoring in Lajpat Nagar Delhi",
        "description": "Comprehensive EEAT-compliant guide on follicular monitoring, predicting ovulation, tracking cycles, and boosting natural or assisted conception.",
        "url": "https://praviglobalivf.com/follicular-monitoring-in-lajpat-nagar-delhi/",
        "about": {
          "@type": "MedicalTest",
          "name": "Follicular Monitoring in Lajpat Nagar Delhi"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Follicular Monitoring in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the procedure involves a simple transvaginal ultrasound scan. It uses a very slim, smooth wand. It is completely painless and takes only five to ten minutes to finish."
            }
          },
          {
            "@type": "Question",
            "name": "Follicular Monitoring in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, you will need 3 to 5 easy scans in one single cycle. We start around day 9 of your period and scan every two days to carefully track the exact growth."
            }
          },
          {
            "@type": "Question",
            "name": "Follicular Monitoring in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Tracking effectively helps couples simply plan intercourse during the single most fertile 24-hour period. It removes all guessing for natural conception."
            }
          },
          {
            "@type": "Question",
            "name": "Follicular Monitoring in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is strongly advised for women undergoing any fertility treatments like IUI or IVF, or for women with highly irregular cycles and PCOS."
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
