export const metadata = {
  title: "ICSI Treatment in Lajpat Nagar Delhi | Pravi IVF",
  description: "Specialized ICSI treatment in Lajpat Nagar, Delhi at Pravi Global IVF. Our expert embryologists inject single healthy sperm directly into eggs to resolve severe male factor infertility.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/icsi-treatment-in-lajpat-nagar-delhi/",
  },
  openGraph: {
    title: "ICSI Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Specialized ICSI treatment in Lajpat Nagar, Delhi at Pravi Global IVF. Our expert embryologists inject single healthy sperm directly into eggs to resolve severe male factor infertility.",
    url: "https://praviglobalivf.com/icsi-treatment-in-lajpat-nagar-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ICSI Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICSI Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Specialized ICSI treatment in Lajpat Nagar, Delhi at Pravi Global IVF. Our expert embryologists inject single healthy sperm directly into eggs to resolve severe male factor infertility.",
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
        "name": "ICSI Treatment in Lajpat Nagar Delhi",
        "description": "Leading IVF Center in Lajpat Nagar offering advanced Intracytoplasmic Sperm Injection (ICSI) for overcoming severe male factor infertility.",
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
          "Urologic",
          "LaboratoryScience"
        ]
      },
      {
        "@type": "MedicalWebPage",
        "name": "ICSI Treatment in Lajpat Nagar Delhi",
        "description": "Comprehensive EEAT-compliant guide explaining the ICSI process, treating poor sperm counts, laboratory fertilization, and boosting pregnancy success rates.",
        "url": "https://praviglobalivf.com/icsi-treatment-in-lajpat-nagar-delhi/",
        "about": {
          "@type": "MedicalProcedure",
          "name": "ICSI Treatment in Lajpat Nagar Delhi",
          "bodyLocation": "Laboratory"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ICSI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Success rates strongly depend on the mother's current precise age and overall physical egg quality. However, brilliantly using this advanced microscopic method typically powerfully results in an incredible 70% to 80% successful fertilization rate exactly in the lab."
            }
          },
          {
            "@type": "Question",
            "name": "ICSI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not at all. For the mother, the physical medical process feels exactly identical to a normal IVF cycle using the same safe medications."
            }
          },
          {
            "@type": "Question",
            "name": "ICSI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ICSI is a globally recognized, highly safe medical procedure that has been beautifully used for decades. The vast majority of babies wonderfully born carefully through this advanced method are perfectly healthy."
            }
          },
          {
            "@type": "Question",
            "name": "ICSI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The entire medical cycle usually securely safely takes about four to six weeks from taking the first medication to officially firmly having the healthy embryo transferred back into the waiting womb."
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
