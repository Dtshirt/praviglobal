export const metadata = {
  title: "IVF Treatment in Delhi for Pakistan Patients | Pravi IVF",
  description:
    "Seeking high-success IVF in Delhi? Pravi IVF provides world-class fertility treatments for patients from Pakistan with personalized care and advanced technology.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/pakistan/",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Pakistan | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Pakistan? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Pakistan couples.",
    url: "https://praviglobalivf.com/pakistan/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Pakistan Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Pakistan Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Pakistan. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
