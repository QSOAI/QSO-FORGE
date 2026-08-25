import Link from 'next/link';
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
  };
}

export function CaseStudy({ locale, messages }: CaseStudyProps) {
  const { yzland } = messages;

  return (
    <section className="section-padding" aria-labelledby="casestudy-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="casestudy-heading" className="heading-lg text-primary-950">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-primary-600">
            {messages.subheadline}
          </p>
        </div>

        <article className="card overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                    {yzland.industry}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                    {yzland.tag}
                  </span>
                </div>
                <h3 className="heading-lg text-primary-950 mb-4">
                  {yzland.title}
                </h3>
                <p className="body-md text-primary-600 mb-6">
                  {yzland.description}
                </p>
                <p className="text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-md inline-block">
                  {yzland.outcomeStatus}
                </p>
              </div>
              <Link
                href={yzland.href}
                className="btn-primary whitespace-nowrap mt-4 lg:mt-0 lg:ms-6 shrink-0"
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}