export const metadata = {
  title: "Best IVF Centre in India | Affordable IVF Treatments & High Success Rates",
  description:
    "Looking for the best IVF centre in India? Pravi IVF offers highly successful and affordable IVF treatments with advanced clinical care and expert fertility specialists.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/india/",
  },
  openGraph: {
    title: "Best IVF Centre in India | Affordable IVF Treatments",
    description:
      "Pravi Global IVF Polyclinic provides affordable and highly successful IVF in India. Get advanced fertility care, ICSI, and specialized treatments.",
    url: "https://praviglobalivf.com/india/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Treatment in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable IVF in India | Pravi Global IVF Polyclinic",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments in India. Safe, affordable, and successful IVF care in Delhi.",
    images: ["/images/ivf-treatment-in-india.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
