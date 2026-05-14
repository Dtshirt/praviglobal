export const metadata = {
  title: 'IVF Clinic In Saket, Delhi | Best Fertility Doctor In Saket Delhi',
  description: 'Looking for the best IVF Clinic In Saket, Delhi? Our IVF Hospital In South Delhi offers advanced IVF Treatment In Saket Delhi and IUI Treatment Saket Delhi with high success.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-saket-delhi',
  },
  openGraph: {
    title: 'IVF Clinic In Saket, Delhi | Fertility Centre In Saket Delhi',
    description: 'The leading Fertility Centre In Saket Delhi. Expert IVF Treatment In Saket Delhi by the Best Fertility Doctor In Saket Delhi.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-saket-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SaketLayout({ children }) {
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
              "name": "Pravi Global IVF Clinic In Saket, Delhi",
              "description": "Leading Fertility Centre In Saket Delhi offering IVF Treatment In Saket Delhi.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-saket-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saket",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Saket Delhi", "South Delhi"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the Best Fertility Doctor In Saket Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clinic features the Best Fertility Doctor In Saket Delhi, specializing in advanced IVF Treatment In Saket Delhi and ICSI Treatment Delhi Delhi."
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
