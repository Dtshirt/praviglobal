/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/services/',
        destination: '/fertility-services-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/about/',
        destination: '/about-fertility-treatment-in-delhi/',
        permanent: true,
      },
      {
        source: '/doctors/',
        destination: '/best-ivf-doctors-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/donor-services/',
        destination: '/donor-services-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/egg-freezing/',
        destination: '/egg-freezing-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/female-infertility/',
        destination: '/female-infertility-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/female-infertility-in-lajpat-nagar-delhi/',
        destination: '/female-infertility-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/follicular-monitoring/',
        destination: '/follicular-monitoring-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/hormonal-test/',
        destination: '/hormonal-test-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/hysteroscopy/',
        destination: '/hysteroscopy-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/hysteroscopy-in-lajpat-nagar-delhi/',
        destination: '/hysteroscopy-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/icsi/',
        destination: '/icsi-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/icsi-in-lajpat-nagar-delhi/',
        destination: '/icsi-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/iui/',
        destination: '/iui-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/iui-in-lajpat-nagar-delhi/',
        destination: '/iui-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/ivf/',
        destination: '/ivf-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/ivf-in-lajpat-nagar-delhi/',
        destination: '/ivf-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/laparoscopy/',
        destination: '/laparoscopy-surgery-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/laparoscopy-in-lajpat-nagar-delhi/',
        destination: '/laparoscopy-surgery-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/male-infertility/',
        destination: '/male-infertility-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/male-infertility-in-lajpat-nagar-delhi/',
        destination: '/male-infertility-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/pgspgd/',
        destination: '/pgs-pgd-testing-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/pgspgd-in-lajpat-nagar-delhi/',
        destination: '/pgs-pgd-testing-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/surrogacy/',
        destination: '/surrogacy-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/surrogacy-in-lajpat-nagar-delhi/',
        destination: '/surrogacy-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/tesa-and-pesa/',
        destination: '/tesa-and-pesa-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/tesa-and-pesa-in-lajpat-nagar-delhi/',
        destination: '/tesa-and-pesa-treatment-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/verification-services/',
        destination: '/verification-services-in-lajpat-nagar-delhi/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.praviglobalivf.com',
          },
        ],
        destination: 'https://praviglobalivf.com/:path*',
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
