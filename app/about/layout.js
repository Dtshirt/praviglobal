export const metadata = {
  title: "About Us | Best IVF Centre in Delhi | Pravi IVF",
  description:
    "Learn about Pravi IVF, our expert team, state-of-the-art facilities, and our commitment to helping families grow. Book your consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/about/",
  },
  openGraph: {
    title: "About Pravi Global IVF Polyclinic Delhi",
    description:
      "Leading fertility center in Delhi with 15+ years of excellence. Meet our founder Dr. Monica Sachdev and discover our mission to build happy families.",
    url: "https://praviglobalivf.com/about/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pravi Global IVF Polyclinic Delhi",
    description:
      "Compassionate care and advanced fertility solutions. Learn how Pravi Global IVF Polyclinic helps couples achieve their dream of parenthood.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
