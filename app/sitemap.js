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
