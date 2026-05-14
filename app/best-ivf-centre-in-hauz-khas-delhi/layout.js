export const metadata = {
  title: 'Best IVF Centre in Hauz Khas, New Delhi | High Success Rate',
  description: 'Searching for the best IVF centre in Hauz Khas, New Delhi? Our South Delhi clinic offers advanced IVF, IUI, & ICSI with compassionate care. Start your journey today.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-hauz-khas-delhi',
  },
  openGraph: {
    title: 'Best IVF Centre in Hauz Khas, New Delhi | Compassionate Care',
    description: 'Experience world-class fertility care at the leading IVF clinic in Hauz Khas. Personalized treatments and emotional support for every couple in South Delhi.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-hauz-khas-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HauzKhasLayout({ children }) {
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
              "name": "Pravi Global IVF Centre Hauz Khas",
              "description": "Best IVF Centre in Hauz Khas, New Delhi offering advanced fertility treatments.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-hauz-khas-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hauz Khas",
                "addressRegion": "New Delhi",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Hauz Khas", 
                "Green Park", 
                "Safdarjung Enclave", 
                "Malviya Nagar", 
                "IIT Delhi Area",
                "South Delhi"
              ],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the IVF process painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many couples visiting our IVF clinic in Hauz Khas often ask if it hurts. Honestly, most patients experience only mild discomfort. The injections use tiny needles, and the egg retrieval is done under light anesthesia, so you won't feel anything."
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
