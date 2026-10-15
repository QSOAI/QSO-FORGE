import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/types';

interface IntelligenceProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: IntelligenceProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  const intel = (messages as any).intelligence;
  return {
    title: intel.heroHeadline,
    description: intel.heroSubheadline,
    openGraph: {
      type: 'website',
      title: intel.heroHeadline,
      description: intel.heroSubheadline,
      url: `/${locale}/intelligence`,
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
      title: intel.heroHeadline,
      description: intel.heroSubheadline,
      images: ['/images/hero-qso-forge.jpg'],
    },
  };
}

export default async function IntelligencePage({ params }: IntelligenceProps) {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  const intel = (messages as any).intelligence;

  return (
    <div className="min-h-screen bg-ledger-dark">
      <section className="section-padding" aria-labelledby="intel-hero-heading">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <p className="evidence-label mb-4">{intel.heroBadge}</p>
          <h1 id="intel-hero-heading" className="heading-xl text-ledger-light kinetic font-serif">
            {intel.heroHeadline}
          </h1>
          <p className="mt-4 body-lg text-ledger-muted">
            {intel.heroSubheadline}
          </p>
          <p className="mt-4 text-sm font-mono text-ledger-evidence">
            {intel.stagingNote}
          </p>
        </div>
      </section>

      <section className="section-padding border-y border-ledger-border" aria-labelledby="intel-not-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="intel-not-heading" className="heading-md text-ledger-light mb-6 kinetic font-serif">
            {intel.notTitle}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
            {intel.notList.map((item: string, i: number) => (
              <li key={i} className="bg-ledger-dark p-4 body-md text-ledger-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="intel-table-heading">
        <div className="container-custom max-w-6xl">
          <h2 id="intel-table-heading" className="heading-md text-ledger-light mb-4 text-center kinetic font-serif">
            {intel.tableTitle}
          </h2>
          <p className="body-sm text-ledger-muted text-center mb-8 max-w-2xl mx-auto">
            {intel.tableNote}
          </p>
          <div className="overflow-x-auto border border-ledger-border rounded-sm">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="bg-ledger-dark border-b border-ledger-border">
                  {intel.columns.map((col: string) => (
                    <th key={col} className="px-3 py-3 text-left text-ledger-muted font-medium whitespace-nowrap">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {intel.rows.map((row: Record<string, string>, i: number) => (
                  <tr key={i} className="border-b border-ledger-border last:border-0 hover:bg-ledger-light/[0.02]">
                    <td className="px-3 py-3 text-ledger-light">{row.startup}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.sector}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.city}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.product}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.traction}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.funding}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.sourceUrl}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.lastVerified}</td>
                    <td className="px-3 py-3 text-ledger-muted">{row.fitNote}</td>
                    <td className="px-3 py-3">
                      <span className="evidence-label">{row.verificationFlag}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-ledger-border" aria-labelledby="intel-policy-heading">
        <div className="container-custom max-w-3xl space-y-8">
          <div>
            <h2 id="intel-policy-heading" className="heading-md text-ledger-light mb-3 kinetic font-serif">
              {intel.verificationTitle}
            </h2>
            <p className="body-md text-ledger-muted">{intel.verificationBody}</p>
          </div>
          <div>
            <h2 className="heading-md text-ledger-light mb-3 kinetic font-serif">{intel.salesTitle}</h2>
            <p className="body-md text-ledger-muted">{intel.salesBody}</p>
          </div>
          <div>
            <h2 className="heading-md text-ledger-light mb-3 kinetic font-serif">{intel.buyersTitle}</h2>
            <p className="body-md text-ledger-muted">{intel.buyersBody}</p>
          </div>
          <div>
            <h2 className="heading-md text-ledger-light mb-3 kinetic font-serif">{intel.economicsTitle}</h2>
            <p className="body-md text-ledger-muted">{intel.economicsBody}</p>
            <p className="mt-3 text-lg font-mono text-ledger-light">{intel.pricingLine}</p>
          </div>
          <div className="border border-ledger-evidence/20 bg-ledger-evidence/5 rounded-sm p-6">
            <p className="body-md text-ledger-light/80">{intel.aiRole}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ledger-dark" aria-labelledby="intel-cta-heading">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-primary w-full sm:w-auto">
              {intel.ctaPrimary}
            </Link>
            <Link href={`/${locale}/contact`} className="btn-secondary w-full sm:w-auto">
              {intel.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
