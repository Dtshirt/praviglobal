export const metadata = {
  title: "Best IVF Centre in Delhi India for International Patients",
  description:
    "Looking for the best IVF treatment in India? Pravi IVF is a leading fertility clinic in Delhi offering highly successful and affordable IVF treatments for international patients.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/international/",
  },
  openGraph: {
    title: "Best IVF Centre in Delhi India for International Patients",
    description:
      "Pravi Global IVF Polyclinic provides affordable and highly successful IVF in India for international patients. Get advanced fertility care, ICSI, and complete travel support in Delhi.",
    url: "https://praviglobalivf.com/international/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Treatment in Delhi India for International Patients",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IVF Treatment in Delhi India for International Patients",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for international patients. Safe, affordable, and successful IVF care in Delhi, India.",
    images: ["/images/ivf-for-international-patients.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
