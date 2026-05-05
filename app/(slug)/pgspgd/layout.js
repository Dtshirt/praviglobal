export const metadata = {
  title: "PGS & PGD Testing in Delhi | Genetic Screening | Pravi IVF",
  description: "Advanced PGS & PGD testing in Delhi at Pravi IVF. Identify genetic abnormalities and improve IVF success rates with expert care. Book your consultation today.",
  alternates: {
    canonical: "https://praviglobalivf.com/pgspgd/",
  },
  openGraph: {
    title: "PGS & PGD Testing in Delhi | Pravi IVF",
    description: "Get advanced Preimplantation Genetic Screening (PGS) and Diagnosis (PGD) in Delhi at Pravi IVF. Our experts use cutting-edge genetic testing to select healthy embryos.",
    url: "https://praviglobalivf.com/pgspgd/",
    siteName: "Pravi IVF",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PGS PGD Testing in Delhi - Pravi IVF",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PGS & PGD Testing in Delhi | Pravi IVF",
    description: "Ensure healthy embryo selection with PGS & PGD testing in Delhi at Pravi IVF. Advanced genetic screening to boost IVF success.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
