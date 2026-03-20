export const metadata = {
  title: "NRI Fertility Treatment in Delhi | IVF for NRI Couples - Pravi Global IVF",
  description:
    "Trusted IVF care for NRI couples in India. Pravi Global IVF Polyclinic offers advanced fertility treatments including IVF, ICSI, egg donation with online consultation, personalized plans, and dedicated NRI patient support in Delhi.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/nri",
  },
  openGraph: {
    title: "NRI Fertility Treatment in Delhi | IVF for NRI Couples - Pravi Global IVF",
    description:
      "Planning fertility treatment in India? Pravi Global IVF provides advanced IVF, ICSI, and reproductive care with dedicated support for NRI patients — online consultations, short-cycle IVF, and priority appointments.",
    url: "https://praviglobalivf.com/nri",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NRI IVF Treatment - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Fertility Treatment in Delhi | IVF for NRI Couples - Pravi Global IVF",
    description:
      "Pravi Global IVF offers world-class fertility treatments for NRI couples. Online consultations, short-cycle IVF planning, and dedicated patient coordinators for a stress-free journey.",
    images: ["/images/og-image.jpg"],
  },
};

export default function NRILayout({ children }) {
  return <>{children}</>;
}
