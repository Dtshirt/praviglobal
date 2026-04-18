export const metadata = {
  title: "IUI Treatment in Delhi | Best IVF Center In Delhi",
  description:
    "Get advanced IUI treatment in Delhi at Pravi Global IVF Polyclinic. As a trusted IVF Center in Lajpat Nagar, our fertility experts provide safe intrauterine insemination.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/iui",
  },
  openGraph: {
    title: "IUI Treatment in Delhi | Best IVF Center In Delhi",
    description:
      "Pravi Global IVF Polyclinic provides advanced IUI treatment in Delhi to assist couples facing infertility safely.",
    url: "https://praviglobalivf.com/iui",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/iui-treatment.jpg",
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
    title: "IUI Treatment in Delhi | Best IVF Center In Delhi",
    description:
      "Get effective IUI treatment in Delhi at Pravi Global IVF Polyclinic. Trusted fertility experts offering advanced intrauterine insemination.",
    images: ["/images/iui-treatment.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Pravi Global IVF Polyclinic",
        "description": "Leading IVF Center in Lajpat Nagar offering advanced, safe Intrauterine Insemination (IUI) treatments.",
        "url": "https://praviglobalivf.com",
        "logo": "https://praviglobalivf.com/logo.png",
        "image": "https://praviglobalivf.com/images/iui-treatment.jpg",
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
        "name": "Intrauterine Insemination (IUI) Guide",
        "description": "Comprehensive EEAT-compliant guide explaining the simplest path to parenthood using safe, painless Intrauterine Insemination (IUI).",
        "url": "https://praviglobalivf.com/iui",
        "about": {
          "@type": "MedicalProcedure",
          "name": "Intrauterine Insemination (IUI)",
          "bodyLocation": "Uterus"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is IUI physically painful?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, IUI is a highly quick and completely painless medical procedure. Most happy women state it physically feels roughly identical to a totally normal routine pap smear."
            }
          },
          {
            "@type": "Question",
            "name": "What is the real mathematical success rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The success rate perfectly mathematically varies between 15% to 25% safely per single cycle, highly depending on exactly the maternal age and precise sperm quality."
            }
          },
          {
            "@type": "Question",
            "name": "How physically long does the insemination procedure officially take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The entire medical insemination physical process takes only about exactly ten to roughly exactly fifteen short minutes, with absolutely zero need for hard surgical anesthesia."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any serious risks to the future growing baby?",
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
