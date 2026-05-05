export const metadata = {
  title: "IVF Treatment in Delhi for Afghanistan Patients | Pravi IVF",
  description:
    "Seeking the best IVF treatment in Delhi? Pravi IVF offers affordable fertility solutions for Afghanistan patients with high success rates and expert care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/afghanistan/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Afghanistan | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Afghanistan? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Afghan couples.",
    url: "https://praviglobalivf.com/afghanistan/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Afghanistan Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Afghanistan Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Afghanistan. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/ivf-for-Afghanistan-patients.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
