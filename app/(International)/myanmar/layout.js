export const metadata = {
  title: "Best IVF Centre in India for Myanmar Patients | Affordable IVF",
  description:
    "Looking for the best IVF centre in India? Pravi IVF offers highly successful and affordable IVF treatments for patients from Myanmar with advanced care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/myanmar/",
  },
  openGraph: {
    title: "Best IVF Centre in India for Myanmar Patients",
    description:
      "Pravi Global IVF Polyclinic provides affordable and highly successful IVF in India for Myanmar patients. Get advanced fertility care, ICSI, and surrogacy.",
    url: "https://praviglobalivf.com/myanmar/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Treatment in India for Myanmar Patients",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable IVF in India for Myanmar Patients",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Myanmar. Safe, affordable, and successful IVF care in Delhi, India.",
    images: ["/images/ivf-for-myanmar-patients.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
