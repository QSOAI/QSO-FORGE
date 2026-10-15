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
    learnMore?: string;
  };
}

export function ServicesOverview({ locale, messages }: ServicesOverviewProps) {
  return (
    <section className="section-padding bg-ledger-dark" aria-labelledby="services-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="services-heading" className="heading-lg text-ledger-light kinetic">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-ledger-light/70">
            {messages.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
          {messages.items.map((service, index) => (
            <article
              key={service.id}
              className="group bg-ledger-dark p-6 flex flex-col hover:bg-ledger-light/[0.02] transition-colors duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3">
                <span className="text-xs font-mono font-medium tracking-wide uppercase text-ledger-accent">
                  {service.title}
                </span>
              </div>
              <h3 className="heading-sm text-ledger-light mb-3 font-serif">
                {service.name}
              </h3>
              <p className="body-sm text-ledger-muted flex-1 mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between mb-4 pt-4 border-t border-ledger-border">
                <span className="text-lg font-mono font-medium tracking-tight text-ledger-light score-numeral">
                  {service.price}
                </span>
              </div>
              <Link
                href={service.href}
                className="btn-secondary w-full text-center"
              >
                {messages.learnMore ?? 'Learn more'}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
