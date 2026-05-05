export const metadata = {
  title: "IVF Treatment in Delhi for United States Patients | Pravi IVF",
  description:
    "Expert IVF treatment in Delhi for patients from the United States. Pravi IVF offers premium fertility solutions with high success rates and comprehensive travel support.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/united-states/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from United States | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from United States? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for US couples.",
    url: "https://praviglobalivf.com/united-states/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for United States Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for United States Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from United States. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
