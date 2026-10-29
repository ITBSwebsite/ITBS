import type { MetadataRoute } from 'next';
import { getBlogContent } from '@/lib/blog-content';

const siteUrl = 'https://infotechbusinesssolutions.com';

const routes: Array<{ path: string; priority: number }> = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.7 },
  { path: '/blogs', priority: 0.8 },
  { path: '/authors/itbs-editorial-team', priority: 0.5 },
  { path: '/community', priority: 0.5 },
  { path: '/contact', priority: 0.8 },
  { path: '/help', priority: 0.5 },
  { path: '/faq', priority: 0.5 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/cookies', priority: 0.3 },
  { path: '/services/seo', priority: 0.9 },
  { path: '/services/ecommerce-seo', priority: 0.8 },
  { path: '/services/seo-audits', priority: 0.8 },
  { path: '/services/seo-migration-services', priority: 0.8 },
  { path: '/services/content-marketing', priority: 0.8 },
  { path: '/services/aeo', priority: 0.7 },
  { path: '/services/generative-engine-optimisation', priority: 0.7 },
  { path: '/services/custom-web-development', priority: 0.8 },
  { path: '/services/ecommerce-development', priority: 0.8 },
  { path: '/services/web-development', priority: 0.7 },
  { path: '/services/wordpress-development', priority: 0.7 },
  { path: '/services/shopify-development', priority: 0.7 },
  { path: '/services/graphic-design', priority: 0.7 },
  { path: '/services/ui-ux-design', priority: 0.7 },
  { path: '/services/figma-design', priority: 0.6 },
  { path: '/services/app-design-services', priority: 0.6 },
  { path: '/services/ppc', priority: 0.8 },
  { path: '/services/paid-social-advertising', priority: 0.7 },
  { path: '/services/ai-automation', priority: 0.7 },
  { path: '/services/crm-lead-management', priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await getBlogContent();
  return [
    ...routes.map(({ path, priority }) => ({
      url: new URL(path, siteUrl).toString(),
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...posts.map((post) => ({
      url: new URL(`/blogs/${post.slug}`, siteUrl).toString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
