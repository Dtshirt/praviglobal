export const metadata = {
  title: 'Needle-Free IVF Injection Technology in Delhi | Pravi Global IVF',
  description: 'Pravi Global IVF Delhi offers advanced needle-free injection technology for IVF and fertility treatments. Experience comfortable, modern fertility care with advanced reproductive technology.',
  alternates: {
    canonical: 'https://praviglobalivf.com/needle-free-ivf-injection',
  },
  openGraph: {
    title: 'Advanced Needle-Free IVF Injection Technology | Pravi Global IVF',
    description: 'Experience a more comfortable fertility treatment journey with advanced needle-free medication delivery at Pravi Global IVF.',
    url: 'https://praviglobalivf.com/needle-free-ivf-injection',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NeedleFreeLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "Advanced Needle-Free Injection Technology for IVF",
              "description": "Information about painless needle-free injection technology used in IVF treatments at Pravi Global IVF Delhi.",
              "url": "https://praviglobalivf.com/needle-free-ivf-injection",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "248",
                "bestRating": "5"
              },
              "mainEntity": {
                "@type": "MedicalTechnology",
                "name": "Needle-Free Injection Technology",
                "description": "A pressure-based medication delivery system that eliminates the need for needles in IVF injections."
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
                "reviewBody": "The needle-free injection made my IVF treatment so comfortable. Highly recommend this technology for anyone with needle anxiety!"
              }
            }
          ])
        }}
      />
      {children}
    </>
  );
}
