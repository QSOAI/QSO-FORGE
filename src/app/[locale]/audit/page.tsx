import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import type { Locale } from '@/types';

interface AuditIndexProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: AuditIndexProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  return {
    title: 'Revenue Audit System',
    description: 'Internal tool for conducting Revenue & Conversion Audits. Six-dimension scoring, findings generation, and report export.',
  };
}

export default async function AuditIndex({ params }: AuditIndexProps) {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);

  const dimensions = Object.entries(messages.audit.dimensions) as [string, string][];
  const findings = Object.entries(messages.audit.finding) as [string, string][];

  return (
    <div className="min-h-screen bg-ledger-dark">
      <section className="section-padding" aria-labelledby="audit-heading">
        <div className="container-custom max-w-5xl">
          <h1 id="audit-heading" className="heading-lg text-ledger-light text-center mb-4 kinetic">
            Revenue Audit System
          </h1>
          <p className="body-lg text-ledger-muted text-center mb-12 max-w-2xl mx-auto">
            Internal tool for conducting structured Revenue & Conversion Audits. Not a public calculator.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
            <article className="bg-ledger-dark p-6 lg:col-span-2">
              <h2 className="heading-sm text-ledger-light mb-6 font-serif">Scoring Dimensions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
                {dimensions.map(([key, label]) => (
                  <div key={key} className="bg-ledger-dark p-4 flex justify-between items-center">
                    <span className="text-sm font-mono tracking-wide text-ledger-light">{label as string}</span>
                    <span className="score-numeral text-ledger-muted text-sm">— {messages.audit.scores.outOf}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-right font-mono text-sm tracking-wide text-ledger-muted">
                {messages.audit.scores.total}: <span className="score-numeral text-ledger-light">0 {messages.audit.scores.max}</span>
              </p>
            </article>

            <article className="bg-ledger-dark p-6">
              <h2 className="heading-sm text-ledger-light mb-6 font-serif">Finding Structure</h2>
              <ul className="space-y-3">
                {findings.map(([key, label]) => (
                  <li key={key} className="flex gap-3 text-sm border-b border-ledger-border last:border-0 pb-3 last:pb-0">
                    <span className="text-ledger-accent font-mono">→</span>
                    <span className="text-ledger-light/80 font-mono tracking-wide">{label as string}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-mono">
                <span className="text-ledger-muted">Impact labels:</span>{' '}
                {Object.values(messages.audit.impactLabels).map((v, i, arr) => (
                  <span key={String(v)} className="evidence-label text-xs mr-1">
                    {v as string}
                  </span>
                ))}
              </p>
            </article>
          </div>

          <div className="mt-6 border border-ledger-evidence/20 bg-ledger-evidence/5 rounded-sm p-6">
            <h3 className="heading-sm text-ledger-evidence mb-2 font-mono tracking-wide uppercase text-sm">Internal Use Only</h3>
            <p className="text-ledger-light/70 text-sm leading-relaxed">
              This system is for QSO FORGE internal audit delivery. It produces typed JSON output for report generation.
              No public audit calculator is exposed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
