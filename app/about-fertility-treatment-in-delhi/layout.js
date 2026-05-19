export const metadata = {
  title: "About Fertility Treatment in Delhi | Best IVF Centre | Pravi IVF",
  description: "Learn about Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi. Meet our expert team, state-of-the-art labs, and our commitment to providing advanced and affordable fertility treatment in Delhi.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/about-fertility-treatment-in-delhi/",
  },
  openGraph: {
    title: "About Fertility Treatment in Delhi | Best IVF Centre | Pravi IVF",
    description: "Learn about Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi. Meet our expert team, state-of-the-art labs, and our commitment to providing advanced and affordable fertility treatment in Delhi.",
    url: "https://praviglobalivf.com/about-fertility-treatment-in-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Fertility Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fertility Treatment in Delhi | Best IVF Centre | Pravi IVF",
    description: "Learn about Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi. Meet our expert team, state-of-the-art labs, and our commitment to providing advanced and affordable fertility treatment in Delhi.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
