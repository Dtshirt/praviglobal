export const metadata = {
  title: "Hysteroscopy Treatment in Lajpat Nagar Delhi | Pravi IVF",
  description: "Advanced hysteroscopy treatment in Lajpat Nagar, Delhi. Gently diagnose and treat uterine polyps, adhesions, or septums with our expert minimal access gynecologists.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/hysteroscopy-treatment-in-lajpat-nagar-delhi/",
  },
  openGraph: {
    title: "Hysteroscopy Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Advanced hysteroscopy treatment in Lajpat Nagar, Delhi. Gently diagnose and treat uterine polyps, adhesions, or septums with our expert minimal access gynecologists.",
    url: "https://praviglobalivf.com/hysteroscopy-treatment-in-lajpat-nagar-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hysteroscopy Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hysteroscopy Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Advanced hysteroscopy treatment in Lajpat Nagar, Delhi. Gently diagnose and treat uterine polyps, adhesions, or septums with our expert minimal access gynecologists.",
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
        "name": "Hysteroscopy Treatment in Lajpat Nagar Delhi",
        "description": "Leading IVF Center in Lajpat Nagar offering advanced, secure diagnostic and operative hysteroscopy treatments to correctly resolve uterine fertility issues.",
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
          "Surgical"
        ]
      },
      {
        "@type": "MedicalWebPage",
        "name": "Hysteroscopy Treatment in Lajpat Nagar Delhi",
        "description": "Comprehensive EEAT-compliant guide on diagnostic and operative hysteroscopy procedures, finding polyps, fibroids, and making the uterus ready for a healthy pregnancy.",
        "url": "https://praviglobalivf.com/hysteroscopy-treatment-in-lajpat-nagar-delhi/",
        "about": {
          "@type": "MedicalProcedure",
          "name": "Hysteroscopy Treatment in Lajpat Nagar Delhi",
          "bodyLocation": "Uterus"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hysteroscopy Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The procedure is safely performed under local or mild general anesthesia, making it completely painless and highly comfortable for the resting patient."
            }
          },
          {
            "@type": "Question",
            "name": "Hysteroscopy Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard diagnostic hysteroscopy takes about 15 to 30 minutes in total, while a small operative procedure may take just slightly longer to safely complete."
            }
          },
          {
            "@type": "Question",
            "name": "Hysteroscopy Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Hysteroscopy is entirely a day-care fast procedure, meaning you securely wake up and comfortably go home within exactly a very few short hours."
            }
          },
          {
            "@type": "Question",
            "name": "Hysteroscopy Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most recovering women securely and safely resume normal light daily work activities easily within exactly 24 short hours perfectly after the procedure happens."
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
