export const metadata = {
  title: "Best IVF Treatment in India for International Patients | Pravi IVF",
  description:
    "Looking for the best IVF treatment in India? Pravi IVF offers highly successful, world-class, and affordable IVF treatments for international patients visiting India.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/ivf-in-india-for-international-patients/",
  },
  openGraph: {
    title: "Best IVF Treatment in India for International Patients",
    description:
      "Pravi Global IVF Polyclinic provides affordable and highly successful IVF in India for international patients. Get advanced fertility care, ICSI, and complete travel support.",
    url: "https://praviglobalivf.com/ivf-in-india-for-international-patients/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Treatment in India for International Patients",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IVF Treatment in India for International Patients",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for international patients. Safe, affordable, and successful IVF care in India.",
    images: ["/images/ivf-in-india-international.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
