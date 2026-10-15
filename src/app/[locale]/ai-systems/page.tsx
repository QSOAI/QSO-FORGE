import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/types';

interface AiSystemsProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: AiSystemsProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  const ai = (messages as any).aiSystems;
  return {
    title: ai.heroHeadline,
    description: ai.heroSubheadline,
    openGraph: {
      type: 'website',
      title: ai.heroHeadline,
      description: ai.heroSubheadline,
      url: `/${locale}/ai-systems`,
      siteName: 'QSO FORGE',
      images: [
        {
          url: '/images/hero-qso-forge.jpg',
          width: 1280,
          height: 720,
          alt: 'QSO FORGE — precision-engineered revenue systems',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ai.heroHeadline,
      description: ai.heroSubheadline,
      images: ['/images/hero-qso-forge.jpg'],
    },
  };
}

export default async function AiSystemsPage({ params }: AiSystemsProps) {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  const ai = (messages as any).aiSystems;

  return (
    <div className="min-h-screen bg-ledger-dark">
      <section className="section-padding" aria-labelledby="ai-hero-heading">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <p className="evidence-label mb-4">{ai.heroBadge}</p>
          <h1 id="ai-hero-heading" className="heading-xl text-ledger-light kinetic font-serif">
            {ai.heroHeadline}
          </h1>
          <p className="mt-4 body-lg text-ledger-muted">
            {ai.heroSubheadline}
          </p>
        </div>
      </section>

      <section className="section-padding border-y border-ledger-border" aria-labelledby="ai-roles-heading">
        <div className="container-custom max-w-5xl">
          <h2 id="ai-roles-heading" className="heading-md text-ledger-light mb-8 text-center kinetic font-serif">
            {ai.rolesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
            {ai.roles.map((role: { name: string; desc: string }) => (
              <div key={role.name} className="bg-ledger-dark p-6">
                <h3 className="heading-sm text-ledger-light font-serif mb-2">{role.name}</h3>
                <p className="body-sm text-ledger-muted">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="ai-loop-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="ai-loop-heading" className="heading-md text-ledger-light mb-4 kinetic font-serif">
            {ai.loopTitle}
          </h2>
          <p className="body-md text-ledger-muted mb-3">{ai.loopBody}</p>
          <p className="text-sm font-mono text-ledger-evidence">{ai.vectorsNote}</p>
        </div>
      </section>

      <section className="section-padding border-y border-ledger-border" aria-labelledby="ai-example-heading">
        <div className="container-custom max-w-3xl">
          <div className="border border-ledger-evidence/20 bg-ledger-evidence/5 rounded-sm p-6">
            <h2 id="ai-example-heading" className="heading-sm text-ledger-evidence font-mono tracking-wide uppercase text-sm mb-2">
              {ai.exampleTitle}
            </h2>
            <p className="body-md text-ledger-light/80">{ai.exampleBody}</p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="ai-related-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="ai-related-heading" className="heading-md text-ledger-light mb-6 kinetic font-serif">
            {ai.subsectionsTitle}
          </h2>
          <ul className="space-y-3">
            {ai.subsections.map((sub: { name: string; desc: string }) => (
              <li key={sub.name} className="flex gap-3 p-4 bg-ledger-dark border border-ledger-border rounded-sm">
                <span className="text-ledger-accent font-mono">→</span>
                <div>
                  <p className="font-mono text-ledger-light">{sub.name}</p>
                  <p className="body-sm text-ledger-muted mt-1">{sub.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-ledger-dark border-t border-ledger-border" aria-labelledby="ai-cta-heading">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-primary w-full sm:w-auto">
              {ai.ctaPrimary}
            </Link>
            <Link href={`/${locale}/revenue-systems/method`} className="btn-secondary w-full sm:w-auto">
              {ai.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
