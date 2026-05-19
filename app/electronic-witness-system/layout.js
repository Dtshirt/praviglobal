export const metadata = {
  title: 'Electronic Witness System in Lajpat Nagar Delhi | Pravi IVF',
  description: 'Advanced Electronic Witness System (EWS) in Lajpat Nagar, Delhi at Pravi IVF. Guaranteeing 100% lab security, tracking, and specimen accuracy throughout your journey.',
  alternates: {
    canonical: 'https://praviglobalivf.com/electronic-witness-system',
  },
  openGraph: {
    title: 'Electronic Witness System in Lajpat Nagar Delhi | Pravi IVF',
    description: 'Advanced Electronic Witness System (EWS) in Lajpat Nagar, Delhi at Pravi IVF. Guaranteeing 100% lab security, tracking, and specimen accuracy throughout your journey.',
    url: 'https://praviglobalivf.com/electronic-witness-system',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function EWSLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "Electronic Witness System (EWS) in IVF Lab",
              "description": "Information about the Electronic Witness System (EWS) used in IVF labs for patient safety and sample tracking.",
              "url": "https://praviglobalivf.com/electronic-witness-system",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "248",
                "bestRating": "5"
              },
              "mainEntity": {
                "@type": "MedicalTechnology",
                "name": "Electronic Witness System",
                "description": "A digital tracking system using RFID or barcodes to prevent sample mix-ups in IVF laboratories."
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Verified Patient"
                },
                "reviewBody": "Excellent safety protocols. The Electronic Witness System gave us so much peace of mind during our IVF journey."
              }
            }
          ])
        }}
      />
      {children}
    </>
  );
}
