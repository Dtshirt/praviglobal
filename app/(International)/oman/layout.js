export const metadata = {
  title: "Best IVF Centre in India for Oman Patients | Affordable IVF",
  description:
    "Looking for the best IVF centre in India? Pravi IVF offers highly successful and affordable IVF treatments for patients from Oman with advanced care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/oman/",
  },
  openGraph: {
    title: "Best IVF Centre in India for Oman Patients",
    description:
      "Pravi Global IVF Polyclinic provides affordable and highly successful IVF in India for Oman patients. Get advanced fertility care, ICSI, and surrogacy.",
    url: "https://praviglobalivf.com/oman/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Treatment in India for Oman Patients",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable IVF in India for Oman Patients",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Oman. Safe, affordable, and successful IVF care in Delhi, India.",
    images: ["/images/ivf-for-oman-patients.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
