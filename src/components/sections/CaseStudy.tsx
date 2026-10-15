import type { Locale } from '@/types';

interface CaseStudyProps {
  locale: Locale;
  messages: {
    headline: string;
    subheadline: string;
    yzland: {
      title: string;
      industry: string;
      tag: string;
      outcomeStatus: string;
      description: string;
      href: string;
    };
    viewLive?: string;
  };
}

export function CaseStudy({ locale, messages }: CaseStudyProps) {
  const { yzland } = messages;

  return (
    <section className="section-padding bg-ledger-dark border-y border-ledger-border" aria-labelledby="casestudy-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="casestudy-heading" className="heading-lg text-ledger-light kinetic">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-ledger-muted">
            {messages.subheadline}
          </p>
        </div>

        <article className="border border-ledger-border rounded-sm overflow-hidden max-w-4xl mx-auto bg-ledger-dark">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-ledger-dark border border-ledger-border text-ledger-muted font-mono rounded-full">
                    {yzland.industry}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-ledger-evidence/10 text-ledger-evidence border border-ledger-evidence/20 font-mono rounded-full">
                    {yzland.tag}
                  </span>
                </div>
                <h3 className="heading-lg text-ledger-light mb-4">
                  {yzland.title}
                </h3>
                <p className="body-md text-ledger-muted mb-6">
                  {yzland.description}
                </p>
                <p className="text-sm text-ledger-evidence bg-ledger-evidence/10 border border-ledger-evidence/20 px-4 py-2 rounded-md inline-block">
                  {yzland.outcomeStatus}
                </p>
              </div>
              <a
                href={yzland.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary whitespace-nowrap mt-4 lg:mt-0 lg:ms-6 shrink-0"
              >
                {messages.viewLive ?? 'View Live Project'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}