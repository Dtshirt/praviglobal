export const metadata = {
  title: "IVF Treatment in Delhi for Sri Lanka Patients | Pravi IVF",
  description:
    "Expert IVF treatment in Delhi for patients from Sri Lanka. Pravi IVF offers high success rates, affordable costs, and dedicated support for international couples.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/sri-lanka/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Sri Lanka | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Sri Lanka? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Sri Lanka couples.",
    url: "https://praviglobalivf.com/sri-lanka/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Sri Lanka Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Sri Lanka Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Sri Lanka. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
