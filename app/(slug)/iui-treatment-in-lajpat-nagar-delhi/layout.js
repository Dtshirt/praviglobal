export const metadata = {
  title: "IUI Treatment in Lajpat Nagar Delhi | Pravi IVF",
  description: "Experience painless and affordable IUI in Lajpat Nagar, Delhi. Pravi Global IVF delivers high success rates with customized intrauterine insemination under senior medical care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/iui-treatment-in-lajpat-nagar-delhi/",
  },
  openGraph: {
    title: "IUI Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Experience painless and affordable IUI in Lajpat Nagar, Delhi. Pravi Global IVF delivers high success rates with customized intrauterine insemination under senior medical care.",
    url: "https://praviglobalivf.com/iui-treatment-in-lajpat-nagar-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IUI Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IUI Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Experience painless and affordable IUI in Lajpat Nagar, Delhi. Pravi Global IVF delivers high success rates with customized intrauterine insemination under senior medical care.",
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
        "name": "IUI Treatment in Lajpat Nagar Delhi",
        "description": "Leading IVF Center in Lajpat Nagar offering advanced, safe Intrauterine Insemination (IUI) treatments.",
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
          "Obstetric"
        ]
      },
      {
        "@type": "MedicalWebPage",
        "name": "IUI Treatment in Lajpat Nagar Delhi",
        "description": "Comprehensive EEAT-compliant guide explaining the simplest path to parenthood using safe, painless Intrauterine Insemination (IUI).",
        "url": "https://praviglobalivf.com/iui-treatment-in-lajpat-nagar-delhi/",
        "about": {
          "@type": "MedicalProcedure",
          "name": "IUI Treatment in Lajpat Nagar Delhi",
          "bodyLocation": "Uterus"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "IUI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, IUI is a highly quick and completely painless medical procedure. Most happy women state it physically feels roughly identical to a totally normal routine pap smear."
            }
          },
          {
            "@type": "Question",
            "name": "IUI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The success rate perfectly mathematically varies between 15% to 25% safely per single cycle, highly depending on exactly the maternal age and precise sperm quality."
            }
          },
          {
            "@type": "Question",
            "name": "IUI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The entire medical insemination physical process takes only about exactly ten to roughly exactly fifteen short minutes, with absolutely zero need for hard surgical anesthesia."
            }
          },
          {
            "@type": "Question",
            "name": "IUI Treatment in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. This simply gives normal healthy biology a simple medical head start. The resulting born baby is entirely identical strongly in normal health perfectly to a naturally safely created child."
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
