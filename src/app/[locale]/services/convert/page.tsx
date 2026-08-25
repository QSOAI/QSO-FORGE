import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/types';

interface ServicePageProps {
  params: Promise<{ locale: Locale }>;
}

function getServiceMessages(messages: any, service: string) {
  return messages.services[service];
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const svc = getServiceMessages(messages, 'convert');
  return {
    title: svc.headline,
    description: svc.subheadline,
  };
}

export default async function ConvertPage({ params }: ServicePageProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const svc = getServiceMessages(messages, 'convert');

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-50" aria-labelledby="convert-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">03 — CONVERT</span>
            <h1 id="convert-heading" className="mt-2 heading-lg text-primary-950">
              {svc.headline}
            </h1>
            <p className="mt-4 body-lg text-primary-600">
              {svc.subheadline}
            </p>
            <p className="mt-6 text-xl font-medium text-primary-900">
              {svc.price}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="deliverables-heading">
        <div className="container-custom">
          <h2 id="deliverables-heading" className="heading-md text-primary-950 mb-8">What You Receive</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {svc.deliverables.map((item: string, i: number) => (
              <li key={i} className="flex gap-4 p-6 bg-white border border-primary-200 rounded-lg animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="body-md text-primary-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary-950" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="heading-lg text-white">
            Ready to turn traffic into pipeline?
          </h2>
          <p className="mt-4 body-lg text-primary-300 max-w-2xl mx-auto">
            Landing pages, funnels, booking systems, lead qualification, A/B testing infrastructure, CRM integration. Systems that convert.
          </p>
          <div className="mt-10">
            <Link href={`/${locale}/contact`} className="btn-primary bg-white text-primary-900 hover:bg-primary-100">
              {svc.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}