export const metadata = {
  title: "Best IVF Treatment in Delhi | Pravi IVF Center India",
  description:
    "Leading IVF center in Delhi offering advanced fertility treatments including ICSI, IUI, and surrogacy with high success rates. Book your free consultation now.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/india/",
  },
  openGraph: {
    title: "Best IVF Center in Delhi, India | Pravi Global IVF Polyclinic",
    description:
      "Looking for the best IVF center in India? Pravi Global IVF provides world-class fertility care with advanced technology and personalized treatment plans in Delhi.",
    url: "https://praviglobalivf.com/india/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Center in Delhi India - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IVF Center in Delhi, India | Pravi Global IVF Polyclinic",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments in India. Safe, affordable, and successful IVF and surrogacy care in Delhi.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
