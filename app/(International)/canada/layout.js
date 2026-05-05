export const metadata = {
  title: "IVF Treatment in Delhi for Canada Patients | Pravi IVF",
  description:
    "Seeking affordable IVF in Delhi? Pravi IVF offers premium fertility treatments for Canada patients with high success rates and comprehensive travel support.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/canada/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Canada | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Canada? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Canada couples.",
    url: "https://praviglobalivf.com/canada/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Canada Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Canada Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Canada. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
