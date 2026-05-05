export const metadata = {
  title: "IVF Success Stories | Patient Testimonials | Pravi IVF",
  description:
    "Read inspiring success stories and genuine patient testimonials from Pravi IVF. Discover our high success rates in fertility treatments. Real results, happy families.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/success-stories/",
  },
  openGraph: {
    title: "IVF Success Stories | Pravi Global IVF Polyclinic",
    description:
      "Real stories from real couples. Explore our gallery of success and learn how Pravi Global IVF Polyclinic helps families realize their dreams.",
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
    title: "IVF Success Stories | Pravi Global IVF Polyclinic",
    description:
      "Witness the joy of parenthood. Inspiring patient testimonials and success stories from Delhi's leading fertility centre.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
