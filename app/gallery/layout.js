export const metadata = {
  title: "Photo Gallery | IVF Centre Facilities | Pravi IVF",
  description:
    "Explore our modern IVF lab, advanced fertility equipment, and patient facilities at Pravi IVF. A glimpse into our compassionate care environment.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/gallery/",
  },
  openGraph: {
    title: "Gallery | Pravi Global IVF Polyclinic Delhi",
    description:
      "Take a visual tour of Pravi Global IVF Polyclinic, Delhi’s leading fertility centre. See our advanced IVF labs, consultation rooms, and world-class facilities designed for comfort and care.",
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
    title: "Gallery | Pravi Global IVF Polyclinic Delhi",
    description:
      "View the gallery of Pravi Global IVF Polyclinic, Delhi — modern IVF labs, experienced doctors, advanced fertility equipment, and a caring environment for every couple.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
