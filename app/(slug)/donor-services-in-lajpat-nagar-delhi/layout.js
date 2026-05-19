export const metadata = {
  title: "Donor Services in Lajpat Nagar Delhi | Pravi IVF",
  description: "Compassionate and legally compliant egg/sperm donor services in Lajpat Nagar, Delhi. Pravi Global IVF provides fully screened donors to help build your beautiful family.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/donor-services-in-lajpat-nagar-delhi/",
  },
  openGraph: {
    title: "Donor Services in Lajpat Nagar Delhi | Pravi IVF",
    description: "Compassionate and legally compliant egg/sperm donor services in Lajpat Nagar, Delhi. Pravi Global IVF provides fully screened donors to help build your beautiful family.",
    url: "https://praviglobalivf.com/donor-services-in-lajpat-nagar-delhi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Donor Services in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Services in Lajpat Nagar Delhi | Pravi IVF",
    description: "Compassionate and legally compliant egg/sperm donor services in Lajpat Nagar, Delhi. Pravi Global IVF provides fully screened donors to help build your beautiful family.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
