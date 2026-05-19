export const metadata = {
  title: "IVF Success Stories | Patient Testimonials | Pravi IVF",
  description: "Read inspiring IVF success stories and patient testimonials at Pravi IVF in Lajpat Nagar, Delhi. Discover our high success rates in treating complex fertility cases.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/success-stories/",
  },
  openGraph: {
    title: "IVF Success Stories | Patient Testimonials | Pravi IVF",
    description: "Read inspiring IVF success stories and patient testimonials at Pravi IVF in Lajpat Nagar, Delhi. Discover our high success rates in treating complex fertility cases.",
    url: "https://praviglobalivf.com/success-stories/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Success Stories - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Success Stories | Patient Testimonials | Pravi IVF",
    description: "Read inspiring IVF success stories and patient testimonials at Pravi IVF in Lajpat Nagar, Delhi. Discover our high success rates in treating complex fertility cases.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
