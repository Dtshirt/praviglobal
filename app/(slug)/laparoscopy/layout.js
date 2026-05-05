export const metadata = {
  title: "Laparoscopy Treatment in Delhi | Expert Surgery | Pravi IVF",
  description:
    "Advanced laparoscopy treatment in Delhi at Pravi IVF. Minimally invasive surgery for infertility, endometriosis, and more. Book your consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/laparoscopy/",
  },
  openGraph: {
    title: "Laparoscopy Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Get expert laparoscopy treatment in Delhi at Pravi Global IVF Polyclinic. Our specialists perform minimally invasive surgeries to treat infertility, ovarian cysts, and uterine conditions effectively.",
    url: "https://praviglobalivf.com/laparoscopy/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laparoscopy Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laparoscopy Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Advanced laparoscopy treatment in Delhi at Pravi Global IVF Polyclinic. Diagnose and treat fertility issues, cysts, and endometriosis with minimally invasive procedures.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
