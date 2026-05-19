export const metadata = {
  title: "Male Infertility Treatment in Lajpat Nagar Delhi | Pravi IVF",
  description: "Struggling with conception? Advanced male infertility treatment in Lajpat Nagar, Delhi. Pravi Global IVF offers precise semen analysis, hormonal therapies, and high-success TESA/PESA solutions.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/male-infertility-treatment-in-lajpat-nagar-delhi/",
  },
  openGraph: {
    title: "Male Infertility Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Struggling with conception? Advanced male infertility treatment in Lajpat Nagar, Delhi. Pravi Global IVF offers precise semen analysis, hormonal therapies, and high-success TESA/PESA solutions.",
    url: "https://praviglobalivf.com/male-infertility-treatment-in-lajpat-nagar-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Male Infertility Treatment at Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Male Infertility Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Struggling with conception? Advanced male infertility treatment in Lajpat Nagar, Delhi. Pravi Global IVF offers precise semen analysis, hormonal therapies, and high-success TESA/PESA solutions.",
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
        "name": "Male Infertility Treatment in Lajpat Nagar Delhi",
        "description": "Leading IVF Center in Lajpat Nagar specializing in advanced male infertility treatment, precise semen analysis, TESA/PESA, and comprehensive reproductive healthcare.",
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
          "Urology",
          "Surgical"
        ]
      },
      {
        "@type": "MedicalWebPage",
        "name": "Male Infertility Treatment in Lajpat Nagar Delhi | Pravi IVF",
        "description": "Comprehensive EEAT-compliant medical guide on male infertility causes, modern semen DNA fragmentation checks, hormonal balancing, and TESA/PESA options.",
        "url": "https://praviglobalivf.com/male-infertility-treatment-in-lajpat-nagar-delhi/",
        "about": {
          "@type": "MedicalCondition",
          "name": "Male Infertility",
          "associatedAnatomy": {
            "@type": "AnatomicalStructure",
            "name": "Male Reproductive System"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can male infertility be completely cured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many causes are highly treatable. While not every single biological condition has a direct 'cure' in a simple way, the vast majority of male fertility challenges can be successfully managed. Through advanced male infertility treatment in lajpat nagar delhi—such as medical therapy, lifestyle adjustments, surgical sperm collection, or ICSI—couples can achieve healthy pregnancies. Our experts at Pravi IVF specialize in finding the precise clinical path for your unique situation."
            }
          },
          {
            "@type": "Question",
            "name": "How do lifestyle habits affect sperm health and male fertility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sperm production is highly sensitive to daily lifestyle choices. High stress levels, smoking, heavy drinking, and excessive heat exposure can significantly lower both sperm count and motility. The good news is that sperm takes about 72 to 90 days to develop. By making positive dietary upgrades and starting correct medical supplements under the guidance of a top fertility specialist in lajpat nagar delhi, you can notice visible improvements in just three months."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical male infertility treatment cost in delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The final cost depends heavily on the specific line of treatment needed. If a patient only requires simple hormonal medicines or basic lifestyle supplements, the cost is very minimal. However, if advanced procedures like surgical sperm retrieval (TESA/PESA) or ICSI are required, the overall ivf treatment cost in delhi will vary. At Pravi IVF, the best ivf centre in lajpat nagar delhi, we provide a complete, transparent fee breakdown during your first visit so there are no surprise lab fees later."
            }
          },
          {
            "@type": "Question",
            "name": "Is a low sperm count the only cause of male partner infertility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, a normal sperm count is only one part of the fertility equation. Sometimes a semen test shows plenty of sperm, but they might have poor movement (motility) or abnormal shapes (morphology), making it difficult to fertilize the egg naturally. In other cases, high DNA fragmentation or structural blockages are the real issues. This is why a complete semen evaluation at a certified ivf centre in lajpat nagar delhi is crucial."
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
