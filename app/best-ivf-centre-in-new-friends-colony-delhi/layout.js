export const metadata = {
  title: 'Best IVF Centre In New Friends Colony, New Delhi | High Success IVF',
  description: 'Looking for the Best IVF Centre In New Friends Colony, New Delhi? Our clinic offers advanced IVF Treatment In New Friends Colony and IUI Treatment Delhi with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-new-friends-colony-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre In New Friends Colony, New Delhi | Premium Fertility Care',
    description: 'Expert IVF Treatment In New Friends Colony at the leading Fertility Centre In NFC. Achieve your parenthood dreams with the Best IVF Doctor In New Friends Colony.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-new-friends-colony-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NFCLayout({ children }) {
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
              "name": "Best IVF Centre In New Friends Colony, New Delhi",
              "description": "Leading Fertility Centre In NFC offering advanced IVF Treatment In New Friends Colony.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-new-friends-colony-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Friends Colony",
                "addressRegion": "New Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["New Friends Colony", "South Delhi", "Maharani Bagh", "Sarita Vihar", "Jangpura"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes you the Best IVF Clinic In New Friends Colony?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic is recognized for its High IVF Success Rate Delhi, personalized care from the Best IVF Doctor In New Friends Colony, and world-class laboratory standards."
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
