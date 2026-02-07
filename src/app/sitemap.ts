import { MetadataRoute } from 'next';
import { CALCULATOR_PAGES, BASE_URL } from '@/lib/urls';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  const calculatorPages: MetadataRoute.Sitemap = CALCULATOR_PAGES.map(
    (page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })
  );

  return [...staticPages, ...calculatorPages];
}
