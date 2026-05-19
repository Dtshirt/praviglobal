export const metadata = {
  title: "OCI Fertility Treatment in Lajpat Nagar Delhi | Pravi IVF",
  description: "Advanced IVF care for OCI card holders planning fertility treatment in India. Pravi Global IVF in Lajpat Nagar, Delhi offers advanced IVF, ICSI, egg donation, and dedicated OCI patient support.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/oci",
  },
  openGraph: {
    title: "OCI Fertility Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Advanced IVF care for OCI card holders planning fertility treatment in India. Pravi Global IVF in Lajpat Nagar, Delhi offers advanced IVF, ICSI, egg donation, and dedicated OCI patient support.",
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
    title: "OCI Fertility Treatment in Lajpat Nagar Delhi | Pravi IVF",
    description: "Advanced IVF care for OCI card holders planning fertility treatment in India. Pravi Global IVF in Lajpat Nagar, Delhi offers advanced IVF, ICSI, egg donation, and dedicated OCI patient support.",
    images: ["/images/og-image.jpg"],
  },
};

export default function OCILayout({ children }) {
  return <>{children}</>;
}
