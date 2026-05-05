export const metadata = {
  title: "IVF Treatment in Delhi for Cameroon Patients | Pravi IVF",
  description:
    "Expert IVF treatment in Delhi for Cameroon patients. Pravi IVF offers high success rates, affordable costs, and full medical visa support. Book your consult.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/cameroon/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Cameroon | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Cameroon? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Cameroon couples.",
    url: "https://praviglobalivf.com/cameroon/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Cameroon Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Cameroon Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Cameroon. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
