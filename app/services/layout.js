export const metadata = {
  title: 'Fertility Services in Delhi | Best IVF Centre | Pravi IVF',
  description: 'Explore advanced fertility treatments at Pravi IVF, the best IVF centre in Delhi. We offer IVF, ICSI, IUI, egg freezing, and more. Book your consultation today.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://praviglobalivf.com/services/',
  },
  openGraph: {
    title: 'Fertility Services at Pravi Global IVF Polyclinic Delhi',
    description: 'Explore our complete range of advanced fertility treatments including IVF, ICSI, IUI, and surrogacy. Tailored care for your journey to parenthood.',
    url: 'https://praviglobalivf.com/services/',
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
    title: 'Fertility Services at Pravi Global IVF Polyclinic Delhi',
    description: 'Advanced fertility treatments in Delhi. Discover our range of services designed to help you achieve your dream of parenthood.',
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
