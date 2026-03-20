export const metadata = {
  title: "Fertility Treatment for OCI Card Holders in India | Pravi Global IVF Delhi",
  description:
    "Advanced IVF care for OCI card holders planning fertility treatment in India. Pravi Global IVF offers IVF, ICSI, egg donation, and personalized fertility solutions with dedicated OCI patient support in Delhi.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/oci",
  },
  openGraph: {
    title: "Fertility Treatment for OCI Card Holders | Pravi Global IVF Delhi",
    description:
      "Planning fertility treatment in India as an OCI card holder? Pravi Global IVF provides advanced IVF, ICSI, and reproductive care with fast-track cycles, online consultations, and dedicated international patient support.",
    url: "https://praviglobalivf.com/oci",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OCI IVF Treatment - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fertility Treatment for OCI Card Holders | Pravi Global IVF Delhi",
    description:
      "Pravi Global IVF offers world-class fertility treatments for OCI card holders. Fast-track IVF cycles, online consultations, and dedicated coordinators for efficient treatment during your India visit.",
    images: ["/images/og-image.jpg"],
  },
};

export default function OCILayout({ children }) {
  return <>{children}</>;
}
