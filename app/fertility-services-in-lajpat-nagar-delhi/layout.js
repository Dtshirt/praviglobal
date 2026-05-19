export const metadata = {
  title: 'Fertility Services in Lajpat Nagar Delhi | Pravi IVF',
  description: 'Explore advanced fertility treatments in Lajpat Nagar, Delhi at Pravi Global IVF. We offer top-tier IVF, ICSI, IUI, egg freezing, and custom reproductive therapies with high success rates.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://praviglobalivf.com/fertility-services-in-lajpat-nagar-delhi/',
  },
  openGraph: {
    title: 'Fertility Services in Lajpat Nagar Delhi | Pravi IVF',
    description: 'Explore advanced fertility treatments in Lajpat Nagar, Delhi at Pravi Global IVF. We offer top-tier IVF, ICSI, IUI, egg freezing, and custom reproductive therapies with high success rates.',
    url: 'https://praviglobalivf.com/fertility-services-in-lajpat-nagar-delhi/',
    siteName: 'Pravi Global IVF Polyclinic',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fertility Services - Pravi Global IVF Polyclinic Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fertility Services in Lajpat Nagar Delhi | Pravi IVF',
    description: 'Explore advanced fertility treatments in Lajpat Nagar, Delhi at Pravi Global IVF. We offer top-tier IVF, ICSI, IUI, egg freezing, and custom reproductive therapies with high success rates.',
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
