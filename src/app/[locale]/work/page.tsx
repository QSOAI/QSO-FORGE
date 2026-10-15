import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/types';

interface WorkIndexProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: WorkIndexProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  return {
    title: messages.work.index.headline,
    description: messages.work.index.subheadline,
  };
}

export default async function WorkIndex({ params }: WorkIndexProps) {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-ledger-dark" aria-labelledby="work-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 id="work-heading" className="heading-lg text-ledger-light kinetic font-serif">
              {messages.work.index.headline}
            </h1>
            <p className="mt-4 body-md text-ledger-muted">
              {messages.work.index.subheadline}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/work/yzland`}
              className="card overflow-hidden block hover:shadow-xl transition-shadow"
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-ledger-muted rounded-full">
                        {messages.work.yzland.industry}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-ledger-evidence/10 text-ledger-evidence rounded-full">
                        {messages.work.yzland.tag}
                      </span>
                    </div>
                    <h2 className="heading-lg text-ledger-light mb-4">
                      {(messages.work.yzland as any).headline ?? (messages.work.yzland as any).title}
                    </h2>
                    <p className="body-md text-ledger-muted mb-6">
                      {(messages.work.yzland as any).description ?? messages.homepage.caseStudy.yzland.description}
                    </p>
                    <p className="text-sm text-ledger-evidence bg-ledger-evidence/5 px-4 py-2 rounded-md inline-block">
                      {(messages.work.yzland as any).outcomeStatus ?? messages.homepage.caseStudy.yzland.outcomeStatus}
                    </p>
                  </div>
                  <div className="shrink-0 mt-4 lg:mt-0 lg:ms-6">
                    <span className="btn-secondary inline-flex">
                      {(messages.work as any).viewProject ?? 'View Project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="mt-12 p-8 bg-ledger-dark border border-ledger-border rounded-lg text-center">
              <svg className="w-12 h-12 mx-auto text-ledger-muted mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="heading-sm text-ledger-light mb-2">More Case Studies Coming Soon</h3>
              <p className="body-md text-ledger-muted max-w-md mx-auto">
                {messages.work.index.emptyState}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}