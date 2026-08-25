import { getMessages } from '@/lib/i18n';
import { Metadata } from 'next';
import type { Locale } from '@/types';

interface YZLandProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: YZLandProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const yzland = messages.work.yzland;
  return {
    title: `${(yzland as any).headline ?? (yzland as any).title} — ${yzland.tag}`,
    description: (yzland as any).description ?? yzland.challenge,
    openGraph: {
      title: `${(yzland as any).headline ?? (yzland as any).title} — ${yzland.tag}`,
      description: (yzland as any).description ?? yzland.challenge,
    },
  };
}

export default async function YZLandPage({ params }: YZLandProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const yzland = messages.work.yzland;

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-primary-50" aria-labelledby="yzland-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-primary-500">
                <li>
                  <a href={`/${locale}`} className="hover:text-primary-700 transition-colors">Home</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <a href={`/${locale}/work`} className="hover:text-primary-700 transition-colors">Work</a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-primary-900 font-medium">{(yzland as any).headline ?? (yzland as any).title}</li>
              </ol>
            </nav>

            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                  {yzland.industry}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                  {yzland.tag}
                </span>
              </div>
              <h1 id="yzland-heading" className="heading-xl text-primary-950">
                {(yzland as any).headline ?? (yzland as any).title}
              </h1>
              <p className="mt-4 text-amber-700 bg-amber-50 px-4 py-2 rounded-md inline-block">
                {yzland.outcomeStatus}
              </p>
            </header>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="challenge-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="challenge-heading" className="heading-md text-primary-950 mb-6">The Challenge</h2>
          <div className="prose prose-primary max-w-none">
            <p className="body-lg text-primary-600">{yzland.challenge}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50" aria-labelledby="approach-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="approach-heading" className="heading-md text-primary-950 mb-6">Our Approach</h2>
          <div className="prose prose-primary max-w-none">
            <p className="body-lg text-primary-600">{yzland.approach}</p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="outcome-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="outcome-heading" className="heading-md text-primary-950 mb-6">Outcome</h2>
          <div className="prose prose-primary max-w-none">
            <p className="body-lg text-primary-600">{yzland.outcome}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-amber-50 border-y border-amber-200" aria-labelledby="services-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="services-heading" className="heading-md text-primary-950 mb-6">Services Delivered</h2>
          <ul className="flex flex-wrap gap-3">
            {yzland.services.map((service: string, i: number) => (
              <li key={i} className="px-4 py-2 bg-white border border-primary-200 text-primary-700 rounded-full text-sm">
                {service}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-amber-800">
            {yzland.permissionNote}
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-950" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="heading-lg text-white">
            Have a project that needs strategy, not just execution?
          </h2>
          <p className="mt-4 body-lg text-primary-300 max-w-2xl mx-auto">
            Let's diagnose the opportunity and build a digital revenue system that works.
          </p>
          <div className="mt-10">
            <a href={`/${locale}/contact`} className="btn-primary bg-white text-primary-900 hover:bg-primary-100">
              Request a Revenue Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}