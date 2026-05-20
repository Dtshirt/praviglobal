export const metadata = {
  title: 'Best IVF Centre in Lajpat Nagar, Delhi | High Success IVF Clinic',
  description: 'Looking for the best IVF centre in Lajpat Nagar, Delhi? Our top fertility clinic offers advanced IVF, IUI & ICSI treatments with high success rates. Book a free consultation today!',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-lajpat-nagar-delhi',
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: 'Best IVF Centre in Lajpat Nagar, Delhi | High Success IVF Clinic',
    description: 'Looking for the best IVF centre in Lajpat Nagar, Delhi? Our top fertility clinic offers advanced IVF, IUI & ICSI treatments with high success rates.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-lajpat-nagar-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LajpatNagarLayout({ children }) {
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
              "name": "Pravi Global IVF Centre Lajpat Nagar",
              "description": "Best IVF Centre in Lajpat Nagar, Delhi offering advanced fertility treatments.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-lajpat-nagar-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lajpat Nagar",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"],
              "availableService": [
                {
                  "@type": "MedicalTest",
                  "name": "In Vitro Fertilization (IVF)"
                },
                {
                  "@type": "MedicalTest",
                  "name": "Intrauterine Insemination (IUI)"
                },
                {
                  "@type": "MedicalTest",
                  "name": "Intracytoplasmic Sperm Injection (ICSI)"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best IVF centre in Lajpat Nagar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic is widely recognized as a top fertility centre due to our advanced IVF lab, experienced specialists, ethical practices, and consistently high success rates in complex infertility cases."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the average IVF treatment cost in Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost varies based on the individual protocol, medications needed, and advanced techniques (like ICSI or PGT). We offer transparent, affordable pricing with EMI options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the IVF procedure painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, IVF is generally not painful. The daily hormone injections use very fine needles, and egg retrieval is done under light anesthesia, so you feel no pain."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the true IVF success rate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Success rates depend heavily on the woman's age and the cause of infertility. Generally, women under 35 have up to a 65-75% chance of success per cycle at our advanced facility."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can PCOS patients get pregnant through IVF?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. In fact, women with PCOS often have excellent IVF success rates because they produce a high number of eggs. We use specialized protocols to ensure safety."
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
