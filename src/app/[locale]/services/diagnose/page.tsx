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
  const svc = getServiceMessages(messages, 'diagnose');
  return {
    title: svc.headline,
    description: svc.subheadline,
  };
}

export default async function DiagnosePage({ params }: ServicePageProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const svc = getServiceMessages(messages, 'diagnose');
  const flash = svc.flashAudit;

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-50" aria-labelledby="diagnose-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">01 — DIAGNOSE</span>
            <h1 id="diagnose-heading" className="mt-2 heading-lg text-primary-950">
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

      <section className="section-padding bg-primary-50" aria-labelledby="process-heading">
        <div className="container-custom">
          <h2 id="process-heading" className="heading-md text-primary-950 text-center mb-12">Our Process</h2>
          <ol className="max-w-3xl mx-auto space-y-6">
            {svc.process.map((step: string, i: number) => (
              <li key={i} className="flex gap-4 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-600 text-white flex items-center justify-center font-medium text-lg">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="heading-sm text-primary-950">Step {i + 1}</h3>
                  <p className="body-md text-primary-600 mt-1">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-amber-50 border-y border-amber-200" aria-labelledby="flash-heading">
        <div className="container-custom max-w-3xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 bg-white border border-amber-200 rounded-lg">
            <div>
              <h2 id="flash-heading" className="heading-sm text-primary-950">{flash.label}</h2>
              <p className="mt-2 body-md text-primary-600">{flash.description}</p>
            </div>
            <Link href={`/${locale}/contact`} className="btn-primary whitespace-nowrap mt-4 md:mt-0">
              {flash.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-950" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="heading-lg text-white">
            Ready to find what's leaking?
          </h2>
          <p className="mt-4 body-lg text-primary-300 max-w-2xl mx-auto">
            Request a Revenue Audit. We'll score six dimensions, identify the leakage, and deliver a prioritized action plan.
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