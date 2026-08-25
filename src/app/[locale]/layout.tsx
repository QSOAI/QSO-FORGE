import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale, getMessages, isRtl } from '@/lib/i18n';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/ui/StructuredData';
import type { Locale } from '@/types';

export const dynamic = 'force-dynamic';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? defaultLocale;
  const messages = await getMessages(locale);

  return {
    title: {
      default: 'QSO FORGE — Digital Revenue Systems',
      template: '%s | QSO FORGE',
    },
    description: messages.homepage.problem.body,
    metadataBase: new URL('https://qsoforge.com'),
    openGraph: {
      type: 'website',
      locale,
      url: `/${locale}`,
      siteName: 'QSO FORGE',
      title: 'QSO FORGE — Digital Revenue Systems',
      description: messages.common.heroSubheadline,
      alternateLocale: locales.filter((l) => l !== locale),
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = (params as any)?.locale ?? defaultLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <LocalBusinessSchema />
      <Header locale={locale} messages={messages.common} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} messages={messages.common} />
    </>
  );
}
