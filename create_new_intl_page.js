const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'app', 'international');
const targetDir = path.join(__dirname, 'app', 'ivf-in-india-for-international-patients');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Create layout.js with new SEO metadata
const layoutContent = `export const metadata = {
  title: "Best IVF Treatment in India for International Patients | Pravi IVF",
  description:
    "Looking for the best IVF treatment in India? Pravi IVF offers highly successful, world-class, and affordable IVF treatments for international patients visiting India.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/ivf-in-india-for-international-patients/",
  },
  openGraph: {
    title: "Best IVF Treatment in India for International Patients",
    description:
      "Pravi Global IVF Polyclinic provides affordable and highly successful IVF in India for international patients. Get advanced fertility care, ICSI, and complete travel support.",
    url: "https://praviglobalivf.com/ivf-in-india-for-international-patients/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best IVF Treatment in India for International Patients",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IVF Treatment in India for International Patients",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for international patients. Safe, affordable, and successful IVF care in India.",
    images: ["/images/ivf-in-india-international.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
`;
fs.writeFileSync(path.join(targetDir, 'layout.js'), layoutContent, 'utf8');

// 2. Read existing page.jsx and replace H1/P content
const sourcePagePath = path.join(sourceDir, 'page.jsx');
let pageContent = fs.readFileSync(sourcePagePath, 'utf8');

pageContent = pageContent.replace(
  /<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">\s*Best IVF Centre in Delhi India for<br \/>\s*<span className="text-emerald-300">\s*International Patients\s*<\/span>\s*<\/h1>/,
  '<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Best IVF Treatment in India for<br /><span className="text-emerald-300">International Patients</span></h1>'
);

pageContent = pageContent.replace(
  /<p className="text-xl text-white mb-10 leading-relaxed">\s*Experience the highest success rates with highly affordable IVF in India\.\s*Pravi Global IVF provides world-class fertility care, advanced technology, and complete travel support for international families\.\s*<\/p>/,
  '<p className="text-xl text-white mb-10 leading-relaxed">Experience the highest success rates with the most affordable IVF treatment in India. Pravi Global IVF provides world-class fertility care, advanced clinical technology, and complete visa/travel support for international families.</p>'
);

fs.writeFileSync(path.join(targetDir, 'page.jsx'), pageContent, 'utf8');
console.log('Created new page: ivf-in-india-for-international-patients');
