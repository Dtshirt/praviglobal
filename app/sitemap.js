import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';

export default async function sitemap() {
  const baseUrl = 'https://praviglobalivf.com';

  // Base routes with proper trailing slash matching Next.js trailingSlash: true configuration
  const routes = [
    '',
    '/about-fertility-treatment-in-delhi',
    '/fertility-services-in-lajpat-nagar-delhi',
    '/best-ivf-doctors-in-lajpat-nagar-delhi',
    '/fertility-specialist-in-lajpat-nagar-delhi',
    '/contact',
    '/blogs',
    '/success-stories',
    '/gallery',
    '/international',
    '/nri',
    '/oci',
    '/book-appointment',
    '/privacy-policy',
    '/terms',
    '/ivf-treatment-in-lajpat-nagar-delhi',
    '/icsi-treatment-in-lajpat-nagar-delhi',
    '/iui-treatment-in-lajpat-nagar-delhi',
    '/egg-freezing-in-lajpat-nagar-delhi',
    '/male-infertility-treatment-in-lajpat-nagar-delhi',
    '/female-infertility-treatment-in-lajpat-nagar-delhi',
    '/surrogacy-treatment-in-lajpat-nagar-delhi',
    '/hormonal-test-in-lajpat-nagar-delhi',
    '/follicular-monitoring-in-lajpat-nagar-delhi',
    '/hysteroscopy-treatment-in-lajpat-nagar-delhi',
    '/laparoscopy-surgery-in-lajpat-nagar-delhi',
    '/pgs-pgd-testing-in-lajpat-nagar-delhi',
    '/tesa-and-pesa-treatment-in-lajpat-nagar-delhi',
    '/verification-services-in-lajpat-nagar-delhi',
    '/best-ivf-centre-in-south-delhi',
    '/best-ivf-centre-in-lajpat-nagar-delhi',
    '/best-ivf-centre-in-saket-delhi',
    '/best-ivf-centre-in-greater-kailash-delhi',
    '/best-ivf-centre-in-hauz-khas-delhi',
    '/best-ivf-centre-in-malviya-nagar-delhi',
    '/best-ivf-centre-in-defence-colony-delhi',
    '/best-ivf-centre-in-kalkaji-delhi',
    '/best-ivf-centre-in-vasant-kunj-delhi',
    '/best-ivf-centre-in-vasant-vihar-delhi',
    '/best-ivf-centre-in-chittaranjan-park-delhi',
    '/best-ivf-centre-in-new-friends-colony-delhi',
    '/best-ivf-centre-in-jangpura-delhi',
    '/best-ivf-centre-in-khan-market-delhi',
    '/best-ivf-centre-in-mehrauli-delhi',
    '/best-ivf-centre-in-nehru-place-delhi',
    '/best-ivf-centre-in-okhla-delhi',
    '/best-ivf-centre-in-panchsheel-park-delhi',
    '/best-ivf-centre-in-sarita-vihar-delhi',
    '/best-ivf-centre-in-south-extension-delhi',
    '/electronic-witness-system',
    '/needle-free-ivf-injection',
    '/advanced-fertility-care',
    '/success-stories/ivf',
    '/success-stories/iui',
    '/success-stories/icsi',
    '/success-stories/egg-freezing',
    '/success-stories/male-infertility',
    '/success-stories/donor-services',
    '/success-stories/surrogacy',
    '/success-stories/low-sperm-count',
    '/success-stories/nil-sperm-count',
    '/success-stories/tesa-pesa',
    '/success-stories/international',
    '/iran',
    '/india',
    '/ethiopia',
    '/canada',
    '/cameroon',
    '/australia',
    '/afghanistan',
    '/sri-lanka',
    '/oman',
    '/myanmar',
    '/maldives',
    '/kazakhstan',
    '/iraq',
    '/yemen',
    '/uzbekistan',
    '/united-states',
    '/tajikistan'
  ].map((route) => {
    // Append trailing slash to match canonical formats perfectly
    const path = route === '' ? '/' : `${route}/`;
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    };
  });

  // Fetch all blog posts for dynamic sitemap
  let posts = [];
  try {
    await dbConnect();
    posts = await Post.find({ status: 'published' }).select('slug updatedAt').lean();
  } catch (error) {
    console.error('Sitemap DB error:', error);
  }

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}/`,
    lastModified: post.updatedAt || new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
