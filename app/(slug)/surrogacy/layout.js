export const metadata = {
  title: "Surrogacy Treatment in Delhi | Ethical Programs | Pravi IVF",
  description:
    "Trusted surrogacy centre in Delhi offering ethical and legal programs. Expert guidance and support for your journey to parenthood. Book a consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/surrogacy/",
  },
  openGraph: {
    title: "Surrogacy Centre in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Looking for a surrogacy centre in Delhi? Pravi Global IVF Polyclinic provides comprehensive, transparent, and ethical surrogacy services with expert guidance and high success rates.",
    url: "https://praviglobalivf.com/surrogacy/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surrogacy Centre in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surrogacy Centre in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Explore safe and legal surrogacy programs in Delhi at Pravi Global IVF Polyclinic. Experienced fertility doctors and compassionate surrogate support to help you build your family.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
