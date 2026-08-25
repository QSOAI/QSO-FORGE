import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n';

const baseUrl = 'https://qsoforge.com';

const routes = [
  '',
  '/services',
  '/services/diagnose',
  '/services/build',
  '/services/convert',
  '/services/automate',
  '/work',
  '/work/yzland',
  '/about',
  '/contact',
  '/audit',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const url = `${baseUrl}/${locale}${route}`;
      const isDefaultLocale = locale === defaultLocale;
      const alternates: Record<string, string> = {};

      for (const l of locales) {
        alternates[l] = `${baseUrl}/${l}${route}`;
      }
      alternates['x-default'] = `${baseUrl}/${defaultLocale}${route}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route.includes('services') ? 0.8 : 0.6,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return entries;
}