export const metadata = {
  title: "IVF Treatment in Delhi for Kazakhstan Patients | Pravi IVF",
  description:
    "Expert IVF treatment in Delhi for Kazakhstan patients. Pravi IVF offers high success rates, advanced technology, and dedicated support for international couples.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/kazakhstan/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Kazakhstan | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Kazakhstan? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Kazakhstan couples.",
    url: "https://praviglobalivf.com/kazakhstan/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Kazakhstan Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Kazakhstan Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Kazakhstan. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
