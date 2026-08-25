import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/types';

interface ServicesIndexProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ServicesIndexProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.services.index.headline,
    description: messages.services.index.subheadline,
  };
}

export default async function ServicesIndex({ params }: ServicesIndexProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const { items } = messages.homepage.services;

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-50" aria-labelledby="services-index-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 id="services-index-heading" className="heading-lg text-primary-950">
              {messages.services.index.headline}
            </h1>
            <p className="mt-4 body-md text-primary-600">
              {messages.services.index.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((service: { id: string; title: string; name: string; description: string; price: string; href: string }, index: number) => (
              <article key={service.id} className="card p-6 flex flex-col animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-3">
                  <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">
                    {service.title}
                  </span>
                </div>
                <h2 className="heading-sm text-primary-950 mb-3">
                  {service.name}
                </h2>
                <p className="body-sm text-primary-600 flex-1 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-primary-100">
                  <span className="text-lg font-medium text-primary-900">
                    {service.price}
                  </span>
                </div>
                <Link href={service.href} className="btn-secondary w-full text-center group-hover:bg-primary-200">
                  View Details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-primary-500">
            {messages.services.index.flashAuditNote}
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-950" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="heading-lg text-white">
            Not sure where to start?
          </h2>
          <p className="mt-4 body-lg text-primary-300 max-w-2xl mx-auto">
            The Revenue Audit is the entry point for every engagement. It tells us exactly what's broken and what to build first.
          </p>
          <div className="mt-10">
            <Link href={`/${locale}/contact`} className="btn-primary bg-white text-primary-900 hover:bg-primary-100">
              Request a Revenue Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}