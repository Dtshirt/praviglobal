export const metadata = {
  title: 'Best IVF Centre In Defence Colony, New Delhi | Premium Fertility Clinic',
  description: 'Looking for the Best IVF Centre In Defence Colony, New Delhi? Our IVF Hospital In South Delhi provides advanced IVF Treatment In Defence Colony with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-defence-colony-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre In Defence Colony, New Delhi | Elite Fertility Care',
    description: 'The leading Fertility Centre In Defence Colony. Specialized IVF Treatment In Defence Colony by the Best IVF Doctor In Defence Colony.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-defence-colony-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DefenceColonyLayout({ children }) {
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
              "name": "Best IVF Centre In Defence Colony, New Delhi",
              "description": "Premium Fertility Centre In Defence Colony offering advanced IVF Treatment In Defence Colony.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-defence-colony-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Defence Colony",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Defence Colony", "South Extension", "Lajpat Nagar", "South Delhi"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes you the Best IVF Clinic In Defence Colony?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic is renowned for High IVF Success Rate Delhi, personalized care from the Best IVF Doctor In Defence Colony, and a state-of-the-art IVF Hospital In South Delhi."
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
