export const metadata = {
  title: "IVF Treatment in Delhi for Maldives Patients | Pravi IVF",
  description:
    "Seeking successful IVF treatment in Delhi? Pravi IVF offers premium fertility solutions for Maldives patients with expert care and complete travel support.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/maldives/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Maldives | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Maldives? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Maldives couples.",
    url: "https://praviglobalivf.com/maldives/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Maldives Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Maldives Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Maldives. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
