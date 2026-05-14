export const metadata = {
  title: 'Best IVF Centre In Malviya Nagar, New Delhi | High Success IVF',
  description: 'Searching for the Best IVF Centre In Malviya Nagar, New Delhi? Our clinic offers advanced IVF Treatment In Malviya Nagar and IUI Treatment Delhi with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-malviya-nagar-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre In Malviya Nagar, New Delhi | Premium Fertility Care',
    description: 'Expert IVF Treatment In Malviya Nagar at the leading Fertility Centre In Malviya Nagar. Achieve your parenthood dreams with the Best IVF Doctor In Malviya Nagar.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-malviya-nagar-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MalviyaNagarLayout({ children }) {
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
              "name": "Best IVF Centre In Malviya Nagar, New Delhi",
              "description": "Leading Fertility Centre In Malviya Nagar offering advanced IVF Treatment In Malviya Nagar.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-malviya-nagar-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Malviya Nagar",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Malviya Nagar", "South Delhi", "Saket", "Hauz Khas"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is IVF Treatment In Malviya Nagar painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most patients at our IVF Clinic In Malviya Nagar describe the discomfort as mild, similar to period cramps. Egg retrieval is done under light anesthesia for a painless experience."
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
