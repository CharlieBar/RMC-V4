import type { MetadataRoute } from 'next';
import { PILLAR_SLUGS, DETAIL_MAP } from '@/lib/service-map';
import { CONDITION_MAP } from '@/lib/condition-map';
import { getAllArticles } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.randmedicalcenter.com';

  // Static routes
  const staticRoutes = [
    '/',
    '/personal-injury',
    '/work-injury',
    '/services',
    '/conditions',
    '/blog',
    '/about',
    '/about/mission',
    '/about/our-team',
    '/about/facility-tour',
    '/about/awards',
    '/contact',
    '/patient-resources',
    '/patient-resources/insurance',
    '/patient-resources/patient-forms',
    '/patient-resources/faq',
    '/patient-resources/what-to-expect',
    '/patient-resources/patient-portal',
    '/careers',
  ];

  // Service pillar routes
  const pillarRoutes = PILLAR_SLUGS.map((p) => `/services/${p}`);

  // Service detail routes
  const detailRoutes = Object.entries(DETAIL_MAP).flatMap(([pillar, details]) =>
    details.map((detail) => `/services/${pillar}/${detail}`)
  );

  // Condition routes
  const conditionRoutes = Object.entries(CONDITION_MAP).flatMap(([cat, conds]) =>
    conds.map((cond) => `/conditions/${cat}/${cond}`)
  );

  // Blog article routes
  const articles = getAllArticles();
  const articleRoutes = articles.map((a) => `/blog/${a.slug}`);

  // Blog category routes
  const categoryRoutes = [
    '/blog/category/pain-management',
    '/blog/category/injury-recovery',
    '/blog/category/workers-compensation',
    '/blog/category/physical-therapy',
    '/blog/category/prevention-wellness',
    '/blog/category/patient-resources',
  ];

  const allRoutes = [
    ...staticRoutes,
    ...pillarRoutes,
    ...detailRoutes,
    ...conditionRoutes,
    ...articleRoutes,
    ...categoryRoutes,
  ];

  return allRoutes.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: (url === '/'
      ? 'weekly'
      : url.startsWith('/blog')
      ? 'monthly'
      : 'monthly') as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority:
      url === '/'
        ? 1.0
        : url === '/personal-injury' || url === '/work-injury'
        ? 0.95
        : url === '/services' || url === '/conditions'
        ? 0.9
        : url.startsWith('/blog')
        ? 0.7
        : 0.8,
  }));
}
