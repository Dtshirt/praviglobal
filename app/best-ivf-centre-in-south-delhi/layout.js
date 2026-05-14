export const metadata = {
  title: 'Best IVF Centre in South Delhi | Highest Success Fertility Clinic',
  description: 'Looking for the best IVF centre in South Delhi? Our leading fertility clinic offers advanced IVF, IUI, and ICSI treatments with high success rates. Book your free consultation today!',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-south-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre in South Delhi | Highest Success Fertility Clinic',
    description: 'Start your journey to parenthood with South Delhi\'s top-rated IVF clinic. Advanced technology, high success rates, and compassionate care.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-south-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    title: 'Best IVF Centre in South Delhi',
    description: 'Start your journey to parenthood with South Delhi\'s top-rated IVF clinic. Advanced technology, high success rates, and compassionate care.',
  }
};

export default function SouthDelhiLayout({ children }) {
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
              "name": "Pravi Global IVF Centre South Delhi",
              "description": "Best IVF Centre in South Delhi offering advanced fertility treatments.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-south-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "South Delhi",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Lajpat Nagar", 
                "Greater Kailash", 
                "Green Park", 
                "South Extension", 
                "Defence Colony"
              ],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best IVF centre in South Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic is recognized as a premier destination due to our state-of-the-art Class 100 IVF lab, highly experienced fertility specialists, ethical transparency, and consistently high success rates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the average IVF cost in South Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost varies depending on the specific medications required and whether advanced techniques like ICSI or Laser Hatching are needed. We offer highly affordable, transparent packages with EMI options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the IVF procedure painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, IVF is a virtually painless process. The daily injections use tiny needles, and the actual egg retrieval procedure is performed under short, light anesthesia."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can PCOS patients conceive through IVF?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Women with PCOS often have excellent IVF success rates because they possess a high ovarian reserve (many eggs). We use specialized protocols to ensure a safe, successful cycle."
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
