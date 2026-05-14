export const metadata = {
  title: 'Best IVF Centre In Vasant Vihar, New Delhi | Elite Fertility Care',
  description: 'Looking for the Best IVF Centre In Vasant Vihar, New Delhi? Our clinic offers advanced IVF Treatment In Vasant Vihar and IUI Treatment Delhi with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-vasant-vihar-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre In Vasant Vihar, New Delhi | Premium Fertility Care',
    description: 'Expert IVF Treatment In Vasant Vihar at the leading Fertility Centre In Vasant Vihar. Achieve your parenthood dreams with the Best IVF Doctor In Vasant Vihar.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-vasant-vihar-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function VasantViharLayout({ children }) {
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
              "name": "Best IVF Centre In Vasant Vihar, New Delhi",
              "description": "Elite Fertility Centre In Vasant Vihar offering advanced IVF Treatment In Vasant Vihar.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-vasant-vihar-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vasant Vihar",
                "addressRegion": "New Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Vasant Vihar", "South Delhi", "Chanakyapuri", "RK Puram"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes you the Best IVF Clinic In Vasant Vihar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic is recognized for its High IVF Success Rate Delhi, personalized care from the Best IVF Doctor In Vasant Vihar, and world-class laboratory standards."
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
