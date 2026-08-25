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
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: HomepageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return {
    title: messages.common.heroHeadline,
    description: messages.common.heroSubheadline,
    openGraph: {
      title: messages.common.heroHeadline,
      description: messages.common.heroSubheadline,
    },
  };
}

export default async function Homepage({ params }: HomepageProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <>
      <Hero locale={locale} messages={messages.common} />
      <Problem messages={messages.homepage.problem} />
      <Method messages={messages.homepage.method} />
      <ServicesOverview locale={locale} messages={{ ...messages.homepage.services, flashAuditNote: (messages.services as any).index.flashAuditNote }} />
      <CaseStudy locale={locale} messages={messages.homepage.caseStudy} />
      <WhoWeWorkWith messages={messages.homepage.whoWeWorkWith} />
      <Technology messages={messages.homepage.technology} />
      <CTA locale={locale} messages={messages.common} />
    </>
  );
}