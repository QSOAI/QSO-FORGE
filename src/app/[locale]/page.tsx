import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Method } from '@/components/sections/Method';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { WhoWeWorkWith } from '@/components/sections/WhoWeWorkWith';
import { Technology } from '@/components/sections/Technology';
import { CTA } from '@/components/sections/CTA';
import type { Locale } from '@/types';

interface HomepageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: HomepageProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);

  return {
    title: messages.common.heroHeadline,
    description: messages.common.heroSubheadline,
    openGraph: {
      type: "website",
      title: messages.common.heroHeadline,
      description: messages.common.heroSubheadline,
      url: `/${locale}`,
      siteName: "QSO FORGE",
      images: [
        {
          url: "/images/hero-qso-forge.jpg",
          width: 1280,
          height: 720,
          alt: "QSO FORGE — precision-engineered revenue systems",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.common.heroHeadline,
      description: messages.common.heroSubheadline,
      images: ["/images/hero-qso-forge.jpg"],
    },
  };
}

export default async function Homepage({ params }: HomepageProps) {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);

  return (
    <>
      <Hero locale={locale} messages={messages.common} />
      <Problem messages={messages.homepage.problem} />
      <Method messages={messages.homepage.method} />
      <ServicesOverview locale={locale} messages={{ ...messages.homepage.services, learnMore: (messages.services as any).learnMore }} />
      <CaseStudy locale={locale} messages={messages.homepage.caseStudy} />
      <WhoWeWorkWith messages={messages.homepage.whoWeWorkWith} />
      <Technology messages={messages.homepage.technology} />
      <CTA locale={locale} messages={messages.common} />
    </>
  );
}