export const metadata = {
  title: "IVF Treatment in Delhi for Iran Patients | Pravi IVF",
  description:
    "Expert IVF treatment in Delhi for patients from Iran. Pravi IVF offers affordable costs, high success rates, and dedicated international patient support.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/iran/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Iran | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Iran? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Iran couples.",
    url: "https://praviglobalivf.com/iran/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Iran Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Iran Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Iran. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
