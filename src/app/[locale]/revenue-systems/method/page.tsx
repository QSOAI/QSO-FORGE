// TODO: PC-AUDIT-003 eight-domain future — 6 confirmed for now — do not publish 8 until reconciliation
// CONFIRMED 6: Website / Mobile / Conversion / SEO / Trust / Booking (src/messages/en.json + services/diagnose). No 7th/8th invented.
import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/types';

interface MethodPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: MethodPageProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  const mp = (messages as any).methodPage;
  return {
    title: mp.heroHeadline,
    description: mp.heroSubheadline,
    openGraph: {
      type: 'website',
      title: mp.heroHeadline,
      description: mp.heroSubheadline,
      url: `/${locale}/revenue-systems/method`,
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
      title: mp.heroHeadline,
      description: mp.heroSubheadline,
      images: ['/images/hero-qso-forge.jpg'],
    },
  };
}

const DOMAIN_KEYS = ['website', 'mobile', 'conversion', 'seo', 'trust', 'booking'] as const;

export default async function MethodPage({ params }: MethodPageProps) {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  const mp = (messages as any).methodPage;
  const audit = (messages as any).audit;
  const diagnose = (messages as any).services?.diagnose;

  return (
    <div className="min-h-screen bg-ledger-dark">
      <section className="section-padding" aria-labelledby="method-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="method-hero-heading" className="heading-xl text-ledger-light kinetic font-serif">
              {mp.heroHeadline}
            </h1>
            <p className="mt-4 body-lg text-ledger-muted">
              {mp.heroSubheadline}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-ledger-border" aria-labelledby="method-steps-heading">
        <div className="container-custom">
          <h2 id="method-steps-heading" className="heading-md text-ledger-light mb-8 text-center kinetic font-serif">
            Four steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
            {mp.steps.map((step: { label: string; oneLiner: string; detail: string }, i: number) => (
              <article key={step.label} className="bg-ledger-dark p-6">
                <div className="text-xs font-mono tracking-wide uppercase text-ledger-accent mb-3">
                  {i + 1}. {step.label}
                </div>
                <p className="body-md text-ledger-light mb-2">{step.oneLiner}</p>
                <p className="body-sm text-ledger-muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="method-domains-heading">
        <div className="container-custom max-w-5xl">
          <h2 id="method-domains-heading" className="heading-md text-ledger-light mb-4 text-center kinetic font-serif">
            {mp.domainsTitle}
          </h2>
          <p className="body-md text-ledger-muted text-center mb-10 max-w-2xl mx-auto">
            {mp.domainsSubheadline}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
            {DOMAIN_KEYS.map((key) => (
              <div key={key} className="bg-ledger-dark p-6">
                <h3 className="heading-sm text-ledger-light font-serif mb-2">
                  {audit.dimensions[key]}
                </h3>
                <p className="text-sm font-mono text-ledger-muted mb-3">
                  Score <span className="score-numeral text-ledger-light">0–10</span> {audit.scores.outOf} · Total <span className="score-numeral text-ledger-light">/60</span>
                </p>
                <p className="body-sm text-ledger-muted">
                  What we check, how we score, and what you receive — from existing diagnose content, no new metrics.
                </p>
              </div>
            ))}
          </div>
          {diagnose && (
            <p className="mt-6 text-sm font-mono text-ledger-muted text-center">
              {diagnose.deliverables[0]}
            </p>
          )}
        </div>
      </section>

      <section className="section-padding border-y border-ledger-border" aria-labelledby="method-deliverables-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="method-deliverables-heading" className="heading-md text-ledger-light mb-6 kinetic font-serif">
            {mp.deliverablesTitle}
          </h2>
          <ul className="space-y-3">
            {mp.deliverables.map((item: string, i: number) => (
              <li key={i} className="flex gap-3 p-4 bg-ledger-dark border border-ledger-border rounded-sm">
                <span className="text-ledger-accent font-mono">→</span>
                <span className="body-md text-ledger-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="method-craft-heading">
        <div className="container-custom max-w-3xl">
          <div className="border border-ledger-evidence/20 bg-ledger-evidence/5 rounded-sm p-6">
            <h2 id="method-craft-heading" className="heading-sm text-ledger-evidence font-mono tracking-wide uppercase text-sm mb-2">
              {mp.craftScoreTitle}
            </h2>
            <p className="body-md text-ledger-light/80">{mp.craftScoreBody}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ledger-dark border-t border-ledger-border" aria-labelledby="method-cta-heading">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 id="method-cta-heading" className="heading-lg text-ledger-light kinetic font-serif">
            {mp.ctaTitle}
          </h2>
          <p className="mt-4 body-md text-ledger-muted">
            {mp.ctaBody}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-primary w-full sm:w-auto">
              {mp.ctaPrimary}
            </Link>
            <Link href={`/${locale}/intelligence`} className="btn-secondary w-full sm:w-auto">
              {mp.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
