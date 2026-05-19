export const metadata = {
  title: "IVF Treatment in Lajpat Nagar Delhi | Pravi IVF",
  description: "Overcome fertility blocks with world-class IVF treatment in Lajpat Nagar, Delhi. Led by Dr. Monica Sachdev, our IVF center achieves maximum success with advanced embryology labs.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/ivf-treatment-in-lajpat-nagar-delhi/",
  },
  openGraph: {
    title: "IVF Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Overcome fertility blocks with world-class IVF treatment in Lajpat Nagar, Delhi. Led by Dr. Monica Sachdev, our IVF center achieves maximum success with advanced embryology labs.",
    url: "https://praviglobalivf.com/ivf-treatment-in-lajpat-nagar-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Overcome fertility blocks with world-class IVF treatment in Lajpat Nagar, Delhi. Led by Dr. Monica Sachdev, our IVF center achieves maximum success with advanced embryology labs.",
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
        "name": "IVF Treatment in Lajpat Nagar Delhi",
        "description": "Leading IVF Center in Lajpat Nagar offering widely trusted, highly advanced In Vitro Fertilization (IVF) treatments.",
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
          "Obstetric",
          "Reproductive Medicine"
        ]
      },
      {
        "@type": "MedicalWebPage",
        "name": "IVF Treatment in Lajpat Nagar Delhi",
        "description": "A comprehensive EEAT-compliant patient guide detailing the IVF treatment process, embryo transfers, and overcoming blocked fallopian tubes.",
        "url": "https://praviglobalivf.com/ivf-treatment-in-lajpat-nagar-delhi/",
        "about": {
          "@type": "MedicalProcedure",
          "name": "IVF Treatment in Lajpat Nagar Delhi",
          "bodyLocation": "Uterus, Ovaries"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "IVF Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the entire egg collection procedure is safely performed while you are comfortably asleep using mild sedation medicine. You feel zero pain during the 15-minute procedure."
            }
          },
          {
            "@type": "Question",
            "name": "IVF Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Modern science safely discourages strict bed rest. Following your embryo transfer procedure, you rest at the clinic for about thirty minutes, then return gently to your normal daily routine."
            }
          },
          {
            "@type": "Question",
            "name": "IVF Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely not. The resulting children possess the exact same intelligence, physical health, and biological traits as completely naturally conceived children."
            }
          },
          {
            "@type": "Question",
            "name": "IVF Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The financial cost strictly depends on the exact daily medicine required combined with standard laboratory fees. We promise complete financial transparency upfront."
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
