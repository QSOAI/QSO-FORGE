import Image from 'next/image';
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
    <section className="relative overflow-hidden bg-ledger-dark" aria-labelledby="hero-heading">
      <div className="absolute inset-0" dir="ltr" aria-hidden="true">
        <Image
          src="/images/hero-qso-forge.jpg"
          alt="QSO FORGE — precision-engineered revenue systems: dark industrial surface with calibrated circuit overlay and focal beacon, representing engineered precision"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-ledger-dark/70" />
        <div className="absolute inset-0 border border-ledger-border/20 rounded-sm m-4 sm:m-8 lg:m-12 pointer-events-none" />
      </div>

      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="heading-xl text-ledger-light kinetic">
            {messages.heroHeadline}
          </h1>
          <p className="mt-6 body-lg text-ledger-light/80 kinetic" style={{ transitionDelay: '100ms' } as any}>
            {messages.heroSubheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 kinetic" style={{ transitionDelay: '200ms' } as any}>
            <Link href={`/${locale}/contact`} className="btn-primary w-full sm:w-auto">
              {messages.ctaPrimary}
            </Link>
            <Link href={`/${locale}/work`} className="btn-secondary w-full sm:w-auto bg-ledger-dark/50 backdrop-blur-sm">
              {messages.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
