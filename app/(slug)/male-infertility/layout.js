export const metadata = {
  title: "Male Infertility Treatment in Delhi | Expert Care | Pravi IVF",
  description:
    "Expert male infertility treatment in Delhi at Pravi IVF. Specializing in low sperm count, motility issues, TESA & PESA. Book your consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/male-infertility/",
  },
  openGraph: {
    title: "Male Infertility Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Pravi Global IVF Polyclinic offers specialized male infertility treatments in Delhi including semen analysis, hormonal tests, TESA, PESA, and personalized fertility solutions.",
    url: "https://praviglobalivf.com/male-infertility/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Male Infertility Treatment at Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Male Infertility Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Advanced male infertility treatment in Delhi at Pravi Global IVF Polyclinic. Comprehensive diagnosis and modern solutions like TESA & PESA by fertility experts.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
