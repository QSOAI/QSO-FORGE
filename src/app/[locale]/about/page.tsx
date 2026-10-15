import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import type { Locale } from '@/types';

interface AboutProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: AboutProps): Promise<Metadata> {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);
  return {
    title: messages.about.headline,
    description: messages.about.subheadline,
  };
}

export default async function AboutPage({ params }: AboutProps) {
  const locale = (params as any)?.locale ?? 'en';
  const messages = await getMessages(locale);

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-ledger-dark" aria-labelledby="about-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 id="about-heading" className="heading-lg text-ledger-light kinetic font-serif">
              {messages.about.headline}
            </h1>
            <p className="mt-4 body-lg text-ledger-muted">
              {messages.about.subheadline}
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="body-lg text-ledger-muted">
              {messages.about.positioning}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="method-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="method-heading" className="heading-md text-ledger-light text-center mb-8">
            {messages.about.method.headline}
          </h2>
          <div className="prose prose-primary max-w-none text-center">
            <p className="body-lg text-ledger-muted">
              {messages.about.method.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ledger-dark" aria-labelledby="values-heading">
        <div className="container-custom">
          <h2 id="values-heading" className="heading-md text-ledger-light text-center mb-16">
            How We Operate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {messages.about.values.map((value: { title: string; description: string }, index: number) => (
              <article key={value.title} className="p-6 bg-ledger-dark border border-ledger-border rounded-lg animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="heading-sm text-ledger-light mb-3">
                  {value.title}
                </h3>
                <p className="body-md text-ledger-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ledger-dark" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="heading-lg text-white">
            Want to work with us?
          </h2>
          <p className="mt-4 body-lg text-ledger-muted max-w-2xl mx-auto">
            Start with a Revenue Audit. We'll diagnose the leakage and outline the opportunity.
          </p>
          <div className="mt-10">
            <a href={`/${locale}/contact`} className="btn-primary bg-ledger-dark text-ledger-light hover:bg-primary-100">
              Request a Revenue Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}