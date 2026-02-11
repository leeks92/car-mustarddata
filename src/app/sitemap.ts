import { MetadataRoute } from 'next';
import { CALCULATOR_PAGES, GUIDE_PAGES, INFO_PAGES, EV_CHARGER_PAGES, MODEL_PAGES, MODEL_DETAIL_PAGES, TIRE_DETAIL_PAGES, BASE_URL } from '@/lib/urls';
import {
  getRegions,
  sidoToSlug,
  sigunguToSlug,
  getAllChargerIds,
} from '@/lib/ev-data';

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

  const guidePages: MetadataRoute.Sitemap = GUIDE_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const infoPages: MetadataRoute.Sitemap = INFO_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // EV charger static top-level pages
  const evChargerTopPages: MetadataRoute.Sitemap = EV_CHARGER_PAGES.map(
    (page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  );

  // EV charger dynamic pages (sigungu + station)
  const regions = getRegions();
  const evChargerSigunguPages: MetadataRoute.Sitemap = [];
  for (const region of regions) {
    for (const sg of region.sigungu) {
      evChargerSigunguPages.push({
        url: `${BASE_URL}/ev-charger/${sidoToSlug(region.sido)}/${sigunguToSlug(sg.name, sidoToSlug(region.sido))}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      });
    }
  }

  const evChargerStationPages: MetadataRoute.Sitemap = getAllChargerIds().map(
    (id) => ({
      url: `${BASE_URL}/ev-charger/station/${id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })
  );

  const modelPages: MetadataRoute.Sitemap = MODEL_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const modelDetailPages: MetadataRoute.Sitemap = MODEL_DETAIL_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const tireDetailPages: MetadataRoute.Sitemap = TIRE_DETAIL_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...calculatorPages,
    ...guidePages,
    ...infoPages,
    ...modelPages,
    ...modelDetailPages,
    ...tireDetailPages,
    ...evChargerTopPages,
    ...evChargerSigunguPages,
    ...evChargerStationPages,
  ];
}
