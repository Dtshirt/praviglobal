export const metadata = {
  title: "Micro-TESE in Delhi | Microsurgical Sperm Retrieval | Pravi IVF",
  description:
    "Expert Micro-TESE (Microsurgical Testicular Sperm Extraction) in Delhi at Pravi IVF, Lajpat Nagar. Advanced treatment for non-obstructive azoospermia. Retrieve sperm even with zero sperm count. Book a free consultation today.",
  alternates: {
    canonical: "https://praviglobalivf.com/micro-tese/",
  },
  openGraph: {
    title: "Micro-TESE – Microsurgical Sperm Retrieval in Delhi | Pravi IVF",
    description:
      "Pravi IVF offers advanced Micro-TESE surgery in Delhi for men with non-obstructive azoospermia. Our expert urologists use high-powered microscopes to locate and extract viable sperm for ICSI-IVF.",
    url: "https://praviglobalivf.com/micro-tese/",
    siteName: "Pravi IVF",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Micro-TESE Microsurgical Sperm Retrieval Delhi - Pravi IVF",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Micro-TESE in Delhi | Pravi IVF",
    description:
      "Advanced Micro-TESE surgery at Pravi IVF, Delhi. Helping men with zero sperm count achieve fatherhood through microsurgical sperm retrieval and ICSI.",
    images: ["/images/og-image.jpg"],
  },
};

export default function MicroTeseLayout({ children }) {
  return <>{children}</>;
}
