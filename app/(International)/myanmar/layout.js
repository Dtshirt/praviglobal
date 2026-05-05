export const metadata = {
  title: "IVF Treatment in Delhi for Myanmar Patients | Pravi IVF",
  description:
    "Trusted IVF treatment in Delhi for patients from Myanmar. Pravi IVF offers high success rates, affordable costs, and dedicated international patient care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/myanmar/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Myanmar | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Myanmar? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Myanmar couples.",
    url: "https://praviglobalivf.com/myanmar/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Myanmar Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Myanmar Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Myanmar. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
