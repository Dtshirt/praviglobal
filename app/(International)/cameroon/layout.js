export const metadata = {
  title: "Best IVF Centre in India for Cameroon Patients | Affordable IVF",
  description:
    "Looking for the best IVF centre in India? Pravi IVF offers highly successful and affordable IVF treatments for patients from Cameroon with advanced care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/cameroon/",
  },
  openGraph: {
    title: "Best IVF Centre in India for Cameroon Patients",
    description:
      "Pravi Global IVF Polyclinic provides affordable and highly successful IVF in India for Cameroon patients. Get advanced fertility care, ICSI, and surrogacy.",
    url: "https://praviglobalivf.com/cameroon/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Treatment in India for Cameroon Patients",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable IVF in India for Cameroon Patients",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Cameroon. Safe, affordable, and successful IVF care in Delhi, India.",
    images: ["/images/ivf-for-cameroon-patients.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
