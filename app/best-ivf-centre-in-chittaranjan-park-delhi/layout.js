export const metadata = {
  title: 'Best IVF Centre In Chittaranjan Park, New Delhi | High Success IVF',
  description: 'Looking for the Best IVF Centre In Chittaranjan Park, New Delhi? Our clinic offers advanced IVF Treatment In Chittaranjan Park and IUI Treatment Delhi with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-chittaranjan-park-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre In Chittaranjan Park, New Delhi | Premium Fertility Care',
    description: 'Expert IVF Treatment In Chittaranjan Park at the leading Fertility Centre In CR Park. Achieve your parenthood dreams with the Best IVF Doctor In Chittaranjan Park.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-chittaranjan-park-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CRParkLayout({ children }) {
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
              "name": "Best IVF Centre In Chittaranjan Park, New Delhi",
              "description": "Leading Fertility Centre In CR Park offering advanced IVF Treatment In Chittaranjan Park.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-chittaranjan-park-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chittaranjan Park",
                "addressRegion": "New Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Chittaranjan Park", "South Delhi", "Kalkaji", "Greater Kailash", "Alaknanda"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes you the Best IVF Clinic In CR Park?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic is recognized for its High IVF Success Rate Delhi, personalized care from the Best IVF Doctor In Chittaranjan Park, and ethical medical practices."
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
