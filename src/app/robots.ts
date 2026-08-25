import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n';

const baseUrl = 'https://qsoforge.com';

export default function robots(): MetadataRoute.Robots {
  const disallowPaths = [
    '/audit/',
    '/api/',
    '/_next/',
    '/node_modules/',
    '/*.json$',
  ];

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: disallowPaths,
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}