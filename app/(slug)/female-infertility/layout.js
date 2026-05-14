export const metadata = {
  title: "Female Infertility Treatment in Delhi | Expert Care | Pravi IVF",
  description:
    "Advanced female infertility treatment in Delhi at Pravi IVF. Expert diagnosis and care for PCOS, blocked tubes, and more. Book your consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/female-infertility/",
  },
  openGraph: {
    title: "Female Infertility Treatment in Delhi | Pravi Global IVF",
    description:
      "Get expert female infertility treatment in Delhi at Pravi Global IVF Polyclinic. Our doctors safely treat PCOS, hormonal imbalance, and reproductive health issues for successful conception.",
    url: "https://praviglobalivf.com/female-infertility/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Female Infertility Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Female Infertility Treatment in Delhi | Pravi Global IVF",
    description:
      "Advanced female infertility treatment in Delhi by experienced fertility doctors at Pravi Global IVF Polyclinic. Diagnosis and treatment for PCOS, hormonal imbalance, and ovulation disorders.",
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
        "name": "Pravi Global IVF Polyclinic",
        "description": "Leading IVF Center in Lajpat Nagar specializing in comprehensive female infertility treatment, PCOS management, and advanced reproductive care.",
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
        "name": "Female Infertility Treatment Guidelines & Options",
        "description": "Comprehensive EEAT-compliant guide on female infertility, common causes, modern diagnostic testing, and treatment options at Pravi Global IVF.",
        "url": "https://praviglobalivf.com/female-infertility/",
        "about": {
          "@type": "MedicalCondition",
          "name": "Female Infertility",
          "associatedAnatomy": {
            "@type": "AnatomicalStructure",
            "name": "Female Reproductive System"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is female infertility exactly diagnosed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through very simple medical tests like hormonal blood typing, clear ultrasound pictures, HSG (safe tube test), and light laparoscopy, depending entirely on your condition."
            }
          },
          {
            "@type": "Question",
            "name": "Can infertility be treated completely naturally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In mild cases, simple lifestyle changes, health diets, and careful ovulation tracking may help. For others, safe medical treatments are much faster and more effective."
            }
          },
          {
            "@type": "Question",
            "name": "When exactly should I see a fertility specialist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you are under 35 years old and have tried for a full year without success, or if you are over 35 and tried for just 6 months, you should loudly consult a trusted specialist."
            }
          },
          {
            "@type": "Question",
            "name": "Is IVF the only real solution?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely not. Treatments vary greatly depending on the exact cause. IVF is just one option among many, including safe IUI and gentle medication-based therapies."
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
