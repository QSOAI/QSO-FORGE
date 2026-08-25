import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import type { Locale } from '@/types';

interface AuditIndexProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: AuditIndexProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: 'Revenue Audit System',
    description: 'Internal tool for conducting Revenue & Conversion Audits. Six-dimension scoring, findings generation, and report export.',
  };
}

export default async function AuditIndex({ params }: AuditIndexProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-50" aria-labelledby="audit-heading">
        <div className="container-custom max-w-3xl">
          <h1 id="audit-heading" className="heading-lg text-primary-950 text-center mb-4">
            Revenue Audit System
          </h1>
          <p className="body-lg text-primary-600 text-center mb-12">
            Internal tool for conducting structured Revenue & Conversion Audits. Not a public calculator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="card p-6">
              <h2 className="heading-sm text-primary-950 mb-3">Scoring Dimensions</h2>
              <ul className="space-y-2">
                {Object.entries(messages.audit.dimensions).map(([key, label]) => (
                  <li key={key} className="flex justify-between py-2 border-b border-primary-100 last:border-0">
                    <span className="text-primary-700">{label as string}</span>
                    <span className="text-primary-400 font-mono">{messages.audit.scores.outOf}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-right font-medium text-primary-900">
                {messages.audit.scores.total}: <span className="font-mono">0 {messages.audit.scores.max}</span>
              </p>
            </article>

            <article className="card p-6">
              <h2 className="heading-sm text-primary-950 mb-3">Finding Structure</h2>
              <ul className="space-y-2">
                {Object.entries(messages.audit.finding).map(([key, label]) => (
                  <li key={key} className="flex gap-2 text-sm">
                    <span className="text-accent-600 font-mono">→</span>
                    <span className="text-primary-700">{label as string}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-primary-500">
                Impact labels: {Object.values(messages.audit.impactLabels).map(v => v as string).join(', ')}
              </p>
            </article>
          </div>

          <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="heading-sm text-amber-900 mb-2">Internal Use Only</h3>
            <p className="text-amber-800">
              This system is for QSO FORGE internal audit delivery. It produces typed JSON output for report generation.
              No public audit calculator is exposed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}