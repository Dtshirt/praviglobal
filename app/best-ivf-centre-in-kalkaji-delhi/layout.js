export const metadata = {
  title: 'Best IVF Centre In Kalkaji, New Delhi | High Success Fertility Clinic',
  description: 'Searching for the Best IVF Centre In Kalkaji, New Delhi? Our clinic offers advanced IVF Treatment In Kalkaji and IUI Treatment Delhi with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-kalkaji-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre In Kalkaji, New Delhi | Compassionate Fertility Care',
    description: 'Expert IVF Treatment In Kalkaji at the leading Fertility Centre In Kalkaji. Achieve your parenthood dreams with the Best IVF Doctor In Kalkaji.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-kalkaji-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function KalkajiLayout({ children }) {
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
              "name": "Best IVF Centre In Kalkaji, New Delhi",
              "description": "Leading Fertility Centre In Kalkaji offering advanced IVF Treatment In Kalkaji.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-kalkaji-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kalkaji",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Kalkaji", "Nehru Place", "CR Park", "South Delhi"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is IVF treatment expensive in South Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide Affordable IVF Treatment Delhi at our Kalkaji centre with transparent pricing and EMI options, ensuring the Best IVF Doctor In Kalkaji is accessible to everyone."
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
