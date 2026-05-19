export const metadata = {
  title: "Best Fertility Specialist in Lajpat Nagar Delhi | Pravi IVF",
  description: "Consult the best fertility specialist in Lajpat Nagar, Delhi at Pravi IVF. Led by Dr. Monica Sachdev (18+ years exp), our expert doctors deliver high-success IVF treatments.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/fertility-specialist-in-lajpat-nagar-delhi",
  },
  openGraph: {
    title: "Best Fertility Specialist in Lajpat Nagar Delhi | Pravi IVF",
    description:
      "Consult the top-rated fertility specialists in Lajpat Nagar, Delhi. Led by Dr. Monica Sachdev with 18+ years of expertise. Highly successful and personalized fertility treatments.",
    url: "https://praviglobalivf.com/fertility-specialist-in-lajpat-nagar-delhi",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Fertility Specialist in Lajpat Nagar Delhi - Pravi Global IVF",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fertility Specialist in Lajpat Nagar Delhi | Pravi IVF",
    description:
      "Get treatment from Delhi's leading fertility specialists in Lajpat Nagar. State-of-the-art IVF clinic with highly successful and caring medical team.",
    images: ["/images/og-image.jpg"],
  },
};

export default function FertilitySpecialistLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "248",
                "bestRating": "5"
              },
              "name": "Pravi Global IVF Polyclinic",
              "description": "Best Fertility Clinic in Lajpat Nagar, Delhi with top-rated fertility specialists.",
              "url": "https://praviglobalivf.com/fertility-specialist-in-lajpat-nagar-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lajpat Nagar",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is the best fertility specialist in Lajpat Nagar Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Monica Sachdev (Medical Director & Senior IVF Specialist) with over 18+ years of clinical excellence, along with Dr. Ankita and the team at Pravi IVF, are highly recognized as the top fertility specialists in Lajpat Nagar Delhi."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What treatments do fertility specialists in Lajpat Nagar offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our fertility specialists offer comprehensive treatments including IVF (In Vitro Fertilization), IUI (Intrauterine Insemination), ICSI, Egg Freezing, PCOS management, and advanced male infertility solutions (TESA/PESA)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I choose a fertility doctor in Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ensure the doctor has a recognized postgraduate medical degree (like MS or DNB) in Obs & Gynae, advanced fellowship training in Reproductive Medicine, over a decade of experience, and transparent ethical protocols."
                  }
                }
              ]
            }
          ])
        }}
      />
      {children}
    </>
  );
}
