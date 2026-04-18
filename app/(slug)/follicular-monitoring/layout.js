export const metadata = {
  title: "Follicular Monitoring in Delhi | Best IVF Center In Delhi",
  description:
    "Pravi Global IVF Polyclinic offers advanced follicular monitoring in Delhi. As a trusted IVF Center in Lajpat Nagar, we track ovulation accurately via ultrasound for high conception success.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/follicular-monitoring",
  },
  openGraph: {
    title: "Follicular Monitoring in Delhi | Best IVF Center In Delhi",
    description:
      "Get precise follicular monitoring in Delhi at Pravi Global IVF Polyclinic. Our fertility experts use ultrasound tracking to monitor ovulation and improve your chances of conception.",
    url: "https://praviglobalivf.com/follicular-monitoring",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/follicular-monitoring.jpg",
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
    title: "Follicular Monitoring in Delhi | Best IVF Center In Delhi",
    description:
      "Accurate follicular monitoring in Delhi by expert fertility specialists at Pravi Global IVF Polyclinic. Track ovulation and optimize conception with advanced ultrasound scans.",
    images: ["/images/follicular-monitoring.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Pravi Global IVF Polyclinic",
        "description": "Leading IVF Center in Lajpat Nagar providing advanced follicular monitoring and ultrasound tracking to maximize your chances of pregnancy.",
        "url": "https://praviglobalivf.com",
        "logo": "https://praviglobalivf.com/logo.png",
        "image": "https://praviglobalivf.com/images/follicular-monitoring.jpg",
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
        "name": "Follicular Monitoring Ultrasound Guide",
        "description": "Comprehensive EEAT-compliant guide on follicular monitoring, predicting ovulation, tracking cycles, and boosting natural or assisted conception.",
        "url": "https://praviglobalivf.com/follicular-monitoring",
        "about": {
          "@type": "MedicalTest",
          "name": "Follicular Monitoring Ultrasound"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is follicular monitoring painful?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the procedure involves a simple transvaginal ultrasound scan. It uses a very slim, smooth wand. It is completely painless and takes only five to ten minutes to finish."
            }
          },
          {
            "@type": "Question",
            "name": "How many scans are needed per cycle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, you will need 3 to 5 easy scans in one single cycle. We start around day 9 of your period and scan every two days to carefully track the exact growth."
            }
          },
          {
            "@type": "Question",
            "name": "Can it help with natural conception?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Tracking effectively helps couples simply plan intercourse during the single most fertile 24-hour period. It removes all guessing for natural conception."
            }
          },
          {
            "@type": "Question",
            "name": "When is follicular monitoring highly recommended?",
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
