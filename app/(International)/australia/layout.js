export const metadata = {
  title: "IVF Treatment in Delhi for Australia Patients | Pravi IVF",
  description:
    "Seeking high-success IVF in Delhi? Pravi IVF provides world-class fertility treatments for Australia patients with personalized care and advanced technology.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/australia/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Australia | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Australia? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Australian couples.",
    url: "https://praviglobalivf.com/australia/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Australia Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Australia Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Australia. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
