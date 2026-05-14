import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';

export default async function sitemap() {
  const baseUrl = 'https://praviglobalivf.com';

  // Base routes
  const routes = [
    '',
    '/about',
    '/services',
    '/doctors',
    '/contact',
    '/blogs',
    '/success-stories',
    '/gallery',
    '/international',
    '/nri',
    '/oci',
    '/book-appointment',
    '/ivf',
    '/icsi',
    '/iui',
    '/egg-freezing',
    '/male-infertility',
    '/female-infertility',
    '/surrogacy',
    '/hormonal-test',
    '/follicular-monitoring',
    '/hysteroscopy',
    '/laparoscopy',
    '/pgspgd',
    '/tesa-and-pesa',
    '/verification-services',
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch all blog posts for dynamic sitemap
  let posts = [];
  try {
    await dbConnect();
    posts = await Post.find({ status: 'published' }).select('slug updatedAt').lean();
  } catch (error) {
    console.error('Sitemap DB error:', error);
  }

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.updatedAt || new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
