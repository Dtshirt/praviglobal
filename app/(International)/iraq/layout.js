export const metadata = {
  title: "IVF Treatment in Delhi for Iraq Patients | Pravi IVF",
  description:
    "Seeking successful IVF treatment in Delhi? Pravi IVF provides affordable fertility care for Iraq patients with expert doctors and full travel assistance.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/iraq/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Iraq | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Iraq? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Iraq couples.",
    url: "https://praviglobalivf.com/iraq/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Iraq Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Iraq Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Iraq. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
