export const metadata = {
  title: "IVF Treatment in Delhi for Oman Patients | Pravi IVF",
  description:
    "Expert IVF treatment in Delhi for patients from Oman. Pravi IVF offers premium fertility solutions with high success rates and comprehensive travel support.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/oman/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Oman | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Oman? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Oman couples.",
    url: "https://praviglobalivf.com/oman/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Oman Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Oman Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Oman. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
