import Link from 'next/link';
import type { Locale } from '@/types';

interface ServicesOverviewProps {
  locale: Locale;
  messages: {
    headline: string;
    subheadline: string;
    items: Array<{
      id: string;
      title: string;
      name: string;
      description: string;
      price: string;
      href: string;
    }>;
    flashAuditNote?: string;
  };
}

export function ServicesOverview({ locale, messages }: ServicesOverviewProps) {
  return (
    <section className="section-padding bg-primary-50" aria-labelledby="services-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="services-heading" className="heading-lg text-primary-950">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-primary-600">
            {messages.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {messages.items.map((service, index) => (
            <article
              key={service.id}
              className="group card p-6 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3">
                <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">
                  {service.title}
                </span>
              </div>
              <h3 className="heading-sm text-primary-950 mb-3">
                {service.name}
              </h3>
              <p className="body-sm text-primary-600 flex-1 mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between mb-4 pt-4 border-t border-primary-100">
                <span className="text-lg font-medium text-primary-900">
                  {service.price}
                </span>
              </div>
              <Link
                href={service.href}
                className="btn-secondary w-full text-center group-hover:bg-primary-200"
              >
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {messages.flashAuditNote && (
          <p className="mt-10 text-center text-sm text-primary-500">
            {messages.flashAuditNote}
          </p>
        )}
      </div>
    </section>
  );
}