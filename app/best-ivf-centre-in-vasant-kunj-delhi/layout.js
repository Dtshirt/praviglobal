export const metadata = {
  title: 'Best IVF Centre In Vasant Kunj, Delhi | High Success IVF Clinic',
  description: 'Searching for the Best IVF Centre In Vasant Kunj, Delhi? Our clinic offers advanced IVF Treatment In Vasant Kunj and IUI Treatment Delhi with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-vasant-kunj-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre In Vasant Kunj, Delhi | Premium Fertility Care',
    description: 'Expert IVF Treatment In Vasant Kunj at the leading Fertility Centre In Vasant Kunj. Achieve your parenthood dreams with the Best IVF Doctor In Vasant Kunj.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-vasant-kunj-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function VasantKunjLayout({ children }) {
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
              "name": "Best IVF Centre In Vasant Kunj, Delhi",
              "description": "Leading Fertility Centre In Vasant Kunj offering advanced IVF Treatment In Vasant Kunj.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-vasant-kunj-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vasant Kunj",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Vasant Kunj", "South Delhi", "Vasant Vihar", "Chattarpur"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes you the Best IVF Clinic In Vasant Kunj?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic is recognized for its High IVF Success Rate Delhi, personalized care from the Best IVF Doctor In Vasant Kunj, and ethical medical practices."
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
