export const metadata = {
  title: "Hormonal Test in Lajpat Nagar Delhi | Pravi IVF",
  description: "Get highly accurate hormonal test in Lajpat Nagar, Delhi at Pravi Global IVF. Evaluate follicle-stimulating hormone (FSH), AMH levels, and thyroid profiles with modern, automated diagnostics.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://praviglobalivf.com/hormonal-test-in-lajpat-nagar-delhi/`,
  },
  openGraph: {
    title: "Hormonal Test in Lajpat Nagar Delhi | Pravi IVF",
    description: "Get highly accurate hormonal test in Lajpat Nagar, Delhi at Pravi Global IVF. Evaluate follicle-stimulating hormone (FSH), AMH levels, and thyroid profiles with modern, automated diagnostics.",
    url: `https://praviglobalivf.com/hormonal-test-in-lajpat-nagar-delhi/`,
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hormonal Test for Fertility at Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hormonal Test in Lajpat Nagar Delhi | Pravi IVF",
    description: "Get highly accurate hormonal test in Lajpat Nagar, Delhi at Pravi Global IVF. Evaluate follicle-stimulating hormone (FSH), AMH levels, and thyroid profiles with modern, automated diagnostics.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const schema = {
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
        "@id": "https://praviglobalivf.com/#clinic",
        "name": "Hormonal Test in Lajpat Nagar Delhi",
        "description": "Best IVF Center In Delhi specialized in comprehensive fertility treatments including advanced hormonal testing.",
        "url": "https://praviglobalivf.com",
        "telephone": "+91 800 915 0040",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Building number 41, First Floor, Ring Rd, Block Q, Lajpat Nagar IV, Lajpat Nagar",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110024",
          "addressCountry": "IN"
        },
        "medicalSpecialty": ["Gynecologic", "Urologic"],
        "priceRange": "$$"
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://praviglobalivf.com/hormonal-test-in-lajpat-nagar-delhi/#webpage",
        "url": "https://praviglobalivf.com/hormonal-test-in-lajpat-nagar-delhi/",
        "name": "Hormonal Test in Lajpat Nagar Delhi",
        "headline": "Hormonal Test in Lajpat Nagar Delhi",
        "about": {
          "@type": "MedicalTest",
          "name": "Hormonal Test in Lajpat Nagar Delhi"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hormonal Test in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you experience irregular periods, difficulty conceiving for over a year, or have symptoms of thyroid imbalance, testing is strongly recommended."
            }
          },
          {
            "@type": "Question",
            "name": "Hormonal Test in Lajpat Nagar Delhi",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some hormonal tests may require fasting or strict timing during your cycle (like day 2 or 3 of your period). Your doctor will advise you fully."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
