export const metadata = {
  title: "Donor Services in Delhi | Egg & Sperm Donation | Pravi IVF",
  description:
    "Trusted donor services in Delhi at Pravi IVF. Ethical egg, sperm, and embryo donation programs with complete confidentiality. Book your consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/donor-services/",
  },
  openGraph: {
    title: "Donor Services in Delhi | Egg, Sperm & Embryo Donation - Pravi Global IVF Polyclinic",
    description:
      "Explore ethical donor services in Delhi at Pravi Global IVF Polyclinic. We provide egg, sperm, and embryo donation programs with expert fertility guidance and full confidentiality.",
    url: "https://praviglobalivf.com/donor-services/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Donor Services in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Services in Delhi | Egg, Sperm & Embryo Donation - Pravi Global IVF Polyclinic",
    description:
      "Ethical and confidential donor services in Delhi including egg, sperm, and embryo donation at Pravi Global IVF Polyclinic. Helping couples achieve parenthood with expert fertility care.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
