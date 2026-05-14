export const metadata = {
  title: 'Best IVF Clinic In Greater Kailash | IVF Centre In GK Delhi | High Success',
  description: 'Looking for the Best IVF Clinic In Greater Kailash? Our IVF Hospital In GK offers advanced IVF Treatment In Greater Kailash & IUI Treatment Delhi with High IVF Success Rate Delhi.',
  alternates: {
    canonical: 'https://praviglobalivf.com/best-ivf-centre-in-greater-kailash-delhi',
  },
  openGraph: {
    title: 'Best IVF Clinic In Greater Kailash | IVF Centre In GK Delhi',
    description: 'World-class IVF Treatment In Greater Kailash at the leading Fertility Centre In Greater Kailash. Expert IVF Specialist In Greater Kailash with High IVF Success Rate Delhi.',
    url: 'https://praviglobalivf.com/best-ivf-centre-in-greater-kailash-delhi',
    siteName: 'Pravi Global IVF',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GreaterKailashLayout({ children }) {
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
              "name": "Best IVF Clinic In Greater Kailash",
              "description": "Leading IVF Centre In GK Delhi offering advanced IVF Treatment In Greater Kailash.",
              "url": "https://praviglobalivf.com/best-ivf-centre-in-greater-kailash-delhi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Greater Kailash",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": ["Greater Kailash", "South Delhi"],
              "medicalSpecialty": ["Fertility", "IVF", "Gynecology"]
            }
          ])
        }}
      />
      {children}
    </>
  );
}
