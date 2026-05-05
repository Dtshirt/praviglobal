export const metadata = {
  title: "Hormonal Test for Fertility in Delhi | Pravi IVF",
  description:
    "Highly accurate hormonal tests at Pravi IVF to diagnose male and female fertility issues.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://praviglobalivf.com/hormonal-test/`,
  },
  openGraph: {
    title: "Hormonal Test for Fertility | Pravi Global IVF Polyclinic Delhi",
    description:
      "Highly accurate hormonal tests at Pravi IVF to diagnose male and female fertility issues.",
    url: `https://praviglobalivf.com/hormonal-test/`,
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
    title: "Hormonal Test for Fertility | Pravi Global IVF Polyclinic Delhi",
    description:
      "Get advanced hormonal test services in Delhi at Pravi Global IVF Polyclinic for evaluating fertility and reproductive health.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://praviglobalivf.com/#clinic",
        "name": "Pravi Global IVF Polyclinic",
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
        "@id": "https://praviglobalivf.com/hormonal-test/#webpage",
        "url": "https://praviglobalivf.com/hormonal-test/",
        "name": "Hormonal Test for Fertility",
        "headline": "Hormonal Testing for Male and Female Infertility",
        "about": {
          "@type": "MedicalTest",
          "name": "Hormonal Blood Test"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should I get a hormonal test done?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you experience irregular periods, difficulty conceiving for over a year, or have symptoms of thyroid imbalance, testing is strongly recommended."
            }
          },
          {
            "@type": "Question",
            "name": "Is fasting required before hormonal tests?",
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
