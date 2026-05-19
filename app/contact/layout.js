export const metadata = {
  title: "Contact Us | Best IVF Centre in Lajpat Nagar Delhi | Pravi IVF",
  description: "Contact Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi. Reach out for expert fertility consultations, advanced treatments, and quick appointments.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/contact/",
  },
  openGraph: {
    title: "Contact Us | Best IVF Centre in Lajpat Nagar Delhi | Pravi IVF",
    description: "Contact Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi. Reach out for expert fertility consultations, advanced treatments, and quick appointments.",
    url: "https://praviglobalivf.com/contact/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Best IVF Centre in Lajpat Nagar Delhi | Pravi IVF",
    description: "Contact Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi. Reach out for expert fertility consultations, advanced treatments, and quick appointments.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
