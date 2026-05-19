export const metadata = {
  title: "Photo Gallery | IVF Centre in Lajpat Nagar Delhi | Pravi IVF",
  description: "Explore our modern IVF lab, advanced fertility equipment, and patient facilities at Pravi IVF in Lajpat Nagar, Delhi. Glimpse our compassionate clinical environment.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/gallery/",
  },
  openGraph: {
    title: "Photo Gallery | IVF Centre in Lajpat Nagar Delhi | Pravi IVF",
    description: "Explore our modern IVF lab, advanced fertility equipment, and patient facilities at Pravi IVF in Lajpat Nagar, Delhi. Glimpse our compassionate clinical environment.",
    url: "https://praviglobalivf.com/gallery/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gallery - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | IVF Centre in Lajpat Nagar Delhi | Pravi IVF",
    description: "Explore our modern IVF lab, advanced fertility equipment, and patient facilities at Pravi IVF in Lajpat Nagar, Delhi. Glimpse our compassionate clinical environment.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
