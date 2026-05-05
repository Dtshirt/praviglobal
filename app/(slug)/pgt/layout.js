export const metadata = {
  title: "PGT (Preimplantation Genetic Testing) in Delhi | Pravi IVF",
  description:
    "Expert PGT (Preimplantation Genetic Testing) in Delhi at Pravi IVF, Lajpat Nagar. Detect chromosomal abnormalities, prevent hereditary diseases & boost IVF success rates. Book a free consultation today.",
  alternates: {
    canonical: "https://praviglobalivf.com/pgt/",
  },
  openGraph: {
    title: "PGT – Preimplantation Genetic Testing in Delhi | Pravi IVF",
    description:
      "Advanced Preimplantation Genetic Testing (PGT) at Pravi IVF Delhi. Screen embryos for chromosomal abnormalities and single-gene disorders before transfer. Start your journey to a healthy pregnancy today.",
    url: "https://praviglobalivf.com/pgt/",
    siteName: "Pravi IVF",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PGT Preimplantation Genetic Testing Delhi - Pravi IVF",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PGT – Preimplantation Genetic Testing in Delhi | Pravi IVF",
    description:
      "Pravi IVF offers state-of-the-art Preimplantation Genetic Testing (PGT) in Delhi. Ensure a healthy embryo transfer with expert genetic screening.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PGTLayout({ children }) {
  return <>{children}</>;
}
