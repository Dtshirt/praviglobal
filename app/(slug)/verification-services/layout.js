export const metadata = {
  title: "Verification Services in Delhi | Ethical Fertility | Pravi IVF",
  description:
    "Secure and transparent verification services in Delhi at Pravi IVF. Ensuring ethical and legal compliance for donor and surrogacy programs. Book a consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/verification-services/",
  },
  openGraph: {
    title: "Verification Services in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Ensure ethical and transparent fertility treatments with Pravi Global IVF Polyclinic’s verification services in Delhi. Legal and medical validation for donors, surrogates, and patients.",
    url: "https://praviglobalivf.com/verification-services/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Verification Services in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verification Services in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Trusted verification services in Delhi at Pravi Global IVF Polyclinic for donors and surrogacy programs. Ensuring authenticity, compliance, and patient safety in fertility treatments.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
