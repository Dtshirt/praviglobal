export const metadata = {
  title: "Hysteroscopy Treatment in Delhi | Expert Care | Pravi IVF",
  description:
    "Advanced hysteroscopy treatment in Delhi at Pravi IVF. Minimally invasive surgery to diagnose and treat uterine issues. Book your consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/hysteroscopy/",
  },
  openGraph: {
    title: "Hysteroscopy Treatment in Delhi | Pravi Global IVF",
    description:
      "Pravi Global IVF Polyclinic offers diagnostic and operative hysteroscopy in Delhi to detect and safely treat uterine abnormalities, improving fertility outcomes.",
    url: "https://praviglobalivf.com/hysteroscopy/",
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
    title: "Hysteroscopy Treatment in Delhi | Pravi Global IVF",
    description:
      "Looking for hysteroscopy in Delhi? Pravi Global IVF Polyclinic provides advanced diagnostic and therapeutic hysteroscopy to enhance fertility and reproductive health.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Pravi Global IVF Polyclinic",
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
        "name": "Hysteroscopy Treatment Guide",
        "description": "Comprehensive EEAT-compliant guide on diagnostic and operative hysteroscopy procedures, finding polyps, fibroids, and making the uterus ready for a healthy pregnancy.",
        "url": "https://praviglobalivf.com/hysteroscopy/",
        "about": {
          "@type": "MedicalProcedure",
          "name": "Hysteroscopy",
          "bodyLocation": "Uterus"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is hysteroscopy painful?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The procedure is safely performed under local or mild general anesthesia, making it completely painless and highly comfortable for the resting patient."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard diagnostic hysteroscopy takes about 15 to 30 minutes in total, while a small operative procedure may take just slightly longer to safely complete."
            }
          },
          {
            "@type": "Question",
            "name": "Is hospitalization required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Hysteroscopy is entirely a day-care fast procedure, meaning you securely wake up and comfortably go home within exactly a very few short hours."
            }
          },
          {
            "@type": "Question",
            "name": "When can I resume normal activities?",
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
