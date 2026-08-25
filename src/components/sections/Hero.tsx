import Link from 'next/link';
import type { Locale } from '@/types';

interface HeroProps {
  locale: Locale;
  messages: {
    heroHeadline: string;
    heroSubheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

export function Hero({ locale, messages }: HeroProps) {
  return (
    <section className="relative section-padding overflow-hidden" aria-labelledby="hero-heading">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="heading-xl text-primary-950 animate-fade-in">
            {messages.heroHeadline}
          </h1>
          <p className="mt-6 body-lg text-primary-600 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {messages.heroSubheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link href={`/${locale}/contact`} className="btn-primary w-full sm:w-auto">
              {messages.ctaPrimary}
            </Link>
            <Link href={`/${locale}/work`} className="btn-secondary w-full sm:w-auto">
              {messages.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-900/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}