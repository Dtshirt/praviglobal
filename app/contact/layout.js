export const metadata = {
  title: "Contact Us | Best IVF Centre in Delhi | Pravi IVF",
  description:
    "Contact Pravi IVF, the best IVF centre in Delhi. Get in touch for expert fertility consultations, treatment queries, and appointments. We are here to help.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/contact/",
  },
  openGraph: {
    title: "Contact Us | Pravi Global IVF Polyclinic Delhi",
    description:
      "Have questions about IVF or fertility treatments? Reach out to Pravi Global IVF Polyclinic in Lajpat Nagar, Delhi. Our team is ready to support your journey to parenthood.",
    url: "https://praviglobalivf.com/contact/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Pravi Global IVF Polyclinic Delhi",
    description:
      "Connect with Delhi's leading fertility experts. Pravi Global IVF Polyclinic offers personalized care and advanced treatments to help you build your family.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
