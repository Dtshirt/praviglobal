export const metadata = {
  title: 'Electronic Witness System (EWS) in IVF | IVF Lab Safety | Pravi IVF',
  description: 'The Electronic Witness System (EWS) is a safety technology in IVF labs to prevent gamete or embryo mix-ups. Learn how EWS ensures 100% accuracy at Pravi IVF.',
  alternates: {
    canonical: 'https://praviglobalivf.com/electronic-witness-system',
  },
  openGraph: {
    title: 'Electronic Witness System (EWS) in IVF | Pravi IVF',
    description: 'Ensure 100% safety and traceability in your IVF journey with our Electronic Witness System. Digital double-checks for your peace of mind.',
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
